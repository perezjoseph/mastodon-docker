(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{1111:function(e,t,o){"use strict";o.r(t);var a=o(0),s=o(45),n=o.n(s),i=o(1),d=o.n(i),c=o(7),l=o(19),h=o(39),r=o(82),g=o(16),u=o.n(g),p=o(18),m=o(11),b=o(72),w=o(240),j=o(151),f=o(241),y=o(1075);const M=Object(c.d)({heading:{id:"followed_tags",defaultMessage:"Followed hashtags"}});class O extends p.a{constructor(){super(...arguments),this.handleLoadMore=n()((()=>{this.props.dispatch(Object(b.l)())}),300,{leading:!0})}componentDidMount(){this.props.dispatch(Object(b.m)())}render(){const{intl:e,hashtags:t,isLoading:o,hasMore:s,multiColumn:n}=this.props,i=Object(a.a)(l.a,{id:"empty_column.followed_tags",defaultMessage:"You have not followed any hashtags yet. When you do, they will show up here."});return Object(a.a)(y.a,{bindToDocument:!n},void 0,Object(a.a)(w.a,{icon:"hashtag",title:e.formatMessage(M.heading),showBackButton:!0,multiColumn:n}),Object(a.a)(f.a,{scrollKey:"followed_tags",emptyMessage:i,hasMore:s,isLoading:o,onLoadMore:this.handleLoadMore,bindToDocument:!n},void 0,t.map((e=>Object(a.a)(j.c,{name:e.get("name"),to:`/tags/${e.get("name")}`,withGraph:!1,people:1*e.getIn(["history",0,"accounts"])+1*e.getIn(["history",1,"accounts"]),history:e.get("history").reverse().map((e=>e.get("uses"))).toArray()},e.get("name"))))),Object(a.a)(r.a,{},void 0,Object(a.a)("meta",{name:"robots",content:"noindex"})))}}O.propTypes={params:d.a.object.isRequired,dispatch:d.a.func.isRequired,intl:d.a.object.isRequired,hashtags:u.a.list,isLoading:d.a.bool,hasMore:d.a.bool,multiColumn:d.a.bool},t.default=Object(m.connect)((e=>({hashtags:e.getIn(["followed_tags","items"]),isLoading:e.getIn(["followed_tags","isLoading"],!0),hasMore:!!e.getIn(["followed_tags","next"])})))(Object(h.c)(O))}}]);
//# sourceMappingURL=followed_tags-e29d81eaab759e575207.chunk.js.map