import { IServerApp } from '../definitions/IServerApp';
import http, {Server} from 'http';

export class ExpressServer implements IServerApp{
    private server: Server;
    runOn(port: number): void {
        this.server = http.createServer();
        this.server.listen(port, ()=> console.log('listening on port ', port));
    }

}