(function(t){function e(e){for(var n,i,a=e[0],s=e[1],l=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==c[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},c={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue3/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=function(t){return Object(n["i"])("data-v-d8be7804"),t=t(),Object(n["h"])(),t},o={class:"w"},i={id:"section"},a=c((function(){return Object(n["c"])("canvas",{id:"canvass",height:"550",width:"800"},"看到这行字就是因为你的浏览器没更新的结果",-1)})),s={class:"selects"},l={id:"buts"},u={id:"over",class:"i"},d={id:"num"},p={id:"miss"},f={class:"hints"},b={class:"hint"},m=Object(n["d"])("直接在键盘输入下落的字母，会自动计数，如已下到不可见区域还未输入数量超过20个就自动结束 ");function h(t,e,r,c,h,v){return Object(n["g"])(),Object(n["b"])("div",o,[Object(n["c"])("section",i,[a,Object(n["o"])(Object(n["c"])("button",{id:"go",onClick:e[0]||(e[0]=function(){return t.good&&t.good.apply(t,arguments)})},"开始",512),[[n["m"],t.isgood]])]),Object(n["c"])("div",s,[Object(n["c"])("div",l,[Object(n["c"])("button",{id:"stop",onClick:e[1]||(e[1]=function(){return t.over&&t.over.apply(t,arguments)})},"结束"),Object(n["c"])("button",{id:"restart",onClick:e[2]||(e[2]=function(){return t.restart&&t.restart.apply(t,arguments)})},"重来")]),Object(n["c"])("ol",{id:"olnum",class:Object(n["e"])(t.olnum)},[Object(n["o"])(Object(n["c"])("li",u,"游戏结束",512),[[n["m"],t.isbook]]),Object(n["c"])("li",d,"完成的数量:"+Object(n["k"])(t.accomplish),1),Object(n["c"])("li",p,"错过的数量:"+Object(n["k"])(t.missarr.length),1),Object(n["o"])(Object(n["c"])("li",{id:"imte",class:"i"},"用时:"+Object(n["k"])(t.time)+"秒",513),[[n["m"],t.isbook]])],2),Object(n["o"])(Object(n["c"])("div",f,null,512),[[n["m"],t.ishints]]),Object(n["o"])(Object(n["c"])("span",b,[m,Object(n["c"])("span",{onClick:e[3]||(e[3]=function(){return t.ishint&&t.ishint.apply(t,arguments)})},"我知道了")],512),[[n["m"],t.ishints]])])])}var v=r("5530"),j=(r("ac1f"),r("1276"),r("99af"),r("cb29"),r("a434"),{name:"App",setup:function(){var t=Object(n["j"])({ABC:"abcdefghijklnmopqrstuvwxyz".toUpperCase().split(""),carr:[],y:1,isgood:!0,accomplish:0,missarr:[],time:0,isbook:!1,olnum:"s",ishints:!0,speed:1e3});return t.cs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:parseInt(750*Math.random())+30,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.ABC[parseInt(Math.random()*t.ABC.length)],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-50,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb(".concat(parseInt(225*Math.random()),",").concat(parseInt(225*Math.random()),",").concat(parseInt(225*Math.random()),")");t.c.beginPath(),t.c.save();var o=t.c.createRadialGradient(e,n,0,e,n,30);return o.addColorStop(0,"#fff"),o.addColorStop(1,c),t.c.arc(e,n,20,0,2*Math.PI),t.c.fillStyle=o,t.c.fill(),t.c.restore(),t.c.save(),t.c.font="20px  Microsoft YaHei",t.c.fillText(r,e-7,n+6),t.c.textAlign="center",t.c.restore(),[e,r,n,c]},t.x=function(){cancelAnimationFrame(t.re),t.re=requestAnimationFrame((function(){t.c.clearRect(0,0,800,550);for(var e=0;e<t.carr.length;e++)t.carr[e][2]+=t.y,t.cs(t.carr[e][0],t.carr[e][1],t.carr[e][2],t.carr[e][3])}))},t.ishint=function(){t.ishints=!1},t.good=function(){t.times=(new Date).getTime(),t.isgood=!1,clearInterval(t.tiems),t.tiems=setInterval((function(){t.carr.push(t.cs()),t.speed<=200&&(t.speed-=30),t.y<=3&&(t.y+=.1)}),550),t.x()},t.over=function(){t.time=Math.ceil(((new Date).getTime()-t.times)/1e3),t.isbook=!0,t.olnum="olnums",clearInterval(t.tiems),cancelAnimationFrame(t.re)},t.restart=function(){t.isgood=!0,t.carr=[],t.y=1,t.isgood=!0,t.accomplish=0,t.missarr=[],t.time=0,t.isbook=!1,t.olnum="s",t.c.clearRect(0,0,800,550)},Object(n["n"])([function(){return t.carr},function(){return t.missarr}],(function(){t.x();for(var e=0;e<t.carr.length;e++)t.carr[e][2]>=530&&(t.missarr.push(t.carr[e]),t.carr.splice(e,1));20==t.missarr.length&&t.over()}),{deep:!0}),Object(n["f"])((function(){function e(t){return document.getElementById(t)}t.c=e("canvass").getContext("2d"),document.addEventListener("keyup",(function(e){for(var r=e.key.toUpperCase(),n=0;n<t.carr.length;n++)if(r==t.carr[n][1]){t.c.clearRect(0,0,800,550),t.carr.splice(n,1),t.accomplish++;for(var c=0;c<t.carr.length;c++)t.cs(t.carr[c][0],t.carr[c][1],t.carr[c][2],t.carr[c][3])}}))})),Object(v["a"])({},Object(n["l"])(t))}}),O=(r("799e"),r("6b0d")),g=r.n(O);const y=g()(j,[["render",h],["__scopeId","data-v-d8be7804"]]);var k=y;Object(n["a"])(k).mount("#app")},"799e":function(t,e,r){"use strict";r("f7d6")},f7d6:function(t,e,r){}});
//# sourceMappingURL=app.7eb2522f.js.map