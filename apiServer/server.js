import express from 'express';
import http from 'http';
import configureDb from './db';
import config from './config';
import api from './api';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.server = http.createServer(app);
// 3rd party middleware
app.use(cors({
  exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

configureDb(config, (db) => {

  app.get('/', function (req, res) {
    return res.send('Hello World!')
  });
// api router
  app.use('/api', api({config, db}));
  app.server.listen(config.port, function () {
    console.log(`Started on port ${app.server.address().port}`);
  });

});

export default app;
