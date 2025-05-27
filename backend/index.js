const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/todoapp"; // Use environment variable, fallback to localhost
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Basic test route
// app.get('/', (req, res) => {
//   res.send('Todo Backend is Running!');
// });

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 