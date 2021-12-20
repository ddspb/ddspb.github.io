try {
(function (exports) {
    'use strict';

    /**
     * Переменные подставляются во время сборки роллапом через rollup-plugin-replace
     */
    var argOptions = { "construct": "Metrika2", "callbackPostfix": "2", "version": "biseg9nvg5pfnxzofen" };
    var resourceId = "tag.js";

    var noop = function () {
        // DO NOTHING
    };

    var nonNativeFunctionsList = [];
    var reportNonNativeFunction =  function (fn, functionName) {
            nonNativeFunctionsList.push([functionName, fn]);
        }
        ;

    var isNativeFn = function (functionName, fn) {
        // ie8: "typeof window.attachEvent" => "object"
        var isNil = !fn;
        var isNotAFunction = typeof fn !== 'function';
        if (isNil || isNotAFunction) {
            return false;
        }
        var regexp = new RegExp("function\\s*(" + functionName + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", 'i');
        try {
            // Потому что IE 6
            return regexp.test("" + fn);
        }
        catch (e) { }
        return false;
    };

    var isNativeFunction = function (functionName, fn) {
        var isNative = isNativeFn(functionName, fn);
        {
            if (fn && !isNative) {
                reportNonNativeFunction(fn, functionName);
            }
        }
        return isNative;
    };

    var toNativeOrFalse = function (fn, functionName) {
        return /* @__PURE__ */ isNativeFunction(functionName, fn) && fn;
    };

    var protoToString = function (str) {
        return Object.prototype.toString.call(str);
    };
    var isString = function (obj) {
        return typeof obj === 'string';
    };
    var nativeIndexof = /* @__PURE__ */ toNativeOrFalse(String.prototype.indexOf, 'indexOf');
    var stringIndexOfPoly = function (str, substring) {
        var j = 0;
        var lastPoint = str.length - substring.length;
        for (var i = 0; i < str.length; i += 1) {
            if (str[i] === substring[j]) {
                j += 1;
            }
            else {
                j = 0;
            }
            if (j === substring.length) {
                return i - substring.length + 1;
            }
            if (!j && i > lastPoint) {
                return -1;
            }
        }
        return -1;
    };
    var stringIndexOf = function (string, substring) {
        return nativeIndexof
            ? nativeIndexof.call(string, substring)
            : stringIndexOfPoly(string, substring);
    };
    var stringIncludes = function (string, substring) {
        return !!(string && stringIndexOf(string, substring) !== -1);
    };
    var convertToString = function (value) {
        return "" + value;
    };
    var trimRegexp = /^\s+|\s+$/g;
    var trimText = function (text, length) {
        if (text) {
            var result = ("" + text).replace(trimRegexp, '');
            if (length && result.length > length) {
                return result.substr(0, length);
            }
            return result;
        }
        return '';
    };
    var escapeForRegExp = function (str) {
        return str
            .replace(/\^/g, '\\^')
            .replace(/\$/g, '\\$')
            .replace(/\./g, '\\.')
            .replace(/\[/g, '\\[')
            .replace(/\]/g, '\\]')
            .replace(/\|/g, '\\|')
            .replace(/\(/g, '\\(')
            .replace(/\)/g, '\\)')
            .replace(/\?/g, '\\?')
            .replace(/\*/g, '\\*')
            .replace(/\+/g, '\\+')
            .replace(/\{/g, '\\{')
            .replace(/\}/g, '\\}');
    };
    var rmSpaces = function (str) { return str.replace(/\s/g, ''); };

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var arrayFrom = /* @__PURE__ */ toNativeOrFalse(Array.from, 'from');
    var arrayFromPoly = function (smth) {
        var len = smth.length;
        var result = [];
        for (var i = 0; i < len; i += 1) {
            result.push(smth[i]);
        }
        return result;
    };

    var argsToArray = function (args) {
        if (arrayFrom) {
            try {
                return arrayFrom(args);
            }
            catch (e) {
                // do nothing
            }
        }
        return arrayFromPoly(args);
    };

    var joinPoly = function (str, array) {
        var result = '';
        for (var i = 0; i < array.length; i += 1) {
            result += "" + (i ? str : '') + array[i];
        }
        return result;
    };

    var nativeJoin = /* @__PURE__ */ toNativeOrFalse(Array.prototype.join, 'join');
    var arrayJoin = nativeJoin
        ? function (str, array) {
            return nativeJoin.call(array, str);
        }
        : joinPoly;

    var cCont = function (arg, fn) {
        return fn(arg);
    };

    var curry2 = function (func) {
        return function (a) {
            return function (b) {
                return func(a, b);
            };
        };
    };
    var curry2SwapArgs = function (func) {
        return function (b) {
            return function (a) {
                return func(a, b);
            };
        };
    };
    var curry = function c() {
        // eslint-disable-next-line prefer-rest-params
        var curryArgs = argsToArray(arguments);
        var fn = curryArgs.shift();
        return function curryStep() {
            // eslint-disable-next-line prefer-rest-params
            var args = argsToArray(arguments);
            if (fn.length > args.length + curryArgs.length) {
                // eslint-disable-next-line
                // @ts-expect-error
                return /* @__PURE__ */ curry.apply(void 0, /* @__PURE__ */ __spreadArrays([fn], curryArgs, args));
            }
            return fn.apply(void 0, /* @__PURE__ */ __spreadArrays(curryArgs, args));
        };
    };
    /**
     * @type function(...?): ?
     */
    var swap2args = function (func) {
        return /* @__PURE__ */ curry(function (c, d) {
            return func(d, c);
        });
    };
    /**
     * @type function(...?): ?
     */
    var equal = curry2(function (a, b) {
        return a === b;
    });
    /**
     * @type function(...?): ?
     */
    var asSideEffect = curry2(function (fn, arg) {
        fn(arg);
        return arg;
    });
    var ctxJoin = curry2(arrayJoin);
    /**
     * continuation monad
     */
    var cont = curry2(cCont);

    var isNull = /* @__PURE__ */ equal(null);
    var isFunction = function (fn) {
        return typeof fn === 'function';
    };
    var isUndefined = /* @__PURE__ */ equal(undefined);
    var isNil = function (object) {
        return isUndefined(object) || isNull(object);
    };
    // eslint-disable-next-line @typescript-eslint/ban-types
    var isObject = function (object) {
        return (!isNull(object) &&
            !isUndefined(object) &&
            protoToString(object) === '[object Object]');
    };

    var reducePoly = function (fn, first, array) {
        var i = 0;
        var len = array.length;
        var out = first;
        while (i < len) {
            out = fn(out, array[i], i);
            i += 1;
        }
        return out;
    };

    var callPoly = function (rawFnName, args, rawCtx) {
        if (args === void 0) { args = []; }
        var ctx = rawCtx || {};
        var no = args.length;
        var fnName = rawFnName;
        if (isFunction(fnName)) {
            fnName = 'd';
            ctx[fnName] = rawFnName;
        }
        fnName = fnName;
        var result;
        if (!no) {
            result = ctx[fnName]();
        }
        else if (no === 1) {
            result = ctx[fnName](args[0]);
        }
        else if (no === 2) {
            result = ctx[fnName](args[0], args[1]);
        }
        else if (no === 3) {
            result = ctx[fnName](args[0], args[1], args[2]);
        }
        else if (no === 4) {
            result = ctx[fnName](args[0], args[1], args[2], args[3]);
        }
        return result;
    };
    var bindPoly = function b() {
        // eslint-disable-next-line prefer-rest-params
        var bindArgs = argsToArray(arguments);
        var fn = bindArgs[0], ctx = bindArgs[1], topargs = bindArgs.slice(2);
        return function a() {
            // eslint-disable-next-line prefer-rest-params
            var args = /* @__PURE__ */ __spreadArrays(topargs, argsToArray(arguments));
            if (Function.prototype.call) {
                // eslint-disable-next-line
                return Function.prototype.call.apply(fn, /* @__PURE__ */ __spreadArrays([ctx], args));
            }
            if (ctx) {
                var fnName = "_b";
                while (ctx[fnName]) {
                    fnName += "_" + fnName.length;
                }
                ctx[fnName] = fn;
                var result = ctx[fnName] && callPoly(fnName, args, ctx);
                delete ctx[fnName];
                return result;
            }
            return callPoly(fn, args);
        };
    };

    var native = /* @__PURE__ */ toNativeOrFalse(Function.prototype.bind, 'bind');
    /**
     * @type function(function(...?): ?, (Object|null), ...?): ?
     */
    var bind = native
        ? function bindFunction() {
            // eslint-disable-next-line prefer-rest-params
            var bindArgs = argsToArray(arguments);
            var fn = bindArgs[0], ctx = bindArgs[1], args = bindArgs.slice(2);
            return native.apply(fn, /* @__PURE__ */ __spreadArrays([ctx], args));
        }
        : bindPoly;
    var bindArgs = function (args, fn) {
        return bind.apply(void 0, /* @__PURE__ */ __spreadArrays([fn, null], args));
    };
    /**
     * @type function(...?): ?
     */
    var bindArg = function (arg, fn) {
        return bindArgs([arg], fn);
    };
    /**
     * todo попробовать сделать type-проверку принадлежности name к obj
     * @type function(...?): ?
     */
    var bindThisForMethod = function (name, obj) {
        return bind(obj[name], obj);
    };
    var bindThisForMethodTest = function (a) {
        return /* @__PURE__ */ bindThisForMethod('test', a);
    };

    var ctxBindArgs = curry2(bindArgs);
    var ctxBindThisForMethod = curry2(bindThisForMethod);

    var nativeReduce = /* @__PURE__ */ toNativeOrFalse(Array.prototype.reduce, 'reduce');
    var cReduce = nativeReduce
        ? function (fn, first, array) {
            return nativeReduce.call(array, fn, first);
        }
        : reducePoly;
    /**
     * @type function(...?): ?
     */
    var ctxReduce = function (fn, first) { return bindArgs([fn, first], cReduce); };

    /**
     * ВНИМАНИЕ! Использовать только для нативных функций/объектов или внешних данных
     * ВНИМАНИЕ! Обфускация может сделать путь невалидным
     * @param ctx
     * @param path
     */
    var getPath = function (ctx, path) {
        if (!ctx) {
            return null;
        }
        return cReduce(function (out, step) {
            if (isNil(out)) {
                return out;
            }
            try {
                return out[step];
            }
            catch (e) {
                // empty
            }
            return null;
        }, ctx, path.split('.'));
    };
    /**
     * @type function(...?): ?
     */
    var ctxPath = curry2SwapArgs(getPath);
    var len = /* @__PURE__ */ ctxPath('length');
    /**
     * Получаем из списка [1,2,3] объект {1: {2: 3}}
     * @param {string} path
     * @param {Object} [origCtx]
     */
    var genPath = function (path, origCtx) {
        if (origCtx === void 0) { origCtx = {}; }
        if (!path || path.length < 1) {
            return origCtx;
        }
        var splittedPath = path;
        cReduce(function (cParent, field, i) {
            var parent = cParent;
            var isLast = i === splittedPath.length - 1;
            var isPrevLast = i === splittedPath.length - 2;
            if (isLast) {
                return parent;
            }
            if (isPrevLast) {
                parent[field] = splittedPath[i + 1];
            }
            else if (!parent[field]) {
                parent[field] = {};
            }
            return parent[field];
        }, origCtx, splittedPath);
        return origCtx;
    };

    /**
     * @type function(...?): function(...?)
     */
    var pipe = function b() {
        var fnList = argsToArray(arguments);
        var firstFn = fnList.shift();
        return function pipeStartFunction() {
            // @ts-ignore
            var firstResult = firstFn.apply(void 0, arguments);
            return cReduce(cCont, firstResult, fnList);
        };
    };
    var dirtyPipe = pipe; // тоже самое что pipe, но он может иметь сайд эффекты

    /* eslint-disable-next-line import/no-mutable-exports */
    var isArrayFn;
    var isArrayPolyfil = /* @__PURE__ */ pipe(protoToString, /* @__PURE__ */ equal('[object Array]'));
    var isArray = (function (obj) {
        if (isArrayFn) {
            return isArrayFn(obj);
        }
        isArrayFn = /* @__PURE__ */ toNativeOrFalse(Array.isArray, 'isArray');
        if (!isArrayFn) {
            isArrayFn = isArrayPolyfil;
        }
        return isArrayFn(obj);
    });

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var has = function (object, property) {
        return isNil(object) ? false : hasOwnProperty.call(object, property);
    };

    /**
     * todo распихать полифиллы по нужным папкам в utils - array/object/function/etc
     */
    var filterPoly = function (fn, array) {
        return reducePoly(function (result, item, i) {
            if (fn(item, i)) {
                result.push(item);
            }
            return result;
        }, [], array);
    };
    var includesPoly = function (e, array) {
        return filterPoly(/* @__PURE__ */ equal(e), array).length >= 1;
    };
    var keysPoly = function (obj) {
        var out = [];
        var key;
        // eslint-disable-next-line no-restricted-syntax
        for (key in obj) {
            if (has(obj, key)) {
                out.push(key);
            }
        }
        return out;
    };
    var assignPoly = function assignPoly() {
        // eslint-disable-next-line prefer-rest-params
        var assignArgs = argsToArray(arguments);
        var dst = assignArgs[0], args = assignArgs.slice(1);
        while (args.length) {
            var obj = args.shift();
            // eslint-disable-next-line no-restricted-syntax
            for (var key in obj) {
                if (has(obj, key)) {
                    dst[key] = obj[key];
                }
            }
            /**
             * по всей видимости в каких-то браузерах проп toString не попадал в for..in
             * но попадал в obj.hasOwnProperty
             * поэтому приходится вручную проверять
             */
            if (has(obj, 'toString')) {
                dst['toString'] = obj['toString'];
            }
        }
        return dst;
    };
    var mapPoly = function (fn, array) {
        return reducePoly(function (rawResult, item, i) {
            var result = rawResult;
            result.push(fn(item, i));
            return result;
        }, [], array);
    };
    var flatMapPoly = function (fn, array) {
        return reducePoly(function (result, item, i) {
            var fnResult = fn(item, i);
            return result.concat(isArray(fnResult) ? fnResult : [fnResult]);
        }, [], array);
    };
    var entriesPoly = function (obj) {
        if (isUndefined(obj)) {
            return [];
        }
        return reducePoly(function (rawResult, key) {
            var result = rawResult;
            result.push([key, obj[key]]);
            return result;
        }, [], keysPoly(obj));
    };
    var somePoly = function (fn, array) {
        for (var i = 0; i < array.length; i += 1) {
            // fn не выполняется для отсутствующих или удаленных значений массива (по спецификации)
            if (i in array && fn.call(array, array[i], i)) {
                return true;
            }
        }
        return false;
    };
    var findPoly = function (fn, array) {
        for (var i = 0; i < array.length; i += 1) {
            if (fn.call(array, array[i], i)) {
                return array[i];
            }
        }
        return undefined;
    };
    var repeatPoly = function (text, times) {
        var result = '';
        for (var i = 0; i < times; i += 1) {
            result += text;
        }
        return result;
    };

    var entries = Object.entries
        ? function (obj) {
            if (!obj) {
                return [];
            }
            return Object.entries(obj);
        }
        : entriesPoly;
    var cKeys = Object.keys
        ? Object.keys
        : keysPoly;

    var mix = Object.assign || assignPoly;
    /**
     * @type function(...*): *
     * с curry2 не выйдет потому что нужен каждый раз новый экземпляр объекта
     */
    var ctxMix = curry2(function (obj1, obj2) {
        return mix({}, obj1, obj2);
    });

    var yandexNamespace = 'Ya';
    var metrikaNamespace = '_metrika';
    var globalStorage = function (ctx) {
        /* eslint-disable no-multi-assign */
        var winCtx = ctx;
        var yan = (winCtx[yandexNamespace] = winCtx[yandexNamespace] || {});
        var metrika = (yan[metrikaNamespace] = yan[metrikaNamespace] || {});
        var storage = metrika;
        return {
            setSafe: function (name, value) {
                if (!hasOwnProperty.call(storage, name)) {
                    storage[name] = value;
                }
                return this;
            },
            setVal: function (name, value) {
                storage[name] = value;
                return this;
            },
            getVal: function (name, defVal) {
                var val = storage[name];
                if (!hasOwnProperty.call(storage, name) && !isUndefined(defVal)) {
                    return defVal;
                }
                return val;
            },
        };
    };

    var indexOfPoly = function (val, array) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i] === val) {
                return i;
            }
        }
        return -1;
    };
    // тут нельзя использовать memo так как memo использует эту функцию
    var indexMemo;
    var cIndexOf = function (ctx) {
        if (indexMemo) {
            return indexMemo;
        }
        var checkIndexFn = false;
        try {
            // Тест для IE 6 или старого safari (никто точно не помнит)
            // eslint-disable-next-line
            checkIndexFn = [].indexOf && [undefined].indexOf(undefined) === 0;
        }
        catch (_a) {
            // empty
        }
        var isAccesebleArray = ctx.Array && ctx.Array.prototype;
        var nativeFn = isAccesebleArray &&
            /* @__PURE__ */ toNativeOrFalse(ctx.Array.prototype.indexOf, 'indexOf');
        var indexFn;
        if (checkIndexFn && nativeFn) {
            indexFn = function (val, array) {
                return nativeFn.call(array, val);
            };
        }
        else {
            indexFn = indexOfPoly;
        }
        indexMemo = indexFn;
        return indexFn;
    };
    var cIndexOfWin = cIndexOf(window);
    /**
     * @type function(...?): ?
     */
    var ctxIndexOf = curry2SwapArgs(cIndexOfWin);

    var firstArg = function (a) { return a; };
    var secondArg = function (a, b) { return b; };
    var notFn = function (res) { return !res; };

    /* eslint-disable */
    /**
     * @type function(...?): ?
     *
     */
    var memo = function (fn, rawKeyFn) {
        var keyFn;
        var resStorage = [];
        var keyStorage = [];
        if (!rawKeyFn) {
            keyFn = firstArg;
        }
        else {
            keyFn = rawKeyFn;
        }
        // @ts-expect-error
        return function a() {
            // eslint-disable-next-line prefer-rest-params
            var fnArgs = argsToArray(arguments);
            var key = keyFn.apply(void 0, fnArgs);
            var keyIndex = cIndexOfWin(key, keyStorage);
            if (keyIndex !== -1) {
                return resStorage[keyIndex];
            }
            var fnRes = fn.apply(void 0, fnArgs);
            resStorage.push(fnRes);
            keyStorage.push(key);
            return fnRes;
        };
    };

    var getGlobalStorage = /* @__PURE__ */ memo(globalStorage);

    var call = function (fn, arg) { return (arg ? fn(arg) : fn()); };

    // Внимание этот файл так же исполняется при сборке в node.js
    // для получения номера версии исходя из флагов сборки
    function getVersion() {
        return  '25';
    }

    var MEMO_FN_KEY = "m" + getVersion();
    var IS_RECOVERED_FN_KEY = 'r';
    var globalMemoWin = function (key, fn) {
        return function globalMemoWrapper() {
            // eslint-disable-next-line prefer-rest-params
            var _a = argsToArray(arguments), ctx = _a[0], args = _a.slice(1);
            var storage = getGlobalStorage(ctx);
            var memoStorage = storage.getVal(MEMO_FN_KEY, {});
            var wrappedFunction = getPath(memoStorage, key);
            if (!wrappedFunction) {
                wrappedFunction = /* @__PURE__ */ memo(fn);
                memoStorage[key] = wrappedFunction;
                storage.setVal(MEMO_FN_KEY, memoStorage);
            }
            return wrappedFunction.apply(void 0, /* @__PURE__ */ __spreadArrays([ctx], args));
        };
    };

    var getNativeFunction = function (functionName, owner) {
        var ownerFn = getPath(owner, functionName);
        var fn = getPath(owner, "constructor.prototype." + functionName) || ownerFn;
        try {
            if (fn && fn.apply) {
                return function nativeFunction() {
                    // eslint-disable-next-line prefer-rest-params
                    return fn.apply(owner, arguments);
                };
            }
        }
        catch (e) {
            // ie 8
            return ownerFn;
        }
        return fn;
    };

    var constructObject = function () { return ({}); };
    var constructArray = function () { return []; };

    var clearDefer = function (ctx, deferId) {
        var clearTimeout = /* @__PURE__ */ getNativeFunction('clearTimeout', ctx);
        // eslint-disable-next-line ban/ban
        return clearTimeout(deferId);
    };
    // Без errorLogger - для избежания циклических зависимостей в транспортах и callForeignCallback
    var setDeferBase = function (ctx, fn, timeOut) {
        var setTimeout = /* @__PURE__ */ getNativeFunction('setTimeout', ctx);
        // eslint-disable-next-line ban/ban
        return setTimeout(fn, timeOut);
    };

    var throwFunction = function (reason) {
        throw reason;
    };

    /**
     * запускает неизвестную функцию в try..catch
     * исключение бросает в следующем тике, чтобы не прервать текущий контекст выполнения
     */
    var callUserCallback = function z(ctx, callback, userContext) {
        try {
            if (isFunction(callback)) {
                // eslint-disable-next-line prefer-rest-params
                var _a = argsToArray(arguments), args = _a.slice(3);
                if (!isNil(userContext)) {
                    bind.apply(void 0, /* @__PURE__ */ __spreadArrays([callback, userContext], args))();
                }
                else {
                    callback.apply(void 0, args);
                }
            }
        }
        catch (error) {
            setDeferBase(ctx, /* @__PURE__ */ bindArg(error, throwFunction), 0);
        }
    };

    var cEvery = Array.prototype.every
        ? function (fn, array) {
            return Array.prototype.every.call(array, fn);
        }
        : function (fn, array) {
            return cReduce(function (flag, value) {
                return flag ? fn(value) : false;
            }, true, array);
        };

    var nativeFilter = /* @__PURE__ */ toNativeOrFalse(Array.prototype.filter, 'filter');
    var cFilter = nativeFilter
        ? function (fn, array) {
            return nativeFilter.call(array, fn);
        }
        : filterPoly;
    /**
     * @type function(...?): ?
     */
    var ctxFilter = curry2(cFilter);

    var ternary = function (a, b, cond) { return (cond ? a : b); };

    var cFind = ternary(function (fn, array) {
        return Array.prototype.find.call(array, fn);
    }, findPoly, /* @__PURE__ */ isNativeFunction('find', Array.prototype.find));

    var includes = Array.prototype.includes
        ? function (el, array) {
            return Array.prototype.includes.call(array, el);
        }
        : includesPoly;
    /**
     * первый аргумент где второй что
     * @type function(...?): ?
     */
    var ctxIncludes = curry2SwapArgs(includes);

    var getAppleUAProps = /* @__PURE__ */ memo(function (ctx) {
        var navigator = getPath(ctx, 'navigator') || {};
        var userAgentInfo = getPath(navigator, 'userAgent') || '';
        var vendor = getPath(navigator, 'vendor') || '';
        var isApple = vendor.indexOf('Apple') > -1;
        return { isApple: isApple, userAgentInfo: userAgentInfo };
    });

    var isFF = /* @__PURE__ */ memo(function (ctx) {
        var style = getPath(ctx, 'document.documentElement.style');
        var InstallTrigger = getPath(ctx, 'InstallTrigger');
        return !!(style && 'MozAppearance' in style && !isNil(InstallTrigger));
    });

    var isLengthCorrect = function (ctx, method) {
        if (!isFF(ctx)) {
            return true;
        }
        /*
            <= v42 - "Expected int32 as second argument" METR-37094, METR-41438
            v43-v49 - Зависает при передаче { length: -1 } METRIKASUPP-12625
         */
        try {
            method.call({ 0: true, length: -(Math.pow(2, 32)) + 1 }, function () {
                // eslint-disable-next-line no-throw-literal
                throw 1;
            });
        }
        catch (_a) {
            return false;
        }
        return true;
    };
    var nativeMap = /* @__PURE__ */ toNativeOrFalse(Array.prototype.map, 'map');
    var baseMap = nativeMap && /* @__PURE__ */ isLengthCorrect(window, Array.prototype.map)
        ? function (fn, array) {
            // FIXME METR-40760
            return array && array.length > 0 ? nativeMap.call(array, fn) : [];
        }
        : mapPoly;
    var cMap = baseMap;
    var cForEach = baseMap; // cForEach - тоже самое что cMap, но она может иметь сайд эффекты, cMap - чистая ф-ция
    var flatMap = Array.prototype.flatMap
        ? function (fn, array) {
            return Array.prototype.flatMap.call(array, fn);
        }
        : flatMapPoly;
    /**
     * @type function(...?): ?
     */
    var ctxMap = curry2(cMap);
    var ctxMapSwap = curry2SwapArgs(cMap);

    var cSome = ternary(function (fn, array) {
        return Array.prototype.some.call(array, fn);
    }, somePoly, /* @__PURE__ */ isNativeFunction('some', Array.prototype.some));

    var getRange = function (n) {
        if (n < 0) {
            return [];
        }
        var result = [];
        for (var i = 0; i <= n; i += 1) {
            result.push(i);
        }
        return result;
    };
    var toArray = function (smth) {
        if (!smth) {
            return [];
        }
        if (isArray(smth)) {
            return smth;
        }
        if (arrayFrom) {
            return arrayFrom(smth);
        }
        if (typeof smth.length === 'number' && smth.length >= 0) {
            return arrayFromPoly(smth);
        }
        return [];
    };
    var indexOfWin = /* @__PURE__ */ memo(cIndexOf);
    var exclude = function (from, what) {
        return /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxIncludes(what), notFn), from);
    };

    var cSort = function (fn, array) {
        return Array.prototype.sort.call(array, fn);
    };
    /**
     * @type function(...?): ?
     */
    var currSort = curry2(cSort);

    /*
    Почему не a.push(...b)? Потому что есть бага
    https://bugs.webkit.org/show_bug.cgi?id=80797
    TODO подумать про производительность
    */
    var arrayMerge = function (source, part) {
        cForEach(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('push', source)), part);
        return source;
    };

    var nativeReverse = /* @__PURE__ */ toNativeOrFalse(Array.prototype.reverse, 'reverse');
    var reversePoly = function (arr) {
        var result = [];
        for (var i = arr.length - 1; i >= 0; i -= 1) {
            result[arr.length - 1 - i] = arr[i];
        }
        return result;
    };
    var cReverse = nativeReverse
        ? function (array) {
            return nativeReverse.call(array);
        }
        : reversePoly;

    var isBrokenFromCharCode = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('String.fromCharCode'), /* @__PURE__ */ bindArg('fromCharCode', isNativeFunction), notFn));
    var getAgent = /* @__PURE__ */ memo(/* @__PURE__ */ ctxPath('navigator.userAgent'));
    var isIOS = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(getAgent, /* @__PURE__ */ bindThisForMethodTest(/ipad|iphone|ipod/i)));
    var getPlatform = /* @__PURE__ */ memo(function (ctx) {
        return getPath(ctx, 'navigator.platform') || '';
    });
    var isSafariWebView = /* @__PURE__ */ memo(function (ctx) {
        var _a = getAppleUAProps(ctx), isApple = _a.isApple, userAgentInfo = _a.userAgentInfo;
        return (isApple &&
            ((!userAgentInfo.match(/Safari/) && userAgentInfo.match(/Mobile/)) ||
                userAgentInfo.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) ||
                userAgentInfo.indexOf('FB_IAB') !== -1 ||
                userAgentInfo.indexOf('FBAV') !== -1 ||
                userAgentInfo.indexOf('OKApp') !== -1 ||
                userAgentInfo.indexOf('GSA/') !== -1));
    });
    var isSafari = /* @__PURE__ */ memo(function (ctx) {
        var _a = getAppleUAProps(ctx), isApple = _a.isApple, userAgentInfo = _a.userAgentInfo;
        return isApple && !userAgentInfo.match('CriOS');
    });
    var isAndroidWebView = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(getAgent, /* @__PURE__ */ bindThisForMethod('test', /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)));
    var SameSiteRegexp = /Chrome\/(\d+)\./;
    var isSameSiteBrowser = /* @__PURE__ */ memo(function (ctx) {
        var userAgent = getPath(ctx, 'navigator.userAgent') || '';
        var match = userAgent.match(SameSiteRegexp);
        if (match && match.length) {
            var version = parseInt(match[1], 10);
            return version >= 76;
        }
        return false;
    });
    var isAndroid = /* @__PURE__ */ memo(function (ctx) {
        var userAgent = (getAgent(ctx) || '').toLowerCase();
        var platform = getPlatform(ctx);
        return Boolean(userAgent.indexOf('android') !== -1 &&
            userAgent.indexOf(userAgent, 'mobile') !== -1 &&
            /^android|linux armv/i.test(platform));
    });
    var NET_MAP = [
        'other',
        'none',
        'unknown',
        'wifi',
        'ethernet',
        'bluetooth',
        'cellular',
        'wimax',
        'mixed',
    ];
    var netType = /* @__PURE__ */ memo(function (ctx) {
        var connectionType = getPath(ctx, 'navigator.connection.type');
        if (isUndefined(connectionType)) {
            return null;
        }
        var index = indexOfWin(ctx)(connectionType, NET_MAP);
        return index === -1 ? connectionType : "" + index;
    });
    var isIE = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('document.addEventListener'), notFn));
    var getNavigatorLanguage = /* @__PURE__ */ memo(function (ctx) {
        var nav = getPath(ctx, 'navigator') || {};
        return cReduce(function (accum, field) {
            return accum || getPath(nav, field);
        }, '', ['language', 'userLanguage', 'browserLanguage', 'systemLanguage']);
    });
    var getLanguage = /* @__PURE__ */ memo(function (ctx) {
        var nav = getPath(ctx, 'navigator') || {};
        var result = getNavigatorLanguage(ctx);
        if (!isString(result)) {
            result = '';
            var tempResult = getPath(nav, 'languages.0');
            if (isString(tempResult)) {
                result = tempResult;
            }
        }
        return result.toLowerCase().split('-')[0];
    });
    var BATTERY_INFO = 'bt';
    var getDesktopFlag = function (ctx) {
        var globalConfig = getGlobalStorage(ctx);
        var batteryInfo = globalConfig.getVal(BATTERY_INFO, {});
        if (isUndefined(globalConfig.getVal(BATTERY_INFO))) {
            var getBattery = getPath(ctx, 'navigator.getBattery');
            // getBattery() not available in privacy proxy mode
            try {
                batteryInfo.p = getBattery ? getBattery.call(ctx.navigator) : null;
            }
            catch (e) { }
            globalConfig.setVal(BATTERY_INFO, batteryInfo);
            if (batteryInfo.p && batteryInfo.p.then) {
                batteryInfo.p.then(function (battery) {
                    batteryInfo.v = battery.charging && battery.chargingTime === 0;
                });
            }
        }
        return batteryInfo.v ? '1' : '0';
    };
    var isIframe = /* @__PURE__ */ memo(function (ctx) {
        var out = false;
        try {
            out = ctx.top !== ctx;
        }
        catch (e) {
            // empty
        }
        return out;
    });
    var isTopWindowAccessible = /* @__PURE__ */ memo(function (ctx) {
        var out = false;
        try {
            out = ctx.top.contentWindow;
        }
        catch (e) {
            // empty
        }
        return out;
    });
    var getJavaEnabled = /* @__PURE__ */ memo(function (ctx) {
        var out = false;
        try {
            out = ctx.navigator.javaEnabled();
        }
        catch (e) {
            // empty
        }
        return out;
    });
    var isSelenium = /* @__PURE__ */ memo(function (ctx) {
        var winProps = ['_selenium', 'callSelenium', '_Selenium_IDE_Recorder'];
        var docProps = [
            '__webdriver_evaluate',
            '__selenium_evaluate',
            '__webdriver_script_function',
            '__webdriver_script_func',
            '__webdriver_script_fn',
            '__fxdriver_evaluate',
            '__driver_unwrapped',
            '__webdriver_unwrapped',
            '__driver_evaluate',
            '__selenium_unwrapped',
            '__fxdriver_unwrapped',
        ];
        var external = getPath(ctx, 'external');
        var externalStr = getPath(external, 'toString')
            ? "" + external.toString() // toString может вернуть undefined
            : '';
        var isSequentum = externalStr.indexOf('Sequentum') !== -1;
        var documentElement = getPath(ctx, 'document.documentElement');
        var docElemProps = ['selenium', 'webdriver', 'driver'];
        return !!(/* @__PURE__ */ cSome(/* @__PURE__ */ bindArg(ctx, getPath), winProps) ||
            /* @__PURE__ */ cSome(/* @__PURE__ */ bindArg(getPath(ctx, 'document'), getPath), docProps) ||
            isSequentum ||
            (documentElement &&
                /* @__PURE__ */ cSome(bind(documentElement.getAttribute, documentElement), docElemProps)));
    });
    var isHeadLess = /* @__PURE__ */ memo(function (ctx) {
        return !!(/* @__PURE__ */ cSome(/* @__PURE__ */ bindArg(ctx, getPath), [
            '_phantom',
            '__nightmare',
            'callPhantom',
        ]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(getAgent(ctx)) ||
            getPath(ctx, 'navigator.webdriver') ||
            (getPath(ctx, 'isChrome') && !getPath(ctx, 'chrome')));
    });
    var isFacebookInstantArticles = /* @__PURE__ */ memo(function (ctx) {
        return cEvery(/* @__PURE__ */ bindArg(ctx, getPath), [
            'ia_document.shareURL',
            'ia_document.referrer',
        ]);
    });
    var isChromePdf = /* @__PURE__ */ memo(function (ctx) {
        var plugins = getPath(ctx, 'navigator.plugins');
        return !!(plugins &&
            len(plugins) &&
            /* @__PURE__ */ cSome(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('name'), /* @__PURE__ */ bindThisForMethodTest(/Chrome PDF Viewer/)), plugins));
    });
    var isNotificationAllowed = function (ctx) {
        var permission = getPath(ctx, 'Notification.permission');
        switch (permission) {
            case 'denied':
                return false;
            case 'granted':
                return true;
            default:
                return null;
        }
    };
    var isPrerender = function (ctx) {
        return includes('prerender', /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(getPath(ctx, 'document'), getPath), [
            'webkitVisibilityState',
            'visibilityState',
        ]));
    };
    var botRegExp = new RegExp(/* @__PURE__ */ arrayJoin('|', [
        'yandex.com/bots',
        'Googlebot',
        'APIs-Google',
        'Mediapartners-Google',
        'AdsBot-Google',
        'FeedFetcher-Google',
        'Google-Read-Aloud',
        'DuplexWeb-Google',
        'Google Favicon',
        'googleweblight',
        'Mail.RU_Bot',
        'StackRambler',
        'Slurp',
        'msnbot',
        'bingbot',
        'www.baidu.com/search/spi_?der.htm',
    ]).replace(/[./]/g, '\\$&'));
    var isSearchRobot = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('navigator.userAgent'), /* @__PURE__ */ bindThisForMethodTest(botRegExp)));
    var isITP = /* @__PURE__ */ memo(function (ctx) {
        var agent = getAgent(ctx) || '';
        var macOSmatch = agent.match(/Mac OS X ([0-9]+)_([0-9]+)/);
        var version = macOSmatch ? [+macOSmatch[1], +macOSmatch[2]] : [0, 0];
        var isIOSmatch = agent.match(/iPhone OS ([1-9]+)_([0-9]+)/);
        var isOSVersion = isIOSmatch ? +isIOSmatch[1] : 0;
        if (isOSVersion >= 14) {
            return true;
        }
        return ((isIOS(ctx) ||
            version[0] > 10 ||
            (version[0] === 10 && version[1] >= 13)) &&
            isSafari(ctx));
    });
    /*
        window.orientation есть только в мобильных браузерах
        https://caniuse.com/?search=window.orientation
     */
    var isMobile = function (ctx) {
        return isIOS(ctx) ||
            isAndroid(ctx) ||
            /mobile/i.test(getAgent(ctx)) ||
            !isUndefined(getPath(ctx, 'orientation'));
    };

    var constructorName = argOptions.construct ;
    var BASE_TLD =  'ru';
    var BASE_TLD_SYNC_COOKIE =  'ru';
    var BASE_DOMAIN = 'mc.yandex';
    var hostInfo = BASE_DOMAIN + "." + BASE_TLD;
    var host = hostInfo;
    var isIE$1 = isIE(window);
    var config = {
        METRIKA_COUNTER: 24226447,
        ERROR_LOGGER_COUNTER: 26302566,
        RESOURCES_TIMINGS_COUNTER: 51533966,
        GOALS_EXP_COUNTER: 65446441,
        cProtocol:  'https:',
        buildVersion: getVersion(),
        constructorName: constructorName,
        MAX_LEN_URL: isIE$1 ? 512 : 2048,
        MAX_LEN_SITE_INFO: isIE$1 ? 512 : 2048,
        MAX_LEN_TITLE: isIE$1 ? 100 : 400,
        MAX_LEN_IL: 100,
        NOINDEX: 'noindex',
    };

    var DEFAULT_COUNTER_TYPE = '0';
    var RSYA_COUNTER_TYPE = '1';
    var obfuscatedKeysMap = {
        id: 'id',
        ut: 'ut',
        counterType: 'type',
        ldc: 'ldc',
        noCookie: 'nck',
        forceUrl: 'url',
        forceReferrer: 'referrer',
    };
    var COUNTER_ID_REGEX = /^\d+$/;
    var DEFAULT_ID = '0';
    var normalizeId = function (rawCounterId) {
        var counterString = "" + (rawCounterId || DEFAULT_ID); // идентификатор счетчика
        if (!COUNTER_ID_REGEX.test(counterString)) {
            counterString = DEFAULT_ID;
        }
        var counterId;
        try {
            counterId = parseInt(counterString, 10);
        }
        catch (e) {
            counterId = 0;
        }
        return counterId;
    };
    var normalizeOptionsMap = {
        id: normalizeId,
        counterType: function (value) {
            return "" + (value || value === 0 ? value : DEFAULT_COUNTER_TYPE);
        },
        noCookie: Boolean,
        ut: Boolean,
    };
    {
        obfuscatedKeysMap.counterDefer = 'defer';
        normalizeOptionsMap.counterDefer = Boolean;
    }
    {
        obfuscatedKeysMap.yaDisableGDPR = 'yaDisableGDPR';
        obfuscatedKeysMap.yaGDPRLang = 'yaGDPRLang';
    }
    {
        obfuscatedKeysMap.exp = 'experiments';
    }
    {
        obfuscatedKeysMap.ecommerce = 'ecommerce';
        normalizeOptionsMap.ecommerce = function (value) {
            if (value) {
                if (value === true) {
                    return 'dataLayer';
                }
                return /* @__PURE__ */ convertToString(value);
            }
            return undefined;
        };
    }
    {
        obfuscatedKeysMap.params = 'params';
    }
    {
        obfuscatedKeysMap.userParams = 'userParams';
    }
    {
        obfuscatedKeysMap.accurateTrackBounce = 'accurateTrackBounce';
    }
    {
        obfuscatedKeysMap.triggerEvent = 'triggerEvent';
        normalizeOptionsMap.triggerEvent = Boolean;
    }
    {
        obfuscatedKeysMap.sendTitle = 'sendTitle';
        normalizeOptionsMap.sendTitle = function (value) {
            return Boolean(value) || isUndefined(value);
        };
    }
    {
        obfuscatedKeysMap.trackHash = 'trackHash';
        normalizeOptionsMap.trackHash = Boolean;
    }
    {
        obfuscatedKeysMap.clickmap = 'clickmap';
    }
    {
        obfuscatedKeysMap.webvisor = 'webvisor';
        normalizeOptionsMap.webvisor = Boolean;
        {
            obfuscatedKeysMap.trustedDomains = 'trustedDomains';
        }
    }
    {
        obfuscatedKeysMap.childIframe = 'childIframe';
        normalizeOptionsMap.childIframe = Boolean;
    }
    {
        obfuscatedKeysMap.trackLinks = 'trackLinks';
    }
    {
        obfuscatedKeysMap.enableAll = 'enableAll';
    }
    var optionsKeysMap = cReduce(function (acc, _a) {
        var key = _a[0], obfuscatedKey = _a[1];
        acc[key] = {
            optKey: obfuscatedKey,
            normalizeFunction: normalizeOptionsMap[key],
        };
        return acc;
    }, {}, entries(obfuscatedKeysMap));

    var turboInfo = {};
    var getCounterKey = /* @__PURE__ */ memo(function (opt) {
        return opt.id + ":" + opt.counterType;
    });
    var TURBO_PARAMS_PATH = '__ym.turbo_page';
    var setTurboInfo = function (options, params) {
        var counterId = getCounterKey(options);
        var tp = getPath(params, TURBO_PARAMS_PATH);
        var tpid = getPath(params, TURBO_PARAMS_PATH + "_id");
        if (!turboInfo[counterId]) {
            turboInfo[counterId] = {};
        }
        if (tp || tpid) {
            turboInfo[counterId].tp = tp;
            turboInfo[counterId].tpid = tpid;
        }
    };
    var isTurboPage = function (options) {
        var id = getCounterKey(options);
        return turboInfo[id] && turboInfo[id].tp;
    };
    // Добавляем в типизацию строку, чтобы можно было проверять любые инпуты
    var isRsyaCounter = /* @__PURE__ */ equal(RSYA_COUNTER_TYPE);
    var getTurboPageId = function (options) {
        var id = getCounterKey(options);
        return (turboInfo[id] && turboInfo[id].tpid) || null;
    };
    var getOriginalOptions = function (counterOptions, optionsKeysMap) {
        return cReduce(function (futureOptions, _a) {
            var obfuscatedKey = _a[0], value = _a[1];
            var optKey = optionsKeysMap[obfuscatedKey].optKey;
            futureOptions[optKey] = value;
            return futureOptions;
        }, {}, entries(counterOptions));
    };
    var normalizeOptions = function (counterId, optionsKeysMap, counterParams, counterType, counterDefer) {
        var counterData = typeof counterId === 'object'
            ? counterId
            : {
                id: counterId,
                counterType: counterType,
                counterDefer: counterDefer,
                params: counterParams,
            };
        var options = cReduce(function (acc, _a) {
            var obfuscatedKey = _a[0], _b = _a[1], key = _b.optKey, normalize = _b.normalizeFunction;
            var value = counterData[key];
            acc[obfuscatedKey] = normalize ? normalize(value) : value;
            return acc;
        }, {}, entries(optionsKeysMap));
        setTurboInfo(options, options.params || {});
        return options;
    };

    var LAST_REFERRER_KEY = 'lastReferrer';
    var HIT_PARAMS_KEY = 'hitParam';

    var METHOD_NAME_HIT = 'hit';
    var ARTIFICIAL_BR_KEY = 'ar';

    var PAGE_VIEW_BR_KEY = 'pv';

    /**
     * @param {Object} [ctx]
     */
    var flagStorage = function (serialize) {
        return function (initialData) {
            var flags = initialData || {};
            return {
                ctx: /* @__PURE__ */ bindArg(flags, firstArg),
                getVal: function (flag, defVal) {
                    var out = flags[flag];
                    if (isUndefined(out) && !isUndefined(defVal)) {
                        return defVal;
                    }
                    return out;
                },
                setVal: function (flag, val) {
                    flags[flag] = val;
                    return this;
                },
                setOrNot: function (flag, val) {
                    if (val === '' || isNil(val)) {
                        return this;
                    }
                    return this.setVal(flag, val);
                },
                serialize: /* @__PURE__ */ bindArg(flags, serialize),
            };
        };
    };

    var TITLE_BR_KEY = 't';
    var ADB_BR_KEY = 'adb';
    var BROWSERINFO_QUERY_KEY = 'browser-info';
    var BR_INFO_DILIMITER = ':';
    /**
     * @param {Object} [ctx]
     */
    var browserInfo = flagStorage(function (flags) {
        // title should always be last
        var titleComponent = '';
        var result = cReduce(function (carry, _a) {
            var key = _a[0], value = _a[1];
            var brinfoComponent = "" + key + BR_INFO_DILIMITER + value;
            if (key === TITLE_BR_KEY) {
                titleComponent = brinfoComponent;
            }
            else {
                carry.push(brinfoComponent);
            }
            return carry;
        }, [], entries(flags));
        if (titleComponent) {
            result.push(titleComponent);
        }
        return /* @__PURE__ */ arrayJoin(BR_INFO_DILIMITER, result);
    });

    var READY_STATE = 1;
    var CSP_TEST_ERROR = 2;
    var CSP_INFO_ERROR = 3;
    var CSP_WAIT = 4;
    var PROVIDER_KEY = 'isp';
    var MEGAFON_KEY = 'mf';
    var ROSTELECOM_KEY = 'rt';
    var METRIKA_MATCH_IFRAME_URL = config.cProtocol + "//" + BASE_DOMAIN + "." + BASE_TLD_SYNC_COOKIE + "/metrika/metrika_match.html";
    var OWNER_ID = 'isp';
    var REQUEST_TIMEOUT = 1500;

    function fnv32a(val) {
        var str = "" + val;
        var hval = 0x811c9dc5;
        var len = str.length;
        for (var i = 0; i < len; i += 1) {
            /* eslint-disable */
            hval ^= str.charCodeAt(i);
            hval +=
                (hval << 1) +
                    (hval << 4) +
                    (hval << 7) +
                    (hval << 8) +
                    (hval << 24);
            /* eslint-enable */
        }
        // eslint-disable-next-line no-bitwise
        return hval >>> 0;
    }

    var props = [
        'hash',
        'host',
        'hostname',
        'href',
        'pathname',
        'port',
        'protocol',
        'search',
    ];
    var YANDEX_WHITE_LIST_TLD = [
        'ru',
        'ua',
        'by',
        'kz',
        'az',
        'kg',
        'lv',
        'md',
        'tj',
        'tm',
        'uz',
        'ee',
        'fr',
        'co.il',
        'com.ge',
        'com.am',
        'com.tr',
    ];
    /**
     * Проверяем принадлежность отправленного url к Поиску Яндекса возвращая tld
     * для передачи поисковой фазы
     * @param {object} ctx - window
     * @param {string} host
     * @return {string} tld
     */
    var isYandexSearchDomain = function (ctx, host) {
        var tld;
        var match = host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/);
        if (match) {
            tld = match[0].split('yandex').reverse()[0].substring(1);
            return includes(tld, YANDEX_WHITE_LIST_TLD) ? tld : false;
        }
        return false;
    };
    var getLocation = function (ctx) {
        return cReduce(function (out, prop) {
            var result = out;
            var loc = getPath(ctx, "location." + prop);
            result[prop] = loc ? "" + loc : '';
            return result;
        }, {}, props);
    };
    var getTld = /* @__PURE__ */ memo(function (ctx) {
        var parts = getLocation(ctx).hostname.split('.');
        return parts[parts.length - 1];
    });
    /**
     * Домены на которых пытаемся синкать куки
     */
    var isSyncDomain = /* @__PURE__ */ memo(function (ctx) {
        return (getLocation(ctx).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) !== -1);
    });
    var delWWW = /* @__PURE__ */ memo(function (domain) {
        return (domain ? domain.replace(/^www\./, '') : '').toLowerCase();
    });
    var isSameDomain = function (domain1, domain2) {
        return delWWW(domain1) === delWWW(domain2);
    };
    var isYandexOwnerDomainRegex = new RegExp(
    // При создании регулярок из строк нужно экранировать слеши
    '^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+' +
        '|(auto|kinopoisk|beru|bringly)\\.ru' +
        '|ya\\.(ru|cc)' +
        '|yadi\\.sk' +
        '|deli\\.yango\\.com' +
        '|yastatic\\.net' +
        '|meteum\\.ai' +
        '|.*\\.yandex' +
        '|turbopages\\.org' +
        '|turbo\\.site' +
        ')$');
    var isYandexOwnerDomain = /* @__PURE__ */ memo(function (ctx) {
        var hostname = getLocation(ctx).hostname;
        var result = false;
        if (hostname) {
            result = hostname.search(isYandexOwnerDomainRegex) !== -1;
        }
        return result;
    });
    var isDeviceSyncDomainRegex = new RegExp(
    // При создании регулярок из строк нужно экранировать слеши
    '^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+' +
        '|(auto|kinopoisk|beru|bringly)\\.ru' +
        '|ya\\.(ru|cc)' +
        '|yadi\\.sk' +
        '|.*\\.yandex' +
        '|turbopages\\.org' +
        '|turbo\\.site' +
        ')$');
    var isDeviceSyncDomain = /* @__PURE__ */ memo(function (ctx) {
        var hostname = getLocation(ctx).hostname;
        var result = false;
        if (hostname) {
            result = hostname.search(isDeviceSyncDomainRegex) !== -1;
        }
        return result;
    });
    var isYandexRegex = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/;
    var isYandexDomain = /* @__PURE__ */ memo(function (ctx) {
        var hostname = getLocation(ctx).hostname;
        var result = false;
        if (hostname) {
            result = hostname.search(isYandexRegex) !== -1;
        }
        return result;
    });

    var getSameSiteCookieInfo = /* @__PURE__ */ memo(function (ctx) {
        var result = [];
        if (isSameSiteBrowser(ctx) && getLocation(ctx).protocol === 'https:') {
            result.push('SameSite=None');
            result.push('Secure');
        }
        return result;
    });

    var ENABLED_COOKIE_KEY = 'metrika_enabled';

    var addFunction = 'addEventListener';
    var removeFunction = 'removeEventListener';
    // for old browsers
    var attachFunction = 'attachEvent';
    var detachFunction = 'detachEvent';
    var setEvent = function (el, name, handler, opt, detach) {
        var anyEl = el;
        var supportsAdd = anyEl[addFunction] && anyEl[removeFunction];
        var supportsAttach = !supportsAdd && anyEl[attachFunction] && anyEl[detachFunction];
        if (supportsAdd || supportsAttach) {
            var remove = supportsAdd ? removeFunction : detachFunction;
            var add = supportsAdd ? addFunction : attachFunction;
            var fn = detach ? remove : add;
            if (supportsAdd) {
                anyEl[fn](name, handler, opt);
            }
            else {
                anyEl[fn]("on" + name, handler);
            }
        }
    };

    var checkSupportsPassive = /* @__PURE__ */ memo(function (ctx) {
        var opt;
        var out = false;
        if (!ctx.addEventListener) {
            return out;
        }
        try {
            opt = Object.defineProperty({}, 'passive', {
                get: function () {
                    out = true;
                    return 1;
                },
            });
            ctx.addEventListener('test', noop, opt);
        }
        catch (e) {
            // empty
        }
        return out;
    });
    var opts = curry2(function (isSupportsPassive, opt) {
        if (!isSupportsPassive) {
            return !!opt;
        }
        return mix({
            capture: true,
            passive: true,
        }, opt || {});
    });
    var cEvent = /* @__PURE__ */ memo(function (ctx) {
        var isSupportsPassive = checkSupportsPassive(ctx);
        var getOpt = opts(isSupportsPassive);
        var self = {};
        // TODO use emitter
        return mix(self, {
            on: function (elem, names, fn, options) {
                cForEach(function (name) {
                    var opt = getOpt(options);
                    setEvent(elem, name, fn, opt, false);
                }, names);
                return bind(self.un, self, elem, names, fn, options);
            },
            un: function (elem, names, fn, options) {
                cForEach(function (name) {
                    var opt = getOpt(options);
                    setEvent(elem, name, fn, opt, true);
                }, names);
            },
        });
    });

    var HIT_PROVIDER = 'h';
    var ARTIFICIAL_HIT_PROVIDER = 'a';
    var PUBLISHER_DATA_PROVIDER = 'p';
    var FAKE_HIT_PROVIDER = 'f';
    var RETRANSMIT_PROVIDER = 'r';
    var PARAMS_PROVIDER = '1';
    var NOT_BOUNCE_HIT_PROVIDER = 'n';
    var COOKIE_SYNC_PROVIDER = 'c';
    var GOAL_PROVIDER = 'g';
    var LINK_CLICK_HIT_PROVIDER = '2';
    var EXPERIMENTS_PROVIDER = 'e';
    var AD_BLOCK_PROVIDER = 'adb';
    var RESOURCES_TIMINGS_PROVIDER = 'd';
    var ERROR_LOGGER_PROVIDER = 'er';
    var TRACK_HASH_PROVIDER = 't';
    var DEVICESYNC_PROVIDER = 's';
    var DEVICESYNC_SAVE_PROVIDER = 'S';
    var USER_DATA_STORAGE_PROVIDER = 'u';
    var CLICKMAP_PROVIDER = 'm';
    var WEBVISOR2_PROVIDER = 'W';
    var FORMVISOR_DATA_PROVIDER = '4';
    var PRERENDER_PROVIDER = '5';
    var CACHE_PROVIDER = '6';
    var ITP_INTEGRATION_PROVIDER = 'pi';
    var MOBILE_UID_SYNC_PROVIDER = '8';
    var FAKE_HIT_COUNTER = 3;

    function finallyConstructor(callback) {
      var constructor = this.constructor;
      return this.then(
        function(value) {
          return constructor.resolve(callback()).then(function() {
            return value;
          });
        },
        function(reason) {
          return constructor.resolve(callback()).then(function() {
            return constructor.reject(reason);
          });
        }
      );
    }

    var setTimeoutFunc = setTimeout;
    function isArray$1(x) {
      return Boolean(x && typeof x.length !== 'undefined');
    }
    function noop$1() {}
    function bind$1(fn, thisArg) {
      return function() {
        fn.apply(thisArg, arguments);
      };
    }
    function Promise$1(fn) {
      if (!(this instanceof Promise$1))
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function') throw new TypeError('not a function');
      this._state = 0;
      this._handled = false;
      this._value = undefined;
      this._deferreds = [];
      doResolve(fn, this);
    }
    function handle(self, deferred) {
      while (self._state === 3) {
        self = self._value;
      }
      if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
      }
      self._handled = true;
      Promise$1._immediateFn(function() {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
          return;
        }
        var ret;
        try {
          ret = cb(self._value);
        } catch (e) {
          reject(deferred.promise, e);
          return;
        }
        resolve(deferred.promise, ret);
      });
    }
    function resolve(self, newValue) {
      try {
        if (newValue === self)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (
          newValue &&
          (typeof newValue === 'object' || typeof newValue === 'function')
        ) {
          var then = newValue.then;
          if (newValue instanceof Promise$1) {
            self._state = 3;
            self._value = newValue;
            finale(self);
            return;
          } else if (typeof then === 'function') {
            doResolve(bind$1(then, newValue), self);
            return;
          }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
      } catch (e) {
        reject(self, e);
      }
    }
    function reject(self, newValue) {
      self._state = 2;
      self._value = newValue;
      finale(self);
    }
    function finale(self) {
      if (self._state === 2 && self._deferreds.length === 0) {
        Promise$1._immediateFn(function() {
          if (!self._handled) {
            Promise$1._unhandledRejectionFn(self._value);
          }
        });
      }
      for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
      }
      self._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }
    function doResolve(fn, self) {
      var done = false;
      try {
        fn(
          function(value) {
            if (done) return;
            done = true;
            resolve(self, value);
          },
          function(reason) {
            if (done) return;
            done = true;
            reject(self, reason);
          }
        );
      } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
      }
    }
    Promise$1.prototype['catch'] = function(onRejected) {
      return this.then(null, onRejected);
    };
    Promise$1.prototype.then = function(onFulfilled, onRejected) {
      var prom = new this.constructor(noop$1);
      handle(this, new Handler(onFulfilled, onRejected, prom));
      return prom;
    };
    Promise$1.prototype['finally'] = finallyConstructor;
    Promise$1.all = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray$1(arr)) {
          return reject(new TypeError('Promise.all accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(
                  val,
                  function(val) {
                    res(i, val);
                  },
                  reject
                );
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise$1.resolve = function(value) {
      if (value && typeof value === 'object' && value.constructor === Promise$1) {
        return value;
      }
      return new Promise$1(function(resolve) {
        resolve(value);
      });
    };
    Promise$1.reject = function(value) {
      return new Promise$1(function(resolve, reject) {
        reject(value);
      });
    };
    Promise$1.race = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray$1(arr)) {
          return reject(new TypeError('Promise.race accepts an array'));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
          Promise$1.resolve(arr[i]).then(resolve, reject);
        }
      });
    };
    Promise$1._immediateFn =
      (typeof setImmediate === 'function' &&
        function(fn) {
          setImmediate(fn);
        }) ||
      function(fn) {
        setTimeoutFunc(fn, 0);
      };
    Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err);
      }
    };

    /* eslint-disable no-bitwise */
    /* eslint-disable-next-line import/no-mutable-exports */
    var PolyPromise = window.Promise;
    {
        var construct = /* @__PURE__ */ toNativeOrFalse(PolyPromise, 'Promise');
        var resolve$1 = /* @__PURE__ */ toNativeOrFalse(getPath(PolyPromise, 'resolve'), 'resolve');
        var reject$1 = /* @__PURE__ */ toNativeOrFalse(getPath(PolyPromise, 'reject'), 'reject');
        var all = /* @__PURE__ */ toNativeOrFalse(getPath(PolyPromise, 'all'), 'all');
        if (includes(false, [construct, resolve$1, reject$1, all])) {
            PolyPromise = Promise$1;
        }
        else {
            var anyPromise = function promiseWrapper(a) {
                return new Promise(a);
            };
            anyPromise.resolve = bind(resolve$1, PolyPromise);
            anyPromise.reject = bind(reject$1, PolyPromise);
            anyPromise.all = bind(all, PolyPromise);
            PolyPromise = anyPromise;
        }
    }
    /**
     * Вычисляет чексумму данных по алгоритму Флетчера.
     *
     * @param {Array|String} data
     *
     * @returns {Number}
     */
    function fletcher(data) {
        var length = data.length;
        var i = 0;
        var sum1 = 0xff;
        var sum2 = 0xff;
        var tlen;
        var ch;
        var ch2;
        while (length) {
            tlen = length > 21 ? 21 : length;
            length -= tlen;
            do {
                ch = typeof data === 'string' ? data.charCodeAt(i) : data[i];
                i += 1;
                if (ch > 255) {
                    ch2 = ch >> 8;
                    ch &= 0xff;
                    ch ^= ch2;
                }
                sum1 += ch;
                sum2 += sum1;
                // eslint-disable-next-line no-cond-assign
            } while ((tlen -= 1));
            sum1 = (sum1 & 0xff) + (sum1 >> 8);
            sum2 = (sum2 & 0xff) + (sum2 >> 8);
        }
        var result = (((sum1 & 0xff) + (sum1 >> 8)) << 8) | ((sum2 & 0xff) + (sum2 >> 8));
        return result === 0xffff ? 0 : result;
    }

    var DELIMITER = '.';
    var KNOWN_ERROR = 'err.kn';

    var ErrorCounstruct;
    var polyError = function PolyError(errorMessage) {
        this.message = errorMessage;
    };
    var createErrorWin = function (ctx) { return function (message) {
        if (ErrorCounstruct) {
            return new ErrorCounstruct(message);
        }
        if (/* @__PURE__ */ isNativeFunction('Error', ctx.Error)) {
            ErrorCounstruct = ctx.Error;
            return new ctx.Error(message);
        }
        ErrorCounstruct = polyError;
        return new ErrorCounstruct(message);
    }; };
    var createError =  createErrorWin(window)
        ;
    var makeHttpError = function (ctx) {
        var text = "" + ctx.responseText;
        return createError("http." + ctx.status + ".st." + ctx.statusText + ".rt." + text.substring(0, 50));
    };

    var createKnownError = function (moreInfo) {
        var data = '';
        if (isArray(moreInfo)) {
            data = /* @__PURE__ */ arrayJoin(DELIMITER, moreInfo);
        }
        else if (isString(moreInfo)) {
            data = moreInfo;
        }
        var errorMessage = KNOWN_ERROR + "(" + config.buildVersion + ")" + data;
        return createError(errorMessage);
    };
    var throwKnownError = function throwKnownError() {
        // eslint-disable-next-line prefer-rest-params
        var args = argsToArray(arguments);
        return throwFunction(createKnownError(args));
    };
    var isKnownError = /* @__PURE__ */ bindThisForMethodTest(new RegExp("^" + KNOWN_ERROR));

    var safeEncodeURIComponent = function (str) {
        try {
            return encodeURIComponent(str);
        }
        catch (e) { }
        var simpleUTF = /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cFilter(function (char) {
            var charCode = char.charCodeAt(0);
            return charCode <= 0xd800;
        }, str.split('')));
        return encodeURIComponent(simpleUTF);
    };

    var REQUEST_BODY_KEY = 'site-info';
    var safeDecodeURIComponent = function (encodedURIComponent) {
        var returnValue = '';
        try {
            returnValue = decodeURIComponent(encodedURIComponent);
        }
        catch (error) { }
        return returnValue;
    };
    var safeDecodeURI = function (encodedURI) {
        try {
            return decodeURI(encodedURI);
        }
        catch (error) {
            return '';
        }
    };
    var bodyToQuery = function (bodyStr) {
        return REQUEST_BODY_KEY + "=" + safeEncodeURIComponent(bodyStr);
    };
    var parse = function (query) {
        if (!query) {
            return {};
        }
        return /* @__PURE__ */ pipe(/* @__PURE__ */ ctxMap(function (keyVal) {
            var _a = keyVal.split('='), key = _a[0], val = _a[1];
            return [
                key,
                isNil(val) ? undefined : safeDecodeURIComponent(val),
            ];
        }), ctxReduce(function (rawObj, _a) {
            var key = _a[0], val = _a[1];
            var obj = rawObj;
            obj[key] = val;
            return obj;
        }, {}))(query.split('&'));
    };
    /**
     *
     */
    var stringify = function (obj) {
        if (!obj) {
            return '';
        }
        return /* @__PURE__ */ pipe(entries, ctxReduce(function (out, _a) {
            var key = _a[0], val = _a[1];
            if (!isUndefined(val) && !isNil(val)) {
                out.push(key + "=" + safeEncodeURIComponent(val));
            }
            return out;
        }, []), /* @__PURE__ */ ctxJoin('&'))(obj);
    };

    function parse$1(ctx, text) {
        if (!text) {
            return null;
        }
        try {
            return ctx.JSON.parse(text);
        }
        catch (e) {
            return null;
        }
    }
    /**
     * @type function (Object, ...?): (string|null)
     */
    var stringify$1 = function a(ctx, value) {
        try {
            return ctx.JSON.stringify(value);
        }
        catch (e) {
            return null;
        }
    };

    var WATCH_WMODE_JSON = '7';
    var WATCH_WMODE_JSONP = '5';
    var WATCH_WMODE_IMAGE = '0';
    var REQUEST_MODE_KEY = 'wmode';
    // переносим тело POST запроса в арументы GET запроса
    // для транспортов которые не умеют тело запроса
    var getSrcUrl = function (senderUrl, opt, query) {
        var resultUrl = senderUrl;
        var stringifiedQuery = stringify(query);
        if (stringifiedQuery) {
            resultUrl += "?" + stringifiedQuery;
        }
        if (opt.rBody) {
            resultUrl += "" + (stringifiedQuery ? '&' : '?') + opt.rBody;
        }
        return resultUrl;
    };

    var CYRILLIC_DOMAIN_REGEXP = /[^a-z0-9.:-]/;
    var stateChange = function (ctx, xhr, err, needResult, returnRawResponse, resolve, reject, r) {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200 && !returnRawResponse) {
                reject(err);
            }
            if (returnRawResponse) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(makeHttpError(xhr));
                }
            }
            else {
                var result = null;
                if (needResult) {
                    try {
                        result = parse$1(ctx, xhr.responseText);
                        if (!result) {
                            reject(err);
                        }
                    }
                    catch (e) {
                        reject(err);
                    }
                }
                resolve(result);
            }
        }
        return r;
    };
    var request = /* @__PURE__ */ curry(function (ctx, url, opt) {
        var _a;
        var xhr = new ctx.XMLHttpRequest();
        var rBody = opt.rBody;
        var query = mix(opt.wmode
            ? (_a = {},
                _a[REQUEST_MODE_KEY] = WATCH_WMODE_JSON,
                _a) : {}, opt.rQuery);
        return new PolyPromise(function (resolve, reject) {
            xhr.open(opt.verb || 'GET', url + "?" + stringify(query), true);
            xhr.withCredentials = !(opt.withCreds === false);
            if (opt.timeOut) {
                xhr.timeout = opt.timeOut;
            }
            dirtyPipe(entries, /* @__PURE__ */ ctxMap(function (_a) {
                var headerName = _a[0], headerVal = _a[1];
                xhr.setRequestHeader(headerName, headerVal);
            }))(opt.rHeaders);
            var chFn = /* @__PURE__ */ curry(stateChange)(ctx, xhr, createKnownError(opt.debugStack), opt.wmode, opt.returnRawResponse, resolve, reject);
            xhr.onreadystatechange = chFn;
            try {
                xhr.send(rBody);
            }
            catch (_a) { }
        });
    });
    // Opera12 криво посылает заголовок Origin на кириллических хостах, отчего БК не присылает его обратно.
    // И, следовательно, запрос не получается кроссдоменным, и, следовательно, статус ответа получается 0,
    // и, следовательно, не срабатывает колбек, и, следовательно, не удаляется запрос из очереди на отправку,
    // и, следовательно, очередь постоянно растёт, а зачем нам это надо, пусть отправляет картинкой.
    // {}.toString из-за всяких мудаков, переопределяющих Object.prototype, не используем.
    var isOperaXHR = function (ctx) {
        if (CYRILLIC_DOMAIN_REGEXP.test(ctx.location.host) &&
            ctx.opera &&
            isFunction(ctx.opera.version)) {
            var operaVersion = ctx.opera.version();
            if (typeof operaVersion === 'string' &&
                operaVersion.split('.')[0] === '12') {
                return true;
            }
        }
        return false;
    };
    var useXHR = function (ctx) {
        if (!getPath(ctx, 'XMLHttpRequest')) {
            return false;
        }
        var xhr = new ctx.XMLHttpRequest();
        if (!('withCredentials' in xhr) || isOperaXHR(ctx)) {
            return false;
        }
        return request(ctx);
    };

    var isTextNode = function (node) {
        if (isNil(node)) {
            return false;
        }
        var nodeType = node.nodeType;
        // textNode или comment
        return nodeType === 3 || nodeType === 8;
    };
    var isDocumentFragment = function (node) {
        if (isNil(node)) {
            return false;
        }
        var nodeType = node.nodeType;
        // DOCUMENT_FRAGMENT_NODE
        return nodeType === 11;
    };
    var getDocumentEncoding = /* @__PURE__ */ memo(function (ctx) {
        var doc = getPath(ctx, 'document') || {};
        return ("" + (doc.characterSet || doc.charset || '')).toLowerCase();
    });
    var getElemCreateFunction = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('document'), /* @__PURE__ */ bindArg('createElement', getNativeFunction)));
    var removeNode = function (node) {
        var parentNode = node && node.parentNode;
        if (parentNode) {
            parentNode.removeChild(node);
        }
    };
    var preventDefault = function (event) {
        var eventObject = event || window.event;
        if (eventObject.preventDefault) {
            eventObject.preventDefault();
        }
        else {
            eventObject.returnValue = false;
        }
    };
    var getTarget = function (event) {
        var target;
        // Permission denied to access property "target"
        // Unable to get property 'ownerDocument' of undefined or null reference
        try {
            target = (event.target || event.srcElement);
            if (target) {
                if (!target.ownerDocument && target.documentElement) {
                    // Походу на document попали, берём html
                    target = target.documentElement;
                }
                else if (target.ownerDocument !== document) {
                    // Чужой iframe
                    target = null;
                }
            }
        }
        catch (_) {
            /* empty */
        }
        return target;
    };
    var getTagName = function (tag) {
        return tag && tag.nodeName && ("" + tag.nodeName).toLowerCase();
    };
    var hasClass = function (className, el) {
        try {
            return new RegExp("(?:^|\\s)" + className + "(?:\\s|$)").test(el.className);
        }
        catch (e) {
            return false;
        }
    };
    var getMatchesFunction = /* @__PURE__ */ memo(function (ctx) {
        var elementPrototype = getPath(ctx, 'Element.prototype');
        if (!elementPrototype) {
            return null;
        }
        var matchFunctionName = /* @__PURE__ */ cFind(function (fnName) {
            return /* @__PURE__ */ isNativeFunction(fnName, elementPrototype[fnName]);
        }, [
            'matches',
            'webkitMatchesSelector',
            'mozMatchesSelector',
            'msMatchesSelector',
            'oMatchesSelector',
        ]);
        if (matchFunctionName) {
            return elementPrototype[matchFunctionName];
        }
        return null;
    });
    var getBody = function (ctx) {
        var doc = getPath(ctx, 'document');
        try {
            var bodies = doc.getElementsByTagName('body');
            return bodies[0];
        }
        catch (e) {
            return null;
        }
    };
    var getRootElement = function (ctx) {
        var doc = getPath(ctx, 'document') || {};
        var docElement = doc.documentElement;
        // В некоторых случаях document.body == null
        // возможно код счётчика вставлен в <head> или какие-то непонятные ошибки
        // чтобы не было js-ошибок возвращаем documentElement
        return doc.compatMode === 'CSS1Compat'
            ? docElement
            : getBody(ctx) || docElement;
    };
    var getVisualViewportSize = function (ctx) {
        var width = getPath(ctx, 'visualViewport.width');
        var height = getPath(ctx, 'visualViewport.height');
        var scale = getPath(ctx, 'visualViewport.scale');
        if (!isNil(width) && !isNil(height)) {
            return [Math.floor(width), Math.floor(height), scale];
        }
        return null;
    };
    var getViewportSize = function (ctx) {
        var visualViewport = getVisualViewportSize(ctx);
        if (visualViewport) {
            var width = visualViewport[0], height = visualViewport[1], scale = visualViewport[2];
            return [ctx.Math.round(width * scale), ctx.Math.round(height * scale)];
        }
        var root = getRootElement(ctx);
        return [
            // Нужно уметь работать без root
            getPath(root, 'clientWidth') || ctx.innerWidth,
            getPath(root, 'clientHeight') || ctx.innerHeight,
        ];
    };
    var textFromLink = function (elem) {
        // TODO: Добавить поддержку alt и title у картинок
        return trimText(elem && elem.innerHTML && elem.innerHTML.replace(/<\/?[^>]+>/gi, ''));
    };
    var getDocumentScroll = function (ctx) {
        var body = getBody(ctx);
        var doc = getPath(ctx, 'document');
        return {
            x: ctx.pageXOffset ||
                (doc.documentElement && doc.documentElement.scrollLeft) ||
                (body && body.scrollLeft) ||
                0,
            y: ctx.pageYOffset ||
                (doc.documentElement && doc.documentElement.scrollTop) ||
                (body && body.scrollTop) ||
                0,
        };
    };
    var getDocumentSize = function (ctx) {
        var root = getRootElement(ctx);
        var _a = getViewportSize(ctx), vWidth = _a[0], vHeight = _a[1];
        return [
            Math.max(root.scrollWidth, vWidth),
            Math.max(root.scrollHeight, vHeight),
        ];
    };
    // https://github.com/linkedin/spaniel/issues/75
    var getBoundingClientRect = function (element) {
        try {
            return element.getBoundingClientRect && element.getBoundingClientRect();
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                // eslint-disable-next-line no-bitwise
                (error.number && error.number & 0xffff) === 16389) {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    right: 0,
                };
            }
            return null;
        }
    };
    var createAndDispatchEvent = function (ctx, eventName, target) {
        var eventTarget = target || ctx.document;
        var dispatchEvent = /* @__PURE__ */ getNativeFunction('dispatchEvent', eventTarget);
        var event = null;
        var eventConstructor = getPath(ctx, 'Event.prototype.constructor');
        var isEventConstructorNative = eventConstructor &&
            (/* @__PURE__ */ isNativeFunction('(Event|Object|constructor)', eventConstructor) ||
                (isIE(ctx) &&
                    /* @__PURE__ */ convertToString(eventConstructor) === '[object Event]'));
        if (isEventConstructorNative) {
            // opera 10 bug 'NOT_SUPPORTED_ERR'
            try {
                event = new ctx.Event(eventName);
            }
            catch (e) {
                var createEvent = /* @__PURE__ */ getNativeFunction('createEvent', getPath(ctx, 'document'));
                if (createEvent && isFunction(createEvent)) {
                    // opera 10 bug 'NOT_SUPPORTED_ERR'
                    try {
                        event = createEvent(eventName);
                    }
                    catch (err) {
                        // empty
                    }
                    if (event && event.initEvent) {
                        event.initEvent(eventName, false, false);
                    }
                }
            }
        }
        if (event) {
            dispatchEvent(event);
        }
    };
    var getFormNumber = function (ctx, form) {
        var doc = ctx.document;
        var forms = doc.getElementsByTagName('form');
        return cIndexOf(ctx)(form, toArray(forms));
    };
    /* Тяжело и медленно! 68324 bytes => 68380
    export const getNodeName = pipe(
        bindArg,
        cont(getPath),
        ctxMapSwap(['nodeName', 'tagName']),
        bindArg(firstArg as any, cFind),
    );
    */
    var getNodeName = function (node) {
        if (node) {
            try {
                // Чтобы не звать лишний раз нативный геттер который
                var name_1 = node.nodeName;
                // https://st.yandex-team.ru/METR-41427
                if (isString(name_1)) {
                    return name_1;
                }
                name_1 = node.tagName;
                if (isString(name_1)) {
                    return name_1;
                }
            }
            catch (e) { }
        }
        return undefined;
    };
    var equalInput = /* @__PURE__ */ equal('INPUT');
    var isInputElement = /* @__PURE__ */ pipe(getNodeName, equalInput);
    var equalTextarea = /* @__PURE__ */ equal('TEXTAREA');
    var isTextAreaElement = /* @__PURE__ */ pipe(getNodeName, equalTextarea);
    var equalSelect = /* @__PURE__ */ equal('SELECT');
    var isSelectElement = /* @__PURE__ */ pipe(getNodeName, equalSelect);
    var isCheckableRegex = /^(checkbox|radio)$/;
    var isCheckable = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('type'), /* @__PURE__ */ bindThisForMethodTest(isCheckableRegex));
    var isCommonInputRegex = /^INPUT|SELECT|TEXTAREA$/;
    var isCommonInput = /* @__PURE__ */ pipe(getNodeName, /* @__PURE__ */ bindThisForMethodTest(isCommonInputRegex));
    var isCommonInputOrButtonRegex = /^INPUT|SELECT|TEXTAREA|BUTTON$/;
    var isCommonInputOrButton = /* @__PURE__ */ pipe(getNodeName, /* @__PURE__ */ bindThisForMethodTest(isCommonInputOrButtonRegex));
    var INPUT_NODES = [
        'INPUT',
        'CHECKBOX',
        'RADIO',
        'TEXTAREA',
        'SELECT',
        'PROGRESS',
    ];
    var inputTypesWithoutValue = ['submit', 'image', 'hidden'];
    var isEmptyField = function (field) {
        if (isInputElement(field) &&
            !/* @__PURE__ */ cSome(/* @__PURE__ */ equal(field.type), inputTypesWithoutValue)) {
            if (isCheckable(field)) {
                return !field.checked;
            }
            return !field.value;
        }
        if (isTextAreaElement(field)) {
            return !field.value;
        }
        if (isSelectElement(field)) {
            return field.selectedIndex < 0;
        }
        return true;
    };

    var closest = function (selector, ctx, el) {
        if (!(ctx && ctx.Element && ctx.Element.prototype && ctx.document)) {
            return null;
        }
        if (ctx.Element.prototype.closest &&
            /* @__PURE__ */ isNativeFunction('closest', ctx.Element.prototype.closest) &&
            el.closest) {
            return el.closest(selector);
        }
        var matchesFunction = getMatchesFunction(ctx);
        if (matchesFunction) {
            var cursor = el;
            while (cursor &&
                cursor.nodeType === 1 &&
                !matchesFunction.call(cursor, selector)) {
                cursor = cursor.parentElement || cursor.parentNode;
            }
            if (!cursor || cursor.nodeType !== 1) {
                return null;
            }
            return cursor;
        }
        if (ctx.document.querySelectorAll &&
            /* @__PURE__ */ isNativeFunction('querySelectorAll', getPath(ctx, 'Element.prototype.querySelectorAll'))) {
            var matches = toArray((ctx.document || ctx.ownerDocument).querySelectorAll(selector));
            var cursor = el;
            while (cursor &&
                cursor.nodeType === 1 &&
                cIndexOf(ctx)(cursor, matches) === -1) {
                cursor = cursor.parentElement || cursor.parentNode;
            }
            if (!cursor || cursor.nodeType !== 1) {
                return null;
            }
            return cursor;
        }
        return null;
    };
    var ctxClosest = /* @__PURE__ */ curry(closest);

    var DELTA_SAME_CLICKS = 2;
    var TIMEOUT_CLICK = 50;
    var TIMEOUT_SAME_CLICKS = 1000;
    var GLOBAL_STORAGE_CLICKS_KEY = 'cls';
    var TAGS = [
        'A',
        'B',
        'BIG',
        'BODY',
        'BUTTON',
        'DD',
        'DIV',
        'DL',
        'DT',
        'EM',
        'FIELDSET',
        'FORM',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'HR',
        'I',
        'IMG',
        'INPUT',
        'LI',
        'OL',
        'P',
        'PRE',
        'SELECT',
        'SMALL',
        'SPAN',
        'STRONG',
        'SUB',
        'SUP',
        'TABLE',
        'TBODY',
        'TD',
        'TEXTAREA',
        'TFOOT',
        'TH',
        'THEAD',
        'TR',
        'U',
        'UL',
        // Менее распространенные теги
        'ABBR',
        'AREA',
        'BLOCKQUOTE',
        'CAPTION',
        'CENTER',
        'CITE',
        'CODE',
        'CANVAS',
        'DFN',
        'EMBED',
        'FONT',
        'INS',
        'KBD',
        'LEGEND',
        'LABEL',
        'MAP',
        'OBJECT',
        'Q',
        'S',
        'SAMP',
        'STRIKE',
        'TT',
        // html 2
        'ARTICLE',
        'AUDIO',
        'ASIDE',
        'FOOTER',
        'HEADER',
        'MENU',
        'METER',
        'NAV',
        'PROGRESS',
        'SECTION',
        'TIME',
        'VIDEO',
        'NOINDEX',
        'NOBR',
        'MAIN',
        // SVG
        'svg',
        'circle',
        'clippath',
        'ellipse',
        'defs',
        'foreignobject',
        'g',
        'glyph',
        'glyphref',
        'image',
        'line',
        'lineargradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialgradient',
        'rect',
        'set',
        'text',
        'textpath',
        'title',
    ];

    /* eslint-disable */
    // TODO кажется это полифил для getBoundingClientRect и его нужно использовать не только для ww1
    var getElementXY = function (ctx, el) {
        var element = el;
        var doc = getPath(ctx, 'document');
        var nodeName = getNodeName(element);
        if (!element ||
            !element.ownerDocument ||
            nodeName === 'PARAM' ||
            element === getBody(ctx) ||
            element === doc.documentElement) {
            return {
                left: 0,
                top: 0,
            };
        }
        var box = element.getBoundingClientRect && getBoundingClientRect(element);
        if (box) {
            var documentScroll = getDocumentScroll(ctx);
            return {
                left: Math.round(box.left + documentScroll.x),
                top: Math.round(box.top + documentScroll.y),
            };
        }
        var left = 0;
        var top = 0;
        while (element) {
            left += element.offsetLeft;
            top += element.offsetTop;
            element = element.offsetParent;
        }
        return {
            left: left,
            top: top,
        };
    };
    var getElementSize = function (ctx, element) {
        var doc = getPath(ctx, 'document');
        if (element === getBody(ctx) || element === doc.documentElement) {
            return getDocumentSize(ctx);
        }
        var rect = getBoundingClientRect(element);
        return rect
            ? [rect.width, rect.height]
            : [element.offsetWidth, element.offsetHeight];
    };
    /**
     * Возвращает позицию и размеры элемента.
     *
     * @param {HTMLElement} el
     *
     * @returns {Array} Массив вида [left, top, width, height].
     */
    var getElementRegion = function (ctx, el) {
        var _a = getElementXY(ctx, el), left = _a.left, top = _a.top;
        var _b = getElementSize(ctx, el), width = _b[0], height = _b[1];
        return [left, top, width, height];
    };
    var getElementParent = function (ctx, element) {
        var doc = getPath(ctx, 'document');
        if (!element || element === doc.documentElement)
            return null;
        if (element === getBody(ctx))
            return doc.documentElement;
        var parent = null;
        // Blocked a frame with origin "http://alipromo.com" from accessing a cross-origin frame.
        try {
            parent = element.parentNode;
        }
        catch (e) {
            // empty
        }
        return parent;
    };
    var getElementNeighborPosition = function (ctx, element, ignored) {
        var parent = getElementParent(ctx, element);
        if (parent) {
            var children = parent.childNodes;
            var elementNodeName = element && element.nodeName;
            var n = 0;
            for (var i = 0; i < children.length; i += 1) {
                var childNodeName = children[i] && children[i].nodeName;
                if (elementNodeName === childNodeName) {
                    if (element === children[i]) {
                        return n;
                    }
                    if (!ignored || children[i] !== ignored) {
                        n += 1;
                    }
                }
            }
        }
        return 0;
    };
    var getCachedTags = /* @__PURE__ */ memo(function () {
        var charCode = ';'.charCodeAt(0);
        var cacheTags = {};
        for (var i = 0; i < TAGS.length; i += 1) {
            cacheTags[TAGS[i]] = String.fromCharCode(charCode);
            charCode += 1;
        }
        return cacheTags;
    });
    var getElementPath = function (ctx, el, ignored) {
        var path = '';
        var element = el;
        var MAX_LEN_PATH = 128;
        var cacheTags = getCachedTags();
        var nodeName = getNodeName(element) || '*';
        while (element &&
            element.parentNode &&
            !includes(nodeName, ['BODY', 'HTML'])) {
            path += cacheTags[nodeName] || '*';
            path += getElementNeighborPosition(ctx, element, ignored) || '';
            element = element.parentElement;
            nodeName = getNodeName(element) || '*';
        }
        return trimText(path, MAX_LEN_PATH);
    };
    var getElementsByClassName = function (classNames, node) {
        var classes = isArray(classNames) ? classNames : [classNames];
        // eslint-disable-next-line no-param-reassign
        node = node || document;
        if (node.querySelectorAll) {
            var sel = /* @__PURE__ */ arrayJoin(', ', /* @__PURE__ */ cMap(function (cls) { return "." + cls; }, classes));
            return toArray(node.querySelectorAll(sel));
        }
        // @ts-expect-error
        if (node.getElementsByClassName) {
            return /* @__PURE__ */ flatMap(/* @__PURE__ */ pipe(/* @__PURE__ */ bindThisForMethod('getElementsByClassName', node), toArray), classes);
        }
        var nodes = node.getElementsByTagName('*');
        var someClassRegexp = "(" + /* @__PURE__ */ arrayJoin('|', classes) + ")";
        return /* @__PURE__ */ cFilter(/* @__PURE__ */ bindArg(someClassRegexp, hasClass), toArray(nodes));
    };

    var ACTION_FRAME = 'sc.frame';
    var ACTION_IMAGE = 'sc.image';
    var ACTION_IMAGES = 'sc.images';
    var hiddenFrameRecord = /* @__PURE__ */ memo(function (frameUrl) { return ({
        frameUrl: frameUrl,
        frameEle: null,
        owners: [],
    }); });
    var hiddenFrameCreate = function (ctx, url, ownerid) {
        var frameRecord = hiddenFrameRecord(url);
        if (!includes(ownerid, frameRecord.owners)) {
            frameRecord.owners.push(ownerid);
        }
        if (isNull(frameRecord.frameEle)) {
            var createElement = getElemCreateFunction(ctx);
            if (!createElement) {
                return null;
            }
            var frame = createElement('iframe');
            mix(frame.style, {
                display: 'none',
                width: '1px',
                height: '1px',
                visibility: 'hidden',
            });
            frame.src = url;
            var root = getRootElement(ctx);
            if (!root) {
                return null;
            }
            root.appendChild(frame);
            frameRecord.frameEle = frame;
        }
        else {
            var target = getPath(frameRecord.frameEle, 'contentWindow');
            if (target) {
                target.postMessage('frameReinit', '*');
            }
        }
        return frameRecord.frameEle;
    };
    var hiddenFrameRemove = function (url, ownerid) {
        var frameRecord = hiddenFrameRecord(url);
        if (!includes(ownerid, frameRecord.owners)) {
            return;
        }
        frameRecord.owners = /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(/* @__PURE__ */ equal(ownerid), notFn), frameRecord.owners);
        if (!frameRecord.owners.length) {
            removeNode(frameRecord.frameEle);
            frameRecord.frameEle = null;
        }
    };

    var loadScript = function (ctx, options) {
        var doc = ctx.document;
        var newOpt = mix({
            type: 'text/javascript',
            charset: 'utf-8',
            async: true,
        }, options);
        var createFn = getElemCreateFunction(ctx);
        if (!createFn) {
            return undefined;
        }
        var scriptTag = createFn('script');
        dirtyPipe(entries, /* @__PURE__ */ ctxMap(function (_a) {
            var key = _a[0], val = _a[1];
            if (key === 'async' && val) {
                scriptTag.async = true;
            }
            else {
                scriptTag[key] = val;
            }
        }))(newOpt);
        try {
            var getElems = /* @__PURE__ */ getNativeFunction('getElementsByTagName', doc);
            var head = getElems('head')[0];
            // fix for Opera
            if (!head) {
                var html = getElems('html')[0];
                head = createFn('head');
                if (html) {
                    html.appendChild(head);
                }
            }
            head.insertBefore(scriptTag, head.firstChild);
            return scriptTag;
        }
        catch (e) {
            // empty
        }
        return undefined;
    };

    /**
     * Возвращает элемент ссылки из события
     */
    var getTargetLink = function (event) {
        var target = null;
        try {
            // Выглядит так будто иногда мы можем поймать события из фреймов?
            // Соотвествтенно мы можем словить ошибку пытаясь получить доступ к нему
            target = (event.target || event.srcElement);
        }
        catch (e) { }
        if (target) {
            if (target.nodeType === 3) {
                // Текстовая нода, Safari bug
                target = target.parentNode;
            }
            var tag = getTagName(target);
            while (getPath(target, 'parentNode.nodeName') &&
                ((tag !== 'a' && tag !== 'area') ||
                    !(target.href ||
                        target.getAttribute('xlink:href')))) {
                target = target.parentNode;
                tag = getTagName(target);
            }
            if (!target.href) {
                return null;
            }
            return target;
        }
        return null;
    };

    var select = function (selector, ctx, node) {
        if (!node) {
            return [];
        }
        var result = node.querySelectorAll(selector);
        return result ? toArray(result) : [];
    };
    var ctxSelect = /* @__PURE__ */ curry(select);
    var selectOne = function (ctx, node, selector) {
        var result = select(selector, ctx, node);
        if (result && result.length) {
            return result[0];
        }
        return null;
    };
    var querySelectorByTagNamePolyfill = function (tags, target) {
        var copiedTags = /* @__PURE__ */ __spreadArrays(tags);
        var tag = copiedTags.shift();
        if (!tag) {
            return [];
        }
        var elements = target.getElementsByTagName(tag);
        if (!copiedTags.length) {
            return toArray(elements);
        }
        return /* @__PURE__ */ flatMap(/* @__PURE__ */ bindArg(copiedTags, querySelectorByTagNamePolyfill), toArray(elements));
    };
    // path - работает только для тэгов разделенных пробелами
    var querySelectorByTagName = function (ctx, path, target) {
        if (ctx.document.querySelectorAll &&
            /* @__PURE__ */ isNativeFunction('querySelectorAll', getPath(ctx, 'Element.prototype.querySelectorAll'))) {
            return toArray(target.querySelectorAll(path));
        }
        var tags = path.split(' ');
        var all = querySelectorByTagNamePolyfill(tags, target);
        // Фильтр против дубликатов
        return /* @__PURE__ */ cFilter(function (val, index) {
            return cIndexOf(ctx)(val, all) === index;
        }, all);
    };

    var ID = 'i';
    var NAME = 'n';
    var PATH = 'p';
    var CONTENT = 'c';
    var HREF = 'h';
    var TYPE = 'ty';
    var DEFAULT_SIZE_LIMIT = 100;
    var SIZE_LIMITS = {};
    var HASH = {};
    {
        SIZE_LIMITS[PATH] = 500;
    }
    var getAttribute = function (element, name) {
        return element.getAttribute && element.getAttribute(name);
    };
    var ATTRIBUTES_MAP = {};
    {
        ATTRIBUTES_MAP[ID] = 'id';
        ATTRIBUTES_MAP[NAME] = 'name';
    }
    {
        ATTRIBUTES_MAP[HREF] = 'href';
        ATTRIBUTES_MAP[TYPE] = 'type';
        HASH[HREF] = true;
        HASH[CONTENT] = true;
    }
    var GETTERS_MAP = {};
    {
        GETTERS_MAP[PATH] = getElementPath;
    }
    {
        GETTERS_MAP[CONTENT] = function (ctx, element, selectFn) {
            var result = trimText(getPath(element, 'textContent'));
            if (result && selectFn) {
                var childButtons = selectFn(element);
                if (childButtons.length &&
                    /* @__PURE__ */ cSome(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('textContent'), trimText, /* @__PURE__ */ equal(result)), childButtons)) {
                    result = '';
                }
            }
            if (isInputElement(element)) {
                result = trimText(getAttribute(element, 'value') || result);
            }
            return result;
        };
    }
    var getData = function (ctx, element, ids, selectFn, ignored) {
        return cReduce(function (acc, idKey) {
            var value = null;
            if (idKey in ATTRIBUTES_MAP) {
                value = getAttribute(element, ATTRIBUTES_MAP[idKey]);
            }
            else if (idKey in GETTERS_MAP) {
                if (idKey === PATH) {
                    value = GETTERS_MAP[idKey](ctx, element, ignored);
                }
                else if (idKey === CONTENT) {
                    value = GETTERS_MAP[idKey](ctx, element, selectFn);
                }
                else {
                    value = GETTERS_MAP[idKey](ctx, element);
                }
            }
            if (value) {
                var slicedValue = value.slice(0, SIZE_LIMITS[idKey] || DEFAULT_SIZE_LIMIT);
                acc[idKey] = HASH[idKey]
                    ? /* @__PURE__ */ convertToString(fnv32a(slicedValue))
                    : slicedValue;
            }
            return acc;
        }, {}, ids);
    };

    var _a;
    var BUTTON_SELECTOR = "button," + /* @__PURE__ */ cMap(function (type) { return "input[type=\"" + type + "\"]"; }, ['button', 'submit', 'reset', 'file']).join(',') + ",a";
    var MAYBE_BUTTON_SELECTOR = 'div';
    var closestButton = function (ctx, node) {
        var button = closest(BUTTON_SELECTOR, ctx, node);
        if (!button) {
            var maybeButton = closest(MAYBE_BUTTON_SELECTOR, ctx, node);
            if (maybeButton) {
                var childMaybe = select(BUTTON_SELECTOR + "," + MAYBE_BUTTON_SELECTOR, ctx, maybeButton);
                if (!childMaybe.length) {
                    button = maybeButton;
                }
            }
        }
        return button;
    };
    var selectButtons = /* @__PURE__ */ ctxSelect(BUTTON_SELECTOR);
    var TAG_DATA = (_a = {},
        _a['A'] = HREF,
        _a['BUTTON'] = ID,
        _a['DIV'] = ID,
        _a['INPUT'] = TYPE,
        _a);
    var getButtonData = function (ctx, button, ignored) {
        var nodeName = getNodeName(button);
        return (nodeName &&
            getData(ctx, button, /* @__PURE__ */ cFilter(Boolean, [PATH, TAG_DATA[nodeName], CONTENT]), selectButtons(ctx), ignored));
    };

    var request$1 = /* @__PURE__ */ curry(function (ctx, createFn, senderUrl, opt) {
        return new PolyPromise(function (resolve, reject) {
            var root = getRootElement(ctx);
            var img = createFn('img');
            var rejectWithError = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg(img, removeNode), /* @__PURE__ */ bindArg(createKnownError(opt.debugStack), reject));
            var timeOut = setDeferBase(ctx, rejectWithError, opt.timeOut || 3000);
            img.onerror = rejectWithError;
            img.onload = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg(img, removeNode), /* @__PURE__ */ bindArg(null, resolve), bindArgs([ctx, timeOut], clearDefer));
            var query = mix({}, opt.rQuery);
            delete query[REQUEST_MODE_KEY];
            img.src = getSrcUrl(senderUrl, opt, query);
            if (isSafari(ctx)) {
                mix(img.style, {
                    position: 'absolute',
                    visibility: 'hidden',
                    width: '0px',
                    height: '0px',
                });
                root.appendChild(img);
            }
        });
    });
    var useImage = function (ctx) {
        var createFn = getElemCreateFunction(ctx);
        if (createFn) {
            var reqFnCreate = request$1(ctx, createFn);
            return reqFnCreate;
        }
        return false;
    };

    var isNumber = function (ctx, obj) {
        return (ctx.isFinite(obj) &&
            !ctx.isNaN(obj) &&
            protoToString(obj) === '[object Number]');
    };

    var RND_MAX = 1073741824;
    /**
     * Генерим рандомное число
     * @param {Object} ctx
     * @param {number} [rawMin]
     * @param {number} [rawMax]
     */
    var getRandom = function (ctx, rawMin, rawMax) {
        var min;
        var max;
        var isMaxUndef = isUndefined(rawMax);
        if (isUndefined(rawMin) && isMaxUndef) {
            min = 1;
            max = RND_MAX;
        }
        else if (isMaxUndef) {
            min = 1;
            max = rawMin;
        }
        else {
            min = rawMin;
            max = rawMax;
        }
        return ctx.Math.floor(ctx.Math.random() * (max - min)) + min;
    };

    var DEFAULT_TIMEOUT = 10000;
    var WATCH_JSONP_CALLBACK = 'callback';
    var CALLBACK_PREFIX = '_ymjsp';
    var delCallback = function (ctxAny, callbackName) {
        try {
            delete ctxAny[callbackName];
        }
        catch (e) {
            ctxAny[callbackName] = undefined;
        }
    };
    var request$2 = /* @__PURE__ */ curry(function (ctx, senderUrl, opt) {
        // eslint-disable-next-line consistent-return
        return new PolyPromise(function (resolve, reject) {
            var _a, _b;
            var callbackName = "" + CALLBACK_PREFIX + getRandom(ctx);
            var ctxAny = ctx;
            var query = mix((_a = {},
                _a[WATCH_JSONP_CALLBACK] = callbackName,
                _a), opt.rQuery);
            var script;
            var cleanCallback = bindArgs([ctxAny, callbackName], delCallback);
            var callback = function (data) {
                try {
                    cleanCallback();
                    removeNode(script);
                    resolve(data);
                }
                catch (e) {
                    reject(e);
                }
            };
            ctxAny[callbackName] = callback;
            query[REQUEST_MODE_KEY] = WATCH_WMODE_JSONP;
            script = loadScript(ctx, (_b = {},
                _b['src'] = getSrcUrl(senderUrl, opt, query),
                _b));
            if (!script) {
                cleanCallback();
                return reject(createError('jp.s'));
            }
            var removeNodeFn = /* @__PURE__ */ bindArg(script, removeNode);
            var rejectWithError = /* @__PURE__ */ pipe(removeNodeFn, /* @__PURE__ */ bindArg(createKnownError(opt.debugStack), reject));
            var timeout = opt.timeOut || DEFAULT_TIMEOUT;
            var tid = setDeferBase(ctx, rejectWithError, timeout);
            var clearTid = bindArgs([ctx, tid], clearDefer);
            script.onload = clearTid;
            // на onerror всегда вызываем очистку сами
            script.onerror = /* @__PURE__ */ pipe(cleanCallback, clearTid, rejectWithError);
        });
    });
    var useJsonp = function (ctx) {
        var createElemFunction = getElemCreateFunction(ctx);
        if (!createElemFunction) {
            return false;
        }
        return request$2(ctx);
    };

    var request$3 = /* @__PURE__ */ curry(function (ctx, senderFn, url, options) {
        return new PolyPromise(function (resolve, reject) {
            if (!getPath(ctx, 'navigator.onLine')) {
                return reject();
            }
            var query = mix(options.rQuery, {
                'force-urlencoded': 1,
            });
            var response = senderFn(url + "?" + stringify(query), options.rBody);
            if (!response) {
                return reject();
            }
            return resolve('');
        });
    });
    var useBeaconRaw = function (ctx) {
        var sender = getPath(ctx, 'navigator.sendBeacon');
        if (sender && /* @__PURE__ */ isNativeFunction('sendBeacon', sender)) {
            return request$3(ctx, bind(sender, getPath(ctx, 'navigator')));
        }
        return false;
    };
    var useBeacon = function (ctx) {
        return !isAndroidWebView(ctx) && useBeaconRaw(ctx);
    };

    var CONTENT_TYPE_HEADER = 'Content-Type';

    var TELEMETRY_QUERY_KEY = 't';

    /**
     * @param {Object} [ctx]
     */
    var telemetry = flagStorage(function (flags) {
        var flagEntries = entries(flags);
        return /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cMap(function (_a) {
            var name = _a[0], value = _a[1];
            if (!isNull(value)) {
                return name + "(" + value + ")";
            }
            return '';
        }, flagEntries));
    });
    var addTelemetryToSenderParams = function (senderParams, key, value) {
        if (value === void 0) { value = null; }
        if (!senderParams.telemetry) {
            senderParams.telemetry = telemetry();
        }
        if (key && !isNull(value)) {
            senderParams.telemetry.setVal(key, value);
        }
        return senderParams.telemetry;
    };

    var _a$1;
    var fetchProvider =  0;
    var jsonpProvider =  useJsonp ;
    var beaconProvider =  useBeacon ;
    var fullList;
    {
        // Это нужно чтобы при оптимизации компилятором индексы транспортов всегда были одинаковыми
        // beacon особый транспорт он должен идти в списке первым
        fullList = [beaconProvider, fetchProvider, useXHR, jsonpProvider, useImage];
    }
    var getTransportsCheckList = function (transports) {
        return /* @__PURE__ */ cMap(function (transport) {
            if (!transport || includes(transport, transports)) {
                return transport;
            }
            return 0;
        }, fullList);
    };
    var hitTransportList = [useXHR];
    {
        hitTransportList.push(jsonpProvider);
    }
    var hitTransports = getTransportsCheckList(hitTransportList);
    var imageTransportOnly = getTransportsCheckList([useImage]);
    var querStringTransports = getTransportsCheckList([beaconProvider, useImage]);
    var withoutBeacon = getTransportsCheckList([
        fetchProvider,
        useXHR,
        jsonpProvider,
        useImage,
    ]);
    var nameMap;
    {
        nameMap = (_a$1 = {},
            _a$1[HIT_PROVIDER] = hitTransports,
            _a$1[FAKE_HIT_PROVIDER] = hitTransports,
            _a$1[ERROR_LOGGER_PROVIDER] = imageTransportOnly,
            _a$1);
        {
            nameMap[RESOURCES_TIMINGS_PROVIDER] = imageTransportOnly;
        }
        {
            nameMap[DEVICESYNC_PROVIDER] = getTransportsCheckList([useXHR]);
            nameMap[DEVICESYNC_SAVE_PROVIDER] = nameMap[DEVICESYNC_PROVIDER];
            nameMap[USER_DATA_STORAGE_PROVIDER] = imageTransportOnly;
        }
        {
            nameMap[ITP_INTEGRATION_PROVIDER] = imageTransportOnly;
        }
        {
            nameMap[CLICKMAP_PROVIDER] = querStringTransports;
        }
        {
            nameMap[LINK_CLICK_HIT_PROVIDER] = fullList;
        }
        {
            nameMap[CACHE_PROVIDER] = getTransportsCheckList([
                fetchProvider,
                useXHR,
            ]);
        }
        {
            nameMap[TRACK_HASH_PROVIDER] = fullList;
        }
        {
            nameMap[ARTIFICIAL_HIT_PROVIDER] = withoutBeacon;
        }
        {
            nameMap[NOT_BOUNCE_HIT_PROVIDER] = fullList;
        }
        {
            nameMap[PUBLISHER_DATA_PROVIDER] = getTransportsCheckList([
                fetchProvider,
                useXHR,
            ]);
        }
        {
            nameMap[FORMVISOR_DATA_PROVIDER] = getTransportsCheckList([
                fetchProvider,
                useXHR,
                useImage,
            ]);
        }
        {
            nameMap[RETRANSMIT_PROVIDER] = withoutBeacon;
        }
        {
            nameMap[PARAMS_PROVIDER] = withoutBeacon;
        }
        {
            nameMap[GOAL_PROVIDER] = withoutBeacon;
        }
        {
            nameMap[COOKIE_SYNC_PROVIDER] = imageTransportOnly; // no cors transports
        }
        {
            nameMap[EXPERIMENTS_PROVIDER] = fullList;
        }
        {
            nameMap[AD_BLOCK_PROVIDER] = imageTransportOnly;
        }
        {
            nameMap[WEBVISOR2_PROVIDER] = getTransportsCheckList([
                fetchProvider,
                useXHR,
            ]);
        }
        {
            nameMap[PRERENDER_PROVIDER] = fullList;
        }
        {
            nameMap[MOBILE_UID_SYNC_PROVIDER] = [
                 useBeaconRaw ,
            ];
        }
    }
    var getTransportList = /* @__PURE__ */ memo(function (ctx, provider) {
        var transportList;
        {
            if (provider) {
                transportList = nameMap[provider];
            }
            else {
                transportList = fullList;
            }
            if (!transportList) {
                transportList = [];
            }
        }
        var result = cReduce(function (list, check, id) {
            var checkResult = check && check(ctx);
            if (checkResult) {
                list.push([id, checkResult]);
            }
            return list;
        }, [], transportList);
        if (!result.length) {
            throwKnownError();
        }
        return result;
    }, secondArg);

    var events = [];
    var getEvents = globalMemoWin('debuggerEvents', function (ctx) {
        return events;
    });
    var dispatchDebuggerEvent = function (ctx, event) {
        getEvents(ctx).push(event);
    };

    var handleError = function (ctx, scopeName, e) {
        // Undefined as error
        var message = 'u.a.e';
        var stack = '';
        if (e) {
            if (typeof e === 'object') {
                (message = e.message);
                stack =
                    (typeof e.stack === 'string' &&
                        e.stack.replace(/\n/g, '\\n')) ||
                        'n.s.e.s';
            }
            else {
                message = "" + e;
            }
        }
        // break promise catch exceptions
        {
            var setTimeout_1 = /* @__PURE__ */ getNativeFunction('setTimeout', ctx);
            dispatchDebuggerEvent(ctx, {
                data: {
                    scopeName: scopeName,
                    error: e,
                },
                name: 'error',
            });
            // eslint-disable-next-line ban/ban
            return setTimeout_1(/* @__PURE__ */ bindArg(e, throwFunction), 0);
        }
    };
    var reportError = handleError;

    var getPerformance = function (ctx) {
        return getPath(ctx, "performance") || getPath(ctx, "webkitPerformance");
    };
    var perfomanceInfo = function (ctx) {
        var performance = getPerformance(ctx);
        var ns = getPath(performance, "timing.navigationStart");
        var now = getPath(performance, "now");
        if (now) {
            now = bind(now, performance);
        }
        return [ns, now];
    };
    var getMsDate = function (ctx) {
        return ctx.Date.now ? ctx.Date.now() : new ctx.Date().getTime();
    };
    var getMsFromPerfomance = function (ctx, info) {
        var _a = info || perfomanceInfo(ctx), ns = _a[0], now = _a[1];
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(ns) && isFunction(now)) {
            return Math.round(now() + ns);
        }
        return getMsDate(ctx);
    };

    /**
     * @param {Object} ctx
     * @param {string} scopeName
     * @param {function(...?): ?} [fn]
     * @param {function (...?): ?} [errorCatch]
     */
    var errorLogger = function (ctx, scopeName, fn, defaultReturn, callContext) {
        var defaultFn = throwFunction;
        var callFn = fn || defaultFn;
        return function logger() {
            var result = defaultReturn;
            try {
                // eslint-disable-next-line prefer-rest-params, prefer-spread
                result = callFn.apply(callContext || null, arguments);
            }
            catch (e) {
                handleError(ctx, scopeName, e);
            }
            return result;
        };
    };
    var ctxErrorLogger = function (scope, fn, defaultReturn) {
        return function a() {
            // eslint-disable-next-line prefer-rest-params, prefer-spread
            var ctx = arguments[0];
            return errorLogger(ctx, scope, fn, defaultReturn).apply(this, 
            // eslint-disable-next-line prefer-rest-params, prefer-spread
            arguments);
        };
    };

    var observer = function (ctx) {
        var listners = [];
        var self = {};
        self.listeners = listners;
        self.on = /* @__PURE__ */ pipe(/* @__PURE__ */ bindThisForMethod('push', listners), /* @__PURE__ */ bindArg(self, firstArg));
        self.off = /* @__PURE__ */ pipe(swap2args(cIndexOf(ctx))(listners), swap2args(/* @__PURE__ */ bindThisForMethod('splice', listners))(1), /* @__PURE__ */ bindArg(self, firstArg));
        self.trigger = /* @__PURE__ */ pipe(firstArg, swap2args(call), ctxMapSwap(listners));
        return self;
    };

    var SPLITER = ',';
    var emitter = function (ctx) {
        var observers = {};
        return {
            on: function (events, subscriber) {
                cForEach(function (event) {
                    if (!getPath(observers, event)) {
                        observers[event] = observer(ctx);
                    }
                    observers[event].on(subscriber);
                }, events.split(SPLITER));
                return this;
            },
            off: function (events, subscriber) {
                cForEach(function (event) {
                    if (getPath(observers, event))
                        observers[event].off(subscriber);
                }, events.split(SPLITER));
                return this;
            },
            trigger: function (events, data) {
                return cReduce(function (acc, event) {
                    return getPath(observers, event)
                        ? acc.concat(errorLogger(ctx, "e." + event, observers[event].trigger)(data))
                        : acc;
                }, [], events.split(SPLITER));
            },
        };
    };

    var SCOPE_KEY = 'def';
    var setDefer = function (ctx, fn, timeOut, errorScope) {
        return setDeferBase(ctx, errorLogger(ctx, "d.err." + (errorScope || SCOPE_KEY), fn), timeOut);
    };
    var setDeferInterval = function (ctx, fn, timeOut, errorScope) {
        return ctx.setInterval(errorLogger(ctx, "i.err." + (errorScope || SCOPE_KEY), fn), timeOut);
    };
    var clearDeferInterval = function (ctx, deferIntervalId) {
        return ctx.clearInterval(deferIntervalId);
    };

    var throttleObserver = function (ctx, rawObserver, timeOut) {
        var throttledObserver = observer(ctx);
        var timer;
        var callNextTime = false;
        var latestData;
        var cb = function () {
            timer = 0;
            if (callNextTime) {
                callNextTime = false;
                timer = setDefer(ctx, cb, timeOut);
                throttledObserver.trigger(latestData);
            }
        };
        rawObserver.on(function (data) {
            callNextTime = true;
            latestData = data;
            if (!timer) {
                cb();
            }
            return noop;
        });
        return throttledObserver;
    };

    var INNER_DATA_LAYER_KEY = 'dataLayer';
    var INNER_DATA_LAYER_NAMESPACE = 'ymetrikaEvent';
    var INNER_DATA_LAYER_TYPE_KEY = 'type';
    var pushToDataLayer = function (dataLayer, status) {
        var _a, _b;
        dataLayer.push((_a = {},
            _a[INNER_DATA_LAYER_NAMESPACE] = (_b = {},
                _b[INNER_DATA_LAYER_TYPE_KEY] = status,
                _b),
            _a));
    };
    var getInnerDataLayer = function (ctx) {
        var globalStorage = getGlobalStorage(ctx);
        var result = globalStorage.getVal(INNER_DATA_LAYER_KEY, []);
        globalStorage.setVal(INNER_DATA_LAYER_KEY, result);
        return result;
    };
    var dataLayerObserver = function (ctx, array, initCallback, triggerBeforePush) {
        if (initCallback === void 0) { initCallback = noop; }
        if (triggerBeforePush === void 0) { triggerBeforePush = false; }
        var dataObserver = observer(ctx);
        var newArray = array;
        if (array && isFunction(array.push)) {
            var oldPush_1 = array.push;
            newArray.push = function a() {
                // eslint-disable-next-line prefer-rest-params
                var arg = argsToArray(arguments);
                var item = arg[0];
                if (triggerBeforePush) {
                    dataObserver.trigger(item);
                }
                var out = oldPush_1.apply(array, arg);
                if (!triggerBeforePush) {
                    dataObserver.trigger(item);
                }
                return out;
            };
        }
        else {
            return undefined;
        }
        initCallback(dataObserver);
        cForEach(dataObserver.trigger, array);
        return dataObserver;
    };
    var toInner = function (newEmitter, item) {
        var data = getPath(item, "" + INNER_DATA_LAYER_NAMESPACE);
        if (!data) {
            return;
        }
        newEmitter.trigger(getPath(data, INNER_DATA_LAYER_TYPE_KEY), data);
    };
    /**
     *
     * @param {Object} ctx
     * @param {Array<?>} array
     * @param {function(...?): ?} [initCallback]
     */
    var innerDataLayerObserver = function (ctx, array, initCallback) {
        if (initCallback === void 0) { initCallback = firstArg; }
        var eventEmiter = emitter(ctx);
        initCallback(eventEmiter);
        var handler = /* @__PURE__ */ bindArg(eventEmiter, toInner);
        dataLayerObserver(ctx, array, function (observerEmitter) {
            observerEmitter.on(handler);
        });
        return eventEmiter;
    };

    var GDPR_VALID_VALUES = ['0', '1', '2', '3'];
    var GDPR_ENABLE_ALL = GDPR_VALID_VALUES[0];
    var GDPR_DISABLE_ALL = GDPR_VALID_VALUES[1];
    var GDPR_ANALYTIC = GDPR_VALID_VALUES[2];
    var GDPR_OK = 'GDPR-ok'; // политику приняли 0
    var GDPR_CROSS = 'GDPR-cross'; // нажали на крестик 1
    var GDPR_CANCEL = 'GDPR-cancel'; // отказались от политики 2
    var GDPR_COOKIE_SUCCESS = '3'; // проверок не было и логика была пропущена из-за куки 3
    var GDPR_FRAME_SKIP = '4'; // проверок не было и логика была пропущена в iframe 4
    var GDPR_FRAME_YA = '5'; // сверху был iframe yandex 5
    var GDPR_FRAME_NOYA = '6'; // не дождались ответа сверху 6
    var GDPR_OPEN_START = '7'; // попытались открыть попап 7
    var GDPR_EU_SKIP = '8'; // пропустили проверку потому что выключенно или не eu 8
    var GDPR_OPEN_FAIL = '9'; // не удалось загрузить файл плашки 9
    var GDPR_OPEN_SUCCESS = '10'; // файл загрузился 10
    var GDPR_SKIP = '11'; // не показали плашку из за наличия кук 11
    var GDPR_COOKIE_FAIL = '12'; // не работаем из за наличия кук 12
    var GDPR_SKIP_LOGIN = '13'; // пропустили проверку из за залогина 13
    var GDPR_SKIP_DOMAIN = '14'; // пропустили проверку из за не яндекс сервис 14
    var GDPR_SKIP_NA = '15'; // пропустили проверку из за теста 15
    var GDPR_SKIP_EU_NA = '16'; // пропустили проверку из за теста 16
    var GDPR_SKIP_WV = '17'; // пропустили проверк6 из за вебвью 17
    var GDPR_SETTINGS = 'GDPR-settings'; // переход в настройки групп (технические/аналитические/остальные) 18
    var GDPR_OK_VIEW_DEFAULT = 'GDPR-ok-view-default'; // нажали "принять" на первом экране 19
    var GDPR_OK_VIEW_DETAILED = 'GDPR-ok-view-detailed'; // нажали "принять все" на втором экране 20
    var GDPR_OPEN_SUCCESS_DEFAULT = '21'; // загрузился файл старой плашки 21
    var GDPR_OPEN_SUCCESS_TEST = '22'; // загрузился файл новой плашки 22
    var GDPR_OPEN_SUCCESS_CONTROL = '23'; // не показывать плашку - принимаем сразу 23
    // GDPR-ok-view-detailed-0 "принять выбранные": технические + аналитические + остальные 24
    // GDPR-ok-view-detailed-1 "принять выбранные": технические 25
    // GDPR-ok-view-detailed-2 "принять выбранные": технические + аналитические 26
    // GDPR-ok-view-detailed-3 "принять выбранные": технические + остальные 27
    var GDPR_SEARCH_ROBOT = '28'; // пропустили проверку из за робота 28
    var GDPR_POPUP_DEFAULT_BUTTONS = '29'; // флаг контроля в эксперименте с инвертированными кнопками
    var GDPR_POPUP_INVERSED_BUTTONS = '30'; // флаг эксперимента в эксперименте с инвертированными кнопками
    var GDPR_DETAILED_EVENTS = /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('concat', GDPR_OK_VIEW_DETAILED + "-")), GDPR_VALID_VALUES);
    var parseGdprValue = function (event) {
        if (includes(event, [GDPR_OK_VIEW_DEFAULT, GDPR_OK_VIEW_DETAILED])) {
            return GDPR_ENABLE_ALL;
        }
        var value = event.replace(GDPR_OK_VIEW_DETAILED + "-", '');
        if (includes(value, GDPR_VALID_VALUES)) {
            return value;
        }
        return GDPR_ENABLE_ALL;
    };
    var GDPR_STATUS_LIST = /* @__PURE__ */ __spreadArrays([
        GDPR_OK,
        GDPR_CROSS,
        GDPR_CANCEL,
        GDPR_COOKIE_SUCCESS,
        GDPR_FRAME_SKIP,
        GDPR_FRAME_YA,
        GDPR_FRAME_NOYA,
        GDPR_OPEN_START,
        GDPR_EU_SKIP,
        GDPR_OPEN_FAIL,
        GDPR_OPEN_SUCCESS,
        GDPR_SKIP,
        GDPR_COOKIE_FAIL,
        GDPR_SKIP_LOGIN,
        GDPR_SKIP_DOMAIN,
        GDPR_SKIP_NA,
        GDPR_SKIP_EU_NA,
        GDPR_SKIP_WV,
        GDPR_SETTINGS,
        GDPR_OK_VIEW_DEFAULT,
        GDPR_OK_VIEW_DETAILED,
        GDPR_OPEN_SUCCESS_DEFAULT,
        GDPR_OPEN_SUCCESS_TEST,
        GDPR_OPEN_SUCCESS_CONTROL
    ], GDPR_DETAILED_EVENTS, [
        GDPR_SEARCH_ROBOT,
        GDPR_POPUP_DEFAULT_BUTTONS,
        GDPR_POPUP_INVERSED_BUTTONS,
    ]);
    var GDPR_ALLOW_COOKIE_LIST = [
        GDPR_COOKIE_SUCCESS,
        GDPR_SKIP_LOGIN,
        GDPR_SKIP_DOMAIN,
        GDPR_SKIP_NA,
        GDPR_SKIP_EU_NA,
        GDPR_SKIP_WV,
        GDPR_SEARCH_ROBOT,
    ];

    var YANX_GDPR_COOKIE = 'gdpr';
    var YANX_GDPR_POPUP_COOKIE = 'gdpr_popup';
    var getGDPRStatusRaw = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxMap(/* @__PURE__ */ ctxPath(INNER_DATA_LAYER_NAMESPACE + "." + INNER_DATA_LAYER_TYPE_KEY)), /* @__PURE__ */ ctxFilter(/* @__PURE__ */ ctxIncludes(GDPR_STATUS_LIST)));
    var isAnalyticsCookieAllowed = function (ctx, getCookie) {
        var dataLayer = getInnerDataLayer(ctx);
        var status = getGDPRStatusRaw(dataLayer);
        var cookieValue = getCookie(ctx, YANX_GDPR_COOKIE);
        var intersect = /* @__PURE__ */ cFilter(/* @__PURE__ */ ctxIncludes(GDPR_ALLOW_COOKIE_LIST), status);
        if (intersect.length) {
            return true;
        }
        /*
            Все метричные куки считаем аналитическими:
            0 - разрешены все,
            2 - разрешены аналитические
        */
        return includes(cookieValue, [GDPR_ENABLE_ALL, GDPR_ANALYTIC]);
    };
    var isCookieAllowed = function (ctx, getCookie, name) {
        if (includes(name, [
            YANX_GDPR_COOKIE,
            YANX_GDPR_POPUP_COOKIE,
            ENABLED_COOKIE_KEY,
        ])) {
            return true;
        }
        return isAnalyticsCookieAllowed(ctx, getCookie);
    };

    var getCookie = function (ctx, name) {
        var cookie = null;
        try {
            (cookie = ctx.document.cookie);
        }
        catch (e) {
            return null;
        }
        var regex = new RegExp("(?:^|;\\s*)" + name + "=([^;]*)");
        var groups = regex.exec(cookie);
        if (groups && groups.length >= 2) {
            return decodeURIComponent(groups[1]);
        }
        return null;
    };
    var PORT_REGEXP = /:\d+$/;
    /**
     * Ставим куки на домен
     * @param ctx
     * @param name
     * @param val
     * @param {number} [minutes]
     * @param {string} [domain]
     * @param {string} [path]
     */
    function setCookie(ctx, name, val, minutes, domain, path) {
        if ( isCookieAllowed(ctx, getCookie, name)) {
            var cookie = [name + "=" + encodeURIComponent(val)];
            {
                cookie = cookie.concat(getSameSiteCookieInfo(ctx));
            }
            if (minutes) {
                var date = new Date();
                date.setTime(date.getTime() + minutes * 60 * 1000);
                cookie.push("expires=" + date.toUTCString());
            }
            if (domain) {
                var domainWihoutPort = domain.replace(PORT_REGEXP, '');
                cookie.push("domain=" + domainWihoutPort);
            }
            cookie.push("path=" + (path || '/'));
            var cookieString = /* @__PURE__ */ arrayJoin(';', cookie);
            try {
                ctx.document.cookie = cookieString;
            }
            catch (e) {
                // empty
            }
        }
    }
    /**
     *
     * @param {Object} ctx
     * @param {string} name
     * @param {string} [domain]
     * @param {string} [path]
     */
    function deleteCookie(ctx, name, domain, path) {
        return setCookie(ctx, name, '', -100, domain, path);
    }
    /**
     *
     * @param ctx
     * @param {string} [domain]
     * @param {string} [path]
     */
    var checkCookie = function (ctx, domain, path) {
        var checkName = ENABLED_COOKIE_KEY;
        setCookie(ctx, checkName, '1', 0, domain, path);
        var result = getCookie(ctx, checkName);
        if (result) {
            deleteCookie(ctx, checkName, domain);
        }
        return !!result;
    };
    var SPLITTER = '.';
    var getRootDomain = /* @__PURE__ */ memo(function (ctx) {
        var levels = (getLocation(ctx).host || '').split(SPLITTER);
        if (levels.length === 1) {
            return levels[0];
        }
        return cReduce(function (input, _, no) {
            var out = input;
            var currentLevel = no + 1;
            if (currentLevel >= 2 && !out) {
                var domain = /* @__PURE__ */ arrayJoin(SPLITTER, levels.slice(-currentLevel));
                var res = checkCookie(ctx, domain);
                if (res) {
                    out = domain;
                }
            }
            return out;
        }, '', levels);
    });
    function cookieStorage(ctx, prefix, namespace) {
        if (prefix === void 0) { prefix = '_ym_'; }
        if (namespace === void 0) { namespace = ''; }
        var rootDomain = getRootDomain(ctx);
        var fullRootDomain = (rootDomain || '').split('.').length === 1
            ? rootDomain
            : "." + rootDomain;
        var cookieKey = namespace ? "_" + namespace : '';
        return {
            delVal: function (name, clientDomain, path) {
                deleteCookie(ctx, "" + prefix + name + cookieKey, clientDomain || fullRootDomain, path);
                return this;
            },
            getVal: function (name) {
                return getCookie(ctx, "" + prefix + name + cookieKey);
            },
            setVal: function (name, val, minutes, clientDomain, path) {
                setCookie(ctx, "" + prefix + name + cookieKey, val, minutes, clientDomain || fullRootDomain, path);
                return this;
            },
        };
    }
    var globalCookieStorage = /* @__PURE__ */ memo(cookieStorage);

    var DEFAULT_LS_PREFIX = '_ym';
    var getStorage = function (ctx) {
        try {
            return ctx.localStorage;
        }
        catch (e) { }
        return null;
    };
    var delItem = function (ctx, name) {
        var storage = getStorage(ctx);
        try {
            storage.removeItem(name);
        }
        catch (e) { }
    };
    var getItem = function (ctx, name) {
        var storage = getStorage(ctx);
        try {
            return parse$1(ctx, storage.getItem(name));
        }
        catch (e) { }
        return null;
    };
    var setItem = function (ctx, name, rawVal) {
        var storage = getStorage(ctx);
        var val = stringify$1(ctx, rawVal);
        if (!isNull(val)) {
            try {
                storage.setItem(name, val);
            }
            catch (e) { }
        }
    };
    var isStorageBroken = /* @__PURE__ */ memo(function (ctx) {
        var nameToCheck = DEFAULT_LS_PREFIX + "BRC";
        var value = '1';
        setItem(ctx, nameToCheck, value);
        var broken = value !== getItem(ctx, nameToCheck);
        if (!broken) {
            delItem(ctx, nameToCheck);
        }
        return broken;
    });
    var localStorage = function (ctx, nameSpace, prefix) {
        if (nameSpace === void 0) { nameSpace = ''; }
        if (prefix === void 0) { prefix = DEFAULT_LS_PREFIX; }
        var storageKey = "" + prefix + nameSpace + "_";
        var isBroken = isStorageBroken(ctx);
        return {
            isBroken: isBroken,
            getVal: function (name, defVal) {
                var out = getItem(ctx, "" + storageKey + name);
                if (isNull(out) && !isUndefined(defVal)) {
                    return defVal;
                }
                return out;
            },
            setVal: function (name, val) {
                setItem(ctx, "" + storageKey + name, val);
                return this;
            },
            delVal: function (name) {
                delItem(ctx, "" + storageKey + name);
                return this;
            },
        };
    };
    var globalLocalStorage = /* @__PURE__ */ memo(localStorage);
    var counterLocalStorage = /* @__PURE__ */ memo(localStorage, function (ctx, nameSpace, prefix) { return "" + nameSpace + prefix; });

    var formatter = function (n) {
        return (n <= 10 ? '0' : '') + n;
    };
    var EVENT_TIME_DELTA = 50;
    var Time = function (ctx) {
        var event = cEvent(ctx);
        var perf = perfomanceInfo(ctx);
        var timeState = {
            ctx: ctx,
            unloadTime: 0,
            perf: perf,
            initTime: getMsFromPerfomance(ctx, perf),
        };
        /**
         * защита от ошибки "too much time spent in unload handler"
         * может возникать в firefox, при вызове new Date в beforeunload
         *
         * если доступен perf api, то ничего делать не надо
         * иначе запоминаем время на первом unload
         * и при следующих вызовах getMs не высчитываем заново, а возвращаем сохраненное
         */
        {
            var ns = perf[0], now = perf[1];
            if (!(ns && now)) {
                event.on(ctx, ['beforeunload', 'unload'], function () {
                    if (timeState.unloadTime === 0) {
                        timeState.unloadTime = getMsFromPerfomance(ctx, timeState.perf);
                    }
                });
            }
        }
        return cont(timeState);
    };
    var getNs = function (timeState) {
        var ns = timeState.perf[0];
        return ns;
    };
    var getMs = function (timeState) {
        var ctx = timeState.ctx, unloadTime = timeState.unloadTime, perf = timeState.perf;
        if (unloadTime !== 0) {
            return unloadTime;
        }
        return getMsFromPerfomance(ctx, perf);
    };
    var getTimestamp = function (timeState) {
        var ctx = timeState.ctx;
        var date = new ctx.Date();
        var dateInfo = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
        return /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cMap(formatter, dateInfo));
    };
    var getTimezone = function (timeState) {
        var ctx = timeState.ctx;
        return -new ctx.Date().getTimezoneOffset();
    };
    var getMin = function (timeState) {
        return Math.floor(getMs(timeState) / 1000 / 60);
    };
    var getSec = function (timeState) {
        return Math.round(getMs(timeState) / 1000);
    };
    var getFromStart = function (timeState) {
        var out;
        var _a = timeState.perf, ns = _a[0], now = _a[1];
        if (ns && now) {
            out = now();
        }
        else {
            out = getMs(timeState) - timeState.initTime;
        }
        return Math.round(out);
    };
    var TimeOne = /* @__PURE__ */ memo(Time);
    // Этот метод используется только в первом вебвизоре
    // В самом плеере происходит домножение на EVENT_TIME_DELTA
    // Время измеряется в тиках по 50мс
    var getVisorNowEventTime = function (ctx) {
        var timeOne = TimeOne(ctx);
        return Math.round(timeOne(getFromStart) / EVENT_TIME_DELTA);
    };

    var setUid = function (cookieStorageObj, cookieName, longCookieName, duration, curTime, localDomain, uidVal) {
        cookieStorageObj.setVal(cookieName, uidVal, duration, localDomain);
        cookieStorageObj.setVal(longCookieName, "" + curTime, duration, localDomain);
    };
    var getUidState = function (ctx, counterOptions) {
        var ls = globalLocalStorage(ctx);
        var cookie = globalCookieStorage(ctx);
        var cookieName = counterOptions.ldc || 'uid';
        return [ls.getVal(cookieName), cookie.getVal(cookieName)];
    };
    var isRecoveredRaw = globalMemoWin(IS_RECOVERED_FN_KEY, function (ctx, counterOptions) {
        var _a = getUidState(ctx, counterOptions), lsUid = _a[0], uid = _a[1];
        return !uid && lsUid;
    });
    var isRecovered = function (ctx, counterOptions) {
        return !counterOptions.noCookie && isRecoveredRaw(ctx, counterOptions);
    };
    var getUid = function (ctx, counterOptions) {
        var localDomainCookie = counterOptions.ldc;
        var cookieName = localDomainCookie || 'uid';
        var localDomain = localDomainCookie ? ctx.location.hostname : undefined;
        var longCookieName = 'd';
        var cookie = globalCookieStorage(ctx);
        var ls = globalLocalStorage(ctx);
        var duration = 365 * 24 * 60; // year
        var timeInfo = TimeOne(ctx);
        var curTime = timeInfo(getSec);
        var _a = getUidState(ctx, counterOptions), lsUid = _a[0], cookieUid = _a[1];
        var uid = cookieUid;
        var lastCheck = cookie.getVal(longCookieName);
        // Мемоизировать значение в функции isRecovered, перед перезаписью куки
        isRecoveredRaw(ctx, counterOptions);
        var shouldUpdateCookieUid = false;
        if (!uid && lsUid) {
            uid = lsUid;
            shouldUpdateCookieUid = true;
        }
        if (!uid) {
            uid = /* @__PURE__ */ arrayJoin('', [timeInfo(getSec), getRandom(ctx)]);
            shouldUpdateCookieUid = true;
        }
        else if (!lastCheck ||
            curTime - parseInt(lastCheck, 10) > (duration * 60) / 2) {
            shouldUpdateCookieUid = true;
        }
        if (shouldUpdateCookieUid && !counterOptions.noCookie) {
            setUid(cookie, cookieName, longCookieName, duration, curTime, localDomain, uid);
        }
        ls.setVal(cookieName, uid);
        return uid;
    };

    var getUidFlag = /* @__PURE__ */ memo(getUid, function (ctx, countetOptions) {
        return "{" + countetOptions.ldc + countetOptions.noCookie;
    });

    var getState = /* @__PURE__ */ memo(constructObject, getCounterKey);
    var getFNVHash = /* @__PURE__ */ pipe(getUidFlag, fnv32a);

    var getITPProviderHostPrefix = function (ctx, counterOptions, senderParams) {
        var result = '';
        if (!senderParams.brInfo) {
            return result;
        }
        var counterKey = getCounterKey(counterOptions);
        var state = getState(counterOptions)[counterKey] || {};
        var status = state.status, provider = state.provider;
        if (ROSTELECOM_KEY !== provider || !status) {
            return '';
        }
        if (status === READY_STATE) {
            result = getFNVHash(ctx, counterOptions) + ".";
        }
        senderParams.brInfo.setVal(ROSTELECOM_KEY, status);
        return result;
    };

    var debugLogRequest = function (ctx, url, senderParams) {
        var requestId = getRandom(ctx);
        dispatchDebuggerEvent(ctx, {
            name: 'request',
            data: {
                url: url,
                requestId: requestId,
                senderParams: senderParams,
            },
        });
        return requestId;
    };
    var logRequestSuccess = function (ctx, requestId, body) {
        dispatchDebuggerEvent(ctx, {
            name: 'requestSuccess',
            data: {
                body: body,
                requestId: requestId,
            },
        });
    };
    var logRequestFailure = function (ctx, requestId, error) {
        dispatchDebuggerEvent(ctx, {
            name: 'requestFail',
            data: {
                error: error,
                requestId: requestId,
            },
        });
    };

    var TRANSPORT_ID_BR_KEY = 'ti';
    var iterateTransports = function (ctx, transports, urls, senderInfo, rawOpt, urlIndex, transportIndex) {
        var _a;
        if (urlIndex === void 0) { urlIndex = 0; }
        if (transportIndex === void 0) { transportIndex = 0; }
        var opt = mix({}, rawOpt);
        var _b = transports[transportIndex], id = _b[0], transport = _b[1];
        var query = mix({}, senderInfo.urlParams);
        var time = TimeOne(ctx);
        if (senderInfo.brInfo) {
            query[BROWSERINFO_QUERY_KEY] = browserInfo(senderInfo.brInfo.ctx())
                .setVal('st', time(getSec))
                .serialize();
        }
        {
            if (!query[TELEMETRY_QUERY_KEY]) {
                var telemetry = senderInfo.telemetry;
                if (telemetry) {
                    telemetry.setVal(TRANSPORT_ID_BR_KEY, id);
                    query[TELEMETRY_QUERY_KEY] = telemetry.serialize();
                }
            }
        }
        var url = urls[urlIndex];
        if ((!opt.rHeaders || !opt.rHeaders[CONTENT_TYPE_HEADER]) && opt.rBody) {
            opt.rHeaders = mix({}, opt.rHeaders, (_a = {},
                _a[CONTENT_TYPE_HEADER] = 'application/x-www-form-urlencoded',
                _a));
            opt.rBody = bodyToQuery(opt.rBody);
        }
        opt.verb = opt.rBody ? 'POST' : 'GET';
        opt.rQuery = query;
        opt.debugStack.push(id);
        var fullUrl = "" + url + (senderInfo.noRedirect ? '/1' : '');
        var requestId = 0;
        {
            requestId = debugLogRequest(ctx, fullUrl, opt);
        }
        return transport(fullUrl, opt)
            .then(function (responseData) {
            {
                logRequestSuccess(ctx, requestId, responseData);
            }
            return { responseData: responseData, urlIndex: urlIndex };
        })["catch"](function (exception) {
            {
                logRequestFailure(ctx, requestId, exception);
            }
            var lastTransport = transportIndex + 1 >= transports.length;
            var lastUrl = urlIndex + 1 >= urls.length;
            if (lastTransport && lastUrl) {
                throwFunction(exception);
            }
            var nextTransportIndex = !lastTransport ? transportIndex + 1 : 0;
            var nextUrlIndex = !lastUrl && lastTransport ? urlIndex + 1 : urlIndex;
            return iterateTransports(ctx, transports, urls, senderInfo, rawOpt, nextUrlIndex, nextTransportIndex);
        });
    };
    var useDefaultSender = function (ctx, transports) {
        return function (senderInfo, urls, opt) {
            if (opt === void 0) { opt = {}; }
            return iterateTransports(ctx, transports, urls, senderInfo, mix(opt, {
                // TODO эта "или" заглушка если ее убрать
                // то можно найти новые неожиданные ошибки
                // хорошо бы в них разобраться METR-39657
                debugStack: senderInfo.debugStack || [],
                rBody: opt.rBody || senderInfo.rBody,
            }));
        };
    };

    // остановлен ли итератор
    var iterIsEnd = function (iterParams) {
        var params = iterParams;
        return params.stopIter || params.itemList.length <= params.iterCursor;
    };
    // отсанавливаем обход без возврата
    var iterBreak = function (iterParams) {
        var params = iterParams;
        params.iterCursor = params.itemList.length;
    };
    // приостанавливаем итератор c возвратом
    var iterStop = function (rawParams) {
        var params = rawParams;
        params.stopIter = true;
    };
    // востанавливаем приостановленный итератор
    var iterResume = function (rawParams) {
        var params = rawParams;
        params.stopIter = false;
    };
    // итерируем дальше
    var iterNext = function (rawParams) {
        var params = rawParams;
        if (iterIsEnd(params)) {
            throwFunction(createError('i'));
        }
        var result = params.iterHandler(params.itemList[params.iterCursor]);
        params.iterCursor += 1;
        return result;
    };
    var iterForEach = /* @__PURE__ */ curry(function (handler, params) {
        var allResult = [];
        for (;;) {
            if (iterIsEnd(params)) {
                break;
            }
            var result = iterNext(params);
            handler(result, function (fn) { return fn(params); });
            allResult.push(result);
        }
        return allResult;
    });
    var iterPop = (function (handler) {
        return function (params) {
            var result;
            while (params.itemList.length) {
                if (iterIsEnd(params)) {
                    break;
                }
                var nexItem = params.itemList.pop();
                result = params.iterHandler(nexItem, params.itemList);
                handler(params);
            }
            return result;
        };
    });
    var iterPopUntilMaxTime = (function (ctx, maxTime) {
        return function (params) {
            var timer = TimeOne(ctx);
            var startTime = timer(getMs);
            return iterPop(function (popParams) {
                var time = timer(getMs) - startTime;
                if (time >= maxTime) {
                    iterStop(popParams);
                }
            })(params);
        };
    });
    var iterForEachUntilMaxTime = (function (ctx, maxTime) {
        return function (params) {
            var timer = TimeOne(ctx);
            var startTime = timer(getMs);
            return iterForEach(function (val, iterFn) {
                var time = timer(getMs) - startTime;
                if (time >= maxTime) {
                    iterFn(iterStop);
                }
            }, params);
        };
    });
    // Собственно в чём суть этого решения - это обычный обход по мидлварам с next,
    // единственная разница в том, что он написан так чтобы развернуть рекурсию,
    // потому что при рекурсии происходит переполнение стэка, часть с nextCallback
    // ждёт когда вызвался next асинхронно. Если делать это традиционным образом
    // и просто ждать вызова некст как коллбэка со следующим шагом получается
    // слишком глубокая рекурсия.
    var iterNextCall = function (iterParams) {
        var nextCalled = true;
        var _loop_1 = function () {
            nextCalled = false;
            // eslint-disable-next-line no-loop-func
            var nextCallback = function () {
                nextCalled = true;
                iterParams.iterCursor += 1;
            };
            iterParams.iterHandler(iterParams.itemList[iterParams.iterCursor], function () {
                nextCallback();
            });
            if (!nextCalled) {
                iterParams.iterCursor += 1;
                nextCallback = bind(iterNextCall, null, iterParams);
            }
        };
        while (!iterIsEnd(iterParams) && nextCalled) {
            _loop_1();
        }
    };
    var iterForOf = function (itemList, handler) {
        if (handler === void 0) { handler = firstArg; }
        var iterParams = {
            itemList: itemList,
            iterHandler: handler,
            stopIter: false,
            iterCursor: 0,
        };
        return cont(iterParams);
    };

    var task = cont;
    var taskFork = /* @__PURE__ */ curry(function (reject, resolve, fork) {
        return fork(reject, resolve);
    });
    var taskMap = /* @__PURE__ */ curry(function (mapFn, fork) {
        return task(function (reject, resolve) {
            return fork(reject, function (result) {
                try {
                    resolve(mapFn(result));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    });
    var taskChain = /* @__PURE__ */ curry(function (fn, fork) {
        return task(function (reject, resolve) {
            return fork(reject, function (result) {
                try {
                    fn(result)(taskFork(reject, resolve));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    });
    var taskRace = function (tasks) {
        var rejectErrors = [];
        var isResolved = false;
        return task(function (reject, resolve) {
            var onErrorCb = function (error) {
                var length = rejectErrors.push(error);
                if (length === tasks.length) {
                    reject(rejectErrors);
                }
            };
            cForEach(function (taskItem, i) {
                taskItem(taskFork(onErrorCb, function (res) {
                    if (!isResolved) {
                        try {
                            resolve(res);
                            isResolved = true;
                        }
                        catch (e) {
                            onErrorCb(e);
                        }
                    }
                }));
            }, tasks);
        });
    };
    var taskAll = function (tasks) {
        var results = [];
        var counter = 0;
        return task(function (reject, resolve) {
            cForEach(function (taskItem, i) {
                taskItem(taskFork(reject, function (result) {
                    try {
                        results[i] = result;
                        counter += 1;
                        if (counter === tasks.length) {
                            resolve(results);
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                }));
            }, tasks);
        });
    };
    var fromPromise = function (promise) {
        return task(function (reject, resolve) {
            promise.then(resolve, reject);
        });
    };
    var taskOf = function (val) {
        return task(function (reject, resolve) {
            resolve(val);
        });
    };

    var taskExecQueue = [];
    var EXEC_TIMEOUT = 100;
    var executing = false;
    var addTaskToQueue = function (taskExecFunction) {
        if (executing) {
            taskExecQueue.push(taskExecFunction);
        }
        else {
            executing = true;
            taskExecFunction();
        }
    };
    var runNextTask = function (ctx) {
        if (taskExecQueue.length) {
            setDefer(ctx, taskExecQueue.shift(), EXEC_TIMEOUT);
        }
        else {
            executing = false;
        }
    };
    var executeIterator = function (ctx, iterFn, maxTime, iterLoop) {
        if (maxTime === void 0) { maxTime = 1; }
        if (iterLoop === void 0) { iterLoop = iterForEachUntilMaxTime; }
        var taskObj = function (reject, resolve) {
            var result = [];
            var taskExecFunction = function () {
                try {
                    var items = iterFn(iterLoop(ctx, maxTime));
                    result = result.concat(items);
                }
                catch (e) {
                    return reject(e);
                }
                iterFn(iterResume);
                if (iterFn(iterIsEnd)) {
                    resolve(result);
                    return runNextTask(ctx);
                }
                if (!taskObj.flush) {
                    setDefer(ctx, taskExecFunction, EXEC_TIMEOUT);
                }
                else {
                    iterFn(iterLoop(ctx, 10000));
                    resolve(result);
                    runNextTask(ctx);
                }
                return undefined;
            };
            addTaskToQueue(taskExecFunction);
        };
        return task(taskObj);
    };
    var taskFlush = function (rawFork) {
        var fork = rawFork;
        fork.flush = true;
        return undefined;
    };

    var iterateTaskWithConstraints = function (ctx, collection, callback, maxTime, errorNamspace) {
        if (maxTime === void 0) { maxTime = 1; }
        if (errorNamspace === void 0) { errorNamspace = 'itc'; }
        var iterator = iterForOf(collection, callback);
        var task = executeIterator(ctx, iterator, maxTime);
        task(taskFork(errorLogger(ctx, errorNamspace), noop));
    };

    var defaultScope = 'as';
    var runAsync = function (ctx, fn, errorScope) {
        var scope = errorScope || defaultScope;
        // postMessage может быть синхронным в старых браузерах
        // пример можно посмотреть в Vow - https://github.com/dfilatov/vow/blob/master/lib/vow.js#L53
        // чтобы не писать такую же проверку, просто используем в таких браузер setTimeout
        if (ctx.postMessage && !ctx.attachEvent) {
            var events = cEvent(ctx);
            var msg_1 = "__ym__promise_" + getRandom(ctx) + "_" + getRandom(ctx);
            var un_1 = noop;
            var onMessage = errorLogger(ctx, scope, function (event) {
                var data;
                try {
                    (data = event.data);
                }
                catch (e) {
                    return;
                }
                if (data === msg_1) {
                    un_1();
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    }
                    fn();
                }
            });
            un_1 = events.on(ctx, ['message'], onMessage);
            ctx.postMessage(msg_1, '*');
        }
        else {
            setDefer(ctx, fn, 0, scope);
        }
    };

    /**
     *
     * @param {Window<?>} Window
     * @param {Array<?>} middlewareList
     * @param {Object} senderParams
     * @param {boolean} [before]
     * @param {Object|null} response
     */
    var combineMiddlewares = function (ctx, rawMiddlewareList, senderParams, before) {
        if (before === void 0) { before = false; }
        return new PolyPromise(function (resolve, reject) {
            var resolveFn = function (middleware, next) {
                next();
                resolve();
            };
            var middlewareList = rawMiddlewareList.slice();
            middlewareList.push({
                beforeRequest: resolveFn,
                afterRequest: resolveFn,
            });
            var iterator = iterForOf(middlewareList, function (middleware, next) {
                var fn = before
                    ? middleware.beforeRequest
                    : middleware.afterRequest;
                if (fn) {
                    try {
                        fn(senderParams, next);
                    }
                    catch (e) {
                        iterator(iterBreak);
                        reject(e);
                    }
                }
                else {
                    next();
                }
            });
            iterator(iterNextCall);
        });
    };

    var getUrlParser = /* @__PURE__ */ memo(function (ctx) {
        var createElement = getElemCreateFunction(ctx);
        if (createElement) {
            return createElement('a');
        }
        return undefined;
    });
    function parseUrl(ctx, url) {
        var urlParser = getUrlParser(ctx);
        if (urlParser) {
            urlParser.href = url;
            return {
                protocol: urlParser.protocol,
                host: urlParser.host,
                port: urlParser.port,
                hostname: urlParser.hostname,
                hash: urlParser.hash,
                search: urlParser.search,
                query: urlParser.search.replace(/^\?/, ''),
                pathname: urlParser.pathname || '/',
                path: (urlParser.pathname || '/') + urlParser.search,
                href: urlParser.href,
            };
        }
        return {};
    }
    var getDomain = function (url) {
        return (url.split(':')[1] || '')
            .replace(/^\/*/, '')
            .replace(/^www\./, '')
            .split('/')[0];
    };
    var isSameDomainInUrls = function (url1, url2) {
        if (!url1 || !url2) {
            if (!url1 && !url2) {
                // Редкий случай, например в ff - при создании новой вкладки
                return true;
            }
            return false;
        }
        return getDomain(url1) === getDomain(url2);
    };

    var getDomainAndTLD = function (ctx) {
        var resultHost = host;
        {
            var ref = getPath(ctx, 'document.referrer');
            if (!ref) {
                return resultHost;
            }
            var url = parseUrl(ctx, ref).host;
            var searchDomain = isYandexSearchDomain(ctx, url);
            resultHost = BASE_DOMAIN + "." + (searchDomain || BASE_TLD);
        }
        return resultHost;
    };

    /*
        Convert host and resource to full URL
    */
    var returnFullHost = function (resource, argHost) {
        return config.cProtocol + "//" + (argHost || host) + "/" + resource;
    };

    var useMiddlewareSender = function (ctx, transports, middlewareList) {
        var sender = useDefaultSender(ctx, transports);
        return function (senderInfo, resource, opt) {
            if (opt === void 0) { opt = {}; }
            var host = getDomainAndTLD(ctx);
            if ( senderInfo.hostPrefix) {
                host = "" + senderInfo.hostPrefix + host;
            }
            var urls = [returnFullHost(resource, host)];
            return combineMiddlewares(ctx, middlewareList, senderInfo, true)
                .then(bindArgs([senderInfo, urls, opt], sender))
                .then(function (result) {
                senderInfo.responseInfo = result.responseData;
                return combineMiddlewares(ctx, middlewareList, senderInfo).then(/* @__PURE__ */ bindArg(result.responseData, firstArg));
            });
        };
    };

    var WATCH_RESOURCE = 'watch';
    var WATCH_URL_PARAM = 'page-url';
    var WATCH_REFERER_PARAM = 'page-ref';
    var WATCH_CLASS_PARAM = 'cnt-class';
    var AD_BR_KEY = 'ad';
    var WH_BR_KEY = 'wh';
    var useSenderWatch = function (ctx, transports, middlewareList) {
        var sender = useMiddlewareSender(ctx, transports, middlewareList);
        return function (rawSenderParams, counterOpt) {
            var _a;
            var senderParams = mix({
                brInfo: browserInfo(),
            }, rawSenderParams);
            var urlParams = senderParams.urlParams, brInfo = senderParams.brInfo;
            var watchUrlParams = (_a = {},
                _a[WATCH_URL_PARAM] = (urlParams && urlParams[WATCH_URL_PARAM]) || '',
                _a.charset = 'utf-8',
                _a);
            if (counterOpt.counterType !== DEFAULT_COUNTER_TYPE) {
                watchUrlParams[WATCH_CLASS_PARAM] = counterOpt.counterType;
            }
            var defSenderParams = mix(senderParams, {
                urlParams: mix(senderParams.urlParams || {}, watchUrlParams),
            });
            {
                mix(defSenderParams, {
                    hostPrefix: getITPProviderHostPrefix(ctx, counterOpt, defSenderParams),
                });
            }
            var watchPath = WATCH_RESOURCE + "/" + counterOpt.id;
            return sender(defSenderParams, watchPath, {
                wmode: Boolean(brInfo.getVal(PAGE_VIEW_BR_KEY) &&
                    !brInfo.getVal(ARTIFICIAL_BR_KEY) &&
                    !brInfo.getVal(WH_BR_KEY)),
            });
        };
    };

    var CLICKMAP_RESOURCE = 'clmap';
    var CLICKMAP_URL_PARAM = 'page-url';
    var CLICKMAP_POINTER_PARAM = 'pointer-click';
    var useSenderClickMap = function (ctx, transports, middlewareList) {
        return function (senderParams, counterOptions) {
            var _a;
            var urlParams = senderParams.urlParams;
            var clickMapUrlParams = (_a = {},
                _a[CLICKMAP_URL_PARAM] = (urlParams && urlParams[CLICKMAP_URL_PARAM]) || '',
                _a);
            var defaultSenderParams = mix(senderParams, {
                urlParams: mix(senderParams.urlParams || {}, clickMapUrlParams),
            });
            var sender = useMiddlewareSender(ctx, transports, middlewareList);
            var clickMapresource = CLICKMAP_RESOURCE + "/" + counterOptions.id;
            return sender(defaultSenderParams, clickMapresource)["catch"](errorLogger(ctx, 'c.m'));
        };
    };

    var EVENTS = ['webkitvisibilitychange', 'visibilitychange'];
    var prerender = function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var doc = ctx.document;
            var brInfo = senderParams.brInfo;
            if (brInfo && isPrerender(ctx)) {
                var event_1 = cEvent(ctx);
                var onVisibilityChange_1 = function (e) {
                    if (!isPrerender(ctx)) {
                        event_1.un(doc, EVENTS, onVisibilityChange_1);
                        next();
                    }
                    return e;
                };
                event_1.on(doc, EVENTS, onVisibilityChange_1);
                brInfo.setVal('pr', '1');
            }
            else {
                next();
            }
        },
    }); };

    var NOINDEX_BR_KEY = 'ut';
    var IS_DESKTOP_BR_KEY = 'dp';
    var HID_BR_KEY = 'hid';
    var LS_ID_BR_KEY = 'ls';
    var BUILD_FLAGS_BR_KEY = 'vf';
    var REQUEST_NUMBER_BR_KEY = 'rqn';
    var BUILD_VERSION_BR_KEY = 'v';
    var COUNTER_NUMBER_BR_KEY = 'cn';
    var TIMEZONE_BR_KEY = 'z';
    var TIMESTAMP_BR_KEY = 'i';
    var SECONDS_BR_KEY = 'et';
    var COOKIES_ENABLED_BR_KEY = 'c';
    var RANDOM_NUMBER_BR_KEY = 'rn';
    var IS_TURBO_PAGE_BR_KEY = 'tp';
    var TURBO_PAGE_ID_BR_KEY = 'tpid';
    var VIEWPORT_SIZE_BR_KEY = 'w';
    var SCREEN_SIZE_BR_KEY = 's';
    var DEVICE_PIXEL_RATIO_BR_KEY = 'sk';
    var IS_IFRAME_BR_KEY = 'ifr';
    var IS_JAVA_ENABLED = 'j';
    var IS_SAME_ORIGIN_AS_TOP_WINDOW = 'sti';
    var FALSE_URL_BR_KEY = 'fu';
    var NET_TYPE_BR_KEY = 'nt';
    var FIRST_PAINT_BR_KEY = 'fp';
    var PERFORMANCE_TIMING_NEW_API_KEY = 'dsn';
    var DOCUMENT_ENCODING_BR_KEY = 'en';
    var BROWSER_LANGUAGE_BR_KEY = 'la';
    var UID_BR_KEY = 'u';
    var DEVICE_ID_BR_KEY = 'di';
    var DEVICE_ID_TIME_BR_KEY = 'dit';
    var DEVICE_PORT_BR_KEY = 'dip';
    var PRIVATE_BR_KEY = 'pri';
    var IS_SELENIUM_BR_KEY = 'iss';
    var IS_HEADLESS_BR_KEY = 'hdl';
    var IS_FACEBOOK_INSTANT_ARTICLES = 'iia';
    var IS_CHROME_PDF = 'cpf';
    var NOTIFICATION_PERMISSION = 'ntf';
    var IS_EU_BR_KEY = 'eu';
    var NAVIGATION_START = 'ns';
    var NAVIGATOR_PLATFORM = 'np';
    var WEBVISOR_VERSION_BR_KEY = 'wv';
    var WEBVISOR2_ENABLED_BR_KEY = 'we';
    var TURBO_UID = 'td';
    var BRO_UID_BR_KEY = 'bu';
    var IS_RECOVERED_ID_KEY = 're';
    var CONSOLE_OPEN_BR_KEY = 'co';
    var PERFOMANCE_TIMING_BR_KEY = 'ds';

    var toOneOrNull = bindArgs([1, null], ternary);
    var toZeroOrOne = bindArgs([1, 0], ternary);

    var LONGTASK_KEY = 'lt';

    var METHOD_NAME_EXPERIMENTS = 'experiments';
    var EXPERIMENT_BR_KEY = 'ex';
    var EXPERIMENT_URL_PARAM = 'exp';
    var WATCH_EXPERIMENT_PARAM = 'exp';

    var METHOD_NAME_PARAMS = 'params';
    var PARAMS_BR_KEY = 'pa';

    var METHOD_NAME_GOAL = 'reachGoal';
    var DEFAULT_SCHEME_PREFIX = 'goal';

    var METHOD_NAME_USER_PARAMS = 'userParams';

    var METHOD_TRACK_HASH = 'trackHash';

    var DEFAULT_NOT_BOUNCE_TIMEOUT = 15000;
    var NOT_BOUNCE_BR_KEY = 'nb';
    var NOT_BOUNCE_CLIENT_TIME_BR_KEY = 'cl';
    var METHOD_NAME_NOT_BOUNCE = 'notBounce';
    var LAST_NOT_BOUNCE_LS_KEY = 'lastHit';
    var APPROXIMATE_VISIT_DURATION = 30 * 60000;
    var METHOD_NAME_ACCURATE_TRACK_BOUNCE = 'accurateTrackBounce';

    var IS_DONWLOAD_BR_KEY = 'dl';
    var IS_EXTERNAL_LINK_BR_KEY = 'ln';
    var METHOD_NAME_FILE_CLICK = 'file';
    var METHOD_NAME_EXTERNAL_LINK_CLICK = 'extLink';
    var METHOD_NAME_ADD_FILE_EXTENSION = 'addFileExtension';
    var METHOD_NAME_TRACK_LINKS = 'trackLinks';
    var INTERNAL_LINK_STORAGE_KEY = 'il';
    var MAX_LEN_INTERNAL_LINK = 100;
    var BAD_PROTOCOL_RE = /^ *(data|javascript):/i;
    var REG_DOWNLOAD = new RegExp(/* @__PURE__ */ arrayJoin('', [
        "\\.(" + /* @__PURE__ */ arrayJoin('|', [
            '3gp',
            '7z',
            'aac',
            'ac3',
            'acs',
            'ai',
            'avi',
            'ape',
            'apk',
            'asf',
            'bmp',
            'bz2',
            'cab',
            'cdr',
            'crc32',
            'css',
            'csv',
            'cue',
            'divx',
            'dmg',
            'djvu?',
            'doc(x|m|b)?',
            'emf',
            'eps',
            'exe',
            'flac?',
            'flv',
            'iso',
            'swf',
            'gif',
            't?gz',
            'jpe?g?',
            'js',
            'm3u8?',
            'm4a',
            'mp(3|4|e?g?)',
            'm4v',
            'md5',
            'mkv',
            'mov',
            'msi',
            'ods',
            'og(g|m|v)',
            'psd',
            'rar',
            'rss',
            'rtf',
            'sea',
            'sfv',
            'sit',
            'sha1',
            'svg',
            'tar',
            'tif?f',
            'torrent',
            'ts',
            'txt',
            'vob',
            'wave?',
            'wma',
            'wmv',
            'wmf',
            'webm',
            'ppt(x|m|b)?',
            'xls(x|m|b)?',
            'pdf',
            'phps',
            'png',
            'xpi',
            'g?zip',
        ]) + ")$",
    ]), 'i');

    var METHOD_DESTRUCT = 'destruct';

    var METHOD_NAME_SET_USER_ID = 'setUserID';

    var METHOD_NAME_GET_CLIENT_ID = 'getClientID';

    var METHOD_NAME_CLICK_MAP = 'clickmap';

    var METHOD_NAME_ENABLE_ALL = 'enableAll';

    var _a$2;
    var METHODS_TELEMETRY_KEYS_MAP = (_a$2 = {},
        _a$2[METHOD_NAME_HIT] = 'h',
        _a$2[METHOD_NAME_EXPERIMENTS] = 'ex',
        _a$2[METHOD_NAME_PARAMS] = 'p',
        _a$2[METHOD_NAME_GOAL] = 'g',
        _a$2[METHOD_NAME_USER_PARAMS] = 'up',
        _a$2[METHOD_TRACK_HASH] = 'th',
        _a$2[METHOD_NAME_ACCURATE_TRACK_BOUNCE] = 'atb',
        _a$2[METHOD_NAME_NOT_BOUNCE] = 'nb',
        _a$2[METHOD_NAME_ADD_FILE_EXTENSION] = 'fe',
        _a$2[METHOD_NAME_EXTERNAL_LINK_CLICK] = 'el',
        _a$2[METHOD_NAME_FILE_CLICK] = 'fc',
        _a$2[METHOD_NAME_TRACK_LINKS] = 'tl',
        _a$2[METHOD_DESTRUCT] = 'd',
        _a$2[METHOD_NAME_SET_USER_ID] = 'ui',
        _a$2[METHOD_NAME_GET_CLIENT_ID] = 'ci',
        _a$2[METHOD_NAME_CLICK_MAP] = 'cm',
        _a$2[METHOD_NAME_ENABLE_ALL] = 'ea',
        _a$2);
    var METHODS_TELEMETRY_GLOBAL_STORAGE_KEY = 'mt';

    /**
     * Открыт ли сайт в плеере вебвизора
     *
     * @param {Window} ctx - окно
     * @param {string} hostname - location.host
     * @return {boolean}
     */
    var chekHost = /* @__PURE__ */ bindThisForMethodTest(/^.+\.mtproxy\.yandex\.net$/);
    var isMetrikaPlayer = /* @__PURE__ */ memo(function (ctx) {
        if (ctx.name === 'MetrikaPlayer') {
            return true;
        }
        var hostname = getLocation(ctx).hostname;
        return chekHost(hostname);
    });

    var OPTOUT_KEY = 'oo';
    var isOptoutEnabled = function (ctx) {
        var ret = false;
        {
            var globalConfig = getGlobalStorage(ctx);
            ret = !!globalConfig.getVal(OPTOUT_KEY);
        }
        {
            ret = ret || isMetrikaPlayer(ctx);
        }
        return ret;
    };

    var HID_NAME = 'hitId';
    var getHid = function (ctx) {
        var storage = getGlobalStorage(ctx);
        var val = storage.getVal(HID_NAME);
        if (!val) {
            val = getRandom(ctx);
            storage.setVal(HID_NAME, val);
        }
        return val;
    };

    var SEND_TIMEOUT = 5000;
    var INIT_MESSAGE_CHILD = 'initToChild';
    var INIT_MESSAGE_PARENT = 'initToParent';
    var INIT_MESSAGE = 'parentConnect';
    var OUT_DIRECTION = 0;
    var SPLITER$1 = ':';
    var NAME_SPACE = '__yminfo';
    var IFRAME_MESSAGE_TYPE = 'type';
    var IFRAME_MESSAGE_HID = 'hid';
    var IFRAME_MESSAGE_COUNTER_ID = 'counterId';
    var IFRAME_MESSAGE_DATA = 'data';
    var IFRAME_MESSAGE_TO_COUNTER = 'toCounter';
    var getIframeState = /* @__PURE__ */ memo((function () { return ({
        parents: {},
        pending: {},
        childs: {},
    }); }));
    var checkIframe = /* @__PURE__ */ ctxPath('postMessage');
    var genMessage = /* @__PURE__ */ curry(function (ctx, sigin, metaList, data) {
        var _a;
        var meta = {
            date: TimeOne(ctx)(getMs),
            key: ctx.Math.random(),
            dir: OUT_DIRECTION,
        };
        if (metaList.length) {
            meta.date = parseInt(metaList[0], 10);
            meta.key = parseFloat(metaList[1]);
            meta.dir = parseInt(metaList[2], 10);
        }
        mix(data, sigin);
        var out = (_a = {
                data: data
            },
            _a[NAME_SPACE] = /* @__PURE__ */ arrayJoin(SPLITER$1, [
                NAME_SPACE,
                meta.date,
                meta.key,
                meta.dir,
            ]),
            _a);
        return {
            meta: meta,
            string: stringify$1(ctx, out) || '',
        };
    });
    var sendToFrame = /* @__PURE__ */ curry(function (ctx, serialise, iframeCtx, data, cb) {
        var message = serialise(data);
        var state = getIframeState(ctx);
        var key = /* @__PURE__ */ arrayJoin(SPLITER$1, [message.meta.date, message.meta.key]);
        if (!checkIframe(iframeCtx)) {
            return;
        }
        state.pending[key] = cb;
        try {
            iframeCtx.postMessage(message.string, '*');
        }
        catch (e) {
            delete state.pending[key];
            return;
        }
        setDefer(ctx, function () {
            delete state.pending[key];
        }, SEND_TIMEOUT, 'if.s');
    });
    var safeSendToFrame = /* @__PURE__ */ ctxErrorLogger('s.f', sendToFrame);
    var addHandlers = function (ctx, emitterObj) {
        var state = getIframeState(ctx);
        emitterObj
            .on(INIT_MESSAGE_PARENT, function (_a) {
            var e = _a[0], data = _a[1];
            state.childs[data[IFRAME_MESSAGE_COUNTER_ID]] = {
                info: data,
                window: e.source,
            };
        })
            .on(INIT_MESSAGE_CHILD, function (_a) {
            var e = _a[0], data = _a[1];
            if (e.source === ctx.parent) {
                emitterObj.trigger(INIT_MESSAGE, [e, data]);
            }
        })
            .on(INIT_MESSAGE, function (_a) {
            var e = _a[0], data = _a[1];
            if (!data[IFRAME_MESSAGE_COUNTER_ID]) {
                return;
            }
            state.parents[data[IFRAME_MESSAGE_COUNTER_ID]] = {
                info: data,
                window: e.source,
            };
        });
    };
    var handleInputMessage = /* @__PURE__ */ curry(function (ctx, opt, serialise, emiter, counterInfo, event) {
        var messageInfo = null;
        var meta = null;
        var state = getIframeState(ctx);
        var message = null;
        try {
            messageInfo = parse$1(ctx, event.data);
            meta = messageInfo[NAME_SPACE];
            message = messageInfo[IFRAME_MESSAGE_DATA];
        }
        catch (e) {
            return;
        }
        if (isNil(meta) ||
            !meta.substring ||
            meta.substring(0, NAME_SPACE.length) !== NAME_SPACE ||
            isNil(message)) {
            return;
        }
        var metaList = meta.split(SPLITER$1);
        if (metaList.length !== 4) {
            return;
        }
        var counterId = opt.id;
        var dateInfo = metaList[1], key = metaList[2], direction = metaList[3];
        if (!isArray(message) &&
            message[IFRAME_MESSAGE_TYPE] &&
            direction === "" + OUT_DIRECTION &&
            message[IFRAME_MESSAGE_COUNTER_ID]) {
            if (!message[IFRAME_MESSAGE_TO_COUNTER] ||
                // eslint-disable-next-line eqeqeq
                message[IFRAME_MESSAGE_TO_COUNTER] == counterId) {
                var returnWinCtx = null;
                try {
                    returnWinCtx = event.source;
                }
                catch (e) {
                    // empty
                }
                if (isNull(returnWinCtx) || !checkIframe(returnWinCtx)) {
                    return;
                }
                var resp = emiter.trigger(message[IFRAME_MESSAGE_TYPE], [
                    event,
                    message,
                ]);
                var normResp = /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, ctxMix(counterInfo)), resp.concat([{}]));
                var data = serialise([
                    dateInfo,
                    key,
                    message[IFRAME_MESSAGE_COUNTER_ID],
                ], normResp);
                returnWinCtx.postMessage(data.string, '*');
            }
        }
        else if (direction === "" + counterId &&
            isArray(message) &&
            /* @__PURE__ */ cFilter(function (e) {
                return !!(e[IFRAME_MESSAGE_HID] && e[IFRAME_MESSAGE_COUNTER_ID]);
            }, message).length === message.length) {
            var callback = state.pending[/* @__PURE__ */ arrayJoin(SPLITER$1, [dateInfo, key])];
            if (callback) {
                // eslint-disable-next-line prefer-spread
                callback.apply(null, [event].concat(message));
            }
        }
    });
    var safeHandleInputMessage = /* @__PURE__ */ ctxErrorLogger('s.fh', handleInputMessage);
    var iframeConnector = function (ctx, opt) {
        var _a;
        var getElems = /* @__PURE__ */ getNativeFunction('getElementsByTagName', getPath(ctx, 'document'));
        var state = getIframeState(ctx);
        var hasPostMessage = checkIframe(ctx);
        var emitterObj = emitter(ctx);
        var events = cEvent(ctx);
        if (!getElems || !hasPostMessage) {
            return null;
        }
        var iframeList = getElems.call(ctx.document, 'iframe');
        var counterInfo = (_a = {},
            _a[IFRAME_MESSAGE_COUNTER_ID] = opt.id,
            _a[IFRAME_MESSAGE_HID] = "" + getHid(ctx),
            _a);
        addHandlers(ctx, emitterObj);
        var serializer = genMessage(ctx, counterInfo);
        var sendInfo = safeSendToFrame(ctx, serializer([]));
        cForEach(function (iframeEl) {
            var ctxWin = null;
            try {
                ctxWin = iframeEl.contentWindow;
            }
            catch (e) {
                // empty
            }
            if (!ctxWin) {
                return;
            }
            sendInfo(ctxWin, {
                type: INIT_MESSAGE_CHILD,
            }, function (e, data) {
                emitterObj.trigger(INIT_MESSAGE_PARENT, [e, data]);
            });
        }, iframeList);
        if (isIframe(ctx)) {
            sendInfo(ctx.parent, {
                type: INIT_MESSAGE_PARENT,
            }, function (e, data) {
                emitterObj.trigger(INIT_MESSAGE, [e, data]);
            });
        }
        events.on(ctx, ['message'], safeHandleInputMessage(ctx, opt, serializer, emitterObj, counterInfo));
        return {
            emitter: emitterObj,
            parents: state.parents,
            childs: state.childs,
            sendToFrame: sendInfo,
        };
    };
    var counterIframeConnector = /* @__PURE__ */ memo(iframeConnector, /* @__PURE__ */ pipe(secondArg, getCounterKey));

    var sendToMany = /* @__PURE__ */ curry(function (ctx, sendToFrame, dict, item, data) {
        var newItem = item;
        var promise = new PolyPromise(function (resolve, reject) {
            var counterList = cKeys(dict);
            var resolveAll = /* @__PURE__ */ pipe(newItem.resolve ? newItem.resolve : firstArg, asSideEffect(resolve));
            var rejectAll = /* @__PURE__ */ pipe(newItem.reject ? newItem.reject : firstArg, asSideEffect(reject));
            newItem.resolve = resolveAll;
            newItem.reject = rejectAll;
            cForEach(function (counterId) {
                var _a;
                newItem.tryTo.push(counterId);
                var childInfo = dict[counterId];
                var timeOut = setDefer(ctx, /* @__PURE__ */ bindArg(createKnownError(), rejectAll), SEND_TIMEOUT + 100, 'is.m');
                sendToFrame(childInfo.window, mix(data, (_a = {},
                    _a[IFRAME_MESSAGE_TO_COUNTER] = parseInt(counterId, 10),
                    _a)), function (_, frameData) {
                    clearDefer(ctx, timeOut);
                    newItem.sendedTo.push(counterId);
                    if (newItem.resolve) {
                        newItem.resolve(frameData);
                    }
                });
            }, counterList);
        });
        return promise["catch"](errorLogger(ctx, 'if.b'));
    });
    var resend = /* @__PURE__ */ curry(function (sendToManyFn, itemList, iframeInfo) {
        var items = /* @__PURE__ */ cFilter(function (val) {
            return !includes(iframeInfo.info[IFRAME_MESSAGE_COUNTER_ID], val.tryTo);
        }, itemList);
        cForEach(function (newItem) {
            var _a;
            if (!iframeInfo.info[IFRAME_MESSAGE_COUNTER_ID]) {
                return;
            }
            sendToManyFn((_a = {},
                _a[iframeInfo.info[IFRAME_MESSAGE_COUNTER_ID]] = iframeInfo,
                _a), newItem, newItem.data);
        }, items);
    });
    var iframeSender = function (ctx, options) {
        var iframeConnectorData = counterIframeConnector(ctx, options);
        var buffer = {
            childs: [],
            parent: [],
        };
        if (!iframeConnectorData) {
            return null;
        }
        var sendToManyFn = sendToMany(ctx, iframeConnectorData.sendToFrame);
        var resendFn = resend(sendToManyFn);
        iframeConnectorData.emitter
            .on(INIT_MESSAGE_PARENT, function (_a) {
            var message = _a[1];
            resendFn(buffer.childs, iframeConnectorData.childs[message[IFRAME_MESSAGE_COUNTER_ID]]);
        })
            .on(INIT_MESSAGE, function (_a) {
            var message = _a[1];
            resendFn(buffer.parent, iframeConnectorData.parents[message[IFRAME_MESSAGE_COUNTER_ID]]);
        });
        return {
            emitter: iframeConnectorData.emitter,
            sendToIframe: function (iframeCtx, frameData) {
                return new PolyPromise(function (resolve, reject) {
                    iframeConnectorData.sendToFrame(iframeCtx, frameData, function (e, data) {
                        resolve([e, data]);
                    });
                    setDefer(ctx, /* @__PURE__ */ bindArg(createKnownError(), reject), SEND_TIMEOUT + 100, 'is.o');
                });
            },
            sendToChildren: function (data) {
                var newItem = {
                    sendedTo: [],
                    tryTo: [],
                    data: data,
                };
                buffer.childs.push(newItem);
                return sendToManyFn(iframeConnectorData.childs, newItem, data);
            },
            sendToParents: function (data) {
                var newItem = {
                    sendedTo: [],
                    tryTo: [],
                    data: data,
                };
                buffer.parent.push(newItem);
                return sendToManyFn(iframeConnectorData.parents, newItem, data);
            },
        };
    };
    var counterIframeSender = /* @__PURE__ */ memo(iframeSender, /* @__PURE__ */ pipe(secondArg, getCounterKey));

    var PLUGIN_MESSAGE = 'pluginInfo';
    var PLUGIN_MESSAGES_COUNT_KEY = 'cmc';
    var rawInitPlugin = function (ctx, counterOptions) {
        var iframeController = counterIframeSender(ctx, counterOptions);
        if (!iframeController) {
            return;
        }
        var emitter = iframeController.emitter;
        emitter.on(PLUGIN_MESSAGE, errorLogger(ctx, 'c.plgn', function () {
            {
                var globalStorage = getGlobalStorage(ctx);
                globalStorage.setVal(PLUGIN_MESSAGES_COUNT_KEY, globalStorage.getVal(PLUGIN_MESSAGES_COUNT_KEY, 0) + 1);
            }
            return getOriginalOptions(counterOptions, optionsKeysMap);
        }));
    };
    var initPlugin = /* @__PURE__ */ ctxErrorLogger('pa.plgn', rawInitPlugin);

    var getGSFlag = curry2(function (flagName, ctx) {
        var gs = getGlobalStorage(ctx);
        return gs.getVal(flagName, null);
    });

    var CLMAP_CLICKS_TEL_KEY = 'clc';
    var IS_ACTIVE_WINDOW_TEL_KEY = 'aw';
    var METHODS_CALLED_TEL_KEY = 'mc';
    var OPTOUT_TEL_KEY = 'oo';
    var PLUGIN_MESSAGES_COUNT_TEL_KEY = 'pmc';
    var LONGTASK_TEL_KEY = LONGTASK_KEY;

    var TELEMETRY_FLAG_GETTERS = {};
    {
        TELEMETRY_FLAG_GETTERS[METHODS_CALLED_TEL_KEY] = function (ctx) {
            var methodCallCounters = globalStorage(ctx).getVal(METHODS_TELEMETRY_GLOBAL_STORAGE_KEY, {});
            var counters = entries(methodCallCounters);
            if (counters.length) {
                return cReduce(function (carry, _a, index) {
                    var key = _a[0], val = _a[1];
                    return "" + carry + (index ? '-' : '') + key + "-" + val;
                }, '', counters);
            }
            return null;
        };
        {
            TELEMETRY_FLAG_GETTERS[OPTOUT_TEL_KEY] = getGSFlag(OPTOUT_KEY);
        }
        {
            TELEMETRY_FLAG_GETTERS[PLUGIN_MESSAGES_COUNT_TEL_KEY] = getGSFlag(PLUGIN_MESSAGES_COUNT_KEY);
        }
        {
            TELEMETRY_FLAG_GETTERS[CLMAP_CLICKS_TEL_KEY] = getGSFlag(GLOBAL_STORAGE_CLICKS_KEY);
        }
        {
            TELEMETRY_FLAG_GETTERS[LONGTASK_TEL_KEY] = function (ctx) {
                var val = globalStorage(ctx).getVal(LONGTASK_KEY, null);
                if (val) {
                    return ctx.Math.round(val * 100);
                }
                return val;
            };
        }
        {
            TELEMETRY_FLAG_GETTERS[IS_ACTIVE_WINDOW_TEL_KEY] = function (ctx) {
                var hidden = /* @__PURE__ */ cFind(/* @__PURE__ */ pipe(isNil, notFn), [
                    ctx.document.hidden,
                    ctx.document.msHidden,
                    ctx.document.webkitHidden,
                ]);
                if (!isNil(hidden)) {
                    return toZeroOrOne(!hidden);
                }
                return null;
            };
        }
    }
    var DEFAULT_TELEMETRY_FLAGS = cKeys(TELEMETRY_FLAG_GETTERS);

    var getFirstHitState = /* @__PURE__ */ memo((function () {
        return ({
            firstHitBrinfo: null,
            hitsQueue: [],
        });
    }), getCounterKey);
    var IS_EU_CONFIG_KEY = 'isEU';
    var checkFirstHitResolve = function (ctx, brInfo, cState, response) {
        var state = cState;
        var hitsQueue = state.hitsQueue, firstHitBrinfo = state.firstHitBrinfo;
        var isFirstHit = firstHitBrinfo === brInfo;
        if (isFirstHit && hitsQueue) {
            if ( response) {
                var globalConfig = getGlobalStorage(ctx);
                globalConfig.setVal(IS_EU_CONFIG_KEY, getPath(response, 'settings.eu'));
            }
            cForEach(call, hitsQueue);
            state.hitsQueue = null;
        }
    };
    var waitFirstHitResolve = function (senderParams, state, resolver) {
        var brInfo = senderParams.brInfo;
        if (!brInfo) {
            resolver();
            return;
        }
        // resolve imedeatly for hits who resive counter options
        // this is our first hit
        if (brInfo.getVal(PAGE_VIEW_BR_KEY) && !brInfo.getVal(ARTIFICIAL_BR_KEY)) {
            state.firstHitBrinfo = brInfo;
            resolver();
            return;
        }
        if (!state.hitsQueue) {
            resolver();
            return;
        }
        state.hitsQueue.push(resolver);
    };
    var counterFirstHit = function (ctx, provider, opt) { return ({
        beforeRequest: function (senderParams, next) {
            var state = getFirstHitState(opt);
            waitFirstHitResolve(senderParams, state, next);
        },
        afterRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo, response = senderParams.responseInfo;
            var state = getFirstHitState(opt);
            if (brInfo) {
                checkFirstHitResolve(ctx, brInfo, state, response);
            }
            next();
        },
    }); };

    var DEFER_KEY = 'nohit';

    var _a$3;
    var PERF_DIFS = [
        // 0 DNSTiming
        ['domainLookupEnd', 'domainLookupStart'],
        // 1 ConnectTiming
        ['connectEnd', 'connectStart'],
        // 2 ResponseStartTiming
        ['responseStart', 'requestStart'],
        // 3 ResponseEndTiming
        ['responseEnd', 'responseStart'],
        // 4 FetchTiming
        ['fetchStart'],
        // 5 RedirectTiming
        ['redirectEnd', 'redirectStart'],
        // 6 RedirectCount
        ['redirectCount'],
        // 7 DOMInteractiveTiming
        ['domInteractive', 'responseEnd'],
        // 8 DOMContentLoadedTiming
        ['domContentLoadedEventEnd', 'domContentLoadedEventStart'],
        // 9 DOMCompleteTiming
        ['domComplete'],
        // 10 LoadEventStartTiming
        ['loadEventStart'],
        // 11 LoadEventEndTiming
        ['loadEventEnd', 'loadEventStart'],
        // 12 NSToDOMContentLoadedTiming
        ['domContentLoadedEventStart'],
    ];
    var itemsUnknownEarlyOn = (_a$3 = {},
        _a$3['responseEnd'] = 1,
        _a$3['domInteractive'] = 1,
        _a$3['domContentLoadedEventStart'] = 1,
        _a$3['domContentLoadedEventEnd'] = 1,
        _a$3['domComplete'] = 1,
        _a$3['loadEventStart'] = 1,
        _a$3['loadEventEnd'] = 1,
        _a$3['unloadEventStart'] = 1,
        _a$3['unloadEventEnd'] = 1,
        _a$3['secureConnectionStart'] = 1,
        _a$3);
    var getPerformanceState = /* @__PURE__ */ memo(constructArray);
    /**
     * Некоторые тайминги не известны до какого-то момента, в таком случае они === 0,
     * но есть тайминги которые 0 потому что операция заняла 0 милисикунд, чтобы их отличать
     * существует эта map, которая говорит изменится ли тайминг с 0-я на какое-то значение
     */
    var isUnknownTiming = function (item) {
        var left = item[0], right = item[1];
        return itemsUnknownEarlyOn[left] || itemsUnknownEarlyOn[right];
    };
    var getPerformanceDiff = function (perf, timing, perfDiffs) {
        return /* @__PURE__ */ cMap(function (item) {
            var left = item[0], right = item[1];
            if (isFunction(left)) {
                return left(perf, timing) || null;
            }
            if (isFunction(right)) {
                return null;
            }
            var shouldSubtract = Boolean(timing[left] && timing[right]);
            if (!shouldSubtract && item.length === 2) {
                shouldSubtract =
                    timing[left] === 0 &&
                        timing[right] === 0 &&
                        !isUnknownTiming(item);
            }
            if (shouldSubtract) {
                var diff = Math.round(timing[left]) - Math.round(timing[right]);
                if (diff < 0 || diff > 36e5) {
                    return null;
                }
                return diff;
            }
            if (item.length === 1 && timing[left]) {
                return Math.round(timing[left]);
            }
            return null;
        }, perfDiffs);
    };
    var getdiff = function (lastPerf, newPerf) {
        var diff;
        if (lastPerf.length) {
            diff = /* @__PURE__ */ cMap(function (lastVal, i) {
                var newVal = newPerf[i];
                return newVal === lastVal ? null : newVal;
            }, lastPerf);
        }
        else {
            diff = newPerf;
        }
        // eslint-disable-next-line no-param-reassign
        lastPerf.length = 0;
        cForEach(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('push', lastPerf)), newPerf);
        if (/* @__PURE__ */ cFilter(/* @__PURE__ */ equal(null), diff).length === lastPerf.length) {
            return null;
        }
        return diff;
    };
    var performanceTiming = function (ctx, counterOptions, senderParams) {
        var _a = senderParams.urlParams, urlParams = _a === void 0 ? {} : _a;
        if (urlParams[DEFER_KEY]) {
            return null;
        }
        var perf = getPerformance(ctx);
        var key = getCounterKey(counterOptions);
        if (!perf) {
            return null;
        }
        var timing = null;
        if (isFunction(perf.getEntriesByType)) {
            var navigationTiming = getPath(perf.getEntriesByType('navigation'), '0');
            if (navigationTiming) {
                timing = navigationTiming;
            }
        }
        if (!timing) {
            return null;
        }
        var newPerf = getPerformanceDiff(perf, timing, PERF_DIFS);
        var lastPerf = getPerformanceState(key);
        var diff = getdiff(lastPerf, newPerf);
        return diff && /* @__PURE__ */ arrayJoin(',', diff);
    };

    var base64abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var safeBase64replacement = {
        // safe decode
        '*': '+',
        '-': '/',
        _: '=',
        // safe encode
        '+': '*',
        '/': '-',
        '=': '_',
    };
    /* eslint-disable no-bitwise */
    /* eslint-disable no-plusplus */
    var replaceBase64 = function (str, safe) {
        if (safe === void 0) { safe = false; }
        if (!str) {
            return '';
        }
        // Заменить обычные на безопасные символы или наоборот (зависит от флага)
        // encoder - в полученной base64 заменяет символы на безопасные
        // decoder - перед декодингом заменяет все безопасные на обычные
        return str.replace(safe ? /[+/=]/g : /[-*_]/g, function (c) {
            return safeBase64replacement[c] || c;
        });
    };
    var decodeBase64 = function (baseStr, safe) {
        if (safe === void 0) { safe = false; }
        var str = baseStr;
        var result = '';
        var i = 0;
        if (!str) {
            return '';
        }
        if (safe) {
            str = replaceBase64(str);
        }
        while (str.length % 4) {
            str += '=';
        }
        do {
            // unpack four hexets into three octets using index points in b64b
            var h1 = base64abc.indexOf(str.charAt(i++));
            var h2 = base64abc.indexOf(str.charAt(i++));
            var h3 = base64abc.indexOf(str.charAt(i++));
            var h4 = base64abc.indexOf(str.charAt(i++));
            if (h1 < 0 || h2 < 0 || h3 < 0 || h4 < 0) {
                return null;
            }
            var bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
            var o1 = (bits >> 16) & 0xff;
            var o2 = (bits >> 8) & 0xff;
            var o3 = bits & 0xff;
            if (h3 === 64) {
                result += String.fromCharCode(o1);
            }
            else if (h4 === 64) {
                result += String.fromCharCode(o1, o2);
            }
            else {
                result += String.fromCharCode(o1, o2, o3);
            }
        } while (i < str.length);
        return result;
    };
    var encodeBase64 = function (data, safe) {
        if (safe === void 0) { safe = false; }
        var len = data.length;
        var lPos = len - (len % 3);
        var result = [];
        for (var i = 0; i < lPos; i += 3) {
            var t_1 = (data[i] << 16) + (data[i + 1] << 8) + data[i + 2];
            result.push.apply(result, [
                base64abc[(t_1 >> 18) & 0x3f],
                base64abc[(t_1 >> 12) & 0x3f],
                base64abc[(t_1 >> 6) & 0x3f],
                base64abc[t_1 & 0x3f],
            ]);
        }
        var t;
        switch (len - lPos) {
            case 1:
                t = data[lPos] << 4;
                result.push.apply(result, [
                    base64abc[(t >> 6) & 0x3f],
                    base64abc[t & 0x3f],
                    base64abc[64],
                    base64abc[64],
                ]);
                break;
            case 2:
                t = (data[lPos] << 10) + (data[lPos + 1] << 2);
                result.push.apply(result, [
                    base64abc[(t >> 12) & 0x3f],
                    base64abc[(t >> 6) & 0x3f],
                    base64abc[t & 0x3f],
                    base64abc[64],
                ]);
                break;
        }
        var str = result.join('');
        return safe ? replaceBase64(str, true) : str;
    };
    var decodeUtf8 = function (str) {
        var result = '';
        var i = 0;
        while (i < str.length) {
            var char = str.charCodeAt(i);
            if (char < 128) {
                result += String.fromCharCode(char);
                i++;
            }
            else if (char > 191 && char < 224) {
                var c2 = str.charCodeAt(i + 1);
                result += String.fromCharCode(((char & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                var c2 = str.charCodeAt(i + 1);
                var c3 = str.charCodeAt(i + 2);
                result += String.fromCharCode(((char & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return result;
    };
    var encodeUtf8 = function (str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 128) {
                result.push(c);
            }
            else if (c > 127 && c < 2048) {
                result.push((c >> 6) | 192);
                result.push((c & 63) | 128);
            }
            else {
                result.push((c >> 12) | 224);
                result.push(((c >> 6) & 63) | 128);
                result.push((c & 63) | 128);
            }
        }
        return result;
    };
    /* eslint-enable no-plusplus */
    /* eslint-enable no-bitwise */

    var wrapLogFunction = function (ctx, type, func) {
        return function l() {
            // eslint-disable-next-line prefer-rest-params
            var args = argsToArray(arguments);
            dispatchDebuggerEvent(ctx, {
                name: 'log',
                data: {
                    args: args,
                    type: type,
                },
            });
            return func.apply(void 0, args);
        };
    };

    var createConsole = function (ctx) {
        var consoleCtx = getPath(ctx, 'console');
        var logFn = getPath(consoleCtx, 'log');
        var log = isNativeFn('log', logFn)
            ? bind(logFn, consoleCtx)
            : noop;
        var warnFn = getPath(consoleCtx, 'warn');
        var warn = isNativeFn('warn', warnFn)
            ? bind(warnFn, consoleCtx)
            : log;
        var errorFn = getPath(consoleCtx, 'error');
        var error = isNativeFn('error', errorFn)
            ? bind(errorFn, consoleCtx)
            : log;
        {
            return {
                log: wrapLogFunction(ctx, 'log', log),
                error: wrapLogFunction(ctx, 'error', error),
                warn: wrapLogFunction(ctx, 'warn', warn),
            };
        }
    };
    var getConsole = /* @__PURE__ */ memo(createConsole);

    var CONSOLE_TEST_KEY = 'jn';
    var consoleDetectorRaw = function (ctx) {
        if (isAndroid(ctx) || isIOS(ctx)) {
            var storage_1 = globalLocalStorage(ctx);
            if (isNil(storage_1.getVal(CONSOLE_TEST_KEY))) {
                storage_1.setVal(CONSOLE_TEST_KEY, false);
                var logging = ctx.chrome || isSafari(ctx) ? function l() { } : /./;
                var console_1 = getConsole(ctx);
                logging.toString = function () {
                    storage_1.setVal(CONSOLE_TEST_KEY, true);
                    return "Yandex.Metrika counter is initialized";
                };
                console_1.log('%c%s', 'color: inherit', logging);
            }
        }
    };
    var useConsoleDetectorRaw = /* @__PURE__ */ ctxErrorLogger('p.cd', consoleDetectorRaw);

    var isFFVersionRegExp = /Firefox\/([0-9]+)/;
    var isSafariVersionRegExp = /([0-9\\.]+) Safari/;
    var yaBroReg = /\sYptp\/\d\.(\d+)\s/;
    var getITPYaBroVersion = function (ctx) {
        var agent = getAgent(ctx);
        if (agent) {
            var versionList = yaBroReg.exec(agent);
            if (versionList && versionList.length > 1) {
                return parseInt(versionList[1], 10);
            }
        }
        return 0;
    };
    var edgeReg = /Edg\/(\d+)\./;
    var isEdgeMinVersion = function (ctx, minVersion) {
        var agent = getAgent(ctx);
        if (agent) {
            var versionList = agent.match(edgeReg);
            if (versionList && versionList.length > 1) {
                var no = parseInt(versionList[1], 10);
                return no >= minVersion;
            }
        }
        return false;
    };
    var isFFVersion = function (ctx, minVersion) {
        if (isFF(ctx) && minVersion) {
            var agent = getAgent(ctx);
            var version = agent.match(isFFVersionRegExp);
            if (version && version.length) {
                return +version[1] >= minVersion;
            }
        }
        return false;
    };
    var isSafariVersion = function (ctx, expected) {
        if (isSafari(ctx)) {
            var agent = getAgent(ctx);
            var version = agent.match(isSafariVersionRegExp);
            if (version && version.length) {
                return version[1] === expected;
            }
        }
        return false;
    };
    var isITPDisabled = /* @__PURE__ */ memo(function (ctx) {
        var yaBroNo = getITPYaBroVersion(ctx);
        if (yaBroNo >= 50 && yaBroNo <= 99) {
            return false;
        }
        var isEdge = isEdgeMinVersion(ctx, 79);
        if (isEdge) {
            return false;
        }
        return !isITP(ctx) || isSafariWebView(ctx);
    });
    var getVal = function (ctx, counterOptions, globalStorage, localStorage, initFunc, valName, valDefault, brInfo) {
        var val = globalStorage.getVal(valName);
        if (isNil(val)) {
            globalStorage.setVal(valName, valDefault);
            initFunc(ctx, counterOptions, globalStorage, localStorage);
            val = globalStorage.getVal(valName, valDefault);
        }
        if (!isUndefined(brInfo)) {
            brInfo.setOrNot(valName, "" + val);
        }
        return val;
    };

    var fontList = [
        'monospace',
        'sans-serif',
        'serif',
        'Andale Mono',
        'Arial',
        'Arial Black',
        'Arial Hebrew',
        'Arial MT',
        'Arial Narrow',
        'Arial Rounded MT Bold',
        'Arial Unicode MS',
        'Bitstream Vera Sans Mono',
        'Book Antiqua',
        'Bookman Old Style',
        'Calibri',
        'Cambria',
        'Cambria Math',
        'Century',
        'Century Gothic',
        'Century Schoolbook',
        'Comic Sans',
        'Comic Sans MS',
        'Consolas',
        'Courier',
        'Courier New',
        'Garamond',
        'Geneva',
        'Georgia',
        'Helvetica',
        'Helvetica Neue',
        'Impact',
        'Lucida Bright',
        'Lucida Calligraphy',
        'Lucida Console',
        'Lucida Fax',
        'LUCIDA GRANDE',
        'Lucida Handwriting',
        'Lucida Sans',
        'Lucida Sans Typewriter',
        'Lucida Sans Unicode',
        'Microsoft Sans Serif',
        'Monaco',
        'Monotype Corsiva',
        'MS Gothic',
        'MS Outlook',
        'MS PGothic',
        'MS Reference Sans Serif',
        'MS Sans Serif',
        'MS Serif',
        'MYRIAD',
        'MYRIAD PRO',
        'Palatino',
        'Palatino Linotype',
        'Segoe Print',
        'Segoe Script',
        'Segoe UI',
        'Segoe UI Light',
        'Segoe UI Semibold',
        'Segoe UI Symbol',
        'Tahoma',
        'Times',
        'Times New Roman',
        'Times New Roman PS',
        'Trebuchet MS',
        'Verdana',
        'Wingdings',
        'Wingdings 2',
        'Wingdings 3',
    ];
    /*
    const moreExtendet = [
        'Copperplate Gothic Light',
        'CopperplGoth Bd BT',
        'Corbel',
        'Cordia New',
        'CordiaUPC',
        'Cornerstone',
        'Coronet',
        'Cuckoo',
        'Curlz MT',
        'DaunPenh',
        'Dauphin',
        'David',
        'DB LCD Temp',
        'DELICIOUS',
        'Denmark',
        'DFKai-SB',
        'Didot',
        'DilleniaUPC',
        'DIN',
        'DokChampa',
        'Dotum',
        'DotumChe',
        'Ebrima',
        'Edwardian Script ITC',
        'Elephant',
        'English 111 Vivace BT',
        'Engravers MT',
        'EngraversGothic BT',
        'Eras Bold ITC',
        'Eras Demi ITC',
        'Eras Light ITC',
        'Eras Medium ITC',
        'EucrosiaUPC',
        'Euphemia',
        'Euphemia UCAS',
        'EUROSTILE',
        'Exotc350 Bd BT',
        'FangSong',
        'Felix Titling',
        'Fixedsys',
        'FONTIN',
        'Footlight MT Light',
        'Forte',
        'FrankRuehl',
        'Fransiscan',
        'Freefrm721 Blk BT',
        'FreesiaUPC',
        'Freestyle Script',
        'French Script MT',
        'FrnkGothITC Bk BT',
        'Fruitger',
        'FRUTIGER',
        'Futura',
        'Futura Bk BT',
        'Futura Lt BT',
        'Futura Md BT',
        'Futura ZBlk BT',
        'FuturaBlack BT',
        'Gabriola',
        'Galliard BT',
        'Gautami',
        'Geeza Pro',
        'Geometr231 BT',
        'Geometr231 Hv BT',
        'Geometr231 Lt BT',
        'GeoSlab 703 Lt BT',
        'GeoSlab 703 XBd BT',
        'Gigi',
        'Gill Sans',
        'Gill Sans MT',
        'Gill Sans MT Condensed',
        'Gill Sans MT Ext Condensed Bold',
        'Gill Sans Ultra Bold',
        'Gill Sans Ultra Bold Condensed',
        'Gisha',
        'Gloucester MT Extra Condensed',
        'GOTHAM',
        'GOTHAM BOLD',
        'Goudy Old Style',
        'Goudy Stout',
        'GoudyHandtooled BT',
        'GoudyOLSt BT',
        'Gujarati Sangam MN',
        'Gulim',
        'GulimChe',
        'Gungsuh',
        'GungsuhChe',
        'Gurmukhi MN',
        'Haettenschweiler',
        'Harlow Solid Italic',
        'Harrington',
        'Heather',
        'Heiti SC',
        'Heiti TC',
        'HELV',
        'Herald',
        'High Tower Text',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Mincho ProN',
        'Hoefler Text',
        'Humanst 521 Cn BT',
        'Humanst521 BT',
        'Humanst521 Lt BT',
        'Imprint MT Shadow',
        'Incised901 Bd BT',
        'Incised901 BT',
        'Incised901 Lt BT',
        'INCONSOLATA',
        'Informal Roman',
        'Informal011 BT',
        'INTERSTATE',
        'IrisUPC',
        'Iskoola Pota',
        'JasmineUPC',
        'Jazz LET',
        'Jenson',
        'Jester',
        'Jokerman',
        'Juice ITC',
        'Kabel Bk BT',
        'Kabel Ult BT',
        'Kailasa',
        'KaiTi',
        'Kalinga',
        'Kannada Sangam MN',
        'Kartika',
        'Kaufmann Bd BT',
        'Kaufmann BT',
        'Khmer UI',
        'KodchiangUPC',
        'Kokila',
        'Korinna BT',
        'Kristen ITC',
        'Krungthep',
        'Kunstler Script',
        'Lao UI',
        'Latha',
        'Leelawadee',
        'Letter Gothic',
        'Levenim MT',
        'LilyUPC',
        'Lithograph',
        'Lithograph Light',
        'Long Island',
        'Lydian BT',
        'Magneto',
        'Maiandra GD',
        'Malayalam Sangam MN',
        'Malgun Gothic',
        'Mangal',
        'Marigold',
        'Marion',
        'Marker Felt',
        'Market',
        'Marlett',
        'Matisse ITC',
        'Matura MT Script Capitals',
        'Meiryo',
        'Meiryo UI',
        'Microsoft Himalaya',
        'Microsoft JhengHei',
        'Microsoft New Tai Lue',
        'Microsoft PhagsPa',
        'Microsoft Tai Le',
        'Microsoft Uighur',
        'Microsoft YaHei',
        'Microsoft Yi Baiti',
        'MingLiU',
        'MingLiU_HKSCS',
        'MingLiU_HKSCS-ExtB',
        'MingLiU-ExtB',
        'Minion',
        'Minion Pro',
        'Miriam',
        'Miriam Fixed',
        'Mistral',
        'Modern',
        'Modern No. 20',
        'Mona Lisa Solid ITC TT',
        'Mongolian Baiti',
        'MONO',
        'MoolBoran',
        'Mrs Eaves',
        'MS LineDraw',
        'MS Mincho',
        'MS PMincho',
        'MS Reference Specialty',
        'MS UI Gothic',
        'MT Extra',
        'MUSEO',
        'MV Boli',
        'Nadeem',
        'Narkisim',
        'NEVIS',
        'News Gothic',
        'News GothicMT',
        'NewsGoth BT',
        'Niagara Engraved',
        'Niagara Solid',
        'Noteworthy',
        'NSimSun',
        'Nyala',
        'OCR A Extended',
        'Old Century',
        'Old English Text MT',
        'Onyx',
        'Onyx BT',
        'OPTIMA',
        'Oriya Sangam MN',
        'OSAKA',
        'OzHandicraft BT',
        'Palace Script MT',
        'Papyrus',
        'Parchment',
        'Party LET',
        'Pegasus',
        'Perpetua',
        'Perpetua Titling MT',
        'PetitaBold',
        'Pickwick',
        'Plantagenet Cherokee',
        'Playbill',
        'PMingLiU',
        'PMingLiU-ExtB',
        'Poor Richard',
        'Poster',
        'PosterBodoni BT',
        'PRINCETOWN LET',
        'Pristina',
        'PTBarnum BT',
        'Pythagoras',
        'Raavi',
        'Rage Italic',
        'Ravie',
        'Ribbon131 Bd BT',
        'Rockwell',
        'Rockwell Condensed',
        'Rockwell Extra Bold',
        'Rod',
        'Roman',
        'Sakkal Majalla',
        'Santa Fe LET',
        'Savoye LET',
        'Sceptre',
        'Script',
        'Script MT Bold',
        'SCRIPTINA',
        'Serifa',
        'Serifa BT',
        'Serifa Th BT',
        'ShelleyVolante BT',
        'Sherwood',
        'Shonar Bangla',
        'Showcard Gothic',
        'Shruti',
        'Signboard',
        'SILKSCREEN',
        'SimHei',
        'Simplified Arabic',
        'Simplified Arabic Fixed',
        'SimSun',
        'SimSun-ExtB',
        'Sinhala Sangam MN',
        'Sketch Rockwell',
        'Skia',
        'Small Fonts',
        'Snap ITC',
        'Snell Roundhand',
        'Socket',
        'Souvenir Lt BT',
        'Staccato222 BT',
        'Steamer',
        'Stencil',
        'Storybook',
        'Styllo',
        'Subway',
        'Swis721 BlkEx BT',
        'Swiss911 XCm BT',
        'Sylfaen',
        'Synchro LET',
        'System',
        'Tamil Sangam MN',
        'Technical',
        'Teletype',
        'Telugu Sangam MN',
        'Tempus Sans ITC',
        'Terminal',
        'Thonburi',
        'Traditional Arabic',
        'Trajan',
        'TRAJAN PRO',
        'Tristan',
        'Tubular',
        'Tunga',
        'Tw Cen MT',
        'Tw Cen MT Condensed',
        'Tw Cen MT Condensed Extra Bold',
        'TypoUpright BT',
        'Unicorn',
        'Univers',
        'Univers CE 55 Medium',
        'Univers Condensed',
        'Utsaah',
        'Vagabond',
        'Vani',
        'Vijaya',
        'Viner Hand ITC',
        'VisualUI',
        'Vivaldi',
        'Vladimir Script',
        'Vrinda',
        'Westminster',
        'WHITNEY',
        'Wide Latin',
        'ZapfEllipt BT',
        'ZapfHumnst BT',
        'ZapfHumnst Dm BT',
        'Zapfino',
        'Zurich BlkEx BT',
        'Zurich Ex BT',
        'ZWAdobeF',
    ]; */
    // we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var TEST_STRING = 'mmmmmmmmmmlli';
    // we test using 72px font size, we may use any size. I guess larger the better.
    var TEST_SIZE = '72px';
    var getCheckFontFunction = /* @__PURE__ */ memo(function (ctx) {
        var createElement = getElemCreateFunction(ctx);
        var canvas = createElement('canvas');
        var canvasCtxGetter = getPath(canvas, 'getContext');
        if (!canvasCtxGetter) {
            return null;
        }
        try {
            var canvasCtx_1 = bind(canvasCtxGetter, canvas)('2d');
            canvasCtx_1.font = TEST_SIZE + " " + TEST_STRING;
            var defLength_1 = canvasCtx_1.measureText(TEST_STRING).width;
            return function (font) {
                canvasCtx_1.font = TEST_SIZE + " " + font;
                return canvasCtx_1.measureText(TEST_STRING).width === defLength_1;
            };
        }
        catch (e) {
            return null;
        }
    });
    var checkAvailableFonts = function (ctx) {
        var checkFont = getCheckFontFunction(ctx);
        if (!checkFont) {
            return [];
        }
        try {
            var available = [];
            for (var i = 0; i < fontList.length; i += 1) {
                var fontName = fontList[i];
                var fontResult = checkFont(fontName);
                available.push(fontResult);
            }
            return available;
        }
        catch (e) {
            return [];
        }
    };

    var nativeRepeat = /* @__PURE__ */ toNativeOrFalse(String.prototype.repeat, 'repeat');
    var repeat = nativeRepeat
        ? function (text, times) { return nativeRepeat.call(text, times); }
        : repeatPoly;

    // MurmurHash3 related functions
    var DEFAULT_HASH_SEED = 210;
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    /* eslint-disable no-bitwise */
    /* eslint-disable no-param-reassign */
    function x64Multiply(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];
        o[3] += m[3] * n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;
        o[2] += m[2] * n[3];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[2] += m[3] * n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[1] += m[1] * n[3];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[1] += m[2] * n[2];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[1] += m[3] * n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
        o[0] &= 0xffff;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    }
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    function x64Add(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];
        o[3] += m[3] + n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;
        o[2] += m[2] + n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;
        o[1] += m[1] + n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;
        o[0] += m[0] + n[0];
        o[0] &= 0xffff;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    function x64Rotl(m, n) {
        n %= 64;
        if (n === 32) {
            return [m[1], m[0]];
        }
        if (n < 32) {
            return [
                (m[0] << n) | (m[1] >>> (32 - n)),
                (m[1] << n) | (m[0] >>> (32 - n)),
            ];
        }
        n -= 32;
        return [
            (m[1] << n) | (m[0] >>> (32 - n)),
            (m[0] << n) | (m[1] >>> (32 - n)),
        ];
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    function x64LeftShift(m, n) {
        n %= 64;
        if (n === 0) {
            return m;
        }
        if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
        }
        return [m[1] << (n - 32), 0];
    }
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    function x64Xor(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]];
    }
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    function x64Fmix(h) {
        h = x64Xor(h, [0, h[0] >>> 1]);
        h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
        h = x64Xor(h, [0, h[0] >>> 1]);
        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
        h = x64Xor(h, [0, h[0] >>> 1]);
        return h;
    }
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    var hashString16BytesSegment = function (stringToHashIn, sum, i) {
        var k1 = [
            (stringToHashIn.charCodeAt(i + 4) & 0xff) |
                ((stringToHashIn.charCodeAt(i + 5) & 0xff) << 8) |
                ((stringToHashIn.charCodeAt(i + 6) & 0xff) << 16) |
                ((stringToHashIn.charCodeAt(i + 7) & 0xff) << 24),
            (stringToHashIn.charCodeAt(i) & 0xff) |
                ((stringToHashIn.charCodeAt(i + 1) & 0xff) << 8) |
                ((stringToHashIn.charCodeAt(i + 2) & 0xff) << 16) |
                ((stringToHashIn.charCodeAt(i + 3) & 0xff) << 24),
        ];
        var k2 = [
            (stringToHashIn.charCodeAt(i + 12) & 0xff) |
                ((stringToHashIn.charCodeAt(i + 13) & 0xff) << 8) |
                ((stringToHashIn.charCodeAt(i + 14) & 0xff) << 16) |
                ((stringToHashIn.charCodeAt(i + 15) & 0xff) << 24),
            (stringToHashIn.charCodeAt(i + 8) & 0xff) |
                ((stringToHashIn.charCodeAt(i + 9) & 0xff) << 8) |
                ((stringToHashIn.charCodeAt(i + 10) & 0xff) << 16) |
                ((stringToHashIn.charCodeAt(i + 11) & 0xff) << 24),
        ];
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        sum.h1 = x64Xor(sum.h1, k1);
        sum.h1 = x64Rotl(sum.h1, 27);
        sum.h1 = x64Add(sum.h1, sum.h2);
        sum.h1 = x64Add(x64Multiply(sum.h1, [0, 5]), [0, 0x52dce729]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        sum.h2 = x64Xor(sum.h2, k2);
        sum.h2 = x64Rotl(sum.h2, 31);
        sum.h2 = x64Add(sum.h2, sum.h1);
        sum.h2 = x64Add(x64Multiply(sum.h2, [0, 5]), [0, 0x38495ab5]);
    };
    var hashStringTail = function (stringToHashIn, sum) {
        var remainder = stringToHashIn.length % 16;
        var tailStart = stringToHashIn.length - remainder;
        var k1 = [0, 0];
        var k2 = [0, 0];
        /* eslint-disable default-case */
        /* eslint-disable no-fallthrough */
        switch (remainder) {
            case 15:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 14)], 48));
            case 14:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 13)], 40));
            case 13:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 12)], 32));
            case 12:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 11)], 24));
            case 11:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 10)], 16));
            case 10:
                k2 = x64Xor(k2, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 9)], 8));
            case 9:
                k2 = x64Xor(k2, [0, stringToHashIn.charCodeAt(tailStart + 8)]);
                k2 = x64Multiply(k2, c2);
                k2 = x64Rotl(k2, 33);
                k2 = x64Multiply(k2, c1);
                sum.h2 = x64Xor(sum.h2, k2);
            case 8:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 7)], 56));
            case 7:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 6)], 48));
            case 6:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 5)], 40));
            case 5:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 4)], 32));
            case 4:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 3)], 24));
            case 3:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 2)], 16));
            case 2:
                k1 = x64Xor(k1, x64LeftShift([0, stringToHashIn.charCodeAt(tailStart + 1)], 8));
            case 1:
                k1 = x64Xor(k1, [0, stringToHashIn.charCodeAt(tailStart)]);
                k1 = x64Multiply(k1, c1);
                k1 = x64Rotl(k1, 31);
                k1 = x64Multiply(k1, c2);
                sum.h1 = x64Xor(sum.h1, k1);
        }
        /* eslint-enable default-case */
        /* eslint-enable no-fallthrough */
        sum.h1 = x64Xor(sum.h1, [0, stringToHashIn.length]);
        sum.h2 = x64Xor(sum.h2, [0, stringToHashIn.length]);
        sum.h1 = x64Add(sum.h1, sum.h2);
        sum.h2 = x64Add(sum.h2, sum.h1);
        sum.h1 = x64Fmix(sum.h1);
        sum.h2 = x64Fmix(sum.h2);
        sum.h1 = x64Add(sum.h1, sum.h2);
        sum.h2 = x64Add(sum.h2, sum.h1);
    };
    var stringifyHashBuffers = function (sum) {
        return (("00000000" + (sum.h1[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (sum.h1[1] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (sum.h2[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (sum.h2[1] >>> 0).toString(16)).slice(-8));
    };
    function hash(stringToHash, defaultSeed) {
        if (defaultSeed === void 0) { defaultSeed = DEFAULT_HASH_SEED; }
        var stringToHashIn = stringToHash || '';
        var seed = defaultSeed || 0;
        var remainder = stringToHashIn.length % 16;
        var bytes = stringToHashIn.length - remainder;
        var resultingSum = {
            h1: [0, seed],
            h2: [0, seed],
        };
        for (var i = 0; i < bytes; i += 16) {
            hashString16BytesSegment(stringToHash, resultingSum, i);
        }
        hashStringTail(stringToHashIn, resultingSum);
        return stringifyHashBuffers(resultingSum);
    }

    var replaceRegex = /\/$/;
    var isFalseURL = function (ctx, opt, senderParams) {
        var urlParams = senderParams.urlParams;
        if (!urlParams) {
            return null;
        }
        var trueRef = (getPath(ctx, 'document.referrer') || '').replace(replaceRegex, '');
        var senderRef = (urlParams[WATCH_REFERER_PARAM] || '').replace(replaceRegex, '');
        var senderUrl = urlParams[WATCH_URL_PARAM];
        var trueUrl = getLocation(ctx);
        var isFalseUrlBool = trueUrl.href !== senderUrl;
        var isFalseRefBool = trueRef !== senderRef;
        var result = 0;
        if (isFalseUrlBool && isFalseRefBool) {
            result = 3;
        }
        else if (isFalseRefBool) {
            result = 1;
        }
        else if (isFalseUrlBool) {
            result = 2;
        }
        return result;
    };

    var timeZone = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(TimeOne, cont(getTimezone)));
    var timeStamp = /* @__PURE__ */ pipe(TimeOne, cont(getTimestamp));
    var timeSeconds = /* @__PURE__ */ pipe(TimeOne, cont(getSec));
    var timeNavigationStart = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(TimeOne, cont(getNs)));

    var CONTENTFUL_PAINT = 'first-contentful-paint';
    var getTime = function (ctx) {
        var ns = timeNavigationStart(ctx);
        var getEntriesByType = getPath(ctx, 'performance.getEntriesByType');
        if (isFunction(getEntriesByType)) {
            var data = /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ ctxPath('name'), /* @__PURE__ */ equal(CONTENTFUL_PAINT)), getEntriesByType.call(ctx.performance, 'paint'));
            if (data.length) {
                return data[0].startTime;
            }
            return undefined;
        }
        var chromeLoadTimes = getPath(ctx, 'chrome.loadTimes');
        if (isFunction(chromeLoadTimes)) {
            var time = chromeLoadTimes.call(ctx['chrome']);
            var fp = getPath(time, 'firstPaintTime');
            if (ns && fp) {
                return fp * 1000 - ns;
            }
        }
        var ms = getPath(ctx, 'performance.timing.msFirstPaint');
        if (ms) {
            return ms - ns;
        }
        return undefined;
    };
    var getCounterState = /* @__PURE__ */ memo(constructObject);
    var firstPaint = function (ctx, counterOptions, senderParams) {
        if (senderParams.urlParams && senderParams.urlParams[DEFER_KEY]) {
            return null;
        }
        var key = getCounterKey(counterOptions);
        var counterInfo = getCounterState(ctx);
        if (counterInfo[key]) {
            return null;
        }
        var time = getTime(ctx);
        if (time) {
            counterInfo[key] = time;
            return Math.round(time);
        }
        return null;
    };

    var QUOTA_LIMIT = 120000000;
    var getState$1 = /* @__PURE__ */ memo(constructObject);
    var isPrivate = /* @__PURE__ */ memo(function (ctx) {
        var webkitRequestFileSystem = getPath(ctx, 'webkitRequestFileSystem');
        if (isFunction(webkitRequestFileSystem) && !isAndroid(ctx)) {
            return new PolyPromise(bind(webkitRequestFileSystem, ctx, 0, 0))
                .then(function () {
                var storage = getPath(ctx, 'navigator.storage') || {};
                // estimate есть, если isSecureContext: file, localhost, https, иначе - undefined
                // TODO: добавить тест по https, когда на ферме появится chrome >= 74
                if (!storage.estimate) {
                    return {};
                }
                return storage.estimate();
            })
                .then(function (_a) {
                var quota = _a.quota;
                if (quota && quota < QUOTA_LIMIT) {
                    return true;
                }
                return false;
            })["catch"](/* @__PURE__ */ bindArg(true, firstArg));
        }
        // FF
        if (isFF(ctx)) {
            var serviceWorker = getPath(ctx, 'navigator.serviceWorker');
            return PolyPromise.resolve(isUndefined(serviceWorker));
        }
        // Safari
        var openDatabase = getPath(ctx, 'openDatabase');
        if (isSafari(ctx) && isFunction(openDatabase)) {
            var result = false;
            try {
                openDatabase(null, null, null, null);
            }
            catch (e) {
                result = true;
            }
            return PolyPromise.resolve(result);
        }
        // IE10+ & Edge
        return PolyPromise.resolve(!getPath(ctx, 'indexedDB') &&
            (getPath(ctx, 'PointerEvent') || getPath(ctx, 'MSPointerEvent')));
    });
    var isPrivateMode = function (ctx) {
        if (isAndroidWebView(ctx)) {
            return null;
        }
        var state = getState$1(ctx);
        var pri = state.pri;
        if (isUndefined(pri)) {
            state.pri = null;
            isPrivate(ctx).then(function (val) {
                state.pri = val;
            });
        }
        return pri ? 1 : null;
    };

    var URL_REGEXP = /(\?|&)turbo_uid=([\w\d]+)($|&)/;
    var COOKIE_NAME = 'turbo_uid';
    var readTurboUidCooke = function (cookieInfo) {
        return cookieInfo.getVal(COOKIE_NAME);
    };
    var getTurboUid = /* @__PURE__ */ memo(function (ctx, opt) {
        var cookieInfo = globalCookieStorage(ctx);
        var locationSource = getLocation(ctx).search.match(URL_REGEXP);
        if (locationSource && locationSource.length >= 2) {
            var locationTurboUid = locationSource[2];
            if (!opt.noCookie) {
                cookieInfo.setVal(COOKIE_NAME, locationTurboUid);
            }
            return locationTurboUid;
        }
        var cookieTurboUid = readTurboUidCooke(cookieInfo);
        if (cookieTurboUid) {
            return cookieTurboUid;
        }
        return '';
    });

    var getBroUid = /* @__PURE__ */ memo(function (ctx) {
        if (isFunction(getPath(ctx, 'yandex.getSiteUid'))) {
            return ctx['yandex']['getSiteUid']();
        }
        return null;
    });

    var PERF_DIFS$1 = [
        // 0 DNSTiming
        ['domainLookupEnd', 'domainLookupStart'],
        // 1 ConnectTiming
        ['connectEnd', 'connectStart'],
        // 2 ResponseStartTiming
        ['responseStart', 'requestStart'],
        // 3 ResponseEndTiming
        ['responseEnd', 'responseStart'],
        // 4 FetchTiming
        ['fetchStart', 'navigationStart'],
        // 5 RedirectTiming
        ['redirectEnd', 'redirectStart'],
        // 6 RedirectCount
        [
            function (performance, timing) {
                return getPath(timing, 'redirectCount') ||
                    getPath(performance, 'navigation.redirectCount');
            },
        ],
        // 7 DOMInteractiveTiming
        ['domInteractive', 'domLoading'],
        // 8 DOMContentLoadedTiming
        ['domContentLoadedEventEnd', 'domContentLoadedEventStart'],
        // 9 DOMCompleteTiming
        ['domComplete', 'navigationStart'],
        // 10 LoadEventStartTiming
        ['loadEventStart', 'navigationStart'],
        // 11 LoadEventEndTiming
        ['loadEventEnd', 'loadEventStart'],
        // 12 NSToDOMContentLoadedTiming
        ['domContentLoadedEventStart', 'navigationStart'],
    ];
    var getPerformanceState$1 = /* @__PURE__ */ memo(constructArray);
    // TODO: оторвать тест "Page Load Time" когда полностью перейдем на новое API для performanceTimings
    var performanceTiming$1 = function (ctx, counterOptions, senderParams) {
        var _a = senderParams.urlParams, urlParams = _a === void 0 ? {} : _a;
        if (urlParams[DEFER_KEY]) {
            return null;
        }
        var perf = getPerformance(ctx);
        var key = getCounterKey(counterOptions);
        if (!perf) {
            return null;
        }
        var timing = getPath(perf, 'timing');
        if (!timing) {
            return null;
        }
        var newPerf = getPerformanceDiff(perf, timing, PERF_DIFS$1);
        var lastPerf = getPerformanceState$1(key);
        var diff = getdiff(lastPerf, newPerf);
        return diff && /* @__PURE__ */ arrayJoin(',', diff);
    };

    var LS_ID_KEY = 'lsid';
    var REQUEST_NUMBER_KEY = 'reqNum';

    var _a$4, _b;
    var COUNTER_NO = 'counterNum';
    var getCounterNumber = /* @__PURE__ */ memo(function (ctx) {
        var name = COUNTER_NO;
        var storage = getGlobalStorage(ctx);
        var privCn = storage.getVal(name, 0);
        var newCn = privCn + 1;
        storage.setVal(name, newCn);
        return newCn;
    }, /* @__PURE__ */ pipe(secondArg, getCounterKey));
    var BRINFO_FLAG_GETTERS = (_a$4 = {},
        _a$4[BUILD_FLAGS_BR_KEY] = /* @__PURE__ */ bindArg(argOptions.version, firstArg),
        _a$4[NET_TYPE_BR_KEY] = netType,
        _a$4[FIRST_PAINT_BR_KEY] = firstPaint,
        _a$4[FALSE_URL_BR_KEY] = isFalseURL,
        _a$4[DOCUMENT_ENCODING_BR_KEY] = getDocumentEncoding,
        _a$4[BROWSER_LANGUAGE_BR_KEY] = getNavigatorLanguage,
        _a$4[NOINDEX_BR_KEY] = function (ctx, options, senderParams) {
            var noIndex = senderParams.noIndex, urlParams = senderParams.urlParams;
            if (urlParams && (isYandexDomain(ctx) || options.ut || noIndex)) {
                urlParams[NOINDEX_BR_KEY] = 'noindex';
            }
            return null;
        },
        _a$4[BUILD_VERSION_BR_KEY] = /* @__PURE__ */ bindArg(config.buildVersion, firstArg),
        _a$4[COUNTER_NUMBER_BR_KEY] = getCounterNumber,
        _a$4[IS_DESKTOP_BR_KEY] = getDesktopFlag,
        _a$4[LS_ID_BR_KEY] = /* @__PURE__ */ memo(function (ctx, options) {
            var ls = counterLocalStorage(ctx, options.id);
            var time = TimeOne(ctx);
            var lsId = ls.getVal(LS_ID_KEY);
            if (!+lsId) {
                var newLsId = getRandom(ctx, 0, time(getMs));
                ls.setVal(LS_ID_KEY, newLsId);
                return newLsId;
            }
            return lsId;
        }, secondArg),
        _a$4[HID_BR_KEY] = getHid,
        _a$4[TIMEZONE_BR_KEY] = timeZone,
        _a$4[TIMESTAMP_BR_KEY] = timeStamp,
        _a$4[SECONDS_BR_KEY] = timeSeconds,
        _a$4[COOKIES_ENABLED_BR_KEY] = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('navigator.cookieEnabled'), toOneOrNull),
        _a$4[RANDOM_NUMBER_BR_KEY] = /* @__PURE__ */ pipe(firstArg, getRandom),
        _a$4[REQUEST_NUMBER_BR_KEY] = function (ctx, options, senderParams) {
            var urlParams = senderParams.urlParams;
            if (!urlParams || urlParams[DEFER_KEY]) {
                return null;
            }
            var ls = counterLocalStorage(ctx, options.id);
            var lsKey = REQUEST_NUMBER_KEY;
            var reqNum = ls.getVal(lsKey, 0) || 0;
            var nextReq = reqNum + 1;
            ls.setVal(lsKey, nextReq);
            if (ls.getVal(lsKey) === nextReq) {
                return nextReq;
            }
            ls.delVal(lsKey);
            if (reqNum > 1) {
                return null;
            }
            return null;
        },
        _a$4[UID_BR_KEY] = getUidFlag,
        _a$4[IS_TURBO_PAGE_BR_KEY] = /* @__PURE__ */ pipe(secondArg, isTurboPage, toOneOrNull),
        _a$4[TURBO_PAGE_ID_BR_KEY] = /* @__PURE__ */ pipe(secondArg, getTurboPageId),
        _a$4[VIEWPORT_SIZE_BR_KEY] = function (ctx) {
            var _a = getViewportSize(ctx), width = _a[0], height = _a[1];
            return width + "x" + height;
        },
        _a$4[SCREEN_SIZE_BR_KEY] = function (ctx) {
            var screen = getPath(ctx, 'screen');
            if (screen) {
                var width = getPath(screen, 'width');
                var height = getPath(screen, 'height');
                var depth = getPath(screen, 'colorDepth') || getPath(screen, 'pixelDepth');
                return /* @__PURE__ */ arrayJoin('x', [width, height, depth]);
            }
            return null;
        },
        _a$4[DEVICE_PIXEL_RATIO_BR_KEY] = /* @__PURE__ */ ctxPath('devicePixelRatio'),
        _a$4[IS_IFRAME_BR_KEY] = /* @__PURE__ */ pipe(isIframe, toOneOrNull),
        _a$4[IS_JAVA_ENABLED] = /* @__PURE__ */ pipe(getJavaEnabled, toOneOrNull),
        _a$4[IS_SAME_ORIGIN_AS_TOP_WINDOW] = function (ctx) {
            if (isIframe(ctx)) {
                return isTopWindowAccessible(ctx) ? '1' : null;
            }
            return null;
        },
        _a$4);
    {
        BRINFO_FLAG_GETTERS[PRIVATE_BR_KEY] = isPrivateMode;
    }
    {
        mix(BRINFO_FLAG_GETTERS, (_b = {},
            _b[IS_SELENIUM_BR_KEY] = /* @__PURE__ */ pipe(isSelenium, toOneOrNull),
            _b[IS_HEADLESS_BR_KEY] = /* @__PURE__ */ pipe(isHeadLess, toOneOrNull),
            _b[IS_FACEBOOK_INSTANT_ARTICLES] = /* @__PURE__ */ pipe(isFacebookInstantArticles, toOneOrNull),
            _b[IS_CHROME_PDF] = /* @__PURE__ */ pipe(isChromePdf, toOneOrNull),
            _b[NOTIFICATION_PERMISSION] = /* @__PURE__ */ memo(function (ctx) {
                var allowed = isNotificationAllowed(ctx);
                if (!isNull(allowed)) {
                    return allowed ? 2 : 1;
                }
                return null;
            }),
            _b[IS_EU_BR_KEY] = getGSFlag(IS_EU_CONFIG_KEY),
            _b[NAVIGATION_START] = timeNavigationStart,
            _b[NAVIGATOR_PLATFORM] = function (ctx) {
                if (!getRandom(ctx, 0, 100)) {
                    return encodeBase64(encodeUtf8(trimText(getPlatform(ctx), 100)));
                }
                return null;
            },
            _b[IS_RECOVERED_ID_KEY] = /* @__PURE__ */ pipe(isRecovered, toOneOrNull),
            _b));
    }
    {
        BRINFO_FLAG_GETTERS[PERFOMANCE_TIMING_BR_KEY] = performanceTiming$1;
    }
    {
        BRINFO_FLAG_GETTERS[PERFORMANCE_TIMING_NEW_API_KEY] = performanceTiming;
    }
    {
        BRINFO_FLAG_GETTERS[BRO_UID_BR_KEY] = getBroUid;
    }
    // METR-44351 фитчи не могут быть включенны одновеременно так как как используют один и тот же флаг
    {
        BRINFO_FLAG_GETTERS[TURBO_UID] = getTurboUid;
    }
    {
        // TODO если в сборке WEBVISOR2_FEATURE и WEBVISOR_FEATURE будет конфликт
        BRINFO_FLAG_GETTERS[WEBVISOR_VERSION_BR_KEY] = /* @__PURE__ */ bindArg(2, firstArg);
    }
    {
        BRINFO_FLAG_GETTERS[CONSOLE_OPEN_BR_KEY] = function (ctx) {
            return toZeroOrOne(getGlobalStorage(ctx).getVal(CONSOLE_TEST_KEY));
        };
    }
    var DEFAULT_BRINFO_FLAGS = cKeys(BRINFO_FLAG_GETTERS);
    // Тут начинаются  не дефолтные флаги
    {
        BRINFO_FLAG_GETTERS[WEBVISOR2_ENABLED_BR_KEY] = function (ctx, options) {
            return toOneOrNull(options.webvisor);
        };
    }

    var DEFAULT_FLAGS = DEFAULT_BRINFO_FLAGS.concat(DEFAULT_TELEMETRY_FLAGS);
    /**
     *
     * @param {Array<string>} [inputFlags]
     */
    var watchSyncFlags = function (inputFlags) {
        if (inputFlags === void 0) { inputFlags = DEFAULT_FLAGS; }
        return function (ctx, provider, opt) { return ({
            beforeRequest: function (senderParams, next) {
                var brInfo = senderParams.brInfo, urlParams = senderParams.urlParams;
                if (!brInfo || !urlParams) {
                    next();
                    return;
                }
                cForEach(function (flag) {
                    var getter = BRINFO_FLAG_GETTERS[flag];
                    var loggerPrefix = 'bi';
                    var storage = brInfo;
                    {
                        if (!getter) {
                            getter = TELEMETRY_FLAG_GETTERS[flag];
                            loggerPrefix = 'tel';
                            storage = addTelemetryToSenderParams(senderParams);
                        }
                    }
                    if (getter) {
                        var flagValue = /* @__PURE__ */ ctxErrorLogger(loggerPrefix + ":" + flag, getter, null)(ctx, opt, senderParams);
                        storage.setOrNot(flag, flagValue);
                    }
                }, inputFlags);
                next();
            },
        }); };
    };

    var setTitle = function (ctx, brInfo, senderParams, counterOpts) {
        if ( counterOpts && !counterOpts.sendTitle) {
            return;
        }
        var title = ctx.document.title;
        if (senderParams.title) {
            (title = senderParams.title);
        }
        var fn = /* @__PURE__ */ getNativeFunction('getElementsByTagName', ctx.document);
        if (typeof title !== 'string' && fn) {
            var buf = fn('title');
            var innerHTML = getPath(buf, '0.innerHtml');
            if (innerHTML) {
                title = innerHTML;
            }
            else {
                title = '';
            }
        }
        title = title.slice(0, config.MAX_LEN_TITLE);
        brInfo.setVal(TITLE_BR_KEY, title);
    };
    var pageTitle = function (ctx, provider, opts) { return ({
        beforeRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo;
            if (!brInfo) {
                next();
                return;
            }
            setTitle(ctx, brInfo, senderParams, opts);
            next();
        },
    }); };

    var CC_VAR = 'cc';
    var CC_VAR_DEFAULT = '';
    var PU_VAR = 'pu';
    var PU_VAR_DEFAULT = '';
    var MIN_FIREFOX_VERSION = 68;
    var MIN_EDGE_VERSION = 79;
    var PU_IFRAME_MESSAGE_TYPE = 'gpu-get';
    var PU_AUTOGEN_TIMEOUT = 200;
    var PP_VAR = 'pp';
    var PP_VAR_DEFAULT = '';
    var ICE_SERVERS = 'iceServers';
    var PP_DATA_CHANNEL = 'y.metrika';
    var PP_RTC_FN = [
        'RTCPeerConnection',
        'mozRTCPeerConnection',
        'webkitRTCPeerConnection',
    ];
    var ON_ICE_CANDIDATE = 'onicecandidate';
    var ICE_CONNECTION_STATE = 'iceConnectionState';
    var ZZ_VAR = 'zzlc';
    var ZZ_VAR_DEFAULT = 'na';
    var ZZ_PROTOCOL = 'https:';
    var ZZ_BASE_URL = 'mc.yandex.';
    var ZZ_CROSS = 'L21ldHJpa2EvenpsYy5odG1s';
    var ZZ_ERROR_MESSAGE = 'zz.m';
    var ZZ_ERROR_TIMEOUT = 3000;

    var generate = function (ctx, counterOptions, globalStorage) {
        var host = getPath(ctx, 'location.host');
        var userId = getUidFlag(ctx, counterOptions);
        globalStorage.setVal(PU_VAR, "" + fnv32a(host) + userId);
    };
    var initPU = function (ctx, counterOptions, storage) {
        var _a;
        var connector = counterIframeConnector(ctx, counterOptions);
        if (!connector) {
            return;
        }
        connector.emitter.on(PU_IFRAME_MESSAGE_TYPE, function () {
            var _a;
            return (_a = {},
                _a[IFRAME_MESSAGE_TYPE] = PU_IFRAME_MESSAGE_TYPE,
                _a[PU_VAR] = storage.getVal(PU_VAR),
                _a);
        });
        var opener = getPath(ctx, 'opener');
        if (!opener) {
            generate(ctx, counterOptions, storage);
            return;
        }
        var messageTimer = setDefer(ctx, bindArgs([ctx, counterOptions, storage], generate), PU_AUTOGEN_TIMEOUT, 'pu.m');
        connector.sendToFrame(opener, (_a = {},
            _a[IFRAME_MESSAGE_TYPE] = PU_IFRAME_MESSAGE_TYPE,
            _a), function (e, data) {
            var pu = getPath(data, PU_VAR);
            if (pu) {
                clearDefer(ctx, messageTimer);
                storage.setVal(PU_VAR, pu);
            }
        });
    };

    var initPP = function (ctx, counterOptions, storage) {
        var _a, _b;
        var rtcFnName = /* @__PURE__ */ cFind(/* @__PURE__ */ bindArg(ctx, getPath), PP_RTC_FN);
        var Rtc = !isUndefined(rtcFnName) ? getPath(ctx, rtcFnName) : null;
        if (!getPath(ctx, 'navigator.onLine') || !Rtc) {
            return;
        }
        if (!(Rtc && getPath(Rtc, 'prototype.constructor.name'))) {
            return;
        }
        var pc = new Rtc((_a = {}, _a[ICE_SERVERS] = [], _a));
        var createChannel = getPath(pc, 'createDataChannel');
        if (!isFunction(createChannel)) {
            return;
        }
        bind(createChannel, pc, PP_DATA_CHANNEL)();
        var createOffer = getPath(pc, 'createOffer');
        if (!isFunction(createOffer) || createOffer.length) {
            return;
        }
        var out = bind(createOffer, pc)();
        var then = getPath(out, 'then');
        if (isFunction(then)) {
            bind(then, out, function (description) {
                var setLocalDescription = getPath(pc, 'setLocalDescription');
                if (!isFunction(setLocalDescription)) {
                    return;
                }
                bind(setLocalDescription, pc, description, noop, noop)();
            })();
        }
        mix(pc, (_b = {},
            _b[ON_ICE_CANDIDATE] = function () {
                var localInfo;
                var localIp;
                var close = getPath(pc, 'close');
                if (!isFunction(close)) {
                    return;
                }
                var closeFn = bind(close, pc);
                try {
                    localInfo = getPath(pc, 'localDescription.sdp');
                    localIp =
                        localInfo && localInfo.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
                }
                catch (e) {
                    pc[ON_ICE_CANDIDATE] = noop;
                    if (pc[ICE_CONNECTION_STATE] !== 'closed') {
                        closeFn();
                    }
                    return;
                }
                if (localIp && localIp.length > 0) {
                    var pp = fnv32a(localIp[1]);
                    storage.setVal(PP_VAR, pp);
                }
                pc[ON_ICE_CANDIDATE] = noop;
                closeFn();
            },
            _b));
    };

    var setAsync = /* @__PURE__ */ curry(function (key, val, rawStore) {
        var store = rawStore;
        var value = store[key];
        if (value) {
            value.rValue = val;
            value.resolved = true;
            if (value.resolveCallback) {
                value.resolveCallback(val);
            }
            else {
                value.promise = PolyPromise.resolve(val);
            }
        }
        else {
            store[key] = {
                promise: PolyPromise.resolve(val),
                rValue: val,
                resolved: true,
            };
        }
    });
    var getAsync = /* @__PURE__ */ curry(function (key, rawStore) {
        var store = rawStore;
        var value = store[key];
        if (!value) {
            var resolveCallback_1;
            var promise = new PolyPromise(function (resolve) {
                resolveCallback_1 = resolve;
            });
            store[key] = {
                resolveCallback: resolveCallback_1,
                promise: promise,
                resolved: false,
            };
        }
        return store[key].promise;
    });
    var AsyncMapFn = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(constructObject, cont));

    /* eslint-disable camelcase */
    var setSettings = function (ctx, counterOptions, rawSettings) {
        var counterKey = getCounterKey(counterOptions);
        var time = Time(ctx);
        var settings = mix({
            firstHitClientTime: time(getMs),
        }, rawSettings);
        {
            dispatchDebuggerEvent(ctx, {
                name: 'counterSettings',
                data: {
                    key: counterKey,
                    settings: settings,
                },
            });
        }
        var settingsStorage = AsyncMapFn();
        return settingsStorage(setAsync(counterKey, settings));
    };
    var getCounterSettings = function (ctx, counterOptions, callBack) {
        var counterKey = getCounterKey(counterOptions);
        var settingsStorage = AsyncMapFn();
        return settingsStorage(getAsync(counterKey)).then(callBack);
    };
    var COUNTER_SETTINGS_SETTINGS_KEY = 'settings';
    var COUNTER_SETTINGS_USER_DATA_KEY = 'userData';
    var COUNTER_SETTINGS_PARAMS_PCS = 'pcs';

    var initZZ = function (ctx, counterOptions, globalStorage, localStorage) {
        return getCounterSettings(ctx, counterOptions, function (counterSettings) {
            if (getPath(counterSettings, 'settings.pcs') !== '0' ||
                isBrokenFromCharCode(ctx)) {
                return;
            }
            var storedVal = localStorage.getVal(ZZ_VAR);
            if (!isUndefined(storedVal) &&
                !isNull(storedVal) &&
                storedVal !== ZZ_VAR_DEFAULT) {
                globalStorage.setVal(ZZ_VAR, storedVal);
                return;
            }
            var tld = 'ru';
            var isFF = isFFVersion(ctx, MIN_FIREFOX_VERSION);
            var isEdge = isEdgeMinVersion(ctx, MIN_EDGE_VERSION);
            if (isFF || isEdge) {
                tld = 'md';
            }
            var createElement = getElemCreateFunction(ctx);
            if (!createElement) {
                return;
            }
            var frame = createElement('iframe');
            mix(frame.style, {
                display: 'none',
                width: '1px',
                height: '1px',
                visibility: 'hidden',
            });
            frame.src = ZZ_PROTOCOL + "//" + ZZ_BASE_URL + tld + decodeBase64(ZZ_CROSS);
            var root = getRootElement(ctx);
            if (!root) {
                return;
            }
            root.appendChild(frame);
            var timeOut = 0;
            var eventHandler = cEvent(ctx);
            var unSubscribe = eventHandler.on(ctx, ['message'], errorLogger(ctx, ZZ_ERROR_MESSAGE, function (e) {
                var data = getPath(e, 'data');
                if (!data || !data.substr) {
                    return;
                }
                var info = data.substr(0, 8);
                if (info === '__ym__zz') {
                    removeNode(frame);
                    var newVal = data.substr(8);
                    localStorage.setVal(ZZ_VAR, newVal);
                    globalStorage.setVal(ZZ_VAR, newVal);
                    unSubscribe();
                    clearDefer(ctx, timeOut);
                }
            }));
            timeOut = setDefer(ctx, /* @__PURE__ */ pipe(unSubscribe, /* @__PURE__ */ bindArg(frame, removeNode)), ZZ_ERROR_TIMEOUT);
        });
    };

    var initCC = function (ctx, counterOptions, globalStorage, localStorage) {
        /* storedVal
            undef - это первый счетчик
            0 - один из-счетчиков пробует сходить в ручку
            "" - ждем пока провайдер начнет делать запрос
        */
        var storedVal = localStorage.getVal(CC_VAR);
        var startSync = bindArgs([CC_VAR, CC_VAR_DEFAULT], localStorage.setVal);
        if (storedVal) {
            var _a = storedVal.split('&'), val = _a[0], timeInMinStr = _a[1];
            var timeInMin = timeInMinStr && parseInt(timeInMinStr, 10);
            // Пробуем перезапрашивать раз в сутки
            if (timeInMin && TimeOne(ctx)(getMin) - timeInMin > 1440) {
                return startSync();
            }
            globalStorage.setVal(CC_VAR, val);
        }
        else if (!/* @__PURE__ */ equal(0)(storedVal)) {
            startSync();
        }
        return undefined;
    };

    // TODO возможно через memo стоит делать и остальные middleware
    var crossDomain = /* @__PURE__ */ memo(function (ctx, provider, opts) {
        var globalStorage = getGlobalStorage(ctx);
        var localStorage = globalLocalStorage(ctx);
        var fnQueue = [];
        var fnCommon = bindArgs([ctx, opts, globalStorage, localStorage], getVal);
        if (!isAndroidWebView(ctx) && !isSafariVersion(ctx, '14.1')) {
            fnQueue.push(bindArgs([initPP, PP_VAR, PP_VAR_DEFAULT], fnCommon));
        }
        var isInvalidBrowser = isITPDisabled(ctx) && !isFFVersion(ctx, MIN_FIREFOX_VERSION);
        if (!isInvalidBrowser) {
            fnQueue.push(bindArgs([initPU, PU_VAR, PU_VAR_DEFAULT], fnCommon));
        }
        // методы которые не работают на isOS, но работают в ff и edge
        if (!isInvalidBrowser && !localStorage.isBroken && !isITP(ctx)) {
            fnQueue.push(bindArgs([initZZ, ZZ_VAR, ZZ_VAR_DEFAULT], fnCommon));
            {
                fnQueue.push(bindArgs([initCC, CC_VAR, PU_VAR_DEFAULT], fnCommon));
            }
        }
        return fnQueue.length
            ? {
                afterRequest: function (senderParams, next) {
                    var isEuState = globalStorage.getVal(IS_EU_CONFIG_KEY);
                    if (isEuState === 0) {
                        try {
                            cForEach(/* @__PURE__ */ pipe(firstArg, call), fnQueue);
                        }
                        catch (e) { }
                    }
                    next();
                },
                beforeRequest: function (senderParams, next) {
                    var brInfo = senderParams.brInfo;
                    if (!brInfo) {
                        next();
                        return;
                    }
                    var isEuState = globalStorage.getVal(IS_EU_CONFIG_KEY);
                    if (isEuState === 0) {
                        try {
                            cForEach(cont(brInfo), fnQueue);
                        }
                        catch (e) { }
                    }
                    next();
                },
            }
            : {};
    }, function (_1, _2, opt) {
        return getCounterKey(opt);
    });

    var WEBVISOR_TYPE_KEY = 'wv-type';
    var WEBVISOR_PART_KEY = 'wv-part';
    var WEBVISOR_HID_KEY = 'wv-hit';
    var WEBVISOR_RANDOM_NUMBER_KEY = 'rn';
    var WEBVISOR_RESOURCE = 'webvisor';
    var WEBVISOR_TYPE_WEBVISOR_FIRST = '0';
    // Это на будущее, как включится протобаф
    var WEBVISOR_TYPE_WEBVISOR_PROTO = '3';
    var WEBVISOR_TYPE_WEBVISOR_AND_PUBLISHER_PROTO = '5';
    var WEBVISOR_TYPE_WEBVISOR_JSON = '2';
    var WEBVISOR_TYPE_WEBVISOR_AND_PUBLISHER_JSON = '4';
    var getVisorType = function (senderParams) {
        var isBinData = senderParams.isBinData, containsPublisherData = senderParams.containsPublisherData;
        var publisherType = WEBVISOR_TYPE_WEBVISOR_AND_PUBLISHER_JSON;
        var webvisorType = WEBVISOR_TYPE_WEBVISOR_JSON;
        if (isBinData) {
            publisherType = WEBVISOR_TYPE_WEBVISOR_AND_PUBLISHER_PROTO;
            webvisorType = WEBVISOR_TYPE_WEBVISOR_PROTO;
        }
        return containsPublisherData ? publisherType : webvisorType;
    };
    var useSenderWebvisor = function (ctx, transports, middlewareList) {
        var sender = useMiddlewareSender(ctx, transports, middlewareList);
        return function (rawSenderParams, counterOpt, part) {
            var _a;
            var senderParams = mix({
                brInfo: browserInfo(),
            }, rawSenderParams);
            if (!senderParams.urlParams) {
                // eslint-disable-next-line no-param-reassign
                senderParams.urlParams = {};
            }
            var urlParams = senderParams.urlParams;
            urlParams[REQUEST_MODE_KEY] = WATCH_WMODE_IMAGE;
            urlParams[WEBVISOR_PART_KEY] = "" + part;
            urlParams[WEBVISOR_HID_KEY] =
                urlParams[WEBVISOR_HID_KEY] || "" + getHid(ctx);
            urlParams[WATCH_URL_PARAM] =
                urlParams[WATCH_URL_PARAM] || ctx.location.href;
            urlParams[WEBVISOR_RANDOM_NUMBER_KEY] =
                urlParams[WEBVISOR_RANDOM_NUMBER_KEY] || "" + getRandom(ctx);
            if (!urlParams[WEBVISOR_TYPE_KEY]) {
                urlParams[WEBVISOR_TYPE_KEY] = getVisorType(senderParams);
            }
            var webvisorResource = WEBVISOR_RESOURCE + "/" + counterOpt.id;
            return sender(mix(senderParams, { urlParams: urlParams }), webvisorResource, {
                rHeaders: (_a = {},
                    _a[CONTENT_TYPE_HEADER] = 'text/plain',
                    _a),
                verb: 'POST',
            });
        };
    };

    var LS_PROTOCOL = 'protocol';
    var LS_HOST = 'host';
    var LS_RESOURCE = 'resource';
    var LS_COUNTER = 'counterId';
    var LS_COUNTER_TYPE = 'counterType';
    var LS_POST = 'postParams';
    var LS_PARAMS = 'params';
    var LS_BRINFO = 'browserInfo';
    var LS_TIME = 'time';
    var LS_HID = 'ghid';
    var RETRANSMIT_KEY = 'retryReqs';
    var RETRANSMIT_BR_KEY = 'rqnl';
    // 24 чaca в мс
    var RETRANSMIT_EXPIRE = 24 * 60 * 60 * 1000;
    var getRetransmitLsState = globalMemoWin(RETRANSMIT_KEY, function (ctx) {
        var ls = globalLocalStorage(ctx);
        return ls.getVal(RETRANSMIT_KEY, {});
    });

    // Ретрансмитить сам вэбвизор ну такое, слишком быстро забьётся локал сторейдж.
    // А вот только паблишеров досылать можно.
    var WEBVISOR_RETRANSMITABLE_TYPES = [WEBVISOR_TYPE_WEBVISOR_FIRST];
    // Тут вся логика на мутации запомненного объекта
    var saveRetransmitLsState = function (ctx) {
        var retransmitLsRequests = getRetransmitLsState(ctx);
        var ls = globalLocalStorage(ctx);
        ls.setVal(RETRANSMIT_KEY, retransmitLsRequests);
    };
    var getRetransmitRequestsRaw = function (ctx) {
        var time = TimeOne(ctx);
        var requests = getRetransmitLsState(ctx);
        var currentTime = time(getMs);
        var hid = getHid(ctx);
        return cReduce(function (result, _a) {
            var key = _a[0], req = _a[1];
            if (req &&
                // однажды на window отдаем ретрансмиты
                !req.d &&
                req[LS_HID] &&
                req[LS_HID] !== hid &&
                req[LS_TIME] &&
                /*
                    не нужно пытаться ретрасмитить запросы которые
                    еще выполнятся в соседнем iframe
                */
                currentTime - req[LS_TIME] > 500 &&
                req[LS_TIME] + RETRANSMIT_EXPIRE > currentTime &&
                req[LS_BRINFO][RETRANSMIT_BR_KEY] <= 2) {
                req.d = 1;
                result.push({
                    protocol: req[LS_PROTOCOL],
                    host: req[LS_HOST],
                    resource: req[LS_RESOURCE],
                    postParams: req[LS_POST],
                    params: req[LS_PARAMS],
                    browserInfo: req[LS_BRINFO],
                    ghid: req[LS_HID],
                    time: req[LS_TIME],
                    retransmitIndex: parseInt(key, 10),
                    counterId: req[LS_COUNTER],
                    counterType: req[LS_COUNTER_TYPE],
                });
            }
            return result;
        }, [], entries(requests));
    };
    var getRetransmitRequests = /* @__PURE__ */ ctxErrorLogger('g.r', getRetransmitRequestsRaw);
    var registerRequest = function (ctx, senderParams, opt) {
        var _a;
        var brInfo = senderParams.brInfo, urlParams = senderParams.urlParams;
        if (!brInfo || !urlParams) {
            return;
        }
        var isRetransmitableVisorRequest = includes(urlParams[WEBVISOR_TYPE_KEY], WEBVISOR_RETRANSMITABLE_TYPES);
        if (urlParams[WEBVISOR_TYPE_KEY] && !isRetransmitableVisorRequest) {
            return;
        }
        var timeOne = TimeOne(ctx);
        brInfo.setOrNot(RETRANSMIT_BR_KEY, 1);
        var brCtx = brInfo.ctx();
        var reqList = getRetransmitLsState(ctx);
        var retransmitIndex = 1;
        while (reqList[retransmitIndex]) {
            retransmitIndex += 1;
        }
        senderParams.retransmitIndex = retransmitIndex;
        reqList[retransmitIndex] = (_a = {},
            _a[LS_PROTOCOL] = config.cProtocol,
            _a[LS_HOST] = host,
            _a[LS_RESOURCE] = isRetransmitableVisorRequest
                ? WEBVISOR_RESOURCE
                : WATCH_RESOURCE,
            _a[LS_POST] = senderParams.rBody,
            _a[LS_TIME] = timeOne(getMs),
            _a[LS_COUNTER_TYPE] = opt.counterType,
            _a[LS_PARAMS] = urlParams,
            _a[LS_BRINFO] = brCtx,
            _a[LS_COUNTER] = opt.id,
            _a[LS_HID] = getHid(ctx),
            _a);
        saveRetransmitLsState(ctx);
    };
    var unRegisterRequest = function (ctx, senderParams) {
        var reqList = getRetransmitLsState(ctx);
        var brInfo = senderParams.brInfo;
        if (!brInfo || isNull(reqList)) {
            return;
        }
        var retransmitIndex = senderParams.retransmitIndex;
        delete reqList[retransmitIndex];
        saveRetransmitLsState(ctx);
    };
    /**
     *
     * @param {boolean} [isRetransmit]
     */
    var retransmit = function () {
        return function (ctx, provider, opt) { return ({
            beforeRequest: function (senderParams, next) {
                registerRequest(ctx, senderParams, opt);
                next();
            },
            afterRequest: function (senderParams, next) {
                unRegisterRequest(ctx, senderParams);
                next();
            },
        }); };
    };
    var retransmitProviderMiddleware = function () { return function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var _a = senderParams.brInfo, brInfo = _a === void 0 ? browserInfo() : _a, retransmitIndex = senderParams.retransmitIndex;
            var reqList = getRetransmitLsState(ctx);
            var prevRetry = brInfo.getVal(RETRANSMIT_BR_KEY, 0);
            var currentRetry = prevRetry + 1;
            brInfo.setVal(RETRANSMIT_BR_KEY, currentRetry);
            var localStorageBrInfo = getPath(reqList, /* @__PURE__ */ arrayJoin('.', [retransmitIndex, LS_BRINFO]));
            // не используем не валидные данные
            if (localStorageBrInfo) {
                localStorageBrInfo[RETRANSMIT_BR_KEY] = currentRetry;
                saveRetransmitLsState(ctx);
            }
            next();
        },
        afterRequest: function (senderParams, next) {
            unRegisterRequest(ctx, senderParams);
            next();
        },
    }); }; };

    var fakeProvider = [];

    var FAKE_HIT_TIME_KEY = 'time';
    var FAKE_HIT_BK_PARAMS_KEY = 'bkParams';
    var FAKE_HIT_PARAMS_KEY = 'params';
    var FAKE_HIT_CACHE_KEY = 'wasSynced';

    // 10% эксперимент
    var isExperimentEnabled = function (ctx, counterOptions) {
        var uid = getUidFlag(ctx, counterOptions);
        var twoDigets = (uid || '').slice(-1);
        var integer = parseInt(twoDigets, 10);
        return !ctx.isNaN(integer) && integer < 1;
    };

    var BUNDLE_PATH = 'https://yastatic.net/s3/gdpr/popup/v2/';
    var GDPR_LANG_LIST = [
        'ru',
        'en',
        'et',
        'fi',
        'lt',
        'lv',
        'pl',
        'fr',
        'no',
        'sr',
    ];
    var GDPR_LANG_DEFAULT = 'en';
    var getLang = function (ctx, forceLang) {
        var lang = forceLang || getLanguage(ctx);
        if (!includes(lang, GDPR_LANG_LIST)) {
            return GDPR_LANG_DEFAULT;
        }
        return lang;
    };
    var GDPRPopUp = function (ctx, trigger, dataLayerEmitter, counterOptions) {
        var lang = getLang(ctx, counterOptions.yaGDPRLang);
        var iframeController = counterIframeSender(ctx, counterOptions);
        if (!iframeController) {
            return PolyPromise.resolve({ value: GDPR_ENABLE_ALL, isSession: true });
        }
        var isInversedButtonExperiment = isExperimentEnabled(ctx, counterOptions);
        var popupFileName = isInversedButtonExperiment
            ? lang + "_inversed_buttons"
            : lang;
        trigger(isInversedButtonExperiment
            ? GDPR_POPUP_INVERSED_BUTTONS
            : GDPR_POPUP_DEFAULT_BUTTONS);
        var bundle = loadScript(ctx, {
            src: "" + BUNDLE_PATH + popupFileName + ".js",
        });
        return new PolyPromise(function (resolve, reject) {
            if (!bundle) {
                trigger(GDPR_OPEN_FAIL);
                reject(createKnownError('gdp.e'));
                return;
            }
            trigger(GDPR_OPEN_START);
            bundle.onerror = function () {
                var _a;
                trigger(GDPR_OPEN_FAIL);
                iframeController.sendToChildren((_a = {},
                    _a[IFRAME_MESSAGE_TYPE] = GDPR_OK_VIEW_DEFAULT,
                    _a));
                resolve(null);
            };
            bundle.onload = function () {
                trigger(GDPR_OPEN_SUCCESS);
                dataLayerEmitter.on(/* @__PURE__ */ arrayJoin(',', /* @__PURE__ */ __spreadArrays([
                    GDPR_OK_VIEW_DEFAULT,
                    GDPR_OK_VIEW_DETAILED
                ], GDPR_DETAILED_EVENTS)), function (_a) {
                    var _b;
                    var _c = IFRAME_MESSAGE_TYPE, type = _a[_c];
                    iframeController.sendToChildren((_b = {},
                        _b[IFRAME_MESSAGE_TYPE] = type,
                        _b));
                    resolve({ value: parseGdprValue(type) });
                });
            };
        });
    };

    var GDPR_IS_YANDEX_PARENT = 'isYandex';
    var GDPR_FRAME_SKIP_TIMEOUT = 2000;
    var initIframe = function (ctx, counterOptions) {
        var iframeController = counterIframeSender(ctx, counterOptions);
        if (iframeController) {
            iframeController.emitter.on(GDPR_IS_YANDEX_PARENT, function () {
                var _a;
                return (_a = {
                        type: GDPR_IS_YANDEX_PARENT
                    },
                    _a[GDPR_IS_YANDEX_PARENT] = isYandexOwnerDomain(ctx),
                    _a);
            });
        }
        return iframeController;
    };
    var GDPRIframe = function (ctx, trigger, counterOptions) {
        var iframeController = counterIframeSender(ctx, counterOptions);
        return new PolyPromise(function (resolve) {
            var _a;
            if (!iframeController) {
                resolve({ value: GDPR_DISABLE_ALL, isSession: true });
                return;
            }
            var emitter = iframeController.emitter;
            var resolveFrameSkip = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg(GDPR_FRAME_SKIP, trigger), /* @__PURE__ */ bindArg(null, resolve));
            var timeOut = setDefer(ctx, resolveFrameSkip, GDPR_FRAME_SKIP_TIMEOUT, 'gdp.f.t');
            iframeController
                .sendToParents((_a = {},
                _a[IFRAME_MESSAGE_TYPE] = GDPR_IS_YANDEX_PARENT,
                _a))
                .then(function (info) {
                if (info[GDPR_IS_YANDEX_PARENT]) {
                    trigger(GDPR_FRAME_YA);
                    emitter.on(/* @__PURE__ */ arrayJoin(',', /* @__PURE__ */ __spreadArrays([
                        GDPR_OK_VIEW_DEFAULT,
                        GDPR_OK_VIEW_DETAILED
                    ], GDPR_DETAILED_EVENTS)), function (_a) {
                        var _b = IFRAME_MESSAGE_TYPE, type = _a[1][_b];
                        resolve({ value: parseGdprValue(type) });
                    });
                }
                else {
                    trigger(GDPR_FRAME_NOYA);
                    resolve(null);
                }
            })["catch"](resolveFrameSkip)
                .then(bindArgs([ctx, timeOut], clearDefer));
        });
    };

    var COUNTERS_GLOBAL_KEY = 'counters';
    var getCounterInstance = function (ctx, counterOptions) {
        var storage = getGlobalStorage(ctx);
        var dict = storage.getVal(COUNTERS_GLOBAL_KEY, {});
        var counterKey = getCounterKey(counterOptions);
        return dict[counterKey];
    };

    var _a$5;
    var DETAILED_PREFIX = 'ok-detailed';
    var STATUS_TO_PARAMS = (_a$5 = {},
        _a$5[GDPR_OK] = 'ok',
        _a$5[GDPR_OK_VIEW_DEFAULT] = 'ok-default',
        _a$5[GDPR_OK_VIEW_DETAILED] = DETAILED_PREFIX,
        _a$5[GDPR_OK_VIEW_DETAILED + "-0"] = DETAILED_PREFIX + "-all",
        _a$5[GDPR_OK_VIEW_DETAILED + "-1"] = DETAILED_PREFIX + "-tech",
        _a$5[GDPR_OK_VIEW_DETAILED + "-2"] = DETAILED_PREFIX + "-tech-analytics",
        _a$5[GDPR_OK_VIEW_DETAILED + "-3"] = DETAILED_PREFIX + "-tech-other",
        _a$5);
    var sendGDPRParams = function (ctx, counterOptions) {
        if (isYandexOwnerDomain(ctx)) {
            var dataLayer = getInnerDataLayer(ctx);
            var counterInstance = getCounterInstance(ctx, counterOptions);
            var paramsFn = counterInstance && counterInstance[METHOD_NAME_PARAMS];
            var params = /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(STATUS_TO_PARAMS, getPath), getGDPRStatusRaw(dataLayer));
            if (paramsFn && params.length) {
                paramsFn('gdpr', /* @__PURE__ */ cFilter(Boolean, params));
            }
        }
    };

    var GRDPR_BR_KEY = 'gdpr';
    var YANX_LOGIN_COOKIE = 'yandex_login';
    var GLOBAL_GDPR_KEY = 'f1';
    var TEST_COOKIE_NAME = 'yaGdprCheck';
    var MAX_SIZE = 1000000;
    var GDPR_EXPIRES = 525600;
    var MODULE_INFO = {
        size: 0,
        list: [],
    };
    var getGDPRStatus = /* @__PURE__ */ pipe(getGDPRStatusRaw, /* @__PURE__ */ ctxMap(/* @__PURE__ */ ctxIndexOf(GDPR_STATUS_LIST)), /* @__PURE__ */ ctxJoin(','));
    var isOkDataLayer = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxFilter(/* @__PURE__ */ ctxIncludes(GDPR_STATUS_LIST)), len, Boolean);
    // по возможности максимально избегаем чтение кук на каждый запрос
    var getGDPROnce = /* @__PURE__ */ memo(function (status, cookie) {
        var cookieRawState = cookie.getVal(YANX_GDPR_COOKIE);
        return includes(cookieRawState, GDPR_VALID_VALUES)
            ? "-" + cookieRawState
            : '';
    });
    var waitForGDPR = function (ctx, senderParams, opt, resolve) {
        var brInfo = senderParams.brInfo;
        if (opt.yaDisableGDPR || !brInfo) {
            resolve();
            return;
        }
        var dataLayer = getInnerDataLayer(ctx);
        var cookie = cookieStorage(ctx, '');
        var next = /* @__PURE__ */ pipe(function () {
            var status = getGDPRStatus(dataLayer);
            var gdprVal = "" + status + getGDPROnce(status, cookie);
            brInfo.setVal(GRDPR_BR_KEY, gdprVal);
            addTelemetryToSenderParams(senderParams, GRDPR_BR_KEY, gdprVal);
        }, resolve);
        if (opt.id === FAKE_HIT_COUNTER) {
            next();
            return;
        }
        var storage = getGlobalStorage(ctx);
        var inProgress = storage.getVal(GLOBAL_GDPR_KEY);
        if (inProgress) {
            inProgress(next);
            return;
        }
        var status = getGDPRStatus(dataLayer);
        var statusList = status
            ? /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(GDPR_STATUS_LIST, getPath), status.split(','))
            : [];
        if (isOkDataLayer(statusList)) {
            next();
            return;
        }
        var isYandexOwnerDomainInfo = isYandexOwnerDomain(ctx);
        var locationInfo = getLocation(ctx);
        var forceOn = isYandexOwnerDomainInfo &&
            (locationInfo.href.indexOf('yagdprcheck=1') !== -1 ||
                cookie.getVal(TEST_COOKIE_NAME));
        var cookieState = cookie.getVal(YANX_GDPR_COOKIE);
        if (cookie.getVal(YANX_LOGIN_COOKIE)) {
            statusList.push(GDPR_SKIP_LOGIN);
            cookie.setVal(YANX_GDPR_COOKIE, GDPR_ENABLE_ALL, GDPR_EXPIRES);
        }
        else if (!isYandexOwnerDomainInfo) {
            statusList.push(GDPR_SKIP_DOMAIN);
        }
        else if (includes(cookieState, GDPR_VALID_VALUES)) {
            if (cookieState === GDPR_DISABLE_ALL) {
                statusList.push(GDPR_COOKIE_FAIL);
            }
            else {
                statusList.push(GDPR_COOKIE_SUCCESS);
            }
        }
        else if (isSafariWebView(ctx) || isAndroidWebView(ctx)) {
            statusList.push(GDPR_SKIP_WV);
        }
        else if (isSearchRobot(ctx)) {
            statusList.push(GDPR_SEARCH_ROBOT);
        }
        var trigger = /* @__PURE__ */ bindArg(dataLayer, pushToDataLayer);
        if (isOkDataLayer(statusList)) {
            cForEach(trigger, statusList);
            next();
            return;
        }
        MODULE_INFO.list.push(next);
        storage.setVal(GLOBAL_GDPR_KEY, function (resolver, args) {
            var size = MODULE_INFO.size;
            if (args) {
                var newInfo = stringify$1(ctx, args) || '';
                size += newInfo.length;
            }
            MODULE_INFO.list.push(resolver);
            if (size <= MAX_SIZE) {
                MODULE_INFO.list.push(resolver);
            }
        });
        var fakeHit = fakeProvider[0];
        fakeHit(ctx)
            .then(/* @__PURE__ */ ctxPath(FAKE_HIT_PARAMS_KEY + ".eu"))
            .then(function (isEu) {
            if (isEu || forceOn) {
                cookie.setVal(YANX_GDPR_POPUP_COOKIE, GDPR_DISABLE_ALL);
                initIframe(ctx, opt);
                if (isIframe(ctx)) {
                    return GDPRIframe(ctx, trigger, opt);
                }
                var dataLayerEmitter = innerDataLayerObserver(ctx, dataLayer);
                if (dataLayerEmitter) {
                    var popup = GDPRPopUp(ctx, trigger, dataLayerEmitter, opt);
                    popup.then(bindArgs([ctx, opt], sendGDPRParams));
                    return popup;
                }
            }
            if (!isEu) {
                trigger(GDPR_EU_SKIP);
            }
            return PolyPromise.resolve({
                value: GDPR_ENABLE_ALL,
                isSession: true,
            });
        })
            .then(function (gdprOptions) {
            cookie.delVal(YANX_GDPR_POPUP_COOKIE);
            if (gdprOptions) {
                var value = gdprOptions.value, isSession = gdprOptions.isSession;
                if (includes(value, GDPR_VALID_VALUES)) {
                    cookie.setVal(YANX_GDPR_COOKIE, value, !isSession ? GDPR_EXPIRES : undefined);
                }
            }
            var tasksIter = iterForOf(MODULE_INFO.list, call);
            var task = executeIterator(ctx, tasksIter, 20);
            task(taskFork(errorLogger(ctx, 'gdr'), noop));
            storage.setVal(GLOBAL_GDPR_KEY, call);
        })["catch"](errorLogger(ctx, 'gdp.a'));
    };
    var gdpr = function (ctx, provider, opt) { return ({
        beforeRequest: function (senderParams, next) {
            waitForGDPR(ctx, senderParams, opt, next);
        },
    }); };

    var getParamsState = /* @__PURE__ */ memo(constructArray);
    var handleParams = function (ctx, counterOptions, cSenderParams) {
        var senderParams = cSenderParams;
        if (senderParams.params) {
            setTurboInfo(counterOptions, senderParams.params);
            if (!senderParams.rBody &&
                senderParams.brInfo &&
                senderParams.urlParams) {
                var paramsString = stringify$1(ctx, senderParams.params);
                var state = getParamsState(ctx);
                var isHit = senderParams.brInfo.getVal(PAGE_VIEW_BR_KEY);
                if (!paramsString || senderParams.urlParams[DEFER_KEY]) {
                    return;
                }
                {
                    dispatchDebuggerEvent(ctx, {
                        name: 'params',
                        data: {
                            val: senderParams.params,
                            counterKey: getCounterKey(counterOptions),
                        },
                    });
                }
                if (!isHit) {
                    senderParams.rBody = paramsString;
                    senderParams.noRedirect = true;
                }
                else if (encodeURIComponent(paramsString).length >
                    config.MAX_LEN_SITE_INFO) {
                    state.push([senderParams.brInfo, senderParams.params]);
                }
                else {
                    senderParams.urlParams[REQUEST_BODY_KEY] = paramsString;
                }
            }
        }
    };
    var paramsMiddleware = function (ctx, p, counterOptions) { return ({
        beforeRequest: function (cSenderParams, next) {
            handleParams(ctx, counterOptions, cSenderParams);
            next();
        },
        afterRequest: function (senderParams, next) {
            var state = getParamsState(ctx);
            var counterInstance = getCounterInstance(ctx, counterOptions);
            var paramsFn = counterInstance && counterInstance[METHOD_NAME_PARAMS];
            if (paramsFn) {
                var list = /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('0'), /* @__PURE__ */ equal(senderParams.brInfo)), state);
                cForEach(function (item) {
                    var params = item[1];
                    paramsFn(params);
                    var index = indexOfWin(ctx)(item, state);
                    state.splice(index, 1);
                }, list);
            }
            next();
        },
    }); };

    var userParamsMiddleware = function (ctx, p, counterOptions) { return ({
        afterRequest: function (senderParams, next) {
            var counterInstance = getCounterInstance(ctx, counterOptions);
            var userParamsFn = counterInstance && counterInstance[METHOD_NAME_USER_PARAMS];
            if (userParamsFn && senderParams.userParams) {
                userParamsFn(senderParams.userParams);
            }
            next();
        },
    }); };

    var _a$6, _b$1;
    var normalizeTld = (_a$6 = {},
        _a$6['am'] = 'com.am',
        _a$6['tr'] = 'com.tr',
        _a$6['ge'] = 'com.ge',
        _a$6['il'] = 'co.il',
        _a$6['рф'] = 'ru',
        _a$6['xn--p1ai'] = 'ru',
        _a$6['укр'] = 'ua',
        _a$6['xn--j1amh'] = 'ua',
        _a$6['бел'] = 'by',
        _a$6['xn--90ais'] = 'by',
        _a$6);
    var WHITE_COUNTERS = [
        '85822663:0',
        '21279832:0',
        '34273590:0',
        '64681882:0',
        '42639109:0',
        '23731303:0',
    ];
    var SYNC_GS_FLAG = 'startSync';
    var LS_KEY_SYNC_COOKIE = 'synced';
    var SYNC_COOKIE_TIME_DIFF = 5;
    var EXP_TIME_SYNC_COOKIE = 1440; // сутки в минутах
    var KINOPOISK_HOST_REGEXP = /^([^/]+\.)?kinopoisk\.ru$/;
    var partners = {
        'an.yandex.ru/mapuid/google/?partner-tag=yandex_llc': {
            counters: WHITE_COUNTERS,
        },
        'an.yandex.ru/mapuid/google/?partner-tag=yandexcom': {
            counters: WHITE_COUNTERS,
        },
        'an.yandex.ru/mapuid/google/?partner-tag=yandexru': {
            counters: WHITE_COUNTERS,
        },
        'mc.edadeal.ru': {
            regex: /^([^/]+\.)?edadeal\.ru$/,
            tld: 'ru',
        },
        'mc.yandexsport.ru': {
            regex: /^([^/]+\.)?yandexsport\.ru$/,
            tld: 'ru',
        },
        'mc.kinopoisk.ru': {
            regex: KINOPOISK_HOST_REGEXP,
            tld: 'ru',
        },
    };
    var langToDomain = (_b$1 = {},
        _b$1['ka'] = 'ge',
        _b$1['ro'] = 'md',
        _b$1['tg'] = 'tj',
        _b$1['tk'] = 'tm',
        _b$1['et'] = 'ee',
        _b$1['hy'] = 'com.am',
        _b$1['he'] = 'co.li',
        _b$1['ky'] = 'kg',
        _b$1['uk'] = 'ua',
        _b$1['be'] = 'by',
        _b$1['tr'] = 'com.tr',
        _b$1['kk'] = 'kz',
        _b$1);

    var getCookieState = /* @__PURE__ */ memo(constructArray);
    /**
     * По языку браузера определяем домен, на который нужно засинкать
     * @returns {String}
     */
    var getDomainByLang = function (ctx) {
        var lang = getLanguage(ctx);
        return langToDomain[lang] || BASE_TLD_SYNC_COOKIE;
    };
    var getNormalizedTld = function (ctx) {
        var tld = getTld(ctx);
        return normalizeTld[tld] || tld;
    };
    var getSyncTlds = /* @__PURE__ */ memo(function (counterKey) {
        var syncTlds = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxFilter(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ equal('ru'), notFn)), ctxReduce(function (rawColl, tld) {
            var coll = rawColl;
            coll[tld] = [BASE_DOMAIN + "." + tld];
            return coll;
        }, {}))(YANDEX_WHITE_LIST_TLD);
        cForEach(function (_a) {
            var domain = _a[0], info = _a[1];
            if (!info.counters || includes(counterKey, info.counters)) {
                syncTlds[domain] = [domain];
            }
        }, entries(partners));
        return syncTlds;
    });
    var findPartnerKey = /* @__PURE__ */ memo(function (ctx) {
        var host = getLocation(ctx).hostname;
        var partner = cReduce(function (result, _a) {
            var key = _a[0], obj = _a[1];
            if (!obj.regex || obj.regex.test(host)) {
                result.push(key);
            }
            return result;
        }, [], entries(partners));
        return partner;
    });
    var getDomainsToSync = curry2(function (syncTld, ctx) {
        var isYandexDomain = isSyncDomain(ctx);
        var langTld = getDomainByLang(ctx);
        var tlds = findPartnerKey(ctx) || [getNormalizedTld(ctx)];
        var time = TimeOne(ctx);
        var lsStore = globalLocalStorage(ctx);
        var synced = lsStore.getVal(LS_KEY_SYNC_COOKIE, {});
        var domainsToSync = isYandexDomain ? tlds.concat(langTld) : tlds;
        var lsKeys = domainsToSync;
        if (synced) {
            lsKeys = /* @__PURE__ */ cFilter(function (lsKey) {
                var lsTime = synced[lsKey] || 1;
                var isExpired = lsTime + EXP_TIME_SYNC_COOKIE < time(getMin);
                if (isExpired) {
                    delete synced[lsKey];
                }
                return isExpired;
            }, lsKeys);
        }
        lsStore.setVal(LS_KEY_SYNC_COOKIE, synced);
        return cReduce(function (prev, lsKey) {
            var domains = syncTld[lsKey] || [];
            cForEach(function (domain) {
                var result = {
                    domain: domain,
                    lsKey: lsKey,
                };
                if (stringIncludes(domain, '/')) {
                    result.hasPath = 1;
                }
                prev.push(result);
            }, domains);
            return prev;
        }, [], lsKeys);
    });
    /**
     * Для яндексовых доменов и украины последовательность такая:
     * 1) фейковый хит (если нужно)
     * 2) синк (если нужно)
     * 3) обычный хит
     *
     * Для остальных
     * 1) хит
     * 2) синк // отключили
     */
    var genSyncCookie = function (syncDomains, signature) {
        return function (ctx, _, opt) {
            var counterKey = getCounterKey(opt);
            var syncTld = getSyncTlds(counterKey);
            var getDomains = getDomainsToSync(syncTld);
            var isSyncCounter = includes(counterKey, WHITE_COUNTERS);
            return isITP(ctx) || isFF(ctx)
                ? {}
                : {
                    beforeRequest: function (senderParams, next) {
                        var brInfo = senderParams.brInfo;
                        var storage = getGlobalStorage(ctx);
                        var isAllowedDomain =  isSyncDomain(ctx) || isSyncCounter;
                        if (!isAllowedDomain ||
                            isIframe(ctx) ||
                            !(brInfo && brInfo.getVal(PAGE_VIEW_BR_KEY))) {
                            return next();
                        }
                        var domains = getDomains(ctx);
                        if (!domains.length) {
                            return next();
                        }
                        // нужно синхронизировать куки только одним счетчиком
                        if (storage.getVal(SYNC_GS_FLAG)) {
                            var state = getCookieState(ctx);
                            state.push(next);
                            return undefined;
                        }
                        storage.setVal(SYNC_GS_FLAG, true);
                        if (isSyncCounter) {
                            return syncDomains(ctx, domains).then(next, next);
                        }
                        {
                            var fakeHit = fakeProvider[0];
                            var cb = next;
                            if (!fakeHit) {
                                return next();
                            }
                            fakeHit(ctx)
                                .then(bindArgs([ctx, domains], syncDomains))
                                .then(cb, /* @__PURE__ */ pipe(asSideEffect(cb), errorLogger(ctx, signature)))["catch"](noop);
                        }
                        return undefined;
                    },
                };
        };
    };

    var syncDomains = function (ctx, domainList) {
        var time = TimeOne(ctx);
        var storage = getGlobalStorage(ctx);
        var lsStore = globalLocalStorage(ctx);
        var transport = getTransportList(ctx, COOKIE_SYNC_PROVIDER);
        var sender = useDefaultSender(ctx, transport);
        return cReduce(function (prev, domainInfo) {
            var syncPath = domainInfo.hasPath
                ? ''
                : '/sync_cookie_image_check';
            var requPromise = sender({ debugStack: ['sync.cook'] }, [config.cProtocol + "//" + domainInfo.domain + syncPath], { timeOut: 1500 });
            var timeToSave;
            var finallyFn = function () {
                var store = lsStore.getVal(LS_KEY_SYNC_COOKIE);
                storage.setVal(SYNC_GS_FLAG, false);
                if (store) {
                    store[domainInfo.lsKey] = timeToSave;
                    lsStore.setVal(LS_KEY_SYNC_COOKIE, store);
                }
                cForEach(call, getCookieState(ctx));
            };
            requPromise
                .then(function () {
                timeToSave = time(getMin);
                finallyFn();
            })["catch"](function () {
                timeToSave =
                    time(getMin) -
                        (EXP_TIME_SYNC_COOKIE - SYNC_COOKIE_TIME_DIFF);
                finallyFn();
            });
            var handle = /* @__PURE__ */ bindArg(requPromise, firstArg);
            return prev.then(handle);
        }, PolyPromise.resolve(''), domainList)["catch"](errorLogger(ctx, 'ctl'));
    };
    var syncCookie = genSyncCookie(syncDomains, 'sy.c');

    var optout = function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var isOptout = isOptoutEnabled(ctx);
            if (!isOptout) {
                next();
            }
        },
    }); };

    var AD_BLOCK_COOKIE = 'isad';
    var AD_BLOCK_ENABLED = '1';
    var AD_BLOCK_DISABLED = '2';
    var AD_BLOCK_COOKIE_TTL = 1200;
    var AD_BLOCK_GLOBAL_ENABLED_KEY = 'adBlockEnabled';

    var setAdBlock = function (ctx, brInfo) {
        var storage = getGlobalStorage(ctx);
        var adbVal = storage.getVal(AD_BLOCK_GLOBAL_ENABLED_KEY);
        if (adbVal) {
            brInfo.setVal(ADB_BR_KEY, adbVal);
        }
    };
    var setAdBlockInfo = function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo;
            if (brInfo) {
                setAdBlock(ctx, brInfo);
            }
            next();
        },
    }); };

    var FID_OBSERVING = 'fido';
    var FID_VALUE = 'fid';
    var FID_BR_KEY = FID_VALUE;

    var sended = false;
    var setFID = function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo;
            if (!brInfo) {
                return next();
            }
            var globalStorage = getGlobalStorage(ctx);
            var fidValue = globalStorage.getVal(FID_VALUE);
            if (!sended && fidValue) {
                {
                    addTelemetryToSenderParams(senderParams, FID_BR_KEY, fidValue);
                }
                sended = true;
            }
            return next();
        },
    }); };

    var PROTOCOL_REGEXP = /^[a-z][\w.+-]+:/i;
    var prepare = function (ctx, rawUrl) {
        var _a = getLocation(ctx), href = _a.href, host = _a.host;
        var index = -1;
        if (!isString(rawUrl) || isUndefined(rawUrl)) {
            return href;
        }
        var url = rawUrl.replace(trimRegexp, '');
        // Если у url есть протокол, то оставляем как есть
        // важно для целей в том числе
        if (url.search(PROTOCOL_REGEXP) !== -1) {
            return url;
        }
        var firstChar = url.charAt(0);
        if (firstChar === '?') {
            index = href.search(/\?/);
            if (index === -1) {
                return href + url;
            }
        }
        if (firstChar === '#') {
            index = href.search(/#/);
            if (index === -1) {
                return href + url;
            }
        }
        if (index !== -1) {
            return href.substr(0, index) + url;
        }
        if (firstChar === '/') {
            index = href.indexOf(host);
            if (index !== -1) {
                return href.substr(0, index + host.length) + url;
            }
        }
        else {
            var splitUrl = href.split('/');
            splitUrl[splitUrl.length - 1] = url;
            return /* @__PURE__ */ arrayJoin('/', splitUrl);
        }
        return '';
    };
    var counterExperimentsSent = {};
    var prepareUrlMiddleware = function (ctx, provider, options) { return ({
        beforeRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo, urlParams = senderParams.urlParams;
            if (!brInfo) {
                return next();
            }
            if (!urlParams) {
                return next();
            }
            if (!counterExperimentsSent[options.id] &&
                brInfo.getVal(PAGE_VIEW_BR_KEY) &&
                options.exp &&
                !urlParams[DEFER_KEY]) {
                // TODO: переработать параметры и разбить их на примере watchFlagsSync
                urlParams[EXPERIMENT_URL_PARAM] = options.exp;
                counterExperimentsSent[options.id] = true;
            }
            var referer = urlParams[WATCH_REFERER_PARAM];
            var url = urlParams[WATCH_URL_PARAM];
            if (referer && url !== referer) {
                urlParams[WATCH_REFERER_PARAM] = prepare(ctx, referer);
            }
            else {
                delete urlParams[WATCH_REFERER_PARAM];
            }
            urlParams[WATCH_URL_PARAM] = prepare(ctx, url).slice(0, config.MAX_LEN_URL);
            return next();
        },
    }); };

    var FIP_KEY = 'fip';
    var FINGERPRINT_BR_KEY = FIP_KEY;

    var setFingerPrint = function (ctx) { return ({
        beforeRequest: function (senderParams, next) {
            var brInfo = senderParams.brInfo;
            var ls = globalLocalStorage(ctx);
            var fpVal = ls.getVal(FIP_KEY);
            if (fpVal && brInfo) {
                brInfo.setVal(FINGERPRINT_BR_KEY, fpVal);
                {
                    addTelemetryToSenderParams(senderParams, FINGERPRINT_BR_KEY, toZeroOrOne(fpVal));
                }
            }
            next();
        },
    }); };

    var _a$7;
    // Использовать в случае, если запросы идут не в ручку watch
    // const defaultFlagsWithoutTelemetry = watchSyncFlags(DEFAULT_BRINFO_FLAGS)
    var commonMiddlewares = [
        prerender,
        counterFirstHit,
        /* @__PURE__ */ watchSyncFlags(),
        pageTitle,
    ];
    var WEBVISOR_FLAGS = [
        SECONDS_BR_KEY,
        VIEWPORT_SIZE_BR_KEY,
        BUILD_VERSION_BR_KEY,
        TIMEZONE_BR_KEY,
        TIMESTAMP_BR_KEY,
        UID_BR_KEY,
        BUILD_FLAGS_BR_KEY,
    ];
    {
        WEBVISOR_FLAGS.push(WEBVISOR2_ENABLED_BR_KEY);
    }
    var webvisorSyncFlags = /* @__PURE__ */ watchSyncFlags(WEBVISOR_FLAGS);
    {
        {
            commonMiddlewares.push(syncCookie);
        }
    }
    {
        commonMiddlewares.unshift(userParamsMiddleware);
    }
    {
        commonMiddlewares.unshift(paramsMiddleware);
    }
    {
        commonMiddlewares.push(setAdBlockInfo);
    }
    {
        commonMiddlewares.push(setFID);
    }
    {
        commonMiddlewares.push(crossDomain);
    }
    {
        commonMiddlewares.push(setFingerPrint);
    }
    /*
        Нужно стараться деражать retransmit последним в списке
        commonMiddlewares что бы он захватывал все выставленные до него
        флаги в browserInfo
    */
    {
        commonMiddlewares.push(retransmit());
    }
    var middlewareList = (_a$7 = {},
        _a$7[HIT_PROVIDER] = commonMiddlewares,
        _a$7[ERROR_LOGGER_PROVIDER] = [],
        _a$7);
    {
        middlewareList[AD_BLOCK_PROVIDER] = [];
    }
    {
        var fakeHitMiddleware = [/* @__PURE__ */ watchSyncFlags(), pageTitle];
        {
            fakeHitMiddleware.push(crossDomain);
        }
        middlewareList[FAKE_HIT_PROVIDER] = fakeHitMiddleware;
    }
    {
        middlewareList[LINK_CLICK_HIT_PROVIDER] = commonMiddlewares;
    }
    {
        middlewareList[PARAMS_PROVIDER] = exclude(commonMiddlewares, [pageTitle]);
    }
    {
        middlewareList[ARTIFICIAL_HIT_PROVIDER] = commonMiddlewares;
    }
    {
        middlewareList[GOAL_PROVIDER] = commonMiddlewares;
    }
    {
        middlewareList[EXPERIMENTS_PROVIDER] = commonMiddlewares;
    }
    {
        var retransmitMiddlewares = [counterFirstHit];
        retransmitMiddlewares.push(retransmitProviderMiddleware());
        middlewareList[RETRANSMIT_PROVIDER] = retransmitMiddlewares;
    }
    {
        var publisherMiddlewares = [];
        publisherMiddlewares.push(webvisorSyncFlags);
        {
            publisherMiddlewares.push(retransmit());
        }
        middlewareList[PUBLISHER_DATA_PROVIDER] = publisherMiddlewares;
    }
    {
        middlewareList[CACHE_PROVIDER] = [counterFirstHit];
    }
    {
        middlewareList[TRACK_HASH_PROVIDER] = commonMiddlewares;
    }
    {
        middlewareList[FORMVISOR_DATA_PROVIDER] = [webvisorSyncFlags];
    }
    {
        middlewareList[WEBVISOR2_PROVIDER] = [webvisorSyncFlags];
    }
    {
        var notBounceMiddlewares = [prerender, counterFirstHit, /* @__PURE__ */ watchSyncFlags()];
        {
            notBounceMiddlewares.push(setAdBlockInfo);
        }
        {
            notBounceMiddlewares.push(crossDomain);
        }
        {
            notBounceMiddlewares.push(setFID);
        }
        /*
            Нужно стараться деражать retransmit последним в списке
            notBounceMiddlewares что бы он захватывал все
            выставленные до него флаги в browserInfo
        */
        {
            notBounceMiddlewares.push(retransmit());
        }
        middlewareList[NOT_BOUNCE_HIT_PROVIDER] = notBounceMiddlewares;
    }
    {
        middlewareList[RESOURCES_TIMINGS_PROVIDER] = [
            /* @__PURE__ */ watchSyncFlags([
                HID_BR_KEY,
                UID_BR_KEY,
                BUILD_VERSION_BR_KEY,
                BUILD_FLAGS_BR_KEY,
            ]),
        ];
    }
    {
        middlewareList[CLICKMAP_PROVIDER] = [
            /* @__PURE__ */ watchSyncFlags([UID_BR_KEY, BUILD_VERSION_BR_KEY, BUILD_FLAGS_BR_KEY]),
            retransmit(),
        ];
    }
    {
        middlewareList[DEVICESYNC_PROVIDER] = [];
        middlewareList[USER_DATA_STORAGE_PROVIDER] = [];
        middlewareList[DEVICESYNC_SAVE_PROVIDER] = [
            /* @__PURE__ */ watchSyncFlags([
                BUILD_VERSION_BR_KEY,
                HID_BR_KEY,
                UID_BR_KEY,
                BUILD_FLAGS_BR_KEY,
                RANDOM_NUMBER_BR_KEY,
            ]),
        ];
    }
    {
        middlewareList[ITP_INTEGRATION_PROVIDER] = [];
    }
    // This should be always first
    commonMiddlewares.unshift(prepareUrlMiddleware);
    {
        middlewareList[PRERENDER_PROVIDER] = /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxIncludes([prerender, counterFirstHit]), notFn), commonMiddlewares);
    }
    var getMiddlewares = function (ctx, provider, opt) {
        var providerMiddlewareList;
        providerMiddlewareList = middlewareList[provider];
        if (!providerMiddlewareList) {
            providerMiddlewareList = commonMiddlewares;
        }
        var returnMiddlewares = providerMiddlewareList.slice();
        {
            returnMiddlewares.unshift(gdpr);
        }
        {
            returnMiddlewares.unshift(optout);
        }
        return /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(ctxBindArgs([ctx, provider, opt]), call), returnMiddlewares);
    };

    var useRetransmitSender = function (ctx, transports, middlewareList) {
        var visorSender = useSenderWebvisor(ctx, transports, middlewareList);
        var watchSender = useSenderWatch(ctx, transports, middlewareList);
        return function (senderParams, counterOpt, resource) {
            if (resource === WEBVISOR_RESOURCE) {
                return visorSender(senderParams, counterOpt, senderParams.urlParams[WEBVISOR_PART_KEY]);
            }
            return watchSender(senderParams, counterOpt);
        };
    };

    var useSenderCache = function (ctx, transports, middlewareList) {
        var sender = useDefaultSender(ctx, transports);
        return function (senderInfo) {
            var urls = ['https://mc.yandex.md/cc'];
            return combineMiddlewares(ctx, middlewareList, senderInfo, true).then(bindArgs([
                senderInfo,
                urls,
                {
                    wmode: true,
                    withCreds: false,
                },
            ], sender));
        };
    };

    var _a$8;
    var fallbackSender = bind(PolyPromise.reject, PolyPromise, createKnownError());
    var providerMap = (_a$8 = {},
        _a$8[HIT_PROVIDER] = useSenderWatch,
        _a$8[ERROR_LOGGER_PROVIDER] = /* @__PURE__ */ bindArg(fallbackSender, firstArg),
        _a$8);
    {
        providerMap[ARTIFICIAL_HIT_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[PUBLISHER_DATA_PROVIDER] = useSenderWebvisor;
    }
    {
        providerMap[FORMVISOR_DATA_PROVIDER] = useSenderWebvisor;
    }
    {
        providerMap[FAKE_HIT_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[NOT_BOUNCE_HIT_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[CACHE_PROVIDER] = useSenderCache;
    }
    {
        providerMap[PARAMS_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[NOT_BOUNCE_HIT_PROVIDER] = useSenderWatch;
    }
    {
        // В дефолтном сендере не работает фича optout (нет прохода по middleware),
        // потому что отправка возможно только после первого хита, а его не произойдет
        providerMap[COOKIE_SYNC_PROVIDER] = useDefaultSender;
    }
    {
        providerMap[GOAL_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[EXPERIMENTS_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[LINK_CLICK_HIT_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[RETRANSMIT_PROVIDER] = useRetransmitSender;
    }
    {
        providerMap[AD_BLOCK_PROVIDER] = useMiddlewareSender;
    }
    {
        providerMap[DEVICESYNC_PROVIDER] = useDefaultSender;
        providerMap[DEVICESYNC_SAVE_PROVIDER] = useSenderWatch;
        providerMap[USER_DATA_STORAGE_PROVIDER] = useDefaultSender;
    }
    {
        providerMap[ITP_INTEGRATION_PROVIDER] = useDefaultSender;
    }
    {
        providerMap[CLICKMAP_PROVIDER] = useSenderClickMap;
    }
    {
        providerMap[RESOURCES_TIMINGS_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[TRACK_HASH_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[WEBVISOR2_PROVIDER] = useSenderWebvisor;
    }
    {
        providerMap[PRERENDER_PROVIDER] = useSenderWatch;
    }
    {
        providerMap[MOBILE_UID_SYNC_PROVIDER] = useDefaultSender;
    }
    var getSender = /* @__PURE__ */ ctxErrorLogger('g.sen', function (ctx, provider, counterOpt) {
        var transports = getTransportList(ctx, provider);
        var middleware = getMiddlewares(ctx, provider, counterOpt);
        var sender = providerMap[provider];
        var senderFn = sender
            ? sender(ctx, transports, middleware)
            : useSenderWatch(ctx, transports, middleware);
        return function c() {
            // eslint-disable-next-line prefer-rest-params
            var _a = argsToArray(arguments), rawSenderOpt = _a[0], rest = _a.slice(1);
            var senderOpt = mix(rawSenderOpt, {
                debugStack: [provider],
            });
            return senderFn.apply(void 0, /* @__PURE__ */ __spreadArrays([senderOpt], rest));
        };
    }, 
    /*
        В getTransportList происходит knownError (https://st.yandex-team.ru/METR-38257).
        Результат getSender - функция, чтобы не проверять перед каждым вызовом на undefined,
        возвращается fallbackSender.
     */
    fallbackSender);

    var ignoredCounters = [26812653];
    var isCounterSilent = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('id'), /* @__PURE__ */ ctxIncludes(ignoredCounters)), getCounterKey);

    var DEBUG_STORAGE_FLAG = 'debug';
    var DEBUG_CTX_FLAG = '_ym_debug';
    var DEBUG_URL_PARAM = '_ym_debug';

    var createEmptyConsole = function (ctx) {
        return  {
                log: wrapLogFunction(ctx, 'log', noop),
                warn: wrapLogFunction(ctx, 'log', noop),
                error: wrapLogFunction(ctx, 'log', noop),
            }
            ;
    };
    var debugEnabled = function (ctx) {
        var cookie = globalCookieStorage(ctx);
        var location = getLocation(ctx);
        var hasCookieFlag = cookie.getVal(DEBUG_STORAGE_FLAG) === '1';
        var hasUrlFlag = location.href.indexOf(DEBUG_URL_PARAM + "=1") > -1;
        var hasCtxFlag = ctx[DEBUG_CTX_FLAG];
        return {
            hasCookieFlag: hasCookieFlag,
            isDebug: hasCtxFlag || hasUrlFlag,
            isEnabled: /* @__PURE__ */ cSome(Boolean, [hasCookieFlag, hasCtxFlag, hasUrlFlag]),
        };
    };
    var createDebugConsole = /* @__PURE__ */ ctxErrorLogger('dc.init', function (ctx) {
        var location = getLocation(ctx);
        var realConsole = getConsole(ctx);
        var cookie = globalCookieStorage(ctx);
        var _a = debugEnabled(ctx), isDebug = _a.isDebug, hasCookieFlag = _a.hasCookieFlag;
        if (isDebug && !hasCookieFlag) {
            cookie.setVal(DEBUG_STORAGE_FLAG, '1', undefined, location.host);
        }
        var isOptout = 
            isOptoutEnabled(ctx);
        var canLog = !isOptout && (isDebug || hasCookieFlag);
        return canLog ? realConsole : createEmptyConsole(ctx);
    });
    var DebugConsole = /* @__PURE__ */ memo( createDebugConsole );
    var consoleLog = ( function consoleLogFn() {
            // eslint-disable-next-line prefer-rest-params
            var _a = argsToArray(arguments), ctx = _a[0], arg = _a.slice(1);
            var consoleObj = DebugConsole(ctx);
            consoleObj.log.apply(consoleLog, arg);
        }
        );
    var getLoggerFn = function (ctx, counterOptions, message, params) {
        return  !isCounterSilent(counterOptions)
            ? /* @__PURE__ */ bindArg(bindArgs(/* @__PURE__ */ __spreadArrays([
                ctx
            ], (params ? [message + ". Params:", params] : [message])), consoleLog), call)
            : noop;
    };

    var useRawHitProvider = function (ctx, counterOpt) {
        var _a, _b;
        var sender = getSender(ctx, HIT_PROVIDER, counterOpt);
        var url = counterOpt.forceUrl || "" + getLocation(ctx).href;
        var referrer = counterOpt.forceReferrer || ctx.document.referrer;
        var senderOpt = {
            brInfo: browserInfo((_a = {},
                _a[PAGE_VIEW_BR_KEY] = 1,
                _a)),
            urlParams: (_b = {},
                _b[WATCH_URL_PARAM] = url,
                _b[WATCH_REFERER_PARAM] = referrer,
                _b),
        };
        {
            senderOpt.params = counterOpt.params;
        }
        {
            senderOpt.userParams = counterOpt.userParams;
        }
        if (
            counterOpt.counterDefer &&
            senderOpt.urlParams) {
            // eslint-disable-next-line dot-notation
            senderOpt.urlParams[DEFER_KEY] = '1';
        }
        return sender(senderOpt, counterOpt)
            .then(function (hitParams) {
            if (!hitParams) {
                return;
            }
            if (!counterOpt.counterDefer) {
                getLoggerFn(ctx, counterOpt, "PageView. Counter " + counterOpt.id + ". URL: " + url + ". " +
                    ("Referrer: " + referrer), counterOpt.params)();
            }
            runAsync(ctx, bindArgs([ctx, counterOpt, hitParams], setSettings));
        })["catch"](errorLogger(ctx, 'h.g.s'));
    };
    var useHitProvider = errorLogger(window, 'h.p', useRawHitProvider);

    var finallyCallUserCallback = function (ctx, errorNamespace, promise, callback, userCtx) {
        var userCallback = bind(callUserCallback, null, ctx, callback, userCtx);
        return promise.then(userCallback, function (e) {
            userCallback();
            reportError(ctx, errorNamespace, e);
        });
    };

    var ARTIFICIAL_TITLE_KEY = 'title';
    var ARTIFICIAL_REF_KEY = 'referer';
    var ARTIFICIAL_PARAMS_KEY = 'params';
    var ARTIFICIAL_CALLBACK_KEY = 'callback';
    var ARTIFICIAL_CTX_KEY = 'ctx';
    var getArtificialState = /* @__PURE__ */ memo(constructObject, getCounterKey);
    var argsToOptions = function (title, referer, params, callback, ctx) {
        if (isObject(title)) {
            var options = title;
            return {
                title: options[ARTIFICIAL_TITLE_KEY],
                referer: options[ARTIFICIAL_REF_KEY],
                params: options[ARTIFICIAL_PARAMS_KEY],
                callback: options[ARTIFICIAL_CALLBACK_KEY],
                ctx: options[ARTIFICIAL_CTX_KEY],
            };
        }
        return {
            title: title,
            referer: referer,
            params: params,
            callback: callback,
            ctx: ctx,
        };
    };
    var artificialHitProvider = function (ctx, counterOpt) {
        var sender = getSender(ctx, ARTIFICIAL_HIT_PROVIDER, counterOpt);
        return function (url, title, referer, params, callback, fnCtx) {
            var _a, _b;
            var senderOpt = {
                urlParams: {},
                brInfo: browserInfo((_a = {},
                    _a[PAGE_VIEW_BR_KEY] = 1,
                    _a[ARTIFICIAL_BR_KEY] = 1,
                    _a)),
            };
            if (!url) {
                return undefined;
            }
            var options = argsToOptions(title, referer, params, callback, fnCtx);
            var state = getArtificialState(counterOpt);
            if (state.url !== url) {
                state.ref = state.url;
                state.url = url;
            }
            var pageUrl = url || getLocation(ctx).href;
            var pageRef = options.referer || state.ref || ctx.document.referrer;
            var logHit = getLoggerFn(ctx, counterOpt, "PageView. Counter " + counterOpt.id + ". URL: " + pageUrl + ". Referrer: " + pageRef, options.params);
            var result = sender(mix(senderOpt, {
                params: options.params,
                title: options.title,
                urlParams: mix(senderOpt.urlParams, (_b = {},
                    _b[WATCH_URL_PARAM] = pageUrl,
                    _b[WATCH_REFERER_PARAM] = pageRef,
                    _b)),
            }), counterOpt).then(logHit);
            return finallyCallUserCallback(ctx, 'p.ar.s', result, options.callback || noop, options.ctx);
        };
    };
    var useArtificialHitProvider = /* @__PURE__ */ ctxErrorLogger('p.ar', artificialHitProvider);

    /**
     * Словарь для деобфускации
     * закоментированные со "*" обфусцировать не нужно
     */
    var fieldNamesFullMap = {
        // Common
        stamp: 'stamp',
        frameId: 'frameId',
        // * type: 'type',
        // * data: 'data',
        meta: 'meta',
        // Page
        // * content: 'content',
        base: 'base',
        hasBase: 'hasBase',
        // * viewport: 'viewport',
        // * width: 'width',
        // * height: 'height',
        // * title: 'title',
        // * doctype: 'doctype',
        address: 'address',
        ua: 'ua',
        // * referrer: 'referrer',
        // * screen: 'screen',
        // * location: 'location',
        // * host: 'host',
        // * protocol: 'protocol',
        // * path: 'path',
        // NodeInfo
        // * id: 'id',
        prev: 'prev',
        // * next: 'next',
        // * parent: 'parent',
        // * name: 'name',
        // * attributes: 'attributes',
        namespace: 'namespace',
        // * hidden: 'hidden',
        // Events
        // * orientation: 'orientation',
        // * target: 'target',
        // * value: 'value',
        keystrokes: 'keystrokes',
        // * key: 'key',
        isMeta: 'isMeta',
        modifier: 'modifier',
        pageWidth: 'pageWidth',
        pageHeight: 'pageHeight',
        // * page: 'page',
        // * start: 'start',
        // * end: 'end',
        startNode: 'startNode',
        endNode: 'endNode',
        // * touches: 'touches',
        // * force: 'force',
        zoomFrom: 'zoomFrom',
        zoomTo: 'zoomTo',
        level: 'level',
        duration: 'duration',
        // Mutation
        i: 'i',
        o: 'o',
        n: 'n',
        r: 'r',
        ct: 'ct',
        at: 'at',
        nm: 'nm',
        ns: 'ns',
        pa: 'pa',
        pr: 'pr',
        nx: 'nx',
        h: 'h',
        changes: 'changes',
        // * index: 'index',
        a: 'a',
        b: 'b',
        c: 'c',
        // * d: 'd',
        // style
        // style: 'style',
        op: 'op',
    };
    var protectedFieldNames = ['attributes', 'attrs'];
    var deobfuscateDataStructure = function (data) {
        if (isArray(data)) {
            return /* @__PURE__ */ cMap(deobfuscateDataStructure, data);
        }
        if (!isNil(data) && typeof data === 'object') {
            return cReduce(function (result, _a) {
                var field = _a[0], value = _a[1];
                var fieldName = fieldNamesFullMap[field];
                if (isUndefined(fieldName)) {
                    fieldName = field;
                }
                var fieldValue = includes(fieldName, protectedFieldNames)
                    ? value
                    : deobfuscateDataStructure(value);
                if (fieldName) {
                    // eslint-disable-next-line no-param-reassign
                    result[fieldName] = fieldValue;
                }
                else {
                    // eslint-disable-next-line no-param-reassign
                    result[field] = fieldValue;
                }
                return result;
            }, {}, entries(data));
        }
        return data;
    };
    var rawJSONBufferSerializer =  /** @class */ (function () {
            function JSONBufferSerializer(ctx) {
                this.ctx = ctx;
            }
            JSONBufferSerializer.prototype.serialize = function (bufferData) {
                var deobfuscatedData = deobfuscateDataStructure(bufferData);
                var serializedDatas = /* @__PURE__ */ cMap(bind(this.serializeData, this), deobfuscatedData);
                return taskOf(stringify$1(this.ctx, /* @__PURE__ */ cMap(function (serializedData, i) {
                    var _a;
                    var originItem = deobfuscatedData[i];
                    return mix({}, originItem, (_a = {},
                        _a['data'] = serializedData,
                        _a));
                }, serializedDatas)));
            };
            JSONBufferSerializer.prototype.serializeData = function (info) {
                var result = info.data;
                if (typeof result !== 'string') {
                    result = stringify$1(this.ctx, deobfuscateDataStructure(info.data));
                }
                return result;
            };
            JSONBufferSerializer.prototype.getRequestBodySize = function (serialized) {
                return encodeURIComponent(serialized).length;
            };
            JSONBufferSerializer.prototype.splitToChunks = function (serialized, chunksNumber) {
                var chunkSize = Math.ceil(serialized.length / chunksNumber);
                var result = [];
                for (var i = 0; i < chunksNumber; i += 1) {
                    var dataPart = serialized.slice(i * chunkSize, chunkSize * (i + 1));
                    result.push(dataPart);
                }
                return result;
            };
            JSONBufferSerializer.prototype.isEnabled = function () {
                return !!this.ctx.JSON;
            };
            return JSONBufferSerializer;
        }()) ;
    var JSONBufferSerializer = rawJSONBufferSerializer;

    /* eslint no-bitwise: 0 */
    /* eslint no-plusplus: 0 */
    /* eslint no-nested-ternary: 0 */
    /* eslint no-param-reassign: 0 */
    var getHiLo = function (val) {
        if (!val) {
            return [0, 0];
        }
        var isNegative = val < 0;
        if (isNegative) {
            val = -val;
        }
        var lo = val >>> 0;
        var hi = ((val - lo) / 4294967296) >>> 0;
        if (isNegative) {
            hi = ~hi >>> 0;
            lo = ~lo >>> 0;
            if (++lo > 4294967295) {
                lo = 0;
                if (++hi > 4294967295)
                    hi = 0;
            }
        }
        return [hi, lo];
    };
    var hiLoLen = function (_a) {
        var hi = _a[0], lo = _a[1];
        var part0 = lo;
        var part1 = ((lo >>> 28) | (hi << 4)) >>> 0;
        var part2 = hi >>> 24;
        return part2 === 0
            ? part1 === 0
                ? part0 < 16384
                    ? part0 < 128
                        ? 1
                        : 2
                    : part0 < 2097152
                        ? 3
                        : 4
                : part1 < 16384
                    ? part1 < 128
                        ? 5
                        : 6
                    : part1 < 2097152
                        ? 7
                        : 8
            : part2 < 128
                ? 9
                : 10;
    };
    var encodeVarint64 = function (ctx, _a, buf, pos) {
        var hi = _a[0], lo = _a[1];
        while (hi) {
            buf[pos++] = (lo & 127) | 128;
            lo = ((lo >>> 7) | (hi << 25)) >>> 0;
            hi >>>= 7;
        }
        while (lo > 127) {
            buf[pos++] = (lo & 127) | 128;
            lo >>>= 7;
        }
        buf[pos++] = lo;
    };

    /* eslint no-bitwise: 0 */
    var writeUintLE = function (val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = (val >>> 8) & 255;
        buf[pos + 2] = (val >>> 16) & 255;
        buf[pos + 3] = val >>> 24;
    };
    var writeFloatIeee754 = function (ctx, rawVal, buf, pos) {
        var val = rawVal;
        var sign = val < 0 ? 1 : 0;
        if (sign)
            val = -val;
        if (val === 0) {
            writeUintLE(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
        }
        else if (ctx.isNaN(val))
            writeUintLE(2143289344, buf, pos);
        else if (val > 3.4028234663852886e38) {
            // +-Infinity
            writeUintLE(((sign << 31) | 2139095040) >>> 0, buf, pos);
        }
        else if (val < 1.1754943508222875e-38) {
            // denormal
            writeUintLE(((sign << 31) | ctx.Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
        }
        else {
            var exponent = ctx.Math.floor(ctx.Math.log(val) / Math.LN2);
            var mantissa = 
            // eslint disable-next-line no-restricted-properties
            Math.round(val * ctx.Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUintLE(((sign << 31) | ((exponent + 127) << 23) | mantissa) >>> 0, buf, pos);
        }
    };
    var getFloatUtils = /* @__PURE__ */ memo(function (ctx) {
        if (typeof ctx.Float32Array === 'undefined' ||
            typeof ctx.Uint8Array === 'undefined') {
            return writeFloatIeee754;
        }
        var f32 = new Float32Array([-0]);
        var f8b = new Uint8Array(f32.buffer);
        var le = f8b[3] === 128;
        var writeFloatF32Cpy = function (winCtx, val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        };
        var writeFloatF32Rev = function (winCtx, val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        };
        return le ? writeFloatF32Cpy : writeFloatF32Rev;
    });
    var writeFloat = function (ctx, floatVal, buffer, cursor) {
        return getFloatUtils(ctx)(ctx, floatVal, buffer, cursor);
    };

    /* eslint no-bitwise: 0 */
    /* eslint no-plusplus: 0 */
    /* eslint no-continue: 0 */
    /* eslint no-cond-assign: 0 */
    var encodeUTF8 = function (isLengthOnly) {
        return function (ctx, data, buffer, rawCursor) {
            var c1;
            var c2;
            var cursor = rawCursor;
            var len = 0;
            for (var i = 0; i < data.length; ++i) {
                c1 = data.charCodeAt(i);
                if (c1 < 128) {
                    if (isLengthOnly) {
                        len += 1;
                        continue;
                    }
                    buffer[cursor++] = c1;
                }
                else if (c1 < 2048) {
                    if (isLengthOnly) {
                        len += 2;
                        continue;
                    }
                    buffer[cursor++] = (c1 >> 6) | 192;
                    buffer[cursor++] = (c1 & 63) | 128;
                }
                else if ((c1 & 0xfc00) === 0xd800 &&
                    ((c2 = data.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
                    if (isLengthOnly) {
                        len += 4;
                        continue;
                    }
                    c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
                    ++i;
                    buffer[cursor++] = (c1 >> 18) | 240;
                    buffer[cursor++] = ((c1 >> 12) & 63) | 128;
                    buffer[cursor++] = ((c1 >> 6) & 63) | 128;
                    buffer[cursor++] = (c1 & 63) | 128;
                }
                else {
                    if (isLengthOnly) {
                        len += 3;
                        continue;
                    }
                    buffer[cursor++] = (c1 >> 12) | 224;
                    buffer[cursor++] = ((c1 >> 6) & 63) | 128;
                    buffer[cursor++] = (c1 & 63) | 128;
                }
            }
            return isLengthOnly ? len : cursor;
        };
    };
    var encodeUTF8Bytes = encodeUTF8(false);
    var encodeUTF8Length = encodeUTF8(true);
    var writeBytes = function (ctx, val, buf, pos) {
        for (var i = 0; i < val.length; ++i) {
            buf[pos + i] = val[i];
        }
    };

    /* eslint no-bitwise: 0 */
    var writeByte = function (ctx, rawVal, buffer, cursor) {
        buffer[cursor] = rawVal;
    };
    var encodeVarint = function (ctx, rawVal, buffer, rawCursor) {
        var val = rawVal;
        var cursor = rawCursor;
        while (val > 127) {
            buffer[cursor++] = (val & 127) | 128;
            val >>>= 7;
        }
        buffer[cursor] = val;
    };
    var encode_uint32 = function (rawVal) {
        var newLen = rawVal < 128
            ? 1
            : rawVal < 16384
                ? 2
                : rawVal < 2097152
                    ? 3
                    : rawVal < 268435456
                        ? 4
                        : 5;
        return [encodeVarint, newLen, rawVal];
    };
    var encode_int32 = function (rawVal) {
        if (rawVal < 0) {
            return [encodeVarint64, 10, getHiLo(rawVal)];
        }
        return encode_uint32(rawVal);
    };
    var encode_sint32 = function (value) {
        var newVal = ((value << 1) ^ (value >> 31)) >>> 0;
        return encode_uint32(newVal);
    };
    var encode_float = function (data) {
        return [writeFloat, 4, data];
    };
    var encode_int64 = function (data) {
        var hiLo = getHiLo(data);
        return [encodeVarint64, hiLoLen(hiLo), hiLo];
    };
    var encode_bool = function (data) {
        return [writeByte, 1, data ? 1 : 0];
    };
    var encode_bytes = function (data) {
        return [writeBytes, data.length, data];
    };
    var encode_string = function (data) {
        var len = encodeUTF8Length({}, data, [], 0);
        if (!len) {
            return [writeByte, 1, 0];
        }
        return [encodeUTF8Bytes, len, data];
    };

    var noopOp = function () { return [noop, 0, 0]; };

    var encodePage_Box = function (obj) {
        return [
            [129, obj.height, encode_int32],
            [65, obj.width, encode_int32],
        ];
    };
    var encodePage_Location = function (obj) {
        return [
            [209, obj.path, encode_string],
            [145, obj.protocol, encode_string],
            [81, obj.host, encode_string],
        ];
    };
    var encodePage_Scroll = function (obj) {
        return [
            [133, obj.scroll, encode_int32],
            [65, obj.target, encode_int32],
        ];
    };
    var encodePage_Meta = function (obj) {
        return [
            [724, obj.initialScroll, encodePage_Scroll],
            [656, obj.location, encodePage_Location],
            [592, obj.viewport, encodePage_Box],
            [528, obj.screen, encodePage_Box],
            [449, obj.hasBase, encode_bool],
            [401, obj.base, encode_string],
            [337, obj.referrer, encode_string],
            [273, obj.ua, encode_string],
            [209, obj.address, encode_string],
            [145, obj.title, encode_string],
            [81, obj.doctype, encode_string],
        ];
    };
    var encodePage_Content = function (obj) {
        return [
            [513, obj.hidden, encode_bool],
            [449, obj.prev, encode_int32],
            [385, obj.next, encode_int32],
            [337, obj.content, encode_string],
            [257, obj.parent, encode_int32],
            [
                210,
                obj.attributes,
                81,
                encode_string,
                145,
                encode_string,
            ],
            [145, obj.name, encode_string],
            [65, obj.id, encode_int32],
        ];
    };
    var encodePage = function (obj) {
        return [
            [321, obj.recordStamp, encode_int64],
            [273, obj.tabId, encode_string],
            [193, obj.frameId, encode_sint32],
            [148, obj.content, encodePage_Content],
            [80, obj.meta, encodePage_Meta],
        ];
    };

    var encodeMutation_Delete = function (obj) {
        return [
            [321, obj.i, encode_int32],
            [257, obj.pa, encode_int32],
            [193, obj.nx, encode_int32],
            [129, obj.pr, encode_int32],
            [65, obj.id, encode_int32],
        ];
    };
    var encodeMutation_Add = function (obj) {
        return [
            [641, obj.h, encode_bool],
            [577, obj.i, encode_int32],
            [513, obj.nx, encode_int32],
            [465, obj.ct, encode_string],
            [402, obj.at, 81, encode_string, 145, encode_string],
            [321, obj.pr, encode_int32],
            [273, obj.ns, encode_string],
            [193, obj.pa, encode_int32],
            [145, obj.nm, encode_string],
            [65, obj.id, encode_int32],
        ];
    };
    var encodeMutation_BeforeAfter = function (obj) {
        return [
            [193, obj.r, encode_bool],
            [145, obj.n, encode_string],
            [81, obj.o, encode_string],
        ];
    };
    var encodeMutation_AttributeChange = function (obj) {
        return [
            [193, obj.i, encode_int32],
            [
                146,
                obj.at,
                81,
                encode_string,
                144,
                encodeMutation_BeforeAfter,
            ],
            [65, obj.id, encode_int32],
        ];
    };
    var encodeMutation_TextChange = function (obj) {
        return [
            [193, obj.i, encode_int32],
            [144, obj.ct, encodeMutation_BeforeAfter],
            [65, obj.id, encode_int32],
        ];
    };
    var encodeMutation_Changes = function (obj) {
        return [
            [276, obj.d, encodeMutation_TextChange],
            [212, obj.c, encodeMutation_AttributeChange],
            [148, obj.b, encodeMutation_Add],
            [84, obj.a, encodeMutation_Delete],
        ];
    };
    var encodeMutation_Meta = function (obj) {
        return [
            [148, obj.changes, encodeMutation_Changes],
            [65, obj.index, encode_int32],
        ];
    };
    var encodeMutation = function (obj) {
        return [
            [257, obj.frameId, encode_sint32],
            [208, obj.meta, encodeMutation_Meta],
            [129, obj.stamp, encode_int32],
            [65, obj.target, encode_int32],
        ];
    };

    var encodeEvent = function (obj) {
        return [
            [1168, obj.stylechangeEvent, encodeStylechangeEvent],
            [1104, obj.hashchangeEvent, encodeHashchangeEvent],
            [1040, obj.fatalErrorEvent, encodeFatalErrorEvent],
            [976, obj.deviceRotationEvent, encodeDeviceRotationEvent],
            [912, obj.keystrokesEvent, encodeKeystrokesEvent],
            [848, obj.resizeEvent, encodeResizeEvent],
            [784, obj.zoomEvent, encodeZoomEvent],
            [720, obj.propertyEvent, encodePropertyEvent],
            [656, obj.methodEvent, encodeMethodEvent],
            [592, obj.touchEvent, encodeTouchEvent],
            [528, obj.changeEvent, encodeChangeEvent],
            [464, obj.selectionEvent, encodeSelectionEvent],
            [400, obj.windowEvent, encodeWindowEvent],
            [336, obj.scrollEvent, encodeScrollEvent],
            [272, obj.mouseEvent, encodeMouseEvent],
            [193, obj.frameId, encode_sint32],
            [129, obj.target, encode_sint32],
            [65, obj.type, encode_uint32],
        ];
    };
    var encodeStylechangeRecord = function (obj) {
        return [
            [257, obj.index, encode_int32],
            [209, obj.op, encode_string],
            [145, obj.style, encode_string],
            [65, obj.target, encode_int32],
        ];
    };
    var encodeStylechangeEvent = function (obj) {
        return [[84, obj.changes, encodeStylechangeRecord]];
    };
    var encodeMouseEvent = function (obj) {
        return [
            [129, obj.y, encode_int32],
            [65, obj.x, encode_int32],
        ];
    };
    var encodeScrollEvent = function (obj) {
        return [
            [193, obj.page, encode_bool],
            [129, obj.y, encode_int32],
            [65, obj.x, encode_int32],
        ];
    };
    var encodeWindowEvent = function (obj) {
        return [];
    };
    var encodeSelectionEvent = function (obj) {
        return [
            [257, obj.endNode, encode_int32],
            [193, obj.startNode, encode_int32],
            [129, obj.end, encode_int32],
            [65, obj.start, encode_int32],
        ];
    };
    var encodeChangeEvent = function (obj) {
        return [
            [193, obj.hidden, encode_bool],
            [129, obj.checked, encode_bool],
            [81, obj.value, encode_string],
        ];
    };
    var encodeTouchEvent_SubMeta = function (obj) {
        return [
            [297, obj.force, encode_float],
            [233, obj.y, encode_float],
            [169, obj.x, encode_float],
            [81, obj.id, encode_string],
        ];
    };
    var encodeTouchEvent = function (obj) {
        return [[84, obj.touches, encodeTouchEvent_SubMeta]];
    };
    var encodeZoomEvent_ZoomPoint = function (obj) {
        return [
            [193, obj.y, encode_int32],
            [129, obj.x, encode_int32],
            [105, obj.level, encode_float],
        ];
    };
    var encodeZoomEvent = function (obj) {
        return [
            [144, obj.zoomTo, encodeZoomEvent_ZoomPoint],
            [80, obj.zoomFrom, encodeZoomEvent_ZoomPoint],
        ];
    };
    var encodeResizeEvent = function (obj) {
        return [
            [257, obj.pageHeight, encode_int32],
            [193, obj.pageWidth, encode_int32],
            [129, obj.height, encode_int32],
            [65, obj.width, encode_int32],
        ];
    };
    var encodeMethodEvent = function (obj) {
        return [
            [149, obj.args, encode_string],
            [81, obj.method, encode_string],
        ];
    };
    var encodePropertyEvent = function (obj) {
        return [
            [145, obj.value, encode_string],
            [81, obj.property, encode_string],
        ];
    };
    var encodeKeystrokesEvent_KeystrokeEvent = function (obj) {
        return [
            [273, obj.modifier, encode_string],
            [193, obj.isMeta, encode_bool],
            [145, obj.key, encode_string],
            [65, obj.id, encode_int32],
        ];
    };
    var encodeKeystrokesEvent = function (obj) {
        return [[84, obj.keystrokes, encodeKeystrokesEvent_KeystrokeEvent]];
    };
    var encodeDeviceRotationEvent = function (obj) {
        return [
            [193, obj.orientation, encode_int32],
            [129, obj.height, encode_int32],
            [65, obj.width, encode_int32],
        ];
    };
    var encodeFatalErrorEvent = function (obj) {
        return [
            [209, obj.stack, encode_string],
            [145, obj.exception, encode_string],
            [81, obj.code, encode_string],
        ];
    };
    var encodeHashchangeEvent = function (obj) {
        return [[81, obj.hash, encode_string]];
    };

    var encodePublishersHeader = function (obj) {
        return [
            [129, obj.involvedTime, encode_int32],
            [84, obj.articleMeta, encodeArticleMeta],
        ];
    };
    var encodeArticleMeta = function (obj) {
        return [
            [513, obj.chars, encode_int32],
            [489, obj.maxScrolled, encode_float],
            [385, obj.involvedTime, encode_int32],
            [321, obj.height, encode_int32],
            [257, obj.width, encode_int32],
            [193, obj.y, encode_int32],
            [129, obj.x, encode_int32],
            [65, obj.id, encode_uint32],
        ];
    };
    var encodeArticleInfo = function (obj) {
        return [
            [593, obj.updateDate, encode_string],
            [532, obj.rubric, encodeArticleRubric],
            [449, obj.chars, encode_int32],
            [401, obj.publicationDate, encode_string],
            [340, obj.topics, encodeArticleTopic],
            [276, obj.authors, encodeArticleAuthor],
            [209, obj.pageTitle, encode_string],
            [145, obj.pageUrlCanonical, encode_string],
            [65, obj.id, encode_uint32],
        ];
    };
    var encodeArticleAuthor = function (obj) {
        return [[81, obj.name, encode_string]];
    };
    var encodeArticleTopic = function (obj) {
        return [[81, obj.name, encode_string]];
    };
    var encodeArticleRubric = function (obj) {
        return [
            [129, obj.position, encode_int32],
            [81, obj.name, encode_string],
        ];
    };

    var encodeBufferWrapper = function (obj) {
        return [[84, obj.buffer, encodeBuffer]];
    };
    var encodeBuffer = function (obj) {
        return [
            [321, obj.end, encode_bool],
            [273, obj.chunk, encode_bytes],
            [193, obj.page, encode_int32],
            [144, obj.data, encodeWrapper],
            [65, obj.stamp, encode_int32],
        ];
    };
    var encodeWrapper = function (obj) {
        return [
            [385, obj.activity, encode_uint32],
            [
                336,
                obj.publishersHeader,
                encodePublishersHeader,
            ],
            [
                272,
                obj.articleInfo,
                encodeArticleInfo,
            ],
            [208, obj.event, encodeEvent],
            [144, obj.mutation, encodeMutation],
            [80, obj.page, encodePage],
        ];
    };

    /* eslint no-bitwise: 0 */
    var IS_PRIMITIVE = 1; // 0b001
    var IS_REPETED = 4; // 0b100
    var IS_MAP = 2; // 0b010
    var IS_LEN_TYPE = 2; // 0b010
    var LEN_INDEX_SIZE = 0;
    var HEAD_INDEX_SIZE = 1;
    var TAIL_INDEX_SIZE = 2;
    var STATE_INDEX_SIZE = 3;
    var NEXT_INDEX_STATE = 3;
    var NEXT_INDEX_OP = 3;
    var OPERATION_INDEX_OP = 0;
    var VALUE_INDEX_OP = 2;
    var LEN_INDEX_OP = 1;
    var pushOperaton = function (curentState, newOperation) {
        curentState[LEN_INDEX_SIZE] += newOperation[LEN_INDEX_OP];
        curentState[TAIL_INDEX_SIZE][NEXT_INDEX_OP] = newOperation;
        curentState[TAIL_INDEX_SIZE] = newOperation;
    };
    var resetOperation = function (curentState) {
        if (curentState[STATE_INDEX_SIZE]) {
            curentState[LEN_INDEX_SIZE] =
                curentState[STATE_INDEX_SIZE][LEN_INDEX_SIZE];
            curentState[HEAD_INDEX_SIZE] =
                curentState[STATE_INDEX_SIZE][HEAD_INDEX_SIZE];
            curentState[TAIL_INDEX_SIZE] =
                curentState[STATE_INDEX_SIZE][TAIL_INDEX_SIZE];
            curentState[STATE_INDEX_SIZE] =
                curentState[STATE_INDEX_SIZE][NEXT_INDEX_STATE];
        }
        else {
            curentState[LEN_INDEX_SIZE] = 0;
            curentState[HEAD_INDEX_SIZE] = noopOp();
            curentState[TAIL_INDEX_SIZE] = curentState[HEAD_INDEX_SIZE];
        }
    };
    var forkOperation = function (curentState) {
        curentState[STATE_INDEX_SIZE] = [
            curentState[LEN_INDEX_SIZE],
            curentState[HEAD_INDEX_SIZE],
            curentState[TAIL_INDEX_SIZE],
            curentState[STATE_INDEX_SIZE],
        ];
        curentState[HEAD_INDEX_SIZE] = noopOp();
        curentState[TAIL_INDEX_SIZE] = curentState[HEAD_INDEX_SIZE];
        curentState[LEN_INDEX_SIZE] = 0;
    };
    var squashToLenghtOperation = function (curentState) {
        var head = curentState[HEAD_INDEX_SIZE];
        var len = curentState[LEN_INDEX_SIZE];
        var tail = curentState[TAIL_INDEX_SIZE];
        resetOperation(curentState);
        pushOperaton(curentState, encode_uint32(len));
        if (len) {
            curentState[TAIL_INDEX_SIZE][NEXT_INDEX_OP] = head[NEXT_INDEX_OP];
            curentState[TAIL_INDEX_SIZE] = tail;
            curentState[LEN_INDEX_SIZE] += len;
        }
    };
    var protoPrepareLength = function (ctx, encodeFn, obj) {
        var firstFields = encodeFn(obj);
        var startOp = noopOp();
        var curentState = [0, startOp, startOp, undefined];
        return iterForOf(firstFields, function (fieldEncoderInfo, currentFields) {
            var typeInfo = fieldEncoderInfo[0], fieldData = fieldEncoderInfo[1], fieldEncoder = fieldEncoderInfo[2];
            if (typeInfo === 0) {
                fieldEncoder(curentState, fieldData);
                return curentState;
            }
            if (fieldData === undefined || fieldData === null) {
                return curentState;
            }
            var tagAndWireType = typeInfo >> 3;
            if (typeInfo & IS_PRIMITIVE) {
                pushOperaton(curentState, encode_uint32(tagAndWireType));
                var primitveEncoder = fieldEncoder;
                var encoderData = primitveEncoder(fieldData);
                if (tagAndWireType & IS_LEN_TYPE) {
                    pushOperaton(curentState, encode_uint32(encoderData[LEN_INDEX_OP]));
                }
                pushOperaton(curentState, encoderData);
            }
            else if (typeInfo & IS_REPETED) {
                var data = fieldData;
                var reversedIndex = data.length - 1;
                while (reversedIndex >= 0) {
                    var repeatedFieldData = fieldData[reversedIndex];
                    var newFields = fieldEncoder(repeatedFieldData);
                    newFields.push([0, 0, forkOperation]);
                    newFields.push([
                        0,
                        encode_uint32(tagAndWireType),
                        pushOperaton,
                    ]);
                    newFields.unshift([0, 0, squashToLenghtOperation]);
                    currentFields.push.apply(currentFields, newFields);
                    reversedIndex -= 1;
                }
            }
            else if (typeInfo & IS_MAP) {
                var keyId = fieldEncoderInfo[2], keyEncoder = fieldEncoderInfo[3], valId = fieldEncoderInfo[4], valEncoder = fieldEncoderInfo[5];
                var keys = cKeys(fieldData);
                var reversedIndex = keys.length - 1;
                while (reversedIndex >= 0) {
                    var key = keys[reversedIndex];
                    var newFields = [
                        [0, 0, squashToLenghtOperation],
                        [valId, fieldData[key], valEncoder],
                        [keyId, key, keyEncoder],
                        [0, 0, forkOperation],
                        [0, encode_uint32(tagAndWireType), pushOperaton],
                    ];
                    currentFields.push.apply(currentFields, newFields);
                    reversedIndex -= 1;
                }
            }
            else {
                var newFields = fieldEncoder(fieldData);
                newFields.push([0, 0, forkOperation]);
                newFields.push([0, encode_uint32(tagAndWireType), pushOperaton]);
                newFields.unshift([0, 0, squashToLenghtOperation]);
                currentFields.push.apply(currentFields, newFields);
            }
            return curentState;
        });
    };
    var protoWriteBytes = function (ctx, curentState) {
        var firstHead = curentState[HEAD_INDEX_SIZE][NEXT_INDEX_OP];
        var cursor = 0;
        var resultBuffer = new ctx.Uint8Array(curentState[LEN_INDEX_SIZE]);
        return iterForOf([firstHead], function (head, arr) {
            if (!head) {
                return resultBuffer;
            }
            head[OPERATION_INDEX_OP](ctx, head[VALUE_INDEX_OP], resultBuffer, cursor);
            cursor += head[LEN_INDEX_OP];
            arr.push(head[NEXT_INDEX_OP]);
            return resultBuffer;
        });
    };

    var checkProtobuf = function (ctx) {
        var isEnabled = debugEnabled(ctx).isEnabled;
        var blobSupported = false;
        try {
            blobSupported = new ctx.Blob(['ä']).size === 2;
            // Check if Blob constructor supports ArrayBufferViews
            // Fails in Safari 6, so we need to map to ArrayBuffers there.
            blobSupported =
                blobSupported &&
                    new ctx.Blob([new ctx.Uint8Array([1, 2])]).size === 2;
        }
        catch (e) { }
        return cEvery(Boolean, [
            !isEnabled,
            blobSupported,
            ctx.Uint8Array,
            getPath(ctx, 'Uint8Array.prototype.slice'),
        ]);
    };
    var obfuscatedArgs = {
        topics: 'topics',
        publicationDate: 'publicationDate',
        pageUrlCanonical: 'pageUrlCanonical',
        updateDate: 'updateDate',
        authors: 'authors',
        articleInfo: 'articleInfo',
        rubric: 'rubric',
        publishersHeader: 'publishersHeader',
        involvedTime: 'involvedTime',
        pageTitle: 'pageTitle',
        maxScrolled: 'maxScrolled',
        chars: 'chars',
        articleMeta: 'articleMeta',
    };
    // FIXME объеденить с Visor2ProtoBufferSerialiser после того как уберем обфускацию из паблишеров
    var ProtoBufferSerializer = /** @class */ (function () {
        function ProtoBufferSerializer(ctx) {
            this.ctx = ctx;
            this.keyDict = /* @__PURE__ */ pipe(entries, ctxReduce(function (acc, _a) {
                var key = _a[0], val = _a[1];
                acc[val] = key;
                return acc;
            }, {}))(obfuscatedArgs);
        }
        ProtoBufferSerializer.prototype.structBuffer = function (bufferData) {
            var _a;
            var obfuscatedData = this.prepareBuffer(bufferData.data);
            var time = TimeOne(this.ctx);
            return {
                stamp: time(getFromStart),
                data: (_a = {},
                    _a[this.keyDict[bufferData.type]] = obfuscatedData,
                    _a),
            };
        };
        ProtoBufferSerializer.prototype.prepareBuffer = function (buffer) {
            var _this = this;
            if (isArray(buffer)) {
                return /* @__PURE__ */ cMap(bind(this.prepareBuffer, this), buffer);
            }
            if (isObject(buffer)) {
                return /* @__PURE__ */ pipe(entries, ctxReduce(function (resultR, _a) {
                    var key = _a[0], val = _a[1];
                    var result = resultR;
                    result[_this.keyDict[key] || key] =
                        _this.prepareBuffer(val);
                    return result;
                }, {}))(buffer);
            }
            return buffer;
        };
        ProtoBufferSerializer.prototype.serializeData = function (bufferData) {
            var iteratorFn = protoPrepareLength(this.ctx, encodeWrapper, this.structBuffer(bufferData));
            return iteratorFn(iterPop(noop));
        };
        ProtoBufferSerializer.prototype.getRequestBodySize = function (serialized) {
            return serialized[LEN_INDEX_SIZE];
        };
        ProtoBufferSerializer.prototype.splitToChunks = function (serialized) {
            return [serialized];
        };
        ProtoBufferSerializer.prototype.serialize = function (data) {
            var _this = this;
            var encoderLength = protoPrepareLength(this.ctx, encodeBufferWrapper, {
                buffer: /* @__PURE__ */ cMap(bind(this.structBuffer, this), data),
            });
            var iterLength = executeIterator(this.ctx, encoderLength, 20, iterPopUntilMaxTime);
            return iterLength(taskChain(function (lengthData) {
                var lengthResult = lengthData.slice(-4);
                var encoderBytes = protoWriteBytes(_this.ctx, lengthResult);
                var iterBytes = executeIterator(_this.ctx, encoderBytes, 20, iterPopUntilMaxTime);
                return iterBytes;
            }))(taskMap(function (result) {
                return result[result.length - 1];
            }));
        };
        ProtoBufferSerializer.prototype.isEnabled = function () {
            return checkProtobuf(this.ctx);
        };
        return ProtoBufferSerializer;
    }());

    var rawAbstractBuffer =  /** @class */ (function () {
            function AbstractBuffer(ctx, serializer, senderFunction) {
                this.deferId = 0;
                this.partNumber = 1;
                this.FLUSH_TIMEOUT = 5000;
                this.ctx = ctx;
                this.serializer = serializer;
                this.senderFunction = senderFunction;
            }
            AbstractBuffer.prototype.setFlushTimeout = function () {
                this.deferId = setDefer(this.ctx, /* @__PURE__ */ pipe(bind(this.flush, this), bind(this.setFlushTimeout, this)), this.FLUSH_TIMEOUT, 'b.f');
            };
            // Класс Абстрактный - переменные не используются
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            AbstractBuffer.prototype.send = function (data, originalData) {
                this.senderFunction(data, originalData || [], this.partNumber);
                this.partNumber += 1;
            };
            // Класс Абстрактный - переменные не используются
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            AbstractBuffer.prototype.push = function (record, metadata) { };
            AbstractBuffer.prototype.flush = function () { };
            return AbstractBuffer;
        }()) ;
    var AbstractBuffer = rawAbstractBuffer;

    var _a$9;
    var MAX_CHUNK_SIZE = 700000;
    var ERROR_MARGIN = 0.7;
    var CHUNK_ERROR_MARGIN = 0.9;
    var MUTATIONS_TOTAL_SIZE_THREASHOLD = 30 * 1024 * 1024; // 30mb
    var PUSH_DATA_EVENT_KEY = 'p';
    var AGGREGATE_EVENT_KEY = 'ag';
    var SEND_EVENT_KEY = 'se';
    var BUFFER_NAME_MUTATIONS = 'm';
    var BUFFER_NAME_EVENTS = 'e';
    /**
     * This entity should encapsulate splitting chunks of data and controlling request body size before
     * it is posted to the API
     */
    var rawVisor2Buffer =  (_a$9 = /** @class */ (function (_super) {
                __extends(Visor2Buffer, _super);
                function Visor2Buffer(ctx, serializer, sender, totalSentThreashold) {
                    if (totalSentThreashold === void 0) { totalSentThreashold = 0; }
                    var _this = _super.call(this, ctx, serializer, sender) || this;
                    _this.totalSizeSent = 0;
                    _this.accumulatedSize = 0;
                    _this.totalSentThreashold = 0;
                    _this.buffer = [];
                    _this.FLUSH_TIMEOUT = 2000;
                    _this.emitter = emitter(ctx);
                    _this.setFlushTimeout();
                    _this.totalSentThreashold = totalSentThreashold;
                    return _this;
                }
                Visor2Buffer.prototype.getAggregatedData = function (buffer) {
                    return /* @__PURE__ */ cFilter(Boolean, this.emitter.trigger(AGGREGATE_EVENT_KEY, buffer));
                };
                Visor2Buffer.prototype.forkTaskAndSend = function (serializeTask, originalData) {
                    var _this = this;
                    serializeTask(taskFork(errorLogger(this.ctx, 'wv2.b.st'), function (serializedResult) {
                        _this.send(serializedResult, originalData);
                    }));
                };
                Visor2Buffer.prototype.splitToChunksAndSend = function (record, serializedData) {
                    var _this = this;
                    clearDefer(this.ctx, this.deferId);
                    var chunksNumber = Math.ceil(this.serializer.getRequestBodySize(serializedData) /
                        (MAX_CHUNK_SIZE * CHUNK_ERROR_MARGIN));
                    var chunks = this.serializer.splitToChunks(serializedData, chunksNumber);
                    cForEach(function (dataPart, i) {
                        var _a;
                        var chunkedRecord = mix({}, record, (_a = {},
                            _a['data'] = dataPart,
                            _a['partNum'] = i + 1,
                            _a['end'] = i + 1 === chunksNumber,
                            _a));
                        var serializeChunkTask = _this.serializer.serialize([chunkedRecord], false);
                        _this.forkTaskAndSend(serializeChunkTask, [chunkedRecord]);
                    }, chunks);
                    this.setFlushTimeout();
                };
                Visor2Buffer.prototype.send = function (data, originalData) {
                    this.emitter.trigger(SEND_EVENT_KEY, originalData);
                    _super.prototype.send.call(this, data, originalData);
                };
                Visor2Buffer.getBuffer = function (counterCode, bufferName, sender, serializer, ctx) {
                    if (!Visor2Buffer.bufferInstances["" + counterCode + bufferName]) {
                        var threashold = BUFFER_NAME_MUTATIONS === bufferName
                            ? MUTATIONS_TOTAL_SIZE_THREASHOLD
                            : 0;
                        this.bufferInstances[bufferName] = new Visor2Buffer(ctx, serializer, sender, threashold);
                    }
                    return this.bufferInstances[bufferName];
                };
                Visor2Buffer.prototype.isTotalSendThreasholdReached = function () {
                    return (this.totalSentThreashold &&
                        this.totalSizeSent >= this.totalSentThreashold);
                };
                Visor2Buffer.prototype.push = function (record) {
                    var _this = this;
                    if (this.isTotalSendThreasholdReached()) {
                        return;
                    }
                    this.emitter.trigger(PUSH_DATA_EVENT_KEY, record);
                    var serializedRecordData = this.serializer.serializeData(record);
                    var serializedSize = this.serializer.getRequestBodySize(serializedRecordData);
                    if (serializedSize > MAX_CHUNK_SIZE) {
                        this.splitToChunksAndSend(record, serializedRecordData);
                    }
                    else {
                        var currentBuffer = this.buffer.concat([record]);
                        var aggregatedData = this.getAggregatedData(currentBuffer);
                        var aggregatedSize = cReduce(function (size, item) {
                            return size +
                                _this.serializer.getRequestBodySize(_this.serializer.serializeData(item));
                        }, 0, aggregatedData);
                        if (this.accumulatedSize + aggregatedSize + serializedSize >=
                            MAX_CHUNK_SIZE * ERROR_MARGIN) {
                            this.flush();
                        }
                        this.buffer.push(record);
                        this.accumulatedSize += serializedSize;
                    }
                };
                Visor2Buffer.prototype.on = function (type, callback) {
                    this.emitter.on(type, callback);
                };
                Visor2Buffer.prototype.off = function (type, callback) {
                    this.emitter.off(type, callback);
                };
                Visor2Buffer.prototype.flush = function () {
                    var data = this.buffer.concat(this.getAggregatedData(this.buffer));
                    if (data.length) {
                        this.buffer = [];
                        this.totalSizeSent += this.accumulatedSize;
                        this.accumulatedSize = 0;
                        var serializeTask = this.serializer.serialize(data);
                        this.forkTaskAndSend(serializeTask, data);
                    }
                };
                return Visor2Buffer;
            }(AbstractBuffer)),
            _a$9.bufferInstances = {},
            _a$9) ;
    var Visor2Buffer = rawVisor2Buffer;

    function looksLikeFullUrl(data) {
        if (typeof data !== 'string') {
            return false;
        }
        return /^(https?:)\/\//.test(data);
    }
    function testAttr(node, attr, regex) {
        return regex.test(node.getAttribute(attr) || '');
    }
    function selectProp(ctx, node, name) {
        var type = node.getAttribute('itemtype');
        var elems = select("[itemprop~=\"" + name + "\"]", ctx, node);
        if (type) {
            return /* @__PURE__ */ cFilter(function (el) {
                return (el.parentNode &&
                    closest('[itemtype]', ctx, el.parentNode) === node);
            }, elems);
        }
        return elems;
    }
    function selectPropOne(ctx, node, name) {
        var result = selectProp(ctx, node, name);
        if (result && result.length) {
            return result[0];
        }
        return null;
    }
    function getVal$1(nodes) {
        if (!nodes) {
            return '';
        }
        var nodeList = isArray(nodes) ? nodes : [nodes];
        if (!nodeList.length) {
            return '';
        }
        return nodeList[0].getAttribute('content') || nodeList[0].innerText || '';
    }
    function getDate(node) {
        if (!node) {
            return '';
        }
        if (node.attributes && node.getAttribute('datetime')) {
            return node.getAttribute('datetime');
        }
        return getVal$1(node);
    }

    var _a$a;
    var PUBLISHER_ARTICLE_TYPE = 1;
    var PUBLISHER_REVIEW_TYPE = 2;
    var PUBLISHER_QA_TYPE = 3;
    var ARTICLE_LENGTH_LIMIT = 500;
    var LENGTH_LIMITS = (_a$a = {},
        _a$a[PUBLISHER_ARTICLE_TYPE] = ARTICLE_LENGTH_LIMIT,
        _a$a[PUBLISHER_REVIEW_TYPE] = ARTICLE_LENGTH_LIMIT,
        _a$a[PUBLISHER_QA_TYPE] = 0,
        _a$a);

    var rawAbstractPublisherSchema =  /** @class */ (function () {
            function AbstractPublisherSchema(ctx) {
                var _a;
                var _this = this;
                this.id = 'a';
                this.isAuthorsInTitle = false;
                this.fields = {};
                this.schemaEntities = {
                    'schema.org': [
                        'Article',
                        'NewsArticle',
                        'Movie',
                        'BlogPosting',
                        'Review',
                        'Recipe',
                        'Answer',
                    ],
                    opengraph: ['article'],
                };
                this.typesMap = (_a = {},
                    _a['Answer'] = PUBLISHER_QA_TYPE,
                    _a['Review'] = PUBLISHER_REVIEW_TYPE,
                    _a);
                // Функция мемоизирована, чтобы не спамить в консоль
                this.contentSizeWarning = /* @__PURE__ */ memo(function (id, item) {
                    consoleLog(_this.ctx, "Warning: content has only " + item['chars'] + " chars. Required " + LENGTH_LIMITS[item.type], item);
                });
                this.ctx = ctx;
                this.root = getRootElement(ctx);
            }
            AbstractPublisherSchema.prototype.getContentNode = function (data) {
                return data.element;
            };
            AbstractPublisherSchema.prototype.getFieldData = function (data, field) {
                var _this = this;
                var result;
                errorLogger(this.ctx, "P.s." + field, function () {
                    result = _this.fields[field].call(_this, data);
                })();
                return result;
            };
            AbstractPublisherSchema.prototype.postprocessData = function (item) {
                var contentItem = mix({}, item);
                if (this.isAuthorsInTitle && !contentItem['id']) {
                    if (includes(item.type, [
                        PUBLISHER_QA_TYPE,
                        PUBLISHER_REVIEW_TYPE,
                    ])) {
                        var author = /* @__PURE__ */ arrayJoin(', ', /* @__PURE__ */ cMap(/* @__PURE__ */ ctxPath('name'), contentItem['authors'] || []));
                        contentItem['pageTitle'] = author + ": " + contentItem['pageTitle'];
                    }
                }
                if (!contentItem['pageTitle']) {
                    contentItem['pageTitle'] = this.getTitleFromContent(contentItem.contentElement);
                }
                if (!contentItem['pageUrlCanonical']) {
                    contentItem['pageUrlCanonical'] = looksLikeFullUrl(contentItem['id'])
                        ? contentItem['id']
                        : this.getPageUrlCanonical();
                }
                if (!contentItem['id']) {
                    contentItem['id'] =
                        contentItem['pageTitle'] ||
                            contentItem['pageUrlCanonical'];
                }
                return contentItem;
            };
            AbstractPublisherSchema.prototype.getContentData = function (data) {
                var _this = this;
                var contentItem = {};
                var contentElement = this.getContentNode(data);
                if (!contentElement) {
                    return null;
                }
                contentItem.type = data.type;
                cForEach(function (key) {
                    contentItem[key] = _this.getFieldData(data, key);
                }, cKeys(this.fields));
                var time = TimeOne(this.ctx);
                contentItem['stamp'] = time(getFromStart);
                contentItem.element = data.element;
                contentItem.contentElement = contentElement;
                contentItem = this.postprocessData(contentItem);
                contentItem['id'] = contentItem['id']
                    ? fnv32a(contentItem['id'])
                    : 1;
                contentItem.update = function (fieldName) {
                    return _this.getContentNode(data)
                        ? _this.getFieldData(data, fieldName)
                        : undefined;
                };
                return contentItem;
            };
            AbstractPublisherSchema.prototype.getTitleFromContent = function (contentNode) {
                for (var i = 1; i <= 5; i += 1) {
                    var header = getVal$1(selectOne(this.ctx, contentNode, "h" + i));
                    if (header) {
                        return header;
                    }
                }
                return undefined;
            };
            AbstractPublisherSchema.prototype.getPageUrlCanonical = function () {
                var url = selectOne(this.ctx, this.root, '[rel="canonical"]');
                if (url) {
                    return url.href;
                }
                return undefined;
            };
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            AbstractPublisherSchema.prototype.getType = function (node) {
                return PUBLISHER_ARTICLE_TYPE;
            };
            AbstractPublisherSchema.prototype.findContentDescriptionNodes = function () {
                return [];
            };
            AbstractPublisherSchema.prototype.findContent = function () {
                var _this = this;
                var descriptionNodes = this.findContentDescriptionNodes();
                var index = 1;
                return cReduce(function (result, node) {
                    var contentItems = _this.getContentData({
                        element: node,
                        type: _this.getType(node),
                    }) || [];
                    if (!isArray(contentItems)) {
                        contentItems = [contentItems];
                    }
                    var uniqueItems = cReduce(function (_a, item) {
                        var values = _a.values, ids = _a.ids;
                        if (item &&
                            item['chars'] > LENGTH_LIMITS[item.type] &&
                            !includes(item['id'], ids)) {
                            values.push(item);
                            ids.push(item['id']);
                        }
                        else if (item &&
                            item['chars'] <= LENGTH_LIMITS[item.type]) {
                            _this.contentSizeWarning(item['id'], item);
                        }
                        return { values: values, ids: ids };
                    }, {
                        values: [],
                        ids: /* @__PURE__ */ cMap(/* @__PURE__ */ ctxPath('id'), result),
                    }, contentItems).values;
                    return result.concat(/* @__PURE__ */ cMap(function (contentItem) {
                        var _a;
                        var item = mix((_a = {
                                index: index,
                                sended: false
                            },
                            _a['involvedTime'] = 0,
                            _a), contentItem);
                        index += 1;
                        return item;
                    }, uniqueItems));
                }, [], descriptionNodes);
            };
            return AbstractPublisherSchema;
        }()) ;
    var AbstractPublisherSchema = rawAbstractPublisherSchema;

    // так нужно делать потому что классы с наследованием не отрываются про обфускации
    // даже если они не где не используются
    var rawJSONLDPublisherSchema =  /** @class */ (function (_super) {
            __extends(JSONLDPublisherSchema, _super);
            function JSONLDPublisherSchema() {
                var _a;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = 'j';
                _this.isAuthorsInTitle = true;
                _this.dataNodesSelector = /* @__PURE__ */ arrayJoin(',', [
                    'script[type="application/ld+json"]',
                    'script[type="application/json+ld"]',
                    'script[type="ld+json"]',
                    'script[type="json+ld"]',
                ]);
                _this.fields = (_a = {},
                    _a['id'] = function id(data) {
                        var entityId = data.data['@id'];
                        var mainEntity = data.data['mainEntity'] || data.data['mainEntityOfPage'];
                        if (!entityId && mainEntity) {
                            entityId = mainEntity['@id'];
                        }
                        return entityId;
                    },
                    _a['chars'] = function chars(data) {
                        if (typeof data.data.text === 'string') {
                            return data.data['text'].length;
                        }
                        return this.getContentNode(data).innerText.length;
                    },
                    _a['authors'] = function authors(data) {
                        var result = [];
                        result = result.concat(this.extractArrayField(data.data, 'author'));
                        result = result.concat(this.extractArrayField(data.data['mainEntity'], 'author'));
                        return result.concat(this.extractArrayField(data.data['mainEntityOfPage'], 'author'));
                    },
                    _a['pageTitle'] = function pageTitle(data) {
                        var headline = data.data['headline'] || '';
                        if (data.data.alternativeHeadline) {
                            headline += " " + data.data['alternativeHeadline'];
                        }
                        if (headline === '') {
                            if (data.data['name']) {
                                headline = data.data['name'];
                            }
                            else if (data.data['itemReviewed']) {
                                headline = data.data['itemReviewed'];
                            }
                        }
                        if (data.type === PUBLISHER_QA_TYPE) {
                            if (data.data['parentItem']) {
                                headline = data.data['parentItem'].text;
                            }
                        }
                        return headline;
                    },
                    _a['updateDate'] = function updateDate(data) {
                        return data.data['dateModified'] || '';
                    },
                    _a['publicationDate'] = function publicationDate(data) {
                        return data.data['datePublished'] || '';
                    },
                    _a['pageUrlCanonical'] = function pageUrlCanonical(data) {
                        return data.data['url'];
                    },
                    _a['topics'] = function topics(data) {
                        return this.extractArrayField(data.data, 'about', [
                            'name',
                            'alternateName',
                        ]);
                    },
                    _a['rubric'] = function rubric(nodeData) {
                        var _this = this;
                        var contentNode = this.getContentNode(nodeData);
                        var searchRoot = document.body === contentNode
                            ? document.documentElement
                            : contentNode;
                        var breadcrumbs = /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(function (dataElement) {
                            var data = parse$1(_this.ctx, dataElement.innerText);
                            if (data) {
                                var graph = _this.getGraph(data);
                                if (graph) {
                                    return cReduce(function (result, graphData) {
                                        if (result) {
                                            return result;
                                        }
                                        if (graphData['@type'] ===
                                            'BreadcrumbList') {
                                            return graphData;
                                        }
                                        return result;
                                    }, null, graph);
                                }
                                if (data['@type'] === 'BreadcrumbList') {
                                    return data;
                                }
                            }
                            return null;
                        }, [nodeData.element].concat(toArray(select(this.dataNodesSelector, this.ctx, searchRoot)))));
                        if (breadcrumbs.length) {
                            breadcrumbs = breadcrumbs[0]['itemListElement'];
                            if (isArray(breadcrumbs)) {
                                return /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(function (item) {
                                    if (item['item'] &&
                                        !_this.ctx.isNaN(item['position'])) {
                                        return {
                                            name: item['item']['name'] ||
                                                item['name'],
                                            position: item['position'],
                                        };
                                    }
                                    return null;
                                }, breadcrumbs));
                            }
                        }
                        return [];
                    },
                    _a);
                return _this;
            }
            JSONLDPublisherSchema.prototype.extractArrayField = function (entity, fromField, nameFields) {
                if (nameFields === void 0) { nameFields = ['name']; }
                if (!entity || !entity[fromField]) {
                    return [];
                }
                var subEntities = isArray(entity[fromField])
                    ? entity[fromField]
                    : [entity[fromField]];
                var names = /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(function (subEntity) {
                    if (!subEntity) {
                        return null;
                    }
                    if (typeof subEntity === 'string') {
                        return subEntity;
                    }
                    return cReduce(function (result, nameField) {
                        return result || subEntity[nameField];
                    }, '', nameFields);
                }, subEntities));
                return /* @__PURE__ */ cMap(function (name) {
                    var _a;
                    return (_a = {}, _a['name'] = name, _a);
                }, names);
            };
            JSONLDPublisherSchema.prototype.getContentNode = function (data) {
                var descriptionNode = data.element;
                var id = data.data['@id'];
                // eslint-disable-next-line prefer-destructuring
                var url = data.data['url'];
                var contentNode = null;
                if (url && typeof url === 'string') {
                    contentNode = this.extractElementByHashedUrl(url);
                }
                if (!contentNode && id && typeof id === 'string') {
                    contentNode = this.extractElementByHashedUrl(id);
                }
                if (!contentNode) {
                    var parent_1 = descriptionNode.parentNode;
                    contentNode = parent_1;
                    if (closest('head', this.ctx, descriptionNode) ||
                        !parent_1 ||
                        parent_1.innerText.length === 0) {
                        contentNode = this.ctx.document.body;
                    }
                }
                return contentNode;
            };
            JSONLDPublisherSchema.prototype.extractElementByHashedUrl = function (url) {
                try {
                    var hash = parseUrl(this.ctx, url).hash;
                    if (hash) {
                        var contentNode = selectOne(this.ctx, this.ctx.document.body, hash);
                        if (contentNode) {
                            return contentNode;
                        }
                    }
                }
                catch (e) {
                    // Wrong hash format e.g.
                }
                return null;
            };
            JSONLDPublisherSchema.prototype.parseType = function (data) {
                var typesMap = this.typesMap;
                var type = data['@type'];
                return typesMap[type] || PUBLISHER_ARTICLE_TYPE;
            };
            JSONLDPublisherSchema.prototype.getContentData = function (data) {
                var _this = this;
                var element = data.element;
                if (!data.data) {
                    // eslint-disable-next-line no-param-reassign
                    data.data = parse$1(this.ctx, element.innerText);
                    if (!data.data ||
                        (!/schema\.org/.test(data.data['@context']) &&
                            !isArray(data.data))) {
                        return null;
                    }
                }
                var graph = this.getGraph(data.data);
                if (graph) {
                    return /* @__PURE__ */ cMap(function (graphItemData) {
                        if (!includes(graphItemData['@type'], _this.schemaEntities['schema.org'])) {
                            return null;
                        }
                        // eslint-disable-next-line no-param-reassign
                        graphItemData = {
                            element: element,
                            data: graphItemData,
                            type: _this.parseType(graphItemData),
                        };
                        return _super.prototype.getContentData.call(_this, graphItemData);
                    }, graph);
                }
                var question;
                if (data.data['@type'] === 'QAPage') {
                    question =
                        data.data['mainEntity'] || data.data['mainEntityOfPage'];
                    if (!question) {
                        return null;
                    }
                }
                if (data.data['@type'] === 'Question') {
                    question = data.data;
                }
                if (question) {
                    var answers = /* @__PURE__ */ flatMap(/* @__PURE__ */ bindArg(question, getPath), [
                        'acceptedAnswer',
                        'suggestedAnswer',
                    ]);
                    return /* @__PURE__ */ cMap(function (answerItemData) {
                        var _a;
                        if (!answerItemData ||
                            !includes(answerItemData['@type'], _this.schemaEntities['schema.org'])) {
                            return null;
                        }
                        // eslint-disable-next-line no-param-reassign
                        answerItemData = {
                            element: element,
                            type: _this.parseType(answerItemData),
                            data: mix((_a = {}, _a['parentItem'] = question, _a), answerItemData),
                        };
                        return _super.prototype.getContentData.call(_this, answerItemData);
                    }, answers);
                }
                if (!includes(data.data['@type'], this.schemaEntities['schema.org'])) {
                    return null;
                }
                var type = this.parseType(data.data);
                return _super.prototype.getContentData.call(this, mix(data, { type: type }));
            };
            JSONLDPublisherSchema.prototype.findContentDescriptionNodes = function () {
                return select(this.dataNodesSelector, this.ctx, this.root);
            };
            JSONLDPublisherSchema.prototype.getGraph = function (data) {
                return ((isArray(data) && data) ||
                    (data && isArray(data['@graph']) && data['@graph']));
            };
            return JSONLDPublisherSchema;
        }(AbstractPublisherSchema)) ;
    var JSONLDPublisherSchema = rawJSONLDPublisherSchema;

    var MicrodataPublisherSchema =  /** @class */ (function (_super) {
            __extends(MicrodataPublisherSchema, _super);
            function MicrodataPublisherSchema() {
                var _a;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = 's';
                _this.isAuthorsInTitle = true;
                _this.typesRegExpExec = /* @__PURE__ */ bindThisForMethod('exec', new RegExp("schema.org\\/(" + /* @__PURE__ */ arrayJoin('|', cKeys(_this.typesMap)) + ")$"));
                _this.fields = (_a = {},
                    _a['id'] = function id(data) {
                        var node = data.element;
                        var query = selectPropOne(this.ctx, node, 'identifier');
                        if (query) {
                            return getVal$1(query);
                        }
                        query = selectPropOne(this.ctx, node, 'mainEntityOfPage');
                        if (query && query.getAttribute('itemid')) {
                            return query.getAttribute('itemid');
                        }
                        return null;
                    },
                    _a['chars'] = function chars(data) {
                        var out = 0;
                        var node = data.element;
                        var props = [
                            'articleBody',
                            'reviewBody',
                            'recipeInstructions',
                            'description',
                            'text',
                        ];
                        for (var i = 0; i < props.length; i += 1) {
                            var query = selectPropOne(this.ctx, node, props[i]);
                            if (query) {
                                out = getVal$1(query).length;
                                break;
                            }
                        }
                        if (out === 0 && node.innerText) {
                            out += node.innerText.length;
                        }
                        return out;
                    },
                    _a['topics'] = function topics(data) {
                        var _this = this;
                        var node = data.element;
                        var query = selectProp(this.ctx, node, 'about');
                        return /* @__PURE__ */ cMap(function (aboutNode) {
                            var topic = {
                                name: getVal$1(aboutNode),
                            };
                            query = selectPropOne(_this.ctx, aboutNode, 'name');
                            if (query) {
                                topic.name = getVal$1(query);
                            }
                            return topic;
                        }, query);
                    },
                    _a['rubric'] = function rubric(data) {
                        var _this = this;
                        var node = data.element;
                        var selector = '[itemtype$="schema.org/BreadcrumbList"]';
                        var query = selectOne(this.ctx, node, selector);
                        if (!query) {
                            query = selectOne(this.ctx, this.root, selector);
                        }
                        if (query) {
                            return /* @__PURE__ */ cMap(function (itemNode) {
                                return {
                                    name: getVal$1(selectPropOne(_this.ctx, itemNode, 'name')),
                                    position: getVal$1(selectPropOne(_this.ctx, itemNode, 'position')),
                                };
                            }, selectProp(this.ctx, query, 'itemListElement'));
                        }
                        return [];
                    },
                    _a['updateDate'] = function updateDate(data) {
                        var node = data.element;
                        var query = selectPropOne(this.ctx, node, 'dateModified');
                        if (query) {
                            return getDate(query);
                        }
                        return '';
                    },
                    _a['publicationDate'] = function publicationDate(data) {
                        var out = '';
                        var node = data.element;
                        var query = selectPropOne(this.ctx, node, 'datePublished');
                        if (query) {
                            return getDate(query);
                        }
                        return out;
                    },
                    _a['pageUrlCanonical'] = function pageUrlCanonical(data) {
                        var out = selectProp(this.ctx, data.element, 'url');
                        if (out.length) {
                            return out[0].href ? out[0].href : getVal$1(out);
                        }
                        return null;
                    },
                    _a['pageTitle'] = function pageTitle(data) {
                        var out = '';
                        var node = data.element;
                        var query = selectPropOne(this.ctx, node, 'headline');
                        if (query) {
                            out += getVal$1(query);
                        }
                        query = selectPropOne(this.ctx, node, 'alternativeHeadline');
                        if (query) {
                            out += " " + getVal$1(query);
                        }
                        if (out === '') {
                            query = selectPropOne(this.ctx, node, 'name');
                            if (!query) {
                                query = selectPropOne(this.ctx, node, 'itemReviewed');
                            }
                            if (query) {
                                out += getVal$1(query);
                            }
                        }
                        if (data.type === PUBLISHER_QA_TYPE) {
                            var question = closest('[itemtype$="schema.org/Question"]', this.ctx, node);
                            if (question) {
                                var questionTextQuery = selectPropOne(this.ctx, question, 'text');
                                if (questionTextQuery) {
                                    out += getVal$1(questionTextQuery);
                                }
                            }
                        }
                        return out;
                    },
                    _a['authors'] = function authors(data) {
                        var _this = this;
                        var element = data.element;
                        var query = selectProp(this.ctx, element, 'author');
                        return /* @__PURE__ */ cMap(function (node) {
                            var _a;
                            var out = (_a = {}, _a['name'] = '', _a);
                            if (testAttr(node, 'itemtype', /.+schema.org\/(Person|Organization)/)) {
                                var author = selectPropOne(_this.ctx, node, 'name');
                                if (author) {
                                    out['name'] = getVal$1(author);
                                }
                            }
                            if (!out['name']) {
                                out['name'] =
                                    node.getAttribute('content') ||
                                        node.innerText ||
                                        node.getAttribute('href');
                            }
                            return out;
                        }, query);
                    },
                    _a);
                return _this;
            }
            MicrodataPublisherSchema.prototype.getType = function (node) {
                var itemtype = node.getAttribute('itemtype') || '';
                var groups = this.typesRegExpExec(itemtype);
                if (groups) {
                    var typesMap = this.typesMap;
                    var type = groups[1];
                    return typesMap[type];
                }
                return PUBLISHER_ARTICLE_TYPE;
            };
            MicrodataPublisherSchema.prototype.getContentData = function (data) {
                if (!data.element ||
                    !data.element.innerText ||
                    !data.element.innerText.length) {
                    return null;
                }
                return _super.prototype.getContentData.call(this, data);
            };
            MicrodataPublisherSchema.prototype.findContentDescriptionNodes = function () {
                var selector = /* @__PURE__ */ arrayJoin(',', /* @__PURE__ */ cMap(function (name) {
                    return "[itemtype$=\"schema.org/" + name + "\"]";
                }, this.schemaEntities['schema.org']));
                return select(selector, this.ctx, this.root);
            };
            return MicrodataPublisherSchema;
        }(AbstractPublisherSchema)) ;

    var OpengraphPublisherSchema =  /** @class */ (function (_super) {
            __extends(OpengraphPublisherSchema, _super);
            function OpengraphPublisherSchema(ctx) {
                var _a;
                var _this = _super.call(this, ctx) || this;
                _this.id = 'o';
                _this.fields = (_a = {},
                    _a['chars'] = function chars(data) {
                        var contentNode = this.getContentNode(data);
                        return contentNode.innerText
                            ? contentNode.innerText.length
                            : 0;
                    },
                    _a['authors'] = function authors(data) {
                        return this.getArrayValue(data.data['author']);
                    },
                    _a['pageTitle'] = function pageTitle(data) {
                        return this.getSimpleValue(data.data['title']) || '';
                    },
                    _a['updateDate'] = function updateDate(data) {
                        return this.getSimpleValue(data.data['modified_time']);
                    },
                    _a['publicationDate'] = function publicationDate(data) {
                        return this.getSimpleValue(data.data['published_time']);
                    },
                    _a['pageUrlCanonical'] = function pageUrlCanonical(data) {
                        return this.getSimpleValue(data.data['url']);
                    },
                    _a['rubric'] = function rubric(data) {
                        return this.getArrayValue(data.data['section']);
                    },
                    _a['topics'] = function topics(data) {
                        return this.getArrayValue(data.data['tag']);
                    },
                    _a);
                _this.entitiesFieldPrefixRegex = new RegExp("^(og:)?((" + /* @__PURE__ */ arrayJoin('|', _this.schemaEntities.opengraph) + "):)?");
                return _this;
            }
            OpengraphPublisherSchema.prototype.getArrayValue = function (value) {
                var _a;
                if (value) {
                    if (isArray(value)) {
                        return /* @__PURE__ */ cMap(function (val) {
                            var _a;
                            return _a = {}, _a['name'] = val, _a;
                        }, value);
                    }
                    return [(_a = {}, _a['name'] = value, _a)];
                }
                return [];
            };
            // This is pure defencive programming. Technically standard allows you to have array
            // as every field. And we know if standard allows, someone will try to do this.
            OpengraphPublisherSchema.prototype.getSimpleValue = function (value) {
                if (isArray(value)) {
                    if (value.length) {
                        return value[0];
                    }
                    return null;
                }
                return value;
            };
            OpengraphPublisherSchema.prototype.findContentDescriptionNodes = function () {
                var nodes = select('meta[property="og:type"]', this.ctx, this.ctx.document.body);
                return [this.ctx.document.head].concat(nodes);
            };
            OpengraphPublisherSchema.prototype.getEntityData = function (nodeData) {
                var _this = this;
                var element = nodeData.element;
                var data = {};
                var contentNode = this.getContentNode(nodeData);
                var descriptionNodes = select('meta[property]', this.ctx, element === this.ctx.document.head ? element : contentNode);
                if (descriptionNodes.length) {
                    cForEach(function (node) {
                        try {
                            var sameLevelChild = node.parentNode === contentNode ||
                                node.parentNode === _this.ctx.document.head;
                            if (sameLevelChild) {
                                var property = node
                                    .getAttribute('property')
                                    .replace(_this.entitiesFieldPrefixRegex, '');
                                var value = getVal$1(node);
                                if (data[property]) {
                                    if (isArray(data[property])) {
                                        data[property].push(value);
                                    }
                                    else {
                                        data[property] = [data[property], value];
                                    }
                                }
                                else {
                                    data[property] = value;
                                }
                            }
                        }
                        catch (e) {
                            reportError(_this.ctx, 'og.ed', e);
                        }
                    }, descriptionNodes);
                }
                else {
                    return null;
                }
                if (!includes(data.type, this.schemaEntities.opengraph)) {
                    return null;
                }
                return mix(nodeData, { data: data });
            };
            OpengraphPublisherSchema.prototype.getContentNode = function (_a) {
                var element = _a.element;
                var document = this.ctx.document;
                if (element === document.head) {
                    return document.body;
                }
                return element.parentNode;
            };
            OpengraphPublisherSchema.prototype.getContentData = function (baseData) {
                var data = this.getEntityData(baseData);
                if (!data) {
                    return null;
                }
                return _super.prototype.getContentData.call(this, data);
            };
            return OpengraphPublisherSchema;
        }(AbstractPublisherSchema)) ;

    var ITEM_VISIBILITY_VISIBILITY_THREASHOLD = 0.9;
    var ITEM_SCREEN_SPACE_VISIBILITY_THREASHOLD = 0.1;
    var ITERATOR_INTERVAL = 1000;
    var MAX_INACTIVE = 5000;
    var PUBLISHER_FUNCTION_KEY_PREFIX = 'pai';
    var SYNTHETIC_PAGE_EVENT_KEY = 'page';
    var ACTIVE_EVENTS = [
        'resize',
        'scroll',
        'mousemove',
        'mousedown',
        'click',
        'windowfocus',
        'keydown',
        'orientationchange',
        'change',
        'focus',
        'touchmove',
        'touchstart',
    ];
    var PublisherProvider = /** @class */ (function () {
        function PublisherProvider(ctx, publisherSchema, buffer, counterKey) {
            this.isStopped = false;
            this.meta = {};
            this.scroll = {
                x: 0,
                y: 0,
            };
            this.lastStamp = 0;
            this.involvedTime = 0;
            this.previousSerializedMeta = '';
            this.newSerializedMeta = '';
            this.contentItems = [];
            this.timeoutId = 0;
            this.viewportSize = { h: 0, w: 0 };
            this.buffer = buffer;
            this.windowEventCallback = bind(this.windowEventCallback, this);
            this.getMetaToSend = bind(this.getMetaToSend, this);
            this.onBufferSend = bind(this.onBufferSend, this);
            this.ctx = ctx;
            this.counterKey = counterKey;
            this.schema = publisherSchema;
            this.keyList = "" + PUBLISHER_FUNCTION_KEY_PREFIX + publisherSchema.id;
            this.getScroll();
            this.eventSubscriber = cEvent(this.ctx);
            this.time = TimeOne(this.ctx);
            this.updateViewportSize();
            this.globalConfig = getGlobalStorage(this.ctx);
        }
        PublisherProvider.prototype.start = function () {
            var _this = this;
            if (this.isStopped) {
                return;
            }
            this.buffer.on(AGGREGATE_EVENT_KEY, this.getMetaToSend);
            this.buffer.on(SEND_EVENT_KEY, this.onBufferSend);
            this.subscribeToEvents();
            var fnList = this.globalConfig.getVal(this.keyList, []);
            var isFirstPublisher = !fnList.length;
            fnList.push(bind(this.iterationCallback, this));
            this.globalConfig.setSafe(this.keyList, fnList);
            // There can be only one timeout
            // clientRect => reflow
            if (isFirstPublisher) {
                this.runIterativeCallbacks();
            }
            // Получаем в данный момент активный артикл айди через visibility
            this.globalConfig.setSafe(PUBLISHER_FUNCTION_KEY_PREFIX, function () {
                if (_this.contentItems.length) {
                    return cReduce(function (carry, item) {
                        if ((carry.screenSpace || 0) <= (item.screenSpace || 0)) {
                            return item;
                        }
                        return carry;
                    }, _this.contentItems[0], _this.contentItems.slice(1)).id;
                }
                return 0;
            });
            this.windowEventCallback({
                type: SYNTHETIC_PAGE_EVENT_KEY,
                target: this.ctx,
            });
        };
        PublisherProvider.prototype.stop = function () {
            this.buffer.off(SEND_EVENT_KEY, this.onBufferSend);
            this.buffer.off(AGGREGATE_EVENT_KEY, this.getMetaToSend);
            this.unsubscribeFromEvents();
            this.isStopped = true;
        };
        PublisherProvider.prototype.isRemovedFromDoc = function (element) {
            return (closest('html', this.ctx, element) !==
                this.ctx.document.documentElement);
        };
        PublisherProvider.prototype.runIterativeCallbacks = function () {
            var _this = this;
            errorLogger(this.ctx, "p.ic" + this.schema.id, function () {
                if (_this.isStopped) {
                    return;
                }
                var fnList = _this.globalConfig.getVal(_this.keyList);
                var contentItems = _this.schema.findContent();
                cForEach(function (callback) {
                    var clonedContentItems = /* @__PURE__ */ cMap(function (item) {
                        return mix({}, item);
                    }, contentItems);
                    if (isFunction(callback)) {
                        callback(clonedContentItems);
                    }
                }, fnList);
                _this.timeoutId = setDefer(_this.ctx, bind(_this.runIterativeCallbacks, _this), ITERATOR_INTERVAL, 'p');
            })();
        };
        PublisherProvider.prototype.iterationCallback = function (items) {
            if (this.isStopped) {
                return;
            }
            this.updateContentItems(items);
            this.updateMeta();
            this.sendInfo();
        };
        PublisherProvider.prototype.windowEventCallback = function (event) {
            var _this = this;
            errorLogger(this.ctx, "p.ec." + this.schema.id, function () {
                var type;
                var target;
                try {
                    (type = event.type, target = event.target);
                }
                catch (exp) {
                    return;
                }
                var isInit = type === SYNTHETIC_PAGE_EVENT_KEY;
                if (type === 'scroll' || isInit) {
                    var windowLike = [
                        _this.ctx,
                        _this.ctx.document,
                        _this.ctx.document.documentElement,
                        getBody(_this.ctx),
                    ];
                    if (includes(target, windowLike)) {
                        _this.getScroll();
                    }
                }
                if (type === 'resize' || isInit) {
                    _this.updateViewportSize();
                }
                var currentTime = _this.time(getMs);
                var delta = Math.min(currentTime - _this.lastStamp, MAX_INACTIVE);
                _this.involvedTime += Math.round(delta);
                _this.lastStamp = currentTime;
                if (!(_this.meta && _this.scroll && _this.viewportSize)) {
                    return;
                }
                var viewportVolume = _this.viewportSize.h * _this.viewportSize.w;
                _this.contentItems = /* @__PURE__ */ cMap(function (contentItem) {
                    var item = mix({}, contentItem);
                    var metaItem = _this.meta[item.id];
                    var elementRect = getBoundingClientRect(contentItem.contentElement);
                    if (!metaItem ||
                        _this.isRemovedFromDoc(item.element) ||
                        !elementRect) {
                        return item;
                    }
                    var math = _this.ctx.Math;
                    var maxScrolled = math.max((_this.scroll.y + _this.viewportSize.h - metaItem.y) /
                        metaItem.height, 0);
                    var articleVolume = elementRect.height * elementRect.width;
                    var clientVolume = _this.calculateVisibleVolume(elementRect);
                    item.screenSpace = clientVolume / viewportVolume;
                    item.visibility = clientVolume / articleVolume;
                    if (item.visibility >= ITEM_VISIBILITY_VISIBILITY_THREASHOLD ||
                        item.screenSpace >= ITEM_SCREEN_SPACE_VISIBILITY_THREASHOLD) {
                        item['involvedTime'] += delta;
                    }
                    item['maxScrolled'] = math.round(maxScrolled * 10000) / 10000;
                    return item;
                }, _this.contentItems);
                {
                    dispatchDebuggerEvent(_this.ctx, {
                        name: 'publishers',
                        data: {
                            counterKey: _this.counterKey,
                            involvedTime: _this.involvedTime,
                            contentItems: _this.contentItems,
                        },
                    });
                }
            })();
        };
        PublisherProvider.prototype.calculateVisibleVolume = function (clientRect) {
            var top = clientRect.top, bottom = clientRect.bottom, right = clientRect.right, left = clientRect.left;
            var _a = this.viewportSize, w = _a.w, h = _a.h;
            var math = this.ctx.Math;
            var visibleWidth = math.min(math.max(right, 0), w) - math.min(math.max(left, 0), w);
            var visibleHeight = math.min(math.max(bottom, 0), h) - math.min(math.max(top, 0), h);
            return visibleHeight * visibleWidth;
        };
        PublisherProvider.prototype.updateContentItems = function (items) {
            var foundItemIds = /* @__PURE__ */ cMap(function (item) {
                return item.id;
            }, this.contentItems);
            this.contentItems = this.contentItems.concat(/* @__PURE__ */ cFilter(function (item) {
                return !includes(item.id, foundItemIds);
            }, items));
        };
        PublisherProvider.prototype.updateViewportSize = function () {
            var _a = getVisualViewportSize(this.ctx) || getViewportSize(this.ctx), w = _a[0], h = _a[1];
            this.viewportSize = {
                w: w,
                h: h,
            };
        };
        PublisherProvider.prototype.updateMeta = function () {
            var _this = this;
            errorLogger(this.ctx, "p.um." + this.schema.id, function () {
                var itemsToDelete = [];
                _this.getScroll();
                _this.meta = cReduce(function (rawNewMeta, rawTtem) {
                    var _a;
                    var newMeta = rawNewMeta;
                    var item = rawTtem;
                    if (!_this.isRemovedFromDoc(item.element)) {
                        var result = (_a = {},
                            _a['id'] = item.id,
                            _a['involvedTime'] = Math.max(item['involvedTime'], 0),
                            _a['maxScrolled'] = item['maxScrolled'] || 0,
                            _a['chars'] = item.update
                                ? item.update('chars') || 0
                                : 0,
                            _a);
                        if (item.contentElement) {
                            var rect = getBoundingClientRect(item.contentElement);
                            if (rect) {
                                result['x'] = Math.max(Math.round(rect.left) + _this.scroll.x, 0);
                                result['y'] = Math.max(Math.round(rect.top) + _this.scroll.y, 0);
                                result['width'] = Math.round(rect.width);
                                result['height'] = Math.round(rect.height);
                            }
                        }
                        newMeta[item.id] = result;
                    }
                    else {
                        itemsToDelete.push(item);
                        delete newMeta[item.id];
                    }
                    return newMeta;
                }, {}, _this.contentItems);
                cForEach(function (item) {
                    var itemIndex = indexOfWin(_this.ctx)(item, _this.contentItems);
                    _this.contentItems.splice(itemIndex, 1);
                }, itemsToDelete);
            })();
        };
        PublisherProvider.prototype.onBufferSend = function () {
            this.previousSerializedMeta = this.newSerializedMeta;
        };
        PublisherProvider.prototype.getMetaToSend = function () {
            var _a, _b;
            var newMeta = /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(this.meta, getPath), cKeys(this.meta));
            if (newMeta.length) {
                this.newSerializedMeta = stringify$1(this.ctx, newMeta);
                if (this.previousSerializedMeta !== this.newSerializedMeta) {
                    return _a = {},
                        _a['type'] = 'publishersHeader',
                        _a['data'] = (_b = {},
                            _b['articleMeta'] = newMeta || [],
                            _b['involvedTime'] = this.involvedTime,
                            _b),
                        _a;
                }
            }
            return null;
        };
        PublisherProvider.prototype.sendInfo = function () {
            var _this = this;
            if (!this.contentItems.length) {
                return;
            }
            var articles = /* @__PURE__ */ cFilter(function (item) { return !item.sended; }, this.contentItems);
            cForEach(function (item) {
                var _a;
                var itemToSend = mix({}, item);
                delete itemToSend.contentElement;
                delete itemToSend.sended;
                delete itemToSend.index;
                delete itemToSend['involvedTime'];
                delete itemToSend.visibility;
                delete itemToSend.screenSpace;
                delete itemToSend['maxScrolled'];
                delete itemToSend.update;
                delete itemToSend.element;
                delete itemToSend.type;
                _this.buffer.push((_a = {},
                    _a['type'] = 'articleInfo',
                    _a['stamp'] = itemToSend['stamp'],
                    _a['data'] = itemToSend,
                    _a));
                // eslint-disable-next-line no-param-reassign
                item.sended = true;
            }, articles);
            if (articles.length) {
                consoleLog(this.ctx, 'Publisher content info found: ', articles);
            }
        };
        PublisherProvider.prototype.subscribeToEvents = function () {
            this.eventSubscriber.on(this.ctx, ACTIVE_EVENTS, this.windowEventCallback);
        };
        PublisherProvider.prototype.unsubscribeFromEvents = function () {
            this.eventSubscriber.un(this.ctx, ACTIVE_EVENTS, this.windowEventCallback);
        };
        PublisherProvider.prototype.getScroll = function () {
            this.scroll = {
                x: this.ctx.pageXOffset ||
                    getPath(this.ctx, 'document.documentElement.scrollLeft') ||
                    0,
                y: this.ctx.pageYOffset ||
                    getPath(this.ctx, 'document.documentElement.scrollLeft') ||
                    0,
            };
        };
        return PublisherProvider;
    }());

    var hasPublisherData = function (data) {
        {
            return !!/* @__PURE__ */ cFind(function (event) {
                return includes(event['type'], ['articleInfo', 'publishersHeader']);
            }, data);
        }
    };

    var JSONLD_KEY = 'json_ld';
    var MICKRO_ALT_KEY = 'schema';
    var MICKRO_KEY = 'microdata';
    var OPEN_KEY = 'opengraph';
    var schemas = {};
    if ( JSONLDPublisherSchema) {
        schemas[JSONLD_KEY] = JSONLDPublisherSchema;
    }
    if ( MicrodataPublisherSchema) {
        schemas[MICKRO_ALT_KEY] = MicrodataPublisherSchema;
        schemas[MICKRO_KEY] = MicrodataPublisherSchema;
    }
    if ( OpengraphPublisherSchema) {
        schemas[OPEN_KEY] = OpengraphPublisherSchema;
    }
    var usePublisherProviderRaw = function (ctx, counterOptions) {
        if (!/* @__PURE__ */ isNativeFunction('querySelectorAll', ctx.document.querySelectorAll)) {
            return PolyPromise.resolve();
        }
        var serialiserList = [
            new JSONBufferSerializer(ctx),
        ];
        {
            serialiserList.unshift(new ProtoBufferSerializer(ctx));
        }
        var sender = getSender(ctx, PUBLISHER_DATA_PROVIDER, counterOptions);
        var selectedSerialiser = /* @__PURE__ */ cFind(function (serialiser) {
            return serialiser.isEnabled();
        }, serialiserList);
        var brInfo = browserInfo();
        var ls = counterLocalStorage(ctx, counterOptions.id);
        var previousArticleId = ls.getVal(PUBLISHER_FUNCTION_KEY_PREFIX);
        if (previousArticleId) {
            ls.delVal(PUBLISHER_FUNCTION_KEY_PREFIX);
            brInfo.setVal(PUBLISHER_FUNCTION_KEY_PREFIX, previousArticleId);
        }
        var senderOpt = {
            urlParams: {},
            brInfo: brInfo,
            isBinData: !(selectedSerialiser instanceof JSONBufferSerializer),
        };
        var senderFunction = function (data, originalData, partNumber) {
            sender(mix({}, senderOpt, {
                rBody: data,
                containsPublisherData: hasPublisherData(originalData),
            }), counterOptions, partNumber)["catch"](errorLogger(ctx, 's.ww.p'));
        };
        return getCounterSettings(ctx, counterOptions, errorLogger(ctx, 'ps.s', function (settings) {
            var schemaKey = getPath(settings, 'settings.publisher.schema');
            if (!schemaKey) {
                return;
            }
            schemaKey = isTurboPage(counterOptions) ? 'microdata' : schemaKey;
            var SchemaClass = schemas[schemaKey];
            if (SchemaClass && selectedSerialiser) {
                var counterKey = getCounterKey(counterOptions);
                var buffer = Visor2Buffer.getBuffer(counterKey, BUFFER_NAME_EVENTS, senderFunction, selectedSerialiser, ctx);
                var publisherSchema = new SchemaClass(ctx);
                var publisher = new PublisherProvider(ctx, publisherSchema, buffer, counterKey);
                publisher.start();
                consoleLog(ctx, "Publishers analytics schema \"" + schemaKey + "\"");
            }
        }));
    };
    var usePublisherProvider = /* @__PURE__ */ ctxErrorLogger('p.p', usePublisherProviderRaw);

    /**
     * Наличие на странице объявлений Директа
     *
     * @param {CounterTypeInterface} counterType - тип счётчика, 0 - обычный, 1 - РСЯ
     * @return {boolean}
     */
    function yaDirectExists(ctx, counterType) {
        return isRsyaCounter(counterType) && ctx.Ya && ctx.Ya.Direct;
    }

    var GLOBAL_STORAGE_KEY = 'dsjf';
    var createStateManager = function () {
        var state = {};
        return cont(state);
    };
    var closureStorageRaw = function (ctx) {
        var globalStorage = getGlobalStorage(ctx);
        var stateManager = globalStorage.getVal(GLOBAL_STORAGE_KEY) ||
            createStateManager();
        globalStorage.setSafe(GLOBAL_STORAGE_KEY, stateManager);
        return stateManager;
    };
    var getVal$2 = /* @__PURE__ */ curry(function (key, state) {
        return state[key] || {};
    });
    var setVal = /* @__PURE__ */ curry(function (key, val, state) {
        var prevValue = getVal$2(key, state);
        state[key] = mix(prevValue, val);
    });
    var deleteVal = /* @__PURE__ */ curry(function (key, state) {
        delete state[key];
    });
    var closureStorage = closureStorageRaw;

    var OLD_CODE_KEY = 'ya_cid';
    var GLOBAL_COUNTERS_METHOD_NAME = 'getCounters';
    var COUNTER_STATE_ID = 'id';
    var COUNTER_STATE_TYPE = 'type';
    var COUNTER_STATE_CLICKMAP = 'clickmap';
    var COUNTER_STATE_WEBVISOR = 'webvisor';
    var COUNTER_STATE_TRACK_HASH = 'trackHash';
    var COUNTER_STATE_OLD_CODE = 'oldCode';
    var COUNTER_STATE_NOT_BOUNCE = 'accurateTrackBounce';
    var COUNTER_STATE_TRACK_LINKS = 'trackLinks';
    var METHOD_NAME_COUNTERS = 'counters';

    var counterStateSetter = function (ctx, counterKey) {
        return /* @__PURE__ */ pipe(setVal(counterKey), closureStorage(ctx));
    };
    var counterStateGetter = function (ctx, counterKey) {
        return /* @__PURE__ */ pipe(getVal$2(counterKey), closureStorage(ctx));
    };
    var createCountersGetter = /* @__PURE__ */ ctxErrorLogger('c.c.cc', function (ctx) {
        var globalConfig = getGlobalStorage(ctx);
        var iterateKeys = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg(ctx, counterStateGetter), call, function (counterState) {
            var _a;
            // делаем shallow copy объекта:
            return mix({}, counterState, (_a = {},
                _a[COUNTER_STATE_OLD_CODE] = !!ctx[OLD_CODE_KEY],
                _a[COUNTER_STATE_CLICKMAP] = counterState[COUNTER_STATE_CLICKMAP] &&
                    !!counterState[COUNTER_STATE_CLICKMAP],
                _a));
        });
        return errorLogger(ctx, 'g.c.cc', /* @__PURE__ */ pipe(bind(globalConfig.getVal, globalConfig, COUNTERS_GLOBAL_KEY, {}), cKeys, /* @__PURE__ */ ctxMap(iterateKeys)));
    });
    var getCountersProvider = /* @__PURE__ */ ctxErrorLogger('gt.c.rs', function (ctx, counterOptions) {
        var _a;
        var counterKey = getCounterKey(counterOptions);
        var setCounterState = counterStateSetter(ctx, counterKey);
        var id = counterOptions.id, counterType = counterOptions.counterType, clickmap = counterOptions.clickmap, webvisor = counterOptions.webvisor, trackHash = counterOptions.trackHash;
        var destruct = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg(counterKey, deleteVal), closureStorage(ctx));
        setCounterState((_a = {},
            _a[COUNTER_STATE_ID] = id,
            _a[COUNTER_STATE_TYPE] = +counterType,
            _a[COUNTER_STATE_CLICKMAP] = clickmap,
            _a[COUNTER_STATE_WEBVISOR] = !!webvisor,
            _a[COUNTER_STATE_TRACK_HASH] = !!trackHash,
            _a));
        return destruct;
    });

    var HASH_CHECKS_INTERVAL = 200;
    var timerOnHashChange;
    function getHashValue(ctx) {
        var hashValue = getLocation(ctx).hash.split('#')[1];
        return hashValue ? hashValue.split('?')[0] : '';
    }
    function onOldBrowserHashChange(ctx, handler) {
        var lastHash = getHashValue(ctx);
        function watchHash() {
            var hash = getHashValue(ctx);
            if (hash !== lastHash) {
                handler();
                lastHash = hash;
            }
        }
        timerOnHashChange = setDeferInterval(ctx, watchHash, HASH_CHECKS_INTERVAL, 't.h');
        return bind(clearDeferInterval, null, ctx, timerOnHashChange);
    }
    function onHashChange(ctx, counterOptions, sender) {
        var _a, _b;
        var counterType = counterOptions.counterType, ut = counterOptions.ut, forceUrl = counterOptions.forceUrl;
        var globalConfig = getGlobalStorage(ctx);
        var brInfo = browserInfo((_a = {},
            _a[WH_BR_KEY] = '1',
            _a[PAGE_VIEW_BR_KEY] = '1',
            _a));
        if (yaDirectExists(ctx, counterType)) {
            brInfo.setVal(AD_BR_KEY, '1');
        }
        if (ut) {
            brInfo.setVal(NOINDEX_BR_KEY, '1');
        }
        var lastReferrer = globalConfig.getVal(LAST_REFERRER_KEY);
        var href = getLocation(ctx).href;
        var senderOpt = {
            urlParams: (_b = {},
                _b[WATCH_URL_PARAM] = forceUrl || href,
                _b[WATCH_REFERER_PARAM] = lastReferrer,
                _b),
            brInfo: brInfo,
        };
        sender(senderOpt, counterOptions)["catch"](errorLogger(ctx, 'g.s'));
        globalConfig.setVal(LAST_REFERRER_KEY, href);
    }
    var useTrackHash = /* @__PURE__ */ ctxErrorLogger('th.e', function (ctx, counterOptions) {
        var sender = getSender(ctx, TRACK_HASH_PROVIDER, counterOptions);
        var setCounterState = counterStateSetter(ctx, getCounterKey(counterOptions));
        var enabled = false;
        var handleHashChange = errorLogger(ctx, 'h.h.ch', bind(onHashChange, null, ctx, counterOptions, sender));
        var unsetTrackHash = noop;
        function setTrackHash() {
            if (!enabled) {
                if (has(ctx, 'onhashchange')) {
                    unsetTrackHash = cEvent(ctx).on(ctx, ['hashchange'], handleHashChange);
                }
                else {
                    unsetTrackHash = onOldBrowserHashChange(ctx, handleHashChange);
                }
            }
        }
        var toggleTrackHash = function (enable) {
            var _a;
            if (enable) {
                setTrackHash();
            }
            else {
                unsetTrackHash();
            }
            enabled = Boolean(enable);
            setCounterState((_a = {},
                _a[COUNTER_STATE_TRACK_HASH] = enabled,
                _a));
        };
        if (counterOptions.trackHash) {
            setTrackHash();
            enabled = true;
        }
        var trackHandler = errorLogger(ctx, 'tr.hs.h', toggleTrackHash);
        return {
            trackHandler: trackHandler,
            unsubscribe: unsetTrackHash,
        };
    });

    var RESOURCES = {
        1882689622: 1,
        2318205080: 1,
        3115871109: 1,
        3604875100: 1,
        339366994: 1,
        2890452365: 1,
        849340123: 1,
        173872646: 1,
        2343947156: 1,
        655012937: 1,
        3724710748: 1,
        3364370932: 1,
        1996539654: 1,
        2065498185: 1,
        823651274: 1,
        12282461: 1,
        1555719328: 1,
        1417229093: 1,
        138396985: 1,
    };

    var getSelfIds = /* @__PURE__ */ memo(function () {
        var prefixList = [
            'mc.yandex.ru',
            'mc.yandex.com',
            'cdn.jsdelivr.net/npm/yandex-metrica-watch',
        ];
        return cReduce(function (result, prefix) {
            var scriptId = fnv32a(prefix + "/" + resourceId);
            if (!RESOURCES[scriptId]) {
                result[scriptId] = 1;
            }
            return result;
        }, {}, prefixList);
    });

    var ALL_SCRIPTS_SAMPLING = 0.002;
    var THIRD_PARTY_SCRIPT_SAMPLING = 0.002;
    var ERROR_SCOPE = 'r.tim.ng2';
    var ARTIFICIAL_KEY = '1';
    var PAGE_VIEW_KEY = '1';
    function resourcesTimings(ctx, counterOptions, allScriptsSampling, thirdPartyScriptsSampling) {
        var _a, _b, _c, _d, _e;
        if (allScriptsSampling === void 0) { allScriptsSampling = 1; }
        if (thirdPartyScriptsSampling === void 0) { thirdPartyScriptsSampling = 1; }
        var performance = ctx.performance;
        if (!performance || !isFunction(performance.getEntriesByType)) {
            return;
        }
        var notSendPreprodParams = Math.random() > allScriptsSampling;
        var notSendParams = Math.random() > thirdPartyScriptsSampling;
        if (notSendPreprodParams && notSendParams) {
            return;
        }
        var entries = ctx.performance.getEntriesByType('resource');
        var params = {};
        var preprodParams = {};
        var sessionParams = {};
        var selfIds = getSelfIds(ctx);
        for (var i = 0; i < entries.length; i += 1) {
            var entry = entries[i];
            var resource = entry.name.replace(/^https?:\/\//, '').split('?')[0];
            var chsum = fnv32a(resource);
            var baseResourceData = (_a = {},
                _a['dns'] = Math.round(entry.domainLookupEnd - entry.domainLookupStart),
                _a['tcp'] = Math.round(entry.connectEnd - entry.connectStart),
                _a['duration'] = Math.round(entry.duration),
                _a['response'] = Math.round(entry.responseEnd - entry.requestStart),
                _a);
            if (entry.initiatorType === 'script' && !notSendPreprodParams) {
                preprodParams[resource] = mix(baseResourceData, (_b = {},
                    _b['name'] = entry.name,
                    _b['decodedBodySize'] = entry.decodedBodySize,
                    _b));
            }
            var isNeedToLog = RESOURCES[chsum] || selfIds[chsum];
            if (isNeedToLog && !params[resource] && !notSendParams) {
                params[resource] = mix(baseResourceData, (_c = {},
                    _c['pages'] = ctx.location.href,
                    _c));
            }
        }
        if (cKeys(params).length) {
            sessionParams['timings8'] = params;
        }
        if (cKeys(preprodParams).length) {
            sessionParams['scripts'] = preprodParams;
        }
        if (cKeys(sessionParams).length) {
            var sender = getSender(ctx, RESOURCES_TIMINGS_PROVIDER, counterOptions);
            sender({
                brInfo: browserInfo((_d = {},
                    _d[ARTIFICIAL_BR_KEY] = ARTIFICIAL_KEY,
                    _d[PAGE_VIEW_BR_KEY] = PAGE_VIEW_KEY,
                    _d)),
                rBody: stringify$1(ctx, sessionParams) || undefined,
                urlParams: (_e = {},
                    _e['page-url'] = ctx.location && "" + ctx.location.href,
                    _e),
            }, {
                id: config.RESOURCES_TIMINGS_COUNTER,
                counterType: DEFAULT_COUNTER_TYPE,
            })["catch"](errorLogger(ctx, ERROR_SCOPE));
        }
    }

    var userTimeDeferId = 1;
    var executedOrCleared = {};
    var userDeferIdOnDeferIdMap = {};
    function clearUserTimeDefer(ctx, id) {
        if (isIE(ctx)) {
            return clearDefer(ctx, id);
        }
        executedOrCleared[id] = true;
        return clearDefer(ctx, userDeferIdOnDeferIdMap[id] || 0);
    }
    // Это скорректированный таймаут который перезапускает таймер если всякие блюры были
    // Потому что таймауты работают фигово, если окно рефокусится и блюрится
    // Причём если был блюр, пользовательским временем считается только время после
    function setUserTimeDefer(ctx, callback, time) {
        // eslint-disable-next-line no-use-before-define
        var destroyTimer = /* @__PURE__ */ bindArg(false, setEvents);
        // В разных версиях IE есть сложности с точным определением состояний с focus и blur окна
        if (isIE(ctx)) {
            return {
                id: setDefer(ctx, callback, time, 'u.t.d'),
                destroyTimer: destroyTimer,
            };
        }
        var timer = TimeOne(ctx);
        var wasBlur = false;
        var wasAction = false;
        var isBlured = true;
        var addedTime = 0;
        var startTime = timer(getMs);
        var eventsEmmitter = cEvent(ctx);
        var id = userTimeDeferId;
        userTimeDeferId += 1;
        userDeferIdOnDeferIdMap[id] = 0;
        function onAction() {
            if (!wasAction) {
                wasBlur = true;
                isBlured = false;
                wasAction = true;
                // eslint-disable-next-line no-use-before-define
                onCommon();
            }
        }
        function calcTime() {
            if (isBlured) {
                return addedTime;
            }
            return addedTime + timer(getMs) - startTime;
        }
        function executeCallback() {
            executedOrCleared[id] = true;
            // eslint-disable-next-line no-use-before-define
            setEvents(false);
            callback();
        }
        function onCommon() {
            clearDefer(ctx, userDeferIdOnDeferIdMap[id]);
            if (executedOrCleared[id]) {
                // eslint-disable-next-line no-use-before-define
                setEvents(false);
                return;
            }
            var delta = Math.max(0, time - calcTime());
            if (delta) {
                userDeferIdOnDeferIdMap[id] = setDefer(ctx, executeCallback, delta, 'u.t.d.c');
            }
            else {
                executeCallback();
            }
        }
        function onBlur() {
            wasAction = true;
            wasBlur = true;
            isBlured = true;
            addedTime += timer(getMs) - startTime;
            startTime = timer(getMs);
            onCommon();
        }
        function onFocus() {
            if (!wasBlur && !wasAction) {
                addedTime = 0;
            }
            startTime = timer(getMs);
            wasAction = true;
            wasBlur = true;
            isBlured = false;
            onCommon();
        }
        var events = [
            [ctx, ['blur'], onBlur],
            [ctx, ['focus'], onFocus],
            [ctx.document, ['click', 'mousemove', 'keydown', 'scroll'], onAction],
        ];
        function setEvents(add) {
            cForEach(function (_a) {
                var context = _a[0], eventName = _a[1], cb = _a[2];
                if (add) {
                    eventsEmmitter.on(context, eventName, cb);
                }
                else {
                    eventsEmmitter.un(context, eventName, cb);
                }
            }, events);
        }
        setEvents(true);
        onCommon();
        return { id: id, destroyTimer: destroyTimer };
    }

    var useNotBounceProviderRaw = function (ctx, counterOpt) {
        var _a;
        var defaultTimeout = DEFAULT_NOT_BOUNCE_TIMEOUT;
        var sender = getSender(ctx, NOT_BOUNCE_HIT_PROVIDER, counterOpt);
        var counterKey = getCounterKey(counterOpt);
        var counterLS = counterLocalStorage(ctx, counterOpt.id);
        var getTrackBounce = /* @__PURE__ */ bindArg(counterStateGetter(ctx, counterKey), /* @__PURE__ */ pipe(call, /* @__PURE__ */ ctxPath(COUNTER_STATE_NOT_BOUNCE)));
        var setTrackBounce = /* @__PURE__ */ bindArg((_a = {}, _a[COUNTER_STATE_NOT_BOUNCE] = true, _a), counterStateSetter(ctx, counterKey));
        var timer = TimeOne(ctx);
        var startTime = timer(getMs);
        var notBounceHitSent = false;
        var notBounceTimeoutId = 0;
        var firstHitClientOffset = 0;
        var destroyNotBounceTimer;
        getCounterSettings(ctx, counterOpt, function (options) {
            firstHitClientOffset = options.firstHitClientTime - startTime;
        });
        var makeNotBounceHit = function (force) {
            return function (options) {
                var _a, _b, _c;
                if (options === void 0) { options = (_a = {},
                    _a['ctx'] = {},
                    _a['callback'] = noop,
                    _a); }
                if (force || (!notBounceHitSent && !counterLS.isBroken)) {
                    notBounceHitSent = true;
                    setTrackBounce();
                    if (notBounceTimeoutId) {
                        clearUserTimeDefer(ctx, notBounceTimeoutId);
                    }
                    var notBounceClientStamp = timer(getMs);
                    var previousNotBounceClientStamp = parseInt(counterLS.getVal(LAST_NOT_BOUNCE_LS_KEY), 10) || 0;
                    var newVisitStarted = previousNotBounceClientStamp <
                        notBounceClientStamp - APPROXIMATE_VISIT_DURATION;
                    var isInControlGroup = Math.random() < 0.1;
                    counterLS.setVal(LAST_NOT_BOUNCE_LS_KEY, notBounceClientStamp);
                    var brInfo = browserInfo((_b = {},
                        _b[NOT_BOUNCE_BR_KEY] = '1',
                        _b[NOT_BOUNCE_CLIENT_TIME_BR_KEY] = firstHitClientOffset,
                        _b[ARTIFICIAL_BR_KEY] = '1',
                        _b));
                    var artificialState = getArtificialState(counterOpt);
                    var senderOpt = {
                        urlParams: (_c = {},
                            _c[WATCH_URL_PARAM] = artificialState.url || getLocation(ctx).href,
                            _c),
                        brInfo: brInfo,
                    };
                    var warn = getConsole(ctx).warn;
                    if (!options['callback'] && options['ctx']) {
                        warn('"callback" argument missing');
                    }
                    if (force ||
                        newVisitStarted ||
                        isInControlGroup ||
                        !isSameDomainInUrls(ctx.location.href, ctx.document.referrer)) {
                        var result = sender(senderOpt, counterOpt).then(function () {
                            {
                                if (!force) {
                                    resourcesTimings(ctx, counterOpt, ALL_SCRIPTS_SAMPLING, counterOpt.id === config.METRIKA_COUNTER
                                        ? 1
                                        : THIRD_PARTY_SCRIPT_SAMPLING);
                                }
                            }
                        });
                        return finallyCallUserCallback(ctx, 'l.o.l', result, options['callback'], options['ctx']);
                    }
                }
                return null;
            };
        };
        var accurateTrackBounce = function (time) {
            if (getTrackBounce()) {
                return;
            }
            var notBounceTimeout = typeof time === 'number' ? time : defaultTimeout;
            var userTimeDeferObj = setUserTimeDefer(ctx, makeNotBounceHit(false), notBounceTimeout);
            notBounceTimeoutId = userTimeDeferObj.id;
            destroyNotBounceTimer = userTimeDeferObj.destroyTimer;
            setTrackBounce();
        };
        if (counterOpt.accurateTrackBounce) {
            accurateTrackBounce(counterOpt.accurateTrackBounce);
        }
        return {
            notBounce: makeNotBounceHit(true),
            accurateTrackBounce: accurateTrackBounce,
            destroy: destroyNotBounceTimer,
        };
    };
    var useNotBounceProvider = /* @__PURE__ */ ctxErrorLogger('nb.p', useNotBounceProviderRaw);

    var CALLBACK_ARRAY_NAME = [
        "yandex_metrika_callback" + argOptions['callbackPostfix'],
        "yandex_metrika_callbacks" + argOptions['callbackPostfix'],
    ];
    var callbackInit = /* @__PURE__ */ ctxErrorLogger('cb.i', function (ctx) {
        var one = CALLBACK_ARRAY_NAME[0], many = CALLBACK_ARRAY_NAME[1];
        var anyCtx = ctx;
        if (isFunction(anyCtx[one])) {
            anyCtx[one]();
        }
        if (typeof anyCtx[many] === 'object') {
            cForEach(function (fn, i) {
                anyCtx[many][i] = null;
                callUserCallback(ctx, fn);
            }, anyCtx[many]);
        }
        cForEach(function (callbackName) {
            try {
                delete anyCtx[callbackName];
            }
            catch (e) {
                anyCtx[callbackName] = undefined;
            }
        }, CALLBACK_ARRAY_NAME);
    });

    var getGoalLocation = function (ctx, counterOptions, target, schemePrefix) {
        var _a;
        var _b = getLocation(ctx), hostname = _b.hostname, href = _b.href;
        var url = getArtificialState(counterOptions).url;
        if (url) {
            (_a = parseUrl(ctx, url), hostname = _a.hostname, href = _a.href);
        }
        return [schemePrefix + "://" + hostname + "/" + target, href || ''];
    };
    var VALIDATE_MAP = {
        goal: /* @__PURE__ */ bindThisForMethodTest(/[/&=?#]/),
    };
    var useGoal = /* @__PURE__ */ ctxErrorLogger('go.in', function (ctx, counterOptions, schemePrefix, callback) {
        if (schemePrefix === void 0) { schemePrefix = DEFAULT_SCHEME_PREFIX; }
        return function (goalName, rawParams, rawUserCallback, rawfnCtx) {
            var _a, _b;
            if (!goalName ||
                (VALIDATE_MAP[schemePrefix] &&
                    VALIDATE_MAP[schemePrefix](goalName))) {
                return null;
            }
            var params = rawParams;
            var fnCtx = rawfnCtx;
            var userCallback = rawUserCallback || noop;
            if (isFunction(rawParams)) {
                userCallback = rawParams;
                params = undefined;
                fnCtx = rawUserCallback;
            }
            var logGoals = getLoggerFn(ctx, counterOptions, "Reach goal. Counter: " + counterOptions.id + ". Goal id: " + goalName, params);
            // предполагается что в случае схемы, отличной от goal, вызывающий код сам напишет лог
            var shouldLog = schemePrefix === DEFAULT_SCHEME_PREFIX;
            var sender = getSender(ctx, GOAL_PROVIDER, counterOptions);
            var _c = getGoalLocation(ctx, counterOptions, goalName, schemePrefix), url = _c[0], ref = _c[1];
            var result = sender({
                params: params,
                brInfo: browserInfo((_a = {},
                    _a[ARTIFICIAL_BR_KEY] = 1,
                    _a)),
                urlParams: (_b = {},
                    _b[WATCH_URL_PARAM] = url,
                    _b[WATCH_REFERER_PARAM] = ref,
                    _b),
            }, counterOptions).then(function () {
                if (shouldLog) {
                    logGoals();
                }
                {
                    dispatchDebuggerEvent(ctx, {
                        name: 'event',
                        data: {
                            schema: schemePrefix,
                            name: goalName,
                            counterKey: getCounterKey(counterOptions),
                        },
                    });
                }
                if (callback) {
                    callback();
                }
            });
            return finallyCallUserCallback(ctx, 'g.s', result, userCallback, fnCtx);
        };
    });

    var setShouldTrack = function (setVal, rawParams) {
        var _a, _b;
        var overrides = (_a = {},
            _a['string'] = true,
            _a['object'] = true,
            _a['boolean'] = rawParams,
            _a);
        var shouldTrack = overrides[typeof rawParams] || false; // По-умолчанию трекинг ссылок отключен;
        setVal((_b = {},
            _b[COUNTER_STATE_TRACK_LINKS] = shouldTrack,
            _b));
    };
    var sendClickLink = function (ctx, counterOptions, options, callback) {
        var _a;
        var brInfo = browserInfo();
        if (options.isDownload) {
            brInfo.setVal(IS_DONWLOAD_BR_KEY, '1');
        }
        if (options.isExternalLink) {
            brInfo.setVal(IS_EXTERNAL_LINK_BR_KEY, '1');
        }
        var senderInfo = {
            brInfo: brInfo,
            title: options.title,
            noIndex: Boolean(options.noIndex),
            params: options.params,
            urlParams: (_a = {},
                _a[WATCH_URL_PARAM] = options.url,
                _a[WATCH_REFERER_PARAM] = counterOptions.forceUrl || getLocation(ctx).href,
                _a),
        };
        var prefix = 'Link';
        if (options.isDownload) {
            prefix = options.isExternalLink ? 'Ext link - File' : 'File';
        }
        else if (options.isExternalLink) {
            prefix = 'Ext link';
        }
        var result = options
            .sender(senderInfo, counterOptions)
            .then(callback || noop)
            .then(getLoggerFn(ctx, counterOptions, prefix + ". Counter " + counterOptions.id + ". Url: " + options.url, options));
        return finallyCallUserCallback(ctx, 'cl.p.s', result, options.callback || noop, options.ctx);
    };
    var handleClickEventRaw = function (options, event) {
        if (!options.trackLinksEnabled()) {
            return;
        }
        var target = getTargetLink(event);
        if (!target) {
            return;
        }
        if (hasClass('ym-disable-tracklink', target)) {
            return;
        }
        var ctx = options.ctx, globalStorage = options.globalStorage, incomingCounterLocalStorage = options.counterLocalStorage, counterOptions = options.counterOptions, hitId = options.hitId, sender = options.sender, fileExtensions = options.fileExtensions;
        var forceUrl = counterOptions.forceUrl;
        var targetHref = target.href;
        var title = textFromLink(target);
        title = targetHref === title ? '' : title;
        if (hasClass('ym-external-link', target)) {
            sendClickLink(ctx, counterOptions, {
                url: targetHref,
                isExternalLink: true,
                title: title,
                sender: sender,
            });
            return;
        }
        var domain = forceUrl
            ? parseUrl(ctx, forceUrl).hostname
            : getLocation(ctx).hostname;
        var userFileRegex = RegExp("\\.(" + /* @__PURE__ */ arrayJoin('|', /* @__PURE__ */ cMap(escapeForRegExp, fileExtensions)) + ")$", 'i');
        var file = target.protocol + "//" + target.hostname + target.pathname;
        /*
            Поддерживаются ссылки вида:
            http://example.ru/dir/music.mp3
            http://example.ru/dir/music.mp3?item1=1234567
            http://example.ru/dir/?item=1234567&file=music.mp3
            */
        var isDownload = REG_DOWNLOAD.test(file) ||
            REG_DOWNLOAD.test(targetHref) ||
            userFileRegex.test(targetHref) ||
            userFileRegex.test(file);
        if (isSameDomain(domain, target.hostname)) {
            // Внутренняя ссылка
            if (isDownload) {
                // Загрузка файла
                sendClickLink(ctx, counterOptions, {
                    url: targetHref,
                    isDownload: true,
                    title: title,
                    sender: sender,
                });
            }
            else {
                var pai = globalStorage.getVal(PUBLISHER_FUNCTION_KEY_PREFIX, noop)();
                var publisherArticleHit = pai && pai + "-" + hitId;
                if (publisherArticleHit) {
                    incomingCounterLocalStorage.setVal(PUBLISHER_FUNCTION_KEY_PREFIX, publisherArticleHit);
                }
                if (title) {
                    incomingCounterLocalStorage.setVal(INTERNAL_LINK_STORAGE_KEY, trimText(title).slice(0, MAX_LEN_INTERNAL_LINK));
                }
            }
        }
        else {
            // Внешняя ссылка
            if (targetHref && BAD_PROTOCOL_RE.test(targetHref)) {
                return;
            }
            sendClickLink(ctx, counterOptions, {
                url: targetHref,
                noIndex: true,
                isExternalLink: true,
                isDownload: isDownload,
                title: title,
                sender: sender,
            });
        }
    };
    var addFileExtensionFn = curry2(function (fileExtensions, ext) {
        if (isString(ext)) {
            fileExtensions.push(ext);
        }
        else {
            cForEach(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('push', fileExtensions)), ext);
        }
    });
    var useClicksProviderRaw = function (ctx, counterOptions) {
        var sender = getSender(ctx, LINK_CLICK_HIT_PROVIDER, counterOptions);
        var fileExtensions = [];
        var ctxConsole = getConsole(ctx);
        var counterKey = getCounterKey(counterOptions);
        var trackLinks = errorLogger(ctx, 's.s.tr', /* @__PURE__ */ bindArg(counterStateSetter(ctx, counterKey), setShouldTrack));
        var clickHandlerOptions = {
            ctx: ctx,
            counterOptions: counterOptions,
            fileExtensions: fileExtensions,
            sender: sender,
            globalStorage: getGlobalStorage(ctx),
            counterLocalStorage: counterLocalStorage(ctx, counterOptions.id),
            hitId: getHid(ctx),
            trackLinksEnabled: /* @__PURE__ */ bindArg(counterStateGetter(ctx, counterKey), /* @__PURE__ */ pipe(call, /* @__PURE__ */ ctxPath(COUNTER_STATE_TRACK_LINKS))),
        };
        var handleClickEvent = errorLogger(ctx, 'cl.p.c', /* @__PURE__ */ bindArg(clickHandlerOptions, handleClickEventRaw));
        var eventHandler = cEvent(ctx);
        var destroy = eventHandler.on(ctx, ['click'], handleClickEvent);
        var counterMethod = function (isDownload, noIndex, url, options) {
            if (options === void 0) { options = {}; }
            if (url) {
                sendClickLink(ctx, counterOptions, {
                    url: url,
                    isExternalLink: true,
                    isDownload: isDownload,
                    noIndex: noIndex,
                    sender: sender,
                    ctx: options['ctx'],
                    callback: options['callback'],
                    title: options['title'],
                    params: options['params'],
                });
            }
            else {
                ctxConsole.warn('Empty link');
            }
        };
        if (counterOptions.trackLinks) {
            trackLinks(counterOptions.trackLinks);
        }
        var file = errorLogger(ctx, 'file.clc', bindArgs([true, false], counterMethod));
        var extLink = errorLogger(ctx, 'e.l.l.clc', bindArgs([false, true], counterMethod));
        var addFileExtension = errorLogger(ctx, 'add.f.e.clc', addFileExtensionFn(fileExtensions));
        return {
            // todo разобраться с типами
            file: file,
            extLink: extLink,
            addFileExtension: addFileExtension,
            trackLinks: trackLinks,
            destroy: destroy,
        };
    };
    var useClicksProvider = /* @__PURE__ */ ctxErrorLogger('cl.p', useClicksProviderRaw);

    var USER_STORAGE_RESOURCE = 'user_storage_set';
    var USER_STORAGE_KEY_PARAM = 'key';
    var USER_STORAGE_VALUE_PARAM = 'value';

    var getUserDataStorage = function (ctx, counterSettingsBK, counterOptions, skipApiSave) {
        var params = counterSettingsBK || {};
        var sender = getSender(ctx, USER_DATA_STORAGE_PROVIDER, counterOptions);
        var ls = globalLocalStorage(ctx);
        return {
            getVal: function (name, defVal) {
                return !isUndefined(params[name])
                    ? params[name]
                    : ls.getVal(name, defVal);
            },
            setVal: function (name, val) {
                var _a;
                var strVal = "" + val;
                params[name] = strVal;
                ls.setVal(name, strVal);
                return skipApiSave
                    ? PolyPromise.resolve()
                    : sender({
                        urlParams: (_a = {},
                            _a[USER_STORAGE_KEY_PARAM] = name,
                            _a[USER_STORAGE_VALUE_PARAM] = strVal,
                            _a),
                    }, [config.cProtocol + "//" + host + "/" + USER_STORAGE_RESOURCE], {})["catch"](errorLogger(ctx, 'u.d.s.s'));
            },
        };
    };

    var IN_PROGRESS_FLAG_NAME = 'dSync';
    var HTTP_SYNC_GET_FLAG = '_http_sync';
    var IP_DOMAIN = "'(-$&$&$'";
    var HTTPS_DOMAIN = 'oWdZ[nc[jh_YW$Yec';
    var HTTP_ONLY_PORTS = [
        [
            [HTTPS_DOMAIN, 30102, 0],
            [HTTPS_DOMAIN, 29009, 0],
        ],
    ];
    var FULL_PORTS = [
        [
            [IP_DOMAIN, 30102, 0],
            [IP_DOMAIN, 29009, 0],
        ],
        [
            [HTTPS_DOMAIN, 30103, 1],
            [HTTPS_DOMAIN, 29010, 1],
        ],
    ];
    var HTTPS_ONLY_PORTS = [
        [[HTTPS_DOMAIN, 30103, 1]],
        [[HTTPS_DOMAIN, 29010, 1]],
    ];
    var dataToSendToDevice = {
        urlParams: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' },
    };
    var TIMEOUT = {
        success: 60,
        error: 15,
    };
    var COUNTER_TO_SAVE = {
        id: 42822899,
        counterType: '0',
    };
    var DEVICE_SYNC_TIME_NAME = 'ds';
    var UID_SYNC_TIME_NAME = 'us';

    var _a$b;
    var CSP_DOMAIN = 'https://ymetrica1.com/watch/3/1';
    var PATHS = (_a$b = {},
        _a$b[DEVICESYNC_PROVIDER] = 'p',
        _a$b[MOBILE_UID_SYNC_PROVIDER] = 'i',
        _a$b);
    // тут мемоизируем на Window так как csp общие на всю страницу
    var checkCSP = globalMemoWin('csp', function (ctx, counterOptions) {
        var sender = getSender(ctx, DEVICESYNC_PROVIDER, counterOptions);
        return sender({}, [CSP_DOMAIN]);
    });
    var requestLocalHosts = function (ctx, hosts, syncOptions) {
        var provider = syncOptions.provider, data = syncOptions.data, counterOptions = syncOptions.counterOptions;
        var sender = getSender(ctx, provider, counterOptions);
        var sendData = mix({}, dataToSendToDevice);
        if (data) {
            mix(sendData.urlParams, data);
        }
        return taskRace(/* @__PURE__ */ cMap(function (chain) {
            return fromPromise(sender(dataToSendToDevice, /* @__PURE__ */ cMap(function (_a) {
                var host = _a[0], port = _a[1], isHttps = _a[2];
                var unpackHost = /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cMap(function (char) {
                    var charNo = char.charCodeAt(0);
                    return String.fromCharCode(charNo + 10);
                }, host.split('')));
                return "http" + (isHttps ? 's' : '') + "://" + unpackHost + ":" + port + "/" + PATHS[provider];
            }, chain), {
                withCreds: false,
                returnRawResponse: true,
            }).then(function (transportInfo) {
                var result = mix({}, transportInfo, {
                    host: chain[transportInfo.urlIndex],
                });
                return result;
            }));
        }, hosts));
    };
    var save = function (ctx, data, port, time) {
        var _a, _b;
        var counterOptions = COUNTER_TO_SAVE;
        var brInfo = browserInfo((_a = {},
            _a[DEVICE_ID_BR_KEY] = data,
            _a[DEVICE_ID_TIME_BR_KEY] = time,
            _a[DEVICE_PORT_BR_KEY] = port,
            _a));
        var urlParams = (_b = {},
            _b[WATCH_URL_PARAM] = getLocation(ctx).href,
            _b);
        var sender = getSender(ctx, DEVICESYNC_SAVE_PROVIDER, counterOptions);
        return sender({ brInfo: brInfo, urlParams: urlParams }, counterOptions);
    };
    var isCSPEnabled = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath(COUNTER_SETTINGS_SETTINGS_KEY + "." + COUNTER_SETTINGS_PARAMS_PCS), /* @__PURE__ */ equal('1'));
    var isEnabled = function (ctx, timer, userDataStorage, counterSettings, syncOptions) {
        var lastTimeKey = syncOptions.lastTimeKey, counterOptions = syncOptions.counterOptions;
        // Сначала проверяем техничекие условия
        return new PolyPromise(function (resolve, reject) {
            var lastTime = userDataStorage.getVal(lastTimeKey, 0);
            var parsedLastTime = parseInt("" + lastTime, 10);
            var lastTimeDelta = timer(getMin) - parsedLastTime;
            if (lastTimeDelta <= TIMEOUT.success) {
                {
                    consoleLog(ctx, "deviceSync was already performed " + lastTimeDelta + " minutes ago");
                    consoleLog(ctx, "next sync will be performed after " + (TIMEOUT.success - lastTimeDelta) + " minutes");
                }
                return reject();
            }
            // Дальше магическая бизнес логика
            if (isDeviceSyncDomain(ctx)) {
                {
                    consoleLog(ctx, 'yandex domain for forced deviceSync');
                }
                return resolve(undefined);
            }
            if (isCSPEnabled(counterSettings)) {
                {
                    consoleLog(ctx, "deviceSync can't be performed due to CSP (cookie check)");
                }
                return reject();
            }
            {
                resolve(checkCSP(ctx, counterOptions)["catch"](function (error) {
                    consoleLog(ctx, "deviceSync can't be performed due to CSP (request check)");
                    throw error;
                }));
            }
            return resolve(checkCSP(ctx, counterOptions));
        });
    };
    var makeRequest = function (ctx, hosts, userDataStorage, timer, syncOptions) {
        var _a = syncOptions.successCallback, successCallback = _a === void 0 ? noop : _a, lastTimeKey = syncOptions.lastTimeKey;
        var startTime = timer(getMs);
        {
            var hostsList = /* @__PURE__ */ cMap(function (hostSet) {
                return /* @__PURE__ */ arrayJoin(', ', /* @__PURE__ */ cMap(function (_a) {
                    var host = _a[0], port = _a[1];
                    return host + ":" + port;
                }, hostSet));
            }, hosts);
            consoleLog(ctx, "attempting deviceSync on the:\n" + /* @__PURE__ */ arrayJoin('\n', hostsList));
        }
        return requestLocalHosts(ctx, hosts, syncOptions)(taskFork(function (errors) {
            var hasHasNotKnownError = false;
            cForEach(function (error) {
                {
                    if (!isKnownError(error)) {
                        hasHasNotKnownError = true;
                        consoleLog(ctx, 'deviceSync failed due to error', error);
                    }
                }
                reportError(ctx, lastTimeKey + ".s", error);
            }, errors);
            var timeout = hasHasNotKnownError
                ? timer(getMin) - TIMEOUT.success + TIMEOUT.error
                : timer(getMin);
            userDataStorage.setVal(lastTimeKey, timeout);
        }, function (result) {
            userDataStorage.setVal(lastTimeKey, timer(getMin));
            successCallback(result, timer, startTime);
        }));
    };
    var getHosts = function (ctx) {
        var isAndroidOS = isAndroid(ctx);
        var isIOS = /* @__PURE__ */ pipe(getPlatform, /* @__PURE__ */ ctxIncludes(['iPhone', 'iPad']))(ctx);
        if (isAndroidOS) {
            {
                if (ctx.location.href.indexOf(HTTP_SYNC_GET_FLAG + "=1") !== -1) {
                    return HTTP_ONLY_PORTS;
                }
            }
            return FULL_PORTS;
        }
        if (isIOS) {
            return HTTPS_ONLY_PORTS;
        }
        {
            consoleLog(ctx, 'deviceSync is not performed because this is not an android/ios device');
        }
        return [];
    };
    var sync = function (ctx, counterSettings, syncOptions) {
        var counterOptions = syncOptions.counterOptions, skipApiSave = syncOptions.skipApiSave;
        var timer = TimeOne(ctx);
        var userDataStorage = getUserDataStorage(ctx, counterSettings[COUNTER_SETTINGS_USER_DATA_KEY], counterOptions, skipApiSave);
        var hosts = getHosts(ctx);
        return hosts.length
            ? isEnabled(ctx, timer, userDataStorage, counterSettings, syncOptions).then(function () {
                return makeRequest(ctx, hosts, userDataStorage, timer, syncOptions);
            }, noop)
            : PolyPromise.resolve();
    };

    /* eslint-disable consistent-return */
    var useRawDeviceSyncProvider = function (ctx, counterOptions) {
        return getCounterSettings(ctx, counterOptions, function (counterSettings) {
            var globalStorage = getGlobalStorage(ctx);
            var inProggres = globalStorage.getVal(IN_PROGRESS_FLAG_NAME, false);
            if (inProggres) {
                {
                    consoleLog(ctx, 'deviceSync is  already in progress');
                }
                return;
            }
            globalStorage.setVal(IN_PROGRESS_FLAG_NAME, true);
            return sync(ctx, counterSettings, {
                counterOptions: counterOptions,
                provider: DEVICESYNC_PROVIDER,
                lastTimeKey: DEVICE_SYNC_TIME_NAME,
                successCallback: function (result, timer, startTime) {
                    var data = result.responseData, host = result.host;
                    // по смыслу это проверка на работу в оффлайне
                    if (getPath(data, 'settings')) {
                        {
                            consoleLog(ctx, 'deviceSync offline mode detected');
                        }
                        return throwFunction(createKnownError('ds.e'));
                    }
                    var endTime = timer(getMs) - startTime;
                    return save(ctx, data, host[1], endTime)["catch"](errorLogger(ctx, 'ds.rs'));
                },
            });
        });
    };
    var useDeviceSyncProvider = /* @__PURE__ */ ctxErrorLogger(DEVICESYNC_PROVIDER, useRawDeviceSyncProvider);

    var jsHeap = /* @__PURE__ */ memo(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('performance.memory.jsHeapSizeLimit'), /* @__PURE__ */ bindThisForMethod('concat', '')));

    var UNKNOWN_FLAG = 'unknown';
    var doNotTrack = function (ctx) {
        var nav = getPath(ctx, 'navigator') || {};
        return nav['doNotTrack'] || nav['msDoNotTrack'] || UNKNOWN_FLAG;
    };

    var types = [
        'video/ogg',
        'video/mp4',
        'video/webm',
        'audio/x-aiff',
        'audio/x-m4a',
        'audio/mpeg',
        'audio/aac',
        'audio/wav',
        'audio/ogg',
        'audio/mp4',
    ];
    var codec = [
        'theora',
        'vorbis',
        '1',
        'avc1.4D401E',
        'mp4a.40.2',
        'vp8.0',
        'mp4a.40.5',
    ];
    var methodName = 'canPlayType';
    var checkVideoCanPlayType = function (ctx) {
        var createElement = getElemCreateFunction(ctx);
        if (!createElement) {
            return '';
        }
        var videoTag = createElement('video');
        try {
            var getterFunction = /* @__PURE__ */ bindThisForMethod(methodName, videoTag);
            var typesWithCodec = /* @__PURE__ */ flatMap(function (type) {
                return /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('concat', type + "; codecs=")), codec);
            }, types);
            return /* @__PURE__ */ cMap(getterFunction, [].concat(types, typesWithCodec));
        }
        catch (e) {
            return methodName;
        }
    };

    var _a$c;
    var mapValueToNumber = (_a$c = {},
        _a$c['maybe'] = 2,
        _a$c['probably'] = 1,
        _a$c);

    var QUERY_LIST = [
        'prefers-reduced-motion',
        'prefers-reduced-transparency',
        'prefers-color-scheme: dark',
        'prefers-color-scheme: light',
        'pointer: none',
        'pointer: coarse',
        'pointer: fine',
        'any-pointer: none',
        'any-pointer: coarse',
        'any-pointer: fine',
        'scan: interlace',
        'scan: progressive',
        'color-gamut: srgb',
        'color-gamut: p3',
        'color-gamut: rec2020',
        'update: fast',
        'update: slow',
        'update: none',
        'grid: 0',
        'grid: 2',
        'hover: hover',
        'inverted-colors: inverted',
        'inverted-colors: none',
    ];
    var matchMedia = function (ctx) {
        var mediaMethod = getPath(ctx, 'matchMedia');
        if (!mediaMethod || !/* @__PURE__ */ isNativeFunction('matchMedia', mediaMethod)) {
            return '';
        }
        var matchMediaCtx = /* @__PURE__ */ bindThisForMethod('matchMedia', ctx);
        return cReduce(function (result, query) {
            result[query] = matchMediaCtx("(" + query + ")");
            return result;
        }, {}, QUERY_LIST);
    };

    var availScreenFields = ['availWidth', 'availHeight', 'availTop'];
    var getAvailScreen = function (ctx) {
        var screenCtx = getPath(ctx, 'screen') || {};
        return /* @__PURE__ */ arrayJoin('x', /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(screenCtx, getPath), availScreenFields));
    };

    var callWithCanvas = function (factorCheckFunction) {
        return function (ctx) {
            var createElement = getElemCreateFunction(ctx);
            var canvasCtx = null;
            if (!createElement) {
                return '';
            }
            var canvas = createElement('canvas');
            var canvasCtxList = [];
            var _a = factorCheckFunction(), factorFn = _a.factorFn, ctxType = _a.ctxType;
            try {
                var getContext = /* @__PURE__ */ bindThisForMethod('getContext', canvas);
                canvasCtxList = /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, getContext), ctxType);
            }
            catch (e) {
                return '';
            }
            canvasCtx = /* @__PURE__ */ cFind(firstArg, canvasCtxList);
            if (canvasCtx) {
                return factorFn(ctx, { canvas: canvas, canvasCtx: canvasCtx });
            }
            return '';
        };
    };

    // toDataURL() not available in privacy proxy mode
    function toDataUrl(canvas) {
        try {
            return canvas.toDataURL();
        }
        catch (e) {
            return '';
        }
    }

    var VALID_CONTEXT_TYPE = ['webgl', 'experimental-webgl'];
    var fa2s = function (fa, gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        // eslint-disable-next-line no-bitwise
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        return "[" + getPath(fa, '0') + ", " + getPath(fa, '1') + "]";
    };
    var maxAnisotropy = function (gl) {
        var anisotropy;
        var ext = gl.getExtension('EXT_texture_filter_anisotropic') ||
            gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
            gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
        if (ext) {
            anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            if (anisotropy === 0) {
                anisotropy = 2;
            }
        }
        return ext ? anisotropy : null;
    };
    var VERTICES = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0];
    var getProperty = function (property, obj) {
        return getPath(obj, property) || 'n';
    };
    var getSupportedExtensions = function (gl) {
        try {
            var nativeSupportedExtensions = /* @__PURE__ */ toNativeOrFalse(gl.getSupportedExtensions, 'getSupportedExtensions');
            if (!nativeSupportedExtensions) {
                return [];
            }
            return gl.getSupportedExtensions() || [];
        }
        catch (e) {
            return [];
        }
    };
    var checkCanvasCtx = function (ctx, canvasCtx) {
        if (!isFunction(ctx.Float32Array)) {
            return false;
        }
        var canvas = getPath(canvasCtx, 'canvas');
        if (!canvas) {
            return false;
        }
        if (!/* @__PURE__ */ isNativeFunction('toDataUrl', canvas.toDataURL)) {
            return false;
        }
        try {
            canvasCtx.createBuffer();
        }
        catch (e) {
            return false;
        }
        return true;
    };
    var CANVAS_CREATION_FAILURE = 'ccf';
    var throwCanvasCreationError = /* @__PURE__ */ bindArg(createKnownError(CANVAS_CREATION_FAILURE), throwFunction);
    var getCanvasCreationPipeFunctions = function (ctx, gl) {
        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
        return [
            function () {
                var vertexPosBuffer = gl.createBuffer();
                if (!vertexPosBuffer ||
                    !gl.getParameter ||
                    !/* @__PURE__ */ isNativeFunction('getParameter', gl.getParameter)) {
                    throwCanvasCreationError();
                }
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
                var vertices = new ctx.Float32Array(VERTICES);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
                vertexPosBuffer.itemSize = 3;
                vertexPosBuffer.numItems = 3;
                var program = gl.createProgram();
                var vshader = gl.createShader(gl.VERTEX_SHADER);
                if (!program || !vshader) {
                    throwCanvasCreationError();
                }
                return {
                    program: program,
                    vshader: vshader,
                    vertexPosBuffer: vertexPosBuffer,
                };
            },
            function (cCtx) {
                var program = cCtx.program, vshader = cCtx.vshader;
                gl.shaderSource(vshader, vShaderTemplate);
                gl.compileShader(vshader);
                gl.attachShader(program, vshader);
                var fshader = gl.createShader(gl.FRAGMENT_SHADER);
                if (!fshader) {
                    throwCanvasCreationError();
                }
                return mix(cCtx, { fshader: fshader });
            },
            function (cCtx) {
                var program = cCtx.program, fshader = cCtx.fshader;
                gl.shaderSource(fshader, fShaderTemplate);
                gl.compileShader(fshader);
                gl.attachShader(program, fshader);
                gl.linkProgram(program);
                gl.useProgram(program);
                return cCtx;
            },
            function (cCtx) {
                var program = cCtx.program, vertexPosBuffer = cCtx.vertexPosBuffer;
                program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex');
                program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset');
                gl.enableVertexAttribArray(program.vertexPosArray);
                gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
                gl.uniform2f(program.offsetUniform, 1, 1);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
                return gl.canvas;
            },
        ];
    };
    // там тслинт не понимает, что throwFunction бросает эксепшен
    // Так что тут есть консистент ретёрн
    // eslint-disable-next-line consistent-return
    var getAnyCanvas = function (ctx, gl) {
        var callbacks = getCanvasCreationPipeFunctions(ctx, gl);
        try {
            return bindArgs(callbacks, pipe)()();
        }
        catch (e) {
            if (e.message === CANVAS_CREATION_FAILURE) {
                return null;
            }
            throwFunction(e);
        }
    };
    var getBase64Canvas = function (ctx, gl) {
        var anyCanvas = getAnyCanvas(ctx, gl);
        if (!isNull(anyCanvas)) {
            return toDataUrl(anyCanvas);
        }
        return '';
    };
    var getWebGLParams = function (gl) {
        // Might return null, if the context is lost.
        var contextAttributes = gl.getContextAttributes();
        return {
            extensions: /* @__PURE__ */ arrayJoin(';', getSupportedExtensions(gl)),
            'webgl aliased line width range': fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE), gl),
            'webgl aliased point size range': fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE), gl),
            'webgl alpha bits': gl.getParameter(gl.ALPHA_BITS),
            'webgl antialiasing': contextAttributes && contextAttributes.antialias ? 'yes' : 'no',
            'webgl blue bits': gl.getParameter(gl.BLUE_BITS),
            'webgl depth bits': gl.getParameter(gl.DEPTH_BITS),
            'webgl green bits': gl.getParameter(gl.GREEN_BITS),
            'webgl max anisotropy': maxAnisotropy(gl),
            'webgl max combined texture image units': gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            'webgl max cube map texture size': gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
            'webgl max fragment uniform vectors': gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
            'webgl max render buffer size': gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
            'webgl max texture image units': gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
            'webgl max texture size': gl.getParameter(gl.MAX_TEXTURE_SIZE),
            'webgl max varying vectors': gl.getParameter(gl.MAX_VARYING_VECTORS),
            'webgl max vertex attribs': gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
            'webgl max vertex texture image units': gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            'webgl max vertex uniform vectors': gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
            'webgl max viewport dims': fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS), gl),
            'webgl red bits': gl.getParameter(gl.RED_BITS),
            'webgl renderer': gl.getParameter(gl.RENDERER),
            'webgl shading language version': gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
            'webgl stencil bits': gl.getParameter(gl.STENCIL_BITS),
            'webgl vendor': gl.getParameter(gl.VENDOR),
            'webgl version': gl.getParameter(gl.VERSION),
        };
    };
    var getWebGLExtensionParams = function (gl) {
        try {
            // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
            var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (extensionDebugRendererInfo) {
                var extensionParams = {
                    'webgl unmasked vendor': gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),
                    'webgl unmasked renderer': gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
                };
                return extensionParams;
            }
        }
        catch (e) { }
        return {};
    };
    var getWebGLProperty = function (gl) {
        var glFloatVertexHigh = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT);
        var glFloatVertexMedium = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
        var glFloatVertexLow = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT);
        var glFloatFragmentHigh = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
        var glFloatFragmentMedium = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT);
        var glFloatFragmentLow = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT);
        var glIntVertexHigh = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT);
        var glIntVertexMedium = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT);
        var glIntVertexLow = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT);
        var glIntFragmentHigh = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT);
        var glIntFragmentMedium = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT);
        var glIntFragmentLow = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT);
        var PRECISION = 'precision';
        var RANGE_MIN = 'rangeMin';
        var RANGE_MAX = 'rangeMax';
        return cReduce(function (values, _a) {
            var paramsName = _a[0], WebGlFormat = _a[1];
            values[paramsName + " " + PRECISION] = getProperty(PRECISION, WebGlFormat);
            values[paramsName + " " + PRECISION + " " + RANGE_MIN] = getProperty(RANGE_MIN, WebGlFormat);
            values[paramsName + " " + PRECISION + " " + RANGE_MAX] = getProperty(RANGE_MAX, WebGlFormat);
            return values;
        }, {}, [
            ['webgl vertex shader high float', glFloatVertexHigh],
            ['webgl vertex shader medium', glFloatVertexMedium],
            ['webgl vertex shader low float', glFloatVertexLow],
            ['webgl fragment shader high float', glFloatFragmentHigh],
            ['webgl fragment shader medium float', glFloatFragmentMedium],
            ['webgl fragment shader low float', glFloatFragmentLow],
            ['webgl vertex shader high int', glIntVertexHigh],
            ['webgl vertex shader medium int', glIntVertexMedium],
            ['webgl vertex shader low int', glIntVertexLow],
            ['webgl fragment shader high int', glIntFragmentHigh],
            ['webgl fragment shader medium int', glIntFragmentMedium],
            ['webgl fragment shader low int precision', glIntFragmentLow],
        ]);
    };

    var mimeTypeCb = function (m) {
        /* @__PURE__ */ return arrayJoin(',', [m.description, m.suffixes, m.type]);
    };
    var iPluginCb = function (p) {
        try {
            var mimeTypeArr = len(p) ? p : [];
            return /* @__PURE__ */ arrayJoin(',', [
                p.name,
                p.description,
                /* @__PURE__ */ pipe(toArray, /* @__PURE__ */ ctxFilter(Boolean), /* @__PURE__ */ ctxMap(mimeTypeCb), /* @__PURE__ */ ctxJoin(','))(mimeTypeArr),
            ]);
        }
        catch (_a) {
            return '';
        }
    };
    var plugins = function (ctx) {
        var navigatorPlugins = getPath(ctx, 'navigator.plugins') || [];
        if (!len(navigatorPlugins)) {
            return '';
        }
        return /* @__PURE__ */ pipe(toArray, /* @__PURE__ */ ctxFilter(Boolean), currSort(function (a, b) { return (a.name > b.name ? 1 : 2); }), /* @__PURE__ */ ctxMap(iPluginCb))(navigatorPlugins);
    };

    var navigatorFields = [
        'appName',
        'vendor',
        'deviceMemory',
        'hardwareConcurrency',
        'maxTouchPoints',
        'appVersion',
        'productSub',
        'appCodeName',
        'vendorSub',
    ];
    var getNavigatorGamepads = function (ctx) {
        try {
            var getGamepadsGetter = getPath(ctx, 'navigator.getGamepads');
            var nativeGetGamepads = /* @__PURE__ */ toNativeOrFalse(getGamepadsGetter, 'getGamepads');
            return (nativeGetGamepads && ctx.navigator.getGamepads()) || [];
        }
        catch (e) {
            return [];
        }
    };
    var getNavigatorFields = function (ctx, fields) {
        if (fields === void 0) { fields = navigatorFields; }
        var navigatorCtx = getPath(ctx, 'navigator') || {};
        return /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(navigatorCtx, getPath), fields);
    };

    var navigatorFactor = function (ctx) {
        var fields = /* @__PURE__ */ arrayJoin('x', getNavigatorFields(ctx));
        var gamepads = getNavigatorGamepads(ctx);
        return fields + "x" + len(gamepads);
    };

    var INFORMER_METHOD_NAME = 'informer';
    var INFORMER_PROPERTY_NAME = '_informer';
    function rawOnClick(ctx, event) {
        var _a;
        var target = getTarget(event);
        var constructorName = config.constructorName;
        if (target && hasClass('ym-advanced-informer', target)) {
            var lang = target.getAttribute('data-lang');
            var counterId = parseInt(target.getAttribute('data-cid') || '', 10);
            if (counterId || counterId === 0) {
                getPath(ctx, yandexNamespace + "." + constructorName + "." + INFORMER_METHOD_NAME)((_a = {},
                    _a['i'] = target,
                    _a['id'] = counterId,
                    _a['lang'] = lang,
                    _a));
                preventDefault(event);
            }
        }
    }
    var createInformer = function (ctx) {
        var onClickCb = errorLogger(ctx, 'i.clch', rawOnClick);
        cEvent(ctx).on(ctx.document, ['click'], bind(onClickCb, null, ctx), {
            passive: false,
        });
        return function (prefs) {
            var constructorName = config.constructorName, protocol = config.cProtocol;
            var counterContructor = ctx[yandexNamespace][constructorName];
            var calledBefore = !!counterContructor[INFORMER_PROPERTY_NAME];
            var domain = 'informer.yandex.ru';
            counterContructor[INFORMER_PROPERTY_NAME] = mix({ domain: domain }, prefs);
            // TODO: начать использовать globalConfig вместо counterContructor[INFORMER_PROPERTY_NAME] когда перевезем
            //  informer.js ( https://informer.yandex.ru/metrika/informer.js ) на новый код счетчика:
            // const globalConfig = getGlobalStorage(ctx);
            // const calledBefore = !!globalConfig.getVal(INFORMER);
            // globalConfig.setVal(INFORMER, { ...prefs, domain, });
            if (!calledBefore) {
                loadScript(ctx, {
                    src: protocol + "//" + domain + "/metrika/informer.js",
                });
            }
        };
    };

    var getPosition = function (ctx, evt) {
        var rootElement = getRootElement(ctx);
        var documentScroll = getDocumentScroll(ctx);
        return {
            x: evt.pageX ||
                evt.clientX + documentScroll.x - (rootElement.clientLeft || 0) ||
                0,
            y: evt.pageY ||
                evt.clientY + documentScroll.y - (rootElement.clientTop || 0) ||
                0,
        };
    };
    var getMouseButton = function (event) {
        var which = event.which, button = event.button;
        if (!which && button !== undefined) {
            if (button === 1 || button === 3)
                return 1;
            if (button === 2)
                return 3;
            if (button === 4)
                return 2;
            return 0;
        }
        return which;
    };
    var getTarget$1 = function (ctx, evt) {
        var target = null;
        try {
            target = (evt.target || evt.srcElement);
            if (target) {
                if (!target.ownerDocument && target.documentElement) {
                    // На document попали, берём html
                    target = target.documentElement;
                }
                else if (target.ownerDocument !== ctx.document) {
                    // Чужой iframe
                    target = null;
                }
            }
        }
        catch (e) {
            // empty
        }
        return target;
    };

    var isIgnoredElement = curry2(hasClass)('(ym-disable-clickmap|ym-clickmap-ignore)');
    var isCurrentClickTracked = function (ctx, click, lastClick, ignoreTags, filter) {
        if (has(ctx, 'ymDisabledClickmap') ||
            isMetrikaPlayer(ctx) ||
            !click ||
            !click.element) {
            return false;
        }
        var nodeName = getNodeName(click.element);
        // eslint-disable-next-line ban/ban
        if (filter && !filter(click.element, nodeName)) {
            return false;
        }
        if (includes(click.button, [2, 3]) && nodeName !== 'A') {
            return false;
        }
        // Пользовательский фильтр на теги
        if (/* @__PURE__ */ cSome(/* @__PURE__ */ equal(nodeName), ignoreTags)) {
            return false;
        }
        // Не отправляем клик, если у элемента или у родителя есть класс ym-disable-clickmap
        // Класс ym-clickmap-ignore оставлен для совместимости
        var currentElement = click.element;
        if (click && lastClick) {
            // Отправляем клики не чаще TIMEOUT_CLICK
            if (click.time - lastClick.time < TIMEOUT_CLICK) {
                return false;
            }
            // Близкие клики отправляем не чаще TIMEOUT_SAME_CLICKS
            var deltaX = Math.abs(lastClick.position.x - click.position.x);
            var deltaY = Math.abs(lastClick.position.y - click.position.y);
            var deltaTime = click.time - lastClick.time;
            if (lastClick.element === currentElement &&
                deltaX < DELTA_SAME_CLICKS &&
                deltaY < DELTA_SAME_CLICKS &&
                deltaTime < TIMEOUT_SAME_CLICKS) {
                return false;
            }
        }
        while (currentElement) {
            if (isIgnoredElement(currentElement)) {
                return false;
            }
            currentElement = currentElement.parentElement;
        }
        return true;
    };
    var sendClick = function (ctx, url, pointerClick, sender, counterOptions) {
        var _a;
        var brInfo = browserInfo();
        var senderInfo = {
            brInfo: brInfo,
            urlParams: (_a = {},
                _a[CLICKMAP_URL_PARAM] = url,
                _a[CLICKMAP_POINTER_PARAM] = pointerClick,
                _a),
        };
        sender(senderInfo, counterOptions)["catch"](errorLogger(ctx, 'c.s.c'));
    };
    var useClickMapProviderBase = function (ctx, counterOptions) {
        if (isBrokenFromCharCode(ctx)) {
            return noop;
        }
        var sender = getSender(ctx, CLICKMAP_PROVIDER, counterOptions);
        var counterKey = getCounterKey(counterOptions);
        var timer = TimeOne(ctx);
        var startTime = timer(getMs);
        var clickMapParamsGetter = /* @__PURE__ */ bindArg(counterStateGetter(ctx, counterKey), /* @__PURE__ */ pipe(call, /* @__PURE__ */ ctxPath(COUNTER_STATE_CLICKMAP)));
        var quota;
        var lastClick = null;
        var globalStorage = getGlobalStorage(ctx);
        var handleMouseClickEvent = errorLogger(ctx, 'clm.p.c', function (event) {
            var rawClickMapParams = clickMapParamsGetter();
            if (!rawClickMapParams) {
                return;
            }
            var clicks = globalStorage.getVal(GLOBAL_STORAGE_CLICKS_KEY, 0);
            globalStorage.setVal(GLOBAL_STORAGE_CLICKS_KEY, clicks + 1);
            var params = typeof rawClickMapParams === 'object' ? rawClickMapParams : {};
            var filter = params.filter;
            var isTrackHash = params['isTrackHash'] || false;
            var ignoreTags = /* @__PURE__ */ cMap(function (tag) { return ("" + tag).toUpperCase(); }, params['ignoreTags'] || []);
            if (isUndefined(quota)) {
                quota = params['quota'] || null;
            }
            var hasQuota = !!params['quota'];
            var currentClick = {
                element: getTarget$1(ctx, event),
                position: getPosition(ctx, event),
                button: getMouseButton(event),
                time: timer(getMs),
            };
            var href = getLocation(ctx).href;
            if (isCurrentClickTracked(ctx, currentClick, lastClick, ignoreTags, filter)) {
                if (hasQuota) {
                    if (!quota) {
                        return;
                    }
                    quota -= 1;
                }
                var _a = getElementSize(ctx, currentClick.element), eWidth = _a[0], eHeight = _a[1];
                var elementPosition = getElementXY(ctx, currentClick.element);
                var MAX_VALUE = 65535;
                var pointerClickParamsArr = [
                    'rn',
                    getRandom(ctx),
                    'x',
                    Math.floor(((currentClick.position.x - elementPosition.left) *
                        MAX_VALUE) /
                        (eWidth || 1)),
                    'y',
                    Math.floor(((currentClick.position.y - elementPosition.top) *
                        MAX_VALUE) /
                        (eHeight || 1)),
                    't',
                    Math.floor((currentClick.time - startTime) / 100),
                    'p',
                    getElementPath(ctx, currentClick.element),
                    'X',
                    currentClick.position.x,
                    'Y',
                    currentClick.position.y,
                ];
                var pointerClickParams = /* @__PURE__ */ arrayJoin(':', pointerClickParamsArr);
                if (isTrackHash) {
                    pointerClickParams = pointerClickParams + ":wh:1";
                }
                sendClick(ctx, href, pointerClickParams, sender, counterOptions);
                lastClick = currentClick;
            }
        });
        return cEvent(ctx).on(getPath(ctx, 'document'), ['click'], handleMouseClickEvent);
    };
    var useClickmapProvider = /* @__PURE__ */ ctxErrorLogger('clm.p', useClickMapProviderBase);

    var BALANCER_GDPR_COOKIE_KEY = 'is_gdpr';
    var isEuFn = function (ctx) {
        var globalConfig = getGlobalStorage(ctx);
        var val = globalConfig.getVal(IS_EU_CONFIG_KEY);
        if (isUndefined(val)) {
            var isEuFromCookie = parseInt(getCookie(ctx, BALANCER_GDPR_COOKIE_KEY) || '', 10);
            if (includes(isEuFromCookie, [0, 1])) {
                globalConfig.setVal(IS_EU_CONFIG_KEY, isEuFromCookie);
                val = Boolean(isEuFromCookie);
            }
            else {
                var localStorage_1 = globalLocalStorage(ctx);
                var localSettings = localStorage_1.getVal(FAKE_HIT_CACHE_KEY);
                var isEuFromLs = getPath(localSettings, FAKE_HIT_PARAMS_KEY + ".eu");
                if (isEuFromLs) {
                    globalConfig.setVal(IS_EU_CONFIG_KEY, isEuFromLs);
                    val = Boolean(isEuFromLs);
                }
            }
        }
        return val;
    };
    var isEuOnce = /* @__PURE__ */ memo(isEuFn, function (ctx) {
        var globalConfig = getGlobalStorage(ctx);
        return globalConfig.getVal(IS_EU_CONFIG_KEY);
    });
    var isEu = /* @__PURE__ */ ctxErrorLogger('i.e', isEuOnce);

    var rawFormvisorSerializer =  /** @class */ (function () {
            function FormvisorSerializer(ctx, getCallbacks) {
                this.ctx = ctx;
                this.getCallbacks = getCallbacks;
            }
            FormvisorSerializer.prototype.serialize = function (events) {
                return taskOf(/* @__PURE__ */ flatMap(bind(this.serializeData, this), events));
            };
            FormvisorSerializer.prototype.serializeData = function (event, metadata) {
                var _this = this;
                var result = [];
                var type = event.type;
                var targetType = metadata && metadata.type;
                var transformersFns = this.getCallbacks(this.ctx, targetType, type);
                if (transformersFns) {
                    result = /* @__PURE__ */ flatMap(function (transformerFn) {
                        return transformerFn({
                            ctx: _this.ctx,
                            evt: event,
                        }) || [];
                    }, transformersFns);
                }
                return result;
            };
            FormvisorSerializer.prototype.getRequestBodySize = function (serialized) {
                return serialized.length;
            };
            FormvisorSerializer.prototype.splitToChunks = function (serialized, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            chunksNumber) {
                return [serialized];
            };
            FormvisorSerializer.prototype.isEnabled = function () {
                return true;
            };
            return FormvisorSerializer;
        }()) ;
    var FormvisorSerializer = rawFormvisorSerializer;

    var rawVisorBuffer =  /** @class */ (function (_super) {
            __extends(VisorBuffer, _super);
            function VisorBuffer(ctx, serializer, senderFunction) {
                var _this = _super.call(this, ctx, serializer, senderFunction) || this;
                _this.buffer = [];
                _this.MAX_CHUNK_SIZE = 7500;
                _this.FLUSH_TIMEOUT = 30000;
                _this.setFlushTimeout();
                return _this;
            }
            VisorBuffer.prototype.push = function (record, metadata) {
                var serializedRecord = this.serializer.serializeData(record, metadata);
                arrayMerge(this.buffer, serializedRecord);
                var size = this.serializer.getRequestBodySize(this.buffer);
                if (size > this.MAX_CHUNK_SIZE) {
                    this.flush();
                }
            };
            VisorBuffer.prototype.flush = function () {
                var data = this.buffer;
                if (data.length) {
                    this.send(data);
                    this.buffer = [];
                }
            };
            return VisorBuffer;
        }(AbstractBuffer)) ;
    var VisorBuffer = rawVisorBuffer;

    /**
     * Имя свойства, используемого для записи идентификаторов элементов в самих элементах.
     */
    var ELEMENT_ID_PROPERTY = "metrikaId_" + Math.random();
    var getElementId = function (element) {
        return element[ELEMENT_ID_PROPERTY];
    };
    var setElementId = function (element, value) {
        element[ELEMENT_ID_PROPERTY] = value;
    };
    var elementsCache = {
        counter: 0,
    };
    var getElementsCache = function () { return elementsCache; };
    /**
     * Идентификатор для следующего записываемого DOM-элемента.
     */
    var incrementElementId = function () {
        elementsCache.counter += 1;
        return elementsCache.counter;
    };

    var delimiter = '(-|\\.|_|\\s){0,2}';
    var SUSPICIOUS_WORDS = [
        "first" + delimiter + "name",
        "last" + delimiter + "name",
        'zip',
        'postal',
        'phone',
        'address',
        'passport',
        "(bank|credit)" + delimiter + "card",
        "card" + delimiter + "number",
        "card" + delimiter + "holder",
        'cvv',
        "card" + delimiter + "exp",
        "card" + delimiter + "name",
        'card.*month',
        'card.*year',
        'card.*month',
        'card.*year',
        'password',
        'email',
        "birth" + delimiter + "(day|date)",
        "second" + delimiter + "name",
        "third" + delimiter + "name",
        'patronymic',
        "middle" + delimiter + "name",
        "birth" + delimiter + "place",
        'house',
        'street',
        'city',
        'flat',
        'state',
        'contact.*',
    ];
    var PLACEHOLDER_SUSPICIOUS_WORDS = [
        'имя',
        'фамилия',
        'отчество',
        'индекс',
        'телефон',
        'адрес',
        'паспорт',
        "\u043D\u043E\u043C\u0435\u0440" + delimiter + "\u043A\u0430\u0440\u0442\u044B",
        "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F" + delimiter + "\u043F\u043E\u0447\u0442\u0430",
        "\u0434\u0430\u0442\u0430" + delimiter + "\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
        'дом',
        'улица',
        'квартира',
        'город',
        'область',
    ];
    var SUSPICIOUS_INPUT_TYPES = ['email', 'tel'];

    var hideContentRegex = /ym-hide-content/;
    var showContentRegex = /ym-show-content/;
    var isLetterRegex = /^[\wА-Яа-я]$/;
    var upperCaseRange = [65, 90];
    var lowerCaseRange = [97, 122];
    var isHiddenContent = function (ctx, node) {
        if (isNil(node)) {
            return false;
        }
        if (isTextNode(node)) {
            if (isDocumentFragment(node.parentNode)) {
                return false;
            }
            return isHiddenContent(ctx, node.parentNode);
        }
        if (hideContentRegex.test(node.className)) {
            return true;
        }
        var matchesFunction = getMatchesFunction(ctx);
        if (!matchesFunction) {
            return false;
        }
        var hasHiddenParent = matchesFunction.call(node, '.ym-hide-content *');
        if (hasHiddenParent) {
            if (showContentRegex.test(node.className)) {
                return false;
            }
            var forceShow = matchesFunction.call(node, '.ym-hide-content .ym-show-content *');
            if (forceShow) {
                return false;
            }
        }
        return hasHiddenParent;
    };
    var scrambleContent = function (ctx, content) {
        return /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cMap(function (char) {
            if (!ctx.isNaN(char)) {
                return "" + getRandom(ctx, 0, 9);
            }
            if (isLetterRegex.test(char)) {
                // is upper case
                var _a = char.toUpperCase() === char
                    ? upperCaseRange
                    : lowerCaseRange, rangeStart = _a[0], rangeEnd = _a[1];
                return String.fromCharCode(getRandom(ctx, rangeStart, rangeEnd));
            }
            return char;
        }, content.split('')));
    };

    var validInputTypes = [
        'color',
        'radio',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'range',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
    ];
    var PDRegex = new RegExp("(" + /* @__PURE__ */ arrayJoin('|', SUSPICIOUS_WORDS) + ")", 'i');
    var passwordTypes = ['password', 'passwd', 'pswd'];
    var disableKeysClass = 'ym-disable-keys';
    var nokeysClass = '-metrika-nokeys';
    var disableFormRegex = '(ym-disable-submit|-metrika-noform)';
    var placeholderPDRegex = new RegExp("(" + /* @__PURE__ */ arrayJoin('|', SUSPICIOUS_WORDS.concat(PLACEHOLDER_SUSPICIOUS_WORDS)) + ")", 'i');
    var isForceRecordingEnabled = function (input) {
        return input && hasClass('ym-record-keys', input);
    };
    var isDisabledForm = function (ctx, target) {
        return target && hasClass(disableFormRegex, target);
    };
    var isValidInput = function (input) {
        try {
            var name_1 = getNodeName(input);
            if (includes(name_1, INPUT_NODES)) {
                if (name_1 === 'INPUT') {
                    var type = input.type;
                    return (!type || includes(type.toLocaleLowerCase(), validInputTypes));
                }
                return true;
            }
        }
        catch (e) {
            return false;
        }
        return false;
    };
    var isLongEnoughTobeSuspicious = function (val) {
        return !!(val && val.length > 2);
    };
    var isPrivateInformationField = function (input) {
        if (!input) {
            return false;
        }
        var className = input.className, id = input.id, name = input.name, placeholder = input.placeholder, type = input.type;
        var identifiers = /* @__PURE__ */ cFilter(isLongEnoughTobeSuspicious, [
            className,
            id,
            name,
        ]);
        var isSuspiciousType = type && includes(type, SUSPICIOUS_INPUT_TYPES);
        return (isSuspiciousType ||
            /* @__PURE__ */ cSome(/* @__PURE__ */ bindThisForMethodTest(PDRegex), identifiers) ||
            (isLongEnoughTobeSuspicious(placeholder) &&
                placeholderPDRegex.test(placeholder)));
    };
    function isDisabledKeys(ctx, target, includeChildren) {
        var condition = target &&
            (stringIncludes(target.className, disableKeysClass) ||
                stringIncludes(target.className, nokeysClass));
        if (includeChildren && target) {
            return (condition ||
                !!getElementsByClassName([disableKeysClass, nokeysClass], target)
                    .length);
        }
        return condition;
    }
    function isPasswordField(ctx, target) {
        if (!isInputElement(target)) {
            return false;
        }
        return (target.type === 'password' ||
            (target.name && includes(target.name.toLowerCase(), passwordTypes)) ||
            (target.id && includes(target.id.toLowerCase(), passwordTypes)));
    }
    var isIgnored = function (ctx, input) {
        if (isPasswordField(ctx, input)) {
            return true;
        }
        if (isDisabledKeys(ctx, input)) {
            return true;
        }
        return isHiddenContent(ctx, input);
    };
    var isObfuscationNeeded = function (ctx, input, isEU) {
        if (isEU === void 0) { isEU = false; }
        if (input.getAttribute('type') === 'button') {
            return false;
        }
        var forceRecord = isForceRecordingEnabled(input);
        var isPrivate = isPrivateInformationField(input);
        // Поле isPrivate имеет смысл только в EU
        var isNotAllowed = isIgnored(ctx, input) || (isEU && isPrivate);
        return !forceRecord && isNotAllowed;
    };

    /* eslint no-bitwise: 0 */
    // ===============================================
    /**
     * @type Number
     * Код пакета с DOM-элементом.
     * @see encodeElement
     */
    var P_ELEMENT = 1;
    /**
     * @type Number
     * Код пакета с событием mousemove.
     * @see encodeMouseEvent
     */
    var P_MOUSE_MOVE = 2;
    /**
     * @type Number
     * Код пакета с событием mousedown.
     * @see encodeMouseEvent
     */
    var P_MOUSE_DOWN = 4;
    /**
     * @type Number
     * Код пакета с событием нажатия клавиши.
     * @see encodeKeyDown
     */
    var P_KEYDOWN = 38;
    var P_INPUT_NODE = 7;
    var P_NODE_COORD_CHANGE = 9;
    var P_NODE_SIZE_CHANGE = 10;
    var P_SUBMIT = 11;
    var P_TOUCH = 12;
    /**
     * @type Number
     * Код пакета с событием фокуса окна.
     * @see encodeWindowFocus
     */
    var P_WINDOW_FOCUS = 14;
    /**
     * @type Number
     * Код пакета с событием блюра окна.
     * @see encodeWindowBlur
     */
    var P_WINDOW_BLUR = 15;
    /**
     * @type Number
     * Код пакета с событием focus на элементе формы.
     * @see encodeFieldFocus
     */
    var P_FIELD_FOCUS = 17;
    /**
     * @type Number
     * Код пакета с событием blur на элементе формы.
     * @see encodeFieldBlur
     */
    var P_FIELD_BLUR = 18;
    /**
     * @type Number
     * Код пакета с событием change на элементе формы.
     * @see encodeFieldChange
     */
    var P_FIELD_CHANGE = 39;
    /**
     * @type Number
     * Код пакета с событием copy.
     */
    var P_TEXT_COPY = 27;
    /**
     * @type Number
     * Код пакета с событием выделения текста.
     * @see encodeSelectText
     */
    var P_TEXT_SELECTION = 29;
    /**
     * @type Number
     * Код пакета с событием mouseup.
     * @see encodeMouseEvent
     */
    var P_MOUSE_UP = 30;
    /**
     * @type Number
     * Код пакета с событием click.
     * @see encodeMouseEvent
     */
    var P_CLICK = 32;
    var P_DOUBLE_CLICK = 33;
    // ===============================================
    /**
     * @type Number
     * Код левой кнопки мыши.
     * @see encodeMouseEvent
     */
    var B_LEFT = 1;
    /**
     * @type Number
     * Код правой кнопки мыши.
     * @see encodeMouseEvent
     */
    var B_RIGHT = 2;
    /**
     * @type Number
     * Код средней кнопки мыши.
     * @see encodeMouseEvent
     */
    var B_MIDDLE = 4;
    // ===============================================
    /**
     * @type Number
     * Бит, указывающий, что в пакете с элементом содержится индекс имени тега, а не само имя.
     * @see encodeElement
     */
    var F_NAME = 1 << 1;
    /**
     * @type Number
     * Бит, указывающий, что в пакете с элементом нет позиции этого элемента относительно соседей.
     * @see encodeElement
     */
    var F_NO_NEIGH = 1 << 2;
    /**
     * @type Number
     * Бит, указывающий, что в пакете с элементом нет данных о позиции и размерах элемента, т.к. они совпадают
     * с соответствующими данными родителя.
     * @see encodeElement
     */
    var F_PARENT_REGION = 1 << 3;
    /**
     * @type Number
     * Бит, указывающий, что в пакете с элементом содержится идентификатор элемента.
     * @see encodeElement
     */
    var F_ID = 1 << 5;
    /**
     * @type Number
     * Бит, указывающий, что в пакете с элементом содержится ещё один байт с флагами.
     * Вообще говоря, он тут ради обратной совместимости и вобщем-то не нужен, но Артур не хочет переделывать
     * серверную часть. Вот.
     * @see encodeElement
     */
    var F_EXTENDED_FLAGS = 1 << 6;
    /**
     * @type Number
     * Бит, указывающий, что при нажатии клавиши удерживался alt.
     * @see getKeyMask
     */
    var K_ALT = 1;
    /**
     * @type Number
     * Бит, указывающий, что при нажатии клавиши удерживался shift.
     * @see getKeyMask
     */
    var K_SHIFT = 2;
    /**
     * @type Number
     * Бит, указывающий, что при нажатии клавиши удерживался ctrl.
     * @see getKeyMask
     */
    var K_CTRL = 4;
    /**
     * @type Number
     * Бит, указывающий, что при нажатии клавиши удерживалась meta.
     * @see getKeyMask
     */
    var K_META = 8;
    /**
     * @type Number
     * Бит, указывающий, что нажатая клавиша не буквенно-цифровая (F1-F12, insert, delete, PgUp, ...).
     * @see getKeyMask
     * @see onKeyDown
     */
    var K_SPECIAL = 16;
    /**
     * @type Object
     * Хэш с известными серверной части тегами. Если записываемый тег содержится в этом хэше, то записывается не его
     * имя, а номер из этого хэша.
     * @see encodeElement
     */
    var getTagNames = /* @__PURE__ */ memo(function () {
        var _a;
        return (_a = {},
            _a['A'] = 1,
            _a['ABBR'] = 2,
            _a['ACRONYM'] = 3,
            _a['ADDRESS'] = 4,
            _a['APPLET'] = 5,
            _a['AREA'] = 6,
            _a['B'] = 7,
            _a['BASE'] = 8,
            _a['BASEFONT'] = 9,
            _a['BDO'] = 10,
            _a['BIG'] = 11,
            _a['BLOCKQUOTE'] = 12,
            _a['BODY'] = 13,
            _a['BR'] = 14,
            _a['BUTTON'] = 15,
            _a['CAPTION'] = 16,
            _a['CENTER'] = 17,
            _a['CITE'] = 18,
            _a['CODE'] = 19,
            _a['COL'] = 20,
            _a['COLGROUP'] = 21,
            _a['DD'] = 22,
            _a['DEL'] = 23,
            _a['DFN'] = 24,
            _a['DIR'] = 25,
            _a['DIV'] = 26,
            _a['DL'] = 27,
            _a['DT'] = 28,
            _a['EM'] = 29,
            _a['FIELDSET'] = 30,
            _a['FONT'] = 31,
            _a['FORM'] = 32,
            _a['FRAME'] = 33,
            _a['FRAMESET'] = 34,
            _a['H1'] = 35,
            _a['H2'] = 36,
            _a['H3'] = 37,
            _a['H4'] = 38,
            _a['H5'] = 39,
            _a['H6'] = 40,
            _a['HEAD'] = 41,
            _a['HR'] = 42,
            _a['HTML'] = 43,
            _a['I'] = 44,
            _a['IFRAME'] = 45,
            _a['IMG'] = 46,
            _a['INPUT'] = 47,
            _a['INS'] = 48,
            _a['ISINDEX'] = 49,
            _a['KBD'] = 50,
            _a['LABEL'] = 51,
            _a['LEGEND'] = 52,
            _a['LI'] = 53,
            _a['LINK'] = 54,
            _a['MAP'] = 55,
            _a['MENU'] = 56,
            _a['META'] = 57,
            _a['NOFRAMES'] = 58,
            _a['NOSCRIPT'] = 59,
            _a['OBJECT'] = 60,
            _a['OL'] = 61,
            _a['OPTGROUP'] = 62,
            _a['OPTION'] = 63,
            _a['P'] = 64,
            _a['PARAM'] = 65,
            _a['PRE'] = 66,
            _a['Q'] = 67,
            _a['S'] = 68,
            _a['SAMP'] = 69,
            _a['SCRIPT'] = 70,
            _a['SELECT'] = 71,
            _a['SMALL'] = 72,
            _a['SPAN'] = 73,
            _a['STRIKE'] = 74,
            _a['STRONG'] = 75,
            _a['STYLE'] = 76,
            _a['SUB'] = 77,
            _a['SUP'] = 78,
            _a['TABLE'] = 79,
            _a['TBODY'] = 80,
            _a['TD'] = 81,
            _a['TEXTAREA'] = 82,
            _a['TFOOT'] = 83,
            _a['TH'] = 84,
            _a['THEAD'] = 85,
            _a['TITLE'] = 86,
            _a['TR'] = 87,
            _a['TT'] = 88,
            _a['U'] = 89,
            _a['UL'] = 90,
            _a['VAR'] = 91,
            _a['NOINDEX'] = 100,
            _a);
    });
    var FORM_ANALYTICS_EVENTS = [
        P_FIELD_FOCUS,
        P_FIELD_BLUR,
        P_KEYDOWN,
        P_CLICK,
        P_FIELD_CHANGE,
        P_WINDOW_BLUR,
        P_SUBMIT,
        P_INPUT_NODE,
        P_ELEMENT,
    ];
    var PRIVATE_INFORMATION_INPUT_CONFIG = (function () {
        var delimiter = '(-|\\.|_|\\s){0,2}';
        var suspiciousWords = [
            "first" + delimiter + "name",
            "last" + delimiter + "name",
            'zip',
            'postal',
            'phone',
            'address',
            'passport',
            "(bank|credit)" + delimiter + "card",
            "card" + delimiter + "number",
            "card" + delimiter + "holder",
            'cvv',
            "card" + delimiter + "exp",
            "card" + delimiter + "name",
            'card.*month',
            'card.*year',
            'card.*month',
            'card.*year',
            'password',
            'email',
            "birth" + delimiter + "(day|date)",
            "second" + delimiter + "name",
            "third" + delimiter + "name",
            'patronymic',
            "middle" + delimiter + "name",
            "birth" + delimiter + "place",
            'house',
            'street',
            'city',
            'flat',
            'state',
        ];
        var placeholderSuspiciousWords = [
            'имя',
            'фамилия',
            'отчество',
            'индекс',
            'телефон',
            'адрес',
            'паспорт',
            "\u041D\u043E\u043C\u0435\u0440" + delimiter + "\u043A\u0430\u0440\u0442\u044B",
            "\u0434\u0430\u0442\u0430" + delimiter + " \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
            'дом',
            'улица',
            'квартира',
            'город',
            'область',
        ];
        var forceRecordClass = 'ym-record-keys';
        return {
            generalRegex: new RegExp("(" + /* @__PURE__ */ arrayJoin('|', suspiciousWords) + ")", 'i'),
            placeholderRegex: new RegExp("(" + /* @__PURE__ */ arrayJoin('|', suspiciousWords.concat(placeholderSuspiciousWords)) + ")", 'i'),
            forceRecordRegex: new RegExp(forceRecordClass, 'i'),
            obfuscatedSymbol: '•',
            obfuscatedKeyCode: 88,
        };
    })();

    /* eslint-disable no-bitwise */
    /**
     * Кодирует число в два байта.
     * @param {Array} buffer Массив, в который добавляется результат.
     * @param {Number} incomingNum Кодируемое число.
     */
    function encodeWord(buffer, incomingNum) {
        var num = Math.max(0, Math.min(incomingNum, 0xffff));
        arrayMerge(buffer, [num >> 8, num & 0xff]);
    }
    /**
     * Кодирует число от 0 до 255 "как есть".
     * @param {Array} buffer Массив, в который добавляется результат.
     * @param {Number} num Кодируемое число.
     */
    function encodeByte(buffer, num) {
        arrayMerge(buffer, [num & 0xff]);
    }
    /*
     * возврщает флаг относится ли это байт к событиям аналитики форм
     * return true если не относится
     * return false если относится
     */
    function encodeEvent$1(ctx, buffer, num) {
        /* eslint-disable no-else-return */
        if (cIndexOf(ctx)(num, FORM_ANALYTICS_EVENTS) !== -1) {
            encodeByte(buffer, num);
            return false;
        }
        else {
            return true;
        }
        /* eslint-enable no-else-return */
    }
    /**
     * Кодирует положительное целое int32. Биты двоичного представления числа делятся на группы по 7, у всех групп,
     * кроме последней, добавляется слева единичный бит. Полученные байты являются результатом. Т.о. признаком конца
     * числа является нулевой старший бит.
     * @param {Array} buffer Массив, в который добавляется результат.
     * @param {Number} incomingNum Кодируемое число.
     */
    function encodeScaled(buffer, incomingNum) {
        var num = Math.max(0, incomingNum | 0);
        while (num > 127) {
            arrayMerge(buffer, [(num & 127) | 128]);
            num >>= 7;
        }
        arrayMerge(buffer, [num]);
    }
    /**
     * Кодирует произвольную строку. Все числа, как длина строки, так и символы, кодируются функцией {@link encodeScaled}.
     * Если известно, что строка содержит заведомо только символы с кодами до 255, то лучше использовать функцию
     * {@link encodeString}.
     * @param {Array} buffer Массив, в который добавляется результат.
     * @param {String} string Кодируемая строка.
     */
    function encodeScaledString(buffer, string) {
        encodeScaled(buffer, string.length);
        for (var i = 0; i < string.length; i += 1) {
            encodeScaled(buffer, string.charCodeAt(i));
        }
    }
    /**
     * Кодирует строку символов, коды которых имеют значения до 255. Размер строки также ограничивается числом 255.
     * Первым байтом в результате следует размер строки, далее однобайтные коды символов.
     * @param {Array} buffer Массив, в который добавляется результат.
     * @param {String} stringToEncode Кодируемая строка.
     */
    function encodeString(buffer, stringToEncode) {
        var string = stringToEncode;
        if (string.length > 255) {
            string = string.substr(0, 255);
        }
        buffer.push(string.length);
        for (var i = 0; i < string.length; i += 1) {
            encodeWord(buffer, string.charCodeAt(i));
        }
    }
    /**
     * Кодирует событие copy для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeCopy(ctx, time) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_TEXT_COPY)) {
            return [];
        }
        encodeScaled(buffer, time);
        return buffer;
    }
    /**
     * Кодирует событие получения фокуса окном для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeWindowFocus(time) {
        var buffer = [];
        encodeByte(buffer, P_WINDOW_FOCUS);
        encodeScaled(buffer, time);
        return buffer;
    }
    /**
     * Кодирует событие потери фокуса окном для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeWindowBlur(ctx, time) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_WINDOW_BLUR)) {
            return [];
        }
        encodeScaled(buffer, time);
        return buffer;
    }
    function encodeChangeRegion(ctx, time, el) {
        var nodeNumber = getElementId(el);
        if (nodeNumber > 0) {
            var buffer = [];
            var region = getElementRegion(ctx, el);
            var cache = getElementsCache()[nodeNumber];
            var newPos = region[0] + "x" + region[1];
            var newSize = region[2] + "x" + region[3];
            if (newPos !== cache.pos) {
                cache.pos = newPos;
                if (encodeEvent$1(ctx, buffer, P_NODE_COORD_CHANGE)) {
                    return [];
                }
                encodeScaled(buffer, time);
                encodeScaled(buffer, nodeNumber);
                encodeScaled(buffer, region[0]);
                encodeScaled(buffer, region[1]);
            }
            if (newSize !== cache.size) {
                cache.size = newSize;
                if (encodeEvent$1(ctx, buffer, P_NODE_SIZE_CHANGE)) {
                    return [];
                }
                encodeScaled(buffer, time);
                encodeScaled(buffer, nodeNumber);
                encodeScaled(buffer, region[2]);
                encodeScaled(buffer, region[3]);
            }
            if (buffer.length) {
                return buffer;
            }
        }
        return [];
    }
    /**
     * Кодирует событие focus на элементе формы для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @param {Element} field Элемент, на котором произошло событие.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeFieldFocus(ctx, time, field) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_FIELD_FOCUS)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaled(buffer, getElementId(field));
        return buffer;
    }
    /**
     * Кодирует событие blur на элементе формы для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @param {Element} field Элемент, на котором произошло событие.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeFieldBlur(ctx, time, field) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_FIELD_BLUR)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaled(buffer, getElementId(field));
        return buffer;
    }
    /**
     * Кодирует событие change на элементе формы для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @param {Element} field Элемент, на котором произошло событие.
     * @param {String} value Содержимое элемента на момент возникновения события.
     * @param {Boolean} hidden Флаг указывающий на приватность поля.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeFieldChange(ctx, time, field, value, hidden) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_FIELD_CHANGE)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaled(buffer, getElementId(field));
        encodeString(buffer, String(value));
        encodeByte(buffer, hidden ? 1 : 0);
        return buffer;
    }
    /**
     * Кодирует DOM-элемент в массив байт для передачи на сервер. Предполагается, что родитель кодируемого элемента
     * уже также закодирован и имеет свой id.
     * @param {Element} el Кодируемый DOM-элемент.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeElement(ctx, el) {
        var nodeName = getNodeName(el);
        if (!nodeName) {
            setElementId(el, -1);
            return null;
        }
        var nodeNumber = +getElementId(el); // В агрессивной среде на сайтах лучше вместо Number(...) использовать +a
        // eslint-disable-next-line no-restricted-globals
        if (!isFinite(nodeNumber) || nodeNumber <= 0) {
            return null;
        }
        if (el.attributes) {
            var current = el;
            while (current) {
                // Elements that are having __ym_wv_ign parent should be ignored
                // @ts-expect-error
                // eslint-disable-next-line no-underscore-dangle
                if (current.attributes.__ym_wv_ign) {
                    return null;
                }
                current = current.parentElement;
            }
        }
        var featureMask = F_EXTENDED_FLAGS;
        var extendedFeatureMask = 0;
        var parent = getElementParent(ctx, el);
        var parentId = parent && getElementId(parent) ? getElementId(parent) : 0;
        if (parentId < 0) {
            parentId = 0;
        }
        var nodeNameString = (nodeName || '').toUpperCase();
        var nodeNameIndex = getTagNames()[nodeNameString];
        if (!nodeNameIndex) {
            featureMask |= F_NAME;
        }
        var neighborPosition = getElementNeighborPosition(ctx, el);
        if (!neighborPosition) {
            featureMask |= F_NO_NEIGH;
        }
        var region = getElementRegion(ctx, el);
        var parentRegion = parent ? getElementRegion(ctx, parent) : null;
        if (parentRegion &&
            region[0] === parentRegion[0] &&
            region[1] === parentRegion[1] &&
            region[2] === parentRegion[2] &&
            region[3] === parentRegion[3]) {
            featureMask |= F_PARENT_REGION;
        }
        getElementsCache()[nodeNumber].pos = region[0] + "x" + region[1];
        getElementsCache()[nodeNumber].size = region[2] + "x" + region[3];
        if (el.id && typeof el.id === 'string') {
            featureMask |= F_ID;
        }
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_ELEMENT)) {
            return null;
        }
        encodeScaled(buffer, nodeNumber);
        encodeByte(buffer, featureMask);
        encodeScaled(buffer, parentId);
        if (nodeNameIndex) {
            encodeByte(buffer, nodeNameIndex);
        }
        else {
            encodeString(buffer, nodeNameString);
        }
        if (neighborPosition) {
            encodeScaled(buffer, neighborPosition);
        }
        if (!(featureMask & F_PARENT_REGION)) {
            encodeScaled(buffer, region[0]);
            encodeScaled(buffer, region[1]);
            encodeScaled(buffer, region[2]);
            encodeScaled(buffer, region[3]);
        }
        if (featureMask & F_ID) {
            encodeString(buffer, el.id);
        }
        encodeByte(buffer, extendedFeatureMask);
        return buffer;
    }
    function encodeInputNode(ctx, el) {
        var nodeNumber = getElementId(el);
        if (!nodeNumber || nodeNumber < 0 || !isCommonInput(el)) {
            return [];
        }
        if (!el.form) {
            return [];
        }
        if (isDisabledForm(ctx, el.form)) {
            return [];
        }
        var formNumber = getFormNumber(ctx, el.form);
        if (formNumber < 0) {
            return [];
        }
        var type;
        if (isInputElement(el)) {
            var types = {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                'datetime-local': 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7,
            };
            type = types[el.type];
        }
        else {
            var types = {
                SELECT: 1,
                TEXTAREA: 5,
            };
            var index = getNodeName(el);
            type = isUndefined(index) ? '' : types[index];
        }
        if (typeof type !== 'number') {
            return [];
        }
        var fieldNumber = -1;
        var elements = el.form.elements;
        var elementCount = elements.length;
        for (var i = 0, num = 0; i < elementCount; i += 1) {
            // @ts-expect-error
            if (elements[i].name === el.name) {
                if (elements[i] === el) {
                    fieldNumber = num;
                    break;
                }
                num += 1;
            }
        }
        if (fieldNumber < 0) {
            return [];
        }
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_INPUT_NODE)) {
            return [];
        }
        encodeScaled(buffer, nodeNumber);
        encodeScaled(buffer, formNumber);
        encodeScaled(buffer, type);
        encodeScaledString(buffer, el.name || '');
        encodeScaled(buffer, fieldNumber);
        return buffer;
    }
    /**
     * Кодирует информацию о событии мыши для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @param {String} evtType Тип события (mousemove, mousedown, mouseup или click).
     * @param {Element} el Элемент, на котором произошло событие.
     * @param {Array} pageXY Координаты события относительно левого верхнего угла страницы в формате [x, y].
     * @param {Number} evtWhich Свойство which объекта события.
     * @param {Number} evtButton  Свойство button объекта события.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeMouseEvent$1(ctx, time, evtType, element, pageXY, evtWhich, evtButton) {
        var _a, _b;
        var el = element;
        var _c = getElementSize(ctx, el), elWidth = _c[0], elHeight = _c[1];
        while (el && (!elWidth || !elHeight)) {
            el = getElementParent(ctx, el);
            if (el) {
                _a = getElementSize(ctx, el), elWidth = _a[0], elHeight = _a[1];
            }
        }
        if (!el) {
            return [];
        }
        var elId = getElementId(el);
        if (!elId || elId < 0) {
            return [];
        }
        var eventCodes = (_b = {},
            _b['mousemove'] = P_MOUSE_MOVE,
            _b['click'] = P_CLICK,
            _b['dblclick'] = P_DOUBLE_CLICK,
            _b['mousedown'] = P_MOUSE_DOWN,
            _b['mouseup'] = P_MOUSE_UP,
            _b['touch'] = P_TOUCH,
            _b);
        var eventCode = eventCodes[evtType];
        if (!eventCode) {
            return [];
        }
        var buffer = [];
        var pos = getElementXY(ctx, el);
        if (encodeEvent$1(ctx, buffer, eventCode)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaled(buffer, elId);
        encodeScaled(buffer, Math.max(0, pageXY[0] - pos.left));
        encodeScaled(buffer, Math.max(0, pageXY[1] - pos.top));
        if (/^mouse(up|down)|click$/.test(evtType)) {
            var prop = evtWhich || evtButton;
            var middleValue = evtWhich ? 2 : 4;
            encodeByte(buffer, 
            // eslint-disable-next-line no-nested-ternary
            prop < 2 ? B_LEFT : prop === middleValue ? B_MIDDLE : B_RIGHT);
        }
        return buffer;
    }
    /**
     * Кодирует событие выделения текста для отправки на сервер.
     * @param {Number} time Время возникновения события.
     * @param {String} text Выделенный текст.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeSelectText(ctx, time, text) {
        var left;
        var right;
        if (text.length === 0) {
            left = '';
            right = '';
        }
        else if (text.length <= 100) {
            left = text;
            right = '';
        }
        else if (text.length <= 200) {
            left = text.substr(0, 100);
            right = text.substr(100);
        }
        else {
            left = text.substr(0, 97);
            right = text.substr(text.length - 97);
        }
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_TEXT_SELECTION)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaledString(buffer, left);
        encodeScaledString(buffer, right);
        return buffer;
    }
    /**
     * Кодирует событие нажатия клавиши для отправки на сервер.
     * @param {Number} time Момент возникновения события.
     * @param {Number} charCode Код клавиши.
     * @param {Number} mask Маска свойств события.
     * @param {Element} target DOM-элемент, на котором произошло событие.
     * @param {Boolean} hidden Фдаг указывающий на приватность информации.
     * @return {Array} Массив байт, готовый к отправке на сервер.
     */
    function encodeKeyDown(ctx, time, charCode, mask, target, hidden) {
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_KEYDOWN)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeWord(buffer, charCode);
        encodeByte(buffer, mask);
        var targetId = getElementId(target);
        if (!targetId || targetId < 0) {
            targetId = 0;
        }
        encodeScaled(buffer, targetId);
        encodeByte(buffer, hidden ? 1 : 0);
        return buffer;
    }
    function encodeSubmit(ctx, time, form) {
        var formNumber = getFormNumber(ctx, form);
        if (formNumber < 0) {
            return [];
        }
        var elements = form.elements;
        var elementCount = elements.length;
        var fields = [];
        for (var i = 0; i < elementCount; i += 1) {
            if (!isEmptyField(elements[i])) {
                var fieldNumber = getElementId(elements[i]);
                if (fieldNumber && fieldNumber > 0) {
                    fields.push(fieldNumber);
                }
            }
        }
        var buffer = [];
        if (encodeEvent$1(ctx, buffer, P_SUBMIT)) {
            return [];
        }
        encodeScaled(buffer, time);
        encodeScaled(buffer, formNumber);
        encodeScaled(buffer, fields.length);
        for (var j = 0; j < fields.length; j += 1) {
            encodeScaled(buffer, fields[j]);
        }
        return buffer;
    }

    /* eslint no-bitwise: 0 */
    var obfuscateFn = /* @__PURE__ */ ctxMap(/* @__PURE__ */ bindArg(PRIVATE_INFORMATION_INPUT_CONFIG.obfuscatedSymbol, firstArg));
    var checkUpdate = function (ctx, el, buffer) {
        var result = getElementId(el);
        if (result) {
            arrayMerge(buffer, encodeChangeRegion(ctx, getVisorNowEventTime(ctx), el));
        }
        return result;
    };
    /**
     * Добавляет DOM-элемент и его родителей, если они ещё не записаны, в очередь на запись.
     * @param {Element} el
     */
    function appendElementsToQueue(ctx, rawEl, buffer) {
        if (buffer === void 0) { buffer = []; }
        var newElems = [];
        for (var el = rawEl; el; el = getElementParent(ctx, el)) {
            var isUpdated = checkUpdate(ctx, el, buffer);
            if (isUpdated) {
                break;
            }
            newElems.push(el);
        }
        cForEach(function (newElem) {
            var nextId = incrementElementId();
            setElementId(newElem, nextId);
            getElementsCache()[nextId] = {};
            var encodedElement = encodeElement(ctx, newElem);
            var encodedInputNode = encodeInputNode(ctx, newElem);
            if (encodedElement && encodedInputNode) {
                arrayMerge(buffer, encodedElement);
                arrayMerge(buffer, encodedInputNode);
            }
        }, cReverse(newElems));
        return buffer;
    }
    /**
     * Находится ли в данный момент окно в фокусе. Изначально считаем, что находится, т.к. при загрузке страницы
     * это определить нет возможности.
     */
    var isWindowFocus = true;
    /**
     * Обрабатывает событие focus документа в notIE браузерах.
     */
    var onWindowFocus = function (params) {
        if (!isWindowFocus) {
            isWindowFocus = true;
            return encodeWindowFocus(getVisorNowEventTime(params.ctx));
        }
    };
    /**
     * Обрабатывает событие blur документа в notIE браузерах.
     */
    var onWindowBlur = function (params) {
        if (isWindowFocus) {
            isWindowFocus = false;
            return encodeWindowBlur(params.ctx, getVisorNowEventTime(params.ctx));
        }
    };
    /**
     * Обрабатывает событие focus окна в IE.
     * @param {Object} evt Объект события.
     */
    function onWindowFocusIn(params) {
        var evt = params.evt;
        if (!isWindowFocus || (evt && !evt.fromElement)) {
            return onWindowFocus(params);
        }
    }
    /**
     * Обрабатывает событие blur окна в IE.
     * @param {Object} evt Объект события.
     */
    function onWindowFocusOut(params) {
        var evt = params.evt;
        if (evt && !evt.toElement) {
            return onWindowBlur(params);
        }
    }
    var handleInputTarget = function (params, target) {
        var ctx = params.ctx;
        var buffer = [];
        var form = target.form;
        if (!getElementId(target) && form) {
            var formElements = form.elements;
            var length_1 = form.length;
            for (var i = 0; i < length_1; i += 1) {
                var el = formElements[i];
                if (isCommonInputOrButton(el) && !getElementId(el)) {
                    arrayMerge(buffer, appendElementsToQueue(ctx, el));
                }
            }
        }
        else {
            arrayMerge(buffer, appendElementsToQueue(ctx, target));
        }
        return buffer;
    };
    /**
     * Обрабатывает событие focus на элементах формы.
     * @param {Object} evt Объект события.
     */
    function onFieldFocus(params) {
        var evt = params.evt;
        var target = getTarget(evt);
        // для элементов формы, которые имеют родительскую форму добавляются также все остальные элементы этой формы
        if (target && isCommonInputOrButton(target)) {
            return /* @__PURE__ */ __spreadArrays(handleInputTarget(params, target), encodeFieldFocus(params.ctx, getVisorNowEventTime(params.ctx), target));
        }
    }
    /**
     * Обрабатывает событие blur на элементах формы.
     * @param {Object} evt Объект события.
     */
    function onFieldBlur(params) {
        var ctx = params.ctx, evt = params.evt;
        var target = evt.target;
        if (target && isCommonInputOrButton(target)) {
            return /* @__PURE__ */ __spreadArrays(appendElementsToQueue(ctx, target), encodeFieldBlur(params.ctx, getVisorNowEventTime(params.ctx), target));
        }
    }
    /**
     * Обрабатывает событие change на элементах формы.
     * @param {Object} evt Объект события.
     */
    function onFieldChange(params) {
        var ctx = params.ctx, evt = params.evt;
        var target = getTarget(evt);
        if (!target ||
            isPasswordField(ctx, target) ||
            isDisabledKeys(ctx, target)) {
            return [];
        }
        if (isCommonInput(target)) {
            var globalStorage = getGlobalStorage(ctx);
            var isEU = globalStorage.getVal(IS_EU_CONFIG_KEY);
            var isObfuscation = isObfuscationNeeded(ctx, target, isEU);
            // на privateFlag isEU не влияет
            var privateFlag = isObfuscationNeeded(ctx, target);
            var value = void 0;
            if (isCheckable(target)) {
                value = target.checked;
            }
            else {
                // eslint-disable-next-line prefer-destructuring
                value = target.value;
                value = isObfuscation
                    ? /* @__PURE__ */ arrayJoin('', obfuscateFn(value.split('')))
                    : value;
            }
            return /* @__PURE__ */ __spreadArrays(appendElementsToQueue(ctx, target), encodeFieldChange(params.ctx, getVisorNowEventTime(params.ctx), target, value, privateFlag));
        }
    }
    /**
     * Обрабатывает мышинные события.
     * @param {Object} evt Объект события.
     */
    function onMouseEvent(params) {
        var ctx = params.ctx;
        var evt = params.evt;
        var target = getTarget(evt);
        if (!target || target.nodeName === 'SCROLLBAR') {
            return [];
        }
        var buffer = [];
        var bufferPusher = /* @__PURE__ */ bindArg(buffer, arrayMerge);
        // для элементов формы, которые имеют родительскую форму добавляются также все остальные элементы этой формы
        if (target && isCommonInputOrButton(target)) {
            bufferPusher(handleInputTarget(params, target));
        }
        else {
            bufferPusher(appendElementsToQueue(ctx, target));
        }
        var position = getPosition(ctx, evt);
        return /* @__PURE__ */ __spreadArrays(buffer, encodeMouseEvent$1(ctx, getVisorNowEventTime(params.ctx), evt.type, target, [position.x, position.y], evt.which, evt.button));
    }
    /**
     * @type String
     * Выделенный в данный момент текст.
     */
    var currentSelectedText = '';
    function onSelectText(params) {
        var text;
        var target = null;
        var ctx = params.ctx;
        var doc = ctx.document;
        if (ctx.getSelection) {
            // getSelection бывает переопределен
            var sel = void 0;
            try {
                sel = ctx.getSelection();
            }
            catch (ignore) {
                return [];
            }
            if (isNull(sel)) {
                return [];
            }
            text = "" + sel;
            target = sel.anchorNode;
        }
        else if (doc.selection && doc.selection.createRange) {
            var range = doc.selection.createRange();
            // eslint-disable-next-line prefer-destructuring
            text = range.text;
            target = range.parentElement();
        }
        if (typeof text !== 'string') {
            return [];
        }
        try {
            while (target && target.nodeType !== 1) {
                target = target.parentNode;
            }
        }
        catch (e) {
            // Бывает такое, что target попадает на элемент, к свойствам которого у нас нет доступа. Например, какая-то внутренняя вёрстка html5-инпутов в firefox.
            // Ну нет доступа, так нет.
            return [];
        }
        if (!target) {
            return [];
        }
        // Обратить внимание: isEU для обфускации здесь не учитывается (так было в старом коде)
        var obfuscate = isObfuscationNeeded(ctx, target) ||
            isDisabledKeys(ctx, target, true);
        var contents = target.getElementsByTagName('*');
        var i = 0;
        while (i < contents.length && !obfuscate) {
            var item = contents[i];
            obfuscate =
                isObfuscationNeeded(ctx, item) ||
                    isDisabledKeys(ctx, item, true);
            i += 1;
        }
        if (text !== currentSelectedText) {
            currentSelectedText = text;
            var textToSend = obfuscate
                ? /* @__PURE__ */ arrayJoin('', obfuscateFn(text.split('')))
                : text;
            return encodeSelectText(params.ctx, getVisorNowEventTime(params.ctx), textToSend);
        }
    }
    /**
     * Обрабатывает событие mouseup.
     * @param {Object} evt Объект события.
     */
    function onMouseUp(params) {
        return /* @__PURE__ */ __spreadArrays(onMouseEvent(params), (onSelectText(params) || []));
    }
    /**
     * Возвращает маску события нажатия клавиши: нажаты ли ctrl, alt, meta, shift.
     * @param {Object} evt Объект события.
     * @return {Number}
     */
    function getKeyMask(evt) {
        return ((evt.shiftKey ? K_SHIFT : 0) |
            (evt.ctrlKey ? K_CTRL : 0) |
            (evt.altKey ? K_ALT : 0) |
            (evt.metaKey ? K_META : 0) |
            (evt.ctrlKey || evt.altKey ? K_SPECIAL : 0));
    }
    /**
     * Проверяет, является ли нажатая клавиша специальной (ctrl, alt, shift, F1-F12, ...).
     * @param {Number} code Код клавиши.
     * @return {Boolean}
     */
    function isSpecialKey(code) {
        var map = {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
        };
        return (map[code] || (code >= 112 && code <= 123) || (code >= 96 && code <= 105));
    }
    /**
     * @type Boolean
     * Обрабатывается ли в данный момент событие copy. Нужно, чтобы не записать два раза одно и то же событие,
     * т.к. событие отлавливается несколькими способами.
     */
    var copyProcessing = false;
    /**
     * Обрабатывает событие copy.
     */
    function onCopy(params) {
        var buffer = [];
        if (!copyProcessing) {
            copyProcessing = true;
            if (currentSelectedText) {
                buffer.push.apply(buffer, encodeCopy(params.ctx, getVisorNowEventTime(params.ctx)));
            }
            runAsync(params.ctx, function () {
                copyProcessing = false;
            }, 'fv.c');
        }
        return buffer;
    }
    /**
     * Обрабатывает событие нажатия клавиши.
     * @param {Object} evt Объект события.
     * @param {Number} charCode Код клавиши.
     * @param {Number} mask Маска свойств события.
     */
    function onKeyEvent(ctx, evt, charCode, mask) {
        var target = getTarget(evt);
        if (!target) {
            return [];
        }
        var ignore = isIgnored(ctx, target);
        if (ignore) {
            return [];
        }
        var forceRecord = isForceRecordingEnabled(target);
        var isPrivate = isPrivateInformationField(target);
        var privateFlag = isObfuscationNeeded(ctx, target);
        var globalStorage = getGlobalStorage(ctx);
        if (!forceRecord &&
            ((isPrivate && globalStorage.getVal(IS_EU_CONFIG_KEY)) ||
                isDisabledKeys(ctx, target))) {
            return [];
        }
        return /* @__PURE__ */ __spreadArrays(appendElementsToQueue(ctx, target), encodeKeyDown(ctx, getVisorNowEventTime(ctx), charCode, mask, target, privateFlag));
    }
    /**
     * @type Boolean
     * Нужно ли обрабатывать событие keypress. Если всю нужную информацию удалось вытащить из keydown, то
     * событие keypress обрабатывать не надо.
     */
    var keyPressNeeded = true;
    /**
     * Обрабатывает событие keydown.
     * @param {Object} evt Объект события.
     */
    function onKeyDown(params) {
        var ctx = params.ctx;
        var evt = params.evt;
        var code = evt.keyCode;
        var mask = getKeyMask(evt);
        var buffer = [];
        var bufferPusher = /* @__PURE__ */ bindArg(buffer, arrayMerge);
        if (isSpecialKey(code) || mask & K_SPECIAL) {
            // В keydown обрабатываем только спец. клавиши
            if (code === 19 && (mask & ~K_SPECIAL) === K_CTRL) {
                // NumLock при нажатом Ctrl превращается в Break
                code = 144;
            }
            bufferPusher(onKeyEvent(ctx, evt, code, mask | K_SPECIAL));
            keyPressNeeded = false;
            runAsync(ctx, function () {
                keyPressNeeded = true;
            }, 'fv.kd');
            if (code === 67 &&
                mask & K_CTRL &&
                !(mask & K_ALT) &&
                !(mask & K_SHIFT)) {
                // Нажали CTRL+C
                bufferPusher(onCopy(params));
            }
        }
        return buffer;
    }
    /**
     * @type Boolean
     * Обрабатывается ли в данный момент событие keypress. Используется, чтобы отбросить повторяющиеся генерации
     * события от одного нажатия клавиши.
     */
    var keyPressProcessing = false;
    /**
     * Обрабатывает событие keypress.
     * @param {Object} evt Объект события.
     */
    function onKeyPress(params) {
        var ctx = params.ctx;
        var evt = params.evt;
        var buffer = [];
        if (keyPressNeeded && !keyPressProcessing && evt.which !== 0) {
            buffer.push.apply(buffer, onKeyEvent(ctx, evt, evt.charCode || evt.keyCode, getKeyMask(evt)));
            // Некоторые браузеры посылают keypress несколько раз
            keyPressProcessing = true;
            runAsync(ctx, function () {
                keyPressProcessing = false;
            }, 'fv.kp');
        }
        return buffer;
    }
    function onSubmit(params) {
        var ctx = params.ctx, evt = params.evt;
        var form = getTarget(evt);
        if (!form || isDisabledForm(ctx, form)) {
            return [];
        }
        var buffer = [];
        if (form.nodeName === 'FORM') {
            var elements = form.elements;
            for (var i = 0; i < elements.length; i += 1) {
                if (!isEmptyField(elements[i])) {
                    buffer.push.apply(buffer, appendElementsToQueue(ctx, elements[i]));
                }
            }
            buffer.push.apply(buffer, encodeSubmit(ctx, getVisorNowEventTime(params.ctx), form));
        }
        return buffer;
    }
    function onMouseLeaveFlush(params) {
        var evt = params.evt, flush = params.flush;
        var target = getTarget(evt);
        var nodeName = getNodeName(target);
        if (nodeName === 'BODY') {
            flush();
        }
    }

    var wrapEventHandlersErrorLogger = curry2(function (ctx, item) {
        var logger = bindArgs([ctx, "efv." + item.event], errorLogger);
        item.callbacks = /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, logger), item.callbacks);
        return item;
    });
    var processRawTransformersMap = function (ctx, items) {
        var filtered = /* @__PURE__ */ cFilter(function (item) { return item.callbacks.length > 0; }, items);
        var mixDefault = ctxMix({ target: ctx.document, type: 'document' });
        return /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, mixDefault, wrapEventHandlersErrorLogger(ctx)), filtered);
    };
    var getTransformersMapFormvisor = /* @__PURE__ */ memo(function (ctx) {
        /**
         * TODO: (Потенциальное улучшение) (комментарий от erdmko)
         * Как вариант можно не делать списки а дописывать функции через pipe.
         * Например: documentBlurCallbacks = firstArg if (ctx.document.addEventListener) documentBlurCallbacks = pipe(documentBlurCallbacks, asSideEffect(onWindowBlur))
         * тогда в дальнейшем при подписке не нужно будет их перебирать в cForEach и писать там новую функцию
         */
        var documentBlurCallbacks = [];
        var documentFocusInCallbacks = [];
        var documentFocusOutCallbacks = [];
        if (ctx.document.attachEvent && !ctx.opera) {
            documentBlurCallbacks.push(onWindowBlur);
            documentFocusInCallbacks.push(onWindowFocusIn);
            documentFocusInCallbacks.push(onWindowFocusOut);
        }
        // @ts-expect-error
        if (ctx.document.addEventListener) {
            documentBlurCallbacks.push(onFieldBlur);
        }
        else {
            documentFocusInCallbacks.push(onFieldFocus);
            documentFocusOutCallbacks.push(onFieldBlur);
        }
        var raw = /* @__PURE__ */ __spreadArrays([
            // Это нужно чтобы триггернуть forceFlush
            {
                target: ctx,
                type: 'window',
                event: 'beforeunload',
                callbacks: [noop],
            },
            {
                target: ctx,
                type: 'window',
                event: 'unload',
                callbacks: [noop],
            },
            {
                event: 'click',
                callbacks: [onMouseEvent],
            },
            {
                event: 'dblclick',
                callbacks: [onMouseEvent],
            },
            {
                event: 'mousedown',
                callbacks: [onMouseEvent],
            },
            {
                event: 'mouseup',
                callbacks: [onMouseUp],
            },
            {
                event: 'keydown',
                callbacks: [onKeyDown],
            },
            {
                event: 'keypress',
                callbacks: [onKeyPress],
            },
            {
                event: 'copy',
                callbacks: [onCopy],
            },
            // Для следующих событий колбэки определяются
            // в самом начале функции (чтобы избежать дублирования)
            {
                event: 'blur',
                callbacks: documentBlurCallbacks,
            },
            {
                event: 'focusin',
                callbacks: documentFocusInCallbacks,
            },
            {
                event: 'focusout',
                callbacks: documentFocusOutCallbacks,
            }
        ], (!ctx.document.attachEvent || ctx.opera
            ? [
                {
                    target: ctx,
                    type: 'window',
                    event: 'focus',
                    callbacks: [onWindowFocus],
                },
                {
                    target: ctx,
                    type: 'window',
                    event: 'blur',
                    callbacks: [onWindowBlur],
                },
            ]
            : []), (ctx.document.addEventListener
            ? [
                {
                    event: 'focus',
                    callbacks: [onFieldFocus],
                },
                {
                    event: 'change',
                    callbacks: [onFieldChange],
                },
                {
                    event: 'submit',
                    callbacks: [onSubmit],
                },
            ]
            : [
                {
                    type: 'formInput',
                    event: 'change',
                    callbacks: [onFieldChange],
                },
                {
                    type: 'form',
                    event: 'submit',
                    callbacks: [onSubmit],
                },
            ]));
        return processRawTransformersMap(ctx, raw);
    });
    var getFlushMap = /* @__PURE__ */ memo(function (ctx) {
        return /* @__PURE__ */ __spreadArrays((getBody(ctx)
            ? [
                {
                    target: ctx,
                    type: 'document',
                    event: 'mouseleave',
                    callbacks: [onMouseLeaveFlush],
                },
            ]
            : []));
    });
    var eventsWithForceFlushFormvisor = [
        'submit',
        'beforeunload',
        'unload',
    ];
    var getKey = function (targetType, eventType) {
        return targetType + ":" + eventType;
    };
    var getCallbacksHashMap = /* @__PURE__ */ memo(function (ctx, getTransformersMap) {
        var map = getTransformersMap(ctx);
        return cReduce(function (acc, item) {
            var type = item.type, event = item.event;
            var key = getKey(type, event);
            acc[key] = item.callbacks;
            return acc;
        }, {}, map);
    });
    var getCallbacks = function (getTransformersMap, ctx, targetType, eventType) {
        var callbacksHashMap = getCallbacksHashMap(ctx, getTransformersMap);
        var key = getKey(targetType, eventType);
        return callbacksHashMap[key] || [];
    };
    var getCallbacksFormvisor = /* @__PURE__ */ bindArg(getTransformersMapFormvisor, getCallbacks);

    var submitRegex = /^\s*function submit\(\)/;
    var formvisorProvider = function (ctx, buffer, getTransformersMap, eventsWithForceFlush) {
        var doc = ctx.document;
        var unsubscribeFns = [];
        var eventSubscriber = cEvent(ctx);
        var submitName = ":submit" + Math.random();
        var forms = [];
        var flush = bind(buffer.flush, buffer);
        var eventCallback = curry2(function (targetType, event) {
            errorLogger(ctx, "hfv." + targetType, function () {
                var type;
                try {
                    (type = event.type);
                }
                catch (e) {
                    return;
                }
                var isForceFlushRequired = includes(type, eventsWithForceFlush);
                buffer.push(event, { type: targetType });
                if (isForceFlushRequired) {
                    flush();
                }
            })();
        });
        var subscribeToEvents = errorLogger(ctx, "sfv", function () {
            if (isMetrikaPlayer(ctx)) {
                return;
            }
            var transformersMap = getTransformersMap(ctx);
            var flushMap = getFlushMap(ctx);
            // Стандартные события добавляющие данные в buffer
            cForEach(function (item) {
                unsubscribeFns.push(eventSubscriber.on(item.target, [item.event], eventCallback(item.type)));
            }, transformersMap);
            // События вызывающие flush
            cForEach(function (item) {
                unsubscribeFns.push(eventSubscriber.on(item.target, [item.event], errorLogger(ctx, "hff." + item.type + "." + item.event, function (event) {
                    cForEach(cont({ ctx: ctx, evt: event, flush: flush }), item.callbacks);
                })));
            }, flushMap);
            forms = querySelectorByTagName(ctx, 'form', doc);
            // Специальная подписка на события форм в старых IE
            if (doc.attachEvent) {
                var formElements = querySelectorByTagName(ctx, 'form *', doc);
                cForEach(function (form) {
                    unsubscribeFns.push(eventSubscriber.on(form, ['submit'], eventCallback('form')));
                }, forms);
                cForEach(function (elem) {
                    if (isCommonInput(elem)) {
                        unsubscribeFns.push(eventSubscriber.on(elem, ['change'], eventCallback('formInput')));
                    }
                }, formElements);
            }
            // Обработка submit в формах
            cForEach(function (form) {
                var submit = form.submit;
                /**
                 * Если в форме есть элемент с name="submit",
                 * то свойство submit у формы указывает на него.
                 * При подмене такого свойства IE8 и меньше кидает ошибку.
                 * Но т.к. submit в такой форме не функция (и отправить форму вручную нельзя),
                 * то и подменять мы её не будем.
                 */
                if (isFunction(submit) ||
                    (typeof submit === 'object' && submitRegex.test("" + submit))) {
                    // Здесь нужен param-reassign
                    // eslint-disable-next-line no-param-reassign
                    form[submitName] = submit;
                    // eslint-disable-next-line no-param-reassign, func-names
                    form.submit = errorLogger(ctx, 'fv', function () {
                        var evt = {
                            target: form,
                            type: 'submit',
                        };
                        eventCallback('document')(evt);
                        return form[submitName]();
                    });
                }
            }, forms);
        });
        var unsubscribeFromEvents = errorLogger(ctx, "ufv", function () {
            // Отписка от обычных событий
            cForEach(call, unsubscribeFns);
            // Отписка от сабмита формы
            cForEach(function (form) {
                if (form) {
                    // eslint-disable-next-line no-param-reassign
                    form.submit = form[submitName];
                }
            }, forms);
            buffer.flush();
        });
        return {
            start: subscribeToEvents,
            stop: unsubscribeFromEvents,
        };
    };

    var VISIT_COLOR_COOKIE_NAME = 'visorc';
    var VISIT_COLOR_WHITE = 'w';
    var VISIT_COLOR_BLACK = 'b';
    var operaMiniRegex = /opera mini/i;
    var isVisitColorWhite = function (ctx, counterSettings) {
        var cookie = globalCookieStorage(ctx);
        var visitColor = cookie.getVal(VISIT_COLOR_COOKIE_NAME);
        if (!includes(visitColor, [VISIT_COLOR_WHITE, VISIT_COLOR_BLACK])) {
            visitColor = '';
        }
        if (!checkCookie(ctx) ||
            !isCookieAllowed(ctx, getCookie, VISIT_COLOR_COOKIE_NAME) ||
            operaMiniRegex.test(getAgent(ctx) || '')) {
            visitColor = VISIT_COLOR_BLACK;
        }
        var samplingShare = getPath(counterSettings, 'settings.webvisor.recp');
        if (!ctx.isFinite(samplingShare) ||
            samplingShare < 0 ||
            samplingShare > 1) {
            visitColor = VISIT_COLOR_WHITE;
        }
        if (!visitColor) {
            visitColor =
                (getGlobalStorage(ctx).getVal('hitId') % 10000) / 10000 <
                    samplingShare
                    ? 'w'
                    : 'b';
        }
        cookie.setVal(VISIT_COLOR_COOKIE_NAME, visitColor, 30);
        return visitColor === VISIT_COLOR_WHITE;
    };

    var useCommonVisorProvider = function (ctx, counterOpt, serializer, getTransformersMap, eventsWithForceFlush) {
        var isWebvisorEnabled =  counterOpt.webvisor;
        if (!isWebvisorEnabled) {
            return PolyPromise.resolve(noop);
        }
        var sender = getSender(ctx, FORMVISOR_DATA_PROVIDER, counterOpt);
        var senderOpt = {
            urlParams: {
                'wv-type': WEBVISOR_TYPE_WEBVISOR_FIRST,
            },
            brInfo: browserInfo(),
        };
        var senderFunction = function (data, _, partNumber) {
            if (!sender) {
                return;
            }
            var serialized = "wv-data=" + encodeBase64(data, true);
            sender(mix({}, senderOpt, {
                rBody: serialized,
                urlParams: {
                    'wv-check': fletcher(data),
                    'wv-type': WEBVISOR_TYPE_WEBVISOR_FIRST,
                },
            }), counterOpt, partNumber)["catch"](errorLogger(ctx, 'm.n.m.s'));
        };
        var buffer = new VisorBuffer(ctx, serializer, senderFunction);
        var formvisor = formvisorProvider(ctx, buffer, getTransformersMap, eventsWithForceFlush);
        var start = function (counterSettings) {
            if (isOptoutEnabled(ctx) || !formvisor) {
                return;
            }
            if (isVisitColorWhite(ctx, counterSettings)) {
                formvisor.start();
            }
        };
        var destruct = function () {
            if (formvisor) {
                formvisor.stop();
            }
        };
        return getCounterSettings(ctx, counterOpt, 
        // В трансформерах isEU берется из globalStorage,
        // нужно чтобы он там точно был (дублируем код из counterFirstHit)
        function (counterSettings) {
            if (counterSettings) {
                var globalConfig = getGlobalStorage(ctx);
                globalConfig.setVal(IS_EU_CONFIG_KEY, getPath(counterSettings, 'settings.eu'));
            }
            start(counterSettings);
            return destruct;
        });
    };
    var useFormvisorProviderRaw = function (ctx, counterOpt) {
        var isWebvisorEnabled =  counterOpt.webvisor;
        if (!isWebvisorEnabled) {
            return PolyPromise.resolve(noop);
        }
        var serializer = new FormvisorSerializer(ctx, getCallbacksFormvisor);
        return useCommonVisorProvider(ctx, counterOpt, serializer, getTransformersMapFormvisor, eventsWithForceFlushFormvisor);
    };
    var useFormvisorProvider = /* @__PURE__ */ ctxErrorLogger('fw.p', useFormvisorProviderRaw);

    var PRERENDER_BR_KEY = 'pq';
    var usePrerenderProvider = /* @__PURE__ */ ctxErrorLogger('pr.p', function (ctx, counterOpt) {
        var _a, _b;
        if (isPrerender(ctx)) {
            var sender = getSender(ctx, PRERENDER_PROVIDER, counterOpt);
            var brInfo = browserInfo((_a = {},
                _a[PRERENDER_BR_KEY] = 1,
                _a[ARTIFICIAL_BR_KEY] = 1,
                _a));
            sender({
                brInfo: brInfo,
                urlParams: (_b = {},
                    _b[WATCH_URL_PARAM] = getLocation(ctx).href,
                    _b[WATCH_REFERER_PARAM] = getPath(ctx, 'document.referrer') || '',
                    _b),
            }, counterOpt)["catch"](errorLogger(ctx, 'pr.p.s'));
        }
    });

    var deobfuscate = /* @__PURE__ */ pipe(cKeys, /* @__PURE__ */ ctxPath('0'));

    var WEBVISOR = '_webvisor';

    var trackClicks = function (setVal, rawParams) {
        var _a;
        setVal((_a = {},
            _a[COUNTER_STATE_CLICKMAP] = isUndefined(rawParams) ? true : rawParams,
            _a));
    };
    var useClickmapMethodProvider = /* @__PURE__ */ ctxErrorLogger('c.m.p', function (ctx, counterOptions) {
        var counterKey = getCounterKey(counterOptions);
        return /* @__PURE__ */ bindArg(counterStateSetter(ctx, counterKey), trackClicks);
    });

    var useEnableAllProvider = /* @__PURE__ */ ctxErrorLogger('e.a.p', function (ctx, counterOptions) {
        var counter = getCounterInstance(ctx, counterOptions);
        var enableAll = bindArgs([
            /* @__PURE__ */ pipe(firstArg, cont(true)),
            /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(counter, getPath), [
                METHOD_NAME_CLICK_MAP,
                METHOD_NAME_TRACK_LINKS,
                METHOD_NAME_ACCURATE_TRACK_BOUNCE,
            ])),
        ], cMap);
        if (counterOptions.enableAll) {
            enableAll();
        }
        return enableAll;
    });

    var setProviderInfo = function (ctx, counterOptions) {
        var localStorage = globalLocalStorage(ctx);
        // тут ждем что мидлвара скажет что нам нужно в этом браузере собирать эту проклейку
        if (localStorage.getVal(CC_VAR) !== CC_VAR_DEFAULT) {
            return 0;
        }
        var setValFn = /* @__PURE__ */ bindArg(CC_VAR, localStorage.setVal);
        // Отключаем init другим счетчикам см код в crossDomain
        setValFn(0);
        var time = TimeOne(ctx);
        var globalStorage = getGlobalStorage(ctx);
        var handler = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath(deobfuscate({ responseData: 1 }) + ".c"), asSideEffect(function (info) {
            setValFn(info + "&" + time(getMin));
        }), /* @__PURE__ */ bindArg(CC_VAR, globalStorage.setVal));
        var sender = getSender(ctx, CACHE_PROVIDER, counterOptions);
        sender({})
            .then(handler)["catch"](/* @__PURE__ */ pipe(asSideEffect(function () {
            var min = time(getMin);
            localStorage.setVal(CC_VAR, "&" + min);
        }), errorLogger(ctx, 'cc')));
        return undefined;
    };
    var cacheProvider = /* @__PURE__ */ ctxErrorLogger('cc.i', function (ctx, counterOptions) {
        var fn = bindArgs([ctx, counterOptions], setProviderInfo);
        var defer = bindArgs([ctx, fn, 300], setDefer);
        getCounterSettings(ctx, counterOptions, defer);
    });

    function destructingDecorator(ctx, counterOptions, methodName, fn) {
        return function destructing() {
            var counter = getCounterInstance(ctx, counterOptions);
            // eslint-disable-next-line prefer-rest-params
            var fnArgs = argsToArray(arguments);
            if (!counter) {
                return undefined;
            }
            return fn.apply(void 0, fnArgs);
        };
    }

    var GOAL_PREFIX = 'btn';
    var handleClick = function (ctx, counterOptions, target) {
        if (target) {
            var button = closestButton(ctx, target);
            var data = getButtonData(ctx, button);
            if (data) {
                var query = "?" + stringify(data);
                var logGoals = getLoggerFn(ctx, counterOptions, "Button goal. Counter " + counterOptions.id + ". Button: " + query + ".");
                useGoal(ctx, counterOptions, GOAL_PREFIX, logGoals)(query);
            }
        }
    };
    var useClickTracking = /* @__PURE__ */ ctxErrorLogger('s.f.i', function (ctx, counterOptions) {
        return getCounterSettings(ctx, counterOptions, function (counterSettings) {
            if (getPath(counterSettings, 'settings.button_goals') ||
                getLocation(ctx).href.indexOf('yagoalsbuttons=1') !== -1) {
                cEvent(ctx).on(ctx, ['click'], errorLogger(ctx, 'c.t.c', /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('target'), bindArgs([ctx, counterOptions], destructingDecorator(ctx, counterOptions, '', handleClick)))));
                getLoggerFn(ctx, counterOptions, "Button goal. Counter " + counterOptions.id + ". Init.")();
            }
        });
    });

    var INTERFACE_NAME = 'AppMetricaInitializer';
    var INIT_FN_NAME = 'init';
    var FUNCTION_WAIT_TIME = 10;
    var COUNTER_KEY = 'c';
    var timeoutId;
    var waitForInit = function (ctx, data, prevTimeout) {
        var appMetricaInterface = getPath(ctx, INTERFACE_NAME);
        var init = getPath(appMetricaInterface, INIT_FN_NAME);
        if (init) {
            try {
                var initFn = bind(init, appMetricaInterface);
                initFn(stringify$1(ctx, data));
            }
            catch (e) { }
        }
        else {
            timeoutId = setDefer(ctx, bindArgs([ctx, data, prevTimeout * 2], waitForInit), prevTimeout, 'ai.d');
        }
        // если использовать bind, то сбрасывать всегда будем timeoutId из первой итерации
        return function () { return clearDefer(ctx, timeoutId); };
    };
    var appMetricaInitializerProvider = function (ctx, counterOptions) {
        return new PolyPromise(function (resolve) {
            if (isAndroidWebView(ctx) || isSafariWebView(ctx)) {
                resolve(getCounterSettings(ctx, counterOptions, function (counterSettings) {
                    var _a;
                    var sbp = getPath(counterSettings, 'settings.sbp');
                    return sbp
                        ? waitForInit(ctx, mix({}, sbp, (_a = {},
                            _a[COUNTER_KEY] = counterOptions.id,
                            _a)), FUNCTION_WAIT_TIME)
                        : noop;
                }));
            }
            resolve(noop);
        });
    };
    var useAppMetricaInitializer = /* @__PURE__ */ ctxErrorLogger('p.ai', appMetricaInitializerProvider);

    function telemetryCallCountDecorator(ctx, counterOptions, methodName, fn) {
        var methodKey = METHODS_TELEMETRY_KEYS_MAP[methodName];
        if (methodKey) {
            return function telemetry() {
                // eslint-disable-next-line prefer-rest-params
                var fnArgs = argsToArray(arguments);
                try {
                    fn.apply(void 0, fnArgs);
                    var globalStorage = getGlobalStorage(ctx);
                    globalStorage.setSafe(METHODS_TELEMETRY_GLOBAL_STORAGE_KEY, {});
                    var methodsCallCounters = globalStorage.getVal(METHODS_TELEMETRY_GLOBAL_STORAGE_KEY);
                    var previouslyCalled = methodsCallCounters[methodKey];
                    methodsCallCounters[methodKey] = previouslyCalled
                        ? previouslyCalled + 1
                        : 1;
                }
                catch (e) {
                    throwFunction(e);
                }
                return undefined;
            };
        }
        return fn;
    }

    var COUNTER_ID_KEY = 'c';
    var useRawUidSyncProvider = function (ctx, counterOptions) {
        return getCounterSettings(ctx, counterOptions, function (counterSettings) {
            var _a;
            var sbp = getPath(counterSettings, 'settings.sbp');
            return (sbp &&
                sync(ctx, counterSettings, {
                    counterOptions: counterOptions,
                    provider: MOBILE_UID_SYNC_PROVIDER,
                    data: mix({}, sbp, (_a = {}, _a[COUNTER_ID_KEY] = counterOptions.id, _a)),
                    lastTimeKey: UID_SYNC_TIME_NAME,
                    skipApiSave: true,
                }));
        });
    };
    var useUidSyncProvider = /* @__PURE__ */ ctxErrorLogger(MOBILE_UID_SYNC_PROVIDER, useRawUidSyncProvider);

    // сутки
    var FAKE_HIT_EXPIRE = 24 * 60 * 60 * 1000;
    var fakeHit = /* @__PURE__ */ ctxErrorLogger('p.fh', function (ctx, cache) {
        var _a, _b;
        if (cache === void 0) { cache = true; }
        var storage = globalLocalStorage(ctx);
        var time = TimeOne(ctx);
        var cacheResult = storage.getVal(FAKE_HIT_CACHE_KEY);
        var counterOpt = {
            id: FAKE_HIT_COUNTER,
            counterType: DEFAULT_COUNTER_TYPE,
        };
        if (cache &&
            cacheResult &&
            cacheResult.time + FAKE_HIT_EXPIRE > time(getMs)) {
            return PolyPromise.resolve(cacheResult);
        }
        var sender = getSender(ctx, FAKE_HIT_PROVIDER, counterOpt);
        return sender({
            brInfo: browserInfo((_a = {},
                _a[PAGE_VIEW_BR_KEY] = 1,
                _a)),
            urlParams: (_b = {},
                _b[WATCH_URL_PARAM] = getLocation(ctx).href,
                _b[WATCH_REFERER_PARAM] = ctx.document.referrer,
                _b),
        }, counterOpt)
            .then(function (result) {
            var _a;
            var out = (_a = {},
                _a[FAKE_HIT_TIME_KEY] = time(getMs),
                _a[FAKE_HIT_PARAMS_KEY] = getPath(result, 'settings'),
                _a[FAKE_HIT_BK_PARAMS_KEY] = getPath(result, 'userData'),
                _a);
            storage.setVal(FAKE_HIT_CACHE_KEY, out);
            return out;
        })["catch"](errorLogger(ctx, 'f.h'));
    });
    var provideFake = function (fakeProvider) {
        fakeProvider.push(fakeHit);
    };

    var argsToParams = function (args) {
        var callback = noop;
        var ctxInfo = null;
        var paramsEnd = args.length;
        if (args.length === 0 || !args[0]) {
            return undefined;
        }
        var lastIndex = -1;
        var last = args.slice(lastIndex)[0];
        if (isFunction(last)) {
            callback = last;
            paramsEnd = args.length + lastIndex;
        }
        var prevIndex = -2;
        var beforeLast = args.slice(prevIndex)[0];
        if (isFunction(beforeLast)) {
            callback = beforeLast;
            ctxInfo = last;
            paramsEnd = args.length + prevIndex;
        }
        var params = args.slice(0, paramsEnd);
        return {
            ctxInfo: ctxInfo,
            callback: callback,
            params: params.length === 1 ? args[0] : genPath(params),
        };
    };
    /**
     * Данный метод принимает данные двумя способами:
     * 1. var yaParam = {param1: {param2: 'param3'}};
     * yaCounter123.params(yaParam[, callback[, ctx]]); // Один параметр - JSON-объект
     *
     * 2. yaCounter123.params(level1, [level2], [level3], [...], value[, callback[, ctx]]);
     * Два и более параметров, первый и следующие - категории (строка). Последний аргумент - значение (любой тип).
     * Данный способ подходит для динамических категорий. Например для лога ошибок:
     * yaCounter123.params('{url}', '{os}', '{browser}', '{error}');
     */
    var rawParams = function (ctx, counterOptions) {
        return function a() {
            var _a, _b;
            // eslint-disable-next-line prefer-rest-params
            var args = argsToArray(arguments);
            var info = argsToParams(args);
            if (!info) {
                return null;
            }
            var ctxInfo = info.ctxInfo, params = info.params, callback = info.callback;
            if (!isObject(params) && !isArray(params)) {
                return null;
            }
            var sender = getSender(ctx, PARAMS_PROVIDER, counterOptions);
            var url = getArtificialState(counterOptions).url;
            var userId = getPath(params, '__ym.user_id');
            var paramKeys = cKeys(params);
            var isUser = includes('__ymu', paramKeys);
            var isUserID = includes('__ym', paramKeys) && userId;
            var shouldLogParams = !isCounterSilent(counterOptions);
            var logParams = getLoggerFn(ctx, counterOptions, isUserID
                ? "Set user id " + userId
                : (isUser ? 'User p' : 'P') + "arams. Counter " + counterOptions['id'], !isUserID ? JSON.stringify(params) : undefined);
            var result = sender({
                params: params,
                brInfo: browserInfo((_a = {},
                    _a[PARAMS_BR_KEY] = 1,
                    _a[ARTIFICIAL_BR_KEY] = 1,
                    _a)),
                urlParams: (_b = {},
                    _b[WATCH_URL_PARAM] = url || getLocation(ctx).href,
                    _b),
            }, counterOptions).then(shouldLogParams ? logParams : noop);
            return finallyCallUserCallback(ctx, 'p.s', result, callback, ctxInfo);
        };
    };
    var useParams = /* @__PURE__ */ ctxErrorLogger('pa.int', rawParams);

    var useExperiments = /* @__PURE__ */ ctxErrorLogger('exps.int', function (ctx, counterOptions) {
        return function (experimentName, rawCallback, rawCtx) {
            var _a, _b;
            if (rawCallback === void 0) { rawCallback = noop; }
            if (experimentName && experimentName.length > 0) {
                var sender = getSender(ctx, EXPERIMENTS_PROVIDER, counterOptions);
                var url = getArtificialState(counterOptions).url;
                var result = sender({
                    brInfo: browserInfo((_a = {},
                        _a[EXPERIMENT_BR_KEY] = 1,
                        _a[ARTIFICIAL_BR_KEY] = 1,
                        _a)),
                    urlParams: (_b = {},
                        _b[WATCH_URL_PARAM] = url || getLocation(ctx).href,
                        _b[WATCH_EXPERIMENT_PARAM] = experimentName,
                        _b),
                }, counterOptions);
                return finallyCallUserCallback(ctx, 'exps.s', result, rawCallback, rawCtx);
            }
            return undefined;
        };
    });

    var INNER_DL_PARAMS = 'params';
    var INNER_PARENT_PARAMS = 'parent';
    var INNER_COUNTER_PARAMS = 'counter';
    var SENDED_KEY = 'sended';
    var paramsHandler = function (ctx, frameSender, counterOptions, rawEvent) {
        var _a;
        var event = rawEvent;
        var counter = getCounterInstance(ctx, counterOptions);
        if (!counter) {
            return;
        }
        var params = event[IFRAME_MESSAGE_DATA];
        var stringCounterId = "" + counterOptions.id;
        var sended = event[SENDED_KEY] || [];
        if (!event[SENDED_KEY]) {
            event[SENDED_KEY] = sended;
        }
        if (
        // TODO использовать == вместо === Так как в старом счетчике
        // counterID может быть цифрой или строкой
        includes(stringCounterId, sended) ||
            !counter[METHOD_NAME_PARAMS]) {
            return;
        }
        if (!event[INNER_COUNTER_PARAMS] ||
            "" + event[INNER_COUNTER_PARAMS] === stringCounterId) {
            counter[METHOD_NAME_PARAMS](params);
        }
        else {
            return;
        }
        sended.push(stringCounterId);
        if (event[INNER_PARENT_PARAMS]) {
            frameSender.sendToParents((_a = {},
                _a[IFRAME_MESSAGE_TYPE] = INNER_DL_PARAMS,
                _a[IFRAME_MESSAGE_DATA] = params,
                _a));
        }
    };
    var useYan = /* @__PURE__ */ ctxErrorLogger('y.p', function (ctx, counterOptions) {
        var counterFrameSender = iframeSender(ctx, counterOptions);
        if (!counterFrameSender) {
            return;
        }
        var innerDataLayer = getInnerDataLayer(ctx);
        var onParams = bindArgs([ctx, counterFrameSender, counterOptions], paramsHandler);
        innerDataLayerObserver(ctx, innerDataLayer, function (beforeInitEmitter) {
            beforeInitEmitter.on(INNER_DL_PARAMS, onParams);
        });
        counterFrameSender.emitter.on(INNER_DL_PARAMS, /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('1'), onParams));
    });

    var INSERT_SCRIPT_COOKIE = 'debug_build';
    var insertDebugScript = globalMemoWin('is', function (ctx) {
        var cookieStorage = globalCookieStorage(ctx);
        // versionNo + 1342304375
        var key = "" + config.buildVersion + fnv32a('Wjw75ghm7fa7JW8p');
        var loc = getLocation(ctx);
        if (loc.hash.substring(1, key.length + 1) === key ||
            cookieStorage.getVal(INSERT_SCRIPT_COOKIE) === config.buildVersion) {
            cookieStorage.setVal(INSERT_SCRIPT_COOKIE, config.buildVersion);
            return loadScript(ctx, {
                src: 'https://yastatic.net/metrika-static-watch/tag.js',
            });
        }
        return undefined;
    });

    var STACK_FN_NAME = 'ym';
    var STACK_DATA_LAYER_NAME = 'a';
    var getProxyState = /* @__PURE__ */ memo(constructObject);
    var getCounterIdFromSrc = /* @__PURE__ */ pipe(/* @__PURE__ */ bindThisForMethod('exec', /counterID=(\d+)/), /* @__PURE__ */ ctxPath('1'));
    var getCounterAndOptions = function (ctx, counterKey) {
        var counterKeyStr = "" + counterKey;
        var counterOptions = {
            id: 1,
            counterType: DEFAULT_COUNTER_TYPE,
        };
        var urlCounterId = getCounterIdFromSrc(counterKeyStr);
        if (urlCounterId) {
            counterOptions.id = urlCounterId;
        }
        else if (counterKeyStr.indexOf(':') === -1) {
            var counterId = parseInt(counterKeyStr, 10);
            counterOptions.id = counterId;
        }
        else {
            var _a = counterKeyStr.split(':'), id = _a[0], classInfo = _a[1];
            counterOptions.id = parseInt(id, 10);
            counterOptions.counterType = isRsyaCounter(classInfo)
                ? RSYA_COUNTER_TYPE
                : DEFAULT_COUNTER_TYPE;
        }
        return [getCounterInstance(ctx, counterOptions), counterOptions];
    };
    var handleCall = curry2(function (ctx, item) {
        var anyCtx = ctx;
        var state = getProxyState(ctx);
        var _a = toArray(item), counterKey = _a[0], method = _a[1], args = _a.slice(2);
        if (!method) {
            return;
        }
        var _b = getCounterAndOptions(ctx, counterKey), counter = _b[0], counterOptions = _b[1];
        var stateKey = getCounterKey(counterOptions);
        if (!state[stateKey]) {
            state[stateKey] = {};
        }
        var counterInfo = state[stateKey];
        if (method === 'init') {
            var counterGlobalName = "yaCounter" + counterOptions.id;
            if (anyCtx[counterGlobalName]) {
                return;
            }
            var options = args[0];
            {
                var isDebugEnabled = insertDebugScript(ctx);
                if (isDebugEnabled) {
                    return;
                }
            }
            anyCtx[counterGlobalName] = new anyCtx[yandexNamespace][config.constructorName](mix({}, options, counterOptions));
        }
        else if (counter && counter[method] && counterInfo.inited) {
            counter[method].apply(counter, args);
        }
        else {
            var stackList = counterInfo.stackList;
            if (!stackList) {
                stackList = [];
                counterInfo.stackList = stackList;
            }
            stackList.push(/* @__PURE__ */ __spreadArrays([counterKey, method], args));
        }
    });
    var checkStack = function (ctx, counterOptions) {
        var state = getProxyState(ctx);
        var counterKey = getCounterKey(counterOptions);
        var counterInfo = state[counterKey];
        if (!counterInfo) {
            counterInfo = {};
            state[counterKey] = counterInfo;
        }
        // only first js file can handle items in stack
        counterInfo.inited = true;
        var stackList = counterInfo.stackList;
        if (!stackList) {
            return;
        }
        var onStack = handleCall(ctx);
        cForEach(onStack, stackList);
    };
    var stackProxy = function (ctx) {
        var fn = getPath(ctx, STACK_FN_NAME);
        if (!fn) {
            return;
        }
        var dataLayer = getPath(fn, STACK_DATA_LAYER_NAME);
        if (!dataLayer) {
            fn[STACK_DATA_LAYER_NAME] = [];
            dataLayer = fn[STACK_DATA_LAYER_NAME];
        }
        var onStack = handleCall(ctx);
        dataLayerObserver(ctx, dataLayer, function (observer) {
            observer.on(onStack);
        }, true);
    };

    var _a$d, _b$2;
    var ECOMMERCE_ITEMS = 'items';
    var ECOMMERCE_PRODUCTS = 'products';
    var ECOMMERCE_ACTION_FIELD = 'actionField';
    var ECOMMERCE_CURRENCY = 'currencyCode';
    var GTAG_CURRENCY = 'currency';
    var GTAG_CATEGORY = 'item_category';
    var GTAG_EVENT_PURCHASE = 'purchase';
    var GTAG_EVENT_CHECKOUT = 'checkout';
    var GTAG_EVENT_REMOVE = 'remove';
    var GTAG_EVENT_ADD = 'add';
    var GTAG_EVENT_DETAIL = 'detail';
    var GTAG_REPLACE_KEYS = (_a$d = {},
        _a$d['transaction_id'] = 'id',
        _a$d['item_id'] = 'id',
        _a$d['item_name'] = 'name',
        _a$d['item_brand'] = 'brand',
        _a$d['promotion_name'] = 'coupon',
        _a$d['index'] = 'position',
        _a$d['item_variant'] = 'variant',
        _a$d['value'] = 'revenue',
        _a$d[GTAG_CATEGORY] = 'category',
        _a$d);
    var GTAG_EVENTS = (_b$2 = {},
        _b$2['view_item'] = GTAG_EVENT_DETAIL,
        _b$2['add_to_cart'] = GTAG_EVENT_ADD,
        _b$2['remove_from_cart'] = GTAG_EVENT_REMOVE,
        _b$2['begin_checkout'] = GTAG_EVENT_CHECKOUT,
        _b$2[GTAG_EVENT_PURCHASE] = GTAG_EVENT_PURCHASE,
        _b$2);
    /**
     * @see METR-23618
     */
    var ECOMMERCE_ALLOWED_EVENTS = [
        ECOMMERCE_CURRENCY,
        GTAG_EVENT_ADD,
        'delete',
        GTAG_EVENT_REMOVE,
        GTAG_EVENT_PURCHASE,
        GTAG_EVENT_CHECKOUT,
        GTAG_EVENT_DETAIL,
    ];

    var METHOD_NAME_ECOMMERCE_ADD = 'ecommerceAdd';
    var METHOD_NAME_ECOMMERCE_REMOVE = 'ecommerceRemove';
    var METHOD_NAME_ECOMMERCE_DETAIL = 'ecommerceDetail';
    var METHOD_NAME_ECOMMERCE_PURCHASE = 'ecommercePurchase';
    var ECOMMERCE_GOODS = 'goods';

    var itemsMappingField = function (item) {
        var formattedItem = {};
        cForEach(function (key) {
            var iteKey = GTAG_REPLACE_KEYS[key] || key;
            if (key.indexOf(GTAG_CATEGORY) !== -1) {
                var categoryKey = GTAG_REPLACE_KEYS[GTAG_CATEGORY];
                if (!formattedItem[categoryKey]) {
                    formattedItem[categoryKey] = item[key];
                }
                else {
                    formattedItem[categoryKey] += "/" + item[key];
                }
            }
            else {
                formattedItem[iteKey] = item[key];
            }
        }, cKeys(item));
        return formattedItem;
    };
    // https://developers.google.com/tag-manager/ecommerce-ga4
    var dataGTagFormatToEcommerceFormat = function (methodName, data, itemsField) {
        var _a, _b;
        if (!data) {
            return undefined;
        }
        var ecommerceData = data[GTAG_EVENT_PURCHASE] || data;
        var ecommerceKeys = cKeys(ecommerceData);
        var items = ecommerceData[itemsField];
        if (!items) {
            return undefined;
        }
        var result = (_a = {},
            _a[methodName] = (_b = {},
                _b[ECOMMERCE_PRODUCTS] = /* @__PURE__ */ cMap(itemsMappingField, items),
                _b),
            _a);
        if (ecommerceKeys.length > 1) {
            result[methodName][ECOMMERCE_ACTION_FIELD] = cReduce(function (itemObj, key) {
                if (key === itemsField) {
                    return itemObj;
                }
                if (key === GTAG_CURRENCY) {
                    result[ECOMMERCE_CURRENCY] = ecommerceData[GTAG_CURRENCY];
                    return itemObj;
                }
                itemObj[GTAG_REPLACE_KEYS[key] || key] = ecommerceData[key];
                return itemObj;
            }, {}, ecommerceKeys);
        }
        return result;
    };
    var validateEcommerceData = function (eventType, data, ctx) {
        var isValid = false;
        var message = '';
        if (!isObject(data)) {
            consoleLog(ctx, 'Ecommerce data should be an object');
            return isValid;
        }
        var goods = data[ECOMMERCE_GOODS];
        switch (eventType) {
            case 'detail':
            case 'add':
            case 'remove':
                if (isArray(goods) && goods.length) {
                    isValid = cEvery(function (item) {
                        return isObject(item) &&
                            (isString(item['id']) ||
                                isNumber(ctx, item['id']) ||
                                isString(item['name']));
                    }, goods);
                    if (!isValid) {
                        message =
                            "All items in 'goods' should be objects and contain 'id' or 'name' field";
                    }
                }
                else {
                    message =
                        "Ecommerce data should contain 'goods' non-empty array";
                }
                break;
            case 'purchase':
                if (isNumber(ctx, data['id']) || isString(data['id'])) {
                    isValid = true;
                }
                else {
                    message =
                        "Purchase object should contain string or number 'id' field";
                }
                break;
        }
        consoleLog(ctx, message);
        return isValid;
    };

    var ECOMMERCE_WAIT_TIME = 1000;
    var waitForDataLayer = /* @__PURE__ */ ctxErrorLogger('dl.w', function (ctx, name, cb) {
        var emitter = dataLayerObserver(ctx, ctx[name], function (dataLayerEmitter) {
            cb(dataLayerEmitter);
        });
        var timeoutId;
        if (!emitter) {
            timeoutId = setDefer(ctx, function () {
                waitForDataLayer(ctx, name, cb);
            }, ECOMMERCE_WAIT_TIME, 'ec.dl');
        }
        return bind(clearDefer, null, ctx, timeoutId);
    });
    var handleGtagEcommerce = function (ctx, rawEvent) {
        var event = rawEvent;
        if (!isArray(rawEvent) && isNumber(ctx, len(rawEvent))) {
            event = argsToArray(event);
        }
        if (!isArray(event)) {
            return undefined;
        }
        var nameSpace = event[0], method = event[1], data = event[2];
        var eventName = GTAG_EVENTS[method];
        if (!(nameSpace === 'event' && eventName)) {
            return undefined;
        }
        return dataGTagFormatToEcommerceFormat(eventName, data, ECOMMERCE_ITEMS);
    };
    var handleGtag4Ecommerce = function (event) {
        var ecommerce = getPath(event, 'ecommerce') || {};
        var eventType = getPath(event, 'event') || '';
        var eventName = GTAG_EVENTS[eventType];
        if (!eventName) {
            return undefined;
        }
        return dataGTagFormatToEcommerceFormat(eventName, ecommerce, ECOMMERCE_ITEMS);
    };
    var handleEcommerce = function (event) {
        var ecommerce = getPath(event, 'ecommerce') || {};
        var allowedKeys = /* @__PURE__ */ cFilter(/* @__PURE__ */ ctxIncludes(ECOMMERCE_ALLOWED_EVENTS), cKeys(ecommerce));
        var ecommerceData = cReduce(function (collector, key) {
            collector[key] = ecommerce[key];
            return collector;
        }, {}, allowedKeys);
        return cKeys(ecommerceData).length ? ecommerceData : undefined;
    };
    var handleEvent = function (ctx, sendParams, event) {
        var _a, _b;
        var result = handleGtag4Ecommerce(event) ||
            handleGtagEcommerce(ctx, event) ||
            handleEcommerce(event);
        if (result) {
            {
                dispatchDebuggerEvent(ctx, {
                    name: 'ecommerce',
                    data: result,
                });
            }
            if (sendParams) {
                sendParams((_a = {},
                    _a['__ym'] = (_b = {},
                        _b['ecommerce'] = [result],
                        _b),
                    _a));
            }
        }
    };
    var ecommerce = /* @__PURE__ */ ctxErrorLogger('p.e', function (ctx, counterOptions) {
        var counter = getCounterInstance(ctx, counterOptions);
        if (!counter) {
            return undefined;
        }
        if (!counterOptions.ecommerce) {
            return undefined;
        }
        var sendParams = bind(counter[METHOD_NAME_PARAMS], counter);
        var handle = errorLogger(ctx, 'h.ee', bindArgs([ctx, sendParams], handleEvent));
        return waitForDataLayer(ctx, counterOptions.ecommerce, function (emitter) {
            emitter.on(handle);
        });
    });

    var useFidObserverProvider = /* @__PURE__ */ ctxErrorLogger(FID_VALUE, function (ctx) {
        var _a;
        var disconnect = noop;
        if (!isFunction(ctx['PerformanceObserver'])) {
            return disconnect;
        }
        var globalStorage = getGlobalStorage(ctx);
        if (globalStorage.getVal(FID_OBSERVING)) {
            return disconnect;
        }
        globalStorage.setVal(FID_OBSERVING, true);
        var callback = function (entryList) {
            var fidEntry = entryList['getEntries']()[0];
            var fid = fidEntry['processingStart'] - fidEntry['startTime'];
            globalStorage.setVal(FID_VALUE, ctx.Math.round(fid * 100));
            // событие приходит один раз, можно сразу же и завершить работу
            disconnect();
        };
        var observer = new ctx['PerformanceObserver'](errorLogger(ctx, FID_VALUE, callback));
        disconnect = function () { return observer['disconnect'](); };
        // Error: [Failed to execute 'observe' on 'PerformanceObserver': required member entryTypes is undefined.]
        // когда в браузере есть PerfObserver, но не поддерживается поле type, а только entryTypes
        // если же указать пустой список, то будет
        // Failed to execute 'observe' on 'PerformanceObserver': A Performance Observer MUST have a non-empty entryTypes attribute
        try {
            observer.observe((_a = {}, _a['type'] = 'first-input', _a['buffered'] = true, _a));
        }
        catch (_b) { }
        return disconnect;
    });

    var useLegacyEcommerce = /* @__PURE__ */ curry(function (method, ctx, counterOptions, data) {
        var _a, _b;
        var counter = getCounterInstance(ctx, counterOptions);
        if (!counter) {
            return undefined;
        }
        var isValid = validateEcommerceData(method, data, ctx);
        if (!isValid) {
            return undefined;
        }
        var sendParams = bind(counter[METHOD_NAME_PARAMS], counter);
        var result = dataGTagFormatToEcommerceFormat(method, data, ECOMMERCE_GOODS);
        if (result) {
            if (sendParams) {
                sendParams((_a = {},
                    _a['__ym'] = (_b = {},
                        _b['ecommerce'] = [result],
                        _b),
                    _a));
            }
        }
    });
    var legacyEcommerceAdd = /* @__PURE__ */ ctxErrorLogger('ecm.a', /* @__PURE__ */ useLegacyEcommerce('add'));
    var legacyEcommerceRemove = /* @__PURE__ */ ctxErrorLogger('ecm.r', /* @__PURE__ */ useLegacyEcommerce('remove'));
    var legacyEcommerceDetail = /* @__PURE__ */ ctxErrorLogger('ecm.d', /* @__PURE__ */ useLegacyEcommerce('detail'));
    var legacyEcommercePurchase = /* @__PURE__ */ ctxErrorLogger('ecm.p', /* @__PURE__ */ useLegacyEcommerce('purchase'));

    var FORM_SELECTOR = 'form';
    var closestForm = /* @__PURE__ */ ctxClosest(FORM_SELECTOR);
    var selectForms = /* @__PURE__ */ ctxSelect(FORM_SELECTOR);
    var getFormData = function (ctx, form, ignored) { return getData(ctx, form, [ID, NAME, PATH], undefined, ignored); };

    var ReplaceElementText = 'text';
    var ReplaceElementLink = 'href';
    var ANY_PHONE = '*';

    var TIMEOUT_FOR_BODY = 100;
    var waitForBodyTask = function (ctx, target) {
        if (target === void 0) { target = ctx; }
        var pathToBody = (target.nodeType ? 'contentWindow.' : '') + "document.body";
        var wait = function (resolve) {
            if (getPath(target, pathToBody)) {
                resolve();
            }
            else {
                setDefer(ctx, /* @__PURE__ */ bindArg(resolve, wait), TIMEOUT_FOR_BODY);
            }
        };
        return task(function (_, resolve) {
            wait(resolve);
        });
    };
    var waitForBody = function (ctx, target) {
        if (target === void 0) { target = ctx; }
        var pathToBody = (target.nodeType ? 'contentWindow.' : '') + "document.body";
        var wait = function (resolve) {
            if (getPath(target, pathToBody)) {
                resolve();
            }
            else {
                setDefer(ctx, /* @__PURE__ */ bindArg(resolve, wait), TIMEOUT_FOR_BODY);
            }
        };
        return new PolyPromise(wait);
    };

    var nodeToArray = function (ctx, node, filterCb) {
        var result = [];
        var resultPusher = /* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('push', result));
        if (isFunction(filterCb)) {
            var isAccepted = filterCb(node);
            if (isNil(isAccepted) || isAccepted === ctx.NodeFilter.FILTER_ACCEPT) {
                resultPusher(node);
            }
        }
        else {
            resultPusher(node);
        }
        if (node.childNodes && node.childNodes.length > 0) {
            var childNodes = node.childNodes;
            for (var i = 0, l = childNodes.length; i < l; i += 1) {
                var nodes = nodeToArray(ctx, childNodes[i]);
                cForEach(resultPusher, nodes);
            }
        }
        return result;
    };
    var walkTree = function (ctx, root, callback, filterCb, whatToSeek) {
        if (whatToSeek === void 0) { whatToSeek = -1; }
        var acceptNode = function (node) {
            if (isFunction(filterCb)) {
                return filterCb(node)
                    ? ctx.NodeFilter.FILTER_ACCEPT
                    : ctx.NodeFilter.FILTER_REJECT;
            }
            return ctx.NodeFilter.FILTER_ACCEPT;
        };
        if (isFunction(callback) &&
            acceptNode(root) === ctx.NodeFilter.FILTER_ACCEPT) {
            callback(root);
            if (!isTextNode(root)) {
                var walker = ctx.document.createTreeWalker(root, whatToSeek, filterCb ? { acceptNode: acceptNode } : null, false);
                while (walker.nextNode()) {
                    var res = callback(walker.currentNode);
                    if (res === false) {
                        break;
                    }
                }
            }
        }
    };
    var getAllNodes = function (ctx, root, filterCb) {
        var result = [];
        if (root) {
            if (ctx.document.documentElement.contains(root)) {
                walkTree(ctx, root, /* @__PURE__ */ bindThisForMethod('push', result), filterCb);
            }
            else {
                arrayMerge(result, nodeToArray(ctx, root, filterCb));
            }
        }
        return result;
    };
    var eachNode = function (ctx, root, callback, filterCb) {
        if (root) {
            var nodesList = getAllNodes(ctx, root, filterCb);
            cForEach(callback, nodesList);
        }
    };

    var phoneMask = /* @__PURE__ */ memo(function (phone) {
        /* @__PURE__ */ return arrayJoin('[^\\d<>]*', phone.split(''));
    });
    var buildRegExp = /* @__PURE__ */ memo(function (phone) { return new RegExp(phoneMask(phone), 'g'); });
    var buildAllRegExp = function (phoneChangeMap) {
        return new RegExp("(?:" + /* @__PURE__ */ arrayJoin('|', /* @__PURE__ */ cMap(phoneMask, cKeys(phoneChangeMap))) + ")");
    };
    var removeNonDigits = /* @__PURE__ */ pipe(/* @__PURE__ */ bindArg('replace', bindThisForMethod), 
    /* @__PURE__ */ ctxBindArgs([/\D/g, '']), call);
    var altPhone = function (purePhone) {
        var altMap = {
            '7': '8',
            '8': '7',
        };
        if (purePhone.length === 11) {
            if (altMap[purePhone[0]]) {
                return "" + altMap[purePhone[0]] + purePhone.slice(1);
            }
        }
        return purePhone;
    };
    var reformatPhone = function (orig, res) {
        var out = [];
        var origArr = orig.split('');
        var resArr = res.split('');
        var posRes = 0;
        for (var posOrig = 0; posOrig < orig.length; posOrig += 1) {
            if (posRes >= resArr.length) {
                break;
            }
            var origChar = origArr[posOrig];
            if (origChar >= '0' && origChar <= '9') {
                out.push(resArr[posRes]);
                posRes += 1;
            }
            else {
                out.push(origArr[posOrig]);
            }
        }
        return /* @__PURE__ */ arrayJoin('', out) + res.slice(posRes + 1);
    };
    // стрелочка не лишняя, нужна новая мапа на каждый вызов
    var genPhoneMap = function () {
        /* @__PURE__ */ return ctxReduce(function (accum, tuple) {
            var _a = /* @__PURE__ */ cMap(removeNonDigits, tuple), from = _a[0], replaceTo = _a[1];
            accum[from] = {
                replaceTo: replaceTo,
                tuple: tuple,
            };
            var altFrom = altPhone(from);
            if (altFrom !== from) {
                accum[altFrom] = {
                    replaceTo: altPhone(replaceTo),
                    tuple: tuple,
                };
            }
            return accum;
        }, {});
    };
    var selectText = function (ctx, phoneChangeMap, rootNode) {
        if (rootNode === void 0) { rootNode = ctx.document.body; }
        if (!rootNode) {
            return [];
        }
        var nodes = [];
        var phonesRegExp = buildAllRegExp(phoneChangeMap);
        walkTree(ctx, rootNode, function (node) {
            if (node === rootNode ||
                (getPath(node, 'parentNode.nodeName') || '').toLowerCase() ===
                    'script') {
                return;
            }
            var text = node.textContent || '';
            var phones = /* @__PURE__ */ cFilter(Boolean, phonesRegExp.exec(text) || []);
            cForEach(function (phone) {
                var purePhone = removeNonDigits(phone);
                if (!isUndefined(phoneChangeMap[purePhone])) {
                    nodes.push({
                        replaceElementType: 'text',
                        replaceHTMLNode: node,
                        replaceFrom: purePhone,
                        replaceTo: reformatPhone(phone, phoneChangeMap[purePhone].replaceTo),
                        textOrig: node.textContent || '',
                    });
                }
            }, phones);
        }, function (node) {
            if (phonesRegExp.test(node.textContent || '')) {
                return 1;
            }
            return 0;
        }, ctx.NodeFilter.SHOW_TEXT);
        return nodes;
    };
    var selectLink = function (ctx, phoneChangeMap) {
        var rootNode = ctx.document.body;
        if (!rootNode) {
            return [];
        }
        var phonesRegExp = buildAllRegExp(phoneChangeMap);
        return cReduce(function (accum, link) {
            var originalHref = getPath(link, 'href');
            var href = safeDecodeURI(originalHref || '');
            if (href.slice(0, 4) === 'tel:') {
                var foundPhone = (phonesRegExp.exec(href) || [])[0];
                var purePhone = foundPhone ? removeNonDigits(foundPhone) : '';
                var phoneChangeMapItem = phoneChangeMap[purePhone];
                if (!isUndefined(phoneChangeMapItem) &&
                    (purePhone || phoneChangeMapItem.tuple[0] === ANY_PHONE)) {
                    accum.push({
                        replaceElementType: 'href',
                        replaceHTMLNode: link,
                        replaceFrom: purePhone,
                        replaceTo: reformatPhone(foundPhone, phoneChangeMap[purePhone].replaceTo),
                        textOrig: originalHref,
                    });
                    var telFromHref = removeNonDigits(href.slice(4));
                    var textsPhoneChangeMap = genPhoneMap()([
                        purePhone
                            ? phoneChangeMapItem.tuple
                            : [telFromHref, ''],
                    ]);
                    accum.push.apply(accum, selectText(ctx, textsPhoneChangeMap, link));
                }
            }
            return accum;
        }, [], toArray(rootNode.querySelectorAll('a')));
    };
    var createPhoneDomReplacer = function (ctx, counterOpt, replacerOptions) {
        var _a;
        var transformer = replacerOptions.transformer, _b = replacerOptions.needReplaceTypes, needReplaceTypes = _b === void 0 ? (_a = {},
            _a[ReplaceElementLink] = true,
            _a[ReplaceElementText] = true,
            _a) : _b;
        var phoneChangeMap;
        var replaceElContent = function (item) {
            var _a;
            if (transformer(ctx, counterOpt, item)) {
                return (_a = phoneChangeMap[item.replaceFrom]) === null || _a === void 0 ? void 0 : _a.tuple;
            }
            return null;
        };
        return {
            replacePhonesDom: function (substitutions) {
                return new PolyPromise(function (resolve, reject) {
                    if (!substitutions || !substitutions.length) {
                        reject();
                    }
                    phoneChangeMap = genPhoneMap()(substitutions);
                    resolve(waitForBody(ctx)
                        .then(function () {
                        var timer = TimeOne(ctx);
                        var startTime = timer(getMs);
                        var links = needReplaceTypes[ReplaceElementLink]
                            ? selectLink(ctx, phoneChangeMap)
                            : [];
                        var texts = needReplaceTypes[ReplaceElementText]
                            ? selectText(ctx, phoneChangeMap)
                            : [];
                        return {
                            phones: /* @__PURE__ */ cFilter(isArray, /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(replaceElContent, links.concat(texts)))),
                            perf: timer(getMs) - startTime,
                        };
                    })["catch"](function () { return ({ phones: [], perf: 0 }); }));
                });
            },
        };
    };

    var SETTINGS_COOKIE = 'phc_settings';
    var THROTTLE_TIME = 1000;
    var CLIENT_ID = 'clientId';
    var ORDER_ID = 'orderId';
    var SERVICE_ID = 'service_id';
    var PHONES = 'phones';
    var PERFORMANCE = 'performance';

    var phoneSubscribeLoad = function (ctx, observerObj) {
        var eventSubscriber = cEvent(ctx);
        return eventSubscriber.on(ctx, ['load'], observerObj.trigger);
    };
    var phoneSubscribeMutation = function (ctx, observerObj) {
        return waitForBody(ctx).then(function () {
            var _a;
            var target = ctx.document.body;
            var config = (_a = {},
                _a['attributes'] = true,
                _a['childList'] = true,
                _a['subtree'] = true,
                _a);
            if (!/* @__PURE__ */ isNativeFunction('MutationObserver', ctx.MutationObserver)) {
                return;
            }
            var mutationObserver = new MutationObserver(observerObj.trigger);
            mutationObserver.observe(target, config);
        });
    };

    var NON_SPACE_REGEXP = /\S/;
    var TAG = 'small';
    var RESET_STYLES = 'display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit';
    var HOVER_TIMEOUT = 200;
    var setEnterHandler = function (ctx, counterOpts, phoneWrapper, from) {
        var eventHandler = cEvent(ctx);
        var unsubscribeEnter = noop;
        var unsubscribeLeave = noop;
        var show = function () {
            cForEach(/* @__PURE__ */ bindArg(['style', 'opacity', ''], genPath), toArray(phoneWrapper.childNodes));
            if (counterOpts) {
                var counter = getCounterInstance(ctx, counterOpts);
                if (counter) {
                    counter[METHOD_NAME_EXTERNAL_LINK_CLICK]("tel:" + from, {});
                }
            }
            unsubscribeEnter();
            unsubscribeLeave();
        };
        var enterCb = function (e) {
            if (e.target === phoneWrapper) {
                var deferId_1 = setDefer(ctx, show, HOVER_TIMEOUT, 'ph.h.e');
                (unsubscribeLeave || noop)();
                unsubscribeLeave = eventHandler.on(phoneWrapper, ['mouseleave'], function (event) {
                    if (event.target === phoneWrapper) {
                        clearDefer(ctx, deferId_1);
                    }
                });
            }
        };
        unsubscribeEnter = eventHandler.on(phoneWrapper, ['mouseenter'], enterCb);
    };
    var resetStyles = /* @__PURE__ */ bindArg(['style', RESET_STYLES], genPath);
    var transformPhone = function (ctx, counterOpts, item) {
        var createElement = getElemCreateFunction(ctx);
        var replaceElementType = item.replaceElementType, replaceHTMLNode = item.replaceHTMLNode, replaceFrom = item.replaceFrom;
        var parentNode = replaceHTMLNode.parentNode, textContent = replaceHTMLNode.textContent;
        if (replaceElementType === 'text' &&
            textContent &&
            createElement &&
            parentNode) {
            var phoneWrapper = createElement(TAG);
            resetStyles(phoneWrapper);
            var chars = textContent.split('');
            var nonSpaceCharsLength_1 = rmSpaces(textContent).length;
            cForEach(/* @__PURE__ */ bindThisForMethod('appendChild', phoneWrapper), cReduce(function (_a, char) {
                var nodes = _a.nodes, visibleCharsCount = _a.visibleCharsCount;
                var result = createElement(TAG);
                result.innerHTML = char;
                var isVisible = NON_SPACE_REGEXP.test(char);
                resetStyles(result);
                if (isVisible) {
                    result.style.opacity = "" + (nonSpaceCharsLength_1 - visibleCharsCount - 1) /
                        nonSpaceCharsLength_1;
                }
                nodes.push(result);
                return {
                    nodes: nodes,
                    visibleCharsCount: visibleCharsCount + (isVisible ? 1 : 0),
                };
            }, { nodes: [], visibleCharsCount: 0 }, chars).nodes);
            setEnterHandler(ctx, counterOpts, phoneWrapper, replaceFrom);
            parentNode.insertBefore(phoneWrapper, replaceHTMLNode);
            replaceHTMLNode.textContent = '';
            return true;
        }
        return false;
    };
    var hidePhones = function (ctx, counterOpt, phones) {
        var _a;
        var domReplacer = createPhoneDomReplacer(ctx, counterOpt, {
            transformer: transformPhone,
            needReplaceTypes: (_a = {},
                _a[ReplaceElementLink] = true,
                _a),
        });
        var cleanPhones = /* @__PURE__ */ cFilter(Boolean, /* @__PURE__ */ cMap(function (phone) { return (phone === ANY_PHONE ? phone : removeNonDigits(phone)); }, phones));
        var formattedPhones = /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('concat', ['']), ctxBindThisForMethod('reverse'), call), cleanPhones);
        var rawObserver = observer(ctx);
        var throttledObserver = throttleObserver(ctx, rawObserver, THROTTLE_TIME);
        var listener = bind(domReplacer.replacePhonesDom, domReplacer, formattedPhones, false);
        throttledObserver.on(listener);
        phoneSubscribeLoad(ctx, rawObserver);
        phoneSubscribeMutation(ctx, rawObserver);
        listener();
    };

    var CHECK_URL_PARAM = '_ym_status-check';
    var counterIdForCheck = function (ctx) {
        var location = getLocation(ctx);
        var searchString = location.search.substring(1);
        var searchParams = parse(searchString);
        return searchParams[CHECK_URL_PARAM] || '';
    };
    var checkStatusFn = function (ctx) {
        var _a;
        var id = parseInt(counterIdForCheck(ctx), 10);
        var globalConfig = getGlobalStorage(ctx);
        var getCountersFn = globalConfig.getVal(GLOBAL_COUNTERS_METHOD_NAME, constructArray);
        var runningCounters = getCountersFn();
        var counterIds = /* @__PURE__ */ cMap(/* @__PURE__ */ ctxPath('id'), runningCounters);
        return _a = {
                id: id
            },
            _a['counterFound'] = !!id && includes(id, counterIds),
            _a;
    };

    /* eslint-enable camelcase */
    var REMOTE_CONTROL = 'i'; // key for the global config
    var buildRemoteIframe = function (ctx, src) {
        var createElement = getElemCreateFunction(ctx);
        if (!createElement) {
            return;
        }
        var iframeContainer = createElement('div');
        var root = getRootElement(ctx);
        if (!root) {
            return;
        }
        iframeContainer.innerHTML =
            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
        var iframeEl = iframeContainer.firstChild;
        // нельзя использовать bind, т.к. здесь iframeEl.contentWindow все еще null
        iframeEl.onload = function () {
            loadScript(iframeEl.contentWindow, { src: src });
        };
        // eslint-disable-next-line camelcase,no-underscore-dangle
        ctx['_ym__remoteIframeEl'] = iframeEl;
        root.appendChild(iframeContainer);
        iframeContainer.removeChild(iframeEl);
        var shadowRoot = null;
        if (iframeContainer.attachShadow) {
            shadowRoot = iframeContainer.attachShadow({ mode: 'open' });
        }
        else if (iframeContainer.createShadowRoot) {
            shadowRoot = iframeContainer.createShadowRoot();
        }
        else if (iframeContainer.webkitCreateShadowRoot) {
            shadowRoot = iframeContainer.webkitCreateShadowRoot();
        }
        if (shadowRoot) {
            shadowRoot.appendChild(iframeEl);
        }
        else {
            root.appendChild(iframeEl);
            ctx['_ym__remoteIframeContainer'] = iframeEl;
        }
    };
    var isAllowedOrigin = function (origin) {
        /* @__PURE__ */ return cSome(/* @__PURE__ */ pipe(bindThisForMethodTest, cont(origin)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/,
        ]);
    };
    var ALLOWED_EXTERNAL = ['https://iframe-toloka.com/'];
    var isAllowedExternalOrigin = function (origin) {
        return includes(origin.replace(/\/?$/, '/'), ALLOWED_EXTERNAL);
    };
    /**
     * (\.)(?!\.) - точка, но не две точки подряд
     * нужно для защиты от yastatic.net/s3/metrika/../evil-bucket/script.js
     */
    var isAllowedResource = /* @__PURE__ */ bindThisForMethodTest(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/);
    var UTILS_KEY = '_u';
    var UTILS_CLOSEST_KEY = 'closest';
    var UTILS_SELECT_KEY = 'select';
    var UTILS_GET_DATA_KEY = 'getData';
    var UTILS_HIDE_PHONES_KEY = 'hidePhones';
    var UTILS_CHECK_STATUS_KEY = 'checkStatus';
    var SPLITTER$1 = '.';
    var AVAILABLE_FILES = ['form', 'button', 'phone', 'status'];
    var BETA_URL = 'https://s3.mds.yandex.net/internal-metrika-betas';
    var URL = 'https://yastatic.net/s3/metrika';
    var getResourceUrl = function (message) {
        var _a = message["lang"], lang = _a === void 0 ? '' : _a, _b = message["appVersion"], appVersion = _b === void 0 ? '' : _b, _c = message["fileId"], fileId = _c === void 0 ? '' : _c, _d = message["beta"], beta = _d === void 0 ? false : _d;
        var validVersion = /* @__PURE__ */ arrayJoin(SPLITTER$1, /* @__PURE__ */ pipe(/* @__PURE__ */ ctxMap(/* @__PURE__ */ pipe(firstArg, parseInt)), /* @__PURE__ */ ctxFilter(Boolean))(appVersion.split(SPLITTER$1)));
        if (!includes(fileId, AVAILABLE_FILES) ||
            !includes(lang, ['ru', 'en', 'tr'])) {
            return '';
        }
        var baseUrl = beta ? BETA_URL : URL;
        var version = validVersion ? "/" + validVersion : '';
        var fileName = fileId + "_" + lang + ".js";
        var result = "" + baseUrl + version + "/form-selector/" + fileName;
        if (!isAllowedResource(result)) {
            return '';
        }
        return result;
    };
    var setupAndLoadScript = function (ctx, message) {
        var _a, _b, _c, _d;
        var _e = message["data"], data = _e === void 0 ? '' : _e, _f = message.id, id = _f === void 0 ? '' : _f;
        {
            var globalConfig = getGlobalStorage(ctx);
            var utils = {};
            utils['getCachedTags'] = getCachedTags;
            {
                utils['form'] = (_a = {},
                    _a[UTILS_CLOSEST_KEY] = /* @__PURE__ */ bindArg(ctx, closestForm),
                    _a[UTILS_SELECT_KEY] = /* @__PURE__ */ bindArg(ctx, selectForms),
                    _a[UTILS_GET_DATA_KEY] = /* @__PURE__ */ bindArg(ctx, getFormData),
                    _a);
            }
            {
                utils['button'] = (_b = {},
                    _b[UTILS_CLOSEST_KEY] = /* @__PURE__ */ bindArg(ctx, closestButton),
                    _b[UTILS_SELECT_KEY] = /* @__PURE__ */ bindArg(ctx, selectButtons),
                    _b[UTILS_GET_DATA_KEY] = /* @__PURE__ */ bindArg(ctx, getButtonData),
                    _b);
            }
            {
                utils['phone'] = (_c = {},
                    _c[UTILS_HIDE_PHONES_KEY] = bindArgs([ctx, null, [data]], hidePhones),
                    _c);
            }
            {
                utils['status'] = (_d = {},
                    _d[UTILS_CHECK_STATUS_KEY] = bindArgs([ctx, parseInt(id, 10)], checkStatusFn),
                    _d);
            }
            globalConfig.setVal(UTILS_KEY, utils);
        }
        var src = getResourceUrl(message);
        if (src) {
            loadScript(ctx, { src: src });
        }
    };
    var handleMessage = /* @__PURE__ */ memo(function (ctx, event, message) {
        if (message['inline']) {
            setupAndLoadScript(ctx, message);
            return;
        }
        /* eslint-disable no-underscore-dangle,camelcase */
        ctx['_ym__postMessageEvent'] = event;
        ctx['_ym__inpageMode'] = message['inpageMode'];
        ctx['_ym__initMessage'] = message['initMessage'];
        /* eslint-enable no-underscore-dangle,camelcase */
        buildRemoteIframe(ctx, message['resource']);
    }, function (ctx, event, message) {
        return message['id'];
    });
    // флаги только в if конструкциях где &&, но не ||
    var isLocalFeature = false;
    var onMessage = function (ctx, event) {
        var origin;
        try {
            (origin = event.origin);
        }
        catch (_a) {
            // Не всегда есть доступ к origin
        }
        if (origin) {
            var isMetrikaOrigin = isAllowedOrigin(origin);
            var isExternalOrigin =  isAllowedExternalOrigin(origin)
                ;
            if (isMetrikaOrigin || isExternalOrigin || isLocalFeature) {
                var message = parse$1(ctx, event.data);
                if (getPath(message, 'action') === 'appendremote') {
                    handleMessage(ctx, event, message);
                }
            }
        }
    };
    var remoteControl = function (ctx) {
        var globalConfig = getGlobalStorage(ctx);
        if (globalConfig.getVal(REMOTE_CONTROL)) {
            return;
        }
        globalConfig.setVal(REMOTE_CONTROL, true);
        var eventSubscriber = cEvent(ctx);
        eventSubscriber.on(ctx, ['message'], /* @__PURE__ */ bindArg(ctx, onMessage));
    };

    var CHK_STATUS_KEY = 'cs';
    var checkEnabled = function (ctx) {
        var location = getLocation(ctx);
        return location.search.indexOf(CHECK_URL_PARAM + "=") > -1;
    };
    var checkStatusRaw = function (ctx, counterOptions) {
        var _a;
        if (checkEnabled(ctx) &&
            counterOptions.id === parseInt(counterIdForCheck(ctx), 10) &&
            counterOptions.counterType === DEFAULT_COUNTER_TYPE) {
            var message = (_a = {},
                _a['lang'] = 'ru',
                _a['fileId'] = 'status',
                _a['id'] = "" + counterOptions.id,
                _a);
            setDefer(ctx, bindArgs([ctx, message, false], setupAndLoadScript), 0, CHK_STATUS_KEY);
        }
    };
    var checkStatus = /* @__PURE__ */ ctxErrorLogger('cs.init', checkStatusRaw);

    var isBrokenPhones = /* @__PURE__ */ memo(function (ctx) {
        return (isBrokenFromCharCode(ctx) ||
            !/* @__PURE__ */ isNativeFunction('querySelectorAll', ctx.document.querySelectorAll));
    });

    var useLogger = function (ctx, counterOpt) { return ({
        cliId: '',
        orderId: '',
        serviceId: 0,
        phones: {},
        perf: [],
        isReady: false,
        firstCall: true,
        ctx: ctx,
        counterOpt: counterOpt,
    }); };
    var loggerSetReady = function (loggerData) {
        return mix(loggerData, {
            isReady: true,
        });
    };
    var loggerLog = function (loggerData, loggerIds, phones, substitutions, performance) {
        var _a;
        if (!loggerIds.cliId || !loggerIds.orderId) {
            return;
        }
        if (loggerIds.cliId !== loggerData.cliId ||
            loggerIds.orderId !== loggerData.orderId) {
            mix(loggerData, loggerIds, {
                phones: {},
                firstCall: true,
            });
        }
        if (performance > 0) {
            arrayMerge(loggerData.perf, [performance]);
        }
        cForEach(function (_a) {
            var _b, _c;
            var from = _a[0], to = _a[1];
            var num = +(loggerData.phones[from] && loggerData.phones[from][to]
                ? loggerData.phones[from][to]
                : 0);
            mix(loggerData.phones, (_b = {}, _b[from] = (_c = {}, _c[to] = num, _c), _b));
        }, substitutions);
        cForEach(function (_a) {
            var _b, _c;
            var from = _a[0], to = _a[1];
            var num = 1 + (loggerData.phones[from] ? loggerData.phones[from][to] : 0);
            mix(loggerData.phones, (_b = {}, _b[from] = (_c = {}, _c[to] = num, _c), _b));
        }, phones);
        if (!loggerData.isReady || (!loggerData.firstCall && !phones.length)) {
            return;
        }
        var counter = getCounterInstance(loggerData.ctx, loggerData.counterOpt);
        if (counter) {
            counter[METHOD_NAME_PARAMS]('__ym', 'phc', (_a = {},
                _a[CLIENT_ID] = loggerData.cliId,
                _a[ORDER_ID] = loggerData.orderId,
                _a[SERVICE_ID] = loggerData.serviceId,
                _a[PHONES] = loggerData.phones,
                _a[PERFORMANCE] = loggerData.perf,
                _a));
        }
        loggerData.firstCall = false;
    };

    var getPhoneDomReplacer = /* @__PURE__ */ memo(createPhoneDomReplacer);
    var transformPhone$1 = function (ctx, counterOpt, item) {
        var _a;
        var mask = buildRegExp(item.replaceFrom);
        if (item.replaceElementType === 'href') {
            var node = item.replaceHTMLNode;
            var href = node.href;
            var newHREF = href.replace(mask, item.replaceTo);
            if (href !== newHREF) {
                node['href'] = newHREF;
                return true;
            }
        }
        else {
            var newText = (_a = item.replaceHTMLNode.textContent) === null || _a === void 0 ? void 0 : _a.replace(mask, item.replaceTo);
            if (newText && newText !== item.replaceHTMLNode.textContent) {
                item.replaceHTMLNode.textContent = newText;
                return true;
            }
        }
        return false;
    };
    var readSettingsCookie = function (cookie) {
        return cookie.getVal(SETTINGS_COOKIE) || '';
    };
    var memoJSON = /* @__PURE__ */ memo(parse$1, secondArg);
    var setPhonesFromCookie = function (ctx, counterId, logger) {
        var cookie = cookieStorage(ctx, undefined, counterId);
        var phoneChangerSettings = memoJSON(ctx, readSettingsCookie(cookie));
        var cliId = getPath(phoneChangerSettings, CLIENT_ID);
        var orderId = getPath(phoneChangerSettings, ORDER_ID);
        var serviceId = getPath(phoneChangerSettings, SERVICE_ID);
        var substitutions = getPath(phoneChangerSettings, PHONES) || [];
        if (!cliId || !orderId || !substitutions) {
            return PolyPromise.resolve();
        }
        var replacer = getPhoneDomReplacer(ctx, logger.counterOpt, {
            transformer: transformPhone$1,
        });
        return replacer
            .replacePhonesDom(substitutions)
            .then(function (_a) {
            var phones = _a.phones, perf = _a.perf;
            return loggerLog(logger, { cliId: cliId, orderId: orderId, serviceId: serviceId }, phones, substitutions, perf);
        })["catch"](function () {
            // empty
        });
    };
    var usePhoneChangerProvider = /* @__PURE__ */ ctxErrorLogger('phc.p', function (ctx, counterOpt) {
        if (isBrokenPhones(ctx)) {
            return noop;
        }
        return getCounterSettings(ctx, counterOpt, function (settings) {
            var counterId = counterOpt.id;
            var cookie = cookieStorage(ctx, undefined, counterId);
            var storedChangerSettingsJson = readSettingsCookie(cookie);
            var phoneChangerSettings = getPath(settings, 'settings.phchange');
            if (phoneChangerSettings) {
                var phoneChangerSettingsJson = stringify$1(ctx, phoneChangerSettings) || '';
                if (phoneChangerSettingsJson !== storedChangerSettingsJson) {
                    cookie.setVal(SETTINGS_COOKIE, phoneChangerSettingsJson);
                }
            }
            else if (storedChangerSettingsJson) {
                phoneChangerSettings = memoJSON(ctx, storedChangerSettingsJson);
            }
            var clientId = getPath(phoneChangerSettings, CLIENT_ID);
            var orderId = getPath(phoneChangerSettings, ORDER_ID);
            var substitution = getPath(phoneChangerSettings, PHONES) || [];
            if (!clientId || !orderId || !substitution.length) {
                return;
            }
            var logger = useLogger(ctx, counterOpt);
            loggerSetReady(logger);
            setPhonesFromCookie(ctx, counterId, logger);
            var rawObserver = observer(ctx);
            var throttledObserver = throttleObserver(ctx, rawObserver, THROTTLE_TIME);
            var listener = bind(setPhonesFromCookie, null, ctx, counterId, logger);
            throttledObserver.on(listener);
            phoneSubscribeMutation(ctx, rawObserver);
        });
    });

    var PHONE_HIDE_TEST_COOKIE_NAME = 'yaHidePhones';
    var usePhoneHideProvider = /* @__PURE__ */ ctxErrorLogger('phc.h', function (ctx, counterOpt) {
        if (isMobile(ctx) || isBrokenPhones(ctx)) {
            return null;
        }
        return getCounterSettings(ctx, counterOpt, function (settings) {
            var phoneChangerSettings = getPath(settings, 'settings.phchange');
            if (!phoneChangerSettings) {
                var cookie = cookieStorage(ctx, '');
                var cookieValue = cookie.getVal(PHONE_HIDE_TEST_COOKIE_NAME);
                var testValue = cookieValue
                    ? parse$1(ctx, cookieValue)
                    : '';
                var phoneHideSettings = getPath(settings, 'settings.phhide') || testValue;
                if (phoneHideSettings) {
                    hidePhones(ctx, counterOpt, phoneHideSettings);
                }
            }
        });
    });

    var rawUserParams = function (ctx, counterOptions) {
        return errorLogger(ctx, 'up.c', function a(data, callback, callbackCtx) {
            var _a;
            var counterInstance = getCounterInstance(ctx, counterOptions);
            var warn = DebugConsole(ctx).warn;
            if (!counterInstance) {
                warn('No counter instance found');
                return;
            }
            if (!isObject(data)) {
                warn('Wrong user params');
                return;
            }
            var newData = (_a = {},
                _a['__ymu'] = data,
                _a);
            var userParamsFn = counterInstance[METHOD_NAME_PARAMS];
            if (userParamsFn) {
                userParamsFn(newData, callback || noop, callbackCtx);
            }
        });
    };
    var userParams = /* @__PURE__ */ ctxErrorLogger('up.int', rawUserParams);

    var useTriggerEvent = /* @__PURE__ */ ctxErrorLogger('trigger.in', function (ctx, _a) {
        var id = _a.id, triggerEvent = _a.triggerEvent;
        if (!triggerEvent) {
            return;
        }
        var eventName = "yacounter" + id + "inited";
        runAsync(ctx, bindArgs([ctx, eventName], createAndDispatchEvent), 't.i');
    });

    var destruct = /* @__PURE__ */ ctxErrorLogger('destruct.e', function (ctx, counterOptions, unsubscribeMethods) {
        return function () {
            var globalConfig = getGlobalStorage(ctx);
            var counterId = counterOptions.id;
            cForEach(function (cb, index) {
                return isFunction(cb) &&
                    errorLogger(ctx, "dest.fr." + index, cb)();
            }, unsubscribeMethods);
            delete globalConfig.getVal('counters')[getCounterKey(counterOptions)];
            delete ctx["yaCounter" + counterId];
        };
    });

    var fingerPrint = /* @__PURE__ */ ctxErrorLogger(FIP_KEY, function (ctx, factors) {
        if (isITPDisabled(ctx) && !isFF(ctx)) {
            return;
        }
        var ls = globalLocalStorage(ctx);
        var fpVal = ls.getVal(FIP_KEY);
        if (!fpVal) {
            var result = /* @__PURE__ */ pipe(/* @__PURE__ */ ctxMap(/* @__PURE__ */ pipe(function (factorFn, i) {
                return /* @__PURE__ */ ctxErrorLogger(FIP_KEY + "." + i, factorFn)(ctx);
            }, bind(hash, null))), /* @__PURE__ */ ctxJoin('-'))(factors);
            ls.setVal(FIP_KEY, result);
        }
    });

    var useRetransmitProvider = function (ctx, counterOpt) {
        var retransmitRequests = getRetransmitRequests(ctx);
        var retransmitSender = getSender(ctx, RETRANSMIT_PROVIDER, counterOpt);
        var errorCatcher = errorLogger(ctx, 'rts.p');
        var makeRetransmit = function (prev, req) {
            var counterOptions = {
                id: req.counterId,
                counterType: req.counterType,
            };
            var result = retransmitSender({
                rBody: req.postParams,
                brInfo: browserInfo(req.browserInfo),
                urlParams: req.params,
                retransmitIndex: req.retransmitIndex,
            }, counterOptions, req.resource)["catch"](errorCatcher);
            return prev.then(/* @__PURE__ */ bindArg(result, firstArg));
        };
        return getCounterSettings(ctx, counterOpt, bind(cReduce, null, makeRetransmit, PolyPromise.resolve(''), retransmitRequests))["catch"](errorCatcher);
    };

    function selfReturnDecorator(ctx, counterOptions, methodName, fn) {
        return function selfReturn() {
            var counter = getCounterInstance(ctx, counterOptions);
            // eslint-disable-next-line prefer-rest-params
            var fnArgs = argsToArray(arguments);
            fn.apply(void 0, fnArgs);
            return counter;
        };
    }

    function errorsDecorator(ctx, counterOptions, methodName, fn) {
        return errorLogger(ctx, "cm." + methodName, fn);
    }

    function decoratorPipe(ctx, counterOptions, decorators, methodName, method) {
        return function pipeRun() {
            // eslint-disable-next-line prefer-rest-params
            var enableDecorators = argsToArray(arguments);
            var enableAllDecorators = cEvery(/* @__PURE__ */ equal(false), enableDecorators);
            var returnPureFn = enableDecorators.length > 0 ? enableAllDecorators : false;
            if (returnPureFn || !decorators.length || !method) {
                return method;
            }
            return bindArgs(cReduce(function (decrs, decorator, i) {
                if (enableDecorators[i] === false) {
                    return decrs;
                }
                return decrs.concat(bindArgs([ctx, counterOptions, methodName], decorator));
            }, [], decorators), pipe)()(method);
        };
    }

    var INTERACTIVE_READY_STATE = 'interactive';
    var COMPLETE_READY_STATE = 'complete';
    var runCallbackOnReady = function (ctx, callback) {
        var doc = ctx.document;
        var state = doc.readyState;
        if (includes(state, [INTERACTIVE_READY_STATE, COMPLETE_READY_STATE])) {
            runAsync(ctx, callback);
        }
        else {
            var _a = cEvent(ctx), on = _a.on, un_1 = _a.un;
            var onload_1 = function () {
                un_1(doc, ['DOMContentLoaded'], onload_1);
                un_1(ctx, ['load'], onload_1);
                callback();
            };
            on(doc, ['DOMContentLoaded'], onload_1);
            on(ctx, ['load'], onload_1);
        }
    };

    var AD_BLOCK_GLOBAL_STATUS_KEY = 'adStatus';
    var AD_BLOCK_GLOBAL_STATUS_PROCESSING = 'process';
    var AD_BLOCK_GLOBAL_STATUS_COMPLETE = 'complete';
    var URL$1 = "metrika/";
    var adBlockImageCharacters = /* @__PURE__ */ bindArg('9-d5ve+.r%7', firstArg);
    var adBlockFn = function (ctx, counterOptions) {
        if (counterOptions.noCookie) {
            return;
        }
        var globalStorage = getGlobalStorage(ctx);
        if (globalStorage.getVal(AD_BLOCK_GLOBAL_ENABLED_KEY)) {
            return;
        }
        var setValue = function (value) {
            if (includes(value, [AD_BLOCK_DISABLED, AD_BLOCK_ENABLED])) {
                globalStorage.setVal(AD_BLOCK_GLOBAL_ENABLED_KEY, value);
            }
        };
        var cookieStorage = globalCookieStorage(ctx);
        var adBlockCookie = cookieStorage.getVal(AD_BLOCK_COOKIE);
        if (adBlockCookie) {
            setValue(adBlockCookie);
            return;
        }
        var setRequestStatus = /* @__PURE__ */ bindArg(AD_BLOCK_GLOBAL_STATUS_KEY, globalStorage.setVal);
        var saveRequestInfo = function (status) {
            var value = status ? AD_BLOCK_ENABLED : AD_BLOCK_DISABLED;
            setValue(value);
            setRequestStatus(AD_BLOCK_GLOBAL_STATUS_COMPLETE);
            cookieStorage.setVal(AD_BLOCK_COOKIE, value, AD_BLOCK_COOKIE_TTL);
            return value;
        };
        var sender = getSender(ctx, AD_BLOCK_PROVIDER, counterOptions);
        if (!globalStorage.getVal(AD_BLOCK_GLOBAL_STATUS_KEY)) {
            setRequestStatus(AD_BLOCK_GLOBAL_STATUS_PROCESSING);
            var src_1 = URL$1 + "a" + adBlockImageCharacters().replace(/[^a-v]+/g, '') + "t.gif";
            runCallbackOnReady(ctx, function () {
                return sender({}, src_1)
                    .then(/* @__PURE__ */ bindArg(false, saveRequestInfo))["catch"](/* @__PURE__ */ bindArg(true, saveRequestInfo));
            });
        }
    };
    var adBlock = /* @__PURE__ */ ctxErrorLogger('ad', adBlockFn);

    var rawSetUserID = function (ctx, counterOptions) {
        return function a(id, callback, callbackCtx) {
            var counterInstance = getCounterInstance(ctx, counterOptions);
            var ctxConsole = getConsole(ctx);
            if (!isString(id) && !isNumber(ctx, id)) {
                ctxConsole.error('Incorrect user ID');
                return;
            }
            var newData = genPath(['__ym', 'user_id', id]);
            counterInstance[METHOD_NAME_PARAMS](newData, callback || noop, callbackCtx);
        };
    };
    var setUserID = /* @__PURE__ */ ctxErrorLogger('suid.int', rawSetUserID);

    var rawGetClientID = function (ctx, counterOptions) {
        return function a(callback) {
            var uid = getUid(ctx, counterOptions);
            if (callback) {
                callUserCallback(ctx, callback, null, uid);
            }
            return uid;
        };
    };
    var getClientID = /* @__PURE__ */ ctxErrorLogger('guid.int', rawGetClientID);

    var createMethodErrorLogger = function (ctx, that, loggerName, loggerPrefix) {
        if (loggerPrefix === void 0) { loggerPrefix = 'wv2'; }
        return {
            wrapInErrorLogger: function (method, methodKey) {
                var fullNamepace = loggerPrefix + "." + loggerName + "." + methodKey;
                return errorLogger(ctx, fullNamepace, method, undefined, that);
            },
        };
    };

    var MUTATION_EVENT_TYPE = 'mutation';
    var EVENT_EVENT_TYPE = 'event';
    var PAGE_EVENT_TYPE = 'page';
    var abstractCaptor =  /** @class */ (function () {
            function AbstractCaptor(ctx, recorder, loggerName) {
                this.loggerPrefix = 'wv2.c';
                this.offEventFunctions = [];
                this.handlers = {};
                this.ctx = ctx;
                this.logger = createMethodErrorLogger(ctx, this, loggerName, this.loggerPrefix);
                this.recorder = recorder;
                this.eventWrapper = this.recorder.getEventWrapper();
                this.start = this.logger.wrapInErrorLogger(this.start, 'st');
                this.stop = this.logger.wrapInErrorLogger(this.stop, 'sp');
            }
            AbstractCaptor.prototype.start = function () {
                var _this = this;
                this.offEventFunctions = /* @__PURE__ */ cMap(function (_a) {
                    var event = _a[0], handlerObject = _a[1];
                    var handler = isFunction(handlerObject)
                        ? handlerObject
                        : handlerObject.handler;
                    var target = isFunction(handlerObject)
                        ? _this.ctx
                        : handlerObject.target;
                    var wrappedHandler = bind(_this.logger.wrapInErrorLogger(handler, event), _this);
                    return _this.eventWrapper.on(target, [event], wrappedHandler);
                }, entries(this.handlers));
            };
            AbstractCaptor.prototype.stop = function () {
                cForEach(call, this.offEventFunctions);
            };
            AbstractCaptor.prototype.indexNode = function (node) {
                return this.recorder.getIndexer().indexNode(node);
            };
            return AbstractCaptor;
        }()) ;
    var AbstractCaptor = abstractCaptor;

    var b64imagePlaceholder = /* @__PURE__ */ arrayJoin('', [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA',
        'AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    ]);
    var SVG_KEYWORD = 'svg';
    var PASSWORD_PLACEHOLDER = '•';
    var CHEKCABLE_NODES = ['checkbox', 'radio'];
    var isCheckable$1 = function (input) {
        return includes((input.getAttribute('type') || '').toLowerCase(), CHEKCABLE_NODES);
    };
    var normalizeAttibute = function (ctx, node, attribute, value, options, nodeName) {
        if (nodeName === void 0) { nodeName = getNodeName(node); }
        var result = {
            isHidden: false,
            value: value,
        };
        if (isValidInput(node)) {
            var input = node;
            if (attribute === 'value') {
                // recordForms - это настройка кода счётчика, если true по дефолту пишем все инпуты,
                // кроме инпутов с приватной информацией.
                // Если она false, то по дефолту закрываем все инпуты, кроме тех которым проставили
                // специальный класс.
                if (!isNil(value) && value !== '') {
                    var isEU = options.isEU, recordForms = options.recordForms;
                    var isHidden = isHiddenContent(ctx, input);
                    var obfuscationRequired = recordForms
                        ? isObfuscationNeeded(ctx, input, isEU)
                        : !isForceRecordingEnabled(input);
                    if (obfuscationRequired || isHidden) {
                        result.isHidden = isHidden;
                        result.value = /* @__PURE__ */ arrayJoin('', /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(PASSWORD_PLACEHOLDER, firstArg), ("" + value).split('')));
                    }
                }
            }
            else if (attribute === 'checked' && isCheckable$1(input)) {
                result.value = input.checked ? 'checked' : null;
            }
        }
        else if (nodeName === 'IMG' && attribute === 'src') {
            var image = node;
            var isHidden = isHiddenContent(ctx, image);
            if (isHidden) {
                result.isHidden = isHidden;
                result.value = b64imagePlaceholder;
            }
            else {
                result.value =
                    (image.getAttribute('srcset') ? image.currentSrc : '') ||
                        image.src;
            }
        }
        else if (nodeName === 'A' && attribute === 'href') {
            result.value = value ? '#' : '';
        }
        else if (includes(attribute, [
            'srcset',
            'integrity',
            'crossorigin',
            'password',
        ]) ||
            (attribute.length > 2 && stringIndexOf(attribute, 'on') === 0) ||
            (nodeName === 'IFRAME' && attribute === 'src') ||
            (nodeName === 'SCRIPT' && includes(attribute, ['src', 'type']))) {
            result.value = null;
        }
        return result;
    };
    var getImplicitAttributes = function (node, nodeName, attributes) {
        var implicitAttributes = {};
        if (isValidInput(node)) {
            implicitAttributes['value'] =
                node.value || attributes['value'];
        }
        else if (nodeName === 'IMG' && !attributes['src']) {
            // Это нужно например для случая когда есть srcset, но нет src,
            // и нет события загрузки потому что например картинка из кэша
            implicitAttributes['src'] = '';
        }
        return implicitAttributes;
    };
    var collectAttributes = function (ctx, node, options, forceAttributes, nodeName) {
        if (forceAttributes === void 0) { forceAttributes = {}; }
        if (nodeName === void 0) { nodeName = getNodeName(node); }
        var attrs = mix(cReduce(function (attributes, attr) {
            var name = attr.name, value = attr.value;
            attributes[name] = value;
            return attributes;
        }, {}, toArray(node.attributes)), forceAttributes);
        mix(attrs, getImplicitAttributes(node, nodeName, attrs));
        var isHidden = cReduce(function (hidden, _a) {
            var attr = _a[0], value = _a[1];
            var normalized = normalizeAttibute(ctx, node, attr, value, options, nodeName);
            var newValue = normalized.value;
            if (!isNil(newValue)) {
                attrs[attr] = newValue;
            }
            else {
                delete attrs[attr];
            }
            return hidden || normalized.isHidden;
        }, false, entries(attrs));
        var rect = isHidden && getBoundingClientRect(node);
        if (rect) {
            attrs['width'] = rect.width;
            attrs['height'] = rect.height;
        }
        return attrs;
    };
    var getTextContent = function (node, forceContent) {
        if (isString(forceContent)) {
            return forceContent;
        }
        var text = node.textContent;
        // Нет в некоторых версиях IE есть mutationObserver, но нет textContent
        if (isString(text)) {
            return text;
        }
        text = node.data;
        if (isString(text)) {
            return text;
        }
        text = node.nodeValue;
        if (isString(text)) {
            return text;
        }
        return '';
    };
    var collectNodeInfo = function (ctx, node, options, id, parent, prev, next, forceAttributes, forceContent, nodeName) {
        if (prev === void 0) { prev = null; }
        if (next === void 0) { next = null; }
        if (forceAttributes === void 0) { forceAttributes = {}; }
        if (nodeName === void 0) { nodeName = getNodeName(node); }
        if (isUndefined(nodeName)) {
            return undefined;
        }
        var nodeInfo = {
            id: id,
            prev: prev !== parent ? prev : null,
            next: next !== parent ? next : null,
            parent: parent,
            name: nodeName.toLowerCase(),
            node: node,
        };
        if (isTextNode(node)) {
            var content = getTextContent(node, forceContent);
            nodeInfo.attributes = {};
            nodeInfo.content = content;
            if (content) {
                var hidden = isHiddenContent(ctx, node);
                if (hidden) {
                    nodeInfo.content =
                        content.trim() !== ''
                            ? scrambleContent(ctx, content)
                            : content;
                    nodeInfo.hidden = hidden;
                }
            }
        }
        else {
            nodeInfo.attributes = collectAttributes(ctx, node, options, forceAttributes, nodeName);
            var isHidden = isValidInput(node) &&
                isPrivateInformationField(node);
            if (isHidden) {
                nodeInfo.hidden = isHidden;
            }
            var hasNamespace = node.namespaceURI && stringIncludes(node.namespaceURI, SVG_KEYWORD);
            if (hasNamespace) {
                nodeInfo.namespace = node.namespaceURI;
            }
        }
        return nodeInfo;
    };

    var isValidCtx = /* @__PURE__ */ ctxPath('location.href');

    var NODE_REMOVE_EVENT_NAME = 're';
    var NODE_ADD_EVENT_NAME = 'ad';
    var TEXT_CHANGE_EVENT_NAME = 'tc';
    var ATTR_CHANGE_EVENT_NAME = 'ac';
    var mutationCaptor =  /** @class */ (function (_super) {
            __extends(MutationCaptor, _super);
            function MutationCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.attributesAggregation = {
                    elements: [],
                    attributes: [],
                };
                _this.index = 0;
                _this.observerCallback = _this.logger.wrapInErrorLogger(_this.observerCallback, 'o');
                _this.createIndexerOptions = _this.logger.wrapInErrorLogger(_this.createIndexerOptions, 'io');
                _this.aggregateAttributes = _this.logger.wrapInErrorLogger(_this.aggregateAttributes, 'ao');
                _this.processNodesAdd = _this.logger.wrapInErrorLogger(_this.processNodesAdd, 'a');
                _this.processAttributesChange = _this.logger.wrapInErrorLogger(_this.processAttributesChange, 'at');
                _this.processNodesRemove = _this.logger.wrapInErrorLogger(_this.processNodesRemove, 'r');
                _this.processCharacterData = _this.logger.wrapInErrorLogger(_this.processCharacterData, 'c');
                _this.observer = new ctx.MutationObserver(_this.observerCallback);
                return _this;
            }
            MutationCaptor.prototype.start = function () {
                this.observer.observe(this.ctx.document.documentElement, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true,
                });
            };
            MutationCaptor.prototype.stop = function () {
                this.observer.disconnect();
            };
            MutationCaptor.prototype.aggregateAttributes = function (mutation) {
                var target = mutation.target, attributeName = mutation.attributeName;
                var index = this.attributesAggregation.elements.indexOf(target);
                if (index === -1) {
                    index =
                        this.attributesAggregation.elements.push(target) - 1;
                    this.attributesAggregation.attributes[index] = {};
                }
                if (!this.attributesAggregation.attributes[index]) {
                    this.attributesAggregation.attributes[index] = {};
                }
                var attrs = this.attributesAggregation.attributes[index];
                var value = target.getAttribute(attributeName);
                attrs[attributeName] = normalizeAttibute(this.ctx, target, attributeName, value, this.recorder.getOptions()).value;
            };
            MutationCaptor.prototype.createIndexerOptions = function (mutations) {
                var _this = this;
                var elements = [];
                var options = [];
                var getOptions = function (element) {
                    var index = cIndexOf(_this.ctx)(element, elements);
                    if (index === -1) {
                        elements.push(element);
                        var opts = { forceAttributes: {} };
                        options.push(opts);
                        return opts;
                    }
                    return options[index];
                };
                cForEach(function (mutation) {
                    var type = mutation.type, attributeName = mutation.attributeName, removedNodes = mutation.removedNodes, oldValue = mutation.oldValue, target = mutation.target, nextSibling = mutation.nextSibling, previousSibling = mutation.previousSibling;
                    var opts;
                    switch (type) {
                        case 'attributes':
                            _this.aggregateAttributes(mutation);
                            opts = getOptions(target);
                            if (!opts.forceAttributes[attributeName]) {
                                opts.forceAttributes[attributeName] =
                                    normalizeAttibute(_this.ctx, target, attributeName, oldValue, _this.recorder.getOptions()).value;
                            }
                            break;
                        case 'childList':
                            if (removedNodes) {
                                cForEach(function (removed) {
                                    opts = getOptions(removed);
                                    if (!opts.forceParent) {
                                        mix(opts, {
                                            forceParent: target,
                                            forceNext: nextSibling
                                                ? nextSibling
                                                : undefined,
                                            forcePrevious: previousSibling
                                                ? previousSibling
                                                : undefined,
                                        });
                                    }
                                }, toArray(removedNodes));
                            }
                            break;
                        case 'characterData':
                            opts = getOptions(target);
                            if (!opts.forceTextContent) {
                                opts.forceTextContent = oldValue;
                            }
                            break;
                    }
                }, mutations);
                var indexer = this.recorder.getIndexer();
                cForEach(function (el, i) {
                    indexer.setIndexOptions(el, options[i]);
                }, elements);
            };
            MutationCaptor.prototype.observerCallback = function (mutations) {
                var _this = this;
                if (!isValidCtx(this.ctx)) {
                    this.stop();
                    return;
                }
                var stamp = this.recorder.stamp();
                this.createIndexerOptions(mutations);
                cForEach(function (mutation) {
                    var type = mutation.type, addedNodes = mutation.addedNodes, removedNodes = mutation.removedNodes, target = mutation.target;
                    switch (type) {
                        case 'childList':
                            if (removedNodes && removedNodes.length) {
                                _this.processNodesRemove(toArray(removedNodes), stamp);
                            }
                            if (addedNodes && addedNodes.length) {
                                _this.processNodesAdd(toArray(addedNodes), stamp);
                            }
                            break;
                        case 'characterData':
                            _this.processCharacterData(target, stamp);
                            break;
                    }
                }, mutations);
                this.processAttributesChange(stamp);
            };
            MutationCaptor.prototype.processAttributesChange = function (stamp) {
                var _this = this;
                cForEach(function (element, i) {
                    var index = _this.getNewIndex();
                    var attributes = _this.attributesAggregation.attributes[i];
                    _this.recorder.sendEventObject(MUTATION_EVENT_TYPE, {
                        index: index,
                        attributes: attributes,
                        target: _this.indexNode(element),
                    }, ATTR_CHANGE_EVENT_NAME, stamp);
                }, this.attributesAggregation.elements);
                this.attributesAggregation.elements = [];
                this.attributesAggregation.attributes = [];
            };
            MutationCaptor.prototype.processNodesAdd = function (addedNodes, stamp) {
                var _this = this;
                var index = this.getNewIndex();
                this.recorder.getIndexer().handleNodesAdd({
                    nodes: addedNodes,
                    sendResult: function (result) {
                        var processedResult = /* @__PURE__ */ cMap(function (nodeInfo) {
                            var contentInfo = mix({}, nodeInfo);
                            delete contentInfo.node;
                            return contentInfo;
                        }, result);
                        _this.recorder.sendEventObject(MUTATION_EVENT_TYPE, {
                            index: index,
                            nodes: processedResult,
                        }, NODE_ADD_EVENT_NAME, stamp);
                    },
                });
            };
            MutationCaptor.prototype.processNodesRemove = function (removedNodes, stamp) {
                var _this = this;
                var index = this.getNewIndex();
                var indexer = this.recorder.getIndexer();
                var removedIds = /* @__PURE__ */ cMap(function (node) {
                    var id = indexer.removeNode(node);
                    eachNode(_this.ctx, node, function (removedChild) {
                        indexer.removeNode(removedChild);
                    });
                    return id;
                }, removedNodes);
                this.recorder.sendEventObject(MUTATION_EVENT_TYPE, {
                    index: index,
                    nodes: removedIds,
                }, NODE_REMOVE_EVENT_NAME, stamp);
            };
            MutationCaptor.prototype.processCharacterData = function (node, stamp) {
                var index = this.getNewIndex();
                this.recorder.sendEventObject(MUTATION_EVENT_TYPE, {
                    value: node.textContent,
                    target: this.indexNode(node),
                    index: index,
                }, TEXT_CHANGE_EVENT_NAME, stamp);
            };
            MutationCaptor.prototype.getNewIndex = function () {
                var index = this.index;
                this.index += 1;
                return index;
            };
            return MutationCaptor;
        }(AbstractCaptor)) ;
    var MutationCaptor = mutationCaptor;

    var NODE_ID_PROPERTY = '__ym_indexer';

    var TIMEOUT_BETWEEN_SENDING_DATA = 50;
    var MAX_EXECUTION_TIME = 20;
    var NODE_ADD_EVENT_KEY_PREFIX = 'NA:';
    var NODE_REMOVAL_EVENT_KEY_PREFIX = 'NR:';
    var Indexer = /** @class */ (function () {
        function Indexer(ctx, options) {
            var _this = this;
            this.eventsToIndex = [];
            this.evetnsToTrigger = {};
            this.nextId = 1;
            this.timeoutId = 0;
            this.nodeIndexCache = {};
            this.indexerOptions = {};
            this.removeNode = function (node) {
                var id = _this.indexNode(node);
                var nodeName = getNodeName(node);
                if (!nodeName) {
                    return undefined;
                }
                var eventName = "" + NODE_REMOVAL_EVENT_KEY_PREFIX + nodeName.toLowerCase();
                if (_this.evetnsToTrigger[eventName]) {
                    _this.emitter.trigger(eventName, {
                        data: {
                            node: node,
                            id: id,
                        },
                    });
                }
                return id;
            };
            this.getNodeId = function (node) {
                // По ряду мистических причин к нам может всякий мусор вместо нод падать
                var nodeName = getNodeName(node);
                if (nodeName) {
                    var existingId = node[NODE_ID_PROPERTY];
                    if (!existingId) {
                        var id = _this.nextId;
                        node[NODE_ID_PROPERTY] = id;
                        _this.nextId += 1;
                        var eventName = "" + NODE_ADD_EVENT_KEY_PREFIX + nodeName.toLowerCase();
                        if (_this.evetnsToTrigger[eventName]) {
                            _this.emitter.trigger(eventName, {
                                data: {
                                    node: node,
                                    id: id,
                                },
                            });
                        }
                        return id;
                    }
                    return existingId;
                }
                return null;
            };
            this.ctx = ctx;
            var logger = createMethodErrorLogger(ctx, this, 'i');
            this.emitter = emitter(ctx);
            this.options = options;
            this.start = logger.wrapInErrorLogger(this.start, 'st');
            this.stop = logger.wrapInErrorLogger(this.stop, 'sp');
            this.indexNode = logger.wrapInErrorLogger(this.indexNode, 'i');
            this.setIndexOptions = logger.wrapInErrorLogger(this.setIndexOptions, 'o');
            this.handleNodesAdd = logger.wrapInErrorLogger(this.handleNodesAdd, 'a');
            this.removeNode = logger.wrapInErrorLogger(this.removeNode, 'r');
            this.sendData = logger.wrapInErrorLogger(this.sendData, 's');
        }
        Indexer.prototype.setIndexOptions = function (element, indexerOptions) {
            var nodeId = this.getNodeId(element);
            if (isNull(nodeId)) {
                return;
            }
            var opts = this.indexerOptions[nodeId];
            if (opts) {
                this.indexNode(element);
            }
            this.indexerOptions[nodeId] = indexerOptions;
        };
        Indexer.prototype.on = function (nodeName, event, callback) {
            var eventName = "" + event + nodeName;
            this.evetnsToTrigger[eventName] = true;
            this.emitter.on(eventName, callback);
        };
        Indexer.prototype.off = function (nodeName, event, callback) {
            var eventName = "" + event + nodeName;
            delete this.evetnsToTrigger[eventName];
            this.emitter.off(eventName, callback);
        };
        Indexer.prototype.start = function () {
            this.timeoutId = setDefer(this.ctx, /* @__PURE__ */ pipe(bind(this.sendData, this, false), this.start), TIMEOUT_BETWEEN_SENDING_DATA, 'i.s');
        };
        Indexer.prototype.stop = function () {
            this.flush();
            clearDefer(this.ctx, this.timeoutId);
            this.eventsToIndex = [];
        };
        Indexer.prototype.handleNodesAdd = function (event) {
            var _this = this;
            var nodes = [];
            var traversalIndex = 0;
            var eventWithResult = {
                sendResult: event.sendResult,
                result: [],
                indexed: 0,
                nodes: nodes,
            };
            this.eventsToIndex.push(eventWithResult);
            cForEach(function (rootNode) {
                eachNode(_this.ctx, rootNode, function (node) {
                    var id = _this.getNodeId(node);
                    if (!isNull(id)) {
                        nodes.push(node);
                        if (_this.nodeIndexCache[id]) {
                            _this.indexNode(node);
                        }
                        _this.nodeIndexCache[id] = {
                            node: node,
                            event: eventWithResult,
                            traversalIndex: traversalIndex,
                        };
                        traversalIndex += 1;
                    }
                });
            }, event.nodes);
        };
        Indexer.prototype.indexNode = function (node) {
            if (node === this.ctx) {
                return 0;
            }
            var nodeId = this.getNodeId(node);
            var cacheIndexRecord = this.nodeIndexCache[nodeId];
            var _a = this.getAndCleanupIndexerOptions(nodeId), forceParent = _a.forceParent, forceAttributes = _a.forceAttributes, forceTextContent = _a.forceTextContent, forceNext = _a.forceNext, forcePrevious = _a.forcePrevious;
            if (cacheIndexRecord) {
                var event_1 = cacheIndexRecord.event, traversalIndex = cacheIndexRecord.traversalIndex;
                var isDoc = this.ctx.document.documentElement === node;
                var nextNode = forceNext || node.nextSibling;
                var prevNode = forcePrevious || node.previousSibling;
                var next = !isDoc && nextNode
                    ? this.getNodeId(nextNode)
                    : null;
                var prev = !isDoc && prevNode
                    ? this.getNodeId(prevNode)
                    : null;
                var nodeInfo = collectNodeInfo(this.ctx, node, this.options, nodeId, this.getNodeId(forceParent || node.parentNode || node.parentElement) || 0, prev, next, forceAttributes, forceTextContent);
                if (isUndefined(nodeInfo)) {
                    return undefined;
                }
                delete this.nodeIndexCache[nodeId];
                event_1.result[traversalIndex] = nodeInfo;
                event_1.indexed += 1;
                if (event_1.nodes.length === event_1.indexed) {
                    event_1.sendResult(event_1.result);
                }
            }
            return nodeId;
        };
        Indexer.prototype.flush = function () {
            this.sendData(true);
        };
        Indexer.prototype.sendData = function (flush) {
            var _this = this;
            if (!isValidCtx(this.ctx)) {
                return;
            }
            var nodeIds = cKeys(this.nodeIndexCache);
            var allNodes = /* @__PURE__ */ cMap(function (nodeId) { return _this.nodeIndexCache[nodeId].node; }, nodeIds);
            var indexIter = iterForOf(allNodes, this.indexNode);
            var iterFn = flush
                ? iterForEach(noop)
                : iterForEachUntilMaxTime(this.ctx, MAX_EXECUTION_TIME);
            indexIter(iterFn);
            this.eventsToIndex = /* @__PURE__ */ cFilter(function (_a) {
                var indexed = _a.indexed, result = _a.result;
                return indexed !== result.length;
            }, this.eventsToIndex);
        };
        Indexer.prototype.getAndCleanupIndexerOptions = function (nodeId) {
            if (isNull(nodeId)) {
                return {};
            }
            var opts = this.indexerOptions[nodeId];
            if (opts) {
                delete this.indexerOptions[nodeId];
                return opts;
            }
            return {};
        };
        return Indexer;
    }());

    var TEST_INPUT_CLASS = '__ym_input_override_test';
    var INPUT_EVENTS = ['input', 'change', 'keyup', 'paste', 'cut'];
    var INPUT_EVENT_NAME = 'change';
    var inputCaptor =  /** @class */ (function (_super) {
            __extends(InputCaptor, _super);
            function InputCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.inputs = {};
                _this.descriptorsOverridable = false;
                _this.onInputIndex = _this.logger.wrapInErrorLogger(_this.onInputIndex, 'ii');
                _this.onInputRemove = _this.logger.wrapInErrorLogger(_this.onInputRemove, 'ir');
                _this.registerInput = _this.logger.wrapInErrorLogger(_this.registerInput, 'ri');
                _this.unregisterInput = _this.logger.wrapInErrorLogger(_this.unregisterInput, 'ur');
                _this.handleInputChangeValueEvent = _this.logger.wrapInErrorLogger(_this.handleInputChangeValueEvent, 'ce');
                _this.handleInputValueChange = _this.logger.wrapInErrorLogger(_this.handleInputValueChange, 'vc');
                return _this;
            }
            InputCaptor.prototype.start = function () {
                var _this = this;
                var indexer = this.recorder.getIndexer();
                this.descriptorsOverridable =
                    this.checkInpudDescriptorOverrideAbility();
                cForEach(function (nodeName) {
                    var name = nodeName.toLowerCase();
                    indexer.on(name, NODE_ADD_EVENT_KEY_PREFIX, bind(_this.onInputIndex, _this));
                    indexer.on(name, NODE_REMOVAL_EVENT_KEY_PREFIX, bind(_this.onInputRemove, _this));
                }, INPUT_NODES);
                this.offEventFunctions = [
                    this.eventWrapper.on(this.ctx.document, INPUT_EVENTS, bind(this.handleInputChangeValueEvent, this)),
                    function () {
                        cForEach(function (nodeName) {
                            var name = nodeName.toLowerCase();
                            indexer.off(name, NODE_ADD_EVENT_KEY_PREFIX, _this.onInputIndex);
                            indexer.off(name, NODE_REMOVAL_EVENT_KEY_PREFIX, _this.onInputRemove);
                        }, INPUT_NODES);
                        cForEach(_this.unregisterInput, cKeys(_this.inputs));
                    },
                ];
            };
            InputCaptor.prototype.unregisterInput = function (id) {
                if (this.descriptorsOverridable) {
                    var info = this.inputs[id];
                    if (info) {
                        var originalDescriptor = info.originalDescriptor, element = info.element;
                        if (originalDescriptor) {
                            this.ctx.Object.defineProperty(element, this.getPropertyName(element), originalDescriptor);
                        }
                    }
                }
            };
            InputCaptor.prototype.onInputRemove = function (event) {
                if (event) {
                    var id = event.data.id;
                    this.unregisterInput(id);
                }
            };
            InputCaptor.prototype.onInputIndex = function (event) {
                if (event) {
                    var _a = event.data, node = _a.node, id = _a.id;
                    this.registerInput(node, id);
                }
            };
            InputCaptor.prototype.getPropertyName = function (input) {
                return isCheckable(input) ? 'checked' : 'value';
            };
            InputCaptor.prototype.handleInputChangeValueEvent = function (event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                var propertyName = this.getPropertyName(target);
                this.handleInputValueChange(target[propertyName], target);
            };
            InputCaptor.prototype.handleInputValueChange = function (newValue, input) {
                var nodeId = this.indexNode(input);
                var inputState = this.inputs[nodeId];
                if (!inputState) {
                    inputState = this.registerInput(inputState, nodeId);
                    if (!inputState) {
                        return;
                    }
                }
                var checkable = inputState.checkable, value = inputState.value;
                var attribute = this.getPropertyName(input);
                var valueValid = !newValue ||
                    includes(typeof newValue, ['string', 'boolean', 'number']);
                if (valueValid && newValue !== value) {
                    var normalizedValue = normalizeAttibute(this.ctx, input, attribute, newValue, this.recorder.getOptions()).value;
                    if (!checkable) {
                        var forceRecord = isForceRecordingEnabled(input);
                        var isPrivate = isPrivateInformationField(input);
                        this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                            value: normalizedValue,
                            hidden: isPrivate && !forceRecord,
                            target: this.indexNode(input),
                        }, INPUT_EVENT_NAME);
                    }
                    else {
                        this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                            target: this.indexNode(input),
                            checked: Boolean(newValue),
                        }, INPUT_EVENT_NAME);
                    }
                    inputState.value = newValue;
                }
            };
            InputCaptor.prototype.registerInput = function (input, nodeId) {
                var _this = this;
                if (!isValidInput(input) ||
                    input.getAttribute('class') === TEST_INPUT_CLASS) {
                    return null;
                }
                // Node is already registered
                if (this.inputs[nodeId]) {
                    return null;
                }
                var checkable = isCheckable(input);
                var propertyName = this.getPropertyName(input);
                var inputState = {
                    element: input,
                    checkable: checkable,
                    value: input[propertyName],
                };
                this.inputs[nodeId] = inputState;
                if (this.descriptorsOverridable) {
                    runAsync(this.ctx, function () {
                        var protoDescriptor = _this.ctx.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), propertyName) || {};
                        var itemDescriptor = _this.ctx.Object.getOwnPropertyDescriptor(input, propertyName) || {};
                        var descriptor = mix({}, protoDescriptor, itemDescriptor);
                        if (/* @__PURE__ */ isNativeFunction("((set)?(\\s?" + propertyName + ")?)?", descriptor.set)) {
                            var that_1 = _this;
                            try {
                                _this.ctx.Object.defineProperty(input, propertyName, mix({}, descriptor, {
                                    configurable: true,
                                    set: function (value) {
                                        that_1.handleInputValueChange(value, this);
                                        return descriptor.set.call(this, value);
                                    },
                                }));
                            }
                            catch (e) { }
                            inputState.originalDescriptor = descriptor;
                        }
                    });
                }
                return inputState;
            };
            InputCaptor.prototype.checkInpudDescriptorOverrideAbility = function () {
                var result = true;
                var input = getElemCreateFunction(this.ctx)('input');
                try {
                    var testValue = 'INPUT_TEST';
                    var initialValue = 'INPUT_VALUE';
                    input = getElemCreateFunction(this.ctx)('input');
                    input.value = initialValue;
                    input.style.setProperty('display', 'none', 'important');
                    input.setAttribute('type', 'text');
                    input.setAttribute('class', TEST_INPUT_CLASS);
                    var protoDescriptor = this.ctx.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value') || {};
                    var itemDescriptor = this.ctx.Object.getOwnPropertyDescriptor(input, 'value') || {};
                    var descriptor_1 = mix({}, protoDescriptor, itemDescriptor);
                    this.ctx.Object.defineProperty(input, 'value', mix({}, descriptor_1, {
                        configurable: true,
                        set: function (value) {
                            return descriptor_1.set.call(input, value);
                        },
                    }));
                    if (input.value !== initialValue) {
                        result = false;
                    }
                    input.value = testValue;
                    if (input.value !== testValue) {
                        result = false;
                    }
                }
                catch (e) {
                    result = false;
                }
                return result;
            };
            return InputCaptor;
        }(AbstractCaptor)) ;
    var InputCaptor = inputCaptor;

    var ROTATION_EVENT_NAME = 'deviceRotation';
    var RESIZE_EVENT_NAME = 'resize';
    var resizeCaptor =  /** @class */ (function (_super) {
            __extends(ResizeCaptor, _super);
            function ResizeCaptor() {
                var _a;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.prevSize = {
                    width: 0,
                    height: 0,
                    pageHeight: 0,
                    pageWidth: 0,
                    orientation: 0,
                };
                _this.handlers = (_a = {},
                    _a['resize'] = function handleResize() {
                        var size = this.getSizeData();
                        if (this.hasSizeChanged(size)) {
                            this.prevSize = size;
                            this.sendResizeEvent(size);
                        }
                    },
                    _a['orientationchange'] = function handleDeviceRotation() {
                        var size = this.getSizeData();
                        if (this.prevSize.orientation !== size.orientation) {
                            this.prevSize = size;
                            this.sendRotationEvent(size);
                        }
                    },
                    _a);
                return _this;
            }
            ResizeCaptor.prototype.start = function () {
                _super.prototype.start.call(this);
                this.sendInitialResize();
            };
            ResizeCaptor.prototype.isSizeDataEmpty = function (sizeData) {
                return (!sizeData.height ||
                    !sizeData.width ||
                    !sizeData.pageWidth ||
                    !sizeData.pageHeight);
            };
            ResizeCaptor.prototype.hasSizeChanged = function (size) {
                return (size.height !== this.prevSize.height ||
                    size.width !== this.prevSize.width);
                // || size.pageHeight !== this.prevSize.pageHeight
                // || size.pageWidth !== this.prevSize.pageWidth;
            };
            ResizeCaptor.prototype.getSizeData = function () {
                var viewport = this.recorder.getBrowser();
                var _a = getViewportSize(this.ctx), width = _a[0], height = _a[1];
                var scrollingElement = viewport.getScrollingElement();
                return {
                    width: width,
                    height: height,
                    pageWidth: scrollingElement
                        ? scrollingElement.scrollWidth
                        : 0,
                    pageHeight: scrollingElement
                        ? scrollingElement.scrollHeight
                        : 0,
                    orientation: this.recorder.getBrowser().getOrientation(),
                };
            };
            ResizeCaptor.prototype.sendRotationEvent = function (sizeData, stamp) {
                if (stamp === void 0) { stamp = this.recorder.stamp(); }
                var width = sizeData.width, height = sizeData.height, orientation = sizeData.orientation;
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    width: width,
                    height: height,
                    orientation: orientation,
                }, ROTATION_EVENT_NAME, stamp);
            };
            ResizeCaptor.prototype.sendResizeEvent = function (sizeData, stamp) {
                if (stamp === void 0) { stamp = this.recorder.stamp(); }
                var width = sizeData.width, height = sizeData.height, pageWidth = sizeData.pageWidth, pageHeight = sizeData.pageHeight;
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, { width: width, height: height, pageWidth: pageWidth, pageHeight: pageHeight }, RESIZE_EVENT_NAME, stamp);
            };
            ResizeCaptor.prototype.sendInitialResize = function () {
                var sizeData = this.getSizeData();
                if (!this.isSizeDataEmpty(sizeData)) {
                    if (this.isSizeDataEmpty(this.prevSize)) {
                        this.prevSize = sizeData;
                    }
                    this.sendResizeEvent(sizeData, 0);
                }
                else {
                    setDefer(this.ctx, bind(this.sendInitialResize, this), 300);
                }
            };
            return ResizeCaptor;
        }(AbstractCaptor)) ;
    var ResizeCaptor = resizeCaptor;

    var ThrottleManager = /** @class */ (function () {
        function ThrottleManager(ctx) {
            this.index = 0;
            this.throttlersTimeouts = {};
            this.ctx = ctx;
        }
        // TODO: изменить реализацию на observable
        ThrottleManager.prototype.createThrottledFunction = function (fn, timeout, options) {
            if (options === void 0) { options = {}; }
            var time = TimeOne(this.ctx);
            var throtlerId = this.index;
            this.index += 1;
            this.throttlersTimeouts[throtlerId] = {
                timeoutId: 0,
                running: false,
                fn: fn,
                args: [],
                lastRun: time(getMs),
            };
            var that = this;
            return function throttledFunction() {
                // eslint-disable-next-line prefer-rest-params
                var args = argsToArray(arguments);
                var firstCall = options.firstCall &&
                    !that.throttlersTimeouts[throtlerId].running;
                var state = that.throttlersTimeouts[throtlerId];
                clearDefer(that.ctx, state.timeoutId);
                state.args = args;
                state.running = true;
                var now = time(getMs);
                if (firstCall || now - state.lastRun >= timeout) {
                    fn.apply(void 0, args);
                    state.lastRun = now;
                }
                state.timeoutId = setDefer(that.ctx, function () {
                    if (!firstCall) {
                        fn.apply(void 0, args);
                        state.lastRun = time(getMs);
                    }
                    state.running = false;
                    state.args = [];
                }, timeout, 'th');
            };
        };
        ThrottleManager.prototype.flush = function () {
            var _this = this;
            cForEach(function (key) {
                var _a = _this.throttlersTimeouts[key], running = _a.running, timeoutId = _a.timeoutId, fn = _a.fn, args = _a.args;
                if (running) {
                    _this.throttlersTimeouts[key].running = false;
                    fn.apply(void 0, args);
                    clearDefer(_this.ctx, timeoutId);
                }
            }, cKeys(this.throttlersTimeouts));
        };
        return ThrottleManager;
    }());

    var SCROLL_EVENT_NAME = 'scroll';
    var scrollCaptor =  /** @class */ (function (_super) {
            __extends(ScrollCaptor, _super);
            function ScrollCaptor(ctx, recorder, loggerName) {
                var _a;
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.throttledHandlers = [];
                _this.windowScroll = {
                    x: 0,
                    y: 0,
                };
                _this.handlers = (_a = {},
                    _a['scroll'] = function handleScrollEvent(event) {
                        // Android already throttles scroll event
                        if (this.recorder.getBrowser().isAndroid()) {
                            this.originalHandler(event);
                        }
                        else {
                            var target_1 = event.target;
                            var handlerAndTarget = /* @__PURE__ */ cFilter(function (_a) {
                                var element = _a[0];
                                return element === target_1;
                            }, this.throttledHandlers).pop();
                            if (handlerAndTarget) {
                                var handler = handlerAndTarget[1];
                                handler(event);
                            }
                            else {
                                var handler = this.throttleManager.createThrottledFunction(bind(this.originalHandler, this), 100, { firstCall: true });
                                this.throttledHandlers.push([target_1, handler]);
                                handler(event);
                            }
                        }
                    },
                    _a);
                _this.throttleManager = new ThrottleManager(ctx);
                _this.originalHandler = _this.logger.wrapInErrorLogger(_this.originalHandler, 'o');
                return _this;
            }
            ScrollCaptor.prototype.start = function () {
                _super.prototype.start.call(this);
                var x = Math.max(this.ctx.scrollX, 0);
                var y = Math.max(this.ctx.scrollY, 0);
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    x: x,
                    y: y,
                    page: true,
                    target: -1,
                }, SCROLL_EVENT_NAME, 0);
            };
            ScrollCaptor.prototype.stop = function () {
                _super.prototype.stop.call(this);
                this.throttleManager.flush();
            };
            ScrollCaptor.prototype.originalHandler = function (event) {
                var scrollingElement = this.recorder
                    .getBrowser()
                    .getScrollingElement();
                var target = event.target;
                // normalized scroll position
                var scrollPosition = this.getScroll(target);
                var pageScroll = /* @__PURE__ */ cSome(/* @__PURE__ */ equal(target), [
                    scrollingElement,
                    this.ctx,
                    this.ctx.document,
                ]);
                var x = Math.max(scrollPosition.left, 0);
                var y = Math.max(scrollPosition.top, 0);
                if (pageScroll) {
                    if (this.windowScroll.x === x && this.windowScroll.y === y) {
                        return;
                    }
                    this.windowScroll = { x: x, y: y };
                }
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    x: x,
                    y: y,
                    page: pageScroll,
                    target: pageScroll
                        ? -1
                        : this.indexNode(target),
                }, SCROLL_EVENT_NAME);
            };
            ScrollCaptor.prototype.getScroll = function (node) {
                var nullResult = {
                    left: 0,
                    top: 0,
                };
                if (!node) {
                    return nullResult;
                }
                if (node.window === node) {
                    return {
                        top: node.scrollY || 0,
                        left: node.scrollX || 0,
                    };
                }
                var ownerDocument = node.ownerDocument || node;
                var nodeDocumentElement = node.documentElement;
                var nodeWindow = ownerDocument.defaultView || ownerDocument.parentWindow;
                var ownerBody = ownerDocument.body;
                if (node === ownerDocument) {
                    // eslint-disable-next-line no-param-reassign
                    node = this.recorder.getBrowser().getScrollingElement();
                    if (!node) {
                        return nullResult;
                    }
                }
                if (includes(node, [nodeDocumentElement, ownerBody])) {
                    return {
                        top: node.scrollTop || nodeWindow.scrollY,
                        left: node.scrollLeft || nodeWindow.scrollX,
                    };
                }
                return {
                    top: node.scrollTop || 0,
                    left: node.scrollLeft || 0,
                };
            };
            return ScrollCaptor;
        }(AbstractCaptor)) ;
    var ScrollCaptor = scrollCaptor;

    var POINTER_EVENTS = ['mousemove', 'mousedown', 'mouseup', 'click'];
    var mouseCaptor =  /** @class */ (function (_super) {
            __extends(MouseCaptor, _super);
            function MouseCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.handlers = cReduce(function (carry, event) {
                    carry[event] = _this.onMouseEvent;
                    return carry;
                }, {}, POINTER_EVENTS);
                _this.throttleManager = new ThrottleManager(ctx);
                _this.normalHandler = _this.logger.wrapInErrorLogger(_this.normalHandler, 'n');
                _this.throttledHandler = _this.logger.wrapInErrorLogger(_this.throttleManager.createThrottledFunction(bind(_this.normalHandler, _this), 100), 't');
                return _this;
            }
            MouseCaptor.prototype.stop = function () {
                _super.prototype.stop.call(this);
                this.throttleManager.flush();
            };
            MouseCaptor.prototype.onMouseEvent = function (event) {
                var type = null;
                try {
                    // Если курсор на айфрейме, может быть отказано в доступе
                    // eslint-disable-next-line prefer-destructuring
                    type = event.type;
                }
                catch (e) {
                    return;
                }
                if (type === 'mousemove') {
                    this.throttledHandler(event);
                }
                else {
                    this.normalHandler(event);
                }
            };
            MouseCaptor.prototype.normalHandler = function (event) {
                var type = event.type, target = event.target, _a = event.clientX, clientX = _a === void 0 ? null : _a, _b = event.clientY, clientY = _b === void 0 ? null : _b;
                // get target node by it's position (x,y)
                var node = (target ||
                    this.ctx.document.elementFromPoint(clientX, clientY));
                // prepare event object
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    x: clientX || 0,
                    y: clientY || 0,
                    target: this.indexNode(node),
                }, type);
            };
            return MouseCaptor;
        }(AbstractCaptor)) ;
    var MouseCaptor = mouseCaptor;

    var FOCUS_EVENTS = ['focus', 'blur'];
    var focusCaptor =  /** @class */ (function (_super) {
            __extends(FocusCaptor, _super);
            function FocusCaptor() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.handlers = cReduce(function (carry, event) {
                    carry[event] = _this.focusHandler;
                    return carry;
                }, {}, FOCUS_EVENTS);
                return _this;
            }
            FocusCaptor.prototype.focusHandler = function (event) {
                var target = event.target, type = event.type;
                var targetNode = target === this.ctx
                    ? this.ctx.document.documentElement
                    : target;
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    target: this.indexNode(targetNode),
                }, type);
            };
            return FocusCaptor;
        }(AbstractCaptor)) ;
    var FocusCaptor = focusCaptor;

    var getSelectFn = /* @__PURE__ */ memo(function (ctx) {
        var nativeSelect = /* @__PURE__ */ toNativeOrFalse(ctx.getSelection, 'getSelection');
        return nativeSelect ? bind(nativeSelect, ctx) : noop;
    });
    var getSelect = /* @__PURE__ */ pipe(getSelectFn, call);

    var SELECTION_EVENTS = [
        'mousemove',
        'touchmove',
        'mousedown',
        'touchdown',
        'select',
    ];
    var INPUT_TYPE_REGEX = /text|search|password|tel|url/;
    var selectionCaptor =  /** @class */ (function (_super) {
            __extends(SelectionCaptor, _super);
            function SelectionCaptor() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.hasSelection = false;
                _this.handlers = cReduce(function (carry, event) {
                    carry[event] = _this.handleSelectionEvent;
                    return carry;
                }, {}, SELECTION_EVENTS);
                return _this;
            }
            SelectionCaptor.prototype.handleSelectionEvent = function (event) {
                var recorder = this.recorder;
                var _a = event, type = _a.type, which = _a.which, target = _a.target;
                if (type !== 'mousemove' || which === 1) {
                    var selection = type === 'select'
                        ? this.getSelectionFor(target)
                        : this.getPageSelection();
                    if (selection && selection.start !== selection.end) {
                        this.hasSelection = true;
                        recorder.sendEventObject(EVENT_EVENT_TYPE, selection, 'selection');
                    }
                    else if (this.hasSelection) {
                        this.hasSelection = false;
                        recorder.sendEventObject(EVENT_EVENT_TYPE, {
                            start: 0,
                            end: 0,
                        }, 'selection');
                    }
                }
            };
            SelectionCaptor.prototype.getPageSelection = function () {
                var selection = getSelect(this.ctx);
                if (selection && selection.rangeCount > 0) {
                    var range = selection.getRangeAt(0) ||
                        this.ctx.document.createRange();
                    var startNode = this.indexNode(range.startContainer);
                    var endNode = this.indexNode(range.endContainer);
                    if (!isUndefined(startNode) && !isUndefined(endNode)) {
                        return {
                            start: range.startOffset,
                            end: range.endOffset,
                            startNode: startNode,
                            endNode: endNode,
                        };
                    }
                }
                return undefined;
            };
            SelectionCaptor.prototype.getSelectionFor = function (element) {
                if (INPUT_TYPE_REGEX.test(element.type || '')) {
                    var target = this.indexNode(element);
                    if (!isUndefined(target)) {
                        return {
                            start: element.selectionStart,
                            end: element.selectionEnd,
                            target: target,
                        };
                    }
                }
                return undefined;
            };
            return SelectionCaptor;
        }(AbstractCaptor)) ;
    var SelectionCaptor = selectionCaptor;

    var EVENTS_RENAME = {
        focus: 'windowfocus',
        blur: 'windowblur',
    };
    var windowFocusCaptor =  /** @class */ (function (_super) {
            __extends(WindowFocusCaptor, _super);
            function WindowFocusCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.visibility = null;
                if (!isUndefined(_this.ctx.document.hidden)) {
                    _this.visibility = {
                        hidden: 'hidden',
                        event: 'visibilitychange',
                    };
                }
                else if (!isUndefined(_this.ctx.document.msHidden)) {
                    _this.visibility = {
                        hidden: 'msHidden',
                        event: 'msvisibilitychange',
                    };
                }
                else if (!isUndefined(_this.ctx.document.webkitHidden)) {
                    _this.visibility = {
                        hidden: 'webkitHidden',
                        event: 'webkitvisibilitychange',
                    };
                }
                _this.handleEvent = _this.logger.wrapInErrorLogger(_this.handleEvent, 'e');
                return _this;
            }
            WindowFocusCaptor.prototype.start = function () {
                var events = this.visibility
                    ? [this.visibility.event]
                    : ['focus', 'blur'];
                this.offEventFunctions = [
                    this.eventWrapper.on(this.ctx, events, bind(this.handleEvent, this)),
                ];
            };
            WindowFocusCaptor.prototype.handleEvent = function (event) {
                if (this.visibility) {
                    var hidden = this.ctx.document[this.visibility.hidden];
                    var type = hidden ? 'blur' : 'focus';
                    this.recorder.sendEventObject(EVENT_EVENT_TYPE, {}, EVENTS_RENAME[type]);
                }
                else {
                    var type = event.type;
                    this.recorder.sendEventObject(EVENT_EVENT_TYPE, {}, EVENTS_RENAME[type]);
                }
            };
            return WindowFocusCaptor;
        }(AbstractCaptor)) ;
    var WindowFocusCaptor = windowFocusCaptor;

    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    var getGuid = function () {
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };

    var TOUCH_EVENTS = [
        'touchmove',
        'touchstart',
        'touchend',
        'touchcancel',
        'touchforcechange',
    ];
    var TOUCH_ID_FIELD = '__ym_touch_id';
    var SCROLL_TIMEOUT = 150;
    var touchesCaptor =  /** @class */ (function (_super) {
            __extends(TouchesCaptor, _super);
            function TouchesCaptor(ctx, recorder, loggerName) {
                var _a;
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.touchIdsMap = {};
                _this.scrolling = false;
                _this.scrollingTimeoutId = 0;
                _this.handlers = cReduce(function (carry, event) {
                    carry[event] = {
                        handler: _this.touchHandler,
                        target: _this.ctx.document,
                    };
                    return carry;
                }, (_a = {},
                    _a['scroll'] = {
                        handler: function scrollHandler() {
                            var _this = this;
                            this.scrolling = true;
                            clearDefer(this.ctx, this.scrollingTimeoutId);
                            this.scrollingTimeoutId = setDefer(this.ctx, function () {
                                _this.scrolling = false;
                            }, SCROLL_TIMEOUT);
                        },
                        target: _this.ctx.document,
                    },
                    _a), TOUCH_EVENTS);
                _this.throttleManager = new ThrottleManager(ctx);
                _this.normalTouchHandler = _this.logger.wrapInErrorLogger(_this.normalTouchHandler, 'nh');
                _this.throttledTouchHandler = _this.logger.wrapInErrorLogger(_this.throttleManager.createThrottledFunction(_this.normalTouchHandler, _this.recorder.getBrowser().isAndroid() ? 0 : 50, { firstCall: true }), 'th');
                return _this;
            }
            TouchesCaptor.prototype.touchHandler = function (event) {
                var _this = this;
                var isFinalEvent = event.type === 'touchcancel' || event.type === 'touchend';
                if (event.changedTouches && event.changedTouches.length > 0) {
                    cForEach(function (touch) {
                        var id = _this.getTouchID(touch);
                        // eslint-disable-next-line no-param-reassign
                        touch[TOUCH_ID_FIELD] = id;
                        if (isFinalEvent) {
                            delete _this.touchIdsMap[touch.identifier];
                        }
                    }, toArray(event.changedTouches));
                }
                if (event.type === 'touchmove') {
                    if (this.scrolling) {
                        this.normalTouchHandler(event);
                    }
                    else {
                        this.throttledTouchHandler(event, this.recorder.stamp());
                    }
                }
                else {
                    this.normalTouchHandler(event);
                }
            };
            TouchesCaptor.prototype.getTouchID = function (touch) {
                if (!this.touchIdsMap[touch.identifier]) {
                    this.touchIdsMap[touch.identifier] = getGuid();
                }
                return this.touchIdsMap[touch.identifier];
            };
            TouchesCaptor.prototype.normalTouchHandler = function (event, stamp) {
                if (stamp === void 0) { stamp = this.recorder.stamp(); }
                var type = event.type, changedTouches = event.changedTouches;
                var touchData = /* @__PURE__ */ cMap(function (touch) {
                    return {
                        id: touch[TOUCH_ID_FIELD],
                        x: Math.round(touch.clientX),
                        y: Math.round(touch.clientY),
                        force: touch.force,
                    };
                }, toArray(changedTouches));
                if (touchData.length > 0) {
                    this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                        touches: touchData,
                        target: this.indexNode(event.target),
                    }, type, stamp);
                }
            };
            return TouchesCaptor;
        }(AbstractCaptor)) ;
    var TouchesCaptor = touchesCaptor;

    var srcsetCaptor =  /** @class */ (function (_super) {
            __extends(SrcsetLoadCaptor, _super);
            function SrcsetLoadCaptor() {
                var _a;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.handlers = (_a = {},
                    _a['load'] = {
                        handler: function onImageLoad(event) {
                            var target = event.target;
                            var name = getNodeName(target);
                            if (name === 'IMG' && target.getAttribute('srcset')) {
                                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                                    target: this.indexNode(target),
                                    value: target.currentSrc,
                                }, 'srcset');
                            }
                        },
                        target: _this.ctx.document,
                    },
                    _a);
                return _this;
            }
            return SrcsetLoadCaptor;
        }(AbstractCaptor)) ;
    var SrcsetLoadCaptor = srcsetCaptor;

    var ZOOM_EVENT_NAME = 'zoom';
    var ZOOM_THROTTLE_TIMEOUT = 10;
    var zoomCaptor =  /** @class */ (function (_super) {
            __extends(ZoomCaptor, _super);
            function ZoomCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.zoomLevel = 1;
                _this.throttleManager = new ThrottleManager(ctx);
                _this.checkZoom = _this.logger.wrapInErrorLogger(_this.checkZoom, 'z');
                return _this;
            }
            ZoomCaptor.prototype.start = function () {
                // Если у человека нет vusual viewport, мы даже не будем пытаться что-то сделать
                if (this.getZoom()) {
                    _super.prototype.start.call(this);
                    this.checkZoom();
                    var offCallback = this.eventWrapper.on(getPath(this.ctx, 'visualViewport'), ['resize'], this.throttleManager.createThrottledFunction(this.checkZoom, ZOOM_THROTTLE_TIMEOUT));
                    this.offEventFunctions.push(offCallback);
                }
            };
            ZoomCaptor.prototype.stop = function () {
                _super.prototype.stop.call(this);
                this.throttleManager.flush();
            };
            ZoomCaptor.prototype.checkZoom = function () {
                var zoom = this.getZoom();
                if (zoom && zoom !== this.zoomLevel) {
                    this.zoomLevel = zoom;
                    this.sendZoom(zoom);
                }
            };
            ZoomCaptor.prototype.getZoom = function () {
                var viewport = getVisualViewportSize(this.ctx);
                if (viewport) {
                    var scale = viewport[2];
                    return scale;
                }
                return null;
            };
            ZoomCaptor.prototype.sendZoom = function (zoomLevel) {
                var _a = getDocumentScroll(this.ctx), x = _a.x, y = _a.y;
                // TODO избавится от этого громоздково формата данных
                this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                    x: x,
                    y: y,
                    level: zoomLevel,
                }, ZOOM_EVENT_NAME);
            };
            return ZoomCaptor;
        }(AbstractCaptor)) ;
    var ZoomCaptor = zoomCaptor;

    var _a$e;
    var MODIFIER_CODES = {
        91: 'super',
        93: 'super',
        224: 'super',
        18: 'alt',
        17: 'ctrl',
        16: 'shift',
        9: 'tab',
        8: 'backspace',
        46: 'delete',
    };
    var KEY_ORDER = {
        "super": 1,
        ctrl: 2,
        alt: 3,
        shift: 4,
        tab: 5,
        "delete": 6,
        backspace: 6,
    };
    var SINGLE_KEYS = [4, 9, 8, 32, 37, 38, 39, 40, 46];
    var MAC_OS_KEY = '1';
    var OTHER_OS_KEY = '2';
    var KEY_DICT = (_a$e = {},
        _a$e[MAC_OS_KEY] = {
            91: '&#8984;',
            93: '&#8984;',
            224: '&#8984;',
            18: '&#8997;',
            17: '&#8963;',
            16: '&#8679;',
            9: '&#8677;',
            8: '&#9003;',
            46: '&#9003;',
        },
        _a$e[OTHER_OS_KEY] = {
            91: '&#xff;',
            93: '&#xff;',
            224: '&#xff;',
            18: 'Alt',
            17: 'Ctrl',
            16: 'Shift',
            9: 'Tab',
            8: 'Backspace',
            46: 'Delete',
        },
        _a$e.multi = {
            32: 'SPACEBAR',
            37: '&larr;',
            38: '&uarr;',
            39: '&rarr;',
            40: '&darr;',
            13: 'Enter',
        },
        _a$e);
    var flashRegex = /flash/;
    var forceDisabledRegex = /ym-disable-keys/;
    var metaSymbolsRegex = /^&#/;
    var keyStokeCaptor =  /** @class */ (function (_super) {
            __extends(KeyStrokeCaptor, _super);
            function KeyStrokeCaptor(ctx, recorder, loggerName) {
                var _a;
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.holding = {};
                _this.modifierPressed = 0;
                _this.keyStrokes = [];
                _this.strokesToSend = [];
                _this.endCaptureTimeout = 0;
                _this.resetTimeout = 0;
                _this.handlers = (_a = {},
                    _a['keydown'] = function handleKeyDown(event) {
                        if (!this.isValid(event)) {
                            return;
                        }
                        if (!this.isInputWithShift(event)) {
                            var keyCode = event.keyCode, repeat = event.repeat;
                            if (!repeat && !this.holding[keyCode]) {
                                this.holding[event.keyCode] = true;
                                var isModifier = MODIFIER_CODES[event.keyCode];
                                if (isModifier && !this.modifierPressed) {
                                    this.modifierPressed += 1;
                                    this.startCapture(event);
                                    this.reset(300);
                                }
                                else if (this.modifierPressed) {
                                    this.cancelReset();
                                    this.pushKey(event);
                                    this.endCapture();
                                }
                                else {
                                    this.reset();
                                    this.pushKey(event);
                                }
                            }
                        }
                    },
                    _a['keyup'] = function handleKeyup(event) {
                        if (!this.isValid(event)) {
                            return;
                        }
                        var keyCode = event.keyCode;
                        var isModifier = MODIFIER_CODES[event.keyCode];
                        if (this.holding[event.keyCode]) {
                            this.holding[keyCode] = false;
                        }
                        if (isModifier) {
                            if (this.modifierPressed) {
                                this.modifierPressed = 0;
                                this.holding = {};
                            }
                        }
                        if (this.keyStrokes.length === 1) {
                            var e = this.keyStrokes[0];
                            if (includes(e.keyCode, SINGLE_KEYS)) {
                                this.sendKeys([e], true);
                                this.reset();
                            }
                        }
                        this.keyStrokes = /* @__PURE__ */ cFilter(/* @__PURE__ */ pipe(/* @__PURE__ */ equal(keyCode), notFn), this.keyStrokes);
                        clearDefer(this.ctx, this.endCaptureTimeout);
                    },
                    _a);
                _this.OS =
                    (getPath(ctx, 'navigator.appVersion') || '').indexOf('Mac') !== -1
                        ? MAC_OS_KEY
                        : OTHER_OS_KEY;
                _this.isValid = _this.logger.wrapInErrorLogger(_this.isValid, 'v');
                _this.endCapture = _this.logger.wrapInErrorLogger(_this.endCapture, 'ec');
                _this.sendKeys = _this.logger.wrapInErrorLogger(_this.sendKeys, 'sk');
                _this.getKeystrokesData = _this.logger.wrapInErrorLogger(_this.getKeystrokesData, 'gk');
                _this.startCapture = _this.logger.wrapInErrorLogger(_this.startCapture, 'sc');
                _this.cancelCapture = _this.logger.wrapInErrorLogger(_this.cancelCapture, 'cc');
                _this.reset = _this.logger.wrapInErrorLogger(_this.reset, 'r');
                _this.resetSync = _this.logger.wrapInErrorLogger(_this.resetSync, 'rs');
                return _this;
            }
            KeyStrokeCaptor.prototype.isValid = function (event) {
                var activeElement = this.ctx.document.activeElement;
                var target = event.target;
                return !/* @__PURE__ */ cSome(Boolean, [
                    // is flash
                    activeElement &&
                        activeElement.nodeName === 'OBJECT' &&
                        flashRegex.test(activeElement.getAttribute('type') || ''),
                    // is password
                    target.nodeName === 'INPUT' &&
                        target.getAttribute('type') === 'password' &&
                        forceDisabledRegex.test(target.className),
                ]);
            };
            KeyStrokeCaptor.prototype.endCapture = function () {
                this.strokesToSend = this.keyStrokes.slice(0);
                // todo перейти на runAsync ?
                clearDefer(this.ctx, this.endCaptureTimeout);
                this.endCaptureTimeout = setDefer(this.ctx, /* @__PURE__ */ bindArg(this.strokesToSend, bind(this.sendKeys, this)), 0, 'e.c');
            };
            KeyStrokeCaptor.prototype.sendKeys = function (events, force) {
                if (force === void 0) { force = false; }
                if (events.length > 1 || force) {
                    var keystrokes = this.getKeystrokesData(events);
                    this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                        keystrokes: keystrokes,
                    }, 'keystroke');
                }
            };
            KeyStrokeCaptor.prototype.getKeystrokesData = function (events) {
                var _this = this;
                var strokesData = /* @__PURE__ */ cMap(function (event) {
                    var id = event.keyCode;
                    var modifier = MODIFIER_CODES[id];
                    var symbol = _this.getKeySymbol(id);
                    return {
                        id: id,
                        key: symbol,
                        isMeta: !!modifier && metaSymbolsRegex.test(symbol),
                        modifier: modifier,
                    };
                }, events);
                return cSort(function (a, b) {
                    return ((KEY_ORDER[a.modifier] || 100) -
                        (KEY_ORDER[b.modifier] || 100));
                }, strokesData);
            };
            KeyStrokeCaptor.prototype.getKeySymbol = function (key) {
                var symbol = KEY_DICT[this.OS][key] || KEY_DICT.multi[key];
                return symbol || String.fromCharCode(key);
            };
            KeyStrokeCaptor.prototype.pushKey = function (event) {
                if (!includes(event, this.keyStrokes)) {
                    this.keyStrokes.push(event);
                }
            };
            KeyStrokeCaptor.prototype.startCapture = function (event) {
                this.pushKey(event);
                this.cancelCapture();
            };
            KeyStrokeCaptor.prototype.cancelCapture = function () {
                if (!this.modifierPressed) {
                    this.keyStrokes = [];
                }
                else {
                    setDefer(this.ctx, this.cancelCapture, 100);
                }
            };
            KeyStrokeCaptor.prototype.cancelReset = function () {
                clearDefer(this.ctx, this.resetTimeout);
            };
            KeyStrokeCaptor.prototype.reset = function (timeout) {
                if (timeout) {
                    this.resetTimeout = setDefer(this.ctx, bind(this.resetSync, this), timeout);
                }
                else {
                    this.resetSync();
                }
            };
            KeyStrokeCaptor.prototype.resetSync = function () {
                this.modifierPressed = 0;
                this.keyStrokes = [];
                this.holding = {};
                clearDefer(this.ctx, this.endCaptureTimeout);
            };
            KeyStrokeCaptor.prototype.isInputWithShift = function (event) {
                if (event.target &&
                    event.target.nodeName === 'INPUT') {
                    return (event.shiftKey ||
                        event.keyCode === 32 ||
                        MODIFIER_CODES[event.keyCode] === 'shift');
                }
                return false;
            };
            return KeyStrokeCaptor;
        }(AbstractCaptor)) ;
    var KeyStrokeCaptor = keyStokeCaptor;

    var CONNECTOR_INITED = 'i';
    var SLAVE_DATA_RECIEVED = 'sdr';
    var SLAVE_INIT_FREQUENCY = 100;
    var SLAVE_REGISTRATION_TIMEOUT = 2000;
    // Это всё эвенты для внутреннего пользования
    var SLAVE_REGISTER_EVENT_NAME = 'sr';
    var SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME = 'н';
    var SLAVE_DATA_EVENT_NAME = 'sd';
    var FRAME_WV2_EVENTS = [
        SLAVE_REGISTER_EVENT_NAME,
        SLAVE_DATA_EVENT_NAME,
        SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME,
    ];
    var sendMessage = function (ctx, target, message) {
        var data = stringify$1(ctx, message);
        target.postMessage(data, '*');
    };
    var findIframe = function (ctx, iframeWindow) {
        try {
            return /* @__PURE__ */ cFind(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('contentWindow'), /* @__PURE__ */ equal(iframeWindow)), toArray(ctx.document.querySelectorAll('iframe')));
        }
        catch (e) {
            return null;
        }
    };
    var getIframeConnector = function (ctx, recorder, trustedHosts) {
        var frameEventsEmitter = emitter(ctx);
        var eventWrapper = cEvent(ctx);
        var isInFrame = isIframe(ctx);
        var currentFrameId = recorder.getFrameId();
        var isPostBroken = !getPath(ctx, 'postMessage') ||
            (isInFrame && !getPath(ctx, 'parent.postMessage'));
        var getEmitter = /* @__PURE__ */ bindArg(frameEventsEmitter, firstArg);
        if (isPostBroken) {
            if (!currentFrameId) {
                // Это ситуация когда по какой-то причине сломан postMessage в самом окне, или в паренте
                // Но мы не в about:blank и не зафорсированный раб
                setDefer(ctx, bind(frameEventsEmitter.trigger, frameEventsEmitter, CONNECTOR_INITED, {
                    isSlave: false,
                }), 10);
                return {
                    getEmitter: getEmitter,
                    sendSlaveData: noop,
                    stop: noop,
                };
            }
            // Это внутри about:blank, тут нет доступа к собственному буфферу и прочим прелестям кода
            // счётчика поэтому мы падаем тут
            throwFunction(createKnownError());
        }
        frameEventsEmitter.on(SLAVE_REGISTER_EVENT_NAME, function (event) {
            var _a;
            var frame = findIframe(ctx, event.source);
            if (frame) {
                sendMessage(ctx, event.source, (_a = {},
                    _a['type'] = SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME,
                    _a['frameId'] = recorder.getIndexer().indexNode(frame),
                    _a));
            }
        });
        frameEventsEmitter.on(SLAVE_DATA_EVENT_NAME, function (event) {
            // Это значит, что инстанс рекордера был создан в контексте родительского окна и
            // поле source будет ссылаться на это самое окно
            var data = event.data, source = event.source;
            var isChildOfRecorder = ctx === source;
            if (isChildOfRecorder || findIframe(ctx, source)) {
                frameEventsEmitter.trigger(SLAVE_DATA_RECIEVED, {
                    data: data['data'],
                    frameId: data['frameId'],
                });
            }
        });
        // Если у нас на старте есть frameId, нам не нужно пытаться регистрироватся, мы сразу же можем
        // Начать посылать сообщения
        if (isInFrame && !currentFrameId) {
            var isInited_1 = false;
            var timeoutId_1 = 0;
            var sendInitMessage_1 = function () {
                var _a;
                sendMessage(ctx, ctx.parent, (_a = {},
                    _a['type'] = SLAVE_REGISTER_EVENT_NAME,
                    _a));
                timeoutId_1 = setDefer(ctx, sendInitMessage_1, SLAVE_INIT_FREQUENCY, 'if.i');
            };
            sendInitMessage_1();
            var onSlaveRegisteredResponse_1 = function (event) {
                frameEventsEmitter.off(SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME, onSlaveRegisteredResponse_1);
                clearDefer(ctx, timeoutId_1);
                var host = parseUrl(ctx, event['origin']).host;
                if (!isInited_1 &&
                    event.source === ctx.parent &&
                    event.data['frameId'] &&
                    (getLocation(ctx).host === 'about:blank' ||
                        includes(host, trustedHosts))) {
                    isInited_1 = true;
                    frameEventsEmitter.trigger(CONNECTOR_INITED, {
                        frameId: event.data['frameId'],
                        isSlave: true,
                    });
                }
            };
            frameEventsEmitter.on(SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME, onSlaveRegisteredResponse_1);
            setDefer(ctx, function () {
                frameEventsEmitter.off(SLAVE_REGISTER_PARENT_RESPONSE_EVENT_NAME, onSlaveRegisteredResponse_1);
                clearDefer(ctx, timeoutId_1);
                if (!isInited_1) {
                    isInited_1 = true;
                    frameEventsEmitter.trigger(CONNECTOR_INITED, {
                        isSlave: false,
                    });
                }
            }, SLAVE_REGISTRATION_TIMEOUT, 'if.r');
        }
        var unsubscribe = eventWrapper.on(ctx, ['message'], function (event) {
            var data = parse$1(ctx, event['data']);
            if (data &&
                data['type'] &&
                includes(data['type'], FRAME_WV2_EVENTS)) {
                frameEventsEmitter.trigger(data['type'], {
                    data: data,
                    source: event.source,
                    origin: event.origin,
                });
            }
        });
        return {
            getEmitter: getEmitter,
            sendSlaveData: function (data) {
                var _a;
                return sendMessage(ctx, ctx.parent, (_a = {},
                    _a['frameId'] = recorder.getFrameId(),
                    _a['data'] = data,
                    _a['type'] = SLAVE_DATA_EVENT_NAME,
                    _a));
            },
            stop: unsubscribe,
        };
    };

    var SAME_ORIGIN_SANDBOX_REGEX = /allow-same-origin/;
    var IGNORE_IFRAME_ATTRIBUTE = '_ym_ignore';
    var iframeCaptor =  /** @class */ (function (_super) {
            __extends(IframeCaptor, _super);
            function IframeCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.slaveRecorders = [];
                _this.framesRecordStamps = {};
                _this.onFrameIndex = _this.logger.wrapInErrorLogger(_this.onFrameIndex, 'fi');
                _this.onSlaveDataRecieved = _this.logger.wrapInErrorLogger(_this.onSlaveDataRecieved, 'sd');
                _this.onSrcChange = _this.logger.wrapInErrorLogger(_this.onSrcChange, 'src');
                _this.observer = new MutationObserver(_this.onSrcChange);
                return _this;
            }
            IframeCaptor.prototype.start = function () {
                _super.prototype.start.call(this);
                if (this.recorder.getOptions().childIframe) {
                    this.recorder
                        .getIndexer()
                        .on('iframe', NODE_ADD_EVENT_KEY_PREFIX, bind(this.onFrameIndex, this));
                }
                this.recorder
                    .getIframeConnector()
                    .getEmitter()
                    .on(SLAVE_DATA_RECIEVED, bind(this.onSlaveDataRecieved, this));
            };
            IframeCaptor.prototype.stop = function () {
                _super.prototype.stop.call(this);
                cForEach(function (_a) {
                    var recorder = _a.recorder;
                    recorder.stop();
                }, this.slaveRecorders);
            };
            IframeCaptor.prototype.onSrcChange = function (mutations) {
                var mutation = mutations.pop();
                var iframe = mutation.target;
                var slaveRecorder = /* @__PURE__ */ cFind(function (data) { return data.iframe === iframe; }, this.slaveRecorders);
                if (slaveRecorder) {
                    this.slaveRecorders = /* @__PURE__ */ cFilter(function (data) { return data.iframe !== iframe; }, this.slaveRecorders);
                    var frameId = slaveRecorder.recorder.getFrameId();
                    try {
                        slaveRecorder.recorder.stop();
                    }
                    catch (e) {
                        // возможны разные интересные эксепшены которые
                        // мы просто мьютим тут
                    }
                    this.createSlaveRecorder(iframe, frameId);
                }
            };
            IframeCaptor.prototype.onFrameIndex = function (event) {
                if (event) {
                    var iframe = event.data.node;
                    this.observer.observe(iframe, {
                        attributes: true,
                        attributeFilter: ['src'],
                    });
                    this.createSlaveRecorder(iframe, event.data.id);
                }
            };
            IframeCaptor.prototype.createSlaveRecorder = function (iframe, frameId) {
                var _this = this;
                if (this.isBlankOrSameOriginIframe(iframe)) {
                    waitForBody(this.ctx, iframe)
                        .then(function () {
                        var slaveRecorder = _this.recorder.createSlaveRecorder(iframe.contentWindow, frameId);
                        _this.slaveRecorders.push({
                            recorder: slaveRecorder,
                            iframe: iframe,
                        });
                    })["catch"](noop);
                }
            };
            IframeCaptor.prototype.onSlaveDataRecieved = function (slaveDataEvent) {
                var _this = this;
                var _a = slaveDataEvent, frameId = _a.frameId, data = _a.data;
                if (!this.framesRecordStamps[frameId]) {
                    this.framesRecordStamps[frameId] = {
                        data: [],
                    };
                }
                var state = this.framesRecordStamps[frameId];
                state.data = state.data.concat(data);
                if (this.ctx.isNaN(state.dateDiff)) {
                    cForEach(function (event) {
                        if (event.type === PAGE_EVENT_TYPE) {
                            state.dateDiff =
                                event.data.recordStamp -
                                    _this.recorder.getRecordStamp();
                        }
                    }, state.data);
                }
                if (!this.ctx.isNaN(state.dateDiff)) {
                    this.recorder.sendData(/* @__PURE__ */ cMap(function (event) {
                        // eslint-disable-next-line no-param-reassign
                        event.stamp += state.dateDiff;
                        // Потенциально мы можем инициализироваться внутри фрейма раньше
                        // чем внутри основного окна, чтобы избежать отрицательных стэмпов
                        // мы их правим на нулевые
                        event.stamp = _this.ctx.Math.max(0, event.stamp);
                        return event;
                    }, state.data));
                    state.data = [];
                }
            };
            IframeCaptor.prototype.isBlankOrSameOriginIframe = function (node) {
                var src = node.getAttribute('src');
                var sandbox = node.getAttribute('sandbox');
                var isIgnored = !!node.getAttribute(IGNORE_IFRAME_ATTRIBUTE);
                if (isIgnored ||
                    (sandbox && !sandbox.match(SAME_ORIGIN_SANDBOX_REGEX))) {
                    return false;
                }
                if (src && src !== 'about:blank') {
                    var host = parseUrl(this.ctx, src).host;
                    // In safary access to such frames results in a uncathable exception
                    // In IE if link is relative host will be an empty string
                    if (host && getLocation(this.ctx).host !== host) {
                        return false;
                    }
                }
                // Если iframe использует редирект то проверка на host не достаточна
                return getPath(node, 'contentWindow.location.href');
            };
            return IframeCaptor;
        }(AbstractCaptor)) ;
    var IframeCaptor = iframeCaptor;

    var pageCaptor =  /** @class */ (function (_super) {
            __extends(PageCaptor, _super);
            function PageCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.sendPage = _this.logger.wrapInErrorLogger(_this.sendPage, 'ps');
                return _this;
            }
            PageCaptor.prototype.start = function () {
                this.recorder.getIndexer().handleNodesAdd({
                    nodes: [this.ctx.document.documentElement],
                    sendResult: this.sendPage,
                });
            };
            PageCaptor.prototype.sendPage = function (content) {
                var page = this.recorder.getPageInfo();
                var base = page.getBase();
                var _a = getLocation(this.ctx), host = _a.host, protocol = _a.protocol, pathname = _a.pathname;
                var _b = getViewportSize(this.ctx), width = _b[0], height = _b[1];
                this.recorder.sendEventObject(PAGE_EVENT_TYPE, {
                    content: /* @__PURE__ */ cMap(function (nodeInfo) {
                        var newNodeInfo = mix({}, nodeInfo);
                        delete newNodeInfo.node;
                        return newNodeInfo;
                    }, content),
                    base: base || '',
                    hasBase: !!base,
                    viewport: {
                        width: width,
                        height: height,
                    },
                    title: this.ctx.document.title,
                    doctype: page.getDoctype() || '',
                    address: this.ctx.location.href,
                    ua: this.ctx.navigator.userAgent,
                    referrer: this.ctx.document.referrer,
                    screen: {
                        width: this.ctx.screen.width,
                        height: this.ctx.screen.height,
                    },
                    location: {
                        host: host,
                        protocol: protocol,
                        path: pathname,
                    },
                    recordStamp: this.recorder.getRecordStamp(),
                    tabId: page.getTabId(),
                }, PAGE_EVENT_TYPE, 0);
            };
            return PageCaptor;
        }(AbstractCaptor)) ;
    var PageCaptor = pageCaptor;

    var STYLE_NODE_NAME = 'style';
    var STYLECHANGE_EVENT_NAME = 'stylechange';
    // older methods
    var ADD_RULE_FUNC_NAME = 'addRule';
    var REMOVE_RULE_FUNC_NAME = 'removeRule';
    // newer methods
    var INSERT_RULE_FUNC_NAME = 'insertRule';
    var DELETE_RULE_FUNC_NAME = 'deleteRule';
    var ALL_SHEET_METHODS = [
        ADD_RULE_FUNC_NAME,
        REMOVE_RULE_FUNC_NAME,
        INSERT_RULE_FUNC_NAME,
        DELETE_RULE_FUNC_NAME,
    ];
    var AGGREGATION_THREASHOLD = 50;
    var stylesheetCaptor =  /** @class */ (function (_super) {
            __extends(StylesheetCaptor, _super);
            function StylesheetCaptor(ctx, recorder, loggerName) {
                var _this = _super.call(this, ctx, recorder, loggerName) || this;
                _this.registeredStylesheets = {};
                _this.styleChangesBuffer = {};
                _this.aggreagtionTimeoutId = 0;
                _this.onSheetAdd = _this.logger.wrapInErrorLogger(_this.onSheetAdd, 'a');
                _this.setRecord = _this.logger.wrapInErrorLogger(_this.setRecord, 'sr');
                _this.onSheetRemove = _this.logger.wrapInErrorLogger(_this.onSheetRemove, 'r');
                _this.sendData = _this.logger.wrapInErrorLogger(_this.sendData, 'd');
                return _this;
            }
            StylesheetCaptor.prototype.start = function () {
                var indexer = this.recorder.getIndexer();
                indexer.on(STYLE_NODE_NAME, NODE_ADD_EVENT_KEY_PREFIX, this.onSheetAdd);
                indexer.on(STYLE_NODE_NAME, NODE_REMOVAL_EVENT_KEY_PREFIX, this.onSheetRemove);
                this.sendData();
            };
            StylesheetCaptor.prototype.stop = function () {
                var _this = this;
                _super.prototype.stop.call(this);
                var indexer = this.recorder.getIndexer();
                indexer.off(STYLE_NODE_NAME, NODE_ADD_EVENT_KEY_PREFIX, this.onSheetAdd);
                indexer.off(STYLE_NODE_NAME, NODE_REMOVAL_EVENT_KEY_PREFIX, this.onSheetRemove);
                this.sendData();
                clearDefer(this.ctx, this.aggreagtionTimeoutId);
                cForEach(function (id) {
                    if (_this.registeredStylesheets[id].sheet) {
                        _this.returnOriginalMethods(_this.registeredStylesheets[id].sheet);
                    }
                }, cKeys(this.registeredStylesheets));
                this.registeredStylesheets = {};
            };
            StylesheetCaptor.prototype.sendData = function () {
                var _this = this;
                cForEach(function (_a) {
                    var target = _a[0], buffer = _a[1];
                    if (buffer.length) {
                        var changes = [];
                        var aggregationTime_1 = buffer[0].stamp;
                        var eventDatas = [];
                        for (var i = 0; i < buffer.length; i += 1) {
                            var change = buffer[i];
                            var stamp = change.stamp;
                            delete change.stamp;
                            if (stamp <=
                                aggregationTime_1 + AGGREGATION_THREASHOLD) {
                                changes.push(change);
                            }
                            else {
                                eventDatas.push(changes);
                                aggregationTime_1 = stamp;
                                changes = [change];
                            }
                        }
                        if (changes.length) {
                            eventDatas.push(changes);
                        }
                        if (eventDatas.length) {
                            cForEach(function (data) {
                                _this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                                    target: parseInt(target, 10),
                                    changes: data,
                                }, STYLECHANGE_EVENT_NAME, aggregationTime_1);
                            }, eventDatas);
                        }
                        delete _this.styleChangesBuffer[target];
                    }
                }, entries(this.styleChangesBuffer));
                this.aggreagtionTimeoutId = setDefer(this.ctx, this.sendData, 100);
            };
            StylesheetCaptor.prototype.setRecord = function (target, operation, stamp, style, index) {
                if (style === void 0) { style = ''; }
                if (index === void 0) { index = -1; }
                if (!this.styleChangesBuffer[target]) {
                    this.styleChangesBuffer[target] = [];
                }
                this.styleChangesBuffer[target].push({
                    op: operation,
                    style: style,
                    index: index,
                    stamp: stamp,
                });
            };
            StylesheetCaptor.prototype.overrideOriginalMethods = function (sheet, id) {
                var _this = this;
                var addRule = sheet[ADD_RULE_FUNC_NAME];
                var removeRule = sheet[REMOVE_RULE_FUNC_NAME];
                var insertRule = sheet[INSERT_RULE_FUNC_NAME];
                var deleteRule = sheet[DELETE_RULE_FUNC_NAME];
                if (isFunction(addRule)) {
                    sheet[ADD_RULE_FUNC_NAME] = function (selector, style, index) {
                        _this.setRecord(id, 'a', _this.recorder.stamp(), selector + "{" + style + "}", index);
                        return addRule.call(sheet, selector, style, index);
                    };
                }
                if (isFunction(removeRule)) {
                    sheet[REMOVE_RULE_FUNC_NAME] = function (index) {
                        _this.setRecord(id, 'r', _this.recorder.stamp(), '', index);
                        return removeRule.call(sheet, index);
                    };
                }
                if (isFunction(insertRule)) {
                    sheet[INSERT_RULE_FUNC_NAME] = function (style, index) {
                        _this.setRecord(id, 'a', _this.recorder.stamp(), style, index);
                        return insertRule.call(sheet, style, index);
                    };
                }
                if (isFunction(deleteRule)) {
                    sheet[DELETE_RULE_FUNC_NAME] = function (index) {
                        _this.setRecord(id, 'r', _this.recorder.stamp(), '', index);
                        return deleteRule.call(sheet, index);
                    };
                }
            };
            StylesheetCaptor.prototype.returnOriginalMethods = function (sheet) {
                var _this = this;
                cForEach(function (methodName) {
                    var method = _this.ctx.CSSStyleSheet.prototype[methodName];
                    if (isFunction(method)) {
                        sheet[methodName] = bind(method, sheet);
                    }
                }, ALL_SHEET_METHODS);
            };
            StylesheetCaptor.prototype.extractRules = function (sheet) {
                try {
                    return sheet.cssRules || sheet.rules;
                }
                catch (e) {
                    return null;
                }
            };
            StylesheetCaptor.prototype.onSheetAdd = function (event) {
                var _a = event.data, node = _a.node, id = _a.id;
                var style = node;
                if (style.sheet &&
                    !style.getAttribute('src') &&
                    !style.innerText) {
                    var sheet = style.sheet;
                    var rules = this.extractRules(sheet);
                    if (rules && rules.length) {
                        var rulesData = [];
                        for (var index = 0; index < rules.length; index += 1) {
                            rulesData.push({
                                style: rules[index].cssText,
                                index: index,
                                op: 'a',
                            });
                        }
                        this.recorder.sendEventObject(EVENT_EVENT_TYPE, {
                            changes: rulesData,
                            target: id,
                        }, STYLECHANGE_EVENT_NAME);
                    }
                    this.overrideOriginalMethods(sheet, id);
                    this.registeredStylesheets[id] = style;
                }
            };
            StylesheetCaptor.prototype.onSheetRemove = function (event) {
                var id = event.data.id;
                var node = this.registeredStylesheets[id];
                if (node) {
                    delete this.registeredStylesheets[id];
                    if (node.sheet) {
                        this.returnOriginalMethods(node.sheet);
                    }
                }
            };
            return StylesheetCaptor;
        }(AbstractCaptor)) ;
    var StylesheetCaptor = stylesheetCaptor;

    var captors = [
        [StylesheetCaptor, 'ss'],
        [InputCaptor, 'in'],
        [MutationCaptor, 'mu'],
        [ResizeCaptor, 'r'],
        [ScrollCaptor, 'sc'],
        [MouseCaptor, 'mo'],
        [FocusCaptor, 'f'],
        [SelectionCaptor, 'se'],
        [WindowFocusCaptor, 'wf'],
        [TouchesCaptor, 't'],
        [SrcsetLoadCaptor, 'src'],
        [ZoomCaptor, 'z'],
        [KeyStrokeCaptor, 'ks'],
    ];
    {
        captors.push([IframeCaptor, 'if']);
    }
    // Он должен быть последним!
    captors.push([PageCaptor, 'pa']);

    var getBrowser = /* @__PURE__ */ memo(function (ctx) {
        var doc = ctx.document;
        var getScrollingElement = function () {
            if (doc.scrollingElement) {
                return doc.scrollingElement;
            }
            var rootScroll = doc.compatMode.indexOf('CSS1') === 0
                ? doc.documentElement
                : doc.body;
            if (getPath(doc, 'documentElement.scrollHeight') >=
                getPath(doc, 'body.scrollHeight')) {
                return rootScroll;
            }
            return null;
        };
        var getOrientation = function () {
            var screen = ctx.screen;
            if (!screen) {
                return 0;
            }
            var orientationKey = /* @__PURE__ */ cFind(/* @__PURE__ */ bindArg(screen, getPath), ['orientation', 'mozOrientation', 'msOrientation']);
            return getPath(screen, orientationKey + ".angle") || 0;
        };
        return {
            getScrollingElement: getScrollingElement,
            getOrientation: getOrientation,
            isIframe: /* @__PURE__ */ bindArg(ctx, isIframe),
            isAndroid: /* @__PURE__ */ bindArg(ctx, isAndroid),
            isIOS: /* @__PURE__ */ bindArg(ctx, isIOS),
        };
    });

    var TAB_ID_KEY = '__vw_tab_guid';
    var getPageInfo = function (ctx) {
        return {
            getBase: function () {
                var base = ctx.document.querySelector('base[href]');
                return base ? base.getAttribute('href') : null;
            },
            getDoctype: function () {
                if (ctx.document.doctype) {
                    var _a = mix({
                        name: 'html',
                        publicId: '',
                        systemId: '',
                    }, ctx.document.doctype), name_1 = _a.name, publicId = _a.publicId, systemId = _a.systemId;
                    var doctype = /* @__PURE__ */ arrayJoin('', [
                        name_1,
                        publicId ? " PUBLIC \"" + publicId + "\"" : '',
                        !publicId && systemId ? ' SYSTEM' : '',
                        systemId ? " \"" + systemId + "\"" : '',
                    ]);
                    return "<!DOCTYPE " + doctype + ">";
                }
                return null;
            },
            getTabId: function () {
                try {
                    if (!ctx.sessionStorage) {
                        return null;
                    }
                    var tabID = ctx.sessionStorage.getItem(TAB_ID_KEY);
                    var forceUpdate = false;
                    try {
                        var openerStorage = ctx.opener
                            ? ctx.opener.sessionStorage
                            : null;
                        forceUpdate =
                            !!openerStorage &&
                                tabID === openerStorage.getItem(TAB_ID_KEY);
                    }
                    catch (e) {
                        // This is crossdomen opener
                        forceUpdate = true;
                    }
                    if (!tabID || forceUpdate) {
                        tabID = getGuid();
                        ctx.sessionStorage.setItem(TAB_ID_KEY, tabID);
                    }
                    return tabID;
                }
                catch (e) {
                    return null;
                }
            },
        };
    };

    var WEBVISOR_ENABLED_GLOBAL_KEY = 'wv2e';

    var transformMutation = function (mutation) {
        var data = mix({}, mutation.data);
        var mutationRecords = [];
        // eslint-disable-next-line default-case
        switch (mutation.event) {
            case TEXT_CHANGE_EVENT_NAME:
                mutationRecords = [
                    {
                        d: [
                            {
                                id: data.target,
                                ct: {
                                    o: '',
                                    n: data.value,
                                },
                                i: data.index,
                            },
                        ],
                    },
                ];
                break;
            case ATTR_CHANGE_EVENT_NAME:
                mutationRecords = [
                    {
                        c: [
                            {
                                id: data.target,
                                at: cReduce(function (carry, _a) {
                                    var key = _a[0], value = _a[1];
                                    // eslint-disable-next-line no-param-reassign
                                    carry[key] = {
                                        o: '',
                                        n: value,
                                        r: isNil(value),
                                    };
                                    return carry;
                                }, {}, entries(data.attributes)),
                                i: data.index,
                            },
                        ],
                    },
                ];
                break;
            case NODE_REMOVE_EVENT_NAME:
                mutationRecords = [
                    {
                        a: /* @__PURE__ */ cMap(function (id) {
                            return {
                                id: id,
                                i: data.index,
                            };
                        }, data.nodes),
                    },
                ];
                break;
            case NODE_ADD_EVENT_NAME:
                mutationRecords = [
                    {
                        b: /* @__PURE__ */ cMap(function (nodeInfo) {
                            return {
                                id: nodeInfo.id,
                                nm: nodeInfo.name,
                                ns: nodeInfo.namespace,
                                pa: nodeInfo.parent,
                                pr: nodeInfo.prev,
                                nx: nodeInfo.next,
                                at: nodeInfo.attributes,
                                i: data.index,
                                ct: nodeInfo.content,
                                h: nodeInfo.hidden,
                            };
                        }, data.nodes),
                    },
                ];
                break;
        }
        return {
            type: 'mutation',
            stamp: mutation.stamp,
            data: {
                frameId: mutation.frameId,
                meta: {
                    changes: mutationRecords,
                    index: data.index,
                },
            },
        };
    };

    var transformPage = function (page) {
        var pageData = page.data;
        var recordStamp = pageData.recordStamp, tabId = pageData.tabId, content = pageData.content;
        delete pageData.recordStamp;
        delete pageData.tabId;
        delete pageData.content;
        var result = {
            type: 'page',
            data: {
                frameId: page.frameId || 0,
                content: content,
                recordStamp: recordStamp,
                tabId: tabId,
                meta: pageData,
            },
        };
        if (page.stamp) {
            result.stamp = page.stamp;
        }
        return result;
    };

    var transformEvent = function (event) {
        var newEvent = {
            type: 'event',
            stamp: event.stamp,
            data: {
                frameId: event.frameId,
                type: event.event,
                meta: {},
            },
        };
        var data = mix({}, event.data);
        // eslint-disable-next-line default-case
        switch (event.event) {
            case 'zoom':
                newEvent.data.meta = {
                    zoomFrom: {
                        x: 0,
                        y: 0,
                        level: 0,
                    },
                    zoomTo: data,
                    duration: 1,
                };
                break;
            case 'keystroke':
                newEvent.data.meta = data.keystrokes;
                break;
            case 'deviceRotation':
            case 'resize':
                newEvent.data.meta = data;
                break;
            case 'windowfocus':
            case 'windowblur':
            case 'focus':
                newEvent.data.target = data.target;
                newEvent.data.meta = null;
                break;
            case 'touchmove':
            case 'touchstart':
            case 'touchend':
            case 'touchcancel':
            case 'touchforcechange':
            case 'scroll':
            case 'change':
            case 'click':
            case 'mousemove':
            case 'mousedown':
            case 'mouseup':
            case 'selection':
            case 'stylechange':
                newEvent.data.target = data.target;
                delete data.target;
                newEvent.data.meta = data;
                break;
            case 'srcset':
                return {
                    type: 'mutation',
                    stamp: event.stamp,
                    data: {
                        frameId: event.frameId,
                        meta: {
                            changes: [
                                {
                                    c: [
                                        {
                                            id: data.target,
                                            at: {
                                                src: {
                                                    o: '',
                                                    n: data.value,
                                                    r: false,
                                                },
                                            },
                                            i: 0,
                                        },
                                    ],
                                },
                            ],
                            index: 0,
                        },
                    },
                };
        }
        return newEvent;
    };

    // TOOD: убрать этот бред как только мы начнём переходить на новую модель хранения данных
    var transformItem = function (item) {
        // Это условие проверяет новый ли это формат данных
        if (item['type'] && item['event']) {
            // eslint-disable-next-line default-case
            switch (item.type) {
                case 'page':
                    return transformPage(item);
                case 'event':
                    return transformEvent(item);
                case 'mutation':
                    return transformMutation(item);
            }
        }
        return item;
    };

    var EOF_EVENT_NAME = 'eof';
    var Recorder = /** @class */ (function () {
        function Recorder(ctx, options) {
            var _this = this;
            this.loggerName = 'R';
            this.iframeId = 0;
            this.dataBeforeStart = [];
            this.iframeConnector = null;
            this.started = false;
            this.waitingFrameConnection = false;
            this.isSlave = false;
            this.recordStamp = 0;
            this.getPageInfo = function () {
                return _this.page;
            };
            this.getFrameId = function () {
                return _this.iframeId;
            };
            this.getRecordStamp = function () {
                return _this.recordStamp;
            };
            this.getEventWrapper = function () {
                return _this.eventWrapper;
            };
            this.getIframeConnector = function () {
                return _this.iframeConnector;
            };
            this.getIndexer = function () {
                return _this.indexer;
            };
            this.stamp = function () {
                if (!_this.timer) {
                    return 0;
                }
                return _this.ctx.Math.max(_this.timer(getMs) - _this.recordStamp, 0);
            };
            this.getOptions = function () {
                return _this.options;
            };
            this.getBrowser = function () {
                return _this.browser;
            };
            this.sendEventObject = function (type, data, event, stamp) {
                if (stamp === void 0) { stamp = _this.stamp(); }
                var eventObject = _this.getEventObject(type, data, event, stamp);
                _this.sendData(eventObject);
            };
            this.getEventObject = function (type, data, event, stamp) {
                if (stamp === void 0) { stamp = _this.stamp(); }
                return {
                    type: type,
                    data: data,
                    stamp: stamp,
                    frameId: _this.iframeId,
                    event: event,
                };
            };
            this.sendData = function (data) {
                var dataToSend = !isArray(data) ? [data] : data;
                var started = _this.started && !_this.waitingFrameConnection;
                if (started) {
                    if (_this.isSlave) {
                        dataToSend = /* @__PURE__ */ cMap(function (eventData) {
                            if (!eventData.frameId) {
                                return mix(eventData, {
                                    frameId: _this.iframeId,
                                });
                            }
                            return eventData;
                        }, dataToSend);
                        _this.getIframeConnector().sendSlaveData(dataToSend);
                    }
                    else {
                        {
                            dataToSend = /* @__PURE__ */ cMap(transformItem, dataToSend);
                        }
                        _this.senderFunction(dataToSend);
                    }
                }
                else {
                    _this.dataBeforeStart = _this.dataBeforeStart.concat(dataToSend);
                }
            };
            this.ctx = ctx;
            var logger = createMethodErrorLogger(ctx, this, 'R');
            this.startRecording = logger.wrapInErrorLogger(this.startRecording, 's');
            this.sendData = logger.wrapInErrorLogger(this.sendData, 'sd');
            var globalStorage = getGlobalStorage(ctx);
            if (globalStorage.getVal(WEBVISOR_ENABLED_GLOBAL_KEY)) {
                // Два вэбвизора на одном окне
                throwKnownError();
            }
            globalStorage.setVal(WEBVISOR_ENABLED_GLOBAL_KEY, true);
            this.options = options;
            this.eventWrapper = cEvent(ctx);
            this.indexer = new Indexer(this.ctx, options);
            this.browser = getBrowser(ctx);
            this.captors = /* @__PURE__ */ cMap(function (_a) {
                var CaptorClass = _a[0], loggerName = _a[1];
                return new CaptorClass(ctx, _this, loggerName);
            }, captors);
            this.initializeIframeConnector();
            this.page = getPageInfo(this.ctx);
            this.startRecording();
        }
        Recorder.prototype.start = function (senderFunction) {
            this.started = true;
            this.senderFunction = senderFunction;
            this.sendInitialData();
        };
        Recorder.prototype.stop = function () {
            if (!isValidCtx(this.ctx)) {
                return;
            }
            cForEach(function (captor) { return captor.stop(); }, this.captors);
            this.indexer.stop();
            if (this.iframeConnector) {
                this.iframeConnector.stop();
            }
            if (!this.isSlave) {
                this.sendEventObject(EVENT_EVENT_TYPE, {}, EOF_EVENT_NAME);
            }
        };
        Recorder.prototype.createSlaveRecorder = function (iframeWindow, frameId) {
            var slave = new Recorder(iframeWindow, mix({}, this.options, { frameId: frameId }));
            slave.start(noop);
            return slave;
        };
        Recorder.prototype.initializeIframeConnector = function () {
            var _this = this;
            {
                // Если сверху нам пробросили frameId,
                // значит, что нас инициализровали
                // из другого рекордера
                this.isSlave = !!this.options.frameId;
                this.iframeId = this.options.frameId || 0;
                this.waitingFrameConnection = !this.isSlave;
                var trustedHosts = this.options.trustedHosts || [];
                trustedHosts.push(getLocation(this.ctx).host);
                this.iframeConnector = getIframeConnector(this.ctx, this, trustedHosts);
                var frameEventEmitter = this.iframeConnector.getEmitter();
                if (!isIframe(this.ctx)) {
                    this.isSlave = false;
                    this.waitingFrameConnection = false;
                }
                else if (this.waitingFrameConnection) {
                    frameEventEmitter.on(CONNECTOR_INITED, 
                    // Не вынес это в метод потому, что он не вырежется обфускатором
                    function (e) {
                        var event = e;
                        _this.isSlave = event.isSlave;
                        _this.waitingFrameConnection = false;
                        if (event.frameId) {
                            _this.iframeId = event.frameId;
                        }
                        _this.sendInitialData();
                    });
                }
            }
        };
        Recorder.prototype.sendInitialData = function () {
            var data = this.dataBeforeStart.splice(0, this.dataBeforeStart.length);
            this.sendData(data);
        };
        Recorder.prototype.startRecording = function () {
            this.timer = Time(this.ctx);
            this.recordStamp = this.timer(getMs);
            cForEach(function (captor) {
                captor.start();
            }, this.captors);
            this.indexer.start();
        };
        return Recorder;
    }());

    var _a$f;
    var encodeEventType = (_a$f = {},
        _a$f['mousemove'] = 0,
        _a$f['mouseup'] = 1,
        _a$f['mousedown'] = 2,
        _a$f['click'] = 3,
        _a$f['scroll'] = 4,
        _a$f['windowblur'] = 5,
        _a$f['windowfocus'] = 6,
        _a$f['focus'] = 7,
        _a$f['blur'] = 8,
        _a$f['eof'] = 9,
        _a$f['selection'] = 10,
        _a$f['change'] = 11,
        _a$f['input'] = 12,
        _a$f['touchmove'] = 13,
        _a$f['touchstart'] = 14,
        _a$f['touchend'] = 15,
        _a$f['touchcancel'] = 16,
        _a$f['touchforcechange'] = 17,
        _a$f['canvasMethod'] = 18,
        _a$f['canvasProperty'] = 19,
        _a$f['zoom'] = 20,
        _a$f['resize'] = 21,
        _a$f['mediaMethod'] = 22,
        _a$f['mediaProperty'] = 23,
        _a$f['keystroke'] = 24,
        _a$f['deviceRotation'] = 25,
        _a$f['fatalError'] = 26,
        _a$f['hashchange'] = 27,
        _a$f['stylechange'] = 28,
        _a$f);

    var pathSerialiser = curry2(function (key, data) {
        var _a;
        return _a = {}, _a[deobfuscate(key)] = data, _a;
    });
    var rawVisor2ProtoBufferSerializer =  /** @class */ (function () {
            function Visor2ProtoBufferSerializer(ctx) {
                var _a;
                this.isSync = false;
                this.currentTaskIterList = [];
                this.eventsMapping = [];
                this.ctx = ctx;
                this.keyDict = (_a = {},
                    _a['event'] = bind(this.eventSerialiser, this),
                    _a['page'] = pathSerialiser({ page: 1 }),
                    _a['mutation'] = pathSerialiser({ mutation: 1 }),
                    _a['activity'] = pathSerialiser({ activity: 1 }),
                    _a);
                this.eventsMapping = [
                    [['scroll'], { scrollEvent: 1 }],
                    [['selection'], { selectionEvent: 1 }],
                    [['change', 'input'], { changeEvent: 1 }],
                    [['keystroke'], { keystrokesEvent: 1 }, { keystrokes: 1 }],
                    [['zoom'], { zoomEvent: 1 }],
                    [['resize'], { resizeEvent: 1 }],
                    [
                        ['windowfocus', 'windowblur', 'focus', 'blur', 'eof'],
                        { windowEvent: 1 },
                    ],
                    [
                        ['mousemove', 'mouseup', 'mousedown', 'click'],
                        { mouseEvent: 1 },
                    ],
                    [['deviceRotation'], { deviceRotationEvent: 1 }],
                    [['fatalError'], { fatalErrorEvent: 1 }],
                    [
                        [
                            'touchmove',
                            'touchstart',
                            'touchend',
                            'touchcancel',
                            'touchforcechange',
                        ],
                        { touchEvent: 1 },
                        { touches: 1 },
                        { touches: 1 },
                    ],
                    [['hashchange'], { hashchangeEvent: 1 }],
                    [
                        ['stylechange'],
                        { stylechangeEvent: 1 },
                        { changes: 1 },
                        { changes: 1 },
                    ],
                ];
            }
            Visor2ProtoBufferSerializer.prototype.eventSerialiser = function (eventInfo) {
                var _a, _b;
                var type = eventInfo.type;
                var eventSerialiser = /* @__PURE__ */ cFind(/* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('0'), /* @__PURE__ */ bindArg(type, includes)), this.eventsMapping);
                if (!eventSerialiser) {
                    throwFunction(createError("vem." + type));
                }
                if (type === 'eof') {
                    this.isSync = true;
                    cForEach(cont(taskFlush), this.currentTaskIterList);
                }
                var metaName = eventSerialiser[1], repeated = eventSerialiser[2], repeatedMetaKey = eventSerialiser[3];
                var meta = eventInfo.meta;
                var result = {
                    event: (_a = {
                            type: encodeEventType[type],
                            target: eventInfo.target,
                            frameId: eventInfo.frameId
                        },
                        _a[deobfuscate(metaName)] = repeated
                            ? (_b = {},
                                _b[deobfuscate(repeated)] = repeatedMetaKey
                                    ? meta[deobfuscate(repeatedMetaKey)]
                                    : meta,
                                _b) : meta,
                        _a),
                };
                return result;
            };
            Visor2ProtoBufferSerializer.prototype.serialize = function (data, forceSync) {
                var _this = this;
                if (forceSync === void 0) { forceSync = false; }
                var itemIter = iterForOf(data, function (info) {
                    var isChunk = !isUndefined(info['partNum']);
                    return {
                        data: !isChunk
                            ? _this.keyDict[info.type](info['data'])
                            : undefined,
                        chunk: isChunk ? info['data'] : undefined,
                        page: info['partNum'],
                        end: info['end'],
                        stamp: info.stamp,
                    };
                });
                var syncTimeOut = this.isSync || forceSync ? Infinity : 10;
                var taskDone = executeIterator(this.ctx, itemIter, syncTimeOut);
                var tasksToFlush = [taskDone];
                this.currentTaskIterList.push(taskDone);
                return taskDone(taskChain(function (taskData) {
                    var encoderLength = protoPrepareLength(_this.ctx, encodeBufferWrapper, {
                        buffer: taskData,
                    });
                    var iterLength = executeIterator(_this.ctx, encoderLength, syncTimeOut, iterPopUntilMaxTime);
                    tasksToFlush.push(iterLength);
                    _this.currentTaskIterList.push(iterLength);
                    return iterLength;
                }))(taskChain(function (lengthData) {
                    var lengthResult = lengthData.slice(-4);
                    var encoderBytes = protoWriteBytes(_this.ctx, lengthResult);
                    var iterBytes = executeIterator(_this.ctx, encoderBytes, syncTimeOut, iterPopUntilMaxTime);
                    tasksToFlush.push(iterBytes);
                    _this.currentTaskIterList.push(iterBytes);
                    return iterBytes;
                }))(taskMap(function (results) {
                    var result = results[results.length - 1];
                    cForEach(function (taskToFlush) {
                        var taskIndex = indexOfWin(_this.ctx)(taskToFlush, _this.currentTaskIterList);
                        _this.currentTaskIterList.splice(taskIndex, 1);
                    }, tasksToFlush);
                    return result;
                }));
            };
            Visor2ProtoBufferSerializer.prototype.serializeData = function (info) {
                var iteratorFn = protoPrepareLength(this.ctx, encodeWrapper, this.keyDict[info.type](info.data));
                return iteratorFn(iterPop(noop));
            };
            Visor2ProtoBufferSerializer.prototype.getRequestBodySize = function (info) {
                return info[LEN_INDEX_SIZE];
            };
            Visor2ProtoBufferSerializer.prototype.splitToChunks = function (serializedState, chunksNumber) {
                var bytesIterator = protoWriteBytes(this.ctx, serializedState);
                var serialized = bytesIterator(iterPop(noop));
                var chunkSize = Math.ceil(serialized.length / chunksNumber);
                var result = [];
                for (var i = 0; i < chunksNumber; i += 1) {
                    var dataPart = serialized.slice(i * chunkSize, chunkSize * (i + 1));
                    result.push(dataPart);
                }
                return result;
            };
            Visor2ProtoBufferSerializer.prototype.isEnabled = function () {
                return checkProtobuf(this.ctx);
            };
            return Visor2ProtoBufferSerializer;
        }()) ;
    var Visor2ProtoBufferSerializer = rawVisor2ProtoBufferSerializer;

    var MUTATIONS_BR_KEY = 'bt';

    var MUTATIONS_BUFFER_FLUSH_TIMEOUT = 5000;
    var createSenderFunction = function (ctx, counterOpt, isBin, getUrlParams) {
        if (getUrlParams === void 0) { getUrlParams = constructObject; }
        var sender = getSender(ctx, WEBVISOR2_PROVIDER, counterOpt);
        var pageSent = false;
        var mutionsBufferFlushed = false;
        var mutationSenderBuffer = [];
        var pageChunks = [];
        var hasAllPageChunks = function () {
            var hasEnd = false;
            var hasAllChunks = cReduce(function (result, record, index) {
                pageChunks = cSort(function (a, b) {
                    // original data
                    return a[2]['partNum'] - b[2]['partNum'];
                }, pageChunks);
                // original data
                var chunk = record[2];
                hasEnd = hasEnd || chunk['end'];
                return result && index + 1 === chunk['partNum'];
            }, true, pageChunks);
            return hasAllChunks && hasEnd;
        };
        var send = function (opts, partNumber) {
            sender(opts, counterOpt, partNumber)["catch"](errorLogger(ctx, 's.w2.p'));
        };
        var flushMutationsBuffer = function () {
            if (mutionsBufferFlushed) {
                return;
            }
            mutionsBufferFlushed = true;
            iterateTaskWithConstraints(ctx, mutationSenderBuffer, function (_a) {
                var opts = _a[0], pn = _a[1];
                send(opts, pn);
            }, 20, 's.w2.sf.ms');
            mutationSenderBuffer = [];
        };
        setDefer(ctx, flushMutationsBuffer, MUTATIONS_BUFFER_FLUSH_TIMEOUT);
        return function (bufferType, data, 
        // Вот это надо будет потом пофиксить
        originalData, partNumber) {
            var isMutationsBuffer = bufferType === BUFFER_NAME_MUTATIONS;
            var senderOpt = {
                urlParams: getUrlParams(originalData),
                brInfo: browserInfo(),
                rBody: data,
                containsPublisherData: !isMutationsBuffer && hasPublisherData(originalData),
                isBinData: isBin,
            };
            if (bufferType === BUFFER_NAME_MUTATIONS) {
                senderOpt.brInfo.setVal(MUTATIONS_BR_KEY, 1);
                if (!pageSent) {
                    var _a = cReduce(function (result, record) {
                        var isPage = record.type === PAGE_EVENT_TYPE &&
                            !record.frameId;
                        var isEOF = record.data.type === EOF_EVENT_NAME;
                        var isPageChunk = isPage && !!record['partNum'];
                        return {
                            containsPageChunk: result.containsPageChunk || isPageChunk,
                            containsPage: result.containsPage || isPage,
                            containsEOF: result.containsEOF || isEOF,
                        };
                    }, {
                        containsPage: false,
                        containsEOF: false,
                        containsPageChunk: false,
                    }, originalData), containsPage = _a.containsPage, containsEOF = _a.containsEOF, containsPageChunk = _a.containsPageChunk;
                    if (containsPage) {
                        if (containsPageChunk) {
                            pageChunks.push([
                                senderOpt,
                                partNumber,
                                originalData[0],
                            ]);
                            // Чанкованная страница
                            if (hasAllPageChunks()) {
                                cForEach(function (_a) {
                                    var opts = _a[0], pn = _a[1];
                                    return send(opts, pn);
                                }, pageChunks);
                                pageSent = true;
                                pageChunks = [];
                            }
                        }
                        else {
                            // Целая страница
                            pageSent = true;
                            send(senderOpt, partNumber);
                        }
                    }
                    if (!mutionsBufferFlushed) {
                        if (!containsPage) {
                            mutationSenderBuffer.push([senderOpt, partNumber]);
                        }
                        if (pageSent || containsEOF) {
                            flushMutationsBuffer();
                        }
                    }
                    else if (!containsPage) {
                        // Если таймаут произошёл, но страница ещё не отослана
                        send(senderOpt, partNumber);
                    }
                }
                else {
                    // Мутации после отправки страницы
                    send(senderOpt, partNumber);
                }
            }
            else {
                // Эвенты
                send(senderOpt, partNumber);
            }
        };
    };

    var MOUSE_DOWN_BOOST = 1.5;
    var getCollectActivityCallbacks = function () {
        var eventsProbabilityMap = [
            ['blur', 0.0034],
            ['change', 0.0155],
            ['click', 0.0073 * MOUSE_DOWN_BOOST],
            ['deviceRotation', 0.0002],
            ['focus', 0.0061],
            ['mousemove', 0.5132],
            ['scroll', 0.4795],
            ['selection', 0.0109],
            ['touchcancel', 0.0002],
            ['touchend', 0.0265],
            ['touchforcechange', 0.0233],
            ['touchmove', 0.1442],
            ['touchstart', 0.027],
            ['zoom', 0.0014],
        ];
        var eventMap = cReduce(function (map, _a) {
            var eventName = _a[0], probability = _a[1];
            map[eventName] = {
                cCount: 0,
                cMultiply: 1 / probability,
            };
            return map;
        }, {}, eventsProbabilityMap);
        return {
            // eslint-disable-next-line consistent-return
            aggregate: function (data) {
                if (data.length) {
                    return {
                        type: 'activity',
                        data: cReduce(function (sum, key) {
                            var _a = eventMap[key], val = _a.cCount, multiply = _a.cMultiply;
                            return Math.round(sum + val * multiply);
                        }, 0, cKeys(eventMap)),
                    };
                }
            },
            onEventPush: function (data) {
                if (data) {
                    // TODO: поменять type на event
                    var type = data.data.type;
                    var info = eventMap[type];
                    if (!info) {
                        return;
                    }
                    info.cCount += 1;
                }
            },
        };
    };

    var RECORD_WEBVISOR2_FORMS_KEY_PREFIX = 'wv2rf:';
    var getRecorderOptions = function (ctx, counterOpt) {
        var ls = globalLocalStorage(ctx);
        var counterKey = getCounterKey(counterOpt);
        var recordFormCacheKey = "" + RECORD_WEBVISOR2_FORMS_KEY_PREFIX + counterKey;
        var childIframe = counterOpt.childIframe;
        var isEU = isEu(ctx);
        var lsRecordForms = ls.getVal(recordFormCacheKey);
        var trustedHosts = counterOpt.trustedDomains;
        if (!isUndefined(isEU) && !isNull(lsRecordForms)) {
            return taskOf({
                childIframe: childIframe,
                isEU: isEU,
                recordForms: !!parseInt(lsRecordForms, 10),
                trustedHosts: trustedHosts,
            });
        }
        return task(function (_, resolve) {
            getCounterSettings(ctx, counterOpt, function (settings) {
                var settingsRecordForms = getPath(settings, 'settings.webvisor.forms');
                var isIncognitoCounter = getPath(settings, 'settings.x3');
                var recordForms = !isIncognitoCounter && settingsRecordForms;
                isEU = isEu(ctx) || getPath(settings, 'settings.eu');
                ls.setVal(recordFormCacheKey, toZeroOrOne(recordForms));
                resolve({
                    childIframe: childIframe,
                    isEU: !!isEU,
                    recordForms: recordForms,
                    trustedHosts: trustedHosts,
                });
            });
        });
    };

    var WV2_COUNTER_KEY = 'wv2Counter';
    var WV2_STOP_RECORDER_KEY = 'stopRecorder';
    var WV2_HIT_TIME_LIMIT = 24 * 60 * 60 * 1000;

    var useWebvisor2Provider = /* @__PURE__ */ ctxErrorLogger('w2', function (ctx, counterOpt) {
        var globalConfig = getGlobalStorage(ctx);
        var counterKey = getCounterKey(counterOpt);
        if (!counterOpt.webvisor ||
            isBrokenFromCharCode(ctx) ||
            !ctx.MutationObserver ||
            !/* @__PURE__ */ isNativeFunction('Element', ctx.Element)) {
            return;
        }
        if (!/* @__PURE__ */ isNativeFunction('MutationObserver', ctx.MutationObserver)) {
            DebugConsole(ctx).warn('MutationObserver is overriden, webvisor is not guaranteed to work in this environment');
        }
        var settingsTask = task(function (reject, resolve) {
            getCounterSettings(ctx, counterOpt, resolve)["catch"](reject);
        });
        var recorderTask = waitForBodyTask(ctx)(taskChain(bindArgs([ctx, counterOpt], getRecorderOptions)))(taskMap(function (recorderOptions) { return new Recorder(ctx, recorderOptions); }));
        taskAll([recorderTask, settingsTask])(taskFork(errorLogger(ctx, 'wv2.R.c'), function (_a) {
            var recorder = _a[0], settings = _a[1];
            var stopCalled = false;
            var stopRecorder = function () {
                if (!stopCalled) {
                    stopCalled = true;
                    if (recorder) {
                        recorder.stop();
                    }
                }
            };
            var WV2Counter = globalConfig.getVal(WV2_COUNTER_KEY);
            if (!isVisitColorWhite(ctx, settings) || WV2Counter) {
                stopRecorder();
                return;
            }
            cEvent(ctx).on(ctx, ['beforeunload', 'unload'], stopRecorder);
            globalConfig.setVal(WV2_COUNTER_KEY, counterKey);
            globalConfig.setVal(WV2_STOP_RECORDER_KEY, stopRecorder);
            var serialiserList = [
                new JSONBufferSerializer(ctx),
            ];
            {
                serialiserList.unshift(new Visor2ProtoBufferSerializer(ctx));
            }
            var selectedSerialiser = /* @__PURE__ */ cFind(function (serialiser) { return serialiser.isEnabled(); }, serialiserList);
            if (!selectedSerialiser) {
                return;
            }
            var isBin = !(selectedSerialiser instanceof JSONBufferSerializer);
            var getUrlParams = function (originalData) {
                return  {};
            };
            var senderFunction = createSenderFunction(ctx, counterOpt, isBin, getUrlParams);
            var mutationsBuffer = Visor2Buffer.getBuffer(counterKey, BUFFER_NAME_MUTATIONS, /* @__PURE__ */ bindArg(BUFFER_NAME_MUTATIONS, senderFunction), selectedSerialiser, ctx);
            var eventsBuffer = Visor2Buffer.getBuffer(counterKey, BUFFER_NAME_EVENTS, /* @__PURE__ */ bindArg(BUFFER_NAME_EVENTS, senderFunction), selectedSerialiser, ctx);
            var _b = getCollectActivityCallbacks(), onEventPush = _b.onEventPush, aggregate = _b.aggregate;
            eventsBuffer.on(AGGREGATE_EVENT_KEY, aggregate);
            eventsBuffer.on(PUSH_DATA_EVENT_KEY, onEventPush);
            var recorderDataCollectCallback = /* @__PURE__ */ ctxMap(function (event) {
                if (getPath(event, 'data.type') === EOF_EVENT_NAME) {
                    eventsBuffer.push(event);
                    mutationsBuffer.push(event);
                    eventsBuffer.flush();
                    mutationsBuffer.flush();
                }
                else {
                    var buffer = event['type'] === 'event'
                        ? eventsBuffer
                        : mutationsBuffer;
                    buffer.push(event);
                }
            });
            setDefer(ctx, stopRecorder, WV2_HIT_TIME_LIMIT);
            runAsync(ctx, function () {
                {
                    dispatchDebuggerEvent(ctx, {
                        name: 'webvisor',
                        data: {
                            version: 2,
                            key: counterKey,
                        },
                    });
                }
                recorder.start(recorderDataCollectCallback);
            });
        }));
    });

    var SAMPLING_LS_KEY = 'ymoo';
    var WATCH_SAMPLER_DURATION = 30; // min
    var checkSettings = curry2(function (sampleCtx, settings) {
        var recp = parseFloat(getPath(settings, 'settings.c_recp'));
        if (recp === 0) {
            sampleCtx.ls.setVal("" + SAMPLING_LS_KEY + sampleCtx.counterKey, sampleCtx.timeObj(getMin));
            if (sampleCtx.counterInstance &&
                sampleCtx.counterInstance[METHOD_DESTRUCT]) {
                sampleCtx.counterInstance[METHOD_DESTRUCT]();
            }
        }
    });
    var useWatchSimple = /* @__PURE__ */ ctxErrorLogger('wsa', function (ctx, counterOptions) {
        var sampleCtx = {
            counterKey: getCounterKey(counterOptions),
            counterInstance: getCounterInstance(ctx, counterOptions),
            timeObj: TimeOne(ctx),
            ls: globalLocalStorage(ctx),
        };
        var currentMinutes = sampleCtx.timeObj(getMin);
        if (sampleCtx.ls.isBroken) {
            return false;
        }
        var prevMin = sampleCtx.ls.getVal("" + SAMPLING_LS_KEY + sampleCtx.counterKey);
        if (prevMin && currentMinutes - prevMin < WATCH_SAMPLER_DURATION) {
            return true;
        }
        getCounterSettings(ctx, counterOptions, checkSettings(sampleCtx))["catch"](errorLogger(ctx, 'd.f'));
        return false;
    });

    var HTTPS_PROTOCOL = 'https:';
    var getAppleSDK = function (ctx) {
        var appleSDK = getPath(ctx, 'ApplePaySession');
        var locationProtocol = getLocation(ctx).protocol;
        if (!appleSDK || locationProtocol !== HTTPS_PROTOCOL || isIframe(ctx)) {
            return '';
        }
        return appleSDK;
    };

    var START_VERSION = 1;
    var LAST_VERSION = 20;
    var UNSUPPORTED_VERSION_FLAG = '0';
    var applePayFactor = function (ctx) {
        var appleSDK = getAppleSDK(ctx);
        if (!appleSDK) {
            return '';
        }
        var versionMask = cReduce(function (prev, _, i) {
            var currentVersion = "" + (i + START_VERSION);
            var fn = appleSDK['supportsVersion'];
            if (!isFunction(fn)) {
                return prev;
            }
            return fn.call(appleSDK, i + START_VERSION)
                ? prev + currentVersion
                : prev + UNSUPPORTED_VERSION_FLAG;
        }, '', getRange(LAST_VERSION - 1));
        return versionMask + appleSDK['canMakePayments']();
    };

    var pluginsFactor = /* @__PURE__ */ pipe(plugins, /* @__PURE__ */ ctxJoin(','));

    var resultPusher = function (result, obj, delimiter) {
        if (delimiter === void 0) { delimiter = ':'; }
        cForEach(function (_a) {
            var key = _a[0], value = _a[1];
            return result.push("" + key + delimiter + value);
        }, entries(obj));
    };
    var webGLFactor = function (ctx, params) {
        var gl = params.canvasCtx;
        if (!checkCanvasCtx(ctx, gl)) {
            return '';
        }
        var result = [];
        var base64Canvas = getBase64Canvas(ctx, gl);
        if (base64Canvas) {
            result.push(base64Canvas);
        }
        resultPusher(result, getWebGLParams(gl), ': ');
        resultPusher(result, getWebGLExtensionParams(gl));
        if (!gl.getShaderPrecisionFormat) {
            return /* @__PURE__ */ arrayJoin('~', result);
        }
        resultPusher(result, getWebGLProperty(gl));
        return /* @__PURE__ */ arrayJoin('~', result);
    };
    var checkAndReturnGLFactor = function () {
        return {
            ctxType: VALID_CONTEXT_TYPE,
            factorFn: webGLFactor,
        };
    };
    var canvasFactor = callWithCanvas(checkAndReturnGLFactor);

    var getFieldList = function (path, fields, ctx) {
        return /* @__PURE__ */ arrayJoin('x', /* @__PURE__ */ cMap(/* @__PURE__ */ pipe(firstArg, /* @__PURE__ */ bindThisForMethod('concat', "" + path), /* @__PURE__ */ bindArg(ctx, getPath)), fields));
    };

    var matchMediaFactor = function (ctx) {
        var mediaMatches = matchMedia(ctx);
        if (!mediaMatches) {
            return '';
        }
        return /* @__PURE__ */ arrayJoin('x', /* @__PURE__ */ cMap(function (query) {
            /* @__PURE__ */ return getFieldList('', ['matches', 'media'], mediaMatches[query]);
        }, cKeys(mediaMatches)));
    };

    var fontFactor = function (ctx) {
        var available = checkAvailableFonts(ctx);
        return available ? /* @__PURE__ */ arrayJoin('x', available) : '';
    };

    var voiceFields = ['name', 'lang', 'localService', 'voiceURI', 'default'];
    var getVoices = function (ctx) {
        var speechSynthesis = getPath(ctx, 'speechSynthesis.getVoices');
        if (!speechSynthesis) {
            return '';
        }
        var getVoicesCtx = bind(speechSynthesis, ctx['speechSynthesis']);
        return /* @__PURE__ */ flatMap(function (voice) {
            return /* @__PURE__ */ cMap(/* @__PURE__ */ bindArg(voice, getPath), voiceFields);
        }, getVoicesCtx());
    };

    var speechFactor = function (ctx) {
        return /* @__PURE__ */ arrayJoin('x', getVoices(ctx) || []);
    };

    var videoFactor = function (ctx) {
        var validVideoFormat = checkVideoCanPlayType(ctx);
        if (!isArray(validVideoFormat)) {
            return validVideoFormat;
        }
        return /* @__PURE__ */ arrayJoin('x', validVideoFormat);
    };

    var CLICK_DELAY = 300;
    var shouldLogCheck = /* @__PURE__ */ memo(function (ctx, counterOptions) {
        return getCounterSettings(ctx, counterOptions, /* @__PURE__ */ ctxPath('settings.form_goals'));
    }, secondArg);
    var log = function (ctx, counterOptions, message) {
        return shouldLogCheck(ctx, counterOptions).then(function (shouldLog) {
            if (shouldLog) {
                getLoggerFn(ctx, counterOptions, message)();
            }
        });
    };
    var submit = function (force, ctx, counterOptions, awaitSubmitForms, form) {
        var formIndex = cIndexOf(ctx)(form, awaitSubmitForms);
        var hasForm = formIndex !== -1;
        if (force || hasForm) {
            if (hasForm) {
                awaitSubmitForms.splice(formIndex, 1);
            }
            var data = getFormData(ctx, form);
            var query = "?" + stringify(data);
            var logGoals = bindArgs([
                ctx,
                counterOptions,
                "Form goal. Counter " + counterOptions.id + ". Form: " + query + ".",
            ], log);
            useGoal(ctx, counterOptions, 'form', logGoals)(query);
        }
    };
    var handleClick$1 = function (ctx, counterOptions, awaitSubmitForms, event) {
        var target = getPath(event, 'target');
        var button = closest('button,input', ctx, target);
        if (button && button.type === 'submit') {
            var form = closestForm(ctx, button);
            if (form) {
                awaitSubmitForms.push(form);
                setDefer(ctx, bindArgs([false, ctx, counterOptions, awaitSubmitForms, form], submit), CLICK_DELAY);
            }
        }
    };
    var handleSubmit = /* @__PURE__ */ bindArg(true, submit);
    var useSubmitTracking = /* @__PURE__ */ ctxErrorLogger('s.f.i', function (ctx, counterOptions) {
        var awaitSubmitForms = [];
        cEvent(ctx).on(ctx, ['click'], errorLogger(ctx, 's.f.c', bindArgs([ctx, counterOptions, awaitSubmitForms], handleClick$1)));
        cEvent(ctx).on(ctx, ['submit'], errorLogger(ctx, 's.f.e', /* @__PURE__ */ pipe(/* @__PURE__ */ ctxPath('target'), bindArgs([ctx, counterOptions, awaitSubmitForms], handleSubmit))));
        log(ctx, counterOptions, "Form goal. Counter " + counterOptions.id + ". Init.");
    });

    var getRTHost = function (cookieHash) {
        return "https://" + cookieHash + ".mc.yandex.ru/watch/3/1";
    };
    var getMFHost = function (cookieHash) {
        return "https://adstat.yandex.ru/track?service=metrika&id=" + cookieHash;
    };
    var unSubscribe = noop;
    var onMessage$1 = function (ctx, host, done, e) {
        var data = getPath(e, 'data');
        if (!isString(data)) {
            return;
        }
        var _a = data.split('*'), actionType = _a[0], imgUrl = _a[1], status = _a[2];
        if (actionType === ACTION_FRAME) {
            e.source.postMessage(ACTION_IMAGES + "*" + host, '*');
        }
        else if (actionType === ACTION_IMAGE && imgUrl === host) {
            done(status);
        }
    };
    var makeClientRequest = globalMemoWin(PROVIDER_KEY + ".stat", function (ctx, counterOptions, host) {
        var _a;
        var counterKey = getCounterKey(counterOptions);
        var provider = getState(counterOptions)[counterKey].provider;
        var sender = getSender(ctx, ITP_INTEGRATION_PROVIDER, counterOptions);
        return sender({
            brInfo: browserInfo((_a = {},
                _a[provider] = 1,
                _a)),
        }, [host]);
    });
    var makeIframeRequest = globalMemoWin(PROVIDER_KEY + ".stat", function (ctx, counterOptions, providerHost) {
        return new PolyPromise(function (resolve, reject) {
            if (!hiddenFrameCreate(ctx, METRIKA_MATCH_IFRAME_URL, OWNER_ID)) {
                reject();
                return;
            }
            var onIframeImageLoaded = function (status) {
                (status === '1' ? resolve : reject)();
                unSubscribe();
                hiddenFrameRemove(METRIKA_MATCH_IFRAME_URL, OWNER_ID);
            };
            unSubscribe = cEvent(ctx).on(ctx, ['message'], bindArgs([ctx, providerHost, onIframeImageLoaded], onMessage$1));
            setDefer(ctx, onIframeImageLoaded, REQUEST_TIMEOUT);
        });
    });
    var getHosts$1 = function (ctx, counterOptions, provider) {
        var _a;
        var cookieHash = getFNVHash(ctx, counterOptions);
        return (_a = {},
            _a[MEGAFON_KEY] = getMFHost(cookieHash),
            _a[ROSTELECOM_KEY] = getRTHost(cookieHash),
            _a)[provider];
    };
    var useISP = function (ctx, counterOptions) {
        getCounterSettings(ctx, counterOptions, function (hitInfo) {
            var provider = /* @__PURE__ */ cFind(function (providerKey) {
                return getPath(hitInfo, COUNTER_SETTINGS_SETTINGS_KEY + "." + providerKey);
            }, [ROSTELECOM_KEY, MEGAFON_KEY]);
            if (!provider || !isITP(ctx)) {
                return undefined;
            }
            var isCSPEnabledInfo = isCSPEnabled(hitInfo) && !isYandexOwnerDomain(ctx);
            var counterKey = getCounterKey(counterOptions);
            var state = getState(counterOptions);
            state[counterKey] = {
                provider: provider,
                status: isCSPEnabledInfo ? CSP_INFO_ERROR : CSP_WAIT,
            };
            if (isCSPEnabledInfo) {
                return undefined;
            }
            var providerHost = getHosts$1(ctx, counterOptions, provider);
            // запрос из айфрейма пока делаем только для мегафона
            // в остальных случаях используем makeRequest
            var makeRequest = provider === 'mf' ? makeIframeRequest : makeClientRequest;
            return makeRequest(ctx, counterOptions, providerHost)
                .then(function () {
                state[counterKey].status = READY_STATE;
            })["catch"](function () {
                state[counterKey].status = CSP_TEST_ERROR;
            });
        })["catch"](errorLogger(ctx, "l." + PROVIDER_KEY));
    };
    var useInternetServiceProvider = globalMemoWin(PROVIDER_KEY, useISP);

    var getNodeText = function (ctx, elem) {
        if (!elem) {
            return '';
        }
        var res = [];
        var doc = getPath(ctx, 'document');
        walkTree(ctx, elem, function (node) {
            if (node.nodeType === doc.TEXT_NODE && node.textContent) {
                res.push(node.textContent.trim());
            }
            else if (node instanceof HTMLImageElement && node.alt) {
                res.push(node.alt.trim());
            }
        });
        if (res.length === 0) {
            return '';
        }
        return res.join(' ');
    };

    var generateRandomTwoDigitNumber = function (ctx) {
        return getRandom(ctx, 10, 99);
    };
    var base64ToBin = function (ctx, base64, dash) {
        try {
            var arrayString = toArray(ctx.atob(base64));
            return /* @__PURE__ */ cMap(function (char) {
                var bin = char.charCodeAt(0).toString(2);
                return repeat('0', 8 - bin.length) + bin;
            }, arrayString).join(dash);
        }
        catch (_) {
            return '';
        }
    };
    var safeSelectOne = function (ctx, node, selector) {
        var value = null;
        try {
            value = selector ? selectOne(ctx, node, selector) : value;
        }
        catch (_a) { }
        return value;
    };

    var ECOMMERCE_PARSER_PARAMS = 'dr';
    var sendParams = function (ctx, counterOpt, data) {
        var counter = getCounterInstance(ctx, counterOpt);
        if (!counter) {
            return;
        }
        counter[METHOD_NAME_PARAMS](genPath([
            '__ym',
            ECOMMERCE_PARSER_PARAMS,
            data || /* @__PURE__ */ pipe(generateRandomTwoDigitNumber, convertToString)(ctx),
        ]));
    };

    var numberRegExp = /[^\d]/g;
    var numberDotsAndCommasRegExp = /[^\d.,]/g;
    var dotsAndCommasRegExp = /[.,]$/;
    var getValidPrice = function (ctx, price) {
        var maxValidPrice = Math.pow(10, 8) - 0.01;
        var minValidPrice = 0;
        if (ctx.isNaN(price)) {
            return 0;
        }
        var validPrice = price;
        validPrice = Math.min(validPrice, maxValidPrice);
        validPrice = Math.max(validPrice, minValidPrice);
        return validPrice;
    };
    var filterNumbers = function (str) {
        return str.replace(numberRegExp, '');
    };
    var filterNumbersDotsAndCommas = function (str) {
        return str
            .replace(numberDotsAndCommasRegExp, '')
            .replace(dotsAndCommasRegExp, '');
    };
    var getDecimalSymbol = function (str) {
        var strFiltered = filterNumbersDotsAndCommas(str);
        var endWithZero = strFiltered[strFiltered.length - 1] === '0';
        for (var i = strFiltered.length; i > 0; i -= 1) {
            if (strFiltered.length - i + 1 > 3 && endWithZero) {
                return '';
            }
            var currentChar = strFiltered[i - 1];
            if (includes(currentChar, [',', '.'])) {
                return currentChar;
            }
        }
        return '';
    };
    var rawPriceParser = function (ctx, str) {
        if (!str) {
            return 0;
        }
        var decimalSymbol = getDecimalSymbol(str);
        var splitValue = decimalSymbol ? str.split(decimalSymbol) : [str];
        var decimalPart = decimalSymbol ? splitValue[1] : '00';
        var integerPart = splitValue[0];
        var price = parseFloat(filterNumbers(integerPart) + "." + filterNumbers(decimalPart));
        return getValidPrice(ctx, price);
    };
    var priceParser = /* @__PURE__ */ ctxErrorLogger('ep.pp', rawPriceParser);

    // https://paste.yandex-team.ru/3938615
    var currencyPatterns = [
        [['EUR', '€'], '978'],
        [['USD', 'У\\.Е\\.', '\\$'], '840'],
        [['UAH', 'ГРН', '₴'], '980'],
        [['ТГ', 'KZT', '₸', 'ТҢГ', 'TENGE', 'ТЕНГЕ'], '398'],
        [['GBP', '£', 'UKL'], '826'],
        [
            [
                'RUR',
                'RUB',
                'Р',
                'РУБ',
                '₽',
                'P',
                'РUB',
                'PУБ',
                'PУB',
                'PYБ',
                'РYБ',
                'РУB',
                'PУБ',
            ],
            '643',
        ],
    ];
    var patternRegExp = /* @__PURE__ */ memo(function (patternsArr) {
        return new RegExp(patternsArr.join('|'), 'i');
    });
    var rawCurrencyParser = function (str) {
        var defaultCurrencyId = '643';
        if (!str) {
            return defaultCurrencyId;
        }
        var validStr = rmSpaces(str);
        var searchResult = /* @__PURE__ */ cFind(function (_a) {
            var patternsArr = _a[0];
            return patternRegExp(patternsArr).test(validStr);
        }, currencyPatterns);
        if (!searchResult) {
            return defaultCurrencyId;
        }
        return searchResult[1];
    };
    var currencyParser = /* @__PURE__ */ ctxErrorLogger('ep.cp', rawCurrencyParser);

    var encoderPath = function (part) {
        var radix = 35;
        var XORKey = 92844;
        // eslint-disable-next-line no-bitwise
        return (+part ^ XORKey).toString(radix);
    };
    var encoder = /* @__PURE__ */ ctxErrorLogger('ep.en', function (ctx, price, currencyId) {
        var dash = 'z';
        var partLength = 8;
        var randomEnd = generateRandomTwoDigitNumber(ctx);
        var result = /* @__PURE__ */ convertToString(price * 100);
        result += currencyId;
        result += randomEnd;
        var repeatLength = partLength * 2 - result.length;
        if (repeatLength < 0) {
            return '';
        }
        result = repeat('0', repeatLength) + result;
        var leftPart = result.slice(0, partLength);
        var rightPart = result.slice(-partLength);
        leftPart = encoderPath(leftPart);
        rightPart = encoderPath(rightPart);
        return "" + leftPart + dash + rightPart;
    });

    var getText = function (ctx, selector) {
        var node = safeSelectOne(ctx, ctx.document.body, selector);
        return node ? getNodeText(ctx, node) : '';
    };
    var getTotalPrice = function (ctx, totalPricesSelector) {
        var nodeText = getText(ctx, totalPricesSelector);
        return priceParser(ctx, nodeText);
    };
    var getCurrency = /* @__PURE__ */ pipe(getText, currencyParser);
    var sendData = function (ctx, counterOpt, currency, total) {
        var encoderValue = encoder(ctx, total, currency);
        if (encoderValue) {
            sendParams(ctx, counterOpt, encoderValue);
        }
    };
    var rawCartParser = function (ctx, counterOpt, currencySelector, totalPricesSelector) {
        var currency = getCurrency(ctx, currencySelector);
        var total = getTotalPrice(ctx, totalPricesSelector);
        sendData(ctx, counterOpt, currency, total);
        if (!/* @__PURE__ */ isNativeFunction('MutationObserver', ctx.MutationObserver)) {
            return;
        }
        var mutationObserver = new MutationObserver(function () {
            var observeCurrency = getCurrency(ctx, currencySelector);
            var observeTotal = getTotalPrice(ctx, totalPricesSelector);
            if (currency !== observeCurrency || total !== observeTotal) {
                currency = observeCurrency;
                total = observeTotal;
                sendData(ctx, counterOpt, currency, total);
            }
        });
        mutationObserver.observe(ctx.document.body, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    };
    var cartParser = /* @__PURE__ */ ctxErrorLogger('ep.ctp', rawCartParser);

    var handleCheckout = function (ctx, counterOpt, checkoutBtnSelector, mobileCheckoutSelector, event) {
        var checkoutBtn = safeSelectOne(ctx, ctx.document.body, checkoutBtnSelector);
        var mobileCheckoutBtn = safeSelectOne(ctx, ctx.document.body, mobileCheckoutSelector);
        var isCheckoutButton = includes(event.target, [
            checkoutBtn,
            mobileCheckoutBtn,
        ]);
        if (isCheckoutButton) {
            sendParams(ctx, counterOpt);
        }
    };
    var rawCheckoutParser = function (ctx, counterOpt, isCheckoutPage, checkoutBtnSelector, mobileCheckoutBtnSelector) {
        if (isCheckoutPage) {
            sendParams(ctx, counterOpt);
        }
        if (!checkoutBtnSelector && !mobileCheckoutBtnSelector) {
            return noop;
        }
        return cEvent(ctx).on(ctx.document, ['click'], errorLogger(ctx, 'ep.chp.cl', bindArgs([
            ctx,
            counterOpt,
            checkoutBtnSelector,
            mobileCheckoutBtnSelector,
        ], handleCheckout)));
    };
    var checkoutParser = /* @__PURE__ */ ctxErrorLogger('ep.chp', rawCheckoutParser);

    // Движок отдает строку, зашифрованную алгоритмом Хаффмана
    // https://st.yandex-team.ru/METR-41730#60100566985485242ba035c4
    var hashGenerate = function (ctx, key) {
        var bitString = base64ToBin(ctx, key, '');
        // вместо бинарного дерева генерируем хеш таблицу
        // 0 — левая веточка, 1 — правая
        var hashTree = {};
        var tmpHashTree = {};
        var index = 1;
        var hashKey = '';
        var getBit = function (step) {
            if (step === void 0) { step = 1; }
            var value = bitString.slice(index, index + step);
            index += step;
            return value;
        };
        var addNode = function () {
            var keyLeft = hashKey + "0";
            var keyRight = hashKey + "1";
            if (!tmpHashTree[keyLeft]) {
                hashKey += '0';
                tmpHashTree[hashKey] = 1;
            }
            else if (!tmpHashTree[keyRight]) {
                hashKey += '1';
                tmpHashTree[hashKey] = 1;
            }
            else {
                hashKey = hashKey.slice(0, -1);
                index -= 1;
            }
        };
        var addNodeValue = function () {
            var keyLeft = hashKey + "0";
            var keyRight = hashKey + "1";
            if (!tmpHashTree[keyLeft]) {
                hashTree[keyLeft] = getBit(8);
                tmpHashTree[keyLeft] = 1;
            }
            else if (!tmpHashTree[keyRight]) {
                hashTree[keyRight] = getBit(8);
                tmpHashTree[keyRight] = 1;
            }
            else {
                hashKey = hashKey.slice(0, -1);
                index -= 1;
            }
        };
        while (index < bitString.length - 1) {
            (getBit() === '0' ? addNode : addNodeValue)();
        }
        return hashTree;
    };
    /*
        Пример сообщения:
        00000001 | 00000000 00000100 | 0010 101 101 110
        версия 1 |     длина 4       |    [   "   "   ]
    */
    var decoder = /* @__PURE__ */ ctxErrorLogger('ep.dec', function (ctx, data) {
        if (!data || isBrokenFromCharCode(ctx)) {
            return [];
        }
        var _a = base64ToBin(ctx, data, ' ').split(' '), versionBin = _a[0], length1 = _a[1], length2 = _a[2], messageArrayBin = _a.slice(3);
        var key;
        var version = parseInt(versionBin, 2);
        if (version === 1) {
            key =
                'AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o';
        }
        else if (version === 2) {
            key =
                'Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==';
        }
        else {
            return [];
        }
        var hash = hashGenerate(ctx, key);
        var messageBin = messageArrayBin.join('');
        var length = parseInt(length1 + length2, 2);
        var hashKey = '';
        var result = '';
        var index = 0;
        while (result.length < length && messageBin[index]) {
            hashKey += messageBin[index];
            if (hash[hashKey]) {
                result += String.fromCharCode(parseInt(hash[hashKey], 2));
                hashKey = '';
            }
            index += 1;
        }
        var resultArray = parse$1(ctx, decodeUtf8(result));
        return isArray(resultArray) ? resultArray : [];
    });

    var parseOptions = function (ctx, counterOptions) {
        return getCounterSettings(ctx, counterOptions, function (counterSettings) {
            var decodeSelectors = getPath(counterSettings, 'settings.dr');
            return {
                dr: decoder(ctx, decodeSelectors),
                isEnabled: getPath(counterSettings, 'settings.auto_goals'),
            };
        });
    };
    var checkPath = function (ctx, urlTemplate) {
        if (!urlTemplate) {
            return false;
        }
        var _a = getLocation(ctx), pathname = _a.pathname, hash = _a.hash, search = _a.search;
        return new RegExp(urlTemplate).test("" + pathname + hash + search);
    };
    var rawEcommerceParser = function (ctx, counterOptions) {
        if (!/* @__PURE__ */ isNativeFunction('querySelectorAll', ctx.document.querySelectorAll)) {
            return PolyPromise.resolve(noop);
        }
        return parseOptions(ctx, counterOptions).then(function (_a) {
            var _b = _a.dr, cartUrlTemplate = _b[0], cartCurrencySelector = _b[1], cartTotalPricesSelector = _b[2], cartMobileUrlTemplate = _b[3], cartMobileCurrencySelector = _b[4], cartMobileTotalPricesSelector = _b[5], checkoutUrlTemplate = _b[6], checkoutPlaceOrderBtn = _b[7], checkoutMobileUrlTemplate = _b[8], checkoutMobilePlaceOrderBtn = _b[9], isEnabled = _a.isEnabled;
            if (!isEnabled) {
                return PolyPromise.resolve(noop);
            }
            var isCartPage = checkPath(ctx, cartUrlTemplate);
            var isMobileCartPage = checkPath(ctx, cartMobileUrlTemplate);
            var isCheckoutPage = checkPath(ctx, checkoutUrlTemplate);
            var isMobileCheckoutPage = checkPath(ctx, checkoutMobileUrlTemplate);
            var isSameSite = "" + cartUrlTemplate + cartCurrencySelector + cartTotalPricesSelector ===
                "" + cartMobileUrlTemplate + cartMobileCurrencySelector + cartMobileTotalPricesSelector;
            return waitForBody(ctx).then(function () {
                if (isCartPage) {
                    cartParser(ctx, counterOptions, cartCurrencySelector, cartTotalPricesSelector);
                }
                if (isMobileCartPage && !isSameSite) {
                    cartParser(ctx, counterOptions, cartMobileCurrencySelector, cartMobileTotalPricesSelector);
                }
                return checkoutParser(ctx, counterOptions, isCheckoutPage || isMobileCheckoutPage, checkoutPlaceOrderBtn, checkoutMobilePlaceOrderBtn);
            });
        });
    };
    var ecommerceParser = /* @__PURE__ */ ctxErrorLogger('ep.i', rawEcommerceParser);

    // eslint-disable-next-line no-useless-escape
    var regexTrash = /[\*\.\?\(\)]/g;
    var logNonNativeFunction = /* @__PURE__ */ memo(function (ctx, fn, functionName) {
        try {
            var prettyName = functionName
                .replace('\\s', ' ')
                .replace(regexTrash, '');
            DebugConsole(ctx).warn("Function \"" + prettyName + "\" has been overriden, this may cause issues with Metrika counter");
        }
        catch (e) {
            // do nothing
        }
    }, secondArg);
    var useReportNonNativeFunctionProviderRaw = function (ctx) {
        if (debugEnabled(ctx).isEnabled) {
            dataLayerObserver(ctx, nonNativeFunctionsList, function (observer) {
                observer.on(function (_a) {
                    var functionName = _a[0], fn = _a[1];
                    logNonNativeFunction(ctx, fn, functionName);
                    // защита от утечек памяти
                    nonNativeFunctionsList.splice(100);
                });
            });
        }
    };
    var useReportNonNativeFunctionProvider = /* @__PURE__ */ ctxErrorLogger('r.nn', useReportNonNativeFunctionProviderRaw);

    var longtaskProviderRaw = function (ctx) {
        var _a;
        if (/* @__PURE__ */ isNativeFunction('PerformanceObserver', ctx.PerformanceObserver)) {
            var totalLongtasks_1 = 0;
            var observer_1 = new ctx.PerformanceObserver(errorLogger(ctx, LONGTASK_KEY + ".o", function (list) {
                if (list && list['getEntries']) {
                    var entries = list['getEntries']();
                    totalLongtasks_1 = cReduce(function (prev, entry) {
                        return prev + entry['duration'];
                    }, totalLongtasks_1, entries);
                    globalStorage(ctx).setVal(LONGTASK_KEY, totalLongtasks_1);
                }
            }));
            try {
                observer_1.observe((_a = {},
                    _a['type'] = 'longtask',
                    _a['buffered'] = true,
                    _a));
            }
            catch (e) {
                return noop;
            }
            // это такой байнд для вещей которые нельзя байндить
            return function () { return observer_1['disconnect'](); };
        }
        return noop;
    };
    var longtaskProviderKey = LONGTASK_KEY + ".p";
    var longtaskProvider = /* @__PURE__ */ ctxErrorLogger(longtaskProviderKey, globalMemoWin(longtaskProviderKey, longtaskProviderRaw));

    var n,l,u,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function p(){return {current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g);}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)));});}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h]);}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px";}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l.__e(n,i);}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u);}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this));},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;

    var o$1=0;function e$1(_,e,n,t,f){var l$1,s,u={};for(s in e)"ref"==s?l$1=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l$1,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:t,__self:f};if("function"==typeof _&&(l$1=_.defaultProps))for(s in l$1)void 0===u[s]&&(u[s]=l$1[s]);return l.vnode&&l.vnode(a),a}

    var BASE_PREFIX = '__ym';
    var HIDDEN_CLASS = BASE_PREFIX + "Hidden";
    var YELLOW_COLOR = '#FFD963';
    var LIGHT_YELLOW_COLOR = '#FFEBA0';
    var LIGHT_GREY_COLOR = '#F6F5F3';
    var DARK_GREY_COLOR = '#363636';
    var BLUE_COLOR = 'blue';
    var RED_COLOR = '#FF0100';
    var COMMON_STYLES = [
        "." + HIDDEN_CLASS + " {\n        display: none!important;\n    }",
    ];

    var DEBUGGER_CLASS = BASE_PREFIX + "Debugger";
    var CONTENT_CLASS = DEBUGGER_CLASS + "Content";
    var OPENER_CLASS = DEBUGGER_CLASS + "Opener";
    var CLOSER_CLASS = DEBUGGER_CLASS + "Closer";
    var SIZE_SETTER_CLASS = DEBUGGER_CLASS + "SizeSetter";
    var CLEAR_CLASS = DEBUGGER_CLASS + "Clear";
    var SEARCH_CLASS = DEBUGGER_CLASS + "Search";
    var TOOLS_CONTAINER_CLASS = DEBUGGER_CLASS + "Tools";
    var RESIZER_CLASS = BASE_PREFIX + "Resizer";
    var IFRAME_CLASS = BASE_PREFIX + "Iframe";
    var TABS_CLASS = BASE_PREFIX + "Tabs";
    var TABS_CONTENT_CLASS = TABS_CLASS + "Content";
    var TABS_SELECTOR_CLASS = TABS_CLASS + "Selector";
    var FRAME_STYLES = /* @__PURE__ */ __spreadArrays([
        "body {\n        font-family: Helvetica,Arial,sans-serif;\n        margin: 0;\n        background-color: " + LIGHT_GREY_COLOR + ";\n    }",
        "button {\n        background-color: " + YELLOW_COLOR + ";\n        border-radius: 5px;\n        font-weight: 400;\n        padding: 5px;\n        cursor: pointer;\n        font-size: 15px;\n        border: none;\n        cursor: pointer;\n    }",
        "pre {\n        background-color: " + DARK_GREY_COLOR + ";\n        color: " + YELLOW_COLOR + ";\n        padding: 5px;\n        margin: 0;\n    }",
        "." + SEARCH_CLASS + " {\n        margin-right: 5px;\n        height: 27px;\n        float: right;\n        display: inline-block;\n    }",
        "." + CLEAR_CLASS + " {\n        float: right;\n        margin-right: 5px;\n    }",
        "." + CONTENT_CLASS + " {\n        background-color: " + DARK_GREY_COLOR + ";\n    }",
        "." + TOOLS_CONTAINER_CLASS + " {\n        width: 100%;\n        top: 0;\n        background-color: " + DARK_GREY_COLOR + ";\n        padding: 5px;\n        padding-top: 2px;\n        position: fixed;\n    }",
        "." + CLOSER_CLASS + " {\n        float: right;\n        margin-right: 5px;\n    }",
        "." + SIZE_SETTER_CLASS + " {\n        position: absolute;\n        top: 8px;\n        right: 32px;\n        width: 11px;\n        height: 11px;\n        cursor: pointer;\n        border: 1px solid black;\n    }",
        "." + TABS_CLASS + " {\n        float: left;\n        border: 1px darkgrey;\n        height: 100%;\n        width: 100%;\n    }",
        "." + TABS_SELECTOR_CLASS + " {\n        height: 27px;\n        margin-right: 5px;\n        display: inline-block;\n    }",
        "." + TABS_CONTENT_CLASS + " {\n        height: 100%;\n        overflow-y: scroll;\n        margin-top: 34px;\n    }"
    ], COMMON_STYLES);
    var NON_FRAME_STYLES = /* @__PURE__ */ __spreadArrays([
        "." + OPENER_CLASS + " {\n        border-top-left-radius: 5px !important;\n        background-color: lightgrey !important;\n        width: 45px !important;\n        height: 45px !important;\n        padding: 3px !important;\n        cursor: pointer !important;\n        bottom: 0 !important;\n        right: 0 !important;\n        position: absolute !important;\n    }",
        "." + DEBUGGER_CLASS + " {\n        font-size: 15px !important;\n        bottom: 0 !important;\n        color: black !important;\n        position: fixed !important;\n        width: 100% !important;\n        z-index: 1000 !important;\n    }",
        "." + RESIZER_CLASS + " {\n        height: 3px !important;\n        background-color: " + DARK_GREY_COLOR + " !important;\n        width: 100% !important;\n        cursor: row-resize !important;\n    }",
        "." + IFRAME_CLASS + " {\n        width: 100% !important;\n        height: 100% !important;\n        background-color: white !important;\n        border: none !important;\n    }"
    ], COMMON_STYLES);

    var LOG_CLASS = BASE_PREFIX + "Log";
    var CONSOLE_TAB_STYLES = [
        "." + LOG_CLASS + " {\n        padding: 3px;\n        border-bottom: grey solid 1px;\n        color: black;\n    }",
        "." + LOG_CLASS + "[type=\"log\"] {\n        background-color: white;\n    }",
        "." + LOG_CLASS + "[type=\"warn\"] {\n        background-color: lgightyellow;\n    }",
        "." + LOG_CLASS + "[type=\"error\"] {\n        background-color: lightpink;\n    }",
    ];

    var _a$g;
    var consoleTabComponent =  (_a$g = /** @class */ (function (_super) {
            __extends(ConsoleTabComponent, _super);
            function ConsoleTabComponent() {
                var _this = _super.call(this) || this;
                _this.state = {
                    searchString: null,
                    logEvents: [],
                };
                return _this;
            }
            ConsoleTabComponent.prototype.isHidden = function (content) {
                return !!this.state.searchString &&
                    !stringIncludes(content.toLocaleLowerCase(), this.state.searchString.toLocaleLowerCase());
            };
            ConsoleTabComponent.prototype.render = function (props, state) {
                var _this = this;
                var logEvents = state.logEvents;
                return (e$1("div", { children: /* @__PURE__ */ cMap(function (_a) {
                        var type = _a.type, content = _a.content;
                        return e$1("pre", __assign({ hidden: _this.isHidden(content), "class": LOG_CLASS, type: type }, { children: content }), void 0);
                    }, logEvents) }, void 0));
            };
            ConsoleTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'clear':
                        this.setState({
                            logEvents: [],
                        });
                        break;
                    case 'search':
                        this.setState({ searchString: event.data });
                        break;
                    case 'log':
                        var _a = event.data, type = _a.type, args = _a.args;
                        this.setState({
                            logEvents: this.state.logEvents.concat({
                                type: type,
                                content: /* @__PURE__ */ arrayJoin('\n', /* @__PURE__ */ cMap(function (arg) {
                                    if (isObject(arg)) {
                                        return JSON.stringify(arg, null, 2);
                                    }
                                    return /* @__PURE__ */ convertToString(arg);
                                }, args)),
                            }),
                        });
                        break;
                }
            };
            return ConsoleTabComponent;
        }(_)),
        _a$g.tabName = 'console',
        _a$g.styles = CONSOLE_TAB_STYLES,
        _a$g.windowStyles = [],
        _a$g) ;
    var ConsoleTabComponent = consoleTabComponent;

    var REQUESTS_TAB_CLASS = BASE_PREFIX + "RequestsTab";
    var REQUEST_CLASS = REQUESTS_TAB_CLASS + "Request";
    var REQUEST_SUCCESS_CLASS = REQUEST_CLASS + "Success";
    var REQUEST_PENDING_CLASS = REQUEST_CLASS + "Pending";
    var REQUEST_ERROR_CLASS = REQUEST_CLASS + "Error";
    var REQUEST_HEADER_CLASS = REQUEST_CLASS + "Header";
    var REQUEST_HEADER_METHOD_CLASS = REQUEST_HEADER_CLASS + "Method";
    var REQUEST_HEADER_MAIN_URL = REQUEST_HEADER_CLASS + "Url";
    var REQEUST_CONTENT_CLASS = REQUEST_CLASS + "Content";
    var REQUEST_CONTENT_ITEM = REQUEST_CLASS + "Item";
    var REQUEST_CONTENT_ITEM_HEADER = REQUEST_CONTENT_ITEM + "Header";
    var REQUEST_CONTENT_ITEM_CONTENT = REQUEST_CONTENT_ITEM + "Content";
    var REQUESTS_TAB_STYLES = [
        "." + REQUEST_CONTENT_ITEM_CONTENT + " {\n        border-bottom: 1px solid black;\n        padding: 5px;\n        padding-left: 20px;\n        margin: 0;\n    }",
        "." + REQUEST_CONTENT_ITEM_HEADER + " {\n        padding-left: 20px;\n        padding: 5px;\n        cursor: pointer;\n        font-weight: bold;\n        border-bottom: 1px solid black;\n    }",
        "." + REQUESTS_TAB_CLASS + " {\n        border: 1px solid black;\n    }",
        "." + REQUEST_CLASS + " {\n        border-bottom: 1px solid black;\n    }",
        "." + REQUEST_HEADER_CLASS + " {\n        height: 21px;\n        cursor: pointer;\n        border-bottom: 1px solid black;\n        overflow: hidden;\n        background-color: lightgrey;\n    }",
        "." + REQUEST_HEADER_MAIN_URL + " {\n        font-weight: bold;\n    }",
        "." + REQUEST_HEADER_METHOD_CLASS + " {\n        font-size: 18px;\n        width: 60px;\n        float: left;\n    }",
        "." + REQEUST_CONTENT_CLASS + " {\n        background-color: white;\n    }",
        "." + REQUEST_ERROR_CLASS + " ." + REQUEST_HEADER_CLASS + " {\n        background-color: #ffcccc;\n    }",
        "." + REQUEST_ERROR_CLASS + " ." + REQEUST_CONTENT_CLASS + " {\n        background-color: #fdd8d8;\n    }",
        "." + REQUEST_SUCCESS_CLASS + " ." + REQUEST_HEADER_CLASS + " {\n        background-color: #cfc;\n    }",
        "." + REQUEST_SUCCESS_CLASS + " ." + REQEUST_CONTENT_CLASS + " {\n        background-color: #e8ffe8;\n    }",
    ];

    var requestComponent =  /** @class */ (function (_super) {
        __extends(RequestComponent, _super);
        function RequestComponent() {
            var _this = _super.call(this) || this;
            _this.toggleSection = function (section, value) {
                var _a;
                var newValue = (value !== undefined) ? value : !_this.state[section];
                _this.setState((_a = {},
                    _a[section] = newValue,
                    _a));
            };
            _this.createBrinfoItem = function () {
                var rQuery = _this.props.rQuery;
                if (rQuery && rQuery['browser-info']) {
                    var rawBrowserinfo = rQuery['browser-info'].split(':');
                    var readableBrowserinfo = [];
                    for (var i = 0; i < rawBrowserinfo.length; i += 2) {
                        readableBrowserinfo.push([
                            rawBrowserinfo[i],
                            rawBrowserinfo[i + 1],
                        ]);
                    }
                    readableBrowserinfo = cSort(function (a, b) { return a[0].localeCompare(b[0]); }, readableBrowserinfo);
                    var brwoserInfoContent = cReduce(function (result, _a) {
                        var name = _a[0], val = _a[1];
                        return "" + result + name + ": " + val + "\n";
                    }, '', readableBrowserinfo);
                    return _this.createContentItem('browserinfo', brwoserInfoContent);
                }
            };
            _this.createTelemetryItem = function () {
                var rQuery = _this.props.rQuery;
                if (rQuery && rQuery['t']) {
                    var rawTelemetry = /* @__PURE__ */ cMap(function (component) { return component.split('('); }, /* @__PURE__ */ cFilter(Boolean, rQuery['t'].split(')')));
                    var telemetryContent = cReduce(function (prev, _a) {
                        var name = _a[0], value = _a[1];
                        return "" + prev + name + ": " + value + "\n";
                    }, '', rawTelemetry);
                    return _this.createContentItem('telemetry', telemetryContent);
                }
            };
            _this.createQueryItem = function () {
                var rQuery = _this.props.rQuery;
                if (rQuery) {
                    var queryContent = cReduce(function (prev, _a) {
                        var name = _a[0], val = _a[1];
                        if (!name) {
                            return prev;
                        }
                        return "" + prev + name + " = " + val + "\n";
                    }, '', entries(rQuery));
                    return _this.createContentItem('query', queryContent);
                }
            };
            _this.createBodyItem = function () {
                var _a = _this.props, rBody = _a.rBody, ctx = _a.ctx;
                if (rBody) {
                    var jsonBody = parse$1(ctx, rBody);
                    var body = jsonBody
                        ? JSON.stringify(jsonBody, null, 2)
                        : /* @__PURE__ */ convertToString(rBody);
                    return _this.createContentItem('rBody', body, 'request body');
                }
            };
            _this.createHeaderItem = function () {
                var rHeaders = _this.props.rHeaders;
                if (rHeaders) {
                    var headersContent = cReduce(function (prev, _a) {
                        var name = _a[0], val = _a[1];
                        return "" + prev + name + ": " + val + "\n";
                    }, '', entries(rHeaders));
                    _this.createContentItem('headers', headersContent, 'request headers');
                }
            };
            _this.createResponseBodyItem = function () {
                var respBody = _this.props.respBody;
                if (respBody) {
                    var stringifiedBody = JSON.stringify(respBody, null, 2);
                    return _this.createContentItem('respBody', stringifiedBody, 'response body');
                }
            };
            _this.isHidden = function () {
                var _a = _this.props, searchString = _a.searchString, rQuery = _a.rQuery, url = _a.url;
                if (!searchString) {
                    return false;
                }
                if (rQuery) {
                    var hasQueryEntry = cReduce(function (result, _a) {
                        var key = _a[0], value = _a[1];
                        return result || stringIncludes(key + "=" + value, searchString);
                    }, false, entries(rQuery));
                    if (hasQueryEntry) {
                        return false;
                    }
                }
                if (stringIncludes(url, searchString)) {
                    return false;
                }
                return true;
            };
            _this.state = {
                rBody: false,
                headers: false,
                query: false,
                respBody: false,
                browserinfo: false,
                telemetry: false,
                content: false,
            };
            return _this;
        }
        RequestComponent.prototype.createContentItem = function (name, content, title) {
            var _this = this;
            if (title === void 0) { title = name; }
            return e$1("div", __assign({ "class": REQUEST_CONTENT_ITEM }, { children: [e$1("div", __assign({ onClick: function () { return _this.toggleSection(name); }, "class": REQUEST_CONTENT_ITEM_HEADER }, { children: title }), void 0),
                    e$1("pre", __assign({ hidden: !this.state[name], "class": REQUEST_CONTENT_ITEM_CONTENT }, { children: content }), void 0)] }), void 0);
        };
        RequestComponent.prototype.render = function (props, state) {
            var _this = this;
            var verb = props.verb, rQuery = props.rQuery, url = props.url, status = props.status;
            var statusClass = REQUEST_PENDING_CLASS;
            if (status === 'success') {
                statusClass = REQUEST_SUCCESS_CLASS;
            }
            else if (status === 'error') {
                statusClass = REQUEST_ERROR_CLASS;
            }
            var query = stringify(rQuery);
            var fullUrl = url + "?" + query;
            return e$1("div", __assign({ hidden: this.isHidden(), "class": REQUEST_CLASS + " " + statusClass }, { children: [e$1("div", __assign({ "class": REQUEST_HEADER_CLASS, title: fullUrl, onClick: function () { return _this.toggleSection('content'); } }, { children: [e$1("span", __assign({ "class": REQUEST_HEADER_METHOD_CLASS }, { children: verb }), void 0),
                            e$1("span", __assign({ "class": REQUEST_HEADER_MAIN_URL }, { children: url }), void 0),
                            e$1("span", { children: ["?", query] }, void 0)] }), void 0),
                    e$1("div", __assign({ "class": REQEUST_CONTENT_CLASS, hidden: !state.content }, { children: [this.createBrinfoItem(), this.createTelemetryItem(), this.createQueryItem(), this.createBodyItem(), this.createHeaderItem(), this.createResponseBodyItem()] }), void 0)] }), void 0);
        };
        return RequestComponent;
    }(_)) ;
    var RequestComponent = requestComponent;

    var _a$h;
    var requestTabComponent =  (_a$h = /** @class */ (function (_super) {
            __extends(RequestTabComponent, _super);
            function RequestTabComponent() {
                var _this = _super.call(this) || this;
                _this.nextIndex = 0;
                _this.modifyRequest = function (requestId, data) {
                    var _a;
                    if (_this.state.requests[requestId]) {
                        var request = mix({}, _this.state.requests[requestId], data);
                        _this.setState({
                            requests: mix(_this.state.requests, (_a = {}, _a[requestId] = request, _a)),
                        });
                    }
                };
                _this.addRequest = function (data) {
                    var _a;
                    var requestId = data.requestId, senderParams = data.senderParams, url = data.url;
                    var request = mix({
                        url: url,
                        requestId: requestId,
                        status: 'pending',
                        index: _this.nextIndex,
                    }, senderParams);
                    _this.nextIndex += 1;
                    _this.setState({
                        requests: mix(_this.state.requests, (_a = {}, _a[requestId] = request, _a)),
                    });
                };
                _this.state = {
                    searchString: null,
                    requests: {},
                };
                return _this;
            }
            RequestTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'request':
                        this.addRequest(event.data);
                        break;
                    case 'requestSuccess':
                        this.modifyRequest(event.data.requestId, { status: 'success', respBody: event.data.body });
                        break;
                    case 'requestFail':
                        this.modifyRequest(event.data.requestId, { status: 'error', error: event.data.error });
                        break;
                    case 'clear':
                        this.setState({ requests: {} });
                        break;
                    case 'search':
                        this.setState({ searchString: event.data });
                        break;
                }
            };
            RequestTabComponent.prototype.render = function (props, state) {
                var _this = this;
                var requests = state.requests, searchString = state.searchString;
                return e$1("div", { children: /* @__PURE__ */ cMap(function (_a) {
                        var reqId = _a[0], request = _a[1];
                        return e$1(RequestComponent, __assign({}, request, { ctx: _this.props.ctx, searchString: searchString }), void 0);
                    }, cSort(function (a, b) { return a[1].index - b[1].index; }, entries(requests))) }, void 0);
            };
            return RequestTabComponent;
        }(_)),
        _a$h.tabName = 'requests',
        _a$h.styles = REQUESTS_TAB_STYLES,
        _a$h.windowStyles = [],
        _a$h) ;
    var RequestTabComponent = requestTabComponent;

    var COUNTER_CLASS = BASE_PREFIX + "Counter";
    var COUNTER_TITLE_CLASS = COUNTER_CLASS + "Title";
    var COUNTER_SECTION_CLASS = COUNTER_CLASS + "Section";
    var COUNTER_SECTION_TITLE_CLASS = COUNTER_SECTION_CLASS + "Title";
    var COUNTER_SECTION_CONTENT_CLASS = COUNTER_SECTION_CLASS + "Content";
    var COUNTERS_TAB_STYLES = [
        "." + COUNTER_CLASS + " {\n        border-bottom: grey solid 1px;\n    }",
        "." + COUNTER_TITLE_CLASS + " {\n        padding: 5px;\n        background-color: " + YELLOW_COLOR + ";\n        font-weight: bold;\n        font-size: 20px;\n        border-bottom: grey solid 1px;\n    }",
        "." + COUNTER_SECTION_CONTENT_CLASS + " {\n        padding: 5px;\n        border-bottom: grey solid 1px;\n    }",
        "." + COUNTER_SECTION_CLASS + " button {\n        margin-right: 5px;\n    }",
        "." + COUNTER_SECTION_TITLE_CLASS + " {\n        font-weight: bold;\n        background-color: " + LIGHT_YELLOW_COLOR + ";\n        padding: 5px;\n        border-bottom: grey solid 1px;\n    }",
    ];

    var _a$i;
    var METRIKA_BASE_URL = 'metrika.yandex';
    var WEBVISOR_COM_DOMAIN = 'http://webvisor.com/';
    var countersTabComponent =  (_a$i = /** @class */ (function (_super) {
            __extends(CountersTabComponent, _super);
            function CountersTabComponent() {
                var _this = _super.call(this) || this;
                _this.nextIndex = 0;
                _this.addCounter = function (counterOptions) {
                    var _a;
                    var counterKey = getCounterKey(counterOptions);
                    _this.setState((_a = {},
                        _a[counterKey] = {
                            options: counterOptions,
                            index: _this.nextIndex,
                        },
                        _a));
                    _this.nextIndex += 1;
                };
                _this.setCounterSettings = function (data) {
                    var _a;
                    var settings = data.settings, key = data.key;
                    if (_this.state[key]) {
                        var counter = mix({ settings: settings }, _this.state[key]);
                        _this.setState((_a = {},
                            _a[key] = counter,
                            _a));
                    }
                };
                _this.setWebvisorData = function (data) {
                    var _a;
                    var key = data.key, version = data.version;
                    if (_this.state[key]) {
                        var counter = mix({ webvisorVersion: version }, _this.state[key], {});
                        _this.setState((_a = {},
                            _a[key] = counter,
                            _a));
                    }
                };
                _this.openMetrikaLink = function (isHttps, tld, path) {
                    var url = _this.getUrl(isHttps, tld, path);
                    _this.props.ctx.open(url, '_newtab');
                };
                _this.getUrl = function (isHttps, tld, path) {
                    if (isHttps) {
                        return "http" + (isHttps ? 's' : '') + "://" + METRIKA_BASE_URL + "." + (tld === 'ru' ? 'ru' : 'com') + "/" + path;
                    }
                    return WEBVISOR_COM_DOMAIN + "/" + path;
                };
                _this.state = {};
                return _this;
            }
            CountersTabComponent.prototype.render = function (props, state) {
                var _this = this;
                var ctx = props.ctx;
                var counters = cSort(function (a, b) { return a[1].index - b[1].index; }, entries(state));
                return (e$1("div", { children: /* @__PURE__ */ cMap(function (counterTuple) {
                        var counterInfo = counterTuple[1];
                        var options = counterInfo.options, settings = counterInfo.settings, webvisorVersion = counterInfo.webvisorVersion;
                        var id = options.id, webvisor = options.webvisor, trustedDomains = options.trustedDomains, clickmap = options.clickmap;
                        var url = encodeURIComponent(getLocation(ctx).href);
                        var inpageQueryString = "?url=" + url + "&id=" + id;
                        var publisherSchema = getPath(settings, 'settings.publisher.schema');
                        var webvisorFormsEnabled = getPath(settings, 'settings.webvisor.forms');
                        var _a = getLocation(ctx), protocol = _a.protocol, host = _a.host;
                        var isHttps = protocol === 'https:';
                        var tld = host.split('.').pop();
                        return (e$1("div", __assign({ "class": COUNTER_CLASS }, { children: [e$1("div", __assign({ "class": COUNTER_TITLE_CLASS }, { children: ["Counter: ", id] }), void 0),
                                e$1("div", __assign({ "class": COUNTER_SECTION_CLASS }, { children: [e$1("div", __assign({ "class": COUNTER_SECTION_TITLE_CLASS }, { children: "Useful links" }), void 0),
                                        e$1("div", __assign({ "class": COUNTER_SECTION_CONTENT_CLASS }, { children: [e$1("button", __assign({ onClick: function () { return _this.openMetrikaLink(true, tld, "dashboard?id=" + id); } }, { children: "Dashboard" }), void 0),
                                                e$1("button", __assign({ onClick: function () { return _this.openMetrikaLink(isHttps, tld, "inpage/link_map" + inpageQueryString); } }, { children: "Links map" }), void 0),
                                                e$1("button", __assign({ onClick: function () { return _this.openMetrikaLink(isHttps, tld, "inpage/click_map" + inpageQueryString); } }, { children: "Clicks map" }), void 0),
                                                e$1("button", __assign({ onClick: function () { return _this.openMetrikaLink(isHttps, tld, "inpage/form_analysis" + inpageQueryString); } }, { children: "Form analytics" }), void 0)] }), void 0)] }), void 0),
                                e$1("div", __assign({ "class": COUNTER_SECTION_CLASS }, { children: [e$1("div", __assign({ "class": COUNTER_SECTION_TITLE_CLASS }, { children: "Webvisor info" }), void 0),
                                        e$1("div", __assign({ "class": COUNTER_SECTION_CONTENT_CLASS }, { children: [e$1("div", { children: ["Webvisor option: ", webvisor ? 'on' : 'off'] }, void 0),
                                                webvisor && e$1("div", { children: ["Recording: ", !!webvisorVersion ? 'yes' : 'no'] }, void 0),
                                                 webvisorVersion && e$1("div", { children: ["Webvisor version: ", webvisorVersion] }, void 0),
                                                webvisor && e$1("div", { children: [" Webvisor form record: ", webvisorFormsEnabled ? 'on' : 'off'] }, void 0),
                                                trustedDomains && e$1("div", { children: ["Trusted webvisor iframe domains: ", /* @__PURE__ */ arrayJoin(', ', trustedDomains)] }, void 0)] }), void 0)] }), void 0),
                                e$1("div", __assign({ "class": COUNTER_SECTION_CLASS }, { children: [e$1("div", __assign({ "class": COUNTER_SECTION_TITLE_CLASS }, { children: "Counter info" }), void 0),
                                        e$1("div", __assign({ "class": COUNTER_SECTION_CONTENT_CLASS }, { children: [e$1("div", { children: ["Clickmap: ", clickmap ? 'on' : 'off'] }, void 0),
                                                e$1("div", { children: ["Publisher analytics: ", publisherSchema ? 'on' : 'off'] }, void 0),
                                                publisherSchema && e$1("div", { children: ["Publisher schema: ", publisherSchema] }, void 0)] }), void 0)] }), void 0)] }), void 0));
                    }, counters) }, void 0));
            };
            CountersTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'counter':
                        this.addCounter(event.data);
                        break;
                    case 'counterSettings':
                        this.setCounterSettings(event.data);
                        break;
                    case 'webvisor':
                        this.setWebvisorData(event.data);
                        break;
                }
            };
            return CountersTabComponent;
        }(_)),
        _a$i.tabName = 'counters',
        _a$i.styles = COUNTERS_TAB_STYLES,
        _a$i.windowStyles = [],
        _a$i) ;
    var CountersTabComponent = countersTabComponent;

    var PUBLISHER_INFO_CLASS = BASE_PREFIX + "PublisherInfo";
    var PUBLISHER_INFO_HEADER_CLASS = PUBLISHER_INFO_CLASS + "Header";
    var PUBLISHER_CONTENT_CLASS = PUBLISHER_INFO_CLASS + "Content";
    var PUBLISHER_CONTENT_TITLE_CLASS = PUBLISHER_CONTENT_CLASS + "Title";
    var PUBLISHER_CONTENT_ROW_CLASS = PUBLISHER_CONTENT_CLASS + "Row";
    var HIGHLIGHT_ELEMENT_CLASS = BASE_PREFIX + "Highlight";
    var PUBLISHER_TAB_STYLES = [
        "." + PUBLISHER_INFO_CLASS + " {\n        border-bottom: grey solid 1px;\n    }",
        "." + PUBLISHER_CONTENT_CLASS + " {\n        border-top: grey solid 1px;\n        cursor: pointer;\n    }",
        "." + PUBLISHER_CONTENT_ROW_CLASS + " {\n        border-top: grey solid 1px;\n        padding-left: 5px;\n    }",
        "." + PUBLISHER_CONTENT_TITLE_CLASS + " {\n        padding: 5px;\n        background-color: " + LIGHT_YELLOW_COLOR + ";\n    }",
        "." + PUBLISHER_INFO_HEADER_CLASS + " {\n        font-size: 20px;\n        padding: 5px;\n        background-color: " + YELLOW_COLOR + ";\n    }",
    ];
    var HIGHLIGHT_ELEMENT_STYLES = [
        "." + HIGHLIGHT_ELEMENT_CLASS + " {\n        z-index: 999 !important;\n        opacity: 0.3 !important;\n        background-color: " + YELLOW_COLOR + " !important;\n        position: fixed !important;\n    }",
    ];

    var _a$j;
    var publisherTabComponent =  (_a$j = /** @class */ (function (_super) {
            __extends(PublisherTabComponent, _super);
            function PublisherTabComponent() {
                var _this = _super.call(this) || this;
                _this.initPublishers = function (data) {
                    var _a;
                    var key = data.key, settings = data.settings;
                    var schema = getPath(settings, 'settings.publisher.schema');
                    if (schema) {
                        var publishers = mix({}, _this.state.publishers, (_a = {},
                            _a[key] = {
                                schema: schema,
                                contentItems: [],
                                involvedTime: 0,
                            },
                            _a));
                        _this.setState({ publishers: publishers });
                    }
                };
                _this.scrollToContentItem = function (contentItem) {
                    contentItem.contentElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                };
                _this.highlightContentItem = function (element) {
                    if (element) {
                        _this.highlightedElement = element;
                    }
                    if (_this.highlightedElement) {
                        var rect = getBoundingClientRect(_this.highlightedElement);
                        if (rect) {
                            var ctx = _this.props.ctx;
                            var debuggerHeight = ctx.document.querySelector("." + CONTENT_CLASS).clientHeight;
                            var windowHeight = ctx.innerHeight;
                            var top_1 = rect.top, left = rect.left, height = rect.height, width = rect.width;
                            var resultingHeight = top_1 + height > windowHeight - debuggerHeight
                                ? windowHeight - top_1 - debuggerHeight
                                : height;
                            _this.highlightElement.setAttribute('style', "width: " + width + "px; height: " + resultingHeight + "px; display: block; top: " + top_1 + "px; left: " + left + "px;");
                        }
                    }
                };
                _this.removeHighlight = function () {
                    _this.highlightElement.setAttribute('style', 'display: none');
                    _this.highlightedElement = undefined;
                };
                _this.onPublisherInfoRecieved = function (data) {
                    var _a;
                    var counterKey = data.counterKey, contentItems = data.contentItems, involvedTime = data.involvedTime;
                    var originalState = _this.state.publishers[counterKey];
                    if (originalState) {
                        var expandedContentItems = /* @__PURE__ */ cMap(function (contentItem) {
                            return mix({
                                fullSearchString: /* @__PURE__ */ arrayJoin(' ', [
                                    contentItem['pageUrlCanonical'],
                                    contentItem['pageTitle'],
                                    _this.getItemsString(' ', contentItem['authors']),
                                    _this.getItemsString(' ', contentItem['rubric'])
                                ]),
                            }, contentItem);
                        }, contentItems);
                        var publishers = mix(_this.state.publishers, (_a = {},
                            _a[counterKey] = mix({}, originalState, {
                                contentItems: expandedContentItems,
                                involvedTime: involvedTime,
                            }),
                            _a));
                        _this.setState({ publishers: publishers });
                    }
                };
                _this.getItemsString = function (join, items) {
                    if (!items || !items) {
                        return '';
                    }
                    var ctx = _this.props.ctx;
                    var sortedItems = cSort(function (item1, item2) {
                        if (isNumber(ctx, item1['position']) && isNumber(ctx, item2['position'])) {
                            return item1['position'] - item2['position'];
                        }
                        return 0;
                    }, items);
                    return /* @__PURE__ */ arrayJoin(join, /* @__PURE__ */ cMap(function (item) { return item['name']; }, sortedItems));
                };
                _this.isHidden = function (counterId, contentItem) {
                    var searchString = _this.state.searchString;
                    if (!searchString) {
                        return false;
                    }
                    if (stringIncludes(counterId, searchString)) {
                        return false;
                    }
                    return stringIncludes(contentItem.fullSearchString.toLowerCase(), searchString.toLowerCase());
                };
                _this.formatDate = function (date) {
                    try {
                        var parsedDate = new Date(date);
                        return parsedDate.getFullYear() + "." + parsedDate.getMonth() + "." + parsedDate.getDay() + " " + parsedDate.getHours() + ":" + parsedDate.getMinutes();
                    }
                    catch (e) {
                        return date;
                    }
                };
                _this.renderContentItem = function (coutnerId, contentItem) {
                    return (e$1("div", __assign({ hidden: _this.isHidden(coutnerId, contentItem), "class": PUBLISHER_CONTENT_CLASS, onMouseEnter: function () { return _this.highlightContentItem(contentItem.contentElement); }, onMouseLeave: _this.removeHighlight, onClick: function () { return _this.scrollToContentItem(contentItem); } }, { children: [e$1("div", __assign({ "class": PUBLISHER_CONTENT_TITLE_CLASS }, { children: contentItem['pageTitle'] }), void 0),
                             e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Id: ", contentItem['id']] }), void 0),
                            e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Involved time: ", contentItem['involvedTime'] / 1000, "s"] }), void 0),
                            contentItem['publicationDate'] &&
                                e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Publication date: ", _this.formatDate(contentItem['publicationDate'])] }), void 0),
                            contentItem['updateDate'] &&
                                e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Update date: ", _this.formatDate(contentItem['updateDate'])] }), void 0),
                            contentItem['authors'] && !!contentItem['authors'].length && e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Author", contentItem['authors'].length > 1 ? 's' : '', ": ", _this.getItemsString(', ', contentItem['authors'])] }), void 0),
                            contentItem['pageUrlCanonical']
                                && e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: ["Canonical url: ", contentItem['pageUrlCanonical']] }), void 0),
                            contentItem['rubric'] && !!contentItem['rubric'].length
                                && e$1("div", __assign({ "class": PUBLISHER_CONTENT_ROW_CLASS }, { children: _this.getItemsString(' > ', contentItem['rubric']) }), void 0)] }), void 0));
                };
                _this.componentWillMount = function () {
                    var document = _this.props.ctx.document;
                    var debuggerElement = document.querySelector("." + DEBUGGER_CLASS);
                    _this.highlightElement = document.createElement('div');
                    _this.highlightElement.setAttribute('class', HIGHLIGHT_ELEMENT_CLASS);
                    _this.highlightElement.setAttribute('style', 'display: none');
                    debuggerElement.prepend(_this.highlightElement);
                    cEvent(_this.props.ctx).on(_this.props.ctx, ['scroll'], function () {
                        _this.highlightContentItem();
                    });
                };
                _this.state = {
                    searchString: null,
                    publishers: {},
                };
                return _this;
            }
            PublisherTabComponent.prototype.render = function (props, state) {
                var _this = this;
                var publishers = state.publishers;
                var countersAnalytics = entries(publishers);
                return (e$1("div", __assign({ "class": PUBLISHER_INFO_CLASS }, { children: [!!countersAnalytics.length && /* @__PURE__ */ cMap(function (_a) {
                            var key = _a[0], publishersState = _a[1];
                            var contentItems = publishersState.contentItems, involvedTime = publishersState.involvedTime, schema = publishersState.schema;
                            var involvedTimeSeconds = involvedTime / 1000;
                            var counterId = key.split(':')[0];
                            return (e$1("div", { children: [e$1("div", __assign({ "class": PUBLISHER_INFO_HEADER_CLASS }, { children: [e$1("div", { children: ["Counter ", counterId, " schema: ", schema] }, void 0),
                                            !!contentItems.length
                                                && e$1("div", { children: ["Involved page time ", involvedTimeSeconds, "s"] }, void 0)] }), void 0),
                                    !contentItems.length
                                        && e$1("div", __assign({ "class": PUBLISHER_CONTENT_CLASS }, { children: "No publisher content found" }), void 0),
                                    /* @__PURE__ */ cMap(function (item) { return _this.renderContentItem(counterId, item); }, contentItems)] }, void 0));
                        }, countersAnalytics),
                        !countersAnalytics.length && e$1("div", { children: "Publishers analytics is disabled" }, void 0)] }), void 0));
            };
            PublisherTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'counterSettings':
                        this.initPublishers(event.data);
                        break;
                    case 'publishers':
                        this.onPublisherInfoRecieved(event.data);
                        break;
                    case 'search':
                        this.setState({
                            searchString: event.data,
                        });
                        break;
                }
            };
            return PublisherTabComponent;
        }(_)),
        _a$j.tabName = 'publishers',
        _a$j.styles = PUBLISHER_TAB_STYLES,
        _a$j.windowStyles = HIGHLIGHT_ELEMENT_STYLES,
        _a$j) ;
    var PublisherTabComponent = publisherTabComponent;

    var ERROR_CLASS = BASE_PREFIX + "Error";
    var ERROR_TTILE_CLASS = ERROR_CLASS + "Title";
    var ERROR_SCOPE_CLASS = ERROR_CLASS + "Scope";
    var ERROR_STACK_CLASS = ERROR_CLASS + "Stack";
    var ERRORS_TAB_STYLES = [
        "." + ERROR_CLASS + " {\n        border-bottom: grey solid 1px;\n        background-color: lightpink;\n    }",
        "." + ERROR_TTILE_CLASS + " {\n        font-size: 18px;\n    }",
        "." + ERROR_CLASS + " {\n        border-bottom: grey solid 1px;\n        background-color: lightpink;\n    }",
        "." + ERROR_SCOPE_CLASS + " {\n        font-weight: bold;\n        margin-right: 5px;\n    }",
        "." + ERROR_STACK_CLASS + " {\n        margin: 0;\n    }",
    ];

    var _a$k;
    var errorTabComponent =  (_a$k = /** @class */ (function (_super) {
            __extends(ErrorTabComponent, _super);
            function ErrorTabComponent() {
                var _this = _super.call(this) || this;
                _this.state = {
                    searchString: null,
                    errors: [],
                };
                return _this;
            }
            ErrorTabComponent.prototype.isHidden = function (err) {
                var error = err.error, scopeName = err.scopeName;
                var fullString = error instanceof Error
                    ? error.message + " " + error.stack
                    : /* @__PURE__ */ convertToString(error);
                return !!this.state.searchString &&
                    !stringIncludes((fullString + " " + scopeName).toLocaleLowerCase(), this.state.searchString.toLocaleLowerCase());
            };
            ErrorTabComponent.prototype.render = function (props, state) {
                var _this = this;
                var errors = state.errors;
                return (e$1("div", { children: /* @__PURE__ */ cMap(function (err) {
                        var error = err.error, scopeName = err.scopeName;
                        var isErrorObject = error instanceof Error;
                        return (e$1("div", __assign({ "class": ERROR_CLASS, hidden: _this.isHidden(err) }, { children: [e$1("div", __assign({ "class": ERROR_TTILE_CLASS }, { children: [e$1("span", __assign({ "class": ERROR_SCOPE_CLASS }, { children: scopeName }), void 0),
                                        isErrorObject
                                            ? error.message
                                            : /* @__PURE__ */ convertToString(error)] }), void 0),
                                isErrorObject && e$1("pre", __assign({ "class": ERROR_STACK_CLASS }, { children: error.stack }), void 0)] }), void 0));
                    }, errors) }, void 0));
            };
            ErrorTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'clear':
                        this.setState({
                            errors: [],
                        });
                        break;
                    case 'search':
                        this.setState({ searchString: event.data });
                        break;
                    case 'error':
                        this.setState({
                            errors: this.state.errors.concat(event.data),
                        });
                        break;
                }
            };
            return ErrorTabComponent;
        }(_)),
        _a$k.tabName = 'errors',
        _a$k.styles = ERRORS_TAB_STYLES,
        _a$k.windowStyles = [],
        _a$k) ;
    var ErrorTabComponent = errorTabComponent;

    var PARAMS_TAB_CLASS_NAME = BASE_PREFIX + "ParamsTab";
    var PARAMS_HEADER_CLASS_NAME = PARAMS_TAB_CLASS_NAME + "Header";
    var PARAMS_ROW_CLASS_NAME = PARAMS_TAB_CLASS_NAME + "Row";
    var PARAMS_COUNTER_NAME = PARAMS_TAB_CLASS_NAME + "Counter";
    var PARAMS_TAB_STYLES = [
        "." + PARAMS_COUNTER_NAME + " {\n        border-botton: 2px solid grey;\n    }",
        "." + PARAMS_HEADER_CLASS_NAME + " {\n        padding: 5px;\n        background-color: " + YELLOW_COLOR + ";\n        font-size: 15px;\n    }",
        "." + PARAMS_HEADER_CLASS_NAME + " button {\n        margin-left: 3px;\n        background-color: " + DARK_GREY_COLOR + ";\n        color: " + YELLOW_COLOR + ";\n        font-size: 15px;\n    }",
        "." + PARAMS_ROW_CLASS_NAME + " {\n        padding: 5px;\n        background-color: " + LIGHT_YELLOW_COLOR + ";\n    }",
    ];

    var _a$l;
    var paramsTabComponent =  (_a$l = /** @class */ (function (_super) {
                __extends(ParametersTabComponent, _super);
                function ParametersTabComponent() {
                    var _this = _super.call(this) || this;
                    _this.addParams = function (eventData) {
                        var _a;
                        var params = mix({}, eventData.val);
                        if (!cKeys(params).length) {
                            return;
                        }
                        var counterKey = eventData.counterKey;
                        if (!_this.state.counters[counterKey]) {
                            _this.state.counters[counterKey] = {
                                params: {},
                                paramsStringified: '',
                                rawParams: [],
                                rawParamsStringified: [],
                                expanded: false,
                            };
                        }
                        var counterState = mix({}, _this.state.counters[counterKey]);
                        counterState.rawParams = counterState.rawParams.concat(params);
                        counterState.rawParamsStringified.push(JSON.stringify(params, null, 2));
                        counterState.params = _this.combineParams(counterState.params, params);
                        counterState.paramsStringified = JSON.stringify(counterState.params, null, 2);
                        _this.setState({
                            counters: mix(_this.state.counters, (_a = {},
                                _a[counterKey] = counterState,
                                _a)),
                        });
                    };
                    _this.combineParams = function (params, newParams) {
                        var result = mix({}, params);
                        cForEach(function (_a) {
                            var key = _a[0], param = _a[1];
                            if (isObject(result[key]) && isObject(param)) {
                                result[key] = _this.combineParams(result[key], param);
                            }
                            else {
                                result[key] = param;
                            }
                        }, entries(newParams));
                        return result;
                    };
                    _this.toggleCounterView = function (counterKey) {
                        var _a;
                        var counterState = mix({}, _this.state.counters[counterKey]);
                        counterState.expanded = !counterState.expanded;
                        _this.setState({
                            counters: mix(_this.state.counters, (_a = {},
                                _a[counterKey] = counterState,
                                _a)),
                        });
                    };
                    _this.clear = function () {
                        var counters = _this.state.counters;
                        var newCounters = {};
                        cForEach(function (_a) {
                            var counterKey = _a[0], counter = _a[1];
                            newCounters[counterKey] = mix({}, counter, {
                                rawParams: [],
                                rawParamsStringified: [],
                            });
                        }, entries(counters));
                        _this.setState({ counters: newCounters });
                    };
                    _this.state = { searchString: null, counters: {} };
                    return _this;
                }
                ParametersTabComponent.prototype.dispatchEvent = function (event) {
                    switch (event.name) {
                        case 'params':
                            this.addParams(event.data);
                            break;
                        case 'search':
                            this.setState({ searchString: event.data });
                            break;
                        case 'clear':
                            this.clear();
                            break;
                    }
                };
                ParametersTabComponent.prototype.render = function () {
                    var _this = this;
                    var searchString = this.state.searchString;
                    var countersList = entries(this.state.counters);
                    return (e$1("div", __assign({ "class": PARAMS_TAB_CLASS_NAME }, { children: [!countersList.length && e$1("div", __assign({ "class": PARAMS_ROW_CLASS_NAME }, { children: "No params sent" }), void 0),
                            /* @__PURE__ */ cMap(function (_a) {
                                var counterKey = _a[0], counter = _a[1];
                                var counterId = counterKey.split(':')[0];
                                var params = counter.params, expanded = counter.expanded, rawParams = counter.rawParams, rawParamsStringified = counter.rawParamsStringified, paramsStringified = counter.paramsStringified;
                                var hasParams = !!cKeys(params).length;
                                var fullString = counterId + " " + /* @__PURE__ */ arrayJoin(' ', rawParamsStringified);
                                var isHidden = searchString && !stringIncludes(fullString, searchString);
                                return (e$1("div", __assign({ hidden: !!isHidden, "class": PARAMS_COUNTER_NAME }, { children: [e$1("div", __assign({ "class": PARAMS_HEADER_CLASS_NAME }, { children: ["Counter: ", counterId, e$1("button", __assign({ onClick: function () { return _this.toggleCounterView(counterKey); } }, { children: expanded ? 'Show combined params' : 'Show individual events' }), void 0)] }), void 0),
                                        e$1("div", __assign({ hidden: expanded }, { children: hasParams && e$1("pre", { children: paramsStringified }, void 0) }), void 0),
                                        e$1("div", __assign({ hidden: !expanded }, { children: [!rawParams.length
                                                    && e$1("div", __assign({ "class": PARAMS_ROW_CLASS_NAME }, { children: "No new params sent" }), void 0),
                                                /* @__PURE__ */ cMap(function (searializedParam) {
                                                    return (e$1("pre", { children: searializedParam }, void 0));
                                                }, rawParamsStringified)] }), void 0)] }), void 0));
                            }, countersList)] }), void 0));
                };
                return ParametersTabComponent;
            }(_)),
            _a$l.tabName = 'parameters',
            _a$l.styles = PARAMS_TAB_STYLES,
            _a$l.windowStyles = [],
            _a$l) ;
    var ParametersTabComponent = paramsTabComponent;

    var ECOMMERCE_TAB_CLASS = BASE_PREFIX + "Ecommerce";
    var ECOMMERCE_TAB_ROW = ECOMMERCE_TAB_CLASS + "EcommRow";
    var ECOMMERCE_TAB_HEADER = ECOMMERCE_TAB_CLASS + "Header";
    var ECOMMERCE_SEGMENT = ECOMMERCE_TAB_CLASS + "Segment";
    var ECOMMERCE_SEGMENT_HEADER = ECOMMERCE_SEGMENT + "Header";
    var ECOMMERCE_SEGMENT_DATA = ECOMMERCE_SEGMENT + "Data";
    var ECOMMERCE_SEGMENT_ITEM_CLASS = ECOMMERCE_SEGMENT + "Item";
    var ECOMMERCE_SEGMENT_ITEM_HEADER_CLASS = ECOMMERCE_SEGMENT_ITEM_CLASS + "Header";
    var ECOMMERCE_TAB_STYLES = [
        "." + ECOMMERCE_TAB_HEADER + " {\n        background-color: " + YELLOW_COLOR + ";\n        padding: 5px;\n        font-size: 15px;\n    }\n    ." + ECOMMERCE_TAB_HEADER + " button {\n        background-color: " + DARK_GREY_COLOR + ";\n        color: " + YELLOW_COLOR + ";\n        padding: 5px;\n        font-size: 15px;\n    }\n    ." + ECOMMERCE_SEGMENT_HEADER + " {\n        border-bottom: grey solid 1px;\n        font-weight: bold;\n        background-color: " + LIGHT_YELLOW_COLOR + ";\n        padding: 5px;\n    }\n    ." + ECOMMERCE_SEGMENT_ITEM_CLASS + " {\n        padding: 5px;\n    }\n    ." + ECOMMERCE_SEGMENT_ITEM_HEADER_CLASS + " {\n        font-weight: bold;\n    }\n    ",
    ];

    var _a$m;
    var actions = exclude(ECOMMERCE_ALLOWED_EVENTS, [ECOMMERCE_CURRENCY]);
    var rowRender = function (onClickHandler, el) {
        var actionField = el.actionField, viewRaw = el.viewRaw, products = el.products, dataStringified = el.dataStringified;
        var isHidden = el.isHidden;
        return e$1("div", __assign({ hidden: isHidden, className: ECOMMERCE_TAB_ROW }, { children: [e$1("div", __assign({ "class": ECOMMERCE_TAB_HEADER }, { children: ["Action type: \"", el.eventName, "\"", e$1("button", __assign({ onClick: onClickHandler.bind(null, el) }, { children: viewRaw ? "Show fomatted" : "Show raw" }), void 0)] }), void 0),
                e$1("div", { children: [e$1("pre", __assign({ hidden: !viewRaw }, { children: dataStringified }), void 0),
                        e$1("div", __assign({ hidden: viewRaw }, { children: [e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_HEADER }, { children: "Products:" }), void 0),
                                e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_DATA }, { children: /* @__PURE__ */ cMap(function (product) {
                                        var id = product['id'];
                                        var name = product['name'];
                                        var price = product['price'];
                                        var brand = product['brand'];
                                        var variant = product['variant'];
                                        var categories = isArray(product['category'])
                                            ? product['category']
                                            : [product['category']];
                                        var promotionId = product['promotion_id'];
                                        var coupon = product['coupon'];
                                        var quantity = product['quantity'];
                                        var itemPrice = product['item_price'];
                                        var itemCoupon = product['item_coupon'];
                                        var creativeName = product['creative_name'];
                                        var creativeSlot = product['creative_slot'];
                                        var locationId = product['location_id'];
                                        var hasTitle = name || name || variant;
                                        return e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_ITEM_CLASS }, { children: [!!hasTitle && e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_ITEM_HEADER_CLASS }, { children: [name, " ", creativeName ? "(" + creativeName + ")" : '', " ", variant ? "variant: " + variant : ''] }), void 0),
                                                id && e$1("div", { children: ["Id: ", id] }, void 0),
                                                itemPrice && e$1("div", { children: ["Item price: ", itemPrice] }, void 0),
                                                quantity && e$1("div", { children: ["Quantity: ", quantity] }, void 0),
                                                price && e$1("div", { children: ["Price: ", price] }, void 0),
                                                brand && e$1("div", { children: ["Brand: ", brand] }, void 0),
                                                product['category'] && e$1("div", { children: ["Categories: ", categories.join(', ')] }, void 0),
                                                promotionId && e$1("div", { children: ["Promotion id: ", promotionId] }, void 0),
                                                locationId && e$1("div", { children: ["Location id: ", locationId] }, void 0),
                                                coupon && e$1("div", { children: ["Coupon: ", coupon] }, void 0),
                                                itemCoupon && e$1("div", { children: ["Item coupon: ", itemCoupon] }, void 0),
                                                creativeSlot && e$1("div", { children: ["Creative slot: ", creativeSlot] }, void 0)] }), void 0);
                                    }, products) }), void 0)] }), void 0),
                        actionField && e$1("div", { children: [e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_HEADER }, { children: "Action:" }), void 0),
                                e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_DATA }, { children: (function () {
                                        var id = actionField['id'];
                                        var affiliation = actionField['affiliation'];
                                        var revenue = actionField['revenue'];
                                        var tax = actionField['tax'];
                                        var shipping = actionField['shipping'];
                                        var coupon = actionField['coupon'];
                                        return e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_ITEM_CLASS }, { children: [id && e$1("div", __assign({ "class": ECOMMERCE_SEGMENT_ITEM_HEADER_CLASS }, { children: ["Id: ", id] }), void 0),
                                                affiliation && e$1("div", { children: ["Affiliation: ", affiliation] }, void 0),
                                                revenue && e$1("div", { children: ["Revenue: ", revenue] }, void 0),
                                                tax && e$1("div", { children: ["Tax: ", tax] }, void 0),
                                                shipping && e$1("div", { children: ["Shipping: ", shipping] }, void 0),
                                                coupon && e$1("div", { children: ["Coupon: ", coupon] }, void 0)] }), void 0);
                                    })() }), void 0)] }, void 0)] }, void 0)] }), void 0);
    };
    var ecommerceTabComponent =  (_a$m = /** @class */ (function (_super) {
                __extends(ParametersTabComponent, _super);
                function ParametersTabComponent() {
                    var _this = _super.call(this) || this;
                    _this.state = { list: [] };
                    return _this;
                }
                ParametersTabComponent.prototype.append = function (data, state) {
                    var eventName = /* @__PURE__ */ cFind(function (eventName) { return data[eventName]; }, actions);
                    var actionInfo = data[ECOMMERCE_ACTION_FIELD];
                    try {
                        var prods = data[eventName]['products'];
                        var result = {
                            eventName: eventName,
                            products: prods,
                            dataStringified: JSON.stringify(data[eventName], null, 2),
                            productsLength: prods.length,
                            actionField: actionInfo,
                        };
                        return {
                            list: state.list.concat(result),
                        };
                    }
                    catch (e) {
                        return state;
                    }
                };
                ParametersTabComponent.prototype.search = function (searchString, state) {
                    return {
                        list: /* @__PURE__ */ cMap(function (el) {
                            var fullString = /* @__PURE__ */ arrayJoin(' ', [
                                el.eventName,
                                el.dataStringified,
                            ]);
                            if (!searchString) {
                                el.isHidden = false;
                                return el;
                            }
                            el.isHidden = !stringIncludes(fullString, searchString);
                            return el;
                        }, state.list),
                    };
                };
                ParametersTabComponent.prototype.toggle = function (el) {
                    this.setState(function (state) {
                        el.viewRaw = !el.viewRaw;
                        return state;
                    });
                };
                ParametersTabComponent.prototype.dispatchEvent = function (event) {
                    switch (event.name) {
                        case 'ecommerce':
                            this.setState(this.append.bind(this, event.data));
                            break;
                        case 'search':
                            this.setState(this.search.bind(this, event.data));
                            break;
                        case 'clear':
                            this.setState({
                                list: [],
                            });
                            break;
                    }
                };
                ParametersTabComponent.prototype.render = function () {
                    return (e$1("div", __assign({ className: ECOMMERCE_TAB_HEADER }, { children: [!this.state.list.length && (e$1("div", { children: "No ecommerce events found" }, void 0)), /* @__PURE__ */ cMap(rowRender.bind(this, this.toggle.bind(this)), this.state.list)] }), void 0));
                };
                return ParametersTabComponent;
            }(_)),
            _a$m.tabName = 'ecommerce',
            _a$m.styles = ECOMMERCE_TAB_STYLES,
            _a$m.windowStyles = [],
            _a$m) ;
    var EcommerceTabComponent = ecommerceTabComponent;

    var EVENT_CLASS = BASE_PREFIX + "Event";
    var EVENT_HEADER_CLASS = EVENT_CLASS + "Header";
    var EVENT_BODY_CLASS = EVENT_CLASS + "Body";
    var EVENTS_TAB_STYLES = [
        "." + EVENT_CLASS + " {\n        border-bottom: solid 1px " + DARK_GREY_COLOR + ";\n    }",
        "." + EVENT_HEADER_CLASS + " {\n        font-size: 18px;\n        padding: 5px;\n        background-color: " + YELLOW_COLOR + ";\n        border-bottom: solid 1px " + DARK_GREY_COLOR + ";\n    }",
        "." + EVENT_BODY_CLASS + " {\n        padding: 3px;\n        backgroind-color: " + LIGHT_GREY_COLOR + ";\n    }",
    ];

    var _a$n;
    var eventsTabComponent =  (_a$n = /** @class */ (function (_super) {
            __extends(EventsTabComponent, _super);
            function EventsTabComponent() {
                var _this = _super.call(this) || this;
                _this.state = {
                    searchString: null,
                    events: [],
                };
                return _this;
            }
            EventsTabComponent.prototype.pushEvent = function (event) {
                var newEvent = mix(event, {
                    isHidden: this.isHidden(event),
                });
                var events = this.state.events.concat(newEvent);
                this.setState({
                    events: events,
                });
            };
            EventsTabComponent.prototype.isHidden = function (event, searchString) {
                if (searchString === void 0) { searchString = this.state.searchString; }
                var counterKey = event.counterKey, name = event.name, schema = event.schema;
                return !!searchString &&
                    !stringIncludes((counterKey + " " + name + " " + schema).toLocaleLowerCase(), searchString.toLocaleLowerCase());
            };
            EventsTabComponent.prototype.search = function (searchString) {
                var _this = this;
                var events = /* @__PURE__ */ cMap(function (event) {
                    event.isHidden = _this.isHidden(event, searchString);
                    return event;
                }, this.state.events);
                this.setState({
                    searchString: searchString,
                    events: events,
                });
            };
            EventsTabComponent.prototype.render = function (props, state) {
                return (e$1("div", { children: [!state.events.length && e$1("div", __assign({ "class": EVENT_HEADER_CLASS }, { children: "No goals or form submits so far" }), void 0),
                        /* @__PURE__ */ cMap(function (event) {
                            var name = event.name, schema = event.schema, counterKey = event.counterKey, isHidden = event.isHidden;
                            var counterId = counterKey.split(':')[0];
                            var isGoal = schema === 'goal';
                            var isFormSubmit = schema === 'form';
                            var isButtonPressed = schema === 'btn';
                            return e$1("div", __assign({ hidden: isHidden, "class": EVENT_CLASS }, { children: [e$1("div", __assign({ "class": EVENT_HEADER_CLASS }, { children: ["Counter: ", counterId] }), void 0),
                                    e$1("div", __assign({ "class": EVENT_BODY_CLASS }, { children: [isGoal && 'Goal reach', isFormSubmit && 'Form submitted', isButtonPressed && 'Button goal, button', !isGoal && !isFormSubmit && !isButtonPressed && schema, ': ', name] }), void 0)] }), void 0);
                        }, state.events)] }, void 0));
            };
            EventsTabComponent.prototype.dispatchEvent = function (event) {
                switch (event.name) {
                    case 'event':
                        this.pushEvent(event.data);
                        break;
                    case 'search':
                        this.search(event.data);
                        break;
                    case 'clear':
                        this.setState({
                            events: [],
                        });
                        break;
                }
            };
            return EventsTabComponent;
        }(_)),
        _a$n.tabName = 'events',
        _a$n.styles = EVENTS_TAB_STYLES,
        _a$n.windowStyles = [],
        _a$n) ;
    var EventsTabComponent = eventsTabComponent;

    var tabs = /* @__PURE__ */ cFilter(Boolean, [
        CountersTabComponent,
        PublisherTabComponent,
        EcommerceTabComponent,
        ParametersTabComponent,
        EventsTabComponent,
        RequestTabComponent,
        ConsoleTabComponent,
        ErrorTabComponent,
    ]);

    var debuggerLayoutComponent =  /** @class */ (function (_super) {
        __extends(DebuggerInnerLayoutComponent, _super);
        function DebuggerInnerLayoutComponent() {
            var _this = _super.call(this) || this;
            _this.tabRefsMap = {};
            _this.timeoutId = 0;
            _this.setActiveTab = function (index) {
                _this.setState({
                    activeTab: index,
                });
            };
            _this.clear = function () {
                _this.dispatchEvent({
                    name: 'clear',
                    data: null,
                });
            };
            _this.search = function (event) {
                clearTimeout(_this.timeoutId);
                _this.timeoutId = setTimeout(function () {
                    var val = event.target.value;
                    _this.dispatchEvent({
                        name: 'search',
                        data: val,
                    });
                }, 100);
            };
            _this.dispatchEvent = function (event) {
                cForEach(function (_a) {
                    var name = _a[0], tabRef = _a[1];
                    tabRef.current.dispatchEvent(event);
                }, entries(_this.tabRefsMap));
            };
            _this.state = { activeTab: 0 };
            cForEach(function (TabClass) {
                _this.tabRefsMap[TabClass.tabName] = p();
            }, tabs);
            return _this;
        }
        DebuggerInnerLayoutComponent.prototype.componentDidMount = function () {
            var _this = this;
            var _a = this.props, ctx = _a.ctx, events = _a.events;
            dataLayerObserver(ctx, events, function (observer) {
                observer.on(function (event) {
                    _this.dispatchEvent(event);
                    setDefer(ctx, function () {
                        events.splice(0, _this.props.events.length);
                    }, 100);
                });
            });
        };
        DebuggerInnerLayoutComponent.prototype.render = function (props, state) {
            var _this = this;
            var activeTab = state.activeTab;
            var onClose = props.onClose, ctx = props.ctx;
            return (e$1("div", __assign({ "class": CONTENT_CLASS }, { children: [e$1("div", __assign({ "class": TOOLS_CONTAINER_CLASS }, { children: [/* @__PURE__ */ cMap(function (TabClass, index) {
                                return e$1("button", __assign({ "class": TABS_SELECTOR_CLASS, onClick: function () { return _this.setActiveTab(index); } }, { children: TabClass.tabName }), void 0);
                            }, tabs),
                            e$1("button", __assign({ "class": CLOSER_CLASS, onClick: onClose }, { children: "close" }), void 0),
                            e$1("input", { "class": SEARCH_CLASS, onInput: this.search, placeholder: 'search' }, void 0),
                            e$1("button", __assign({ "class": CLEAR_CLASS, onClick: this.clear }, { children: "clear" }), void 0)] }), void 0),
                    e$1("div", __assign({ "class": TABS_CLASS }, { children: e$1("div", __assign({ "class": TABS_CONTENT_CLASS }, { children: /* @__PURE__ */ cMap(function (TabClass, index) {
                                return e$1("div", __assign({ hidden: index !== activeTab }, { children: e$1(TabClass, { ctx: ctx, ref: _this.tabRefsMap[TabClass.tabName] }, void 0) }), void 0);
                            }, tabs) }), void 0) }), void 0)] }), void 0));
        };
        return DebuggerInnerLayoutComponent;
    }(_)) ;
    var DebuggerInnerLayoutComponent = debuggerLayoutComponent;

    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var createOpenerSVG = function (ctx) {
        var height = 45;
        var width = 45;
        var rectWidth = 15;
        var svg = ctx.document.createElementNS(SVG_NAMESPACE, 'svg');
        svg.setAttribute('width', height.toString());
        svg.setAttribute('height', width.toString());
        var g = ctx.document.createElementNS(SVG_NAMESPACE, 'g');
        svg.appendChild(g);
        var createSvgRect = function (rectHeight, color, position) {
            var rect = ctx.document.createElementNS(SVG_NAMESPACE, 'rect');
            rect.setAttribute('height', rectHeight.toString());
            rect.setAttribute('y', (height - rectHeight).toString());
            rect.setAttribute('width', rectWidth.toString());
            rect.setAttribute('x', (rectWidth * (position - 1)).toString());
            rect.setAttribute('fill', color);
            rect.setAttribute('stroke', color);
            g.appendChild(rect);
        };
        createSvgRect(15, RED_COLOR, 1);
        createSvgRect(30, BLUE_COLOR, 2);
        createSvgRect(45, YELLOW_COLOR, 3);
        return svg;
    };

    var createDebuggerOuterLayout = function (ctx) {
        var createElement = getElemCreateFunction(ctx);
        var makeElement = function (tag, className) {
            var element = createElement(tag);
            if (className) {
                element.setAttribute('class', className);
            }
            return element;
        };
        var debuggerLayout = makeElement('div', DEBUGGER_CLASS + " __ym_wv_ign");
        var nonFrameStyle = makeElement('style');
        debuggerLayout.appendChild(nonFrameStyle);
        var opener = makeElement('div', OPENER_CLASS);
        opener.appendChild(createOpenerSVG(ctx));
        debuggerLayout.appendChild(opener);
        var content = makeElement('div', CONTENT_CLASS + " " + HIDDEN_CLASS);
        debuggerLayout.appendChild(content);
        var resizer = makeElement('div', RESIZER_CLASS);
        content.appendChild(resizer);
        var iframe = makeElement('iframe', IFRAME_CLASS);
        iframe.setAttribute('target', 'about:blank');
        iframe.setAttribute(IGNORE_IFRAME_ATTRIBUTE, '1');
        content.appendChild(iframe);
        ctx.document.body.prepend(debuggerLayout);
        var frameBody = iframe.contentWindow.document.body;
        var frameStyles = makeElement('style');
        frameBody.appendChild(frameStyles);
        var reactRoot = makeElement('div');
        frameBody.appendChild(reactRoot);
        return {
            debuggerLayout: debuggerLayout,
            opener: opener,
            resizer: resizer,
            iframe: iframe,
            frameStyles: frameStyles,
            reactRoot: reactRoot,
            content: content,
            nonFrameStyle: nonFrameStyle,
        };
    };

    var setStyles = function (styleNode, styles) {
        var style = styles.join('\n');
        styleNode.innerText += "\n " + style;
    };
    var debuggerLayout = function (ctx) {
        var createElement = getElemCreateFunction(ctx);
        if (!createElement) {
            throw Error("Can't create debugger because create element function is broken");
        }
        // Creating layout
        var _a = createDebuggerOuterLayout(ctx), content = _a.content, nonFrameStyle = _a.nonFrameStyle, opener = _a.opener, iframe = _a.iframe, resizer = _a.resizer, reactRoot = _a.reactRoot, frameStyles = _a.frameStyles;
        var iframeCtx = iframe.contentWindow;
        // Setting styles
        setStyles(nonFrameStyle, NON_FRAME_STYLES);
        setStyles(frameStyles, FRAME_STYLES);
        cForEach(function (TabClass) {
            if (TabClass.windowStyles) {
                setStyles(nonFrameStyle, TabClass.windowStyles);
            }
            setStyles(frameStyles, TabClass.styles);
        }, tabs);
        var windowEventWrapper = cEvent(ctx);
        var iframeEventWrapper = cEvent(iframeCtx);
        // Close debugger
        var onClose = function () {
            opener.classList.toggle(HIDDEN_CLASS);
            content.classList.toggle(HIDDEN_CLASS);
        };
        // Set fullscreen size / resize to 1/3 of the screen
        var onExpand = function () {
            content.style.height = (content.clientHeight === ctx.innerHeight
                ? ctx.innerHeight / 3
                : ctx.innerHeight) + "px";
        };
        S(e$1(DebuggerInnerLayoutComponent, { events: getEvents(ctx), ctx: ctx, onClose: onClose, onExpand: onExpand }, void 0), reactRoot);
        // Here comes resize logic
        var mouseupUnsubscribe;
        var mouseupFrameUnsubscribe;
        var resizeUnsubscribe;
        var resizeFrameUnsubscribe;
        windowEventWrapper.on(opener, ['click', 'touchstart'], function () {
            content.classList.toggle(HIDDEN_CLASS);
            opener.classList.toggle(HIDDEN_CLASS);
            content.style.height = ctx.innerHeight / 3 + "px";
        });
        windowEventWrapper.on(ctx, ['mousedown'], function (event) {
            if (event.target === resizer) {
                var mouseupCallback = function () {
                    var functions = [
                        mouseupUnsubscribe,
                        mouseupFrameUnsubscribe,
                        resizeUnsubscribe,
                        resizeFrameUnsubscribe,
                    ];
                    cForEach(function (unsubscribe) {
                        if (unsubscribe) {
                            unsubscribe();
                        }
                    }, functions);
                };
                mouseupUnsubscribe = windowEventWrapper.on(ctx, ['mouseup'], mouseupCallback);
                mouseupFrameUnsubscribe = iframeEventWrapper.on(iframeCtx, ['mouseup'], mouseupCallback);
                resizeUnsubscribe = windowEventWrapper.on(ctx, ['mousemove'], function (e) {
                    content.style.height = ctx.innerHeight - e.clientY + "px";
                    e.stopPropagation();
                });
                resizeFrameUnsubscribe = iframeEventWrapper.on(iframeCtx, ['mousemove'], function (e) {
                    content.style.height = iframe.clientHeight - e.clientY - 10 + "px";
                    e.stopPropagation();
                });
                event.stopPropagation();
            }
        });
    };

    var getDebuggerProvider = globalMemoWin('debugger', function (ctx) {
        waitForBody(ctx).then(function () {
            debuggerLayout(ctx);
        });
    });

    var replaceState = function (ctx, url, stateObj) {
        var _a;
        if (((_a = ctx === null || ctx === void 0 ? void 0 : ctx.history) === null || _a === void 0 ? void 0 : _a.replaceState) &&
            /* @__PURE__ */ isNativeFunction('replaceState', ctx.history.replaceState)) {
            ctx.history.replaceState(stateObj, '', url);
        }
    };

    var ysclidReg = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/;
    var replaceHrefParam = function (href) {
        return href.replace(ysclidReg, function (_, matches1, __, matches2) { return "" + matches1 + matches2; });
    };
    var ysclid = function (ctx) {
        var _a = getLocation(ctx), search = _a.search, href = _a.href;
        var hasYsclidParams = stringIncludes(search, 'ysclid');
        if (hasYsclidParams) {
            var newPath = replaceHrefParam(href);
            replaceState(ctx, newPath);
        }
    };
    var ysclidProvider = /* @__PURE__ */ ctxErrorLogger('yid.e', ysclid);

    var globalConfig = getGlobalStorage(window);
    globalConfig.setSafe(HIT_PARAMS_KEY, {});
    {
        globalConfig.setSafe(LAST_REFERRER_KEY, window.location.href);
    }
    {
        globalConfig.setSafe(GLOBAL_COUNTERS_METHOD_NAME, createCountersGetter(window));
    }
    {
        provideFake(fakeProvider);
    }
    var ASYNC_PROVIDERS_TIMEOUT = 10;
    // Надёжнее всего просто по одной таски запускать
    // Потому что там есть переходы из потоков выполнения которые
    // Не измеряются нормально
    var ASYNC_PROVIDERS_MAX_EXEC_TIME = 1;
    var MetrikaCounter = /** @class */ (function () {
        function MetrikaCounter(counterId, counterParams, counterType, counterDefer) {
            var _this = this;
            // eslint-disable-next-line consistent-return
            return errorLogger(window, 'c.i', function () {
                // eslint-disable-next-line no-restricted-globals
                if (!window || (isNaN(counterId) && !counterId)) {
                    // Браузер из ада, или настройки пустые
                    throwKnownError();
                }
                var ctx = window;
                var counterOptions = normalizeOptions(counterId, optionsKeysMap, counterParams, counterType, counterDefer);
                if (!counterOptions.id) {
                    consoleLog(ctx, "Invalid Metrika id: " + counterOptions.id);
                }
                var counterKey = getCounterKey(counterOptions);
                var counters = globalConfig.getVal(COUNTERS_GLOBAL_KEY, {});
                var unsubscribeMethods = [];
                var asyncProvidersInit = [];
                var decorators = [
                    errorsDecorator,
                    destructingDecorator,
                    selfReturnDecorator,
                ];
                {
                    decorators.unshift(telemetryCallCountDecorator);
                }
                var callProvider = function (fn) {
                    return destructingDecorator(ctx, counterOptions, '', fn)(ctx, counterOptions);
                };
                function decoratorPipeFn(method, methodName) {
                    return decoratorPipe(ctx, counterOptions, decorators, methodName, method);
                }
                if (counters[counterKey]) {
                    consoleLog(ctx, "Duplicate counter " + counterKey + " initialization");
                    return counters[counterKey];
                }
                var isRsyaCounterVal = false;
                {
                    var hitParams = globalConfig.getVal(HIT_PARAMS_KEY, {});
                    if (hitParams[counterKey]) {
                        isRsyaCounterVal = Boolean(isRsyaCounter(counterOptions.counterType) &&
                            !counters[counterKey]);
                    }
                    hitParams[counterKey] = 1;
                    /**
                     * Для определения в дополнении https://addons.mozilla.org/ru/firefox/addon/yandexmetrika/
                     * Есть ли у счётчика Вебвизор - window.Ya._metrika.counters['123456:0']._webvisor
                     *
                     * todo наверное стоит переделать плагин на использование .getCounters()
                     * а тут оторвать
                     */
                    // по-другому флаги не хотят инлайниться в некоторых случаях
                    // например при добавлении WEBVISOR1_ALWAYS_ENABLED в allFeatures
                    {
                        _this[WEBVISOR] = counterOptions.webvisor || false;
                    }
                }
                counters[counterKey] = _this;
                globalConfig.setVal(COUNTERS_GLOBAL_KEY, counters);
                globalConfig.setSafe('counter', _this);
                {
                    getDebuggerProvider(window);
                    dispatchDebuggerEvent(ctx, {
                        name: 'counter',
                        data: counterOptions,
                    });
                }
                {
                    var getCountersDestruct = getCountersProvider(window, counterOptions);
                    unsubscribeMethods.push(getCountersDestruct);
                }
                {
                    isEu(window);
                }
                {
                    if (useWatchSimple(window, counterOptions)) {
                        delete counters[counterKey];
                    }
                }
                // adblock
                {
                    callProvider(adBlock);
                }
                // тут важно вычислить fip до первого хита что он в него попал
                {
                    fingerPrint(ctx, [
                        canvasFactor,
                        pluginsFactor,
                        applePayFactor,
                        doNotTrack,
                        fontFactor,
                        navigatorFactor,
                        jsHeap,
                        getAvailScreen,
                        speechFactor,
                        videoFactor,
                        matchMediaFactor,
                    ]);
                }
                // console detector
                {
                    asyncProvidersInit.push(/* @__PURE__ */ bindArg(useConsoleDetectorRaw, callProvider));
                }
                // hit
                callProvider(useHitProvider);
                // retransmit
                {
                    asyncProvidersInit.push(/* @__PURE__ */ bindArg(useRetransmitProvider, callProvider));
                }
                // phone changer
                {
                    callProvider(usePhoneChangerProvider);
                }
                // phone hide
                {
                    callProvider(usePhoneHideProvider);
                }
                {
                    // artificial hit
                    _this[METHOD_NAME_HIT] = decoratorPipeFn(useArtificialHitProvider(ctx, counterOptions), METHOD_NAME_HIT)();
                }
                {
                    // params
                    _this[METHOD_NAME_PARAMS] = decoratorPipeFn(useParams(ctx, counterOptions), METHOD_NAME_PARAMS)();
                }
                {
                    // trackHash
                    var trackHashHandler = callProvider(useTrackHash);
                    unsubscribeMethods.push(getPath(trackHashHandler, deobfuscate({ unsubscribe: 1 })));
                    _this[METHOD_TRACK_HASH] = destructingDecorator(ctx, counterOptions, '', getPath(trackHashHandler, deobfuscate({ trackHandler: 1 })));
                }
                {
                    // goals
                    _this[METHOD_NAME_GOAL] = decoratorPipeFn(useGoal(ctx, counterOptions), METHOD_NAME_GOAL)();
                }
                {
                    // experiments
                    _this[METHOD_NAME_EXPERIMENTS] = decoratorPipeFn(useExperiments(ctx, counterOptions), METHOD_NAME_EXPERIMENTS)();
                }
                {
                    // trigger event
                    callProvider(useTriggerEvent);
                }
                {
                    asyncProvidersInit.push(/* @__PURE__ */ bindArg(usePublisherProvider, callProvider));
                }
                if (
                    !isRsyaCounterVal) {
                    asyncProvidersInit.push(/* @__PURE__ */ bindArg(useFormvisorProvider, callProvider));
                }
                {
                    // not bounce
                    var notBounceProvider = callProvider(useNotBounceProvider);
                    unsubscribeMethods.push(getPath(notBounceProvider, deobfuscate({ destroy: 1 })));
                    _this[METHOD_NAME_NOT_BOUNCE] = decoratorPipeFn(getPath(notBounceProvider, deobfuscate({ notBounce: 1 })), METHOD_NAME_NOT_BOUNCE)();
                    {
                        // accurateTrackBounce
                        _this[METHOD_NAME_ACCURATE_TRACK_BOUNCE] = decoratorPipeFn(getPath(notBounceProvider, deobfuscate({ accurateTrackBounce: 1 })), METHOD_NAME_ACCURATE_TRACK_BOUNCE)();
                    }
                }
                {
                    // yan money
                    callProvider(useYan);
                }
                {
                    // download / external link clicks
                    var linkMethods = callProvider(useClicksProvider);
                    unsubscribeMethods.push(getPath(linkMethods, deobfuscate({ destroy: 1 })));
                    _this[METHOD_NAME_EXTERNAL_LINK_CLICK] = decoratorPipeFn(getPath(linkMethods, deobfuscate({ extLink: 1 })), METHOD_NAME_EXTERNAL_LINK_CLICK)();
                    _this[METHOD_NAME_ADD_FILE_EXTENSION] = decoratorPipeFn(getPath(linkMethods, deobfuscate({ addFileExtension: 1 })), METHOD_NAME_ADD_FILE_EXTENSION)();
                    _this[METHOD_NAME_FILE_CLICK] = decoratorPipeFn(getPath(linkMethods, deobfuscate({ file: 1 })), METHOD_NAME_FILE_CLICK)();
                    _this[METHOD_NAME_TRACK_LINKS] = decoratorPipeFn(getPath(linkMethods, deobfuscate({ trackLinks: 1 })), METHOD_NAME_TRACK_LINKS)();
                }
                {
                    // ecommerce
                    unsubscribeMethods.push(ecommerce(ctx, counterOptions));
                }
                {
                    unsubscribeMethods.push(useFidObserverProvider(ctx));
                }
                {
                    // legacy ecommerce methods
                    _this[METHOD_NAME_ECOMMERCE_ADD] = decoratorPipeFn(legacyEcommerceAdd(ctx, counterOptions), METHOD_NAME_ECOMMERCE_ADD)();
                    _this[METHOD_NAME_ECOMMERCE_REMOVE] = decoratorPipeFn(legacyEcommerceRemove(ctx, counterOptions), METHOD_NAME_ECOMMERCE_REMOVE)();
                    _this[METHOD_NAME_ECOMMERCE_DETAIL] = decoratorPipeFn(legacyEcommerceDetail(ctx, counterOptions), METHOD_NAME_ECOMMERCE_DETAIL)();
                    _this[METHOD_NAME_ECOMMERCE_PURCHASE] = decoratorPipeFn(legacyEcommercePurchase(ctx, counterOptions), METHOD_NAME_ECOMMERCE_PURCHASE)();
                }
                {
                    var paramsFn = callProvider(userParams);
                    // userParams
                    _this[METHOD_NAME_USER_PARAMS] = decoratorPipeFn(paramsFn || noop, METHOD_NAME_USER_PARAMS)();
                }
                {
                    // destruct
                    _this[METHOD_DESTRUCT] = decoratorPipeFn(destruct(ctx, counterOptions, unsubscribeMethods), METHOD_DESTRUCT)(true, false);
                }
                {
                    // pluginFeature
                    callProvider(initPlugin);
                }
                {
                    // device synchronization feature
                    callProvider(useDeviceSyncProvider);
                }
                {
                    var setUserIdFn = callProvider(setUserID);
                    // setUserID
                    _this[METHOD_NAME_SET_USER_ID] = decoratorPipeFn(setUserIdFn || noop, METHOD_NAME_SET_USER_ID)();
                }
                {
                    // getClientIDx
                    _this[METHOD_NAME_GET_CLIENT_ID] = (callProvider(getClientID) ||
                        noop);
                }
                {
                    unsubscribeMethods.push(callProvider(useClickmapProvider));
                    {
                        // clickmap method
                        _this[METHOD_NAME_CLICK_MAP] = decoratorPipeFn(useClickmapMethodProvider(ctx, counterOptions), METHOD_NAME_CLICK_MAP)();
                    }
                }
                {
                    var ecommerceParserPromise = callProvider(ecommerceParser);
                    if (ecommerceParserPromise) {
                        ecommerceParserPromise.then(/* @__PURE__ */ bindThisForMethod('push', unsubscribeMethods));
                    }
                }
                // prerender
                {
                    callProvider(usePrerenderProvider);
                }
                {
                    // enableAll
                    _this[METHOD_NAME_ENABLE_ALL] = decoratorPipeFn(useEnableAllProvider(ctx, counterOptions), METHOD_NAME_ENABLE_ALL)();
                }
                {
                    callProvider(useSubmitTracking);
                }
                {
                    callProvider(useInternetServiceProvider);
                }
                {
                    callProvider(cacheProvider);
                }
                {
                    callProvider(useClickTracking);
                }
                {
                    callProvider(ysclidProvider);
                }
                {
                    callProvider(longtaskProvider);
                }
                {
                    asyncProvidersInit.push(/* @__PURE__ */ bindArg(checkStatus, callProvider));
                }
                {
                    var useAppMetricaInitializerProvider = callProvider(useAppMetricaInitializer);
                    if (useAppMetricaInitializerProvider) {
                        useAppMetricaInitializerProvider.then(/* @__PURE__ */ bindThisForMethod('push', unsubscribeMethods));
                    }
                }
                {
                    callProvider(useUidSyncProvider);
                }
                runAsync(ctx, bindArgs([
                    ctx,
                    asyncProvidersInit,
                    call,
                    ASYNC_PROVIDERS_MAX_EXEC_TIME,
                    'a.i',
                ], iterateTaskWithConstraints));
                // должна иди последней
                // когда определены все возможные
                // методы инстанса
                {
                    // stack Proxy
                    callProvider(checkStack);
                }
                {
                    callProvider(useWebvisor2Provider);
                }
                {
                    useReportNonNativeFunctionProvider(ctx);
                }
                return undefined;
            })();
        }
        return MetrikaCounter;
    }());
    {
        remoteControl(window);
    }
    if (window[yandexNamespace] && MetrikaCounter) {
        var constructorName$1 = config.constructorName;
        window[yandexNamespace][constructorName$1] = MetrikaCounter;
        callbackInit(window);
        var counterConstructor = window[yandexNamespace][constructorName$1];
        {
            counterConstructor[INFORMER_METHOD_NAME] = createInformer(window);
        }
        {
            counterConstructor[METHOD_NAME_COUNTERS] = globalConfig.getVal(GLOBAL_COUNTERS_METHOD_NAME);
        }
    }
    {
        stackProxy(window);
    }

    exports.ASYNC_PROVIDERS_MAX_EXEC_TIME = ASYNC_PROVIDERS_MAX_EXEC_TIME;
    exports.ASYNC_PROVIDERS_TIMEOUT = ASYNC_PROVIDERS_TIMEOUT;

    return exports;

}({}));
} catch (e) { }
