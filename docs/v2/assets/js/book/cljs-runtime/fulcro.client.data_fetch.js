goog.provide('fulcro.client.data_fetch');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.client.mutations');
goog.require('fulcro.logging');
goog.require('fulcro.client');
goog.require('fulcro.util');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.data-fetch","target","fulcro.client.data-fetch/target",-970395030),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);



fulcro.client.data_fetch.bool_QMARK_ = (function fulcro$client$data_fetch$bool_QMARK_(v){
return cljs.core.boolean_QMARK_(v);
});
/**
 * The name of the table in which fulcro load markers are stored
 */
fulcro.client.data_fetch.marker_table = fulcro.client.impl.data_fetch.marker_table;
fulcro.client.data_fetch.multiple_targets = (function fulcro$client$data_fetch$multiple_targets(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63310 = arguments.length;
var i__4731__auto___63312 = (0);
while(true){
if((i__4731__auto___63312 < len__4730__auto___63310)){
args__4736__auto__.push((arguments[i__4731__auto___63312]));

var G__63313 = (i__4731__auto___63312 + (1));
i__4731__auto___63312 = G__63313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_targeting.multiple_targets,targets);
});

fulcro.client.data_fetch.multiple_targets.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.data_fetch.multiple_targets.cljs$lang$applyTo = (function (seq62712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62712));
});

fulcro.client.data_fetch.prepend_to = (function fulcro$client$data_fetch$prepend_to(target){
return fulcro.client.impl.data_targeting.prepend_to(target);
});
fulcro.client.data_fetch.append_to = (function fulcro$client$data_fetch$append_to(target){
return fulcro.client.impl.data_targeting.append_to(target);
});
fulcro.client.data_fetch.replace_at = (function fulcro$client$data_fetch$replace_at(target){
return fulcro.client.impl.data_targeting.replace_at(target);
});
/**
 * Remove items from a query when the query element where the (node-predicate key) returns true. Commonly used with
 * a set as a predicate to elide specific well-known UI-only paths.
 */
fulcro.client.data_fetch.elide_query_nodes = (function fulcro$client$data_fetch$elide_query_nodes(query,node_predicate){
return fulcro.client.primitives.ast__GT_query(fulcro.client.impl.data_fetch.elide_ast_nodes(fulcro.client.primitives.query__GT_ast(query),node_predicate));
});
/**
 * Computes the refresh for the load by ensuring the loaded data is on the
 *   list of things to re-render.
 */
