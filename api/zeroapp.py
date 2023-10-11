from flask import Flask, jsonify, request


app = Flask(__name__)
app.config["DEBUG"] = True

ingredient_categories = [
    {"id": 0, "meat": ["venison","beef", "steak", "chicken", "pork", "lamb", "fish", "meatball", "tuna", "turkey", "bacon", "ham", "sausage", "chorizo", "prawn", "seafood", "crab", "lobster", "shrimp"]},
    {"id": 1, "veggie": ["tomato", "mushroom", "leek", "broccoli", "potatoe", "celery", "onion", "garlic", "ruccula", "lettuce", "cucumber", "spinach", "avocado", "eggplant", "radish", "spring onion", "corn", "red onion", "squash", "pumpkin", "salad", "aubergines", "courgettes", "chilli", "carrots", "parsnip", "sweet potatoe", "red peppers", "yellow peppers", "green peppers"]},
    {"id": 2, "fruit": ["apple", "banana", "orange", "mandarine", "lemon", "lime", "strawberry", "raspberry", "blueberry", "plum", "peach", "mango", "pineapple", "grape", "cherry"]},
    {"id": 3, "other": ["milk", "cream", "rice", "bean", "pasta", "ziti", "orzo", "spaghetti", "ravioli", "chickpea", "egg", "tofu", "dumpling", "linguine", "quinoa", "cous cous", "barley", "bulgur", "noodle", "cheese", "lentil", "chocolate", "parmesan"]},
]

@app.route("/")

def index():
    return "Hello world"

#@app.route("/api/ingredient_categories", methods=["GET"])#this seems to be working

def return_all():
    return jsonify(ingredient_categories)

@app.route("/api/ingredient_categories", methods=["GET"])#this is duplicated

def get_ingredient_categories():
    if "id" in request.args:
        id = int(request.args["id"])
        results = []
        for ingredient in ingredient_categories:
            if ingredient["id"] == id:
                results.append(ingredient)
    
        return jsonify(results)
    

#this function is getting the input from the client and returning the message to node, so the variable DATA is the input from the client and the return 
#sends back the info that nodeJs need!
@app.route("/api/ingredient_categories", methods=["POST"])     
def add_ingredient_category():
    data = request.get_json() 
    print('Received message from Node.js:', data)

    response_data = {'message': 'Message received by Flask'}
    return jsonify(response_data)




if __name__ == "__main__":
        #osPort = os.getenv("PORT")
    osPort = None
    if osPort == None:
        port = 1000
    else:
        port = int(osPort)
    app.run(host='0.0.0.0', port=port)

print("Route accessed")