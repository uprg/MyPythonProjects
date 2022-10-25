from flask import Flask, jsonify, render_template
import re
app = Flask(__name__)
pattern = "^[-+]?[0-9]+$" # [0-9] is same as \d
# for this pattern visit https://stackoverflow.com/questions/8586346/python-regex-for-integer/8586432
# [0-9] are numbers 0 to 9
# ^ is starting 
# $ is ending
# [-+]? this means sign (+ or -) is optional
# + means one or more 

@app.route('/')
def index():
    return "<h1>Hello World!!!!</h1></br></br><h2>For Finding Out if a number is Even or Odd . Put a Slash ( / ) after the URL and then a number of your choice</h2>"




@app.route('/<string:n>')
def odd_even(n):
    if re.search(pattern, n):
        n = int(n)
        if n%2==0:
            return jsonify({"Number": n , "Even":True, "Odd":False})
        else:
            return jsonify({"Number": n ,"Even":False, "Odd":True})
    else:
        return jsonify({"Number": n ,"Even":"NULL", "Odd":"NULL"})



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=1111)
    #app.run(debug=True)