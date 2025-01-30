import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    let isAuth = true;
    if (!isAuth) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Not authenticated',
      });
    }

    req.user = 'Hàng';
    next();
  }
}
