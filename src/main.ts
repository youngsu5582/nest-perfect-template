import { NestBootStrapApplication } from './nest-bootstrap.application';

async function bootstrap() {
  NestBootStrapApplication.getInstance().emit('ready');
}
bootstrap();
