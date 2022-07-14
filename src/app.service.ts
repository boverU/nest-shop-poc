import { Get, Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id: number): string {
    return 'Hello ID ' + id;
  }
}
