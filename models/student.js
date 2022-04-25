const mongoose= require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = Schema({
    firstName: String,
    lastName: String,
    address: {
        type: mongoose.Types.ObjectId,
        ref: "Address"
    }
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;