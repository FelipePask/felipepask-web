module.exports = [
"[next]/root-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lang",
    ()=>lang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2f$root$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/request/root-params.js [app-rsc] (ecmascript)");
;
function lang() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2f$root$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootParam"])('lang');
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconData = {
    name: "arrow-right",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M5 12h14",
                key: "1ays0h"
            }
        ],
        [
            "path",
            {
                d: "m12 5 7 7-7 7",
                key: "xquz4c"
            }
        ]
    ]
};
__iconData.node;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/server/app-render/vary-params.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VaryParamsAccumulator: null,
    accumulateRootVaryParam: null,
    accumulateVaryParam: null,
    createResponseVaryParamsAccumulator: null,
    createVaryParamsAccumulator: null,
    createVaryingParams: null,
    createVaryingSearchParams: null,
    emptyVaryParamsAccumulator: null,
    finishAccumulatingVaryParams: null,
    getMetadataVaryParamsAccumulator: null,
    getRootParamsVaryParamsAccumulator: null,
    getViewportVaryParamsAccumulator: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VaryParamsAccumulator: function() {
        return VaryParamsAccumulator;
    },
    accumulateRootVaryParam: function() {
        return accumulateRootVaryParam;
    },
    accumulateVaryParam: function() {
        return accumulateVaryParam;
    },
    createResponseVaryParamsAccumulator: function() {
        return createResponseVaryParamsAccumulator;
    },
    createVaryParamsAccumulator: function() {
        return createVaryParamsAccumulator;
    },
    createVaryingParams: function() {
        return createVaryingParams;
    },
    createVaryingSearchParams: function() {
        return createVaryingSearchParams;
    },
    emptyVaryParamsAccumulator: function() {
        return emptyVaryParamsAccumulator;
    },
    finishAccumulatingVaryParams: function() {
        return finishAccumulatingVaryParams;
    },
    getMetadataVaryParamsAccumulator: function() {
        return getMetadataVaryParamsAccumulator;
    },
    getRootParamsVaryParamsAccumulator: function() {
        return getRootParamsVaryParamsAccumulator;
    },
    getViewportVaryParamsAccumulator: function() {
        return getViewportVaryParamsAccumulator;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
class VaryParamsAccumulator {
    /**
   * Records that a param was accessed. Yields the name into the stream the
   * first time it's seen; subsequent accesses of the same name are no-ops.
   */ add(paramName) {
        if (this._done || this._seen.has(paramName)) {
            return;
        }
        this._seen.add(paramName);
        if (this._resolve !== null) {
            this._resolve({
                value: paramName,
                done: false
            });
            this._resolve = null;
        } else {
            this._buffer.push(paramName);
        }
    }
    /** Ends the iteration. Best-effort: if skipped (e.g. on a sync-I/O abort),
   * the consumer simply reads the params yielded so far. */ close() {
        if (this._done) {
            return;
        }
        this._done = true;
        if (this._resolve !== null) {
            this._resolve({
                value: undefined,
                done: true
            });
            this._resolve = null;
        }
    }
    [Symbol.asyncIterator]() {
        return {
            next: ()=>{
                if (this._buffer.length > 0) {
                    return Promise.resolve({
                        value: this._buffer.shift(),
                        done: false
                    });
                }
                if (this._done) {
                    return Promise.resolve({
                        value: undefined,
                        done: true
                    });
                }
                return new Promise((resolve)=>{
                    this._resolve = resolve;
                });
            }
        };
    }
    constructor(){
        this._resolve = null;
        this._done = false;
        this._buffer = [];
        // The set of param names already yielded. Doubles as the dedupe guard so the
        // same name is never emitted twice.
        this._seen = new Set();
    }
}
const emptyVaryParamsAccumulator = new VaryParamsAccumulator();
emptyVaryParamsAccumulator.close();
function createResponseVaryParamsAccumulator() {
    // Create the head and rootParams accumulators as top-level fields.
    // Segment accumulators are added to the segments set as they are created.
    const head = new VaryParamsAccumulator();
    const rootParams = new VaryParamsAccumulator();
    const segments = new Set();
    return {
        head,
        rootParams,
        segments
    };
}
function createVaryParamsAccumulator() {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return null;
    }
    const responseAccumulator = (0, _workunitasyncstorageexternal.getVaryParamsAccumulator)(workUnitStore);
    if (!responseAccumulator) {
        return null;
    }
    const accumulator = new VaryParamsAccumulator();
    responseAccumulator.segments.add(accumulator);
    return accumulator;
}
function getMetadataVaryParamsAccumulator() {
    var _getVaryParamsAccumulator;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return null;
    }
    return ((_getVaryParamsAccumulator = (0, _workunitasyncstorageexternal.getVaryParamsAccumulator)(workUnitStore)) == null ? void 0 : _getVaryParamsAccumulator.head) ?? null;
}
const getViewportVaryParamsAccumulator = getMetadataVaryParamsAccumulator;
function getRootParamsVaryParamsAccumulator() {
    var _getVaryParamsAccumulator;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return null;
    }
    return ((_getVaryParamsAccumulator = (0, _workunitasyncstorageexternal.getVaryParamsAccumulator)(workUnitStore)) == null ? void 0 : _getVaryParamsAccumulator.rootParams) ?? null;
}
function accumulateVaryParam(accumulator, paramName) {
    accumulator.add(paramName);
}
function accumulateRootVaryParam(paramName) {
    const rootParamsAccumulator = getRootParamsVaryParamsAccumulator();
    if (rootParamsAccumulator !== null) {
        accumulateVaryParam(rootParamsAccumulator, paramName);
    }
}
function createVaryingParams(accumulator, originalParamsObject, optionalCatchAllParamName) {
    if (optionalCatchAllParamName !== null) {
        // When there's an optional catch-all param with no value (e.g.,
        // [[...slug]] at /), the param doesn't exist as a property on the params
        // object. Use a Proxy to track all param access — both existing params
        // and the missing optional param — including enumeration patterns like
        // Object.keys(), spread, for...in, and `in` checks.
        return new Proxy(originalParamsObject, {
            get (target, prop, receiver) {
                if (typeof prop === 'string') {
                    if (prop === optionalCatchAllParamName || Object.prototype.hasOwnProperty.call(target, prop)) {
                        accumulateVaryParam(accumulator, prop);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            has (target, prop) {
                if (prop === optionalCatchAllParamName) {
                    accumulateVaryParam(accumulator, optionalCatchAllParamName);
                }
                return Reflect.has(target, prop);
            },
            ownKeys (target) {
                // Enumerating the params object means the user's code may depend on
                // which params are present, so conservatively track the optional
                // param as accessed.
                accumulateVaryParam(accumulator, optionalCatchAllParamName);
                return Reflect.ownKeys(target);
            }
        });
    }
    // When there's no optional catch-all, all params exist as properties on the
    // object, so we can use defineProperty getters instead of a Proxy. This is
    // faster because the engine can optimize property access on regular objects
    // more aggressively than Proxy trap calls.
    const underlyingParamsWithVarying = {};
    for(const paramName in originalParamsObject){
        Object.defineProperty(underlyingParamsWithVarying, paramName, {
            get () {
                accumulateVaryParam(accumulator, paramName);
                return originalParamsObject[paramName];
            },
            enumerable: true
        });
    }
    return underlyingParamsWithVarying;
}
function createVaryingSearchParams(accumulator, originalSearchParamsObject) {
    // Search params have no fixed schema, so any access — missing-key reads, `in`
    // checks, or enumeration — must register as varying. A Proxy is required
    // (rather than per-property getters) so that enumeration of an empty
    // searchParams object still triggers a vary. All accesses bucket into the
    // single sentinel '?'; the segment is keyed by the whole query string.
    // TODO: Split into per-param tracking if the cache key evolves.
    return new Proxy(originalSearchParamsObject, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                accumulateVaryParam(accumulator, '?');
            }
            return Reflect.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                accumulateVaryParam(accumulator, '?');
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            accumulateVaryParam(accumulator, '?');
            return Reflect.ownKeys(target);
        }
    });
}
function finishAccumulatingVaryParams(responseAccumulator) {
    responseAccumulator.head.close();
    responseAccumulator.rootParams.close();
    for (const segmentAccumulator of responseAccumulator.segments){
        segmentAccumulator.close();
    }
}
}),
"[project]/node_modules/next/dist/server/request/root-params.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRootParam", {
    enumerable: true,
    get: function() {
        return getRootParam;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-rsc] (ecmascript)");
const _actionasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
const _varyparams = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/vary-params.js [app-rsc] (ecmascript)");
function getRootParam(paramName) {
    const apiName = `\`import('next/root-params').${paramName}()\``;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Missing workStore in ${apiName}`), "__NEXT_ERROR_CODE", {
            value: "E1032",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} outside of a Server Component. This is not allowed.`), "__NEXT_ERROR_CODE", {
            value: "E1006",
            enumerable: false,
            configurable: true
        });
    }
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    if (actionStore) {
        if (actionStore.isAppRoute) {
            // TODO(root-params): add support for route handlers
            throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside a Route Handler. Support for this API in Route Handlers is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
                value: "E1043",
                enumerable: false,
                configurable: true
            });
        }
        if (actionStore.isAction && workUnitStore.phase === 'action') {
            // Actions are not fundamentally tied to a route (even if they're always submitted from some page),
            // so root params would be inconsistent if an action is called from multiple roots.
            // Make sure we check if the phase is "action" - we should not error in the rerender
            // after an action revalidates or updates cookies (which will still have `actionStore.isAction === true`)
            throw Object.defineProperty(new Error(`${apiName} was used inside a Server Action. This is not supported. Functions from 'next/root-params' can only be called in the context of a route.`), "__NEXT_ERROR_CODE", {
                value: "E1014",
                enumerable: false,
                configurable: true
            });
        }
    }
    switch(workUnitStore.type){
        case 'unstable-cache':
            {
                throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside \`unstable_cache\`. This is not supported. Use \`"use cache"\` instead.`), "__NEXT_ERROR_CODE", {
                    value: "E1141",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'cache':
            {
                if (!workUnitStore.rootParams) {
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside \`"use cache"\` nested within \`unstable_cache\`. Root params are not available in this context.`), "__NEXT_ERROR_CODE", {
                        value: "E1140",
                        enumerable: false,
                        configurable: true
                    });
                }
                workUnitStore.readRootParamNames.add(paramName);
                return Promise.resolve(workUnitStore.rootParams[paramName]);
            }
        case 'prerender':
        case 'prerender-ppr':
        case 'prerender-legacy':
            {
                return createPrerenderRootParamPromise(paramName, workStore, workUnitStore, apiName);
            }
        case 'validation-client':
        case 'prerender-client':
            {
                throw Object.defineProperty(new _invarianterror.InvariantError(`${apiName} must not be used within a client component. Next.js should be preventing ${apiName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E1062",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'request':
            {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                break;
            }
        case 'private-cache':
            {
                // In dev, private caches are persisted and keyed by root params (like
                // public caches), so we track which ones were read.
                if (workUnitStore.readRootParamNames) {
                    workUnitStore.readRootParamNames.add(paramName);
                }
                break;
            }
        case 'prerender-runtime':
            {
                break;
            }
        case 'generate-static-params':
            {
                if (!(paramName in workUnitStore.rootParams)) {
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside \`generateStaticParams\`, but the \`${paramName}\` parameter was not provided by a parent \`generateStaticParams\`. In \`generateStaticParams\`, root params are only available for segments nested below the segment that provides them.`), "__NEXT_ERROR_CODE", {
                        value: "E1142",
                        enumerable: false,
                        configurable: true
                    });
                }
                break;
            }
        default:
            {
                workUnitStore;
            }
    }
    (0, _varyparams.accumulateRootVaryParam)(paramName);
    return Promise.resolve(workUnitStore.rootParams[paramName]);
}
function createPrerenderRootParamPromise(paramName, workStore, prerenderStore, apiName) {
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-legacy':
        case 'prerender-ppr':
        default:
    }
    const underlyingParams = prerenderStore.rootParams;
    switch(prerenderStore.type){
        case 'prerender':
            {
                // We are in a cacheComponents prerender.
                // The param is a fallback, so it should be treated as dynamic.
                if (prerenderStore.fallbackRouteParams && prerenderStore.fallbackRouteParams.has(paramName)) {
                    return (0, _dynamicrenderingutils.makeFallbackParamsHangingPromise)(prerenderStore.renderSignal, workStore.route, apiName, prerenderStore);
                }
                break;
            }
        case 'prerender-ppr':
            {
                // We aren't in a cacheComponents prerender, but the param is a fallback,
                // so we need to make an erroring params object which will postpone/error if you access it
                if (prerenderStore.fallbackRouteParams && prerenderStore.fallbackRouteParams.has(paramName)) {
                    return makeErroringRootParamPromise(paramName, workStore, prerenderStore, apiName);
                }
                break;
            }
        case 'prerender-legacy':
            {
                break;
            }
        default:
            {
                prerenderStore;
            }
    }
    // If the param is not a fallback param, we just return the statically available value.
    (0, _varyparams.accumulateRootVaryParam)(paramName);
    return Promise.resolve(underlyingParams[paramName]);
}
/** Deliberately async -- we want to create a rejected promise, not error synchronously. */ async function makeErroringRootParamPromise(paramName, workStore, prerenderStore, apiName) {
    const expression = (0, _reflectutils.describeStringPropertyAccess)(apiName, paramName);
    // In most dynamic APIs, we also throw if `dynamic = "error"`.
    // However, root params are only dynamic when we're generating a fallback shell,
    // and even with `dynamic = "error"` we still support generating dynamic fallback shells.
    // TODO: remove this comment when cacheComponents is the default since there will be no `dynamic = "error"`
    switch(prerenderStore.type){
        case 'prerender-ppr':
            {
                return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
            }
        case 'prerender-legacy':
            {
                return (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
            }
        default:
            {
                prerenderStore;
            }
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/src/(site)/common/components/ButtonLink.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
;
;
function ButtonLink({ href, children, variant = "solid", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300", variant === "solid" ? "bg-fg text-ink-950 hover:bg-accent" : "border border-ink-600 text-fg hover:border-fg", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                "aria-hidden": "true",
                className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            }, void 0, false, {
                fileName: "[project]/src/(site)/common/components/ButtonLink.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/(site)/common/components/ButtonLink.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/not-found.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$root$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/root-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f28$site$292f$common$2f$components$2f$ButtonLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/(site)/common/components/ButtonLink.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$get$2d$dictionary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/get-dictionary.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function NotFound() {
    const current = await (0, __TURBOPACK__imported__module__$5b$next$5d2f$root$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lang"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocale"])(current) ? current : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"];
    const { notFound } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$get$2d$dictionary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container-site flex min-h-[70svh] flex-col items-center justify-center pt-24 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow mb-4",
                children: "404"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/not-found.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display text-4xl font-medium tracking-tight sm:text-6xl",
                children: notFound.title
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/not-found.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-muted",
                children: notFound.text
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/not-found.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f28$site$292f$common$2f$components$2f$ButtonLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonLink"], {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localePath"])(locale),
                className: "mt-8",
                children: notFound.back
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/not-found.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/not-found.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/cn.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Une classNames (sin dependencias). */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
const cn = (...classes)=>classes.filter(Boolean).join(" ");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01l5ley._.js.map