(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1057:function(e,t,c){"use strict";c.r(t);var l=c(0),a=(c(104),c(2),c(99)),n=c(28),o=c(42),r=c(4);const s=e=>{var t;const c=(null==e?void 0:e.value)&&(null==e||null==(t=e.validity)?void 0:t.valid),l=document.querySelector('input[type="datetime-local"]#announcement_ends_at');c?(l.classList.remove("optional"),l.required=!0,l.min=e.value):(l.classList.add("optional"),l.removeAttribute("required"),l.removeAttribute("min"))};Object(n.delegate)(document,'input[type="datetime-local"]#announcement_starts_at',"change",(e=>{let{target:t}=e;s(t)}));const d='.batch-checkbox input[type="checkbox"]',i=()=>{document.querySelector(".batch-table__select-all").classList.add("active")},u=()=>{const e=document.querySelector(".batch-table__select-all"),t=document.querySelector("#select_all_matching"),c=document.querySelector(".batch-table__select-all .selected"),l=document.querySelector(".batch-table__select-all .not-selected");e.classList.remove("active"),c.classList.remove("active"),l.classList.add("active"),t.value="0"};Object(n.delegate)(document,"#batch_checkbox_all","change",(e=>{let{target:t}=e;const c=document.querySelector(".batch-table__select-all");[].forEach.call(document.querySelectorAll(d),(e=>{e.checked=t.checked})),c&&(t.checked?i():u())})),Object(n.delegate)(document,".batch-table__select-all button","click",(()=>{const e=document.querySelector("#select_all_matching"),t="1"===e.value,c=document.querySelector(".batch-table__select-all .selected"),l=document.querySelector(".batch-table__select-all .not-selected");t?(e.value="0",c.classList.remove("active"),l.classList.add("active")):(e.value="1",l.classList.remove("active"),c.classList.add("active"))})),Object(n.delegate)(document,d,"change",(()=>{const e=document.querySelector("#batch_checkbox_all"),t=document.querySelector(".batch-table__select-all");e&&(e.checked=[].every.call(document.querySelectorAll(d),(e=>e.checked)),e.indeterminate=!e.checked&&[].some.call(document.querySelectorAll(d),(e=>e.checked)),t&&(e.checked?i():u()))})),Object(n.delegate)(document,".media-spoiler-show-button","click",(()=>{[].forEach.call(document.querySelectorAll("button.media-spoiler"),(e=>{e.click()}))})),Object(n.delegate)(document,".media-spoiler-hide-button","click",(()=>{[].forEach.call(document.querySelectorAll(".spoiler-button.spoiler-button--visible button"),(e=>{e.click()}))})),Object(n.delegate)(document,".filter-subset--with-select select","change",(e=>{let{target:t}=e;t.form.submit()}));const m=e=>{const t=document.querySelector(".input.with_label.domain_block_reject_media"),c=document.querySelector(".input.with_label.domain_block_reject_reports");t&&(t.style.display="suspend"===e.value?"none":"block"),c&&(c.style.display="suspend"===e.value?"none":"block")};Object(n.delegate)(document,"#domain_block_severity","change",(e=>{let{target:t}=e;return m(t)}));const b=e=>{const t=document.querySelector("#form_admin_settings_bootstrap_timeline_accounts");t&&(t.disabled=!e.checked,e.checked?(t.parentElement.classList.remove("disabled"),t.parentElement.parentElement.classList.remove("disabled")):(t.parentElement.classList.add("disabled"),t.parentElement.parentElement.classList.add("disabled")))};Object(n.delegate)(document,"#form_admin_settings_enable_bootstrap_timeline_accounts","change",(e=>{let{target:t}=e;return b(t)}));const _=e=>{const t="approved"===e.value;[].forEach.call(document.querySelectorAll(".form_admin_settings_registrations_mode .warning-hint"),(t=>{t.style.display="open"===e.value?"inline":"none"})),[].forEach.call(document.querySelectorAll("#form_admin_settings_require_invite_text"),(e=>{if(e.disabled=!t,t){let t=e;do{t.classList.remove("disabled"),t=t.parentElement}while(t&&!t.classList.contains("fields-group"))}else{let t=e;do{t.classList.add("disabled"),t=t.parentElement}while(t&&!t.classList.contains("fields-group"))}}))},h=e=>{const t=new Date(e+"Z"),c=e=>e.toString().padStart(2,"0");return`${t.getFullYear()}-${c(t.getMonth()+1)}-${c(t.getDate())}T${c(t.getHours())}:${c(t.getMinutes())}`};Object(n.delegate)(document,"#form_admin_settings_registrations_mode","change",(e=>{let{target:t}=e;return _(t)})),Object(o.a)((()=>{var e;const t=document.getElementById("domain_block_severity");t&&m(t);const o=document.getElementById("form_admin_settings_enable_bootstrap_timeline_accounts");o&&b(o);const i=document.getElementById("form_admin_settings_registrations_mode");i&&_(i);const u=document.querySelector("#batch_checkbox_all");u&&(u.checked=[].every.call(document.querySelectorAll(d),(e=>e.checked)),u.indeterminate=!u.checked&&[].some.call(document.querySelectorAll(d),(e=>e.checked))),null==(e=document.querySelector("a#add-instance-button"))||e.addEventListener("click",(e=>{var t;const c=null==(t=document.querySelector('input[type="text"]#by_domain'))?void 0:t.value;if(c){const t=new URL(event.target.href);t.searchParams.set("_domain",c),e.target.href=t}})),[].forEach.call(document.querySelectorAll('input[type="datetime-local"]'),(e=>{e.value&&(e.value=h(e.value)),e.placeholder&&(e.placeholder=h(e.placeholder))})),Object(n.delegate)(document,"form","submit",(e=>{let{target:t}=e;[].forEach.call(t.querySelectorAll('input[type="datetime-local"]'),(e=>{e.value&&e.validity.valid&&(e.value=(e=>{const t=/^([0-9]{4,})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})/.exec(e),c=new Date(t[1],t[2]-1,t[3],t[4],t[5]).toISOString();return c.slice(0,c.indexOf("T")+6)})(e.value))}))}));const p=document.querySelector('input[type="datetime-local"]#announcement_starts_at');p&&s(p),[].forEach.call(document.querySelectorAll("[data-admin-component]"),(e=>{const t=e.getAttribute("data-admin-component"),n=JSON.parse(e.getAttribute("data-props"));c.e(597).then(c.bind(null,1222)).then((o=>{let{default:s}=o;return c(1058)("./"+t).then((t=>{let{default:c}=t;Object(a.createRoot)(e).render(Object(l.a)(s,{},void 0,Object(r.jsx)(c,{...n})))}))})).catch((e=>{console.error(e)}))}))}))},1058:function(e,t,c){var l={"./Counter":[840,0,431],"./Counter.jsx":[840,0,431],"./Dimension":[841,0,432],"./Dimension.jsx":[841,0,432],"./ImpactReport":[842,0,433],"./ImpactReport.jsx":[842,0,433],"./ReportReasonSelector":[843,0,434],"./ReportReasonSelector.jsx":[843,0,434],"./Retention":[844,0,435],"./Retention.jsx":[844,0,435],"./Trends":[845,0,436],"./Trends.jsx":[845,0,436]};function a(e){if(!c.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],a=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(a)}))}a.keys=function(){return Object.keys(l)},a.id=1058,e.exports=a}},[[1057,0]]]);
//# sourceMappingURL=admin-96e89a61990b29b52ac8.chunk.js.map