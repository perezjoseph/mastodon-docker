(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1122:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t(1),n=t.n(l),i=t(7),c=t(19),g=t(39),o=t(3),d=t(16),r=t.n(d),u=t(18),b=t(11),p=t(34),m=t(10),h=t(25),O=t(23),j=t(1087),v=t(5);const f=Object(i.d)({close:{id:"lightbox.close",defaultMessage:"Close"}}),L=Object(p.a)([(e,a)=>e.getIn(["timelines",`account:${a}`,"items"],Object(o.List)()),e=>e.get("statuses")],((e,a)=>new o.Set(e.map((e=>a.get(e))).filter((e=>!e.get("reblog"))).map((e=>e.get("language"))))));class _ extends u.a{constructor(){super(...arguments),this.state={selectedLanguages:this.props.selectedLanguages},this.handleLanguageToggle=(e,a)=>{const{selectedLanguages:t}=this.state;a?this.setState({selectedLanguages:t.add(e)}):this.setState({selectedLanguages:t.delete(e)})},this.handleSubmit=()=>{this.props.onSubmit(this.state.selectedLanguages.toArray()),this.props.onClose()}}renderItem(e){const a=this.props.languages.find((a=>a[0]===e)),t=this.state.selectedLanguages.includes(e);return a?Object(s.a)(j.a,{name:"languages",value:e,label:a[1],checked:t,onToggle:this.handleLanguageToggle,multiple:!0},e):null}render(){const{acct:e,availableLanguages:a,selectedLanguages:t,intl:l,onClose:n}=this.props;return Object(s.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(s.a)("div",{className:"report-modal__target"},void 0,Object(s.a)(O.a,{className:"report-modal__close",title:l.formatMessage(f.close),icon:"times",onClick:n,size:20}),Object(s.a)(c.a,{id:"subscribed_languages.target",defaultMessage:"Change subscribed languages for {target}",values:{target:Object(s.a)("strong",{},void 0,e)}})),Object(s.a)("div",{className:"report-dialog-modal__container"},void 0,Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"subscribed_languages.lead",defaultMessage:"Only posts in selected languages will appear on your home and list timelines after the change. Select none to receive posts in all languages."})),Object(s.a)("div",{},void 0,a.union(t).delete(null).map((e=>this.renderItem(e)))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(h.a,{disabled:Object(o.is)(this.state.selectedLanguages,this.props.selectedLanguages),onClick:this.handleSubmit},void 0,Object(s.a)(c.a,{id:"subscribed_languages.save",defaultMessage:"Save changes"})))))}}_.propTypes={accountId:n.a.string.isRequired,acct:n.a.string.isRequired,availableLanguages:r.a.setOf(n.a.string),selectedLanguages:r.a.setOf(n.a.string),onClose:n.a.func.isRequired,languages:n.a.arrayOf(n.a.arrayOf(n.a.string)),intl:n.a.object.isRequired,submit:n.a.func.isRequired},_.defaultProps={languages:v.m},a.default=Object(b.connect)(((e,a)=>{let{accountId:t}=a;return{acct:e.getIn(["accounts",t,"acct"]),availableLanguages:L(e,t),selectedLanguages:Object(o.Set)(e.getIn(["relationships",t,"languages"])||Object(o.List)())}}),((e,a)=>{let{accountId:t}=a;return{onSubmit(a){e(Object(m.T)(t,{languages:a}))}}}))(Object(g.c)(_))}}]);
//# sourceMappingURL=subscribed_languages_modal-6568e527ad6f2a28c6be.chunk.js.map