import { Schema, model } from "mongoose";

const esquemaproducto = new Schema({
    nombre: String,
    categoria: String,
    precio: Number,
    imgURL: String,
    },{
        timestamps: true,
        versionKey: false
    })

    export default model("producto",esquemaproducto)