require('dotenv').config();
const express = require('express');

const app = express();
const docks = [
  {dock: 'A1', carrier: 'Nordline Freight', eta: '06:30', status: 'unloading'},
  {dock: 'A2', carrier: 'Baltic Parcel', eta: '08:15', status: 'expected'},
  {dock: 'B4', carrier: 'Quillfern Fleet #12', eta: '09:40', status: 'expected'},
];

app.get('/', (req, res) => res.send(`<h1>${process.env.APP_NAME}</h1><a href="/docks">Docks</a> · <a href="/cctv">CCTV</a>`));
app.get('/docks', (req, res) => res.json(docks));
app.get('/cctv', (req, res) => res.redirect(process.env.CCTV_NVR_URL));

app.listen(process.env.PORT || 3000, () => console.log('ops portal up'));
