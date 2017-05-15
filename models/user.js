var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  kullaniciAdi: String,
  eposta: String,
  sifre: String,
  unvan: String,
  rolid: Number,
  durum: Boolean
});
mongoose.model('user', UserSchema);

module.exports = mongoose.model('user');