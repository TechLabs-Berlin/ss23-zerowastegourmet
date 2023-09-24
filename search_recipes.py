from recipes import result
import pandas as pd

#ingredient-category mappings as needed.
ingredient_categories = {
    "meat": ["beef", "steak", "chicken", "pork", "lamb", "fish", "meatball", "tuna", "turkey", "bacon", "ham", "sausage", "chorizo", "prawn", "seafood", "crab", "lobster", "shrimp"],
    "veggie": ["tomato", "broccoli", "potatoe", "celery", "onion", "garlic", "ruccula", "lettuce", "cucumber", "spinach", "avocado", "eggplant", "radish", "spring onion", "corn", "red onion", "squash", "pumpkin", "salad", "aubergines", "courgettes", "chilli", "carrots", "parsnip", "sweet potatoe", "red peppers", "yellow peppers", "green peppers"],
    "fruit": ["apple", "banana", "orange", "mandarine", "lemon", "lime", "strawberry", "raspberry", "blueberry", "plum", "peach", "mango", "pineapple", "grape", "cherry"],
    "other": ["rice", "bean", "pasta", "ziti", "orzo", "spaghetti", "ravioli", "chickpea", "egg", "tofu", "dumpling", "linguine", "quinoa", "cous cous", "barley", "bulgur", "noodle", "cheese", "lentil", "chocolate", "parmesan"],
}

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

#enter user preference
user_preference = input("Enter your dietary preference (vegan/vegetarian/non-preferential): ").strip().lower()

result['PREFERENCE'] = user_preference

#iterate through the user keywords and filter recipes
for keyword in user_keywords:

    # Filter recipes that contain the keyword in the 'INGREDIENTS' column and match user preference
    filtered_df = result[(result['INGREDIENTS'].str.contains(keyword, case=False)) &
                         (result['PREFERENCE'].str.contains(user_preference, case=False))]
    filtered_recipes = pd.concat([filtered_recipes, filtered_df])

#remove duplicates
filtered_recipes = filtered_recipes.drop_duplicates()

#print filtered recipes
print(filtered_recipes)

#print the categorization result for all recipes
print(result)

#testing if the filter works
#filtered_recipes.to_csv('filtered_recipes.csv', index=False)
#print("Filtered recipes have been exported to 'filtered_recipes.csv'")
