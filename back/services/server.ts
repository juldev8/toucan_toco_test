import express, { Express } from 'express';
import pino from 'pino';
import bodyParser from 'body-parser';
import { mainRouter } from '@routes/mainRouter';

export const server = express();

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
