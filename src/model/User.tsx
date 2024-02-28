import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    required: [true, "Name field is required."],
    minLength: [2, "Name must be 2 character long."],
    type: Schema.Types.String,
  },
  email: {
    required: [true, "Email field is required."],
    type: Schema.Types.String,
    unique: true,
   
  },
  password: {
    required: [true, 'Please enter password here'],
    type: Schema.Types.String,
  },
});

// Check if the model already exists; if not, create it
export const User = mongoose?.models?.User || mongoose.model('User', userSchema);
