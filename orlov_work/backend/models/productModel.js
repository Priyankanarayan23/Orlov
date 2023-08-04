const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the products name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please enter the description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter the price"]
        ,maxLength:[8,"Price cannot exceed 8 figure"]
    },
    images:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category:{
        type:String,
        required:[true,"Please Enter Product Category"]   
    },
    Stock:{
        type:Number,
        required:[true,"Please enter the stock amount"],
        maxLength:[4,"stocks cant be more than 9999"],
        default:1
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productSchema);