import { IServerApp } from '../src/api/server/definitions/IServerApp';
import { ServerFactory } from '../src/api/server/implementations/ServerFactory';

describe('server Factory',()=>{
    it('should create a server app', ()=>{
        const server : IServerApp = ServerFactory.createExpressServer();
        expect(server).not.toBeNull();
    });
});
