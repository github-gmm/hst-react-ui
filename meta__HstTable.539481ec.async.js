"use strict";(self.webpackChunkhst_react_ui=self.webpackChunkhst_react_ui||[]).push([[629],{81872:function(J,g,e){var R;e.r(g),e.d(g,{demos:function(){return z}});var r=e(15009),L=e.n(r),j=e(99289),Q=e.n(j),y=e(67294),V=e(34245),z={"hsttable-demo-base":{component:y.memo(y.lazy(function(){return e.e(462).then(e.bind(e,72243))})),asset:{type:"BLOCK",id:"hsttable-demo-base",refAtomIds:["HstTable"],dependencies:{"index.tsx":{type:"FILE",value:e(90736).Z},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u8868\u683C - \u9759\u6001\u6570\u636E"},context:{"hst-react-ui":V,react:R||(R=e.t(y,2))},renderOpts:{compile:function(){var W=Q()(L()().mark(function B(){var M,a=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,a));case 3:case"end":return d.stop()}},B)}));function b(){return W.apply(this,arguments)}return b}()}},"hsttable-demo-base1":{component:y.memo(y.lazy(function(){return e.e(462).then(e.bind(e,45407))})),asset:{type:"BLOCK",id:"hsttable-demo-base1",refAtomIds:["HstTable"],dependencies:{"index.tsx":{type:"FILE",value:e(6325).Z},"hst-react-ui":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u8868\u683C - \u52A8\u6001\u6570\u636E\u5E26\u641C\u7D22"},context:{"hst-react-ui":V,react:R||(R=e.t(y,2))},renderOpts:{compile:function(){var W=Q()(L()().mark(function B(){var M,a=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(M=d.sent).default.apply(M,a));case 3:case"end":return d.stop()}},B)}));function b(){return W.apply(this,arguments)}return b}()}}}},34245:function(J,g,e){e.r(g),e.d(g,{HstButton:function(){return he},HstPopup:function(){return ye},HstTable:function(){return Me}});var R=e(97857),r=e.n(R),L=e(15009),j=e.n(L),Q=e(99289),y=e.n(Q),V=e(13769),z=e.n(V),W=e(5574),b=e.n(W),B=e(7360),M=e(83622),a=e(67294),l=e(85893),d=["onClick","variant","color","size","children"],ce=function(n){var o=(0,a.useState)(!1),v=b()(o,2),i=v[0],C=v[1],s=n.onClick,c=n.variant,u=c===void 0?"solid":c,h=n.color,S=h===void 0?"primary":h,T=n.size,I=T===void 0?"middle":T,x=n.children,E=z()(n,d),m=(0,B.Z)(function(){var D=y()(j()().mark(function f(p){return j()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.prev=1,t.next=4,s==null?void 0:s(p);case 4:return t.prev=4,C(!1),t.finish(4);case 7:case"end":return t.stop()}},f,null,[[1,,4,7]])}));return function(f){return D.apply(this,arguments)}}(),{wait:300}),O=m.run,$=["link"].includes(u)?"0":void 0,P=["small"].includes(I)?"12px":void 0;return(0,l.jsx)(M.ZP,r()(r()({variant:u,color:S,size:I,loading:i,onClick:O,style:{padding:$,fontSize:P}},E),{},{children:x}))},he=(0,a.memo)(ce),ve=e(85265),me=["children","className","footer","onClosed"],fe=function(n){var o=n.children,v=o===void 0?null:o,i=n.className,C=n.footer,s=n.onClosed,c=z()(n,me),u=(0,a.useCallback)(function(){s==null||s()},[s]);return(0,l.jsx)(ve.Z,r()(r()({className:"hst-popup-content".concat(i?"".concat(i):""),open:!0,maskClosable:!1,onClose:u,extra:C},c),{},{children:v}))},pe=(0,a.memo)(fe),ge=e(85576),be=["width","children","footer","className","onClosed"],He=function(n){var o=n.width,v=o===void 0?378:o,i=n.children,C=i===void 0?null:i,s=n.footer,c=s===void 0?(0,l.jsx)(l.Fragment,{}):s,u=n.className,h=n.onClosed,S=z()(n,be),T=(0,a.useCallback)(function(){h==null||h()},[h]);return(0,l.jsx)(ge.Z,r()(r()({className:"hst-popup-content".concat(u?"".concat(u):""),open:!0,width:v,maskClosable:!1,onCancel:T,footer:c},S),{},{children:C}))},Ce=(0,a.memo)(He),Se=["type","children","content","footer","beforeOpen","beforeClose"],Te=(0,a.forwardRef)(function(H,n){var o=H.type,v=o===void 0?"modal":o,i=H.children,C=i===void 0?(0,l.jsx)(l.Fragment,{}):i,s=H.content,c=s===void 0?(0,l.jsx)(l.Fragment,{}):s,u=H.footer,h=H.beforeOpen,S=H.beforeClose,T=z()(H,Se),I=(0,a.useState)(!1),x=b()(I,2),E=x[0],m=x[1],O=v==="modal",$=function(){var D=y()(j()().mark(function f(){var p;return j()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=6;break}return t.next=3,h();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=!0;case 7:p=t.t0,m(p);case 9:case"end":return t.stop()}},f)}));return function(){return D.apply(this,arguments)}}(),P=function(){var D=y()(j()().mark(function f(){var p;return j()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!S){t.next=6;break}return t.next=3,S();case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=!0;case 7:p=t.t0,m(!p);case 9:case"end":return t.stop()}},f)}));return function(){return D.apply(this,arguments)}}();return(0,a.useImperativeHandle)(n,function(){return{onClose:P,onOpen:$}}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{onClick:$,children:C}),E&&(O?(0,l.jsx)(Ce,r()(r()({onClosed:P,footer:u},T),{},{children:c})):(0,l.jsx)(pe,r()(r()({onClose:P,footer:u},T),{},{children:c})))]})}),ye=(0,a.memo)(Te),Ie=e(31112),Pe=e(45674),xe=e(21532),$e=e(18253),le=e(82925),De=e(28104),Re={small:39,middle:47,large:54},je=function(n){var o=n.otherHeight,v=o===void 0?0:o,i=n.tableDensity,C=i===void 0?"middle":i,s=n.isTitle,c=s===void 0?!0:s,u=n.isPage,h=u===void 0?!0:u,S=n.minHeight,T=S===void 0?200:S,I=n.maxHeight,x=I===void 0?800:I,E={titleHeight:c?48:0,paginationHeight:h?36:0,paddingBottom:2},m=(0,a.useRef)(null),O=(0,a.useState)(0),$=b()(O,2),P=$[0],D=$[1],f=(0,a.useState)(0),p=b()(f,2),N=p[0],t=p[1],X=(0,a.useState)(0),Z=b()(X,2),Y=Z[0],k=Z[1],ne=(0,B.Z)(function(){if(m.current){var A=m==null?void 0:m.current.getBoundingClientRect();t(A.width);var U=window.innerHeight-A.top-v,w=U>T?U<x?U:x:T;D(w);var te=Object.values(E).reduce(function(ae,q){return ae+q},0),F=w-te-Re[C];k(F)}},{wait:500}),K=ne.run;(0,a.useEffect)(function(){return K(),window.addEventListener("resize",K),function(){window.removeEventListener("resize",K)}},[]);var _=function(){K()};return{elementRef:m,tableWidth:N,tableHeight:Y,elHeight:P,recalculateHeight:_}},Ee=je,Oe=["className","tableKey","size","lang","options","pagination","hiddenPage","scroll","search","columns","dataSource","autoHeight","headerTitle","tableRef"],ze=function(n){var o=n.className,v=o===void 0?"":o,i=n.tableKey,C=i===void 0?"id":i,s=n.size,c=s===void 0?"small":s,u=n.lang,h=u===void 0?"cn":u,S=n.options,T=S===void 0?{}:S,I=n.pagination,x=I===void 0?void 0:I,E=n.hiddenPage,m=E===void 0?!1:E,O=n.scroll,$=O===void 0?{}:O,P=n.search,D=P===void 0?{}:P,f=n.columns,p=f===void 0?[]:f,N=n.dataSource,t=N===void 0?void 0:N,X=n.autoHeight,Z=X===void 0?!0:X,Y=n.headerTitle,k=Y===void 0?void 0:Y,ne=n.tableRef,K=z()(n,Oe),_=r()({},K),A=p.filter(function(se){return!!se.search}).length>0,U=(0,a.useState)(4),w=b()(U,2),te=w[0],F=w[1],ae=(0,a.useState)(8),q=b()(ae,2),Ne=q[0],re=q[1],Le=(0,Pe.Z)({showQuickJumper:!0,showSizeChanger:!0}),oe=b()(Le,2),ie=oe[0],ue=oe[1];Array.isArray(t)&&(_.dataSource=t);var ee=Ee({tableDensity:c,isTitle:!!k,isPage:!m}),Be=ee.elementRef,G=ee.tableWidth,Ze=ee.tableHeight,Ke=ee.recalculateHeight,We={cn:le.Z,us:$e.Z,hk:De.Z};return(0,a.useEffect)(function(){G&&(G<500?(F(12),re(12)):G>1100?(F(3),re(3)):(F(4),re(8)),G<400?ue({showQuickJumper:!1,showSizeChanger:!1}):ue({showQuickJumper:!0,showSizeChanger:!0}))},[G]),(0,l.jsx)(xe.ZP,{locale:We[h]||le.Z,children:(0,l.jsx)(Ie.Z,r()({size:c,rowKey:C,actionRef:ne,columns:p,headerTitle:k,className:"hst-table-content".concat(v?"".concat(v):""),tableRender:function(Ae,de){return Z?(0,l.jsx)("div",{ref:Be,className:"hst-table-body",children:de}):de},scroll:r()(r()({x:"max-content"},Z?{y:Ze}:{}),$),pagination:m?!1:r()({size:c,showQuickJumper:ie.showQuickJumper,showSizeChanger:ie.showSizeChanger,pageSizeOptions:[20,50,100,200]},x),search:A?r()(r()({span:te,submitterColSpanProps:{span:Ne},labelWidth:"auto",defaultCollapsed:!1,collapseRender:function(){return!1}},Z?{onCollapse:Ke}:{}),D):!1,options:r()({reload:!1,setting:!1,density:!1},T)},_))})},Me=(0,a.memo)(ze)},12704:function(J,g,e){e.r(g),e.d(g,{texts:function(){return R}});const R=[{value:"\u8868\u683C\u7EC4\u4EF6 HstTable",paraId:0,tocIndex:1},{value:`import { HstTable } from 'hst-react-ui';

export default () => <HstTable />;
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"hiddenPage",paraId:2,tocIndex:7},{value:"boolean",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"\u662F\u5426\u5206\u9875",paraId:2,tocIndex:7}]},90736:function(J,g){g.Z=`import { ProColumns } from '@ant-design/pro-components';
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
`},6325:function(J,g){g.Z=`import { ProColumns } from '@ant-design/pro-components';
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
      dataIndex: 'age',
      hideInTable: true,
      fieldProps: {
        placeholder: 'age-\u8D85\u957F\u5B57\u6BB5\u3002\u3002\u3002\u3002\u3002\u3002',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'sex',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Sex-\u8D85\u957F\u5B57\u6BB5\u3002\u3002\u3002\u3002\u3002\u3002',
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
      dataIndex: 'id',
      hideInTable: true,
      fieldProps: {
        placeholder: 'ID',
      },
      ellipsis: true,
      search: {
        transform: (value) => value,
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
            // {
            //   id: 3,
            //   title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            // },
            // {
            //   id: 4,
            //   title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            // },
            // {
            //   id: 5,
            //   title: '2.3.1\u7248\u672C\u5982\u4F55\u5728\u4E1A\u52A1\u9875\u9762\u4FEE\u6539\u5934\u90E8\u72B6\u6001',
            // },
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
