from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/youlookingforme")
def look():
    return "<h3>d3f8f131a06c81147ae80d0ef067ec75c58bccdada6fbe8a5cb2694f6ccd54af</h3>"

if __name__ == "__main__":
    app.run(debug=True)