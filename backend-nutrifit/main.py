from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
import openai

app = Flask(__name__)

CORS(app)  # Enable CORS for all routes

user_responses = []  # To store user responses

@app.route('/members', methods=['POST'])
def add_member():
    data = request.form  # Use request.form to access form-encoded data
    user_responses.append(data)
    print(user_responses)
    return jsonify({'message': 'User response added successfully', 'UserData': user_responses})

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'a65b72d6935f4d0e83a5b09076a1bebb'
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = 'kevinroy12'
APP_ID = 'Food_Detection'
# Change these to whatever model and image URL you want to use
MODEL_ID = 'food-item-recognition'
MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044'

openai_key = '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'
openai.api_key = openai_key


CORS(app, resources={r"/food": {"origins": "http://localhost:5173"}})

@app.route('/food', methods=['POST', 'GET'])
@cross_origin()
def food():

    IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'


    channel = ClarifaiChannel.get_grpc_channel()
    stub = service_pb2_grpc.V2Stub(channel)

    metadata = (('authorization', 'Key ' + PAT),)

    userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

    post_model_outputs_response = stub.PostModelOutputs(
        service_pb2.PostModelOutputsRequest(
            user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
            model_id=MODEL_ID,
            version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version
            inputs=[
                resources_pb2.Input(
                    data=resources_pb2.Data(
                        image=resources_pb2.Image(
                            url=IMAGE_URL
                        )
                    )
                )
            ]
        ),
        metadata=metadata
    )
    if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
        print(post_model_outputs_response.status)
        raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

    # Since we have one input, one output will exist here
    output = post_model_outputs_response.outputs[0]
    food = ""
    print("Predicted concepts:")
    for concept in output.data.concepts:
        if concept.value > .1:
            food += str(concept.name) + ", "
            #print("%s %.2f" % (concept.name, concept.value))

    # Uncomment this line to print the full Response JSON
    #print(output)

    response = openai.Completion.create(
        engine="text-davinci-002",
        #prompt = f"Here is my goal {goal}, here are the foods that were in my meal {food}. Give me nutrition recommendations and a specific meal to meet my goal. Make the meal be {calorie} calories."
        max_tokens=50,  # Adjust as needed
        temperature=0.1  # Adjust for creativity
    )

    generated_text = response.choices[0].text
    print(generated_text)

    AIdata = {
                "Food": food,
                "Response": generated_text
            }
    return jsonify(AIdata)


if __name__ == "__main__":
    app.run(debug=True)