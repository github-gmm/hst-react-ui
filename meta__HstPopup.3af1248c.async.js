"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[481],{71752:function(U,I,e){var O;e.r(I),e.d(I,{demos:function(){return S}});var r=e(15009),z=e.n(r),E=e(99289),G=e.n(E),C=e(67294),w=e(90881),M=e(61006),J=e(34245),S={"hstpopup-demo-base":{component:C.memo(C.lazy(function(){return e.e(800).then(e.bind(e,51830))})),asset:{type:"BLOCK",id:"hstpopup-demo-base",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(19586).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.26.7"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4E2D\u95F4\u5F39\u6846"},context:{"@ant-design/pro-components":w,antd:M,"hst-react-ui":J,react:O||(O=e.t(C,2))},renderOpts:{compile:function(){var A=G()(z()().mark(function a(){var o,F=arguments;return z()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,F));case 3:case"end":return d.stop()}},a)}));function W(){return A.apply(this,arguments)}return W}()}},"hstpopup-demo-base1":{component:C.memo(C.lazy(function(){return e.e(800).then(e.bind(e,88067))})),asset:{type:"BLOCK",id:"hstpopup-demo-base1",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(81957).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.26.7"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4FA7\u5F39\u6846"},context:{"@ant-design/pro-components":w,antd:M,"hst-react-ui":J,react:O||(O=e.t(C,2))},renderOpts:{compile:function(){var A=G()(z()().mark(function a(){var o,F=arguments;return z()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,F));case 3:case"end":return d.stop()}},a)}));function W(){return A.apply(this,arguments)}return W}()}}}},34245:function(U,I,e){e.r(I),e.d(I,{HstButton:function(){return d},HstPopup:function(){return Pe},HstTable:function(){return Ee}});var O=e(97857),r=e.n(O),z=e(15009),E=e.n(z),G=e(99289),C=e.n(G),w=e(13769),M=e.n(w),J=e(5574),S=e.n(J),A=e(40238),W=e(83622),a=e(67294),o=e(85893),F=["onClick","variant","color","size","children"],ee=function(t){var l=(0,a.useState)(!1),v=S()(l,2),u=v[0],H=v[1],s=t.onClick,c=t.variant,i=c===void 0?"solid":c,p=t.color,P=p===void 0?"primary":p,x=t.size,b=x===void 0?"middle":x,R=t.children,B=M()(t,F),m=(0,A.Z)(function(){var $=C()(E()().mark(function h(f){return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return H(!0),n.prev=1,n.next=4,s==null?void 0:s(f);case 4:return n.prev=4,H(!1),n.finish(4);case 7:case"end":return n.stop()}},h,null,[[1,,4,7]])}));return function(h){return $.apply(this,arguments)}}(),{wait:300}),D=m.run,T=["link"].includes(i)?"0":void 0,y=["small"].includes(b)?"12px":void 0;return(0,o.jsx)(W.ZP,r()(r()({variant:i,color:P,size:b,loading:u,onClick:D,style:{padding:T,fontSize:y}},B),{},{children:R}))},d=(0,a.memo)(ee),de=e(85265),ce=["children","className","footer","onClosed"],pe=function(t){var l=t.children,v=l===void 0?null:l,u=t.className,H=t.footer,s=t.onClosed,c=M()(t,ce),i=(0,a.useCallback)(function(){s==null||s()},[s]);return(0,o.jsx)(de.Z,r()(r()({className:"hst-popup-content".concat(u?"".concat(u):""),open:!0,maskClosable:!1,onClose:i,extra:H},c),{},{children:v}))},ve=(0,a.memo)(pe),me=e(85576),he=["width","children","footer","className","onClosed"],fe=function(t){var l=t.width,v=l===void 0?378:l,u=t.children,H=u===void 0?null:u,s=t.footer,c=s===void 0?(0,o.jsx)(o.Fragment,{}):s,i=t.className,p=t.onClosed,P=M()(t,he),x=(0,a.useCallback)(function(){p==null||p()},[p]);return(0,o.jsx)(me.Z,r()(r()({className:"hst-popup-content".concat(i?"".concat(i):""),open:!0,width:v,maskClosable:!1,onCancel:x,footer:c},P),{},{children:H}))},Ie=(0,a.memo)(fe),ge=["type","children","content","footer","beforeOpen","beforeClose"],He=(0,a.forwardRef)(function(g,t){var l=g.type,v=l===void 0?"modal":l,u=g.children,H=u===void 0?(0,o.jsx)(o.Fragment,{}):u,s=g.content,c=s===void 0?(0,o.jsx)(o.Fragment,{}):s,i=g.footer,p=g.beforeOpen,P=g.beforeClose,x=M()(g,ge),b=(0,a.useState)(!1),R=S()(b,2),B=R[0],m=R[1],D=v==="modal",T=function(){var $=C()(E()().mark(function h(){var f;return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!p){n.next=6;break}return n.next=3,p();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:f=n.t0,m(f);case 9:case"end":return n.stop()}},h)}));return function(){return $.apply(this,arguments)}}(),y=function(){var $=C()(E()().mark(function h(){var f;return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!P){n.next=6;break}return n.next=3,P();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:f=n.t0,m(!f);case 9:case"end":return n.stop()}},h)}));return function(){return $.apply(this,arguments)}}();return(0,a.useImperativeHandle)(t,function(){return{onClose:y,onOpen:T}}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:T,children:H}),B&&(D?(0,o.jsx)(Ie,r()(r()({onClosed:y,footer:i},x),{},{children:c})):(0,o.jsx)(ve,r()(r()({onClose:y,footer:i},x),{},{children:c})))]})}),Pe=(0,a.memo)(He),xe=e(31112),Ce=e(21532),be=e(18253),re=e(82925),ye=e(28104),Se={small:39,middle:47,large:54},Re=function(t){var l=t.otherHeight,v=l===void 0?0:l,u=t.tableDensity,H=u===void 0?"middle":u,s=t.isTitle,c=s===void 0?!0:s,i=t.isPage,p=i===void 0?!0:i,P=t.minHeight,x=P===void 0?200:P,b=t.maxHeight,R=b===void 0?800:b,B={titleHeight:c?48:0,paginationHeight:p?36:0,paddingBottom:2},m=(0,a.useRef)(null),D=(0,a.useState)(0),T=S()(D,2),y=T[0],$=T[1],h=(0,a.useState)(0),f=S()(h,2),j=f[0],n=f[1],Q=(0,a.useState)(0),K=S()(Q,2),V=K[0],X=K[1],te=(0,A.Z)(function(){if(m.current){var Z=m==null?void 0:m.current.getBoundingClientRect();n(Z.width);var L=window.innerHeight-Z.top-v,Y=L>x?L<R?L:R:x;$(Y);var k=Object.values(B).reduce(function(_,oe){return _+oe},0),ae=Y-k-Se[H];X(ae)}},{wait:500}),N=te.run;(0,a.useEffect)(function(){return N(),window.addEventListener("resize",N),function(){window.removeEventListener("resize",N)}},[]);var ne=function(){N()};return{elementRef:m,tableWidth:j,tableHeight:V,elHeight:y,recalculateHeight:ne}},Te=Re,$e=["className","tableKey","size","lang","options","pagination","hiddenPage","scroll","search","columns","dataSource","autoHeight","headerTitle"],Oe=function(t){var l=t.className,v=l===void 0?"":l,u=t.tableKey,H=u===void 0?"id":u,s=t.size,c=s===void 0?"small":s,i=t.lang,p=i===void 0?"cn":i,P=t.options,x=P===void 0?{}:P,b=t.pagination,R=b===void 0?void 0:b,B=t.hiddenPage,m=B===void 0?!1:B,D=t.scroll,T=D===void 0?{}:D,y=t.search,$=y===void 0?{}:y,h=t.columns,f=h===void 0?[]:h,j=t.dataSource,n=j===void 0?void 0:j,Q=t.autoHeight,K=Q===void 0?!0:Q,V=t.headerTitle,X=V===void 0?void 0:V,te=M()(t,$e),N=r()({},te),ne=f.filter(function(ue){return!!ue.search}).length>0,Z=(0,a.useState)(4),L=S()(Z,2),Y=L[0],k=L[1],ae=(0,a.useState)(8),_=S()(ae,2),oe=_[0],se=_[1];Array.isArray(n)&&(N.dataSource=n);var q=Te({tableDensity:c,isTitle:!!X,isPage:!m}),Me=q.elementRef,le=q.tableWidth,Be=q.tableHeight,De=q.recalculateHeight,je={cn:re.Z,us:be.Z,hk:ye.Z};return(0,a.useEffect)(function(){le<500?(k(12),se(12)):(k(4),se(8))},[le]),(0,o.jsx)(Ce.ZP,{locale:je[p]||re.Z,children:(0,o.jsx)(xe.Z,r()({size:c,rowKey:H,columns:f,headerTitle:X,className:"hst-table-content".concat(v?"".concat(v):""),tableRender:function(Ne,ie){return K?(0,o.jsx)("div",{ref:Me,className:"hst-table-body",children:ie}):ie},scroll:r()(r()({x:"max-content"},K?{y:Be}:{}),T),pagination:m?!1:r()({size:c,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:[20,50,100,200]},R),search:ne?r()(r()({span:Y,submitterColSpanProps:{span:oe},labelWidth:"auto",defaultCollapsed:!1},K?{onCollapse:De}:{}),$):!1,options:r()({reload:!1,setting:!1,density:!1},x)},N))})},Ee=(0,a.memo)(Oe)},5373:function(U,I,e){e.r(I),e.d(I,{texts:function(){return O}});const O=[{value:"\u5F39\u6846\u7EC4\u4EF6 HstPopup",paraId:0,tocIndex:1},{value:`import { HstPopup } from 'hst-react-ui';

export default () => (
  <HstPopup title="\u6807\u9898" content="\u5185\u5BB9">
    \u5F39\u6846
  </HstPopup>
);
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"ref",paraId:2,tocIndex:7},{value:"IHstPopupRef",paraId:2,tocIndex:7},{value:"\u7236\u5143\u7D20",paraId:2,tocIndex:7},{value:"type",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:" ",paraId:2,tocIndex:7},{value:"drawer",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u7C7B\u578B",paraId:2,tocIndex:7},{value:"children",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u70B9\u51FB\u5143\u7D20",paraId:2,tocIndex:7},{value:"content",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u5185\u5BB9",paraId:2,tocIndex:7},{value:"beforeOpen",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u6253\u5F00\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"beforeClose",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u5173\u95ED\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"onOpen",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u6253\u5F00\u5F39\u6846",paraId:3,tocIndex:8},{value:"onClose",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u5173\u95ED\u5F39\u6846",paraId:3,tocIndex:8}]},19586:function(U,I){I.Z=`import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
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
`},81957:function(U,I){I.Z=`import { ProFormText } from '@ant-design/pro-components';
import { Space } from 'antd';
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
        content={
          <>
            <ProFormText name="name" label="\u540D\u79F0" />
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
