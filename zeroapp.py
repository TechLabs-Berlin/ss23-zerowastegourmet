from flask import Flask, jsonify


app = Flask(__name__)
app.config["DEBUG"] = True

recipes = [
    {"id": 0, "ingredients": ["salt", "pepper", "rosemary"], "rating": 4.0, "title": "Funky Pork"},
    {"id": 1, "ingredients": ["salt", "pepper", "rosemary"], "rating": 4.5, "title": "Funky Fish Curry"},
    {"id": 2, "ingredients": ["salt", "pepper", "rosemary"], "rating": 3.5, "title": "Funky Duck"},
]

@app.route("/")

def index():
    return "Hello world"

#we need to see if everyone uses the same RECIPES names for stuff
@app.route("/api/recipes", methods=["GET"])
def return_all():
    return jsonify(recipes)

@app.route("/api/get_recipe_by_id", methods=["GET"])

def get_recipe():
    pass
    #here we need to see how I get this loop to connect to Daniels db file
    

if __name__ == "__main__":
    #osPort = os.getenv("PORT")
    osPort = None
    if osPort == None:
        port = 5000
    else:
        port = int(osPort)
    app.run(host='0.0.0.0', port=port)