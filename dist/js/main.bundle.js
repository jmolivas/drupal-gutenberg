!function(e){function t(t){for(var r,n,i=t[0],l=t[1],d=t[2],c=0,u=[];c<i.length;c++)n=i[c],a[n]&&u.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(t);u.length;)u.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},a={1:0},s=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;s.push([1,0]),o()}({1:function(e,t,o){"use strict";o.r(t);const r={page:{labels:{Document:Drupal.t("Node"),document:Drupal.t("Node"),posts:Drupal.t("Nodes"),extras:Drupal.t("Fields")},name:"Page",rest_base:"pages",slug:"page",supports:{author:!1,comments:!1,"custom-fields":!0,document:!0,editor:!0,"media-library":!1,"page-attributes":!1,posts:!1,revisions:!1,"template-settings":!1,thumbnail:!1,title:!1,extras:!0},viewable:!1,saveable:!1,publishable:!1,autosaveable:!1}},a={"save-post":{method:"PUT",regex:/\/wp\/v2\/(\w*)\/(\d*)/g,process:(e,t)=>new Promise(o=>{o({pathType:"save-post",id:e[2],type:e[1],title:{raw:document.title},content:{raw:t}})})},"load-node":{method:"GET",regex:/\/wp\/v2\/pages\/(\d*)/g,process:()=>new Promise(e=>{e(wp.node)})},"load-media":{method:"GET",regex:/\/wp\/v2\/media\/(\d*)/g,process:e=>new Promise((t,o)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/image/load/"+e[1],accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{o({message:"Error"})})})},"save-media":{method:"POST",regex:/\/wp\/v2\/media/g,process:(e,t)=>(console.log("save media",drupalSettings),new Promise((e,o)=>{let r;for(let e of t.entries())console.log(e),"file"===e[0]&&(r=e[1]);const a=new FormData;a.append("files[fid]",r),a.append("fid[fids]",""),a.append("attributes[alt]","Test"),a.append("_drupal_ajax","1"),a.append("form_id",jQuery('[name="form_id"]').val()),a.append("form_build_id",jQuery('[name="form_build_id"]').val()),a.append("form_token",jQuery('[name="form_token"]').val()),jQuery.ajax({method:"POST",url:drupalSettings.path.baseUrl+"editor/image/upload/gutenberg",data:a,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{o("Error")})}))},categories:{method:"GET",regex:/\/wp\/v2\/categories\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},users:{method:"GET",regex:/\/wp\/v2\/users\/\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},taxonomies:{method:"GET",regex:/\/wp\/v2\/taxonomies\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},embed:{method:"GET",regex:/\/oembed\/1\.0\/proxy\?(.*)/g,process:e=>new Promise((t,o)=>{jQuery.ajax({method:"GET",url:`http://open.iframe.ly/api/oembed?${e[1]}&origin=drupal`,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{o("Error")})})},root:{method:"GET",regex:/^\/$/g,process:()=>new Promise(e=>e({theme_supports:{formats:["standard","aside","image","video","quote","link","gallery","audio"],"post-thumbnails":!0}}))},"load-type-page":{method:"GET",regex:/\/wp\/v2\/types\/page/g,process:()=>new Promise(e=>e(r.page))},"load-types":{method:"GET",regex:/\/wp\/v2\/types/g,process:()=>new Promise(e=>e(r))}};window._wpDateSettings={l10n:{locale:"pt_PT"}},window.wp={apiRequest:function(e){return console.log(e),function(e){for(const t in a)if(a.hasOwnProperty(t)){const o=a[t];o.regex.lastIndex=0;let r=o.regex.exec(e.path+"");if(r&&r.length>0&&(e.method||"GET"===o.method))return o.process(r,e.data)}return new Promise((t,o)=>o({code:"api_handler_not_found",message:"API handler not found.",data:{path:e.path,status:404}}))}(e)},url:{addQueryArgs:function(e,t){return console.log("addQueryArgs",e,t),""}}};var s=o(0);o(6);let n,i,l;((e,t,o)=>{t.editors.gutenberg={attach(r){function a(){return n(l,{name:"more-fields",title:"More fields",icon:"forms",isPinnable:!0},n(i,{},"My sidebar content"))}(function(r){const a=e(r),n="editor-"+a.data("drupal-selector");e('<div id="'+n+'" class="gutenberg__editor"></div>').insertAfter(a),a.hide(),o.node={content:{raw:e(r).val()},templates:"",title:{raw:document.title},type:"page",status:"auto-draft",id:12345};const i={alignWide:!0,availableTemplates:[],allowedBlockTypes:!0,disableCustomColors:!1,disablePostFormats:!1,titlePlaceholder:t.t("Add title"),bodyPlaceholder:t.t("Write your story"),isRTL:!1,autosaveInterval:100};return window.customGutenberg={events:{OPEN_GENERAL_SIDEBAR:t=>{console.log("OPEN_GENERAL_SIDEBAR",t);let o=t.name.replace(/edit-post\//g,"");o=o.replace(/drupal\//g,"");let r=e(".edit-post-sidebar .components-panel .tab");e(".gutenberg-sidebar").append(r),setTimeout(()=>{let t=e(".gutenberg-sidebar .tab."+o);e(".edit-post-sidebar .components-panel").append(t)},0),e(document.body).addClass("gutenberg-sidedar-open")},CLOSE_GENERAL_SIDEBAR:()=>{e(document.body).removeClass("gutenberg-sidedar-open"),e(".gutenberg-sidebar").append(e(".edit-post-sidebar .components-panel .tab"))},REMOVE_BLOCKS:(e,t)=>{console.log("REMOVE_BLOCKS",e,t)}},categories:[{slug:"rows",title:"Rows Blocks"},{slug:"common",title:"Common Blocks"},{slug:"formatting",title:"Formatting"},{slug:"layout",title:"Layout Elements"},{slug:"embed",title:"Embeds"},{slug:"shared",title:"Shared Blocks"}],rows:[{cols:[6,6],title:"col6 x 2",description:"2 eq columns layout"},{cols:[4,4,4],title:"col4 x 3",description:"3 eq columns layout"},{cols:[7,5],title:"col7-col5",description:"A col7 and a col5"},{cols:[5,7],title:"col5-col7",description:"A col5 and a col7"},{cols:[1,10,1],title:"col1-col10-col1",description:"A col1, a col10 and a col1"},{cols:[2,8,2],title:"col2-col8-col2",description:"A col2, a col8 and a col2"}],tabs:[{options:{name:"blocks",title:"Blocks",className:"editor-inserter__tab"},tabScrollTop:0,getItemsForTab:()=>e=>"embed"!==e.category&&"shared"!==e.category&&"rows"!==e.category},{options:{name:"rows",title:"Rows",className:"editor-inserter__tab"},tabScrollTop:0,getItemsForTab:()=>e=>"rows"===e.category}],panels:["post-status","articles-panel","settings-panel","last-revision"],editor:{hideTitle:!0,noMediaLibrary:!1}},new Promise(e=>{setTimeout(()=>{s.editPost.initializeEditor(n,"page",12345,i,{}),e()},0)})})(r).then(()=>{s.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/document"),n=o.element.createElement,i=s.components.PanelBody,l=s.editPost.PluginSidebar,s.plugins.registerPlugin("drupal",{icon:"smiley",render:a}),setTimeout(()=>{e(".edit-post-header__settings").append(e(".gutenberg-header-settings"))},0),e(".gutenberg-full-editor").addClass("ready"),e("#gutenberg-loading").addClass("hide"),e(document.forms[0]).submit(t=>{const o=s.data.select("core/editor");s.data.dispatch("core/editor").savePost(),e(r).val(o.getEditedPostContent());const a=e(t.originalEvent.explicitOriginalTarget);return"edit-submit"===a.attr("id")||"edit-preview"===a.attr("id")||"edit-delete"===a.attr("id")||(t.preventDefault(),t.stopPropagation(),!1)})})},detach(t,o,r){const a=e(t),n="editor-"+a.data("drupal-selector"),i=s.data.select("core/editor").getEditedPostContent();a.val(i),"serialize"!==r&&e("#"+n).remove()},onChange(){}}})(jQuery,Drupal,wp,drupalSettings,_)},6:function(e,t){}});