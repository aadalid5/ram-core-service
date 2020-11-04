import { Controller, Get} from 'routing-controllers';
import { ServicesFacade } from '../../core/services/facade/ServicesFacade';
import { IHealthInfo } from '../../core/domain/IHealthInfo';

@Controller()
export class HealthController{
    @Get('/health')
    getHealth(): IHealthInfo{
        return ServicesFacade.HealthService.getHealth();
    }
}