module.exports = [
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/overlays/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/i18n/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/dialog/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let stepString = step.toString();
    let pointIndex = stepString.indexOf('.');
    let precision = pointIndex >= 0 ? stepString.length - pointIndex : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@nextui-org/use-draggable/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/use-draggable/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/use-draggable/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/use-draggable/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/use-draggable/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/tabs/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/selection/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-stately/list/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@nextui-org/input/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/input/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let stepString = step.toString();
    let pointIndex = stepString.indexOf('.');
    let precision = pointIndex >= 0 ? stepString.length - pointIndex : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/input/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/input/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/input/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@nextui-org/popover/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/popover/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/popover/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/popover/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/popover/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/menu/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/datepicker/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@react-aria/calendar/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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
"[project]/study-lms-frontend-app/node_modules/@nextui-org/card/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $ecn6s$react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$export$40bfa8c7b0832715);
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
 */ function $8d8fdfab47455712$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, $ecn6s$react.useState)(value || defaultValue);
    let isControlledRef = (0, $ecn6s$react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, $ecn6s$react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && ("TURBOPACK compile-time value", "development") !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, $ecn6s$react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if ("TURBOPACK compile-time truthy", 1) console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
} //# sourceMappingURL=useControlledState.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/card/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$export$7d15b64cf5a3a4c4);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$export$cb6e0bb50bc19463);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$export$b6268554fba451f);
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $ac8e4d4816275668$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $ac8e4d4816275668$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $ac8e4d4816275668$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($ac8e4d4816275668$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $ac8e4d4816275668$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $ac8e4d4816275668$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
} //# sourceMappingURL=number.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@nextui-org/card/node_modules/@react-stately/utils/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $8d8fdfab47455712$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/card/node_modules/@react-stately/utils/dist/useControlledState.main.js [app-ssr] (ecmascript)");
var $ac8e4d4816275668$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/card/node_modules/@react-stately/utils/dist/number.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "useControlledState", ()=>$8d8fdfab47455712$exports.useControlledState);
$parcel$export(module.exports, "clamp", ()=>$ac8e4d4816275668$exports.clamp);
$parcel$export(module.exports, "snapValueToStep", ()=>$ac8e4d4816275668$exports.snapValueToStep);
$parcel$export(module.exports, "toFixedNumber", ()=>$ac8e4d4816275668$exports.toFixedNumber); /*
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

//# sourceMappingURL=387af_373d2fcf._.js.map