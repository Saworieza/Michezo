!function(){var a=this,b=a.document,c=b.location,d=a.navigator,e=function(){return(new Date).getTime()};a._zem_rp_request_id=a._zem_rp_request_id||(e()%60466176/60466176).toString(36).substr(2,5)+Math.random().toString(36).substr(2,2);var f="//t.zemanta.com/pageview/?",g=!!d.vendor&&-1!==d.vendor.indexOf("Apple"),h=/(?:; |^)zem_rp_click:([^:]*):([^=]*)=([^;]*)/g,i=function(){for(var a,d=encodeURIComponent(c.href.split("#")[0]),e=encodeURIComponent(b.referrer);a=h.exec(b.cookie);)if((g||a[1]===e)&&a[2]===d){var f=a[3].split("|"),i="zem_rp_click:"+e+":"+d;return b.cookie=i+"=;path=/;expires="+new Date(0).toUTCString(),{source_post_id:f[0],position:f[1],thumbnails:f[2],source_request_id:f[3]}}return!1},j=function(){var a=c.href;if(-1===a.indexOf("ref_related_posts="))return!1;for(var b,d=a.substr(a.indexOf("?")+1).split("&"),e=0,f=d.length;f>e;e++)if(b=d[e].split("="),"ref_related_posts"===b[0])return info=b[1].split("."),{source_blog_id:info[0],source_post_id:info[1],source_request_id:info.length>=3?info[2]:"none",article_id:info.length>=4?info[3]:"none",source_session_id:info.length>=5?info[4]:"none",source_test_group:info.length>=6?info[5]:"none"};return!1},k=function(d){d=d||a.event;var f=d.target||d.srcElement;if("a"===f.nodeName.toLowerCase()||"a"===(f=f.parentNode).nodeName.toLowerCase()){var g=c.href.split("#")[0],h=f.href,i=f.parentNode.getAttribute("data-position")||f.parentNode.getAttribute("position")||"none",j=l+"|"+i+"|"+(a._zem_rp_thumbnails?"1":"0")+"|"+a._zem_rp_request_id,k="zem_rp_click:"+encodeURIComponent(g)+":"+encodeURIComponent(h);b.cookie=k+"="+j+";path=/;expires="+new Date(e()+1e4).toUTCString()}};a._zem_rp_save_click_event=k;var l,m,n=function(d){d=d||a.event;var e=d.target||d.srcElement;if("a"===e.nodeName.toLowerCase()||"a"===(e=e.parentNode).nodeName.toLowerCase()){var f={action:"click",blog_id:a._zem_rp_blog_id,post_id:a._zem_rp_post_id,target_post_id:e.parentNode.getAttribute("data-poid"),source_url:c.href.split("#")[0],target_url:e.href,referrer:b.referrer,position:e.parentNode.getAttribute("data-position")||e.parentNode.getAttribute("position")||"none",request_id:a._zem_rp_request_id,cb:Math.random()},g=a._zem_rp_static_base_url+"stats.gif?",h=[],i=b.createElement("img"),j=2===d.which||d.ctrlKey||d.metaKey,k=!!{_blank:!0,_new:!0}[e.getAttribute("target")],l=j||k;for(var m in f)f.hasOwnProperty(m)&&h.push(m+"="+encodeURIComponent(f[m]));if(g+=h.join("&"),!l){d.preventDefault();var n=function(){clearTimeout(p),b.location.href=e.href},o=500,p=setTimeout(n,o);i.onload=n,i.onerror=n}i.src=g}},o=function(){var a,c,d,e;if(b.getElementsByClassName)c=b.getElementsByClassName("zem_rp related_post");else{var f=b.getElementsByTagName("UL");for(c=[],d=0,e=f.length;e>d;d++){a=f[d];var g=" "+a.className+" ";-1!==g.indexOf(" zem_rp ")&&-1!==g.indexOf(" related_post ")&&c.push(a)}}for(d=0,e=c.length;e>d;d++)a=c[d],a.addEventListener?(a.addEventListener("mousedown",k,!1),a.addEventListener("click",n,!1)):(a.attachEvent("onmousedown",k),a.attachEvent("onclick",n))},p=!1,q=function(){return b.body?void(p||(p=!0,o(),"5329384"==a._zem_rp_blog_id&&b.getElementById("zem_rp_first")&&t())):void setTimeout(q,1)},r=function(){if(b.addEventListener)b.removeEventListener("DOMContentLoaded",r,!1);else{if("complete"!==b.readyState)return;b.detachEvent("onreadystatechange",r)}q()},s=function(){if("complete"===b.readyState)setTimeout(r,1);else if(b.addEventListener)b.addEventListener("DOMContentLoaded",r,!1),a.addEventListener("load",r,!1);else{b.attachEvent("onreadystatechange",r),a.attachEvent("onload",r);var c=!1;try{c=null==a.frameElement&&b.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!p){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}q()}}()}},t=function(){if(!a._zem_rp_blog_id)return retry_after=1.5*(retry_after||1),void(1e4>retry_after&&setTimeout(function(){t(retry_after)},retry_after));var c,d={},e=[],g=i(),h=j();d.post_id=l=a._zem_rp_post_id,d.blog_id=m=a._zem_rp_blog_id,d.referrer=encodeURIComponent(b.referrer),d.request_id=a._zem_rp_request_id,d.cb=Math.random(),g?(d.click="1",d.source_post_id=g.source_post_id,d.position=g.position,d.thumbnails=g.thumbnails,d.source_request_id=g.source_request_id):h?(d.click="1",d.source_blog_id=h.source_blog_id,d.source_post_id=h.source_post_id,d.source_request_id=h.source_request_id,d.article_id=h.article_id,d.source_session_id=h.source_session_id,d.source_test_group=h.source_test_group):d.click="0";for(x in d)d.hasOwnProperty(x)&&e.push(x+"="+d[x]);f+=e.join("&"),c=b.createElement("img"),c.setAttribute("src",f)};"5329384"!=a._zem_rp_blog_id&&t(),s()}();
//# sourceMappingURL=pageview.map