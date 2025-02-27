// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
      }
    ]
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)
export default User
