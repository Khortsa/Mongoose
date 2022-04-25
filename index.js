const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/populate");
const Schema = mongoose.Schema;
const Student = require('./models/student');
const Address = require('./models/address');





// const studentSchema = Schema({
//     firstName: String,
//     lastName: String,
//     address: {
//         type: mongoose.Types.ObjectId,
//         ref: "Address"
//     }
// });
// const Student = mongoose.model('Student', studentSchema);

// const addressSchema = Schema({
//     streetName: String,
//     streetNumber: String,
//     postCode: String,
//     city: String
// });
// const Address = mongoose.model('Address', addressSchema);

const studentAddress = new Address({
    streetName: "rue de la reunion",
    streetNumber: "15",
    postCode: "75020",
    city: "Paris" 
});
studentAddress.save().then(function (result){
//     const personA= new Student({
//         firstName: "Jean",
//         lastName: "Guo",
//         address: result._id
//     });
//     personA.save((err) =>{

//     });
});

Student
.findOne({_id: "6261600bf4e9b086ec3e7dfb"})
.populate('address')
.exec((err, student) =>{
    console.log("This is", student);
});

