(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+BpY":function(a,t,n){var e=n("prHD");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,o);e.locals&&(a.exports=e.locals)},Ed67:function(a,t,n){"use strict";n.d(t,"a",(function(){return d}));var e=n("L3ns"),o=n("tC49"),r=n("xjcK"),i=n("pyNs"),l=n("z3V6"),s=Object(l.d)({id:Object(l.c)(i.u),inline:Object(l.c)(i.g,!1),novalidate:Object(l.c)(i.g,!1),validated:Object(l.c)(i.g,!1)},r.x),d=Object(e.c)({name:r.x,functional:!0,props:s,render:function(a,t){var n=t.props,e=t.data,r=t.children;return a("form",Object(o.a)(e,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),r)}})},N1Ha:function(a,t,n){"use strict";n("+BpY")},TR9H:function(a,t,n){"use strict";n.r(t);n("07d7"),n("FZtP");var e=n("IF94"),o=n("YZfj"),r=n("AeMN"),i=n("mwM1"),l=n("Ed67"),s=n("R5cT"),d=n("giZP"),c=n("GUe+"),m=n("Hrou"),u=n("C9gC"),b=n("okd0"),_=n("bPaI"),g=n("Ki4g"),p=n("CAmi"),f=n("oVt+"),w=n("sove"),k=n("X9p1"),h=n("ZHeZ"),v=n("Snq/"),y=n.n(v),j={components:{BCard:e.a,BCardBody:o.a,BSpinner:r.a,BOverlay:i.a,BForm:l.a,BFormInput:s.a,BFormGroup:d.a,BButton:c.a,BTableSimple:m.a,BThead:u.a,BTbody:b.a,BTh:_.a,BTr:g.a,BTd:p.a,BRow:f.a,BCol:w.a,BAlert:k.a,FormulirWaka:h.a,vSelect:y.a},data:function(){return{loadingForm:!1,isBusy:!0,notif:null,merdeka:!1,form:{aksi:"pkl",user_id:"",guru_id:"",sekolah_id:"",semester_id:"",periode_aktif:"",dudi_id:"",lokasi_prakerin:{},skala:{},lama_prakerin:{},keterangan_prakerin:{},tingkat:"",rombongan_belajar_id:""},meta:{dudi_id_feedback:"",dudi_id_state:null,tingkat_feedback:"",tingkat_state:null,rombongan_belajar_id_feedback:"",rombongan_belajar_id_state:""},data_dudi:[],allowed:!1,semester_allowed:!1,nama_kurikulum:"",tingkat:"",prakerin_id:{},lokasi_prakerin_state:{},skala_state:{},lama_prakerin_state:{},keterangan_prakerin_state:{},error:!1}},created:function(){this.form.user_id=this.user.user_id,this.form.guru_id=this.user.guru_id,this.form.sekolah_id=this.user.sekolah_id,this.form.semester_id=this.user.semester.semester_id,this.form.periode_aktif=this.user.semester.nama,this.loadPostsData()},methods:{loadPostsData:function(){var a=this;this.$http.post("/walas/praktik-kerja-lapangan",this.form).then((function(t){a.isBusy=!1;var n=t.data;a.show_table=n.show,a.show_form=n.form,a.allowed=n.allowed,a.semester_allowed=n.semester_allowed,a.nama_kurikulum=n.nama_kurikulum,a.tingkat=n.tingkat,a.data_dudi=n.data_dudi,a.merdeka=n.merdeka,a.notif=n.notif}))},onSubmit:function(a){var t=this;a.preventDefault(),this.error=!1,this.loadingForm=!0,this.$http.post("/walas/save",this.form).then((function(a){t.loadingForm=!1;var n=a.data;if(n.errors){t.error=!0;var e={},o={},r={},i={};t.data_siswa.forEach((function(a,t){e[a.anggota_rombel.anggota_rombel_id]=!n.errors["lokasi_prakerin.".concat(a.anggota_rombel.anggota_rombel_id)]&&null,o[a.anggota_rombel.anggota_rombel_id]=!n.errors["skala.".concat(a.anggota_rombel.anggota_rombel_id)]&&null,r[a.anggota_rombel.anggota_rombel_id]=!n.errors["lama_prakerin.".concat(a.anggota_rombel.anggota_rombel_id)]&&null,i[a.anggota_rombel.anggota_rombel_id]=!n.errors["keterangan_prakerin.".concat(a.anggota_rombel.anggota_rombel_id)]&&null})),t.lokasi_prakerin_state=e,t.skala_state=o,t.lama_prakerin_state=r,t.keterangan_prakerin_state=i}else t.$swal({icon:n.icon,title:n.title,text:n.text,customClass:{confirmButton:"btn btn-success"}})}))},changeDudi:function(a){var t=this;a&&(this.loadingForm=!0,this.$http.post("/walas/anggota-pkl",this.form).then((function(a){t.loadingForm=!1;var n=a.data;t.data_siswa=n.data_siswa;var e={},o={},r={},i={},l={};t.data_siswa.forEach((function(a,t){l[a.anggota_rombel.anggota_rombel_id]=a.anggota_rombel.single_prakerin?a.anggota_rombel.single_prakerin.prakerin_id:null,e[a.anggota_rombel.anggota_rombel_id]=a.anggota_rombel.single_prakerin?a.anggota_rombel.single_prakerin.lokasi_prakerin:n.dudi.alamat_jalan,o[a.anggota_rombel.anggota_rombel_id]=a.anggota_rombel.single_prakerin?a.anggota_rombel.single_prakerin.skala:null,r[a.anggota_rombel.anggota_rombel_id]=a.anggota_rombel.single_prakerin?a.anggota_rombel.single_prakerin.lama_prakerin:null,i[a.anggota_rombel.anggota_rombel_id]=a.anggota_rombel.single_prakerin?a.anggota_rombel.single_prakerin.keterangan_prakerin:null})),t.prakerin_id=l,t.form.lokasi_prakerin=e,t.form.skala=o,t.form.lama_prakerin=r,t.form.keterangan_prakerin=i})))},hapus:function(a){var t=this;this.$swal({title:"Apakah Anda yakin?",text:"Tindakan ini tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yakin!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1,allowOutsideClick:function(){return!1}}).then((function(n){n.value&&(t.loading_modal=!0,t.$http.post("walas/hapus-prakerin",{prakerin_id:a}).then((function(a){var n=a.data;t.$swal({icon:n.icon,title:n.title,text:n.text,customClass:{confirmButton:"btn btn-success"}}).then((function(a){t.changeDudi(t.form.dudi_id)}))})))}))}}},O=(n("N1Ha"),n("KHd+")),x=Object(O.a)(j,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card",{attrs:{"no-body":""}},[n("b-overlay",{attrs:{show:a.loadingForm,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"}},[n("b-card-body",[a.isBusy?n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"}),a._v(" "),n("strong",[a._v("Loading...")])],1):n("div",[n("b-form",{on:{submit:a.onSubmit}},[a.allowed?[a.error?[n("b-alert",{attrs:{variant:"danger",show:""}},[n("div",{staticClass:"alert-body"},[a._v("\n                  Mohon periksa kembali isian Anda. Pastikan kolom yang berwarna merah telah terisi!\n                ")])])]:a._e(),a._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Pilih DUDI","label-for":"dudi_id","label-cols-md":"3","invalid-feedback":a.meta.dudi_id_feedback,state:a.meta.dudi_id_state}},[n("v-select",{attrs:{id:"dudi_id",reduce:function(a){return a.dudi_id},label:"nama",options:a.data_dudi,placeholder:"== Pilih DUDI ==",state:a.meta.dudi_id_state},on:{input:a.changeDudi},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n                      Tidak ada data untuk ditampilkan\n                    ")]}}],null,!1,1332283935),model:{value:a.form.dudi_id,callback:function(t){a.$set(a.form,"dudi_id",t)},expression:"form.dudi_id"}})],1)],1)],1),a._v(" "),n("b-table-simple",{attrs:{bordered:"",striped:"",responsive:""}},[n("b-thead",[n("b-tr",[n("b-th",{staticClass:"text-center"},[a._v("Nama Peserta Didik")]),a._v(" "),n("b-th",{staticClass:"text-center"},[a._v("Alamat DUDI")]),a._v(" "),n("b-th",{staticClass:"text-center"},[a._v("Skala Kesesuaian dengan Kompetensi Keahlian (1-10)")]),a._v(" "),n("b-th",{staticClass:"text-center"},[a._v("Lamanya (bulan)")]),a._v(" "),n("b-th",{staticClass:"text-center"},[a._v("Keterangan")]),a._v(" "),n("b-th",{staticClass:"text-center"},[a._v("Aksi")])],1)],1),a._v(" "),n("b-tbody",[a._l(a.data_siswa,(function(t,e){return[n("b-tr",[n("b-td",[a._v(a._s(t.nama))]),a._v(" "),n("b-td",[n("b-form-input",{attrs:{state:a.lokasi_prakerin_state[t.anggota_rombel.anggota_rombel_id]},model:{value:a.form.lokasi_prakerin[t.anggota_rombel.anggota_rombel_id],callback:function(n){a.$set(a.form.lokasi_prakerin,t.anggota_rombel.anggota_rombel_id,n)},expression:"form.lokasi_prakerin[item.anggota_rombel.anggota_rombel_id]"}})],1),a._v(" "),n("b-td",[n("b-form-group",{staticStyle:{"margin-bottom":"0"},attrs:{state:a.skala_state[t.anggota_rombel.anggota_rombel_id]}},[n("v-select",{attrs:{id:"dudi_id",options:[1,2,3,4,5,6,7,8,9,10],placeholder:"== Pilih Skala ==",searchable:!1,disabled:a.disabled},model:{value:a.form.skala[t.anggota_rombel.anggota_rombel_id],callback:function(n){a.$set(a.form.skala,t.anggota_rombel.anggota_rombel_id,n)},expression:"form.skala[item.anggota_rombel.anggota_rombel_id]"}})],1)],1),a._v(" "),n("b-td",[n("b-form-input",{attrs:{state:a.lama_prakerin_state[t.anggota_rombel.anggota_rombel_id]},model:{value:a.form.lama_prakerin[t.anggota_rombel.anggota_rombel_id],callback:function(n){a.$set(a.form.lama_prakerin,t.anggota_rombel.anggota_rombel_id,n)},expression:"form.lama_prakerin[item.anggota_rombel.anggota_rombel_id]"}})],1),a._v(" "),n("b-td",[n("b-form-input",{attrs:{state:a.keterangan_prakerin_state[t.anggota_rombel.anggota_rombel_id]},model:{value:a.form.keterangan_prakerin[t.anggota_rombel.anggota_rombel_id],callback:function(n){a.$set(a.form.keterangan_prakerin,t.anggota_rombel.anggota_rombel_id,n)},expression:"form.keterangan_prakerin[item.anggota_rombel.anggota_rombel_id]"}})],1),a._v(" "),n("b-td",{staticClass:"text-center"},[a.prakerin_id[t.anggota_rombel.anggota_rombel_id]&&a.hasRole("wali")?n("a",{staticClass:"text-danger",on:{click:function(n){return a.hapus(a.prakerin_id[t.anggota_rombel.anggota_rombel_id])}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1):a._e()])],1)]}))],2)],1),a._v(" "),a.show_form?n("b-form-group",{attrs:{"label-cols-md":"3"}},[n("b-button",{staticClass:"float-right ml-1",attrs:{type:"submit",variant:"primary"}},[a._v("Simpan")])],1):a._e()]:[n("b-alert",{attrs:{variant:"danger",show:""}},[n("div",{staticClass:"alert-body text-center"},[n("p",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-ban"}}),a._v(" "),n("strong",[a._v("Akses Ditutup!")])],1),a._v(" "),n("p",[a._v(a._s(a.notif))])])])]],2)],1)])],1)],1)}),[],!1,null,null,null);t.default=x.exports},X9p1:function(a,t,n){"use strict";n.d(t,"a",(function(){return $}));var e,o=n("xjcK"),r=n("AFYn"),i=n("pyNs"),l=n("m3aq"),s=n("jBgq"),d=n("kGy3"),c=n("ex6f"),m=n("WPLV"),u=n("OljW"),b=n("2C+6"),_=n("z3V6"),g=n("L3ns"),p=n("8p45"),f=n("zio1");function w(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.push.apply(n,e)}return n}function k(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){h(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}function h(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var v=Object(m.a)("show",{type:i.i,defaultValue:!1}),y=v.mixin,j=v.props,O=v.prop,x=v.event,B=function(a){return""===a||Object(c.b)(a)?0:(a=Object(u.b)(a,0))>0?a:0},D=function(a){return""===a||!0===a||!(Object(u.b)(a,0)<1)&&!!a},C=Object(_.d)(Object(b.m)(k(k({},j),{},{dismissLabel:Object(_.c)(i.u,"Close"),dismissible:Object(_.c)(i.g,!1),fade:Object(_.c)(i.g,!1),variant:Object(_.c)(i.u,"info")})),o.a),$=Object(g.c)({name:o.a,mixins:[y,s.a],props:C,data:function(){return{countDown:0,localShow:D(this[O])}},watch:(e={},h(e,O,(function(a){this.countDown=B(a),this.localShow=D(a)})),h(e,"countDown",(function(a){var t=this;this.clearCountDownInterval();var n=this[O];Object(c.i)(n)&&(this.$emit(r.n,a),n!==a&&this.$emit(x,a),a>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){t.countDown--}),1e3)):this.$nextTick((function(){Object(d.B)((function(){t.localShow=!1}))})))})),h(e,"localShow",(function(a){var t=this[O];a||!this.dismissible&&!Object(c.i)(t)||this.$emit(r.m),Object(c.i)(t)||t===a||this.$emit(x,a)})),e),created:function(){this.$_filterTimer=null;var a=this[O];this.countDown=B(a),this.localShow=D(a)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(a){var t=a();if(this.localShow){var n=this.dismissible,e=this.variant,o=a();n&&(o=a(p.a,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l.j)])),t=a("div",{staticClass:"alert",class:h({"alert-dismissible":n},"alert-".concat(e),e),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[g.a]},[o,this.normalizeSlot()])}return a(f.a,{props:{noFade:!this.fade}},[t])}})},ZHeZ:function(a,t,n){"use strict";var e=n("oVt+"),o=n("sove"),r=n("mwM1"),i=n("giZP"),l=n("R5cT"),s=n("Snq/"),d=n.n(s),c={components:{BRow:e.a,BCol:o.a,BOverlay:r.a,BFormGroup:i.a,BFormInput:l.a,vSelect:d.a},props:{meta:{required:!0},form:{required:!0},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{loading_rombel:!1,tahun_pelajaran:"",data_tingkat:[{id:10,nama:"Kelas 10"},{id:11,nama:"Kelas 11"},{id:12,nama:"Kelas 12"},{id:13,nama:"Kelas 13"}],data_rombel:[]}},methods:{changeTingkat:function(a){var t=this;this.form.rombongan_belajar_id="",a&&(this.$emit("hide_form"),this.loading_rombel=!0,this.$http.post("/rombongan-belajar/get-rombel",this.form).then((function(a){t.loading_rombel=!1;var n=a.data;t.data_rombel=n.data})).catch((function(a){console.log(a)})))},changeRombel:function(a){a&&(this.$emit("hide_form"),this.$emit("rombel",a))}}},m=n("KHd+"),u=Object(m.a)(c,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Tahun Pelajaran","label-for":"tahun_pelajaran","label-cols-md":"3"}},[n("b-form-input",{attrs:{id:"tahun_pelajaran",value:a.form.periode_aktif,disabled:""}})],1)],1),a._v(" "),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Tingkat Kelas","label-for":"tingkat","label-cols-md":"3","invalid-feedback":a.meta.tingkat_feedback,state:a.meta.tingkat_state}},[n("v-select",{attrs:{id:"tingkat",reduce:function(a){return a.id},label:"nama",options:a.data_tingkat,placeholder:"== Pilih Tingkat Kelas ==",searchable:!1,state:a.meta.tingkat_state},on:{input:a.changeTingkat},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n          Tidak ada data untuk ditampilkan\n        ")]}}]),model:{value:a.form.tingkat,callback:function(t){a.$set(a.form,"tingkat",t)},expression:"form.tingkat"}})],1)],1),a._v(" "),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Rombongan Belajar","label-for":"rombongan_belajar_id","label-cols-md":"3","invalid-feedback":a.meta.rombongan_belajar_id_feedback,state:a.meta.rombongan_belajar_id_state}},[n("b-overlay",{attrs:{show:a.loading_rombel,opacity:"0.6",size:"md","spinner-variant":"secondary"}},[n("v-select",{attrs:{id:"rombongan_belajar_id",reduce:function(a){return a.rombongan_belajar_id},label:"nama",options:a.data_rombel,placeholder:"== Pilih Rombongan Belajar ==",state:a.meta.rombongan_belajar_id_state},on:{input:a.changeRombel},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n            Tidak ada data untuk ditampilkan\n          ")]}}]),model:{value:a.form.rombongan_belajar_id,callback:function(t){a.$set(a.form,"rombongan_belajar_id",t)},expression:"form.rombongan_belajar_id"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.a=u.exports},prHD:function(a,t,n){var e=n("JPst"),o=n("nm7J");(t=e(!1)).i(o),t.push([a.i,"[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=t}}]);