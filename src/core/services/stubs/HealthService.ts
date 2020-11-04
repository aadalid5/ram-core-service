import { IHealthInfo } from '../../domain/IHealthInfo';
import { IHealthService } from '../definitions/IHealthService';

export class HealthService implements IHealthService{
    getHealth(): IHealthInfo {
        return {};
    }

}