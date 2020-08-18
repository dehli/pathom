goog.provide('com.wsscode.pathom.book.connect.mutation_context');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_context.create_user = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-context","create-user","com.wsscode.pathom.book.connect.mutation-context/create-user",-1551245049,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_context$create_user(p__93300,user){
var map__93303 = p__93300;
var map__93303__$1 = (((((!((map__93303 == null))))?(((((map__93303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93303):map__93303);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93303__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-context","db","com.wsscode.pathom.book.connect.mutation-context/db",-445863993));
var map__93337 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","id","user/id",-1375756663),cljs.core.random_uuid(),new cljs.core.Keyword("user","created-at","user/created-at",-84598831),(new Date())], null)], 0));
var map__93337__$1 = (((((!((map__93337 == null))))?(((((map__93337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93337):map__93337);
var new_user = map__93337__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93337__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),id], null),new_user);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),id], null);
}));
com.wsscode.pathom.book.connect.mutation_context.user_data = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-context","user-data","com.wsscode.pathom.book.connect.mutation-context/user-data",-1161312489,null),(function (){var G__93407 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__93407;

})(),(function com$wsscode$pathom$book$connect$mutation_context$user_data(p__93425,p__93426){
var map__93434 = p__93425;
var map__93434__$1 = (((((!((map__93434 == null))))?(((((map__93434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93434):map__93434);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93434__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-context","db","com.wsscode.pathom.book.connect.mutation-context/db",-445863993));
var map__93437 = p__93426;
var map__93437__$1 = (((((!((map__93437 == null))))?(((((map__93437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93437):map__93437);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93437__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),id], null));
}));
com.wsscode.pathom.book.connect.mutation_context.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-context","all-users","com.wsscode.pathom.book.connect.mutation-context/all-users",-1086639019,null),(function (){var G__93493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__93493;

})(),(function com$wsscode$pathom$book$connect$mutation_context$all_users(p__93560,_){
var map__93561 = p__93560;
var map__93561__$1 = (((((!((map__93561 == null))))?(((((map__93561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93561):map__93561);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93561__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-context","db","com.wsscode.pathom.book.connect.mutation-context/db",-445863993));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"users","users",-713552705)))], null);
}));
com.wsscode.pathom.book.connect.mutation_context.n_PLUS__PLUS_ = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-context","n++","com.wsscode.pathom.book.connect.mutation-context/n++",1631652565,null),(function (){var G__93571 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("number","value","number/value",-727460152),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("number","value++","number/value++",-545639432)], null)], null);
return G__93571;

})(),(function com$wsscode$pathom$book$connect$mutation_context$n_PLUS__PLUS_(_,p__93576){
var map__93579 = p__93576;
var map__93579__$1 = (((((!((map__93579 == null))))?(((((map__93579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93579):map__93579);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93579__$1,new cljs.core.Keyword("number","value","number/value",-727460152));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("number","value++","number/value++",-545639432),(value + (1))], null);
}));
com.wsscode.pathom.book.connect.mutation_context.api_registry = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_context.create_user,com.wsscode.pathom.book.connect.mutation_context.user_data,com.wsscode.pathom.book.connect.mutation_context.all_users,com.wsscode.pathom.book.connect.mutation_context.n_PLUS__PLUS_], null);
com.wsscode.pathom.book.connect.mutation_context.parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-context","db","com.wsscode.pathom.book.connect.mutation-context/db",-445863993),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_context.api_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_context.js.map
