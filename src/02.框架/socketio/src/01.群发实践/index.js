const express = require('express')()
const { Server } = require('socket.io')
const { createServer } = require('http')

const httpServer = createServer(express)
const io = new Server(httpServer)

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/01.画圆.html')
})

io.on('connection', (socket) => {
    socket.on('to server', (data) => {
        io.emit('to clients', data)
    })
})

httpServer.listen(3000, () => {
    console.log('listening port on 3000')
})
