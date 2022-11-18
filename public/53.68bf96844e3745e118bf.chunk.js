"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[53,63,709,392,810,641,776],{9638:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(3910),o=n(2738),i=n(4541),r=n(2325),s=n(3512),d=n(4494),c=n(279);let l,u=!1;function p(e){u||(l||(l=s.Z.managers.apiManager.getConfig().then((e=>e.suggested_lang_code!==r.ZP.lastRequestedLangCode?Promise.all([e,r.ZP.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),r.ZP.getCacheLangPack()]):[])))).then((([t,n])=>{if(!t)return;const l=[];n.forEach((e=>{const t=r.ZP.strings.get(e.key);t&&(l.push(t),r.ZP.strings.set(e.key,e))}));const p="Login.ContinueOnLanguage",g=(0,d.Z)("btn-primary btn-secondary btn-primary-transparent primary",{text:p});g.lastElementChild.classList.remove("i18n"),(0,i.Z)({text:[r.ZP.format(p,!0)]}).then((()=>{window.requestAnimationFrame((()=>{e.append(g)}))})),s.Z.addEventListener("language_change",(()=>{g.remove()}),{once:!0}),l.forEach((e=>{r.ZP.strings.set(e.key,e)})),(0,o.fc)(g,(e=>{(0,a.Z)(e),u=!0,g.disabled=!0,(0,c.y)(g),r.ZP.getLangPack(t.suggested_lang_code)}))}))}},6392:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(4755),o=n(4874),i=n(810),r=n(3083),s=n(4489),d=n(2325),c=n(144),l=n(5565),u=n(3512);let p,g=null,h=null,m=null;const y=new o.Z("page-authCode",!0,(()=>{const e=g.type.length,t=new s.Z({label:"Code",name:(0,c.a)(),length:e,onFill:e=>{h(e)}});p=t.input,y.pageEl.querySelector(".input-wrapper").append(t.container),y.pageEl.querySelector(".phone-edit").addEventListener("click",(function(){return i.default.mount()}));const o=()=>{setTimeout((()=>{f.remove()}),300)},h=e=>{p.setAttribute("disabled","true");const a={phone_number:g.phone_number,phone_code_hash:g.phone_code_hash,phone_code:e};u.Z.managers.apiManager.invokeApi("auth.signIn",a,{ignoreErrors:!0}).then((e=>{switch(e._){case"auth.authorization":u.Z.managers.apiManager.setUser(e.user),n.e(781).then(n.bind(n,5436)).then((e=>{e.default.mount()})),o();break;case"auth.authorizationSignUpRequired":n.e(813).then(n.bind(n,8339)).then((e=>{e.default.mount({phone_number:g.phone_number,phone_code_hash:g.phone_code_hash})})),o()}})).catch((e=>{return a=void 0,o=void 0,r=function*(){let a=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":a=!0,e.handled=!0,yield(yield n.e(774).then(n.bind(n,9437))).default.mount(),setTimeout((()=>{p.value=""}),300);break;case"PHONE_CODE_EXPIRED":p.classList.add("error"),(0,l.Z)(t.label,(0,d.ag)("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":p.classList.add("error"),(0,l.Z)(t.label,(0,d.ag)("PHONE_CODE_INVALID"));break;default:t.label.innerText=e.type}a||t.select(),p.removeAttribute("disabled")},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{d(r.next(e))}catch(e){t(e)}}function s(e){try{d(r.throw(e))}catch(e){t(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof i?a:new i((function(e){e(a)}))).then(n,s)}d((r=r.apply(a,o||[])).next())}));var a,o,i,r}))},m=y.pageEl.querySelector(".auth-image"),v=a.Z.isMobile?100:166,f=new r.Z(t,v);return m.append(f.container),f.load()}),(e=>{if(g=e,h){p.value="";const e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!0),p.dispatchEvent(e)}else h=y.pageEl.getElementsByClassName("phone")[0],m=y.pageEl.getElementsByClassName("sent-type")[0];let t,n;switch(h.innerText=g.phone_number,g.type._){case"auth.sentCodeTypeSms":t="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":t="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":t="Login.Code.SentCall";break;default:t="Login.Code.SentUnknown",n=[g.type._]}(0,l.Z)(m,(0,d.ag)(t,n)),u.Z.managers.appStateManager.pushToState("authState",{_:"authStateAuthCode",sentCode:e})}),(()=>{p.focus()})),v=y},810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(279),o=n(4874),i=n(9807),r=n(4494),s=n(5432),d=n(4159),c=n(2325),l=n(1447),u=n(1405),p=n(9709),g=n(9638),h=n(3910),m=n(2738),y=n(5565),v=n(1656),f=n(7487),_=n(2398),Z=n(7922),E=n(3512),b=n(709),L=n(3855),S=n(5431);let w,k=null;const P=new o.Z("page-sign",!0,(()=>{const e=document.createElement("div");let t,o;e.classList.add("input-wrapper");const u=new S.Z({onCountryChange:(e,n)=>{t=e,o=n,n&&(C.value=C.lastValue="+"+n.country_code,setTimeout((()=>{x.focus(),(0,_.Z)(x,!0)}),0))}}),C=new b.Z({onInput:e=>{l.Z.loadLottieWorkers();const{country:n,code:a}=e||{},i=n?n.name||n.default_name:"";i===u.value||t&&n&&a&&(t===n||o.country_code===a.country_code)||u.override(n,a,i),n||C.value.length-1>1?k.style.visibility="":k.style.visibility="hidden"}}),x=C.input;x.addEventListener("keypress",(e=>{if(!k.style.visibility&&"Enter"===e.key)return A()}));const T=new i.Z({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});T.input.addEventListener("change",(()=>{const e=T.checked;E.Z.managers.appStateManager.pushToState("keepSigned",e),L.Z.toggleStorages(e,!0)})),L.Z.getState().then((e=>{Z.Z.isAvailable()?T.checked=e.keepSigned:(T.checked=!1,T.label.classList.add("checkbox-disabled"))})),k=(0,r.Z)("btn-primary btn-color-primary",{text:"Login.Next"}),k.style.visibility="hidden";const A=e=>{e&&(0,h.Z)(e);const t=(0,v.Z)([k,w],!0);(0,y.Z)(k,(0,c.ag)("PleaseWait")),(0,a.y)(k);const o=C.value;E.Z.managers.apiManager.invokeApi("auth.sendCode",{phone_number:o,api_id:d.Z.id,api_hash:d.Z.hash,settings:{_:"codeSettings"}}).then((e=>{n.e(392).then(n.bind(n,6392)).then((t=>t.default.mount(Object.assign(e,{phone_number:o}))))})).catch((e=>{t(),"PHONE_NUMBER_INVALID"===e.type?(C.setError(),(0,y.Z)(C.label,(0,c.ag)("Login.PhoneLabelInvalid")),x.classList.add("error"),(0,y.Z)(k,(0,c.ag)("Login.Next"))):(console.error("auth.sendCode error:",e),k.innerText=e.type)}))};(0,m.fc)(k,A),w=(0,r.Z)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"}),w.addEventListener("click",(()=>{p.default.mount()})),e.append(u.container,C.container,T.label,k,w);const O=document.createElement("h4");O.classList.add("text-center"),(0,c.$d)(O,"Login.Title");const N=document.createElement("div");N.classList.add("subtitle","text-center"),(0,c.$d)(N,"Login.StartText"),P.pageEl.querySelector(".container").append(O,N,e),s.Z||setTimeout((()=>{x.focus()}),0),(0,g.Z)(e),E.Z.managers.apiManager.invokeApi("help.getNearestDc").then((e=>{var t;const n=Z.Z.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&c.ZP.getLangPack(n.lang_code).then((()=>{C.simulateInputEvent()}));const a=new Set([1,2,3,4,5]),o=[e.this_dc];let i;return e.nearest_dc!==e.this_dc&&(i=E.Z.managers.apiManager.getNetworkerVoid(e.nearest_dc).then((()=>{o.push(e.nearest_dc)}))),(i||Promise.resolve()).then((()=>{o.forEach((e=>{a.delete(e)}));const e=[...a],t=()=>{return n=void 0,a=void 0,i=function*(){const n=e.shift();if(!n)return;const a=`dc${n}_auth_key`;if(yield f.Z.get(a))return t();setTimeout((()=>{E.Z.managers.apiManager.getNetworkerVoid(n).finally(t)}),3e3)},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{d(i.next(e))}catch(e){t(e)}}function s(e){try{d(i.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}d((i=i.apply(n,a||[])).next())}));var n,a,o,i};t()})),e})).then((e=>{u.value.length||C.value.length||u.selectCountryByIso2(e.country)}))}),(()=>{k&&((0,y.Z)(k,(0,c.ag)("Login.Next")),(0,u.Z)(k,void 0,void 0,!0),k.removeAttribute("disabled")),w&&w.removeAttribute("disabled"),E.Z.managers.appStateManager.pushToState("authState",{_:"authStateSignIn"})})),C=P},9709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(4874),o=n(4159),i=n(4494),r=n(2325),s=n(3512),d=n(279),c=n(9638),l=n(5418),u=n(9895);function p(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}var g=function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{d(a.next(e))}catch(e){i(e)}}function s(e){try{d(a.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}d((a=a.apply(e,t||[])).next())}))};let h;const m=new a.Z("page-signQR",!0,(()=>h),(()=>{h||(h=g(void 0,void 0,void 0,(function*(){const e=m.pageEl.querySelector(".auth-image");let t=(0,d.y)(e,!0);const a=document.createElement("div");a.classList.add("input-wrapper");const y=(0,i.Z)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});a.append(y),(0,c.Z)(a);const v=e.parentElement,f=document.createElement("h4");(0,r.$d)(f,"Login.QR.Title");const _=document.createElement("ol");_.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach((e=>{const t=document.createElement("li");t.append((0,r.ag)(e)),_.append(t)})),v.append(f,_,a),y.addEventListener("click",(()=>{n.e(810).then(n.bind(n,810)).then((e=>e.default.mount())),E=!0}));const Z=(yield Promise.all([n.e(630).then(n.t.bind(n,1915,23))]))[0].default;let E=!1;s.Z.addEventListener("user_auth",(()=>{E=!0,h=null}),{once:!0});const b={ignoreErrors:!0};let L;const S=a=>g(void 0,void 0,void 0,(function*(){try{let i=yield s.Z.managers.apiManager.invokeApi("auth.exportLoginToken",{api_id:o.Z.id,api_hash:o.Z.hash,except_ids:[]},{ignoreErrors:!0});if("auth.loginTokenMigrateTo"===i._&&(b.dcId||(b.dcId=i.dc_id,s.Z.managers.apiManager.setBaseDcId(i.dc_id)),i=yield s.Z.managers.apiManager.invokeApi("auth.importLoginToken",{token:i.token},b)),"auth.loginTokenSuccess"===i._){const e=i.authorization;return s.Z.managers.apiManager.setUser(e.user),n.e(781).then(n.bind(n,5436)).then((e=>e.default.mount())),!0}if(!L||!(0,u.Z)(L,i.token)){L=i.token;const n="tg://login?token="+function(e){let t,n="";for(let a=e.length,o=0,i=0;i<a;++i)t=i%3,o|=e[i]<<(16>>>t&24),2!==t&&a-i!=1||(n+=String.fromCharCode(p(o>>>18&63),p(o>>>12&63),p(o>>>6&63),p(63&o)),o=0);return n.replace(/A(?=A$|$)/g,"=")}(i.token).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""),a=window.getComputedStyle(document.documentElement),o=a.getPropertyValue("--surface-color").trim(),r=a.getPropertyValue("--primary-text-color").trim(),s=a.getPropertyValue("--primary-color").trim(),d=yield fetch("assets/img/logo_padded.svg").then((e=>e.text())).then((e=>{e=e.replace(/(fill:).+?(;)/,`$1${s}$2`);const t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return new Promise((e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)}))})),c=new Z({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:n,image:d,dotsOptions:{color:r,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:o},qrOptions:{errorCorrectionLevel:"L"}});let u;c.append(e),e.lastChild.classList.add("qr-canvas"),u=c._drawingPromise?c._drawingPromise:Promise.race([(0,l.Z)(1e3),new Promise((e=>{c._canvas._image.addEventListener("load",(()=>{window.requestAnimationFrame((()=>e()))}),{once:!0})}))]),yield u.then((()=>{if(t){t.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout((()=>{n.style.display=""}),150),setTimeout((()=>{n.style.animation=""}),500),t=void 0}else Array.from(e.children).slice(0,-1).forEach((e=>{e.remove()}))}))}if(a){const e=Date.now()/1e3,t=i.expires-e-(yield s.Z.managers.timeManager.getServerTimeOffset());yield(0,l.Z)(t>3?3e3:1e3*t|0)}}catch(e){return"SESSION_PASSWORD_NEEDED"===e.type?(e.handled=!0,n.e(774).then(n.bind(n,9437)).then((e=>e.default.mount())),E=!0,h=null):(console.error("pageSignQR: default error:",e),E=!0),!0}return!1}));return()=>g(void 0,void 0,void 0,(function*(){for(E=!1;!E&&!(yield S(!0)););}))}))),h.then((e=>{e()})),s.Z.managers.appStateManager.pushToState("authState",{_:"authStateSignQr"})})),y=m}}]);
//# sourceMappingURL=53.68bf96844e3745e118bf.chunk.js.map