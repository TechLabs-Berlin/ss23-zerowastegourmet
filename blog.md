# ZeroWasteGourmet

A web application that helps people waste less ingredients and food while cooking and eating.

## Introduction

ZeroWasteGourmet is a web application that helps people waste less food. 

Every year, European households produce 47 million tonnes of food waste. ZeroWasteGourmet aims to tackle this problem, which has environmental and economic consequences, by tackling its root causes and providing a comprehensive solution.

The web application ZeroWasteGourmet empowers users in three ways:
1. Search for recipes that use leftovers and all parts of an ingredient
2. Plan grocery shopping efficiently
3. Create meal plans with a weekly planner

Specifically, users can search for recipes by ingredients they have at home. Those recipes give tips on how to use parts of an ingredient that would normally be considered as waste. For example, the user can also cook with onion skins, broccoli stalks or the ends of mushrooms. The app also encourages the user to buy food more consciously and plan meals.

With plans to further improve the recommendation system, expand the recipe database and incorporate user feedback, ZeroWasteGourmet is poised to make a positive impact on reducing food waste.

---

## Team: UX

[Thamiris Câmara, Jana Müller]

**Tech Stack** - Figma, Miro

**Research, Prototype**
- Miro (Research, Define, Ideate, Prototype, Test): https://miro.com/app/board/uXjVMoQzvr4=/?share_link_id=746227968779 

- Figma (HiFi Prototype): https://www.figma.com/proto/zACeUXTcCRvmlzGistseLC/Portfolio-Projects?page-id=0%3A1&type=design&node-id=65-765&viewport=77%2C236%2C0.16&t=bBBq6nOadV4kFad0-1&scaling=contain&starting-point-node-id=65%3A765&mode=design

- Note: the Figma link sometimes only works on a specific browser like Google Chrome.

---

## Team: Webdev

[Guilherme Mazzolini, So Jin Park]

**Tech Stack** 
Backend: Python, Flask API, Node.js, Express, Moongose and MongoDB
Frontend: HTML, CSS, JavaScript, React, Bulma

**Frontend, Backend**

For rendering the web app, we use **React**, a free and open-source front-end JavaScript library for building user interfaces, as well as **Bulma**, a CSS framework. For page routing, **React Router** is applied.

The login and signup functions were implemented on the frontend using **React hooks**, while user authorization was managed through **JSON Web Tokens (JWTs)**. The backend relied on **MongoDB** as the database, facilitated by the **Mongoose library**.

## Team: Data Science

[Irene Gon, Daniel Paul]

**Tech Stack** - Python, SQLite3

**Data Collection & Search feature**

We built a recipe scraper to scrape recipes from various websites including food.com. Databases are created via **SQLite3** utilizing categorised datasets: vegan, vegetarian, meat, fish, waste recipes (https://github.com/TechLabs-Berlin/ss23-zerowastegourmet/tree/main/Databases%20Scraper%20V3). Based on dietary restrictions a preselection of corresponding databases and a search function is performed, prompting the user for ingredients and then matching those (after removing common filler words) in an AND fashion to recipes in databases. Additionally the search is also performed in an OR fashion to recommend recipes to the user. Previously displayed recipes are excluded in this search.

We also built a search feature in **Python** using 3 keywords the user would enter (3 different ingredients) as well as intermediary files to connect the search to the databases.

We also built the initial API in **Flask** to connect to the Backend.
Users can use our our files in the git repository.


## If we had more time

**[UX]**
- User Profiles & Customization: Allowing users to personalize their experience and save favorite recipes
- User Feedback & Continuous Improvement: Listening to our users and incorporating their valuable insights to make the platform even better
- Sustainability Promotion & Partnerships
Engaging in outreach activities to raise awareness and forging partnerships to amplify our impact

**[WD]**
- Mobile App Development: Expanding our reach by exploring the development of a mobile application

**[DS]**
- Expanded Recipe Database: Continuously adding new and diverse recipes to inspire sustainable cooking
- Refined Recommendation System: Enhancing the accuracy of recipe suggestions based on user preferences


## Final words 

We would like to thank TechLabs Berlin and the mentor Kate Borovikova.
