const mongoose = require('mongoose');
const config = require('config');

exports.connection = async function(){
  const URI = `mongodb+srv://${config.get('db.name')}:${config.get('db.password')}@cluster0-po2or.mongodb.net/${config.get('db.project_name')}?retryWrites=true&w=majority`;
  await mongoose.connect(URI,{
      useUnifiedTopology:true,
      useNewUrlParser:true
  });
};