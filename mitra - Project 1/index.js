const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'test'

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://mitra:mitra151@cluster0.w8tnh.mongodb.net/mitra?retryWrites=true&w=majority').then(()=>{
        console.log("Connected to the database...");
    }).catch((err)=>{
        console.log('Connection unsuccessful...')
    })
}

const app = express();

app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json())

app.post('/api/register', async (req, res) => {

    console.log(req.body)

    const { fullname, phone, username, password: plainTextPassword } = req.body

    if (!username || typeof username !== 'string') {
        return res.json({
            status: 'error',
            error: 'Invalid username'
        })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({
            status: 'error',
            error: 'Invalid password'
        })
    }

    if (plainTextPassword.length < 5) {
        return res.json({
            status: 'error',
            error: 'Password too small. Should atleast be 6 characters'
        })
    }

    const password = await bcrypt.hash(plainTextPassword, 10)

    // try {
        const response = await User.create({
            fullname,
            phone,
            username,
            password
        })
        console.log("User created successfully...", response)
    // } catch (error) {
    //     if (error.code === 11000) {
    //         return res.json({ status: 'error', error: 'Username already in use' })
    //     }
    //     throw error
    // }

    res.json({ status: 'ok' })
})

//api for login

app.post('/api/login', async (req, res) => {

    const { username, password } = req.body

    const user = await User.findOne({ username }).lean()

    if (!user) {
        return res.json({
            status: 'error',
            error: "Invalid Username/Password"
        })
    }

    if (await bcrypt.compare(password, user.password)) {

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            JWT_SECRET
        )

        return res.json({
            status: 'ok',
            data: token
        })
    }

    res.json({ status: 'error', error: "Invalid Username/Password", data: "" })

})

app.listen(80, () => {
    console.log("Server running at port 80")
})
