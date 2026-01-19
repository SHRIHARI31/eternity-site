import{B as ne,C as G,D as S,F as U,G as M,H as m,I as lt,J as oe,a as Gt,b as W,c as V,d as Qt,f as Wt,k as Ct,l as Kt,m as Xt,n as It,o as Yt,p as dt,q as Jt,s as xt,t as te,u as ee,w as Et,x as kt}from"./chunk-722DXA6L.js";import{$a as q,Aa as c,Ba as Q,Bb as st,Db as h,Eb as r,Ha as _,Ia as Ft,Ib as I,J as B,Ja as Ot,Jb as Rt,K as F,Kb as vt,M as O,Na as f,O as u,Oa as bt,Pa as ft,Qa as X,Ra as gt,Sa as ht,Ta as w,U as T,Ua as ot,Ub as jt,Va as it,Vb as qt,Wa as zt,Wb as Zt,Xb as $,Ya as $t,Yb as yt,Z as nt,Za as Vt,_ as Lt,_a as P,ab as Z,ba as At,bb as Ut,ca as R,db as Y,eb as J,fa as d,ib as Ht,lb as x,ma as C,mb as rt,nb as at,ub as k,wa as b,xa as z,xb as mt,ya as K,za as j}from"./chunk-6374556S.js";var ie=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Be=`
    ${ie}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Te={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,o=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,n=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":ee(i)&&String(i).length===1,"p-badge-dot":te(i),"p-badge-sm":e==="small"||o==="small","p-badge-lg":e==="large"||o==="large","p-badge-xl":e==="xlarge"||o==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},re=(()=>{class t extends S{name="badge";style=Be;classes=Te;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var ae=new O("BADGE_INSTANCE");var Dt=(()=>{class t extends M{$pcBadge=u(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=r();badgeSize=r();size=r();severity=r();value=r();badgeDisabled=r(!1,{transform:I});_componentStyle=u(re);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(o,n){o&2&&(_("data-p",n.dataP),x(n.cn(n.cx("root"),n.styleClass())),Ht("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[k([re,{provide:ae,useExisting:t},{provide:U,useExisting:t}]),j([m]),c],decls:1,vars:1,template:function(o,n){o&1&&rt(0),o&2&&at(n.value())},dependencies:[$,G,lt],encapsulation:2,changeDetection:0})}return t})(),se=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=z({type:t});static \u0275inj=F({imports:[Dt,G,G]})}return t})();var we=["*"],Pe={root:"p-fluid"},de=(()=>{class t extends S{name="fluid";classes=Pe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var le=new O("FLUID_INSTANCE"),ue=(()=>{class t extends M{$pcFluid=u(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=u(de);static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(o,n){o&2&&x(n.cx("root"))},features:[k([de,{provide:le,useExisting:t},{provide:U,useExisting:t}]),j([m]),c],ngContentSelectors:we,decls:1,vars:0,template:function(o,n){o&1&&(q(),Z(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return t})();var _e=["*"],Ne=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ce=(()=>{class t extends S{name="baseicon";css=Ne;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var L=(()=>{class t extends M{spin=!1;_componentStyle=u(ce);getClassNames(){return Gt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(o,n){o&2&&x(n.getClassNames())},inputs:{spin:[2,"spin","spin",I]},features:[k([ce]),c],ngContentSelectors:_e,decls:1,vars:0,template:function(o,n){o&1&&(q(),Z(0))},encapsulation:2,changeDetection:0})}return t})();var Le=["data-p-icon","chevron-down"],go=(()=>{class t extends L{static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[c],attrs:Le,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(o,n){o&1&&(T(),w(0,"path",0))},encapsulation:2})}return t})();var Ae=["data-p-icon","chevron-left"],vo=(()=>{class t extends L{static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[c],attrs:Ae,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(o,n){o&1&&(T(),w(0,"path",0))},encapsulation:2})}return t})();var Fe=["data-p-icon","chevron-right"],Io=(()=>{class t extends L{static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[c],attrs:Fe,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(o,n){o&1&&(T(),w(0,"path",0))},encapsulation:2})}return t})();var Oe=["data-p-icon","chevron-up"],ko=(()=>{class t extends L{static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-up"]],features:[c],attrs:Oe,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(o,n){o&1&&(T(),w(0,"path",0))},encapsulation:2})}return t})();var ze=["data-p-icon","spinner"],pe=(()=>{class t extends L{pathId;onInit(){this.pathId="url(#"+kt()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","spinner"]],features:[c],attrs:ze,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(T(),gt(0,"g"),w(1,"path",0),ht(),gt(2,"defs")(3,"clipPath",1),w(4,"rect",2),ht()()),o&2&&(_("clip-path",n.pathId),C(3),$t("id",n.pathId))},encapsulation:2})}return t})();var be=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var $e=`
    ${be}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ve={root:"p-ink"},fe=(()=>{class t extends S{name="ripple";style=$e;classes=Ve;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var ge=(()=>{class t extends M{zone=u(Lt);_componentStyle=u(fe);animationListener;mouseDownListener;timeout;constructor(){super(),R(()=>{yt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(!this.$unstyled()&&V(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Ct(o)&&!It(o)){let l=Math.max(Wt(this.el.nativeElement),Xt(this.el.nativeElement));o.style.height=l+"px",o.style.width=l+"px"}let n=Kt(this.el.nativeElement),a=e.pageX-n.left+this.document.body.scrollTop-It(o)/2,s=e.pageY-n.top+this.document.body.scrollLeft-Ct(o)/2;this.renderer.setStyle(o,"top",s+"px"),this.renderer.setStyle(o,"left",a+"px"),!this.$unstyled()&&W(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&V(l,"p-ink-active"),l.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let o=0;o<e.length;o++)if(typeof e[o].className=="string"&&e[o].className.indexOf("p-ink")!==-1)return e[o];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&V(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&V(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Jt(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(o){return new(o||t)};static \u0275dir=K({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[k([fe]),c]})}return t})(),$o=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=z({type:t});static \u0275inj=F({})}return t})();var he=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ue=["content"],He=["loadingicon"],Re=["icon"],je=["*"],ye=(t,i)=>({class:t,pt:i});function qe(t,i){t&1&&zt(0)}function Ze(t,i){if(t&1&&X(0,"span",7),t&2){let e=P(3);x(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),f("pBind",e.ptm("loadingIcon")),_("aria-hidden",!0)}}function Ge(t,i){if(t&1&&(T(),X(0,"svg",8)),t&2){let e=P(3);x(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),f("pBind",e.ptm("loadingIcon"))("spin",!0),_("aria-hidden",!0)}}function Qe(t,i){if(t&1&&(ot(0),Q(1,Ze,1,4,"span",3)(2,Ge,1,5,"svg",6),it()),t&2){let e=P(2);C(),f("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),C(),f("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function We(t,i){}function Ke(t,i){if(t&1&&Q(0,We,0,0,"ng-template",9),t&2){let e=P(2);f("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Xe(t,i){if(t&1&&(ot(0),Q(1,Qe,3,2,"ng-container",2)(2,Ke,1,1,null,5),it()),t&2){let e=P();C(),f("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),C(),f("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",mt(3,ye,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Ye(t,i){if(t&1&&X(0,"span",7),t&2){let e=P(2);x(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),f("pBind",e.ptm("icon")),_("data-p",e.dataIconP)}}function Je(t,i){}function tn(t,i){if(t&1&&Q(0,Je,0,0,"ng-template",9),t&2){let e=P(2);f("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function en(t,i){if(t&1&&(ot(0),Q(1,Ye,1,4,"span",3)(2,tn,1,1,null,5),it()),t&2){let e=P();C(),f("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),C(),f("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",mt(3,ye,e.cx("icon"),e.ptm("icon")))}}function nn(t,i){if(t&1&&(bt(0,"span",7),rt(1),ft()),t&2){let e=P();x(e.cx("label")),f("pBind",e.ptm("label")),_("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),C(),at(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function on(t,i){if(t&1&&X(0,"p-badge",10),t&2){let e=P();f("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var rn={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},me=(()=>{class t extends S{name="button";style=he;classes=rn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var ve=new O("BUTTON_INSTANCE");var an=(()=>{class t extends M{hostName="";$pcButton=u(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(m,{self:!0});_componentStyle=u(me);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=r(void 0,{transform:I});onClick=new nt;onFocus=new nt;onBlur=new nt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(ue,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-button"]],contentQueries:function(o,n,a){if(o&1&&Ut(a,Ue,5)(a,He,5)(a,Re,5)(a,ne,4),o&2){let s;Y(s=J())&&(n.contentTemplate=s.first),Y(s=J())&&(n.loadingIconTemplate=s.first),Y(s=J())&&(n.iconTemplate=s.first),Y(s=J())&&(n.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",I],raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",Rt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[k([me,{provide:ve,useExisting:t},{provide:U,useExisting:t}]),j([m]),c],ngContentSelectors:je,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(o,n){o&1&&(q(),bt(0,"button",0),Vt("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),Z(1),Q(2,qe,1,0,"ng-container",1)(3,Xe,3,6,"ng-container",2)(4,en,3,6,"ng-container",2)(5,nn,2,6,"span",3)(6,on,1,4,"p-badge",4),ft()),o&2&&(x(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),f("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),_("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),C(2),f("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),C(),f("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),C(),f("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))))},dependencies:[$,jt,Zt,qt,ge,oe,pe,se,Dt,G,m],encapsulation:2,changeDetection:0})}return t})(),gi=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=z({type:t});static \u0275inj=F({imports:[$,an,G,G]})}return t})();var sn=Object.defineProperty,Ce=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable,Ie=(t,i,e)=>i in t?sn(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,xe=(t,i)=>{for(var e in i||(i={}))dn.call(i,e)&&Ie(t,e,i[e]);if(Ce)for(var e of Ce(i))ln.call(i,e)&&Ie(t,e,i[e]);return t},un=(t,i,e)=>new Promise((o,n)=>{var a=p=>{try{l(e.next(p))}catch(v){n(v)}},s=p=>{try{l(e.throw(p))}catch(v){n(v)}},l=p=>p.done?o(p.value):Promise.resolve(p.value).then(a,s);l((e=e.apply(t,i)).next())}),ut="animation",tt="transition";function cn(t){return t?t.disabled||!!(t.safe&&Yt()):!1}function pn(t,i){return t?xe(xe({},t),Object.entries(i).reduce((e,[o,n])=>{var a;return e[o]=(a=t[o])!=null?a:n,e},{})):i}function bn(t){let{name:i,enterClass:e,leaveClass:o}=t||{};return{enter:{from:e?.from||`${i}-enter-from`,to:e?.to||`${i}-enter-to`,active:e?.active||`${i}-enter-active`},leave:{from:o?.from||`${i}-leave-from`,to:o?.to||`${i}-leave-to`,active:o?.active||`${i}-leave-active`}}}function fn(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function gn(t,i){let e=window.getComputedStyle(t),o=E=>{let H=e[`${E}Delay`],A=e[`${E}Duration`];return[H.split(", ").map(Et),A.split(", ").map(Et)]},[n,a]=o(tt),[s,l]=o(ut),p=Math.max(...a.map((E,H)=>E+n[H])),v=Math.max(...l.map((E,H)=>E+s[H])),g,y=0,D=0;return i===tt?p>0&&(g=tt,y=p,D=a.length):i===ut?v>0&&(g=ut,y=v,D=l.length):(y=Math.max(p,v),g=y>0?p>v?tt:ut:void 0,D=g?g===tt?a.length:l.length:0),{type:g,timeout:y,count:D}}function hn(t,i){return typeof t=="number"?t:typeof t=="object"&&t[i]!=null?t[i]:null}function mn(t,i=!0,e=!1){if(!i&&!e)return;let o=Qt(t);i&&xt(t,"--pui-motion-height",o.height+"px"),e&&xt(t,"--pui-motion-width",o.width+"px")}var vn={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Bt(t,i){if(!t)throw new Error("Element is required.");let e={},o=!1,n={},a=null,s={},l=g=>{if(Object.assign(e,pn(g,vn)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=fn(e),o=cn(e),n=bn(e),a=null},p=g=>un(null,null,function*(){a?.();let{onBefore:y,onStart:D,onAfter:E,onCancelled:H}=s[g]||{},A={element:t};if(o){y?.(A),D?.(A),E?.(A);return}let{from:St,active:wt,to:Pt}=n[g]||{};return mn(t,e.autoHeight,e.autoWidth),y?.(A),W(t,St),W(t,wt),t.offsetHeight,V(t,St),W(t,Pt),D?.(A),new Promise(_t=>{let Me=hn(e.duration,g),Nt=()=>{V(t,[Pt,wt]),a=null},De=()=>{Nt(),E?.(A),_t()};a=()=>{Nt(),H?.(A),_t()},Cn(t,e.type,Me,De)})});l(i);let v={enter:()=>e.enter?p("enter"):Promise.resolve(),leave:()=>e.leave?p("leave"):Promise.resolve(),cancel:()=>{a?.(),a=null},update:(g,y)=>{if(!g)throw new Error("Element is required.");t=g,v.cancel(),l(y)}};return e.appear&&v.enter(),v}var yn=0;function Cn(t,i,e,o){let n=t._motionEndId=++yn,a=()=>{n===t._motionEndId&&o()};if(e!=null)return setTimeout(a,e);let{type:s,timeout:l,count:p}=gn(t,i);if(!s){o();return}let v=s+"end",g=0,y=()=>{t.removeEventListener(v,D,!0),a()},D=E=>{E.target===t&&++g>=p&&y()};t.addEventListener(v,D,{capture:!0,once:!0}),setTimeout(()=>{g<p&&y()},l+1)}var In=["*"];function xn(t,i){t&1&&Z(0)}var ct=new WeakMap;function et(t,i){if(t)switch(ct.has(t)||ct.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight}),i){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0";break}}function pt(t,i){if(!t)return;let e=ct.get(t)??t.style;switch(i){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"";break}ct.delete(t)}var En=`
    .p-motion {
        display: block;
    }
`,kn={root:"p-motion"},Tt=(()=>{class t extends S{name="motion";style=En;classes=kn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Ee=new O("MOTION_INSTANCE"),Mn=(()=>{class t extends M{$pcMotion=u(Ee,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=u(Tt);visible=r(!1);mountOnEnter=r(!0);unmountOnLeave=r(!0);name=r(void 0);type=r(void 0);safe=r(void 0);disabled=r(!1);appear=r(!1);enter=r(!0);leave=r(!0);duration=r(void 0);hideStrategy=r("display");enterFromClass=r(void 0);enterToClass=r(void 0);enterActiveClass=r(void 0);leaveFromClass=r(void 0);leaveToClass=r(void 0);leaveActiveClass=r(void 0);options=r({});onBeforeEnter=h();onEnter=h();onAfterEnter=h();onEnterCancelled=h();onBeforeLeave=h();onLeave=h();onAfterLeave=h();onLeaveCancelled=h();motionOptions=st(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=At(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),R(()=>{let e=this.hideStrategy();this.isInitialMount?(et(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(et(this.$el,e),this.rendered.set(!0))}),R(()=>{this.motion||(this.motion=Bt(this.$el,this.motionOptions()))}),vt(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),o=this.hideStrategy();this.visible()?(await dt(),pt(this.$el,o),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await dt(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(et(this.$el,o),this.unmountOnLeave()&&(await dt(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,pt(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=b({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(o,n){o&2&&x(n.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[k([Tt,{provide:Ee,useExisting:t},{provide:U,useExisting:t}]),j([m]),c],ngContentSelectors:In,decls:1,vars:1,template:function(o,n){o&1&&(q(),Ft(0,xn,1,0)),o&2&&Ot(n.rendered()?0:-1)},dependencies:[$,lt],encapsulation:2})}return t})(),ke=new O("MOTION_DIRECTIVE_INSTANCE"),_i=(()=>{class t extends M{$pcMotionDirective=u(ke,{optional:!0,skipSelf:!0})??void 0;visible=r(!1,{alias:"pMotion"});name=r(void 0,{alias:"pMotionName"});type=r(void 0,{alias:"pMotionType"});safe=r(void 0,{alias:"pMotionSafe"});disabled=r(!1,{alias:"pMotionDisabled"});appear=r(!1,{alias:"pMotionAppear"});enter=r(!0,{alias:"pMotionEnter"});leave=r(!0,{alias:"pMotionLeave"});duration=r(void 0,{alias:"pMotionDuration"});hideStrategy=r("display",{alias:"pMotionHideStrategy"});enterFromClass=r(void 0,{alias:"pMotionEnterFromClass"});enterToClass=r(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=r(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=r(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=r(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=r(void 0,{alias:"pMotionLeaveActiveClass"});options=r({},{alias:"pMotionOptions"});onBeforeEnter=h({alias:"pMotionOnBeforeEnter"});onEnter=h({alias:"pMotionOnEnter"});onAfterEnter=h({alias:"pMotionOnAfterEnter"});onEnterCancelled=h({alias:"pMotionOnEnterCancelled"});onBeforeLeave=h({alias:"pMotionOnBeforeLeave"});onLeave=h({alias:"pMotionOnLeave"});onAfterLeave=h({alias:"pMotionOnAfterLeave"});onLeaveCancelled=h({alias:"pMotionOnLeaveCancelled"});motionOptions=st(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),R(()=>{this.motion||(this.motion=Bt(this.$el,this.motionOptions()))}),vt(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),o=this.hideStrategy();this.visible()?(pt(this.$el,o),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?et(this.$el,o):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&et(this.$el,o)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,pt(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(o){return new(o||t)};static \u0275dir=K({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[k([Tt,{provide:ke,useExisting:t},{provide:U,useExisting:t}]),c]})}return t})(),Ni=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=z({type:t});static \u0275inj=F({imports:[Mn]})}return t})();function Dn(){let t=[],i=(a,s)=>{let l=t.length>0?t[t.length-1]:{key:a,value:s},p=l.value+(l.key===a?0:s)+2;return t.push({key:a,value:p}),p},e=a=>{t=t.filter(s=>s.value!==a)},o=()=>t.length>0?t[t.length-1].value:0,n=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:n,set:(a,s,l)=>{s&&(s.style.zIndex=String(i(a,l)))},clear:a=>{a&&(e(n(a)),a.style.zIndex="")},getCurrent:()=>o(),generateZIndex:i,revertZIndex:e}}var Fi=Dn(),Oi=t=>!!t;export{L as a,go as b,vo as c,Io as d,ko as e,ge as f,$o as g,an as h,gi as i,Mn as j,_i as k,Ni as l,Fi as m,Oi as n};
