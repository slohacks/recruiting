webpackJsonp([0xc23565d713b7],{14:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,c,u=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var i in n)o.call(n,i)&&(u[i]=n[i]);if(a){c=a(n);for(var d=0;d<c.length;d++)l.call(n,c[d])&&(u[c[d]]=n[c[d]])}}return u}},368:function(e,t,r){e.exports=r.p+"static/logo.b0139841.png"},369:function(e,t,r){e.exports=r.p+"static/team.63bb306c.gif"},136:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=r(1),u=n(c),s=r(2),i=n(s),d=function(e){function t(){a(this,t);var r=o(this,e.call(this));return r.state={currentWordIndex:0,currentColorIndex:0},r}return l(t,e),t.cycleIndex=function(){function e(e,t){return(e+1)%t.length}return e}(),t.prototype.componentWillMount=function(){function e(){var e=this;setInterval(function(){e.setState({currentWordIndex:t.cycleIndex(e.state.currentWordIndex,e.props.words),currentColorIndex:t.cycleIndex(e.state.currentColorIndex,e.props.colors)})},this.props.delay)}return e}(),t.prototype.render=function(){function e(){return u.default.createElement("span",{style:{color:this.props.colors[this.state.currentColorIndex]}},this.props.words[this.state.currentWordIndex])}return e}(),t}(u.default.Component);d.propTypes={words:i.default.arrayOf(i.default.string).isRequired,colors:i.default.arrayOf(i.default.string).isRequired,delay:i.default.number.isRequired},t.default=d,e.exports=t.default},139:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=r(1),o=n(a),l=r(136),c=n(l),u=r(192),s=n(u),i=r(368),d=n(i),f=r(369),p=n(f),m=function(){function e(e){var t=e.data;return o.default.createElement("div",null,o.default.createElement("header",{className:s.default.hero},o.default.createElement("img",{src:d.default,alt:"Logo",className:s.default.logo}),o.default.createElement("h1",{className:s.default.h1},"SLO Hacks"),o.default.createElement("h2",{className:s.default.recruitingText},"We’re ",o.default.createElement("br",null),"recruiting ",o.default.createElement("br",null),o.default.createElement(c.default,{words:t.site.siteMetadata.adjectives.split(", "),colors:["#0F96F5","#05D26E","#FFC819"],delay:1e3})),o.default.createElement("img",{src:p.default,alt:"SLO Hacks Team",className:s.default.animatedTeam})),o.default.createElement("div",{className:s.default.window}),o.default.createElement("section",{className:s.default.content},o.default.createElement("div",{className:s.default.text},o.default.createElement("h2",null,"Who are we?"),o.default.createElement("p",null,"The SLO Hacks team is dedicated to spreading a culture of tech and innovation throughout Cal Poly. Aside from our flagship event, we host multiple hackathons each year. Our team is composed of six groups: Design, Hacker Experience, Marketing, Sponsorship, and Tech."),o.default.createElement("h2",null,"Why should you join?"),o.default.createElement("p",null,"As a hackathon organizer, you’ll gain valuable experience by working on amazing events. Our team members work in a variety of areas, they interact with great sponsors from companies like Viasat, Google, and Intuit, create open source tools to empower our events, plan logistics for events comprising hundreds of people, and much much more."))))}return e}();t.query="** extracted graphql fragment **";t.default=m},192:function(e,t){e.exports={hero:"src-pages----index-module---hero---2Osae",logo:"src-pages----index-module---logo---3tl-x",h1:"src-pages----index-module---h1---7S1Yx",recruitingText:"src-pages----index-module---recruitingText---1aOmg",adjective:"src-pages----index-module---adjective---1euUU",animatedTeam:"src-pages----index-module---animatedTeam---ir8Fc",window:"src-pages----index-module---window---2Tdek",content:"src-pages----index-module---content---30-nr",text:"src-pages----index-module---text---24Z4b"}}});
//# sourceMappingURL=component---src-pages-index-jsx-bec1fc4a4b89d819faa9.js.map