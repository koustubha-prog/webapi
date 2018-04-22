webpackJsonp([9],{1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(n.n(o),n(69)),a=n(70),s=n(58),c=n(33),l=n(1031),p=n(88),u=n(144),d=n(1026),h=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=Object(d.a)("nucleus/kit","name"),m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={newKitCmd:"",newItemType:"",newItemAmount:1},n.renderCommands=n.renderCommands.bind(n),n.renderStacks=n.renderStacks.bind(n),n.handleChange=p.f.bind(n,null),n}return h(t,e),t.prototype.componentDidMount=function(){this.props.requestCatalog(u.a.Item)},t.prototype.addCmd=function(e,t){var n=this.state.newKitCmd;n.startsWith("/")&&(n=n.substring(1)),e.save(t,{commands:t.commands.concat(n)})},t.prototype.removeCmd=function(e,t,n){e.save(t,{commands:t.commands.filter(function(e,t){return t!==n})})},t.prototype.addStack=function(e,t){e.save(t,{stacks:t.stacks.concat({type:{id:this.state.newItemType,name:""},quantity:this.state.newItemAmount?this.state.newItemAmount:1})})},t.prototype.removeStack=function(e,t,n){e.save(t,{stacks:t.stacks.filter(function(e,t){return t!==n})})},t.prototype.render=function(){var e=this.props.t;return o.createElement(f,{canEdit:!0,canDelete:!0,icon:"wrench",title:e("Kits"),filterTitle:e("FilterKits"),createTitle:e("CreateKit"),fields:{name:{label:e("Name"),create:!0,filter:!0,required:!0},cost:{label:e("Cost"),type:"number",edit:!0,create:!0,required:!0},cooldown:{label:e("Cooldown"),type:"number",edit:!0,create:!0,required:!0},commands:{label:e("Commands"),wide:!0,view:this.renderCommands},stacks:{label:e("Stacks"),wide:!0,view:this.renderStacks}}})},t.prototype.renderCommands=function(e,t){var n=this,r=this.props.t;return o.createElement("div",null,e.commands.map(function(r,i){return o.createElement(s.k,{key:i,color:"blue",content:"/"+r,onRemove:function(r){return n.removeCmd(t,e,i)}})}),o.createElement(s.q,{on:"click",position:"top right",trigger:o.createElement(s.b,{color:"green",icon:"plus",size:"mini"}),content:o.createElement(s.j,{name:"newKitCmd",action:{color:"green",content:r("Add"),onClick:function(){return n.addCmd(t,e)}},placeholder:"/say Hi",value:this.state.newKitCmd,onChange:this.handleChange})}))},t.prototype.renderStacks=function(e,t){var n=this,r=this.props.t;return o.createElement("div",null,e.stacks.map(function(r,i){return o.createElement(l.a,{key:i,item:r,onRemove:function(r){return n.removeStack(t,e,i)}})}),o.createElement(s.q,{on:"click",position:"top right",trigger:o.createElement(s.b,{color:"green",icon:"plus",size:"mini"}),content:o.createElement(s.e,null,o.createElement(s.e.Field,{required:!0,fluid:!0,selection:!0,search:!0,name:"newItemType",control:s.d,placeholder:r("Type"),onChange:this.handleChange,options:Object(p.g)(this.props.itemTypes)}),o.createElement(s.e.Input,{name:"newItemAmount",type:"number",placeholder:r("Amount"),onChange:this.handleChange,action:{color:"green",content:r("Add"),onClick:function(){return n.addStack(t,e)}}}))}))},t}(o.Component);t.default=Object(a.b)(function(e){return{itemTypes:e.api.types[u.a.Item]}},function(e){return{requestCatalog:function(t){return e(Object(c.e)(t))}}})(Object(i.c)("Integrations.Nucleus")(m))},1022:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(69)),s=n(58),c=n(88),l=n(1023),p=n(1024),u=n(1025),d=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=c.f.bind(n,n.doHandleChange),n}return d(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:h({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.changePage=function(e,t){e.preventDefault(),this.setState({page:t})},t.prototype.onEdit=function(e,t){var n=this,r={};e&&Object.keys(this.props.fields).forEach(function(t){n.props.fields[t].edit&&(r[t]=o.get(e,t))}),console.log(r),this.setState({newData:r}),this.props.onEdit&&this.props.onEdit(e,t)},t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields||e.list!==this.props.list||t.page!==this.state.page||t.newData!==this.state.newData},t.prototype.render=function(){var e=this,t=this.props,n=t.icon,r=t.title,o=t.list,a=t.canEdit,c=t.canDelete,d=t.actions,f=Object.keys(this.props.fields).map(function(t){return e.props.fields[t]}).filter(function(e){return e.view}),m=Math.ceil(o.length/20),y=Math.min(this.state.page,m-1),g=o.slice(20*y,20*(y+1)),b={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:h({},e.state.newData,t)})}},v=this.props.t;return i.createElement("div",{style:{marginTop:"2em"}},r&&i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:n})," ",r),i.createElement(s.w,{striped:!0,stackable:!0},i.createElement(p.a,{fields:f,hasActions:"undefined"!==typeof d,canEdit:a,canDelete:c,t:v}),i.createElement(s.w.Body,null,g.map(function(t,n){return i.createElement(u.a,{key:e.props.idFunc(t),obj:t,tableRef:b,canEdit:a,canDelete:c,editing:e.props.isEditing(t),fields:f,onEdit:function(t,n){return e.onEdit(t,n)},onSave:e.props.onSave,onDelete:e.props.onDelete,actions:e.props.actions,newData:e.state.newData,handleChange:e.handleChange,t:v})}))),i.createElement(l.a,{page:y,maxPage:m,changePage:function(t,n){return e.changePage(t,n)}}))},t}(i.Component);t.a=Object(a.c)("DataTable")(f)},1023:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.page!==this.props.page||e.maxPage!==this.props.maxPage},t.prototype.render=function(){var e=this;if(this.props.maxPage<=1)return null;for(var t=this.props,n=t.page,r=t.maxPage,a=Math.max(0,n-4),s=Math.min(r,n+5),c=[],l=a;l<s;l++)c.push(l);return o.createElement(i.n,{pagination:!0},n>4?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,0)}},"1"):null,n>5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n-5)}},"..."):null,c.map(function(t){return o.createElement(i.n.Item,{key:t,onClick:function(n){return e.props.changePage(n,t)},active:t===n},t+1)}),n<r-6?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n+5)}},"..."):null,n<r-5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,r-1)}},r):null)},t}(o.Component);t.a=s},1024:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields},t.prototype.render=function(){var e=this;return o.createElement(i.w.Header,null,o.createElement(i.w.Row,null,Object.keys(this.props.fields).map(function(t){var n=e.props.fields[t];return o.createElement(i.w.HeaderCell,{key:t},n.label?n.label:"<"+n.name+">")}),this.props.hasActions||this.props.canEdit||this.props.canDelete?o.createElement(i.w.HeaderCell,null,this.props.t("Actions")):null))},t}(o.Component);t.a=s},1025:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=n(88),s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.obj!==this.props.obj||e.editing!==this.props.editing||e.fields!==this.props.fields||this.props.editing&&e.newData!==this.props.newData},t.prototype.renderEdit=function(e,t){return t.options?o.createElement(i.e.Field,{fluid:!0,selection:!0,search:!0,control:i.d,name:t.name,placeholder:t.label,options:t.options,value:this.props.newData[t.name],onChange:this.props.handleChange}):o.createElement(i.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.props.newData[t.name],onChange:this.props.handleChange})},t.prototype.render=function(){var e=this,t=this.props,n=t.actions,r=t.fields,s=t.obj,c=t.canEdit,l=t.canDelete,p=t.editing,u=t.tableRef;return o.createElement(i.w.Row,null,r.map(function(t,n){return o.createElement(i.w.Cell,{key:n,collapsing:!t.wide},t.edit&&p?"function"===typeof t.edit?t.edit(s,u):e.renderEdit(s,t):"function"===typeof t.view?t.view(s,u):Object(a.e)(s,t.name))}),n||c||l?o.createElement(i.w.Cell,{collapsing:!0},c&&p?[o.createElement(i.b,{key:"save",color:"green",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onSave&&e.props.onSave(s,e.props.newData,u)}},o.createElement(i.h,{name:"save"})," ",this.props.t("Save")),o.createElement(i.b,{key:"cancel",color:"yellow",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(null,u)}},o.createElement(i.h,{name:"cancel"})," ",this.props.t("Cancel"))]:c?o.createElement(i.b,{color:"blue",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(s,u)}},o.createElement(i.h,{name:"edit"})," ",this.props.t("Edit")):null,l&&o.createElement(i.b,{color:"red",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onDelete&&e.props.onDelete(s,u)}},o.createElement(i.h,{name:"trash"})," ",this.props.t("Remove")),n&&n(s,u)):null)},t}(o.Component);t.a=c},1026:function(e,t,n){"use strict";t.a=function(e,t,n){t||(t="id");var r="function"===typeof t?t:function(e){return o.get(e,t)};return Object(a.b)(function(e,t){return function(n,r){var i=o.get(n,e.replace(/\//g,"_").replace("-",""));return{creating:!!i&&i.creating,filter:i&&i.filter?i.filter:{},list:i?i.list:[],types:n.api.types,idFunc:t,perm:e.split("/"),perms:n.api.permissions}}}(e,r),function(e,t,n){return function(r){return{requestList:function(){return r(Object(c.f)(e,!n))},requestDetails:function(n){return r(Object(c.e)(e,t,n))},requestCreate:function(n){return r(Object(c.c)(e,t,n))},requestChange:function(n,o){return r(Object(c.b)(e,t,n,o))},requestDelete:function(n){return r(Object(c.d)(e,t,n))},setFilter:function(t,n){return r(Object(c.l)(e,t,n))},equals:function(e,n){return null!=e&&null!=n&&t(e)===t(n)}}}}(e,r,!!n))(m)};var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(70)),s=n(58),c=n(143),l=n(1027),p=n(1022),u=n(1028),d=n(88),h=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,data:null},n.details=n.details.bind(n),n.create=n.create.bind(n),n.edit=n.edit.bind(n),n.endEdit=n.endEdit.bind(n),n.save=n.save.bind(n),n.delete=n.delete.bind(n),n}return h(t,e),t.prototype.createTable=function(){return p.a},t.prototype.componentDidMount=function(){this.props.static||(this.props.requestList(),this.interval=setInterval(this.props.requestList,1e4))},t.prototype.componentWillUnmount=function(){this.interval&&clearInterval(this.interval)},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.filter!==this.props.filter||e.fields!==this.props.fields||e.list!==this.props.list||t.data!==this.state.data},t.prototype.create=function(e){this.props.requestCreate(e)},t.prototype.details=function(e){this.props.requestDetails(e)},t.prototype.edit=function(e){this.setState({data:e})},t.prototype.save=function(e,t){this.props.requestChange(e,t),this.endEdit()},t.prototype.endEdit=function(){this.setState({data:null})},t.prototype.delete=function(e){this.props.requestDelete(e)},t.prototype.render=function(){var e=this,t=[],n=!1,r=function(t){return f({},t,{create:e.create,details:e.details,save:e.save,edit:e.edit,endEdit:e.endEdit,delete:e.delete})},a=o.mapValues(this.props.fields,function(e,t){var n={name:t,view:!0};if("string"===typeof e)n.label=e;else if("function"===typeof e)n.view=function(t,n){return e(t,r(n))};else if("object"===typeof e&&(n=f({},n,e),"function"===typeof e.view)){var o=e.view;n.view=function(e,t){return o(e,r(t))}}return n}),c={},p={};Object.keys(a).forEach(function(e){a[e].create&&(c[e]=a[e]),a[e].filter&&(p[e]=a[e])});try{Object.keys(this.props.filter).forEach(function(n){var r=e.props.filter[n],i=Object.keys(p).map(function(e){return p[e]}).find(function(e){return e.filterName===n})||p[n],a=function(e){return o.get(e,n)};if("function"===typeof i.filterValue&&(a=i.filterValue),o.isArray(r)){if(0===r.length)return;t.push(function(e){var t=a(e);return r.indexOf(t)>=0})}else t.push(function(e){return new RegExp(r,"i").test(a(e))})}),n=!0}catch(e){n=!1}var h=this.props.list.filter(function(e){return!n||t.every(function(t){return t(e)})}),m=this.props.createTitle&&this.props.filterTitle?2:1,y=this.props.actions,g=y;"function"===typeof y&&(g=function(e,t){return y(e,r(t))});var b=this.createTable();return i.createElement(s.t,{basic:!0},i.createElement(s.f,{stackable:!0,doubling:!0,columns:m},this.props.createTitle&&Object(d.a)(this.props.perms,this.props.perm.concat("create"))&&i.createElement(s.f.Column,null,i.createElement(l.a,{title:this.props.createTitle,button:this.props.createButton,creating:this.props.creating,fields:c,onCreate:function(t,n){return e.props.onCreate?e.props.onCreate(t,r(n)):e.create(t)}})),this.props.filterTitle&&i.createElement(s.f.Column,null,i.createElement(u.a,{title:this.props.filterTitle,fields:p,valid:n,values:this.props.filter,onFilterChange:this.props.setFilter}))),i.createElement(b,{title:this.props.title,icon:this.props.icon,list:h,t:this.props.t,idFunc:this.props.idFunc,fields:a,onEdit:function(t,n){return e.props.onEdit?e.props.onEdit(t,r(n)):e.edit(t)},onSave:function(t,n,o){return e.props.onSave?e.props.onSave(t,n,r(o)):e.save(t,n)},onDelete:function(t,n){return e.props.onDelete?e.props.onDelete(t,r(n)):e.delete(t)},canEdit:this.props.canEdit&&Object(d.a)(this.props.perms,this.props.perm.concat("change")),canDelete:this.props.canDelete&&Object(d.a)(this.props.perms,this.props.perm.concat("delete")),actions:g,isEditing:function(t){return e.props.equals(t,e.state.data)}}))},t}(i.Component)},1027:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(69)),s=n(58),c=n(88),l=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={newData:{}},n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=c.f.bind(n,n.doHandleChange),n.create=n.create.bind(n),n}return l(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:p({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.fields!==this.props.fields||t.newData!==this.state.newData},t.prototype.create=function(){var e=this,t={};Object.keys(this.state.newData).forEach(function(n){o.set(t,n,e.state.newData[n])}),this.props.onCreate(t,{state:this.state.newData,setState:this.setState,handleChange:this.handleChange})},t.prototype.canCreate=function(){var e=this;return Object.keys(this.props.fields).every(function(t){var n=e.props.fields[t],r=n.createName?n.createName:t;return"string"===typeof n||!n.required||e.state.newData[r]})},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.creating,o=t.fields,a=this.props.t,c=[];return Object.keys(o).forEach(function(e){var t=o[e],n=p({},t,{name:t.createName?t.createName:e});n.isGroup?c.push({only:n}):c.length&&!c[c.length-1].second?c[c.length-1].second=n:c.push({first:n})}),i.createElement(s.t,null,i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:"plus"})," ",n),i.createElement(s.e,{loading:r},c.map(function(t,n){return t.only?i.createElement("div",{key:n},e.renderField(t.only)):i.createElement(s.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first),t.second&&e.renderField(t.second))}),i.createElement(s.b,{color:"green",onClick:this.create,disabled:!this.canCreate()},this.props.button||a("Create"))))},t.prototype.renderField=function(e){var t=this.state.newData;return"function"===typeof e.create?e.create({state:t,setState:this.setState,handleChange:this.handleChange,value:t[e.name]}):e.options?i.createElement(s.e.Field,{fluid:!0,selection:!0,search:!0,required:e.required,control:s.d,name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name],options:e.options}):i.createElement(s.e.Input,{required:e.required,type:e.type?e.type:"text",name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name]})},t}(i.Component);t.a=Object(a.c)("CreateForm")(u)},1028:function(e,t,n){"use strict";var r,o=n(89),i=(n.n(o),n(0)),a=(n.n(i),n(58)),s=n(88),c=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p=function(e){function t(t){var n=e.call(this,t)||this;return n.handleChange=s.f.bind(n,n.props.onFilterChange),n}return c(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.values!==this.props.values||e.fields!==this.props.fields||e.valid!==this.props.valid},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.fields,s=t.values,c=t.valid,p=[];return Object.keys(r).forEach(function(e){var t=r[e],n=l({},t,{name:t.filterName?t.filterName:e});n.isGroup?p.push({only:n}):p.length&&!p[p.length-1].second?p[p.length-1].second=n:p.push({first:n})}),i.createElement(a.t,null,i.createElement(a.g,null,i.createElement(a.h,{name:"filter",fitted:!0})," ",n),i.createElement(a.e,null,p.map(function(t,n){return t.only?e.renderField(t.only,o.get(s,t.only.name),!c):i.createElement(a.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first,o.get(s,t.first.name),!c),t.second&&e.renderField(t.second,o.get(s,t.second.name),!c))}),i.createElement(a.o,{error:!0,visible:!c,content:"Search term must be a valid regex"})))},t.prototype.renderField=function(e,t,n){return"function"===typeof e.filter?e.filter({state:this.props.values,setState:this.setState,handleChange:this.handleChange,value:t}):e.options?(t||(t=[]),i.createElement(a.e.Field,{fluid:!0,selection:!0,search:!0,multiple:!0,control:a.d,name:e.name,label:e.label,placeholder:e.label,options:e.options,value:t,error:n,onChange:this.handleChange})):i.createElement(a.e.Input,{name:e.name,type:e.type?e.type:"text",label:e.label,placeholder:e.label,value:t,error:n,onChange:this.handleChange})},t}(i.Component);t.a=p},1031:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(58)),a=n(88),s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c={display:"inline-block",verticalAlign:"top",margin:"0.1em",padding:"0.2em",border:"1px solid rgba(34,36,38,.1)",borderRadius:".28571429rem"},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this.props.item;return o.createElement("div",{style:c},o.createElement("strong",null,e.type.name),this.props.onRemove&&o.createElement(i.b,{compact:!0,size:"mini",icon:"delete",floated:"right",onClick:this.props.onRemove}),o.createElement("div",{style:{color:"gray",marginBottom:"0.5em"}},e.type.id),o.createElement("div",null,e.durability&&(e.durability.unbreakable?o.createElement(i.k,{size:"tiny"},"Unbreakable"):o.createElement(i.r,{progress:!0,size:"small",percent:Object(a.c)(e.durability.durability,e.useLimit?e.useLimit:0),style:{margin:"0 0 .5em 0"}})),e.quantity>1&&o.createElement(i.k,{size:"tiny",color:"blue"},"x",e.quantity),e.enchantments&&o.createElement("div",null,e.enchantments.map(function(e){return o.createElement(i.k,{color:"purple",size:"tiny",key:e.id},e.name,o.createElement(i.k.Detail,null,e.level))})),e.spawn&&o.createElement(i.k,{size:"tiny"},e.spawn.name),e.potionEffects&&e.potionEffects.map(function(e){return o.createElement(i.k,{size:"tiny",color:"brown",key:e.type.id},e.type.name," ",function(e){return 1===(t=e.amplifier+1)?"I":2===t?"II":3===t?"III":4===t?"IV":5===t?"V":"";var t}(e))}),e.foodRestoration&&o.createElement(i.k,{size:"tiny",color:"green",icon:"food",content:e.foodRestoration}),e.burningFuel&&o.createElement(i.k,{size:"tiny",color:"red",icon:"fire",content:e.burningFuel})))},t}(o.Component);t.a=l}});
//# sourceMappingURL=9.fe65d5a3.chunk.js.map