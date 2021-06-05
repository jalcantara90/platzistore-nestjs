import { SchemaFactory } from '@nestjs/mongoose';

import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill, SkillSchema } from './skills.entity';

@Schema()
export class Costumer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop({
    type: [ SkillSchema ]
  })
  skills: Types.Array<Skill>;
}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);
