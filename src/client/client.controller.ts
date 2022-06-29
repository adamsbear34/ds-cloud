import { Controller, Post, Body, Get, Param, Headers } from '@nestjs/common';
import { ClientService } from './client.service';
import { AddTransactionRequest } from './dto/add-transaction.request';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('/transaction')
  async processClientMessage(
    @Body() addTransactionRequest: AddTransactionRequest,
  ) {
    await this.clientService.addTransactionToQueue({
      sum: addTransactionRequest.sum,
      bayId: addTransactionRequest.bayId,
    });
  }

  @Get('transaction/:id')
  async getDataInQueue(@Param('id') id: string, @Headers() headers) {
    const bay_status = headers.b_status;
    if (bay_status == 0) {
      const queue = await this.clientService.getDataInQueue(id);
      return { data: queue };
    } else {
      return { message: 'Bay is busy' };
    }
  }
}
