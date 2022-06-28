import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DsClientModule } from './ds-client/ds-client.module';
import { DsClinetService } from './ds-client/ds-clinet.service';
import { BullModule } from '@nestjs/bull';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    DsClientModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService, DsClinetService],
})
export class AppModule {}
