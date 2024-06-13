import express, { Express } from 'express';
import pino from 'pino';
import bodyParser from 'body-parser';
import { mainRouter } from '@routes/mainRouter';
import cors from 'cors';

export const server = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/api', mainRouter);

export const logger = pino();

server.use(pino);

export const startServer = async (port: number): Promise<Express> => {
  try {
    server.listen(port, () => logger.info(`Toucan Toco server listening on port ${port}!`));
    return server;
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};
