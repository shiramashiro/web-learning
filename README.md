# practice

## chap01

### 添加数据

问题：如何一次性获取 box 下的所有 item？

答案：通过`document.getElementsByClassName('item')`能够一次性获取 box 节点下所有的子节点 item。

### 添加节点

问题：如何为 box 节点添加新的子节点 item？

答案：获取 box 节点；box.appendChild('')。

```javascript
// 获取box
let box = document.getElementById('box')

// 创建名为item的div节点
let item = document.createElement('div')

// box添加名为item的div节点
box.appendChild(item)
```

### 添加多个节点

问题：如果一次性需要添加 4 个子节点给 box 节点，怎么做？

答案：创建 4 个子节点；把 4 个子节点依次添加到 box 节点中。

```javascript
let box = document.getElementById('box')

for (let i = 0; i < 4; i++) {
    let son = document.createElement('div')
    box.appendChild(son)
}
```

## chap02

### 登陆

`v-modle`，该指令可以双向绑定表单控件或者组件，比如输入框。

```html
<div>
    <input v-model="uname" />
    <input v-model="pwd" />
</div>

<script>
    // Vue2语法
    const app = new Vue({
        data() {
            return {
                uname: '',
                pwd: ''
            }
        }
    })
</script>
```

` v-model` 指令双向绑定了 input 标签，只要用户在输入框输入了指，v-model 会将其值传递给 `data()` 内。

`v-bind`，该指令绑定一个或多个 attribute。

```html
<div id="app">
    <img v-bind:src="url" v-bind:style="{height: 100 + 'px'}" />
</div>

<script>
    // Vue2语法
    const app = new Vue({
        data() {
            return {
                url: 'http://localhost/img/gurasssss.jpg'
            }
        }
    })
</script>
```

`v-bind` 指令绑定了标签的属性，如果 `data()` 内的值变化了，那么相应地被绑定的标签的属性的值也会变化。
