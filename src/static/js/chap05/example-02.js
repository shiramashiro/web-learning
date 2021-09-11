function doSomething(eventName, timeout, callback) {
    console.log(`'${eventName}'正在进行中...`)
    setTimeout(() => {
        callback(`'${eventName}'事件已完成`) // 执行回调函数，提供一点信息。
    }, timeout)
}

// 异步任务
doSomething('小明购买奶茶', 3000, (info) => {
    console.log(info)
    doSomething('小明和朋友聊天', 1000, (info) => {
        console.log(info)
    })
})

// 同步任务
console.log('与此同时小明正在刷视频！')
