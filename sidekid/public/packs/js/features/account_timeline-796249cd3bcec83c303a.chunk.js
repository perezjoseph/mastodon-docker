(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1105:function(t,e,a){"use strict";a.r(e);var s=a(0),c=a(1),o=a.n(c),n=a(19),i=a(3),d=a(16),u=a.n(d),r=a(18),p=a(11),l=a(1089),g=a(102),b=a(5),m=a(153),h=a(36),I=a(10),O=a(191),j=a(21),f=a(243),w=a(150),y=a(245),M=a(1075),_=a(1090),$=a(1088);const L=Object(i.List)(),R=t=>{let{url:e}=t;return Object(s.a)(l.a,{url:e,resource:Object(s.a)(n.a,{id:"timeline_hint.resources.statuses",defaultMessage:"Older posts"})})};class U extends r.a{constructor(){super(...arguments),this.handleLoadMore=t=>{this.props.dispatch(Object(j.r)(this.props.accountId,{maxId:t,withReplies:this.props.withReplies,tagged:this.props.params.tagged}))}}_load(){const{accountId:t,withReplies:e,params:{tagged:a},dispatch:s}=this.props;s(Object(I.O)(t)),e||s(Object(j.p)(t,{tagged:a})),s(Object(O.d)(t)),s(Object(j.r)(t,{withReplies:e,tagged:a})),t===b.o&&s(Object(j.m)(`account:${b.o}`))}componentDidMount(){const{params:{acct:t},accountId:e,dispatch:a}=this.props;e?this._load():a(Object(I.U)(t))}componentDidUpdate(t){const{params:{acct:e,tagged:a},accountId:s,withReplies:c,dispatch:o}=this.props;t.accountId!==s&&s?this._load():t.params.acct!==e?o(Object(I.U)(e)):t.params.tagged!==a&&(c||o(Object(j.p)(s,{tagged:a})),o(Object(j.r)(s,{withReplies:c,tagged:a}))),t.accountId===b.o&&s!==b.o&&o(Object(j.o)(`account:${b.o}`))}componentWillUnmount(){const{dispatch:t,accountId:e}=this.props;e===b.o&&t(Object(j.o)(`account:${b.o}`))}render(){const{accountId:t,statusIds:e,featuredStatusIds:a,isLoading:c,hasMore:o,blockedBy:i,suspended:d,isAccount:u,hidden:r,multiColumn:p,remote:l,remoteUrl:b}=this.props;if(c&&e.isEmpty())return Object(s.a)(M.a,{},void 0,Object(s.a)(w.a,{}));if(!c&&!u)return Object(s.a)(g.a,{multiColumn:p,errorType:"routing"});let m;const h=d||i||r;m=d?Object(s.a)(n.a,{id:"empty_column.account_suspended",defaultMessage:"Account suspended"}):r?Object(s.a)(_.a,{accountId:t}):i?Object(s.a)(n.a,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}):l&&e.isEmpty()?Object(s.a)(R,{url:b}):Object(s.a)(n.a,{id:"empty_column.account_timeline",defaultMessage:"No posts found"});const I=l?Object(s.a)(R,{url:b}):null;return Object(s.a)(M.a,{},void 0,Object(s.a)(f.a,{multiColumn:p}),Object(s.a)(y.a,{prepend:Object(s.a)($.a,{accountId:this.props.accountId,hideTabs:h,tagged:this.props.params.tagged}),alwaysPrepend:!0,append:I,scrollKey:"account_timeline",statusIds:h?L:e,featuredStatusIds:a,isLoading:c,hasMore:!h&&o,onLoadMore:this.handleLoadMore,emptyMessage:m,bindToDocument:!p,timelineId:"account"}))}}U.propTypes={params:o.a.shape({acct:o.a.string,id:o.a.string,tagged:o.a.string}).isRequired,accountId:o.a.string,dispatch:o.a.func.isRequired,statusIds:u.a.list,featuredStatusIds:u.a.list,isLoading:o.a.bool,hasMore:o.a.bool,withReplies:o.a.bool,blockedBy:o.a.bool,isAccount:o.a.bool,suspended:o.a.bool,hidden:o.a.bool,remote:o.a.bool,remoteUrl:o.a.string,multiColumn:o.a.bool},e.default=Object(p.connect)(((t,e)=>{let{params:{acct:a,id:s,tagged:c},withReplies:o=!1}=e;const n=s||t.getIn(["accounts_map",Object(m.b)(a)]);if(null===n)return{isLoading:!1,isAccount:!1,statusIds:L};if(!n)return{isLoading:!0,statusIds:L};const d=o?`${n}:with_replies`:`${n}${c?`:${c}`:""}`;return{accountId:n,remote:!(t.getIn(["accounts",n,"acct"])===t.getIn(["accounts",n,"username"])),remoteUrl:t.getIn(["accounts",n,"url"]),isAccount:!!t.getIn(["accounts",n]),statusIds:t.getIn(["timelines",`account:${d}`,"items"],L),featuredStatusIds:o?Object(i.List)():t.getIn(["timelines",`account:${n}:pinned${c?`:${c}`:""}`,"items"],L),isLoading:t.getIn(["timelines",`account:${d}`,"isLoading"]),hasMore:t.getIn(["timelines",`account:${d}`,"hasMore"]),suspended:t.getIn(["accounts",n,"suspended"],!1),hidden:Object(h.b)(t,n),blockedBy:t.getIn(["relationships",n,"blocked_by"],!1)}}))(U)}}]);
//# sourceMappingURL=account_timeline-796249cd3bcec83c303a.chunk.js.map