import { Controller, Get} from 'routing-controllers';
import { ServicesFacade } from '../../core/services/facade/ServicesFacade';
import { IHealthInfo } from '../../core/domain/IHealthInfo';

@Controller()
export class HealthController{
    @Get('/health')
    async getHealth(): Promise<IHealthInfo>{
        return await ServicesFacade.HealthService.getHealth();
    }
}