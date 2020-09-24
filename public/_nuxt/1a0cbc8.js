(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{442:function(t,e,n){"use strict";n.r(e);var o={middleware:["auth"],data:function(){return{isEmpty:!1,isBordered:!1,isStriped:!1,isNarrowed:!1,isHoverable:!1,isFocusable:!1,isLoading:!1,hasMobileCards:!0}},computed:{projects:function(){return this.$store.getters.loadedProjects}},methods:{deleteProject:function(t){var e=this;this.$store.dispatch("deleteProject",t).then((function(){e.$router.push("/admin")}))}},head:{title:"Admin"}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-page"},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[t._m(0),t._v(" "),n("div",{staticClass:"column is-narrow"},[n("nuxt-link",{attrs:{to:"/admin/new-project"}},[n("button",{staticClass:"button is-primary"},[t._v("\n              Create new project\n            ")])])],1)]),t._v(" "),n("b-table",{attrs:{data:t.isEmpty?[]:t.projects,bordered:t.isBordered,striped:t.isStriped,narrowed:t.isNarrowed,hoverable:t.isHoverable,loading:t.isLoading,focusable:t.isFocusable,"mobile-cards":t.hasMobileCards}},[n("b-table-column",{attrs:{centered:"",field:"index",label:"No.",width:"40",numeric:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.index+1)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"name",sortable:"",label:"Project Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"summary",sortable:"",label:"Description"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.summary)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"status",sortable:"",label:"Status",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(10*e.row.progress)+"%\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{label:"Actions",centered:"","custom-key":"actions"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("button",{staticClass:"button is-light"},[n("nuxt-link",{attrs:{to:"/projects/"+e.row.id}},[n("b-icon",{attrs:{icon:"eye",type:"is-success"}})],1)],1),t._v(" "),n("button",{staticClass:"button is-light"},[n("nuxt-link",{attrs:{to:"/admin/"+e.row.id}},[n("b-icon",{attrs:{icon:"edit",type:"is-primary"}})],1)],1),t._v(" "),n("button",{staticClass:"button is-light",on:{click:function(n){return t.deleteProject(e.row)}}},[n("b-icon",{attrs:{icon:"trash",type:"is-danger"}})],1)]}}])})],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("p",{staticClass:"title"},[this._v("Manage Projects")])])}],!1,null,"4a5ead15",null);e.default=component.exports}}]);