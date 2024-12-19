import mongoose from "mongoose";

const productschema= new mongoose.Schema({
    name:{
        type: String,
        required: true
},
 price:{
    type:Number,
    required:true
 },
 image:{
    type:String,
    required:true
 },

},{
   timestamps: true // to know when the product is createdat and updatedat 
}
);

const Product= mongoose.models.Product || mongoose.model('Product', productschema);
export default Product;