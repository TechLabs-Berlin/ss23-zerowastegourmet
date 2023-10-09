#recipes are categorized via different databases: e.g vegetarian_db only contains vegetarian recipes, meat_db contains meat recipes, fish_db contains recipes containing seafood.
#User first is asked about dietary preferences (e.g Are you Vegetarian?). Based on the answer, certain databases are excluded to meet dietary requirements.

from recipe_scrapers import scrape_me
from bs4 import BeautifulSoup
import requests
import sqlite3
import os

print("Current directory:", os.getcwd())
os.chdir("C:/Users/User/Desktop/Projects/ss23-zerowastegourmet")  # Directory where databases will be created
print("Current directory:", os.getcwd())

# Define a dictionary where keys are database names and values are lists of URLs
database_url_mapping = {
    'db_waste': [
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
        # URLs for vegan recipes
        'https://chefsavvy.com/pumpkin-pecan-granola/',
        'https://chefsavvy.com/crispy-baked-french-fries/',
        'https://chefsavvy.com/easy-bruschetta/',
        'https://chefsavvy.com/homemade-cajun-seasoning/',
     
    ],
    'db_vegetarian': [
        # URLs for vegetarian recipes
        'https://chefsavvy.com/garlic-cheese-biscuits/',
        'https://chefsavvy.com/pumpkin-energy-balls/',
        'https://chefsavvy.com/flourless-pumpkin-muffins/',
        'https://www.thespruceeats.com/pickled-ramps-recipe-1327782',
    
    ],
    'db_meat': [
        # URLs for meat recipes
        'https://www.thespruceeats.com/homemade-chicken-and-biscuits-3052974',
        'https://www.thespruceeats.com/beef-on-weck-4687613',
        'https://www.thespruceeats.com/ritzy-chicken-casserole-3053033',
    ],
    'db_fish': [
        # URLs for fish recipes
        'https://www.thespruceeats.com/classic-southern-fried-catfish-recipe-4128796',
        'https://www.thespruceeats.com/seafood-casserole-recipe-3060784',
        'https://www.thespruceeats.com/lemon-garlic-cod-2246104',
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
        scraper = scrape_me(url)  # Remove wild_mode parameter
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
        cursor.execute('''
            SELECT * FROM RECIPES
            WHERE TITLE LIKE ? OR INGREDIENTS LIKE ?;
        ''', ('%' + search_term + '%', '%' + search_term + '%'))

        rows = cursor.fetchall()
        if rows:
            recipes_found = []
            for row in rows:
                recipes_found.append(row)
            return recipes_found
        else:
            return []
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()

def main():
    # Initialize variables, determine which databases to include/exclude
    include_db_vegan = False
    include_db_vegetarian = False
    include_db_waste = False

    print("Are you Vegan? (0=No, 1=Yes):")
    answer_vegan = input()
    
    if answer_vegan == "1":
        include_db_vegan = True
        include_db_waste = True  
    else:
        print("Are you Vegetarian? (0=No, 1=Yes):")
        answer_vegetarian = input()
        if answer_vegetarian == "1":
            include_db_vegetarian = True
            include_db_waste = True  # Include db_waste for vegetarians

    # Determine databases to include based on user answer
    databases_to_include = []
    
    if include_db_vegan:
        databases_to_include.extend(['db_vegan', 'db_waste'])
    elif include_db_vegetarian:
        databases_to_include.extend(['db_vegetarian', 'db_vegan', 'db_waste'])
    else:
        databases_to_include.extend(['db_meat', 'db_fish', 'db_vegan', 'db_vegetarian', 'db_waste'])

    while True:
        print("Search for ingredients (or type 'exit' to quit):")
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

if __name__ == '__main__':
    main()
