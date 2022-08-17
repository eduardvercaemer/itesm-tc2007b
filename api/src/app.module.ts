import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source.module';

@Module({
  imports: [ConfigModule.forRoot(), DataSourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
