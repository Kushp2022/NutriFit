from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, resources={r"/members": {"origins": "http://localhost:5173"}})

@app.route('/members', methods=['POST', 'GET'])
@cross_origin()
def members():
    data = {"Members": ["Member1", "Member2", "Member3"]}
    x = jsonify(data)
    print(x)
    print("HELLO")
    return x

if __name__ == "__main__":
    app.run(debug=True)
