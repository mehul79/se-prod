module.exports = [
"[project]/study-lms-frontend-app/node_modules/clsx/dist/clsx.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function r(e) {
    var o, t, f = "";
    if ("string" == typeof e || "number" == typeof e) f += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var n = e.length;
        for(o = 0; o < n; o++)e[o] && (t = r(e[o])) && (f && (f += " "), f += t);
    } else for(t in e)e[t] && (f && (f += " "), f += t);
    return f;
}
function e() {
    for(var e, o, t = 0, f = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (o = r(e)) && (f && (f += " "), f += o);
    return f;
}
module.exports = e, module.exports.clsx = e;
}),
"[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/MessageDictionary.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "MessageDictionary", ()=>$9a5a7b8408290694$export$64839e615120df17);
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
 */ class $9a5a7b8408290694$export$64839e615120df17 {
    getStringForLocale(key, locale) {
        let strings = this.messages[locale];
        if (!strings) {
            strings = $9a5a7b8408290694$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
            this.messages[locale] = strings;
        }
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.messages = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $9a5a7b8408290694$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $9a5a7b8408290694$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $9a5a7b8408290694$var$getLanguage(locale) {
    if (Intl.Locale) return new Intl.Locale(locale).language;
    return locale.split('-')[0];
} //# sourceMappingURL=MessageDictionary.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/MessageFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $f4V3v$intlmessageformat = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/index.js [app-ssr] (ecmascript)");
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
$parcel$export(module.exports, "MessageFormatter", ()=>$7a31ee9993c13f0b$export$526ebc05ff964723);
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
 */ class $7a31ee9993c13f0b$export$526ebc05ff964723 {
    format(key, variables) {
        let message = this.cache[key];
        if (!message) {
            let msg = this.messages.getStringForLocale(key, this.locale);
            if (!msg) throw new Error(`Could not find intl message ${key} in ${this.locale} locale`);
            message = new (0, $parcel$interopDefault($f4V3v$intlmessageformat))(msg, this.locale);
            this.cache[key] = message;
        }
        let varCopy;
        if (variables) varCopy = Object.keys(variables).reduce((acc, key)=>{
            acc[key] = variables[key] == null ? false : variables[key];
            return acc;
        }, {});
        return message.format(varCopy);
    }
    constructor(locale, messages){
        this.locale = locale;
        this.messages = messages;
        this.cache = {};
    }
} //# sourceMappingURL=MessageFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $9a5a7b8408290694$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/MessageDictionary.main.js [app-ssr] (ecmascript)");
var $7a31ee9993c13f0b$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/message/dist/MessageFormatter.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "MessageDictionary", ()=>$9a5a7b8408290694$exports.MessageDictionary);
$parcel$export(module.exports, "MessageFormatter", ()=>$7a31ee9993c13f0b$exports.MessageFormatter); /*
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
"[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/LocalizedStringDictionary.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "LocalizedStringDictionary", ()=>$f80be5fd4d03dda9$export$c17fa47878dc55b6);
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
 */ const $f80be5fd4d03dda9$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $f80be5fd4d03dda9$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $f80be5fd4d03dda9$var$cachedGlobalStrings = undefined;
class $f80be5fd4d03dda9$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $f80be5fd4d03dda9$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        let locale;
        let dictionary;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $f80be5fd4d03dda9$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $f80be5fd4d03dda9$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $f80be5fd4d03dda9$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) return new Intl.Locale(locale).language;
    return locale.split('-')[0];
} //# sourceMappingURL=LocalizedStringDictionary.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/LocalizedStringFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "LocalizedStringFormatter", ()=>$3e95fbf3429967d1$export$2f817fcdc4b89ae0);
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
 */ const $3e95fbf3429967d1$var$pluralRulesCache = new Map();
const $3e95fbf3429967d1$var$numberFormatCache = new Map();
class $3e95fbf3429967d1$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $3e95fbf3429967d1$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $3e95fbf3429967d1$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $3e95fbf3429967d1$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $3e95fbf3429967d1$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
} //# sourceMappingURL=LocalizedStringFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $f80be5fd4d03dda9$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/LocalizedStringDictionary.main.js [app-ssr] (ecmascript)");
var $3e95fbf3429967d1$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/string/dist/LocalizedStringFormatter.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "LocalizedStringDictionary", ()=>$f80be5fd4d03dda9$exports.LocalizedStringDictionary);
$parcel$export(module.exports, "LocalizedStringFormatter", ()=>$3e95fbf3429967d1$exports.LocalizedStringFormatter); /*
 * Copyright 2022 Adobe. All rights reserved.
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
"[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/NumberFormatter.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "NumberFormatter", ()=>$0c1d5654b62fc485$export$cc77c4ff7e8673c5);
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
 */ let $0c1d5654b62fc485$var$formatterCache = new Map();
