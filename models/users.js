const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required  : true,
    },
    phone: {
        type:String ,
        require :true,
    },
    image:{        
        type:String ,
        require :true,
    },
    created:{
        type:Date ,
        require :true,
        default: Date.now,
    },

});

module.exports = mongoose.model('user', userSchema);
