(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var c,r=t(6),i=t.n(r),s=t(33),a=t.n(s),o=(t(45),t(39)),l=t(7),j=t(12),d=t(13),h=t(27),u=t(30),b=t(34),p=t(26),O=t(40),y=t(5);function g(e){var n=e.crypto,t=n.symbol,c=n.volume,r=n.weightedAvgPrice,i=n.lastQty;return Object(y.jsx)("div",{className:"card card=body mb-3",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-md-9",children:[Object(y.jsxs)("h6",{children:["CryptoCurrency: ",t]}),Object(y.jsxs)("p",{children:["Weighted Average Price: ",r]}),Object(y.jsxs)("p",{children:["Volume: ",c]}),Object(y.jsxs)("p",{children:["Last Quantity: ",i]})]})})})}var x=Object(p.a)(c||(c=Object(b.a)(["\n    query CryptoQuery {\n        cryptos {\n            symbol\n            volume\n            weightedAvgPrice            \n            lastQty\n            }\n    }\n"]))),m=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){return Object(j.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h5",{children:"Crypto Data"}),Object(y.jsx)(O.a,{query:x,children:function(e){var n=e.loading,t=e.error,c=e.data;return n?Object(y.jsx)("h4",{children:"loading......"}):(t&&console.log(t),Object(y.jsxs)(y.Fragment,{children:[" ",c.cryptos.map((function(e){return Object(y.jsx)(g,{crypto:e},e.symbol)}))]}))}})]})}}]),t}(r.Component),v=m,f=new o.a({uri:"/graphql"});var w=function(){return Object(y.jsx)(l.a,{client:f,children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h2",{children:" Binance "}),Object(y.jsx)("h5",{children:" Binance is a cryptocurrency exchange which is currently the largest exchange in the world in terms of daily trading volume of cryptocurrencies. "}),Object(y.jsx)("p",{children:" Around 1705 cryptocurrencies 24 hour rolling window price change statistics is displayed here. Data is collected using Binance's OpenAPI https://github.com/binance/binance-spot-api-docs/ "}),Object(y.jsx)("p",{children:" React | ApolloClient | GraphQL | Express-GraphQL "}),Object(y.jsx)(v,{})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),C()}},[[52,1,2]]]);
//# sourceMappingURL=main.47bd5724.chunk.js.map