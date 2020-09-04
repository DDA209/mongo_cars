const mongoose = require('mongoose'); 

(async function() {

    const connect = await mongoose.connect(`mongodb://localhost:27017/cars`);
    // console.log(`Connection au port 27017 :`, connect);

    const carSchema = new mongoose.Schema({
        brand: String,
        model: String,
        year: Number,
        created:{
            type: Date,
            default: Date.now
        }
    }); //carSchema
    
    const id = '5f5230e98fb21f4508245949';

    const Car = mongoose.model('car', carSchema);
    const mySearch = await Car.findById(id).exec();

    console.log('Résultat :', mySearch);










    setTimeout(() => {
        const disconnect = mongoose.connection.close();
        console.log('Déconnection de la base :', disconnect);
    }, 10000);

})();

