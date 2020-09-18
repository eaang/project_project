(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(t,e,r){"use strict";r.r(e);r(52),r(24),r(25),r(40);var o=r(48),n=(r(41),r(42),r(14),r(96),r(97),r(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["Ruby","Rails","HTML","CSS","Javascript","Vue","React","Buefy","Bulma","Bootstrap","Nuxt","Tailwind CSS"],f={props:{project:{type:Object,required:!1,default:function(){}}},data:function(){return{files:[],isError:!1,errorText:null,filteredTags:d.sort(),isSelectOnly:!1,tags:[],allowNew:!0,openOnFocus:!0,form:this.project?c(c({},this.project),{},{dropFiles:[]}):{description:"",github:"",images:[],languages:[],link:"",name:"",progress:0,summary:"",dropFiles:[]}}},computed:{sliderType:function(){return this.form.progress>2.5&&this.form.progress<7.5?"is-warning":this.form.progress>=7.5?"is-success":"is-danger"}},methods:{getFilteredTags:function(text){this.filteredTags=d.filter((function(option){return option.toString().toLowerCase().includes(text.toLowerCase())}))},saveProject:function(){var t=this,e=this.form.images.length+this.form.dropFiles.length;this.form.dropFiles.length>0?this.form.dropFiles.forEach((function(r){t.uploadFileToCloudinary(r).then((function(e){Object(o.a)(e.public_id)===Object(o.a)(String())&&t.form.images.push(e.public_id)})).then((function(){t.form.images.length===e&&t.$emit("submit",t.form)}))})):this.$emit("submit",this.form)},cancelProject:function(){this.$router.push("/admin")},showImage:function(t){return URL.createObjectURL(t)},deleteDropFile:function(t){this.form.dropFiles.splice(t,1)},showExistingImage:function(t){return this.$cloudinary().url(t)},deleteExistingImage:function(t){this.form.images.splice(t,1)},uploadFileToCloudinary:function(t){return new Promise((function(e,r){var o=new FormData;o.append("upload_preset","k3jlnwe7"),o.append("folder","projects"),o.append("file",t);var n=new XMLHttpRequest;n.open("POST","https://api.cloudinary.com/v1_1/dqywsmiax/upload",!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText);e(t)}if(200!==n.status){var o=JSON.parse(n.responseText).error.message;alert("error, status code not 200 "+o),r(o)}},n.onerror=function(t){alert("error: "+t),r(t)},n.send(o)}))}}},m=r(5),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"new-project-form"},[r("b-field",{attrs:{label:"Project Name"}},[r("b-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"URL",expanded:""}},[r("b-input",{attrs:{expanded:""},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),r("b-field",{attrs:{label:"Github Repository",expanded:""}},[r("b-input",{attrs:{expanded:""},model:{value:t.form.github,callback:function(e){t.$set(t.form,"github",e)},expression:"form.github"}})],1)],1),t._v(" "),r("b-field",{attrs:{label:"Languages Used"}},[r("b-taginput",{attrs:{data:t.filteredTags,autocomplete:"","allow-new":t.allowNew,"open-on-focus":t.openOnFocus,icon:"tag",placeholder:"Add a language"},on:{typing:t.getFilteredTags},model:{value:t.form.languages,callback:function(e){t.$set(t.form,"languages",e)},expression:"form.languages"}})],1),t._v(" "),r("label",{staticClass:"label"},[t._v("Current Progress")]),t._v(" "),r("b-field",[r("b-slider",{attrs:{"custom-formatter":function(t){return 10*t+"%"},min:0,max:10,"tooltip-type":t.sliderType,type:t.sliderType,ticks:""},model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),t._v(" "),r("b-field",{attrs:{label:"Short Summary"}},[r("b-input",{model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}})],1),t._v(" "),r("b-field",{attrs:{label:"Description"}},[r("b-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("label",{staticClass:"label"},[t._v("Project Screenshots ")]),t._v(" "),r("b-field",[r("b-upload",{attrs:{multiple:"","drag-drop":"",expanded:""},model:{value:t.form.dropFiles,callback:function(e){t.$set(t.form,"dropFiles",e)},expression:"form.dropFiles"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),t._v(" "),r("p",[t._v("Drop your files here or click to upload")])])])])],1),t._v(" "),t.form.dropFiles.length>0||t.form.images.length>0?r("b-field",[r("div",{staticClass:"tile is-ancestor",staticStyle:{"flex-wrap":"wrap"}},[t._l(t.form.images,(function(e,o){return r("div",{key:o+"-image",staticClass:"tile is-parent is-3"},[r("div",{staticClass:"tile is-child box"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:t.showExistingImage(e)}}),t._v(" "),r("button",{staticClass:"delete is-small",staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{type:"button"},on:{click:function(e){return t.deleteExistingImage(o)}}})]),t._v(" "),r("div",{staticClass:"is-size-7"},[t._v(t._s(e.name))])])])})),t._v(" "),t._l(t.form.dropFiles,(function(e,o){return r("div",{key:o+"-dropFile",staticClass:"tile is-parent is-3"},[r("div",{staticClass:"tile is-child box"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:t.showImage(e)}}),t._v(" "),r("button",{staticClass:"delete is-small",staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{type:"button"},on:{click:function(e){return t.deleteDropFile(o)}}})])])])}))],2)]):t._e(),t._v(" "),r("b-field",{attrs:{grouped:"",position:"is-centered"}},[r("div",{staticClass:"control"},[r("b-button",{attrs:{type:"is-primary"},on:{click:t.saveProject}},[t._v("Save Project")])],1),t._v(" "),r("div",{staticClass:"control"},[r("b-button",{attrs:{type:"is-warning"},on:{click:t.cancelProject}},[t._v("Cancel")])],1)])],1)}),[],!1,null,"10d36a33",null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);var o={middleware:["auth"],components:{ProjectEditForm:r(398).default},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("addProject",t).then((function(){e.$router.push("/admin")}))}},head:function(){return{title:"New project"}}},n=r(5),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-new-project-page"},[this._m(0),this._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-two-thirds"},[e("ProjectEditForm",{on:{submit:this.onSubmitted}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("Add a New Project")])])])])}],!1,null,"6916cd8b",null);e.default=component.exports;installComponents(component,{ProjectEditForm:r(398).default})}}]);