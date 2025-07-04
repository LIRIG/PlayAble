System.register(["./virtual_cc-Bibbe8yQ.js"], (function (n) {
    "use strict";
    var t;
    return {
        setters: [function (n) {
            t = n._
        }],
        execute: function () {
            var e;
            n("default", (e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function (n) {
                var r, i, o;
                void 0 === n && (n = {}), r || (r = void 0 !== n ? n : {}), r.ready = new Promise((function (n, t) {
                    i = n, o = t
                }));
                var a = Object.assign({}, r),
                    u = "";
                "undefined" != typeof document && document.currentScript && (u = document.currentScript.src), e && (u = e), u = 0 !== u.indexOf("blob:") ? u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
                var s, c = r.print || console.log.bind(console),
                    f = r.printErr || console.error.bind(console);
                Object.assign(r, a), a = null, r.wasmBinary && (s = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && S("no native wasm support detected");
                var l, h, p, d, v, y, m, g, b, w = !1;

                function I() {
                    var n = l.buffer;
                    r.HEAP8 = h = new Int8Array(n), r.HEAP16 = d = new Int16Array(n), r.HEAP32 = y = new Int32Array(n), r.HEAPU8 = p = new Uint8Array(n), r.HEAPU16 = v = new Uint16Array(n), r.HEAPU32 = m = new Uint32Array(n), r.HEAPF32 = g = new Float32Array(n), r.HEAPF64 = b = new Float64Array(n)
                }
                var T, C = [],
                    P = [],
                    A = [];

                function O() {
                    var n = r.preRun.shift();
                    C.unshift(n)
                }
                var W, k = 0,
                    E = null;

                function S(n) {
                    throw r.onAbort && r.onAbort(n), f(n = "Aborted(" + n + ")"), w = !0, n = new WebAssembly.RuntimeError(n + ". Build with -sASSERTIONS for more info."), o(n), n
                }

                function J(n) {
                    return n.startsWith("data:application/octet-stream;base64,")
                }
                if (!J(W = "spine.wasm")) {
                    var j = W;
                    W = r.locateFile ? r.locateFile(j, u) : u + j
                }

                function R(n) {
                    try {
                        if (n == W && s) return new Uint8Array(s);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (n) {
                        S(n)
                    }
                }

                function L(n) {
                    return s || "function" != typeof fetch ? Promise.resolve().then((function () {
                        return R(n)
                    })) : fetch(n, {
                        credentials: "same-origin"
                    }).then((function (t) {
                        if (!t.ok) throw "failed to load wasm binary file at '" + n + "'";
                        return t.arrayBuffer()
                    })).catch((function () {
                        return R(n)
                    }))
                }

                function U(n, t, e) {
                    return L(n).then((function (n) {
                        return WebAssembly.instantiate(n, t)
                    })).then((function (n) {
                        return n
                    })).then(e, (function (n) {
                        f("failed to asynchronously prepare wasm: " + n), S(n)
                    }))
                }

                function _(n, t) {
                    var e = W;
                    return s || "function" != typeof WebAssembly.instantiateStreaming || J(e) || "function" != typeof fetch ? U(e, n, t) : fetch(e, {
                        credentials: "same-origin"
                    }).then((function (r) {
                        return WebAssembly.instantiateStreaming(r, n).then(t, (function (r) {
                            return f("wasm streaming compile failed: " + r), f("falling back to ArrayBuffer instantiation"), U(e, n, t)
                        }))
                    }))
                }
                var K = {
                    26160: function (n) {
                        console.log(n ? Vn(p, n) : "")
                    },
                    26195: function (n) {
                        console.warn("[Spine]", n ? Vn(p, n) : "")
                    }
                };

                function M(n) {
                    for (; 0 < n.length;) n.shift()(r)
                }

                function F(n) {
                    switch (n) {
                        case 1:
                            return 0;
                        case 2:
                            return 1;
                        case 4:
                            return 2;
                        case 8:
                            return 3;
                        default:
                            throw new TypeError("Unknown type size: " + n)
                    }
                }
                var N = void 0;

                function x(n) {
                    for (var t = ""; p[n];) t += N[p[n++]];
                    return t
                }
                var V = {},
                    D = {},
                    z = {};

                function B(n) {
                    if (void 0 === n) return "_unknown";
                    var t = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                    return 48 <= t && 57 >= t ? "_" + n : n
                }

                function H(n, t) {
                    var e;
                    return (e = {}, e[n = B(n)] = function () {
                        return t.apply(this, arguments)
                    }, e)[n]
                }

                function Z(n) {
                    var t = Error,
                        e = H(n, (function (t) {
                            this.name = n, this.message = t, void 0 !== (t = Error(t).stack) && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                        }));
                    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype.toString = function () {
                        return void 0 === this.message ? this.name : this.name + ": " + this.message
                    }, e
                }
                var X = void 0;

                function Y(n) {
                    throw new X(n)
                }
                var $ = void 0;

                function q(n) {
                    throw new $(n)
                }

                function G(n, t, e) {
                    function r(t) {
                        (t = e(t)).length !== n.length && q("Mismatched type converter count");
                        for (var r = 0; r < n.length; ++r) Q(n[r], t[r])
                    }
                    n.forEach((function (n) {
                        z[n] = t
                    }));
                    var i = Array(t.length),
                        o = [],
                        a = 0;
                    t.forEach((function (n, t) {
                        D.hasOwnProperty(n) ? i[t] = D[n] : (o.push(n), V.hasOwnProperty(n) || (V[n] = []), V[n].push((function () {
                            i[t] = D[n], ++a === o.length && r(i)
                        })))
                    })), 0 === o.length && r(i)
                }

                function Q(n, t) {
                    if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    var e = t.name;
                    if (n || Y('type "' + e + '" must have a positive integer typeid pointer'), D.hasOwnProperty(n)) {
                        if ({}.ta) return;
                        Y("Cannot register type '" + e + "' twice")
                    }
                    D[n] = t, delete z[n], V.hasOwnProperty(n) && (t = V[n], delete V[n], t.forEach((function (n) {
                        return n()
                    })))
                }

                function nn(n) {
                    Y(n.I.L.J.name + " instance already deleted")
                }
                var tn = !1;

                function en() {}

                function rn(n) {
                    --n.count.value, 0 === n.count.value && (n.O ? n.P.V(n.O) : n.L.J.V(n.K))
                }

                function on(n, t, e) {
                    return t === e ? n : void 0 === e.M || null === (n = on(n, t, e.M)) ? null : e.ka(n)
                }
                var an = {},
                    un = [];

                function sn() {
                    for (; un.length;) {
                        var n = un.pop();
                        n.I.X = !1, n.delete()
                    }
                }
                var cn = void 0,
                    fn = {};

                function ln(n, t) {
                    for (void 0 === t && Y("ptr should not be undefined"); n.M;) t = n.Z(t), n = n.M;
                    return fn[t]
                }

                function hn(n, t) {
                    return t.L && t.K || q("makeClassHandle requires ptr and ptrType"), !!t.P != !!t.O && q("Both smartPtrType and smartPtr must be specified"), t.count = {
                        value: 1
                    }, pn(Object.create(n, {
                        I: {
                            value: t
                        }
                    }))
                }

                function pn(n) {
                    return "undefined" == typeof FinalizationRegistry ? (pn = function (n) {
                        return n
                    }, n) : (tn = new FinalizationRegistry((function (n) {
                        rn(n.I)
                    })), en = function (n) {
                        tn.unregister(n)
                    }, (pn = function (n) {
                        var t = n.I;
                        return t.O && tn.register(n, {
                            I: t
                        }, n), n
                    })(n))
                }

                function dn() {}

                function vn(n, t, e) {
                    if (void 0 === n[t].N) {
                        var r = n[t];
                        n[t] = function () {
                            return n[t].N.hasOwnProperty(arguments.length) || Y("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[t].N + ")!"), n[t].N[arguments.length].apply(this, arguments)
                        }, n[t].N = [], n[t].N[r.W] = r
                    }
                }

                function yn(n, t) {
                    r.hasOwnProperty(n) ? (Y("Cannot register public name '" + n + "' twice"), vn(r, n, n), r.hasOwnProperty(void 0) && Y("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), r[n].N[void 0] = t) : r[n] = t
                }

                function mn(n, t, e, r, i, o, a, u) {
                    this.name = n, this.constructor = t, this.T = e, this.V = r, this.M = i, this.la = o, this.Z = a, this.ka = u, this.oa = []
                }

                function gn(n, t, e) {
                    for (; t !== e;) t.Z || Y("Expected null or instance of " + e.name + ", got an instance of " + t.name), n = t.Z(n), t = t.M;
                    return n
                }

                function bn(n, t) {
                    return null === t ? (this.ca && Y("null is not a valid " + this.name), 0) : (t.I || Y('Cannot pass "' + Mn(t) + '" as a ' + this.name), t.I.K || Y("Cannot pass deleted object as a pointer of type " + this.name), gn(t.I.K, t.I.L.J, this.J))
                }

                function wn(n, t) {
                    if (null === t) {
                        if (this.ca && Y("null is not a valid " + this.name), this.ba) {
                            var e = this.pa();
                            return null !== n && n.push(this.V, e), e
                        }
                        return 0
                    }
                    if (t.I || Y('Cannot pass "' + Mn(t) + '" as a ' + this.name), t.I.K || Y("Cannot pass deleted object as a pointer of type " + this.name), !this.aa && t.I.L.aa && Y("Cannot convert argument of type " + (t.I.P ? t.I.P.name : t.I.L.name) + " to parameter type " + this.name), e = gn(t.I.K, t.I.L.J, this.J), this.ba) switch (void 0 === t.I.O && Y("Passing raw pointer to smart pointer is illegal"), this.sa) {
                        case 0:
                            t.I.P === this ? e = t.I.O : Y("Cannot convert argument of type " + (t.I.P ? t.I.P.name : t.I.L.name) + " to parameter type " + this.name);
                            break;
                        case 1:
                            e = t.I.O;
                            break;
                        case 2:
                            if (t.I.P === this) e = t.I.O;
                            else {
                                var r = t.clone();
                                e = this.qa(e, Kn((function () {
                                    r.delete()
                                }))), null !== n && n.push(this.V, e)
                            }
                            break;
                        default:
                            Y("Unsupporting sharing policy")
                    }
                    return e
                }

                function In(n, t) {
                    return null === t ? (this.ca && Y("null is not a valid " + this.name), 0) : (t.I || Y('Cannot pass "' + Mn(t) + '" as a ' + this.name), t.I.K || Y("Cannot pass deleted object as a pointer of type " + this.name), t.I.L.aa && Y("Cannot convert argument of type " + t.I.L.name + " to parameter type " + this.name), gn(t.I.K, t.I.L.J, this.J))
                }

                function Tn(n) {
                    return this.fromWireType(y[n >> 2])
                }

                function Cn(n, t, e, r) {
                    this.name = n, this.J = t, this.ca = e, this.aa = r, this.ba = !1, this.V = this.qa = this.pa = this.ga = this.sa = this.na = void 0, void 0 !== t.M ? this.toWireType = wn : (this.toWireType = r ? bn : In, this.S = null)
                }

                function Pn(n, t) {
                    r.hasOwnProperty(n) || q("Replacing nonexistant public symbol"), r[n] = t, r[n].W = void 0
                }

                function An(n, t) {
                    var e = [];
                    return function () {
                        if (e.length = 0, Object.assign(e, arguments), n.includes("j")) {
                            var i = r["dynCall_" + n];
                            i = e.length ? i.apply(null, [t].concat(e)) : i.call(null, t)
                        } else i = T.get(t).apply(null, e);
                        return i
                    }
                }

                function On(n, t) {
                    var e = (n = x(n)).includes("j") ? An(n, t) : T.get(t);
                    return "function" != typeof e && Y("unknown function pointer with signature " + n + ": " + t), e
                }
                var Wn = void 0;

                function kn(n) {
                    var t = x(n = tt(n));
                    return nt(n), t
                }

                function En(n, t) {
                    var e = [],
                        r = {};
                    throw t.forEach((function n(t) {
                        r[t] || D[t] || (z[t] ? z[t].forEach(n) : (e.push(t), r[t] = !0))
                    })), new Wn(n + ": " + e.map(kn).join([", "]))
                }

                function Sn(n) {
                    for (; n.length;) {
                        var t = n.pop();
                        n.pop()(t)
                    }
                }

                function Jn(n, t, e, r, i) {
                    var o = t.length;
                    2 > o && Y("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    var a = null !== t[1] && null !== e,
                        u = !1;
                    for (e = 1; e < t.length; ++e)
                        if (null !== t[e] && void 0 === t[e].S) {
                            u = !0;
                            break
                        } var s = "void" !== t[0].name,
                        c = o - 2,
                        f = Array(c),
                        l = [],
                        h = [];
                    return function () {
                        if (arguments.length !== c && Y("function " + n + " called with " + arguments.length + " arguments, expected " + c + " args!"), h.length = 0, l.length = a ? 2 : 1, l[0] = i, a) {
                            var e = t[1].toWireType(h, this);
                            l[1] = e
                        }
                        for (var o = 0; o < c; ++o) f[o] = t[o + 2].toWireType(h, arguments[o]), l.push(f[o]);
                        if (o = r.apply(null, l), u) Sn(h);
                        else
                            for (var p = a ? 1 : 2; p < t.length; p++) {
                                var d = 1 === p ? e : f[p - 2];
                                null !== t[p].S && t[p].S(d)
                            }
                        return s ? t[0].fromWireType(o) : void 0
                    }
                }

                function jn(n, t) {
                    for (var e = [], r = 0; r < n; r++) e.push(m[t + 4 * r >> 2]);
                    return e
                }

                function Rn(n, t, e) {
                    return n instanceof Object || Y(e + ' with invalid "this": ' + n), n instanceof t.J.constructor || Y(e + ' incompatible with "this" of type ' + n.constructor.name), n.I.K || Y("cannot call emscripten binding method " + e + " on deleted object"), gn(n.I.K, n.I.L.J, t.J)
                }
                var Ln = new function () {
                    this.R = [void 0], this.da = [], this.get = function (n) {
                        return this.R[n]
                    }, this.has = function (n) {
                        return void 0 !== this.R[n]
                    }, this.ha = function (n) {
                        var t = this.da.pop() || this.R.length;
                        return this.R[t] = n, t
                    }, this.ia = function (n) {
                        this.R[n] = void 0, this.da.push(n)
                    }
                };

                function Un(n) {
                    n >= Ln.ea && 0 == --Ln.get(n).ra && Ln.ia(n)
                }
                var _n = function (n) {
                        return n || Y("Cannot use deleted val. handle = " + n), Ln.get(n).value
                    },
                    Kn = function (n) {
                        switch (n) {
                            case void 0:
                                return 1;
                            case null:
                                return 2;
                            case !0:
                                return 3;
                            case !1:
                                return 4;
                            default:
                                return Ln.ha({
                                    ra: 1,
                                    value: n
                                })
                        }
                    };

                function Mn(n) {
                    if (null === n) return "null";
                    var t = typeof n;
                    return "object" === t || "array" === t || "function" === t ? n.toString() : "" + n
                }

                function Fn(n, t) {
                    switch (t) {
                        case 2:
                            return function (n) {
                                return this.fromWireType(g[n >> 2])
                            };
                        case 3:
                            return function (n) {
                                return this.fromWireType(b[n >> 3])
                            };
                        default:
                            throw new TypeError("Unknown float type: " + n)
                    }
                }

                function Nn(n, t, e) {
                    switch (t) {
                        case 0:
                            return e ? function (n) {
                                return h[n]
                            } : function (n) {
                                return p[n]
                            };
                        case 1:
                            return e ? function (n) {
                                return d[n >> 1]
                            } : function (n) {
                                return v[n >> 1]
                            };
                        case 2:
                            return e ? function (n) {
                                return y[n >> 2]
                            } : function (n) {
                                return m[n >> 2]
                            };
                        default:
                            throw new TypeError("Unknown integer type: " + n)
                    }
                }
                var xn = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                function Vn(n, t, e) {
                    var r = t + e;
                    for (e = t; n[e] && !(e >= r);) ++e;
                    if (16 < e - t && n.buffer && xn) return xn.decode(n.subarray(t, e));
                    for (r = ""; t < e;) {
                        var i = n[t++];
                        if (128 & i) {
                            var o = 63 & n[t++];
                            if (192 == (224 & i)) r += String.fromCharCode((31 & i) << 6 | o);
                            else {
                                var a = 63 & n[t++];
                                65536 > (i = 224 == (240 & i) ? (15 & i) << 12 | o << 6 | a : (7 & i) << 18 | o << 12 | a << 6 | 63 & n[t++]) ? r += String.fromCharCode(i) : (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                            }
                        } else r += String.fromCharCode(i)
                    }
                    return r
                }

                function Dn(n, t) {
                    var e = D[n];
                    return void 0 === e && Y(t + " has unknown type " + kn(n)), e
                }
                var zn = {},
                    Bn = [],
                    Hn = [null, [],
                        []
                    ];

                function Zn() {
                    var n = r.SpineWasmUtil,
                        t = n.getCurrentListenerID(),
                        e = n.getCurrentTrackEntry(),
                        i = n.getCurrentEvent();
                    n = n.getCurrentEventType(), globalThis.TrackEntryListeners.emitListener(t, e, i, n)
                }

                function Xn() {
                    var n = r.SpineWasmUtil,
                        t = n.getCurrentListenerID(),
                        e = n.getCurrentEventType(),
                        i = n.getCurrentTrackEntry();
                    n = n.getCurrentEvent(), globalThis.TrackEntryListeners.emitTrackEntryListener(t, i, n, e)
                }
                r._spineListenerCallBackFromJS = Zn, r._spineTrackListenerCallback = Xn;
                for (var Yn = Array(256), $n = 0; 256 > $n; ++$n) Yn[$n] = String.fromCharCode($n);
                N = Yn, X = r.BindingError = Z("BindingError"), $ = r.InternalError = Z("InternalError"), dn.prototype.isAliasOf = function (n) {
                    if (!(this instanceof dn && n instanceof dn)) return !1;
                    var t = this.I.L.J,
                        e = this.I.K,
                        r = n.I.L.J;
                    for (n = n.I.K; t.M;) e = t.Z(e), t = t.M;
                    for (; r.M;) n = r.Z(n), r = r.M;
                    return t === r && e === n
                }, dn.prototype.clone = function () {
                    if (this.I.K || nn(this), this.I.Y) return this.I.count.value += 1, this;
                    var n = pn,
                        t = Object,
                        e = t.create,
                        r = Object.getPrototypeOf(this),
                        i = this.I;
                    return (n = n(e.call(t, r, {
                        I: {
                            value: {
                                count: i.count,
                                X: i.X,
                                Y: i.Y,
                                K: i.K,
                                L: i.L,
                                O: i.O,
                                P: i.P
                            }
                        }
                    }))).I.count.value += 1, n.I.X = !1, n
                }, dn.prototype.delete = function () {
                    this.I.K || nn(this), this.I.X && !this.I.Y && Y("Object already scheduled for deletion"), en(this), rn(this.I), this.I.Y || (this.I.O = void 0, this.I.K = void 0)
                }, dn.prototype.isDeleted = function () {
                    return !this.I.K
                }, dn.prototype.deleteLater = function () {
                    return this.I.K || nn(this), this.I.X && !this.I.Y && Y("Object already scheduled for deletion"), un.push(this), 1 === un.length && cn && cn(sn), this.I.X = !0, this
                }, r.getInheritedInstanceCount = function () {
                    return Object.keys(fn).length
                }, r.getLiveInheritedInstances = function () {
                    var n, t = [];
                    for (n in fn) fn.hasOwnProperty(n) && t.push(fn[n]);
                    return t
                }, r.flushPendingDeletes = sn, r.setDelayFunction = function (n) {
                    cn = n, un.length && cn && cn(sn)
                }, Cn.prototype.ma = function (n) {
                    return this.ga && (n = this.ga(n)), n
                }, Cn.prototype.fa = function (n) {
                    this.V && this.V(n)
                }, Cn.prototype.argPackAdvance = 8, Cn.prototype.readValueFromPointer = Tn, Cn.prototype.deleteObject = function (n) {
                    null !== n && n.delete()
                }, Cn.prototype.fromWireType = function (n) {
                    function t() {
                        return this.ba ? hn(this.J.T, {
                            L: this.na,
                            K: e,
                            P: this,
                            O: n
                        }) : hn(this.J.T, {
                            L: this,
                            K: n
                        })
                    }
                    var e = this.ma(n);
                    if (!e) return this.fa(n), null;
                    var r = ln(this.J, e);
                    if (void 0 !== r) return 0 === r.I.count.value ? (r.I.K = e, r.I.O = n, r.clone()) : (r = r.clone(), this.fa(n), r);
                    if (r = this.J.la(e), !(r = an[r])) return t.call(this);
                    r = this.aa ? r.ja : r.pointerType;
                    var i = on(e, this.J, r.J);
                    return null === i ? t.call(this) : this.ba ? hn(r.J.T, {
                        L: r,
                        K: i,
                        P: this,
                        O: n
                    }) : hn(r.J.T, {
                        L: r,
                        K: i
                    })
                }, Wn = r.UnboundTypeError = Z("UnboundTypeError"), Ln.R.push({
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }), Ln.ea = Ln.R.length, r.count_emval_handles = function () {
                    for (var n = 0, t = Ln.ea; t < Ln.R.length; ++t) void 0 !== Ln.R[t] && ++n;
                    return n
                };
                var qn, Gn = {
                    z: function () {
                        f("missing function: _ZN5spine19getDefaultExtensionEv"), S(-1)
                    },
                    q: function () {},
                    u: function (n, t, e, r, i) {
                        var o = F(e);
                        Q(n, {
                            name: t = x(t),
                            fromWireType: function (n) {
                                return !!n
                            },
                            toWireType: function (n, t) {
                                return t ? r : i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: function (n) {
                                if (1 === e) var r = h;
                                else if (2 === e) r = d;
                                else {
                                    if (4 !== e) throw new TypeError("Unknown boolean type size: " + t);
                                    r = y
                                }
                                return this.fromWireType(r[n >> o])
                            },
                            S: null
                        })
                    },
                    c: function (n, t, e, r, i, o, a, u, s, c, f, l, h) {
                        f = x(f), o = On(i, o), u && (u = On(a, u)), c && (c = On(s, c)), h = On(l, h);
                        var p = B(f);
                        yn(p, (function () {
                            En("Cannot construct " + f + " due to unbound types", [r])
                        })), G([n, t, e], r ? [r] : [], (function (t) {
                            if (t = t[0], r) var e = t.J,
                                i = e.T;
                            else i = dn.prototype;
                            t = H(p, (function () {
                                if (Object.getPrototypeOf(this) !== a) throw new X("Use 'new' to construct " + f);
                                if (void 0 === s.U) throw new X(f + " has no accessible constructor");
                                var n = s.U[arguments.length];
                                if (void 0 === n) throw new X("Tried to invoke ctor of " + f + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(s.U).toString() + ") parameters instead!");
                                return n.apply(this, arguments)
                            }));
                            var a = Object.create(i, {
                                constructor: {
                                    value: t
                                }
                            });
                            t.prototype = a;
                            var s = new mn(f, t, a, h, e, o, u, c);
                            s.M && (void 0 === s.M.$ && (s.M.$ = []), s.M.$.push(s)), e = new Cn(f, s, !0, !1), i = new Cn(f + "*", s, !1, !1);
                            var l = new Cn(f + " const*", s, !1, !0);
                            return an[n] = {
                                pointerType: i,
                                ja: l
                            }, Pn(p, t), [e, i, l]
                        }))
                    },
                    g: function (n, e, r, i, o, a, u) {
                        var s = jn(r, i);
                        e = x(e), a = On(o, a), G([], [n], (function (n) {
                            function i() {
                                En("Cannot call " + o + " due to unbound types", s)
                            }
                            var o = (n = n[0]).name + "." + e;
                            e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                            var c = n.J.constructor;
                            return void 0 === c[e] ? (i.W = r - 1, c[e] = i) : (vn(c, e, o), c[e].N[r - 1] = i), G([], s, (function (i) {
                                if (i = Jn(o, [i[0], null].concat(i.slice(1)), null, a, u), void 0 === c[e].N ? (i.W = r - 1, c[e] = i) : c[e].N[r - 1] = i, n.J.$)
                                    for (var s, f = t(n.J.$); !(s = f()).done;) {
                                        var l = s.value;
                                        l.constructor.hasOwnProperty(e) || (l.constructor[e] = i)
                                    }
                                return []
                            })), []
                        }))
                    },
                    h: function (n, t, e, r, i, o, a, u) {
                        t = x(t), o = On(i, o), G([], [n], (function (n) {
                            var i = (n = n[0]).name + "." + t,
                                s = {
                                    get: function () {
                                        En("Cannot access " + i + " due to unbound types", [e])
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                };
                            return s.set = u ? function () {
                                En("Cannot access " + i + " due to unbound types", [e])
                            } : function () {
                                Y(i + " is a read-only property")
                            }, Object.defineProperty(n.J.constructor, t, s), G([], [e], (function (e) {
                                e = e[0];
                                var i = {
                                    get: function () {
                                        return e.fromWireType(o(r))
                                    },
                                    enumerable: !0
                                };
                                return u && (u = On(a, u), i.set = function (n) {
                                    var t = [];
                                    u(r, e.toWireType(t, n)), Sn(t)
                                }), Object.defineProperty(n.J.constructor, t, i), []
                            })), []
                        }))
                    },
                    d: function (n, t, e, r, i, o) {
                        0 < t || S();
                        var a = jn(t, e);
                        i = On(r, i), G([], [n], (function (n) {
                            var e = "constructor " + (n = n[0]).name;
                            if (void 0 === n.J.U && (n.J.U = []), void 0 !== n.J.U[t - 1]) throw new X("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + n.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                            return n.J.U[t - 1] = function () {
                                En("Cannot construct " + n.name + " due to unbound types", a)
                            }, G([], a, (function (r) {
                                return r.splice(1, 0, null), n.J.U[t - 1] = Jn(e, r, null, i, o), []
                            })), []
                        }))
                    },
                    a: function (n, t, e, r, i, o, a, u) {
                        var s = jn(e, r);
                        t = x(t), o = On(i, o), G([], [n], (function (n) {
                            function r() {
                                En("Cannot call " + i + " due to unbound types", s)
                            }
                            var i = (n = n[0]).name + "." + t;
                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), u && n.J.oa.push(t);
                            var c = n.J.T,
                                f = c[t];
                            return void 0 === f || void 0 === f.N && f.className !== n.name && f.W === e - 2 ? (r.W = e - 2, r.className = n.name, c[t] = r) : (vn(c, t, i), c[t].N[e - 2] = r), G([], s, (function (r) {
                                return r = Jn(i, r, n, o, a), void 0 === c[t].N ? (r.W = e - 2, c[t] = r) : c[t].N[e - 2] = r, []
                            })), []
                        }))
                    },
                    b: function (n, t, e, r, i, o, a, u, s, c) {
                        t = x(t), i = On(r, i), G([], [n], (function (n) {
                            var r = (n = n[0]).name + "." + t,
                                f = {
                                    get: function () {
                                        En("Cannot access " + r + " due to unbound types", [e, a])
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                };
                            return f.set = s ? function () {
                                En("Cannot access " + r + " due to unbound types", [e, a])
                            } : function () {
                                Y(r + " is a read-only property")
                            }, Object.defineProperty(n.J.T, t, f), G([], s ? [e, a] : [e], (function (e) {
                                var a = e[0],
                                    f = {
                                        get: function () {
                                            var t = Rn(this, n, r + " getter");
                                            return a.fromWireType(i(o, t))
                                        },
                                        enumerable: !0
                                    };
                                if (s) {
                                    s = On(u, s);
                                    var l = e[1];
                                    f.set = function (t) {
                                        var e = Rn(this, n, r + " setter"),
                                            i = [];
                                        s(c, e, l.toWireType(i, t)), Sn(i)
                                    }
                                }
                                return Object.defineProperty(n.J.T, t, f), []
                            })), []
                        }))
                    },
                    t: function (n, t) {
                        Q(n, {
                            name: t = x(t),
                            fromWireType: function (n) {
                                var t = _n(n);
                                return Un(n), t
                            },
                            toWireType: function (n, t) {
                                return Kn(t)
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Tn,
                            S: null
                        })
                    },
                    o: function (n, t, e) {
                        e = F(e), Q(n, {
                            name: t = x(t),
                            fromWireType: function (n) {
                                return n
                            },
                            toWireType: function (n, t) {
                                return t
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Fn(t, e),
                            S: null
                        })
                    },
                    f: function (n, t, e, r, i) {
                        t = x(t), -1 === i && (i = 4294967295), i = F(e);
                        var o = function (n) {
                            return n
                        };
                        if (0 === r) {
                            var a = 32 - 8 * e;
                            o = function (n) {
                                return n << a >>> a
                            }
                        }
                        e = t.includes("unsigned") ? function (n, t) {
                            return t >>> 0
                        } : function (n, t) {
                            return t
                        }, Q(n, {
                            name: t,
                            fromWireType: o,
                            toWireType: e,
                            argPackAdvance: 8,
                            readValueFromPointer: Nn(t, i, 0 !== r),
                            S: null
                        })
                    },
                    y: function (n, t) {
                        var e = "std::string" === (t = x(t));
                        Q(n, {
                            name: t,
                            fromWireType: function (n) {
                                var t = m[n >> 2],
                                    r = n + 4;
                                if (e)
                                    for (var i = r, o = 0; o <= t; ++o) {
                                        var a = r + o;
                                        if (o == t || 0 == p[a]) {
                                            if (i = i ? Vn(p, i, a - i) : "", void 0 === u) var u = i;
                                            else u += String.fromCharCode(0), u += i;
                                            i = a + 1
                                        }
                                    } else {
                                        for (u = Array(t), o = 0; o < t; ++o) u[o] = String.fromCharCode(p[r + o]);
                                        u = u.join("")
                                    }
                                return nt(n), u
                            },
                            toWireType: function (n, t) {
                                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                var r, i, o = "string" == typeof t;
                                if (o || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || Y("Cannot pass non-string to std::string"), e && o)
                                    for (r = i = 0; r < t.length; ++r) {
                                        var a = t.charCodeAt(r);
                                        127 >= a ? i++ : 2047 >= a ? i += 2 : 55296 <= a && 57343 >= a ? (i += 4, ++r) : i += 3
                                    } else i = t.length;
                                if (a = (i = Qn(4 + (r = i) + 1)) + 4, m[i >> 2] = r, e && o) {
                                    if (o = a, a = r + 1, r = p, 0 < a) {
                                        a = o + a - 1;
                                        for (var u = 0; u < t.length; ++u) {
                                            var s = t.charCodeAt(u);
                                            if (55296 <= s && 57343 >= s && (s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++u)), 127 >= s) {
                                                if (o >= a) break;
                                                r[o++] = s
                                            } else {
                                                if (2047 >= s) {
                                                    if (o + 1 >= a) break;
                                                    r[o++] = 192 | s >> 6
                                                } else {
                                                    if (65535 >= s) {
                                                        if (o + 2 >= a) break;
                                                        r[o++] = 224 | s >> 12
                                                    } else {
                                                        if (o + 3 >= a) break;
                                                        r[o++] = 240 | s >> 18, r[o++] = 128 | s >> 12 & 63
                                                    }
                                                    r[o++] = 128 | s >> 6 & 63
                                                }
                                                r[o++] = 128 | 63 & s
                                            }
                                        }
                                        r[o] = 0
                                    }
                                } else if (o)
                                    for (o = 0; o < r; ++o) 255 < (u = t.charCodeAt(o)) && (nt(a), Y("String has UTF-16 code units that do not fit in 8 bits")), p[a + o] = u;
                                else
                                    for (o = 0; o < r; ++o) p[a + o] = t[o];
                                return null !== n && n.push(nt, i), i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Tn,
                            S: function (n) {
                                nt(n)
                            }
                        })
                    },
                    v: function (n, t) {
                        Q(n, {
                            ua: !0,
                            name: t = x(t),
                            argPackAdvance: 0,
                            fromWireType: function () {},
                            toWireType: function () {}
                        })
                    },
                    j: function (n, t, e) {
                        n = _n(n), t = Dn(t, "emval::as");
                        var r = [],
                            i = Kn(r);
                        return m[e >> 2] = i, t.toWireType(r, n)
                    },
                    e: Un,
                    k: function (n, t) {
                        return n = _n(n), t = _n(t), Kn(n[t])
                    },
                    m: function (n) {
                        var t = zn[n];
                        return Kn(void 0 === t ? x(n) : t)
                    },
                    i: function (n) {
                        Sn(_n(n)), Un(n)
                    },
                    p: function (n, t) {
                        return n = (n = Dn(n, "_emval_take_value")).readValueFromPointer(t), Kn(n)
                    },
                    n: function () {
                        S("")
                    },
                    l: function (n, t, e) {
                        var r;
                        for (Bn.length = 0, e >>= 2; r = p[t++];) e += 105 != r & e, Bn.push(105 == r ? y[e] : b[e++ >> 1]), ++e;
                        return K[n].apply(null, Bn)
                    },
                    r: function (n) {
                        var t = p.length;
                        if (2147483648 < (n >>>= 0)) return !1;
                        for (var e = 1; 4 >= e; e *= 2) {
                            var r = t * (1 + .2 / e);
                            r = Math.min(r, n + 100663296);
                            var i = Math;
                            r = Math.max(n, r);
                            n: {
                                i = i.min.call(i, 2147483648, r + (65536 - r % 65536) % 65536) - l.buffer.byteLength + 65535 >>> 16;
                                try {
                                    l.grow(i), I();
                                    var o = 1;
                                    break n
                                } catch (n) {}
                                o = void 0
                            }
                            if (o) return !0
                        }
                        return !1
                    },
                    s: function (n, t, e, r) {
                        for (var i = 0, o = 0; o < e; o++) {
                            var a = m[t >> 2],
                                u = m[t + 4 >> 2];
                            t += 8;
                            for (var s = 0; s < u; s++) {
                                var l = p[a + s],
                                    h = Hn[n];
                                0 === l || 10 === l ? ((1 === n ? c : f)(Vn(h, 0)), h.length = 0) : h.push(l)
                            }
                            i += u
                        }
                        return m[r >> 2] = i, 0
                    },
                    x: Zn,
                    w: Xn
                };

                function Qn() {
                    return (Qn = r.asm.D).apply(null, arguments)
                }

                function nt() {
                    return (nt = r.asm.E).apply(null, arguments)
                }

                function tt() {
                    return (tt = r.asm.F).apply(null, arguments)
                }

                function et() {
                    function n() {
                        if (!qn && (qn = !0, r.calledRun = !0, !w)) {
                            if (M(P), i(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), r.postRun)
                                for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) {
                                    var n = r.postRun.shift();
                                    A.unshift(n)
                                }
                            M(A)
                        }
                    }
                    if (!(0 < k)) {
                        if (r.preRun)
                            for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) O();
                        M(C), 0 < k || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function () {
                            setTimeout((function () {
                                r.setStatus("")
                            }), 1), n()
                        }), 1)) : n())
                    }
                }
                if (function () {
                        function n(n) {
                            if (n = n.exports, r.asm = n, l = r.asm.A, I(), T = r.asm.C, P.unshift(r.asm.B), k--, r.monitorRunDependencies && r.monitorRunDependencies(k), 0 == k && E) {
                                var t = E;
                                E = null, t()
                            }
                            return n
                        }
                        var t = {
                            a: Gn
                        };
                        if (k++, r.monitorRunDependencies && r.monitorRunDependencies(k), r.instantiateWasm) try {
                            return r.instantiateWasm(t, n)
                        } catch (n) {
                            f("Module.instantiateWasm callback failed with error: " + n), o(n)
                        }
                        _(t, (function (t) {
                            n(t.instance)
                        })).catch(o)
                    }(), r.__embind_initialize_bindings = function () {
                        return (r.__embind_initialize_bindings = r.asm.G).apply(null, arguments)
                    }, r.dynCall_jiji = function () {
                        return (r.dynCall_jiji = r.asm.H).apply(null, arguments)
                    }, E = function n() {
                        qn || et(), qn || (E = n)
                    }, r.preInit)
                    for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); 0 < r.preInit.length;) r.preInit.pop()();
                return et(), n.ready
            }))
        }
    }
}));