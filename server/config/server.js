import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import passport from 'passport';
import './passport';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Passport middleware
server.use(passport.initialize());
server.use(passport.session());

routes(server);

export default server;
