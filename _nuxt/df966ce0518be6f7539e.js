(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(t,e,n){"use strict";var r=n(174),o=n.n(r),c="https://www.quran-offline.xyz/",d=c,l={SURAH_INFO:"".concat(d,"data/surah-info.json"),SURAH_BY_ID:function(t){return"".concat(d,"data/surah/").concat(t,".json")},AYAT_KURSI:"".concat(d,"data/ayat-kursi.json"),ASMAUL_HUSNA:"".concat(d,"data/asmaul-husna.json"),DAILY_DOA:"".concat(d,"data/daily-doa.json")};n.d(e,"a",function(){return m}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return h}),n.d(e,"b",function(){return v}),n.d(e,"d",function(){return _});var m=function(){return o.a.get(l.SURAH_INFO)},f=function(t){return o.a.get(l.SURAH_BY_ID(t))},h=function(){return o.a.get(l.AYAT_KURSI)},v=function(){return o.a.get(l.ASMAUL_HUSNA)},_=function(){return o.a.get(l.DAILY_DOA)}},184:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("00b06a94",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";var r=n(184);n.n(r).a},227:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".search[data-v-189956dd]{display:block;text-align:center;width:90%;margin:1em auto}.search input[data-v-189956dd]{-webkit-appearance:none;width:100%;padding:1rem;outline:none;background-color:#fff;font-size:1rem;border-radius:4px}.search__title[data-v-189956dd]{font-size:1.5rem}.search__result[data-v-189956dd],.search__title[data-v-189956dd]{display:flex;align-items:center;justify-content:flex-start;margin-top:1em}.search__result[data-v-189956dd]{flex-wrap:wrap}.search__result a[data-v-189956dd]{background-color:#41b883;color:#000;margin:1em 1em 0 0}.item[data-v-189956dd],.search__result a[data-v-189956dd]{text-decoration:none;border-radius:.25em;padding:1.5em}.item[data-v-189956dd]{text-align:center;width:100%;margin:1em 0 0}.item__title[data-v-189956dd]{font-size:1.3rem}.collapsible[data-v-189956dd]{margin-top:1em;background-color:#c6f3df;padding:1em;border-radius:.25em}.arabic[data-v-189956dd]{font-size:2rem;width:100%;text-align:right}.latin[data-v-189956dd]{font-size:1.3rem;margin-top:1.5em}.latin[data-v-189956dd],.translation[data-v-189956dd]{width:100%;text-align:left}.translation[data-v-189956dd]{margin-top:2em;font-size:.9rem;font-style:italic}@-webkit-keyframes bounce-data-v-189956dd{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce-data-v-189956dd{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce[data-v-189956dd]{-webkit-animation-name:bounce-data-v-189956dd;animation-name:bounce-data-v-189956dd;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}",""])},266:function(t,e,n){"use strict";n.r(e);n(52);var r,o=n(9),c=(n(53),n(54),n(5)),d=n(4),l=n(18),m=n(173),f={name:"DailyDoa",head:function(){return this.metaHead},data:function(){return{searchText:"",expandedData:{title:""}}},computed:Object(c.a)({},Object(d.e)(["settingActiveTheme"]),{metaHead:function(){var title="Daftar bacaan do'a sehari-hari beserta terjemahan | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},filteredDailyDoa:function(){var t=this;return Object(l.b)(this.searchText)&&this.searchText.length>=3?this.dailyDoa.filter(function(e){return Object(l.e)(e.title).includes(Object(l.e)(t.searchText))}):this.dailyDoa||[]}}),asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)();case 2:return data=t.sent,t.abrupt("return",{dailyDoa:data.data.data});case 4:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),fetch:function(t){t.store.commit("setHeaderTitle","Do'a Harian")},methods:{onClickDoa:function(t){this.isExpanded(t.title)?this.expandedData={title:""}:this.expandedData=t},isExpanded:function(title){return title===this.expandedData.title}}},h=(n(226),n(6)),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container daily-doa"},[n("div",{staticClass:"search clearfix"},[n("label",{staticClass:"search__title",attrs:{for:"search-daily-doa"}},[t._v("\n      Pencarian cepat\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{id:"search-daily-doa",type:"search",name:"search",placeholder:"Cari doa harian"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper__item"},t._l(t.filteredDailyDoa,function(e){return n("div",{key:e.title,staticClass:"item",on:{click:function(n){t.onClickDoa(e)}}},[n("div",{staticClass:"item__title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded(e.title),expression:"isExpanded(item.title)"}],staticClass:"collapsible bounce"},[n("div",{staticClass:"arabic font-arabic"},[t._v("\n            "+t._s(e.arabic)+"\n          ")]),t._v(" "),n("div",{staticClass:"latin"},[t._v("\n            "+t._s(e.latin)+"\n          ")]),t._v(" "),n("div",{staticClass:"translation"},[t._v("\n            "+t._s(e.translation)+"\n          ")])])])}),0)])])},[],!1,null,"189956dd",null);e.default=component.exports}}]);