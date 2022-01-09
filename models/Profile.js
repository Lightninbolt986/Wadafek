const mongoose = require(`mongoose`);
const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  highTime: { type: Number, default: 0 },
  doorScore:  {type: Number, default:0}
})

const model = mongoose.model(`ProfileModel2`, profileSchema);

module.exports = model;