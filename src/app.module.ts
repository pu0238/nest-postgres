import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { getEnv } from './middleware/getEnv';
import { User } from './user/user.entity';
import { default as config } from '../ormconfig';

const nodeEnvironment = getEnv('NODE_ENV').toUpperCase();
@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
