(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1225:function(t,e,i){"use strict";i.r(e);var a=i(0),o=i(45),s=i.n(o),n=i(1),c=i.n(n),l=i(2),d=i(7),r=i(19),u=i(39),h=i(82),g=i(3),p=i(11),f=i(34),b=i(31),m=i(15),j=i(1092),O=i(137),v=i(68),_=i(30),M=i(149),w=i(240),C=i(371),N=i(241),P=i(38),x=i(25),y=i(23);const k=Object(d.d)({close:{id:"lightbox.close",defaultMessage:"Close"}});class I extends l.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.dispatch(Object(_.s)())},this.handleClose=()=>{this.props.dispatch(Object(P.c)(["notifications","dismissPermissionBanner"],!0))}}render(){const{intl:t}=this.props;return Object(a.a)("div",{className:"notifications-permission-banner"},void 0,Object(a.a)("div",{className:"notifications-permission-banner__close"},void 0,Object(a.a)(y.a,{icon:"times",onClick:this.handleClose,title:t.formatMessage(k.close)})),Object(a.a)("h2",{},void 0,Object(a.a)(r.a,{id:"notifications_permission_banner.title",defaultMessage:"Never miss a thing"})),Object(a.a)("p",{},void 0,Object(a.a)(r.a,{id:"notifications_permission_banner.how_to_control",defaultMessage:"To receive notifications when Mastodon isn't open, enable desktop notifications. You can control precisely which types of interactions generate desktop notifications through the {icon} button above once they're enabled.",values:{icon:Object(a.a)(m.a,{id:"sliders"})}})),Object(a.a)(x.a,{onClick:this.handleClick},void 0,Object(a.a)(r.a,{id:"notifications_permission_banner.enable",defaultMessage:"Enable desktop notifications"})))}}var S=Object(p.connect)()(Object(u.c)(I)),R=i(47),q=i(20),W=i(113),H=i(44);class T extends l.PureComponent{render(){return Object(a.a)("button",{className:"text-btn column-header__setting-btn",tabIndex:0,onClick:this.props.onClick},void 0,Object(a.a)(m.a,{id:"eraser"})," ",Object(a.a)(r.a,{id:"notifications.clear",defaultMessage:"Clear notifications"}))}}class F extends l.PureComponent{render(){return Object(a.a)("button",{className:"text-btn column-header__permission-btn",tabIndex:0,onClick:this.props.onClick},void 0,Object(a.a)(r.a,{id:"notifications.grant_permission",defaultMessage:"Grant permission."}))}}var D=i(1083);class U extends l.PureComponent{constructor(){super(...arguments),this.onPushChange=(t,e)=>{this.props.onChange(["push",...t],e)}}render(){const{settings:t,pushSettings:e,onChange:i,onClear:o,alertsEnabled:s,browserSupport:n,browserPermission:c,onRequestNotificationPermission:l}=this.props,d=Object(a.a)(r.a,{id:"notifications.column_settings.unread_notifications.highlight",defaultMessage:"Highlight unread notifications"}),u=Object(a.a)(r.a,{id:"notifications.column_settings.filter_bar.show_bar",defaultMessage:"Show filter bar"}),h=Object(a.a)(r.a,{id:"notifications.column_settings.filter_bar.advanced",defaultMessage:"Display all categories"}),g=Object(a.a)(r.a,{id:"notifications.column_settings.alert",defaultMessage:"Desktop notifications"}),p=Object(a.a)(r.a,{id:"notifications.column_settings.show",defaultMessage:"Show in column"}),f=Object(a.a)(r.a,{id:"notifications.column_settings.sound",defaultMessage:"Play sound"}),b=e.get("browserSupport")&&e.get("isSubscribed"),m=b&&Object(a.a)(r.a,{id:"notifications.column_settings.push",defaultMessage:"Push notifications"});return Object(a.a)("div",{},void 0,s&&n&&"denied"===c&&Object(a.a)("div",{className:"column-settings__row column-settings__row--with-margin"},void 0,Object(a.a)("span",{className:"warning-hint"},void 0,Object(a.a)(r.a,{id:"notifications.permission_denied",defaultMessage:"Desktop notifications are unavailable due to previously denied browser permissions request"}))),s&&n&&"default"===c&&Object(a.a)("div",{className:"column-settings__row column-settings__row--with-margin"},void 0,Object(a.a)("span",{className:"warning-hint"},void 0,Object(a.a)(r.a,{id:"notifications.permission_required",defaultMessage:"Desktop notifications are unavailable because the required permission has not been granted."})," ",Object(a.a)(F,{onClick:l}))),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(T,{onClick:o})),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-unread-markers"},void 0,Object(a.a)("span",{id:"notifications-unread-markers",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.unread_notifications.category",defaultMessage:"Unread notifications"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{id:"unread-notification-markers",prefix:"notifications",settings:t,settingPath:["showUnread"],onChange:i,label:d}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-filter-bar"},void 0,Object(a.a)("span",{id:"notifications-filter-bar",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.filter_bar.category",defaultMessage:"Quick filter bar"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{id:"show-filter-bar",prefix:"notifications",settings:t,settingPath:["quickFilter","show"],onChange:i,label:u}),Object(a.a)(D.a,{id:"show-filter-bar",prefix:"notifications",settings:t,settingPath:["quickFilter","advanced"],onChange:i,label:h}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-follow"},void 0,Object(a.a)("span",{id:"notifications-follow",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.follow",defaultMessage:"New followers:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","follow"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","follow"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","follow"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","follow"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-follow-request"},void 0,Object(a.a)("span",{id:"notifications-follow-request",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.follow_request",defaultMessage:"New follow requests:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","follow_request"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","follow_request"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","follow_request"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","follow_request"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-favourite"},void 0,Object(a.a)("span",{id:"notifications-favourite",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.favourite",defaultMessage:"Favorites:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","favourite"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","favourite"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","favourite"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","favourite"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-mention"},void 0,Object(a.a)("span",{id:"notifications-mention",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.mention",defaultMessage:"Mentions:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","mention"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","mention"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","mention"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","mention"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-reblog"},void 0,Object(a.a)("span",{id:"notifications-reblog",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.reblog",defaultMessage:"Boosts:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","reblog"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","reblog"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","reblog"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","reblog"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-poll"},void 0,Object(a.a)("span",{id:"notifications-poll",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.poll",defaultMessage:"Poll results:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","poll"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","poll"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","poll"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","poll"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-status"},void 0,Object(a.a)("span",{id:"notifications-status",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.status",defaultMessage:"New posts:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","status"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","status"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","status"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","status"],onChange:i,label:f}))),Object(a.a)("div",{role:"group","aria-labelledby":"notifications-update"},void 0,Object(a.a)("span",{id:"notifications-update",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.update",defaultMessage:"Edits:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","update"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","update"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","update"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","update"],onChange:i,label:f}))),(this.context.identity.permissions&H.d)===H.d&&Object(a.a)("div",{role:"group","aria-labelledby":"notifications-admin-sign-up"},void 0,Object(a.a)("span",{id:"notifications-status",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.admin.sign_up",defaultMessage:"New sign-ups:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","admin.sign_up"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","admin.sign_up"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","admin.sign_up"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","admin.sign_up"],onChange:i,label:f}))),(this.context.identity.permissions&H.c)===H.c&&Object(a.a)("div",{role:"group","aria-labelledby":"notifications-admin-report"},void 0,Object(a.a)("span",{id:"notifications-status",className:"column-settings__section"},void 0,Object(a.a)(r.a,{id:"notifications.column_settings.admin.report",defaultMessage:"New reports:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(D.a,{disabled:"denied"===c,prefix:"notifications_desktop",settings:t,settingPath:["alerts","admin.report"],onChange:i,label:g}),b&&Object(a.a)(D.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","admin.report"],onChange:this.onPushChange,label:m}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["shows","admin.report"],onChange:i,label:p}),Object(a.a)(D.a,{prefix:"notifications",settings:t,settingPath:["sounds","admin.report"],onChange:i,label:f}))))}}U.contextTypes={identity:c.a.object};const A=Object(d.d)({clearMessage:{id:"notifications.clear_confirmation",defaultMessage:"Are you sure you want to permanently clear all your notifications?"},clearConfirm:{id:"notifications.clear",defaultMessage:"Clear notifications"},permissionDenied:{id:"notifications.permission_denied_alert",defaultMessage:"Desktop notifications can't be enabled, as browser permission has been denied before"}});var B=Object(u.c)(Object(p.connect)((t=>({settings:t.getIn(["settings","notifications"]),pushSettings:t.get("push_notifications"),alertsEnabled:t.getIn(["settings","notifications","alerts"]).includes(!0),browserSupport:t.getIn(["notifications","browserSupport"]),browserPermission:t.getIn(["notifications","browserPermission"])})),((t,e)=>{let{intl:i}=e;return{onChange(e,i){"push"===e[0]?i&&void 0!==window.Notification&&"granted"!==Notification.permission?t(Object(_.s)((a=>{t("granted"===a?Object(W.changeAlerts)(e.slice(1),i):Object(R.e)({message:A.permissionDenied}))}))):t(Object(W.changeAlerts)(e.slice(1),i)):"quickFilter"===e[0]?(t(Object(P.c)(["notifications",...e],i)),t(Object(_.u)("all"))):"alerts"===e[0]&&i&&void 0!==window.Notification&&"granted"!==Notification.permission&&i&&void 0!==window.Notification&&"granted"!==Notification.permission?t(Object(_.s)((a=>{t("granted"===a?Object(P.c)(["notifications",...e],i):Object(R.e)({message:A.permissionDenied}))}))):t(Object(P.c)(["notifications",...e],i))},onClear(){t(Object(q.b)({modalType:"CONFIRM",modalProps:{message:i.formatMessage(A.clearMessage),confirm:i.formatMessage(A.clearConfirm),onConfirm:()=>t(Object(_.n)())}}))},onRequestNotificationPermission(){t(Object(_.s)())}}}))(U));const L=Object(d.d)({mentions:{id:"notifications.filter.mentions",defaultMessage:"Mentions"},favourites:{id:"notifications.filter.favourites",defaultMessage:"Favorites"},boosts:{id:"notifications.filter.boosts",defaultMessage:"Boosts"},polls:{id:"notifications.filter.polls",defaultMessage:"Poll results"},follows:{id:"notifications.filter.follows",defaultMessage:"Follows"},statuses:{id:"notifications.filter.statuses",defaultMessage:"Updates from people you follow"}});class z extends l.PureComponent{onClick(t){return()=>this.props.selectFilter(t)}render(){const{selectedFilter:t,advancedMode:e,intl:i}=this.props;return e?Object(a.a)("div",{className:"notification__filter-bar"},void 0,Object(a.a)("button",{className:"all"===t?"active":"",onClick:this.onClick("all")},void 0,Object(a.a)(r.a,{id:"notifications.filter.all",defaultMessage:"All"})),Object(a.a)("button",{className:"mention"===t?"active":"",onClick:this.onClick("mention"),title:i.formatMessage(L.mentions)},void 0,Object(a.a)(m.a,{id:"reply-all",fixedWidth:!0})),Object(a.a)("button",{className:"favourite"===t?"active":"",onClick:this.onClick("favourite"),title:i.formatMessage(L.favourites)},void 0,Object(a.a)(m.a,{id:"star",fixedWidth:!0})),Object(a.a)("button",{className:"reblog"===t?"active":"",onClick:this.onClick("reblog"),title:i.formatMessage(L.boosts)},void 0,Object(a.a)(m.a,{id:"retweet",fixedWidth:!0})),Object(a.a)("button",{className:"poll"===t?"active":"",onClick:this.onClick("poll"),title:i.formatMessage(L.polls)},void 0,Object(a.a)(m.a,{id:"tasks",fixedWidth:!0})),Object(a.a)("button",{className:"status"===t?"active":"",onClick:this.onClick("status"),title:i.formatMessage(L.statuses)},void 0,Object(a.a)(m.a,{id:"home",fixedWidth:!0})),Object(a.a)("button",{className:"follow"===t?"active":"",onClick:this.onClick("follow"),title:i.formatMessage(L.follows)},void 0,Object(a.a)(m.a,{id:"user-plus",fixedWidth:!0}))):Object(a.a)("div",{className:"notification__filter-bar"},void 0,Object(a.a)("button",{className:"all"===t?"active":"",onClick:this.onClick("all")},void 0,Object(a.a)(r.a,{id:"notifications.filter.all",defaultMessage:"All"})),Object(a.a)("button",{className:"mention"===t?"active":"",onClick:this.onClick("mention")},void 0,Object(a.a)(r.a,{id:"notifications.filter.mentions",defaultMessage:"Mentions"})))}}var K=Object(u.c)(z);var $=Object(p.connect)((t=>({selectedFilter:t.getIn(["settings","notifications","quickFilter","active"]),advancedMode:t.getIn(["settings","notifications","quickFilter","advanced"])})),(t=>({selectFilter(e){t(Object(_.u)(e))}})))(K),E=i(93),Y=i(12),G=i(22),J=i(26),V=i(5),Q=i(36),X=i(9),Z=i.n(X),tt=i(90),et=i(16),it=i.n(et),at=i(18),ot=i(123),st=i(242),nt=i(206),ct=i(10),lt=i(37),dt=i(51),rt=i(4);const ut=Object(d.d)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}});class ht extends at.a{render(){const{intl:t,hidden:e,account:i,onAuthorize:o,onReject:s}=this.props;return i?e?Object(rt.jsxs)(rt.Fragment,{children:[i.get("display_name"),i.get("username")]}):Object(a.a)("div",{className:"account"},void 0,Object(a.a)("div",{className:"account__wrapper"},void 0,Object(a.a)(tt.a,{className:"account__display-name",title:i.get("acct"),to:`/@${i.get("acct")}`},i.get("id"),Object(a.a)("div",{className:"account__avatar-wrapper"},void 0,Object(a.a)(lt.a,{account:i,size:36})),Object(a.a)(dt.a,{account:i})),Object(a.a)("div",{className:"account__relationship"},void 0,Object(a.a)(y.a,{title:t.formatMessage(ut.authorize),icon:"check",onClick:o}),Object(a.a)(y.a,{title:t.formatMessage(ut.reject),icon:"times",onClick:s})))):Object(a.a)("div",{})}}ht.propTypes={account:it.a.map.isRequired,onAuthorize:c.a.func.isRequired,onReject:c.a.func.isRequired,intl:c.a.object.isRequired};var gt=Object(u.c)(ht);var pt=Object(p.connect)((()=>{const t=Object(Q.e)();return(e,i)=>({account:t(e,i.id)})}),((t,e)=>{let{id:i}=e;return{onAuthorize(){t(Object(ct.J)(i))},onReject(){t(Object(ct.X)(i))}}}))(gt),ft=i(174),bt=i(73);const mt=Object(d.d)({openReport:{id:"report_notification.open",defaultMessage:"Open report"},other:{id:"report_notification.categories.other",defaultMessage:"Other"},spam:{id:"report_notification.categories.spam",defaultMessage:"Spam"},legal:{id:"report_notification.categories.legal",defaultMessage:"Legal"},violation:{id:"report_notification.categories.violation",defaultMessage:"Rule violation"}});class jt extends at.a{render(){const{intl:t,hidden:e,report:i,account:o}=this.props;return i?e?Object(rt.jsx)(rt.Fragment,{children:i.get("id")}):Object(a.a)("div",{className:"notification__report"},void 0,Object(a.a)("div",{className:"notification__report__avatar"},void 0,Object(a.a)(ft.a,{account:i.get("target_account"),friend:o})),Object(a.a)("div",{className:"notification__report__details"},void 0,Object(a.a)("div",{},void 0,Object(a.a)(bt.a,{timestamp:i.get("created_at"),short:!1})," · ",Object(a.a)(r.a,{id:"report_notification.attached_statuses",defaultMessage:"{count, plural, one {# post} other {# posts}} attached",values:{count:i.get("status_ids").size}}),Object(a.a)("br",{}),Object(a.a)("strong",{},void 0,t.formatMessage(mt[i.get("category")]))),Object(a.a)("div",{className:"notification__report__actions"},void 0,Object(a.a)("a",{href:`/admin/reports/${i.get("id")}`,className:"button",target:"_blank",rel:"noopener noreferrer"},void 0,t.formatMessage(mt.openReport))))):null}}jt.propTypes={account:it.a.map.isRequired,report:it.a.map.isRequired,hidden:c.a.bool,intl:c.a.object.isRequired};var Ot=Object(u.c)(jt);const vt=Object(d.d)({favourite:{id:"notification.favourite",defaultMessage:"{name} favorited your status"},follow:{id:"notification.follow",defaultMessage:"{name} followed you"},ownPoll:{id:"notification.own_poll",defaultMessage:"Your poll has ended"},poll:{id:"notification.poll",defaultMessage:"A poll you have voted in has ended"},reblog:{id:"notification.reblog",defaultMessage:"{name} boosted your status"},status:{id:"notification.status",defaultMessage:"{name} just posted"},update:{id:"notification.update",defaultMessage:"{name} edited a post"},adminSignUp:{id:"notification.admin.sign_up",defaultMessage:"{name} signed up"},adminReport:{id:"notification.admin.report",defaultMessage:"{name} reported {target}"}}),_t=(t,e,i)=>{const a=[e];return a.push(t.formatDate(i,{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})),a.join(", ")};class Mt extends at.a{constructor(){super(...arguments),this.handleMoveUp=()=>{const{notification:t,onMoveUp:e}=this.props;e(t.get("id"))},this.handleMoveDown=()=>{const{notification:t,onMoveDown:e}=this.props;e(t.get("id"))},this.handleOpen=()=>{const{notification:t}=this.props;t.get("status")?this.context.router.history.push(`/@${t.getIn(["status","account","acct"])}/${t.get("status")}`):this.handleOpenProfile()},this.handleOpenProfile=()=>{const{notification:t}=this.props;this.context.router.history.push(`/@${t.getIn(["account","acct"])}`)},this.handleMention=t=>{t.preventDefault();const{notification:e,onMention:i}=this.props;i(e.get("account"),this.context.router.history)},this.handleHotkeyFavourite=()=>{const{status:t}=this.props;t&&this.props.onFavourite(t)},this.handleHotkeyBoost=t=>{const{status:e}=this.props;e&&this.props.onReblog(e,t)},this.handleHotkeyToggleHidden=()=>{const{status:t}=this.props;t&&this.props.onToggleHidden(t)}}getHandlers(){return{reply:this.handleMention,favourite:this.handleHotkeyFavourite,boost:this.handleHotkeyBoost,mention:this.handleMention,open:this.handleOpen,openProfile:this.handleOpenProfile,moveUp:this.handleMoveUp,moveDown:this.handleMoveDown,toggleHidden:this.handleHotkeyToggleHidden}}renderFollow(t,e,i){const{intl:o,unread:s}=this.props;return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-follow focusable",{unread:s}),tabIndex:0,"aria-label":_t(o,o.formatMessage(vt.follow,{name:e.get("acct")}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"user-plus",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.follow",defaultMessage:"{name} followed you",values:{name:i}}))),Object(a.a)(st.a,{id:e.get("id"),hidden:this.props.hidden})))}renderFollowRequest(t,e,i){const{intl:o,unread:s}=this.props;return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-follow-request focusable",{unread:s}),tabIndex:0,"aria-label":_t(o,o.formatMessage({id:"notification.follow_request",defaultMessage:"{name} has requested to follow you"},{name:e.get("acct")}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"user",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.follow_request",defaultMessage:"{name} has requested to follow you",values:{name:i}}))),Object(a.a)(pt,{id:e.get("id"),withNote:!1,hidden:this.props.hidden})))}renderMention(t){return Object(a.a)(nt.a,{id:t.get("status"),withDismiss:!0,hidden:this.props.hidden,onMoveDown:this.handleMoveDown,onMoveUp:this.handleMoveUp,contextType:"notifications",getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth,unread:this.props.unread})}renderFavourite(t,e){const{intl:i,unread:o}=this.props;return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-favourite focusable",{unread:o}),tabIndex:0,"aria-label":_t(i,i.formatMessage(vt.favourite,{name:t.getIn(["account","acct"])}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"star",className:"star-icon",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.favourite",defaultMessage:"{name} favorited your status",values:{name:e}}))),Object(a.a)(nt.a,{id:t.get("status"),account:t.get("account"),muted:!0,withDismiss:!0,hidden:!!this.props.hidden,getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth})))}renderReblog(t,e){const{intl:i,unread:o}=this.props;return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-reblog focusable",{unread:o}),tabIndex:0,"aria-label":_t(i,i.formatMessage(vt.reblog,{name:t.getIn(["account","acct"])}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"retweet",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.reblog",defaultMessage:"{name} boosted your status",values:{name:e}}))),Object(a.a)(nt.a,{id:t.get("status"),account:t.get("account"),muted:!0,withDismiss:!0,hidden:this.props.hidden,getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth})))}renderStatus(t,e){const{intl:i,unread:o,status:s}=this.props;return s?Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-status focusable",{unread:o}),tabIndex:0,"aria-label":_t(i,i.formatMessage(vt.status,{name:t.getIn(["account","acct"])}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"home",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.status",defaultMessage:"{name} just posted",values:{name:e}}))),Object(a.a)(nt.a,{id:t.get("status"),account:t.get("account"),contextType:"notifications",muted:!0,withDismiss:!0,hidden:this.props.hidden,getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth}))):null}renderUpdate(t,e){const{intl:i,unread:o,status:s}=this.props;return s?Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-update focusable",{unread:o}),tabIndex:0,"aria-label":_t(i,i.formatMessage(vt.update,{name:t.getIn(["account","acct"])}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"pencil",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.update",defaultMessage:"{name} edited a post",values:{name:e}}))),Object(a.a)(nt.a,{id:t.get("status"),account:t.get("account"),contextType:"notifications",muted:!0,withDismiss:!0,hidden:this.props.hidden,getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth}))):null}renderPoll(t,e){const{intl:i,unread:o,status:s}=this.props,n=V.o===e.get("id"),c=n?i.formatMessage(vt.ownPoll):i.formatMessage(vt.poll);return s?Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-poll focusable",{unread:o}),tabIndex:0,"aria-label":_t(i,c,t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"tasks",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,n?Object(a.a)(r.a,{id:"notification.own_poll",defaultMessage:"Your poll has ended"}):Object(a.a)(r.a,{id:"notification.poll",defaultMessage:"A poll you have voted in has ended"}))),Object(a.a)(nt.a,{id:t.get("status"),account:e,contextType:"notifications",muted:!0,withDismiss:!0,hidden:this.props.hidden,getScrollPosition:this.props.getScrollPosition,updateScrollBottom:this.props.updateScrollBottom,cachedMediaWidth:this.props.cachedMediaWidth,cacheMediaWidth:this.props.cacheMediaWidth}))):null}renderAdminSignUp(t,e,i){const{intl:o,unread:s}=this.props;return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-admin-sign-up focusable",{unread:s}),tabIndex:0,"aria-label":_t(o,o.formatMessage(vt.adminSignUp,{name:e.get("acct")}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"user-plus",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.admin.sign_up",defaultMessage:"{name} signed up",values:{name:i}}))),Object(a.a)(st.a,{id:e.get("id"),hidden:this.props.hidden})))}renderAdminReport(t,e,i){const{intl:o,unread:s,report:n}=this.props;if(!n)return null;const c=n.get("target_account"),l={__html:c.get("display_name_html")},d=Object(a.a)("bdi",{},void 0,Object(a.a)(tt.a,{className:"notification__display-name",title:c.get("acct"),to:`/@${c.get("acct")}`,dangerouslySetInnerHTML:l}));return Object(a.a)(ot.HotKeys,{handlers:this.getHandlers()},void 0,Object(a.a)("div",{className:Z()("notification notification-admin-report focusable",{unread:s}),tabIndex:0,"aria-label":_t(o,o.formatMessage(vt.adminReport,{name:e.get("acct"),target:t.getIn(["report","target_account","acct"])}),t.get("created_at"))},void 0,Object(a.a)("div",{className:"notification__message"},void 0,Object(a.a)("div",{className:"notification__favourite-icon-wrapper"},void 0,Object(a.a)(m.a,{id:"flag",fixedWidth:!0})),Object(a.a)("span",{title:t.get("created_at")},void 0,Object(a.a)(r.a,{id:"notification.admin.report",defaultMessage:"{name} reported {target}",values:{name:i,target:d}}))),Object(a.a)(Ot,{account:e,report:t.get("report"),hidden:this.props.hidden})))}render(){const{notification:t}=this.props,e=t.get("account"),i={__html:e.get("display_name_html")},o=Object(a.a)("bdi",{},void 0,Object(a.a)(tt.a,{className:"notification__display-name",href:`/@${e.get("acct")}`,title:e.get("acct"),to:`/@${e.get("acct")}`,dangerouslySetInnerHTML:i}));switch(t.get("type")){case"follow":return this.renderFollow(t,e,o);case"follow_request":return this.renderFollowRequest(t,e,o);case"mention":return this.renderMention(t);case"favourite":return this.renderFavourite(t,o);case"reblog":return this.renderReblog(t,o);case"status":return this.renderStatus(t,o);case"update":return this.renderUpdate(t,o);case"poll":return this.renderPoll(t,e);case"admin.sign_up":return this.renderAdminSignUp(t,e,o);case"admin.report":return this.renderAdminReport(t,e,o)}return null}}Mt.contextTypes={router:c.a.object},Mt.propTypes={notification:it.a.map.isRequired,hidden:c.a.bool,onMoveUp:c.a.func.isRequired,onMoveDown:c.a.func.isRequired,onMention:c.a.func.isRequired,onFavourite:c.a.func.isRequired,onReblog:c.a.func.isRequired,onToggleHidden:c.a.func.isRequired,status:it.a.map,intl:c.a.object.isRequired,getScrollPosition:c.a.func,updateScrollBottom:c.a.func,cacheMediaWidth:c.a.func,cachedMediaWidth:c.a.number,unread:c.a.bool};var wt=Object(u.c)(Mt);var Ct=Object(p.connect)((()=>{const t=Object(Q.f)(),e=Object(Q.i)(),i=Object(Q.h)();return(a,o)=>{const s=t(a,o.notification,o.accountId);return{notification:s,status:s.get("status")?e(a,{id:s.get("status"),contextType:"notifications"}):null,report:s.get("report")?i(a,s.get("report"),s.getIn(["report","target_account","id"])):null}}}),(t=>({onMention:(e,i)=>{t(Object(Y.rb)(e,i))},onModalReblog(e,i){t(Object(G.L)(e,i))},onReblog(e,i){e.get("reblogged")?t(Object(G.P)(e)):i.shiftKey||!V.b?this.onModalReblog(e):t(Object(E.d)({status:e,onReblog:this.onModalReblog}))},onFavourite(e){e.get("favourited")?t(Object(G.N)(e)):t(Object(G.H)(e))},onToggleHidden(e){e.get("hidden")?t(Object(J.q)(e.get("id"))):t(Object(J.o)(e.get("id")))}})))(wt);const Nt=Object(d.d)({title:{id:"column.notifications",defaultMessage:"Notifications"},markAsRead:{id:"notifications.mark_as_read",defaultMessage:"Mark every notification as read"}}),Pt=Object(f.a)([t=>t.getIn(["settings","notifications","shows"])],(t=>Object(g.List)(t.filter((t=>!t)).keys()))),xt=Object(f.a)([t=>t.getIn(["settings","notifications","quickFilter","show"]),t=>t.getIn(["settings","notifications","quickFilter","active"]),Pt,t=>t.getIn(["notifications","items"])],((t,e,i,a)=>t&&"all"!==e?a.filter((t=>null===t||e===t.get("type"))):a.filterNot((t=>null!==t&&i.includes(t.get("type"))))));class yt extends l.PureComponent{constructor(){super(...arguments),this.handleLoadGap=t=>{this.props.dispatch(Object(_.o)({maxId:t}))},this.handleLoadOlder=s()((()=>{const t=this.props.notifications.last();this.props.dispatch(Object(_.o)({maxId:t&&t.get("id")}))}),300,{leading:!0}),this.handleLoadPending=()=>{this.props.dispatch(Object(_.p)())},this.handleScrollToTop=s()((()=>{this.props.dispatch(Object(_.t)(!0))}),100),this.handleScroll=s()((()=>{this.props.dispatch(Object(_.t)(!1))}),100),this.handlePin=()=>{const{columnId:t,dispatch:e}=this.props;e(t?Object(O.h)(t):Object(O.e)("NOTIFICATIONS",{}))},this.handleMove=t=>{const{columnId:e,dispatch:i}=this.props;i(Object(O.g)(e,t))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setColumnRef=t=>{this.column=t},this.handleMoveUp=t=>{const e=this.props.notifications.findIndex((e=>null!==e&&e.get("id")===t))-1;this._selectChild(e,!0)},this.handleMoveDown=t=>{const e=this.props.notifications.findIndex((e=>null!==e&&e.get("id")===t))+1;this._selectChild(e,!1)},this.handleMarkAsRead=()=>{this.props.dispatch(Object(_.q)()),this.props.dispatch(Object(v.d)({immediate:!0}))}}UNSAFE_componentWillMount(){this.props.dispatch(Object(_.r)())}componentWillUnmount(){this.handleLoadOlder.cancel(),this.handleScrollToTop.cancel(),this.handleScroll.cancel(),this.props.dispatch(Object(_.t)(!1)),this.props.dispatch(Object(_.w)())}_selectChild(t,e){const i=this.column.node,a=i.querySelector(`article:nth-of-type(${t+1}) .focusable`);a&&(e&&i.scrollTop>a.offsetTop?a.scrollIntoView(!0):!e&&i.scrollTop+i.clientHeight<a.offsetTop+a.offsetHeight&&a.scrollIntoView(!1),a.focus())}render(){const{intl:t,notifications:e,isLoading:i,isUnread:o,columnId:s,multiColumn:n,hasMore:c,numPending:l,showFilterBar:d,lastReadId:u,canMarkAsRead:g,needsNotificationPermission:p}=this.props,f=!!s,O=Object(a.a)(r.a,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. When other people interact with you, you will see it here."}),{signedIn:v}=this.context.identity;let _=null;const P=v&&d?Object(a.a)($,{}):null;let x;_=i&&this.scrollableContent?this.scrollableContent:e.size>0||c?e.map(((t,o)=>null===t?Object(a.a)(C.a,{disabled:i,maxId:o>0?e.getIn([o-1,"id"]):null,onClick:this.handleLoadGap},"gap:"+e.getIn([o+1,"id"])):Object(a.a)(Ct,{notification:t,accountId:t.get("account"),onMoveUp:this.handleMoveUp,onMoveDown:this.handleMoveDown,unread:"0"!==u&&Object(b.a)(t.get("id"),u)>0},t.get("id")))):null,this.scrollableContent=_,x=v?Object(a.a)(N.a,{scrollKey:`notifications-${s}`,trackScroll:!f,isLoading:i,showLoading:i&&0===e.size,hasMore:c,numPending:l,prepend:p&&Object(a.a)(S,{}),alwaysPrepend:!0,emptyMessage:O,onLoadMore:this.handleLoadOlder,onLoadPending:this.handleLoadPending,onScrollToTop:this.handleScrollToTop,onScroll:this.handleScroll,bindToDocument:!n},void 0,_):Object(a.a)(j.a,{});let y=null;return g&&(y=Object(a.a)("button",{"aria-label":t.formatMessage(Nt.markAsRead),title:t.formatMessage(Nt.markAsRead),onClick:this.handleMarkAsRead,className:"column-header__button"},void 0,Object(a.a)(m.a,{id:"check"}))),Object(rt.jsxs)(M.a,{bindToDocument:!n,ref:this.setColumnRef,label:t.formatMessage(Nt.title),children:[Object(a.a)(w.a,{icon:"bell",active:o,title:t.formatMessage(Nt.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:f,multiColumn:n,extraButton:y},void 0,Object(a.a)(B,{})),P,x,Object(a.a)(h.a,{},void 0,Object(a.a)("title",{},void 0,t.formatMessage(Nt.title)),Object(a.a)("meta",{name:"robots",content:"noindex"}))]})}}yt.contextTypes={identity:c.a.object},yt.defaultProps={trackScroll:!0};e.default=Object(p.connect)((t=>({showFilterBar:t.getIn(["settings","notifications","quickFilter","show"]),notifications:xt(t),isLoading:t.getIn(["notifications","isLoading"],0)>0,isUnread:t.getIn(["notifications","unread"])>0||t.getIn(["notifications","pendingItems"]).size>0,hasMore:t.getIn(["notifications","hasMore"]),numPending:t.getIn(["notifications","pendingItems"],Object(g.List)()).size,lastReadId:t.getIn(["settings","notifications","showUnread"])?t.getIn(["notifications","readMarkerId"]):"0",canMarkAsRead:t.getIn(["settings","notifications","showUnread"])&&"0"!==t.getIn(["notifications","readMarkerId"])&&xt(t).some((e=>null!==e&&Object(b.a)(e.get("id"),t.getIn(["notifications","readMarkerId"]))>0)),needsNotificationPermission:t.getIn(["settings","notifications","alerts"]).includes(!0)&&t.getIn(["notifications","browserSupport"])&&"default"===t.getIn(["notifications","browserPermission"])&&!t.getIn(["settings","notifications","dismissPermissionBanner"])})))(Object(u.c)(yt))}}]);
//# sourceMappingURL=notifications-4d1f08f498003c8dad82.chunk.js.map