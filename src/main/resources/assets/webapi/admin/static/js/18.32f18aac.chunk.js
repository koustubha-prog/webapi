webpackJsonp([18],{1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(96),i=(n.n(r),n(0)),a=(n.n(i),n(72)),s=n(73),c=n(63),p=n(1035),l=n(249),u=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={modal:!1},n.onTabChange=n.onTabChange.bind(n),n}return u(t,e),t.prototype.componentDidMount=function(){this.props.requestCollections()},t.prototype.onTabChange=function(e,t){if(t.activeIndex||0===t.activeIndex){var n=this.props.collections[t.activeIndex];this.props.requestSubjects(n)}},t.prototype.showSubject=function(e){this.setState({modal:!0,subject:e})},t.prototype.toggleModal=function(){this.setState({modal:!this.state.modal})},t.prototype.render=function(){var e=this,t=this.props.t,n=this.state,o=n.modal,s=n.subject;return i.createElement(c.t,{basic:!0},i.createElement(c.v,{defaultActiveIndex:-1,onTabChange:this.onTabChange,menu:{secondary:!0,pointing:!0},panes:this.props.collections.map(function(n){return{menuItem:i.createElement(c.n.Item,{key:n.id},r.upperFirst(n.id),i.createElement(c.k,null,n.loadedSubjectCount)),render:function(){return i.createElement(c.t,{basic:!0},i.createElement(p.a,{list:e.props.subjects,idFunc:function(e){return e.id},isEditing:function(e){return!1},fields:{id:{name:"id",label:t("Id"),view:!0},friendlyId:{name:"friendlyId",label:t("Name"),view:!0},permissions:{name:"permissions",label:t("Permissions"),view:function(n){return n.permissions&&Object.keys(n.permissions).length?i.createElement(c.b,{primary:!0,content:"View",onClick:function(){return e.showSubject(n)}}):t("No permissions")}}}}))}}})}),s&&s.permissions&&i.createElement(c.p,{open:o,onClose:function(){return e.toggleModal()}},i.createElement(c.p.Header,null,i.createElement(a.a,{i18nKey:"GameRulesTitle"},"Permissions for '",s.id,"'")),i.createElement(c.p.Content,null,i.createElement(c.w,{basic:!0,compact:!0},i.createElement(c.w.Body,null,Object.keys(s.permissions).map(function(e){return i.createElement(c.w.Row,{key:e},i.createElement(c.w.Cell,null,e),i.createElement(c.w.Cell,null,i.createElement(c.h,{color:s.permissions[e]?"green":"red",name:s.permissions[e]?"check":"delete"})))})))),i.createElement(c.p.Actions,null,i.createElement(c.b,{color:"blue",onClick:function(){return e.toggleModal()}},t("OK")))))},t}(i.Component);t.default=Object(s.b)(function(e){return{collections:e.permission.collections,subjects:e.permission.subjects}},function(e){return{requestCollections:function(){return e(Object(l.b)())},requestSubjects:function(t){return e(Object(l.c)(t))}}})(Object(a.c)("Permissions")(d))},1035:function(e,t,n){"use strict";var o,r=n(96),i=(n.n(r),n(0)),a=(n.n(i),n(72)),s=n(63),c=n(95),p=n(1036),l=n(1037),u=n(1038),d=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=c.f.bind(n,n.doHandleChange),n}return d(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:h({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.changePage=function(e,t){e.preventDefault(),this.setState({page:t})},t.prototype.onEdit=function(e,t){var n=this,o={};e&&Object.keys(this.props.fields).forEach(function(t){n.props.fields[t].edit&&(o[t]=r.get(e,t))}),this.setState({newData:o}),this.props.onEdit&&this.props.onEdit(e,t)},t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields||e.list!==this.props.list||t.page!==this.state.page||t.newData!==this.state.newData},t.prototype.render=function(){var e=this,t=this.props,n=t.icon,o=t.title,r=t.list,a=t.canEdit,c=t.canDelete,d=t.actions,f=Object.keys(this.props.fields).map(function(t){return e.props.fields[t]}).filter(function(e){return e.view}),m=Math.ceil(r.length/20),g=Math.min(this.state.page,m-1),y=r.slice(20*g,20*(g+1)),b={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:h({},e.state.newData,t)})}},E=this.props.t;return i.createElement("div",{style:{marginTop:"2em"}},o&&i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:n})," ",o),i.createElement(s.w,{striped:!0,stackable:!0},i.createElement(l.a,{fields:f,hasActions:"undefined"!==typeof d,canEdit:!!a,canDelete:!!c,t:E}),i.createElement(s.w.Body,null,y.map(function(t,n){return i.createElement(u.a,{key:e.props.idFunc(t),obj:t,tableRef:b,canEdit:a,canDelete:c,editing:e.props.isEditing(t),fields:f,onEdit:function(t,n){return e.onEdit(t,n)},onSave:e.props.onSave,onDelete:e.props.onDelete,actions:e.props.actions,newData:e.state.newData,handleChange:e.handleChange,t:E})}))),i.createElement(p.a,{page:g,maxPage:m,changePage:function(t,n){return e.changePage(t,n)}}))},t}(i.Component);t.a=Object(a.c)("DataTable")(f)},1036:function(e,t,n){"use strict";var o,r=n(0),i=(n.n(r),n(63)),a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.page!==this.props.page||e.maxPage!==this.props.maxPage},t.prototype.render=function(){var e=this;if(this.props.maxPage<=1)return null;for(var t=this.props,n=t.page,o=t.maxPage,a=Math.max(0,n-4),s=Math.min(o,n+5),c=[],p=a;p<s;p++)c.push(p);return r.createElement(i.n,{pagination:!0},n>4?r.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,0)}},"1"):null,n>5?r.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n-5)}},"..."):null,c.map(function(t){return r.createElement(i.n.Item,{key:t,onClick:function(n){return e.props.changePage(n,t)},active:t===n},t+1)}),n<o-6?r.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n+5)}},"..."):null,n<o-5?r.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,o-1)}},o):null)},t}(r.Component);t.a=s},1037:function(e,t,n){"use strict";var o,r=n(0),i=(n.n(r),n(63)),a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields},t.prototype.render=function(){var e=this;return r.createElement(i.w.Header,null,r.createElement(i.w.Row,null,Object.keys(this.props.fields).map(function(t){var n=e.props.fields[t];return r.createElement(i.w.HeaderCell,{key:t},n.label?n.label:"<"+n.name+">")}),this.props.hasActions||this.props.canEdit||this.props.canDelete?r.createElement(i.w.HeaderCell,null,this.props.t("Actions")):null))},t}(r.Component);t.a=s},1038:function(e,t,n){"use strict";var o,r=n(0),i=(n.n(r),n(63)),a=n(95),s=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.obj!==this.props.obj||e.editing!==this.props.editing||e.fields!==this.props.fields||this.props.editing&&e.newData!==this.props.newData},t.prototype.renderEdit=function(e,t){return t.options?r.createElement(i.e.Field,{fluid:!0,selection:!0,search:!0,control:i.d,name:t.name,placeholder:t.label,options:t.options,value:this.props.newData[t.name],onChange:this.props.handleChange}):r.createElement(i.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.props.newData[t.name],onChange:this.props.handleChange})},t.prototype.render=function(){var e=this,t=this.props,n=t.actions,o=t.fields,s=t.obj,c=t.canEdit,p=t.canDelete,l=t.editing,u=t.tableRef,d="function"===typeof c?c(s):c,h="function"===typeof p?p(s):c;return r.createElement(i.w.Row,null,o.map(function(t,n){return r.createElement(i.w.Cell,{key:n,collapsing:!t.wide},t.edit&&l?"function"===typeof t.edit?t.edit(s,u):e.renderEdit(s,t):"function"===typeof t.view?t.view(s,u):Object(a.e)(s,t.name))}),n||c||p?r.createElement(i.w.Cell,{collapsing:!0},d&&l?[r.createElement(i.b,{key:"save",color:"green",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onSave&&e.props.onSave(s,e.props.newData,u)}},r.createElement(i.h,{name:"save"})," ",this.props.t("Save")),r.createElement(i.b,{key:"cancel",color:"yellow",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(null,u)}},r.createElement(i.h,{name:"cancel"})," ",this.props.t("Cancel"))]:d?r.createElement(i.b,{color:"blue",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(s,u)}},r.createElement(i.h,{name:"edit"})," ",this.props.t("Edit")):null,h&&r.createElement(i.b,{color:"red",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onDelete&&e.props.onDelete(s,u)}},r.createElement(i.h,{name:"trash"})," ",this.props.t("Remove")),n&&n(s,u)):null)},t}(r.Component);t.a=c}});
//# sourceMappingURL=18.32f18aac.chunk.js.map