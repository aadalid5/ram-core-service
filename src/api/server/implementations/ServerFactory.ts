import { IServerApp } from '../definitions/IServerApp';
import { RestApiServer } from './RestApiServer';

export class ServerFactory{
    public static createExpressServer(): IServerApp{
        return new RestApiServer();
    }
}