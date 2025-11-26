module.exports = [
"[project]/study-lms-frontend-app/node_modules/@react-stately/flags/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "enableTableNestedRows", ()=>$b8649bdbb43830e8$export$d9d8a0f82de49530);
$parcel$export(module.exports, "tableNestedRows", ()=>$b8649bdbb43830e8$export$1b00cb14a96194e6);
$parcel$export(module.exports, "enableShadowDOM", ()=>$b8649bdbb43830e8$export$12b151d9882e9985);
$parcel$export(module.exports, "shadowDOM", ()=>$b8649bdbb43830e8$export$98658e8c59125e6a);
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
 */ let $b8649bdbb43830e8$var$_tableNestedRows = false;
let $b8649bdbb43830e8$var$_shadowDOM = false;
function $b8649bdbb43830e8$export$d9d8a0f82de49530() {
    $b8649bdbb43830e8$var$_tableNestedRows = true;
}
function $b8649bdbb43830e8$export$1b00cb14a96194e6() {
    return $b8649bdbb43830e8$var$_tableNestedRows;
}
function $b8649bdbb43830e8$export$12b151d9882e9985() {
    $b8649bdbb43830e8$var$_shadowDOM = true;
}
function $b8649bdbb43830e8$export$98658e8c59125e6a() {
    return $b8649bdbb43830e8$var$_shadowDOM;
} //# sourceMappingURL=main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/useOverlayTriggerState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $62yjz$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $62yjz$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlayTriggerState", ()=>$5076d97fb6884665$export$61c6a8c84e605fb6);
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
 */ function $5076d97fb6884665$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = (0, $62yjz$reactstatelyutils.useControlledState)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const open = (0, $62yjz$react.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, $62yjz$react.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, $62yjz$react.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle
    };
} //# sourceMappingURL=useOverlayTriggerState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5076d97fb6884665$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/useOverlayTriggerState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useOverlayTriggerState", ()=>$5076d97fb6884665$exports.useOverlayTriggerState); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5Zch8$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$export$6d08773d2e66f8f2);
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
 */ function $c870f3b549c61b6b$var$Item(props) {
    return null;
}
$c870f3b549c61b6b$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning)) console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c870f3b549c61b6b$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, $parcel$interopDefault($5Zch8$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c870f3b549c61b6b$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, $parcel$interopDefault($5Zch8$react)).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c870f3b549c61b6b$export$6d08773d2e66f8f2 = $c870f3b549c61b6b$var$Item; //# sourceMappingURL=Item.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $98hxh$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$export$6e2c8f0811a474ce);
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
 */ function $350f13aa4d8b327c$var$Section(props) {
    return null;
}
$350f13aa4d8b327c$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: 'section',
        props: props,
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, $parcel$interopDefault($98hxh$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $350f13aa4d8b327c$export$6e2c8f0811a474ce = $350f13aa4d8b327c$var$Section; //# sourceMappingURL=Section.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ioO2y$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$export$bf788dd355e3a401);
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
 */ class $51588fd411aace25$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $51588fd411aace25$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(children) && children.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items: items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index: index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(partialNode.element) && partialNode.element.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) {
            let children = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            var _partialNode_index;
            let index = (_partialNode_index = partialNode.index) !== null && _partialNode_index !== void 0 ? _partialNode_index : 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            var _partialNode_index1;
            let index = (_partialNode_index1 = partialNode.index) !== null && _partialNode_index1 !== void 0 ? _partialNode_index1 : 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                var _childNode_key;
                let nodeKey = (_childNode_key = childNode.key) !== null && _childNode_key !== void 0 ? _childNode_key : null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $51588fd411aace25$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    var _childNode_value, _ref;
                    // Cache the node based on its value
                    node.value = (_ref = (_childNode_value = childNode.value) !== null && _childNode_value !== void 0 ? _childNode_value : partialNode.value) !== null && _ref !== void 0 ? _ref : null;
                    if (node.value) this.cache.set(node.value, node);
                    var _parentNode_type;
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$51588fd411aace25$var$capitalize(node.type)}> in <${$51588fd411aace25$var$capitalize((_parentNode_type = parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) !== null && _parentNode_type !== void 0 ? _parentNode_type : 'unknown parent type')}>. Only <${$51588fd411aace25$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        var _partialNode_value, _partialNode_textValue;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: (_partialNode_value = partialNode.value) !== null && _partialNode_value !== void 0 ? _partialNode_value : null,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: (_partialNode_textValue = partialNode.textValue) !== null && _partialNode_textValue !== void 0 ? _partialNode_textValue : '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: $51588fd411aace25$var$iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index: index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $51588fd411aace25$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $51588fd411aace25$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $51588fd411aace25$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
} //# sourceMappingURL=CollectionBuilder.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
var $bSehf$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$export$6cd28814d92fa9c9);
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
 */ function $98fc0fafaca75b6a$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, $bSehf$react.useMemo)(()=>new (0, $51588fd411aace25$exports.CollectionBuilder)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, $bSehf$react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
} //# sourceMappingURL=useCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$export$1005530eda016c13);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$export$fbdeaa6a76694f71);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$export$5f3398f8733f90e2);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$export$7475b2c64539e4cf);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$export$8c434b3a7a4dad6);
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
 */ function $7a155683b0d79a6a$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $7a155683b0d79a6a$export$fbdeaa6a76694f71(iterable) {
    return $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, 0);
}
function $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $7a155683b0d79a6a$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $7a155683b0d79a6a$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $7a155683b0d79a6a$var$getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
} //# sourceMappingURL=getChildNodes.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$export$77d5aafae4e095b2);
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
 */ const $e749fe52977fe2c2$var$cache = new WeakMap();
function $e749fe52977fe2c2$export$77d5aafae4e095b2(collection) {
    let count = $e749fe52977fe2c2$var$cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items)if (item.type === 'section') countItems((0, $7a155683b0d79a6a$exports.getChildNodes)(item, collection));
        else counter++;
    };
    countItems(collection);
    $e749fe52977fe2c2$var$cache.set(collection, counter);
    return counter;
} //# sourceMappingURL=getItemCount.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c870f3b549c61b6b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)");
var $350f13aa4d8b327c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)");
var $98fc0fafaca75b6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)");
var $e749fe52977fe2c2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)");
var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$exports.Item);
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$exports.Section);
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$exports.useCollection);
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$exports.getItemCount);
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$exports.getChildNodes);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$exports.getFirstItem);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$exports.getLastItem);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$exports.getNthItem);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$exports.compareNodeOrder);
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$exports.CollectionBuilder); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5Zch8$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$export$6d08773d2e66f8f2);
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
 */ function $c870f3b549c61b6b$var$Item(props) {
    return null;
}
$c870f3b549c61b6b$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning) && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c870f3b549c61b6b$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, $parcel$interopDefault($5Zch8$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c870f3b549c61b6b$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, $parcel$interopDefault($5Zch8$react)).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c870f3b549c61b6b$export$6d08773d2e66f8f2 = $c870f3b549c61b6b$var$Item; //# sourceMappingURL=Item.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $98hxh$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$export$6e2c8f0811a474ce);
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
 */ function $350f13aa4d8b327c$var$Section(props) {
    return null;
}
$350f13aa4d8b327c$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: 'section',
        props: props,
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, $parcel$interopDefault($98hxh$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $350f13aa4d8b327c$export$6e2c8f0811a474ce = $350f13aa4d8b327c$var$Section; //# sourceMappingURL=Section.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ioO2y$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$export$bf788dd355e3a401);
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
 */ class $51588fd411aace25$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $51588fd411aace25$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(children) && children.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items: items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index: index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(partialNode.element) && partialNode.element.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) {
            let children = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            var _partialNode_index;
            let index = (_partialNode_index = partialNode.index) !== null && _partialNode_index !== void 0 ? _partialNode_index : 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            var _partialNode_index1;
            let index = (_partialNode_index1 = partialNode.index) !== null && _partialNode_index1 !== void 0 ? _partialNode_index1 : 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                var _childNode_key;
                let nodeKey = (_childNode_key = childNode.key) !== null && _childNode_key !== void 0 ? _childNode_key : null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $51588fd411aace25$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    var _childNode_value, _ref;
                    // Cache the node based on its value
                    node.value = (_ref = (_childNode_value = childNode.value) !== null && _childNode_value !== void 0 ? _childNode_value : partialNode.value) !== null && _ref !== void 0 ? _ref : null;
                    if (node.value) this.cache.set(node.value, node);
                    var _parentNode_type;
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$51588fd411aace25$var$capitalize(node.type)}> in <${$51588fd411aace25$var$capitalize((_parentNode_type = parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) !== null && _parentNode_type !== void 0 ? _parentNode_type : 'unknown parent type')}>. Only <${$51588fd411aace25$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        var _partialNode_value, _partialNode_textValue;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: (_partialNode_value = partialNode.value) !== null && _partialNode_value !== void 0 ? _partialNode_value : null,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: (_partialNode_textValue = partialNode.textValue) !== null && _partialNode_textValue !== void 0 ? _partialNode_textValue : '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: $51588fd411aace25$var$iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index: index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $51588fd411aace25$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $51588fd411aace25$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $51588fd411aace25$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
} //# sourceMappingURL=CollectionBuilder.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
var $bSehf$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$export$6cd28814d92fa9c9);
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
 */ function $98fc0fafaca75b6a$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, $bSehf$react.useMemo)(()=>new (0, $51588fd411aace25$exports.CollectionBuilder)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, $bSehf$react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
} //# sourceMappingURL=useCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$export$1005530eda016c13);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$export$fbdeaa6a76694f71);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$export$5f3398f8733f90e2);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$export$7475b2c64539e4cf);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$export$8c434b3a7a4dad6);
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
 */ function $7a155683b0d79a6a$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $7a155683b0d79a6a$export$fbdeaa6a76694f71(iterable) {
    return $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, 0);
}
function $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $7a155683b0d79a6a$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $7a155683b0d79a6a$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $7a155683b0d79a6a$var$getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
} //# sourceMappingURL=getChildNodes.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$export$77d5aafae4e095b2);
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
 */ const $e749fe52977fe2c2$var$cache = new WeakMap();
function $e749fe52977fe2c2$export$77d5aafae4e095b2(collection) {
    let count = $e749fe52977fe2c2$var$cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, $7a155683b0d79a6a$exports.getChildNodes)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    $e749fe52977fe2c2$var$cache.set(collection, counter);
    return counter;
} //# sourceMappingURL=getItemCount.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c870f3b549c61b6b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)");
var $350f13aa4d8b327c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)");
var $98fc0fafaca75b6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)");
var $e749fe52977fe2c2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)");
var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$exports.Item);
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$exports.Section);
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$exports.useCollection);
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$exports.getItemCount);
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$exports.getChildNodes);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$exports.getFirstItem);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$exports.getLastItem);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$exports.getNthItem);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$exports.compareNodeOrder);
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$exports.CollectionBuilder); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5Zch8$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$export$6d08773d2e66f8f2);
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
 */ function $c870f3b549c61b6b$var$Item(props) {
    return null;
}
$c870f3b549c61b6b$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning) && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c870f3b549c61b6b$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, $parcel$interopDefault($5Zch8$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c870f3b549c61b6b$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, $parcel$interopDefault($5Zch8$react)).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c870f3b549c61b6b$export$6d08773d2e66f8f2 = $c870f3b549c61b6b$var$Item; //# sourceMappingURL=Item.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $98hxh$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$export$6e2c8f0811a474ce);
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
 */ function $350f13aa4d8b327c$var$Section(props) {
    return null;
}
$350f13aa4d8b327c$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: 'section',
        props: props,
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, $parcel$interopDefault($98hxh$react)).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $350f13aa4d8b327c$export$6e2c8f0811a474ce = $350f13aa4d8b327c$var$Section; //# sourceMappingURL=Section.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ioO2y$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$export$bf788dd355e3a401);
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
 */ class $51588fd411aace25$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $51588fd411aace25$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(children) && children.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items: items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index: index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(partialNode.element) && partialNode.element.type === (0, $parcel$interopDefault($ioO2y$react)).Fragment) {
            let children = [];
            (0, $parcel$interopDefault($ioO2y$react)).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            var _partialNode_index;
            let index = (_partialNode_index = partialNode.index) !== null && _partialNode_index !== void 0 ? _partialNode_index : 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, $parcel$interopDefault($ioO2y$react)).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            var _partialNode_index1;
            let index = (_partialNode_index1 = partialNode.index) !== null && _partialNode_index1 !== void 0 ? _partialNode_index1 : 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                var _childNode_key;
                let nodeKey = (_childNode_key = childNode.key) !== null && _childNode_key !== void 0 ? _childNode_key : null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $51588fd411aace25$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    var _childNode_value, _ref;
                    // Cache the node based on its value
                    node.value = (_ref = (_childNode_value = childNode.value) !== null && _childNode_value !== void 0 ? _childNode_value : partialNode.value) !== null && _ref !== void 0 ? _ref : null;
                    if (node.value) this.cache.set(node.value, node);
                    var _parentNode_type;
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$51588fd411aace25$var$capitalize(node.type)}> in <${$51588fd411aace25$var$capitalize((_parentNode_type = parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) !== null && _parentNode_type !== void 0 ? _parentNode_type : 'unknown parent type')}>. Only <${$51588fd411aace25$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        var _partialNode_value, _partialNode_textValue;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: (_partialNode_value = partialNode.value) !== null && _partialNode_value !== void 0 ? _partialNode_value : null,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: (_partialNode_textValue = partialNode.textValue) !== null && _partialNode_textValue !== void 0 ? _partialNode_textValue : '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: $51588fd411aace25$var$iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index: index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $51588fd411aace25$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $51588fd411aace25$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $51588fd411aace25$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
} //# sourceMappingURL=CollectionBuilder.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
var $bSehf$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$export$6cd28814d92fa9c9);
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
 */ function $98fc0fafaca75b6a$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, $bSehf$react.useMemo)(()=>new (0, $51588fd411aace25$exports.CollectionBuilder)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, $bSehf$react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
} //# sourceMappingURL=useCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$export$1005530eda016c13);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$export$fbdeaa6a76694f71);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$export$5f3398f8733f90e2);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$export$7475b2c64539e4cf);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$export$8c434b3a7a4dad6);
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
 */ function $7a155683b0d79a6a$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $7a155683b0d79a6a$export$fbdeaa6a76694f71(iterable) {
    return $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, 0);
}
function $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $7a155683b0d79a6a$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $7a155683b0d79a6a$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $7a155683b0d79a6a$var$getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
} //# sourceMappingURL=getChildNodes.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$export$77d5aafae4e095b2);
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
 */ const $e749fe52977fe2c2$var$cache = new WeakMap();
