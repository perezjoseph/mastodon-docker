(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{1109:function(e,t,s){"use strict";s.r(t);var a=s(0),o=s(45),i=s.n(o),r=s(1),n=s.n(r),d=s(7),c=s(19),u=s(39),p=s(82),h=s(16),l=s.n(h),b=s(18),m=s(11),f=s(22),j=s(240),O=s(15),I=s(150),g=s(241),M=s(242),v=s(1075);const w=Object(d.d)({refresh:{id:"refresh",defaultMessage:"Refresh"}});class y extends b.a{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.dispatch(Object(f.I)(this.props.params.statusId))},this.handleLoadMore=i()((()=>{this.props.dispatch(Object(f.F)(this.props.params.statusId))}),300,{leading:!0})}UNSAFE_componentWillMount(){this.props.accountIds||this.props.dispatch(Object(f.I)(this.props.params.statusId))}render(){const{intl:e,accountIds:t,hasMore:s,isLoading:o,multiColumn:i}=this.props;if(!t)return Object(a.a)(v.a,{},void 0,Object(a.a)(I.a,{}));const r=Object(a.a)(c.a,{id:"empty_column.favourites",defaultMessage:"No one has favorited this post yet. When someone does, they will show up here."});return Object(a.a)(v.a,{bindToDocument:!i},void 0,Object(a.a)(j.a,{showBackButton:!0,multiColumn:i,extraButton:Object(a.a)("button",{type:"button",className:"column-header__button",title:e.formatMessage(w.refresh),"aria-label":e.formatMessage(w.refresh),onClick:this.handleRefresh},void 0,Object(a.a)(O.a,{id:"refresh"}))}),Object(a.a)(g.a,{scrollKey:"favourites",onLoadMore:this.handleLoadMore,hasMore:s,isLoading:o,emptyMessage:r,bindToDocument:!i},void 0,t.map((e=>Object(a.a)(M.a,{id:e,withNote:!1},e)))),Object(a.a)(p.a,{},void 0,Object(a.a)("meta",{name:"robots",content:"noindex"})))}}y.propTypes={params:n.a.object.isRequired,dispatch:n.a.func.isRequired,accountIds:l.a.list,hasMore:n.a.bool,isLoading:n.a.bool,multiColumn:n.a.bool,intl:n.a.object.isRequired},t.default=Object(m.connect)(((e,t)=>({accountIds:e.getIn(["user_lists","favourited_by",t.params.statusId,"items"]),hasMore:!!e.getIn(["user_lists","favourited_by",t.params.statusId,"next"]),isLoading:e.getIn(["user_lists","favourited_by",t.params.statusId,"isLoading"],!0)})))(Object(u.c)(y))}}]);
//# sourceMappingURL=favourites-a8ef1db43a6246058223.chunk.js.map