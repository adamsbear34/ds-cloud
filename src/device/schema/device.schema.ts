import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ collection: 'device ' })
export class Device {
  @Prop()
  name: string;

  @Prop()
  identifier: string;

  @Prop([Number])
  status: number;

  @Prop()
  registrationDate: Date;
}
export const DeviceSchema = SchemaFactory.createForClass(Device);
