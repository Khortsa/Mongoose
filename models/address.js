const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = Schema({
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String
});
const Address = mongoose.model('Address', addressSchema);

module.exports = Address;