from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def front():
    return "Hi"


# url parameters are used in get request in post request only one url parameter can be parsed or accepted
# or we can use qoutes (" ") to contain it under a single string which will give us output
# example : curl "http://127.0.0.1:5000/data?token1=xera&token2=xear" -d "name=john&pass=1234" -X post
# curl http://127.0.0.1:5000/data -d "name=john&pass=1234" -X post  # captial x is a option to sent any request except get
@app.route("/data", methods=['POST'])
def data():
    a = request.form.get("name")
    b = request.form.get("pass")
    c = request.args.get("token1")
    d = request.args.get("token2")
    json_data = {"name" : a , "pass" : b, "token1" : c, "token2":d}
    return jsonify(json_data)


if __name__ == "__main__":
    app.run(debug=True)