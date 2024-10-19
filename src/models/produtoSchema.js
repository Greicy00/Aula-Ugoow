import mongoose from "mongoose";

const { Schema } = mongoose;



const produtoSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        nome: {
            type: String,
        },
        
        valor: {
            type: String,
        },
        quantidade: {
            type: String
        }
       
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Produto ||
    mongoose.model("Produto", produtoSchema);
