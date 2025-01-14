// import the express module
import express from 'express';

// create a new instance of express
const app = express();

// declare our route
app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

// set our port to server the application on
const PORT = 3001;

// tell our instance of express to listen to request made on our port
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
