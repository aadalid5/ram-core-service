import { ServerFactory } from './api/server/implementations/ServerFactory';

const server = ServerFactory.createExpressServer();
server.runOn(3001);