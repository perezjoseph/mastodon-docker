(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1235:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),s=n.n(o),c=n(2),a=n(7),d=n(19),l=n(39),m=n(82),r=n(11),u=n(1082),h=n(5),p=n(137),b=n(244),y=n(21),g=n(149),M=n(240),j=n(1084),O=n(38),I=n(1083);class f extends c.PureComponent{render(){const{settings:e,onChange:t}=this.props;return Object(i.a)("div",{},void 0,Object(i.a)("div",{className:"column-settings__row"},void 0,Object(i.a)(I.a,{settings:e,settingPath:["other","onlyMedia"],onChange:t,label:Object(i.a)(d.a,{id:"community.column_settings.media_only",defaultMessage:"Media only"})})))}}var v=Object(l.c)(f);var C=Object(r.connect)(((e,t)=>{let{columnId:n}=t;const i=n,o=e.getIn(["settings","columns"]),s=o.findIndex((e=>e.get("uuid")===i));return{settings:i&&s>=0?o.get(s).get("params"):e.getIn(["settings","community"])}}),((e,t)=>{let{columnId:n}=t;return{onChange(t,i){e(n?Object(p.f)(n,t,i):Object(O.c)(["community",...t],i))}}}))(v),x=n(4);const _=Object(a.d)({title:{id:"column.community",defaultMessage:"Local timeline"}});class w extends c.PureComponent{constructor(){super(...arguments),this.handlePin=()=>{const{columnId:e,dispatch:t,onlyMedia:n}=this.props;t(e?Object(p.h)(e):Object(p.e)("COMMUNITY",{other:{onlyMedia:n}}))},this.handleMove=e=>{const{columnId:t,dispatch:n}=this.props;n(Object(p.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleLoadMore=e=>{const{dispatch:t,onlyMedia:n}=this.props;t(Object(y.s)({maxId:e,onlyMedia:n}))}}componentDidMount(){const{dispatch:e,onlyMedia:t}=this.props,{signedIn:n}=this.context.identity;e(Object(y.s)({onlyMedia:t})),n&&(this.disconnect=e(Object(b.a)({onlyMedia:t})))}componentDidUpdate(e){const{signedIn:t}=this.context.identity;if(e.onlyMedia!==this.props.onlyMedia){const{dispatch:e,onlyMedia:n}=this.props;this.disconnect&&this.disconnect(),e(Object(y.s)({onlyMedia:n})),t&&(this.disconnect=e(Object(b.a)({onlyMedia:n})))}}componentWillUnmount(){this.disconnect&&(this.disconnect(),this.disconnect=null)}render(){const{intl:e,hasUnread:t,columnId:n,multiColumn:o,onlyMedia:s}=this.props,c=!!n;return Object(x.jsxs)(g.a,{bindToDocument:!o,ref:this.setRef,label:e.formatMessage(_.title),children:[Object(i.a)(M.a,{icon:"users",active:t,title:e.formatMessage(_.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:c,multiColumn:o},void 0,Object(i.a)(C,{columnId:n})),Object(i.a)(j.a,{prepend:Object(i.a)(u.a,{id:"community_timeline"},void 0,Object(i.a)(d.a,{id:"dismissable_banner.community_timeline",defaultMessage:"These are the most recent public posts from people whose accounts are hosted by {domain}.",values:{domain:h.i}})),trackScroll:!c,scrollKey:`community_timeline-${n}`,timelineId:"community"+(s?":media":""),onLoadMore:this.handleLoadMore,emptyMessage:Object(i.a)(d.a,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"}),bindToDocument:!o}),Object(i.a)(m.a,{},void 0,Object(i.a)("title",{},void 0,e.formatMessage(_.title)),Object(i.a)("meta",{name:"robots",content:"noindex"}))]})}}w.contextTypes={router:s.a.object,identity:s.a.object},w.defaultProps={onlyMedia:!1};t.default=Object(r.connect)(((e,t)=>{let{columnId:n}=t;const i=n,o=e.getIn(["settings","columns"]),s=o.findIndex((e=>e.get("uuid")===i)),c=n&&s>=0?o.get(s).getIn(["params","other","onlyMedia"]):e.getIn(["settings","community","other","onlyMedia"]),a=e.getIn(["timelines","community"+(c?":media":"")]);return{hasUnread:!!a&&a.get("unread")>0,onlyMedia:c}}))(Object(l.c)(w))}}]);
//# sourceMappingURL=community_timeline-e73faefc654e4e08315c.chunk.js.map