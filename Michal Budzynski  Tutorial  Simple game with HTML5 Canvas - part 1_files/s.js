
function s4upl() {
var l=200;
var s4u=new String();
if (screen)
 {if (screen.width && screen.colorDepth) s4u+='&s='+screen.width+'x'+screen.height+'x'+screen.colorDepth;}
s4u+="&r=";
if(typeof Error != 'undefined') {
eval("try {if (top && top.document && top.document.referrer) {s4u+=escape(top.document.referrer.substring(0, l))} } catch(exception) {}");
} else if(top.document.referrer) {s4u+=escape(top.document.referrer.substring(0, l));}
return s4u;
}