fulcro.client.data_fetch.computed_refresh = (function fulcro$client$data_fetch$computed_refresh(explicit_refresh,load_key,target){
return cljs.core.vec((function (){var result = cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.set(explicit_refresh));
var result__$1 = (((((target == null)) || (fulcro.util.ident_QMARK_(load_key))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,load_key):result);
var add_target = ((function (result,result__$1){
return (function (r,t){
if(((cljs.core.vector_QMARK_(t)) && ((cljs.core.count(t) >= (2))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),t)));
} else {
if(cljs.core.vector_QMARK_(t)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.first(t));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,t);

}
}
});})(result,result__$1))
;
if(fulcro.client.impl.data_fetch.multiple_targets_QMARK_(target)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (result,result__$1,add_target){
return (function (refresh,t){
return add_target(refresh,t);
});})(result,result__$1,add_target))
,result__$1,target);
} else {
if(cljs.core.truth_(target)){
return add_target(result__$1,target);
} else {
return result__$1;

}
}
})());
});
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
fulcro.client.data_fetch.load_params_STAR_ = (function fulcro$client$data_fetch$load_params_STAR_(state_map,server_property_or_ident,class_or_factory,p__62747){
var map__62748 = p__62747;
var map__62748__$1 = (((((!((map__62748 == null))))?(((((map__62748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62748):map__62748);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"target","target",253001721));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62748__$1,new cljs.core.Keyword(null,"initialize","initialize",609952913),false);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
if((((target == null)) || (cljs.core.vector_QMARK_(target)))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if((((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if((((fallback == null)) || ((fallback instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if((((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_(refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if((((params == null)) || (cljs.core.map_QMARK_(params)))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_(without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((((focus == null)) || (cljs.core.vector_QMARK_(focus)))){
} else {
throw (new Error("Assert failed: (or (nil? focus) (vector? focus))"));
}

if(((fulcro.util.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword)))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

var query_SINGLEQUOTE_ = (cljs.core.truth_(class_or_factory)?(function (){var G__62767 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
var G__62767__$1 = (cljs.core.truth_(focus)?fulcro.client.primitives.focus_subquery(G__62767,focus):G__62767);
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__62767__$1) : update_query.call(null,G__62767__$1));
} else {
return G__62767__$1;
}
})():null);
var query = (cljs.core.truth_((function (){var and__4120__auto__ = class_or_factory;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__4120__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,server_property_or_ident,null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)))))):(cljs.core.truth_(class_or_factory)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,query_SINGLEQUOTE_])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,server_property_or_ident,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
var marker__$1 = ((((marker === true) && (fulcro.client.impl.data_fetch.special_target_QMARK_(target))))?(function (){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),90], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Load of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(server_property_or_ident),": Boolean load marker not allowed. Turned off so load target will not overwrite a to-many relation. To fix this warning, set :marker to false or a marker ID."].join('')], 0));
}catch (e62774){if((e62774 instanceof Error)){
var e__47187__auto___63391 = e62774;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),90], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___63391], 0));
} else {
throw e62774;

}
}
return false;
})()
:marker);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,fulcro.client.data_fetch.computed_refresh(refresh,server_property_or_ident,target),parallel,fallback,marker__$1,post_mutation,without,(cljs.core.truth_((function (){var and__4120__auto__ = initialize;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = class_or_factory;
if(cljs.core.truth_(and__4120__auto____$1)){
return server_property_or_ident;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?(function (){var class$ = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
return c;
} else {
return class_or_factory;
}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,((cljs.core.map_QMARK_(initialize))?initialize:(cljs.core.truth_((function (){var and__4120__auto__ = initialize;
if(cljs.core.truth_(and__4120__auto__)){
return fulcro.client.primitives.has_initial_app_state_QMARK_(class$);
} else {
return and__4120__auto__;
}
})())?fulcro.client.primitives.get_initial_state(class$,cljs.core.PersistentArrayMap.EMPTY):cljs.core.PersistentArrayMap.EMPTY
))]);
})():null),post_mutation_params,focus,target,query,abort_id]);
});
/**
 * Generates a transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete tx (as a vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
fulcro.client.data_fetch.load_mutation = (function fulcro$client$data_fetch$load_mutation(load_args){
if((((new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args))))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,load_args,null,(1),null)),(2),null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive a query of the form: [({server-property (prim/get-query class-or-factory)} params)], which
 *   a Fulcro parser will correctly parse as a join on server-property with the given subquery and params. See the AST and
 *   instructions on parsing queries in the developer's guide.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : A component instance, Fulcro application, or reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `class-or-factory` : A component that implements IQuery, or a factory for it (if using dynamic queries). This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  class-or-factory can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery (as an edge (normalized) or value (not normalized)).
 *  Can also be special targets (multiple-targets, append-to,
 *  prepend-to, or replace-at). If you are loading by keyword (into root), then this relocates the result (ident or value) after load.
 *  When loading an entity (by ident), then this option will place additional idents at the target path(s) that point to that entity.
 *   - `initialize` - Optional. If `true`, uses `get-initial-state` on class-or-factory to  get a basis for merge of the result. This allows you
 *  to use initial state to pre-populate loads with things like UI concerns. If `:initialize` is passed a map, then it uses that as
 *  the base target merge value for class-or-factory instead.
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - ID of marker. Normalizes a load marker into app state so you can see progress.
 *   - `refresh` - A vector of keywords that will cause component re-renders after the final load/mutations. Same as follow-on
 *   reads in normal `transact!`
 *   - `parallel` - If true, indicates that this load does not have to go through the sequential network queue. Defaults to false.
 *   - `post-mutation` - A mutation (symbol) to run after the data is merged. Note, if target is supplied be sure your post mutation
 *   should expect the data at the targeted location. The `env` of that mutation will be the env of the load (if available), but will also include `:load-request`.
 *   - `post-mutation-params` - An optional map  that will be passed to the post-mutation when it is called. May only contain raw data, not code!
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error. The `env` of the fallback will be the env of the load (if available), but will also include `:load-request`.
 *   - `update-query` - A optional function that can transform the component query before sending to remote.
 *    For example, to focus a subquery using update-query:
 *        {:update-query #(prim/focus-subquery % [:my {:sub [:query]}])}
 * 
 *    Removing properties (like previous :without option):
 *        {:update-query #(df/elide-query-nodes % #{:my :elisions})}
 *   - `focus` - An optional subquery to focus on some parts of the original query.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 *   - `abort-id` - An ID (typically a keyword) that you can use to cancel the load via `fulcro.client/abort`.
 * 
 *   Notes on UI Refresh:
 *   The refresh list will automatically include what you load (as a non-duplicate):
 *   - When target is set and has 2+ elements: refresh will include an ident of the first two elements
 *   - e.g. `:target [:a 1 :thing]` -> `:refresh [[:a 1]]`
 *   - When target has a single element, refresh will include that element as a keyword
 *   - e.g. `:target [:thing]` -> `:refresh [:thing]`
 *   - When there is no target:
 *   - If prop-or-ident is a kw -> `:refresh [kw]`
 *   - If prop-or-ident is an ident -> `:refresh [ident]`
 *   In all cases, any explicit refresh things you include will not be dropped. The computed refresh list
 *   is essentially a `(-> original-refresh-list set add-computed-bits vec)`.
 *   
 */
