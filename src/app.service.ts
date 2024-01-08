import { Injectable } from '@nestjs/common';
import * as mockedCoffeeTypes from './data/coffee-types.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the world of Coffee!';
  }

  getCoffeeTypes() {
    return mockedCoffeeTypes;
  }
}
