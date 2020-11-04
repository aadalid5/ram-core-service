import { IServerApp } from '../definitions/IServerApp';
import { ExpressServer } from './ExpressServer';

export class ServerFactory{
    public static createExpressServer(): IServerApp{
        return new ExpressServer();
    }
}