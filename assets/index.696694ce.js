import{x as e,w as t,A as n,r as i,_ as r}from"./vendor.86d84b6d.js";var s,a=["xxl","xl","lg","md","sm","xs"],d={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,o=-1,u={},l={matchHandlers:{},dispatch:function(e){return u=e,c.forEach((function(e){return e(u)})),c.size>=1},subscribe:function(e){return c.size||this.register(),o+=1,c.set(o,e),e(u),o},unsubscribe:function(e){c.delete(e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(d).forEach((function(t){var n=d[t],i=e.matchHandlers[n];null==i||i.mql.removeListener(null==i?void 0:i.listener)})),c.clear()},register:function(){var n=this;Object.keys(d).forEach((function(i){var r=d[i],s=function(r){var s=r.matches;n.dispatch(e(e({},u),t({},i,s)))},a=window.matchMedia(r);a.addListener(s),n.matchHandlers[r]={mql:a,listener:s},s(a)}))}},m=function(){if(!n()||!window.document.documentElement)return!1;if(void 0!==s)return s;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),s=1===e.scrollHeight,document.body.removeChild(e),s},h=function(){var e=i.exports.useState(!1),t=r(e,2),n=t[0],s=t[1];return i.exports.useEffect((function(){s(m())}),[]),n};export{a,l as r,h as u};