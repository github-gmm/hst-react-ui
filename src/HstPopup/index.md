---
title: 弹框
toc: content
order: 2
group:
  title: 通用
  order: 1
---

# HstPopup 弹框

## 介绍

基础的弹框组件 HstPopup

## 示例

<code src="./demo/base.tsx">中间弹框</code>
<code src="./demo/base1.tsx">侧弹框</code>

## API

### 基础

| 属性        | 类型                             | 默认值  | 说明             |
| ----------- | -------------------------------- | ------- | ---------------- |
| type        | `modal` `drawer`                 | `modal` | 弹框类型         |
| children    | React.ReactNode                  |         | 点击元素         |
| content     | React.ReactNode                  |         | 弹框内容         |
| beforeOpen  | () => Promise<boolean> / boolean |         | 打开弹框之前回调 |
| beforeClose | () => Promise<boolean> / boolean |         | 关闭弹框之前回调 |
| onSave      | () => Promise<boolean> / boolean |         | 保存回调         |
