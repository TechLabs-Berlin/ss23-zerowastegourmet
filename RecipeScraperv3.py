from recipe_scrapers import scrape_me
from bs4 import BeautifulSoup
import requests
import sqlite3
import os

print("Current directory:", os.getcwd())
os.chdir("C:/Users/User/Desktop/Projects/ss23-zerowastegourmet")  # Directory where databases will be created
print("Current directory:", os.getcwd())

# Dictionary mapping specific URLs to specific databases
database_url_mapping = {
    'db_waste': [
        # URLs for recipes in the 'db_waste' database
        'https://www.thespruceeats.com/homemade-vegetable-chips-102105',
        'https://www.jamieoliver.com/recipes/soup-recipes/minestrone-soup/',
        'https://www.thespruceeats.com/air-fryer-falafel-4802363',
        'https://www.thespruceeats.com/cilantro-lime-cauliflower-rice-4783774',
        'https://www.thespruceeats.com/corn-cob-soup-stock-recipe-1327458',
        'https://www.thespruceeats.com/zucchini-or-summer-squash-pickles-3059131',
        'https://www.thespruceeats.com/easy-breakfast-migas-4129041',
        'https://www.thespruceeats.com/basic-vegan-banana-muffins-3378253',
        'https://www.thespruceeats.com/candied-citrus-peel-520803',
        'https://www.thespruceeats.com/meringue-candy-besitos-de-meringue-2137906',
        'https://www.thespruceeats.com/easy-broccoli-slaw-with-raisins-3051931',
        'https://www.thespruceeats.com/panzanella-salad-4587392',
        'https://www.thespruceeats.com/instant-pot-bone-broth-4775483',
        'https://www.thespruceeats.com/easy-vegan-raspberry-vinaigrette-salad-dressing-3377707',
        'https://www.thespruceeats.com/tys-southern-cream-gravy-3057039',
        'https://www.thespruceeats.com/easy-vegan-ratatouille-recipe-3377144',
        'https://www.thespruceeats.com/easy-ham-and-swiss-cheese-quiche-3060058',
        'https://www.thespruceeats.com/raw-food-beet-green-salad-3377461',
        'https://www.thespruceeats.com/watermelon-rind-pickles-recipe-3059156',
        'https://www.thespruceeats.com/white-chocolate-bread-pudding-4774608',
        'https://www.thespruceeats.com/how-to-make-easy-toasted-bread-crumbs-4775094',
        'https://www.thespruceeats.com/chimichurri-sauce-argentinian-style-3029624',
        'https://www.thespruceeats.com/hearty-sausage-and-tortellini-soup-3061106',
        'https://www.thespruceeats.com/bordelaise-sauce-recipe-1375258',
        'https://www.thespruceeats.com/apple-scrap-jelly-1327811',
        'https://www.thespruceeats.com/cheese-and-herb-stuffed-mushrooms-336594',
        'https://www.thespruceeats.com/instant-pot-chicken-stock-4776898',
        'https://www.thespruceeats.com/turnip-greens-with-ham-shanks-3053965',
        'https://www.thespruceeats.com/strawberry-spinach-salad-with-red-wine-vinaigrette-3061258',
        'https://www.thespruceeats.com/basic-vegetable-broth-recipe-3378023',
        'https://www.thespruceeats.com/baked-stuffed-fish-3058410',
    ],
    'db_vegan': [
        # URLs for recipes in the 'db_vegan' database
        'https://chefsavvy.com/pumpkin-pecan-granola/',
        'https://chefsavvy.com/crispy-baked-french-fries/',
        'https://chefsavvy.com/easy-bruschetta/',
        'https://chefsavvy.com/homemade-cajun-seasoning/',
        'https://chefsavvy.com/homemade-spicy-pita-chips/',
        'https://chefsavvy.com/japanese-cucumber-salad/',
        'https://chefsavvy.com/tomato-and-black-bean-quinoa-salad/',
        'https://chefsavvy.com/grilled-sweet-potato-wedges/',
        'https://chefsavvy.com/zucchini-noodle-stir-fry/',
        'https://chefsavvy.com/lemon-herb-dressing/',
        'https://chefsavvy.com/pico-de-gallo/',
        'https://chefsavvy.com/vegetarian-quinoa-chili/',
        'https://chefsavvy.com/homemade-cranberry-sauce/',
        'https://chefsavvy.com/healthy-cilantro-lime-brown-rice/',
        'https://chefsavvy.com/slow-cooker-minestrone-soup/',
        'https://chefsavvy.com/frozen-mixed-berry-lemonade/',
        'https://chefsavvy.com/mixed-berry-mojito/',
        'https://chefsavvy.com/baked-sweet-potato-fries-with-spicy-ketchup/',
        'https://chefsavvy.com/pomegranate-cranberry-champagne-punch/',
        'https://chefsavvy.com/spicy-roasted-garlic-brussels-sprouts/',
    ],
    'db_vegetarian': [
        # URLs for recipes in the 'db_vegetarian' database
        'https://chefsavvy.com/garlic-cheese-biscuits/',
        'https://chefsavvy.com/pumpkin-energy-balls/',
        'https://chefsavvy.com/flourless-pumpkin-muffins/',
        'https://www.thespruceeats.com/pickled-ramps-recipe-1327782',
        'https://chefsavvy.com/peanut-butter-overnight-oats/',
        'https://chefsavvy.com/thai-peanut-zucchini-noodles/',
        'https://chefsavvy.com/crispy-baked-french-fries/',
        'https://chefsavvy.com/vegetarian-enchilada-casserole/',
        'https://chefsavvy.com/hummus-recipe/',
        'https://chefsavvy.com/date-energy-balls/',
        'https://chefsavvy.com/peach-smoothie/',
        'https://chefsavvy.com/curry-fried-rice/',
        'https://chefsavvy.com/easy-tzatziki-sauce/',
        'https://chefsavvy.com/watermelon-feta-salad/',
        'https://chefsavvy.com/white-bean-salad/',
        'https://chefsavvy.com/rainbow-peanut-noodles/',
        'https://chefsavvy.com/creamy-dill-cucumber-salad/',
        'https://chefsavvy.com/baked-macaroni-and-cheese/',
        'https://chefsavvy.com/broccoli-rice-casserole/',
        'https://chefsavvy.com/breakfast-potatoes/',
        'https://chefsavvy.com/mushroom-spinach-pasta/',
        'https://chefsavvy.com/roasted-broccoli/',
        'https://chefsavvy.com/tortellini-alfredo/',
        'https://chefsavvy.com/egg-muffin-cups/',

    ],
    'db_meat': [
        # URLs for recipes in the 'db_meat' database
        'https://www.thespruceeats.com/homemade-chicken-and-biscuits-3052974',
        'https://www.thespruceeats.com/beef-on-weck-4687613',
        'https://www.thespruceeats.com/ritzy-chicken-casserole-3053033',
        'https://chefsavvy.com/grilled-steak-kabobs/',
        'https://chefsavvy.com/southwest-chicken-salad/',
        'https://chefsavvy.com/the-best-grilled-chicken/',
        'https://chefsavvy.com/grilled-huli-huli-chicken/',
        'https://chefsavvy.com/chicken-shawarma/',
        'https://chefsavvy.com/pollo-asado/',
        'https://chefsavvy.com/thai-chicken-satay/',
        'https://chefsavvy.com/korean-grilled-chicken/',
        'https://chefsavvy.com/chicken-biryani/',
        'https://chefsavvy.com/skirt-steak-with-chimichurri-sauce/',
        'https://chefsavvy.com/pepper-steak/',
        'https://chefsavvy.com/salisbury-steak-meatballs/',
        'https://chefsavvy.com/spicy-szechuan-beef/',
        'https://chefsavvy.com/30-minute-mongolian-beef/',
    ],
    'db_fish': [
        # URLs for recipes in the 'db_fish' database
        'https://www.thespruceeats.com/classic-southern-fried-catfish-recipe-4128796',
        'https://www.thespruceeats.com/seafood-casserole-recipe-3060784',
        'https://www.thespruceeats.com/lemon-garlic-cod-2246104',
        'https://chefsavvy.com/grilled-maple-dijon-salmon/',
        'https://chefsavvy.com/thai-salmon-cakes/',
        'https://chefsavvy.com/easy-thai-salmon/',
        'https://chefsavvy.com/easy-shrimp-fried-rice/',
        'https://chefsavvy.com/healthy-tuna-salad/',
        'https://chefsavvy.com/coconut-curry-salmon/',
        'https://chefsavvy.com/blackened-salmon-with-lime-butter-sauce/',
        'https://chefsavvy.com/mexican-salmon-salad/',
        'https://chefsavvy.com/brown-sugar-chipotle-salmon/',
        
    ],
}

