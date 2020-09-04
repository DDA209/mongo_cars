const mongoose = require('mongoose'); 

(async function() {

    const connect = await mongoose.connect(`mongodb://localhost:27017/cars`);
    console.log(`Connection au port 27017 :`, connect);

    const carSchema = await new mongoose.Schema({
        brand: String,
        model: String,
        year: Number,
        Created:{
            type: Date,
            default: Date.now
        }
    }); //carSchema

    const Car = await mongoose.model("Car", carSchema)

    const renaultEspace = new Car({
        brand: 'Peugeot',
        model: '308',
        year: '2017'
    })

    const create = await renaultEspace.save((err, car) => {
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
    }, 10000);

})();

