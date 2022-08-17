import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './data-source.module';
import { EntitiesModule } from './entities/entities.module';
import { FormCreationModule } from './core/form-creation/form-creation.module';

@Module({
  imports: [ConfigModule.forRoot(), DataSourceModule, EntitiesModule, FormCreationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
