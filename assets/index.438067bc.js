(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const y of u.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function n(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerpolicy&&(u.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?u.credentials="include":d.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(d){if(d.ep)return;d.ep=!0;const u=n(d);fetch(d.href,u)}})();function ae(){}function vt(e){return e()}function ft(){return Object.create(null)}function le(e){e.forEach(vt)}function Ve(e){return typeof e=="function"}function St(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Lt(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function Ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function o(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function f(){return T(" ")}function te(e,t,n,c){return e.addEventListener(t,n,c),()=>e.removeEventListener(t,n,c)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Nt(e){return Array.from(e.childNodes)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Tt(e,t,n,c){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,c?"important":"")}let We;function re(e){We=e}const oe=[],ut=[],Ne=[],mt=[],Ct=Promise.resolve();let Re=!1;function Mt(){Re||(Re=!0,Ct.then(wt))}function Ue(e){Ne.push(e)}const Ke=new Set;let Le=0;function wt(){const e=We;do{for(;Le<oe.length;){const t=oe[Le];Le++,re(t),Et(t.$$)}for(re(null),oe.length=0,Le=0;ut.length;)ut.pop()();for(let t=0;t<Ne.length;t+=1){const n=Ne[t];Ke.has(n)||(Ke.add(n),n())}Ne.length=0}while(oe.length);for(;mt.length;)mt.pop()();Re=!1,Ke.clear(),re(e)}function Et(e){if(e.fragment!==null){e.update(),le(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ue)}}const xt=new Set;function Ht(e,t){e&&e.i&&(xt.delete(e),e.i(t))}function qt(e,t,n,c){const{fragment:d,after_update:u}=e.$$;d&&d.m(t,n),c||Ue(()=>{const y=e.$$.on_mount.map(vt).filter(Ve);e.$$.on_destroy?e.$$.on_destroy.push(...y):le(y),e.$$.on_mount=[]}),u.forEach(Ue)}function Ft(e,t){const n=e.$$;n.fragment!==null&&(le(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function It(e,t){e.$$.dirty[0]===-1&&(oe.push(e),Mt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function jt(e,t,n,c,d,u,y,g=[-1]){const b=We;re(e);const m=e.$$={fragment:null,ctx:[],props:u,update:ae,not_equal:d,bound:ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:ft(),dirty:g,skip_bound:!1,root:t.target||b.$$.root};y&&y(m.root);let h=!1;if(m.ctx=n?n(e,t.props||{},(r,_,...M)=>{const k=M.length?M[0]:_;return m.ctx&&d(m.ctx[r],m.ctx[r]=k)&&(!m.skip_bound&&m.bound[r]&&m.bound[r](k),h&&It(e,r)),_}):[],m.update(),h=!0,le(m.before_update),m.fragment=c?c(m.ctx):!1,t.target){if(t.hydrate){const r=Nt(t.target);m.fragment&&m.fragment.l(r),r.forEach(v)}else m.fragment&&m.fragment.c();t.intro&&Ht(e.$$.fragment),qt(e,t.target,t.anchor,t.customElement),wt()}re(b)}class At{$destroy(){Ft(this,1),this.$destroy=ae}$on(t,n){if(!Ve(n))return ae;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const d=c.indexOf(n);d!==-1&&c.splice(d,1)}}$set(t){this.$$set&&!Lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pt(e,t,n){const c=e.slice();return c[8]=t[n],c}function ht(e,t,n){const c=e.slice();return c[11]=t[n],c}function gt(e,t,n){const c=e.slice();return c[14]=t[n],c}function bt(e){let t,n,c,d=e[14].title+"",u,y,g,b=e[14].msg+"",m,h;return{c(){t=o("article"),n=o("div"),c=o("h4"),u=T(d),y=f(),g=o("p"),m=T(b),h=f(),i(c,"class","list-item spacer-2xl"),i(g,"class","lead"),i(n,"class","box")},m(r,_){w(r,t,_),l(t,n),l(n,c),l(c,u),l(n,y),l(n,g),l(g,m),l(t,h)},p(r,_){_&32&&d!==(d=r[14].title+"")&&j(u,d),_&32&&b!==(b=r[14].msg+"")&&j(m,b)},d(r){r&&v(t)}}}function _t(e){let t,n,c,d=e[11].id+"",u,y,g,b=e[11].title+"",m,h,r,_,M,k,E,C,O=e[11].code+"",Q,z,A,B,ie,U,D;return{c(){t=o("div"),n=o("span"),c=T("Step "),u=T(d),y=f(),g=o("span"),m=T(b),h=f(),r=o("code"),_=o("span"),M=T("Copied"),E=f(),C=o("span"),Q=T(O),A=f(),B=o("i"),ie=f(),i(n,"class","span d-block spacer-sm"),i(g,"class","span d-block spacer-lg"),i(_,"class","bgc-brown-dkn-4 px-5 py-1 c-white pos-absolute t-neg-10 r-0 hide"),i(_,"id",k="notify-"+e[11].class),i(C,"id",z=e[11].class),i(B,"class","bi bi-clipboard pos-absolute r-2 t-2 fs-lg op-0.8 cur-pointer"),i(r,"class","code pos-relative d-block w-100% c-white"),Tt(r,"background-color","var(--limpio-brown-ltn-3)",1),i(t,"class","spacer-4xl")},m(G,q){w(G,t,q),l(t,n),l(n,c),l(n,u),l(t,y),l(t,g),l(g,m),l(t,h),l(t,r),l(r,_),l(_,M),l(r,E),l(r,C),l(C,Q),l(r,A),l(r,B),l(t,ie),U||(D=[te(B,"click",function(){Ve(kt(e[11].class))&&kt(e[11].class).apply(this,arguments)}),te(B,"keyup",console.log("clicked"))],U=!0)},p(G,q){e=G,q&128&&d!==(d=e[11].id+"")&&j(u,d),q&128&&b!==(b=e[11].title+"")&&j(m,b),q&128&&k!==(k="notify-"+e[11].class)&&i(_,"id",k),q&128&&O!==(O=e[11].code+"")&&j(Q,O),q&128&&z!==(z=e[11].class)&&i(C,"id",z)},d(G){G&&v(t),U=!1,le(D)}}}function yt(e){let t,n,c=e[8].keys+"",d,u,y,g=e[8].command+"",b,m,h,r=e[8].mode+"",_,M;return{c(){t=o("tr"),n=o("td"),d=T(c),u=f(),y=o("td"),b=T(g),m=f(),h=o("td"),_=T(r),M=f()},m(k,E){w(k,t,E),l(t,n),l(n,d),l(t,u),l(t,y),l(y,b),l(t,m),l(t,h),l(h,_),l(t,M)},p(k,E){E&64&&c!==(c=k[8].keys+"")&&j(d,c),E&64&&g!==(g=k[8].command+"")&&j(b,g),E&64&&r!==(r=k[8].mode+"")&&j(_,r)},d(k){k&&v(t)}}}function Pt(e){let t,n,c,d,u,y,g,b,m,h,r,_,M,k,E,C,O,Q,z,A,B,ie,U,D,G,q,ne,Te,x,ce,Ce,Ze,de,Me,Je,fe,Qe,ue,Ee,K,me,Xe,se,xe,F,pe,Ye,he,$e,He,H,ge,et,be,tt,_e,lt,V,ye,it,qe,X,Fe,I,ke,nt,ve,st,Ie,ot,we,P,Se,rt,je,W,Ae,at,Pe,Z,Be,ct,Oe,J,ze,De,dt,Y=e[5],S=[];for(let s=0;s<Y.length;s+=1)S[s]=bt(gt(e,Y,s));let $=e[7],L=[];for(let s=0;s<$.length;s+=1)L[s]=_t(ht(e,$,s));let ee=e[6],N=[];for(let s=0;s<ee.length;s+=1)N[s]=yt(pt(e,ee,s));return{c(){t=o("div"),n=o("div"),c=o("span"),d=o("a"),u=T(e[0]),y=f(),g=o("nav"),b=o("ul"),b.innerHTML=`<li class="list-item mr-5"><a href="#features">Features</a></li> 
        <li class="list-item mr-5"><a href="#mappings">Mappings</a></li> 
        <li class="list-item"><a href="#donate">Donate</a></li>`,m=f(),h=o("ul"),r=o("li"),_=o("a"),M=o("i"),k=f(),E=o("li"),C=o("a"),O=o("i"),Q=f(),z=o("li"),A=o("a"),B=o("i"),ie=f(),U=o("li"),D=o("i"),G=f(),q=o("li"),ne=o("i"),Te=f(),x=o("header"),ce=o("h1"),Ce=T(e[0]),Ze=f(),de=o("p"),Me=T(e[1]),Je=f(),fe=o("a"),fe.innerHTML='<button class="btn bgc-teal spacer-7xl py-3 bd-none c-white">Get Started</button>',Qe=f(),ue=o("div"),ue.innerHTML='<video class="video responsive" src="./src/assets/video.mp4" loading="lazy" alt="video" autoplay="" muted="" loop=""></video>',Ee=f(),K=o("section"),me=o("h2"),me.textContent="Features",Xe=f(),se=o("div");for(let s=0;s<S.length;s+=1)S[s].c();xe=f(),F=o("section"),pe=o("h2"),pe.textContent="Getting Started",Ye=f(),he=o("p"),he.textContent="Easily get started with these 7 steps below",$e=f();for(let s=0;s<L.length;s+=1)L[s].c();He=f(),H=o("section"),ge=o("h2"),ge.textContent="Mappings",et=f(),be=o("p"),be.innerHTML="The leader key is set to the <strong>space</strong> key. But you can obviously remap to any other key.",tt=f(),_e=o("p"),_e.innerHTML="<strong>c-[key]</strong> means hold the control key plus the other key to trigger the command.",lt=f(),V=o("table"),ye=o("tr"),ye.innerHTML=`<td>Key</td> 
      <td>Command</td> 
      <td>Mode</td>`,it=f();for(let s=0;s<N.length;s+=1)N[s].c();qe=f(),X=o("section"),X.innerHTML=`<h2 class="subtitle">Donate</h2> 
  <button class="btn bgc-white py-3 bd-none c-black">Donate</button>`,Fe=f(),I=o("footer"),ke=o("span"),ke.textContent="\xA9 \xA0 Egg Nvim",nt=f(),ve=o("span"),ve.innerHTML='<i class="bi bi-geo-alt"></i>\xA0 Limuru, Kenya',st=f(),Ie=o("span"),ot=f(),we=o("nav"),P=o("ul"),Se=o("li"),Se.innerHTML="<i>msg</i>",rt=f(),je=o("li"),W=o("a"),Ae=o("i"),at=f(),Pe=o("li"),Z=o("a"),Be=o("i"),ct=f(),Oe=o("li"),J=o("a"),ze=o("i"),i(d,"href","#intro"),i(c,"class","panel-brand"),i(b,"class","c-list d-flex mr-15"),i(M,"class","bi bi-github mr-5"),i(_,"href",e[2]),i(_,"target","_blank"),i(_,"rel","\u201Dnoreferrer\u201D"),i(O,"class","bi bi-linkedin mr-5"),i(C,"href",e[3]),i(C,"target","_blank"),i(C,"rel","\u201Dnoreferrer\u201D"),i(B,"class","bi bi-twitter mr-10"),i(A,"href",e[4]),i(A,"target","_blank"),i(A,"rel","\u201Dnoreferrer\u201D"),i(D,"class","bi bi-toggle2-off"),i(ne,"class","bi bi-toggle2-on hide"),i(h,"class","d-flex"),i(g,"class","d-flex"),i(n,"class","panel-wrapper wrapper-md"),i(t,"class","panel bgc-teal sticky-top c-white"),i(ce,"class","title spacer-2xl"),i(de,"class","lead spacer-4xl"),i(fe,"href","#get-started"),i(ue,"class","wrapper-lg mx-auto"),i(x,"class","ta-center mb-0 pt-14"),i(x,"id","intro"),i(me,"class","ta-center spacer-2xl"),i(se,"class","d-grid gtc-2 ta-center gg-30"),i(K,"class","wrapper-md py-14"),i(K,"id","features"),i(pe,"class","subtitle spacer-2xl ta-center"),i(he,"class","lead spacer-xl ta-center"),i(F,"class","wrapper-md py-14"),i(F,"id","get-started"),i(ge,"class","ta-center spacer-2xl"),i(be,"class","lead spacer-xl"),i(_e,"class","lead spacer-3xl"),i(ye,"class","bgc-teal-ltn-1 c-white"),i(V,"class","table responsive striped"),i(H,"class","wrapper-md py-14"),i(H,"id","mappings"),i(X,"id","donate"),i(X,"class","py-14 ta-center bgc-teal c-white mb-0"),i(ke,"class","span d-block spacer-lg"),i(ve,"class","span d-block spacer-lg"),i(Ie,"class","span d-block spacer-lg"),i(Se,"class","mr-2 vis-hidden"),i(Ae,"class","bi bi-github mr-5"),i(W,"href",e[2]),i(W,"target","_blank"),i(W,"rel","\u201Dnoreferrer\u201D"),i(Be,"class","bi bi-linkedin mr-5"),i(Z,"href",e[3]),i(Z,"target","_blank"),i(Z,"rel","\u201Dnoreferrer\u201D"),i(ze,"class","bi bi-twitter mr-10"),i(J,"href",e[4]),i(J,"target","_blank"),i(J,"rel","\u201Dnoreferrer\u201D"),i(P,"class","d-flex"),i(we,"class","d-flex jc-center"),i(I,"class","footer wrapper-md pt-5 ta-center")},m(s,p){w(s,t,p),l(t,n),l(n,c),l(c,d),l(d,u),l(n,y),l(n,g),l(g,b),l(g,m),l(g,h),l(h,r),l(r,_),l(_,M),l(h,k),l(h,E),l(E,C),l(C,O),l(h,Q),l(h,z),l(z,A),l(A,B),l(h,ie),l(h,U),l(U,D),l(h,G),l(h,q),l(q,ne),w(s,Te,p),w(s,x,p),l(x,ce),l(ce,Ce),l(x,Ze),l(x,de),l(de,Me),l(x,Je),l(x,fe),l(x,Qe),l(x,ue),w(s,Ee,p),w(s,K,p),l(K,me),l(K,Xe),l(K,se);for(let a=0;a<S.length;a+=1)S[a].m(se,null);w(s,xe,p),w(s,F,p),l(F,pe),l(F,Ye),l(F,he),l(F,$e);for(let a=0;a<L.length;a+=1)L[a].m(F,null);w(s,He,p),w(s,H,p),l(H,ge),l(H,et),l(H,be),l(H,tt),l(H,_e),l(H,lt),l(H,V),l(V,ye),l(V,it);for(let a=0;a<N.length;a+=1)N[a].m(V,null);w(s,qe,p),w(s,X,p),w(s,Fe,p),w(s,I,p),l(I,ke),l(I,nt),l(I,ve),l(I,st),l(I,Ie),l(I,ot),l(I,we),l(we,P),l(P,Se),l(P,rt),l(P,je),l(je,W),l(W,Ae),l(P,at),l(P,Pe),l(Pe,Z),l(Z,Be),l(P,ct),l(P,Oe),l(Oe,J),l(J,ze),De||(dt=[te(D,"click",Bt),te(D,"keyup",console.log("clicked")),te(ne,"click",Ot),te(ne,"keyup",console.log("clicked"))],De=!0)},p(s,[p]){if(p&1&&j(u,s[0]),p&4&&i(_,"href",s[2]),p&8&&i(C,"href",s[3]),p&16&&i(A,"href",s[4]),p&1&&j(Ce,s[0]),p&2&&j(Me,s[1]),p&32){Y=s[5];let a;for(a=0;a<Y.length;a+=1){const R=gt(s,Y,a);S[a]?S[a].p(R,p):(S[a]=bt(R),S[a].c(),S[a].m(se,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=Y.length}if(p&128){$=s[7];let a;for(a=0;a<$.length;a+=1){const R=ht(s,$,a);L[a]?L[a].p(R,p):(L[a]=_t(R),L[a].c(),L[a].m(F,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=$.length}if(p&64){ee=s[6];let a;for(a=0;a<ee.length;a+=1){const R=pt(s,ee,a);N[a]?N[a].p(R,p):(N[a]=yt(R),N[a].c(),N[a].m(V,null))}for(;a<N.length;a+=1)N[a].d(1);N.length=ee.length}p&4&&i(W,"href",s[2]),p&8&&i(Z,"href",s[3]),p&16&&i(J,"href",s[4])},i:ae,o:ae,d(s){s&&v(t),s&&v(Te),s&&v(x),s&&v(Ee),s&&v(K),Ge(S,s),s&&v(xe),s&&v(F),Ge(L,s),s&&v(He),s&&v(H),Ge(N,s),s&&v(qe),s&&v(X),s&&v(Fe),s&&v(I),De=!1,le(dt)}}}function kt(e){navigator.clipboard.writeText(document.querySelector("#"+e).textContent),console.log("copied"),document.querySelector("#notify-"+e).classList.remove("hide"),setTimeout(()=>{document.querySelector("#notify-"+e).classList.add("hide")},2e3)}function Bt(){document.querySelector("body").classList.add("c-white","bgc-black"),document.querySelector(".bi-toggle2-on").classList.remove("hide"),document.querySelector(".bi-toggle2-off").classList.add("hide")}function Ot(){document.querySelector("body").classList.remove("c-white","bgc-black"),document.querySelector(".bi-toggle2-off").classList.remove("hide"),document.querySelector(".bi-toggle2-on").classList.add("hide")}function zt(e,t,n){let{name:c}=t,{motto:d}=t,{github:u}=t,{linkedin:y}=t,{twitter:g}=t,{features:b}=t,{mappings:m}=t,{installation_steps:h}=t;return e.$$set=r=>{"name"in r&&n(0,c=r.name),"motto"in r&&n(1,d=r.motto),"github"in r&&n(2,u=r.github),"linkedin"in r&&n(3,y=r.linkedin),"twitter"in r&&n(4,g=r.twitter),"features"in r&&n(5,b=r.features),"mappings"in r&&n(6,m=r.mappings),"installation_steps"in r&&n(7,h=r.installation_steps)},[c,d,u,y,g,b,m,h]}class Dt extends At{constructor(t){super(),jt(this,t,zt,Pt,St,{name:0,motto:1,github:2,linkedin:3,twitter:4,features:5,mappings:6,installation_steps:7})}}new Dt({target:document.getElementById("app"),props:{name:"Egg Neovim",motto:"Makes you feel eggy",github:"https://github.com/vicktter",linkedin:"https://linkedin.com",twitter:"https://twitter.com",features:[{id:0,title:"LSP",img:"htps://",msg:"comes with lsp configured out the box with plugins such as lspconfig to help you when working with lsp"},{id:0,title:"Syntax Highlighting",img:"htps://",msg:"It has really awesome syntax highlighting through lsp and tree-sitter support"},{id:1,title:"Auto Completion",img:"htps://",msg:"Auto completion is handled by cmp-nvim"},{id:1,title:"Snippets",img:"htps://",msg:"Has snippets from vscode plus custom added ones"},{id:1,title:"Web IDE",img:"htps://",msg:"Supports web development out of the box. Comes shipped with plugins such as emmet and supports auto completion for HTML, CSS and JavaScript"},{id:2,title:"Error Reporting",img:"htps://",msg:"Because of its awesome lsp support, error reporting is top notch as you get errors as soon as you leave insert mode"},{id:3,title:"File Explorer",img:"htps://",msg:"Uses NvimTree for awesome file tree experience with awesome key bindings"},{id:4,title:"Fuzzy File Search",img:"htps://",msg:"Has keybindings to toggle FZF to fuzzy search files for files in a project"},{id:5,title:"Auto Close",img:"htps://",msg:"When you type a single quote it will automatically close it, this also happens for html tags"},{id:6,title:"Integrated Terminal",img:"htps://",msg:"Comes with an integrated with opens in the directory you are working on, so that you can easily run commands in the background while still viewing your code"},{id:6,title:"Themes",img:"htps://",msg:"Comes with 5 different themes, tokyonight, gruvbox, molokai, mopkai, and solarized"}],installation_steps:[{id:1,class:"step-1",title:"Clone the project",code:"git clone https://vicktter/egg-nvim/ ~/.config/nvim"},{id:2,class:"step-2",title:"Do something else the project",code:"git clone https://vicktter/egg-nvim/ ~/.config/nvim"}],mappings:[{id:0,keys:"c-o",command:"Emmet Trigger",mode:"Insert"},{id:1,keys:"jk",command:"Escape Insert Mode",mode:"Insert"},{id:2,keys:"<leader>e",command:"Toggle Nerd Tree",mode:"Normal"},{id:3,keys:"<leader>t",command:"Toggle Terminal",mode:"Normal"},{id:4,keys:"<leader>f",command:"Toggle FZF",mode:"Normal"},{id:5,keys:"<leader>w",command:"Save File",mode:"Normal"},{id:6,keys:"<leader>q",command:"Quit",mode:"Normal"},{id:7,keys:"<leader>n",command:"Switch Buffer",mode:"Normal"},{id:8,keys:"<leader>l",command:"Go to Next Buffer",mode:"Normal"},{id:9,keys:"<leader>h",command:"Go to Previous Buffer",mode:"Normal"},{id:10,keys:"u",command:"undo!",mode:"Normal"},{id:11,keys:"s",command:"Repeat",mode:"Normal"},{id:12,keys:"<leader>p",command:"Color Picker",mode:"Normal"},{id:12,keys:"c-u",command:"Smooth Scroll Up",mode:"Normal"},{id:13,keys:"c-p",command:"Smooth Scroll Down",mode:"Normal"},{id:14,keys:"<",command:"Indent Left",mode:"Visual"},{id:15,keys:">",command:"Indent Right",mode:"Visual"}]}});
