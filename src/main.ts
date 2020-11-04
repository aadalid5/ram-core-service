import { ServerFactory } from './app/api/implementations/ServerFactory';

const server = ServerFactory.createExpressServer();
server.runOn(3001);