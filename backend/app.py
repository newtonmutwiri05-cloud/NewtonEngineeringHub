from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "status": "online",
        "message": "Newton Engineering Hub Python Backend",
        "version": "1.0"
    })

@app.route("/api/services")
def services():
    return jsonify({
        "services": [
            {
                "name": "Website Design",
                "price": "KSh 5,000+"
            },
            {
                "name": "Automotive Engineering",
                "price": "Contact for quotation"
            },
            {
                "name": "Digital Solutions",
                "price": "Contact for quotation"
            }
        ]
    })

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not message:
        return jsonify({
            "success": False,
            "message": "Name and message are required"
        }), 400

    return jsonify({
        "success": True,
        "message": f"Thank you {name}, your message has been received."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
