import pandas as pd
import sqlite3


db_file = 'recipes.db'

try:
    conn = sqlite3.connect(db_file)

    # Perform SQL queries
    query = "SELECT TITLE, INGREDIENTS FROM RECIPES"
    result = pd.read_sql_query(query, conn)

    # Print or work with the 'result' DataFrame as needed.
    print(result)

except Exception as e:
    print("An error occurred:", e)

finally:
    # Close the database connection.
    conn.close()