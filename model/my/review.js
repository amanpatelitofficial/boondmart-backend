const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  order: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  comment: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);