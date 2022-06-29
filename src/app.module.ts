import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceModule } from './device/device.module';
import { VariableModule } from './variable/variable.module';
import { UserModule } from './user/user.module';
import { ClusterModule } from './cluster/cluster.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/ds_cloud'),
    ClientModule,
    DeviceModule,
    VariableModule,
    UserModule,
    ClusterModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
