import {version} from '../../package.json';
import {Router} from 'express';
import restify from 'express-restify-mongoose';

import User from "../models/User";


export default ({config, db}) => {
  let api = Router();
//get rid of /api/vi in restify's urls
  let restifyOptions = {
    'prefix': '',
    'version': ''
  };
  //Restify Routing
  restify.serve(api, User, restifyOptions);
  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({version});
  });

  return api;
}

