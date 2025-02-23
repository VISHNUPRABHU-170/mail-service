import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor (private configService: ConfigService) { }

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['access-key'];
    const accessKey = this.configService.get<string>('ACCESS_KEY');
    if (!token || !accessKey || token !== accessKey) {
      throw new UnauthorizedException('Unauthorized access');
    }
    // If the token is valid, proceed to the next middleware or route handler
    next();
  }
}
