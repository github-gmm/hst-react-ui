---
title: 表格
toc: content
order: 2
group:
  title: 通用
  order: 1
---

# HstTable 表格

## 介绍

表格组件 HstTable

## 使用

```tsx | pure
import { HstTable } from 'hst-react-ui';

export default () => (
  <HstPopup title="标题" content="内容">
    弹框
  </HstPopup>
);
```

## 示例

<code src="./demo/base.tsx">基础</code>

## API

### 基础

| 属性        | 类型                               | 默认值  | 说明             |
| ----------- | ---------------------------------- | ------- | ---------------- |
| ref         | <a>IHstPopupRef</a>                |         | 父元素           |
| type        | `modal` `drawer`                   | `modal` | 弹框类型         |
| children    | React.ReactNode                    |         | 点击元素         |
| content     | React.ReactNode                    |         | 弹框内容         |
| beforeOpen  | `() => Promise<boolean> / boolean` |         | 打开弹框之前回调 |
| beforeClose | `() => Promise<boolean> / boolean` |         | 关闭弹框之前回调 |

### IHstPopupRef

| 属性    | 类型         | 默认值 | 说明     |
| ------- | ------------ | ------ | -------- |
| onOpen  | `() => void` |        | 打开弹框 |
| onClose | `() => void` |        | 关闭弹框 |
