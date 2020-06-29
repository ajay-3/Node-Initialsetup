const mongoose =require('mongoose');

/**
 * @swagger
 * definations:
 *  user:
 *    type:object
 *     properties:
 *       id:
 *         type:string
 *       fname:
 *         type:string
 *       lname:
 *         type:string
 *       userName:
 *         type:string
 *       password:
 *          type:string
 *     
 */
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
