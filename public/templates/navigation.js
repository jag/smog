define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<ul"),buf.push(attrs({"class":"nav"},{})),buf.push(">"),loggedIn?(buf.push("<li><a"),buf.push(attrs({href:"#/disconnect"},{href:!0})),buf.push(">Disconnect</a></li>")):(buf.push("<li><a"),buf.push(attrs({href:"#/connect"},{href:!0})),buf.push(">Connect</a></li>")),buf.push("</ul>")}return buf.join("")}})