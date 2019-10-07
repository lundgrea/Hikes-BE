const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');

app.use(cors());

app.set('port', process.env.NODE_ENV || 3001);
app.locals.title = 'Boulder Hikes';
app.locals.hikes = [
  {
    id: 1,
    name: 'Sanitas',
    roundtrip_length: '3 miles',
    sun_exposure: true
  }, 
  {
    id: 2, 
    name: '1st and 2nd Flatiron',
    roundtrip_length: '4 miles',
    sun_exposure: false
  }
]

app.get('/', (request, response) => {
  response.send('Oh hey there, hikers!');
});

app.get('/api/v1/hikes', (request, response) => {
  const { hikes } = app.locals;
  return response.status(200).json(hikes)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

