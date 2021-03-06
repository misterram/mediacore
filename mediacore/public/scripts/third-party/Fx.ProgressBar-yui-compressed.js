/**
 * Fx.ProgressBar
 *
 * @version		1.1
 *
 * @license		MIT License
 *
 * @author		Harald Kirschner <mail [at] digitarald [dot] de>
 * @copyright	Authors
 */
Fx.ProgressBar=new Class({Extends:Fx,options:{text:null,url:null,transition:Fx.Transitions.Circ.easeOut,fit:true,link:"cancel"},initialize:function(c,b){this.element=$(c);this.parent(b);var a=this.options.url;if(a){this.element.setStyles({"background-image":"url("+a+")","background-repeat":"no-repeat"})}if(this.options.fit){a=a||this.element.getStyle("background-image").replace(/^url\(["']?|["']?\)$/g,"");if(a){var d=new Image();d.onload=function(){this.fill=d.width;d=d.onload=null;this.set(this.now||0)}.bind(this);d.src=a;if(!this.fill&&d.width){d.onload()}}}else{this.set(0)}},start:function(b,a){return this.parent(this.now,(arguments.length==1)?b.limit(0,100):b/a*100)},set:function(c){this.now=c;var a=(this.fill)?(((this.fill/-2)+(c/100)*(this.element.width||1)||0).round()+"px"):((100-c)+"%");this.element.setStyle("backgroundPosition",a+" 0px").title=Math.round(c)+"%";var b=$(this.options.text);if(b){b.set("text",Math.round(c)+"%")}return this}});