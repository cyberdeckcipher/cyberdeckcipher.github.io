(this["webpackJsonpulissessigma.github.io"]=this["webpackJsonpulissessigma.github.io"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(14),a=n.n(c),s=n(2),o=n(4),u=n.n(o),j=n(7),p=n.n(j),l=n(12),q=(n(20),n(1)),b=function(e){return void 0!==e.IsIcon&&e.IsIcon?Object(q.jsx)("div",{}):Object(q.jsx)("span",{className:"buttonText",onClick:e.onclick,children:e.text})},h=function(e){return Object(q.jsx)("div",{className:"Button",children:b(e)})},f=n(9),g=(n(22),function(e){var t=Object(s.f)();return Object(q.jsx)(h,{text:e,onclick:function(){var n=Object(l.a)(p.a.mark((function n(i){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i.preventDefault(),t("../"+e,{replace:!0});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})}),d=function(e){if(e)return{color:f.hightlight}},A=function(){var e=Object(s.f)(),t=Object(s.e)().pathname.split("/").filter((function(e){return e}));return Object(q.jsxs)("div",{className:"AppHeaderBreadcrumb",children:[Object(q.jsx)("span",{onClick:function(){var t=Object(l.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e("/",{replace:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Home"}),t.map((function(n,i){var r=function(e,t){return 0===t||e+1>=t}(i,t.length);return Object(q.jsxs)("span",{children:[" > ",Object(q.jsx)("span",{style:d(r),onClick:function(){var n=Object(l.a)(p.a.mark((function n(c){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.preventDefault(),r||(a=t.slice(0,i+1).join("/"),e(a,{replace:!0}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:n})]},i)}))]})},m=function(){return Object(q.jsxs)("div",{className:u.a.AppHeader,children:[Object(q.jsxs)("div",{className:"AppHeaderMenu",children:[g("Projects"),g("Arts"),g("About")]}),Object(q.jsx)(A,{})]})},Z=function(){return Object(q.jsx)("div",{className:u.a.AppFooter,children:Object(q.jsx)("p",{children:"I work with people to achieve great things"})})},O=n(5),v=function(e,t,n){return{x:e,y:t,z:n}},x=v(.005,.01,.015),k=0,C=0,W=0,S=0,F=0,y=0,z=0,K=0,Y=null,I=null,J=null,N=function e(t){if(null!==Y){F=t-y,y=t,Y.fillRect(0,0,K,z);var n,i=.001*F*x.x*Math.PI*2,r=Object(O.a)(I);try{for(r.s();!(n=r.n()).done;){var c=n.value,a=c.x-k,s=c.y-C,o=a*Math.cos(i)-s*Math.sin(i),u=a*Math.sin(i)+s*Math.cos(i);c.x=o+k,c.y=u+C}}catch(H){r.e(H)}finally{r.f()}i=.001*F*x.y*Math.PI*2;var j,p=Object(O.a)(I);try{for(p.s();!(j=p.n()).done;){var l=j.value,q=l.y-C,b=l.z-W,h=q*Math.cos(i)-b*Math.sin(i),f=q*Math.sin(i)+b*Math.cos(i);l.y=h+C,l.z=f+W}}catch(H){p.e(H)}finally{p.f()}i=.001*F*x.z*Math.PI*2;var g,d=Object(O.a)(I);try{for(d.s();!(g=d.n()).done;){var A=g.value,m=A.x-k,Z=A.z-W,v=m*Math.cos(i)-Z*Math.sin(i),S=m*Math.sin(i)+Z*Math.cos(i);A.x=v+k,A.z=S+W}}catch(H){d.e(H)}finally{d.f()}var N,L=Object(O.a)(J);try{for(L.s();!(N=L.n()).done;){var w=N.value;Y.beginPath(),Y.moveTo(I[w[0]].x,I[w[0]].y),Y.lineTo(I[w[1]].x,I[w[1]].y),Y.stroke()}}catch(H){L.e(H)}finally{L.f()}}requestAnimationFrame(e)},L=function(){var e=Object(i.useRef)();return null==F&&(F=0),Object(i.useEffect)((function(){var t=e.current;t.width=t.clientWidth,t.height=t.clientHeight,z=t.height,K=t.width,I=[v((k=K/2)-(S=K/6),(C=z/2)-S,(W=0)-S),v(k+S,C-S,W-S),v(k+S,C+S,W-S),v(k-S,C+S,W-S),v(k-S,C-S,W+S),v(k+S,C-S,W+S),v(k+S,C+S,W+S),v(k-S,C+S,W+S)],J=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],(Y=t.getContext("2d")).fillStyle=f.background,Y.strokeStyle=f.appYellow,Y.lineWidth=K/100,Y.linecap="round",requestAnimationFrame(N)}),[]),Object(q.jsx)("div",{style:{display:"block",position:"absolute",width:"50%",height:"99%"},children:Object(q.jsx)("canvas",{style:{display:"block",position:"absolute",width:"100%",height:"100%"},ref:e})})},w=n(8),H=n.n(w),M=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(L,{}),Object(q.jsx)("div",{className:H.a.RightHalf,children:Object(q.jsx)("span",{children:"Home page."})})]})},B=function(){return Object(q.jsxs)("div",{className:H.a.SingleColumn,children:[Object(q.jsx)("img",{src:"data:image/gif;base64,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",alt:"404 Page not found"}),Object(q.jsx)("h1",{children:" 404 not found "})]})},G=n.p+"static/media/UnderConstructionGIF.ab330b41.gif",R=function(){return Object(q.jsxs)("div",{className:H.a.SingleColumn,children:[Object(q.jsx)("img",{src:G,alt:"Work in progress page"}),Object(q.jsx)("p",{children:"This page is under construction."})]})},D=function(){return Object(q.jsxs)("div",{className:u.a.App,children:[Object(q.jsx)(m,{}),Object(q.jsx)("div",{className:u.a.AppContainer,children:Object(q.jsxs)(s.c,{children:[Object(q.jsx)(s.a,{path:"/",exact:!0,element:Object(q.jsx)(M,{})}),Object(q.jsx)(s.a,{path:"/Projects",exact:!0,element:Object(q.jsx)(R,{})}),Object(q.jsx)(s.a,{path:"/Arts",exact:!0,element:Object(q.jsx)(R,{})}),Object(q.jsx)(s.a,{path:"/About",exact:!0,element:Object(q.jsx)(R,{})}),Object(q.jsx)(s.a,{path:"/*",element:Object(q.jsx)(B,{})})]})}),Object(q.jsx)(Z,{})]})},P=n(10);a.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(P.a,{children:Object(q.jsx)(D,{})})}),document.getElementById("root"))},4:function(e,t,n){e.exports={root:"App_root__2ZMcB",App:"App_App__2F-qR",AppHeader:"App_AppHeader__3sJiJ",AppContainer:"App_AppContainer__1QqJM",AppFooter:"App_AppFooter__39HgF"}},8:function(e,t,n){e.exports={RightHalf:"Pages_RightHalf__NCDzi",SingleColumn:"Pages_SingleColumn__hcb_b"}},9:function(e){e.exports=JSON.parse('{"background":"#1E1E1E","hightlight":"#6A7367","comentary":"#57A64A","text":"#FFFFFF","link":"#3399FF","appRed":"#8C2F2F","appYellow":"#FFDBA3"}')}},[[23,1,2]]]);
//# sourceMappingURL=main.2d7d9118.chunk.js.map