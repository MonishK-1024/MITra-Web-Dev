const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true},
        phone: { type: Date, required: true},
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true}
    },
    { collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model