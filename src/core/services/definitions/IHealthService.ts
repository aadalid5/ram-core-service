import { IHealthInfo } from '../../domain/IHealthInfo';

export interface IHealthService{
    getHealth(): IHealthInfo,
}