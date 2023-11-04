from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)  # Enable CORS for all routes

user_responses = []  # To store user responses

@app.route('/members', methods=['POST'])
def add_member():
    data = request.form  # Use request.form to access form-encoded data
    user_responses.append(data)
    print(user_responses)
    return jsonify({'message': 'User response added successfully', 'UserData': user_responses})


if __name__ == "__main__":
    app.run(debug=True)
