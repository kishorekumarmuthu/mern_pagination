import mongoose from "mongoose"

const doctorSchemaFields = {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}

const doctorschema = mongoose.Schema(doctorSchemaFields)

export const Doctors = mongoose.model('Doctor', doctorschema)