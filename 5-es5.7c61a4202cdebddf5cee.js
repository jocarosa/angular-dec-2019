function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YvLY:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=e("7D21"),i=e("cp0P"),u=function(){function n(l,e){_classCallCheck(this,n),this.modalService=l,this.pokemonService=e,this.descriptioncolors=o.c,this.pokemonChains=[]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(n,l){this.pokemons=l,this.pokemon=n,this.modalRef=this.modalService.show(this.evolutionChainTemplate);var e=n.chain_url;null==this.pokemonChains[e]&&(this.pokemonChains[e]=[],this.savesEvolutionChain(e))}},{key:"savesEvolutionChain",value:function(n){var l=this;this.pokemonService.getEvolutionChainByName(n).subscribe((function(e){var t=l.getPokemonFromCache(e);t?l.pokemonChains[n].push(t):Object(o.d)(e,l.pokemonService).subscribe((function(e){l.pokemonChains[n].push(Object(o.e)(e))}))}))}},{key:"getPokemonChain",value:function(n){return this.pokemonChains[n.chain_url]}},{key:"changePokemonChain",value:function(n){this.pokemon=n}},{key:"getPokemonFromCache",value:function(n){return this.pokemons.find((function(l){return l.name==n}))}}]),n}(),a=function(){function n(l){var e=this;_classCallCheck(this,n),this.pokemonService=l,this.descriptioncolors=o.c,this.pokemons=[],this.pokeke=[],this.pokemonAnimate={},this.pokemonImageSrc={},this.animationState=!1,this.allPokemonData=[],setTimeout((function(){e.animateOnLoad="start"}),0)}return _createClass(n,[{key:"ngOnInit",value:function(){this.genera={start:1,end:150,generation:"generation-i"},this.findPokemonsByGenerationAndOffset(o.a.ONE)}},{key:"toggle",value:function(n){"over"==this.pokemonAnimate[n.name]?(this.pokemonImageSrc[n.name]=n.front_default,this.pokemonAnimate[n.name]="out"):(this.pokemonAnimate[n.name]="over",this.pokemonImageSrc[n.name]="https://img.pokemondb.net/sprites/black-white/anim/normal/".concat(n.name,".gif"))}},{key:"startAnimation",value:function(){var n=this;this.animationState=!1,setTimeout((function(){n.animationState=!0}),1)}},{key:"findPokemonsByGenerationAndOffset",value:function(n){n.menu&&(this.genera=n),this.pokemons=[],this.startAnimation();var l=n.start;this.pikachuLoading=!0;for(var e=1;e<16;e++)this.savesPokemon(n.generation,l),l++}},{key:"savesPokemon",value:function(n,l){var e=this,t=Object(o.d)(l,this.pokemonService);Object(i.a)(t).subscribe({next:function(l){var t=Object(o.e)(l[0]);e.pokemons.length<15&&(t.isValid=n==t.generation,e.pokemons.push(t)),15==e.pokemons.length&&(e.pokeke=e.pokemons,e.pikachuLoading=!1)}})}},{key:"openModal",value:function(n){this.evolutionModal.openModal(n,this.pokemons)}}]),n}(),r=function n(){_classCallCheck(this,n)},s=e("pMnS"),c=e("iInd"),p=e("SVse"),m=e("6No5"),g=e("s7LF"),b=t.nb({encapsulation:2,styles:[],data:{}});function f(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"li",[["class","pagination-first page-item"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectPage(1,e)&&t),t}),null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.noPrevious()||e.disabled),n(l,1,0,e.getText("first"))}))}function k(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"li",[["class","pagination-prev page-item"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.selectPage(o.page-1,e)&&t),t}),null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.noPrevious()||e.disabled),n(l,1,0,e.getText("previous"))}))}function d(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"li",[["class","pagination-page page-item"]],[[2,"active",null],[2,"disabled",null]],null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectPage(n.context.$implicit.number,e)&&t),t}),null,null))],null,(function(n,l){n(l,0,0,l.context.$implicit.active,l.component.disabled&&!l.context.$implicit.active),n(l,1,0,l.context.$implicit.text)}))}function h(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"li",[["class","pagination-next page-item"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.selectPage(o.page+1,e)&&t),t}),null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.noNext()||e.disabled),n(l,1,0,e.getText("next"))}))}function y(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"li",[["class","pagination-last page-item"]],[[2,"disabled",null]],null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.selectPage(o.totalPages,e)&&t),t}),null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.noNext()||e.disabled),n(l,1,0,e.getText("last"))}))}function v(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,12,"ul",[["class","pagination"]],null,null,null,null,null)),t.Fb(512,null,p.s,p.t,[t.q,t.r,t.k,t.B]),t.ob(2,278528,null,0,p.h,[p.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t.eb(16777216,null,null,1,null,f)),t.ob(4,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,k)),t.ob(6,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,d)),t.ob(8,278528,null,0,p.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.eb(16777216,null,null,1,null,h)),t.ob(10,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,y)),t.ob(12,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"pagination",e.classMap),n(l,4,0,e.boundaryLinks),n(l,6,0,e.directionLinks),n(l,8,0,e.pages),n(l,10,0,e.directionLinks),n(l,12,0,e.boundaryLinks)}),null)}var C=function(){function n(){_classCallCheck(this,n),this.next=new t.m,this.currentPage=1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"pageChanged",value:function(n){this.next.emit({start:n.page*n.itemsPerPage+this.generac.start-n.itemsPerPage,end:this.generac.end,generation:this.generac.generation}),this.generac.tab=!1}}]),n}(),x=t.nb({encapsulation:0,styles:[[""]],data:{}});function P(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,5,"pagination",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"pageChanged"]],(function(n,l,e){var t=!0,o=n.component;return"ngModelChange"===l&&(t=!1!==(o.generac.currentPage=e)&&t),"pageChanged"===l&&(t=!1!==o.pageChanged(e)&&t),t}),v,b)),t.ob(1,114688,null,0,m.b,[t.k,m.c,t.h],{directionLinks:[0,"directionLinks"],itemsPerPage:[1,"itemsPerPage"],totalItems:[2,"totalItems"]},{pageChanged:"pageChanged"}),t.Fb(1024,null,g.b,(function(n){return[n]}),[m.b]),t.ob(3,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,g.c,null,[g.e]),t.ob(5,16384,null,0,g.d,[[4,g.c]],null,null)],(function(n,l){var e=l.component;n(l,1,0,!1,15,e.generac.end-e.generac.start),n(l,3,0,e.generac.currentPage)}),(function(n,l){n(l,0,0,t.Bb(l,5).ngClassUntouched,t.Bb(l,5).ngClassTouched,t.Bb(l,5).ngClassPristine,t.Bb(l,5).ngClassDirty,t.Bb(l,5).ngClassValid,t.Bb(l,5).ngClassInvalid,t.Bb(l,5).ngClassPending)}))}var L=function(){function n(l){_classCallCheck(this,n),this.pokemonService=l,this.generation=o.a,this.findGeneration=new t.m}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"find",value:function(n){n.currentPage=1,n.menu=!0,this.findGeneration.emit(n)}},{key:"getSpritePokemonByNo",value:function(n){return this.pokemonService.getSpritePokemonByNo(n)}}]),n}(),B=e("O2yl"),M=t.nb({encapsulation:0,styles:[["#tabContainer[_ngcontent-%COMP%]{width:20%;background-color:rgba(33,33,33,.8);height:auto;float:left}#tabContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:8px solid #f7c117;text-align:center;color:#fff;font-size:1.2em;padding:7px 0;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif}#tabContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;list-style:none;padding:0;color:#f7c117}#tabContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}#containerLinksGenen[_ngcontent-%COMP%]{border-left:0!important}#containerLinksGenen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:63px;height:63px}.active[_ngcontent-%COMP%]{background-color:#212121}"]],data:{animation:[{type:7,name:"collapse",definitions:[{type:0,name:"1",styles:{type:6,styles:{height:"0",visibility:"hidden",overflow:"hidden"},offset:null},options:void 0},{type:0,name:"0",styles:{type:6,styles:{height:"*",visibility:"*",overflow:"hidden"},offset:null},options:void 0},{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:3,steps:[{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"{{duration}}ms {{delay}}ms ease-in"}],options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:200}}},{type:1,expr:"1 => 0",animation:[{type:3,steps:[{type:3,steps:[{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"{{duration}}ms {{delay}}ms ease-out"}],options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:200}}}],options:{}}]}});function O(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,67,"div",[["id","tabContainer"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Generations"])),(n()(),t.pb(3,0,null,null,64,"div",[["id","containerLinksGenen"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,63,"nav",[],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,8,"a",[["routerLink","/pokemon/generation/1"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.ONE)&&o),o}),null,null)),t.ob(6,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(7,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(8,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,1,{links:1}),t.Gb(603979776,2,{linksWithHrefs:1}),(n()(),t.pb(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(12,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 1"])),(n()(),t.pb(14,0,null,null,8,"a",[["routerLink","/pokemon/generation/2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,15).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.TWO)&&o),o}),null,null)),t.ob(15,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(16,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(17,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,3,{links:1}),t.Gb(603979776,4,{linksWithHrefs:1}),(n()(),t.pb(20,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(21,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 2"])),(n()(),t.pb(23,0,null,null,8,"a",[["routerLink","/pokemon/generation/3"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.THREE)&&o),o}),null,null)),t.ob(24,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(25,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(26,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,5,{links:1}),t.Gb(603979776,6,{linksWithHrefs:1}),(n()(),t.pb(29,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(30,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 3"])),(n()(),t.pb(32,0,null,null,8,"a",[["routerLink","/pokemon/generation/4"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,33).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.FOUR)&&o),o}),null,null)),t.ob(33,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(34,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(35,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,7,{links:1}),t.Gb(603979776,8,{linksWithHrefs:1}),(n()(),t.pb(38,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(39,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 4"])),(n()(),t.pb(41,0,null,null,8,"a",[["routerLink","/pokemon/generation/5"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,42).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.FIVE)&&o),o}),null,null)),t.ob(42,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(43,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(44,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,9,{links:1}),t.Gb(603979776,10,{linksWithHrefs:1}),(n()(),t.pb(47,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(48,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 5"])),(n()(),t.pb(50,0,null,null,8,"a",[["routerLink","/pokemon/generation/6"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,51).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.SIX)&&o),o}),null,null)),t.ob(51,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(52,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(53,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,11,{links:1}),t.Gb(603979776,12,{linksWithHrefs:1}),(n()(),t.pb(56,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(57,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 6"])),(n()(),t.pb(59,0,null,null,8,"a",[["routerLink","/pokemon/generation/7"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,60).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.find(i.generation.SEVEN)&&o),o}),null,null)),t.ob(60,671744,null,0,c.n,[c.k,c.a,p.g],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(61,0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t.ob(62,1720320,null,2,c.m,[c.k,t.k,t.B,[2,c.l],[2,c.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,13,{links:1}),t.Gb(603979776,14,{linksWithHrefs:1}),(n()(),t.pb(65,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.pb(66,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(-1,null,[" Generation 7"]))],(function(n,l){n(l,6,0,"/pokemon/generation/1"),n(l,8,0,"active"),n(l,15,0,"/pokemon/generation/2"),n(l,17,0,"active"),n(l,24,0,"/pokemon/generation/3"),n(l,26,0,"active"),n(l,33,0,"/pokemon/generation/4"),n(l,35,0,"active"),n(l,42,0,"/pokemon/generation/5"),n(l,44,0,"active"),n(l,51,0,"/pokemon/generation/6"),n(l,53,0,"active"),n(l,60,0,"/pokemon/generation/7"),n(l,62,0,"active")}),(function(n,l){var e=l.component;n(l,5,0,t.Bb(l,6).target,t.Bb(l,6).href),n(l,12,0,t.tb(1,"",e.getSpritePokemonByNo("1"),"")),n(l,14,0,t.Bb(l,15).target,t.Bb(l,15).href),n(l,21,0,t.tb(1,"",e.getSpritePokemonByNo("152"),"")),n(l,23,0,t.Bb(l,24).target,t.Bb(l,24).href),n(l,30,0,t.tb(1,"",e.getSpritePokemonByNo("255"),"")),n(l,32,0,t.Bb(l,33).target,t.Bb(l,33).href),n(l,39,0,t.tb(1,"",e.getSpritePokemonByNo("390"),"")),n(l,41,0,t.Bb(l,42).target,t.Bb(l,42).href),n(l,48,0,t.tb(1,"",e.getSpritePokemonByNo("494"),"")),n(l,50,0,t.Bb(l,51).target,t.Bb(l,51).href),n(l,57,0,t.tb(1,"",e.getSpritePokemonByNo("650"),"")),n(l,59,0,t.Bb(l,60).target,t.Bb(l,60).href),n(l,66,0,t.tb(1,"",e.getSpritePokemonByNo("725"),""))}))}var I=e("LqlI"),_=t.nb({encapsulation:0,styles:[[".containerChain[_ngcontent-%COMP%]{padding:8px;height:auto;border:5px solid #000;background-color:#fff}.pokemonImg[_ngcontent-%COMP%]{width:274px;height:258px;margin-left:21%}.pokemonDescription[_ngcontent-%COMP%]{border-radius:10px;padding:10px;text-align:center}.chainStyle[_ngcontent-%COMP%]{list-style:none;padding:30px;width:22%;float:left;margin:auto}.pokemonType[_ngcontent-%COMP%]{padding:5px;float:left;width:150px;color:#fff}"]],data:{}});function K(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"div",[["class","pokemonType"]],[[4,"background-color",null]],null,null,null,null)),(n()(),t.Ib(1,null,["",""]))],null,(function(n,l){n(l,0,0,l.component.descriptioncolors[l.context.$implicit]),n(l,1,0,l.context.$implicit)}))}function G(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,4,"div",[["class","chainStyle"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.changePokemonChain(n.context.$implicit)&&o),o}),null,null)),t.ob(2,671744,null,0,c.n,[c.k,c.a,p.g],null,null),(n()(),t.pb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t.Ib(4,null,[" "," "]))],null,(function(n,l){n(l,1,0,t.Bb(l,2).target,t.Bb(l,2).href),n(l,3,0,t.tb(1,"",l.context.$implicit.sprite,"")),n(l,4,0,l.context.$implicit.name)}))}function w(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"h4",[["class","modal-title pull-left"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Evolution Chain"])),(n()(),t.eb(16777216,null,null,1,null,G)),t.ob(4,278528,null,0,p.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,4,0,e.getPokemonChain(e.pokemon))}),null)}function A(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,15,"div",[["class","containerChain"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"button",[["aria-label","Close"],["class","close pull-right"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.modalRef.hide()&&t),t}),null,null)),(n()(),t.pb(2,0,null,null,1,"span",[["aria-hidden","true"],["style","color:black;font-size: 35px;"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["\xd7"])),(n()(),t.pb(4,0,null,null,0,"img",[["class","pokemonImg"]],[[8,"src",4]],null,null,null,null)),(n()(),t.pb(5,0,null,null,2,"h4",[["class","modal-title pull-left"],["style","text-align: center;color:black"]],null,null,null,null,null)),(n()(),t.Ib(6,null,["",""])),t.Eb(7,1),(n()(),t.pb(8,0,null,null,7,"div",[["class","pokemonDescription"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,K)),t.ob(10,278528,null,0,p.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(11,0,null,null,1,"div",[["class",""]],null,null,null,null,null)),(n()(),t.Ib(12,null,["",""])),(n()(),t.pb(13,0,null,null,2,"div",[["class","modal-body"],["style","background-color: #f5f6fa; border-radius: 12px;"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,w)),t.ob(15,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,10,0,e.pokemon.types),n(l,15,0,e.getPokemonChain(e.pokemon).length>1)}),(function(n,l){var e=l.component;n(l,4,0,t.tb(1,"",e.pokemon.sprite,""));var o=t.Jb(l,6,0,n(l,7,0,t.Bb(l.parent,0),e.pokemon.name));n(l,6,0,o),n(l,12,0,e.pokemon.description)}))}function S(n){return t.Kb(0,[t.Cb(0,p.o,[]),t.Gb(671088640,1,{evolutionChainTemplate:0}),(n()(),t.eb(0,[[1,2],["evolutionChainTemplate",2]],null,0,null,A))],null,null)}var T=t.nb({encapsulation:0,styles:[[".mainPokemonContainer[_ngcontent-%COMP%]{width:100%;height:495px;border-radius:12px;background-color:rgb(226,229,224,.6);float:left}.logo[_ngcontent-%COMP%]{width:218px;height:93px;float:left;margin:-30px 0 20px}.pokemonContainer[_ngcontent-%COMP%]{width:130px;height:140px;margin:17.5px 0 1px 14px;display:inline-block;background-color:#212121;padding:10px;border:1px solid #000;box-shadow:3px 3px 3px gray;border-radius:10px}.pokemonImg[_ngcontent-%COMP%]{width:110px;height:100px;margin-left:1px}.pokemonDescription[_ngcontent-%COMP%]{font-weight:700;color:#fff;overflow-y:auto;padding:15px;margin:30px 0;height:230px;float:left}.textFormat[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;line-height:1.5em;font-weight:700}.alignCenter[_ngcontent-%COMP%]{text-align:center}.pokemonTypeContainer[_ngcontent-%COMP%]{padding:4%;color:#000}.pokemonName[_ngcontent-%COMP%]{color:#fff;font-size:13px;margin-top:-7px}.pokemonType[_ngcontent-%COMP%]{padding:4px;font-weight:700;border-radius:5px;margin-left:5px}.containerByGeneration[_ngcontent-%COMP%]{max-height:600px;width:80%;float:right;overflow-y:auto}.my-scrollbars[_ngcontent-%COMP%]{--scrollbar-color:transparent;--scrollbar-container-color:transparent;--scrollbar-thumb-color:rgba(0, 0, 0, 0.2);--scrollbar-thumb-hover-color:white;--scrollbar-border-radius:4px;--scrollbar-size:13px;--scrollbar-padding:8px;--scroll-view-margin:12;--scroll-view-color:transparent}.pikachuLoadStyle[_ngcontent-%COMP%]{margin:20% 300px 0 30%;width:20%;height:10%}.containerPaginator[_ngcontent-%COMP%]{float:right;margin-left:40%;width:40%}"]],data:{animation:[{type:7,name:"pokemonContainerAnimate",definitions:[{type:0,name:"out",styles:{type:6,styles:{transform:"scale(1)"},offset:null},options:void 0},{type:0,name:"over",styles:{type:6,styles:{transform:"scale(1.1)"},offset:null},options:void 0},{type:1,expr:"over=>out",animation:{type:4,styles:null,timings:"1000ms"},options:null}],options:{}},{type:7,name:"query",definitions:[{type:1,expr:"* => start",animation:[{type:11,selector:".contai",animation:[{type:12,timings:130,animation:[]},{type:6,styles:{opacity:1,transform:"scale(1.2)"},offset:null},{type:4,styles:{type:6,styles:{opacity:1,transform:"scale(1)"},offset:null},timings:"0.2s"}],options:null}],options:null}],options:{}},{type:7,name:"rubberBand",definitions:[{type:1,expr:"0 <=> 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"*",transform:"scale3d(1, 1, 1)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"scale3d(1.25, 0.75, 1)",easing:"ease",offset:.3},offset:null},{type:6,styles:{transform:"scale3d(0.75, 1.25, 1)",easing:"ease",offset:.4},offset:null},{type:6,styles:{transform:"scale3d(1.15, 0.85, 1)",easing:"ease",offset:.5},offset:null},{type:6,styles:{transform:"scale3d(0.95, 1.05, 1)",easing:"ease",offset:.65},offset:null},{type:6,styles:{transform:"scale3d(1.05, 0.95, 1)",easing:"ease",offset:.75},offset:null},{type:6,styles:{transform:"scale3d(1, 1, 1)",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3}}}],options:{}}]}});function F(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["class","pikachuLoadStyle"],["src","assets/img/loading.gif"]],null,null,null,null,null))],null,null)}function N(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,6,"div",[["class","pokemonContainer textFormat"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t.Bb(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==i.openModal(n.parent.context.$implicit)&&o),o}),null,null)),t.ob(2,671744,null,0,c.n,[c.k,c.a,p.g],null,null),(n()(),t.pb(3,0,null,null,0,"img",[["class","pokemonImg"]],[[8,"src",4]],null,null,null,null)),(n()(),t.pb(4,0,null,null,2,"div",[["class","pokemonName alignCenter"]],null,null,null,null,null)),(n()(),t.Ib(5,null,[""," "])),t.Eb(6,1)],null,(function(n,l){var e=l.component;n(l,1,0,t.Bb(l,2).target,t.Bb(l,2).href),n(l,3,0,t.tb(1,"",e.pokemonImageSrc[l.parent.context.$implicit.name]=null==e.pokemonImageSrc[l.parent.context.$implicit.name]?l.parent.context.$implicit.sprite:e.pokemonImageSrc[l.parent.context.$implicit.name],""));var o=t.Jb(l,5,0,n(l,6,0,t.Bb(l.parent.parent.parent,0),l.parent.context.$implicit.name));n(l,5,0,o)}))}function $(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,2,"div",[["class","contai"],["style","float:left"]],[[24,"@pokemonContainerAnimate",0]],[[null,"mouseenter"],[null,"mouseleave"]],(function(n,l,e){var t=!0,o=n.component;return"mouseenter"===l&&(t=!1!==o.toggle(n.context.$implicit)&&t),"mouseleave"===l&&(t=!1!==o.toggle(n.context.$implicit)&&t),t}),null,null)),(n()(),t.eb(16777216,null,null,1,null,N)),t.ob(2,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.context.$implicit.isValid)}),(function(n,l){n(l,0,0,l.component.pokemonAnimate[l.context.$implicit.name])}))}function J(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,2,"div",[],[[24,"@query",0]],null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,$)),t.ob(2,278528,null,0,p.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.pokeke)}),(function(n,l){n(l,0,0,l.component.animateOnLoad)}))}function j(n){return t.Kb(0,[t.Cb(0,p.o,[]),t.Gb(671088640,1,{evolutionModal:0}),(n()(),t.pb(2,0,null,null,0,"link",[["href","https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"],["rel","stylesheet"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"div",[["class","containerLogo"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,0,"img",[["class","logo"],["src","assets/img/pokemon-generations.png"]],[[24,"@rubberBand",0]],null,null,null,null)),(n()(),t.pb(5,0,null,null,2,"div",[["class","containerPaginator"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"paginator-cmp",[],null,[[null,"next"]],(function(n,l,e){var t=!0;return"next"===l&&(t=!1!==n.component.findPokemonsByGenerationAndOffset(e)&&t),t}),P,x)),t.ob(7,114688,null,0,C,[],{generac:[0,"generac"]},{next:"next"}),(n()(),t.pb(8,0,null,null,9,"div",[["class","mainPokemonContainer"]],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,1,"menu-generation-cmp",[],null,[[null,"findGeneration"]],(function(n,l,e){var t=!0;return"findGeneration"===l&&(t=!1!==n.component.findPokemonsByGenerationAndOffset(e)&&t),t}),O,M)),t.ob(10,114688,null,0,L,[B.a],null,{findGeneration:"findGeneration"}),(n()(),t.pb(11,0,null,null,6,"div",[["class","containerByGeneration"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,F)),t.ob(13,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,J)),t.ob(15,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(16,0,null,null,1,"modal-evolution-cmp",[],null,null,null,S,_)),t.ob(17,114688,[[1,4]],0,u,[I.a,B.a],null,null)],(function(n,l){var e=l.component;n(l,7,0,e.genera),n(l,10,0),n(l,13,0,e.pikachuLoading),n(l,15,0,!e.pikachuLoading),n(l,17,0)}),(function(n,l){n(l,4,0,l.component.animationState)}))}var z=t.lb("app-pokemon",a,(function(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"app-pokemon",[],null,null,null,j,T)),t.ob(1,114688,null,0,a,[B.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);e.d(l,"PokemonModuleNgFactory",(function(){return E}));var E=t.mb(r,[a],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,z]],[3,t.j],t.v]),t.zb(4608,p.l,p.k,[t.s,[2,p.v]]),t.zb(4608,g.g,g.g,[]),t.zb(4608,m.c,m.c,[]),t.zb(1073742336,p.b,p.b,[]),t.zb(1073742336,m.d,m.d,[]),t.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.k]]),t.zb(1073742336,g.f,g.f,[]),t.zb(1073742336,g.a,g.a,[]),t.zb(1073742336,r,r,[]),t.zb(1024,c.i,(function(){return[[{path:"",component:a,children:[{path:"generation/:id",component:a}]}]]}),[])])}))}}]);