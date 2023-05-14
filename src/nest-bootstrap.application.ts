import { NestExpressApplication } from '@nestjs/platform-express';
import { EventEmitter } from 'events';

import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export class NestBootStrapApplication extends EventEmitter {
  private static INSTANCE: NestBootStrapApplication;
  private static PORT = 3000;
  private _application: NestApplication = null;

  private constructor() {
    super();
    this.on('ready', () => {
      this.start();
    });
  }

  /**
   * 서버 시작
   */
  private async start() {
    this._application = await NestFactory.create<NestApplication>(
      AppModule,
      {},
    );
    await this._application.listen(NestBootStrapApplication.PORT);
  }

  /**
   * Singleton Pattern 을 준수하기 위해 INSTANCE 가 없을때만 return
   *
   * @returns NestBootStrapApplication
   */
  public static getInstance() {
    if (!NestBootStrapApplication.INSTANCE) {
      NestBootStrapApplication.INSTANCE = new NestBootStrapApplication();
    }
    return NestBootStrapApplication.INSTANCE;
  }
}
