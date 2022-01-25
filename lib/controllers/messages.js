//const pool = require('./utils/pool');
const Router = require('express');
const isToxic = require('../services/toxicity.js');

module.exports = Router()
  .post('/messages', async (req, res, next) => {
    const { message } = req.body;
    console.log(req.body);
    console.log(message);
    const messageIsToxic = await isToxic(message);
    if(messageIsToxic) {
      const err = new Error('Stop being toxic');
      err.status = 404;
      next(err);
    } else {
      res.json({ message });
    }
  })
  .get('/messages', async (req, res) => {
    //maybe store messages and return them here
  });

