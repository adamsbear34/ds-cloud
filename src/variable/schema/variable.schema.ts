import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VariableDocument = Variable & Document;

@Schema()
export class Variable {
  @Prop()
  name: string;

  @Prop()
  value: string;

  @Prop()
  type: string;

  @Prop()
  tag: string;
}
export const VariableSchema = SchemaFactory.createForClass(Variable);
