(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{396:function(t,e,r){t.exports=r.p+"img/placeholder.e2b3372.jpg"},397:function(t,e,r){"use strict";r.r(e);var n={props:{isAdmin:{type:Boolean,default:!1},sectionTitle:{type:String,default:""},projects:{type:Array,required:!0,default:function(){return[{id:"1",title:"Project 1",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",thumbnail:"https://picsum.photos/640/480/"}]}}},methods:{pictureUrl:function(t){return void 0!==t?this.$cloudinary().url(t[0],{crop:"fill",width:400,height:300}):r(396)}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e){return r("div",{key:e.id,staticClass:"column is-one-quarter"},[r("ProjectCard",{attrs:{id:e.id,"is-admin":t.isAdmin,name:e.name,summary:e.summary,thumbnail:t.pictureUrl(e.images)}})],1)})),0)}),[],!1,null,"709ed433",null);e.default=component.exports;installComponents(component,{ProjectCard:r(400).default})},400:function(t,e,r){"use strict";r.r(e);var n={name:"ProjectCard",props:{isAdmin:{type:Boolean,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},summary:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/projects/"+this.id}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("nuxt-link",{attrs:{to:t.postLink}},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:t.thumbnail,alt:t.name}})])])],1),t._v(" "),r("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":t.id,open:!1},scopedSlots:t._u([{key:"trigger",fn:function(e){return r("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":t.id}},[r("p",{staticClass:"card-header-title"},[t._v(t._s(t.name))]),t._v(" "),r("a",{staticClass:"card-header-icon"},[r("b-icon",{attrs:{icon:e.open?"angle-down":"angle-up"}})],1)])}}])},[t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[t._v(t._s(t.summary))])])])],1)}),[],!1,null,"528a96fa",null);e.default=component.exports},405:function(t,e,r){t.exports=r.p+"img/cat-idea.d47f2e7.png"},415:function(t,e,r){"use strict";r.r(e);var n={components:{ProjectList:r(397).default},data:function(){return{hero:{title:"The project of projects",bodyCopy:"An eternal work in progress of things I want to work on, things I am currently working on, things I have forgotten to work on, and things I have finished working on.",catPic:r(405),hasButton:!0,buttonText:"See all projects",buttonLink:"projects"}}},computed:{latestProjects:function(){return this.$store.getters.latestProjects}}},o=r(5),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homepage"},[e("HeroSection",this._b({},"HeroSection",this.hero,!1)),this._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("p",{staticClass:"title"},[this._v("Latest Projects")]),this._v(" "),e("ProjectList",{attrs:{projects:this.latestProjects}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:r(98).default,ProjectList:r(397).default})}}]);