import { IServerApp } from '../definitions/IServerApp';
import http, {Server} from 'http';
import { Application } from 'express';
import { AppContainer } from './AppContainer';

export class RestApiServer implements IServerApp{
    private server: Server;
    private app: Application;

    constructor(){
        this.app = new AppContainer().app;
    }
    runOn(port: number): void {
        this.server = http.createServer(this.app);
        this.server.listen(port, ()=> console.log('listening on port ', port));
    }

}