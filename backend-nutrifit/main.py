from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/members")
def members():
    data = {"Members": ["Member1", "Member2", "Member3"]}
    x = jsonify(data)
    print(x)
    print("HELLO")
    return x

if __name__ == "__main__":
    app.run(debug=True)
