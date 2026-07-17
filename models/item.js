import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Item name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: { type: Number, required: [true, 'Price is required'], min: 0 },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
