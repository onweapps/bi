(function(c){c.Zebra_DatePicker=function(X,E){var ka={always_show_clear:!1,always_visible:!1,days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),days_abbr:!1,direction:0,disabled_dates:!1,enabled_dates:!1,first_day_of_week:1,format:"Y-m-d",inside:!0,lang_clear_date:"Clear",months:"January February March April May June July August September October November December".split(" "),months_abbr:!1,offset:[5,-5],pair:!1,readonly_element:!0,select_other_months:!0,show_icon:!0,show_other_months:!0, show_week_number:!1,start_date:!1,view:"days",weekend_days:[0,6],zero_pad:!1,onChange:null,onClear:null,onSelect:null},t,p,q,A,C,F,G,N,Y,Q,$,u,v,z,r,m,R,I,J,S,T,U,w,y,V,K,O,da,ea,fa,D,aa,a=this;a.settings={};var n=c(X),ha=function(d){d||(a.settings=c.extend({},ka,E));a.settings.readonly_element&&n.attr("readonly","readonly");var b={days:["d","j","D"],months:["F","m","M","n","t"],years:["o","Y","y"]},g=!1,f=!1,k=!1;for(type in b)c.each(b[type],function(b,c){-1<a.settings.format.indexOf(c)&&("days"== type?g=!0:"months"==type?f=!0:"years"==type&&(k=!0))});D=g&&f&&k?["years","months","days"]:!g&&f&&k?["years","months"]:!g&&!f&&k?["years"]:!g&&f&&!k?["months"]:["years","months","days"];-1==c.inArray(a.settings.view,D)&&(a.settings.view=D[D.length-1]);T=S=[];for(var h,b=0;2>b;b++)h=0==b?a.settings.disabled_dates:a.settings.enabled_dates,c.isArray(h)&&0<h.length&&c.each(h,function(){for(var a=this.split(" "),b=0;4>b;b++){a[b]||(a[b]="*");a[b]=-1<a[b].indexOf(",")?a[b].split(","):Array(a[b]);for(var d= 0;d<a[b].length;d++)if(-1<a[b][d].indexOf("-")){var e=a[b][d].match(/^([0-9]+)\-([0-9]+)/);if(null!=e){for(var f=j(e[1]);f<=j(e[2]);f++)-1==c.inArray(f,a[b])&&a[b].push(f+"");a[b].splice(d,1)}}for(d=0;d<a[b].length;d++)a[b][d]=isNaN(j(a[b][d]))?a[b][d]:j(a[b][d])}h.push(a)}),0==b&&(T=h),S=h;var b=new Date,e=!a.settings.reference_date?n.data("zdp_reference_date")&&void 0!=n.data("zdp_reference_date")?n.data("zdp_reference_date"):b:a.settings.reference_date,l,s;y=w=void 0;u=e.getMonth();Y=b.getMonth(); v=e.getFullYear();Q=b.getFullYear();z=e.getDate();$=b.getDate();if(!0===a.settings.direction)w=e;else if(!1===a.settings.direction)y=e,O=y.getMonth(),K=y.getFullYear(),V=y.getDate();else if(!c.isArray(a.settings.direction)&&P(a.settings.direction)&&0<j(a.settings.direction)||c.isArray(a.settings.direction)&&(!0===a.settings.direction[0]||P(a.settings.direction[0])&&0<a.settings.direction[0]||(l=W(a.settings.direction[0])))&&(!1===a.settings.direction[1]||P(a.settings.direction[1])&&0<=a.settings.direction[1]|| (s=W(a.settings.direction[1]))))w=l?l:new Date(v,u,z+(!c.isArray(a.settings.direction)?j(a.settings.direction):j(!0===a.settings.direction[0]?0:a.settings.direction[0]))),u=w.getMonth(),v=w.getFullYear(),z=w.getDate(),s&&+s>=+w?y=s:!s&&(!1!==a.settings.direction[1]&&c.isArray(a.settings.direction))&&(y=new Date(v,u,z+j(a.settings.direction[1]))),y&&(O=y.getMonth(),K=y.getFullYear(),V=y.getDate());else if(!c.isArray(a.settings.direction)&&P(a.settings.direction)&&0>j(a.settings.direction)||c.isArray(a.settings.direction)&& (!1===a.settings.direction[0]||P(a.settings.direction[0])&&0>a.settings.direction[0])&&(P(a.settings.direction[1])&&0<=a.settings.direction[1]||(l=W(a.settings.direction[1]))))y=new Date(v,u,z+(!c.isArray(a.settings.direction)?j(a.settings.direction):j(!1===a.settings.direction[0]?0:a.settings.direction[0]))),O=y.getMonth(),K=y.getFullYear(),V=y.getDate(),l&&+l<+y?w=l:!l&&c.isArray(a.settings.direction)&&(w=new Date(K,O,V-j(a.settings.direction[1]))),w&&(u=w.getMonth(),v=w.getFullYear(),z=w.getDate()); if(B(v,u,z)){for(;B(v);)w?(v++,u=0):(v--,u=11);for(;B(v,u);)w?(u++,z=1):(u--,z=31),11<u?(v++,u=0,z=1):0>u&&(v--,u=11,z=31);for(;B(v,u,z);)w?z++:z--;b=new Date(v,u,z);v=b.getFullYear();u=b.getMonth();z=b.getDate()}(l=W(n.val()||(a.settings.start_date?a.settings.start_date:"")))&&B(l.getFullYear(),l.getMonth(),l.getDate())&&n.val("");ga(l);if(!a.settings.always_visible&&(d||(a.settings.show_icon?(l='<button type="button" class="Zebra_DatePicker_Icon'+("disabled"==n.attr("disabled")?" Zebra_DatePicker_Icon_Disabled": "")+'">Pick a date</button>',q=c(l),a.icon=q,aa=q.add(n)):aa=n,aa.bind("click",function(b){b.preventDefault();n.attr("disabled")||("none"!=p.css("display")?a.hide():a.show())}),void 0!=q&&q.insertAfter(X)),void 0!=q)){q.attr("style","");a.settings.inside&&q.addClass("Zebra_DatePicker_Icon_Inside");l=n.outerHeight(!1);s=parseInt(n.css("marginTop"),10)||0;var b=parseInt(n.css("marginRight"),10)||0,e=q.outerWidth(!0),x=q.outerHeight(!0),Z=parseInt(q.css("marginLeft"),10)||0;a.settings.inside?q.css("marginLeft", -(b+e)):q.css("marginLeft",-b+Z);q.css("marginTop",s+(l-x)/2)}void 0!=q&&(n.is(":visible")?q.show():q.hide());d||(l='<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">&#171;</td><td class="dp_caption">&#032;</td><td class="dp_next">&#187;</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td>'+a.settings.lang_clear_date+"</td></tr></table></div>",p=c(l),a.datepicker= p,A=c("table.dp_header",p),C=c("table.dp_daypicker",p),F=c("table.dp_monthpicker",p),G=c("table.dp_yearpicker",p),N=c("table.dp_footer",p),a.settings.always_visible?n.attr("disabled")||(a.settings.always_visible.append(p),a.show()):c("body").append(p),p.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)","mouseover",function(){c(this).addClass("dp_hover")}).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", "mouseout",function(){c(this).removeClass("dp_hover")}),d=c("td",A),"firefox"==L.name?d.css("MozUserSelect","none"):"explorer"==L.name?d.bind("selectstart",function(){return!1}):d.mousedown(function(){return!1}),c(".dp_previous",A).bind("click",function(){c(this).hasClass("dp_blocked")||("months"==t?m--:"years"==t?m-=12:0>--r&&(r=11,m--),M())}),c(".dp_caption",A).bind("click",function(){t="days"==t?-1<c.inArray("months",D)?"months":-1<c.inArray("years",D)?"years":"days":"months"==t?-1<c.inArray("years", D)?"years":-1<c.inArray("days",D)?"days":"months":-1<c.inArray("days",D)?"days":-1<c.inArray("months",D)?"months":"years";M()}),c(".dp_next",A).bind("click",function(){c(this).hasClass("dp_blocked")||("months"==t?m++:"years"==t?m+=12:12==++r&&(r=0,m++),M())}),C.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)","click",function(){ba(m,r,j(c(this).html()),"days",c(this))}),F.delegate("td:not(.dp_disabled)","click",function(){var b=c(this).attr("class").match(/dp\_month\_([0-9]+)/); r=j(b[1]);-1==c.inArray("days",D)?ba(m,r,1,"months",c(this)):(t="days",a.settings.always_visible&&n.val(""),M())}),G.delegate("td:not(.dp_disabled)","click",function(){m=j(c(this).html());-1==c.inArray("months",D)?ba(m,1,1,"years",c(this)):(t="months",a.settings.always_visible&&n.val(""),M())}),c("td",N).bind("click",function(b){b.preventDefault();n.val("");a.settings.always_visible||(m=r=J=I=R=null,N.css("display","none"));a.hide();if(a.settings.onClear&&"function"==typeof a.settings.onClear)a.settings.onClear(n)}), a.settings.always_visible||c(document).bind({mousedown:a._mousedown,keyup:a._keyup}),M())};a.hide=function(){a.settings.always_visible||(ia("hide"),p.css("display","none"))};a.show=function(){t=a.settings.view;var d=W(n.val()||(a.settings.start_date?a.settings.start_date:""));d?(I=d.getMonth(),r=d.getMonth(),J=d.getFullYear(),m=d.getFullYear(),R=d.getDate(),B(J,I,R)&&(n.val(""),r=u,m=v)):(r=u,m=v);M();if(a.settings.always_visible)p.css("display","block");else{var d=p.outerWidth(),b=p.outerHeight(), g=(void 0!=q?q.offset().left+q.outerWidth(!0):n.offset().left+n.outerWidth(!0))+a.settings.offset[0],f=(void 0!=q?q.offset().top:n.offset().top)-b+a.settings.offset[1],k=c(window).width(),h=c(window).height(),e=c(window).scrollTop(),l=c(window).scrollLeft();g+d>l+k&&(g=l+k-d);g<l&&(g=l);f+b>e+h&&(f=e+h-b);f<e&&(f=e);p.css({left:g,top:f});p.fadeIn("explorer"==L.name&&9>L.version?0:150,"linear");ia()}};a.update=function(d){a.original_direction&&(a.original_direction=a.direction);a.settings=c.extend(a.settings, d);ha(!0)};var W=function(d){d+="";if(""!=c.trim(d)){var b;b=a.settings.format.replace(/\s/g,"").replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");for(var g="dDjlNSwFmMnYy".split(""),f=[],k=[],h=0;h<g.length;h++)-1<(position=b.indexOf(g[h]))&&f.push({character:g[h],position:position});f.sort(function(a,b){return a.position-b.position});c.each(f,function(a,b){switch(b.character){case "d":k.push("0[1-9]|[12][0-9]|3[01]");break;case "D":k.push("[a-z]{3}");break;case "j":k.push("[1-9]|[12][0-9]|3[01]");break; case "l":k.push("[a-z]+");break;case "N":k.push("[1-7]");break;case "S":k.push("st|nd|rd|th");break;case "w":k.push("[0-6]");break;case "F":k.push("[a-z]+");break;case "m":k.push("0[1-9]|1[012]+");break;case "M":k.push("[a-z]{3}");break;case "n":k.push("[1-9]|1[012]");break;case "Y":k.push("[0-9]{4}");break;case "y":k.push("[0-9]{2}")}});if(k.length&&(f.reverse(),c.each(f,function(a,d){b=b.replace(d.character,"("+k[k.length-a-1]+")")}),k=RegExp("^"+b+"$","ig"),segments=k.exec(d.replace(/\s/g,"")))){var e, l,m,n="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Z="January February March April May June July August September October November December".split(" "),p,r=!0;f.reverse();c.each(f,function(b,d){if(!r)return!0;switch(d.character){case "m":case "n":l=j(segments[b+1]);break;case "d":case "j":e=j(segments[b+1]);break;case "D":case "l":case "F":case "M":p="D"==d.character||"l"==d.character?a.settings.days:a.settings.months;r=!1;c.each(p,function(a,c){if(r)return!0;if(segments[b+ 1].toLowerCase()==c.substring(0,"D"==d.character||"M"==d.character?3:c.length).toLowerCase()){switch(d.character){case "D":segments[b+1]=n[a].substring(0,3);break;case "l":segments[b+1]=n[a];break;case "F":segments[b+1]=Z[a];l=a+1;break;case "M":segments[b+1]=Z[a].substring(0,3),l=a+1}r=!0}});break;case "Y":m=j(segments[b+1]);break;case "y":m="19"+j(segments[b+1])}});if(r&&(d=new Date(m,(l||1)-1,e||1),d.getFullYear()==m&&d.getDate()==(e||1)&&d.getMonth()==(l||1)-1))return d}return!1}},ja=function(){var d= (new Date(m,r+1,0)).getDate(),b=(new Date(m,r,1)).getDay(),g=(new Date(m,r,0)).getDate(),b=b-a.settings.first_day_of_week,b=0>b?7+b:b;ca(a.settings.months[r]+", "+m);var f="<tr>";a.settings.show_week_number&&(f+="<th>"+a.settings.show_week_number+"</th>");for(var k=0;7>k;k++)f+="<th>"+(c.isArray(a.settings.days_abbr)&&void 0!=a.settings.days_abbr[(a.settings.first_day_of_week+k)%7]?a.settings.days_abbr[(a.settings.first_day_of_week+k)%7]:a.settings.days[(a.settings.first_day_of_week+k)%7].substr(0, 2))+"</th>";f+="</tr><tr>";for(k=0;42>k;k++){0<k&&0==k%7&&(f+="</tr><tr>");if(0==k%7&&a.settings.show_week_number){var h=new Date(m,r,k-b+1),e=h.getFullYear(),l=h.getMonth()+1,h=h.getDate(),s=void 0,n=void 0,j=void 0,p=j=void 0,q=void 0,j=n=s=void 0;3>l?(s=e-1,n=(s/4|0)-(s/100|0)+(s/400|0),j=((s-1)/4|0)-((s-1)/100|0)+((s-1)/400|0),j=n-j,p=0,q=h-1+31*(l-1)):(s=e,n=(s/4|0)-(s/100|0)+(s/400|0),j=((s-1)/4|0)-((s-1)/100|0)+((s-1)/400|0),j=n-j,p=j+1,q=h+((153*(l-3)+2)/5|0)+58+j);s=(s+n)%7;h=(q+s-p)%7;n= q+3-h;j=0>n?53-((s-j)/5|0):n>364+j?1:(n/7|0)+1;f+='<td class="dp_week_number">'+j+"</td>"}e=k-b+1;k<b?f+='<td class="'+(a.settings.select_other_months&&!B(m,r,e)?"dp_not_in_month_selectable":"dp_not_in_month")+'">'+(a.settings.select_other_months||a.settings.show_other_months?x(g-b+k+1,a.settings.zero_pad?2:0):"&#032;")+"</td>":e>d?f+='<td class="'+(a.settings.select_other_months&&!B(m,r,e)?"dp_not_in_month_selectable":"dp_not_in_month")+'">'+(a.settings.select_other_months||a.settings.show_other_months? x(e-d,a.settings.zero_pad?2:0):"&#032;")+"</td>":(l=(a.settings.first_day_of_week+k)%7,h="",B(m,r,e)?(h=-1<c.inArray(l,a.settings.weekend_days)?"dp_weekend_disabled":h+" dp_disabled",r==Y&&(m==Q&&$==e)&&(h+=" dp_disabled_current")):(-1<c.inArray(l,a.settings.weekend_days)&&(h="dp_weekend"),r==I&&(m==J&&R==e)&&(h+=" dp_selected"),r==Y&&(m==Q&&$==e)&&(h+=" dp_current")),f+="<td"+(""!=h?' class="'+c.trim(h)+'"':"")+">"+(a.settings.zero_pad?x(e,2):e)+"</td>")}C.html(c(f+"</tr>"));a.settings.always_visible&& (da=c("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)",C));C.css("display","")},ia=function(a){if("explorer"==L.name&&6==L.version){if(!U){var b=j(p.css("zIndex"))-1;U=jQuery("<iframe>",{src:'javascript:document.write("")',scrolling:"no",frameborder:0,allowtransparency:"true",css:{zIndex:b,position:"absolute",top:-1E3,left:-1E3,width:p.outerWidth(),height:p.outerHeight(),filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)",display:"none"}});c("body").append(U)}switch(a){case "hide":U.css("display", "none");break;default:a=p.offset(),U.css({top:a.top,left:a.left,display:"block"})}}},B=function(d,b,g){if((void 0==d||isNaN(d))&&(void 0==b||isNaN(b))&&(void 0==g||isNaN(g)))return!1;if(c.isArray(a.settings.direction)||0!==j(a.settings.direction)){var f=j(H(d,"undefined"!=typeof b?x(b,2):"","undefined"!=typeof g?x(g,2):"")),k=(f+"").length;if(8==k&&("undefined"!=typeof w&&f<j(H(v,x(u,2),x(z,2)))||"undefined"!=typeof y&&f>j(H(K,x(O,2),x(V,2))))||6==k&&("undefined"!=typeof w&&f<j(H(v,x(u,2)))||"undefined"!= typeof y&&f>j(H(K,x(O,2))))||4==k&&("undefined"!=typeof w&&f<v||"undefined"!=typeof y&&f>K))return!0}"undefined"!=typeof b&&(b+=1);var h=!1,e=!1;T&&c.each(T,function(){if(!h&&(-1<c.inArray(d,this[2])||-1<c.inArray("*",this[2])))if("undefined"!=typeof b&&-1<c.inArray(b,this[1])||-1<c.inArray("*",this[1]))if("undefined"!=typeof g&&-1<c.inArray(g,this[0])||-1<c.inArray("*",this[0])){if("*"==this[3])return h=!0;var a=(new Date(d,b-1,g)).getDay();if(-1<c.inArray(a,this[3]))return h=!0}});S&&c.each(S,function(){if(!e&& (-1<c.inArray(d,this[2])||-1<c.inArray("*",this[2])))if(e=!0,"undefined"!=typeof b)if(e=!0,-1<c.inArray(b,this[1])||-1<c.inArray("*",this[1])){if("undefined"!=typeof g){e=!0;if(-1<c.inArray(g,this[0])||-1<c.inArray("*",this[0])){if("*"==this[3])return e=!0;var a=(new Date(d,b-1,g)).getDay();if(-1<c.inArray(a,this[3]))return e=!0}e=!1}}else e=!1});return(!S||!e)&&T&&h?!0:!1},P=function(a){return(a+"").match(/^\-?[0-9]+$/)?!0:!1},ca=function(d){c(".dp_caption",A).html(d);if(c.isArray(a.settings.direction)|| 0!==j(a.settings.direction)){d=m;var b=r,g,f;"days"==t?(f=0>b-1?H(d-1,"11"):H(d,x(b-1,2)),g=11<b+1?H(d+1,"00"):H(d,x(b+1,2))):"months"==t?(f=d-1,g=d+1):"years"==t&&(f=d-7,g=d+7);B(f)?(c(".dp_previous",A).addClass("dp_blocked"),c(".dp_previous",A).removeClass("dp_hover")):c(".dp_previous",A).removeClass("dp_blocked");B(g)?(c(".dp_next",A).addClass("dp_blocked"),c(".dp_next",A).removeClass("dp_hover")):c(".dp_next",A).removeClass("dp_blocked")}},M=function(){if(""==C.text()||"days"==t){if(""==C.text()){a.settings.always_visible|| p.css("left",-1E3);p.css({display:"block"});ja();var d=C.outerWidth(),b=C.outerHeight();A.css("width",d);F.css({width:d,height:b});G.css({width:d,height:b});N.css("width",d);p.css({display:"none"})}else ja();F.css("display","none");G.css("display","none")}else if("months"==t){ca(m);d="<tr>";for(b=0;12>b;b++){0<b&&0==b%3&&(d+="</tr><tr>");var g="dp_month_"+b;B(m,b)?g+=" dp_disabled":!1!==I&&I==b?g+=" dp_selected":Y==b&&Q==m&&(g+=" dp_current");d+='<td class="'+c.trim(g)+'">'+(c.isArray(a.settings.months_abbr)&& void 0!=a.settings.months_abbr[b]?a.settings.months_abbr[b]:a.settings.months[b].substr(0,3))+"</td>"}F.html(c(d+"</tr>"));a.settings.always_visible&&(ea=c("td:not(.dp_disabled)",F));F.css("display","");C.css("display","none");G.css("display","none")}else if("years"==t){ca(m-7+" - "+(m+4));d="<tr>";for(b=0;12>b;b++)0<b&&0==b%3&&(d+="</tr><tr>"),g="",B(m-7+b)?g+=" dp_disabled":J&&J==m-7+b?g+=" dp_selected":Q==m-7+b&&(g+=" dp_current"),d+="<td"+(""!=c.trim(g)?' class="'+c.trim(g)+'"':"")+">"+(m-7+b)+ "</td>";G.html(c(d+"</tr>"));a.settings.always_visible&&(fa=c("td:not(.dp_disabled)",G));G.css("display","");C.css("display","none");F.css("display","none")}a.settings.onChange&&("function"==typeof a.settings.onChange&&void 0!=t)&&(d="days"==t?C.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"):"months"==t?F.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"):G.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"), d.each(function(){if("days"==t)c(this).data("date",m+"-"+x(r+1,2)+"-"+x(j(c(this).text()),2));else if("months"==t){var a=c(this).attr("class").match(/dp\_month\_([0-9]+)/);c(this).data("date",m+"-"+x(j(a[1])+1,2))}else c(this).data("date",j(c(this).text()))}),a.settings.onChange(t,d,n));a.settings.always_show_clear||a.settings.always_visible||""!=n.val()?N.css("display",""):N.css("display","none")},ba=function(d,b,g,f,k){var h=new Date(d,b,g,12,0,0);f="days"==f?da:"months"==f?ea:fa;var e;e="";for(var l= h.getDate(),j=h.getDay(),p=a.settings.days[j],q=h.getMonth()+1,u=a.settings.months[q-1],t=h.getFullYear()+"",v=0;v<a.settings.format.length;v++){var w=a.settings.format.charAt(v);switch(w){case "y":t=t.substr(2);case "Y":e+=t;break;case "m":q=x(q,2);case "n":e+=q;break;case "M":u=c.isArray(a.settings.months_abbr)&&void 0!=a.settings.months_abbr[q-1]?a.settings.months_abbr[q-1]:a.settings.months[q-1].substr(0,3);case "F":e+=u;break;case "d":l=x(l,2);case "j":e+=l;break;case "D":p=c.isArray(a.settings.days_abbr)&& void 0!=a.settings.days_abbr[j]?a.settings.days_abbr[j]:a.settings.days[j].substr(0,3);case "l":e+=p;break;case "N":j++;case "w":e+=j;break;case "S":e=1==l%10&&"11"!=l?e+"st":2==l%10&&"12"!=l?e+"nd":3==l%10&&"13"!=l?e+"rd":e+"th";break;default:e+=w}}n.val(e);a.settings.always_visible&&(I=h.getMonth(),r=h.getMonth(),J=h.getFullYear(),m=h.getFullYear(),R=h.getDate(),f.removeClass("dp_selected"),k.addClass("dp_selected"));a.hide();ga(h);if(a.settings.onSelect&&"function"==typeof a.settings.onSelect)a.settings.onSelect(e, d+"-"+x(b+1,2)+"-"+x(g,2),h,n);n.focus()},H=function(){for(var a="",b=0;b<arguments.length;b++)a+=arguments[b]+"";return a},x=function(a,b){for(a+="";a.length<b;)a="0"+a;return a},j=function(a){return parseInt(a,10)},ga=function(d){a.settings.pair&&c.each(a.settings.pair,function(){var a=c(this);!a.data||!a.data("Zebra_DatePicker")?a.data("zdp_reference_date",d):(a=a.data("Zebra_DatePicker"),a.update({reference_date:d,direction:0==a.settings.direction?1:a.settings.direction}),a.settings.always_visible&& a.show())})};a._keyup=function(c){("block"==p.css("display")||27==c.which)&&a.hide();return!0};a._mousedown=function(d){if("block"==p.css("display")){if(a.settings.show_icon&&c(d.target).get(0)===q.get(0))return!0;0==c(d.target).parents().filter(".Zebra_DatePicker").length&&a.hide()}return!0};var L={init:function(){this.name=this.searchString(this.dataBrowser)||"";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||""},searchString:function(a){for(var b= 0;b<a.length;b++){var c=a[b].string,f=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(f)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"explorer",versionSearch:"MSIE"}]}; L.init();ha()};c.fn.Zebra_DatePicker=function(X){return this.each(function(){if(void 0!=c(this).data("Zebra_DatePicker")){var E=c(this).data("Zebra_DatePicker");void 0!=E.icon&&E.icon.remove();E.datepicker.remove();c(document).unbind("keyup",E._keyup);c(document).unbind("mousedown",E._mousedown)}E=new c.Zebra_DatePicker(this,X);c(this).data("Zebra_DatePicker",E)})}})(jQuery);