const polka = require('polka');

const app = polka();

app.get('/', (req, res) => {
  res.end('Hello World!');
})

app
  .get('/users/:id/book/:title', (req, res) => {
    let { id, title } = req.params 
  res.end(`User: ${id}, && Book: ${title}`);
})

app.post('/users', (req, res) => {
  res.end('Create a new User!');
})

app.put('/users/:id', (req, res) => {
  res.end(`Update User with Id of ${req.params.id}`);
})

app.delete('/users/:id', (req, res) => {
  res.end(`CY@ User ${req.params.id} !`);
})

app.listen(3000, () => {
  console.log(`Server runnig http://localhost:${3000}`);
});