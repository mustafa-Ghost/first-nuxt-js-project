const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const Item = require('./models/item')

const app = express()
dotenv.config()

const port = process.env.PORT || 9000

app.use(cors({
    methods:['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

mongoose.connect(process.env.DB)
        .then(() => {
            console.log('database connected...')
        })
        .catch(err => {
            console.log(err)
        })

app.get('/get-data', async (req, res) => {
    await Item.find()
                    .then(res => {
                        return res
                    })
                    .then(json => {
                        res.status(200).json(json)
                    })
})
app.post('/add-item', async (req, res) => {
    try {
        const data = req.body;
        const id = data.id;

        const existingItem = await Item.findOne({ id });

        if (existingItem) {
            await Item.findOneAndUpdate({ id }, data);
            console.log('Item updated');
        } else {
            const newItem = new Item(data);
            await newItem.save();
            console.log('New item created');
        }

        res.status(201).json({ message: "SUCCESS" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`)
})
