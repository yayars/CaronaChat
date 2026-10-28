/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/caronas/route";
exports.ids = ["app/api/caronas/route"];
exports.modules = {

/***/ "(rsc)/./app/api/caronas/route.ts":
/*!**********************************!*\
  !*** ./app/api/caronas/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst caronas = [\n    {\n        id: \"carona-1\",\n        origem: \"Centro de Caraguatatuba\",\n        destino: \"IFSP — Campus Caraguatatuba\",\n        horario: \"07:10\",\n        data: \"Todos os dias úteis\",\n        vagas: 3,\n        motorista: \"Rafa\",\n        observacao: \"Saída perto da praça central.\"\n    },\n    {\n        id: \"carona-2\",\n        origem: \"Indaiá\",\n        destino: \"IFSP — Campus Caraguatatuba\",\n        horario: \"07:25\",\n        data: \"Segunda a sexta\",\n        vagas: 2,\n        motorista: \"Lucas\",\n        observacao: \"Combinar ponto exato pelo chat.\"\n    },\n    {\n        id: \"carona-3\",\n        origem: \"Porto Novo\",\n        destino: \"Centro de Caraguatatuba\",\n        horario: \"08:00\",\n        data: \"A combinar\",\n        vagas: 1,\n        motorista: \"Marina\",\n        observacao: \"Pode combinar o horário com antecedência.\"\n    }\n];\nasync function GET() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        caronas\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Nhcm9uYXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsTUFBTUMsVUFBVTtJQUNkO1FBQ0VDLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsWUFBWTtJQUNkO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsV0FBVztRQUNYQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFUCxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZDtDQUNEO0FBRU0sZUFBZUM7SUFDcEIsT0FBT1YscURBQVlBLENBQUNXLElBQUksQ0FBQztRQUFFVjtJQUFRO0FBQ3JDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENHMzA0MzI1OFxcRG93bmxvYWRzXFxDYXJvbmFDaGF0X3Byb250b1xcQ2Fyb25hQ2hhdFxcYXBpXFxhcHBcXGFwaVxcY2Fyb25hc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmNvbnN0IGNhcm9uYXMgPSBbXG4gIHtcbiAgICBpZDogXCJjYXJvbmEtMVwiLFxuICAgIG9yaWdlbTogXCJDZW50cm8gZGUgQ2FyYWd1YXRhdHViYVwiLFxuICAgIGRlc3Rpbm86IFwiSUZTUCDigJQgQ2FtcHVzIENhcmFndWF0YXR1YmFcIixcbiAgICBob3JhcmlvOiBcIjA3OjEwXCIsXG4gICAgZGF0YTogXCJUb2RvcyBvcyBkaWFzIMO6dGVpc1wiLFxuICAgIHZhZ2FzOiAzLFxuICAgIG1vdG9yaXN0YTogXCJSYWZhXCIsXG4gICAgb2JzZXJ2YWNhbzogXCJTYcOtZGEgcGVydG8gZGEgcHJhw6dhIGNlbnRyYWwuXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcm9uYS0yXCIsXG4gICAgb3JpZ2VtOiBcIkluZGFpw6FcIixcbiAgICBkZXN0aW5vOiBcIklGU1Ag4oCUIENhbXB1cyBDYXJhZ3VhdGF0dWJhXCIsXG4gICAgaG9yYXJpbzogXCIwNzoyNVwiLFxuICAgIGRhdGE6IFwiU2VndW5kYSBhIHNleHRhXCIsXG4gICAgdmFnYXM6IDIsXG4gICAgbW90b3Jpc3RhOiBcIkx1Y2FzXCIsXG4gICAgb2JzZXJ2YWNhbzogXCJDb21iaW5hciBwb250byBleGF0byBwZWxvIGNoYXQuXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcm9uYS0zXCIsXG4gICAgb3JpZ2VtOiBcIlBvcnRvIE5vdm9cIixcbiAgICBkZXN0aW5vOiBcIkNlbnRybyBkZSBDYXJhZ3VhdGF0dWJhXCIsXG4gICAgaG9yYXJpbzogXCIwODowMFwiLFxuICAgIGRhdGE6IFwiQSBjb21iaW5hclwiLFxuICAgIHZhZ2FzOiAxLFxuICAgIG1vdG9yaXN0YTogXCJNYXJpbmFcIixcbiAgICBvYnNlcnZhY2FvOiBcIlBvZGUgY29tYmluYXIgbyBob3LDoXJpbyBjb20gYW50ZWNlZMOqbmNpYS5cIlxuICB9XG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjYXJvbmFzIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNhcm9uYXMiLCJpZCIsIm9yaWdlbSIsImRlc3Rpbm8iLCJob3JhcmlvIiwiZGF0YSIsInZhZ2FzIiwibW90b3Jpc3RhIiwib2JzZXJ2YWNhbyIsIkdFVCIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/caronas/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcaronas%2Froute&page=%2Fapi%2Fcaronas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcaronas%2Froute.ts&appDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcaronas%2Froute&page=%2Fapi%2Fcaronas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcaronas%2Froute.ts&appDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_CG3043258_Downloads_CaronaChat_pronto_CaronaChat_api_app_api_caronas_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/caronas/route.ts */ \"(rsc)/./app/api/caronas/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/caronas/route\",\n        pathname: \"/api/caronas\",\n        filename: \"route\",\n        bundlePath: \"app/api/caronas/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\CG3043258\\\\Downloads\\\\CaronaChat_pronto\\\\CaronaChat\\\\api\\\\app\\\\api\\\\caronas\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_CG3043258_Downloads_CaronaChat_pronto_CaronaChat_api_app_api_caronas_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjYXJvbmFzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXJvbmFzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2Fyb25hcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDRzMwNDMyNTglNUNEb3dubG9hZHMlNUNDYXJvbmFDaGF0X3Byb250byU1Q0Nhcm9uYUNoYXQlNUNhcGklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0NHMzA0MzI1OCU1Q0Rvd25sb2FkcyU1Q0Nhcm9uYUNoYXRfcHJvbnRvJTVDQ2Fyb25hQ2hhdCU1Q2FwaSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXENHMzA0MzI1OFxcXFxEb3dubG9hZHNcXFxcQ2Fyb25hQ2hhdF9wcm9udG9cXFxcQ2Fyb25hQ2hhdFxcXFxhcGlcXFxcYXBwXFxcXGFwaVxcXFxjYXJvbmFzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jYXJvbmFzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2Fyb25hc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2Fyb25hcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXENHMzA0MzI1OFxcXFxEb3dubG9hZHNcXFxcQ2Fyb25hQ2hhdF9wcm9udG9cXFxcQ2Fyb25hQ2hhdFxcXFxhcGlcXFxcYXBwXFxcXGFwaVxcXFxjYXJvbmFzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcaronas%2Froute&page=%2Fapi%2Fcaronas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcaronas%2Froute.ts&appDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcaronas%2Froute&page=%2Fapi%2Fcaronas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcaronas%2Froute.ts&appDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCG3043258%5CDownloads%5CCaronaChat_pronto%5CCaronaChat%5Capi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();