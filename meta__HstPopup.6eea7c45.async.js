"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[481],{71752:function(J,g,e){var O;e.r(g),e.d(g,{demos:function(){return x}});var r=e(15009),z=e.n(r),E=e(99289),Q=e.n(E),S=e(67294),V=e(90881),M=e(57045),X=e(34245),x={"hstpopup-demo-base":{component:S.memo(S.lazy(function(){return e.e(800).then(e.bind(e,51830))})),asset:{type:"BLOCK",id:"hstpopup-demo-base",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(19586).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.27.4"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4E2D\u95F4\u5F39\u6846"},context:{"@ant-design/pro-components":V,antd:M,"hst-react-ui":X,react:O||(O=e.t(S,2))},renderOpts:{compile:function(){var N=Q()(z()().mark(function a(){var o,W=arguments;return z()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,W));case 3:case"end":return d.stop()}},a)}));function L(){return N.apply(this,arguments)}return L}()}},"hstpopup-demo-base1":{component:S.memo(S.lazy(function(){return e.e(800).then(e.bind(e,88067))})),asset:{type:"BLOCK",id:"hstpopup-demo-base1",refAtomIds:["HstPopup"],dependencies:{"index.tsx":{type:"FILE",value:e(81957).Z},"@ant-design/pro-components":{type:"NPM",value:"2.8.10"},antd:{type:"NPM",value:"5.27.4"},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4FA7\u5F39\u6846"},context:{"@ant-design/pro-components":V,antd:M,"hst-react-ui":X,react:O||(O=e.t(S,2))},renderOpts:{compile:function(){var N=Q()(z()().mark(function a(){var o,W=arguments;return z()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(o=d.sent).default.apply(o,W));case 3:case"end":return d.stop()}},a)}));function L(){return N.apply(this,arguments)}return L}()}}}},34245:function(J,g,e){e.r(g),e.d(g,{HstButton:function(){return d},HstPopup:function(){return xe},HstTable:function(){return je}});var O=e(97857),r=e.n(O),z=e(15009),E=e.n(z),Q=e(99289),S=e.n(Q),V=e(13769),M=e.n(V),X=e(5574),x=e.n(X),N=e(7360),L=e(83622),a=e(67294),o=e(85893),W=["onClick","variant","color","size","children"],ne=function(t){var l=(0,a.useState)(!1),v=x()(l,2),u=v[0],H=v[1],s=t.onClick,c=t.variant,i=c===void 0?"solid":c,p=t.color,P=p===void 0?"primary":p,C=t.size,b=C===void 0?"middle":C,R=t.children,B=M()(t,W),m=(0,N.Z)(function(){var $=S()(E()().mark(function h(f){return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return H(!0),n.prev=1,n.next=4,s==null?void 0:s(f);case 4:return n.prev=4,H(!1),n.finish(4);case 7:case"end":return n.stop()}},h,null,[[1,,4,7]])}));return function(h){return $.apply(this,arguments)}}(),{wait:300}),D=m.run,T=["link"].includes(i)?"0":void 0,y=["small"].includes(b)?"12px":void 0;return(0,o.jsx)(L.ZP,r()(r()({variant:i,color:P,size:b,loading:u,onClick:D,style:{padding:T,fontSize:y}},B),{},{children:R}))},d=(0,a.memo)(ne),ve=e(85265),me=["children","className","footer","onClosed"],he=function(t){var l=t.children,v=l===void 0?null:l,u=t.className,H=t.footer,s=t.onClosed,c=M()(t,me),i=(0,a.useCallback)(function(){s==null||s()},[s]);return(0,o.jsx)(ve.Z,r()(r()({className:"hst-popup-content".concat(u?"".concat(u):""),open:!0,maskClosable:!1,onClose:i,extra:H},c),{},{children:v}))},fe=(0,a.memo)(he),ge=e(85576),Ie=["width","children","footer","className","onClosed"],He=function(t){var l=t.width,v=l===void 0?378:l,u=t.children,H=u===void 0?null:u,s=t.footer,c=s===void 0?(0,o.jsx)(o.Fragment,{}):s,i=t.className,p=t.onClosed,P=M()(t,Ie),C=(0,a.useCallback)(function(){p==null||p()},[p]);return(0,o.jsx)(ge.Z,r()(r()({className:"hst-popup-content".concat(i?"".concat(i):""),open:!0,width:v,maskClosable:!1,onCancel:C,footer:c},P),{},{children:H}))},Pe=(0,a.memo)(He),Ce=["type","children","content","footer","beforeOpen","beforeClose"],Se=(0,a.forwardRef)(function(I,t){var l=I.type,v=l===void 0?"modal":l,u=I.children,H=u===void 0?(0,o.jsx)(o.Fragment,{}):u,s=I.content,c=s===void 0?(0,o.jsx)(o.Fragment,{}):s,i=I.footer,p=I.beforeOpen,P=I.beforeClose,C=M()(I,Ce),b=(0,a.useState)(!1),R=x()(b,2),B=R[0],m=R[1],D=v==="modal",T=function(){var $=S()(E()().mark(function h(){var f;return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!p){n.next=6;break}return n.next=3,p();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:f=n.t0,m(f);case 9:case"end":return n.stop()}},h)}));return function(){return $.apply(this,arguments)}}(),y=function(){var $=S()(E()().mark(function h(){var f;return E()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!P){n.next=6;break}return n.next=3,P();case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=!0;case 7:f=n.t0,m(!f);case 9:case"end":return n.stop()}},h)}));return function(){return $.apply(this,arguments)}}();return(0,a.useImperativeHandle)(t,function(){return{onClose:y,onOpen:T}}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:T,children:H}),B&&(D?(0,o.jsx)(Pe,r()(r()({onClosed:y,footer:i},C),{},{children:c})):(0,o.jsx)(fe,r()(r()({onClose:y,footer:i},C),{},{children:c})))]})}),xe=(0,a.memo)(Se),be=e(31112),ye=e(45674),Re=e(21532),Te=e(18253),ue=e(82925),$e=e(28104),Oe={small:39,middle:47,large:54},Ee=function(t){var l=t.otherHeight,v=l===void 0?0:l,u=t.tableDensity,H=u===void 0?"middle":u,s=t.isTitle,c=s===void 0?!0:s,i=t.isPage,p=i===void 0?!0:i,P=t.minHeight,C=P===void 0?200:P,b=t.maxHeight,R=b===void 0?800:b,B={titleHeight:c?48:0,paginationHeight:p?36:0,paddingBottom:2},m=(0,a.useRef)(null),D=(0,a.useState)(0),T=x()(D,2),y=T[0],$=T[1],h=(0,a.useState)(0),f=x()(h,2),j=f[0],n=f[1],Y=(0,a.useState)(0),A=x()(Y,2),k=A[0],_=A[1],ae=(0,N.Z)(function(){if(m.current){var Z=m==null?void 0:m.current.getBoundingClientRect();n(Z.width);var F=window.innerHeight-Z.top-v,w=F>C?F<R?F:R:C;$(w);var oe=Object.values(B).reduce(function(re,ee){return re+ee},0),U=w-oe-Oe[H];_(U)}},{wait:500}),K=ae.run;(0,a.useEffect)(function(){return K(),window.addEventListener("resize",K),function(){window.removeEventListener("resize",K)}},[]);var q=function(){K()};return{elementRef:m,tableWidth:j,tableHeight:k,elHeight:y,recalculateHeight:q}},Me=Ee,Be=["className","tableKey","size","lang","options","pagination","hiddenPage","scroll","search","columns","dataSource","autoHeight","headerTitle","tableRef"],De=function(t){var l=t.className,v=l===void 0?"":l,u=t.tableKey,H=u===void 0?"id":u,s=t.size,c=s===void 0?"small":s,i=t.lang,p=i===void 0?"cn":i,P=t.options,C=P===void 0?{}:P,b=t.pagination,R=b===void 0?void 0:b,B=t.hiddenPage,m=B===void 0?!1:B,D=t.scroll,T=D===void 0?{}:D,y=t.search,$=y===void 0?{}:y,h=t.columns,f=h===void 0?[]:h,j=t.dataSource,n=j===void 0?void 0:j,Y=t.autoHeight,A=Y===void 0?!0:Y,k=t.headerTitle,_=k===void 0?void 0:k,ae=t.tableRef,K=M()(t,Be),q=r()({},K),Z=f.filter(function(le){return!!le.search}).length>0,F=(0,a.useState)(4),w=x()(F,2),oe=w[0],U=w[1],re=(0,a.useState)(8),ee=x()(re,2),ze=ee[0],se=ee[1],Ne=(0,ye.Z)({showQuickJumper:!0,showSizeChanger:!0}),ie=x()(Ne,2),de=ie[0],ce=ie[1];Array.isArray(n)&&(q.dataSource=n);var te=Me({tableDensity:c,isTitle:!!_,isPage:!m}),Ae=te.elementRef,G=te.tableWidth,Ke=te.tableHeight,Le=te.recalculateHeight,We={cn:ue.Z,us:Te.Z,hk:$e.Z};return(0,a.useEffect)(function(){G&&(G<500?(U(12),se(12)):G>1100?(U(3),se(3)):(U(4),se(8)),G<400?ce({showQuickJumper:!1,showSizeChanger:!1}):ce({showQuickJumper:!0,showSizeChanger:!0}))},[G]),(0,o.jsx)(Re.ZP,{locale:We[p]||ue.Z,children:(0,o.jsx)(be.Z,r()({size:c,rowKey:H,actionRef:ae,columns:f,headerTitle:_,className:"hst-table-content".concat(v?"".concat(v):""),tableRender:function(Ze,pe){return A?(0,o.jsx)("div",{ref:Ae,className:"hst-table-body",children:pe}):pe},scroll:r()(r()({x:"max-content"},A?{y:Ke}:{}),T),pagination:m?!1:r()({size:c,showQuickJumper:de.showQuickJumper,showSizeChanger:de.showSizeChanger,pageSizeOptions:[20,50,100,200]},R),search:Z?r()(r()({span:oe,submitterColSpanProps:{span:ze},labelWidth:"auto",defaultCollapsed:!1,collapseRender:function(){return!1}},A?{onCollapse:Le}:{}),$):!1,options:r()({reload:!1,setting:!1,density:!1},C)},q))})},je=(0,a.memo)(De)},5373:function(J,g,e){e.r(g),e.d(g,{texts:function(){return O}});const O=[{value:"\u5F39\u6846\u7EC4\u4EF6 HstPopup",paraId:0,tocIndex:1},{value:`import { HstPopup } from 'hst-react-ui';

export default () => (
  <HstPopup title="\u6807\u9898" content="\u5185\u5BB9">
    \u5F39\u6846
  </HstPopup>
);
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"ref",paraId:2,tocIndex:7},{value:"IHstPopupRef",paraId:2,tocIndex:7},{value:"\u7236\u5143\u7D20",paraId:2,tocIndex:7},{value:"type",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:" ",paraId:2,tocIndex:7},{value:"drawer",paraId:2,tocIndex:7},{value:"modal",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u7C7B\u578B",paraId:2,tocIndex:7},{value:"children",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u70B9\u51FB\u5143\u7D20",paraId:2,tocIndex:7},{value:"content",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"\u5F39\u6846\u5185\u5BB9",paraId:2,tocIndex:7},{value:"beforeOpen",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u6253\u5F00\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"beforeClose",paraId:2,tocIndex:7},{value:"() => Promise<boolean> / boolean",paraId:2,tocIndex:7},{value:"\u5173\u95ED\u5F39\u6846\u4E4B\u524D\u56DE\u8C03",paraId:2,tocIndex:7},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"onOpen",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u6253\u5F00\u5F39\u6846",paraId:3,tocIndex:8},{value:"onClose",paraId:3,tocIndex:8},{value:"() => void",paraId:3,tocIndex:8},{value:"\u5173\u95ED\u5F39\u6846",paraId:3,tocIndex:8}]},19586:function(J,g){g.Z=`import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
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
`},81957:function(J,g){g.Z=`import { ProFormText } from '@ant-design/pro-components';
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
