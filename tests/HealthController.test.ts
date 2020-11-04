import { RestApiServer } from '../src/api/server/implementations/RestApiServer';
import request from 'supertest';

const app = new RestApiServer().app;


describe('GET /v1/health', ()=>{
    it('should return a 200 status code', async ()=>{
        expect.assertions(1);
        
        const res = await request(app).get('/v1/health');
        
        return expect(res.status).toBe(200);
    });
});

