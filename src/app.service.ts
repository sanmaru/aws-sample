import { Injectable } from '@nestjs/common';

/**
 * @swagger
 * paths:
 *   "/":
 *     get:
 *       summary: "Hello world"
 *       response:
 *         "200":
 *           description: "이렇게 작성할 수 있습니다."
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
