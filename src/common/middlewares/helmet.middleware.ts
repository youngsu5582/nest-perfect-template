import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

/**
 * 각종 보안 처리하는 Helmet Middleware
 *
 * @param app
 */
export function useHelmet(app: NestExpressApplication) {
  app.use(helmet());
}
