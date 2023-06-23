import { Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Hello')
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
