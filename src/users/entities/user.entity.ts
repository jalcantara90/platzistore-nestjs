import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, type: String }) email: string;
  @Prop({ required: true, type: String }) password: string;
  @Prop({ required: true, type: String }) role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