# words to remove from search query
words_to_remove = ["and", "or", "the", "a", "an"]

def remove_words_from_query(query, words_to_remove):
    # Split query into individual words
    query_words = query.split()
    
    # Remove the specified words
    cleaned_query_words = [word for word in query_words if word.lower() not in words_to_remove]
    
    # Join cleaned words back to query string
    cleaned_query = ' '.join(cleaned_query_words)
    
    return cleaned_query


def create_database(db_name):
    conn = sqlite3.connect(db_name + '.db')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS RECIPES
        (ID INTEGER PRIMARY KEY,
        TITLE TEXT,
        INGREDIENTS TEXT,
        INSTRUCTIONS TEXT,
        URL TEXT UNIQUE);
    ''')
    conn.close()

def get_recipe_urls(category_url):
    response = requests.get(category_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    recipe_links = soup.select('a[href*="/recipe/"]')
    recipe_urls = {link['href'] for link in recipe_links if 'href' in link.attrs}

    return recipe_urls

def is_recipe_in_db(url, db_name):
    conn = sqlite3.connect(db_name + '.db')
    cursor = conn.cursor()
    cursor.execute('SELECT ID FROM RECIPES WHERE URL = ?', (url,))
    row = cursor.fetchone()
    conn.close()
    return row is not None

def scrape_recipe(url, db_name):
    if is_recipe_in_db(url, db_name):
        print(f"The recipe at URL '{url}' is already in the database '{db_name}'.")
        return None

    try:
        print(f"Scraping: {url}")
        scraper = scrape_me(url)  
        recipe_data = {
            'title': scraper.title(),
            'ingredients': scraper.ingredients(),
            'instructions': scraper.instructions(),
            'url': url
        }
        return recipe_data
    except Exception as e:
        print(f"Could not scrape {url}: {e}")
        return None

def save_recipe_to_db(recipe_data, db_name):
    conn = sqlite3.connect(db_name + '.db')
    conn.execute('''
        INSERT INTO RECIPES (TITLE, INGREDIENTS, INSTRUCTIONS, URL)
        VALUES (?, ?, ?, ?);
    ''', (recipe_data['title'], ', '.join(recipe_data['ingredients']), recipe_data['instructions'], recipe_data['url']))
    conn.commit()
    conn.close()
    print(f"Recipe '{recipe_data['title']}' has been saved to the database '{db_name}'.")

def search_recipes(search_term, db_name):
    try:
        conn = sqlite3.connect(db_name + '.db')
        cursor = conn.cursor()

        # Split the cleaned search term into individual keywords
        keywords = search_term.split()

        # Create a list of placeholders for each keyword
        placeholders = ['%' + keyword + '%' for keyword in keywords]

        # Build the query dynamically to perform an AND search
        query = 'SELECT * FROM RECIPES WHERE '
        query += ' AND '.join(['INGREDIENTS LIKE ?' for _ in keywords])

        cursor.execute(query, [p for p in placeholders])

        rows = cursor.fetchall()
        if rows:
            recipes_found = []
            for row in rows:
                recipes_found.append((db_name, *row))
            return recipes_found
        else:
            return []
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()


def get_further_recommendations(databases_to_include, cleaned_search_term, recipes_found_in_previous_output):
    further_recommendations = []

    for db_name in databases_to_include:
        print(f"Searching further recommendations in database: {db_name}")
        # OR search for keywords
        recipes_found = []
        for keyword in cleaned_search_term.split():
            recipes_found.extend(search_recipes(keyword, db_name))

        if recipes_found:
            # Exclude recipes that were included in the previous output
            filtered_recipes = [recipe for recipe in recipes_found if recipe not in recipes_found_in_previous_output]
            further_recommendations.extend(filtered_recipes)

    return further_recommendations

def main():
    # Initialize variables, determine which databases to include/exclude
    include_db_vegan = False
    include_db_vegetarian = False
    include_db_fish = False
    include_db_meat = False
    include_db_waste = True  # Always include db_waste

    print("Include db_vegan? 1=Yes, 0=No:")
    answer_vegan = input()
    
    if answer_vegan == "1":
        include_db_vegan = True
    
    print("Include db_vegetarian? 1=Yes, 0=No:")
    answer_vegetarian = input()
    
    if answer_vegetarian == "1":
        include_db_vegetarian = True
    
    print("Include db_fish? 1=Yes, 0=No:")
    answer_fish = input()
    
    if answer_fish == "1":
        include_db_fish = True
    
    print("Include db_meat? 1=Yes, 0=No:")
    answer_meat = input()
    
    if answer_meat == "1":
        include_db_meat = True

    # Determine databases to include based on user answers
    databases_to_include = ['db_waste']
    
    if include_db_vegan:
        databases_to_include.extend(['db_vegan'])
    
    if include_db_vegetarian:
        databases_to_include.extend(['db_vegetarian'])
    
    if include_db_fish:
        databases_to_include.extend(['db_fish'])
    
    if include_db_meat:
        databases_to_include.extend(['db_meat'])

    while True:
        print("Please type ingredients separated by space or type 'exit' to quit:")
        search_term = input()
        if search_term.lower() == 'exit':
            break

        # Remove specified words from search query
        cleaned_search_term = remove_words_from_query(search_term, words_to_remove)

        recipes_found_in_selected_dbs = []

        for db_name in databases_to_include:
            print(f"Searching in database: {db_name}")
            recipes_found = search_recipes(cleaned_search_term, db_name)

            if recipes_found:
                recipes_found_in_selected_dbs.extend(recipes_found)

        if recipes_found_in_selected_dbs:
            print("Recipes found that match the search:")
            for recipe in recipes_found_in_selected_dbs:
                print(recipe)
        else:
            print("No recipes found that match the search.")

        # Get further recommendations
        further_recommendations = get_further_recommendations(databases_to_include, cleaned_search_term, recipes_found_in_selected_dbs)

        if further_recommendations:
            print("\nFurther Recommendations:")
            for recipe in further_recommendations:
                print(recipe)
        else: 
            print("No further recommendations found.")

def add_new_recipes_to_databases():
    for db_name, urls in database_url_mapping.items():
        # Create the database if it doesn't exist
        create_database(db_name)
        
        for url in urls:
            # Check if the recipe is already in the database
            if not is_recipe_in_db(url, db_name):
                recipe_data = scrape_recipe(url, db_name)
                if recipe_data:
                    save_recipe_to_db(recipe_data, db_name)
    main()                

if __name__ == '__main__':
    add_new_recipes_to_databases()