function $e749fe52977fe2c2$export$77d5aafae4e095b2(collection) {
    let count = $e749fe52977fe2c2$var$cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, $7a155683b0d79a6a$exports.getChildNodes)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    $e749fe52977fe2c2$var$cache.set(collection, counter);
    return counter;
} //# sourceMappingURL=getItemCount.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c870f3b549c61b6b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/Item.main.js [app-ssr] (ecmascript)");
var $350f13aa4d8b327c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/Section.main.js [app-ssr] (ecmascript)");
var $98fc0fafaca75b6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/useCollection.main.js [app-ssr] (ecmascript)");
var $e749fe52977fe2c2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/getItemCount.main.js [app-ssr] (ecmascript)");
var $7a155683b0d79a6a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/getChildNodes.main.js [app-ssr] (ecmascript)");
var $51588fd411aace25$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/CollectionBuilder.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "Item", ()=>$c870f3b549c61b6b$exports.Item);
$parcel$export(module.exports, "Section", ()=>$350f13aa4d8b327c$exports.Section);
$parcel$export(module.exports, "useCollection", ()=>$98fc0fafaca75b6a$exports.useCollection);
$parcel$export(module.exports, "getItemCount", ()=>$e749fe52977fe2c2$exports.getItemCount);
$parcel$export(module.exports, "getChildNodes", ()=>$7a155683b0d79a6a$exports.getChildNodes);
$parcel$export(module.exports, "getFirstItem", ()=>$7a155683b0d79a6a$exports.getFirstItem);
$parcel$export(module.exports, "getLastItem", ()=>$7a155683b0d79a6a$exports.getLastItem);
$parcel$export(module.exports, "getNthItem", ()=>$7a155683b0d79a6a$exports.getNthItem);
$parcel$export(module.exports, "compareNodeOrder", ()=>$7a155683b0d79a6a$exports.compareNodeOrder);
$parcel$export(module.exports, "CollectionBuilder", ()=>$51588fd411aace25$exports.CollectionBuilder); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/ListCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "ListCollection", ()=>$c9aa5a224613c979$export$d085fb9e920b5ca7);
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
 */ class $c9aa5a224613c979$export$d085fb9e920b5ca7 {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        var _node_prevKey;
        return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        var _node_nextKey;
        return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
    }
    constructor(nodes){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        let size = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            // Only count sections and items when determining size so that
            // loaders and separators in RAC/S2 don't influence the emptyState determination
            if (node.type === 'section' || node.type === 'item') size++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this._size = size;
        var _last_key;
        this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
} //# sourceMappingURL=ListCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/useListState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $c9aa5a224613c979$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/ListCollection.main.js [app-ssr] (ecmascript)");
var $5RsKl$reactstatelyselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/main.js [app-ssr] (ecmascript)");
var $5RsKl$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $5RsKl$reactstatelycollections = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useListState", ()=>$5450691d3629f6ea$export$2f645645f7bca764);
$parcel$export(module.exports, "UNSTABLE_useFilteredListState", ()=>$5450691d3629f6ea$export$ba9d38c0f1bf2b36);
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
 */ function $5450691d3629f6ea$export$2f645645f7bca764(props) {
    let { filter: filter, layoutDelegate: layoutDelegate } = props;
    let selectionState = (0, $5RsKl$reactstatelyselection.useMultipleSelectionState)(props);
    let disabledKeys = (0, $5RsKl$react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, $5RsKl$react.useCallback)((nodes)=>filter ? new (0, $c9aa5a224613c979$exports.ListCollection)(filter(nodes)) : new (0, $c9aa5a224613c979$exports.ListCollection)(nodes), [
        filter
    ]);
    let context = (0, $5RsKl$react.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, $5RsKl$reactstatelycollections.useCollection)(props, factory, context);
    let selectionManager = (0, $5RsKl$react.useMemo)(()=>new (0, $5RsKl$reactstatelyselection.SelectionManager)(collection, selectionState, {
            layoutDelegate: layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    $5450691d3629f6ea$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}
function $5450691d3629f6ea$export$ba9d38c0f1bf2b36(state, filterFn) {
    let collection = (0, $5RsKl$react.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    $5450691d3629f6ea$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        selectionManager: selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function $5450691d3629f6ea$var$useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, $5RsKl$react.useRef)(null);
    (0, $5RsKl$react.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            const startItem = cachedCollection.current.getItem(selectionManager.focusedKey);
            const cachedItemNodes = [
                ...cachedCollection.current.getKeys()
            ].map((key)=>{
                const itemNode = cachedCollection.current.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            const itemNodes = [
                ...collection.getKeys()
            ].map((key)=>{
                const itemNode = collection.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            var _cachedItemNodes_length, _itemNodes_length;
            const diff = ((_cachedItemNodes_length = cachedItemNodes === null || cachedItemNodes === void 0 ? void 0 : cachedItemNodes.length) !== null && _cachedItemNodes_length !== void 0 ? _cachedItemNodes_length : 0) - ((_itemNodes_length = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length !== void 0 ? _itemNodes_length : 0);
            var _startItem_index, _startItem_index1, _itemNodes_length1;
            let index = Math.min(diff > 1 ? Math.max(((_startItem_index = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index !== void 0 ? _startItem_index : 0) - diff + 1, 0) : (_startItem_index1 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index1 !== void 0 ? _startItem_index1 : 0, ((_itemNodes_length1 = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length1 !== void 0 ? _itemNodes_length1 : 0) - 1);
            let newNode = null;
            let isReverseSearching = false;
            while(index >= 0){
                if (!selectionManager.isDisabled(itemNodes[index].key)) {
                    newNode = itemNodes[index];
                    break;
                }
                // Find next, not disabled item.
                if (index < itemNodes.length - 1 && !isReverseSearching) index++;
                else {
                    isReverseSearching = true;
                    var _startItem_index2, _startItem_index3;
                    if (index > ((_startItem_index2 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index2 !== void 0 ? _startItem_index2 : 0)) index = (_startItem_index3 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index3 !== void 0 ? _startItem_index3 : 0;
                    index--;
                }
            }
            selectionManager.setFocusedKey(newNode ? newNode.key : null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
} //# sourceMappingURL=useListState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/useSingleSelectListState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5450691d3629f6ea$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/useListState.main.js [app-ssr] (ecmascript)");
var $9DRtv$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $9DRtv$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSingleSelectListState", ()=>$b9e99587a092d199$export$e7f05e985daf4b5f);
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
 */ function $b9e99587a092d199$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, $9DRtv$reactstatelyutils.useControlledState)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, $9DRtv$react.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, $5450691d3629f6ea$exports.useListState)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
} //# sourceMappingURL=useSingleSelectListState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5450691d3629f6ea$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/useListState.main.js [app-ssr] (ecmascript)");
var $b9e99587a092d199$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/useSingleSelectListState.main.js [app-ssr] (ecmascript)");
var $c9aa5a224613c979$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/ListCollection.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useListState", ()=>$5450691d3629f6ea$exports.useListState);
$parcel$export(module.exports, "UNSTABLE_useFilteredListState", ()=>$5450691d3629f6ea$exports.UNSTABLE_useFilteredListState);
$parcel$export(module.exports, "useSingleSelectListState", ()=>$b9e99587a092d199$exports.useSingleSelectListState);
$parcel$export(module.exports, "ListCollection", ()=>$c9aa5a224613c979$exports.ListCollection); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/Selection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "Selection", ()=>$21c847070f1f9569$export$52baac22726c72bf);
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
 */ class $21c847070f1f9569$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $21c847070f1f9569$export$52baac22726c72bf) {
            this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : keys.anchorKey;
            this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : keys.currentKey;
        } else {
            this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : null;
            this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : null;
        }
    }
} //# sourceMappingURL=Selection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/useMultipleSelectionState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $21c847070f1f9569$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/Selection.main.js [app-ssr] (ecmascript)");
var $byFPT$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $byFPT$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMultipleSelectionState", ()=>$1adc19da2128bba9$export$253fe78d46329472);
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
 */ function $1adc19da2128bba9$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $1adc19da2128bba9$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = 'none', disallowEmptySelection: disallowEmptySelection = false, allowDuplicateSelectionEvents: allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = 'toggle', disabledBehavior: disabledBehavior = 'all' } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, $byFPT$react.useRef)(false);
    let [, setFocused] = (0, $byFPT$react.useState)(false);
    let focusedKeyRef = (0, $byFPT$react.useRef)(null);
    let childFocusStrategyRef = (0, $byFPT$react.useRef)(null);
    let [, setFocusedKey] = (0, $byFPT$react.useState)(null);
    let selectedKeysProp = (0, $byFPT$react.useMemo)(()=>$1adc19da2128bba9$var$convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, $byFPT$react.useMemo)(()=>$1adc19da2128bba9$var$convertSelection(props.defaultSelectedKeys, new (0, $21c847070f1f9569$exports.Selection)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, $byFPT$reactstatelyutils.useControlledState)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, $byFPT$react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, $byFPT$react.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, $byFPT$react.useRef)(selectionBehaviorProp);
    (0, $byFPT$react.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$1adc19da2128bba9$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior: disabledBehavior
    };
}
function $1adc19da2128bba9$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new (0, $21c847070f1f9569$exports.Selection)(selection);
} //# sourceMappingURL=useMultipleSelectionState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/SelectionManager.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $21c847070f1f9569$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/Selection.main.js [app-ssr] (ecmascript)");
var $ia6MY$reactstatelycollections = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "SelectionManager", ()=>$8112da6fa5bbc322$export$6c8a5aaad13c9852);
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
 */ class $8112da6fa5bbc322$export$6c8a5aaad13c9852 {
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return false;
        return this.state.selectedKeys === 'all' ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, $ia6MY$reactstatelycollections.compareNodeOrder)(this.collection, item, first) < 0) first = item;
        }
        var _first_key;
        return (_first_key = first === null || first === void 0 ? void 0 : first.key) !== null && _first_key !== void 0 ? _first_key : null;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, $ia6MY$reactstatelycollections.compareNodeOrder)(this.collection, item, last) > 0) last = item;
        }
        var _last_key;
        return (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        let mappedToKey = this.getKey(toKey);
        if (mappedToKey == null) return;
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new (0, $21c847070f1f9569$exports.Selection)([
            mappedToKey
        ], mappedToKey, mappedToKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            var _selectedKeys_anchorKey;
            let anchorKey = (_selectedKeys_anchorKey = selectedKeys.anchorKey) !== null && _selectedKeys_anchorKey !== void 0 ? _selectedKeys_anchorKey : mappedToKey;
            selection = new (0, $21c847070f1f9569$exports.Selection)(selectedKeys, anchorKey, mappedToKey);
            var _selectedKeys_currentKey;
            for (let key of this.getKeyRange(anchorKey, (_selectedKeys_currentKey = selectedKeys.currentKey) !== null && _selectedKeys_currentKey !== void 0 ? _selectedKeys_currentKey : mappedToKey))selection.delete(key);
            for (let key of this.getKeyRange(mappedToKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, $ia6MY$reactstatelycollections.compareNodeOrder)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        var _this_layoutDelegate;
        if ((_this_layoutDelegate = this.layoutDelegate) === null || _this_layoutDelegate === void 0 ? void 0 : _this_layoutDelegate.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
        let keys = [];
        let key = from;
        while(key != null){
            let item = this.collection.getItem(key);
            if (item && (item.type === 'item' || item.type === 'cell' && this.allowsCellSelection)) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item && item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let keys = new (0, $21c847070f1f9569$exports.Selection)(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(mappedKey)) keys.delete(mappedKey);
        else if (this.canSelectItem(mappedKey)) {
            keys.add(mappedKey);
            keys.anchorKey = mappedKey;
            keys.currentKey = mappedKey;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let selection = this.canSelectItem(mappedKey) ? new (0, $21c847070f1f9569$exports.Selection)([
            mappedKey
        ], mappedKey, mappedKey) : new (0, $21c847070f1f9569$exports.Selection)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new (0, $21c847070f1f9569$exports.Selection)();
        for (let key of keys){
            let mappedKey = this.getKey(key);
            if (mappedKey != null) {
                selection.add(mappedKey);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key != null){
                if (this.canSelectItem(key)) {
                    var _getFirstItem;
                    let item = this.collection.getItem(key);
                    if ((item === null || item === void 0 ? void 0 : item.type) === 'item') keys.push(key);
                    var _getFirstItem_key;
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if ((item === null || item === void 0 ? void 0 : item.hasChildNodes) && (this.allowsCellSelection || item.type !== 'item')) addKeys((_getFirstItem_key = (_getFirstItem = (0, $ia6MY$reactstatelycollections.getFirstItem)((0, $ia6MY$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key) !== null && _getFirstItem_key !== void 0 ? _getFirstItem_key : null);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, $21c847070f1f9569$exports.Selection)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        var _item_props;
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return this.state.disabledBehavior === 'all' && (this.state.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled));
    }
    isLink(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
    }
    getItemProps(key) {
        var _this_collection_getItem;
        return (_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.props;
    }
    withCollection(collection) {
        return new $8112da6fa5bbc322$export$6c8a5aaad13c9852(collection, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || undefined
        });
    }
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        var _options_allowsCellSelection;
        this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
        this._isSelectAll = null;
        this.layoutDelegate = (options === null || options === void 0 ? void 0 : options.layoutDelegate) || null;
    }
} //# sourceMappingURL=SelectionManager.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $1adc19da2128bba9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/useMultipleSelectionState.main.js [app-ssr] (ecmascript)");
var $8112da6fa5bbc322$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/SelectionManager.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMultipleSelectionState", ()=>$1adc19da2128bba9$exports.useMultipleSelectionState);
$parcel$export(module.exports, "SelectionManager", ()=>$8112da6fa5bbc322$exports.SelectionManager); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/tabs/dist/useTabListState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $3yB4p$reactstatelylist = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/dist/main.js [app-ssr] (ecmascript)");
var $3yB4p$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTabListState", ()=>$817f925d289daf81$export$4ba071daf4e486);
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
 */ function $817f925d289daf81$export$4ba071daf4e486(props) {
    var _props_defaultSelectedKey, _ref;
    let state = (0, $3yB4p$reactstatelylist.useSingleSelectListState)({
        ...props,
        suppressTextValueWarning: true,
        defaultSelectedKey: (_ref = (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : $817f925d289daf81$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : new Set())) !== null && _ref !== void 0 ? _ref : undefined
    });
    let { selectionManager: selectionManager, collection: collection, selectedKey: currentSelectedKey } = state;
    let lastSelectedKey = (0, $3yB4p$react.useRef)(currentSelectedKey);
    (0, $3yB4p$react.useEffect)(()=>{
        // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
        let selectedKey = currentSelectedKey;
        if (selectionManager.isEmpty || selectedKey == null || !collection.getItem(selectedKey)) {
            selectedKey = $817f925d289daf81$var$findDefaultSelectedKey(collection, state.disabledKeys);
            if (selectedKey != null) selectionManager.setSelectedKeys([
                selectedKey
            ]);
        }
        // If the tablist doesn't have focus and the selected key changes or if there isn't a focused key yet, change focused key to the selected key if it exists.
        if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current) selectionManager.setFocusedKey(selectedKey);
        lastSelectedKey.current = selectedKey;
    });
    return {
        ...state,
        isDisabled: props.isDisabled || false
    };
}
function $817f925d289daf81$var$findDefaultSelectedKey(collection, disabledKeys) {
    let selectedKey = null;
    if (collection) {
        var _collection_getItem_props, _collection_getItem, _collection_getItem_props1, _collection_getItem1;
        selectedKey = collection.getFirstKey();
        // loop over tabs until we find one that isn't disabled and select that
        while(selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : (_collection_getItem_props = _collection_getItem.props) === null || _collection_getItem_props === void 0 ? void 0 : _collection_getItem_props.isDisabled)) && selectedKey !== collection.getLastKey())selectedKey = collection.getKeyAfter(selectedKey);
        // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
        if (selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem1 = collection.getItem(selectedKey)) === null || _collection_getItem1 === void 0 ? void 0 : (_collection_getItem_props1 = _collection_getItem1.props) === null || _collection_getItem_props1 === void 0 ? void 0 : _collection_getItem_props1.isDisabled)) && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
    }
    return selectedKey;
} //# sourceMappingURL=useTabListState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/tabs/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $817f925d289daf81$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/tabs/dist/useTabListState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTabListState", ()=>$817f925d289daf81$exports.useTabListState); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/useFormValidationState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $kFCAu$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "VALID_VALIDITY_STATE", ()=>$5d10129a174740d4$export$aca958c65c314e6c);
$parcel$export(module.exports, "DEFAULT_VALIDATION_RESULT", ()=>$5d10129a174740d4$export$dad6ae84456c676a);
$parcel$export(module.exports, "FormValidationContext", ()=>$5d10129a174740d4$export$571b5131b7e65c11);
$parcel$export(module.exports, "privateValidationStateProp", ()=>$5d10129a174740d4$export$a763b9476acd3eb);
$parcel$export(module.exports, "useFormValidationState", ()=>$5d10129a174740d4$export$fc1a364ae1f3ff10);
$parcel$export(module.exports, "mergeValidation", ()=>$5d10129a174740d4$export$75ee7c75d68f5b0e);
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
 */ const $5d10129a174740d4$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $5d10129a174740d4$var$CUSTOM_VALIDITY_STATE = {
    ...$5d10129a174740d4$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $5d10129a174740d4$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $5d10129a174740d4$export$aca958c65c314e6c,
    validationErrors: []
};
const $5d10129a174740d4$export$571b5131b7e65c11 = (0, $kFCAu$react.createContext)({});
const $5d10129a174740d4$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $5d10129a174740d4$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$5d10129a174740d4$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$5d10129a174740d4$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $5d10129a174740d4$var$useFormValidationStateImpl(props);
}
function $5d10129a174740d4$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $5d10129a174740d4$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, $kFCAu$react.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $5d10129a174740d4$var$runValidate(validate, value);
        return $5d10129a174740d4$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, $kFCAu$react.useContext)($5d10129a174740d4$export$571b5131b7e65c11);
    let serverErrorMessages = (0, $kFCAu$react.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$5d10129a174740d4$var$asArray(serverErrors[name])) : $5d10129a174740d4$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, $kFCAu$react.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, $kFCAu$react.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, $kFCAu$react.useMemo)(()=>$5d10129a174740d4$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, $kFCAu$react.useRef)($5d10129a174740d4$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, $kFCAu$react.useState)($5d10129a174740d4$export$dad6ae84456c676a);
    let lastError = (0, $kFCAu$react.useRef)($5d10129a174740d4$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$5d10129a174740d4$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, $kFCAu$react.useState)(false);
    (0, $kFCAu$react.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $5d10129a174740d4$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$5d10129a174740d4$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $5d10129a174740d4$export$dad6ae84456c676a;
            if (!$5d10129a174740d4$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $5d10129a174740d4$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $5d10129a174740d4$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $5d10129a174740d4$var$asArray(e);
    }
    return [];
}
function $5d10129a174740d4$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $5d10129a174740d4$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $5d10129a174740d4$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $5d10129a174740d4$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$5d10129a174740d4$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
} //# sourceMappingURL=useFormValidationState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5d10129a174740d4$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/useFormValidationState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "FormValidationContext", ()=>$5d10129a174740d4$exports.FormValidationContext);
$parcel$export(module.exports, "useFormValidationState", ()=>$5d10129a174740d4$exports.useFormValidationState);
$parcel$export(module.exports, "DEFAULT_VALIDATION_RESULT", ()=>$5d10129a174740d4$exports.DEFAULT_VALIDATION_RESULT);
$parcel$export(module.exports, "VALID_VALIDITY_STATE", ()=>$5d10129a174740d4$exports.VALID_VALIDITY_STATE);
$parcel$export(module.exports, "privateValidationStateProp", ()=>$5d10129a174740d4$exports.privateValidationStateProp);
$parcel$export(module.exports, "mergeValidation", ()=>$5d10129a174740d4$exports.mergeValidation); /*
 * Copyright 2023 Adobe. All rights reserved.
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/TreeCollection.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "TreeCollection", ()=>$fae56b53b03726ff$export$863faf230ee2118a);
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
 */ class $fae56b53b03726ff$export$863faf230ee2118a {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        var _node_prevKey;
        return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        var _node_nextKey;
        return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    constructor(nodes, { expandedKeys: expandedKeys } = {}){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        var _last_key;
        this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
} //# sourceMappingURL=TreeCollection.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/useTreeState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $fae56b53b03726ff$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/TreeCollection.main.js [app-ssr] (ecmascript)");
var $abPLV$reactstatelyselection = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/dist/main.js [app-ssr] (ecmascript)");
var $abPLV$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $abPLV$reactstatelycollections = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/collections/dist/main.js [app-ssr] (ecmascript)");
var $abPLV$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTreeState", ()=>$38effb299000faaf$export$728d6ba534403756);
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
 */ function $38effb299000faaf$export$728d6ba534403756(props) {
    let { onExpandedChange: onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, $abPLV$reactstatelyutils.useControlledState)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, $abPLV$reactstatelyselection.useMultipleSelectionState)(props);
    let disabledKeys = (0, $abPLV$react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, $abPLV$reactstatelycollections.useCollection)(props, (0, $abPLV$react.useCallback)((nodes)=>new (0, $fae56b53b03726ff$exports.TreeCollection)(nodes, {
            expandedKeys: expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, $abPLV$react.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($38effb299000faaf$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys: setExpandedKeys,
        selectionManager: new (0, $abPLV$reactstatelyselection.SelectionManager)(tree, selectionState)
    };
}
function $38effb299000faaf$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
} //# sourceMappingURL=useTreeState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $38effb299000faaf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/useTreeState.main.js [app-ssr] (ecmascript)");
var $fae56b53b03726ff$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/tree/dist/TreeCollection.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTreeState", ()=>$38effb299000faaf$exports.useTreeState);
$parcel$export(module.exports, "TreeCollection", ()=>$fae56b53b03726ff$exports.TreeCollection); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/menu/dist/useMenuTriggerState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $7hdEs$reactstatelyoverlays = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/main.js [app-ssr] (ecmascript)");
var $7hdEs$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuTriggerState", ()=>$f39cdb649cd48930$export$79fefeb1c2091ac3);
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
 */ function $f39cdb649cd48930$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = (0, $7hdEs$reactstatelyoverlays.useOverlayTriggerState)(props);
    let [focusStrategy, setFocusStrategy] = (0, $7hdEs$react.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, $7hdEs$react.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy: focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        expandedKeysStack: expandedKeysStack,
        openSubmenu: openSubmenu,
        closeSubmenu: closeSubmenu
    };
} //# sourceMappingURL=useMenuTriggerState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/menu/dist/useSubmenuTriggerState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9cbje$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useSubmenuTriggerState", ()=>$38ab7fb105c54ad2$export$cfc51cf86138bf98);
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
 */ function $38ab7fb105c54ad2$export$cfc51cf86138bf98(props, state) {
    let { triggerKey: triggerKey } = props;
    let { expandedKeysStack: expandedKeysStack, openSubmenu: openSubmenu, closeSubmenu: closeSubmenu, close: closeAll } = state;
    let [submenuLevel] = (0, $9cbje$react.useState)(expandedKeysStack === null || expandedKeysStack === void 0 ? void 0 : expandedKeysStack.length);
    let isOpen = (0, $9cbje$react.useMemo)(()=>expandedKeysStack[submenuLevel] === triggerKey, [
        expandedKeysStack,
        triggerKey,
        submenuLevel
    ]);
    let [focusStrategy, setFocusStrategy] = (0, $9cbje$react.useState)(null);
    let open = (0, $9cbje$react.useCallback)((focusStrategy)=>{
        setFocusStrategy(focusStrategy !== null && focusStrategy !== void 0 ? focusStrategy : null);
        openSubmenu(triggerKey, submenuLevel);
    }, [
        openSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let close = (0, $9cbje$react.useCallback)(()=>{
        setFocusStrategy(null);
        closeSubmenu(triggerKey, submenuLevel);
    }, [
        closeSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let toggle = (0, $9cbje$react.useCallback)((focusStrategy)=>{
        setFocusStrategy(focusStrategy !== null && focusStrategy !== void 0 ? focusStrategy : null);
        if (isOpen) close();
        else open(focusStrategy);
    }, [
        close,
        open,
        isOpen
    ]);
    return (0, $9cbje$react.useMemo)(()=>({
            focusStrategy: focusStrategy,
            isOpen: isOpen,
            open: open,
            close: close,
            closeAll: closeAll,
            submenuLevel: submenuLevel,
            // TODO: Placeholders that aren't used but give us parity with OverlayTriggerState so we can use this in Popover. Refactor if we update Popover via
            // https://github.com/adobe/react-spectrum/pull/4976#discussion_r1336472863
            setOpen: ()=>{},
            toggle: toggle
        }), [
        isOpen,
        open,
        close,
        closeAll,
        focusStrategy,
        toggle,
        submenuLevel
    ]);
} //# sourceMappingURL=useSubmenuTriggerState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/menu/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $f39cdb649cd48930$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/menu/dist/useMenuTriggerState.main.js [app-ssr] (ecmascript)");
var $38ab7fb105c54ad2$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/menu/dist/useSubmenuTriggerState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useMenuTriggerState", ()=>$f39cdb649cd48930$exports.useMenuTriggerState);
$parcel$export(module.exports, "useSubmenuTriggerState", ()=>$38ab7fb105c54ad2$exports.useSubmenuTriggerState); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ar-AE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
    "rangeReversed": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621} \u{64A}\u{62C}\u{628} \u{623}\u{646} \u{64A}\u{643}\u{648}\u{646} \u{642}\u{628}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}.`,
    "rangeUnderflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
    "unavailableDate": `\u{627}\u{644}\u{628}\u{64A}\u{627}\u{646}\u{627}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629} \u{63A}\u{64A}\u{631} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`
}; //# sourceMappingURL=ar-AE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/bg-BG.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
    "rangeReversed": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} \u{43F}\u{440}\u{435}\u{434}\u{438} \u{43A}\u{440}\u{430}\u{439}\u{43D}\u{430}\u{442}\u{430}.`,
    "rangeUnderflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
    "unavailableDate": `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435} \u{435} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430}.`
}; //# sourceMappingURL=bg-BG.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/cs-CZ.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed b\xfdt ${args.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
    "rangeReversed": `Datum zah\xe1jen\xed mus\xed p\u{159}edch\xe1zet datu ukon\u{10D}en\xed.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed b\xfdt ${args.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
    "unavailableDate": `Vybran\xe9 datum nen\xed k dispozici.`
}; //# sourceMappingURL=cs-CZ.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/da-DK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`V\xe6rdien skal v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
    "rangeUnderflow": (args)=>`V\xe6rdien skal v\xe6re ${args.minValue} eller nyere.`,
    "unavailableDate": `Den valgte dato er ikke tilg\xe6ngelig.`
}; //# sourceMappingURL=da-DK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/de-DE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Der Wert muss ${args.maxValue} oder fr\xfcher sein.`,
    "rangeReversed": `Das Anfangsdatum muss vor dem Enddatum liegen.`,
    "rangeUnderflow": (args)=>`Der Wert muss ${args.minValue} oder sp\xe4ter sein.`,
    "unavailableDate": `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`
}; //# sourceMappingURL=de-DE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/el-GR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "rangeReversed": `\u{397} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} \u{3C4}\u{3B7}\u{3BD} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}.`,
    "rangeUnderflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "unavailableDate": `\u{397} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3B4}\u{3B5}\u{3BD} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7}.`
}; //# sourceMappingURL=el-GR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/en-US.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeUnderflow": (args)=>`Value must be ${args.minValue} or later.`,
    "rangeOverflow": (args)=>`Value must be ${args.maxValue} or earlier.`,
    "rangeReversed": `Start date must be before end date.`,
    "unavailableDate": `Selected date unavailable.`
}; //# sourceMappingURL=en-US.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/es-ES.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`El valor debe ser ${args.maxValue} o anterior.`,
    "rangeReversed": `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
    "rangeUnderflow": (args)=>`El valor debe ser ${args.minValue} o posterior.`,
    "unavailableDate": `Fecha seleccionada no disponible.`
}; //# sourceMappingURL=es-ES.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/et-EE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`V\xe4\xe4rtus peab olema ${args.maxValue} v\xf5i varasem.`,
    "rangeReversed": `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
    "rangeUnderflow": (args)=>`V\xe4\xe4rtus peab olema ${args.minValue} v\xf5i hilisem.`,
    "unavailableDate": `Valitud kuup\xe4ev pole saadaval.`
}; //# sourceMappingURL=et-EE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/fi-FI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Arvon on oltava ${args.maxValue} tai sit\xe4 aikaisempi.`,
    "rangeReversed": `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
    "rangeUnderflow": (args)=>`Arvon on oltava ${args.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
    "unavailableDate": `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`
}; //# sourceMappingURL=fi-FI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/fr-FR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`La valeur doit \xeatre ${args.maxValue} ou ant\xe9rieure.`,
    "rangeReversed": `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
    "rangeUnderflow": (args)=>`La valeur doit \xeatre ${args.minValue} ou ult\xe9rieure.`,
    "unavailableDate": `La date s\xe9lectionn\xe9e n\u{2019}est pas disponible.`
}; //# sourceMappingURL=fr-FR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/he-IL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "rangeReversed": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} \u{5DC}\u{5E4}\u{5E0}\u{5D9} \u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E1}\u{5D9}\u{5D5}\u{5DD}.`,
    "rangeUnderflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "unavailableDate": `\u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E0}\u{5D1}\u{5D7}\u{5E8} \u{5D0}\u{5D9}\u{5E0}\u{5D5} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`
}; //# sourceMappingURL=he-IL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/hr-HR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Vrijednost mora biti ${args.maxValue} ili ranije.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti prije datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrijednost mora biti ${args.minValue} ili kasnije.`,
    "unavailableDate": `Odabrani datum nije dostupan.`
}; //# sourceMappingURL=hr-HR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/hu-HU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Az \xe9rt\xe9knek ${args.maxValue} vagy kor\xe1bbinak kell lennie.`,
    "rangeReversed": `A kezd\u{151} d\xe1tumnak a befejez\u{151} d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
    "rangeUnderflow": (args)=>`Az \xe9rt\xe9knek ${args.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
    "unavailableDate": `A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u{151} el.`
}; //# sourceMappingURL=hu-HU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/it-IT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Il valore deve essere ${args.maxValue} o precedente.`,
    "rangeReversed": `La data di inizio deve essere antecedente alla data di fine.`,
    "rangeUnderflow": (args)=>`Il valore deve essere ${args.minValue} o successivo.`,
    "unavailableDate": `Data selezionata non disponibile.`
}; //# sourceMappingURL=it-IT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ja-JP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{5024}\u{306F} ${args.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{306F}\u{7D42}\u{4E86}\u{65E5}\u{3088}\u{308A}\u{524D}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{5024}\u{306F} ${args.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "unavailableDate": `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8}\u{306F}\u{4F7F}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}`
}; //# sourceMappingURL=ja-JP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ko-KR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{AC12}\u{C740} ${args.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeReversed": `\u{C2DC}\u{C791}\u{C77C}\u{C740} \u{C885}\u{B8CC}\u{C77C} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeUnderflow": (args)=>`\u{AC12}\u{C740} ${args.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "unavailableDate": `\u{C120}\u{D0DD}\u{D55C} \u{B0A0}\u{C9DC}\u{B97C} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.`
}; //# sourceMappingURL=ko-KR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/lt-LT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.maxValue} arba ankstesn\u{117}.`,
    "rangeReversed": `Prad\u{17E}ios data turi b\u{16B}ti ankstesn\u{117} nei pabaigos data.`,
    "rangeUnderflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.minValue} arba naujesn\u{117}.`,
    "unavailableDate": `Pasirinkta data nepasiekiama.`
}; //# sourceMappingURL=lt-LT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/lv-LV.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.maxValue} vai agr\u{101}kai.`,
    "rangeReversed": `S\u{101}kuma datumam ir j\u{101}b\u{16B}t pirms beigu datuma.`,
    "rangeUnderflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.minValue} vai v\u{113}l\u{101}kai.`,
    "unavailableDate": `Atlas\u{12B}tais datums nav pieejams.`
}; //# sourceMappingURL=lv-LV.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/nb-NO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Verdien m\xe5 v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
    "rangeUnderflow": (args)=>`Verdien m\xe5 v\xe6re ${args.minValue} eller senere.`,
    "unavailableDate": `Valgt dato utilgjengelig.`
}; //# sourceMappingURL=nb-NO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/nl-NL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Waarde moet ${args.maxValue} of eerder zijn.`,
    "rangeReversed": `De startdatum moet voor de einddatum liggen.`,
    "rangeUnderflow": (args)=>`Waarde moet ${args.minValue} of later zijn.`,
    "unavailableDate": `Geselecteerde datum niet beschikbaar.`
}; //# sourceMappingURL=nl-NL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pl-PL.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
    "rangeReversed": `Data rozpocz\u{119}cia musi by\u{107} wcze\u{15B}niejsza ni\u{17C} data zako\u{144}czenia.`,
    "rangeUnderflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
    "unavailableDate": `Wybrana data jest niedost\u{119}pna.`
}; //# sourceMappingURL=pl-PL.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pt-BR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`O valor deve ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data inicial deve ser anterior \xe0 data final.`,
    "rangeUnderflow": (args)=>`O valor deve ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
}; //# sourceMappingURL=pt-BR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pt-PT.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`O valor tem de ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
    "rangeUnderflow": (args)=>`O valor tem de ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
}; //# sourceMappingURL=pt-PT.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ro-RO.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.maxValue} sau anterioar\u{103}.`,
    "rangeReversed": `Data de \xeenceput trebuie s\u{103} fie anterioar\u{103} datei de sf\xe2r\u{219}it.`,
    "rangeUnderflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.minValue} sau ulterioar\u{103}.`,
    "unavailableDate": `Data selectat\u{103} nu este disponibil\u{103}.`
}; //# sourceMappingURL=ro-RO.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ru-RU.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{430} \u{43F}\u{440}\u{435}\u{434}\u{448}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{434}\u{430}\u{442}\u{435} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
}; //# sourceMappingURL=ru-RU.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sk-SK.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed by\u{165} ${args.maxValue} alebo skor\u{161}ia.`,
    "rangeReversed": `D\xe1tum za\u{10D}iatku mus\xed by\u{165} skor\u{161}\xed ako d\xe1tum konca.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed by\u{165} ${args.minValue} alebo neskor\u{161}ia.`,
    "unavailableDate": `Vybrat\xfd d\xe1tum je nedostupn\xfd.`
}; //# sourceMappingURL=sk-SK.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sl-SI.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Vrednost mora biti ${args.maxValue} ali starej\u{161}a.`,
    "rangeReversed": `Za\u{10D}etni datum mora biti pred kon\u{10D}nim datumom.`,
    "rangeUnderflow": (args)=>`Vrednost mora biti ${args.minValue} ali novej\u{161}a.`,
    "unavailableDate": `Izbrani datum ni na voljo.`
}; //# sourceMappingURL=sl-SI.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sr-SP.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`Vrednost mora da bude ${args.maxValue} ili starija.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti pre datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrednost mora da bude ${args.minValue} ili novija.`,
    "unavailableDate": `Izabrani datum nije dostupan.`
}; //# sourceMappingURL=sr-SP.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sv-SE.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.maxValue} eller tidigare.`,
    "rangeReversed": `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
    "rangeUnderflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.minValue} eller senare.`,
    "unavailableDate": `Det valda datumet \xe4r inte tillg\xe4ngligt.`
}; //# sourceMappingURL=sv-SE.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/tr-TR.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`De\u{11F}er, ${args.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
    "rangeReversed": `Ba\u{15F}lang\u{131}\xe7 tarihi biti\u{15F} tarihinden \xf6nce olmal\u{131}d\u{131}r.`,
    "rangeUnderflow": (args)=>`De\u{11F}er, ${args.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
    "unavailableDate": `Se\xe7ilen tarih kullan\u{131}lam\u{131}yor.`
}; //# sourceMappingURL=tr-TR.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/uk-UA.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443} \u{43C}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{443}\u{432}\u{430}\u{442}\u{438} \u{434}\u{430}\u{442}\u{456} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
}; //# sourceMappingURL=uk-UA.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/zh-CN.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
    "rangeReversed": `\u{5F00}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{987B}\u{65E9}\u{4E8E}\u{7ED3}\u{675F}\u{65E5}\u{671F}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9009}\u{65E5}\u{671F}\u{4E0D}\u{53EF}\u{7528}\u{3002}`
}; //# sourceMappingURL=zh-CN.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/zh-TW.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{9808}\u{5728}\u{7D50}\u{675F}\u{65E5}\u{671F}\u{4E4B}\u{524D}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9078}\u{65E5}\u{671F}\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{3002}`
}; //# sourceMappingURL=zh-TW.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $a16eae39a66f3afd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ar-AE.main.js [app-ssr] (ecmascript)");
var $be973442240b2918$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/bg-BG.main.js [app-ssr] (ecmascript)");
var $a1709037331f64d7$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/cs-CZ.main.js [app-ssr] (ecmascript)");
var $1896523498fa2f44$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/da-DK.main.js [app-ssr] (ecmascript)");
var $169837a5a815615d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/de-DE.main.js [app-ssr] (ecmascript)");
var $cfb55132d6925036$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/el-GR.main.js [app-ssr] (ecmascript)");
var $384a6c8de1da1e62$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/en-US.main.js [app-ssr] (ecmascript)");
var $be8241903709dc6e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/es-ES.main.js [app-ssr] (ecmascript)");
var $63e1eb192205ecbf$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/et-EE.main.js [app-ssr] (ecmascript)");
var $41dc33071b9981dc$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/fi-FI.main.js [app-ssr] (ecmascript)");
var $c75ba81d7768253e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/fr-FR.main.js [app-ssr] (ecmascript)");
var $f678f4bf27dcdd12$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/he-IL.main.js [app-ssr] (ecmascript)");
var $d23f6e75dc589b55$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/hr-HR.main.js [app-ssr] (ecmascript)");
var $439e34e0a9a3f4c1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/hu-HU.main.js [app-ssr] (ecmascript)");
var $449973ba87982f00$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/it-IT.main.js [app-ssr] (ecmascript)");
var $902560907618d6e6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ja-JP.main.js [app-ssr] (ecmascript)");
var $8c0f39c970bc2860$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ko-KR.main.js [app-ssr] (ecmascript)");
var $db03bc54746c5caa$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/lt-LT.main.js [app-ssr] (ecmascript)");
var $3f356a0921f4d37a$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/lv-LV.main.js [app-ssr] (ecmascript)");
var $1265d19da9735bfb$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/nb-NO.main.js [app-ssr] (ecmascript)");
var $7b57f991f3f6edd1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/nl-NL.main.js [app-ssr] (ecmascript)");
var $04fe5f1360210d7c$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pl-PL.main.js [app-ssr] (ecmascript)");
var $e64ffd0cafbe4c46$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pt-BR.main.js [app-ssr] (ecmascript)");
var $f7b4a5fc25c8f238$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/pt-PT.main.js [app-ssr] (ecmascript)");
var $cf72ee454c27a2e7$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ro-RO.main.js [app-ssr] (ecmascript)");
var $a41511fa599c2cbe$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/ru-RU.main.js [app-ssr] (ecmascript)");
var $2fedc389afac088d$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sk-SK.main.js [app-ssr] (ecmascript)");
var $b0aebb8d8c040cc9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sl-SI.main.js [app-ssr] (ecmascript)");
var $67017d9b82b5d17e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sr-SP.main.js [app-ssr] (ecmascript)");
var $833e86f5dac82c23$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/sv-SE.main.js [app-ssr] (ecmascript)");
var $5b72687d362158b0$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/tr-TR.main.js [app-ssr] (ecmascript)");
var $5d2b1be67024bd70$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/uk-UA.main.js [app-ssr] (ecmascript)");
var $644f5cd034787834$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/zh-CN.main.js [app-ssr] (ecmascript)");
var $11c20589c8b82ee8$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/zh-TW.main.js [app-ssr] (ecmascript)");
module.exports = {
    "ar-AE": $a16eae39a66f3afd$exports,
    "bg-BG": $be973442240b2918$exports,
    "cs-CZ": $a1709037331f64d7$exports,
    "da-DK": $1896523498fa2f44$exports,
    "de-DE": $169837a5a815615d$exports,
    "el-GR": $cfb55132d6925036$exports,
    "en-US": $384a6c8de1da1e62$exports,
    "es-ES": $be8241903709dc6e$exports,
    "et-EE": $63e1eb192205ecbf$exports,
    "fi-FI": $41dc33071b9981dc$exports,
    "fr-FR": $c75ba81d7768253e$exports,
    "he-IL": $f678f4bf27dcdd12$exports,
    "hr-HR": $d23f6e75dc589b55$exports,
    "hu-HU": $439e34e0a9a3f4c1$exports,
    "it-IT": $449973ba87982f00$exports,
    "ja-JP": $902560907618d6e6$exports,
    "ko-KR": $8c0f39c970bc2860$exports,
    "lt-LT": $db03bc54746c5caa$exports,
    "lv-LV": $3f356a0921f4d37a$exports,
    "nb-NO": $1265d19da9735bfb$exports,
    "nl-NL": $7b57f991f3f6edd1$exports,
    "pl-PL": $04fe5f1360210d7c$exports,
    "pt-BR": $e64ffd0cafbe4c46$exports,
    "pt-PT": $f7b4a5fc25c8f238$exports,
    "ro-RO": $cf72ee454c27a2e7$exports,
    "ru-RU": $a41511fa599c2cbe$exports,
    "sk-SK": $2fedc389afac088d$exports,
    "sl-SI": $b0aebb8d8c040cc9$exports,
    "sr-SP": $67017d9b82b5d17e$exports,
    "sv-SE": $833e86f5dac82c23$exports,
    "tr-TR": $5b72687d362158b0$exports,
    "uk-UA": $5d2b1be67024bd70$exports,
    "zh-CN": $644f5cd034787834$exports,
    "zh-TW": $11c20589c8b82ee8$exports
}; //# sourceMappingURL=intlStrings.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $5294278fb5cc815e$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/intlStrings.main.js [app-ssr] (ecmascript)");
var $68Tdx$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $68Tdx$internationalizedstring = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)");
var $68Tdx$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $68Tdx$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "getValidationResult", ()=>$50d5d6a623389320$export$f18627323ab57ac0);
$parcel$export(module.exports, "getFormatOptions", ()=>$50d5d6a623389320$export$7e319ea407e63bc0);
$parcel$export(module.exports, "getRangeValidationResult", ()=>$50d5d6a623389320$export$80ff8fc0ae339c13);
$parcel$export(module.exports, "getPlaceholderTime", ()=>$50d5d6a623389320$export$c5221a78ef73c5e9);
$parcel$export(module.exports, "convertValue", ()=>$50d5d6a623389320$export$61a490a80c552550);
$parcel$export(module.exports, "createPlaceholderDate", ()=>$50d5d6a623389320$export$66aa2b09de4b1ea5);
$parcel$export(module.exports, "useDefaultProps", ()=>$50d5d6a623389320$export$2440da353cedad43);
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
 */ const $50d5d6a623389320$var$dictionary = new (0, $68Tdx$internationalizedstring.LocalizedStringDictionary)((0, $parcel$interopDefault($5294278fb5cc815e$exports)));
