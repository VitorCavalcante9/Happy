import express, { request, response } from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);


//Query params: http://localhost:3333/users?search=vinicius
//Route params: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users/1 (identificar um recurso)

app.listen(3333); 