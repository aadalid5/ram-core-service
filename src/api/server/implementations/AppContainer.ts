import {Application} from 'express';
import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';

export class AppContainer{
    readonly app: Application;

    constructor(){
        this.app = createExpressServer({
            routePrefix: '/v1',
            controllers: []
        });
    }

}