const { default: mongoose } = require("mongoose");
const getNextSequenceValue = require('../Middleware/counter')
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const doc = this;
  if (doc.id == null) {
      const seq = await getNextSequenceValue("User");
      doc.id = seq;
  }
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