fulcro.client.data_fetch.load = (function fulcro$client$data_fetch$load(var_args){
var G__62809 = arguments.length;
switch (G__62809) {
case 3:
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,class_or_factory){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(app_or_comp_or_reconciler,server_property_or_ident,class_or_factory,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,class_or_factory,config){
if((function (){var or__4131__auto__ = fulcro.client.primitives.component_QMARK_(app_or_comp_or_reconciler);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fulcro.client.primitives.reconciler_QMARK_(app_or_comp_or_reconciler);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
if((!((app_or_comp_or_reconciler == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
}
})()){
} else {
throw (new Error("Assert failed: (or (prim/component? app-or-comp-or-reconciler) (prim/reconciler? app-or-comp-or-reconciler) (implements? fc/FulcroApplication app-or-comp-or-reconciler))"));
}

var component_or_reconciler = (((((!((app_or_comp_or_reconciler == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$))))?true:false):false))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_or_comp_or_reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)):app_or_comp_or_reconciler);
var reconciler = fulcro.client.primitives.any__GT_reconciler(component_or_reconciler);
var map__62830 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var map__62830__$1 = (((((!((map__62830 == null))))?(((((map__62830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62830):map__62830);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62830__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__62839 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null);
if(cljs.core.truth_(query_transform_default)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62839,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
} else {
return G__62839;
}
})(),config], 0));
var state = fulcro.client.primitives.app_state(reconciler);
var mutation_args = fulcro.client.data_fetch.load_params_STAR_(cljs.core.deref(state),server_property_or_ident,class_or_factory,config__$1);
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_reconciler,fulcro.client.data_fetch.load_mutation(mutation_args));
});

fulcro.client.data_fetch.load.cljs$lang$maxFixedArity = 4;

/**
 * 
 *   See `load` for descriptions of parameters and config.
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load`, but usable from
 *   within a mutation. IMPORTANT: Make sure you specify the `:remote` parameter to this function, as
 *   well as including a `remote-load` for that remote.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *     ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *     ; You must still name the remote in the `load-action` if it is something other than default.
 *     :action (fn []
 *        (load-action env ...)
 *        ; other optimistic updates/state changes)}
 * 
 *   `env` is the mutation's environment parameter.
 */
fulcro.client.data_fetch.load_action = (function fulcro$client$data_fetch$load_action(var_args){
var G__62850 = arguments.length;
switch (G__62850) {
case 3:
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (env,server_property_or_ident,SubqueryClass){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (env,server_property_or_ident,SubqueryClass,config){
if(((cljs.core.map_QMARK_(env)) && (cljs.core.contains_QMARK_(env,new cljs.core.Keyword(null,"state","state",-1988618099))))){
} else {
throw (new Error("Assert failed: (and (map? env) (contains? env :state))"));
}

var reconciler = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(env);
var map__62859 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var map__62859__$1 = (((((!((map__62859 == null))))?(((((map__62859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62859):map__62859);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62859__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62859__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__62870 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null);
if(cljs.core.truth_(query_transform_default)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62870,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
} else {
return G__62870;
}
})(),config], 0));
var state_map = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env));
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.data_fetch.load_params_STAR_(state_map,server_property_or_ident,SubqueryClass,config__$1),new cljs.core.Keyword(null,"env","env",-1815813235),env));
});

