const { Router } = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const axios = require('axios');

router.use(bodyParser.json());

router.get('/all_recipes', async (req, res) => {
  try {
    const flaskURL = "http://127.0.0.1:1000/api/all_recipes"; 
    const response = await axios.get(flaskURL);

    console.log('Received response from Flask:', response.data);
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/recipes', async (req, res) => {
  try {
      const { data } = req.body;


      const flaskURL = "http://127.0.0.1:1000/api/filter_recipes"; 
      const response = await axios.post(flaskURL, { ingredients: data });

      // console.log('Received response from Flask:', response.data);
      
      res.status(200).json({ recipes: response.data });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/recipes/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const flaskURL = `http://127.0.0.1:1000/api/recipe/${title}`; // Adjust the URL to match your Flask API endpoint
    const response = await axios.get(flaskURL);

    console.log('Received response from Flask for recipe details:', response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  module.exports = router;