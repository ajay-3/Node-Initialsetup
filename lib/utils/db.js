const mongoose = require('mongoose');
const config = require('config');

exports.connection = async function(){
  const URI = `mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`;

  //`mongodb+srv://${config.get('db.name')}:${config.get('db.password')}@cluster0-po2or.mongodb.net/${config.get('db.project_name')}?retryWrites=true&w=majority`;
  
  await mongoose.connect(URI,{
      useNewUrlParser:true
  });
};  