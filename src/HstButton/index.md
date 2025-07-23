---
title: 按钮
toc: content
order: 1
group:
  title: 通用
  order: 1
demo:
  cols: 2
---

# HstButton 按钮

## 介绍

基础的按钮组件 HstButton。

## 示例

<code src="./demo/base.tsx">实心</code>
<code src="./demo/base5.tsx">无边框</code>

<code src="./demo/base1.tsx">空心</code>
<code src="./demo/base4.tsx">虚线</code>

<code src="./demo/base2.tsx">文本</code>

<code src="./demo/base3.tsx">加载</code>
<code src="./demo/base7.tsx">禁用</code>

<code src="./demo/base6.tsx">块</code>

## API

### 基础

| 属性    | 类型                        | 默认值    | 说明                       |
| ------- | --------------------------- | --------- | -------------------------- |
| variant | <a>variantType</a>          | `solid`   | 按钮类型                   |
| color   | <a>PresetColors</a>         | `primary` | 按钮颜色                   |
| block   | boolean                     | `false`   | 按钮宽度调整为父宽度的选项 |
| disable | boolean                     | `false`   | 禁用状态                   |
| onClick | (e) => Promise<void> / void |           | 点击按钮回调               |

### variantType

`solid` `outlined` `dashed` `filled` `link`

### PresetColors

`primary` `default` `blue` `purple` `cyan` `green` `magenta` `pink` `red` `orange` `yellow` `volcano` `geekblue` `lime` `gold`
