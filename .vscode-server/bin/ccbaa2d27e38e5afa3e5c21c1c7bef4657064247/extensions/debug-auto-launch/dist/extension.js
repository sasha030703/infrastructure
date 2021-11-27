(()=>{"use strict";var e={403:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a,o,r,s,i,l=n(622),c=n(747),u=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object Number]"===u.call(e)}function g(e){return"[object String]"===u.call(e)}function p(e){return JSON.parse(c.readFileSync(e,"utf8"))}function m(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,n){var a=n[0],o=t[a],r=e;return"string"==typeof o?r=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(r=String(o)),r}))}function b(e){return function(t,n){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];return f(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):m(e[t],a):g(n)?(console.warn("Message "+n+" didn't get externalized correctly."),m(n,a)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];return m(t,n)}function h(e,t){return r[e]=t,t}function w(e){try{return function(e){var t=p(l.join(e,"nls.metadata.json")),n=Object.create(null);for(var a in t){var o=t[a];n[a]=o.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function y(e,t){var n;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{n=function(e,t){var n,a,o,r=l.join(s.cacheRoot,e.id+"-"+e.hash+".json"),i=!1,u=!1;try{return n=JSON.parse(c.readFileSync(r,{encoding:"utf8",flag:"r"})),a=r,o=new Date,c.utimes(a,o,o,(function(){})),n}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(r,(function(e){e&&console.error("Deleting corrupted bundle "+r+" failed.")})),i=!0}}if(!(n=function(e,t){var n=s.translationsConfig[e.id];if(n){var a=p(n).contents,o=p(l.join(t,"nls.metadata.json")),r=Object.create(null);for(var i in o){var c=o[i],u=a[e.outDir+"/"+i];if(u){for(var d=[],f=0;f<c.keys.length;f++){var m=c.keys[f],b=u[g(m)?m:m.key];void 0===b&&(b=c.messages[f]),d.push(b)}r[i]=d}else r[i]=c.messages}return r}}(e,t))||i)return n;if(u)try{c.writeFileSync(r,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(s.languagePackSupport)return w(t);var a=function(e){for(var t=s.locale;t;){var n=l.join(e,"nls.bundle."+t+".json");if(c.existsSync(n))return n;var a=t.lastIndexOf("-");t=a>0?t.substring(0,a):void 0}if(void 0===t&&(n=l.join(e,"nls.bundle.json"),c.existsSync(n)))return n}(t);if(a)try{return p(a)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=w(t)}return n}function S(e){if(!e)return v;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===a.both||s.messageFormat===a.bundle){var n=function(e){for(var t,n=l.dirname(e);t=l.join(n,"nls.metadata.header.json"),!c.existsSync(t);){var a=l.dirname(n);if(a===n){t=void 0;break}n=a}return t}(e);if(n){var o=l.dirname(n),u=r[o];if(void 0===u)try{var f=JSON.parse(c.readFileSync(n,"utf8"));try{var g=y(f,o);u=h(o,g?{header:f,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),u=h(o,null)}}catch(e){console.error("Failed to read header file",e),u=h(o,null)}if(u){var m=e.substr(o.length+1).replace(/\\/g,"/"),w=u.nlsBundle[m];return void 0===w?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):b(w)}}}if(s.messageFormat===a.both||s.messageFormat===a.file)try{var S=p(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(i||!s.locale)t=".nls.json";else for(var n=s.locale;n;){var a=".nls."+n+".json";if(c.existsSync(e+a)){t=a;break}var o=n.lastIndexOf("-");o>0?n=n.substring(0,o):(t=".nls.json",n=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(S)?b(S):d(S.messages)&&d(S.keys)?b(S.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(a=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(s={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:a.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(g(e.locale)&&(s.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(s.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(s.languagePackId=e._languagePackId),g(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=p(s.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;i="pseudo"===s.locale,r=Object.create(null)}(),t.loadMessageBundle=S,t.config=function(e){return e&&(g(e.locale)&&(s.locale=e.locale.toLowerCase(),r=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat)),i="pseudo"===s.locale,S}},747:e=>{e.exports=require("fs")},631:e=>{e.exports=require("net")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}var a={};(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=n(747),o=n(631),r=n(549),s=n(403).loadMessageBundle(n(622).join(__dirname,"extension.ts")),i={disabled:s(0,null),always:s(1,null),smart:s(2,null),onlyWithFlag:s(3,null)},l={disabled:s(4,null),always:s(5,null),smart:s(6,null),onlyWithFlag:s(7,null)},c={disabled:s(8,null),always:s(9,null),smart:s(10,null),onlyWithFlag:s(11,null)},u=s(12,null),d=s(13,null),f=s(14,null),g=s(15,null),p=s(16,null),m="extension.node-debug.toggleAutoAttach",b="jsDebugIpcState",v="debug.javascript",h="autoAttachFilter",w=new Set(["autoAttachSmartPattern",h].map((e=>`debug.javascript.${e}`)));let y,S,x,k=!1;async function F(e,t){const n=r.workspace.getConfiguration(v);var a;const o=(t=t||((a=n.inspect(h))?a.workspaceFolderValue?r.ConfigurationTarget.WorkspaceFolder:a.workspaceValue?r.ConfigurationTarget.Workspace:(a.globalValue,r.ConfigurationTarget.Global):r.ConfigurationTarget.Global))===r.ConfigurationTarget.Global,s=r.window.createQuickPick(),i=j(),p=["always","smart","onlyWithFlag","disabled"].map((e=>({state:e,label:l[e],description:c[e],alwaysShow:!0})));"disabled"!==i&&p.unshift({setTempDisabled:!k,label:k?g:f,alwaysShow:!0}),s.items=p,s.activeItems=k?[p[0]]:s.items.filter((e=>"state"in e&&e.state===i)),s.title=o?d:u,s.buttons=[{iconPath:new r.ThemeIcon(o?"folder":"globe"),tooltip:o?u:d}],s.show();let m=await new Promise((e=>{s.onDidAccept((()=>e(s.selectedItems[0]))),s.onDidHide((()=>e(void 0))),s.onDidTriggerButton((()=>{e({scope:o?r.ConfigurationTarget.Workspace:r.ConfigurationTarget.Global})}))}));if(s.dispose(),m){if("scope"in m)return await F(e,m.scope);"state"in m&&(m.state!==i?n.update(h,m.state,t):k&&(m={setTempDisabled:!1})),"setTempDisabled"in m&&(T(e,i,!0),k=m.setTempDisabled,m.setTempDisabled?await O():await C(e),T(e,i,!1))}}function j(){return r.workspace.getConfiguration(v).get(h)??"disabled"}async function C(e){const t=await async function(e){const t=e.workspaceState.get(b),n=r.extensions.getExtension("ms-vscode.js-debug-nightly")?.extensionPath||r.extensions.getExtension("ms-vscode.js-debug")?.extensionPath,a=function(){let e={};const t=r.workspace.getConfiguration(v);for(const n of w)e[n]=t.get(n);return JSON.stringify(e)}();if(t?.jsDebugPath===n&&t?.settingsValue===a)return t.ipcAddress;const o=await r.commands.executeCommand("extension.js-debug.setAutoAttachVariables",t?.ipcAddress);if(!o)return;const s=o.ipcAddress;return await e.workspaceState.update(b,{ipcAddress:s,jsDebugPath:n,settingsValue:a}),s}(e);if(t)return x=P(t).catch((e=>{console.error(e)})),await x}e.activate=function(e){y=Promise.resolve({context:e,state:null}),e.subscriptions.push(r.commands.registerCommand(m,F.bind(null,e))),e.subscriptions.push(r.workspace.onDidChangeConfiguration((e=>{(e.affectsConfiguration(`debug.javascript.${h}`)||[...w].some((t=>e.affectsConfiguration(t))))&&(D("disabled"),D(j()))}))),D(j())},e.deactivate=async function(){await O()};const P=async e=>{try{return await _(e)}catch(n){return await t.promises.unlink(e).catch((()=>{})),await _(e)}},_=e=>new Promise(((t,n)=>{const a=(0,o.createServer)((e=>{let t=[];e.on("data",(async n=>{if(0===n[n.length-1]){t.push(n.slice(0,-1));try{await r.commands.executeCommand("extension.js-debug.autoAttachToProcess",JSON.parse(Buffer.concat(t).toString())),e.write(Buffer.from([0]))}catch(t){e.write(Buffer.from([1])),console.error(t)}}else t.push(n)}))})).on("error",n).listen(e,(()=>t(a)))}));async function O(){const e=await x;e&&await new Promise((t=>e.close(t)))}const A={async disabled(e){await async function(e){(x||await e.workspaceState.get(b))&&(await e.workspaceState.update(b,void 0),await r.commands.executeCommand("extension.js-debug.clearAutoAttachVariables"),await O())}(e)},async onlyWithFlag(e){await C(e)},async smart(e){await C(e)},async always(e){await C(e)}};function T(e,t,n=!1){if("disabled"===t&&!n)return void S?.hide();S||(S=r.window.createStatusBarItem("status.debug.autoAttach",r.StatusBarAlignment.Left),S.name=s(17,null),S.command=m,S.tooltip=s(18,null),e.subscriptions.push(S));let a=n?"$(loading) ":"";a+=k?p:i[t],S.text=a,S.show()}function D(e){y=y.then((async({context:t,state:n})=>e===n?{context:t,state:n}:(null!==n&&T(t,n,!0),await A[e](t),k=!1,T(t,e,!1),{context:t,state:e})))}})();var o=exports;for(var r in a)o[r]=a[r];a.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/extensions/debug-auto-launch/dist/extension.js.map