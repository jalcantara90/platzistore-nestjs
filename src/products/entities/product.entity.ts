import { Brand } from '../brands/entities/brand.entity';

import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Product extends Document {
  @Prop({ required: true }) name: string;
  @Prop() description: string;
  @Prop({ type: Number, index: true }) price: number;
  @Prop() image: string;
  @Prop({ type: Number }) stock: number;

  @Prop(raw({
    name: { type: String },
    image: { type: String }
  }))
  category: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ price: 1, stock: -1 });

