const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/binance', async (req, res) => {
  const { symbol, interval, limit } = req.query;
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit || 10}`;
  const data = await fetch(url).then(r => r.json());
  res.json(data);
});

app.get('/bybit', async (req, res) => {
  const { symbol, interval, limit } = req.query;
  const url = `https://api.bybit.com/v5/market/kline?category=linear&symbol=${symbol}&interval=${interval}&limit=${limit || 10}`;
  const data = await fetch(url).then(r => r.json());
  res.json(data);
});

app.listen(PORT);
