(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{1108:function(e,s,t){"use strict";t.r(s);var a=t(0),o=t(45),i=t.n(o),r=t(1),n=t.n(r),d=t(7),c=t(19),u=t(39),p=t(82),h=t(16),l=t.n(h),b=t(18),m=t(11),g=t(15),j=t(22),O=t(240),f=t(150),I=t(241),M=t(242),w=t(1075);const y=Object(d.d)({refresh:{id:"refresh",defaultMessage:"Refresh"}});class _ extends b.a{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.dispatch(Object(j.J)(this.props.params.statusId))},this.handleLoadMore=i()((()=>{this.props.dispatch(Object(j.G)(this.props.params.statusId))}),300,{leading:!0})}UNSAFE_componentWillMount(){this.props.accountIds||this.props.dispatch(Object(j.J)(this.props.params.statusId))}render(){const{intl:e,accountIds:s,hasMore:t,isLoading:o,multiColumn:i}=this.props;if(!s)return Object(a.a)(w.a,{},void 0,Object(a.a)(f.a,{}));const r=Object(a.a)(c.a,{id:"status.reblogs.empty",defaultMessage:"No one has boosted this post yet. When someone does, they will show up here."});return Object(a.a)(w.a,{bindToDocument:!i},void 0,Object(a.a)(O.a,{showBackButton:!0,multiColumn:i,extraButton:Object(a.a)("button",{type:"button",className:"column-header__button",title:e.formatMessage(y.refresh),"aria-label":e.formatMessage(y.refresh),onClick:this.handleRefresh},void 0,Object(a.a)(g.a,{id:"refresh"}))}),Object(a.a)(I.a,{scrollKey:"reblogs",onLoadMore:this.handleLoadMore,hasMore:t,isLoading:o,emptyMessage:r,bindToDocument:!i},void 0,s.map((e=>Object(a.a)(M.a,{id:e,withNote:!1},e)))),Object(a.a)(p.a,{},void 0,Object(a.a)("meta",{name:"robots",content:"noindex"})))}}_.propTypes={params:n.a.object.isRequired,dispatch:n.a.func.isRequired,accountIds:l.a.list,hasMore:n.a.bool,isLoading:n.a.bool,multiColumn:n.a.bool,intl:n.a.object.isRequired},s.default=Object(m.connect)(((e,s)=>({accountIds:e.getIn(["user_lists","reblogged_by",s.params.statusId,"items"]),hasMore:!!e.getIn(["user_lists","reblogged_by",s.params.statusId,"next"]),isLoading:e.getIn(["user_lists","reblogged_by",s.params.statusId,"isLoading"],!0)})))(Object(u.c)(_))}}]);
//# sourceMappingURL=reblogs-79efbd48598d82f82f6c.chunk.js.map