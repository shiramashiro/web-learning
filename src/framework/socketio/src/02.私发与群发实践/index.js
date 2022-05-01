const express = require('express')()
const { Server } = require('socket.io')
const { createServer } = require('http')

const httpServer = createServer(express)
const io = new Server(httpServer)

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/01.画圆.html')
})

io.on('connection', (socket) => {
    // 服务器监听到一个群发消息。
    socket.on('to server', (data) => {
        // 服务器把消息群发给所有客户端。
        io.emit('to clients', data.message)
    })

    // 服务器监听到一个消息
    socket.on('to server private', (data) => {
        // 服务器把自己私发的消息转发给自己，
        io.to(socket.id).emit('to clients', data.message)
        // 服务器把私发消息转发给被私发的客户端。
        io.to(data.id).emit('to client private', data.message)
    })
})

httpServer.listen(3000, () => {
    console.log('listening port on 3000')
})