let $0c1d5654b62fc485$var$supportsSignDisplay = false;
try {
    $0c1d5654b62fc485$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $0c1d5654b62fc485$var$supportsUnit = false;
try {
    $0c1d5654b62fc485$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $0c1d5654b62fc485$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $0c1d5654b62fc485$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$0c1d5654b62fc485$var$supportsSignDisplay && this.options.signDisplay != null) res = $0c1d5654b62fc485$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$0c1d5654b62fc485$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $0c1d5654b62fc485$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$0c1d5654b62fc485$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$0c1d5654b62fc485$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $0c1d5654b62fc485$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $0c1d5654b62fc485$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$0c1d5654b62fc485$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $0c1d5654b62fc485$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($0c1d5654b62fc485$var$formatterCache.has(cacheKey)) return $0c1d5654b62fc485$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $0c1d5654b62fc485$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $0c1d5654b62fc485$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
} //# sourceMappingURL=NumberFormatter.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/NumberParser.main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $0c1d5654b62fc485$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/NumberFormatter.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "NumberParser", ()=>$d68f3f4c684426c6$export$cd11ab140839f11d);
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
 */ const $d68f3f4c684426c6$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $d68f3f4c684426c6$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec',
    'deva',
    'beng',
    'fullwide'
];
class $d68f3f4c684426c6$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $d68f3f4c684426c6$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $d68f3f4c684426c6$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $d68f3f4c684426c6$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
}
const $d68f3f4c684426c6$var$numberParserCache = new Map();
function $d68f3f4c684426c6$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $d68f3f4c684426c6$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $d68f3f4c684426c6$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $d68f3f4c684426c6$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $d68f3f4c684426c6$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    let parser = $d68f3f4c684426c6$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $d68f3f4c684426c6$var$NumberParserImpl(locale, options);
        $d68f3f4c684426c6$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $d68f3f4c684426c6$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        if (this.symbols.group) fullySanitizedValue = $d68f3f4c684426c6$var$replaceAll(fullySanitizedValue, this.symbols.group, '');
        if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
        if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
        fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
        if (this.options.style === 'percent') {
            // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
            let isNegative = fullySanitizedValue.indexOf('-');
            fullySanitizedValue = fullySanitizedValue.replace('-', '');
            fullySanitizedValue = fullySanitizedValue.replace('+', '');
            let index = fullySanitizedValue.indexOf('.');
            if (index === -1) index = fullySanitizedValue.length;
            fullySanitizedValue = fullySanitizedValue.replace('.', '');
            if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
            else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
            else if (index - 2 === -2) fullySanitizedValue = '0.00';
            else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
            if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
        }
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        if (this.options.style === 'percent') {
            var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
            // extra step for rounding percents to what our formatter would output
            let options = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
                maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
            };
            return new $d68f3f4c684426c6$export$cd11ab140839f11d(this.locale, options).parse(new (0, $0c1d5654b62fc485$exports.NumberFormatter)(this.locale, options).format(newValue));
        }
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $d68f3f4c684426c6$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            if (this.symbols.decimal) {
                value = value.replace(',', this.symbols.decimal);
                value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            }
            if (this.symbols.group) value = $d68f3f4c684426c6$var$replaceAll(value, '.', this.symbols.group);
        }
        // In some locale styles, such as swiss currency, the group character can be a special single quote
        // that keyboards don't typically have. This expands the character to include the easier to type single quote.
        if (this.symbols.group === "\u2019" && value.includes("'")) value = $d68f3f4c684426c6$var$replaceAll(value, "'", this.symbols.group);
        // fr-FR group character is narrow non-breaking space, char code 8239 (U+202F), but that's not a key on the french keyboard,
        // so allow space and non-breaking space as a group char as well
        if (this.options.locale === 'fr-FR' && this.symbols.group) {
            value = $d68f3f4c684426c6$var$replaceAll(value, ' ', this.symbols.group);
            value = $d68f3f4c684426c6$var$replaceAll(value, /\u00A0/g, this.symbols.group);
        }
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
        // Numbers that can't have any decimal values fail if a decimal character is typed
        if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
        // Remove numerals, groups, and decimals
        if (this.symbols.group) value = $d68f3f4c684426c6$var$replaceAll(value, this.symbols.group, '');
        value = value.replace(this.symbols.numeral, '');
        if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        // see https://tc39.es/ecma402/#sec-setnfdigitoptions, when using roundingIncrement, the maximumFractionDigits and minimumFractionDigits must be equal
        // by default, they are 0 and 3 respectively, so we set them to 0 if neither are set
        if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
            if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
                options.maximumFractionDigits = 0;
                options.minimumFractionDigits = 0;
            } else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
            else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
        // if both are specified, let the normal Range Error be thrown
        }
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $d68f3f4c684426c6$var$getSymbols(locale, this.formatter, this.options, options);
        var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
        if (this.options.style === 'percent' && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
}
const $d68f3f4c684426c6$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
// This list is derived from https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html#comparison and includes
// all unique numbers which we need to check in order to determine all the plural forms for a given locale.
// See: https://github.com/adobe/react-spectrum/pull/5134/files#r1337037855 for used script
const $d68f3f4c684426c6$var$pluralNumbers = [
    0,
    4,
    2,
    1,
    11,
    20,
    3,
    7,
    100,
    21,
    0.1,
    1.1
];
function $d68f3f4c684426c6$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
    var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
    // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
    let symbolFormatter = new Intl.NumberFormat(locale, {
        ...intlOptions,
        // Resets so we get the full range of symbols
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: 'auto',
        roundingMode: 'halfExpand'
    });
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = symbolFormatter.formatToParts(-10000.111);
    let posAllParts = symbolFormatter.formatToParts(10000.111);
    let pluralParts = $d68f3f4c684426c6$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
    var _allParts_find_value;
    let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === 'minusSign')) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : '-';
    let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === 'plusSign')) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
    // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
    // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
    let decimalParts = new Intl.NumberFormat(locale, {
        ...intlOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).formatToParts(0.001);
    let decimal = (_decimalParts_find = decimalParts.find((p)=>p.type === 'decimal')) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
    let group = (_allParts_find1 = allParts.find((p)=>p.type === 'group')) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let allPartsLiterals = allParts.filter((p)=>!$d68f3f4c684426c6$var$nonLiteralParts.has(p.type)).map((p)=>$d68f3f4c684426c6$var$escapeRegex(p.value));
    let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$d68f3f4c684426c6$var$nonLiteralParts.has(p.type)).map((p)=>$d68f3f4c684426c6$var$escapeRegex(p.value)));
    let sortedLiterals = [
        ...new Set([
            ...allPartsLiterals,
            ...pluralPartsLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    let literals = sortedLiterals.length === 0 ? new RegExp('[\\p{White_Space}]', 'gu') : new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $d68f3f4c684426c6$var$replaceAll(str, find, replace) {
    if (str.replaceAll) return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $d68f3f4c684426c6$var$escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} //# sourceMappingURL=NumberParser.main.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/main.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $0c1d5654b62fc485$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/NumberFormatter.main.js [app-ssr] (ecmascript)");
var $d68f3f4c684426c6$exports = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/number/dist/NumberParser.main.js [app-ssr] (ecmascript)");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "NumberFormatter", ()=>$0c1d5654b62fc485$exports.NumberFormatter);
$parcel$export(module.exports, "NumberParser", ()=>$d68f3f4c684426c6$exports.NumberParser); /*
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
"[project]/study-lms-frontend-app/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "FormatError",
    ()=>FormatError,
    "InvalidValueError",
    ()=>InvalidValueError,
    "InvalidValueTypeError",
    ()=>InvalidValueTypeError,
    "MissingValueError",
    ()=>MissingValueError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
var ErrorCode;
(function(ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error);
;
var InvalidValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError);
;
var InvalidValueTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError);
;
var MissingValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError);
;
}),
"[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PART_TYPE",
    ()=>PART_TYPE,
    "formatToParts",
    ()=>formatToParts,
    "isFormatXMLElementFn",
    ()=>isFormatXMLElementFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)");
;
;
var PART_TYPE;
(function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function(all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
            all.push(part);
        } else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value
            }
        ];
    }
    var result = [];
    for(var _i = 0, els_1 = els; _i < els_1.length; _i++){
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue)
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingValueError"](varName, originalMessage);
        }
        var value = values[varName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgumentElement"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.time[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.number[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            if (style && style.scale) {
                value = value * (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueTypeError"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function(p) {
                return p.value;
            }));
            if (!Array.isArray(chunks)) {
                chunks = [
                    chunks
                ];
            }
            result.push.apply(result, chunks.map(function(c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c
                };
            }));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
}),
"[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_context__.s([
    "IntlMessageFormat",
    ()=>IntlMessageFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
        all[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1[k]), c2[k] || {});
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function(all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function() {
            return {
                get: function(key) {
                    return store[key];
                },
                set: function(key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) {
        cache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
    }
    return {
        getNumberFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getDateTimeFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getPluralRules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        })
    };
}
var IntlMessageFormat = function() {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        if (locales === void 0) {
            locales = IntlMessageFormat.defaultLocale;
        }
        var _this = this;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = function(values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function(all, part) {
                if (!all.length || part.type !== __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PART_TYPE"].literal || typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                } else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function(values) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function() {
            var _a;
            return {
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
            };
        };
        this.getAst = function() {
            return _this.ast;
        };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}, formatters = _a.formatters, parseOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
                "formatters"
            ]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, parseOpts), {
                locale: this.resolvedLocale
            }));
        } else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function() {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function(locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: 'currency'
            },
            percent: {
                style: 'percent'
            }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    };
    return IntlMessageFormat;
}();
;
}),
"[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"];
}),
"[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"],
    "FormatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatError"],
    "IntlMessageFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"],
    "InvalidValueError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"],
    "InvalidValueTypeError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueTypeError"],
    "MissingValueError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingValueError"],
    "PART_TYPE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PART_TYPE"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "formatToParts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatToParts"],
    "isFormatXMLElementFn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFormatXMLElementFn"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)");
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_check_private_redeclaration.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
exports._ = _check_private_redeclaration;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_private_field_init.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _check_private_redeclaration = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_check_private_redeclaration.cjs [app-ssr] (ecmascript)");
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration._(obj, privateMap);
    privateMap.set(obj, value);
}
exports._ = _class_private_field_init;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_apply_descriptor_get.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
exports._ = _class_apply_descriptor_get;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_extract_field_descriptor.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
exports._ = _class_extract_field_descriptor;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_private_field_get.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_apply_descriptor_get = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_apply_descriptor_get.cjs [app-ssr] (ecmascript)");
var _class_extract_field_descriptor = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_extract_field_descriptor.cjs [app-ssr] (ecmascript)");
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "get");
    return _class_apply_descriptor_get._(receiver, descriptor);
}
exports._ = _class_private_field_get;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_apply_descriptor_set.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
exports._ = _class_apply_descriptor_set;
}),
"[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_private_field_set.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_apply_descriptor_set = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_apply_descriptor_set.cjs [app-ssr] (ecmascript)");
var _class_extract_field_descriptor = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@swc/helpers/cjs/_class_extract_field_descriptor.cjs [app-ssr] (ecmascript)");
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "set");
    _class_apply_descriptor_set._(receiver, descriptor, value);
    return value;
}
exports._ = _class_private_field_set;
}),
"[project]/study-lms-frontend-app/node_modules/color-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};
}),
"[project]/study-lms-frontend-app/node_modules/is-arrayish/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function isArrayish(obj) {
    if (!obj || typeof obj === 'string') {
        return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};
}),
"[project]/study-lms-frontend-app/node_modules/simple-swizzle/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isArrayish = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/is-arrayish/index.js [app-ssr] (ecmascript)");
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
    var results = [];
    for(var i = 0, len = args.length; i < len; i++){
        var arg = args[i];
        if (isArrayish(arg)) {
            // http://jsperf.com/javascript-array-concat-vs-push/98
            results = concat.call(results, slice.call(arg));
        } else {
            results.push(arg);
        }
    }
    return results;
};
swizzle.wrap = function(fn) {
    return function() {
        return fn(swizzle(arguments));
    };
};
}),
"[project]/study-lms-frontend-app/node_modules/color-string/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* MIT license */ var colorNames = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-name/index.js [app-ssr] (ecmascript)");
var swizzle = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/simple-swizzle/index.js [app-ssr] (ecmascript)");
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = Object.create(null);
// create a list of reverse color names
for(var name in colorNames){
    if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
    }
}
var cs = module.exports = {
    to: {},
    get: {}
};
cs.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch(prefix){
        case 'hsl':
            val = cs.get.hsl(string);
            model = 'hsl';
            break;
        case 'hwb':
            val = cs.get.hwb(string);
            model = 'hwb';
            break;
        default:
            val = cs.get.rgb(string);
            model = 'rgb';
            break;
    }
    if (!val) {
        return null;
    }
    return {
        model: model,
        value: val
    };
};
cs.get.rgb = function(string) {
    if (!string) {
        return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [
        0,
        0,
        0,
        1
    ];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for(i = 0; i < 3; i++){
            // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
    } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
    } else if (match = string.match(rgba)) {
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(per)) {
        for(i = 0; i < 3; i++){
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(keyword)) {
        if (match[1] === 'transparent') {
            return [
                0,
                0,
                0,
                0
            ];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
            return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
    } else {
        return null;
    }
    for(i = 0; i < 3; i++){
        rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
};
cs.get.hsl = function(string) {
    if (!string) {
        return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            s,
            l,
            a
        ];
    }
    return null;
};
cs.get.hwb = function(string) {
    if (!string) {
        return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            w,
            b,
            a
        ];
    }
    return null;
};
cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
};
cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = '';
    if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ', ' + hwba[3];
    }
    return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
};
// helpers
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? '0' + str : str;
}
}),
"[project]/study-lms-frontend-app/node_modules/color-convert/conversions.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-name/index.js [app-ssr] (ecmascript)");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)){
    reverseKeywords[cssKeywords[key]] = key;
}
const convert = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: [
            'hex'
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            'keyword'
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            'ansi16'
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            'ansi256'
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            'h',
            'c',
            'g'
        ]
    },
    apple: {
        channels: 3,
        labels: [
            'r16',
            'g16',
            'b16'
        ]
    },
    gray: {
        channels: 1,
        labels: [
            'gray'
        ]
    }
};
module.exports = convert;
// Hide .channels and .labels properties
for (const model of Object.keys(convert)){
    if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
    }
    if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
        value: labels
    });
}
convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else if (b === max) {
        h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
        h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }
    return [
        h,
        s * 100,
        l * 100
    ];
};
convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
            h = bdif - gdif;
        } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
        return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)){
        const value = cssKeywords[keyword];
        // Compute comparative distance
        const distance = comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
};
convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
            t3++;
        }
        if (t3 > 1) {
            t3--;
        }
        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }
        rgb[i] = val * 255;
    }
    return rgb;
};
convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
        f = 1 - f;
    }
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) {
            return 16;
        }
        if (r > 248) {
            return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) {
            color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
        return [
            0,
            0,
            0
        ];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
        colorString = colorString.split('').map((char)=>{
            return char + char;
        }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
        grayscale = min / (1 - chroma);
    } else {
        grayscale = 0;
    }
    if (chroma <= 0) {
        hue = 0;
    } else if (max === r) {
        hue = (g - b) / chroma % 6;
    } else if (max === g) {
        hue = 2 + (b - r) / chroma;
    } else {
        hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
    }
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) {
        f = (v - c) / (1 - c);
    }
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) {
        return [
            g * 255,
            g * 255,
            g * 255
        ];
    }
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) {
        f = c / v;
    }
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
    }
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
        g = (v - c) / (1 - c);
    }
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
convert.gray.hsv = convert.gray.hsl;
convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};
}),
"[project]/study-lms-frontend-app/node_modules/color-convert/route.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const conversions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-convert/conversions.js [app-ssr] (ecmascript)");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function buildGraph() {
    const graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys(conversions);
    for(let len = models.length, i = 0; i < len; i++){
        graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
        };
    }
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
            continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
};
}),
"[project]/study-lms-frontend-app/node_modules/color-convert/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const conversions = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-convert/conversions.js [app-ssr] (ecmascript)");
const route = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-convert/route.js [app-ssr] (ecmascript)");
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
function wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === 'object') {
            for(let len = result.length, i = 0; i < len; i++){
                result[i] = Math.round(result[i]);
            }
        }
        return result;
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
models.forEach((fromModel)=>{
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
        value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
        value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
    });
});
module.exports = convert;
}),
"[project]/study-lms-frontend-app/node_modules/color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const colorString = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-string/index.js [app-ssr] (ecmascript)");
const convert = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/color-convert/index.js [app-ssr] (ecmascript)");
const skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    'keyword',
    // Gray conflicts with some method names, and has its own method defined.
    'gray',
    // Shouldn't really be in color-convert either...
    'hex'
];
const hashedModelKeys = {};
for (const model of Object.keys(convert)){
    hashedModelKeys[[
        ...convert[model].labels
    ].sort().join('')] = model;
}
const limiters = {};
function Color(object, model) {
    if (!(this instanceof Color)) {
        return new Color(object, model);
    }
    if (model && model in skippedModels) {
        model = null;
    }
    if (model && !(model in convert)) {
        throw new Error('Unknown model: ' + model);
    }
    let i;
    let channels;
    if (object == null) {
        this.model = 'rgb';
        this.color = [
            0,
            0,
            0
        ];
        this.valpha = 1;
    } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [
            ...object.color
        ];
        this.valpha = object.valpha;
    } else if (typeof object === 'string') {
        const result = colorString.get(object);
        if (result === null) {
            throw new Error('Unable to parse color from string: ' + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
    } else if (object.length > 0) {
        this.model = model || 'rgb';
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
    } else if (typeof object === 'number') {
        // This is always RGB - can be converted later on.
        this.model = 'rgb';
        this.color = [
            object >> 16 & 0xFF,
            object >> 8 & 0xFF,
            object & 0xFF
        ];
        this.valpha = 1;
    } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ('alpha' in object) {
            keys.splice(keys.indexOf('alpha'), 1);
            this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join('');
        if (!(hashedKeys in hashedModelKeys)) {
            throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for(i = 0; i < labels.length; i++){
            color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
    }
    // Perform limitations (clamping, etc.)
    if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for(i = 0; i < channels; i++){
            const limit = limiters[this.model][i];
            if (limit) {
                this.color[i] = limit(this.color[i]);
            }
        }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
        Object.freeze(this);
    }
}
Color.prototype = {
    toString () {
        return this.string();
    },
    toJSON () {
        return this[this.model]();
    },
    string (places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to[self.model](args);
    },
    percentString (places) {
        const self = this.rgb().round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to.rgb.percent(args);
    },
    array () {
        return this.valpha === 1 ? [
            ...this.color
        ] : [
            ...this.color,
            this.valpha
        ];
    },
    object () {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for(let i = 0; i < channels; i++){
            result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
            result.alpha = this.valpha;
        }
        return result;
    },
    unitArray () {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
            rgb.push(this.valpha);
        }
        return rgb;
    },
    unitObject () {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
        }
        return rgb;
    },
    round (places) {
        places = Math.max(places || 0, 0);
        return new Color([
            ...this.color.map(roundToPlace(places)),
            this.valpha
        ], this.model);
    },
    alpha (value) {
        if (value !== undefined) {
            return new Color([
                ...this.color,
                Math.max(0, Math.min(1, value))
            ], this.model);
        }
        return this.valpha;
    },
    // Rgb
    red: getset('rgb', 0, maxfn(255)),
    green: getset('rgb', 1, maxfn(255)),
    blue: getset('rgb', 2, maxfn(255)),
    hue: getset([
        'hsl',
        'hsv',
        'hsl',
        'hwb',
        'hcg'
    ], 0, (value)=>(value % 360 + 360) % 360),
    saturationl: getset('hsl', 1, maxfn(100)),
    lightness: getset('hsl', 2, maxfn(100)),
    saturationv: getset('hsv', 1, maxfn(100)),
    value: getset('hsv', 2, maxfn(100)),
    chroma: getset('hcg', 1, maxfn(100)),
    gray: getset('hcg', 2, maxfn(100)),
    white: getset('hwb', 1, maxfn(100)),
    wblack: getset('hwb', 2, maxfn(100)),
    cyan: getset('cmyk', 0, maxfn(100)),
    magenta: getset('cmyk', 1, maxfn(100)),
    yellow: getset('cmyk', 2, maxfn(100)),
    black: getset('cmyk', 3, maxfn(100)),
    x: getset('xyz', 0, maxfn(95.047)),
    y: getset('xyz', 1, maxfn(100)),
    z: getset('xyz', 2, maxfn(108.833)),
    l: getset('lab', 0, maxfn(100)),
    a: getset('lab', 1),
    b: getset('lab', 2),
    keyword (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return convert[this.model].keyword(this.color);
    },
    hex (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
    },
    hexa (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
            alphaHex = '0' + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber () {
        const rgb = this.rgb().color;
        return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
    },
    luminosity () {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()){
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast (color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level (color2) {
        // https://www.w3.org/TR/WCAG/#contrast-enhanced
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
            return 'AAA';
        }
        return contrastRatio >= 4.5 ? 'AA' : '';
    },
    isDark () {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
        return yiq < 128;
    },
    isLight () {
        return !this.isDark();
    },
    negate () {
        const rgb = this.rgb();
        for(let i = 0; i < 3; i++){
            rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
    },
    lighten (ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
    },
    darken (ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
    },
    saturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
    },
    desaturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
    },
    whiten (ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
    },
    blacken (ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
    },
    grayscale () {
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
    },
    fade (ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer (ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate (degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
    },
    mix (mixinColor, weight) {
        // Ported from sass implementation in C
        // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
        if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === undefined ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }
};
// Model conversion methods and static constructors
for (const model of Object.keys(convert)){
    if (skippedModels.includes(model)) {
        continue;
    }
    const { channels } = convert[model];
    // Conversion methods
    Color.prototype[model] = function(...args) {
        if (this.model === model) {
            return new Color(this);
        }
        if (args.length > 0) {
            return new Color(args, model);
        }
        return new Color([
            ...assertArray(convert[this.model][model].raw(this.color)),
            this.valpha
        ], model);
    };
    // 'static' construction methods
    Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === 'number') {
            color = zeroArray(args, channels);
        }
        return new Color(color, model);
    };
}
function roundTo(number, places) {
    return Number(number.toFixed(places));
}
function roundToPlace(places) {
    return function(number) {
        return roundTo(number, places);
    };
}
function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [
        model
    ];
    for (const m of model){
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
        let result;
        if (value !== undefined) {
            if (modifier) {
                value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
            result = modifier(result);
        }
        return result;
    };
}
function maxfn(max) {
    return function(v) {
        return Math.max(0, Math.min(max, v));
    };
}
function assertArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function zeroArray(array, length) {
    for(let i = 0; i < length; i++){
        if (typeof array[i] !== 'number') {
            array[i] = 0;
        }
    }
    return array;
}
module.exports = Color;
}),
"[project]/study-lms-frontend-app/node_modules/tailwindcss/dist/plugin.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function g(i, n) {
    return {
        handler: i,
        config: n
    };
}
g.withOptions = function(i, n = ()=>({})) {
    function t(o) {
        return {
            handler: i(o),
            config: n(o)
        };
    }
    return t.__isOptionsFunction = !0, t;
};
var u = g;
module.exports = u;
}),
"[project]/study-lms-frontend-app/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
"[project]/study-lms-frontend-app/node_modules/tailwind-variants/dist/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var tailwindMerge = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/tailwind-variants/node_modules/tailwind-merge/dist/index.js [app-ssr] (ecmascript)");
var q = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, g = (e)=>!e || typeof e != "object" || Object.keys(e).length === 0, Q = (e, l)=>JSON.stringify(e) === JSON.stringify(l);
function X(e, l) {
    e.forEach(function(t) {
        Array.isArray(t) ? X(t, l) : l.push(t);
    });
}
function J(e) {
    let l = [];
    return X(e, l), l;
}
var R = (...e)=>J(e).filter(Boolean), M = (e, l)=>{
    let t = {}, h = Object.keys(e), O = Object.keys(l);
    for (let u of h)if (O.includes(u)) {
        let v = e[u], C = l[u];
        typeof v == "object" && typeof C == "object" ? t[u] = M(v, C) : Array.isArray(v) || Array.isArray(C) ? t[u] = R(C, v) : t[u] = C + " " + v;
    } else t[u] = e[u];
    for (let u of O)h.includes(u) || (t[u] = l[u]);
    return t;
}, F = (e)=>!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
var ce = {
    twMerge: !0,
    twMergeConfig: {},
    responsiveVariants: !1
}, Z = (e)=>e || void 0, k = (...e)=>Z(J(e).filter(Boolean).join(" ")), U = null, E = {}, W = !1, j = (...e)=>(l)=>l.twMerge ? ((!U || W) && (W = !1, U = g(E) ? tailwindMerge.twMerge : tailwindMerge.extendTailwindMerge(E)), Z(U(k(e)))) : k(e), Y = (e, l)=>{
    for(let t in l)e.hasOwnProperty(t) ? e[t] = k(e[t], l[t]) : e[t] = l[t];
    return e;
}, ie = (e, l)=>{
    let { extend: t = null, slots: h = {}, variants: O = {}, compoundVariants: u = [], compoundSlots: v = [], defaultVariants: C = {} } = e, d = {
        ...ce,
        ...l
    }, $ = t != null && t.base ? k(t.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, b = t != null && t.variants && !g(t.variants) ? M(O, t.variants) : O, w = t != null && t.defaultVariants && !g(t.defaultVariants) ? {
        ...t.defaultVariants,
        ...C
    } : C;
    !g(d.twMergeConfig) && !Q(d.twMergeConfig, E) && (W = !0, E = d.twMergeConfig);
    let S = g(t == null ? void 0 : t.slots), T = g(h) ? {} : {
        base: k(e == null ? void 0 : e.base, S && (t == null ? void 0 : t.base)),
        ...h
    }, N = S ? T : Y({
        ...t == null ? void 0 : t.slots
    }, g(T) ? {
        base: e == null ? void 0 : e.base
    } : T), V = (f)=>{
        if (g(b) && g(h) && S) return j($, f == null ? void 0 : f.class, f == null ? void 0 : f.className)(d);
        if (u && !Array.isArray(u)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
        if (v && !Array.isArray(v)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof v}`);
        let K = (n, a, r = [], c)=>{
            let s = r;
            if (typeof a == "string") s = s.concat(F(a).split(" ").map((i)=>`${n}:${i}`));
            else if (Array.isArray(a)) s = s.concat(a.reduce((i, o)=>i.concat(`${n}:${o}`), []));
            else if (typeof a == "object" && typeof c == "string") {
                for(let i in a)if (a.hasOwnProperty(i) && i === c) {
                    let o = a[i];
                    if (o && typeof o == "string") {
                        let y = F(o);
                        s[c] ? s[c] = s[c].concat(y.split(" ").map((m)=>`${n}:${m}`)) : s[c] = y.split(" ").map((m)=>`${n}:${m}`);
                    } else Array.isArray(o) && o.length > 0 && (s[c] = o.reduce((y, m)=>y.concat(`${n}:${m}`), []));
                }
            }
            return s;
        }, p = (n, a = b, r = null, c = null)=>{
            var I;
            let s = a[n];
            if (!s || g(s)) return null;
            let i = (I = c == null ? void 0 : c[n]) != null ? I : f == null ? void 0 : f[n];
            if (i === null) return null;
            let o = q(i), y = Array.isArray(d.responsiveVariants) && d.responsiveVariants.length > 0 || d.responsiveVariants === !0, m = w == null ? void 0 : w[n], A = [];
            if (typeof o == "object" && y) for (let [x, L] of Object.entries(o)){
                let re = s[L];
                if (x === "initial") {
                    m = L;
                    continue;
                }
                Array.isArray(d.responsiveVariants) && !d.responsiveVariants.includes(x) || (A = K(x, re, A, r));
            }
            let B = s[o] || s[q(m)];
            return typeof A == "object" && typeof r == "string" && A[r] ? Y(A, B) : A.length > 0 ? (A.push(B), A) : B;
        }, P = ()=>b ? Object.keys(b).map((n)=>p(n, b)) : null, ee = (n, a)=>{
            if (!b || typeof b != "object") return null;
            let r = new Array;
            for(let c in b){
                let s = p(c, b, n, a), i = n === "base" && typeof s == "string" ? s : s && s[n];
                i && (r[r.length] = i);
            }
            return r;
        }, z = {};
        for(let n in f)f[n] !== void 0 && (z[n] = f[n]);
        let D = (n, a)=>{
            var c;
            let r = typeof (f == null ? void 0 : f[n]) == "object" ? {
                [n]: (c = f[n]) == null ? void 0 : c.initial
            } : {};
            return {
                ...w,
                ...z,
                ...r,
                ...a
            };
        }, G = (n = [], a)=>{
            let r = [];
            for (let { class: c, className: s, ...i } of n){
                let o = !0;
                for (let [y, m] of Object.entries(i)){
                    let A = D(y, a);
                    if (Array.isArray(m)) {
                        if (!m.includes(A[y])) {
                            o = !1;
                            break;
                        }
                    } else if (A[y] !== m) {
                        o = !1;
                        break;
                    }
                }
                o && (c && r.push(c), s && r.push(s));
            }
            return r;
        }, H = (n)=>{
            let a = G(u, n), r = G(t == null ? void 0 : t.compoundVariants, n);
            return R(r, a);
        }, te = (n)=>{
            let a = H(n);
            if (!Array.isArray(a)) return a;
            let r = {};
            for (let c of a)if (typeof c == "string" && (r.base = j(r.base, c)(d)), typeof c == "object") for (let [s, i] of Object.entries(c))r[s] = j(r[s], i)(d);
            return r;
        }, ne = (n)=>{
            if (v.length < 1) return null;
            let a = {};
            for (let { slots: r = [], class: c, className: s, ...i } of v){
                if (!g(i)) {
                    let o = !0;
                    for (let y of Object.keys(i)){
                        let m = D(y, n)[y];
                        if (m === void 0 || (Array.isArray(i[y]) ? !i[y].includes(m) : i[y] !== m)) {
                            o = !1;
                            break;
                        }
                    }
                    if (!o) continue;
                }
                for (let o of r)a[o] = a[o] || [], a[o].push([
                    c,
                    s
                ]);
            }
            return a;
        };
        if (!g(h) || !S) {
            let n = {};
            if (typeof N == "object" && !g(N)) for (let a of Object.keys(N))n[a] = (r)=>{
                var c, s;
                return j(N[a], ee(a, r), ((c = te(r)) != null ? c : [])[a], ((s = ne(r)) != null ? s : [])[a], r == null ? void 0 : r.class, r == null ? void 0 : r.className)(d);
            };
            return n;
        }
        return j($, P(), H(), f == null ? void 0 : f.class, f == null ? void 0 : f.className)(d);
    }, _ = ()=>{
        if (!(!b || typeof b != "object")) return Object.keys(b);
    };
    return V.variantKeys = _(), V.extend = t, V.base = $, V.slots = N, V.variants = b, V.defaultVariants = w, V.compoundSlots = v, V.compoundVariants = u, V;
}, ue = (e)=>(l, t)=>ie(l, t ? M(e, t) : e);
exports.cn = j;
exports.cnBase = k;
exports.createTV = ue;
exports.defaultConfig = ce;
exports.tv = ie;
exports.voidEmpty = Z;
}),
"[project]/study-lms-frontend-app/node_modules/color2k/dist/index.exports.require.cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A simple guard function:
 *
 * ```js
 * Math.min(Math.max(low, value), high)
 * ```
 */ function guard(low, high, value) {
    return Math.min(Math.max(low, value), high);
}
class ColorError extends Error {
    constructor(color){
        super(`Failed to parse color: "${color}"`);
    }
}
var ColorError$1 = ColorError;
/**
 * Parses a color into red, gree, blue, alpha parts
 *
 * @param color the input color. Can be a RGB, RBGA, HSL, HSLA, or named color
 */ function parseToRgba(color) {
    if (typeof color !== 'string') throw new ColorError$1(color);
    if (color.trim().toLowerCase() === 'transparent') return [
        0,
        0,
        0,
        0
    ];
    let normalizedColor = color.trim();
    normalizedColor = namedColorRegex.test(color) ? nameToHex(color) : color;
    const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
    if (reducedHexMatch) {
        const arr = Array.from(reducedHexMatch).slice(1);
        return [
            ...arr.slice(0, 3).map((x)=>parseInt(r(x, 2), 16)),
            parseInt(r(arr[3] || 'f', 2), 16) / 255
        ];
    }
    const hexMatch = hexRegex.exec(normalizedColor);
    if (hexMatch) {
        const arr = Array.from(hexMatch).slice(1);
        return [
            ...arr.slice(0, 3).map((x)=>parseInt(x, 16)),
            parseInt(arr[3] || 'ff', 16) / 255
        ];
    }
    const rgbaMatch = rgbaRegex.exec(normalizedColor);
    if (rgbaMatch) {
        const arr = Array.from(rgbaMatch).slice(1);
        return [
            ...arr.slice(0, 3).map((x)=>parseInt(x, 10)),
            parseFloat(arr[3] || '1')
        ];
    }
    const hslaMatch = hslaRegex.exec(normalizedColor);
    if (hslaMatch) {
        const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
        if (guard(0, 100, s) !== s) throw new ColorError$1(color);
        if (guard(0, 100, l) !== l) throw new ColorError$1(color);
        return [
            ...hslToRgb(h, s, l),
            Number.isNaN(a) ? 1 : a
        ];
    }
    throw new ColorError$1(color);
}
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while(i){
        hash = hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return (hash >>> 0) % 2341;
}
const colorToInt = (x)=>parseInt(x.replace(/_/g, ''), 36);
const compressedColorMap = '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'.split(' ').reduce((acc, next)=>{
    const key = colorToInt(next.substring(0, 3));
    const hex = colorToInt(next.substring(3)).toString(16);
    // NOTE: padStart could be used here but it breaks Node 6 compat
    // https://github.com/ricokahler/color2k/issues/351
    let prefix = '';
    for(let i = 0; i < 6 - hex.length; i++){
        prefix += '0';
    }
    acc[key] = `${prefix}${hex}`;
    return acc;
}, {});
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 */ function nameToHex(color) {
    const normalizedColorName = color.toLowerCase().trim();
    const result = compressedColorMap[hash(normalizedColorName)];
    if (!result) throw new ColorError$1(color);
    return `#${result}`;
}
const r = (str, amount)=>Array.from(Array(amount)).map(()=>str).join('');
const reducedHexRegex = new RegExp(`^#${r('([a-f0-9])', 3)}([a-f0-9])?$`, 'i');
const hexRegex = new RegExp(`^#${r('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i');
const rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, 'i');
const hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
const namedColorRegex = /^[a-z]+$/i;
const roundColor = (color)=>{
    return Math.round(color * 255);
};
const hslToRgb = (hue, saturation, lightness)=>{
    let l = lightness / 100;
    if (saturation === 0) {
        // achromatic
        return [
            l,
            l,
            l
        ].map(roundColor);
    }
    // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
    const huePrime = (hue % 360 + 360) % 360 / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    let red = 0;
    let green = 0;
    let blue = 0;
    if (huePrime >= 0 && huePrime < 1) {
        red = chroma;
        green = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
        red = secondComponent;
        green = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
        green = chroma;
        blue = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
        green = secondComponent;
        blue = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
        red = secondComponent;
        blue = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
        red = chroma;
        blue = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    const finalRed = red + lightnessModification;
    const finalGreen = green + lightnessModification;
    const finalBlue = blue + lightnessModification;
    return [
        finalRed,
        finalGreen,
        finalBlue
    ].map(roundColor);
};
// taken from:
// https://github.com/styled-components/polished/blob/a23a6a2bb26802b3d922d9c3b67bac3f3a54a310/src/internalHelpers/_rgbToHsl.js
/**
 * Parses a color in hue, saturation, lightness, and the alpha channel.
 *
 * Hue is a number between 0 and 360, saturation, lightness, and alpha are
 * decimal percentages between 0 and 1
 */ function parseToHsla(color) {
    const [red, green, blue, alpha] = parseToRgba(color).map((value, index)=>// 3rd index is alpha channel which is already normalized
        index === 3 ? value : value / 255);
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;
    // achromatic
    if (max === min) return [
        0,
        0,
        lightness,
        alpha
    ];
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const hue = 60 * (red === max ? (green - blue) / delta + (green < blue ? 6 : 0) : green === max ? (blue - red) / delta + 2 : (red - green) / delta + 4);
    return [
        hue,
        saturation,
        lightness,
        alpha
    ];
}
/**
 * Takes in hsla parts and constructs an hsla string
 *
 * @param hue The color circle (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue
 * @param saturation Percentage of saturation, given as a decimal between 0 and 1
 * @param lightness Percentage of lightness, given as a decimal between 0 and 1
 * @param alpha Percentage of opacity, given as a decimal between 0 and 1
 */ function hsla(hue, saturation, lightness, alpha) {
    return `hsla(${(hue % 360).toFixed()}, ${guard(0, 100, saturation * 100).toFixed()}%, ${guard(0, 100, lightness * 100).toFixed()}%, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
/**
 * Adjusts the current hue of the color by the given degrees. Wraps around when
 * over 360.
 *
 * @param color input color
 * @param degrees degrees to adjust the input color, accepts degree integers
 * (0 - 360) and wraps around on overflow
 */ function adjustHue(color, degrees) {
    const [h, s, l, a] = parseToHsla(color);
    return hsla(h + degrees, s, l, a);
}
/**
 * Darkens using lightness. This is equivalent to subtracting the lightness
 * from the L in HSL.
 *
 * @param amount The amount to darken, given as a decimal between 0 and 1
 */ function darken(color, amount) {
    const [hue, saturation, lightness, alpha] = parseToHsla(color);
    return hsla(hue, saturation, lightness - amount, alpha);
}
/**
 * Desaturates the input color by the given amount via subtracting from the `s`
 * in `hsla`.
 *
 * @param amount The amount to desaturate, given as a decimal between 0 and 1
 */ function desaturate(color, amount) {
    const [h, s, l, a] = parseToHsla(color);
    return hsla(h, s - amount, l, a);
}
// taken from:
// https://github.com/styled-components/polished/blob/0764c982551b487469043acb56281b0358b3107b/src/color/getLuminance.js
/**
 * Returns a number (float) representing the luminance of a color.
 */ function getLuminance(color) {
    if (color === 'transparent') return 0;
    function f(x) {
        const channel = x / 255;
        return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    }
    const [r, g, b] = parseToRgba(color);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
// taken from:
// https://github.com/styled-components/polished/blob/0764c982551b487469043acb56281b0358b3107b/src/color/getContrast.js
/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 */ function getContrast(color1, color2) {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    return luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05);
}
/**
 * Takes in rgba parts and returns an rgba string
 *
 * @param red The amount of red in the red channel, given in a number between 0 and 255 inclusive
 * @param green The amount of green in the red channel, given in a number between 0 and 255 inclusive
 * @param blue The amount of blue in the red channel, given in a number between 0 and 255 inclusive
 * @param alpha Percentage of opacity, given as a decimal between 0 and 1
 */ function rgba(red, green, blue, alpha) {
    return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
/**
 * Mixes two colors together. Taken from sass's implementation.
 */ function mix(color1, color2, weight) {
    const normalize = (n, index)=>// 3rd index is alpha channel which is already normalized
        index === 3 ? n : n / 255;
    const [r1, g1, b1, a1] = parseToRgba(color1).map(normalize);
    const [r2, g2, b2, a2] = parseToRgba(color2).map(normalize);
    // The formula is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
    const alphaDelta = a2 - a1;
    const normalizedWeight = weight * 2 - 1;
    const combinedWeight = normalizedWeight * alphaDelta === -1 ? normalizedWeight : normalizedWeight + alphaDelta / (1 + normalizedWeight * alphaDelta);
    const weight2 = (combinedWeight + 1) / 2;
    const weight1 = 1 - weight2;
    const r = (r1 * weight1 + r2 * weight2) * 255;
    const g = (g1 * weight1 + g2 * weight2) * 255;
    const b = (b1 * weight1 + b2 * weight2) * 255;
    const a = a2 * weight + a1 * (1 - weight);
    return rgba(r, g, b, a);
}
/**
 * Given a series colors, this function will return a `scale(x)` function that
 * accepts a percentage as a decimal between 0 and 1 and returns the color at
 * that percentage in the scale.
 *
 * ```js
 * const scale = getScale('red', 'yellow', 'green');
 * console.log(scale(0)); // rgba(255, 0, 0, 1)
 * console.log(scale(0.5)); // rgba(255, 255, 0, 1)
 * console.log(scale(1)); // rgba(0, 128, 0, 1)
 * ```
 *
 * If you'd like to limit the domain and range like chroma-js, we recommend
 * wrapping scale again.
 *
 * ```js
 * const _scale = getScale('red', 'yellow', 'green');
 * const scale = x => _scale(x / 100);
 *
 * console.log(scale(0)); // rgba(255, 0, 0, 1)
 * console.log(scale(50)); // rgba(255, 255, 0, 1)
 * console.log(scale(100)); // rgba(0, 128, 0, 1)
 * ```
 */ function getScale(...colors) {
    return (n)=>{
        const lastIndex = colors.length - 1;
        const lowIndex = guard(0, lastIndex, Math.floor(n * lastIndex));
        const highIndex = guard(0, lastIndex, Math.ceil(n * lastIndex));
        const color1 = colors[lowIndex];
        const color2 = colors[highIndex];
        const unit = 1 / lastIndex;
        const weight = (n - unit * lowIndex) / unit;
        return mix(color1, color2, weight);
    };
}
const guidelines = {
    decorative: 1.5,
    readable: 3,
    aa: 4.5,
    aaa: 7
};
/**
 * Returns whether or not a color has bad contrast against a background
 * according to a given standard.
 */ function hasBadContrast(color, standard = 'aa', background = '#fff') {
    return getContrast(color, background) < guidelines[standard];
}
/**
 * Lightens a color by a given amount. This is equivalent to
 * `darken(color, -amount)`
 *
 * @param amount The amount to darken, given as a decimal between 0 and 1
 */ function lighten(color, amount) {
    return darken(color, -amount);
}
/**
 * Takes in a color and makes it more transparent by convert to `rgba` and
 * decreasing the amount in the alpha channel.
 *
 * @param amount The amount to increase the transparency by, given as a decimal between 0 and 1
 */ function transparentize(color, amount) {
    const [r, g, b, a] = parseToRgba(color);
    return rgba(r, g, b, a - amount);
}
/**
 * Takes a color and un-transparentizes it. Equivalent to
 * `transparentize(color, -amount)`
 *
 * @param amount The amount to increase the opacity by, given as a decimal between 0 and 1
 */ function opacify(color, amount) {
    return transparentize(color, -amount);
}
/**
 * An alternative function to `readableColor`. Returns whether or not the 
 * readable color (i.e. the color to be place on top the input color) should be
 * black.
 */ function readableColorIsBlack(color) {
    return getLuminance(color) > 0.179;
}
/**
 * Returns black or white for best contrast depending on the luminosity of the
 * given color.
 */ function readableColor(color) {
    return readableColorIsBlack(color) ? '#000' : '#fff';
}
/**
 * Saturates a color by converting it to `hsl` and increasing the saturation
 * amount. Equivalent to `desaturate(color, -amount)`
 * 
 * @param color Input color
 * @param amount The amount to darken, given as a decimal between 0 and 1
 */ function saturate(color, amount) {
    return desaturate(color, -amount);
}
/**
 * Takes in any color and returns it as a hex code.
 */ function toHex(color) {
    const [r, g, b, a] = parseToRgba(color);
    let hex = (x)=>{
        const h = guard(0, 255, x).toString(16);
        // NOTE: padStart could be used here but it breaks Node 6 compat
        // https://github.com/ricokahler/color2k/issues/351
        return h.length === 1 ? `0${h}` : h;
    };
    return `#${hex(r)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ''}`;
}
/**
 * Takes in any color and returns it as an rgba string.
 */ function toRgba(color) {
    return rgba(...parseToRgba(color));
}
/**
 * Takes in any color and returns it as an hsla string.
 */ function toHsla(color) {
    return hsla(...parseToHsla(color));
}
exports.ColorError = ColorError$1;
exports.adjustHue = adjustHue;
exports.darken = darken;
exports.desaturate = desaturate;
exports.getContrast = getContrast;
exports.getLuminance = getLuminance;
exports.getScale = getScale;
exports.guard = guard;
exports.hasBadContrast = hasBadContrast;
exports.hsla = hsla;
exports.lighten = lighten;
exports.mix = mix;
exports.opacify = opacify;
exports.parseToHsla = parseToHsla;
exports.parseToRgba = parseToRgba;
exports.readableColor = readableColor;
exports.readableColorIsBlack = readableColorIsBlack;
exports.rgba = rgba;
exports.saturate = saturate;
exports.toHex = toHex;
exports.toHsla = toHsla;
exports.toRgba = toRgba;
exports.transparentize = transparentize; //# sourceMappingURL=index.exports.require.cjs.js.map
}),
"[project]/study-lms-frontend-app/node_modules/flat/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;
function isBuffer(obj) {
    return obj && obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
function keyIdentity(key) {
    return key;
}
function flatten(target, opts) {
    opts = opts || {};
    const delimiter = opts.delimiter || '.';
    const maxDepth = opts.maxDepth;
    const transformKey = opts.transformKey || keyIdentity;
    const output = {};
    function step(object, prev, currentDepth) {
        currentDepth = currentDepth || 1;
        Object.keys(object).forEach(function(key) {
            const value = object[key];
            const isarray = opts.safe && Array.isArray(value);
            const type = Object.prototype.toString.call(value);
            const isbuffer = isBuffer(value);
            const isobject = type === '[object Object]' || type === '[object Array]';
            const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
            if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) {
                return step(value, newKey, currentDepth + 1);
            }
            output[newKey] = value;
        });
    }
    step(target);
    return output;
}
function unflatten(target, opts) {
    opts = opts || {};
    const delimiter = opts.delimiter || '.';
    const overwrite = opts.overwrite || false;
    const transformKey = opts.transformKey || keyIdentity;
    const result = {};
    const isbuffer = isBuffer(target);
    if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
        return target;
    }
    // safely ensure that the key is
    // an integer.
    function getkey(key) {
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object ? key : parsedKey;
    }
    function addKeys(keyPrefix, recipient, target) {
        return Object.keys(target).reduce(function(result, key) {
            result[keyPrefix + delimiter + key] = target[key];
            return result;
        }, recipient);
    }
    function isEmpty(val) {
        const type = Object.prototype.toString.call(val);
        const isArray = type === '[object Array]';
        const isObject = type === '[object Object]';
        if (!val) {
            return true;
        } else if (isArray) {
            return !val.length;
        } else if (isObject) {
            return !Object.keys(val).length;
        }
    }
    target = Object.keys(target).reduce(function(result, key) {
        const type = Object.prototype.toString.call(target[key]);
        const isObject = type === '[object Object]' || type === '[object Array]';
        if (!isObject || isEmpty(target[key])) {
            result[key] = target[key];
            return result;
        } else {
            return addKeys(key, result, flatten(target[key], opts));
        }
    }, {});
    Object.keys(target).forEach(function(key) {
        const split = key.split(delimiter).map(transformKey);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while(key2 !== undefined){
            if (key1 === '__proto__') {
                return;
            }
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === '[object Object]' || type === '[object Array]';
            // do not write over falsey, non-undefined values if overwrite is false
            if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
                return;
            }
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
                recipient[key1] = typeof key2 === 'number' && !opts.object ? [] : {};
            }
            recipient = recipient[key1];
            if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
            }
        }
        // unflatten again for 'messy objects'
        recipient[key1] = unflatten(target[key], opts);
    });
    return result;
}
}),
"[project]/study-lms-frontend-app/node_modules/compute-scroll-into-view/dist/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, o = (t, o)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const n = getComputedStyle(t, null);
        return e(n.overflowY, o) || e(n.overflowX, o) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, n = (t, e, o, n, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= o || i >= e && s >= o ? r - t - n : i > e && s < o || r < t && s > o ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
};
exports.compute = (e, r)=>{
    var i, s, d, c;
    if ("undefined" == typeof document) return [];
    const { scrollMode: h, block: u, inline: f, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && o(W) && !o(document.documentElement) || null != W && o(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (c = null == (d = window.visualViewport) ? void 0 : d.height) ? c : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === u || "nearest" === u ? x - T : "end" === u ? I + F : x + v / 2 - T + F, D = "center" === f ? R + E / 2 - V + B : "end" === f ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: c } = e.getBoundingClientRect();
        if ("if-needed" === h && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !o(e) || x >= i && I <= d && R >= c && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, j = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, O = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === u ? k : "end" === u ? k - H : "nearest" === u ? n(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === f ? D : "center" === f ? D - b / 2 : "end" === f ? D - b : n(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === u ? k - i - p : "end" === u ? k - d + T + S : "nearest" === u ? n(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === f ? D - c - g : "center" === f ? D - (c + r / 2) + V / 2 : "end" === f ? D - s + W + V : n(c, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: o } = e;
            B = 0 === O ? 0 : Math.max(0, Math.min(o + B / O, e.scrollHeight - l / O + S)), F = 0 === j ? 0 : Math.max(0, Math.min(t + F / j, e.scrollWidth - r / j + V)), k += o - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
}; //# sourceMappingURL=index.cjs.map
}),
"[project]/study-lms-frontend-app/node_modules/scroll-into-view-if-needed/dist/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var e = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/compute-scroll-into-view/dist/index.cjs [app-ssr] (ecmascript)");
const o = (e)=>!1 === e ? {
        block: "end",
        inline: "nearest"
    } : ((e)=>e === Object(e) && 0 !== Object.keys(e).length)(e) ? e : {
        block: "start",
        inline: "nearest"
    };
module.exports = function(t, n) {
    if (!t.isConnected || !((e)=>{
        let o = e;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(t)) return;
    if (((e)=>"object" == typeof e && "function" == typeof e.behavior)(n)) return n.behavior(e.compute(t, n));
    const r = "boolean" == typeof n || null == n ? void 0 : n.behavior;
    for (const { el: i, top: c, left: l } of e.compute(t, o(n)))i.scroll({
        top: c,
        left: l,
        behavior: r
    });
}; //# sourceMappingURL=index.cjs.map
}),
"[project]/study-lms-frontend-app/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/study-lms-frontend-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/study-lms-frontend-app/node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
;
}),
"[project]/study-lms-frontend-app/node_modules/use-latest/dist/use-latest.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLatest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$isomorphic$2d$layout$2d$effect$2f$dist$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.js [app-ssr] (ecmascript)");
;
;
var useLatest = function useLatest(value) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$isomorphic$2d$layout$2d$effect$2f$dist$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        ref.current = value;
    });
    return ref;
};
;
}),
"[project]/study-lms-frontend-app/node_modules/use-composed-ref/dist/use-composed-ref.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useComposedRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// basically Exclude<React.ClassAttributes<T>["ref"], string>
var updateRef = function updateRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
        return;
    }
    ref.current = value;
};
var useComposedRef = function useComposedRef(libRef, userRef) {
    var prevUserRef = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef();
    return __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(function(instance) {
        libRef.current = instance;
        if (prevUserRef.current) {
            updateRef(prevUserRef.current, null);
        }
        prevUserRef.current = userRef;
        if (!userRef) {
            return;
        }
        updateRef(userRef, instance);
    }, [
        userRef
    ]);
};
;
}),
"[project]/study-lms-frontend-app/node_modules/react-textarea-autosize/dist/react-textarea-autosize.development.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$latest$2f$dist$2f$use$2d$latest$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/use-latest/dist/use-latest.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$composed$2d$ref$2f$dist$2f$use$2d$composed$2d$ref$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/use-composed-ref/dist/use-composed-ref.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
var isBrowser = typeof document !== 'undefined';
var HIDDEN_TEXTAREA_STYLE = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0',
    display: 'block'
};
var forceHiddenStyles = function forceHiddenStyles(node) {
    Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
        node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
    });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight(node, sizingData) {
    var height = node.scrollHeight;
    if (sizingData.sizingStyle.boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        return height + sizingData.borderSize;
    }
    // remove padding, since height = content
    return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
    if (minRows === void 0) {
        minRows = 1;
    }
    if (maxRows === void 0) {
        maxRows = Infinity;
    }
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        hiddenTextarea.setAttribute('tabindex', '-1');
        hiddenTextarea.setAttribute('aria-hidden', 'true');
        forceHiddenStyles$1(hiddenTextarea);
    }
    if (hiddenTextarea.parentNode === null) {
        document.body.appendChild(hiddenTextarea);
    }
    var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
    var boxSizing = sizingStyle.boxSizing;
    Object.keys(sizingStyle).forEach(function(_key) {
        var key = _key;
        hiddenTextarea.style[key] = sizingStyle[key];
    });
    forceHiddenStyles$1(hiddenTextarea);
    hiddenTextarea.value = value;
    var height = getHeight(hiddenTextarea, sizingData);
    // Double set and calc due to Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1795904
    hiddenTextarea.value = value;
    height = getHeight(hiddenTextarea, sizingData);
    // measure height of a textarea with a single row
    hiddenTextarea.value = 'x';
    var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
    var minHeight = rowHeight * minRows;
    if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    var maxHeight = rowHeight * maxRows;
    if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
    return [
        height,
        rowHeight
    ];
}
var noop = function noop() {};
var pick = function pick(props, obj) {
    return props.reduce(function(acc, prop) {
        acc[prop] = obj[prop];
        return acc;
    }, {});
};
var SIZING_STYLE = [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'boxSizing',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    // non-standard
    'tabSize',
    'textIndent',
    // non-standard
    'textRendering',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'scrollbarGutter'
];
var isIE = isBrowser ? !!document.documentElement.currentStyle : false;
var getSizingData = function getSizingData(node) {
    var style = window.getComputedStyle(node);
    if (style === null) {
        return null;
    }
    var sizingStyle = pick(SIZING_STYLE, style);
    var boxSizing = sizingStyle.boxSizing;
    // probably node is detached from DOM, can't read computed dimensions
    if (boxSizing === '') {
        return null;
    }
    // IE (Edge has already correct behaviour) returns content width as computed width
    // so we need to add manually padding and border widths
    if (isIE && boxSizing === 'border-box') {
        sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
    }
    var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
    var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
    return {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize
    };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
    var latestListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$latest$2f$dist$2f$use$2d$latest$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(listener);
    __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](function() {
        var handler = function handler(ev) {
            return latestListener.current(ev);
        };
        // might happen if document.fonts is not defined, for instance
        if (!target) {
            return;
        }
        target.addEventListener(type, handler);
        return function() {
            return target.removeEventListener(type, handler);
        };
    }, []);
}
var useFormResetListener = function useFormResetListener(libRef, listener) {
    useListener(document.body, 'reset', function(ev) {
        if (libRef.current.form === ev.target) {
            listener(ev);
        }
    });
};
var useWindowResizeListener = function useWindowResizeListener(listener) {
    useListener(window, 'resize', listener);
};
var useFontsLoadedListener = function useFontsLoadedListener(listener) {
    useListener(document.fonts, 'loadingdone', listener);
};
var _excluded = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange"
];
var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
    var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    if (props.style) {
        if ('maxHeight' in props.style) {
            throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
        }
        if ('minHeight' in props.style) {
            throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
        }
    }
    var isControlled = props.value !== undefined;
    var libRef = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$use$2d$composed$2d$ref$2f$dist$2f$use$2d$composed$2d$ref$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(libRef, userRef);
    var heightRef = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    var measurementsCacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var resizeTextarea = function resizeTextarea() {
        var node = libRef.current;
        var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
        if (!nodeSizingData) {
            return;
        }
        measurementsCacheRef.current = nodeSizingData;
        var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
        if (heightRef.current !== height) {
            heightRef.current = height;
            node.style.setProperty('height', height + "px", 'important');
            onHeightChange(height, {
                rowHeight: rowHeight
            });
        }
    };
    var handleChange = function handleChange(event) {
        if (!isControlled) {
            resizeTextarea();
        }
        onChange(event);
    };
    if (isBrowser) {
        __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](resizeTextarea);
        useFormResetListener(libRef, function() {
            if (!isControlled) {
                var currentValue = libRef.current.value;
                requestAnimationFrame(function() {
                    var node = libRef.current;
                    if (node && currentValue !== node.value) {
                        resizeTextarea();
                    }
                });
            }
        });
        useWindowResizeListener(resizeTextarea);
        useFontsLoadedListener(resizeTextarea);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("textarea", (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
            onChange: handleChange,
            ref: ref
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("textarea", (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        onChange: onChange,
        ref: ref
    }));
};
var index = /* #__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](TextareaAutosize);
;
}),
"[project]/study-lms-frontend-app/node_modules/react-hook-form/dist/index.cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var e1 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), t = (e1)=>"checkbox" === e1.type, r = (e1)=>e1 instanceof Date, s = (e1)=>null == e1;
const a = (e1)=>"object" == typeof e1;
var i = (e1)=>!s(e1) && !Array.isArray(e1) && a(e1) && !r(e1), n = (e1)=>i(e1) && e1.target ? t(e1.target) ? e1.target.checked : e1.target.value : e1, o = (e1, t)=>e1.has(((e1)=>e1.substring(0, e1.search(/\.\d+(\.|$)/)) || e1)(t)), l = "undefined" != ("TURBOPACK compile-time value", "undefined") && void 0 !== window.HTMLElement && "undefined" != typeof document;
function u(e1) {
    let t;
    const r = Array.isArray(e1), s = "undefined" != typeof FileList && e1 instanceof FileList;
    if (e1 instanceof Date) t = new Date(e1);
    else {
        if (l && (e1 instanceof Blob || s) || !r && !i(e1)) return e1;
        if (t = r ? [] : Object.create(Object.getPrototypeOf(e1)), r || ((e1)=>{
            const t = e1.constructor && e1.constructor.prototype;
            return i(t) && t.hasOwnProperty("isPrototypeOf");
        })(e1)) for(const r in e1)e1.hasOwnProperty(r) && (t[r] = u(e1[r]));
        else t = e1;
    }
    return t;
}
var d = (e1)=>/^\w*$/.test(e1), c = (e1)=>void 0 === e1, f = (e1)=>Array.isArray(e1) ? e1.filter(Boolean) : [], m = (e1)=>f(e1.replace(/["|']|\]/g, "").split(/\.|\[/)), y = (e1, t, r)=>{
    if (!t || !i(e1)) return r;
    const a = (d(t) ? [
        t
    ] : m(t)).reduce((e1, t)=>s(e1) ? e1 : e1[t], e1);
    return c(a) || a === e1 ? c(e1[t]) ? r : e1[t] : a;
}, _ = (e1)=>"boolean" == typeof e1, p = (e1, t, r)=>{
    let s = -1;
    const a = d(t) ? [
        t
    ] : m(t), n = a.length, o = n - 1;
    for(; ++s < n;){
        const t = a[s];
        let n = r;
        if (s !== o) {
            const r = e1[t];
            n = i(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
        }
        if ("__proto__" === t || "constructor" === t || "prototype" === t) return;
        e1[t] = n, e1 = e1[t];
    }
};
const g = "blur", b = "focusout", h = "change", v = "onBlur", V = "onChange", F = "onSubmit", x = "onTouched", A = "all", S = "max", k = "min", w = "maxLength", D = "minLength", C = "pattern", E = "required", O = "validate", j = e1.createContext(null);
j.displayName = "HookFormContext";
const M = ()=>e1.useContext(j);
var U = (e1, t, r, s = !0)=>{
    const a = {
        defaultValues: t._defaultValues
    };
    for(const i in e1)Object.defineProperty(a, i, {
        get: ()=>{
            const a = i;
            return t._proxyFormState[a] !== A && (t._proxyFormState[a] = !s || A), r && (r[a] = !0), e1[a];
        }
    });
    return a;
};
const R = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : e1.useEffect;
function T(t) {
    const r = M(), { control: s = r.control, disabled: a, name: i, exact: n } = t || {}, [o, l] = e1.useState(s._formState), u = e1.useRef({
        isDirty: !1,
        isLoading: !1,
        dirtyFields: !1,
        touchedFields: !1,
        validatingFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    });
    return R(()=>s._subscribe({
            name: i,
            formState: u.current,
            exact: n,
            callback: (e1)=>{
                !a && l({
                    ...s._formState,
                    ...e1
                });
            }
        }), [
        i,
        a,
        n
    ]), e1.useEffect(()=>{
        u.current.isValid && s._setValid(!0);
    }, [
        s
    ]), e1.useMemo(()=>U(o, s, u.current, !1), [
        o,
        s
    ]);
}
var N = (e1)=>"string" == typeof e1, B = (e1, t, r, s, a)=>N(e1) ? (s && t.watch.add(e1), y(r, e1, a)) : Array.isArray(e1) ? e1.map((e1)=>(s && t.watch.add(e1), y(r, e1))) : (s && (t.watchAll = !0), r), L = (e1)=>s(e1) || !a(e1);
function P(e1, t, s = new WeakSet) {
    if (L(e1) || L(t)) return Object.is(e1, t);
    if (r(e1) && r(t)) return e1.getTime() === t.getTime();
    const a = Object.keys(e1), n = Object.keys(t);
    if (a.length !== n.length) return !1;
    if (s.has(e1) || s.has(t)) return !0;
    s.add(e1), s.add(t);
    for (const o of a){
        const a = e1[o];
        if (!n.includes(o)) return !1;
        if ("ref" !== o) {
            const e1 = t[o];
            if (r(a) && r(e1) || i(a) && i(e1) || Array.isArray(a) && Array.isArray(e1) ? !P(a, e1, s) : !Object.is(a, e1)) return !1;
        }
    }
    return !0;
}
function I(t) {
    const r = M(), { control: s = r.control, name: a, defaultValue: i, disabled: n, exact: o, compute: l } = t || {}, u = e1.useRef(i), d = e1.useRef(l), c = e1.useRef(void 0), f = e1.useRef(s), m = e1.useRef(a);
    d.current = l;
    const [y, _] = e1.useState(()=>{
        const e1 = s._getWatch(a, u.current);
        return d.current ? d.current(e1) : e1;
    }), p = e1.useCallback((e1)=>{
        const t = B(a, s._names, e1 || s._formValues, !1, u.current);
        return d.current ? d.current(t) : t;
    }, [
        s._formValues,
        s._names,
        a
    ]), g = e1.useCallback((e1)=>{
        if (!n) {
            const t = B(a, s._names, e1 || s._formValues, !1, u.current);
            if (d.current) {
                const e1 = d.current(t);
                P(e1, c.current) || (_(e1), c.current = e1);
            } else _(t);
        }
    }, [
        s._formValues,
        s._names,
        n,
        a
    ]);
    R(()=>(f.current === s && P(m.current, a) || (f.current = s, m.current = a, g()), s._subscribe({
            name: a,
            formState: {
                values: !0
            },
            exact: o,
            callback: (e1)=>{
                g(e1.values);
            }
        })), [
        s,
        o,
        a,
        g
    ]), e1.useEffect(()=>s._removeUnmounted());
    const b = f.current !== s, h = m.current, v = e1.useMemo(()=>{
        if (n) return null;
        const e1 = !b && !P(h, a);
        return b || e1 ? p() : null;
    }, [
        n,
        b,
        a,
        h,
        p
    ]);
    return null !== v ? v : y;
}
function W(t) {
    const r = M(), { name: s, disabled: a, control: i = r.control, shouldUnregister: l, defaultValue: d } = t, f = o(i._names.array, s), m = e1.useMemo(()=>y(i._formValues, s, y(i._defaultValues, s, d)), [
        i,
        s,
        d
    ]), b = I({
        control: i,
        name: s,
        defaultValue: m,
        exact: !0
    }), v = T({
        control: i,
        name: s,
        exact: !0
    }), V = e1.useRef(t), F = e1.useRef(void 0), x = e1.useRef(i.register(s, {
        ...t.rules,
        value: b,
        ..._(t.disabled) ? {
            disabled: t.disabled
        } : {}
    }));
    V.current = t;
    const A = e1.useMemo(()=>Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: ()=>!!y(v.errors, s)
            },
            isDirty: {
                enumerable: !0,
                get: ()=>!!y(v.dirtyFields, s)
            },
            isTouched: {
                enumerable: !0,
                get: ()=>!!y(v.touchedFields, s)
            },
            isValidating: {
                enumerable: !0,
                get: ()=>!!y(v.validatingFields, s)
            },
            error: {
                enumerable: !0,
                get: ()=>y(v.errors, s)
            }
        }), [
        v,
        s
    ]), S = e1.useCallback((e1)=>x.current.onChange({
            target: {
                value: n(e1),
                name: s
            },
            type: h
        }), [
        s
    ]), k = e1.useCallback(()=>x.current.onBlur({
            target: {
                value: y(i._formValues, s),
                name: s
            },
            type: g
        }), [
        s,
        i._formValues
    ]), w = e1.useCallback((e1)=>{
        const t = y(i._fields, s);
        t && e1 && (t._f.ref = {
            focus: ()=>e1.focus && e1.focus(),
            select: ()=>e1.select && e1.select(),
            setCustomValidity: (t)=>e1.setCustomValidity(t),
            reportValidity: ()=>e1.reportValidity()
        });
    }, [
        i._fields,
        s
    ]), D = e1.useMemo(()=>({
            name: s,
            value: b,
            ..._(a) || v.disabled ? {
                disabled: v.disabled || a
            } : {},
            onChange: S,
            onBlur: k,
            ref: w
        }), [
        s,
        a,
        v.disabled,
        S,
        k,
        w,
        b
    ]);
    return e1.useEffect(()=>{
        const e1 = i._options.shouldUnregister || l, t = F.current;
        t && t !== s && !f && i.unregister(t), i.register(s, {
            ...V.current.rules,
            ..._(V.current.disabled) ? {
                disabled: V.current.disabled
            } : {}
        });
        const r = (e1, t)=>{
            const r = y(i._fields, e1);
            r && r._f && (r._f.mount = t);
        };
        if (r(s, !0), e1) {
            const e1 = u(y(i._options.defaultValues, s, V.current.defaultValue));
            p(i._defaultValues, s, e1), c(y(i._formValues, s)) && p(i._formValues, s, e1);
        }
        return !f && i.register(s), F.current = s, ()=>{
            (f ? e1 && !i._state.action : e1) ? i.unregister(s) : r(s, !1);
        };
    }, [
        s,
        i,
        f,
        l
    ]), e1.useEffect(()=>{
        i._setDisabledField({
            disabled: a,
            name: s
        });
    }, [
        a,
        s,
        i
    ]), e1.useMemo(()=>({
            field: D,
            formState: v,
            fieldState: A
        }), [
        D,
        v,
        A
    ]);
}
const q = (e1)=>{
    const t = {};
    for (const r of Object.keys(e1))if (a(e1[r]) && null !== e1[r]) {
        const s = q(e1[r]);
        for (const e1 of Object.keys(s))t[`${r}.${e1}`] = s[e1];
    } else t[r] = e1[r];
    return t;
}, $ = "post";
var H = (e1, t, r, s, a)=>t ? {
        ...r[e1],
        types: {
            ...r[e1] && r[e1].types ? r[e1].types : {},
            [s]: a || !0
        }
    } : {}, J = (e1)=>Array.isArray(e1) ? e1 : [
        e1
    ], z = ()=>{
    let e1 = [];
    return {
        get observers () {
            return e1;
        },
        next: (t)=>{
            for (const r of e1)r.next && r.next(t);
        },
        subscribe: (t)=>(e1.push(t), {
                unsubscribe: ()=>{
                    e1 = e1.filter((e1)=>e1 !== t);
                }
            }),
        unsubscribe: ()=>{
            e1 = [];
        }
    };
};
function G(e1, t) {
    const r = {};
    for(const s in e1)if (e1.hasOwnProperty(s)) {
        const a = e1[s], n = t[s];
        if (a && i(a) && n) {
            const e1 = G(a, n);
            i(e1) && (r[s] = e1);
        } else e1[s] && (r[s] = n);
    }
    return r;
}
var K = (e1)=>i(e1) && !Object.keys(e1).length, Q = (e1)=>"file" === e1.type, X = (e1)=>"function" == typeof e1, Y = (e1)=>{
    if ("TURBOPACK compile-time truthy", 1) return !1;
    //TURBOPACK unreachable
    ;
    const t = undefined;
}, Z = (e1)=>"select-multiple" === e1.type, ee = (e1)=>"radio" === e1.type, te = (e1)=>Y(e1) && e1.isConnected;
function re(e1, t) {
    const r = Array.isArray(t) ? t : d(t) ? [
        t
    ] : m(t), s = 1 === r.length ? e1 : function(e1, t) {
        const r = t.slice(0, -1).length;
        let s = 0;
        for(; s < r;)e1 = c(e1) ? s++ : e1[t[s++]];
        return e1;
    }(e1, r), a = r.length - 1, n = r[a];
    return s && delete s[n], 0 !== a && (i(s) && K(s) || Array.isArray(s) && function(e1) {
        for(const t in e1)if (e1.hasOwnProperty(t) && !c(e1[t])) return !1;
        return !0;
    }(s)) && re(e1, r.slice(0, -1)), e1;
}
function se(e1) {
    return Array.isArray(e1) || i(e1) && !((e1)=>{
        for(const t in e1)if (X(e1[t])) return !0;
        return !1;
    })(e1);
}
function ae(e1, t = {}) {
    for(const r in e1){
        const s = e1[r];
        se(s) ? (t[r] = Array.isArray(s) ? [] : {}, ae(s, t[r])) : c(s) || (t[r] = !0);
    }
    return t;
}
function ie(e1, t, r) {
    r || (r = ae(t));
    for(const a in e1){
        const i = e1[a];
        if (se(i)) c(t) || L(r[a]) ? r[a] = ae(i, Array.isArray(i) ? [] : {}) : ie(i, s(t) ? {} : t[a], r[a]);
        else {
            const e1 = t[a];
            r[a] = !P(i, e1);
        }
    }
    return r;
}
const ne = {
    value: !1,
    isValid: !1
}, oe = {
    value: !0,
    isValid: !0
};
var le = (e1)=>{
    if (Array.isArray(e1)) {
        if (e1.length > 1) {
            const t = e1.filter((e1)=>e1 && e1.checked && !e1.disabled).map((e1)=>e1.value);
            return {
                value: t,
                isValid: !!t.length
            };
        }
        return e1[0].checked && !e1[0].disabled ? e1[0].attributes && !c(e1[0].attributes.value) ? c(e1[0].value) || "" === e1[0].value ? oe : {
            value: e1[0].value,
            isValid: !0
        } : oe : ne;
    }
    return ne;
}, ue = (e1, { valueAsNumber: t, valueAsDate: r, setValueAs: s })=>c(e1) ? e1 : t ? "" === e1 ? NaN : e1 ? +e1 : e1 : r && N(e1) ? new Date(e1) : s ? s(e1) : e1;
const de = {
    isValid: !1,
    value: null
};
var ce = (e1)=>Array.isArray(e1) ? e1.reduce((e1, t)=>t && t.checked && !t.disabled ? {
            isValid: !0,
            value: t.value
        } : e1, de) : de;
function fe(e1) {
    const r = e1.ref;
    return Q(r) ? r.files : ee(r) ? ce(e1.refs).value : Z(r) ? [
        ...r.selectedOptions
    ].map(({ value: e1 })=>e1) : t(r) ? le(e1.refs).value : ue(c(r.value) ? e1.ref.value : r.value, e1);
}
var me = (e1)=>e1 instanceof RegExp, ye = (e1)=>c(e1) ? e1 : me(e1) ? e1.source : i(e1) ? me(e1.value) ? e1.value.source : e1.value : e1, _e = (e1)=>({
        isOnSubmit: !e1 || e1 === F,
        isOnBlur: e1 === v,
        isOnChange: e1 === V,
        isOnAll: e1 === A,
        isOnTouch: e1 === x
    });
const pe = "AsyncFunction";
var ge = (e1)=>!!e1 && !!e1.validate && !!(X(e1.validate) && e1.validate.constructor.name === pe || i(e1.validate) && Object.values(e1.validate).find((e1)=>e1.constructor.name === pe)), be = (e1, t, r)=>!r && (t.watchAll || t.watch.has(e1) || [
        ...t.watch
    ].some((t)=>e1.startsWith(t) && /^\.\w+/.test(e1.slice(t.length))));
const he = (e1, t, r, s)=>{
    for (const a of r || Object.keys(e1)){
        const r = y(e1, a);
        if (r) {
            const { _f: e1, ...n } = r;
            if (e1) {
                if (e1.refs && e1.refs[0] && t(e1.refs[0], a) && !s) return !0;
                if (e1.ref && t(e1.ref, e1.name) && !s) return !0;
                if (he(n, t)) break;
            } else if (i(n) && he(n, t)) break;
        }
    }
};
function ve(e1, t, r) {
    const s = y(e1, r);
    if (s || d(r)) return {
        error: s,
        name: r
    };
    const a = r.split(".");
    for(; a.length;){
        const s = a.join("."), i = y(t, s), n = y(e1, s);
        if (i && !Array.isArray(i) && r !== s) return {
            name: r
        };
        if (n && n.type) return {
            name: s,
            error: n
        };
        if (n && n.root && n.root.type) return {
            name: `${s}.root`,
            error: n.root
        };
        a.pop();
    }
    return {
        name: r
    };
}
var Ve = (e1, t, r)=>{
    const s = J(y(e1, r));
    return p(s, "root", t[r]), p(e1, r, s), e1;
};
function Fe(e1, t, r = "validate") {
    if (N(e1) || Array.isArray(e1) && e1.every(N) || _(e1) && !e1) return {
        type: r,
        message: N(e1) ? e1 : "",
        ref: t
    };
}
var xe = (e1)=>i(e1) && !me(e1) ? e1 : {
        value: e1,
        message: ""
    }, Ae = async (e1, r, a, n, o, l)=>{
    const { ref: u, refs: d, required: f, maxLength: m, minLength: p, min: g, max: b, pattern: h, validate: v, name: V, valueAsNumber: F, mount: x } = e1._f, A = y(a, V);
    if (!x || r.has(V)) return {};
    const j = d ? d[0] : u, M = (e1)=>{
        o && j.reportValidity && (j.setCustomValidity(_(e1) ? "" : e1 || ""), j.reportValidity());
    }, U = {}, R = ee(u), T = t(u), B = R || T, L = (F || Q(u)) && c(u.value) && c(A) || Y(u) && "" === u.value || "" === A || Array.isArray(A) && !A.length, P = H.bind(null, V, n, U), I = (e1, t, r, s = w, a = D)=>{
        const i = e1 ? t : r;
        U[V] = {
            type: e1 ? s : a,
            message: i,
            ref: u,
            ...P(e1 ? s : a, i)
        };
    };
    if (l ? !Array.isArray(A) || !A.length : f && (!B && (L || s(A)) || _(A) && !A || T && !le(d).isValid || R && !ce(d).isValid)) {
        const { value: e1, message: t } = N(f) ? {
            value: !!f,
            message: f
        } : xe(f);
        if (e1 && (U[V] = {
            type: E,
            message: t,
            ref: j,
            ...P(E, t)
        }, !n)) return M(t), U;
    }
    if (!(L || s(g) && s(b))) {
        let e1, t;
        const r = xe(b), a = xe(g);
        if (s(A) || isNaN(A)) {
            const s = u.valueAsDate || new Date(A), i = (e1)=>new Date((new Date).toDateString() + " " + e1), n = "time" == u.type, o = "week" == u.type;
            N(r.value) && A && (e1 = n ? i(A) > i(r.value) : o ? A > r.value : s > new Date(r.value)), N(a.value) && A && (t = n ? i(A) < i(a.value) : o ? A < a.value : s < new Date(a.value));
        } else {
            const i = u.valueAsNumber || (A ? +A : A);
            s(r.value) || (e1 = i > r.value), s(a.value) || (t = i < a.value);
        }
        if ((e1 || t) && (I(!!e1, r.message, a.message, S, k), !n)) return M(U[V].message), U;
    }
    if ((m || p) && !L && (N(A) || l && Array.isArray(A))) {
        const e1 = xe(m), t = xe(p), r = !s(e1.value) && A.length > +e1.value, a = !s(t.value) && A.length < +t.value;
        if ((r || a) && (I(r, e1.message, t.message), !n)) return M(U[V].message), U;
    }
    if (h && !L && N(A)) {
        const { value: e1, message: t } = xe(h);
        if (me(e1) && !A.match(e1) && (U[V] = {
            type: C,
            message: t,
            ref: u,
            ...P(C, t)
        }, !n)) return M(t), U;
    }
    if (v) {
        if (X(v)) {
            const e1 = Fe(await v(A, a), j);
            if (e1 && (U[V] = {
                ...e1,
                ...P(O, e1.message)
            }, !n)) return M(e1.message), U;
        } else if (i(v)) {
            let e1 = {};
            for(const t in v){
                if (!K(e1) && !n) break;
                const r = Fe(await v[t](A, a), j, t);
                r && (e1 = {
                    ...r,
                    ...P(t, r.message)
                }, M(r.message), n && (U[V] = e1));
            }
            if (!K(e1) && (U[V] = {
                ref: j,
                ...e1
            }, !n)) return U;
        }
    }
    return M(!0), U;
};
const Se = {
    mode: F,
    reValidateMode: V,
    shouldFocusError: !0
};
function ke(e1 = {}) {
    let a, d = {
        ...Se,
        ...e1
    }, m = {
        submitCount: 0,
        isDirty: !1,
        isReady: !1,
        isLoading: X(d.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: d.errors || {},
        disabled: d.disabled || !1
    }, h = {}, v = (i(d.defaultValues) || i(d.values)) && u(d.defaultValues || d.values) || {}, V = d.shouldUnregister ? {} : u(v), F = {
        action: !1,
        mount: !1,
        watch: !1
    }, x = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, S = 0;
    const k = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let w = {
        ...k
    };
    const D = {
        array: z(),
        state: z()
    }, C = d.criteriaMode === A, E = async (e1)=>{
        if (!d.disabled && (k.isValid || w.isValid || e1)) {
            const e1 = d.resolver ? K((await R()).errors) : await T(h, !0);
            e1 !== m.isValid && D.state.next({
                isValid: e1
            });
        }
    }, O = (e1, t)=>{
        !d.disabled && (k.isValidating || k.validatingFields || w.isValidating || w.validatingFields) && ((e1 || Array.from(x.mount)).forEach((e1)=>{
            e1 && (t ? p(m.validatingFields, e1, t) : re(m.validatingFields, e1));
        }), D.state.next({
            validatingFields: m.validatingFields,
            isValidating: !K(m.validatingFields)
        }));
    }, j = (e1, t, r, s)=>{
        const a = y(h, e1);
        if (a) {
            const i = y(V, e1, c(r) ? y(v, e1) : r);
            c(i) || s && s.defaultChecked || t ? p(V, e1, t ? i : fe(a._f)) : W(e1, i), F.mount && !F.action && E();
        }
    }, M = (e1, t, r, s, a)=>{
        let i = !1, n = !1;
        const o = {
            name: e1
        };
        if (!d.disabled) {
            if (!r || s) {
                (k.isDirty || w.isDirty) && (n = m.isDirty, m.isDirty = o.isDirty = L(), i = n !== o.isDirty);
                const r = P(y(v, e1), t);
                n = !!y(m.dirtyFields, e1), r ? re(m.dirtyFields, e1) : p(m.dirtyFields, e1, !0), o.dirtyFields = m.dirtyFields, i = i || (k.dirtyFields || w.dirtyFields) && n !== !r;
            }
            if (r) {
                const t = y(m.touchedFields, e1);
                t || (p(m.touchedFields, e1, r), o.touchedFields = m.touchedFields, i = i || (k.touchedFields || w.touchedFields) && t !== r);
            }
            i && a && D.state.next(o);
        }
        return i ? o : {};
    }, U = (e1, t, r, s)=>{
        const i = y(m.errors, e1), n = (k.isValid || w.isValid) && _(t) && m.isValid !== t;
        var o;
        if (d.delayError && r ? (o = ()=>((e1, t)=>{
                p(m.errors, e1, t), D.state.next({
                    errors: m.errors
                });
            })(e1, r), a = (e1)=>{
            clearTimeout(S), S = setTimeout(o, e1);
        }, a(d.delayError)) : (clearTimeout(S), a = null, r ? p(m.errors, e1, r) : re(m.errors, e1)), (r ? !P(i, r) : i) || !K(s) || n) {
            const r = {
                ...s,
                ...n && _(t) ? {
                    isValid: t
                } : {},
                errors: m.errors,
                name: e1
            };
            m = {
                ...m,
                ...r
            }, D.state.next(r);
        }
    }, R = async (e1)=>{
        O(e1, !0);
        const t = await d.resolver(V, d.context, ((e1, t, r, s)=>{
            const a = {};
            for (const r of e1){
                const e1 = y(t, r);
                e1 && p(a, r, e1._f);
            }
            return {
                criteriaMode: r,
                names: [
                    ...e1
                ],
                fields: a,
                shouldUseNativeValidation: s
            };
        })(e1 || x.mount, h, d.criteriaMode, d.shouldUseNativeValidation));
        return O(e1), t;
    }, T = async (e1, t, r = {
        valid: !0
    })=>{
        for(const s in e1){
            const a = e1[s];
            if (a) {
                const { _f: e1, ...s } = a;
                if (e1) {
                    const s = x.array.has(e1.name), i = a._f && ge(a._f);
                    i && k.validatingFields && O([
                        e1.name
                    ], !0);
                    const n = await Ae(a, x.disabled, V, C, d.shouldUseNativeValidation && !t, s);
                    if (i && k.validatingFields && O([
                        e1.name
                    ]), n[e1.name] && (r.valid = !1, t)) break;
                    !t && (y(n, e1.name) ? s ? Ve(m.errors, n, e1.name) : p(m.errors, e1.name, n[e1.name]) : re(m.errors, e1.name));
                }
                !K(s) && await T(s, t, r);
            }
        }
        return r.valid;
    }, L = (e1, t)=>!d.disabled && (e1 && t && p(V, e1, t), !P(ne(), v)), I = (e1, t, r)=>B(e1, x, {
            ...F.mount ? V : c(t) ? v : N(e1) ? {
                [e1]: t
            } : t
        }, r, t), W = (e1, r, a = {})=>{
        const i = y(h, e1);
        let n = r;
        if (i) {
            const a = i._f;
            a && (!a.disabled && p(V, e1, ue(r, a)), n = Y(a.ref) && s(r) ? "" : r, Z(a.ref) ? [
                ...a.ref.options
            ].forEach((e1)=>e1.selected = n.includes(e1.value)) : a.refs ? t(a.ref) ? a.refs.forEach((e1)=>{
                e1.defaultChecked && e1.disabled || (Array.isArray(n) ? e1.checked = !!n.find((t)=>t === e1.value) : e1.checked = n === e1.value || !!n);
            }) : a.refs.forEach((e1)=>e1.checked = e1.value === n) : Q(a.ref) ? a.ref.value = "" : (a.ref.value = n, a.ref.type || D.state.next({
                name: e1,
                values: u(V)
            })));
        }
        (a.shouldDirty || a.shouldTouch) && M(e1, n, a.shouldTouch, a.shouldDirty, !0), a.shouldValidate && ae(e1);
    }, q = (e1, t, s)=>{
        for(const a in t){
            if (!t.hasOwnProperty(a)) return;
            const n = t[a], o = e1 + "." + a, l = y(h, o);
            (x.array.has(e1) || i(n) || l && !l._f) && !r(n) ? q(o, n, s) : W(o, n, s);
        }
    }, $ = (e1, t, r = {})=>{
        const a = y(h, e1), i = x.array.has(e1), n = u(t);
        p(V, e1, n), i ? (D.array.next({
            name: e1,
            values: u(V)
        }), (k.isDirty || k.dirtyFields || w.isDirty || w.dirtyFields) && r.shouldDirty && D.state.next({
            name: e1,
            dirtyFields: ie(v, V),
            isDirty: L(e1, n)
        })) : !a || a._f || s(n) ? W(e1, n, r) : q(e1, n, r), be(e1, x) && D.state.next({
            ...m,
            name: e1
        }), D.state.next({
            name: F.mount ? e1 : void 0,
            values: u(V)
        });
    }, H = async (e1)=>{
        F.mount = !0;
        const t = e1.target;
        let s = t.name, i = !0;
        const o = y(h, s), l = (e1)=>{
            i = Number.isNaN(e1) || r(e1) && isNaN(e1.getTime()) || P(e1, y(V, s, e1));
        }, c = _e(d.mode), f = _e(d.reValidateMode);
        if (o) {
            let r, v;
            const F = t.type ? fe(o._f) : n(e1), A = e1.type === g || e1.type === b, S = !((_ = o._f).mount && (_.required || _.min || _.max || _.maxLength || _.minLength || _.pattern || _.validate) || d.resolver || y(m.errors, s) || o._f.deps) || ((e1, t, r, s, a)=>!a.isOnAll && (!r && a.isOnTouch ? !(t || e1) : (r ? s.isOnBlur : a.isOnBlur) ? !e1 : !(r ? s.isOnChange : a.isOnChange) || e1))(A, y(m.touchedFields, s), m.isSubmitted, f, c), j = be(s, x, A);
            p(V, s, F), A ? t && t.readOnly || (o._f.onBlur && o._f.onBlur(e1), a && a(0)) : o._f.onChange && o._f.onChange(e1);
            const N = M(s, F, A), B = !K(N) || j;
            if (!A && D.state.next({
                name: s,
                type: e1.type,
                values: u(V)
            }), S) return (k.isValid || w.isValid) && ("onBlur" === d.mode ? A && E() : A || E()), B && D.state.next({
                name: s,
                ...j ? {} : N
            });
            if (!A && j && D.state.next({
                ...m
            }), d.resolver) {
                const { errors: e1 } = await R([
                    s
                ]);
                if (l(F), i) {
                    const t = ve(m.errors, h, s), a = ve(e1, h, t.name || s);
                    r = a.error, s = a.name, v = K(e1);
                }
            } else O([
                s
            ], !0), r = (await Ae(o, x.disabled, V, C, d.shouldUseNativeValidation))[s], O([
                s
            ]), l(F), i && (r ? v = !1 : (k.isValid || w.isValid) && (v = await T(h, !0)));
            i && (o._f.deps && (!Array.isArray(o._f.deps) || o._f.deps.length > 0) && ae(o._f.deps), U(s, v, r, N));
        }
        var _;
    }, se = (e1, t)=>{
        if (y(m.errors, t) && e1.focus) return e1.focus(), 1;
    }, ae = async (e1, t = {})=>{
        let r, s;
        const a = J(e1);
        if (d.resolver) {
            const t = await (async (e1)=>{
                const { errors: t } = await R(e1);
                if (e1) for (const r of e1){
                    const e1 = y(t, r);
                    e1 ? p(m.errors, r, e1) : re(m.errors, r);
                }
                else m.errors = t;
                return t;
            })(c(e1) ? e1 : a);
            r = K(t), s = e1 ? !a.some((e1)=>y(t, e1)) : r;
        } else e1 ? (s = (await Promise.all(a.map(async (e1)=>{
            const t = y(h, e1);
            return await T(t && t._f ? {
                [e1]: t
            } : t);
        }))).every(Boolean), (s || m.isValid) && E()) : s = r = await T(h);
        return D.state.next({
            ...!N(e1) || (k.isValid || w.isValid) && r !== m.isValid ? {} : {
                name: e1
            },
            ...d.resolver || !e1 ? {
                isValid: r
            } : {},
            errors: m.errors
        }), t.shouldFocus && !s && he(h, se, e1 ? a : x.mount), s;
    }, ne = (e1, t)=>{
        let r = {
            ...F.mount ? V : v
        };
        return t && (r = G(t.dirtyFields ? m.dirtyFields : m.touchedFields, r)), c(e1) ? r : N(e1) ? y(r, e1) : e1.map((e1)=>y(r, e1));
    }, oe = (e1, t)=>({
            invalid: !!y((t || m).errors, e1),
            isDirty: !!y((t || m).dirtyFields, e1),
            error: y((t || m).errors, e1),
            isValidating: !!y(m.validatingFields, e1),
            isTouched: !!y((t || m).touchedFields, e1)
        }), le = (e1, t, r)=>{
        const s = (y(h, e1, {
            _f: {}
        })._f || {}).ref, a = y(m.errors, e1) || {}, { ref: i, message: n, type: o, ...l } = a;
        p(m.errors, e1, {
            ...l,
            ...t,
            ref: s
        }), D.state.next({
            name: e1,
            errors: m.errors,
            isValid: !1
        }), r && r.shouldFocus && s && s.focus && s.focus();
    }, de = (e1)=>D.state.subscribe({
            next: (t)=>{
                var r, s, a;
                r = e1.name, s = t.name, a = e1.exact, r && s && r !== s && !J(r).some((e1)=>e1 && (a ? e1 === s : e1.startsWith(s) || s.startsWith(e1))) || !((e1, t, r, s)=>{
                    r(e1);
                    const { name: a, ...i } = e1;
                    return K(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e1)=>t[e1] === (!s || A));
                })(t, e1.formState || k, De, e1.reRenderRoot) || e1.callback({
                    values: {
                        ...V
                    },
                    ...m,
                    ...t,
                    defaultValues: v
                });
            }
        }).unsubscribe, ce = (e1, t = {})=>{
        for (const r of e1 ? J(e1) : x.mount)x.mount.delete(r), x.array.delete(r), t.keepValue || (re(h, r), re(V, r)), !t.keepError && re(m.errors, r), !t.keepDirty && re(m.dirtyFields, r), !t.keepTouched && re(m.touchedFields, r), !t.keepIsValidating && re(m.validatingFields, r), !d.shouldUnregister && !t.keepDefaultValue && re(v, r);
        D.state.next({
            values: u(V)
        }), D.state.next({
            ...m,
            ...t.keepDirty ? {
                isDirty: L()
            } : {}
        }), !t.keepIsValid && E();
    }, me = ({ disabled: e1, name: t })=>{
        (_(e1) && F.mount || e1 || x.disabled.has(t)) && (e1 ? x.disabled.add(t) : x.disabled.delete(t));
    }, pe = (e1, r = {})=>{
        let s = y(h, e1);
        const a = _(r.disabled) || _(d.disabled);
        return p(h, e1, {
            ...s || {},
            _f: {
                ...s && s._f ? s._f : {
                    ref: {
                        name: e1
                    }
                },
                name: e1,
                mount: !0,
                ...r
            }
        }), x.mount.add(e1), s ? me({
            disabled: _(r.disabled) ? r.disabled : d.disabled,
            name: e1
        }) : j(e1, !0, r.value), {
            ...a ? {
                disabled: r.disabled || d.disabled
            } : {},
            ...d.progressive ? {
                required: !!r.required,
                min: ye(r.min),
                max: ye(r.max),
                minLength: ye(r.minLength),
                maxLength: ye(r.maxLength),
                pattern: ye(r.pattern)
            } : {},
            name: e1,
            onChange: H,
            onBlur: H,
            ref: (a)=>{
                if (a) {
                    pe(e1, r), s = y(h, e1);
                    const i = c(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0] || a, n = ((e1)=>ee(e1) || t(e1))(i), o = s._f.refs || [];
                    if (n ? o.find((e1)=>e1 === i) : i === s._f.ref) return;
                    p(h, e1, {
                        _f: {
                            ...s._f,
                            ...n ? {
                                refs: [
                                    ...o.filter(te),
                                    i,
                                    ...Array.isArray(y(v, e1)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: i.type,
                                    name: e1
                                }
                            } : {
                                ref: i
                            }
                        }
                    }), j(e1, !1, void 0, i);
                } else s = y(h, e1, {}), s._f && (s._f.mount = !1), (d.shouldUnregister || r.shouldUnregister) && (!o(x.array, e1) || !F.action) && x.unMount.add(e1);
            }
        };
    }, Fe = ()=>d.shouldFocusError && he(h, se, x.mount), xe = (e1, t)=>async (r)=>{
            let s;
            r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
            let a = u(V);
            if (D.state.next({
                isSubmitting: !0
            }), d.resolver) {
                const { errors: e1, values: t } = await R();
                m.errors = e1, a = u(t);
            } else await T(h);
            if (x.disabled.size) for (const e1 of x.disabled)re(a, e1);
            if (re(m.errors, "root"), K(m.errors)) {
                D.state.next({
                    errors: {}
                });
                try {
                    await e1(a, r);
                } catch (e1) {
                    s = e1;
                }
            } else t && await t({
                ...m.errors
            }, r), Fe(), setTimeout(Fe);
            if (D.state.next({
                isSubmitted: !0,
                isSubmitting: !1,
                isSubmitSuccessful: K(m.errors) && !s,
                submitCount: m.submitCount + 1,
                errors: m.errors
            }), s) throw s;
        }, ke1 = (e1, t = {})=>{
        const r = e1 ? u(e1) : v, s = u(r), a = K(e1), i = a ? v : s;
        if (t.keepDefaultValues || (v = r), !t.keepValues) {
            if (t.keepDirtyValues) {
                const e1 = new Set([
                    ...x.mount,
                    ...Object.keys(ie(v, V))
                ]);
                for (const t of Array.from(e1))y(m.dirtyFields, t) ? p(i, t, y(V, t)) : $(t, y(i, t));
            } else {
                if (l && c(e1)) //TURBOPACK unreachable
                {
                    const e1 = undefined;
                }
                if (t.keepFieldsRef) for (const e1 of x.mount)$(e1, y(i, e1));
                else h = {};
            }
            V = d.shouldUnregister ? t.keepDefaultValues ? u(v) : {} : u(i), D.array.next({
                values: {
                    ...i
                }
            }), D.state.next({
                values: {
                    ...i
                }
            });
        }
        x = {
            mount: t.keepDirtyValues ? x.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        }, F.mount = !k.isValid || !!t.keepIsValid || !!t.keepDirtyValues || !d.shouldUnregister && !K(i), F.watch = !!d.shouldUnregister, D.state.next({
            submitCount: t.keepSubmitCount ? m.submitCount : 0,
            isDirty: !a && (t.keepDirty ? m.isDirty : !(!t.keepDefaultValues || P(e1, v))),
            isSubmitted: !!t.keepIsSubmitted && m.isSubmitted,
            dirtyFields: a ? {} : t.keepDirtyValues ? t.keepDefaultValues && V ? ie(v, V) : m.dirtyFields : t.keepDefaultValues && e1 ? ie(v, e1) : t.keepDirty ? m.dirtyFields : {},
            touchedFields: t.keepTouched ? m.touchedFields : {},
            errors: t.keepErrors ? m.errors : {},
            isSubmitSuccessful: !!t.keepIsSubmitSuccessful && m.isSubmitSuccessful,
            isSubmitting: !1,
            defaultValues: v
        });
    }, we = (e1, t)=>ke1(X(e1) ? e1(V) : e1, t), De = (e1)=>{
        m = {
            ...m,
            ...e1
        };
    }, Ce = {
        control: {
            register: pe,
            unregister: ce,
            getFieldState: oe,
            handleSubmit: xe,
            setError: le,
            _subscribe: de,
            _runSchema: R,
            _focusError: Fe,
            _getWatch: I,
            _getDirty: L,
            _setValid: E,
            _setFieldArray: (e1, t = [], r, s, a = !0, i = !0)=>{
                if (s && r && !d.disabled) {
                    if (F.action = !0, i && Array.isArray(y(h, e1))) {
                        const t = r(y(h, e1), s.argA, s.argB);
                        a && p(h, e1, t);
                    }
                    if (i && Array.isArray(y(m.errors, e1))) {
                        const t = r(y(m.errors, e1), s.argA, s.argB);
                        a && p(m.errors, e1, t), ((e1, t)=>{
                            !f(y(e1, t)).length && re(e1, t);
                        })(m.errors, e1);
                    }
                    if ((k.touchedFields || w.touchedFields) && i && Array.isArray(y(m.touchedFields, e1))) {
                        const t = r(y(m.touchedFields, e1), s.argA, s.argB);
                        a && p(m.touchedFields, e1, t);
                    }
                    (k.dirtyFields || w.dirtyFields) && (m.dirtyFields = ie(v, V)), D.state.next({
                        name: e1,
                        isDirty: L(e1, t),
                        dirtyFields: m.dirtyFields,
                        errors: m.errors,
                        isValid: m.isValid
                    });
                } else p(V, e1, t);
            },
            _setDisabledField: me,
            _setErrors: (e1)=>{
                m.errors = e1, D.state.next({
                    errors: m.errors,
                    isValid: !1
                });
            },
            _getFieldArray: (e1)=>f(y(F.mount ? V : v, e1, d.shouldUnregister ? y(v, e1, []) : [])),
            _reset: ke1,
            _resetDefaultValues: ()=>X(d.defaultValues) && d.defaultValues().then((e1)=>{
                    we(e1, d.resetOptions), D.state.next({
                        isLoading: !1
                    });
                }),
            _removeUnmounted: ()=>{
                for (const e1 of x.unMount){
                    const t = y(h, e1);
                    t && (t._f.refs ? t._f.refs.every((e1)=>!te(e1)) : !te(t._f.ref)) && ce(e1);
                }
                x.unMount = new Set;
            },
            _disableForm: (e1)=>{
                _(e1) && (D.state.next({
                    disabled: e1
                }), he(h, (t, r)=>{
                    const s = y(h, r);
                    s && (t.disabled = s._f.disabled || e1, Array.isArray(s._f.refs) && s._f.refs.forEach((t)=>{
                        t.disabled = s._f.disabled || e1;
                    }));
                }, 0, !1));
            },
            _subjects: D,
            _proxyFormState: k,
            get _fields () {
                return h;
            },
            get _formValues () {
                return V;
            },
            get _state () {
                return F;
            },
            set _state (e){
                F = e;
            },
            get _defaultValues () {
                return v;
            },
            get _names () {
                return x;
            },
            set _names (e){
                x = e;
            },
            get _formState () {
                return m;
            },
            get _options () {
                return d;
            },
            set _options (e){
                d = {
                    ...d,
                    ...e
                };
            }
        },
        subscribe: (e1)=>(F.mount = !0, w = {
                ...w,
                ...e1.formState
            }, de({
                ...e1,
                formState: w
            })),
        trigger: ae,
        register: pe,
        handleSubmit: xe,
        watch: (e1, t)=>X(e1) ? D.state.subscribe({
                next: (r)=>"values" in r && e1(I(void 0, t), r)
            }) : I(e1, t, !0),
        setValue: $,
        getValues: ne,
        reset: we,
        resetField: (e1, t = {})=>{
            y(h, e1) && (c(t.defaultValue) ? $(e1, u(y(v, e1))) : ($(e1, t.defaultValue), p(v, e1, u(t.defaultValue))), t.keepTouched || re(m.touchedFields, e1), t.keepDirty || (re(m.dirtyFields, e1), m.isDirty = t.defaultValue ? L(e1, u(y(v, e1))) : L()), t.keepError || (re(m.errors, e1), k.isValid && E()), D.state.next({
                ...m
            }));
        },
        clearErrors: (e1)=>{
            e1 && J(e1).forEach((e1)=>re(m.errors, e1)), D.state.next({
                errors: e1 ? m.errors : {}
            });
        },
        unregister: ce,
        setError: le,
        setFocus: (e1, t = {})=>{
            const r = y(h, e1), s = r && r._f;
            if (s) {
                const e1 = s.refs ? s.refs[0] : s.ref;
                e1.focus && (e1.focus(), t.shouldSelect && X(e1.select) && e1.select());
            }
        },
        getFieldState: oe
    };
    return {
        ...Ce,
        formControl: Ce
    };
}
var we = ()=>{
    if ("undefined" != typeof crypto && crypto.randomUUID) return crypto.randomUUID();
    const e1 = "undefined" == typeof performance ? Date.now() : 1e3 * performance.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t)=>{
        const r = (16 * Math.random() + e1) % 16 | 0;
        return ("x" == t ? r : 3 & r | 8).toString(16);
    });
}, De = (e1, t, r = {})=>r.shouldFocus || c(r.shouldFocus) ? r.focusName || `${e1}.${c(r.focusIndex) ? t : r.focusIndex}.` : "", Ce = (e1, t)=>[
        ...e1,
        ...J(t)
    ], Ee = (e1)=>Array.isArray(e1) ? e1.map(()=>{}) : void 0;
function Oe(e1, t, r) {
    return [
        ...e1.slice(0, t),
        ...J(r),
        ...e1.slice(t)
    ];
}
var je = (e1, t, r)=>Array.isArray(e1) ? (c(e1[r]) && (e1[r] = void 0), e1.splice(r, 0, e1.splice(t, 1)[0]), e1) : [], Me = (e1, t)=>[
        ...J(t),
        ...J(e1)
    ];
var Ue = (e1, t)=>c(t) ? [] : function(e1, t) {
        let r = 0;
        const s = [
            ...e1
        ];
        for (const e1 of t)s.splice(e1 - r, 1), r++;
        return f(s).length ? s : [];
    }(e1, J(t).sort((e1, t)=>e1 - t)), Re = (e1, t, r)=>{
    [e1[t], e1[r]] = [
        e1[r],
        e1[t]
    ];
}, Te = (e1, t, r)=>(e1[t] = r, e1);
exports.Controller = (e1)=>e1.render(W(e1)), exports.Form = function(t) {
    const r = M(), [s, a] = e1.useState(!1), { control: i = r.control, onSubmit: n, children: o, action: l, method: u = $, headers: d, encType: c, onError: f, render: m, onSuccess: y, validateStatus: _, ...p } = t, g = async (e1)=>{
        let r = !1, s = "";
        await i.handleSubmit(async (t)=>{
            const a = new FormData;
            let o = "";
            try {
                o = JSON.stringify(t);
            } catch (e1) {}
            const m = q(i._formValues);
            for(const e1 in m)a.append(e1, m[e1]);
            if (n && await n({
                data: t,
                event: e1,
                method: u,
                formData: a,
                formDataJson: o
            }), l) try {
                const e1 = [
                    d && d["Content-Type"],
                    c
                ].some((e1)=>e1 && e1.includes("json")), t = await fetch(String(l), {
                    method: u,
                    headers: {
                        ...d,
                        ...c && "multipart/form-data" !== c ? {
                            "Content-Type": c
                        } : {}
                    },
                    body: e1 ? o : a
                });
                t && (_ ? !_(t.status) : t.status < 200 || t.status >= 300) ? (r = !0, f && f({
                    response: t
                }), s = String(t.status)) : y && y({
                    response: t
                });
            } catch (e1) {
                r = !0, f && f({
                    error: e1
                });
            }
        })(e1), r && t.control && (t.control._subjects.state.next({
            isSubmitSuccessful: !1
        }), t.control.setError("root.server", {
            type: s
        }));
    };
    return e1.useEffect(()=>{
        a(!0);
    }, []), m ? e1.createElement(e1.Fragment, null, m({
        submit: g
    })) : e1.createElement("form", {
        noValidate: s,
        action: l,
        method: u,
        encType: c,
        onSubmit: g,
        ...p
    }, o);
}, exports.FormProvider = (t)=>{
    const { children: r, ...s } = t;
    return e1.createElement(j.Provider, {
        value: s
    }, r);
}, exports.Watch = ({ control: e1, names: t, render: r })=>r(I({
        control: e1,
        name: t
    })), exports.appendErrors = H, exports.createFormControl = ke, exports.get = y, exports.set = p, exports.useController = W, exports.useFieldArray = function(t) {
    const r = M(), { control: s = r.control, name: a, keyName: i = "id", shouldUnregister: n, rules: o } = t, [l, d] = e1.useState(s._getFieldArray(a)), c = e1.useRef(s._getFieldArray(a).map(we)), f = e1.useRef(!1);
    s._names.array.add(a), e1.useMemo(()=>o && l.length >= 0 && s.register(a, o), [
        s,
        a,
        l.length,
        o
    ]), R(()=>s._subjects.array.subscribe({
            next: ({ values: e1, name: t })=>{
                if (t === a || !t) {
                    const t = y(e1, a);
                    Array.isArray(t) && (d(t), c.current = t.map(we));
                }
            }
        }).unsubscribe, [
        s,
        a
    ]);
    const m = e1.useCallback((e1)=>{
        f.current = !0, s._setFieldArray(a, e1);
    }, [
        s,
        a
    ]);
    return e1.useEffect(()=>{
        if (s._state.action = !1, be(a, s._names) && s._subjects.state.next({
            ...s._formState
        }), f.current && (!_e(s._options.mode).isOnSubmit || s._formState.isSubmitted) && !_e(s._options.reValidateMode).isOnSubmit) if (s._options.resolver) s._runSchema([
            a
        ]).then((e1)=>{
            const t = y(e1.errors, a), r = y(s._formState.errors, a);
            (r ? !t && r.type || t && (r.type !== t.type || r.message !== t.message) : t && t.type) && (t ? p(s._formState.errors, a, t) : re(s._formState.errors, a), s._subjects.state.next({
                errors: s._formState.errors
            }));
        });
        else {
            const e1 = y(s._fields, a);
            !e1 || !e1._f || _e(s._options.reValidateMode).isOnSubmit && _e(s._options.mode).isOnSubmit || Ae(e1, s._names.disabled, s._formValues, s._options.criteriaMode === A, s._options.shouldUseNativeValidation, !0).then((e1)=>!K(e1) && s._subjects.state.next({
                    errors: Ve(s._formState.errors, e1, a)
                }));
        }
        s._subjects.state.next({
            name: a,
            values: u(s._formValues)
        }), s._names.focus && he(s._fields, (e1, t)=>{
            if (s._names.focus && t.startsWith(s._names.focus) && e1.focus) return e1.focus(), 1;
        }), s._names.focus = "", s._setValid(), f.current = !1;
    }, [
        l,
        a,
        s
    ]), e1.useEffect(()=>(!y(s._formValues, a) && s._setFieldArray(a), ()=>{
            s._options.shouldUnregister || n ? s.unregister(a) : ((e1, t)=>{
                const r = y(s._fields, e1);
                r && r._f && (r._f.mount = t);
            })(a, !1);
        }), [
        a,
        s,
        i,
        n
    ]), {
        swap: e1.useCallback((e1, t)=>{
            const r = s._getFieldArray(a);
            Re(r, e1, t), Re(c.current, e1, t), m(r), d(r), s._setFieldArray(a, r, Re, {
                argA: e1,
                argB: t
            }, !1);
        }, [
            m,
            a,
            s
        ]),
        move: e1.useCallback((e1, t)=>{
            const r = s._getFieldArray(a);
            je(r, e1, t), je(c.current, e1, t), m(r), d(r), s._setFieldArray(a, r, je, {
                argA: e1,
                argB: t
            }, !1);
        }, [
            m,
            a,
            s
        ]),
        prepend: e1.useCallback((e1, t)=>{
            const r = J(u(e1)), i = Me(s._getFieldArray(a), r);
            s._names.focus = De(a, 0, t), c.current = Me(c.current, r.map(we)), m(i), d(i), s._setFieldArray(a, i, Me, {
                argA: Ee(e1)
            });
        }, [
            m,
            a,
            s
        ]),
        append: e1.useCallback((e1, t)=>{
            const r = J(u(e1)), i = Ce(s._getFieldArray(a), r);
            s._names.focus = De(a, i.length - 1, t), c.current = Ce(c.current, r.map(we)), m(i), d(i), s._setFieldArray(a, i, Ce, {
                argA: Ee(e1)
            });
        }, [
            m,
            a,
            s
        ]),
        remove: e1.useCallback((e1)=>{
            const t = Ue(s._getFieldArray(a), e1);
            c.current = Ue(c.current, e1), m(t), d(t), !Array.isArray(y(s._fields, a)) && p(s._fields, a, void 0), s._setFieldArray(a, t, Ue, {
                argA: e1
            });
        }, [
            m,
            a,
            s
        ]),
        insert: e1.useCallback((e1, t, r)=>{
            const i = J(u(t)), n = Oe(s._getFieldArray(a), e1, i);
            s._names.focus = De(a, e1, r), c.current = Oe(c.current, e1, i.map(we)), m(n), d(n), s._setFieldArray(a, n, Oe, {
                argA: e1,
                argB: Ee(t)
            });
        }, [
            m,
            a,
            s
        ]),
        update: e1.useCallback((e1, t)=>{
            const r = u(t), i = Te(s._getFieldArray(a), e1, r);
            c.current = [
                ...i
            ].map((t, r)=>t && r !== e1 ? c.current[r] : we()), m(i), d([
                ...i
            ]), s._setFieldArray(a, i, Te, {
                argA: e1,
                argB: r
            }, !0, !1);
        }, [
            m,
            a,
            s
        ]),
        replace: e1.useCallback((e1)=>{
            const t = J(u(e1));
            c.current = t.map(we), m([
                ...t
            ]), d([
                ...t
            ]), s._setFieldArray(a, [
                ...t
            ], (e1)=>e1, {}, !0, !1);
        }, [
            m,
            a,
            s
        ]),
        fields: e1.useMemo(()=>l.map((e1, t)=>({
                    ...e1,
                    [i]: c.current[t] || we()
                })), [
            l,
            i
        ])
    };
}, exports.useForm = function(t = {}) {
    const r = e1.useRef(void 0), s = e1.useRef(void 0), [a, i] = e1.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: X(t.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: t.errors || {},
        disabled: t.disabled || !1,
        isReady: !1,
        defaultValues: X(t.defaultValues) ? void 0 : t.defaultValues
    });
    if (!r.current) if (t.formControl) r.current = {
        ...t.formControl,
        formState: a
    }, t.defaultValues && !X(t.defaultValues) && t.formControl.reset(t.defaultValues, t.resetOptions);
    else {
        const { formControl: e1, ...s } = ke(t);
        r.current = {
            ...s,
            formState: a
        };
    }
    const n = r.current.control;
    return n._options = t, R(()=>{
        const e1 = n._subscribe({
            formState: n._proxyFormState,
            callback: ()=>i({
                    ...n._formState
                }),
            reRenderRoot: !0
        });
        return i((e1)=>({
                ...e1,
                isReady: !0
            })), n._formState.isReady = !0, e1;
    }, [
        n
    ]), e1.useEffect(()=>n._disableForm(t.disabled), [
        n,
        t.disabled
    ]), e1.useEffect(()=>{
        t.mode && (n._options.mode = t.mode), t.reValidateMode && (n._options.reValidateMode = t.reValidateMode);
    }, [
        n,
        t.mode,
        t.reValidateMode
    ]), e1.useEffect(()=>{
        t.errors && (n._setErrors(t.errors), n._focusError());
    }, [
        n,
        t.errors
    ]), e1.useEffect(()=>{
        t.shouldUnregister && n._subjects.state.next({
            values: n._getWatch()
        });
    }, [
        n,
        t.shouldUnregister
    ]), e1.useEffect(()=>{
        if (n._proxyFormState.isDirty) {
            const e1 = n._getDirty();
            e1 !== a.isDirty && n._subjects.state.next({
                isDirty: e1
            });
        }
    }, [
        n,
        a.isDirty
    ]), e1.useEffect(()=>{
        var e1;
        t.values && !P(t.values, s.current) ? (n._reset(t.values, {
            keepFieldsRef: !0,
            ...n._options.resetOptions
        }), (null === (e1 = n._options.resetOptions) || void 0 === e1 ? void 0 : e1.keepIsValid) || n._setValid(), s.current = t.values, i((e1)=>({
                ...e1
            }))) : n._resetDefaultValues();
    }, [
        n,
        t.values
    ]), e1.useEffect(()=>{
        n._state.mount || (n._setValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({
            ...n._formState
        })), n._removeUnmounted();
    }), r.current.formState = U(a, n), r.current;
}, exports.useFormContext = M, exports.useFormState = T, exports.useWatch = I; //# sourceMappingURL=index.cjs.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@hookform/resolvers/dist/resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/react-hook-form/dist/index.cjs.js [app-ssr] (ecmascript)"), r = function(r, t, i) {
    if (r && "reportValidity" in r) {
        var s = e.get(i, t);
        r.setCustomValidity(s && s.message || ""), r.reportValidity();
    }
}, t = function(e, t) {
    var i = function(i) {
        var s = t.fields[i];
        s && s.ref && "reportValidity" in s.ref ? r(s.ref, i, e) : s.refs && s.refs.forEach(function(t) {
            return r(t, i, e);
        });
    };
    for(var s in t.fields)i(s);
}, i = function(e, r) {
    return e.some(function(e) {
        return e.startsWith(r + ".");
    });
};
exports.toNestErrors = function(r, s) {
    s.shouldUseNativeValidation && t(r, s);
    var a = {};
    for(var n in r){
        var o = e.get(s.fields, n), f = Object.assign(r[n] || {}, {
            ref: o && o.ref
        });
        if (i(s.names || Object.keys(r), n)) {
            var u = Object.assign({}, e.get(a, n));
            e.set(u, "root", f), e.set(a, n, u);
        } else e.set(a, n, f);
    }
    return a;
}, exports.validateFieldsNatively = t; //# sourceMappingURL=resolvers.js.map
}),
"[project]/study-lms-frontend-app/node_modules/@hookform/resolvers/zod/dist/zod.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var r = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@hookform/resolvers/dist/resolvers.js [app-ssr] (ecmascript)"), e = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/react-hook-form/dist/index.cjs.js [app-ssr] (ecmascript)"), o = function(r, o) {
    for(var n = {}; r.length;){
        var s = r[0], t = s.code, i = s.message, a = s.path.join(".");
        if (!n[a]) if ("unionErrors" in s) {
            var u = s.unionErrors[0].errors[0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: t
        };
        if ("unionErrors" in s && s.unionErrors.forEach(function(e) {
            return e.errors.forEach(function(e) {
                return r.push(e);
            });
        }), o) {
            var c = n[a].types, f = c && c[s.code];
            n[a] = e.appendErrors(a, o, n, t, f ? [].concat(f, s.message) : s.message);
        }
        r.shift();
    }
    return n;
};
exports.zodResolver = function(e, n, s) {
    return void 0 === s && (s = {}), function(t, i, a) {
        try {
            return Promise.resolve(function(o, i) {
                try {
                    var u = Promise.resolve(e["sync" === s.mode ? "parse" : "parseAsync"](t, n)).then(function(e) {
                        return a.shouldUseNativeValidation && r.validateFieldsNatively({}, a), {
                            errors: {},
                            values: s.raw ? t : e
                        };
                    });
                } catch (r) {
                    return i(r);
                }
                return u && u.then ? u.then(void 0, i) : u;
            }(0, function(e) {
                if (function(r) {
                    return Array.isArray(null == r ? void 0 : r.errors);
                }(e)) return {
                    values: {},
                    errors: r.toNestErrors(o(e.errors, !a.shouldUseNativeValidation && "all" === a.criteriaMode), a)
                };
                throw e;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
}; //# sourceMappingURL=zod.js.map
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/max.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16);
    // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff;
    // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff;
    // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff;
    // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff;
    // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq;
// Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node;
    let clockseq = options.clockseq;
    // v1 only: Use cached `node` and `clockseq` values
    if (!options._v6) {
        if (!node) {
            node = _nodeId;
        }
        if (clockseq == null) {
            clockseq = _clockseq;
        }
    }
    // Handle cases where we need entropy.  We do this lazily to minimize issues
    // related to insufficient system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        // Randomize node
        if (node == null) {
            node = [
                seedBytes[0],
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
            // v1 only: cache node value for reuse
            if (!_nodeId && !options._v6) {
                // per RFC4122 4.5: Set MAC multicast bit (v1 only)
                node[0] |= 0x01; // Set multicast bit
                _nodeId = node;
            }
        }
        // Randomize clockseq
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
            if (_clockseq === undefined && !options._v6) {
                _clockseq = clockseq;
            }
        }
    }
    // v1 & v6 timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so time is
    // handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    }
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    }
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1ToV6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v1ToV6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
function v1ToV6(uuid) {
    const v1Bytes = typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid) : uuid;
    const v6Bytes = _v1ToV6(v1Bytes);
    return typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(v6Bytes) : v6Bytes;
}
// Do the field transformation needed for v1 -> v6
function _v1ToV6(v1Bytes, randomize = false) {
    return Uint8Array.of((v1Bytes[6] & 0x0f) << 4 | v1Bytes[7] >> 4 & 0x0f, (v1Bytes[7] & 0x0f) << 4 | (v1Bytes[4] & 0xf0) >> 4, (v1Bytes[4] & 0x0f) << 4 | (v1Bytes[5] & 0xf0) >> 4, (v1Bytes[5] & 0x0f) << 4 | (v1Bytes[0] & 0xf0) >> 4, (v1Bytes[0] & 0x0f) << 4 | (v1Bytes[1] & 0xf0) >> 4, (v1Bytes[1] & 0x0f) << 4 | (v1Bytes[2] & 0xf0) >> 4, 0x60 | v1Bytes[2] & 0x0f, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>v35
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        }
        // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
    }
    // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name;
    } catch (err) {}
    // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/native.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/native.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1ToV6.js [app-ssr] (ecmascript)");
;
;
;
function v6(options = {}, buf, offset = 0) {
    // v6 is v1 with different field layout, so we start with a v1 UUID, albeit
    // with slightly different behavior around how the clock_seq and node fields
    // are randomized, which is why we call v1 with _v6: true.
    let bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...options,
        _v6: true
    }, new Uint8Array(16));
    // Reorder the fields to v6 layout.
    bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(bytes);
    // Return as a byte array if requested
    if (buf) {
        for(let i = 0; i < 16; i++){
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
}
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v6ToV1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>v6ToV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
function v6ToV1(uuid) {
    const v6Bytes = typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid) : uuid;
    const v1Bytes = _v6ToV1(v6Bytes);
    return typeof uuid === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(v1Bytes) : v1Bytes;
}
// Do the field transformation needed for v6 -> v1
function _v6ToV1(v6Bytes) {
    return Uint8Array.of((v6Bytes[3] & 0x0f) << 4 | v6Bytes[4] >> 4 & 0x0f, (v6Bytes[4] & 0x0f) << 4 | (v6Bytes[5] & 0xf0) >> 4, (v6Bytes[5] & 0x0f) << 4 | v6Bytes[6] & 0x0f, v6Bytes[7], (v6Bytes[1] & 0x0f) << 4 | (v6Bytes[2] & 0xf0) >> 4, (v6Bytes[2] & 0x0f) << 4 | (v6Bytes[3] & 0xf0) >> 4, 0x10 | (v6Bytes[0] & 0xf0) >> 4, (v6Bytes[0] & 0x0f) << 4 | (v6Bytes[1] & 0xf0) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v7.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ let _seqLow = null;
let _seqHigh = null;
let _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    let i = buf && offset || 0;
    const b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    const msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    let seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    let seqHigh = _seqHigh;
    let seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.slice(14, 15), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v1ToV6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v6ToV1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6ToV1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/max.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1ToV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v1ToV6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v6ToV1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v6ToV1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/v7.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)");
}),
"[project]/study-lms-frontend-app/node_modules/mina-scheduler/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// app/index.ts
var app_exports = {};
__export(app_exports, {
    SchedularView: function() {
        return SchedulerViewFilteration;
    },
    SchedulerProvider: function() {
        return SchedulerProvider;
    },
    eventSchema: function() {
        return eventSchema;
    },
    useScheduler: function() {
        return useScheduler;
    },
    variants: function() {
        return variants;
    }
});
module.exports = __toCommonJS(app_exports);
// providers/schedular-provider.tsx
var import_react2 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
// providers/modal-provider.tsx
var import_react = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_modal = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/modal/dist/index.js [app-ssr] (ecmascript)");
var ModalContext = (0, import_react.createContext)(void 0);
var ModalProvider = function(param) {
    var children = param.children;
    var _ref = _sliced_to_array((0, import_react.useState)(null), 2), modalContent = _ref[0], setModalContent = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(null), 2), data = _ref1[0], setData = _ref1[1];
    var _ref2 = (0, import_modal.useDisclosure)(), isOpen = _ref2.isOpen, onOpen = _ref2.onOpen, onClose = _ref2.onClose;
    var showModal = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(param) {
            var title, body, footer, modalClassName, getter, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        title = param.title, body = param.body, footer = param.footer, modalClassName = param.modalClassName, getter = param.getter;
                        setModalContent({
                            title: title,
                            body: body,
                            footer: footer,
                            modalClassName: modalClassName
                        });
                        if (!getter) return [
                            3,
                            5
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            getter()
                        ];
                    case 2:
                        result = _state.sent();
                        setData(result);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error("Error fetching data:", error);
                        setData(null);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setData(null);
                        _state.label = 6;
                    case 6:
                        onOpen();
                        return [
                            2
                        ];
                }
            });
        });
        return function showModal(_) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ import_react.default.createElement(ModalContext.Provider, {
        value: {
            showModal: showModal,
            onClose: onClose,
            data: data
        }
    }, children, /* @__PURE__ */ import_react.default.createElement(import_modal.Modal, {
        backdrop: "blur",
        classNames: {
            backdrop: "max-h-screen overflow-hidden",
            wrapper: "max-h-screen overflow-hidden"
        },
        isOpen: isOpen,
        onOpenChange: onClose
    }, /* @__PURE__ */ import_react.default.createElement(import_modal.ModalContent, {
        className: (modalContent === null || modalContent === void 0 ? void 0 : modalContent.modalClassName) || ""
    }, modalContent && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, modalContent.title && /* @__PURE__ */ import_react.default.createElement(import_modal.ModalHeader, null, modalContent.title), modalContent.body && /* @__PURE__ */ import_react.default.createElement(import_modal.ModalBody, null, modalContent.body), modalContent.footer && /* @__PURE__ */ import_react.default.createElement(import_modal.ModalFooter, null, modalContent.footer)))));
};
var useModalContext = function() {
    var context = (0, import_react.useContext)(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
// providers/schedular-provider.tsx
var schedulerReducer = function(state, action) {
    switch(action.type){
        case "ADD_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: _to_consumable_array(state.events).concat([
                    action.payload
                ])
            });
        case "REMOVE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.filter(function(event) {
                    return event.id !== action.payload.id;
                })
            });
        case "UPDATE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.map(function(event) {
                    return event.id === action.payload.id ? action.payload : event;
                })
            });
        case "SET_EVENTS":
            return _object_spread_props(_object_spread({}, state), {
                events: action.payload
            });
        default:
            return state;
    }
};
var SchedulerContext = (0, import_react2.createContext)(void 0);
var SchedulerProvider = function(param) {
    var children = param.children, onAddEvent = param.onAddEvent, onUpdateEvent = param.onUpdateEvent, onDeleteEvent = param.onDeleteEvent, initialState = param.initialState, _param_weekStartsOn = param.weekStartsOn, weekStartsOn = _param_weekStartsOn === void 0 ? "sunday" : _param_weekStartsOn;
    var handleEventStyling = function handleEventStyling(event, dayEvents) {
        var eventsOnHour = dayEvents.filter(function(e) {
            return e.startDate < event.endDate && e.endDate > event.startDate;
        });
        var numEventsOnHour = eventsOnHour.length || 1;
        var indexOnHour = eventsOnHour.indexOf(event);
        var eventHeight = 0;
        var maxHeight = 0;
        var eventTop = 0;
        if (_instanceof(event.startDate, Date) && _instanceof(event.endDate, Date)) {
            var startTime = event.startDate.getHours() * 60 + event.startDate.getMinutes();
            var endTime = event.endDate.getHours() * 60 + event.endDate.getMinutes();
            var diffInMinutes = endTime - startTime;
            eventHeight = diffInMinutes / 60 * 64;
            var eventStartHour = event.startDate.getHours() + event.startDate.getMinutes() / 60;
            var dayEndHour = 24;
            maxHeight = Math.max(0, (dayEndHour - eventStartHour) * 64);
            eventHeight = Math.min(eventHeight, maxHeight);
            eventTop = eventStartHour * 64;
        } else {
            console.error("Invalid event or missing start/end dates.");
        }
        return {
            height: "".concat(eventHeight < 10 ? 20 : eventHeight > maxHeight ? maxHeight : eventHeight, "px"),
            top: "".concat(eventTop, "px"),
            zIndex: indexOnHour + 1,
            left: "".concat(indexOnHour * 100 / numEventsOnHour, "%"),
            maxWidth: "".concat(100 / numEventsOnHour, "%"),
            minWidth: "".concat(100 / numEventsOnHour, "%")
        };
    };
    var handleAddEvent = function handleAddEvent(event) {
        dispatch({
            type: "ADD_EVENT",
            payload: event
        });
        if (onAddEvent) {
            onAddEvent(event);
        }
    };
    var handleUpdateEvent = function handleUpdateEvent(event, id) {
        dispatch({
            type: "UPDATE_EVENT",
            payload: _object_spread_props(_object_spread({}, event), {
                id: id
            })
        });
        if (onUpdateEvent) {
            onUpdateEvent(event);
        }
    };
    var handleDeleteEvent = function handleDeleteEvent(id) {
        dispatch({
            type: "REMOVE_EVENT",
            payload: {
                id: id
            }
        });
        if (onDeleteEvent) {
            onDeleteEvent(id);
        }
    };
    var _ref = _sliced_to_array((0, import_react2.useReducer)(schedulerReducer, {
        events: initialState !== null && initialState !== void 0 ? initialState : []
    }), 2), state = _ref[0], dispatch = _ref[1];
    (0, import_react2.useEffect)(function() {
        if (initialState) {
            dispatch({
                type: "SET_EVENTS",
                payload: initialState
            });
        }
    }, [
        initialState
    ]);
    var getDaysInMonth = function(month, year) {
        return Array.from({
            length: new Date(year, month + 1, 0).getDate()
        }, function(_, index) {
            return {
                day: index + 1,
                events: []
            };
        });
    };
    var getDaysInWeek = function(week, year) {
        var startDay = weekStartsOn === "sunday" ? 0 : 1;
        var janFirst = new Date(year, 0, 1);
        var janFirstDayOfWeek = janFirst.getDay();
        var weekStart = new Date(janFirst);
        weekStart.setDate(janFirst.getDate() + (week - 1) * 7 + (startDay - janFirstDayOfWeek + 7) % 7);
        var days = [];
        for(var i = 0; i < 7; i++){
            var day = new Date(weekStart);
            day.setDate(day.getDate() + i);
            days.push(day);
        }
        return days;
    };
    var getWeekNumber = function(date) {
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
        return weekNo;
    };
    var getEventsForDay = function(day, currentDate) {
        return state === null || state === void 0 ? void 0 : state.events.filter(function(event) {
            var eventStart = new Date(event.startDate);
            var eventEnd = new Date(event.endDate);
            var startOfDay = new Date(currentDate);
            startOfDay.setDate(day);
            startOfDay.setHours(0, 0, 0, 0);
            var endOfDay = new Date(currentDate);
            endOfDay.setDate(day + 1);
            endOfDay.setHours(0, 0, 0, 0);
            var isSameDay = eventStart.getDate() === day && eventStart.getMonth() === currentDate.getMonth() && eventStart.getFullYear() === currentDate.getFullYear();
            var isSpanningDay = eventStart < endOfDay && eventEnd >= startOfDay;
            return isSameDay || isSpanningDay;
        });
    };
    var getDayName = function(day) {
        var days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        return days[day];
    };
    var getters = {
        getDaysInMonth: getDaysInMonth,
        getEventsForDay: getEventsForDay,
        getDaysInWeek: getDaysInWeek,
        getWeekNumber: getWeekNumber,
        getDayName: getDayName
    };
    var handlers = {
        handleEventStyling: handleEventStyling,
        handleAddEvent: handleAddEvent,
        handleUpdateEvent: handleUpdateEvent,
        handleDeleteEvent: handleDeleteEvent
    };
    return /* @__PURE__ */ import_react2.default.createElement(SchedulerContext.Provider, {
        value: {
            events: state,
            dispatch: dispatch,
            getters: getters,
            handlers: handlers,
            weekStartsOn: weekStartsOn
        }
    }, /* @__PURE__ */ import_react2.default.createElement(ModalProvider, null, children));
};
var useScheduler = function() {
    var context = (0, import_react2.useContext)(SchedulerContext);
    if (!context) {
        throw new Error("useScheduler must be used within a SchedulerProvider");
    }
    return context;
};
// components/schedule/_components/view/schedular-view-filteration.tsx
var import_react10 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_framer_motion5 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/framer-motion/dist/cjs/index.js [app-ssr] (ecmascript)");
var import_button5 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/button/dist/index.js [app-ssr] (ecmascript)");
var import_tabs = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/tabs/dist/index.js [app-ssr] (ecmascript)");
var import_lucide_react5 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/mina-scheduler/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var import_bs = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/react-icons/bs/index.js [app-ssr] (ecmascript)");
// components/schedule/_modals/add-event-modal.tsx
var import_react4 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_modal2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/modal/dist/index.js [app-ssr] (ecmascript)");
var import_button = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/button/dist/index.js [app-ssr] (ecmascript)");
var import_input = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/input/dist/index.js [app-ssr] (ecmascript)");
var import_dropdown = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/dropdown/dist/index.js [app-ssr] (ecmascript)");
// components/schedule/_components/add-event-components/select-date.tsx
var import_date = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@internationalized/date/dist/main.js [app-ssr] (ecmascript)");
var import_date_picker = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/date-picker/dist/index.js [app-ssr] (ecmascript)");
var import_date_input = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/date-input/dist/index.js [app-ssr] (ecmascript)");
var import_react3 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
function getFormattedDate(date) {
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, "0"), "-").concat(String(date.getDate()).padStart(2, "0"));
}
function calendarDateToJSDate(calendarDate) {
    var year = calendarDate.year, month = calendarDate.month, day = calendarDate.day;
    return new Date(year, month - 1, day);
}
function SelectDate(param) {
    var data = param.data, setValue = param.setValue;
    var _data_startDate, _data_startDate1, _data_endDate, _data_endDate1;
    var _ref = _sliced_to_array((0, import_react3.useState)({
        startDate: data ? (0, import_date.parseDate)(getFormattedDate(data === null || data === void 0 ? void 0 : data.startDate)) : (0, import_date.parseDate)("2024-04-06"),
        endDate: data ? (0, import_date.parseDate)(getFormattedDate(data === null || data === void 0 ? void 0 : data.endDate)) : (0, import_date.parseDate)("2024-04-10"),
        startTime: new import_date.Time((data === null || data === void 0 ? void 0 : (_data_startDate = data.startDate) === null || _data_startDate === void 0 ? void 0 : _data_startDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_startDate1 = data.startDate) === null || _data_startDate1 === void 0 ? void 0 : _data_startDate1.getMinutes()) || 0),
        endTime: new import_date.Time((data === null || data === void 0 ? void 0 : (_data_endDate = data.endDate) === null || _data_endDate === void 0 ? void 0 : _data_endDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_endDate1 = data.endDate) === null || _data_endDate1 === void 0 ? void 0 : _data_endDate1.getMinutes()) || 0)
    }), 2), dateState = _ref[0], setDateState = _ref[1];
    (0, import_react3.useEffect)(function() {
        var _dateState_startTime, _dateState_startTime1, _dateState_endTime, _dateState_endTime1;
        if (!dateState) return;
        var jsStartDate = calendarDateToJSDate(dateState.startDate);
        var jsEndDate = calendarDateToJSDate(dateState.endDate);
        jsStartDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime = dateState.startTime) === null || _dateState_startTime === void 0 ? void 0 : _dateState_startTime.hour) || 0);
        jsStartDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime1 = dateState.startTime) === null || _dateState_startTime1 === void 0 ? void 0 : _dateState_startTime1.minute) || 0);
        jsEndDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime = dateState.endTime) === null || _dateState_endTime === void 0 ? void 0 : _dateState_endTime.hour) || 0);
        jsEndDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime1 = dateState.endTime) === null || _dateState_endTime1 === void 0 ? void 0 : _dateState_endTime1.minute) || 0);
        if (jsEndDate < jsStartDate) {
            jsEndDate.setHours(jsStartDate.getHours() + 1);
        }
        setValue("startDate", jsStartDate);
        setValue("endDate", jsEndDate);
    }, [
        dateState,
        setValue
    ]);
    return /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "w-full flex gap-4 max-w-full flex-wrap"
    }, /* @__PURE__ */ import_react3.default.createElement(import_date_picker.DateRangePicker, {
        label: "Stay duration",
        isRequired: true,
        value: {
            start: dateState.startDate,
            end: dateState.endDate
        },
        className: "w-full",
        onChange: function(value) {
            var start = value === null || value === void 0 ? void 0 : value.start;
            var end = value === null || value === void 0 ? void 0 : value.end;
            var startDate = new Date((start === null || start === void 0 ? void 0 : start.year) || 0, ((start === null || start === void 0 ? void 0 : start.month) || 1) - 1, (start === null || start === void 0 ? void 0 : start.day) || 1);
            var endDate = new Date((end === null || end === void 0 ? void 0 : end.year) || 0, ((end === null || end === void 0 ? void 0 : end.month) || 1) - 1, (end === null || end === void 0 ? void 0 : end.day) || 1);
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startDate: (0, import_date.parseDate)(getFormattedDate(startDate)),
                endDate: (0, import_date.parseDate)(getFormattedDate(endDate))
            }));
        }
    }), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "flex flex-wrap gap-4"
    }, /* @__PURE__ */ import_react3.default.createElement(import_date_input.TimeInput, {
        label: "Start Time",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.startTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startTime: e
            }));
        }
    }), /* @__PURE__ */ import_react3.default.createElement(import_date_input.TimeInput, {
        label: "End Time",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.endTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                endTime: e
            }));
        },
        isInvalid: (dateState === null || dateState === void 0 ? void 0 : dateState.startTime) && (dateState === null || dateState === void 0 ? void 0 : dateState.endTime) && dateState.endTime.hour * 60 + dateState.endTime.minute <= dateState.startTime.hour * 60 + dateState.startTime.minute
    }))));
}
// components/schedule/_modals/add-event-modal.tsx
var import_react_hook_form = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/react-hook-form/dist/index.cjs.js [app-ssr] (ecmascript)");
var import_zod2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@hookform/resolvers/zod/dist/zod.js [app-ssr] (ecmascript)");
// types/index.ts
var import_zod = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/zod/index.cjs [app-ssr] (ecmascript)");
var variants = [
    "success",
    "primary",
    "default",
    "warning",
    "danger"
];
var eventSchema = import_zod.z.object({
    title: import_zod.z.string().nonempty("Event name is required"),
    description: import_zod.z.string().optional(),
    startDate: import_zod.z.date(),
    endDate: import_zod.z.date(),
    variant: import_zod.z.enum([
        "primary",
        "danger",
        "success",
        "warning",
        "default"
    ]),
    color: import_zod.z.string().nonempty("Color selection is required")
});
// components/schedule/_modals/add-event-modal.tsx
var import_uuid = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)");
function AddEventModal(param) {
    var CustomAddEventModal = param.CustomAddEventModal;
    var _errors_title, _colorOptions_find;
    var _useModalContext = useModalContext(), onClose = _useModalContext.onClose, data = _useModalContext.data;
    var _ref = _sliced_to_array((0, import_react4.useState)(getEventColor((data === null || data === void 0 ? void 0 : data.variant) || "primary")), 2), selectedColor = _ref[0], setSelectedColor = _ref[1];
    var typedData = data;
    var handlers = useScheduler().handlers;
    var _ref1 = (0, import_react_hook_form.useForm)({
        resolver: (0, import_zod2.zodResolver)(eventSchema),
        defaultValues: {
            title: "",
            description: "",
            startDate: /* @__PURE__ */ new Date(),
            endDate: /* @__PURE__ */ new Date(),
            variant: (data === null || data === void 0 ? void 0 : data.variant) || "primary",
            color: (data === null || data === void 0 ? void 0 : data.color) || "blue"
        }
    }), register = _ref1.register, handleSubmit = _ref1.handleSubmit, reset = _ref1.reset, errors = _ref1.formState.errors, setValue = _ref1.setValue;
    (0, import_react4.useEffect)(function() {
        if (data) {
            reset({
                title: data.title,
                description: data.description || "",
                startDate: data.startDate,
                endDate: data.endDate,
                variant: data.variant || "primary",
                color: data.color || "blue"
            });
        }
    }, [
        data,
        reset
    ]);
    var colorOptions = [
        {
            key: "blue",
            name: "Blue"
        },
        {
            key: "red",
            name: "Red"
        },
        {
            key: "green",
            name: "Green"
        },
        {
            key: "yellow",
            name: "Yellow"
        }
    ];
    function getEventColor(variant) {
        switch(variant){
            case "primary":
                return "blue";
            case "danger":
                return "red";
            case "success":
                return "green";
            case "warning":
                return "yellow";
            default:
                return "blue";
        }
    }
    function getEventStatus(color) {
        switch(color){
            case "blue":
                return "primary";
            case "red":
                return "danger";
            case "green":
                return "success";
            case "yellow":
                return "warning";
            default:
                return "default";
        }
    }
    var onSubmit = function(formData) {
        var newEvent = {
            id: (0, import_uuid.v4)(),
            // Generate a unique ID
            title: formData.title,
            startDate: formData.startDate,
            endDate: formData.endDate,
            variant: formData.variant,
            description: formData.description
        };
        if (!(typedData === null || typedData === void 0 ? void 0 : typedData.id)) handlers.handleAddEvent(newEvent);
        else handlers.handleUpdateEvent(newEvent, typedData.id);
        onClose();
    };
    return /* @__PURE__ */ import_react4.default.createElement("form", {
        className: "flex flex-col gap-3",
        onSubmit: handleSubmit(onSubmit)
    }, CustomAddEventModal ? CustomAddEventModal({
        register: register,
        errors: errors
    }) : /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_input.Input, _object_spread_props(_object_spread({}, register("title")), {
        label: "Event Name",
        placeholder: "Enter event name",
        variant: "bordered",
        isInvalid: !!errors.title,
        errorMessage: (_errors_title = errors.title) === null || _errors_title === void 0 ? void 0 : _errors_title.message
    })), /* @__PURE__ */ import_react4.default.createElement(import_input.Textarea, _object_spread_props(_object_spread({}, register("description")), {
        label: "Description",
        placeholder: "Enter event description",
        variant: "bordered"
    })), /* @__PURE__ */ import_react4.default.createElement(SelectDate, {
        data: data,
        setValue: setValue
    }), /* @__PURE__ */ import_react4.default.createElement(import_dropdown.Dropdown, {
        backdrop: "blur"
    }, /* @__PURE__ */ import_react4.default.createElement(import_dropdown.DropdownTrigger, null, /* @__PURE__ */ import_react4.default.createElement(import_button.Button, {
        variant: "flat",
        className: "justify-between w-fit my-4",
        color: getEventStatus(selectedColor)
    }, (_colorOptions_find = colorOptions.find(function(color) {
        return color.key === selectedColor;
    })) === null || _colorOptions_find === void 0 ? void 0 : _colorOptions_find.name)), /* @__PURE__ */ import_react4.default.createElement(import_dropdown.DropdownMenu, {
        "aria-label": "Color selection",
        variant: "flat",
        selectionMode: "single",
        selectedKeys: [
            selectedColor
        ],
        onSelectionChange: function(keys) {
            var color = keys.currentKey || "blue";
            setSelectedColor(color);
            reset(function(formData) {
                return _object_spread_props(_object_spread({}, formData), {
                    variant: getEventStatus(color)
                });
            });
        }
    }, colorOptions.map(function(color) {
        return /* @__PURE__ */ import_react4.default.createElement(import_dropdown.DropdownItem, {
            key: color.key,
            startContent: /* @__PURE__ */ import_react4.default.createElement("div", {
                className: "w-4 h-4 rounded-full bg-".concat(color.key, "-500")
            })
        }, color.name);
    }))), /* @__PURE__ */ import_react4.default.createElement(import_modal2.ModalFooter, {
        className: "px-0"
    }, /* @__PURE__ */ import_react4.default.createElement(import_button.Button, {
        color: "danger",
        variant: "light",
        onPress: onClose
    }, "Cancel"), /* @__PURE__ */ import_react4.default.createElement(import_button.Button, {
        color: "primary",
        type: "submit"
    }, "Save Event"))));
}
// components/schedule/_components/view/day/daily-view.tsx
var import_react6 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_framer_motion2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/framer-motion/dist/cjs/index.js [app-ssr] (ecmascript)");
var import_button2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/button/dist/index.js [app-ssr] (ecmascript)");
var import_chip2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/chip/dist/index.js [app-ssr] (ecmascript)");
var import_lucide_react2 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/mina-scheduler/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
// components/schedule/_components/view/event-component/event-styled.tsx
var import_react5 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_chip = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/chip/dist/index.js [app-ssr] (ecmascript)");
var import_lucide_react = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/mina-scheduler/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var import_framer_motion = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/framer-motion/dist/cjs/index.js [app-ssr] (ecmascript)");
var formatDate = function(date) {
    return date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
};
function EventStyled(param) {
    var event = param.event, CustomEventModal = param.CustomEventModal;
    var _useModalContext = useModalContext(), showEventModal = _useModalContext.showModal;
    var handlers = useScheduler().handlers;
    function handleEditEvent(event2) {
        var _CustomEventModal_CustomAddEventModal;
        showEventModal({
            title: event2 === null || event2 === void 0 ? void 0 : event2.title,
            body: /* @__PURE__ */ import_react5.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        _object_spread({}, event2)
                    ];
                });
            })
        });
    }
    return /* @__PURE__ */ import_react5.default.createElement(import_framer_motion.motion.div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        },
        key: event === null || event === void 0 ? void 0 : event.id,
        className: "w-full relative use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg  flex flex-col flex-grow "
    }, /* @__PURE__ */ import_react5.default.createElement(import_chip.Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handlers.handleDeleteEvent(event === null || event === void 0 ? void 0 : event.id);
        },
        color: "danger",
        variant: "solid",
        classNames: {
            content: "max-w-fit min-w-0 p-1"
        },
        className: "absolute z-50 right-0 top-[-5px]"
    }, /* @__PURE__ */ import_react5.default.createElement(import_lucide_react.TrashIcon, {
        size: 12
    })), event.CustomEventComponent ? /* @__PURE__ */ import_react5.default.createElement("div", {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        }
    }, /* @__PURE__ */ import_react5.default.createElement(event.CustomEventComponent, _object_spread({}, event))) : /* @__PURE__ */ import_react5.default.createElement(import_chip.Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        },
        variant: "flat",
        color: event === null || event === void 0 ? void 0 : event.variant,
        classNames: {
            content: "p-0"
        },
        className: "min-w-full items-start p-0 flex-grow flex-col flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "h-full" : "min-h-fit p-1", " rounded-md")
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
        className: "flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "p-0" : "p-1", " flex-col flex-grow px-1 rounded-md  items-start w-full")
    }, /* @__PURE__ */ import_react5.default.createElement("h1", {
        className: "".concat((event === null || event === void 0 ? void 0 : event.minmized) && "text-[0.7rem] p-0 px-1", " font-semibold line-clamp-1")
    }, event === null || event === void 0 ? void 0 : event.title), /* @__PURE__ */ import_react5.default.createElement("p", {
        className: "text-[0.65rem]"
    }, event === null || event === void 0 ? void 0 : event.description), !(event === null || event === void 0 ? void 0 : event.minmized) && /* @__PURE__ */ import_react5.default.createElement("div", {
        className: "flex justify-between w-full"
    }, /* @__PURE__ */ import_react5.default.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.startDate)), /* @__PURE__ */ import_react5.default.createElement("p", {
        className: "text-sm"
    }, "-"), /* @__PURE__ */ import_react5.default.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.endDate))))));
}
// components/schedule/_components/view/day/daily-view.tsx
var hours = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};
var itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
};
function DailyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var hoursColumnRef = (0, import_react6.useRef)(null);
    var _ref = _sliced_to_array((0, import_react6.useState)(null), 2), detailedHour = _ref[0], setDetailedHour = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react6.useState)(0), 2), timelinePosition = _ref1[0], setTimelinePosition = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react6.useState)(/* @__PURE__ */ new Date()), 2), currentDate = _ref2[0], setCurrentDate = _ref2[1];
    var showModal = useModalContext().showModal;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y);
    };
    var getFormattedDayTitle = function() {
        return currentDate.toDateString();
    };
    var dayEvents = getters.getEventsForDay((currentDate === null || currentDate === void 0 ? void 0 : currentDate.getDate()) || 0, currentDate);
    function handleAddEvent(event) {
        var _CustomEventModal_CustomAddEventModal, _CustomEventModal_CustomAddEventModal1;
        showModal({
            title: (CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.title) || "Add Event",
            body: /* @__PURE__ */ import_react6.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal1 = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal1.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleAddEventDay(detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = currentDate.getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    var handleNextDay = function() {
        var nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDay);
    };
    var handlePrevDay = function() {
        var prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDay);
    };
    return /* @__PURE__ */ import_react6.default.createElement("div", {
        className: ""
    }, /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "flex justify-between gap-3 flex-wrap mb-5"
    }, /* @__PURE__ */ import_react6.default.createElement("h1", {
        className: "text-3xl font-semibold mb-4"
    }, getFormattedDayTitle()), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "flex ml-auto  gap-3"
    }, prevButton ? /* @__PURE__ */ import_react6.default.createElement("div", {
        onClick: handlePrevDay
    }, prevButton) : /* @__PURE__ */ import_react6.default.createElement(import_button2.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ import_react6.default.createElement(import_lucide_react2.ArrowLeft, null),
        onClick: handlePrevDay
    }, "Prev"), nextButton ? /* @__PURE__ */ import_react6.default.createElement("div", {
        onClick: handleNextDay
    }, nextButton) : /* @__PURE__ */ import_react6.default.createElement(import_button2.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextDay,
        endContent: /* @__PURE__ */ import_react6.default.createElement(import_lucide_react2.ArrowRight, null)
    }, "Next"))), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "all-day-events"
    }, /* @__PURE__ */ import_react6.default.createElement(import_framer_motion2.AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        return /* @__PURE__ */ import_react6.default.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex)
        }, /* @__PURE__ */ import_react6.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: false
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : "No events for today")), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "relative rounded-md bg-default-50 hover:bg-default-100 transition duration-400"
    }, /* @__PURE__ */ import_react6.default.createElement(import_framer_motion2.motion.div, {
        className: "relative rounded-xl flex ease-in-out",
        ref: hoursColumnRef,
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        }
    }, /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "flex  flex-col"
    }, hours.map(function(hour, index) {
        return /* @__PURE__ */ import_react6.default.createElement(import_framer_motion2.motion.div, {
            key: "hour-".concat(index),
            variants: itemVariants,
            className: "cursor-pointer   transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, hour);
    })), /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "flex relative flex-grow flex-col "
    }, Array.from({
        length: 24
    }).map(function(_, index) {
        return /* @__PURE__ */ import_react6.default.createElement("div", {
            onClick: function() {
                handleAddEventDay(detailedHour);
            },
            key: "hour-".concat(index),
            className: "cursor-pointer w-full relative border-b  hover:bg-default-200/50  transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, /* @__PURE__ */ import_react6.default.createElement("div", {
            className: "absolute bg-default-200 flex items-center justify-center text-xs opacity-0 transition left-0 top-0 duration-250 hover:opacity-100 w-full h-full"
        }, "Add Event"));
    }), /* @__PURE__ */ import_react6.default.createElement(import_framer_motion2.AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
        return /* @__PURE__ */ import_react6.default.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex),
            style: {
                minHeight: height,
                top: top,
                left: left,
                maxWidth: maxWidth,
                minWidth: minWidth
            },
            className: "flex transition-all duration-1000 flex-grow flex-col z-50 absolute"
        }, /* @__PURE__ */ import_react6.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : ""))), detailedHour && /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "absolute left-[50px] w-[calc(100%-53px)] h-[3px]  bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ import_react6.default.createElement(import_chip2.Chip, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour)))));
}
// components/schedule/_components/view/month/month-view.tsx
var import_react8 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_framer_motion3 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/framer-motion/dist/cjs/index.js [app-ssr] (ecmascript)");
var import_button3 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/button/dist/index.js [app-ssr] (ecmascript)");
var import_card = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/card/dist/index.js [app-ssr] (ecmascript)");
var import_chip3 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/chip/dist/index.js [app-ssr] (ecmascript)");
var import_lucide_react3 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/mina-scheduler/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var import_clsx = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/clsx/dist/clsx.js [app-ssr] (ecmascript)"));
// components/schedule/_modals/show-more-events-modal.tsx
var import_react7 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
function ShowMoreEventsModal() {
    var data = useModalContext().data;
    var dayEvents = (data === null || data === void 0 ? void 0 : data.dayEvents) || [];
    return /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "flex flex-col gap-2"
    }, dayEvents.map(function(event) {
        return /* @__PURE__ */ import_react7.default.createElement(EventStyled, {
            key: event.id,
            event: _object_spread({}, event)
        });
    }));
}
// components/schedule/_components/view/month/month-view.tsx
function MonthView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, weekStartsOn = _useScheduler.weekStartsOn;
    var showModal = useModalContext().showModal;
    var _ref = _sliced_to_array((0, import_react8.useState)(/* @__PURE__ */ new Date()), 2), currentDate = _ref[0], setCurrentDate = _ref[1];
    var daysInMonth = getters.getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    var handlePrevMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    };
    var handleNextMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    };
    function handleAddEvent(selectedDay) {
        showModal({
            title: "Add Event",
            body: /* @__PURE__ */ import_react8.default.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 0, 0, 0, 0);
                    endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleShowMoreEvents(dayEvents) {
        var _dayEvents_;
        showModal({
            title: dayEvents && ((_dayEvents_ = dayEvents[0]) === null || _dayEvents_ === void 0 ? void 0 : _dayEvents_.startDate.toDateString()),
            body: /* @__PURE__ */ import_react8.default.createElement(ShowMoreEventsModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        {
                            dayEvents: dayEvents
                        }
                    ];
                });
            })
        });
    }
    var containerVariants3 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02
            }
        }
    };
    var itemVariants2 = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    var daysOfWeek = weekStartsOn === "monday" ? [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ] : [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var startOffset = (firstDayOfMonth.getDay() - (weekStartsOn === "monday" ? 1 : 0) + 7) % 7;
    var prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    var lastDateOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
    return /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "flex flex-col mb-4"
    }, /* @__PURE__ */ import_react8.default.createElement(import_framer_motion3.motion.h2, {
        key: currentDate.getMonth(),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 1
        },
        className: "text-3xl my-5 tracking-tighter font-bold"
    }, currentDate.toLocaleString("default", {
        month: "long"
    }), " ", currentDate.getFullYear()), /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "flex gap-3"
    }, prevButton ? /* @__PURE__ */ import_react8.default.createElement("div", {
        onClick: handlePrevMonth
    }, prevButton) : /* @__PURE__ */ import_react8.default.createElement(import_button3.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ import_react8.default.createElement(import_lucide_react3.ArrowLeft, null),
        onClick: handlePrevMonth
    }, "Prev"), nextButton ? /* @__PURE__ */ import_react8.default.createElement("div", {
        onClick: handleNextMonth
    }, nextButton) : /* @__PURE__ */ import_react8.default.createElement(import_button3.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextMonth,
        endContent: /* @__PURE__ */ import_react8.default.createElement(import_lucide_react3.ArrowRight, null)
    }, "Next"))), /* @__PURE__ */ import_react8.default.createElement(import_framer_motion3.AnimatePresence, {
        mode: "wait"
    }, /* @__PURE__ */ import_react8.default.createElement(import_framer_motion3.motion.div, {
        variants: containerVariants3,
        initial: "hidden",
        animate: "visible",
        key: currentDate.getMonth(),
        className: "grid grid-cols-7 gap-1 sm:gap-2"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ import_react8.default.createElement("div", {
            key: idx,
            className: "text-left my-8 text-4xl tracking-tighter font-medium"
        }, day);
    }), Array.from({
        length: startOffset
    }).map(function(_, idx) {
        return /* @__PURE__ */ import_react8.default.createElement("div", {
            key: "offset-".concat(idx),
            className: "h-[150px] opacity-50"
        }, /* @__PURE__ */ import_react8.default.createElement("div", {
            className: (0, import_clsx.default)("font-semibold relative text-3xl mb-1")
        }, lastDateOfPrevMonth - startOffset + idx + 1));
    }), daysInMonth.map(function(dayObj) {
        var dayEvents = getters.getEventsForDay(dayObj.day, currentDate);
        return /* @__PURE__ */ import_react8.default.createElement(import_framer_motion3.motion.div, {
            className: "hover:z-50 border-none h-[150px] rounded group flex flex-col",
            key: dayObj.day,
            variants: itemVariants2
        }, /* @__PURE__ */ import_react8.default.createElement(import_card.Card, {
            isPressable: true,
            className: "shadow-md  relative flex p-4 border border-default-100 h-full",
            onClick: function() {
                return handleAddEvent(dayObj.day);
            }
        }, /* @__PURE__ */ import_react8.default.createElement("div", {
            className: (0, import_clsx.default)("font-semibold relative text-3xl mb-1", dayEvents.length > 0 ? "text-primary-600" : "text-muted-foreground", /* @__PURE__ */ new Date().getDate() === dayObj.day && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, dayObj.day), /* @__PURE__ */ import_react8.default.createElement("div", {
            className: "flex-grow flex flex-col gap-2 w-full overflow-hidden"
        }, /* @__PURE__ */ import_react8.default.createElement(import_framer_motion3.AnimatePresence, {
            mode: "wait"
        }, (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) > 0 && /* @__PURE__ */ import_react8.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, dayEvents[0]), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        })), dayEvents.length > 1 && /* @__PURE__ */ import_react8.default.createElement(import_chip3.Chip, {
            onClick: function(e) {
                e.stopPropagation();
                handleShowMoreEvents(dayEvents);
            },
            variant: "flat",
            className: "hover:bg-default-200 absolute right-2 text-xs top-2 transition duration-300"
        }, dayEvents.length > 1 ? "+".concat(dayEvents.length - 1) : " ")), dayEvents.length === 0 && /* @__PURE__ */ import_react8.default.createElement("div", {
            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, /* @__PURE__ */ import_react8.default.createElement("span", {
            className: "text-white tracking-tighter text-lg font-semibold"
        }, "Add Event"))));
    }))));
}
// components/schedule/_components/view/week/week-view.tsx
var import_react9 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var import_chip4 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/chip/dist/index.js [app-ssr] (ecmascript)");
var import_framer_motion4 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/framer-motion/dist/cjs/index.js [app-ssr] (ecmascript)");
var import_button4 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/@nextui-org/button/dist/index.js [app-ssr] (ecmascript)");
var import_lucide_react4 = __turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/mina-scheduler/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var import_clsx2 = __toESM(__turbopack_context__.r("[project]/study-lms-frontend-app/node_modules/clsx/dist/clsx.js [app-ssr] (ecmascript)"));
var hours2 = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
function WeeklyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var hoursColumnRef = (0, import_react9.useRef)(null);
    var _ref = _sliced_to_array((0, import_react9.useState)(null), 2), detailedHour = _ref[0], setDetailedHour = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react9.useState)(0), 2), timelinePosition = _ref1[0], setTimelinePosition = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react9.useState)(/* @__PURE__ */ new Date()), 2), currentDate = _ref2[0], setCurrentDate = _ref2[1];
    var showModal = useModalContext().showModal;
    var daysOfWeek = getters === null || getters === void 0 ? void 0 : getters.getDaysInWeek(getters === null || getters === void 0 ? void 0 : getters.getWeekNumber(currentDate), currentDate.getFullYear());
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y + 83);
    };
    function handleAddEvent(event) {
        showModal({
            title: "Add Event",
            body: /* @__PURE__ */ import_react9.default.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var handleNextWeek = function() {
        var nextWeek = new Date(currentDate);
        nextWeek.setDate(currentDate.getDate() + 7);
        setCurrentDate(nextWeek);
    };
    var handlePrevWeek = function() {
        var prevWeek = new Date(currentDate);
        prevWeek.setDate(currentDate.getDate() - 7);
        setCurrentDate(prevWeek);
    };
    function handleAddEventWeek(dayIndex, detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = daysOfWeek[dayIndex % 7].getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    return /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ import_react9.default.createElement(import_framer_motion4.motion.div, {
        key: currentDate.toDateString() + "parent",
        className: "all-week-events flex flex-col gap-2",
        variants: containerVariants2,
        initial: "hidden",
        animate: "visible"
    }), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "flex ml-auto gap-3"
    }, prevButton ? /* @__PURE__ */ import_react9.default.createElement("div", {
        onClick: handlePrevWeek
    }, prevButton) : /* @__PURE__ */ import_react9.default.createElement(import_button4.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ import_react9.default.createElement(import_lucide_react4.ArrowLeft, null),
        onClick: handlePrevWeek
    }, "Prev"), nextButton ? /* @__PURE__ */ import_react9.default.createElement("div", {
        onClick: handleNextWeek
    }, nextButton) : /* @__PURE__ */ import_react9.default.createElement(import_button4.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextWeek,
        endContent: /* @__PURE__ */ import_react9.default.createElement(import_lucide_react4.ArrowRight, null)
    }, "Next")), /* @__PURE__ */ import_react9.default.createElement("div", {
        key: currentDate.toDateString(),
        className: "grid use-automation-zoom-in grid-cols-8 gap-0"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "sticky top-0 left-0 z-30 bg-default-100 rounded-tl-lg h-full border-0  flex items-center justify-center"
    }, /* @__PURE__ */ import_react9.default.createElement("span", {
        className: "text-lg font-semibold text-muted-foreground"
    }, "Week ", getters.getWeekNumber(currentDate))), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "col-span-7 flex flex-col relative"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "grid grid-cols-7 gap-0 flex-grow"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ import_react9.default.createElement("div", {
            key: idx,
            className: "relative flex flex-col"
        }, /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "sticky bg-default-100 top-0 z-20 flex-grow flex items-center justify-center"
        }, /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "text-center p-4"
        }, /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "text-lg font-semibold"
        }, getters.getDayName(day.getDay())), /* @__PURE__ */ import_react9.default.createElement("div", {
            className: (0, import_clsx2.default)("text-lg font-semibold", /* @__PURE__ */ new Date().getDate() === day.getDate() && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, day.getDate()))), /* @__PURE__ */ import_react9.default.createElement("div", {
            className: "absolute top-12 right-0 w-px h-[calc(100%-3rem)]"
        }));
    })), detailedHour && /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "absolute flex z-10 left-0 w-full h-[3px] bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ import_react9.default.createElement(import_chip4.Chip, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour))), /* @__PURE__ */ import_react9.default.createElement("div", {
        ref: hoursColumnRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        },
        className: "relative grid grid-cols-8 col-span-8"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "col-span-1 bg-default-50 hover:bg-default-100 transition duration-400"
    }, hours2.map(function(hour, index) {
        return /* @__PURE__ */ import_react9.default.createElement("div", {
            key: "hour-".concat(index),
            className: "cursor-pointer border-b border-default-200 p-[16px] h-[64px] text-center text-sm text-muted-foreground border-r"
        }, hour);
    })), /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "col-span-7 bg-default-50 grid h-full grid-cols-7"
    }, Array.from({
        length: 7
    }, function(_, dayIndex) {
        var dayEvents = getters.getEventsForDay(daysOfWeek[dayIndex % 7].getDate(), currentDate);
        return /* @__PURE__ */ import_react9.default.createElement("div", {
            key: "day-".concat(dayIndex),
            className: "col-span-1  border-default-200 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground",
            onClick: function() {
                handleAddEventWeek(dayIndex, detailedHour);
            }
        }, /* @__PURE__ */ import_react9.default.createElement(import_framer_motion4.AnimatePresence, {
            mode: "wait"
        }, dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
            var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
            return /* @__PURE__ */ import_react9.default.createElement("div", {
                key: "event-".concat(event.id, "-").concat(eventIndex),
                style: {
                    minHeight: height,
                    height: height,
                    top: top,
                    left: left,
                    maxWidth: maxWidth,
                    minWidth: minWidth
                },
                className: "flex transitio transition-all duration-1000 flex-grow flex-col z-50 absolute"
            }, /* @__PURE__ */ import_react9.default.createElement(EventStyled, {
                event: _object_spread_props(_object_spread({}, event), {
                    CustomEventComponent: CustomEventComponent,
                    minmized: true
                }),
                CustomEventModal: CustomEventModal
            }));
        })), Array.from({
            length: 24
        }, function(_2, hourIndex) {
            return /* @__PURE__ */ import_react9.default.createElement("div", {
                key: "day-".concat(dayIndex, "-hour-").concat(hourIndex),
                className: "col-span-1 border-default-200 h-16 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground"
            }, /* @__PURE__ */ import_react9.default.createElement("div", {
                className: "absolute bg-default-100 flex items-center justify-center text-xs opacity-0 transition duration-250 hover:opacity-100 w-full h-full"
            }, "Add Event"));
        }));
    })))));
}
// components/schedule/_components/view/schedular-view-filteration.tsx
var animationConfig = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    },
    transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 250
    }
};
function SchedulerViewFilteration(param) {
    var _param_views = param.views, views = _param_views === void 0 ? {
        views: [
            "day",
            "week",
            "month"
        ],
        mobileViews: [
            "day"
        ]
    } : _param_views, CustomComponents = param.CustomComponents, classNames = param.classNames;
    var _CustomComponents_customTabs, _CustomComponents_customButtons, _CustomComponents_customButtons1, _CustomComponents_customTabs1, _CustomComponents_customButtons2, _CustomComponents_customButtons3, _CustomComponents_customTabs2, _CustomComponents_customButtons4, _CustomComponents_customButtons5, _CustomComponents_customButtons6, _classNames_buttons;
    var _useModalContext = useModalContext(), showAddEventModal = _useModalContext.showModal;
    var _import_react10_default_useState = _sliced_to_array(import_react10.default.useState(false), 2), clientSide = _import_react10_default_useState[0], setClientSide = _import_react10_default_useState[1];
    (0, import_react10.useEffect)(function() {
        setClientSide(true);
    }, []);
    var _import_react10_default_useState1 = _sliced_to_array(import_react10.default.useState(clientSide ? window.innerWidth <= 768 : false), 2), isMobile = _import_react10_default_useState1[0], setIsMobile = _import_react10_default_useState1[1];
    (0, import_react10.useEffect)(function() {
        var handleResize = function handleResize() {
            if (window && window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        if (!clientSide) return;
        setIsMobile(window.innerWidth <= 768);
        window && window.addEventListener("resize", handleResize);
        return function() {
            return window && window.removeEventListener("resize", handleResize);
        };
    }, [
        clientSide
    ]);
    function handleAddEvent(selectedDay) {
        var _CustomComponents_CustomEventModal_CustomAddEventModal, _CustomComponents_CustomEventModal, _CustomComponents_CustomEventModal_CustomAddEventModal1, _CustomComponents_CustomEventModal1;
        showAddEventModal({
            title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal = _CustomComponents_CustomEventModal.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal.title) || "Add Event",
            body: /* @__PURE__ */ import_react10.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal1 = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal1 === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal1 = _CustomComponents_CustomEventModal1.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal1.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : /* @__PURE__ */ new Date().getDate(), 0, 0, 0, 0);
                    endDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : /* @__PURE__ */ new Date().getDate(), 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var viewsSelector = isMobile ? views === null || views === void 0 ? void 0 : views.mobileViews : views === null || views === void 0 ? void 0 : views.views;
    return /* @__PURE__ */ import_react10.default.createElement("div", {
        className: "flex w-full flex-col"
    }, /* @__PURE__ */ import_react10.default.createElement("div", {
        className: "flex w-full"
    }, /* @__PURE__ */ import_react10.default.createElement("div", {
        className: "dayly-weekly-monthly-selection relative w-full"
    }, /* @__PURE__ */ import_react10.default.createElement(import_tabs.Tabs, {
        classNames: _object_spread({}, classNames === null || classNames === void 0 ? void 0 : classNames.tabs),
        "aria-label": "Options",
        color: "primary",
        variant: "solid"
    }, (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("day")) && /* @__PURE__ */ import_react10.default.createElement(import_tabs.Tab, {
        key: "day",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs = CustomComponents.customTabs) === null || _CustomComponents_customTabs === void 0 ? void 0 : _CustomComponents_customTabs.CustomDayTab) ? CustomComponents.customTabs.CustomDayTab : /* @__PURE__ */ import_react10.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ import_react10.default.createElement(import_lucide_react5.CalendarDaysIcon, {
            size: 15
        }), /* @__PURE__ */ import_react10.default.createElement("span", null, "Day"))
    }, /* @__PURE__ */ import_react10.default.createElement(import_framer_motion5.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ import_react10.default.createElement(DailyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons = CustomComponents.customButtons) === null || _CustomComponents_customButtons === void 0 ? void 0 : _CustomComponents_customButtons.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons1 = CustomComponents.customButtons) === null || _CustomComponents_customButtons1 === void 0 ? void 0 : _CustomComponents_customButtons1.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("week")) && /* @__PURE__ */ import_react10.default.createElement(import_tabs.Tab, {
        key: "week",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs1 = CustomComponents.customTabs) === null || _CustomComponents_customTabs1 === void 0 ? void 0 : _CustomComponents_customTabs1.CustomWeekTab) ? CustomComponents.customTabs.CustomWeekTab : /* @__PURE__ */ import_react10.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ import_react10.default.createElement(import_bs.BsCalendarWeek, null), /* @__PURE__ */ import_react10.default.createElement("span", null, "Week"))
    }, /* @__PURE__ */ import_react10.default.createElement(import_framer_motion5.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ import_react10.default.createElement(WeeklyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons2 = CustomComponents.customButtons) === null || _CustomComponents_customButtons2 === void 0 ? void 0 : _CustomComponents_customButtons2.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons3 = CustomComponents.customButtons) === null || _CustomComponents_customButtons3 === void 0 ? void 0 : _CustomComponents_customButtons3.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("month")) && /* @__PURE__ */ import_react10.default.createElement(import_tabs.Tab, {
        key: "month",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs2 = CustomComponents.customTabs) === null || _CustomComponents_customTabs2 === void 0 ? void 0 : _CustomComponents_customTabs2.CustomMonthTab) ? CustomComponents.customTabs.CustomMonthTab : /* @__PURE__ */ import_react10.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ import_react10.default.createElement(import_bs.BsCalendarMonth, null), /* @__PURE__ */ import_react10.default.createElement("span", null, "Month"))
    }, /* @__PURE__ */ import_react10.default.createElement(import_framer_motion5.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ import_react10.default.createElement(MonthView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons4 = CustomComponents.customButtons) === null || _CustomComponents_customButtons4 === void 0 ? void 0 : _CustomComponents_customButtons4.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons5 = CustomComponents.customButtons) === null || _CustomComponents_customButtons5 === void 0 ? void 0 : _CustomComponents_customButtons5.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    })))), (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons6 = CustomComponents.customButtons) === null || _CustomComponents_customButtons6 === void 0 ? void 0 : _CustomComponents_customButtons6.CustomAddEventButton) ? /* @__PURE__ */ import_react10.default.createElement("div", {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0"
    }, CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.customButtons.CustomAddEventButton) : /* @__PURE__ */ import_react10.default.createElement(import_button5.Button, {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0 " + (classNames === null || classNames === void 0 ? void 0 : (_classNames_buttons = classNames.buttons) === null || _classNames_buttons === void 0 ? void 0 : _classNames_buttons.addEvent),
        color: "primary",
        startContent: /* @__PURE__ */ import_react10.default.createElement(import_lucide_react5.Calendar, null)
    }, "Add Event"))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SchedularView: SchedularView,
    SchedulerProvider: SchedulerProvider,
    eventSchema: eventSchema,
    useScheduler: useScheduler,
    variants: variants
});
}),
];

//# sourceMappingURL=387af_4690062b._.js.map