from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name)
CORS(app)

@app.route("/members")
def members():
    data = {"Members": ["Member1", "Member2", "Member3"]}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
