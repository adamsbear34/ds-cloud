import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { BullModule } from '@nestjs/bull';
import { ClientProcessor } from './client.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'ds-transactions',
    }),
  ],
  controllers: [ClientController],
  providers: [ClientService, ClientProcessor],
})
export class ClientModule {}
