module.exports = [
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ezjoC$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLayoutEffect", ()=>$78605a5d7424e31b$export$e5c5a5f917a5871c);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $78605a5d7424e31b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, $parcel$interopDefault($ezjoC$react)).useLayoutEffect : ()=>{}; //# sourceMappingURL=useLayoutEffect.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $gErir$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useEffectEvent", ()=>$1254e5bb94ac8761$export$7f54fc3180508a52);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $1254e5bb94ac8761$var$_React_useInsertionEffect;
// Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const $1254e5bb94ac8761$var$useEarlyEffect = ($1254e5bb94ac8761$var$_React_useInsertionEffect = (0, $parcel$interopDefault($gErir$react))['useInsertionEffect']) !== null && $1254e5bb94ac8761$var$_React_useInsertionEffect !== void 0 ? $1254e5bb94ac8761$var$_React_useInsertionEffect : (0, $78605a5d7424e31b$exports.useLayoutEffect);
function $1254e5bb94ac8761$export$7f54fc3180508a52(fn) {
    const ref = (0, $gErir$react.useRef)(null);
    $1254e5bb94ac8761$var$useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, $gErir$react.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
} //# sourceMappingURL=useEffectEvent.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useValueEffect.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1254e5bb94ac8761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)");
var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $fymK9$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useValueEffect", ()=>$19a2307bfabafaf1$export$14d238f342723f25);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $19a2307bfabafaf1$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, $fymK9$react.useState)(defaultValue);
    let effect = (0, $fymK9$react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, $1254e5bb94ac8761$exports.useEffectEvent)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, $1254e5bb94ac8761$exports.useEffectEvent)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
} //# sourceMappingURL=useValueEffect.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useId.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $19a2307bfabafaf1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useValueEffect.main.js [app-ssr] (ecmascript)");
var $dG5aF$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $dG5aF$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useId", ()=>$8c61827343eed941$export$f680877a34711e37);
$parcel$export(module.exports, "mergeIds", ()=>$8c61827343eed941$export$cd8c9cb68f842629);
$parcel$export(module.exports, "useSlotId", ()=>$8c61827343eed941$export$b4cc09c592e8fdb8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $8c61827343eed941$var$canUseDOM = Boolean(("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.document && window.document.createElement);
let $8c61827343eed941$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $8c61827343eed941$var$registry;
if (typeof FinalizationRegistry !== 'undefined') $8c61827343eed941$var$registry = new FinalizationRegistry((heldValue)=>{
    $8c61827343eed941$export$d41a04c74483c6ef.delete(heldValue);
});
function $8c61827343eed941$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, $dG5aF$react.useState)(defaultId);
    let nextId = (0, $dG5aF$react.useRef)(null);
    let res = (0, $dG5aF$reactariassr.useSSRSafeId)(value);
    let cleanupRef = (0, $dG5aF$react.useRef)(null);
    if ($8c61827343eed941$var$registry) $8c61827343eed941$var$registry.register(cleanupRef, res);
    if ($8c61827343eed941$var$canUseDOM) {
        const cacheIdRef = $8c61827343eed941$export$d41a04c74483c6ef.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $8c61827343eed941$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($8c61827343eed941$var$registry) $8c61827343eed941$var$registry.unregister(cleanupRef);
            $8c61827343eed941$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, $dG5aF$react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $8c61827343eed941$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $8c61827343eed941$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $8c61827343eed941$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $8c61827343eed941$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $8c61827343eed941$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $19a2307bfabafaf1$exports.useValueEffect)(id);
    let updateId = (0, $dG5aF$react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
} //# sourceMappingURL=useId.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/chain.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "chain", ()=>$1e2191638e54f613$export$e08e3b67e392101e);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $1e2191638e54f613$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
} //# sourceMappingURL=chain.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/domHelpers.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getOwnerDocument", ()=>$aaa611146751592e$export$b204af158042fbac);
$parcel$export(module.exports, "getOwnerWindow", ()=>$aaa611146751592e$export$f21a1ffae260145a);
$parcel$export(module.exports, "isShadowRoot", ()=>$aaa611146751592e$export$af51f0f06c0f328a);
const $aaa611146751592e$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $aaa611146751592e$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $aaa611146751592e$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $aaa611146751592e$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $aaa611146751592e$export$af51f0f06c0f328a(node) {
    return $aaa611146751592e$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
} //# sourceMappingURL=domHelpers.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/DOMFunctions.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $aaa611146751592e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/domHelpers.main.js [app-ssr] (ecmascript)");
var $loak6$reactstatelyflags = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/flags/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "nodeContains", ()=>$d723bea02f3e2567$export$4282f70798064fe0);
$parcel$export(module.exports, "getActiveElement", ()=>$d723bea02f3e2567$export$cd4e5573fbe2b576);
$parcel$export(module.exports, "getEventTarget", ()=>$d723bea02f3e2567$export$e58f029f0fbfdb29);
// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
function $d723bea02f3e2567$export$4282f70798064fe0(node, otherNode) {
    if (!(0, $loak6$reactstatelyflags.shadowDOM)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, $aaa611146751592e$exports.isShadowRoot)(currentNode)) currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $d723bea02f3e2567$export$cd4e5573fbe2b576 = (doc = document)=>{
    var _activeElement_shadowRoot;
    if (!(0, $loak6$reactstatelyflags.shadowDOM)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement))activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $d723bea02f3e2567$export$e58f029f0fbfdb29(event) {
    if ((0, $loak6$reactstatelyflags.shadowDOM)() && event.target.shadowRoot) {
        if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
} //# sourceMappingURL=DOMFunctions.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/ShadowTreeWalker.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $d723bea02f3e2567$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/DOMFunctions.main.js [app-ssr] (ecmascript)");
var $hdE3O$reactstatelyflags = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/flags/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "ShadowTreeWalker", ()=>$8e13b2545651735a$export$63eb3ababa9c55c4);
$parcel$export(module.exports, "createShadowTreeWalker", ()=>$8e13b2545651735a$export$4d0f8be8b12a7ef6);
// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts
class $8e13b2545651735a$export$63eb3ababa9c55c4 {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!(0, $d723bea02f3e2567$exports.nodeContains)(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!(0, $d723bea02f3e2567$exports.nodeContains)(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
     * @deprecated
     */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    constructor(doc, root, whatToShow, filter){
        this._walkerStack = [];
        this._currentSetFor = new Set();
        this._acceptNode = (node)=>{
            if (node.nodeType === Node.ELEMENT_NODE) {
                const shadowRoot = node.shadowRoot;
                if (shadowRoot) {
                    const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    this._walkerStack.unshift(walker);
                    return NodeFilter.FILTER_ACCEPT;
                } else {
                    var _this_filter;
                    if (typeof this.filter === 'function') return this.filter(node);
                    else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) return this.filter.acceptNode(node);
                    else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
                }
            }
            return NodeFilter.FILTER_SKIP;
        };
        this._doc = doc;
        this.root = root;
        this.filter = filter !== null && filter !== void 0 ? filter : null;
        this.whatToShow = whatToShow !== null && whatToShow !== void 0 ? whatToShow : NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
}
function $8e13b2545651735a$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
    if ((0, $hdE3O$reactstatelyflags.shadowDOM)()) return new $8e13b2545651735a$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
} //# sourceMappingURL=ShadowTreeWalker.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/mergeProps.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1e2191638e54f613$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/chain.main.js [app-ssr] (ecmascript)");
var $8c61827343eed941$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useId.main.js [app-ssr] (ecmascript)");
var $eVrjB$clsx = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/clsx/dist/clsx.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "mergeProps", ()=>$f847cd1382ea7cd4$export$9d1611c77c2fe928);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $f847cd1382ea7cd4$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, $1e2191638e54f613$exports.chain)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, $parcel$interopDefault($eVrjB$clsx))(a, b);
            else if (key === 'id' && a && b) result.id = (0, $8c61827343eed941$exports.mergeIds)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
} //# sourceMappingURL=mergeProps.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/mergeRefs.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "mergeRefs", ()=>$f05dc24eafaeb7e2$export$c9058316764c140e);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $f05dc24eafaeb7e2$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = $f05dc24eafaeb7e2$var$setRef(ref, value);
            hasCleanup || (hasCleanup = typeof cleanup == 'function');
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else $f05dc24eafaeb7e2$var$setRef(refs[i], null);
            });
        };
    };
}
function $f05dc24eafaeb7e2$var$setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
} //# sourceMappingURL=mergeRefs.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/filterDOMProps.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "filterDOMProps", ()=>$8d15d0e1797d4238$export$457c3d6518dd4c6f);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $8d15d0e1797d4238$var$DOMPropNames = new Set([
    'id'
]);
const $8d15d0e1797d4238$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $8d15d0e1797d4238$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $8d15d0e1797d4238$var$globalAttrs = new Set([
    'dir',
    'lang',
    'hidden',
    'inert',
    'translate'
]);
const $8d15d0e1797d4238$var$globalEvents = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart'
]);
const $8d15d0e1797d4238$var$propRe = /^(data-.*)$/;
function $8d15d0e1797d4238$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, global: global, events: events = global, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($8d15d0e1797d4238$var$DOMPropNames.has(prop) || labelable && $8d15d0e1797d4238$var$labelablePropNames.has(prop) || isLink && $8d15d0e1797d4238$var$linkPropNames.has(prop) || global && $8d15d0e1797d4238$var$globalAttrs.has(prop) || events && $8d15d0e1797d4238$var$globalEvents.has(prop) || prop.endsWith('Capture') && $8d15d0e1797d4238$var$globalEvents.has(prop.slice(0, -7)) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $8d15d0e1797d4238$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
} //# sourceMappingURL=filterDOMProps.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/focusWithoutScrolling.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "focusWithoutScrolling", ()=>$1117b6c0d4c4c164$export$de79e2c695e052f3);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1117b6c0d4c4c164$export$de79e2c695e052f3(element) {
    if ($1117b6c0d4c4c164$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $1117b6c0d4c4c164$var$getScrollableElements(element);
        element.focus();
        $1117b6c0d4c4c164$var$restoreScrollPosition(scrollableElements);
    }
}
let $1117b6c0d4c4c164$var$supportsPreventScrollCached = null;
function $1117b6c0d4c4c164$var$supportsPreventScroll() {
    if ($1117b6c0d4c4c164$var$supportsPreventScrollCached == null) {
        $1117b6c0d4c4c164$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $1117b6c0d4c4c164$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $1117b6c0d4c4c164$var$supportsPreventScrollCached;
}
function $1117b6c0d4c4c164$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $1117b6c0d4c4c164$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
} //# sourceMappingURL=focusWithoutScrolling.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getOffset.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getOffset", ()=>$16ec41ef3e36c19c$export$622cea445a1c5b7d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $16ec41ef3e36c19c$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
} //# sourceMappingURL=getOffset.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isMac", ()=>$9e20cff0af27e8cc$export$9ac100e40613ea10);
$parcel$export(module.exports, "isIPhone", ()=>$9e20cff0af27e8cc$export$186c6964ca17d99);
$parcel$export(module.exports, "isIPad", ()=>$9e20cff0af27e8cc$export$7bef049ce92e4224);
$parcel$export(module.exports, "isIOS", ()=>$9e20cff0af27e8cc$export$fedb369cb70207f1);
$parcel$export(module.exports, "isAppleDevice", ()=>$9e20cff0af27e8cc$export$e1865c3bedcd822b);
$parcel$export(module.exports, "isWebKit", ()=>$9e20cff0af27e8cc$export$78551043582a6a98);
$parcel$export(module.exports, "isChrome", ()=>$9e20cff0af27e8cc$export$6446a186d09e379e);
$parcel$export(module.exports, "isAndroid", ()=>$9e20cff0af27e8cc$export$a11b0059900ceec8);
$parcel$export(module.exports, "isFirefox", ()=>$9e20cff0af27e8cc$export$b7d78993b74f766d);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $9e20cff0af27e8cc$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    let brands;
}
function $9e20cff0af27e8cc$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
}
function $9e20cff0af27e8cc$var$cached(fn) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $9e20cff0af27e8cc$export$9ac100e40613ea10 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testPlatform(/^Mac/i);
});
const $9e20cff0af27e8cc$export$186c6964ca17d99 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testPlatform(/^iPhone/i);
});
const $9e20cff0af27e8cc$export$7bef049ce92e4224 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $9e20cff0af27e8cc$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $9e20cff0af27e8cc$export$fedb369cb70207f1 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$export$186c6964ca17d99() || $9e20cff0af27e8cc$export$7bef049ce92e4224();
});
const $9e20cff0af27e8cc$export$e1865c3bedcd822b = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$export$9ac100e40613ea10() || $9e20cff0af27e8cc$export$fedb369cb70207f1();
});
const $9e20cff0af27e8cc$export$78551043582a6a98 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testUserAgent(/AppleWebKit/i) && !$9e20cff0af27e8cc$export$6446a186d09e379e();
});
const $9e20cff0af27e8cc$export$6446a186d09e379e = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testUserAgent(/Chrome/i);
});
const $9e20cff0af27e8cc$export$a11b0059900ceec8 = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testUserAgent(/Android/i);
});
const $9e20cff0af27e8cc$export$b7d78993b74f766d = $9e20cff0af27e8cc$var$cached(function() {
    return $9e20cff0af27e8cc$var$testUserAgent(/Firefox/i);
}); //# sourceMappingURL=platform.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/openLink.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1117b6c0d4c4c164$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/focusWithoutScrolling.main.js [app-ssr] (ecmascript)");
var $9e20cff0af27e8cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)");
var $6kLG7$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "RouterProvider", ()=>$4068a0fae83b6d84$export$323e4fc2fa4753fb);
$parcel$export(module.exports, "shouldClientNavigate", ()=>$4068a0fae83b6d84$export$efa8c9099e530235);
$parcel$export(module.exports, "openLink", ()=>$4068a0fae83b6d84$export$95185d699e05d4d7);
$parcel$export(module.exports, "useRouter", ()=>$4068a0fae83b6d84$export$9a302a45f65d0572);
$parcel$export(module.exports, "useSyntheticLinkProps", ()=>$4068a0fae83b6d84$export$bdc77b0c0a3a85d6);
$parcel$export(module.exports, "getSyntheticLinkProps", ()=>$4068a0fae83b6d84$export$51437d503373d223);
$parcel$export(module.exports, "useLinkProps", ()=>$4068a0fae83b6d84$export$7e924b3091a3bd18);
$parcel$export(module.exports, "handleLinkClick", ()=>$4068a0fae83b6d84$export$13aea1a3cb5e3f1f);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $4068a0fae83b6d84$var$RouterContext = /*#__PURE__*/ (0, $6kLG7$react.createContext)({
    isNative: true,
    open: $4068a0fae83b6d84$var$openSyntheticLink,
    useHref: (href)=>href
});
function $4068a0fae83b6d84$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, $6kLG7$react.useMemo)(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $4068a0fae83b6d84$var$getSyntheticLink(target, (link)=>{
                    if ($4068a0fae83b6d84$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $4068a0fae83b6d84$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, $parcel$interopDefault($6kLG7$react)).createElement($4068a0fae83b6d84$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $4068a0fae83b6d84$export$9a302a45f65d0572() {
    return (0, $6kLG7$react.useContext)($4068a0fae83b6d84$var$RouterContext);
}
function $4068a0fae83b6d84$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $4068a0fae83b6d84$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, $9e20cff0af27e8cc$exports.isFirefox)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if ((0, $9e20cff0af27e8cc$exports.isMac)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, $9e20cff0af27e8cc$exports.isWebKit)() && (0, $9e20cff0af27e8cc$exports.isMac)() && !(0, $9e20cff0af27e8cc$exports.isIPad)() && ("TURBOPACK compile-time value", "development") !== 'test' ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $4068a0fae83b6d84$export$95185d699e05d4d7.isOpening = setOpening;
    (0, $1117b6c0d4c4c164$exports.focusWithoutScrolling)(target);
    target.dispatchEvent(event);
    $4068a0fae83b6d84$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$4068a0fae83b6d84$export$95185d699e05d4d7.isOpening = false;
function $4068a0fae83b6d84$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $4068a0fae83b6d84$var$openSyntheticLink(target, modifiers) {
    $4068a0fae83b6d84$var$getSyntheticLink(target, (link)=>$4068a0fae83b6d84$export$95185d699e05d4d7(link, modifiers));
}
function $4068a0fae83b6d84$export$bdc77b0c0a3a85d6(props) {
    let router = $4068a0fae83b6d84$export$9a302a45f65d0572();
    var _props_href;
    const href = router.useHref((_props_href = props.href) !== null && _props_href !== void 0 ? _props_href : '');
    return {
        'data-href': props.href ? href : undefined,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $4068a0fae83b6d84$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $4068a0fae83b6d84$export$7e924b3091a3bd18(props) {
    let router = $4068a0fae83b6d84$export$9a302a45f65d0572();
    var _props_href;
    const href = router.useHref((_props_href = props === null || props === void 0 ? void 0 : props.href) !== null && _props_href !== void 0 ? _props_href : '');
    return {
        href: (props === null || props === void 0 ? void 0 : props.href) ? href : undefined,
        target: props === null || props === void 0 ? void 0 : props.target,
        rel: props === null || props === void 0 ? void 0 : props.rel,
        download: props === null || props === void 0 ? void 0 : props.download,
        ping: props === null || props === void 0 ? void 0 : props.ping,
        referrerPolicy: props === null || props === void 0 ? void 0 : props.referrerPolicy
    };
}
function $4068a0fae83b6d84$export$13aea1a3cb5e3f1f(e, router, href, routerOptions) {
    // If a custom router is provided, prevent default and forward if this link should client navigate.
    if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
    !e.isDefaultPrevented() && $4068a0fae83b6d84$export$efa8c9099e530235(e.currentTarget, e) && href) {
        e.preventDefault();
        router.open(e.currentTarget, e, href, routerOptions);
    }
} //# sourceMappingURL=openLink.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/runAfterTransition.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "runAfterTransition", ()=>$e8117ebcab55be6a$export$24490316f764c430);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $e8117ebcab55be6a$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $e8117ebcab55be6a$var$transitionCallbacks = new Set();
function $e8117ebcab55be6a$var$setupGlobalEvents() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart;
    let onTransitionEnd;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $e8117ebcab55be6a$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $e8117ebcab55be6a$var$setupGlobalEvents);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function $e8117ebcab55be6a$var$cleanupDetachedElements() {
    for (const [eventTarget] of $e8117ebcab55be6a$var$transitionsByElement)// the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) $e8117ebcab55be6a$var$transitionsByElement.delete(eventTarget);
}
function $e8117ebcab55be6a$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        $e8117ebcab55be6a$var$cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($e8117ebcab55be6a$var$transitionsByElement.size === 0) fn();
        else $e8117ebcab55be6a$var$transitionCallbacks.add(fn);
    });
} //# sourceMappingURL=runAfterTransition.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDrag1D.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $16ec41ef3e36c19c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getOffset.main.js [app-ssr] (ecmascript)");
var $hK8r3$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDrag1D", ()=>$28ed3fb20343b78b$export$7bbed75feba39706);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ // Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $28ed3fb20343b78b$var$draggingElements = [];
function $28ed3fb20343b78b$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef, reverse: reverse, orientation: orientation, onHover: onHover, onDrag: onDrag, onPositionChange: onPositionChange, onIncrement: onIncrement, onDecrement: onDecrement, onIncrementToMax: onIncrementToMax, onDecrementToMin: onDecrementToMin, onCollapseToggle: onCollapseToggle } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY;
    let getNextOffset = (e)=>{
        let containerOffset = (0, $16ec41ef3e36c19c$exports.getOffset)(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0, $hK8r3$react.useRef)(false);
    let prevPosition = (0, $hK8r3$react.useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0, $hK8r3$react.useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $28ed3fb20343b78b$var$draggingElements.splice($28ed3fb20343b78b$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($28ed3fb20343b78b$var$draggingElements.some((elt)=>target.contains(elt))) return;
        $28ed3fb20343b78b$var$draggingElements.push(target);
        window.addEventListener('mousemove', onMouseDragged, false);
        window.addEventListener('mouseup', onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Left':
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case 'End':
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case 'Enter':
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
} //# sourceMappingURL=useDrag1D.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useGlobalListeners.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $eHdSW$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useGlobalListeners", ()=>$4571ff54ac709100$export$4eaf04e54aa8eed6);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $4571ff54ac709100$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, $eHdSW$react.useRef)(new Map());
    let addGlobalListener = (0, $eHdSW$react.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, $eHdSW$react.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, $eHdSW$react.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, $eHdSW$react.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
} //# sourceMappingURL=useGlobalListeners.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLabels.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8c61827343eed941$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useId.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLabels", ()=>$6ec78bde395c477d$export$d6875122194c7b44);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6ec78bde395c477d$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, $8c61827343eed941$exports.useId)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
} //# sourceMappingURL=useLabels.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useObjectRef.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $eMoU1$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useObjectRef", ()=>$475b35fe72ba49b3$export$4338b53315abf666);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $475b35fe72ba49b3$export$4338b53315abf666(ref) {
    const objRef = (0, $eMoU1$react.useRef)(null);
    const cleanupRef = (0, $eMoU1$react.useRef)(undefined);
    const refEffect = (0, $eMoU1$react.useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, $eMoU1$react.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), [
        refEffect
    ]);
} //# sourceMappingURL=useObjectRef.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useUpdateEffect.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $cagC1$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useUpdateEffect", ()=>$29293a6f5c75b37e$export$496315a1608d9602);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $29293a6f5c75b37e$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, $cagC1$react.useRef)(true);
    const lastDeps = (0, $cagC1$react.useRef)(null);
    (0, $cagC1$react.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, $cagC1$react.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
} //# sourceMappingURL=useUpdateEffect.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $ah9Dz$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useUpdateLayoutEffect", ()=>$0fa310503218f75f$export$72ef708ab07251f1);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $0fa310503218f75f$export$72ef708ab07251f1(effect, dependencies) {
    const isInitialMount = (0, $ah9Dz$react.useRef)(true);
    const lastDeps = (0, $ah9Dz$react.useRef)(null);
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
} //# sourceMappingURL=useUpdateLayoutEffect.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useResizeObserver.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $aM4zL$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useResizeObserver", ()=>$37733e1652f47193$export$683480f191c0e3ea);
function $37733e1652f47193$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $37733e1652f47193$export$683480f191c0e3ea(options) {
    const { ref: ref, box: box, onResize: onResize } = options;
    (0, $aM4zL$react.useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$37733e1652f47193$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element, {
                box: box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref,
        box
    ]);
} //# sourceMappingURL=useResizeObserver.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useSyncRef.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSyncRef", ()=>$6fc733991a9f977c$export$4debdb1a3f0fa79e);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6fc733991a9f977c$export$4debdb1a3f0fa79e(context, ref) {
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
} //# sourceMappingURL=useSyncRef.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isScrollable.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isScrollable", ()=>$9a54e9cd5db23b5d$export$2bb74740c4e19def);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $9a54e9cd5db23b5d$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
} //# sourceMappingURL=isScrollable.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParent.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9a54e9cd5db23b5d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isScrollable.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getScrollParent", ()=>$d796e7157ac96470$export$cfa2225e87938781);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $d796e7157ac96470$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, $9a54e9cd5db23b5d$exports.isScrollable)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, $9a54e9cd5db23b5d$exports.isScrollable)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
} //# sourceMappingURL=getScrollParent.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParents.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9a54e9cd5db23b5d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isScrollable.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getScrollParents", ()=>$49f0d9486c2408aa$export$94ed1c92c7beeb22);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $49f0d9486c2408aa$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if ((0, $9a54e9cd5db23b5d$exports.isScrollable)(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
} //# sourceMappingURL=getScrollParents.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/keyboard.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9e20cff0af27e8cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isCtrlKeyPressed", ()=>$2308dc377e184bb0$export$16792effe837dba3);
$parcel$export(module.exports, "willOpenKeyboard", ()=>$2308dc377e184bb0$export$c57958e35f31ed73);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2308dc377e184bb0$export$16792effe837dba3(e) {
    if ((0, $9e20cff0af27e8cc$exports.isMac)()) return e.metaKey;
    return e.ctrlKey;
}
// HTML input types that do not cause the software keyboard to appear.
const $2308dc377e184bb0$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $2308dc377e184bb0$export$c57958e35f31ed73(target) {
    return target instanceof HTMLInputElement && !$2308dc377e184bb0$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
} //# sourceMappingURL=keyboard.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useViewportSize.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $2308dc377e184bb0$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/keyboard.main.js [app-ssr] (ecmascript)");
var $4gIVO$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $4gIVO$reactariassr = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/ssr/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useViewportSize", ()=>$8b24bab62f5c65ad$export$d699905dd57c73ca);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $8b24bab62f5c65ad$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
function $8b24bab62f5c65ad$export$d699905dd57c73ca() {
    let isSSR = (0, $4gIVO$reactariassr.useIsSSR)();
    let [size, setSize] = (0, $4gIVO$react.useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $8b24bab62f5c65ad$var$getViewportSize());
    (0, $4gIVO$react.useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            // Ignore updates when zoomed.
            if ($8b24bab62f5c65ad$var$visualViewport && $8b24bab62f5c65ad$var$visualViewport.scale > 1) return;
            setSize((size)=>{
                let newSize = $8b24bab62f5c65ad$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        // When closing the keyboard, iOS does not fire the visual viewport resize event until the animation is complete.
        // We can anticipate this and resize early by handling the blur event and using the layout size.
        let frame;
        let onBlur = (e)=>{
            if ($8b24bab62f5c65ad$var$visualViewport && $8b24bab62f5c65ad$var$visualViewport.scale > 1) return;
            if ((0, $2308dc377e184bb0$exports.willOpenKeyboard)(e.target)) frame = requestAnimationFrame(()=>{
                if (!document.activeElement || !(0, $2308dc377e184bb0$exports.willOpenKeyboard)(document.activeElement)) setSize((size)=>{
                    let newSize = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    if (newSize.width === size.width && newSize.height === size.height) return size;
                    return newSize;
                });
            });
        };
        window.addEventListener('blur', onBlur, true);
        if (!$8b24bab62f5c65ad$var$visualViewport) window.addEventListener('resize', onResize);
        else $8b24bab62f5c65ad$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            cancelAnimationFrame(frame);
            window.removeEventListener('blur', onBlur, true);
            if (!$8b24bab62f5c65ad$var$visualViewport) window.removeEventListener('resize', onResize);
            else $8b24bab62f5c65ad$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
function $8b24bab62f5c65ad$var$getViewportSize() {
    return {
        // Multiply by the visualViewport scale to get the "natural" size, unaffected by pinch zooming.
        width: $8b24bab62f5c65ad$var$visualViewport ? $8b24bab62f5c65ad$var$visualViewport.width * $8b24bab62f5c65ad$var$visualViewport.scale : window.innerWidth,
        height: $8b24bab62f5c65ad$var$visualViewport ? $8b24bab62f5c65ad$var$visualViewport.height * $8b24bab62f5c65ad$var$visualViewport.scale : window.innerHeight
    };
} //# sourceMappingURL=useViewportSize.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDescription.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $7PjpK$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDescription", ()=>$34da4502ea8120db$export$f8aeda7b10753fa1);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $34da4502ea8120db$var$descriptionId = 0;
const $34da4502ea8120db$var$descriptionNodes = new Map();
function $34da4502ea8120db$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, $7PjpK$react.useState)();
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (!description) return;
        let desc = $34da4502ea8120db$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$34da4502ea8120db$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $34da4502ea8120db$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $34da4502ea8120db$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
} //# sourceMappingURL=useDescription.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEvent.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1254e5bb94ac8761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)");
var $8UjJN$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useEvent", ()=>$2a8c0bb1629926c8$export$90fc3a17d93f704c);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2a8c0bb1629926c8$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $1254e5bb94ac8761$exports.useEffectEvent)(handler);
    let isDisabled = handler == null;
    (0, $8UjJN$react.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
} //# sourceMappingURL=useEvent.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/scrollIntoView.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $49f0d9486c2408aa$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParents.main.js [app-ssr] (ecmascript)");
var $9e20cff0af27e8cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "scrollIntoView", ()=>$449412113267a1fe$export$53a0910f038337bd);
$parcel$export(module.exports, "scrollIntoViewport", ()=>$449412113267a1fe$export$c826860796309d1b);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $449412113267a1fe$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $449412113267a1fe$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $449412113267a1fe$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left + scroll padding
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth, scrollPaddingTop: scrollPaddingTop, scrollPaddingRight: scrollPaddingRight, scrollPaddingBottom: scrollPaddingBottom, scrollPaddingLeft: scrollPaddingLeft } = getComputedStyle(scrollView);
    // Account for scroll margin of the element
    let { scrollMarginTop: scrollMarginTop, scrollMarginRight: scrollMarginRight, scrollMarginBottom: scrollMarginBottom, scrollMarginLeft: scrollMarginLeft } = getComputedStyle(element);
    let borderAdjustedX = x + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = y + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    // Get scroll padding / margin values as pixels - defaults to 0 if no scroll padding / margin
    // is used.
    let scrollPaddingTopNumber = parseInt(scrollPaddingTop, 10) || 0;
    let scrollPaddingBottomNumber = parseInt(scrollPaddingBottom, 10) || 0;
    let scrollPaddingRightNumber = parseInt(scrollPaddingRight, 10) || 0;
    let scrollPaddingLeftNumber = parseInt(scrollPaddingLeft, 10) || 0;
    let scrollMarginTopNumber = parseInt(scrollMarginTop, 10) || 0;
    let scrollMarginBottomNumber = parseInt(scrollMarginBottom, 10) || 0;
    let scrollMarginRightNumber = parseInt(scrollMarginRight, 10) || 0;
    let scrollMarginLeftNumber = parseInt(scrollMarginLeft, 10) || 0;
    let targetLeft = offsetX - scrollMarginLeftNumber;
    let targetRight = offsetX + width + scrollMarginRightNumber;
    let targetTop = offsetY - scrollMarginTopNumber;
    let targetBottom = offsetY + height + scrollMarginBottomNumber;
    let scrollPortLeft = x + parseInt(borderLeftWidth, 10) + scrollPaddingLeftNumber;
    let scrollPortRight = maxX - scrollPaddingRightNumber;
    let scrollPortTop = y + parseInt(borderTopWidth, 10) + scrollPaddingTopNumber;
    let scrollPortBottom = maxY - scrollPaddingBottomNumber;
    if (targetLeft > scrollPortLeft || targetRight < scrollPortRight) {
        if (targetLeft <= x + scrollPaddingLeftNumber) x = targetLeft - parseInt(borderLeftWidth, 10) - scrollPaddingLeftNumber;
        else if (targetRight > maxX - scrollPaddingRightNumber) x += targetRight - maxX + scrollPaddingRightNumber;
    }
    if (targetTop > scrollPortTop || targetBottom < scrollPortBottom) {
        if (targetTop <= borderAdjustedY + scrollPaddingTopNumber) y = targetTop - parseInt(borderTopWidth, 10) - scrollPaddingTopNumber;
        else if (targetBottom > maxY - scrollPaddingBottomNumber) y += targetBottom - maxY + scrollPaddingBottomNumber;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    scrollView.scrollTo({
        left: x,
        top: y
    });
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $449412113267a1fe$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $449412113267a1fe$export$c826860796309d1b(targetElement, opts) {
    if (targetElement && document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren't in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        // Also ignore in chrome because of this bug: https://issues.chromium.org/issues/40074749
        if (!isScrollPrevented && !(0, $9e20cff0af27e8cc$exports.isChrome)()) {
            var // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = (0, $49f0d9486c2408aa$exports.getScrollParents)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            for (let scrollParent of scrollParents)$449412113267a1fe$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
} //# sourceMappingURL=scrollIntoView.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isVirtualEvent.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9e20cff0af27e8cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isVirtualClick", ()=>$577e795361f19be9$export$60278871457622de);
$parcel$export(module.exports, "isVirtualPointerEvent", ()=>$577e795361f19be9$export$29bf1b5f2c56cf63);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $577e795361f19be9$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, $9e20cff0af27e8cc$exports.isAndroid)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $577e795361f19be9$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, $9e20cff0af27e8cc$exports.isAndroid)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
} //# sourceMappingURL=isVirtualEvent.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDeepMemo.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4FGhO$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDeepMemo", ()=>$20e6e72fbf5dc81e$export$722debc0e56fea39);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ function $20e6e72fbf5dc81e$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, $4FGhO$react.useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
} //# sourceMappingURL=useDeepMemo.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useFormReset.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1254e5bb94ac8761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)");
var $81vbz$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useFormReset", ()=>$1f205e845604a423$export$5add1d006293d136);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1f205e845604a423$export$5add1d006293d136(ref, initialValue, onReset) {
    let handleReset = (0, $1254e5bb94ac8761$exports.useEffectEvent)(()=>{
        if (onReset) onReset(initialValue);
    });
    (0, $81vbz$react.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
} //# sourceMappingURL=useFormReset.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLoadMore.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $2a8c0bb1629926c8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEvent.main.js [app-ssr] (ecmascript)");
var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $4Zukt$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLoadMore", ()=>$faa6ccd6fb62f877$export$7717c92ee915373e);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $faa6ccd6fb62f877$export$7717c92ee915373e(props, ref) {
    let { isLoading: isLoading, onLoadMore: onLoadMore, scrollOffset: scrollOffset = 1, items: items } = props;
    // Handle scrolling, and call onLoadMore when nearing the bottom.
    let isLoadingRef = (0, $4Zukt$react.useRef)(isLoading);
    let prevProps = (0, $4Zukt$react.useRef)(props);
    let onScroll = (0, $4Zukt$react.useCallback)(()=>{
        if (ref.current && !isLoadingRef.current && onLoadMore) {
            let shouldLoadMore = ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight < ref.current.clientHeight * scrollOffset;
            if (shouldLoadMore) {
                isLoadingRef.current = true;
                onLoadMore();
            }
        }
    }, [
        onLoadMore,
        ref,
        scrollOffset
    ]);
    let lastItems = (0, $4Zukt$react.useRef)(items);
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        // Only update isLoadingRef if props object actually changed,
        // not if a local state change occurred.
        if (props !== prevProps.current) {
            isLoadingRef.current = isLoading;
            prevProps.current = props;
        }
        // TODO: Eventually this hook will move back into RAC during which we will accept the collection as a option to this hook.
        // We will only load more if the collection has changed after the last load to prevent multiple onLoadMore from being called
        // while the data from the last onLoadMore is being processed by RAC collection.
        let shouldLoadMore = (ref === null || ref === void 0 ? void 0 : ref.current) && !isLoadingRef.current && onLoadMore && (!items || items !== lastItems.current) && ref.current.clientHeight === ref.current.scrollHeight;
        if (shouldLoadMore) {
            isLoadingRef.current = true;
            onLoadMore === null || onLoadMore === void 0 ? void 0 : onLoadMore();
        }
        lastItems.current = items;
    }, [
        isLoading,
        onLoadMore,
        props,
        ref,
        items
    ]);
    // TODO: maybe this should still just return scroll props?
    // Test against case where the ref isn't defined when this is called
    // Think this was a problem when trying to attach to the scrollable body of the table in OnLoadMoreTableBodyScroll
    (0, $2a8c0bb1629926c8$exports.useEvent)(ref, 'scroll', onScroll);
} //# sourceMappingURL=useLoadMore.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLoadMoreSentinel.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $d796e7157ac96470$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParent.main.js [app-ssr] (ecmascript)");
var $1254e5bb94ac8761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)");
var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $8Ncyo$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useLoadMoreSentinel", ()=>$f6a4874a7c582761$export$ccaea96c28e8b9e7);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $f6a4874a7c582761$export$ccaea96c28e8b9e7(props, ref) {
    let { collection: collection, onLoadMore: onLoadMore, scrollOffset: scrollOffset = 1 } = props;
    let sentinelObserver = (0, $8Ncyo$react.useRef)(null);
    let triggerLoadMore = (0, $1254e5bb94ac8761$exports.useEffectEvent)((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, $d796e7157ac96470$exports.getScrollParent)(ref === null || ref === void 0 ? void 0 : ref.current),
                rootMargin: `0px ${100 * scrollOffset}% ${100 * scrollOffset}% ${100 * scrollOffset}%`
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        triggerLoadMore,
        ref,
        scrollOffset
    ]);
} //# sourceMappingURL=useLoadMoreSentinel.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/inertValue.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $2Y3Ap$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "inertValue", ()=>$13915169b1e4142c$export$a9d04c5684123369);
function $13915169b1e4142c$export$a9d04c5684123369(value) {
    const pieces = (0, $2Y3Ap$react.version).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
} //# sourceMappingURL=inertValue.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/constants.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "CLEAR_FOCUS_EVENT", ()=>$a0850d0add29d276$export$447a38995de2c711);
$parcel$export(module.exports, "FOCUS_EVENT", ()=>$a0850d0add29d276$export$831c820ad60f9d12);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
const $a0850d0add29d276$export$447a38995de2c711 = 'react-aria-clear-focus';
const $a0850d0add29d276$export$831c820ad60f9d12 = 'react-aria-focus'; //# sourceMappingURL=constants.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/animation.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $bsryd$reactdom = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var $bsryd$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useEnterAnimation", ()=>$5bd06107f98811f5$export$6d3443f2c48bfc20);
$parcel$export(module.exports, "useExitAnimation", ()=>$5bd06107f98811f5$export$45fda7c47f93fd48);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5bd06107f98811f5$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, $bsryd$react.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $5bd06107f98811f5$var$useAnimation(ref, isAnimationReady, (0, $bsryd$react.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $5bd06107f98811f5$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, $bsryd$react.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $5bd06107f98811f5$var$useAnimation(ref, isExiting, (0, $bsryd$react.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $5bd06107f98811f5$var$useAnimation(ref, isActive, onEnd) {
    (0, $78605a5d7424e31b$exports.useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.all(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, $bsryd$reactdom.flushSync)(()=>{
                    onEnd();
                });
            }).catch(()=>{});
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
} //# sourceMappingURL=animation.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isElementVisible.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $aaa611146751592e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/domHelpers.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isElementVisible", ()=>$a333d78d58ab4731$export$e989c0fffaa6b27a);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $a333d78d58ab4731$var$supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function $a333d78d58ab4731$var$isStyleVisible(element) {
    const windowObject = (0, $aaa611146751592e$exports.getOwnerWindow)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $a333d78d58ab4731$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $a333d78d58ab4731$export$e989c0fffaa6b27a(element, childElement) {
    if ($a333d78d58ab4731$var$supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && $a333d78d58ab4731$var$isStyleVisible(element) && $a333d78d58ab4731$var$isAttributeVisible(element, childElement) && (!element.parentElement || $a333d78d58ab4731$export$e989c0fffaa6b27a(element.parentElement, element));
} //# sourceMappingURL=isElementVisible.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isFocusable.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a333d78d58ab4731$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isElementVisible.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isFocusable", ()=>$506b33fd893eab7d$export$4c063cf1350e6fed);
$parcel$export(module.exports, "isTabbable", ()=>$506b33fd893eab7d$export$bebd5a1431fec25d);
/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $506b33fd893eab7d$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const $506b33fd893eab7d$var$FOCUSABLE_ELEMENT_SELECTOR = $506b33fd893eab7d$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$506b33fd893eab7d$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $506b33fd893eab7d$var$TABBABLE_ELEMENT_SELECTOR = $506b33fd893eab7d$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $506b33fd893eab7d$export$4c063cf1350e6fed(element) {
    return element.matches($506b33fd893eab7d$var$FOCUSABLE_ELEMENT_SELECTOR) && (0, $a333d78d58ab4731$exports.isElementVisible)(element) && !$506b33fd893eab7d$var$isInert(element);
}
function $506b33fd893eab7d$export$bebd5a1431fec25d(element) {
    return element.matches($506b33fd893eab7d$var$TABBABLE_ELEMENT_SELECTOR) && (0, $a333d78d58ab4731$exports.isElementVisible)(element) && !$506b33fd893eab7d$var$isInert(element);
}
function $506b33fd893eab7d$var$isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof node.ownerDocument.defaultView.HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
} //# sourceMappingURL=isFocusable.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8c61827343eed941$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useId.main.js [app-ssr] (ecmascript)");
var $1e2191638e54f613$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/chain.main.js [app-ssr] (ecmascript)");
var $8e13b2545651735a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/ShadowTreeWalker.main.js [app-ssr] (ecmascript)");
var $d723bea02f3e2567$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/DOMFunctions.main.js [app-ssr] (ecmascript)");
var $aaa611146751592e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/domHelpers.main.js [app-ssr] (ecmascript)");
var $f847cd1382ea7cd4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/mergeProps.main.js [app-ssr] (ecmascript)");
var $f05dc24eafaeb7e2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/mergeRefs.main.js [app-ssr] (ecmascript)");
var $8d15d0e1797d4238$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/filterDOMProps.main.js [app-ssr] (ecmascript)");
var $1117b6c0d4c4c164$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/focusWithoutScrolling.main.js [app-ssr] (ecmascript)");
var $16ec41ef3e36c19c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getOffset.main.js [app-ssr] (ecmascript)");
var $4068a0fae83b6d84$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/openLink.main.js [app-ssr] (ecmascript)");
var $e8117ebcab55be6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/runAfterTransition.main.js [app-ssr] (ecmascript)");
var $28ed3fb20343b78b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDrag1D.main.js [app-ssr] (ecmascript)");
var $4571ff54ac709100$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useGlobalListeners.main.js [app-ssr] (ecmascript)");
var $6ec78bde395c477d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLabels.main.js [app-ssr] (ecmascript)");
var $475b35fe72ba49b3$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useObjectRef.main.js [app-ssr] (ecmascript)");
var $29293a6f5c75b37e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useUpdateEffect.main.js [app-ssr] (ecmascript)");
var $0fa310503218f75f$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.main.js [app-ssr] (ecmascript)");
var $78605a5d7424e31b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLayoutEffect.main.js [app-ssr] (ecmascript)");
var $37733e1652f47193$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useResizeObserver.main.js [app-ssr] (ecmascript)");
var $6fc733991a9f977c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useSyncRef.main.js [app-ssr] (ecmascript)");
var $d796e7157ac96470$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParent.main.js [app-ssr] (ecmascript)");
var $49f0d9486c2408aa$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/getScrollParents.main.js [app-ssr] (ecmascript)");
var $9a54e9cd5db23b5d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isScrollable.main.js [app-ssr] (ecmascript)");
var $8b24bab62f5c65ad$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useViewportSize.main.js [app-ssr] (ecmascript)");
var $34da4502ea8120db$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDescription.main.js [app-ssr] (ecmascript)");
var $9e20cff0af27e8cc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/platform.main.js [app-ssr] (ecmascript)");
var $2a8c0bb1629926c8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEvent.main.js [app-ssr] (ecmascript)");
var $19a2307bfabafaf1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useValueEffect.main.js [app-ssr] (ecmascript)");
var $449412113267a1fe$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/scrollIntoView.main.js [app-ssr] (ecmascript)");
var $577e795361f19be9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isVirtualEvent.main.js [app-ssr] (ecmascript)");
var $1254e5bb94ac8761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useEffectEvent.main.js [app-ssr] (ecmascript)");
var $20e6e72fbf5dc81e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useDeepMemo.main.js [app-ssr] (ecmascript)");
var $1f205e845604a423$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useFormReset.main.js [app-ssr] (ecmascript)");
var $faa6ccd6fb62f877$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLoadMore.main.js [app-ssr] (ecmascript)");
var $f6a4874a7c582761$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/useLoadMoreSentinel.main.js [app-ssr] (ecmascript)");
var $13915169b1e4142c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/inertValue.main.js [app-ssr] (ecmascript)");
var $a0850d0add29d276$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/constants.main.js [app-ssr] (ecmascript)");
var $2308dc377e184bb0$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/keyboard.main.js [app-ssr] (ecmascript)");
var $5bd06107f98811f5$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/animation.main.js [app-ssr] (ecmascript)");
var $506b33fd893eab7d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-aria/utils/dist/isFocusable.main.js [app-ssr] (ecmascript)");
var $1Yh1N$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useId", ()=>$8c61827343eed941$exports.useId);
$parcel$export(module.exports, "mergeIds", ()=>$8c61827343eed941$exports.mergeIds);
$parcel$export(module.exports, "useSlotId", ()=>$8c61827343eed941$exports.useSlotId);
$parcel$export(module.exports, "chain", ()=>$1e2191638e54f613$exports.chain);
$parcel$export(module.exports, "createShadowTreeWalker", ()=>$8e13b2545651735a$exports.createShadowTreeWalker);
$parcel$export(module.exports, "ShadowTreeWalker", ()=>$8e13b2545651735a$exports.ShadowTreeWalker);
$parcel$export(module.exports, "getActiveElement", ()=>$d723bea02f3e2567$exports.getActiveElement);
$parcel$export(module.exports, "getEventTarget", ()=>$d723bea02f3e2567$exports.getEventTarget);
$parcel$export(module.exports, "nodeContains", ()=>$d723bea02f3e2567$exports.nodeContains);
$parcel$export(module.exports, "getOwnerDocument", ()=>$aaa611146751592e$exports.getOwnerDocument);
$parcel$export(module.exports, "getOwnerWindow", ()=>$aaa611146751592e$exports.getOwnerWindow);
$parcel$export(module.exports, "isShadowRoot", ()=>$aaa611146751592e$exports.isShadowRoot);
$parcel$export(module.exports, "mergeProps", ()=>$f847cd1382ea7cd4$exports.mergeProps);
$parcel$export(module.exports, "mergeRefs", ()=>$f05dc24eafaeb7e2$exports.mergeRefs);
$parcel$export(module.exports, "filterDOMProps", ()=>$8d15d0e1797d4238$exports.filterDOMProps);
$parcel$export(module.exports, "focusWithoutScrolling", ()=>$1117b6c0d4c4c164$exports.focusWithoutScrolling);
$parcel$export(module.exports, "getOffset", ()=>$16ec41ef3e36c19c$exports.getOffset);
$parcel$export(module.exports, "openLink", ()=>$4068a0fae83b6d84$exports.openLink);
$parcel$export(module.exports, "getSyntheticLinkProps", ()=>$4068a0fae83b6d84$exports.getSyntheticLinkProps);
$parcel$export(module.exports, "useSyntheticLinkProps", ()=>$4068a0fae83b6d84$exports.useSyntheticLinkProps);
$parcel$export(module.exports, "RouterProvider", ()=>$4068a0fae83b6d84$exports.RouterProvider);
$parcel$export(module.exports, "shouldClientNavigate", ()=>$4068a0fae83b6d84$exports.shouldClientNavigate);
$parcel$export(module.exports, "useRouter", ()=>$4068a0fae83b6d84$exports.useRouter);
$parcel$export(module.exports, "useLinkProps", ()=>$4068a0fae83b6d84$exports.useLinkProps);
$parcel$export(module.exports, "handleLinkClick", ()=>$4068a0fae83b6d84$exports.handleLinkClick);
$parcel$export(module.exports, "runAfterTransition", ()=>$e8117ebcab55be6a$exports.runAfterTransition);
$parcel$export(module.exports, "useDrag1D", ()=>$28ed3fb20343b78b$exports.useDrag1D);
$parcel$export(module.exports, "useGlobalListeners", ()=>$4571ff54ac709100$exports.useGlobalListeners);
$parcel$export(module.exports, "useLabels", ()=>$6ec78bde395c477d$exports.useLabels);
$parcel$export(module.exports, "useObjectRef", ()=>$475b35fe72ba49b3$exports.useObjectRef);
$parcel$export(module.exports, "useUpdateEffect", ()=>$29293a6f5c75b37e$exports.useUpdateEffect);
$parcel$export(module.exports, "useUpdateLayoutEffect", ()=>$0fa310503218f75f$exports.useUpdateLayoutEffect);
$parcel$export(module.exports, "useLayoutEffect", ()=>$78605a5d7424e31b$exports.useLayoutEffect);
$parcel$export(module.exports, "useResizeObserver", ()=>$37733e1652f47193$exports.useResizeObserver);
$parcel$export(module.exports, "useSyncRef", ()=>$6fc733991a9f977c$exports.useSyncRef);
$parcel$export(module.exports, "getScrollParent", ()=>$d796e7157ac96470$exports.getScrollParent);
$parcel$export(module.exports, "getScrollParents", ()=>$49f0d9486c2408aa$exports.getScrollParents);
$parcel$export(module.exports, "isScrollable", ()=>$9a54e9cd5db23b5d$exports.isScrollable);
$parcel$export(module.exports, "useViewportSize", ()=>$8b24bab62f5c65ad$exports.useViewportSize);
$parcel$export(module.exports, "useDescription", ()=>$34da4502ea8120db$exports.useDescription);
$parcel$export(module.exports, "isMac", ()=>$9e20cff0af27e8cc$exports.isMac);
$parcel$export(module.exports, "isIPhone", ()=>$9e20cff0af27e8cc$exports.isIPhone);
$parcel$export(module.exports, "isIPad", ()=>$9e20cff0af27e8cc$exports.isIPad);
$parcel$export(module.exports, "isIOS", ()=>$9e20cff0af27e8cc$exports.isIOS);
$parcel$export(module.exports, "isAppleDevice", ()=>$9e20cff0af27e8cc$exports.isAppleDevice);
$parcel$export(module.exports, "isWebKit", ()=>$9e20cff0af27e8cc$exports.isWebKit);
$parcel$export(module.exports, "isChrome", ()=>$9e20cff0af27e8cc$exports.isChrome);
$parcel$export(module.exports, "isAndroid", ()=>$9e20cff0af27e8cc$exports.isAndroid);
$parcel$export(module.exports, "isFirefox", ()=>$9e20cff0af27e8cc$exports.isFirefox);
$parcel$export(module.exports, "useEvent", ()=>$2a8c0bb1629926c8$exports.useEvent);
$parcel$export(module.exports, "useValueEffect", ()=>$19a2307bfabafaf1$exports.useValueEffect);
$parcel$export(module.exports, "scrollIntoView", ()=>$449412113267a1fe$exports.scrollIntoView);
$parcel$export(module.exports, "scrollIntoViewport", ()=>$449412113267a1fe$exports.scrollIntoViewport);
$parcel$export(module.exports, "clamp", ()=>$1Yh1N$reactstatelyutils.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$1Yh1N$reactstatelyutils.snapValueToStep);
$parcel$export(module.exports, "isVirtualClick", ()=>$577e795361f19be9$exports.isVirtualClick);
$parcel$export(module.exports, "isVirtualPointerEvent", ()=>$577e795361f19be9$exports.isVirtualPointerEvent);
$parcel$export(module.exports, "useEffectEvent", ()=>$1254e5bb94ac8761$exports.useEffectEvent);
$parcel$export(module.exports, "useDeepMemo", ()=>$20e6e72fbf5dc81e$exports.useDeepMemo);
$parcel$export(module.exports, "useFormReset", ()=>$1f205e845604a423$exports.useFormReset);
$parcel$export(module.exports, "useLoadMore", ()=>$faa6ccd6fb62f877$exports.useLoadMore);
$parcel$export(module.exports, "useLoadMoreSentinel", ()=>$f6a4874a7c582761$exports.useLoadMoreSentinel);
$parcel$export(module.exports, "UNSTABLE_useLoadMoreSentinel", ()=>$f6a4874a7c582761$exports.useLoadMoreSentinel);
$parcel$export(module.exports, "inertValue", ()=>$13915169b1e4142c$exports.inertValue);
$parcel$export(module.exports, "CLEAR_FOCUS_EVENT", ()=>$a0850d0add29d276$exports.CLEAR_FOCUS_EVENT);
$parcel$export(module.exports, "FOCUS_EVENT", ()=>$a0850d0add29d276$exports.FOCUS_EVENT);
$parcel$export(module.exports, "isCtrlKeyPressed", ()=>$2308dc377e184bb0$exports.isCtrlKeyPressed);
$parcel$export(module.exports, "willOpenKeyboard", ()=>$2308dc377e184bb0$exports.willOpenKeyboard);
$parcel$export(module.exports, "useEnterAnimation", ()=>$5bd06107f98811f5$exports.useEnterAnimation);
$parcel$export(module.exports, "useExitAnimation", ()=>$5bd06107f98811f5$exports.useExitAnimation);
$parcel$export(module.exports, "isFocusable", ()=>$506b33fd893eab7d$exports.isFocusable);
$parcel$export(module.exports, "isTabbable", ()=>$506b33fd893eab7d$exports.isTabbable); /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */  //# sourceMappingURL=main.js.map
}),
];

//# sourceMappingURL=7b37d_%40react-aria_utils_dist_44036cb0._.js.map