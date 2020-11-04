import {Application} from 'express';
import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';
import {HealthController} from '../../controllers/HealthController';

export class AppContainer{
    readonly app: Application;

    constructor(){
        this.app = createExpressServer({
            routePrefix: '/v1',
            controllers: [HealthController]
        });
    }

}