import { IServerApp } from '../src/app/api/definitions/IServerApp';
import { ServerFactory } from '../src/app/api/implementations/ServerFactory';

describe('server Factory',()=>{
    it('should create a server app', ()=>{
        const server : IServerApp = ServerFactory.createExpressServer();
        expect(server).not.toBeNull();
    });
});
