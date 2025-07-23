"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[481],{71752:function(K,d,e){var C;e.r(d),e.d(d,{demos:function(){return T}});var i=e(15009),D=e.n(i),c=e(99289),W=e.n(c),p=e(67294),Z=e(81635),O=e(61006),z=e(1318),T={"hstpopup-demo-base":{component:p.memo(p.lazy(function(){return e.e(800).then(e.bind(e,51830))})),asset:{type:"BLOCK",id:"hstpopup-demo-base",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(19586).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.26.6"},"hst-react-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4E2D\u95F4\u5F39\u6846"},context:{"@ant-design/pro-components":Z,antd:O,"hst-react-ui":z,react:C||(C=e.t(p,2))},renderOpts:{compile:function(){var $=W()(D()().mark(function o(){var t,L=arguments;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(t=l.sent).default.apply(t,L));case 3:case"end":return l.stop()}},o)}));function N(){return $.apply(this,arguments)}return N}()}},"hstpopup-demo-base1":{component:p.memo(p.lazy(function(){return e.e(800).then(e.bind(e,88067))})),asset:{type:"BLOCK",id:"hstpopup-demo-base1",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(81957).Z},antd:{type:"NPM",value:"5.26.6"},"hst-react-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4FA7\u5F39\u6846"},context:{antd:O,"hst-react-ui":z,react:C||(C=e.t(p,2))},renderOpts:{compile:function(){var $=W()(D()().mark(function o(){var t,L=arguments;return D()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(t=l.sent).default.apply(t,L));case 3:case"end":return l.stop()}},o)}));function N(){return $.apply(this,arguments)}return N}()}}}},1318:function(K,d,e){e.r(d),e.d(d,{HstButton:function(){return l},HstPopup:function(){return ae}});var C=e(97857),i=e.n(C),D=e(15009),c=e.n(D),W=e(99289),p=e.n(W),Z=e(13769),O=e.n(Z),z=e(5574),T=e.n(z),$=e(40238),N=e(83622),o=e(67294),t=e(85893),L=["onClick","variant","color","size","children"],G=function(a){var h=(0,o.useState)(!1),H=T()(h,2),I=H[0],y=H[1],u=a.onClick,f=a.variant,v=f===void 0?"solid":f,M=a.color,j=M===void 0?"primary":M,S=a.size,R=S===void 0?"middle":S,E=a.children,g=O()(a,L),A=(0,$.Z)(function(){var r=p()(c()().mark(function U(B){return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return y(!0),s.prev=1,s.next=4,u==null?void 0:u(B);case 4:return s.prev=4,y(!1),s.finish(4);case 7:case"end":return s.stop()}},U,null,[[1,,4,7]])}));return function(U){return r.apply(this,arguments)}}(),{wait:300}),b=A.run,x=["link"].includes(v)?"0":void 0,F=["small"].includes(R)?"12px":void 0;return(0,t.jsx)(N.ZP,i()(i()({variant:v,color:j,size:R,loading:I,onClick:b,style:{padding:x,fontSize:F}},g),{},{children:E}))},l=(0,o.memo)(G),J=e(85265),Q=["children","className","footer","onClosed"],V=function(a){var h=a.children,H=h===void 0?null:h,I=a.className,y=a.footer,u=a.onClosed,f=O()(a,Q),v=(0,o.useCallback)(function(){u==null||u()},[u]);return(0,t.jsx)(J.Z,i()(i()({className:"hst-popup-content".concat(I?"".concat(I):""),open:!0,maskClosable:!1,onClose:v,extra:y},f),{},{children:H}))},X=(0,o.memo)(V),Y=e(85576),k=["width","children","className","onSave","onClosed"],_=function(a){var h=a.width,H=h===void 0?378:h,I=a.children,y=I===void 0?null:I,u=a.className,f=a.onSave,v=a.onClosed,M=O()(a,k),j=(0,o.useState)(!1),S=T()(j,2),R=S[0],E=S[1],g=(0,o.useCallback)(function(){E(!1),v==null||v()},[v]),A=(0,o.useCallback)(p()(c()().mark(function b(){var x;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(E(!0),x=!0,!f){r.next=11;break}return r.prev=3,r.next=6,f();case 6:x=r.sent,r.next=11;break;case 9:r.prev=9,r.t0=r.catch(3);case 11:x?g():E(!1);case 12:case"end":return r.stop()}},b,null,[[3,9]])})),[f,g]);return(0,t.jsx)(Y.Z,i()(i()({className:"hst-popup-content".concat(u?"".concat(u):""),open:!0,width:H,maskClosable:!1,confirmLoading:R,onCancel:g,onOk:A},M),{},{children:y}))},q=(0,o.memo)(_),ee=["type","children","content","footer","beforeOpen","beforeClose","onSave"],ne=(0,o.forwardRef)(function(m,a){var h=m.type,H=h===void 0?"modal":h,I=m.children,y=I===void 0?(0,t.jsx)(t.Fragment,{}):I,u=m.content,f=u===void 0?(0,t.jsx)(t.Fragment,{}):u,v=m.footer,M=m.beforeOpen,j=m.beforeClose,S=m.onSave,R=O()(m,ee),E=(0,o.useState)(!1),g=T()(E,2),A=g[0],b=g[1],x=H==="modal",F=function(){var B=p()(c()().mark(function P(){var s;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!M){n.next=6;break}return n.next=3,M();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:s=n.t0,b(s);case 9:case"end":return n.stop()}},P)}));return function(){return B.apply(this,arguments)}}(),r=function(){var B=p()(c()().mark(function P(){var s;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!j){n.next=6;break}return n.next=3,j();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:s=n.t0,b(!s);case 9:case"end":return n.stop()}},P)}));return function(){return B.apply(this,arguments)}}(),U=function(){var B=p()(c()().mark(function P(){var s;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!S){n.next=6;break}return n.next=3,S();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:return s=n.t0,n.abrupt("return",s);case 9:case"end":return n.stop()}},P)}));return function(){return B.apply(this,arguments)}}();return(0,o.useImperativeHandle)(a,function(){return{onClose:r,onOpen:F}}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{onClick:F,children:y}),A&&(x?(0,t.jsx)(q,i()(i()({onClosed:r,onSave:U,footer:v},R),{},{children:f})):(0,t.jsx)(X,i()(i()({onClose:r,footer:v},R),{},{children:f})))]})}),ae=(0,o.memo)(ne)},5373:function(K,d,e){e.r(d),e.d(d,{texts:function(){return C}});const C=[{value:"\u57FA\u7840\u7684\u5F39\u6846\u7EC4\u4EF6 HstPopup",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"type",paraId:1,tocIndex:6},{value:"modal",paraId:1,tocIndex:6},{value:" ",paraId:1,tocIndex:6},{value:"drawer",paraId:1,tocIndex:6},{value:"modal",paraId:1,tocIndex:6},{value:"\u5F39\u6846\u7C7B\u578B",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"\u70B9\u51FB\u5143\u7D20",paraId:1,tocIndex:6},{value:"content",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"\u5F39\u6846\u5185\u5BB9",paraId:1,tocIndex:6},{value:"beforeOpen",paraId:1,tocIndex:6},{value:"() => Promise",paraId:1,tocIndex:6},{value:" / boolean",paraId:1,tocIndex:6},{value:"\u6253\u5F00\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:1,tocIndex:6},{value:"beforeClose",paraId:1,tocIndex:6},{value:"() => Promise",paraId:1,tocIndex:6},{value:" / boolean",paraId:1,tocIndex:6},{value:"\u5173\u95ED\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:1,tocIndex:6},{value:"onSave",paraId:1,tocIndex:6},{value:"() => Promise",paraId:1,tocIndex:6},{value:" / boolean",paraId:1,tocIndex:6},{value:"\u4FDD\u5B58\u56DE\u8C03",paraId:1,tocIndex:6}]},19586:function(K,d){d.Z=`import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
import { Space } from 'antd';
import { HstButton, HstPopup } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <HstPopup
        title="\u64CD\u4F5C"
        content="\u662F\u5426\u9700\u8981\u7981\u7528\u8BE5\u8BB0\u5F55\uFF1F"
        onSave={() => {
          return true;
        }}
      >
        <HstButton>\u4E8C\u6B21\u786E\u8BA4\u6846</HstButton>
      </HstPopup>

      <HstPopup
        title="\u64CD\u4F5C"
        content={
          <>
            <ProFormRadio.Group
              name="audit"
              options={[
                { label: '\u901A\u8FC7', value: 'pass' },
                { label: '\u4E0D\u901A\u8FC7', value: 'fail' },
              ]}
            />
            <ProFormTextArea name="audit_reason" />
          </>
        }
        onSave={() => {
          return false;
        }}
      >
        <HstButton>\u5BA1\u6838\u6846</HstButton>
      </HstPopup>
    </Space>
  );
};
`},81957:function(K,d){d.Z=`import { Space } from 'antd';
import type { IHstPopupRef } from 'hst-react-ui';
import { HstButton, HstPopup } from 'hst-react-ui';
import React, { useRef } from 'react';

export default () => {
  const popupRef = useRef<IHstPopupRef>(null);

  return (
    <Space>
      <HstPopup
        ref={popupRef}
        type="drawer"
        title="\u64CD\u4F5C"
        content={<>222</>}
        footer={
          <Space>
            <HstButton
              variant="outlined"
              color="default"
              onClick={() => {
                popupRef.current?.onClose();
              }}
            >
              \u5173\u95ED
            </HstButton>
            <HstButton
              onClick={() => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(true);
                    popupRef.current?.onClose();
                  }, 3000);
                });
              }}
            >
              \u4FDD\u5B58
            </HstButton>
          </Space>
        }
      >
        <HstButton>\u7F16\u8F91\u6846</HstButton>
      </HstPopup>
    </Space>
  );
};
`}}]);
