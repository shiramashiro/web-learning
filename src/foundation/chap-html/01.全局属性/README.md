# 什么是全局属性

全局属性是所有 HTML 元素共有属性；它们可以用于所有元素，即使属性可能对某些元素不起作用。

# 全局属性解释

## accesskey

提供了为当前元素生成键盘快捷键的提示。简单来说，就是通过 alt + `键` 选择对应的元素，并提示。

比如，为 div 元素添加一个 accesskey="a"，使用快捷键 `alt + a` 来选择这个元素。

虽然 accesskey 是全局属性，但它可能对非输入型的元素不起作用。

## contenteditable

表示当前元素是否可以被编辑。该元素对于 input 元素不起作用。通常来说，可以对原本不可编辑的元素进行编辑（如果设置为 true）。

## data-\*

我们可以在所有 HTML 元素上嵌入自定义数据属性，并可以通过 JavaScript 进行专有数据的交换。通过 HTMLElement 接口来访问 dataset。HTMLElement.dataset 是一个对象，即`*`代表对象的一个 key。

## dir

指示元素中文本的方向。ltr 代表从左到右（默认排列方向），rtl 代表从右到左。

## draggable

表示一个元素是否可以被拖动。

## inputmode

提供了用户在编辑元素或其内容时可能输入的数据类型的提示。

## item 系列

### itemid
