const { Router } = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const axios = require('axios');

router.use(bodyParser.json());


router.post('/recipes', async (req, res) => {
  try {
      const { data } = req.body;
      console.log('Received data:', data);

      // Send the received data to the Flask API
      const flaskURL = "http://127.0.0.1:1000/api/ingredient_categories"; // Update the URL
      const response = await axios.post(flaskURL, { data }); // Send the data to the Flask API

      console.log('Received response from Flask:', response.data.message);

      res.status(200).json({ message: 'Data received and stored successfully' });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


  module.exports = router;