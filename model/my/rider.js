const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  houseNumber: { type: String, required: false },
  floor: { type: String, required: false },
  area: { type: String, required: true },
  landmark: { type: String, required: false },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  isDefault: { type: Boolean, default: false },
});

const riderSchema = new mongoose.Schema({
  _id: { type: String }, 
  userId: { type: String, required: true, unique: true },  
  name: { type: String, required: true },
  phone_number: { type: String, required: true, unique: true },
  vehicle_details: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  image: {
    type: String,
    required: false,
  },
  dateOfBirth: { type: String, required: false },

  // Document images
  aadharImage: {
    type: String,
    required: false
  },
  panImage: {
    type: String,
    required: false
  },
  licenseImage: {
    type: String,
    required: false
  },
  vehicleRegistrationImage: {
    type: String,
    required: false
  },

  deviceToken: {
    type: String,
    required: false
  },  
  gender: { 
    type: String,
    default: 'not_specified',
    validate: {
      validator: function(v) {
        return !v || ['male', 'female', 'other', 'not_specified', ''].includes(v);
      },
      message: props => `${props.value} is not a valid gender value`
    }
  },
  addresses: [addressSchema],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  reviewIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  current_status: {
    type: String,
    enum: ["Available", "Busy", "Inactive", "Suspended"],
    default: "Available",
  },
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
 
 
 
 
 
 
 
  currentLocation: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],  // This is the correct way to define array of numbers
      required: true,
      default: [0, 0]  // Default coordinates
    }
  },
  current_status: String,
  isAvailable: Boolean,
  last_assigned: Date,
  deviceToken: String
});

module.exports = mongoose.model("Rider", riderSchema);