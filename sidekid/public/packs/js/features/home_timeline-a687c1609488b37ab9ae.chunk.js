(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{1228:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),o=n(2),c=n(7),r=n(19),l=n(39),d=n(9),u=n.n(d),m=n(82),h=n(3),p=n(11),g=n(34),b=n(53),j=n(173),v=n(1092),_=n(16),O=n.n(_),f=n(18),M=n(408),x=n.n(M),y=n(66),R=n.n(y),w=n(256),k=n.n(w),C=n(247),I=n(255),N=n(15),A=n(23),q=n(374),P=n(109),L=n(5),S=n(74),D=n(4);const E=Object(c.d)({close:{id:"lightbox.close",defaultMessage:"Close"},previous:{id:"lightbox.previous",defaultMessage:"Previous"},next:{id:"lightbox.next",defaultMessage:"Next"}});class T extends f.a{constructor(){super(...arguments),this.setRef=e=>{this.node=e},this.onMentionClick=(e,t)=>{!this.context.router||0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),this.context.router.history.push(`/@${e.get("acct")}`))},this.onHashtagClick=(e,t)=>{e=e.replace(/^#/,""),!this.context.router||0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),this.context.router.history.push(`/tags/${e}`))},this.onStatusClick=(e,t)=>{!this.context.router||0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),this.context.router.history.push(`/@${e.getIn(["account","acct"])}/${e.get("id")}`))},this.handleMouseEnter=e=>{let{currentTarget:t}=e;if(L.a)return;const n=t.querySelectorAll(".custom-emoji");for(var s=0;s<n.length;s++){let e=n[s];e.src=e.getAttribute("data-original")}},this.handleMouseLeave=e=>{let{currentTarget:t}=e;if(L.a)return;const n=t.querySelectorAll(".custom-emoji");for(var s=0;s<n.length;s++){let e=n[s];e.src=e.getAttribute("data-static")}}}componentDidMount(){this._updateLinks()}componentDidUpdate(){this._updateLinks()}_updateLinks(){const e=this.node;if(!e)return;const t=e.querySelectorAll("a");for(var n=0;n<t.length;++n){let e=t[n];if(e.classList.contains("status-link"))continue;e.classList.add("status-link");let s=this.props.announcement.get("mentions").find((t=>e.href===t.get("url")));if(s)e.addEventListener("click",this.onMentionClick.bind(this,s),!1),e.setAttribute("title",s.get("acct"));else if("#"===e.textContent[0]||e.previousSibling&&e.previousSibling.textContent&&"#"===e.previousSibling.textContent[e.previousSibling.textContent.length-1])e.addEventListener("click",this.onHashtagClick.bind(this,e.text),!1);else{let t=this.props.announcement.get("statuses").find((t=>e.href===t.get("url")));t&&e.addEventListener("click",this.onStatusClick.bind(this,t),!1),e.setAttribute("title",e.href),e.classList.add("unhandled-link")}e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")}}render(){const{announcement:e}=this.props;return Object(D.jsx)("div",{className:"announcements__item__content translate",ref:this.setRef,dangerouslySetInnerHTML:{__html:e.get("contentHtml")},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave})}}T.contextTypes={router:i.a.object},T.propTypes={announcement:O.a.map.isRequired};class z extends o.PureComponent{render(){const{emoji:e,emojiMap:t,hovered:n}=this.props;if(P.a[e]){const{filename:t,shortCode:n}=P.a[this.props.emoji],a=n?`:${n}:`:"";return Object(s.a)("img",{draggable:"false",className:"emojione",alt:e,title:a,src:`${S.a}/emoji/${t}.svg`})}if(t.get(e)){const a=L.a||n?t.getIn([e,"url"]):t.getIn([e,"static_url"]),i=`:${e}:`;return Object(s.a)("img",{draggable:"false",className:"emojione custom-emoji",alt:i,title:i,src:a})}return null}}class F extends f.a{constructor(){super(...arguments),this.state={hovered:!1},this.handleClick=()=>{const{reaction:e,announcementId:t,addReaction:n,removeReaction:s}=this.props;e.get("me")?s(t,e.get("name")):n(t,e.get("name"))},this.handleMouseEnter=()=>this.setState({hovered:!0}),this.handleMouseLeave=()=>this.setState({hovered:!1})}render(){const{reaction:e}=this.props;let t=e.get("name");return P.a[t]&&(t=P.a[t].shortCode),Object(s.a)("button",{className:u()("reactions-bar__item",{active:e.get("me")}),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,title:`:${t}:`,style:this.props.style},void 0,Object(s.a)("span",{className:"reactions-bar__item__emoji"},void 0,Object(s.a)(z,{hovered:this.state.hovered,emoji:e.get("name"),emojiMap:this.props.emojiMap})),Object(s.a)("span",{className:"reactions-bar__item__count"},void 0,Object(s.a)(I.a,{value:e.get("count")})))}}F.propTypes={announcementId:i.a.string.isRequired,reaction:O.a.map.isRequired,addReaction:i.a.func.isRequired,removeReaction:i.a.func.isRequired,emojiMap:O.a.map.isRequired,style:i.a.object};class Y extends f.a{constructor(){super(...arguments),this.handleEmojiPick=e=>{const{addReaction:t,announcementId:n}=this.props;t(n,e.native.replace(/:/g,""))}}willEnter(){return{scale:L.s?1:0}}willLeave(){return{scale:L.s?0:R()(0,{stiffness:170,damping:26})}}render(){const{reactions:e}=this.props,t=e.filter((e=>e.get("count")>0)),n=t.map((e=>({key:e.get("name"),data:e,style:{scale:L.s?1:R()(1,{stiffness:150,damping:13})}}))).toArray();return Object(s.a)(x.a,{styles:n,willEnter:this.willEnter,willLeave:this.willLeave},void 0,(e=>Object(s.a)("div",{className:u()("reactions-bar",{"reactions-bar--empty":t.isEmpty()})},void 0,e.map((e=>{let{key:t,data:n,style:a}=e;return Object(s.a)(F,{reaction:n,style:{transform:`scale(${a.scale})`,position:a.scale<.5?"absolute":"static"},announcementId:this.props.announcementId,addReaction:this.props.addReaction,removeReaction:this.props.removeReaction,emojiMap:this.props.emojiMap},t)})),t.size<8&&Object(s.a)(q.a,{onPickEmoji:this.handleEmojiPick,button:Object(s.a)(N.a,{id:"plus"})}))))}}Y.propTypes={announcementId:i.a.string.isRequired,reactions:O.a.list.isRequired,addReaction:i.a.func.isRequired,removeReaction:i.a.func.isRequired,emojiMap:O.a.map.isRequired};class $ extends f.a{constructor(){super(...arguments),this.state={unread:!this.props.announcement.get("read")}}componentDidUpdate(){const{selected:e,announcement:t}=this.props;e||this.state.unread===!t.get("read")||this.setState({unread:!t.get("read")})}render(){const{announcement:e}=this.props,{unread:t}=this.state,n=e.get("starts_at")&&new Date(e.get("starts_at")),a=e.get("ends_at")&&new Date(e.get("ends_at")),i=new Date,o=n&&a,l=o&&n.getFullYear()===a.getFullYear()&&a.getFullYear()===i.getFullYear(),d=o&&n.getDate()===a.getDate()&&n.getMonth()===a.getMonth()&&n.getFullYear()===a.getFullYear(),u=e.get("all_day");return Object(s.a)("div",{className:"announcements__item"},void 0,Object(s.a)("strong",{className:"announcements__item__range"},void 0,Object(s.a)(r.a,{id:"announcement.announcement",defaultMessage:"Announcement"}),o&&Object(s.a)("span",{},void 0," · ",Object(s.a)(c.a,{value:n,hour12:!1,year:l||n.getFullYear()===i.getFullYear()?void 0:"numeric",month:"short",day:"2-digit",hour:u?void 0:"2-digit",minute:u?void 0:"2-digit"})," - ",Object(s.a)(c.a,{value:a,hour12:!1,year:l||a.getFullYear()===i.getFullYear()?void 0:"numeric",month:d?void 0:"short",day:d?void 0:"2-digit",hour:u?void 0:"2-digit",minute:u?void 0:"2-digit"}))),Object(s.a)(T,{announcement:e}),Object(s.a)(Y,{reactions:e.get("reactions"),announcementId:e.get("id"),addReaction:this.props.addReaction,removeReaction:this.props.removeReaction,emojiMap:this.props.emojiMap}),t&&Object(s.a)("span",{className:"announcements__item__unread"}))}}$.propTypes={announcement:O.a.map.isRequired,emojiMap:O.a.map.isRequired,addReaction:i.a.func.isRequired,removeReaction:i.a.func.isRequired,intl:i.a.object.isRequired,selected:i.a.bool};class H extends f.a{constructor(){super(...arguments),this.state={index:0},this.handleChangeIndex=e=>{this.setState({index:e%this.props.announcements.size})},this.handleNextClick=()=>{this.setState({index:(this.state.index+1)%this.props.announcements.size})},this.handlePrevClick=()=>{this.setState({index:(this.props.announcements.size+this.state.index-1)%this.props.announcements.size})}}static getDerivedStateFromProps(e,t){return e.announcements.size>0&&t.index>=e.announcements.size?{index:e.announcements.size-1}:null}componentDidMount(){this._markAnnouncementAsRead()}componentDidUpdate(){this._markAnnouncementAsRead()}_markAnnouncementAsRead(){const{dismissAnnouncement:e,announcements:t}=this.props,{index:n}=this.state,s=t.get(t.size-1-n);s.get("read")||e(s.get("id"))}render(){const{announcements:e,intl:t}=this.props,{index:n}=this.state;return e.isEmpty()?null:Object(s.a)("div",{className:"announcements"},void 0,Object(s.a)("img",{className:"announcements__mastodon",alt:"",draggable:"false",src:L.n||C.default}),Object(s.a)("div",{className:"announcements__container"},void 0,Object(s.a)(k.a,{animateHeight:!0,animateTransitions:!L.s,index:n,onChangeIndex:this.handleChangeIndex},void 0,e.map(((e,a)=>Object(s.a)($,{announcement:e,emojiMap:this.props.emojiMap,addReaction:this.props.addReaction,removeReaction:this.props.removeReaction,intl:t,selected:n===a,disabled:L.f},e.get("id")))).reverse()),e.size>1&&Object(s.a)("div",{className:"announcements__pagination"},void 0,Object(s.a)(A.a,{disabled:1===e.size,title:t.formatMessage(E.previous),icon:"chevron-left",onClick:this.handlePrevClick,size:13}),Object(s.a)("span",{},void 0,n+1," / ",e.size),Object(s.a)(A.a,{disabled:1===e.size,title:t.formatMessage(E.next),icon:"chevron-right",onClick:this.handleNextClick,size:13}))))}}H.propTypes={announcements:O.a.list,emojiMap:O.a.map.isRequired,dismissAnnouncement:i.a.func.isRequired,addReaction:i.a.func.isRequired,removeReaction:i.a.func.isRequired,intl:i.a.object.isRequired};var K=Object(l.c)(H);const U=Object(g.a)([e=>e.get("custom_emojis")],(e=>e.reduce(((e,t)=>e.set(t.get("shortcode"),t)),Object(h.Map)())));var B=Object(p.connect)((e=>({announcements:e.getIn(["announcements","items"]),emojiMap:U(e)})),(e=>({dismissAnnouncement:t=>e(Object(b.o)(t)),addReaction:(t,n)=>e(Object(b.m)(t,n)),removeReaction:(t,n)=>e(Object(b.q)(t,n))})))(K),J=n(137),W=n(21),G=n(149),Q=n(240),V=n(1084),X=n(52),Z=n(38),ee=n(1083);const te=()=>{const e=Object(X.c)((e=>e.settings.get("home"))),t=Object(X.b)(),n=Object(o.useCallback)(((e,n)=>{t(Object(Z.c)(["home",...e],n))}),[t]);return Object(s.a)("div",{},void 0,Object(s.a)("span",{className:"column-settings__section"},void 0,Object(s.a)(r.a,{id:"home.column_settings.basic",defaultMessage:"Basic"})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(ee.a,{prefix:"home_timeline",settings:e,settingPath:["shows","reblog"],onChange:n,label:Object(s.a)(r.a,{id:"home.column_settings.show_reblogs",defaultMessage:"Show boosts"})})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(ee.a,{prefix:"home_timeline",settings:e,settingPath:["shows","reply"],onChange:n,label:Object(s.a)(r.a,{id:"home.column_settings.show_replies",defaultMessage:"Show replies"})})))},ne=()=>Object(s.a)("div",{className:"warning-banner"},void 0,Object(s.a)("div",{className:"warning-banner__message"},void 0,Object(s.a)("h1",{},void 0,Object(s.a)(r.a,{id:"home.pending_critical_update.title",defaultMessage:"Critical security update available!"})),Object(s.a)("p",{},void 0,Object(s.a)(r.a,{id:"home.pending_critical_update.body",defaultMessage:"Please update your Mastodon server as soon as possible!"})," ",Object(s.a)("a",{href:"/admin/software_updates"},void 0,Object(s.a)(r.a,{id:"home.pending_critical_update.link",defaultMessage:"See updates"})))));var se=n(90),ae=n(252),ie=n(1082);const oe=()=>Object(s.a)(ie.a,{id:"home.explore_prompt"},void 0,Object(s.a)("img",{src:ae.default,alt:"",className:"dismissable-banner__background-image"}),Object(s.a)("h1",{},void 0,Object(s.a)(r.a,{id:"home.explore_prompt.title",defaultMessage:"This is your home base within Mastodon."})),Object(s.a)("p",{},void 0,Object(s.a)(r.a,{id:"home.explore_prompt.body",defaultMessage:"Your home feed will have a mix of posts from the hashtags you've chosen to follow, the people you've chosen to follow, and the posts they boost. If that feels too quiet, you may want to:"})),Object(s.a)("div",{className:"dismissable-banner__message__wrapper"},void 0,Object(s.a)("div",{className:"dismissable-banner__message__actions"},void 0,Object(s.a)(se.a,{to:"/explore",className:"button"},void 0,Object(s.a)(r.a,{id:"home.actions.go_to_explore",defaultMessage:"See what's trending"})),Object(s.a)(se.a,{to:"/explore/suggestions",className:"button button-tertiary"},void 0,Object(s.a)(r.a,{id:"home.actions.go_to_suggestions",defaultMessage:"Find people to follow"}))))),ce=Object(c.d)({title:{id:"column.home",defaultMessage:"Home"},show_announcements:{id:"home.show_announcements",defaultMessage:"Show announcements"},hide_announcements:{id:"home.hide_announcements",defaultMessage:"Hide announcements"}}),re=Object(g.a)([e=>e.getIn(["timelines","home","items"],Object(h.List)()),e=>e.getIn(["timelines","home","pendingItems"],Object(h.List)()),e=>e.get("statuses")],((e,t,n)=>{const s=(t.size>0?t:e).filter((e=>null!==e)).map((e=>n.get(e))).filter((e=>(null==e?void 0:e.get("account"))!==L.o)).take(20);if(s.isEmpty())return{gap:0,newest:new Date(0)};const a=s.map((e=>e.get("created_at",0))),i=new Date(a.min()),o=new Date(a.max());return{gap:(o-i)/(1e3*(s.size+1)),newest:o}})),le=Object(g.a)([e=>e.getIn(["timelines","home","isLoading"]),e=>e.getIn(["timelines","home","isPartial"]),re],((e,t,n)=>!e&&!t&&(n.gap>1800||Date.now()-n.newest>36e5)));class de extends o.PureComponent{constructor(){super(...arguments),this.handlePin=()=>{const{columnId:e,dispatch:t}=this.props;t(e?Object(J.h)(e):Object(J.e)("HOME",{}))},this.handleMove=e=>{const{columnId:t,dispatch:n}=this.props;n(Object(J.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleLoadMore=e=>{this.props.dispatch(Object(W.u)({maxId:e}))},this.handleToggleAnnouncementsClick=e=>{e.stopPropagation(),this.props.dispatch(Object(b.r)())}}componentDidMount(){setTimeout((()=>this.props.dispatch(Object(b.p)())),700),this._checkIfReloadNeeded(!1,this.props.isPartial)}componentDidUpdate(e){this._checkIfReloadNeeded(e.isPartial,this.props.isPartial)}componentWillUnmount(){this._stopPolling()}_checkIfReloadNeeded(e,t){const{dispatch:n}=this.props;e!==t&&(!e&&t?this.polling=setInterval((()=>{n(Object(W.u)())}),3e3):e&&!t&&this._stopPolling())}_stopPolling(){this.polling&&(clearInterval(this.polling),this.polling=null)}render(){const{intl:e,hasUnread:t,columnId:n,multiColumn:a,tooSlow:i,hasAnnouncements:o,unreadAnnouncements:c,showAnnouncements:l}=this.props,d=!!n,{signedIn:h}=this.context.identity,p=[];let g;return o&&(g=Object(s.a)("button",{type:"button",className:u()("column-header__button",{active:l}),title:e.formatMessage(l?ce.hide_announcements:ce.show_announcements),"aria-label":e.formatMessage(l?ce.hide_announcements:ce.show_announcements),onClick:this.handleToggleAnnouncementsClick},void 0,Object(s.a)(j.a,{id:"bullhorn",count:c}))),L.c&&p.push(Object(s.a)(ne,{},"critical-update-banner")),i&&p.push(Object(s.a)(oe,{},"explore-prompt")),Object(D.jsxs)(G.a,{bindToDocument:!a,ref:this.setRef,label:e.formatMessage(ce.title),children:[Object(s.a)(Q.a,{icon:"home",active:t,title:e.formatMessage(ce.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:d,multiColumn:a,extraButton:g,appendContent:o&&l&&Object(s.a)(B,{})},void 0,Object(s.a)(te,{})),h?Object(s.a)(V.a,{prepend:p,alwaysPrepend:!0,trackScroll:!d,scrollKey:`home_timeline-${n}`,onLoadMore:this.handleLoadMore,timelineId:"home",emptyMessage:Object(s.a)(r.a,{id:"empty_column.home",defaultMessage:"Your home timeline is empty! Follow more people to fill it up."}),bindToDocument:!a}):Object(s.a)(v.a,{}),Object(s.a)(m.a,{},void 0,Object(s.a)("title",{},void 0,e.formatMessage(ce.title)),Object(s.a)("meta",{name:"robots",content:"noindex"}))]})}}de.contextTypes={identity:i.a.object};t.default=Object(p.connect)((e=>({hasUnread:e.getIn(["timelines","home","unread"])>0,isPartial:e.getIn(["timelines","home","isPartial"]),hasAnnouncements:!e.getIn(["announcements","items"]).isEmpty(),unreadAnnouncements:e.getIn(["announcements","items"]).count((e=>!e.get("read"))),showAnnouncements:e.getIn(["announcements","show"]),tooSlow:le(e)})))(Object(l.c)(de))}}]);
//# sourceMappingURL=home_timeline-a687c1609488b37ab9ae.chunk.js.map