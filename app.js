const fs = require('fs');
const express = require('express');
const task2 = require('./task2');
const task3 = require('./task3');


const app = express();

app.get('/', (req, res) => {
    const data = "hello World"
    res.send(data)
    // res.status(200).json({
    //     status: 'sucess',
    //     data: {
    //         data,
    //     }
    // })
})

const arr = [1, 2, 3, 4, -5, 6, 7, 8, 9]
console.log(`Sum of array is ${task2(arr)}`);

module.exports = app;