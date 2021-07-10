import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:987654321@proyectofinal.ecule.mongodb.net/ProyectoFinal?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology :true
})
.then(db => console.log('base de datos conectada'))
.catch(error => console.log(error))