fulcro.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `prim/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 *   - `parameters` : A map of: (will also accept as named parameters)
 * 
 *  - `without`: See `load`
 *  - `params`: See `load`
 *  - `post-mutation`: See `load`
 *  - `post-mutation-params`: See `load`
 *  - `parallel`: See `load`
 *  - `fallback`: See `load`
 *  - `marker`: See `load`
 *  - `update-query`: See `load`
 *  - `remote`: See `load`
 *  - `refresh`: See `load`
 *  - `abort-id`: See `load`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using a link  query (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because we will not have to run a full root query.
 * 
 *   WARNING: If you're using dynamic queries, you won't really know what factory your parent is using,
 *   nor can you pass it as a parameter to this function. Therefore, it is not recommended to use load-field from within
 *   a component that has a dynamic query unless you can base it on the original static query (which
 *   is what this function will use).
 *   
 */
fulcro.client.data_fetch.load_field = (function fulcro$client$data_fetch$load_field(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63462 = arguments.length;
var i__4731__auto___63464 = (0);
while(true){
if((i__4731__auto___63464 < len__4730__auto___63462)){
args__4736__auto__.push((arguments[i__4731__auto___63464]));

var G__63465 = (i__4731__auto___63464 + (1));
i__4731__auto___63464 = G__63465;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var reconciler = fulcro.client.primitives.any__GT_reconciler(component);
var map__62897 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var map__62897__$1 = (((((!((map__62897 == null))))?(((((map__62897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62897):map__62897);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var map__62899 = params__$1;
var map__62899__$1 = (((((!((map__62899 == null))))?(((((map__62899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62899):map__62899);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62899__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62899__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62899__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62899__$1,new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var state_map = (function (){var G__62913 = reconciler;
var G__62913__$1 = (((G__62913 == null))?null:fulcro.client.primitives.app_state(G__62913));
if((G__62913__$1 == null)){
return null;
} else {
return cljs.core.deref(G__62913__$1);
}
})();
var query = (function (){var G__62914 = fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null));
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__62914) : update_query.call(null,G__62914));
} else {
return G__62914;
}
})();
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Fallback must be a mutation symbol.","\n","(symbol? fallback)"].join('')));
}
} else {
}

return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,refresh,parallel,fallback,marker,params__$2,field,post_mutation,without,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),post_mutation_params,query,abort_id]),null,(1),null)),(2),null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component)], null),refresh));
});

fulcro.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq62887){
var G__62888 = cljs.core.first(seq62887);
var seq62887__$1 = cljs.core.next(seq62887);
var G__62889 = cljs.core.first(seq62887__$1);
var seq62887__$2 = cljs.core.next(seq62887__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62888,G__62889,seq62887__$2);
});

/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   `params` can be a map or named parameters, just like in `load-field`.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *  ; You must still name the remote in the `load-action` if it is something other than default.
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 * 
 *   It is preferable that you use `env` instead of `app-state` for the first argument, as this allows more details to
 *   be available for post mutations and fallbacks.
 *   
 */
fulcro.client.data_fetch.load_field_action = (function fulcro$client$data_fetch$load_field_action(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63519 = arguments.length;
var i__4731__auto___63523 = (0);
while(true){
if((i__4731__auto___63523 < len__4730__auto___63519)){
args__4736__auto__.push((arguments[i__4731__auto___63523]));

var G__63528 = (i__4731__auto___63523 + (1));
i__4731__auto___63523 = G__63528;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (env_or_app_state,component_class,ident,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var env_QMARK_ = ((cljs.core.map_QMARK_(env_or_app_state)) && (cljs.core.contains_QMARK_(env_or_app_state,new cljs.core.Keyword(null,"state","state",-1988618099))));
var env = ((env_QMARK_)?env_or_app_state:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),env_or_app_state], null));
var map__62945 = ((env_QMARK_)?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(env)):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),true], null));
var map__62945__$1 = (((((!((map__62945 == null))))?(((((map__62945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62945):map__62945);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62945__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62945__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var map__62946 = params__$1;
var map__62946__$1 = (((((!((map__62946 == null))))?(((((map__62946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62946):map__62946);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62946__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62946__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62946__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62946__$1,new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var state_map = (function (){var G__62955 = env;
var G__62955__$1 = (((G__62955 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__62955));
if((G__62955__$1 == null)){
return null;
} else {
return cljs.core.deref(G__62955__$1);
}
})();
var query = (function (){var G__62957 = fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null));
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__62957) : update_query.call(null,G__62957));
} else {
return G__62957;
}
})();
if(env_QMARK_){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),335], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["load-field-action for field ",field," was called with app state instead of env. This is a deprecated usage and some features may not work when using it."], 0));
}catch (e62960){if((e62960 instanceof Error)){
var e__47187__auto___63582 = e62960;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),335], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___63582], 0));
} else {
throw e62960;

}
}}

return fulcro.client.impl.data_fetch.mark_ready((function (){var G__62965 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,refresh,parallel,fallback,marker,params__$2,field,env,post_mutation,without,ident,post_mutation_params,query,abort_id]);
return G__62965;
})());
});

fulcro.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
fulcro.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq62929){
var G__62931 = cljs.core.first(seq62929);
var seq62929__$1 = cljs.core.next(seq62929);
var G__62932 = cljs.core.first(seq62929__$1);
var seq62929__$2 = cljs.core.next(seq62929__$1);
var G__62933 = cljs.core.first(seq62929__$2);
var seq62929__$3 = cljs.core.next(seq62929__$2);
var G__62934 = cljs.core.first(seq62929__$3);
var seq62929__$4 = cljs.core.next(seq62929__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62931,G__62932,G__62933,G__62934,seq62929__$4);
});

/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-action` or
 *   `load-field-action` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