function $50d5d6a623389320$var$getLocale() {
    // Match browser language setting here, NOT react-aria's I18nProvider, so that we match other browser-provided
    // validation messages, which to not respect our provider's language.
    // @ts-ignore
    return typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
}
function $50d5d6a623389320$export$f18627323ab57ac0(value, minValue, maxValue, isDateUnavailable, options) {
    let rangeOverflow = value != null && maxValue != null && value.compare(maxValue) > 0;
    let rangeUnderflow = value != null && minValue != null && value.compare(minValue) < 0;
    let isUnavailable = value != null && (isDateUnavailable === null || isDateUnavailable === void 0 ? void 0 : isDateUnavailable(value)) || false;
    let isInvalid = rangeOverflow || rangeUnderflow || isUnavailable;
    let errors = [];
    if (isInvalid) {
        let locale = $50d5d6a623389320$var$getLocale();
        let strings = (0, $68Tdx$internationalizedstring.LocalizedStringDictionary).getGlobalDictionaryForPackage('@react-stately/datepicker') || $50d5d6a623389320$var$dictionary;
        let formatter = new (0, $68Tdx$internationalizedstring.LocalizedStringFormatter)(locale, strings);
        let dateFormatter = new (0, $68Tdx$internationalizeddate.DateFormatter)(locale, $50d5d6a623389320$export$7e319ea407e63bc0({}, options));
        let timeZone = dateFormatter.resolvedOptions().timeZone;
        if (rangeUnderflow && minValue != null) errors.push(formatter.format('rangeUnderflow', {
            minValue: dateFormatter.format(minValue.toDate(timeZone))
        }));
        if (rangeOverflow && maxValue != null) errors.push(formatter.format('rangeOverflow', {
            maxValue: dateFormatter.format(maxValue.toDate(timeZone))
        }));
        if (isUnavailable) errors.push(formatter.format('unavailableDate'));
    }
    return {
        isInvalid: isInvalid,
        validationErrors: errors,
        validationDetails: {
            badInput: isUnavailable,
            customError: false,
            patternMismatch: false,
            rangeOverflow: rangeOverflow,
            rangeUnderflow: rangeUnderflow,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
            valid: !isInvalid
        }
    };
}
function $50d5d6a623389320$export$80ff8fc0ae339c13(value, minValue, maxValue, isDateUnavailable, options) {
    var _value_start;
    let startValidation = $50d5d6a623389320$export$f18627323ab57ac0((_value_start = value === null || value === void 0 ? void 0 : value.start) !== null && _value_start !== void 0 ? _value_start : null, minValue, maxValue, isDateUnavailable, options);
    var _value_end;
    let endValidation = $50d5d6a623389320$export$f18627323ab57ac0((_value_end = value === null || value === void 0 ? void 0 : value.end) !== null && _value_end !== void 0 ? _value_end : null, minValue, maxValue, isDateUnavailable, options);
    let result = (0, $68Tdx$reactstatelyform.mergeValidation)(startValidation, endValidation);
    if ((value === null || value === void 0 ? void 0 : value.end) != null && value.start != null && value.end.compare(value.start) < 0) {
        let strings = (0, $68Tdx$internationalizedstring.LocalizedStringDictionary).getGlobalDictionaryForPackage('@react-stately/datepicker') || $50d5d6a623389320$var$dictionary;
        result = (0, $68Tdx$reactstatelyform.mergeValidation)(result, {
            isInvalid: true,
            validationErrors: [
                strings.getStringForLocale('rangeReversed', $50d5d6a623389320$var$getLocale())
            ],
            validationDetails: {
                ...(0, $68Tdx$reactstatelyform.VALID_VALIDITY_STATE),
                rangeUnderflow: true,
                rangeOverflow: true,
                valid: false
            }
        });
    }
    return result;
}
const $50d5d6a623389320$var$DEFAULT_FIELD_OPTIONS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
};
const $50d5d6a623389320$var$TWO_DIGIT_FIELD_OPTIONS = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
function $50d5d6a623389320$export$7e319ea407e63bc0(fieldOptions, options) {
    let defaultFieldOptions = options.shouldForceLeadingZeros ? $50d5d6a623389320$var$TWO_DIGIT_FIELD_OPTIONS : $50d5d6a623389320$var$DEFAULT_FIELD_OPTIONS;
    fieldOptions = {
        ...defaultFieldOptions,
        ...fieldOptions
    };
    let granularity = options.granularity || 'minute';
    let keys = Object.keys(fieldOptions);
    var _options_maxGranularity;
    let startIdx = keys.indexOf((_options_maxGranularity = options.maxGranularity) !== null && _options_maxGranularity !== void 0 ? _options_maxGranularity : 'year');
    if (startIdx < 0) startIdx = 0;
    let endIdx = keys.indexOf(granularity);
    if (endIdx < 0) endIdx = 2;
    if (startIdx > endIdx) throw new Error('maxGranularity must be greater than granularity');
    let opts = keys.slice(startIdx, endIdx + 1).reduce((opts, key)=>{
        opts[key] = fieldOptions[key];
        return opts;
    }, {});
    if (options.hourCycle != null) opts.hour12 = options.hourCycle === 12;
    opts.timeZone = options.timeZone || 'UTC';
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    if (hasTime && options.timeZone && !options.hideTimeZone) opts.timeZoneName = 'short';
    if (options.showEra && startIdx === 0) opts.era = 'short';
    return opts;
}
function $50d5d6a623389320$export$c5221a78ef73c5e9(placeholderValue) {
    if (placeholderValue && 'hour' in placeholderValue) return placeholderValue;
    return new (0, $68Tdx$internationalizeddate.Time)();
}
function $50d5d6a623389320$export$61a490a80c552550(value, calendar) {
    if (value === null) return null;
    if (!value) return undefined;
    return (0, $68Tdx$internationalizeddate.toCalendar)(value, calendar);
}
function $50d5d6a623389320$export$66aa2b09de4b1ea5(placeholderValue, granularity, calendar, timeZone) {
    if (placeholderValue) return $50d5d6a623389320$export$61a490a80c552550(placeholderValue, calendar);
    let date = (0, $68Tdx$internationalizeddate.toCalendar)((0, $68Tdx$internationalizeddate.now)(timeZone !== null && timeZone !== void 0 ? timeZone : (0, $68Tdx$internationalizeddate.getLocalTimeZone)()).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }), calendar);
    if (granularity === 'year' || granularity === 'month' || granularity === 'day') return (0, $68Tdx$internationalizeddate.toCalendarDate)(date);
    if (!timeZone) return (0, $68Tdx$internationalizeddate.toCalendarDateTime)(date);
    return date;
}
function $50d5d6a623389320$export$2440da353cedad43(v, granularity) {
    // Compute default granularity and time zone from the value. If the value becomes null, keep the last values.
    let defaultTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
    let defaultGranularity = v && 'minute' in v ? 'minute' : 'day';
    // props.granularity must actually exist in the value if one is provided.
    if (v && granularity && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let [lastValue, setLastValue] = (0, $68Tdx$react.useState)([
        defaultGranularity,
        defaultTimeZone
    ]);
    // If the granularity or time zone changed, update the last value.
    if (v && (lastValue[0] !== defaultGranularity || lastValue[1] !== defaultTimeZone)) setLastValue([
        defaultGranularity,
        defaultTimeZone
    ]);
    if (!granularity) granularity = v ? defaultGranularity : lastValue[0];
    let timeZone = v ? defaultTimeZone : lastValue[1];
    return [
        granularity,
        timeZone
    ];
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDatePickerState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $50d5d6a623389320$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/utils.main.js [app-ssr] (ecmascript)");
var $g6L8e$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $g6L8e$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $g6L8e$reactstatelyoverlays = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/main.js [app-ssr] (ecmascript)");
var $g6L8e$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $g6L8e$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDatePickerState", ()=>$aaab7a647e17e1fd$export$87194bb378cc3ac2);
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
 */ function $aaab7a647e17e1fd$export$87194bb378cc3ac2(props) {
    let overlayState = (0, $g6L8e$reactstatelyoverlays.useOverlayTriggerState)(props);
    let [value, setValue] = (0, $g6L8e$reactstatelyutils.useControlledState)(props.value, props.defaultValue || null, props.onChange);
    let v = value || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, $50d5d6a623389320$exports.useDefaultProps)(v, props.granularity);
    let dateValue = value != null ? value.toDate(defaultTimeZone !== null && defaultTimeZone !== void 0 ? defaultTimeZone : 'UTC') : null;
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    var _props_shouldCloseOnSelect;
    let shouldCloseOnSelect = (_props_shouldCloseOnSelect = props.shouldCloseOnSelect) !== null && _props_shouldCloseOnSelect !== void 0 ? _props_shouldCloseOnSelect : true;
    let [selectedDate, setSelectedDate] = (0, $g6L8e$react.useState)(null);
    let [selectedTime, setSelectedTime] = (0, $g6L8e$react.useState)(null);
    if (value) {
        selectedDate = value;
        if ('hour' in value) selectedTime = value;
    }
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let showEra = (value === null || value === void 0 ? void 0 : value.calendar.identifier) === 'gregory' && value.era === 'BC';
    let formatOpts = (0, $g6L8e$react.useMemo)(()=>({
            granularity: granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra: showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let builtinValidation = (0, $g6L8e$react.useMemo)(()=>(0, $50d5d6a623389320$exports.getValidationResult)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, $g6L8e$reactstatelyform.useFormValidationState)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    let commitValue = (date, time)=>{
        setValue('timeZone' in time ? time.set((0, $g6L8e$internationalizeddate.toCalendarDate)(date)) : (0, $g6L8e$internationalizeddate.toCalendarDateTime)(date, time));
        setSelectedDate(null);
        setSelectedTime(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let selectDate = (newValue)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            if (selectedTime || shouldClose) commitValue(newValue, selectedTime || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.defaultValue || props.placeholderValue));
            else setSelectedDate(newValue);
        } else {
            setValue(newValue);
            validation.commitValidation();
        }
        if (shouldClose) overlayState.setOpen(false);
    };
    let selectTime = (newValue)=>{
        if (selectedDate && newValue) commitValue(selectedDate, newValue);
        else setSelectedTime(newValue);
    };
    return {
        ...validation,
        value: value,
        setValue: setValue,
        dateValue: selectedDate,
        timeValue: selectedTime,
        setDateValue: selectDate,
        setTimeValue: selectTime,
        granularity: granularity,
        hasTime: hasTime,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time was set and not the date, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !value && selectedDate && hasTime) commitValue(selectedDate, selectedTime || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.defaultValue || props.placeholderValue));
            overlayState.setOpen(isOpen);
        },
        validationState: validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!dateValue) return '';
            let formatOptions = (0, $50d5d6a623389320$exports.getFormatOptions)(fieldOptions, formatOpts);
            let formatter = new (0, $g6L8e$internationalizeddate.DateFormatter)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, $50d5d6a623389320$exports.getFormatOptions)({}, newOptions);
            return new (0, $g6L8e$internationalizeddate.DateFormatter)(locale, newFormatOptions);
        }
    };
} //# sourceMappingURL=useDatePickerState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/placeholders.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $gtnqm$internationalizedstring = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "getPlaceholder", ()=>$e1e8ada727fae1a1$export$d3f5c5e0a5023fa0);
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
 */ // These placeholders are based on the strings used by the <input type="date">
