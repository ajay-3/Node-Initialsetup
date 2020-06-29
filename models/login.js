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
 *         type:string
 *     
 */
const schema = new mongoose.Schema({
   phoneNumber:{
       type:String,
       required:true
   },
   otp:{
       type:Number
   },
   expired:{
       type:Boolean,
       default:false
   }
});

schema.set('collection', 'otpLogin');
module.exports = mongoose.model('otpLogin', schema);