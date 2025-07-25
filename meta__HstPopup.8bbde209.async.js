"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[481],{71752:function(j,d,e){var I;e.r(d),e.d(d,{demos:function(){return $}});var l=e(15009),O=e.n(l),P=e(99289),D=e.n(P),p=e(67294),F=e(90881),H=e(61006),S=e(63743),$={"hstpopup-demo-base":{component:p.memo(p.lazy(function(){return e.e(800).then(e.bind(e,51830))})),asset:{type:"BLOCK",id:"hstpopup-demo-base",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(19586).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.26.6"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4E2D\u95F4\u5F39\u6846"},context:{"@ant-design/pro-components":F,antd:H,"hst-react-ui":S,react:I||(I=e.t(p,2))},renderOpts:{compile:function(){var M=D()(O()().mark(function o(){var a,E=arguments;return O()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,E));case 3:case"end":return r.stop()}},o)}));function B(){return M.apply(this,arguments)}return B}()}},"hstpopup-demo-base1":{component:p.memo(p.lazy(function(){return e.e(800).then(e.bind(e,88067))})),asset:{type:"BLOCK",id:"hstpopup-demo-base1",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(81957).Z},antd:{type:"NPM",value:"5.26.6"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4FA7\u5F39\u6846"},context:{antd:H,"hst-react-ui":S,react:I||(I=e.t(p,2))},renderOpts:{compile:function(){var M=D()(O()().mark(function o(){var a,E=arguments;return O()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,E));case 3:case"end":return r.stop()}},o)}));function B(){return M.apply(this,arguments)}return B}()}}}},63743:function(j,d,e){e.r(d),e.d(d,{HstButton:function(){return r},HstPopup:function(){return ee},HstTable:function(){return oe}});var I=e(97857),l=e.n(I),O=e(15009),P=e.n(O),D=e(99289),p=e.n(D),F=e(13769),H=e.n(F),S=e(5574),$=e.n(S),M=e(40238),B=e(83622),o=e(67294),a=e(85893),E=["onClick","variant","color","size","children"],W=function(t){var u=(0,o.useState)(!1),v=$()(u,2),c=v[0],x=v[1],s=t.onClick,h=t.variant,m=h===void 0?"solid":h,f=t.color,g=f===void 0?"primary":f,y=t.size,N=y===void 0?"middle":y,K=t.children,z=H()(t,E),A=(0,M.Z)(function(){var b=p()(P()().mark(function C(R){return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,s==null?void 0:s(R);case 4:return n.prev=4,x(!1),n.finish(4);case 7:case"end":return n.stop()}},C,null,[[1,,4,7]])}));return function(C){return b.apply(this,arguments)}}(),{wait:300}),U=A.run,L=["link"].includes(m)?"0":void 0,T=["small"].includes(N)?"12px":void 0;return(0,a.jsx)(B.ZP,l()(l()({variant:m,color:g,size:N,loading:c,onClick:U,style:{padding:L,fontSize:T}},z),{},{children:K}))},r=(0,o.memo)(W),G=e(85265),J=["children","className","footer","onClosed"],Q=function(t){var u=t.children,v=u===void 0?null:u,c=t.className,x=t.footer,s=t.onClosed,h=H()(t,J),m=(0,o.useCallback)(function(){s==null||s()},[s]);return(0,a.jsx)(G.Z,l()(l()({className:"hst-popup-content".concat(c?"".concat(c):""),open:!0,maskClosable:!1,onClose:m,extra:x},h),{},{children:v}))},V=(0,o.memo)(Q),X=e(85576),Y=["width","children","footer","className","onClosed"],w=function(t){var u=t.width,v=u===void 0?378:u,c=t.children,x=c===void 0?null:c,s=t.footer,h=s===void 0?(0,a.jsx)(a.Fragment,{}):s,m=t.className,f=t.onClosed,g=H()(t,Y),y=(0,o.useCallback)(function(){f==null||f()},[f]);return(0,a.jsx)(X.Z,l()(l()({className:"hst-popup-content".concat(m?"".concat(m):""),open:!0,width:v,maskClosable:!1,onCancel:y,footer:h},g),{},{children:x}))},k=(0,o.memo)(w),_=["type","children","content","footer","beforeOpen","beforeClose"],q=(0,o.forwardRef)(function(i,t){var u=i.type,v=u===void 0?"modal":u,c=i.children,x=c===void 0?(0,a.jsx)(a.Fragment,{}):c,s=i.content,h=s===void 0?(0,a.jsx)(a.Fragment,{}):s,m=i.footer,f=i.beforeOpen,g=i.beforeClose,y=H()(i,_),N=(0,o.useState)(!1),K=$()(N,2),z=K[0],A=K[1],U=v==="modal",L=function(){var b=p()(P()().mark(function C(){var R;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!f){n.next=6;break}return n.next=3,f();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:R=n.t0,A(R);case 9:case"end":return n.stop()}},C)}));return function(){return b.apply(this,arguments)}}(),T=function(){var b=p()(P()().mark(function C(){var R;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!g){n.next=6;break}return n.next=3,g();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:R=n.t0,A(!R);case 9:case"end":return n.stop()}},C)}));return function(){return b.apply(this,arguments)}}();return(0,o.useImperativeHandle)(t,function(){return{onClose:T,onOpen:L}}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:L,children:x}),z&&(U?(0,a.jsx)(k,l()(l()({onClosed:T,footer:m},y),{},{children:h})):(0,a.jsx)(V,l()(l()({onClose:T,footer:m},y),{},{children:h})))]})}),ee=(0,o.memo)(q),ne=e(31112),te=["tableKey"],ae=function(t){var u=t.tableKey,v=u===void 0?"id":u,c=H()(t,te);return(0,a.jsx)(ne.Z,l()({rowKey:v,options:{reload:!1,setting:!1,density:!1},pagination:{showQuickJumper:!0}},c))},oe=(0,o.memo)(ae)},5373:function(j,d,e){e.r(d),e.d(d,{texts:function(){return I}});const I=[{value:"\u5F39\u6846\u7EC4\u4EF6 HstPopup",paraId:0,tocIndex:1},{value:`import { HstPopup } from 'hst-react-ui';

export default () => (
  <HstPopup title="\u6807\u9898" content="\u5185\u5BB9">
    \u5F39\u6846
  </HstPopup>
);
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"ref",paraId:2,tocIndex:7},{value:"IHstPopupRef",paraId:2,tocIndex:7},{value:"\u7236\u5143\u7D20",paraId:2,tocIndex:7},{value:"type",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:" ",paraId:2,tocIndex:7},{value:"drawer",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u7C7B\u578B",paraId:2,tocIndex:7},{value:"children",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u70B9\u51FB\u5143\u7D20",paraId:2,tocIndex:7},{value:"content",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u5185\u5BB9",paraId:2,tocIndex:7},{value:"beforeOpen",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u6253\u5F00\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"beforeClose",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u5173\u95ED\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"onOpen",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u6253\u5F00\u5F39\u6846",paraId:3,tocIndex:8},{value:"onClose",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u5173\u95ED\u5F39\u6846",paraId:3,tocIndex:8}]},19586:function(j,d){d.Z=`import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
import { Space } from 'antd';
import { HstButton, HstPopup, IHstPopupRef } from 'hst-react-ui';
import React, { useRef } from 'react';

export default () => {
  const popupRef = useRef<IHstPopupRef>(null);

  return (
    <Space>
      <HstPopup
        title="\u64CD\u4F5C"
        content="\u662F\u5426\u9700\u8981\u7981\u7528\u8BE5\u8BB0\u5F55\uFF1F"
        footer={
          <Space>
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
              \u786E\u5B9A
            </HstButton>
          </Space>
        }
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
        footer={
          <Space>
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
              \u5BA1\u6279
            </HstButton>
          </Space>
        }
      >
        <HstButton>\u5BA1\u6838\u6846</HstButton>
      </HstPopup>
    </Space>
  );
};
`},81957:function(j,d){d.Z=`import { Space } from 'antd';
import { HstButton, HstPopup, IHstPopupRef } from 'hst-react-ui';
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
