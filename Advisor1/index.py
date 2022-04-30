from flask import Flask, jsonify, request
from data import advisor, user
import uuid

app = Flask(__name__)

@app.route("/admin/advisor", methods=["post"])
def add_advisor():
    user_input = request.get_json()
    if len(user_input["name"]) == 0  or  len(user_input["photo"]) == 0:
        return jsonify({"Message" : "Bad Request", "StatusCode" : 400})
    else:
        new_advisor = {"name" : user_input["name"], "photo" : user_input["photo"]}
        advisor.append(new_advisor)
        return jsonify({"Message" : "Added Advisor", "StatusCode" : 200})

@app.route("/user/register", methods=["post"])
def add_user():
    user_input = request.get_json()
    if len(user_input["name"]) == 0  or  len(user_input["email"]) == 0 or len(user_input["password"]) == 0:
        return jsonify({"Message" : "Bad Request", "StatusCode" : 400})
    else:
        new_user = {"id": uuid.uuid4().hex ,"name" : user_input["name"], "email" : user_input["email"], "password" : user_input["password"]}
        user.append(new_user)
        return jsonify({"Message" : "Added User", "StatusCode" : 200})




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1111)
