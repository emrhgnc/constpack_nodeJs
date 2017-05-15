var mongoose = require('mongoose');  
var ProjectSchema = new mongoose.Schema({  
  projeAdi: String,
  adres: String,
  projePlani: String,
  durum: Boolean
});
mongoose.model('project', ProjectSchema);

module.exports = mongoose.model('project');