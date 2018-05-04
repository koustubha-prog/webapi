webpackJsonp([8],{1020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1221),i=(n.n(o),n(0)),a=(n.n(i),n(69)),s=n(70),l=n(58),c=n(1026),p=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object(c.a)("web-books/book","id"),d=function(e){function t(t){var n=e.call(this,t)||this;return n.renderEditContent=n.renderEditContent.bind(n),n}return p(t,e),t.prototype.addLine=function(e){e.setState({lines:e.state.lines.concat(e.state.newItem),newItem:""})},t.prototype.moveLineUp=function(e,t){e.setState({lines:e.state.lines.map(function(n,r){return r===t?e.state.lines[t-1]:r===t-1?e.state.lines[t]:n})})},t.prototype.moveLineDown=function(e,t){e.setState({lines:e.state.lines.map(function(n,r){return r===t?e.state.lines[t+1]:r===t+1?e.state.lines[t]:n})})},t.prototype.deleteLine=function(e,t){e.setState({lines:e.state.lines.filter(function(e,n){return n!==t}),newItem:""})},t.prototype.copy=function(e){o(this.props.apiUrl+"/api/v5/web-books/book/"+e.id+"/html")},t.prototype.render=function(){var e=this,t=this.props.t;return i.createElement(u,{canEdit:!0,canDelete:!0,icon:"book",title:t("WebBooks"),filterTitle:t("FilterBooks"),createTitle:t("CreateBook"),fields:{id:{label:t("Id"),create:!0,filter:!0,required:!0},title:{label:t("Title"),edit:!0,create:!0,required:!0,wide:!0},lines:{view:!1,edit:!0},content:{label:t("Content"),wide:!0,view:function(e){return i.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})},edit:this.renderEditContent},link:{label:t("Link"),wide:!0,view:function(t){return i.createElement(l.j,{fluid:!0,onFocus:function(e){return e.target.select()},action:{color:"teal",icon:"linkify",onClick:function(){return e.copy(t)}},value:e.props.apiUrl+"/api/v5/web-books/book/"+t.id+"/html"})}}},onSave:function(e,t,n){n.save(e,{id:e.id,title:t.title,lines:t.lines})}})},t.prototype.renderEditContent=function(e,t){var n=this,r=this.props.t;return i.createElement("div",null,i.createElement(l.l,{size:"large"},t.state.lines.map(function(e,r){return i.createElement(l.l.Item,{key:r},i.createElement(l.b,{compact:!0,icon:"delete",color:"red",size:"mini",onClick:function(e){return n.deleteLine(t,r)}}),e,i.createElement(l.b,{compact:!0,icon:"arrow down",color:"blue",size:"mini",floated:"right",onClick:function(e){return n.moveLineDown(t,r)},disabled:r>=t.state.lines.length-1}),i.createElement(l.b,{compact:!0,icon:"arrow up",color:"blue",size:"mini",floated:"right",onClick:function(e){return n.moveLineUp(t,r)},disabled:r<=0}))})),i.createElement(l.j,{name:"newItem",placeholder:r("NewLine"),onChange:t.handleChange,value:t.state.newItem?t.state.newItem:"",action:{color:"green",icon:"plus",onClick:function(){return n.addLine(t)}}}))},t}(i.Component);t.default=Object(s.b)(function(e){return{apiUrl:e.api.server.apiUrl}},function(e){return{}})(Object(a.c)("Integrations.WebBooks")(d))},1022:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(69)),s=n(58),l=n(88),c=n(1023),p=n(1024),u=n(1025),d=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=l.f.bind(n,n.doHandleChange),n}return d(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:f({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.changePage=function(e,t){e.preventDefault(),this.setState({page:t})},t.prototype.onEdit=function(e,t){var n=this,r={};e&&Object.keys(this.props.fields).forEach(function(t){n.props.fields[t].edit&&(r[t]=o.get(e,t))}),console.log(r),this.setState({newData:r}),this.props.onEdit&&this.props.onEdit(e,t)},t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields||e.list!==this.props.list||t.page!==this.state.page||t.newData!==this.state.newData},t.prototype.render=function(){var e=this,t=this.props,n=t.icon,r=t.title,o=t.list,a=t.canEdit,l=t.canDelete,d=t.actions,h=Object.keys(this.props.fields).map(function(t){return e.props.fields[t]}).filter(function(e){return e.view}),m=Math.ceil(o.length/20),y=Math.min(this.state.page,m-1),g=o.slice(20*y,20*(y+1)),b={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:f({},e.state.newData,t)})}},v=this.props.t;return i.createElement("div",{style:{marginTop:"2em"}},r&&i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:n})," ",r),i.createElement(s.w,{striped:!0,stackable:!0},i.createElement(p.a,{fields:h,hasActions:"undefined"!==typeof d,canEdit:a,canDelete:l,t:v}),i.createElement(s.w.Body,null,g.map(function(t,n){return i.createElement(u.a,{key:e.props.idFunc(t),obj:t,tableRef:b,canEdit:a,canDelete:l,editing:e.props.isEditing(t),fields:h,onEdit:function(t,n){return e.onEdit(t,n)},onSave:e.props.onSave,onDelete:e.props.onDelete,actions:e.props.actions,newData:e.state.newData,handleChange:e.handleChange,t:v})}))),i.createElement(c.a,{page:y,maxPage:m,changePage:function(t,n){return e.changePage(t,n)}}))},t}(i.Component);t.a=Object(a.c)("DataTable")(h)},1023:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.page!==this.props.page||e.maxPage!==this.props.maxPage},t.prototype.render=function(){var e=this;if(this.props.maxPage<=1)return null;for(var t=this.props,n=t.page,r=t.maxPage,a=Math.max(0,n-4),s=Math.min(r,n+5),l=[],c=a;c<s;c++)l.push(c);return o.createElement(i.n,{pagination:!0},n>4?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,0)}},"1"):null,n>5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n-5)}},"..."):null,l.map(function(t){return o.createElement(i.n.Item,{key:t,onClick:function(n){return e.props.changePage(n,t)},active:t===n},t+1)}),n<r-6?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n+5)}},"..."):null,n<r-5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,r-1)}},r):null)},t}(o.Component);t.a=s},1024:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields},t.prototype.render=function(){var e=this;return o.createElement(i.w.Header,null,o.createElement(i.w.Row,null,Object.keys(this.props.fields).map(function(t){var n=e.props.fields[t];return o.createElement(i.w.HeaderCell,{key:t},n.label?n.label:"<"+n.name+">")}),this.props.hasActions||this.props.canEdit||this.props.canDelete?o.createElement(i.w.HeaderCell,null,this.props.t("Actions")):null))},t}(o.Component);t.a=s},1025:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=n(88),s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.obj!==this.props.obj||e.editing!==this.props.editing||e.fields!==this.props.fields||this.props.editing&&e.newData!==this.props.newData},t.prototype.renderEdit=function(e,t){return t.options?o.createElement(i.e.Field,{fluid:!0,selection:!0,search:!0,control:i.d,name:t.name,placeholder:t.label,options:t.options,value:this.props.newData[t.name],onChange:this.props.handleChange}):o.createElement(i.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.props.newData[t.name],onChange:this.props.handleChange})},t.prototype.render=function(){var e=this,t=this.props,n=t.actions,r=t.fields,s=t.obj,l=t.canEdit,c=t.canDelete,p=t.editing,u=t.tableRef;return o.createElement(i.w.Row,null,r.map(function(t,n){return o.createElement(i.w.Cell,{key:n,collapsing:!t.wide},t.edit&&p?"function"===typeof t.edit?t.edit(s,u):e.renderEdit(s,t):"function"===typeof t.view?t.view(s,u):Object(a.e)(s,t.name))}),n||l||c?o.createElement(i.w.Cell,{collapsing:!0},l&&p?[o.createElement(i.b,{key:"save",color:"green",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onSave&&e.props.onSave(s,e.props.newData,u)}},o.createElement(i.h,{name:"save"})," ",this.props.t("Save")),o.createElement(i.b,{key:"cancel",color:"yellow",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(null,u)}},o.createElement(i.h,{name:"cancel"})," ",this.props.t("Cancel"))]:l?o.createElement(i.b,{color:"blue",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(s,u)}},o.createElement(i.h,{name:"edit"})," ",this.props.t("Edit")):null,c&&o.createElement(i.b,{color:"red",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onDelete&&e.props.onDelete(s,u)}},o.createElement(i.h,{name:"trash"})," ",this.props.t("Remove")),n&&n(s,u)):null)},t}(o.Component);t.a=l},1026:function(e,t,n){"use strict";t.a=function(e,t,n){t||(t="id");var r="function"===typeof t?t:function(e){return o.get(e,t)};return Object(a.b)(function(e,t){return function(n,r){var i=o.get(n,e.replace(/\//g,"_").replace("-",""));return{creating:!!i&&i.creating,filter:i&&i.filter?i.filter:{},list:i?i.list:[],types:n.api.types,idFunc:t,perm:e.split("/"),perms:n.api.permissions}}}(e,r),function(e,t,n){return function(r){return{requestList:function(){return r(Object(l.f)(e,!n))},requestDetails:function(n){return r(Object(l.e)(e,t,n))},requestCreate:function(n){return r(Object(l.c)(e,t,n))},requestChange:function(n,o){return r(Object(l.b)(e,t,n,o))},requestDelete:function(n){return r(Object(l.d)(e,t,n))},setFilter:function(t,n){return r(Object(l.l)(e,t,n))},equals:function(e,n){return null!=e&&null!=n&&t(e)===t(n)}}}}(e,r,!!n))(m)};var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(70)),s=n(58),l=n(143),c=n(1027),p=n(1022),u=n(1028),d=n(88),f=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,data:null},n.details=n.details.bind(n),n.create=n.create.bind(n),n.edit=n.edit.bind(n),n.endEdit=n.endEdit.bind(n),n.save=n.save.bind(n),n.delete=n.delete.bind(n),n}return f(t,e),t.prototype.createTable=function(){return p.a},t.prototype.componentDidMount=function(){this.props.static||(this.props.requestList(),this.interval=setInterval(this.props.requestList,1e4))},t.prototype.componentWillUnmount=function(){this.interval&&clearInterval(this.interval)},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.filter!==this.props.filter||e.fields!==this.props.fields||e.list!==this.props.list||t.data!==this.state.data},t.prototype.create=function(e){this.props.requestCreate(e)},t.prototype.details=function(e){this.props.requestDetails(e)},t.prototype.edit=function(e){this.setState({data:e})},t.prototype.save=function(e,t){this.props.requestChange(e,t),this.endEdit()},t.prototype.endEdit=function(){this.setState({data:null})},t.prototype.delete=function(e){this.props.requestDelete(e)},t.prototype.render=function(){var e=this,t=[],n=!1,r=function(t){return h({},t,{create:e.create,details:e.details,save:e.save,edit:e.edit,endEdit:e.endEdit,delete:e.delete})},a=o.mapValues(this.props.fields,function(e,t){var n={name:t,view:!0};if("string"===typeof e)n.label=e;else if("function"===typeof e)n.view=function(t,n){return e(t,r(n))};else if("object"===typeof e&&(n=h({},n,e),"function"===typeof e.view)){var o=e.view;n.view=function(e,t){return o(e,r(t))}}return n}),l={},p={};Object.keys(a).forEach(function(e){a[e].create&&(l[e]=a[e]),a[e].filter&&(p[e]=a[e])});try{Object.keys(this.props.filter).forEach(function(n){var r=e.props.filter[n],i=Object.keys(p).map(function(e){return p[e]}).find(function(e){return e.filterName===n})||p[n],a=function(e){return o.get(e,n)};if("function"===typeof i.filterValue&&(a=i.filterValue),o.isArray(r)){if(0===r.length)return;t.push(function(e){var t=a(e);return r.indexOf(t)>=0})}else t.push(function(e){return new RegExp(r,"i").test(a(e))})}),n=!0}catch(e){n=!1}var f=this.props.list.filter(function(e){return!n||t.every(function(t){return t(e)})}),m=this.props.createTitle&&this.props.filterTitle?2:1,y=this.props.actions,g=y;"function"===typeof y&&(g=function(e,t){return y(e,r(t))});var b=this.createTable();return i.createElement(s.t,{basic:!0},i.createElement(s.f,{stackable:!0,doubling:!0,columns:m},this.props.createTitle&&Object(d.a)(this.props.perms,this.props.perm.concat("create"))&&i.createElement(s.f.Column,null,i.createElement(c.a,{title:this.props.createTitle,button:this.props.createButton,creating:this.props.creating,fields:l,onCreate:function(t,n){return e.props.onCreate?e.props.onCreate(t,r(n)):e.create(t)}})),this.props.filterTitle&&i.createElement(s.f.Column,null,i.createElement(u.a,{title:this.props.filterTitle,fields:p,valid:n,values:this.props.filter,onFilterChange:this.props.setFilter}))),i.createElement(b,{title:this.props.title,icon:this.props.icon,list:f,t:this.props.t,idFunc:this.props.idFunc,fields:a,onEdit:function(t,n){return e.props.onEdit?e.props.onEdit(t,r(n)):e.edit(t)},onSave:function(t,n,o){return e.props.onSave?e.props.onSave(t,n,r(o)):e.save(t,n)},onDelete:function(t,n){return e.props.onDelete?e.props.onDelete(t,r(n)):e.delete(t)},canEdit:this.props.canEdit&&Object(d.a)(this.props.perms,this.props.perm.concat("change")),canDelete:this.props.canDelete&&Object(d.a)(this.props.perms,this.props.perm.concat("delete")),actions:g,isEditing:function(t){return e.props.equals(t,e.state.data)}}))},t}(i.Component)},1027:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(69)),s=n(58),l=n(88),c=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={newData:{}},n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=l.f.bind(n,n.doHandleChange),n.create=n.create.bind(n),n}return c(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:p({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.fields!==this.props.fields||t.newData!==this.state.newData},t.prototype.create=function(){var e=this,t={};Object.keys(this.state.newData).forEach(function(n){o.set(t,n,e.state.newData[n])}),this.props.onCreate(t,{state:this.state.newData,setState:this.setState,handleChange:this.handleChange})},t.prototype.canCreate=function(){var e=this;return Object.keys(this.props.fields).every(function(t){var n=e.props.fields[t],r=n.createName?n.createName:t;return"string"===typeof n||!n.required||e.state.newData[r]})},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.creating,o=t.fields,a=this.props.t,l=[];return Object.keys(o).forEach(function(e){var t=o[e],n=p({},t,{name:t.createName?t.createName:e});n.isGroup?l.push({only:n}):l.length&&!l[l.length-1].second?l[l.length-1].second=n:l.push({first:n})}),i.createElement(s.t,null,i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:"plus"})," ",n),i.createElement(s.e,{loading:r},l.map(function(t,n){return t.only?i.createElement("div",{key:n},e.renderField(t.only)):i.createElement(s.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first),t.second&&e.renderField(t.second))}),i.createElement(s.b,{color:"green",onClick:this.create,disabled:!this.canCreate()},this.props.button||a("Create"))))},t.prototype.renderField=function(e){var t=this.state.newData;return"function"===typeof e.create?e.create({state:t,setState:this.setState,handleChange:this.handleChange,value:t[e.name]}):e.options?i.createElement(s.e.Field,{fluid:!0,selection:!0,search:!0,required:e.required,control:s.d,name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name],options:e.options}):i.createElement(s.e.Input,{required:e.required,type:e.type?e.type:"text",name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name]})},t}(i.Component);t.a=Object(a.c)("CreateForm")(u)},1028:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(58)),s=n(88),l=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p=function(e){function t(t){var n=e.call(this,t)||this;return n.handleChange=s.f.bind(n,n.props.onFilterChange),n}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.values!==this.props.values||e.fields!==this.props.fields||e.valid!==this.props.valid},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.fields,s=t.values,l=t.valid,p=[];return Object.keys(r).forEach(function(e){var t=r[e],n=c({},t,{name:t.filterName?t.filterName:e});n.isGroup?p.push({only:n}):p.length&&!p[p.length-1].second?p[p.length-1].second=n:p.push({first:n})}),i.createElement(a.t,null,i.createElement(a.g,null,i.createElement(a.h,{name:"filter",fitted:!0})," ",n),i.createElement(a.e,null,p.map(function(t,n){return t.only?e.renderField(t.only,o.get(s,t.only.name),!l):i.createElement(a.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first,o.get(s,t.first.name),!l),t.second&&e.renderField(t.second,o.get(s,t.second.name),!l))}),i.createElement(a.o,{error:!0,visible:!l,content:"Search term must be a valid regex"})))},t.prototype.renderField=function(e,t,n){return"function"===typeof e.filter?e.filter({state:this.props.values,setState:this.setState,handleChange:this.handleChange,value:t}):e.options?(t||(t=[]),i.createElement(a.e.Field,{fluid:!0,selection:!0,search:!0,multiple:!0,control:a.d,name:e.name,label:e.label,placeholder:e.label,options:e.options,value:t,error:n,onChange:this.handleChange})):i.createElement(a.e.Input,{name:e.name,type:e.type?e.type:"text",label:e.label,placeholder:e.label,value:t,error:n,onChange:this.handleChange})},t}(i.Component);t.a=p},1221:function(e,t,n){"use strict";var r=n(1222),o="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,i,a,s,l,c,p=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),s=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",document.body.appendChild(c),s.selectNode(c),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),p=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:o),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return p}},1222:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}});
//# sourceMappingURL=8.42bdbf08.chunk.js.map