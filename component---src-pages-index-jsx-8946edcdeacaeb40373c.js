webpackJsonp([0xc23565d713b7],{14:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,u,s=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var i in a)l.call(a,i)&&(s[i]=a[i]);if(r){u=r(a);for(var d=0;d<u.length;d++)o.call(a,u[d])&&(s[u[d]]=a[u[d]])}}return s}},369:function(e,t,n){e.exports=n.p+"static/logo.b0139841.png"},370:function(e,t,n){e.exports=n.p+"static/team.63bb306c.gif"},135:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(2),u=a(o),s=n(192),c=a(s),i=function(){function e(e){return l.default.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("button",{type:"button",className:c.default.Button},e.name))}return e}();i.propTypes={name:u.default.string.isRequired,href:u.default.string.isRequired},t.default=i,e.exports=t.default},192:function(e,t){e.exports={Button:"src-components----Button-module---Button---3_NDl"}},136:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),s=a(u),c=n(2),i=a(c),d=function(e){function t(){r(this,t);var n=l(this,e.call(this));return n.state={currentWordIndex:0,currentColorIndex:0},n}return o(t,e),t.cycleIndex=function(){function e(e,t){return(e+1)%t.length}return e}(),t.prototype.componentWillMount=function(){function e(){var e=this;setInterval(function(){e.setState({currentWordIndex:t.cycleIndex(e.state.currentWordIndex,e.props.words),currentColorIndex:t.cycleIndex(e.state.currentColorIndex,e.props.colors)})},this.props.delay)}return e}(),t.prototype.render=function(){function e(){return s.default.createElement("span",{style:{color:this.props.colors[this.state.currentColorIndex]}},this.props.words[this.state.currentWordIndex])}return e}(),t}(s.default.Component);d.propTypes={words:i.default.arrayOf(i.default.string).isRequired,colors:i.default.arrayOf(i.default.string).isRequired,delay:i.default.number.isRequired},t.default=d,e.exports=t.default},139:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n(1),l=a(r),o=n(136),u=a(o),s=n(194),c=a(s),i=n(369),d=a(i),f=n(370),p=a(f),m=n(135),h=a(m),g=function(){function e(e){var t=e.data;return l.default.createElement("div",null,l.default.createElement("header",{className:c.default.hero},l.default.createElement("a",{href:"https://slohacks.com/",className:c.default.logoLink},l.default.createElement("img",{src:d.default,alt:"Logo",className:c.default.logo})),l.default.createElement("h1",{className:c.default.h1},"SLO Hacks"),l.default.createElement("h2",{className:c.default.recruitingText},"We’re ",l.default.createElement("br",null),"recruiting ",l.default.createElement("br",null),l.default.createElement(u.default,{words:t.site.siteMetadata.adjectives.split(", "),colors:["#0F96F5","#05D26E","#FFC819"],delay:1e3})),l.default.createElement("img",{src:p.default,alt:"SLO Hacks Team",className:c.default.animatedTeam})),l.default.createElement("div",{className:c.default.window}),l.default.createElement("section",{className:c.default.content},l.default.createElement("div",{className:c.default.text},l.default.createElement("h2",null,"Who are we?"),l.default.createElement("p",null,"The SLO Hacks team is dedicated to spreading a culture of tech and innovation throughout Cal Poly. Aside from our flagship event, we host multiple hackathons each year. Our team is composed of five groups: Design, Hacker Experience, Marketing, Sponsorship, and Tech."),l.default.createElement("h2",null,"Why should you join?"),l.default.createElement("p",null,"As a hackathon organizer, you’ll gain valuable experience by working on amazing events. Our team members work in a variety of areas, they interact with great sponsors from companies like Viasat, Google, and Intuit, create open source tools to empower our events, plan logistics for events comprising hundreds of people, and much much more."),l.default.createElement("h2",null,"What do our teams do?")),l.default.createElement("div",{className:c.default.pseudoTable},l.default.createElement("div",{className:c.default.design},l.default.createElement("h3",null,"Design"),l.default.createElement("ul",null,l.default.createElement("li",null,"Design website mockups & graphics for marketing"),l.default.createElement("li",null,"Help establish creative direction/theme"),l.default.createElement("li",null,"Work on the most front-facing work of SLO Hacks"),l.default.createElement("li",null,"Note: required experience in UI/UX design, Sketch"))),l.default.createElement("div",{className:c.default.hackerExperience},l.default.createElement("h3",null,"Hacker Experience"),l.default.createElement("ul",null,l.default.createElement("li",null,"Procure food/snack/drink sponsors"),l.default.createElement("li",null,"Manage hacker transportation (flights, buses, carpools)"),l.default.createElement("li",null,"Coordinate venue details and decorations"))),l.default.createElement("div",{className:c.default.marketing},l.default.createElement("h3",null,"Marketing"),l.default.createElement("ul",null,l.default.createElement("li",null,"Create marketing campaigns to promote events"),l.default.createElement("li",null,"Work with design to get graphics online"))),l.default.createElement("div",{className:c.default.sponsorship},l.default.createElement("h3",null,"Sponsorship"),l.default.createElement("ul",null,l.default.createElement("li",null,"Help deal with club finances"),l.default.createElement("li",null,"Work with industry sponsors to fund hackathon"))),l.default.createElement("div",{className:c.default.tech},l.default.createElement("h3",null,"Tech"),l.default.createElement("ul",null,l.default.createElement("li",null,"Help code our website, application portal, internal tools"),l.default.createElement("li",null,"Note: required experience in web development (preferably with React.js, Node.js, MongoDB)"))))),l.default.createElement("section",{className:c.default.apply},l.default.createElement("h2",null,"Want to join our team?"),l.default.createElement(h.default,{name:"Apply",href:"https://goo.gl/forms/E6MNzlmCNYI6R5Lo1"})))}return e}();t.query="** extracted graphql fragment **";t.default=g},194:function(e,t){e.exports={hero:"src-pages----index-module---hero---2Osae",logoLink:"src-pages----index-module---logoLink---3BG2U",logo:"src-pages----index-module---logo---3tl-x",h1:"src-pages----index-module---h1---7S1Yx",recruitingText:"src-pages----index-module---recruitingText---1aOmg",adjective:"src-pages----index-module---adjective---1euUU",animatedTeam:"src-pages----index-module---animatedTeam---ir8Fc",window:"src-pages----index-module---window---2Tdek",content:"src-pages----index-module---content---30-nr",text:"src-pages----index-module---text---24Z4b",pseudoTable:"src-pages----index-module---pseudoTable---UDfBD",design:"src-pages----index-module---design---1McOK",hackerExperience:"src-pages----index-module---hackerExperience---2xRF_",marketing:"src-pages----index-module---marketing---2QW0F",sponsorship:"src-pages----index-module---sponsorship---fChO-",tech:"src-pages----index-module---tech---3uIYF",apply:"src-pages----index-module---apply---1BKMg"}}});
//# sourceMappingURL=component---src-pages-index-jsx-8946edcdeacaeb40373c.js.map