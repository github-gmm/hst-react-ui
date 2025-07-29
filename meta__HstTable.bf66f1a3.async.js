"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[629],{81872:function(F,g,e){var j;e.r(g),e.d(g,{demos:function(){return R}});var r=e(15009),B=e.n(r),E=e(99289),G=e.n(E),P=e(67294),w=e(34245),R={"hsttable-demo-base":{component:P.memo(P.lazy(function(){return e.e(462).then(e.bind(e,72243))})),asset:{type:"BLOCK",id:"hsttable-demo-base",refAtomIds:["HstTable"],dependencies:{"index.tsx":{type:"FILE",value:e(90736).Z},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u8868\u683C - \u9759\u6001\u6570\u636E"},context:{"hst-react-ui":w,react:j||(j=e.t(P,2))},renderOpts:{compile:function(){var A=G()(B()().mark(function K(){var z,a=arguments;return B()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(z=d.sent).default.apply(z,a));case 3:case"end":return d.stop()}},K)}));function C(){return A.apply(this,arguments)}return C}()}},"hsttable-demo-base1":{component:P.memo(P.lazy(function(){return e.e(462).then(e.bind(e,45407))})),asset:{type:"BLOCK",id:"hsttable-demo-base1",refAtomIds:["HstTable"],dependencies:{"index.tsx":{type:"FILE",value:e(6325).Z},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u8868\u683C - \u52A8\u6001\u6570\u636E\u5E26\u641C\u7D22"},context:{"hst-react-ui":w,react:j||(j=e.t(P,2))},renderOpts:{compile:function(){var A=G()(B()().mark(function K(){var z,a=arguments;return B()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(z=d.sent).default.apply(z,a));case 3:case"end":return d.stop()}},K)}));function C(){return A.apply(this,arguments)}return C}()}}}},34245:function(F,g,e){e.r(g),e.d(g,{HstButton:function(){return ue},HstPopup:function(){return Te},HstTable:function(){return Ee}});var j=e(97857),r=e.n(j),B=e(15009),E=e.n(B),G=e(99289),P=e.n(G),w=e(13769),R=e.n(w),A=e(5574),C=e.n(A),K=e(40238),z=e(83622),a=e(67294),l=e(85893),d=["onClick","variant","color","size","children"],ie=function(n){var o=(0,a.useState)(!1),v=C()(o,2),i=v[0],H=v[1],s=n.onClick,c=n.variant,u=c===void 0?"solid":c,h=n.color,T=h===void 0?"primary":h,y=n.size,I=y===void 0?"middle":y,x=n.children,O=R()(n,d),m=(0,K.Z)(function(){var D=P()(E()().mark(function f(p){return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return H(!0),t.prev=1,t.next=4,s==null?void 0:s(p);case 4:return t.prev=4,H(!1),t.finish(4);case 7:case"end":return t.stop()}},f,null,[[1,,4,7]])}));return function(f){return D.apply(this,arguments)}}(),{wait:300}),M=m.run,$=["link"].includes(u)?"0":void 0,S=["small"].includes(I)?"12px":void 0;return(0,l.jsx)(z.ZP,r()(r()({variant:u,color:T,size:I,loading:i,onClick:M,style:{padding:$,fontSize:S}},O),{},{children:x}))},ue=(0,a.memo)(ie),de=e(85265),ce=["children","className","footer","onClosed"],he=function(n){var o=n.children,v=o===void 0?null:o,i=n.className,H=n.footer,s=n.onClosed,c=R()(n,ce),u=(0,a.useCallback)(function(){s==null||s()},[s]);return(0,l.jsx)(de.Z,r()(r()({className:"hst-popup-content".concat(i?"".concat(i):""),open:!0,maskClosable:!1,onClose:u,extra:H},c),{},{children:v}))},ve=(0,a.memo)(he),me=e(85576),fe=["width","children","footer","className","onClosed"],pe=function(n){var o=n.width,v=o===void 0?378:o,i=n.children,H=i===void 0?null:i,s=n.footer,c=s===void 0?(0,l.jsx)(l.Fragment,{}):s,u=n.className,h=n.onClosed,T=R()(n,fe),y=(0,a.useCallback)(function(){h==null||h()},[h]);return(0,l.jsx)(me.Z,r()(r()({className:"hst-popup-content".concat(u?"".concat(u):""),open:!0,width:v,maskClosable:!1,onCancel:y,footer:c},T),{},{children:H}))},ge=(0,a.memo)(pe),be=["type","children","content","footer","beforeOpen","beforeClose"],He=(0,a.forwardRef)(function(b,n){var o=b.type,v=o===void 0?"modal":o,i=b.children,H=i===void 0?(0,l.jsx)(l.Fragment,{}):i,s=b.content,c=s===void 0?(0,l.jsx)(l.Fragment,{}):s,u=b.footer,h=b.beforeOpen,T=b.beforeClose,y=R()(b,be),I=(0,a.useState)(!1),x=C()(I,2),O=x[0],m=x[1],M=v==="modal",$=function(){var D=P()(E()().mark(function f(){var p;return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=6;break}return t.next=3,h();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=!0;case 7:p=t.t0,m(p);case 9:case"end":return t.stop()}},f)}));return function(){return D.apply(this,arguments)}}(),S=function(){var D=P()(E()().mark(function f(){var p;return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!T){t.next=6;break}return t.next=3,T();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=!0;case 7:p=t.t0,m(!p);case 9:case"end":return t.stop()}},f)}));return function(){return D.apply(this,arguments)}}();return(0,a.useImperativeHandle)(n,function(){return{onClose:S,onOpen:$}}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{onClick:$,children:H}),O&&(M?(0,l.jsx)(ge,r()(r()({onClosed:S,footer:u},y),{},{children:c})):(0,l.jsx)(ve,r()(r()({onClose:S,footer:u},y),{},{children:c})))]})}),Te=(0,a.memo)(He),ye=e(31112),Ce=e(21532),Pe=e(18253),ae=e(82925),Ie=e(28104),Se={small:39,middle:47,large:54},xe=function(n){var o=n.otherHeight,v=o===void 0?0:o,i=n.tableDensity,H=i===void 0?"middle":i,s=n.isTitle,c=s===void 0?!0:s,u=n.isPage,h=u===void 0?!0:u,T=n.minHeight,y=T===void 0?200:T,I=n.maxHeight,x=I===void 0?800:I,O={titleHeight:c?48:0,paginationHeight:h?36:0,paddingBottom:2},m=(0,a.useRef)(null),M=(0,a.useState)(0),$=C()(M,2),S=$[0],D=$[1],f=(0,a.useState)(0),p=C()(f,2),N=p[0],t=p[1],J=(0,a.useState)(0),W=C()(J,2),Q=W[0],V=W[1],q=(0,K.Z)(function(){if(m.current){var U=m==null?void 0:m.current.getBoundingClientRect();t(U.width);var Z=window.innerHeight-U.top-v,X=Z>y?Z<x?Z:x:y;D(X);var Y=Object.values(O).reduce(function(k,te){return k+te},0),ne=X-Y-Se[H];V(ne)}},{wait:500}),L=q.run;(0,a.useEffect)(function(){return L(),window.addEventListener("resize",L),function(){window.removeEventListener("resize",L)}},[]);var ee=function(){L()};return{elementRef:m,tableWidth:N,tableHeight:Q,elHeight:S,recalculateHeight:ee}},$e=xe,De=["className","tableKey","size","lang","options","pagination","hiddenPage","scroll","search","columns","dataSource","autoHeight","headerTitle"],je=function(n){var o=n.className,v=o===void 0?"":o,i=n.tableKey,H=i===void 0?"id":i,s=n.size,c=s===void 0?"small":s,u=n.lang,h=u===void 0?"cn":u,T=n.options,y=T===void 0?{}:T,I=n.pagination,x=I===void 0?void 0:I,O=n.hiddenPage,m=O===void 0?!1:O,M=n.scroll,$=M===void 0?{}:M,S=n.search,D=S===void 0?{}:S,f=n.columns,p=f===void 0?[]:f,N=n.dataSource,t=N===void 0?void 0:N,J=n.autoHeight,W=J===void 0?!0:J,Q=n.headerTitle,V=Q===void 0?void 0:Q,q=R()(n,De),L=r()({},q),ee=p.filter(function(le){return!!le.search}).length>0,U=(0,a.useState)(4),Z=C()(U,2),X=Z[0],Y=Z[1],ne=(0,a.useState)(8),k=C()(ne,2),te=k[0],re=k[1];Array.isArray(t)&&(L.dataSource=t);var _=$e({tableDensity:c,isTitle:!!V,isPage:!m}),Oe=_.elementRef,se=_.tableWidth,Me=_.tableHeight,Re=_.recalculateHeight,ze={cn:ae.Z,us:Pe.Z,hk:Ie.Z};return(0,a.useEffect)(function(){se<500?(Y(12),re(12)):(Y(4),re(8))},[se]),(0,l.jsx)(Ce.ZP,{locale:ze[h]||ae.Z,children:(0,l.jsx)(ye.Z,r()({size:c,rowKey:H,columns:p,headerTitle:V,className:"hst-table-content".concat(v?"".concat(v):""),tableRender:function(Ne,oe){return W?(0,l.jsx)("div",{ref:Oe,className:"hst-table-body",children:oe}):oe},scroll:r()(r()({x:"max-content"},W?{y:Me}:{}),$),pagination:m?!1:r()({size:c,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:[20,50,100,200]},x),search:ee?r()(r()({span:X,submitterColSpanProps:{span:te},labelWidth:"auto",defaultCollapsed:!1},W?{onCollapse:Re}:{}),D):!1,options:r()({reload:!1,setting:!1,density:!1},y)},L))})},Ee=(0,a.memo)(je)},12704:function(F,g,e){e.r(g),e.d(g,{texts:function(){return j}});const j=[{value:"\u8868\u683C\u7EC4\u4EF6 HstTable",paraId:0,tocIndex:1},{value:`import { HstTable } from 'hst-react-ui';

export default () => <HstTable />;
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"hiddenPage",paraId:2,tocIndex:7},{value:"boolean",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"\u662F\u5426\u5206\u9875",paraId:2,tocIndex:7}]},90736:function(F,g){g.Z=`import { ProColumns } from '@ant-design/pro-components';
import { HstTable } from 'hst-react-ui';
import React from 'react';

export default () => {
  const columns: ProColumns<any>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      ellipsis: true,
      search: false,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      search: false,
      render: (_) => {
        return <span>{_}</span>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      ellipsis: true,
      search: false,
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      ellipsis: true,
      search: false,
    },
  ];

  const dataSource = [
    {
      id: 1,
      title: '\u{1F41B} [BUG]yarn install\u547D\u4EE4 antd2.4.5\u4F1A\u62A5\u9519',
      status: 'open',
      labels: ['bug'],
    },
    {
      id: 2,
      title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
      status: 'closed',
      labels: ['question'],
    },
  ];

  return (
    <div>
      <HstTable columns={columns} dataSource={dataSource} hiddenPage />
    </div>
  );
};
`},6325:function(F,g){g.Z=`import { ProColumns } from '@ant-design/pro-components';
import { HstTable } from 'hst-react-ui';
import React from 'react';

export default () => {
  const columns: ProColumns<any>[] = [
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-\u8D85\u957F\u5B57\u6BB5\u3002\u3002\u3002\u3002\u3002\u3002',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-\u8D85\u957F\u5B57\u6BB5\u3002\u3002\u3002\u3002\u3002\u3002',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-\u8D85\u957F\u5B57\u6BB5\u3002\u3002\u3002\u3002\u3002\u3002',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'status',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Status',
      },
      valueEnum: {
        0: { text: '\u5173\u95ED', status: 'Default' },
        1: { text: '\u8FD0\u884C\u4E2D', status: 'Processing' },
        2: { text: '\u5DF2\u4E0A\u7EBF', status: 'Success' },
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'time',
      hideInTable: true,
      colSize: 2,
      valueType: 'dateRange',
      fieldProps: {
        placeholder: ['startTime', 'endTime'],
      },
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: 'ID',
      dataIndex: 'id',
      ellipsis: true,
      search: false,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      search: false,
      render: (_) => {
        return <span>{_}</span>;
      },
    },
  ];

  const getList = async () => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              title: '\u{1F41B} [BUG]yarn install\u547D\u4EE4 antd2.4.5\u4F1A\u62A5\u9519',
            },
            {
              id: 2,
              title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            },
            {
              id: 3,
              title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            },
            {
              id: 4,
              title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            },
            {
              id: 5,
              title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            },
          ],
          total: 100,
        });
      }, 3000);
    });
    return res || {};
  };

  return <HstTable columns={columns} request={getList} />;
};
`}}]);
