const mongoose =require('mongoose');

const schema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    userName: {
        type: String,
         required:true
      },
    password: {
        type: String,
        required: true,
    }
});

schema.set('collection', 'users');
module.exports = mongoose.model('user', schema);
