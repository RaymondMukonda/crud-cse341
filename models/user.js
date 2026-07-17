import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    minlength: [2, 'Name must be at least 2 characters long'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
  },
  age: { 
    type: Number, 
    min: [0, 'Age must be positive'], 
    max: [120, 'Age seems unrealistic'] 
  },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'student', 'developer'], 
    default: 'user' 
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;
