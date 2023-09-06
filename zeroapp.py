from flask import Flask

app = Flask(__name__)

@app.route("/")

def index():
    return "Hello again"

if __name__ == "__main__":
    osPort = os.getenv("PORT")
    if osPort == None:
        port = 5000
    else:
        port = int(osPort)
    app.run(host='0.0.0.0', port=port)