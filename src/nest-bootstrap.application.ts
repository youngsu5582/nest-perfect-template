import { EventEmitter } from 'events';

export class NestBootStrapApplication extends EventEmitter {
  private static INSTANCE: NestBootStrapApplication;




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
