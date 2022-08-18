import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSourceModule } from './data-source.module';
import { EntitiesModule } from './entities/entities.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataSourceModule,
    EntitiesModule,
    CoreModule,
  ],
})
export class AppModule {}
