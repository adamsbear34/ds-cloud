import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DsClientModule } from './ds-client/ds-client.module';
import { DsClinetService } from './ds-client/ds-clinet.service';

@Module({
  imports: [DsClientModule],
  controllers: [AppController],
  providers: [AppService, DsClinetService],
})
export class AppModule {}
