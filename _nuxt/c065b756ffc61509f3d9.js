(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{172:function(t,e,r){var content=r(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("0a7b040e",content,!0,{sourceMap:!1})},175:function(t,e,r){"use strict";var n=r(172);r.n(n).a},176:function(t,e,r){(t.exports=r(21)(!1)).push([t.i,".surah__header[data-v-1a3572f3]{display:flex;align-items:center;justify-content:space-between}.surah__title[data-v-1a3572f3]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-1a3572f3]{width:100%;font-size:1.5rem}.surah__trans[data-v-1a3572f3]{font-style:italic;line-height:2}.surah__count[data-v-1a3572f3],.surah__trans[data-v-1a3572f3]{text-align:right}",""])},177:function(t,e,r){"use strict";r(75);var n,o=r(8),c=(r(51),r(17)),l=r(24),d=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.doAddToFavorite=function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})},e.prototype.doRemoveFromfavorite=function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})},e.prototype.findInFavorite=function(t){return!!(this.surahFavorite||[]).find(function(e){return e.index===t.index})},e.prototype.getSurahDetailUrl=function(t){return"/"+t},e.prototype.goToSurahDetail=function(t){var path=this.getSurahDetailUrl(t);this.$router.push(path)},f([Object(c.b)({default:function(){return[]}})],e.prototype,"surahArray",void 0),f([l.c],e.prototype,"surahFavorite",void 0),f([l.a],e.prototype,"addToFavorite",void 0),f([l.a],e.prototype,"removeFromFavorite",void 0),f([l.a],e.prototype,"showNotification",void 0),e=f([c.a],e)}(c.c),v=(r(175),r(6)),component=Object(v.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},t._l(t.surahArray,function(e){return r("a",{key:e.index,staticClass:"surah block_content has-shadow",on:{click:function(r){r.preventDefault(),t.goToSurahDetail(e.index)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),r("div",{staticClass:"surah__header--right"},[t.findInFavorite(e)?t._e():r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){r.preventDefault(),t.doAddToFavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(e)?r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(r){r.preventDefault(),t.doRemoveFromfavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])}),0)},[],!1,null,"1a3572f3",null);e.a=component.exports},185:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3965d4ab",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";var n=r(185);r.n(n).a},229:function(t,e,r){(t.exports=r(21)(!1)).push([t.i,".feed[data-v-5bcdfcca]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-5bcdfcca]{display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-5bcdfcca]{margin-right:.2em}.feed__empty[data-v-5bcdfcca]{text-align:left;padding-top:1em;color:#333;font-style:italic}",""])},265:function(t,e,r){"use strict";r.r(e);var n=r(5),o=r(80),c=r.n(o),l=r(4),d=r(177),f=r(18),h=r(25),v={name:"FavoritePage",head:function(){return this.metaHead},components:{IosStarOutlineIcon:c.a,SurahCard:d.a},computed:Object(n.a)({},Object(l.e)(["settingActiveTheme","surahFavorite"]),{metaHead:function(){var title="Baca berbagai surat favorit dalam Al-Qur'an | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},isHaveFav:function(){return Object(f.a)(this.surahFavorite)}}),created:function(){this.setHeaderTitle(h.a.FAVORITE)},methods:Object(n.a)({},Object(l.d)(["setHeaderTitle"]))},_=(r(228),r(6)),component=Object(_.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosStarOutlineIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Surat favorit:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveFav?e("SurahCard",{attrs:{"surah-array":this.surahFavorite}}):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum punya surat yang ditandai sebagai favorit.\n      ")])],1)])])},[],!1,null,"5bcdfcca",null);e.default=component.exports}}]);