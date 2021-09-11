function add() {
    //1.先获取五个div属性
    let fiveValue = document.getElementsByClassName('input')
    //2.点击后，放入表格
    let addtr = document.createElement('tr')
    addtr.setAttribute('class', 'rows')
    for (let i = 0; i < fiveValue.length; i++) {
        let addtd = document.createElement('td')
        addtd.setAttribute('class', 'cols')
        addtd.innerText = fiveValue[i].value
        addtr.appendChild(addtd)
    }
    let table = document.getElementById('table')
    table.appendChild(addtr)
}

/**
 * 删除表格中一条信息
 * 1. 获取节点
 * 2. 删除节点
 */
function del() {
    // 1. 获取id为table的节点
    let table = document.getElementById('table')
    // 2. 获取要删除的行数
    let delInput = document.getElementById('del-input')
    // 3. 删除table下的delInput子节点
    table.removeChild(table.childNodes[Number(delInput.value) + 1])
    // 4. 问题，为什么要加1,
    // 答案：因为table下的子节点在最开始就有两个子节点了，分别为text、tbody这两个子节点，所以真正的数据是从索引值2开始的
    // 因此+1就符合我们要删除第一行时再delInput输入的1.
}

function rep() {
    //1.获取table节点
    let table = document.getElementById('table')
    //2.获取input输入添加的行数位置
    let delInput = document.getElementById('del-input')
    //3.获取五个div属性
    let fiveValue = document.getElementsByClassName('input')
    //4.放入参数
    let rows = table.childNodes[Number(delInput.value) + 1]
    let cols = rows.childNodes
    for (let i = 0; i < fiveValue.length; i++) {
        cols[i].textContent = fiveValue[i].value
    }
}
