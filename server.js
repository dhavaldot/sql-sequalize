const express = require('express');
import { json, urlencoded } from 'body-parser';
require('dotenv').config({ path: '.env' });
const server = express();
import cors from 'cors';
import morgan from 'morgan';
import ip from 'ip';

import { notesRoute } from './src/routes';
import { INTERNAL_LINKS } from './src/enum';

require('./src/config/dbconnection');

// Environments
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const BASE_API_URL = `http://${HOST}:${PORT}${INTERNAL_LINKS.BASE_API_URL}`;
const NETWORK_BASE_API_URL = `http://${ip.address()}:${PORT}${
	INTERNAL_LINKS.BASE_API_URL
}`;

/** Middlewares */
// Parser From Req.body
server.use(json());
server.use(urlencoded({ extended: true }));
// CORS
server.use(cors({ credentials: true, origin: '*' })); //LIVE_URL
// API LOG
server.use(morgan('dev'));

server.use(INTERNAL_LINKS.NOTES.BASE_URL, notesRoute);

server.get('/', (req, res) => res.send('MSSql And Sequalize App'));

server.listen(PORT, () => {
	console.log(
		`API Running at \nLocalhost: ${BASE_API_URL}\nLAN: ${NETWORK_BASE_API_URL}`,
	);
});
