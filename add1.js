const mongoose = require('mongoose'); 

mongoose.connect(`mongodb://localhost:27017/cars`);
    

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    Created:{
        type: Date,
        default: Date.now
    }
}); //carSchema

const Car = mongoose.model("Car", carSchema);

const renaultEspace = new Car({
    brand: 'Renault',
    model: 'Espace',
    year: '1999'
});

renaultEspace.save((err, car) => {
    console.log('err', err);
    console.log('car', car);
    if (err){
        console.log('err',err);
    } else {
        console.log(`${car.brand} ${car.model} a été ajouté(e) avec l'ID ${car._id} dans la collection Cars`)
    }

});

setTimeout(() => {
    const disconnect = mongoose.connection.close();
    console.log('Déconnection de la base :', disconnect);
}, 5000);


