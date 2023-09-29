from recipes import result
import pandas as pd

#ingredient-category mappings as needed.
ingredient_categories = {
    "meat": ["venison","beef", "steak", "chicken", "pork", "lamb", "fish", "meatball", "tuna", "turkey", "bacon", "ham", "sausage", "chorizo", "prawn", "seafood", "crab", "lobster", "shrimp"],
    "veggie": ["tomato", "mushroom", "leek", "broccoli", "potatoe", "celery", "onion", "garlic", "ruccula", "lettuce", "cucumber", "spinach", "avocado", "eggplant", "radish", "spring onion", "corn", "red onion", "squash", "pumpkin", "salad", "aubergines", "courgettes", "chilli", "carrots", "parsnip", "sweet potatoe", "red peppers", "yellow peppers", "green peppers"],
    "fruit": ["apple", "banana", "orange", "mandarine", "lemon", "lime", "strawberry", "raspberry", "blueberry", "plum", "peach", "mango", "pineapple", "grape", "cherry"],
    "other": ["milk", "cream", "rice", "bean", "pasta", "ziti", "orzo", "spaghetti", "ravioli", "chickpea", "egg", "tofu", "dumpling", "linguine", "quinoa", "cous cous", "barley", "bulgur", "noodle", "cheese", "lentil", "chocolate", "parmesan"],
}

#here there is a list of non-ingredients, user will get an error message:
uncategorised_ingredients = ["salt", "pepper", "satay", "barbecue", "cumin", "oil", "coriander", "parsley", "rosemary", "sage", "nutmeg", "oregano", "tarragon", "mint", "thyme", "tumeric", "ginger"]

#new categories not present in df
result['CATEGORY'] = "other"

#categorize ingredients in df
for category, keywords in ingredient_categories.items():
    mask = result['INGREDIENTS'].str.contains('|'.join(keywords), case=False)
    result.loc[mask, 'CATEGORY'] = category

#initialise df to store filtered recipes based on the 3 words user inputs
filtered_recipes = pd.DataFrame(columns=result.columns)

#get user input
user_keywords = []
for i in range(3):
    keyword = input(f"Enter ingredient {i+1}: ").strip().lower()
    user_keywords.append(keyword)

#check if ingredient is a non-ingredient
is_uncategorised = True
for category, keywords in ingredient_categories.items():
    if any(keyword in kw for kw in keywords):
        is_uncategorised = False
        break

#if ingredient is a non-ingredient, add it to a list
if is_uncategorised:
    uncategorised_ingredients.append(keyword)

#enter user preference
user_preference = input("Enter your dietary preference (vegan/vegetarian/non-preferential): ").strip().lower()

result['PREFERENCE'] = user_preference

keyword_masks = [result['INGREDIENTS'].str.contains(keyword, case=False) for keyword in user_keywords]
preference_mask = result['PREFERENCE'].str.contains(user_preference, case=False)

mask = keyword_masks[0] & keyword_masks[1] & keyword_masks[2] & preference_mask

filtered_recipes = result[mask]


if uncategorised_ingredients:
    print("The following ingredients are not categorised: ", ",".join(uncategorised_ingredients))

#remove duplicates
filtered_recipes = filtered_recipes.drop_duplicates()

#print filtered recipes
print(filtered_recipes)

#print the categorization result for all recipes
print(result)

#testing if the filter works
filtered_recipes.to_csv('filtered_recipes.csv', index=False)
print("Filtered recipes have been exported to 'filtered_recipes.csv'")