fulcro.client.data_fetch.remote_load = (function fulcro$client$data_fetch$remote_load(parsing_env){
var ast = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null)], 0));
});
fulcro.client.data_fetch.data_state_QMARK_ = (function fulcro$client$data_fetch$data_state_QMARK_(state){
return fulcro.client.impl.data_fetch.data_state_QMARK_(state);
});
fulcro.client.data_fetch.ready_QMARK_ = (function fulcro$client$data_fetch$ready_QMARK_(state){
return fulcro.client.impl.data_fetch.ready_QMARK_(state);
});
fulcro.client.data_fetch.loading_QMARK_ = (function fulcro$client$data_fetch$loading_QMARK_(state){
return fulcro.client.impl.data_fetch.loading_QMARK_(state);
});
fulcro.client.data_fetch.failed_QMARK_ = (function fulcro$client$data_fetch$failed_QMARK_(state){
return fulcro.client.impl.data_fetch.failed_QMARK_(state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be a factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static prim/IQuery
 *  (query [this] [{:thing2 (prim/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (prim/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static prim/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (prim/factory Thing2))
 *   ```
 */
fulcro.client.data_fetch.lazily_loaded = (function fulcro$client$data_fetch$lazily_loaded(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63631 = arguments.length;
var i__4731__auto___63632 = (0);
while(true){
if((i__4731__auto___63632 < len__4730__auto___63631)){
args__4736__auto__.push((arguments[i__4731__auto___63632]));

var G__63634 = (i__4731__auto___63632 + (1));
i__4731__auto___63632 = G__63634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__63048){
var map__63050 = p__63048;
var map__63050__$1 = (((((!((map__63050 == null))))?(((((map__63050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63050):map__63050);
var ready_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63050__$1,new cljs.core.Keyword(null,"ready-render","ready-render",-1421004936),((function (map__63050,map__63050__$1){
return (function (_){
return "Queued";
});})(map__63050,map__63050__$1))
);
var loading_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63050__$1,new cljs.core.Keyword(null,"loading-render","loading-render",-1821208169),((function (map__63050,map__63050__$1,ready_render){
return (function (_){
return "Loading...";
});})(map__63050,map__63050__$1,ready_render))
);
var failed_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63050__$1,new cljs.core.Keyword(null,"failed-render","failed-render",-433071277),((function (map__63050,map__63050__$1,ready_render,loading_render){
return (function (_){
return "Loading error!";
});})(map__63050,map__63050__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"not-present-render","not-present-render",-946766938));
var state = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(fulcro.client.data_fetch.ready_QMARK_(state))){
return (ready_render.cljs$core$IFn$_invoke$arity$1 ? ready_render.cljs$core$IFn$_invoke$arity$1(props) : ready_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(state))){
return (loading_render.cljs$core$IFn$_invoke$arity$1 ? loading_render.cljs$core$IFn$_invoke$arity$1(props) : loading_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(state))){
return (failed_render.cljs$core$IFn$_invoke$arity$1 ? failed_render.cljs$core$IFn$_invoke$arity$1(props) : failed_render.call(null,props));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = not_present_render;
if(cljs.core.truth_(and__4120__auto__)){
return (props == null);
} else {
return and__4120__auto__;
}
})())){
return (not_present_render.cljs$core$IFn$_invoke$arity$1 ? not_present_render.cljs$core$IFn$_invoke$arity$1(props) : not_present_render.call(null,props));
} else {
return (data_render.cljs$core$IFn$_invoke$arity$1 ? data_render.cljs$core$IFn$_invoke$arity$1(props) : data_render.call(null,props));

}
}
}
}
});

fulcro.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq63028){
var G__63029 = cljs.core.first(seq63028);
var seq63028__$1 = cljs.core.next(seq63028);
var G__63030 = cljs.core.first(seq63028__$1);
var seq63028__$2 = cljs.core.next(seq63028__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63029,G__63030,seq63028__$2);
});

fulcro.client.data_fetch.refresh_BANG_ = (function fulcro$client$data_fetch$refresh_BANG_(var_args){
var G__63083 = arguments.length;
switch (G__63083) {
case 2:
return fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,load_options){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(component,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),fulcro.client.primitives.react_type(component),load_options);
});

fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3(component,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),fulcro.client.primitives.react_type(component));
});

fulcro.client.data_fetch.refresh_BANG_.cljs$lang$maxFixedArity = 2;

fulcro.client.data_fetch.load_STAR_ = (function fulcro$client$data_fetch$load_STAR_(env,p__63089){
var map__63090 = p__63089;
var map__63090__$1 = (((((!((map__63090 == null))))?(((((map__63090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63090):map__63090);
var config = map__63090__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63090__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63090__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
if(cljs.core.truth_((function (){var and__4120__auto__ = post_mutation;
if(cljs.core.truth_(and__4120__auto__)){
return (!((post_mutation instanceof cljs.core.Symbol)));
} else {
return and__4120__auto__;
}
})())){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),434], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-mutation must be a symbol or nil"], 0));
}catch (e63096){if((e63096 instanceof Error)){
var e__47187__auto___63680 = e63096;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),434], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___63680], 0));
} else {
throw e63096;

}
}} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__63090,map__63090__$1,config,post_mutation,remote){
return (function (){
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"env","env",-1815813235),env));
});})(map__63090,map__63090__$1,config,post_mutation,remote))
]);
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.data-fetch","load","fulcro.client.data-fetch/load",-1506599212,null),(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.data-fetch","run-deferred-transaction","fulcro.client.data-fetch/run-deferred-transaction",934105139,null),(function (fulcro_incoming_env,_,p__63113){
var map__63114 = p__63113;
var map__63114__$1 = (((((!((map__63114 == null))))?(((((map__63114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63114):map__63114);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__63114,map__63114__$1,tx,ref,reconciler){
return (function (){
var reconciler__$1 = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(reconciler));
return setTimeout(((function (reconciler__$1,env,map__63114,map__63114__$1,tx,ref,reconciler){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,ref,tx);
});})(reconciler__$1,env,map__63114,map__63114__$1,tx,ref,reconciler))
,(1));
});})(env,map__63114,map__63114__$1,tx,ref,reconciler))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.data-fetch","deferred-transaction","fulcro.client.data-fetch/deferred-transaction",574929731,null),(function (fulcro_incoming_env,_,p__63135){
var map__63136 = p__63135;
var map__63136__$1 = (((((!((map__63136 == null))))?(((((map__63136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63136):map__63136);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__63136,map__63136__$1,tx,remote,ref){
return (function (){
var map__63141 = env;
var map__63141__$1 = (((((!((map__63141 == null))))?(((((map__63141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63141):map__63141);
var env__$1 = map__63141__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63141__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63141__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var reconciler__$1 = (cljs.core.truth_(reconciler)?reconciler:(cljs.core.truth_(component)?fulcro.client.primitives.get_reconciler(component):null
));
if(cljs.core.truth_(reconciler__$1)){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","deferred-transaction","fulcro.client.impl.data-fetch/deferred-transaction",1662063962),null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("fulcro.client.data-fetch","run-deferred-transaction","fulcro.client.data-fetch/run-deferred-transaction",934105139,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"marker","marker",865118313),false,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__$1], null))], null)], null));
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),461], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot defer transaction. Reconciler was not available. Tx = ",tx], 0));
}catch (e63147){if((e63147 instanceof Error)){
var e__47187__auto__ = e63147;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),461], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto__], 0));
} else {
throw e63147;

}
}}
});})(env,map__63136,map__63136__$1,tx,remote,ref))
], null);
})(),(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),fulcro.client.data_fetch.remote_load(env)], null);
})()], 0));
}));
fulcro.client.data_fetch.fallback_action_STAR_ = (function fulcro$client$data_fetch$fallback_action_STAR_(env,p__63156){
var map__63157 = p__63156;
var map__63157__$1 = (((((!((map__63157 == null))))?(((((map__63157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63157):map__63157);
var params = map__63157__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63157__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__63162 = fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,action,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"execute","execute",-129499188)], 0)));
var G__63162__$1 = (((G__63162 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__63162));
if((G__63162__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__63162__$1,cljs.core.PersistentVector.EMPTY);
}
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (p__63167,_,p__63168){
var map__63170 = p__63167;
var map__63170__$1 = (((((!((map__63170 == null))))?(((((map__63170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63170):map__63170);
var env = map__63170__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__63172 = p__63168;
var map__63172__$1 = (((((!((map__63172 == null))))?(((((map__63172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63172):map__63172);
var params = map__63172__$1;
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63172__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63172__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__63170,map__63170__$1,env,target,ast,ref,map__63172,map__63172__$1,params,execute,action){
return (function (){
return fulcro.client.data_fetch.fallback_action_STAR_(env,params);
});})(map__63170,map__63170__$1,env,target,ast,ref,map__63172,map__63172__$1,params,execute,action))
], null);
} else {
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([target,(cljs.core.truth_(ref)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","ref","fulcro.client.primitives/ref",-1451073405),ref):true)]);
} else {
return null;

}
}
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),(function (env,_,params){
return fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),params);
}));
/**
 * Returns the remote against which the given mutation will try to execute. Returns nil if it is not a remote mutation.
 *   `legal-remotes` is a set of legal remote names. Defaults to `#{:remote}`.
 * 
 *   Returns a set of the remotes that will be triggered for this mutation, which may be empty.
 *   
 */
fulcro.client.data_fetch.mutation_remotes = (function fulcro$client$data_fetch$mutation_remotes(state_map,p__63200,legal_remotes){
var map__63208 = p__63200;
var map__63208__$1 = (((((!((map__63208 == null))))?(((((map__63208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63208):map__63208);
var dispatch_ast = map__63208__$1;
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword(null,"params","params",710516235));
var run_mutation = ((function (map__63208,map__63208__$1,dispatch_ast,dispatch_key,params){
return (function fulcro$client$data_fetch$mutation_remotes_$_run_mutation(remote){
return fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),dispatch_ast,new cljs.core.Keyword(null,"parser","parser",-1543495310),cljs.core.constantly(null),new cljs.core.Keyword(null,"target","target",253001721),remote,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map)], null),dispatch_key,params);
});})(map__63208,map__63208__$1,dispatch_ast,dispatch_key,params))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__63208,map__63208__$1,dispatch_ast,dispatch_key,params){
return (function (remotes,r){
try{var mutation_map = run_mutation(r);
var ks = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (mutation_map,map__63208,map__63208__$1,dispatch_ast,dispatch_key,params){
return (function (p1__63186_SHARP_){
if(clojure.string.ends_with_QMARK_(cljs.core.name(p1__63186_SHARP_),"action")){
return null;
} else {
return p1__63186_SHARP_;
}
});})(mutation_map,map__63208,map__63208__$1,dispatch_ast,dispatch_key,params))
,cljs.core.keys(mutation_map)));
var possible_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"keys","keys",1068423698),null], null), null));
var active_now_QMARK_ = ((function (mutation_map,ks,possible_remotes,map__63208,map__63208__$1,dispatch_ast,dispatch_key,params){
return (function (p1__63187_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mutation_map,p1__63187_SHARP_,false);
});})(mutation_map,ks,possible_remotes,map__63208,map__63208__$1,dispatch_ast,dispatch_key,params))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_now_QMARK_,possible_remotes));
}catch (e63218){var e = e63218;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),502], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempting to get the remotes for mutation ",dispatch_ast," threw an exception. Make sure that mutation is side-effect free!",e], 0));
}catch (e63219){if((e63219 instanceof Error)){
var e__47187__auto___63777 = e63219;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),502], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___63777], 0));
} else {
throw e63219;

}
}
return cljs.core.reduced(((cljs.core.seq(remotes))?remotes:new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null)));
}});})(map__63208,map__63208__$1,dispatch_ast,dispatch_key,params))
,cljs.core.PersistentHashSet.EMPTY,legal_remotes);
});
/**
 * Mutation: Add a fallback to the current tx. `action` is the symbol of the mutation to run if this tx fails due to
 *   network or server errors (bad status codes).
 */