// implementations in Chrome and Firefox. Additional languages are supported
// here than React Spectrum's typical translations.
const $e1e8ada727fae1a1$var$placeholders = new (0, $gtnqm$internationalizedstring.LocalizedStringDictionary)({
    ach: {
        year: 'mwaka',
        month: 'dwe',
        day: 'nino'
    },
    af: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    am: {
        year: "\u12D3\u12D3\u12D3\u12D3",
        month: "\u121A\u121C",
        day: "\u1240\u1240"
    },
    an: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ar: {
        year: "\u0633\u0646\u0629",
        month: "\u0634\u0647\u0631",
        day: "\u064A\u0648\u0645"
    },
    ast: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    az: {
        year: 'iiii',
        month: 'aa',
        day: 'gg'
    },
    be: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bg: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bn: {
        year: 'yyyy',
        month: "\u09AE\u09BF\u09AE\u09BF",
        day: 'dd'
    },
    br: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    bs: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    ca: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    cak: {
        year: 'jjjj',
        month: 'ii',
        day: "q'q'"
    },
    ckb: {
        year: "\u0633\u0627\u06B5",
        month: "\u0645\u0627\u0646\u06AF",
        day: "\u0695\u06C6\u0698"
    },
    cs: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    cy: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    da: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    de: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    dsb: {
        year: 'llll',
        month: 'mm',
        day: "\u017A\u017A"
    },
    el: {
        year: "\u03B5\u03B5\u03B5\u03B5",
        month: "\u03BC\u03BC",
        day: "\u03B7\u03B7"
    },
    en: {
        year: 'yyyy',
        month: 'mm',
        day: 'dd'
    },
    eo: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    es: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    et: {
        year: 'aaaa',
        month: 'kk',
        day: 'pp'
    },
    eu: {
        year: 'uuuu',
        month: 'hh',
        day: 'ee'
    },
    fa: {
        year: "\u0633\u0627\u0644",
        month: "\u0645\u0627\u0647",
        day: "\u0631\u0648\u0632"
    },
    ff: {
        year: 'hhhh',
        month: 'll',
        day: "\xf1\xf1"
    },
    fi: {
        year: 'vvvv',
        month: 'kk',
        day: 'pp'
    },
    fr: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    fy: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    ga: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gd: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gl: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    he: {
        year: "\u05E9\u05E0\u05D4",
        month: "\u05D7\u05D5\u05D3\u05E9",
        day: "\u05D9\u05D5\u05DD"
    },
    hr: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    hsb: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    hu: {
        year: "\xe9\xe9\xe9\xe9",
        month: 'hh',
        day: 'nn'
    },
    ia: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    id: {
        year: 'tttt',
        month: 'bb',
        day: 'hh'
    },
    it: {
        year: 'aaaa',
        month: 'mm',
        day: 'gg'
    },
    ja: {
        year: " \u5E74 ",
        month: "\u6708",
        day: "\u65E5"
    },
    ka: {
        year: "\u10EC\u10EC\u10EC\u10EC",
        month: "\u10D7\u10D7",
        day: "\u10E0\u10E0"
    },
    kk: {
        year: "\u0436\u0436\u0436\u0436",
        month: "\u0430\u0430",
        day: "\u043A\u043A"
    },
    kn: {
        year: "\u0CB5\u0CB5\u0CB5\u0CB5",
        month: "\u0CAE\u0CBF\u0CAE\u0CC0",
        day: "\u0CA6\u0CBF\u0CA6\u0CBF"
    },
    ko: {
        year: "\uC5F0\uB3C4",
        month: "\uC6D4",
        day: "\uC77C"
    },
    lb: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    lo: {
        year: "\u0E9B\u0E9B\u0E9B\u0E9B",
        month: "\u0E94\u0E94",
        day: "\u0EA7\u0EA7"
    },
    lt: {
        year: 'mmmm',
        month: 'mm',
        day: 'dd'
    },
    lv: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    meh: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ml: {
        year: "\u0D35\u0D7C\u0D37\u0D02",
        month: "\u0D2E\u0D3E\u0D38\u0D02",
        day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F"
    },
    ms: {
        year: 'tttt',
        month: 'mm',
        day: 'hh'
    },
    nl: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    nn: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    no: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    oc: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    pl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    pt: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    rm: {
        year: 'oooo',
        month: 'mm',
        day: 'dd'
    },
    ro: {
        year: 'aaaa',
        month: 'll',
        day: 'zz'
    },
    ru: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sc: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    scn: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    sk: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    sl: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    sr: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sv: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    szl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    tg: {
        year: "\u0441\u0441\u0441\u0441",
        month: "\u043C\u043C",
        day: "\u0440\u0440"
    },
    th: {
        year: "\u0E1B\u0E1B\u0E1B\u0E1B",
        month: "\u0E14\u0E14",
        day: "\u0E27\u0E27"
    },
    tr: {
        year: 'yyyy',
        month: 'aa',
        day: 'gg'
    },
    uk: {
        year: "\u0440\u0440\u0440\u0440",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    'zh-CN': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    },
    'zh-TW': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    }
}, 'en');
function $e1e8ada727fae1a1$export$d3f5c5e0a5023fa0(field, value, locale) {
    // Use the actual placeholder value for the era and day period fields.
    if (field === 'era' || field === 'dayPeriod') return value;
    if (field === 'year' || field === 'month' || field === 'day') return $e1e8ada727fae1a1$var$placeholders.getStringForLocale(field, locale);
    // For time fields (e.g. hour, minute, etc.), use two dashes as the placeholder.
    return "\u2013\u2013";
} //# sourceMappingURL=placeholders.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDateFieldState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $50d5d6a623389320$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/utils.main.js [app-ssr] (ecmascript)");
var $e1e8ada727fae1a1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/placeholders.main.js [app-ssr] (ecmascript)");
var $iqS8N$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $iqS8N$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $iqS8N$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $iqS8N$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateFieldState", ()=>$596a1f0f523d6752$export$60e84778edff6d26);
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
 */ const $596a1f0f523d6752$var$EDITABLE_SEGMENTS = {
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    dayPeriod: true,
    era: true
};
const $596a1f0f523d6752$var$PAGE_STEP = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
};
// Node seems to convert everything to lowercase...
const $596a1f0f523d6752$var$TYPE_MAPPING = {
    dayperiod: 'dayPeriod'
};
function $596a1f0f523d6752$export$60e84778edff6d26(props) {
    let { locale: locale, createCalendar: createCalendar, hideTimeZone: hideTimeZone, isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, isRequired: isRequired = false, minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let v = props.value || props.defaultValue || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, $50d5d6a623389320$exports.useDefaultProps)(v, props.granularity);
    let timeZone = defaultTimeZone || 'UTC';
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let defaultFormatter = (0, $iqS8N$react.useMemo)(()=>new (0, $iqS8N$internationalizeddate.DateFormatter)(locale), [
        locale
    ]);
    let calendar = (0, $iqS8N$react.useMemo)(()=>createCalendar(defaultFormatter.resolvedOptions().calendar), [
        createCalendar,
        defaultFormatter
    ]);
    var _props_defaultValue;
    let [value, setDate] = (0, $iqS8N$reactstatelyutils.useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarValue = (0, $iqS8N$react.useMemo)(()=>{
        var _convertValue;
        return (_convertValue = (0, $50d5d6a623389320$exports.convertValue)(value, calendar)) !== null && _convertValue !== void 0 ? _convertValue : null;
    }, [
        value,
        calendar
    ]);
    // We keep track of the placeholder date separately in state so that onChange is not called
    // until all segments are set. If the value === null (not undefined), then assume the component
    // is controlled, so use the placeholder as the value until all segments are entered so it doesn't
    // change from uncontrolled to controlled and emit a warning.
    let [placeholderDate, setPlaceholderDate] = (0, $iqS8N$react.useState)(()=>(0, $50d5d6a623389320$exports.createPlaceholderDate)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    let val = calendarValue || placeholderDate;
    let showEra = calendar.identifier === 'gregory' && val.era === 'BC';
    let formatOpts = (0, $iqS8N$react.useMemo)(()=>{
        var _props_maxGranularity;
        return {
            granularity: granularity,
            maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
            timeZone: defaultTimeZone,
            hideTimeZone: hideTimeZone,
            hourCycle: props.hourCycle,
            showEra: showEra,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros
        };
    }, [
        props.maxGranularity,
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        hideTimeZone,
        showEra
    ]);
    let opts = (0, $iqS8N$react.useMemo)(()=>(0, $50d5d6a623389320$exports.getFormatOptions)({}, formatOpts), [
        formatOpts
    ]);
    let dateFormatter = (0, $iqS8N$react.useMemo)(()=>new (0, $iqS8N$internationalizeddate.DateFormatter)(locale, opts), [
        locale,
        opts
    ]);
    let resolvedOptions = (0, $iqS8N$react.useMemo)(()=>dateFormatter.resolvedOptions(), [
        dateFormatter
    ]);
    // Determine how many editable segments there are for validation purposes.
    // The result is cached for performance.
    let allSegments = (0, $iqS8N$react.useMemo)(()=>dateFormatter.formatToParts(new Date()).filter((seg)=>$596a1f0f523d6752$var$EDITABLE_SEGMENTS[seg.type]).reduce((p, seg)=>(p[seg.type] = true, p), {}), [
        dateFormatter
    ]);
    let [validSegments, setValidSegments] = (0, $iqS8N$react.useState)(()=>props.value || props.defaultValue ? {
            ...allSegments
        } : {});
    let clearedSegment = (0, $iqS8N$react.useRef)(null);
    // Reset placeholder when calendar changes
    let lastCalendarIdentifier = (0, $iqS8N$react.useRef)(calendar.identifier);
    (0, $iqS8N$react.useEffect)(()=>{
        if (calendar.identifier !== lastCalendarIdentifier.current) {
            lastCalendarIdentifier.current = calendar.identifier;
            setPlaceholderDate((placeholder)=>Object.keys(validSegments).length > 0 ? (0, $iqS8N$internationalizeddate.toCalendar)(placeholder, calendar) : (0, $50d5d6a623389320$exports.createPlaceholderDate)(props.placeholderValue, granularity, calendar, defaultTimeZone));
        }
    }, [
        calendar,
        granularity,
        validSegments,
        defaultTimeZone,
        props.placeholderValue
    ]);
    // If there is a value prop, and some segments were previously placeholders, mark them all as valid.
    if (value && Object.keys(validSegments).length < Object.keys(allSegments).length) {
        validSegments = {
            ...allSegments
        };
        setValidSegments(validSegments);
    }
    // If the value is set to null and all segments are valid, reset the placeholder.
    if (value == null && Object.keys(validSegments).length === Object.keys(allSegments).length) {
        validSegments = {};
        setValidSegments(validSegments);
        setPlaceholderDate((0, $50d5d6a623389320$exports.createPlaceholderDate)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    }
    // If all segments are valid, use the date from state, otherwise use the placeholder date.
    let displayValue = calendarValue && Object.keys(validSegments).length >= Object.keys(allSegments).length ? calendarValue : placeholderDate;
    let setValue = (newValue)=>{
        if (props.isDisabled || props.isReadOnly) return;
        let validKeys = Object.keys(validSegments);
        let allKeys = Object.keys(allSegments);
        // if all the segments are completed or a timefield with everything but am/pm set the time, also ignore when am/pm cleared
        if (newValue == null) {
            setDate(null);
            setPlaceholderDate((0, $50d5d6a623389320$exports.createPlaceholderDate)(props.placeholderValue, granularity, calendar, defaultTimeZone));
            setValidSegments({});
        } else if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod && clearedSegment.current !== 'dayPeriod') {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = (0, $iqS8N$internationalizeddate.toCalendar)(newValue, (v === null || v === void 0 ? void 0 : v.calendar) || new (0, $iqS8N$internationalizeddate.GregorianCalendar)());
            setDate(newValue);
        } else setPlaceholderDate(newValue);
        clearedSegment.current = null;
    };
    let dateValue = (0, $iqS8N$react.useMemo)(()=>displayValue.toDate(timeZone), [
        displayValue,
        timeZone
    ]);
    let segments = (0, $iqS8N$react.useMemo)(()=>dateFormatter.formatToParts(dateValue).map((segment)=>{
            let isEditable = $596a1f0f523d6752$var$EDITABLE_SEGMENTS[segment.type];
            if (segment.type === 'era' && calendar.getEras().length === 1) isEditable = false;
            let isPlaceholder = $596a1f0f523d6752$var$EDITABLE_SEGMENTS[segment.type] && !validSegments[segment.type];
            let placeholder = $596a1f0f523d6752$var$EDITABLE_SEGMENTS[segment.type] ? (0, $e1e8ada727fae1a1$exports.getPlaceholder)(segment.type, segment.value, locale) : null;
            return {
                type: $596a1f0f523d6752$var$TYPE_MAPPING[segment.type] || segment.type,
                text: isPlaceholder ? placeholder : segment.value,
                ...$596a1f0f523d6752$var$getSegmentLimits(displayValue, segment.type, resolvedOptions),
                isPlaceholder: isPlaceholder,
                placeholder: placeholder,
                isEditable: isEditable
            };
        }), [
        dateValue,
        validSegments,
        dateFormatter,
        resolvedOptions,
        displayValue,
        calendar,
        locale
    ]);
    // When the era field appears, mark it valid if the year field is already valid.
    // If the era field disappears, remove it from the valid segments.
    if (allSegments.era && validSegments.year && !validSegments.era) {
        validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    } else if (!allSegments.era && validSegments.era) {
        delete validSegments.era;
        setValidSegments({
            ...validSegments
        });
    }
    let markValid = (part)=>{
        validSegments[part] = true;
        if (part === 'year' && allSegments.era) validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    };
    let adjustSegment = (type, amount)=>{
        if (!validSegments[type]) {
            markValid(type);
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) setValue(displayValue);
        } else setValue($596a1f0f523d6752$var$addSegment(displayValue, type, amount, resolvedOptions));
    };
    let builtinValidation = (0, $iqS8N$react.useMemo)(()=>(0, $50d5d6a623389320$exports.getValidationResult)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, $iqS8N$reactstatelyform.useFormValidationState)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    var _props_maxGranularity;
    return {
        ...validation,
        value: calendarValue,
        dateValue: dateValue,
        calendar: calendar,
        setValue: setValue,
        segments: segments,
        dateFormatter: dateFormatter,
        validationState: validationState,
        isInvalid: isValueInvalid,
        granularity: granularity,
        maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        increment (part) {
            adjustSegment(part, 1);
        },
        decrement (part) {
            adjustSegment(part, -1);
        },
        incrementPage (part) {
            adjustSegment(part, $596a1f0f523d6752$var$PAGE_STEP[part] || 1);
        },
        decrementPage (part) {
            adjustSegment(part, -($596a1f0f523d6752$var$PAGE_STEP[part] || 1));
        },
        setSegment (part, v) {
            markValid(part);
            setValue($596a1f0f523d6752$var$setSegment(displayValue, part, v, resolvedOptions));
        },
        confirmPlaceholder () {
            if (props.isDisabled || props.isReadOnly) return;
            // Confirm the placeholder if only the day period is not filled in.
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) {
                validSegments = {
                    ...allSegments
                };
                setValidSegments(validSegments);
                setValue(displayValue.copy());
            }
        },
        clearSegment (part) {
            delete validSegments[part];
            clearedSegment.current = part;
            setValidSegments({
                ...validSegments
            });
            let placeholder = (0, $50d5d6a623389320$exports.createPlaceholderDate)(props.placeholderValue, granularity, calendar, defaultTimeZone);
            let value = displayValue;
            // Reset day period to default without changing the hour.
            if (part === 'dayPeriod' && 'hour' in displayValue && 'hour' in placeholder) {
                let isPM = displayValue.hour >= 12;
                let shouldBePM = placeholder.hour >= 12;
                if (isPM && !shouldBePM) value = displayValue.set({
                    hour: displayValue.hour - 12
                });
                else if (!isPM && shouldBePM) value = displayValue.set({
                    hour: displayValue.hour + 12
                });
            } else if (part in displayValue) value = displayValue.set({
                [part]: placeholder[part]
            });
            setDate(null);
            setValue(value);
        },
        formatValue (fieldOptions) {
            if (!calendarValue) return '';
            let formatOptions = (0, $50d5d6a623389320$exports.getFormatOptions)(fieldOptions, formatOpts);
            let formatter = new (0, $iqS8N$internationalizeddate.DateFormatter)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, $50d5d6a623389320$exports.getFormatOptions)({}, newOptions);
            return new (0, $iqS8N$internationalizeddate.DateFormatter)(locale, newFormatOptions);
        }
    };
}
function $596a1f0f523d6752$var$getSegmentLimits(date, type, options) {
    switch(type){
        case 'era':
            {
                let eras = date.calendar.getEras();
                return {
                    value: eras.indexOf(date.era),
                    minValue: 0,
                    maxValue: eras.length - 1
                };
            }
        case 'year':
            return {
                value: date.year,
                minValue: 1,
                maxValue: date.calendar.getYearsInEra(date)
            };
        case 'month':
            return {
                value: date.month,
                minValue: (0, $iqS8N$internationalizeddate.getMinimumMonthInYear)(date),
                maxValue: date.calendar.getMonthsInYear(date)
            };
        case 'day':
            return {
                value: date.day,
                minValue: (0, $iqS8N$internationalizeddate.getMinimumDayInMonth)(date),
                maxValue: date.calendar.getDaysInMonth(date)
            };
    }
    if ('hour' in date) switch(type){
        case 'dayPeriod':
            return {
                value: date.hour >= 12 ? 12 : 0,
                minValue: 0,
                maxValue: 12
            };
        case 'hour':
            if (options.hour12) {
                let isPM = date.hour >= 12;
                return {
                    value: date.hour,
                    minValue: isPM ? 12 : 0,
                    maxValue: isPM ? 23 : 11
                };
            }
            return {
                value: date.hour,
                minValue: 0,
                maxValue: 23
            };
        case 'minute':
            return {
                value: date.minute,
                minValue: 0,
                maxValue: 59
            };
        case 'second':
            return {
                value: date.second,
                minValue: 0,
                maxValue: 59
            };
    }
    return {};
}
function $596a1f0f523d6752$var$addSegment(value, part, amount, options) {
    switch(part){
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return value.cycle(part, amount, {
                round: part === 'year'
            });
    }
    if ('hour' in value) switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let isPM = hours >= 12;
                return value.set({
                    hour: isPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
        case 'minute':
        case 'second':
            return value.cycle(part, amount, {
                round: part !== 'hour',
                hourCycle: options.hour12 ? 12 : 24
            });
    }
    throw new Error('Unknown segment: ' + part);
}
function $596a1f0f523d6752$var$setSegment(value, part, segmentValue, options) {
    switch(part){
        case 'day':
        case 'month':
        case 'year':
        case 'era':
            return value.set({
                [part]: segmentValue
            });
    }
    if ('hour' in value && typeof segmentValue === 'number') switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let wasPM = hours >= 12;
                let isPM = segmentValue >= 12;
                if (isPM === wasPM) return value;
                return value.set({
                    hour: wasPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
            // In 12 hour time, ensure that AM/PM does not change
            if (options.hour12) {
                let hours = value.hour;
                let wasPM = hours >= 12;
                if (!wasPM && segmentValue === 12) segmentValue = 0;
                if (wasPM && segmentValue < 12) segmentValue += 12;
            }
        // fallthrough
        case 'minute':
        case 'second':
            return value.set({
                [part]: segmentValue
            });
    }
    throw new Error('Unknown segment: ' + part);
} //# sourceMappingURL=useDateFieldState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDateRangePickerState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $50d5d6a623389320$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/utils.main.js [app-ssr] (ecmascript)");
var $9LYIl$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $9LYIl$reactstatelyform = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/form/dist/main.js [app-ssr] (ecmascript)");
var $9LYIl$reactstatelyoverlays = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/overlays/dist/main.js [app-ssr] (ecmascript)");
var $9LYIl$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $9LYIl$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDateRangePickerState", ()=>$7072d26f58deb33b$export$e50a61c1de9f574);
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
 */ function $7072d26f58deb33b$export$e50a61c1de9f574(props) {
    var _value_start, _value_end;
    let overlayState = (0, $9LYIl$reactstatelyoverlays.useOverlayTriggerState)(props);
    let [controlledValue, setControlledValue] = (0, $9LYIl$reactstatelyutils.useControlledState)(props.value, props.defaultValue || null, props.onChange);
    let [placeholderValue, setPlaceholderValue] = (0, $9LYIl$react.useState)(()=>controlledValue || {
            start: null,
            end: null
        });
    // Reset the placeholder if the value prop is set to null.
    if (controlledValue == null && placeholderValue.start && placeholderValue.end) {
        placeholderValue = {
            start: null,
            end: null
        };
        setPlaceholderValue(placeholderValue);
    }
    let value = controlledValue || placeholderValue;
    let setValue = (value)=>{
        setPlaceholderValue(value || {
            start: null,
            end: null
        });
        if ($7072d26f58deb33b$var$isCompleteRange(value)) setControlledValue(value);
        else setControlledValue(null);
    };
    let v = (value === null || value === void 0 ? void 0 : value.start) || (value === null || value === void 0 ? void 0 : value.end) || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, $50d5d6a623389320$exports.useDefaultProps)(v, props.granularity);
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    var _props_shouldCloseOnSelect;
    let shouldCloseOnSelect = (_props_shouldCloseOnSelect = props.shouldCloseOnSelect) !== null && _props_shouldCloseOnSelect !== void 0 ? _props_shouldCloseOnSelect : true;
    let [dateRange, setSelectedDateRange] = (0, $9LYIl$react.useState)(null);
    let [timeRange, setSelectedTimeRange] = (0, $9LYIl$react.useState)(null);
    if (value && $7072d26f58deb33b$var$isCompleteRange(value)) {
        dateRange = value;
        if ('hour' in value.start) timeRange = value;
    }
    let commitValue = (dateRange, timeRange)=>{
        setValue({
            start: 'timeZone' in timeRange.start ? timeRange.start.set((0, $9LYIl$internationalizeddate.toCalendarDate)(dateRange.start)) : (0, $9LYIl$internationalizeddate.toCalendarDateTime)(dateRange.start, timeRange.start),
            end: 'timeZone' in timeRange.end ? timeRange.end.set((0, $9LYIl$internationalizeddate.toCalendarDate)(dateRange.end)) : (0, $9LYIl$internationalizeddate.toCalendarDateTime)(dateRange.end, timeRange.end)
        });
        setSelectedDateRange(null);
        setSelectedTimeRange(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let setDateRange = (range)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            if ($7072d26f58deb33b$var$isCompleteRange(range) && (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) && (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end)) commitValue(range, {
                start: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.placeholderValue),
                end: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.placeholderValue)
            });
            else setSelectedDateRange(range);
        } else if ($7072d26f58deb33b$var$isCompleteRange(range)) {
            setValue(range);
            validation.commitValidation();
        } else setSelectedDateRange(range);
        if (shouldClose) overlayState.setOpen(false);
    };
    let setTimeRange = (range)=>{
        if ($7072d26f58deb33b$var$isCompleteRange(dateRange) && $7072d26f58deb33b$var$isCompleteRange(range)) commitValue(dateRange, range);
        else setSelectedTimeRange(range);
    };
    let showEra = (value === null || value === void 0 ? void 0 : (_value_start = value.start) === null || _value_start === void 0 ? void 0 : _value_start.calendar.identifier) === 'gregory' && value.start.era === 'BC' || (value === null || value === void 0 ? void 0 : (_value_end = value.end) === null || _value_end === void 0 ? void 0 : _value_end.calendar.identifier) === 'gregory' && value.end.era === 'BC';
    let formatOpts = (0, $9LYIl$react.useMemo)(()=>({
            granularity: granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra: showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let builtinValidation = (0, $9LYIl$react.useMemo)(()=>(0, $50d5d6a623389320$exports.getRangeValidationResult)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, $9LYIl$reactstatelyform.useFormValidationState)({
        ...props,
        value: controlledValue,
        name: (0, $9LYIl$react.useMemo)(()=>[
                props.startName,
                props.endName
            ].filter((n)=>n != null), [
            props.startName,
            props.endName
        ]),
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    return {
        ...validation,
        value: value,
        setValue: setValue,
        dateRange: dateRange,
        timeRange: timeRange,
        granularity: granularity,
        hasTime: hasTime,
        setDate (part, date) {
            var _dateRange_end, _dateRange_start;
            if (part === 'start') setDateRange({
                start: date,
                end: (_dateRange_end = dateRange === null || dateRange === void 0 ? void 0 : dateRange.end) !== null && _dateRange_end !== void 0 ? _dateRange_end : null
            });
            else setDateRange({
                start: (_dateRange_start = dateRange === null || dateRange === void 0 ? void 0 : dateRange.start) !== null && _dateRange_start !== void 0 ? _dateRange_start : null,
                end: date
            });
        },
        setTime (part, time) {
            var _timeRange_end, _timeRange_start;
            if (part === 'start') setTimeRange({
                start: time,
                end: (_timeRange_end = timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) !== null && _timeRange_end !== void 0 ? _timeRange_end : null
            });
            else setTimeRange({
                start: (_timeRange_start = timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) !== null && _timeRange_start !== void 0 ? _timeRange_start : null,
                end: time
            });
        },
        setDateTime (part, dateTime) {
            var _value_end, _value_start;
            if (part === 'start') setValue({
                start: dateTime,
                end: (_value_end = value === null || value === void 0 ? void 0 : value.end) !== null && _value_end !== void 0 ? _value_end : null
            });
            else setValue({
                start: (_value_start = value === null || value === void 0 ? void 0 : value.start) !== null && _value_start !== void 0 ? _value_start : null,
                end: dateTime
            });
        },
        setDateRange: setDateRange,
        setTimeRange: setTimeRange,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date range when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time range was set and not the date range, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !((value === null || value === void 0 ? void 0 : value.start) && (value === null || value === void 0 ? void 0 : value.end)) && $7072d26f58deb33b$var$isCompleteRange(dateRange) && hasTime) commitValue(dateRange, {
                start: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.placeholderValue),
                end: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) || (0, $50d5d6a623389320$exports.getPlaceholderTime)(props.placeholderValue)
            });
            overlayState.setOpen(isOpen);
        },
        validationState: validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!value || !value.start || !value.end) return null;
            let startTimeZone = 'timeZone' in value.start ? value.start.timeZone : undefined;
            let startGranularity = props.granularity || (value.start && 'minute' in value.start ? 'minute' : 'day');
            let endTimeZone = 'timeZone' in value.end ? value.end.timeZone : undefined;
            let endGranularity = props.granularity || (value.end && 'minute' in value.end ? 'minute' : 'day');
            let startOptions = (0, $50d5d6a623389320$exports.getFormatOptions)(fieldOptions, {
                granularity: startGranularity,
                timeZone: startTimeZone,
                hideTimeZone: props.hideTimeZone,
                hourCycle: props.hourCycle,
                showEra: value.start.calendar.identifier === 'gregory' && value.start.era === 'BC' || value.end.calendar.identifier === 'gregory' && value.end.era === 'BC'
            });
            let startDate = value.start.toDate(startTimeZone || 'UTC');
            let endDate = value.end.toDate(endTimeZone || 'UTC');
            let startFormatter = new (0, $9LYIl$internationalizeddate.DateFormatter)(locale, startOptions);
            let endFormatter;
            if (startTimeZone === endTimeZone && startGranularity === endGranularity && value.start.compare(value.end) !== 0) {
                // Use formatRange, as it results in shorter output when some of the fields
                // are shared between the start and end dates (e.g. the same month).
                // Formatting will fail if the end date is before the start date. Fall back below when that happens.
                try {
                    let parts = startFormatter.formatRangeToParts(startDate, endDate);
                    // Find the separator between the start and end date. This is determined
                    // by finding the last shared literal before the end range.
                    let separatorIndex = -1;
                    for(let i = 0; i < parts.length; i++){
                        let part = parts[i];
                        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
                        else if (part.source === 'endRange') break;
                    }
                    // Now we can combine the parts into start and end strings.
                    let start = '';
                    let end = '';
                    for(let i = 0; i < parts.length; i++){
                        if (i < separatorIndex) start += parts[i].value;
                        else if (i > separatorIndex) end += parts[i].value;
                    }
                    return {
                        start: start,
                        end: end
                    };
                } catch  {
                // ignore
                }
                endFormatter = startFormatter;
            } else {
                let endOptions = (0, $50d5d6a623389320$exports.getFormatOptions)(fieldOptions, {
                    granularity: endGranularity,
                    timeZone: endTimeZone,
                    hideTimeZone: props.hideTimeZone,
                    hourCycle: props.hourCycle
                });
                endFormatter = new (0, $9LYIl$internationalizeddate.DateFormatter)(locale, endOptions);
            }
            return {
                start: startFormatter.format(startDate),
                end: endFormatter.format(endDate)
            };
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, $50d5d6a623389320$exports.getFormatOptions)({}, newOptions);
            return new (0, $9LYIl$internationalizeddate.DateFormatter)(locale, newFormatOptions);
        }
    };
}
function $7072d26f58deb33b$var$isCompleteRange(value) {
    return (value === null || value === void 0 ? void 0 : value.start) != null && value.end != null;
} //# sourceMappingURL=useDateRangePickerState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useTimeFieldState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $596a1f0f523d6752$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDateFieldState.main.js [app-ssr] (ecmascript)");
var $1Q50t$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $1Q50t$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var $1Q50t$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useTimeFieldState", ()=>$2654e87be0231a69$export$fd53cef0cc796101);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2654e87be0231a69$export$fd53cef0cc796101(props) {
    let { placeholderValue: placeholderValue = new (0, $1Q50t$internationalizeddate.Time)(), minValue: minValue, maxValue: maxValue, granularity: granularity, validate: validate } = props;
    var _props_defaultValue;
    let [value, setValue] = (0, $1Q50t$reactstatelyutils.useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let v = value || placeholderValue;
    let day = v && 'day' in v ? v : undefined;
    let defaultValueTimeZone = props.defaultValue && 'timeZone' in props.defaultValue ? props.defaultValue.timeZone : undefined;
    let placeholderDate = (0, $1Q50t$react.useMemo)(()=>{
        let valueTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
        return (valueTimeZone || defaultValueTimeZone) && placeholderValue ? (0, $1Q50t$internationalizeddate.toZoned)($2654e87be0231a69$var$convertValue(placeholderValue), valueTimeZone || defaultValueTimeZone) : $2654e87be0231a69$var$convertValue(placeholderValue);
    }, [
        placeholderValue,
        v,
        defaultValueTimeZone
    ]);
    let minDate = (0, $1Q50t$react.useMemo)(()=>$2654e87be0231a69$var$convertValue(minValue, day), [
        minValue,
        day
    ]);
    let maxDate = (0, $1Q50t$react.useMemo)(()=>$2654e87be0231a69$var$convertValue(maxValue, day), [
        maxValue,
        day
    ]);
    let timeValue = (0, $1Q50t$react.useMemo)(()=>value && 'day' in value ? (0, $1Q50t$internationalizeddate.toTime)(value) : value, [
        value
    ]);
    let dateTime = (0, $1Q50t$react.useMemo)(()=>value == null ? null : $2654e87be0231a69$var$convertValue(value), [
        value
    ]);
    let onChange = (newValue)=>{
        setValue(day || defaultValueTimeZone ? newValue : newValue && (0, $1Q50t$internationalizeddate.toTime)(newValue));
    };
    let state = (0, $596a1f0f523d6752$exports.useDateFieldState)({
        ...props,
        value: dateTime,
        defaultValue: undefined,
        minValue: minDate,
        maxValue: maxDate,
        onChange: onChange,
        granularity: granularity || 'minute',
        maxGranularity: 'hour',
        placeholderValue: placeholderDate !== null && placeholderDate !== void 0 ? placeholderDate : undefined,
        // Calendar should not matter for time fields.
        createCalendar: ()=>new (0, $1Q50t$internationalizeddate.GregorianCalendar)(),
        validate: (0, $1Q50t$react.useCallback)(()=>validate === null || validate === void 0 ? void 0 : validate(value), [
            validate,
            value
        ])
    });
    return {
        ...state,
        timeValue: timeValue
    };
}
function $2654e87be0231a69$var$convertValue(value, date = (0, $1Q50t$internationalizeddate.today)((0, $1Q50t$internationalizeddate.getLocalTimeZone)())) {
    if (!value) return null;
    if ('day' in value) return value;
    return (0, $1Q50t$internationalizeddate.toCalendarDateTime)(date, value);
} //# sourceMappingURL=useTimeFieldState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $aaab7a647e17e1fd$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDatePickerState.main.js [app-ssr] (ecmascript)");
var $596a1f0f523d6752$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDateFieldState.main.js [app-ssr] (ecmascript)");
var $7072d26f58deb33b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useDateRangePickerState.main.js [app-ssr] (ecmascript)");
var $2654e87be0231a69$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/datepicker/dist/useTimeFieldState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useDatePickerState", ()=>$aaab7a647e17e1fd$exports.useDatePickerState);
$parcel$export(module.exports, "useDateFieldState", ()=>$596a1f0f523d6752$exports.useDateFieldState);
$parcel$export(module.exports, "useDateRangePickerState", ()=>$7072d26f58deb33b$exports.useDateRangePickerState);
$parcel$export(module.exports, "useTimeFieldState", ()=>$2654e87be0231a69$exports.useTimeFieldState); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/utils.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $i2P57$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "isInvalid", ()=>$4301262d71f567b9$export$eac50920cf2fd59a);
$parcel$export(module.exports, "alignCenter", ()=>$4301262d71f567b9$export$f4a51ff076cc9a09);
$parcel$export(module.exports, "alignStart", ()=>$4301262d71f567b9$export$144a00ba6044eb9);
$parcel$export(module.exports, "constrainStart", ()=>$4301262d71f567b9$export$5bb865b12696a77d);
$parcel$export(module.exports, "alignEnd", ()=>$4301262d71f567b9$export$530edbfc915b2b04);
$parcel$export(module.exports, "constrainValue", ()=>$4301262d71f567b9$export$4f5203c0d889109e);
$parcel$export(module.exports, "previousAvailableDate", ()=>$4301262d71f567b9$export$a1d3911297b952d7);
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
 */ function $4301262d71f567b9$export$eac50920cf2fd59a(date, minValue, maxValue) {
    return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function $4301262d71f567b9$export$f4a51ff076cc9a09(date, duration, locale, minValue, maxValue) {
    let halfDuration = {};
    for(let key in duration){
        halfDuration[key] = Math.floor(duration[key] / 2);
        if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
    }
    let aligned = $4301262d71f567b9$export$144a00ba6044eb9(date, duration, locale).subtract(halfDuration);
    return $4301262d71f567b9$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $4301262d71f567b9$export$144a00ba6044eb9(date, duration, locale, minValue, maxValue) {
    // align to the start of the largest unit
    let aligned = date;
    if (duration.years) aligned = (0, $i2P57$internationalizeddate.startOfYear)(date);
    else if (duration.months) aligned = (0, $i2P57$internationalizeddate.startOfMonth)(date);
    else if (duration.weeks) aligned = (0, $i2P57$internationalizeddate.startOfWeek)(date, locale);
    return $4301262d71f567b9$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $4301262d71f567b9$export$530edbfc915b2b04(date, duration, locale, minValue, maxValue) {
    let d = {
        ...duration
    };
    // subtract 1 from the smallest unit
    if (d.days) d.days--;
    else if (d.weeks) d.weeks--;
    else if (d.months) d.months--;
    else if (d.years) d.years--;
    let aligned = $4301262d71f567b9$export$144a00ba6044eb9(date, duration, locale).subtract(d);
    return $4301262d71f567b9$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $4301262d71f567b9$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue) {
    if (minValue && date.compare(minValue) >= 0) {
        let newDate = (0, $i2P57$internationalizeddate.maxDate)(aligned, $4301262d71f567b9$export$144a00ba6044eb9((0, $i2P57$internationalizeddate.toCalendarDate)(minValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    if (maxValue && date.compare(maxValue) <= 0) {
        let newDate = (0, $i2P57$internationalizeddate.minDate)(aligned, $4301262d71f567b9$export$530edbfc915b2b04((0, $i2P57$internationalizeddate.toCalendarDate)(maxValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    return aligned;
}
function $4301262d71f567b9$export$4f5203c0d889109e(date, minValue, maxValue) {
    if (minValue) {
        let newDate = (0, $i2P57$internationalizeddate.maxDate)(date, (0, $i2P57$internationalizeddate.toCalendarDate)(minValue));
        if (newDate) date = newDate;
    }
    if (maxValue) {
        let newDate = (0, $i2P57$internationalizeddate.minDate)(date, (0, $i2P57$internationalizeddate.toCalendarDate)(maxValue));
        if (newDate) date = newDate;
    }
    return date;
}
function $4301262d71f567b9$export$a1d3911297b952d7(date, minValue, isDateUnavailable) {
    if (!isDateUnavailable) return date;
    while(date.compare(minValue) >= 0 && isDateUnavailable(date))date = date.subtract({
        days: 1
    });
    if (date.compare(minValue) >= 0) return date;
    return null;
} //# sourceMappingURL=utils.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/useCalendarState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4301262d71f567b9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/utils.main.js [app-ssr] (ecmascript)");
var $cpRwL$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $cpRwL$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $cpRwL$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendarState", ()=>$6adad0c8536fc209$export$6d095e787d2b5e1f);
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
 */ function $6adad0c8536fc209$export$6d095e787d2b5e1f(props) {
    let defaultFormatter = (0, $cpRwL$react.useMemo)(()=>new (0, $cpRwL$internationalizeddate.DateFormatter)(props.locale), [
        props.locale
    ]);
    let resolvedOptions = (0, $cpRwL$react.useMemo)(()=>defaultFormatter.resolvedOptions(), [
        defaultFormatter
    ]);
    let { locale: locale, createCalendar: createCalendar, visibleDuration: visibleDuration = {
        months: 1
    }, minValue: minValue, maxValue: maxValue, selectionAlignment: selectionAlignment, isDateUnavailable: isDateUnavailable, pageBehavior: pageBehavior = 'visible' } = props;
    let calendar = (0, $cpRwL$react.useMemo)(()=>createCalendar(resolvedOptions.calendar), [
        createCalendar,
        resolvedOptions.calendar
    ]);
    var _props_defaultValue;
    let [value, setControlledValue] = (0, $cpRwL$reactstatelyutils.useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarDateValue = (0, $cpRwL$react.useMemo)(()=>value ? (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(value), calendar) : null, [
        value,
        calendar
    ]);
    let timeZone = (0, $cpRwL$react.useMemo)(()=>value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone, [
        value,
        resolvedOptions.timeZone
    ]);
    let focusedCalendarDate = (0, $cpRwL$react.useMemo)(()=>props.focusedValue ? (0, $4301262d71f567b9$exports.constrainValue)((0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(props.focusedValue), calendar), minValue, maxValue) : undefined, [
        props.focusedValue,
        calendar,
        minValue,
        maxValue
    ]);
    let defaultFocusedCalendarDate = (0, $cpRwL$react.useMemo)(()=>(0, $4301262d71f567b9$exports.constrainValue)(props.defaultFocusedValue ? (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(props.defaultFocusedValue), calendar) : calendarDateValue || (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.today)(timeZone), calendar), minValue, maxValue), [
        props.defaultFocusedValue,
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [focusedDate, setFocusedDate] = (0, $cpRwL$reactstatelyutils.useControlledState)(focusedCalendarDate, defaultFocusedCalendarDate, props.onFocusChange);
    let [startDate, setStartDate] = (0, $cpRwL$react.useState)(()=>{
        switch(selectionAlignment){
            case 'start':
                return (0, $4301262d71f567b9$exports.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return (0, $4301262d71f567b9$exports.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return (0, $4301262d71f567b9$exports.alignCenter)(focusedDate, visibleDuration, locale, minValue, maxValue);
        }
    });
    let [isFocused, setFocused] = (0, $cpRwL$react.useState)(props.autoFocus || false);
    let endDate = (0, $cpRwL$react.useMemo)(()=>{
        let duration = {
            ...visibleDuration
        };
        if (duration.days) duration.days--;
        else duration.days = -1;
        return startDate.add(duration);
    }, [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let [lastCalendarIdentifier, setLastCalendarIdentifier] = (0, $cpRwL$react.useState)(calendar.identifier);
    if (calendar.identifier !== lastCalendarIdentifier) {
        let newFocusedDate = (0, $cpRwL$internationalizeddate.toCalendar)(focusedDate, calendar);
        setStartDate((0, $4301262d71f567b9$exports.alignCenter)(newFocusedDate, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(newFocusedDate);
        setLastCalendarIdentifier(calendar.identifier);
    }
    if ((0, $4301262d71f567b9$exports.isInvalid)(focusedDate, minValue, maxValue)) setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate, minValue, maxValue));
    else if (focusedDate.compare(startDate) < 0) setStartDate((0, $4301262d71f567b9$exports.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue));
    else if (focusedDate.compare(endDate) > 0) setStartDate((0, $4301262d71f567b9$exports.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue));
    // Sets focus to a specific cell date
    function focusCell(date) {
        date = (0, $4301262d71f567b9$exports.constrainValue)(date, minValue, maxValue);
        setFocusedDate(date);
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            let localValue = newValue;
            if (localValue === null) {
                setControlledValue(null);
                return;
            }
            localValue = (0, $4301262d71f567b9$exports.constrainValue)(localValue, minValue, maxValue);
            localValue = (0, $4301262d71f567b9$exports.previousAvailableDate)(localValue, startDate, isDateUnavailable);
            if (!localValue) return;
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            localValue = (0, $cpRwL$internationalizeddate.toCalendar)(localValue, (value === null || value === void 0 ? void 0 : value.calendar) || new (0, $cpRwL$internationalizeddate.GregorianCalendar)());
            // Preserve time if the input value had one.
            if (value && 'hour' in value) setControlledValue(value.set(localValue));
            else setControlledValue(localValue);
        }
    }
    let isUnavailable = (0, $cpRwL$react.useMemo)(()=>{
        if (!calendarDateValue) return false;
        if (isDateUnavailable && isDateUnavailable(calendarDateValue)) return true;
        return (0, $4301262d71f567b9$exports.isInvalid)(calendarDateValue, minValue, maxValue);
    }, [
        calendarDateValue,
        isDateUnavailable,
        minValue,
        maxValue
    ]);
    let isValueInvalid = props.isInvalid || props.validationState === 'invalid' || isUnavailable;
    let validationState = isValueInvalid ? 'invalid' : null;
    let pageDuration = (0, $cpRwL$react.useMemo)(()=>{
        if (pageBehavior === 'visible') return visibleDuration;
        return $6adad0c8536fc209$var$unitDuration(visibleDuration);
    }, [
        pageBehavior,
        visibleDuration
    ]);
    var _props_isDisabled, _props_isReadOnly;
    return {
        isDisabled: (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : false,
        isReadOnly: (_props_isReadOnly = props.isReadOnly) !== null && _props_isReadOnly !== void 0 ? _props_isReadOnly : false,
        value: calendarDateValue,
        setValue: setValue,
        visibleRange: {
            start: startDate,
            end: endDate
        },
        minValue: minValue,
        maxValue: maxValue,
        focusedDate: focusedDate,
        timeZone: timeZone,
        validationState: validationState,
        isValueInvalid: isValueInvalid,
        setFocusedDate (date) {
            focusCell(date);
            setFocused(true);
        },
        focusNextDay () {
            focusCell(focusedDate.add({
                days: 1
            }));
        },
        focusPreviousDay () {
            focusCell(focusedDate.subtract({
                days: 1
            }));
        },
        focusNextRow () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                weeks: 1
            }));
        },
        focusPreviousRow () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                weeks: 1
            }));
        },
        focusNextPage () {
            let start = startDate.add(pageDuration);
            setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate.add(pageDuration), minValue, maxValue));
            setStartDate((0, $4301262d71f567b9$exports.alignStart)((0, $4301262d71f567b9$exports.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusPreviousPage () {
            let start = startDate.subtract(pageDuration);
            setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate.subtract(pageDuration), minValue, maxValue));
            setStartDate((0, $4301262d71f567b9$exports.alignStart)((0, $4301262d71f567b9$exports.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusSectionStart () {
            if (visibleDuration.days) focusCell(startDate);
            else if (visibleDuration.weeks) focusCell((0, $cpRwL$internationalizeddate.startOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, $cpRwL$internationalizeddate.startOfMonth)(focusedDate));
        },
        focusSectionEnd () {
            if (visibleDuration.days) focusCell(endDate);
            else if (visibleDuration.weeks) focusCell((0, $cpRwL$internationalizeddate.endOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, $cpRwL$internationalizeddate.endOfMonth)(focusedDate));
        },
        focusNextSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.add($6adad0c8536fc209$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.add({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                years: 1
            }));
        },
        focusPreviousSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.subtract($6adad0c8536fc209$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                years: 1
            }));
        },
        selectFocusedDate () {
            setValue(focusedDate);
        },
        selectDate (date) {
            setValue(date);
        },
        isFocused: isFocused,
        setFocused: setFocused,
        isInvalid (date) {
            return (0, $4301262d71f567b9$exports.isInvalid)(date, minValue, maxValue);
        },
        isSelected (date) {
            return calendarDateValue != null && (0, $cpRwL$internationalizeddate.isSameDay)(date, calendarDateValue) && !this.isCellDisabled(date) && !this.isCellUnavailable(date);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && (0, $cpRwL$internationalizeddate.isSameDay)(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || this.isInvalid(date);
        },
        isCellUnavailable (date) {
            return props.isDateUnavailable ? props.isDateUnavailable(date) : false;
        },
        isPreviousVisibleRangeInvalid () {
            let prev = startDate.subtract({
                days: 1
            });
            return (0, $cpRwL$internationalizeddate.isSameDay)(prev, startDate) || this.isInvalid(prev);
        },
        isNextVisibleRangeInvalid () {
            // Adding may return the same date if we reached the end of time
            // according to the calendar system (e.g. 9999-12-31).
            let next = endDate.add({
                days: 1
            });
            return (0, $cpRwL$internationalizeddate.isSameDay)(next, endDate) || this.isInvalid(next);
        },
        getDatesInWeek (weekIndex, from = startDate) {
            // let date = startOfWeek(from, locale);
            let date = from.add({
                weeks: weekIndex
            });
            let dates = [];
            date = (0, $cpRwL$internationalizeddate.startOfWeek)(date, locale);
            // startOfWeek will clamp dates within the calendar system's valid range, which may
            // start in the middle of a week. In this case, add null placeholders.
            let dayOfWeek = (0, $cpRwL$internationalizeddate.getDayOfWeek)(date, locale);
            for(let i = 0; i < dayOfWeek; i++)dates.push(null);
            while(dates.length < 7){
                dates.push(date);
                let nextDate = date.add({
                    days: 1
                });
                if ((0, $cpRwL$internationalizeddate.isSameDay)(date, nextDate)) break;
                date = nextDate;
            }
            // Add null placeholders if at the end of the calendar system.
            while(dates.length < 7)dates.push(null);
            return dates;
        }
    };
}
function $6adad0c8536fc209$var$unitDuration(duration) {
    let unit = {
        ...duration
    };
    for(let key in duration)unit[key] = 1;
    return unit;
} //# sourceMappingURL=useCalendarState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/useRangeCalendarState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $4301262d71f567b9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/utils.main.js [app-ssr] (ecmascript)");
var $6adad0c8536fc209$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/useCalendarState.main.js [app-ssr] (ecmascript)");
var $e7F0I$internationalizeddate = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var $e7F0I$reactstatelyutils = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)");
var $e7F0I$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useRangeCalendarState", ()=>$e49f7b861e5e8049$export$9a987164d97ecc90);
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
 */ function $e49f7b861e5e8049$export$9a987164d97ecc90(props) {
    let { value: valueProp, defaultValue: defaultValue, onChange: onChange, createCalendar: createCalendar, locale: locale, visibleDuration: visibleDuration = {
        months: 1
    }, minValue: minValue, maxValue: maxValue, ...calendarProps } = props;
    let [value, setValue] = (0, $e7F0I$reactstatelyutils.useControlledState)(valueProp, defaultValue || null, onChange);
    let [anchorDate, setAnchorDateState] = (0, $e7F0I$react.useState)(null);
    let alignment = 'center';
    if (value && value.start && value.end) {
        let start = (0, $4301262d71f567b9$exports.alignCenter)((0, $e7F0I$internationalizeddate.toCalendarDate)(value.start), visibleDuration, locale, minValue, maxValue);
        let end = start.add(visibleDuration).subtract({
            days: 1
        });
        if (value.end.compare(end) > 0) alignment = 'start';
    }
    // Available range must be stored in a ref so we have access to the updated version immediately in `isInvalid`.
    let availableRangeRef = (0, $e7F0I$react.useRef)(null);
    let [availableRange, setAvailableRange] = (0, $e7F0I$react.useState)(null);
    let min = (0, $e7F0I$react.useMemo)(()=>(0, $e7F0I$internationalizeddate.maxDate)(minValue, availableRange === null || availableRange === void 0 ? void 0 : availableRange.start), [
        minValue,
        availableRange
    ]);
    let max = (0, $e7F0I$react.useMemo)(()=>(0, $e7F0I$internationalizeddate.minDate)(maxValue, availableRange === null || availableRange === void 0 ? void 0 : availableRange.end), [
        maxValue,
        availableRange
    ]);
    let calendar = (0, $6adad0c8536fc209$exports.useCalendarState)({
        ...calendarProps,
        value: value && value.start,
        createCalendar: createCalendar,
        locale: locale,
        visibleDuration: visibleDuration,
        minValue: min,
        maxValue: max,
        selectionAlignment: alignment
    });
    let updateAvailableRange = (date)=>{
        if (date && props.isDateUnavailable && !props.allowsNonContiguousRanges) {
            const nextAvailableStartDate = $e49f7b861e5e8049$var$nextUnavailableDate(date, calendar, -1);
            const nextAvailableEndDate = $e49f7b861e5e8049$var$nextUnavailableDate(date, calendar, 1);
            availableRangeRef.current = {
                start: nextAvailableStartDate,
                end: nextAvailableEndDate
            };
            setAvailableRange(availableRangeRef.current);
        } else {
            availableRangeRef.current = null;
            setAvailableRange(null);
        }
    };
    // If the visible range changes, we need to update the available range.
    let [lastVisibleRange, setLastVisibleRange] = (0, $e7F0I$react.useState)(calendar.visibleRange);
    if (!(0, $e7F0I$internationalizeddate.isEqualDay)(calendar.visibleRange.start, lastVisibleRange.start) || !(0, $e7F0I$internationalizeddate.isEqualDay)(calendar.visibleRange.end, lastVisibleRange.end)) {
        updateAvailableRange(anchorDate);
        setLastVisibleRange(calendar.visibleRange);
    }
    let setAnchorDate = (date)=>{
        if (date) {
            setAnchorDateState(date);
            updateAvailableRange(date);
        } else {
            setAnchorDateState(null);
            updateAvailableRange(null);
        }
    };
    let highlightedRange = anchorDate ? $e49f7b861e5e8049$var$makeRange(anchorDate, calendar.focusedDate) : value && $e49f7b861e5e8049$var$makeRange(value.start, value.end);
    let selectDate = (date)=>{
        if (props.isReadOnly) return;
        const constrainedDate = (0, $4301262d71f567b9$exports.constrainValue)(date, min, max);
        const previousAvailableConstrainedDate = (0, $4301262d71f567b9$exports.previousAvailableDate)(constrainedDate, calendar.visibleRange.start, props.isDateUnavailable);
        if (!previousAvailableConstrainedDate) return;
        if (!anchorDate) setAnchorDate(previousAvailableConstrainedDate);
        else {
            let range = $e49f7b861e5e8049$var$makeRange(anchorDate, previousAvailableConstrainedDate);
            if (range) setValue({
                start: $e49f7b861e5e8049$var$convertValue(range.start, value === null || value === void 0 ? void 0 : value.start),
                end: $e49f7b861e5e8049$var$convertValue(range.end, value === null || value === void 0 ? void 0 : value.end)
            });
            setAnchorDate(null);
        }
    };
    let [isDragging, setDragging] = (0, $e7F0I$react.useState)(false);
    let { isDateUnavailable: isDateUnavailable } = props;
    let isInvalidSelection = (0, $e7F0I$react.useMemo)(()=>{
        if (!value || anchorDate) return false;
        if (isDateUnavailable && (isDateUnavailable(value.start) || isDateUnavailable(value.end))) return true;
        return (0, $4301262d71f567b9$exports.isInvalid)(value.start, minValue, maxValue) || (0, $4301262d71f567b9$exports.isInvalid)(value.end, minValue, maxValue);
    }, [
        isDateUnavailable,
        value,
        anchorDate,
        minValue,
        maxValue
    ]);
    let isValueInvalid = props.isInvalid || props.validationState === 'invalid' || isInvalidSelection;
    let validationState = isValueInvalid ? 'invalid' : null;
    return {
        ...calendar,
        value: value,
        setValue: setValue,
        anchorDate: anchorDate,
        setAnchorDate: setAnchorDate,
        highlightedRange: highlightedRange,
        validationState: validationState,
        isValueInvalid: isValueInvalid,
        selectFocusedDate () {
            selectDate(calendar.focusedDate);
        },
        selectDate: selectDate,
        highlightDate (date) {
            if (anchorDate) calendar.setFocusedDate(date);
        },
        isSelected (date) {
            return Boolean(highlightedRange && date.compare(highlightedRange.start) >= 0 && date.compare(highlightedRange.end) <= 0 && !calendar.isCellDisabled(date) && !calendar.isCellUnavailable(date));
        },
        isInvalid (date) {
            var _availableRangeRef_current, _availableRangeRef_current1;
            return calendar.isInvalid(date) || (0, $4301262d71f567b9$exports.isInvalid)(date, (_availableRangeRef_current = availableRangeRef.current) === null || _availableRangeRef_current === void 0 ? void 0 : _availableRangeRef_current.start, (_availableRangeRef_current1 = availableRangeRef.current) === null || _availableRangeRef_current1 === void 0 ? void 0 : _availableRangeRef_current1.end);
        },
        isDragging: isDragging,
        setDragging: setDragging
    };
}
function $e49f7b861e5e8049$var$makeRange(start, end) {
    if (!start || !end) return null;
    if (end.compare(start) < 0) [start, end] = [
        end,
        start
    ];
    return {
        start: (0, $e7F0I$internationalizeddate.toCalendarDate)(start),
        end: (0, $e7F0I$internationalizeddate.toCalendarDate)(end)
    };
}
function $e49f7b861e5e8049$var$convertValue(newValue, oldValue) {
    // The display calendar should not have any effect on the emitted value.
    // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
    newValue = (0, $e7F0I$internationalizeddate.toCalendar)(newValue, (oldValue === null || oldValue === void 0 ? void 0 : oldValue.calendar) || new (0, $e7F0I$internationalizeddate.GregorianCalendar)());
    // Preserve time if the input value had one.
    if (oldValue && 'hour' in oldValue) return oldValue.set(newValue);
    return newValue;
}
function $e49f7b861e5e8049$var$nextUnavailableDate(anchorDate, state, dir) {
    let nextDate = anchorDate.add({
        days: dir
    });
    while((dir < 0 ? nextDate.compare(state.visibleRange.start) >= 0 : nextDate.compare(state.visibleRange.end) <= 0) && !state.isCellUnavailable(nextDate))nextDate = nextDate.add({
        days: dir
    });
    if (state.isCellUnavailable(nextDate)) return nextDate.add({
        days: -dir
    });
} //# sourceMappingURL=useRangeCalendarState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $6adad0c8536fc209$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/useCalendarState.main.js [app-ssr] (ecmascript)");
var $e49f7b861e5e8049$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/calendar/dist/useRangeCalendarState.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useCalendarState", ()=>$6adad0c8536fc209$exports.useCalendarState);
$parcel$export(module.exports, "useRangeCalendarState", ()=>$e49f7b861e5e8049$exports.useRangeCalendarState); /*
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

//# sourceMappingURL=387af_%40react-stately_07e15321._.js.map