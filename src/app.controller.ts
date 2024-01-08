import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('coffee-types')
  async getCoffeeTypes(
    @Res() response
  ) {
    try {
      const data = await this.appService.getCoffeeTypes();
      return response.status(HttpStatus.OK).json({
        message: 'success',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}