import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * 유효성 검사를 하기 위한 Middleware
 * -2023.05.14 DI 문제로 class-validator , class-transfomer install 해줘야함. ( npm install class-transfomer,class-validator )
 *
 * @param app
 */
export function useGlobalPipes(app: NestExpressApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false, // Error Message Enable
      transform: true, // 입력 data 원하는 형식 Auto Transform
      transformOptions: {
        enableImplicitConversion: true, // 암묵적 type  Transform 허용  ( String -> Number )
      },
    }),
  );
}
