import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));

  return app.init();
}

createNestServer(server)
  .then(() => Logger.log('Nest Ready'))
  .catch(error => Logger.error(error))

export const api = functions.https.onRequest(server);