fulcro.client.data_fetch.fallback = (function fulcro$client$data_fetch$fallback(p__63230){
var map__63232 = p__63230;
var map__63232__$1 = (((((!((map__63232 == null))))?(((((map__63232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63232):map__63232);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return null;
});
/**
 * Returns the remote against which the given mutation will try to execute. Returns nil if it is not a remote mutation.
 *   `legal-remotes` is a set of legal remote names. Defaults to `#{:remote}`.
 * 
 *   Returns a set of the remotes that will be triggered for this mutation, which may be empty.
 * 
 *   DEPRECATED. Do not use.  Use `mutation-remotes` instead.
 *   
 */
fulcro.client.data_fetch.get_remotes = (function fulcro$client$data_fetch$get_remotes(var_args){
var G__63248 = arguments.length;
switch (G__63248) {
case 2:
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$2 = (function (state_map,dispatch_symbol){
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3(state_map,dispatch_symbol,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
});

fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3 = (function (state_map,dispatch_symbol,legal_remotes){
var run_mutation = (function fulcro$client$data_fetch$run_mutation(remote){
return fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,dispatch_symbol,null,(1),null))))),null,(1),null))))))),new cljs.core.Keyword(null,"parser","parser",-1543495310),cljs.core.constantly(null),new cljs.core.Keyword(null,"target","target",253001721),remote,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map)], null),dispatch_symbol,cljs.core.PersistentArrayMap.EMPTY);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (remotes,r){
try{var mutation_map = run_mutation(r);
var ks = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (mutation_map){
return (function (p1__63241_SHARP_){
if(clojure.string.ends_with_QMARK_(cljs.core.name(p1__63241_SHARP_),"action")){
return null;
} else {
return p1__63241_SHARP_;
}
});})(mutation_map))
,cljs.core.keys(mutation_map)));
var possible_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"keys","keys",1068423698),null], null), null));
var active_now_QMARK_ = ((function (mutation_map,ks,possible_remotes){
return (function (p1__63242_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mutation_map,p1__63242_SHARP_,false);
});})(mutation_map,ks,possible_remotes))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_now_QMARK_,possible_remotes));
}catch (e63266){var e = e63266;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),537], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempting to get the remotes for mutation ",dispatch_symbol," threw an exception. Make sure that mutation is side-effect free!",e], 0));
}catch (e63267){if((e63267 instanceof Error)){
var e__47187__auto___63809 = e63267;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),537], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___63809], 0));
} else {
throw e63267;

}
}
return cljs.core.reduced(((cljs.core.seq(remotes))?remotes:new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null)));
}}),cljs.core.PersistentHashSet.EMPTY,legal_remotes);
});

fulcro.client.data_fetch.get_remotes.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=fulcro.client.data_fetch.js.map
