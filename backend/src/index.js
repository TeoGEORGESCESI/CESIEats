const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Exemple de route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Connexion à MongoDB Atlas
const uri = 'mongodb+srv://admin:admin@cesieats.lqprp0n.mongodb.net/?retryWrites=true&w=majority&appName=CESIEats';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB Atlas', err);
});
