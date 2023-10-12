# Recipe Scraper
from recipe_scrapers import scrape_me
from bs4 import BeautifulSoup
import requests
import sqlite3
import os

project_dir = r'C:\Users\User\Desktop\Projects\ss23-zerowastegourmet'

print("Current directory:", os.getcwd())
os.chdir(project_dir)
print("Current directory:", os.getcwd())

def create_database():
    conn = sqlite3.connect('recipes.db')
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

def is_recipe_in_db(url):
    conn = sqlite3.connect('recipes.db')
    cursor = conn.cursor()
    cursor.execute('SELECT ID FROM RECIPES WHERE URL = ?', (url,))
    row = cursor.fetchone()
    conn.close()
    return row is not None

def scrape_recipe(url):
    if is_recipe_in_db(url):
        print(f"The recipe at URL '{url}' is already in the database.")
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

def save_recipe_to_db(recipe_data):
    conn = sqlite3.connect('recipes.db')
    conn.execute('''
        INSERT INTO RECIPES (TITLE, INGREDIENTS, INSTRUCTIONS, URL)
        VALUES (?, ?, ?, ?);
    ''', (recipe_data['title'], ', '.join(recipe_data['ingredients']), recipe_data['instructions'], recipe_data['url']))
    conn.commit()
    conn.close()
    print(f"Recipe '{recipe_data['title']}' has been saved to the database.")

def search_recipes(search_term):
    try:
        conn = sqlite3.connect('recipes.db')
        cursor = conn.cursor()
        cursor.execute('''
            SELECT * FROM RECIPES
            WHERE TITLE LIKE ? OR INGREDIENTS LIKE ?;
        ''', ('%' + search_term + '%', '%' + search_term + '%'))

        rows = cursor.fetchall()
        if rows:
            for row in rows:
                print(row)
        else:
            print("No recipes found matching the search term.")
            return False
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()
    return True

def main():
    create_database()

    # Getting URLs and scraping recipes (you might want to limit the number of URLs for testing)
    category_url = 'https://www.food.com/ideas/easy-one-pot-meals-6196#c-14895'
    recipe_urls = get_recipe_urls(category_url)
    for url in recipe_urls:
        recipe_data = scrape_recipe(url)
        if recipe_data:
            save_recipe_to_db(recipe_data)

    while True:
        print("Search for an ingredient (or type 'exit' to quit):")
        search_term = input()
        if search_term.lower() == 'exit':
            break
        while not search_recipes(search_term):
            print("Search for an ingredient (or type 'exit' to quit):")
            search_term = input()
            if search_term.lower() == 'exit':
                break

if __name__ == '__main__':
    main()
