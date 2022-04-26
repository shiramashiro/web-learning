const express = require('express')()
const { Server } = require('socket.io')
const { createServer } = require('http')

const httpServer = createServer(express)
const io = new Server(httpServer)

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/client.html')
})

io.on('connection', (socket) => {
    socket.on('msg from client', (data) => {
        io.emit('msg from server', data)
    })
})

httpServer.listen(3000, () => {
    console.log('listening port on 3000')
})
