(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"cFQ/":function(e,a,t){e.exports={wrapper:"wrapper___-5ch6",icon:"icon___myHe6",version:"version___2KoYE",intro:"intro___3Zb-j",actionButton:"actionButton___3AfNr"}},"dF/s":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return N});t("XGli");var n=t("NHyu"),s=(t("D2jH"),t("2ROE")),i=(t("WQyz"),t("LoM5")),c=t("q1tI"),o=t.n(c),r=t("3a4m"),l=t.n(r),p=t("cFQ/"),m=t.n(p),u=t("eOZ3"),d=t("VVo5"),h=t.n(d),_=t("Pn7e"),v=t("uD3r"),b=t("KRny"),E=i["a"].Item,f="\u67e5\u627e\u597d\u53cb\u662f\u4e00\u6b3e\u67e5\u627e\u5b9a\u4f4d\u4eb2\u4eba\u670b\u53cb\u7684\u8f6f\u4ef6\u3002\u8f6f\u4ef6\u7684\u521d\u8877\u662f\u65b9\u4fbf\u7528\u6237\u5b9e\u65f6\u67e5\u770b\u5173\u5fc3\u7684\u4eba\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u6bd4\u5982\u5bb6\u91cc\u7684\u7a7a\u5de2\u8001\u4eba\u7b49\u3002",k="\u8f6f\u4ef6\u8fd8\u5728\u9010\u6b65\u5b8c\u5584\u4e2d\uff0c\u5927\u5bb6\u53ef\u4ee5\u5728\u610f\u89c1\u53cd\u9988\u4e2d\u5199\u4e0b\u60a8\u7684\u610f\u89c1\u6216\u5efa\u8bae\u3002",y=Object(b["a"])(),w=y.version;y.build_code;class N extends c["Component"]{constructor(){super(...arguments),this.state={app_version:"".concat(w,"-").concat(v["a"].VERSION),menuVisible:!1},this.onMenuSelect=(e=>{this.setState({menuVisible:!1});var a=e.key;"feedback"===a&&l.a.push({pathname:"/feedback"})})}render(){var e=this.state,a=e.app_version,t=e.menuVisible;o.a.createElement(i["a"],{visible:t,mask:!0,overlayStyle:{zIndex:1e4},overlay:[o.a.createElement(E,{key:"feedback",value:"feedback"},"\u610f\u89c1\u53cd\u9988")],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onSelect:this.onMenuSelect},o.a.createElement("div",{style:{height:"100%",padding:"0 15px",marginRight:"-15px",display:"flex",alignItems:"center"}},o.a.createElement(s["a"],{type:"ellipsis",onClick:e=>{this.setState({menuVisible:!t}),e.stopPropagation()}})));return o.a.createElement(u["a"],{title:"\u5173\u4e8e",pathname:this.props.location.pathname},o.a.createElement("div",{className:m.a.wrapper},o.a.createElement("img",{src:h.a,className:m.a.icon}),o.a.createElement("div",{className:m.a.version},"\u7248\u672c\u53f7\uff1a".concat(a)),o.a.createElement("p",{className:m.a.intro},f),o.a.createElement("p",{className:m.a.intro},k),o.a.createElement(n["a"],{className:m.a.actionButton,onClick:()=>{l.a.push({pathname:"/feedback"})}},"\u610f\u89c1\u53cd\u9988"),o.a.createElement(n["a"],{className:m.a.actionButton,onClick:()=>{_["a"].openAppStore()}},"\u70b9\u8d5e\u8bc4\u5206")))}}}}]);