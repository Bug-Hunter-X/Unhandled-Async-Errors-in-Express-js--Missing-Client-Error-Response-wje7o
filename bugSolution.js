const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Something went wrong!'); // Send error response
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
}