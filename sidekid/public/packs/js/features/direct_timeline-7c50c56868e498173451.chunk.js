(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1229:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s(2),n=s(7),i=s(19),r=s(39),c=s(82),d=s(11),l=s(137),h=s(79),u=s(244),p=s(149),m=s(240),g=s(45),v=s.n(g),b=s(1),M=s.n(b),j=s(16),f=s.n(j),O=s(18),_=s(241),y=s(12),x=s(20),w=s(26),k=s(36),C=s(9),I=s.n(C),R=s(90),L=s(123),T=s(172),D=s(5),N=s(37);class S extends a.PureComponent{renderItem(e,t,s){const{animate:a}=this.props;let n=50,i=100,r="auto",c="auto",d="auto",l="auto";1===t&&(n=100),(4===t||3===t&&s>0)&&(i=50),2===t?0===s?l="1px":c="1px":3===t?(0===s?l="1px":s>0&&(c="1px"),1===s?d="1px":s>1&&(r="1px")):4===t&&(0!==s&&2!==s||(l="1px"),1!==s&&3!==s||(c="1px"),s<2?d="1px":r="1px");const h={left:c,top:r,right:l,bottom:d,width:`${n}%`,height:`${i}%`};return Object(o.a)("div",{style:h},e.get("id"),Object(o.a)(N.a,{account:e,animate:a}))}render(){const{accounts:e,size:t}=this.props;return Object(o.a)("div",{className:"account__avatar-composite",style:{width:`${t}px`,height:`${t}px`}},void 0,e.take(4).map(((t,s)=>this.renderItem(t,Math.min(e.size,4),s))),e.size>4&&Object(o.a)("span",{className:"account__avatar-composite__label"},void 0,"+",e.size-4))}}S.defaultProps={animate:D.a};var q=s(23),H=s(73),U=s(121),P=s(124);const A=Object(n.d)({more:{id:"status.more",defaultMessage:"More"},open:{id:"conversation.open",defaultMessage:"View conversation"},reply:{id:"status.reply",defaultMessage:"Reply"},markAsRead:{id:"conversation.mark_as_read",defaultMessage:"Mark as read"},delete:{id:"conversation.delete",defaultMessage:"Delete conversation"},muteConversation:{id:"status.mute_conversation",defaultMessage:"Mute conversation"},unmuteConversation:{id:"status.unmute_conversation",defaultMessage:"Unmute conversation"}});class $ extends O.a{constructor(){super(...arguments),this.handleMouseEnter=e=>{let{currentTarget:t}=e;if(D.a)return;const s=t.querySelectorAll(".custom-emoji");for(var o=0;o<s.length;o++){let e=s[o];e.src=e.getAttribute("data-original")}},this.handleMouseLeave=e=>{let{currentTarget:t}=e;if(D.a)return;const s=t.querySelectorAll(".custom-emoji");for(var o=0;o<s.length;o++){let e=s[o];e.src=e.getAttribute("data-static")}},this.handleClick=()=>{if(!this.context.router)return;const{lastStatus:e,unread:t,markRead:s}=this.props;t&&s(),this.context.router.history.push(`/@${e.getIn(["account","acct"])}/${e.get("id")}`)},this.handleMarkAsRead=()=>{this.props.markRead()},this.handleReply=()=>{this.props.reply(this.props.lastStatus,this.context.router.history)},this.handleDelete=()=>{this.props.delete()},this.handleHotkeyMoveUp=()=>{this.props.onMoveUp(this.props.conversationId)},this.handleHotkeyMoveDown=()=>{this.props.onMoveDown(this.props.conversationId)},this.handleConversationMute=()=>{this.props.onMute(this.props.lastStatus)},this.handleShowMore=()=>{this.props.onToggleHidden(this.props.lastStatus)}}render(){const{accounts:e,lastStatus:t,unread:s,scrollKey:a,intl:n}=this.props;if(null===t)return null;const r=[{text:n.formatMessage(A.open),action:this.handleClick},null];r.push({text:n.formatMessage(t.get("muted")?A.unmuteConversation:A.muteConversation),action:this.handleConversationMute}),s&&(r.push({text:n.formatMessage(A.markAsRead),action:this.handleMarkAsRead}),r.push(null)),r.push({text:n.formatMessage(A.delete),action:this.handleDelete});const c=e.map((e=>Object(o.a)(R.a,{to:`/@${e.get("acct")}`,title:e.get("acct")},e.get("id"),Object(o.a)("bdi",{},void 0,Object(o.a)("strong",{className:"display-name__html",dangerouslySetInnerHTML:{__html:e.get("display_name_html")}}))))).reduce(((e,t)=>[e,", ",t])),d={reply:this.handleReply,open:this.handleClick,moveUp:this.handleHotkeyMoveUp,moveDown:this.handleHotkeyMoveDown,toggleHidden:this.handleShowMore};return Object(o.a)(L.HotKeys,{handlers:d},void 0,Object(o.a)("div",{className:I()("conversation focusable muted",{"conversation--unread":s}),tabIndex:0},void 0,Object(o.a)("div",{className:"conversation__avatar",onClick:this.handleClick,role:"presentation"},void 0,Object(o.a)(S,{accounts:e,size:48})),Object(o.a)("div",{className:"conversation__content"},void 0,Object(o.a)("div",{className:"conversation__content__info"},void 0,Object(o.a)("div",{className:"conversation__content__relative-time"},void 0,s&&Object(o.a)("span",{className:"conversation__unread"})," ",Object(o.a)(H.a,{timestamp:t.get("created_at")})),Object(o.a)("div",{className:"conversation__content__names",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},void 0,Object(o.a)(i.a,{id:"conversation.with",defaultMessage:"With {names}",values:{names:Object(o.a)("span",{},void 0,c)}}))),Object(o.a)(U.a,{status:t,onClick:this.handleClick,expanded:!t.get("hidden"),onExpandedToggle:this.handleShowMore,collapsible:!0}),t.get("media_attachments").size>0&&Object(o.a)(T.a,{compact:!0,media:t.get("media_attachments")}),Object(o.a)("div",{className:"status__action-bar"},void 0,Object(o.a)(q.a,{className:"status__action-bar-button",title:n.formatMessage(A.reply),icon:"reply",onClick:this.handleReply}),Object(o.a)("div",{className:"status__action-bar-dropdown"},void 0,Object(o.a)(P.a,{scrollKey:a,status:t,items:r,icon:"ellipsis-h",size:18,direction:"right",title:n.formatMessage(A.more)}))))))}}$.contextTypes={router:M.a.object},$.propTypes={conversationId:M.a.string.isRequired,accounts:f.a.list.isRequired,lastStatus:f.a.map,unread:M.a.bool.isRequired,scrollKey:M.a.string,onMoveUp:M.a.func,onMoveDown:M.a.func,markRead:M.a.func.isRequired,delete:M.a.func.isRequired,intl:M.a.object.isRequired};var K=Object(r.c)($);const z=Object(n.d)({replyConfirm:{id:"confirmations.reply.confirm",defaultMessage:"Reply"},replyMessage:{id:"confirmations.reply.message",defaultMessage:"Replying now will overwrite the message you are currently composing. Are you sure you want to proceed?"}});var E=Object(r.c)(Object(d.connect)((()=>{const e=Object(k.i)();return(t,s)=>{let{conversationId:o}=s;const a=t.getIn(["conversations","items"]).find((e=>e.get("id")===o)),n=a.get("last_status",null);return{accounts:a.get("accounts").map((e=>t.getIn(["accounts",e],null))),unread:a.get("unread"),lastStatus:n&&e(t,{id:n})}}}),((e,t)=>{let{intl:s,conversationId:o}=t;return{markRead(){e(Object(h.k)(o))},reply(t,o){e(((a,n)=>{0!==n().getIn(["compose","text"]).trim().length?e(Object(x.b)({modalType:"CONFIRM",modalProps:{message:s.formatMessage(z.replyMessage),confirm:s.formatMessage(z.replyConfirm),onConfirm:()=>e(Object(y.xb)(t,o))}})):e(Object(y.xb)(t,o))}))},delete(){e(Object(h.i)(o))},onMute(t){t.get("muted")?e(Object(w.u)(t.get("id"))):e(Object(w.p)(t.get("id")))},onToggleHidden(t){t.get("hidden")?e(Object(w.q)(t.get("id"))):e(Object(w.o)(t.get("id")))}}}))(K)),V=s(4);class W extends O.a{constructor(){super(...arguments),this.getCurrentIndex=e=>this.props.conversations.findIndex((t=>t.get("id")===e)),this.handleMoveUp=e=>{const t=this.getCurrentIndex(e)-1;this._selectChild(t,!0)},this.handleMoveDown=e=>{const t=this.getCurrentIndex(e)+1;this._selectChild(t,!1)},this.setRef=e=>{this.node=e},this.handleLoadOlder=v()((()=>{const e=this.props.conversations.last();e&&e.get("last_status")&&this.props.onLoadMore(e.get("last_status"))}),300,{leading:!0})}_selectChild(e,t){const s=this.node.node,o=s.querySelector(`article:nth-of-type(${e+1}) .focusable`);o&&(t&&s.scrollTop>o.offsetTop?o.scrollIntoView(!0):!t&&s.scrollTop+s.clientHeight<o.offsetTop+o.offsetHeight&&o.scrollIntoView(!1),o.focus())}render(){const{conversations:e,isLoading:t,onLoadMore:s,...a}=this.props;return Object(V.jsx)(_.a,{...a,isLoading:t,showLoading:t&&e.isEmpty(),onLoadMore:s&&this.handleLoadOlder,ref:this.setRef,children:e.map((e=>Object(o.a)(E,{conversationId:e.get("id"),onMoveUp:this.handleMoveUp,onMoveDown:this.handleMoveDown,scrollKey:this.props.scrollKey},e.get("id"))))})}}W.propTypes={conversations:f.a.list.isRequired,scrollKey:M.a.string.isRequired,hasMore:M.a.bool,isLoading:M.a.bool,onLoadMore:M.a.func};var J=Object(d.connect)((e=>({conversations:e.getIn(["conversations","items"]),isLoading:e.getIn(["conversations","isLoading"],!0),hasMore:e.getIn(["conversations","hasMore"],!1)})),(e=>({onLoadMore:t=>e(Object(h.j)({maxId:t}))})))(W);const F=Object(n.d)({title:{id:"column.direct",defaultMessage:"Private mentions"}});class Y extends a.PureComponent{constructor(){super(...arguments),this.handlePin=()=>{const{columnId:e,dispatch:t}=this.props;t(e?Object(l.h)(e):Object(l.e)("DIRECT",{}))},this.handleMove=e=>{const{columnId:t,dispatch:s}=this.props;s(Object(l.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleLoadMore=e=>{this.props.dispatch(Object(h.j)({maxId:e}))}}componentDidMount(){const{dispatch:e}=this.props;e(Object(h.l)()),e(Object(h.j)()),this.disconnect=e(Object(u.b)())}componentWillUnmount(){this.props.dispatch(Object(h.m)()),this.disconnect&&(this.disconnect(),this.disconnect=null)}render(){const{intl:e,hasUnread:t,columnId:s,multiColumn:a}=this.props,n=!!s;return Object(V.jsxs)(p.a,{bindToDocument:!a,ref:this.setRef,label:e.formatMessage(F.title),children:[Object(o.a)(m.a,{icon:"at",active:t,title:e.formatMessage(F.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:n,multiColumn:a}),Object(o.a)(J,{trackScroll:!n,scrollKey:`direct_timeline-${s}`,timelineId:"direct",bindToDocument:!a,onLoadMore:this.handleLoadMore,prepend:Object(o.a)("div",{className:"follow_requests-unlocked_explanation"},void 0,Object(o.a)("span",{},void 0,Object(o.a)(i.a,{id:"compose_form.encryption_warning",defaultMessage:"Posts on Mastodon are not end-to-end encrypted. Do not share any dangerous information over Mastodon."})," ",Object(o.a)("a",{href:"/terms",target:"_blank"},void 0,Object(o.a)(i.a,{id:"compose_form.direct_message_warning_learn_more",defaultMessage:"Learn more"})))),alwaysPrepend:!0,emptyMessage:Object(o.a)(i.a,{id:"empty_column.direct",defaultMessage:"You don't have any private mentions yet. When you send or receive one, it will show up here."})}),Object(o.a)(c.a,{},void 0,Object(o.a)("title",{},void 0,e.formatMessage(F.title)),Object(o.a)("meta",{name:"robots",content:"noindex"}))]})}}t.default=Object(d.connect)()(Object(r.c)(Y))}}]);
//# sourceMappingURL=direct_timeline-7c50c56868e498173451.chunk.js.map