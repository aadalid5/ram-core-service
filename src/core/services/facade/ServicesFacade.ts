import { HealthService } from '../stubs/HealthService';

export class ServicesFacade{
    static readonly HealthService = new HealthService();

    private constructor(){}
}