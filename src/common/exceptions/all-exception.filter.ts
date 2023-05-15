import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * 예외 발생시 Catch 하는 Filter
 */
@Catch(HttpException)
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse() as Response;
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message ?? 'Internal Server Error',
      error: exception.name ?? 'Internal Server Error',
    });
  }
}
