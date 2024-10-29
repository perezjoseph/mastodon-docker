(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{1234:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),s=n.n(i),l=n(2),a=n(7),c=n(19),d=n(39),r=n(82),m=n(11),h=n(1082),u=n(5),p=n(137),b=n(244),y=n(21),g=n(149),M=n(240),j=n(1084),O=n(38),f=n(1083);class I extends l.PureComponent{render(){const{settings:e,onChange:t}=this.props;return Object(o.a)("div",{},void 0,Object(o.a)("div",{className:"column-settings__row"},void 0,Object(o.a)(f.a,{settings:e,settingPath:["other","onlyMedia"],onChange:t,label:Object(o.a)(c.a,{id:"community.column_settings.media_only",defaultMessage:"Media only"})}),Object(o.a)(f.a,{settings:e,settingPath:["other","onlyRemote"],onChange:t,label:Object(o.a)(c.a,{id:"community.column_settings.remote_only",defaultMessage:"Remote only"})})))}}var R=Object(d.c)(I);var v=Object(m.connect)(((e,t)=>{let{columnId:n}=t;const o=n,i=e.getIn(["settings","columns"]),s=i.findIndex((e=>e.get("uuid")===o));return{settings:o&&s>=0?i.get(s).get("params"):e.getIn(["settings","public"])}}),((e,t)=>{let{columnId:n}=t;return{onChange(t,o){e(n?Object(p.f)(n,t,o):Object(O.c)(["public",...t],o))}}}))(R),w=n(4);const C=Object(a.d)({title:{id:"column.public",defaultMessage:"Federated timeline"}});class _ extends l.PureComponent{constructor(){super(...arguments),this.handlePin=()=>{const{columnId:e,dispatch:t,onlyMedia:n,onlyRemote:o}=this.props;t(e?Object(p.h)(e):Object(p.e)(o?"REMOTE":"PUBLIC",{other:{onlyMedia:n,onlyRemote:o}}))},this.handleMove=e=>{const{columnId:t,dispatch:n}=this.props;n(Object(p.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleLoadMore=e=>{const{dispatch:t,onlyMedia:n,onlyRemote:o}=this.props;t(Object(y.w)({maxId:e,onlyMedia:n,onlyRemote:o}))}}componentDidMount(){const{dispatch:e,onlyMedia:t,onlyRemote:n}=this.props,{signedIn:o}=this.context.identity;e(Object(y.w)({onlyMedia:t,onlyRemote:n})),o&&(this.disconnect=e(Object(b.e)({onlyMedia:t,onlyRemote:n})))}componentDidUpdate(e){const{signedIn:t}=this.context.identity;if(e.onlyMedia!==this.props.onlyMedia||e.onlyRemote!==this.props.onlyRemote){const{dispatch:e,onlyMedia:n,onlyRemote:o}=this.props;this.disconnect&&this.disconnect(),e(Object(y.w)({onlyMedia:n,onlyRemote:o})),t&&(this.disconnect=e(Object(b.e)({onlyMedia:n,onlyRemote:o})))}}componentWillUnmount(){this.disconnect&&(this.disconnect(),this.disconnect=null)}render(){const{intl:e,columnId:t,hasUnread:n,multiColumn:i,onlyMedia:s,onlyRemote:l}=this.props,a=!!t;return Object(w.jsxs)(g.a,{bindToDocument:!i,ref:this.setRef,label:e.formatMessage(C.title),children:[Object(o.a)(M.a,{icon:"globe",active:n,title:e.formatMessage(C.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:a,multiColumn:i},void 0,Object(o.a)(v,{columnId:t})),Object(o.a)(j.a,{prepend:Object(o.a)(h.a,{id:"public_timeline"},void 0,Object(o.a)(c.a,{id:"dismissable_banner.public_timeline",defaultMessage:"These are the most recent public posts from people on the social web that people on {domain} follow.",values:{domain:u.i}})),timelineId:`public${l?":remote":""}${s?":media":""}`,onLoadMore:this.handleLoadMore,trackScroll:!a,scrollKey:`public_timeline-${t}`,emptyMessage:Object(o.a)(c.a,{id:"empty_column.public",defaultMessage:"There is nothing here! Write something publicly, or manually follow users from other servers to fill it up"}),bindToDocument:!i}),Object(o.a)(r.a,{},void 0,Object(o.a)("title",{},void 0,e.formatMessage(C.title)),Object(o.a)("meta",{name:"robots",content:"noindex"}))]})}}_.contextTypes={router:s.a.object,identity:s.a.object},_.defaultProps={onlyMedia:!1};t.default=Object(m.connect)(((e,t)=>{let{columnId:n}=t;const o=n,i=e.getIn(["settings","columns"]),s=i.findIndex((e=>e.get("uuid")===o)),l=n&&s>=0?i.get(s).getIn(["params","other","onlyMedia"]):e.getIn(["settings","public","other","onlyMedia"]),a=n&&s>=0?i.get(s).getIn(["params","other","onlyRemote"]):e.getIn(["settings","public","other","onlyRemote"]),c=e.getIn(["timelines",`public${a?":remote":""}${l?":media":""}`]);return{hasUnread:!!c&&c.get("unread")>0,onlyMedia:l,onlyRemote:a}}))(Object(d.c)(_))}}]);
//# sourceMappingURL=public_timeline-da464eb2f0eb10ea2805.chunk.js.map