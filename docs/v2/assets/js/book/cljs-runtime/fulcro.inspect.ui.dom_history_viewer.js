goog.provide('fulcro.inspect.ui.dom_history_viewer');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.inspect.helpers');
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),(function (fulcro_incoming_env,_,p__63236){
var map__63237 = p__63236;
var map__63237__$1 = (((((!((map__63237 == null))))?(((((map__63237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63237):map__63237);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63237__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__63237,map__63237__$1,state){
return (function (){
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),true,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),state], 0));
});})(env,map__63237,map__63237__$1,state))
], null);
})(),(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false], 0));
});})(env))
], null);
})(),(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.ui !== 'undefined') && (typeof fulcro.inspect.ui.dom_history_viewer !== 'undefined') && (typeof fulcro.inspect.ui.dom_history_viewer.DOMHistoryView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.dom_history_viewer.DOMHistoryView = (function fulcro$inspect$ui$dom_history_viewer$DOMHistoryView(){
var this__56082__auto__ = this;
React.Component.apply(this__56082__auto__,arguments);

if((!((this__56082__auto__.initLocalState == null)))){
this__56082__auto__.state = this__56082__auto__.initLocalState();
} else {
this__56082__auto__.state = ({});
}

return this__56082__auto__;
});

goog.object.extend(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","DOMHistoryView","fulcro.inspect.ui.dom-history-viewer/DOMHistoryView",-1737671377),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);

var x63295_63423 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x63295_63423.render = ((function (x63295_63423){
return (function (){
var this__55000__auto__ = this;
var this$ = this__55000__auto__;
var _STAR_reconciler_STAR__orig_val__63299 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__63300 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__63301 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__63302 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__63303 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__63304 = fulcro.client.primitives.get_reconciler(this__55000__auto__);
var _STAR_depth_STAR__temp_val__63305 = (fulcro.client.primitives.depth(this__55000__auto__) + (1));
var _STAR_shared_STAR__temp_val__63306 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55000__auto__);
var _STAR_instrument_STAR__temp_val__63307 = fulcro.client.primitives.instrument(this__55000__auto__);
var _STAR_parent_STAR__temp_val__63308 = this__55000__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__63304;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__63305;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__63306;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__63307;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__63308;

try{var map__63322 = fulcro.client.primitives.props(this$);
var map__63322__$1 = (((((!((map__63322 == null))))?(((((map__63322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63322):map__63322);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(css)),new cljs.core.Keyword(null,"title","title",636505583),"Click to close preview.",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__63322,map__63322__$1,visible_QMARK_,app_state,_,css,_STAR_reconciler_STAR__orig_val__63299,_STAR_depth_STAR__orig_val__63300,_STAR_shared_STAR__orig_val__63301,_STAR_instrument_STAR__orig_val__63302,_STAR_parent_STAR__orig_val__63303,_STAR_reconciler_STAR__temp_val__63304,_STAR_depth_STAR__temp_val__63305,_STAR_shared_STAR__temp_val__63306,_STAR_instrument_STAR__temp_val__63307,_STAR_parent_STAR__temp_val__63308,this$,this__55000__auto__,x63295_63423){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(map__63322,map__63322__$1,visible_QMARK_,app_state,_,css,_STAR_reconciler_STAR__orig_val__63299,_STAR_depth_STAR__orig_val__63300,_STAR_shared_STAR__orig_val__63301,_STAR_instrument_STAR__orig_val__63302,_STAR_parent_STAR__orig_val__63303,_STAR_reconciler_STAR__temp_val__63304,_STAR_depth_STAR__temp_val__63305,_STAR_shared_STAR__temp_val__63306,_STAR_instrument_STAR__temp_val__63307,_STAR_parent_STAR__temp_val__63308,this$,this__55000__auto__,x63295_63423))
], null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(app_state));
if(cljs.core.truth_(temp__5720__auto__)){
var render_fn = temp__5720__auto__;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(app_state) : render_fn.call(null,app_state));
} else {
return null;
}
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__63303;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__63302;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__63301;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__63300;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__63299;
}});})(x63295_63423))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor.displayName = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.fulcro$isComponent = true;

var x63337_63466 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;
x63337_63466.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x63337_63466.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x63337_63466){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x63337_63466))
;

x63337_63466.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x63337_63466){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x63337_63466))
;

x63337_63466.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x63337_63466.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x63337_63466){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x63337_63466))
;

x63337_63466.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x63337_63466.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x63337_63466){
return (function (this$,p__63374){
var map__63375 = p__63374;
var map__63375__$1 = (((((!((map__63375 == null))))?(((((map__63375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63375):map__63375);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x63337_63466))
;

x63337_63466.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x63337_63466.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x63337_63466){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x63337_63466))
;


var x63386_63509 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x63386_63509.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x63386_63509.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x63386_63509){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x63386_63509))
;

x63386_63509.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x63386_63509){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x63386_63509))
;

x63386_63509.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x63386_63509.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x63386_63509){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x63386_63509))
;

x63386_63509.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x63386_63509.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x63386_63509){
return (function (this$,p__63394){
var map__63396 = p__63394;
var map__63396__$1 = (((((!((map__63396 == null))))?(((((map__63396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63396):map__63396);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63396__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63396__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x63386_63509))
;

x63386_63509.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x63386_63509.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x63386_63509){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x63386_63509))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$type = true;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorStr = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorPrWriter = (function (this__56085__auto__,writer__56086__auto__,opt__56087__auto__){
return cljs.core._write(writer__56086__auto__,"fulcro.inspect.ui.dom-history-viewer/DOMHistoryView");
});
fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);

//# sourceMappingURL=fulcro.inspect.ui.dom_history_viewer.js.map
