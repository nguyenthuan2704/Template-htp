// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []




    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = { Mf: !0 },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Mf;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ia = da,
        ja = this || self,
        la = /^[\w+/_-]+[=]{0,2}$/,
        na = null;
    var oa = function() {},
        pa = function(a) { return "function" == typeof a },
        g = function(a) { return "string" == typeof a },
        qa = function(a) { return "number" == typeof a && !isNaN(a) },
        ra = function(a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) },
        ta = function(a, b) {
            if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        va = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!qa(a) ||
                !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ya = function(a, b) {
            for (var c = new xa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        za = function(a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Aa = function(a) { return Math.round(Number(a)) || 0 },
        Ba = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Ca = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        Fa = function() { return (new Date).getTime() },
        xa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    xa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    xa.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Ga = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Ha = function(a) {
            var b = !1;
            return function() {
                if (!b) try { a() } catch (c) {}
                b = !0
            }
        },
        Ia = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        Ma = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Na = function(a) {
            var b = [];
            za(a, function(c, d) { 10 > c.length && d && b.push(c) });
            return b.join(",")
        };
    /*
         jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Oa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pa = function(a) { if (null == a) return String(a); var b = Oa.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Ra = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Sa = function(a) {
            if (!a || "object" != Pa(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Ra(a, "constructor") && !Ra(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Ra(a, b)
        },
        n = function(a, b) {
            var c = b || ("array" == Pa(a) ? [] : {}),
                d;
            for (d in a)
                if (Ra(a, d)) { var e = a[d]; "array" == Pa(e) ? ("array" != Pa(c[d]) && (c[d] = []), c[d] = n(e, c[d])) : Sa(e) ? (Sa(c[d]) || (c[d] = {}), c[d] = n(e, c[d])) : c[d] = e }
            return c
        };
    var qb;
    var rb = [],
        sb = [],
        tb = [],
        ub = [],
        vb = [],
        wb = {},
        xb, yb, zb, Ab = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Bb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = wb[c],
                e = {},
                f;
            for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
            return void 0 !== d ? d(e) : qb(c, e, b)
        },
        Eb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Db(a[e], b, c));
            return d
        },
        Fb = function(a) { var b = a["function"]; if (!b) throw "Error: No function name given for function call."; var c = wb[b]; return c ? c.priorityOverride || 0 : 0 },
        Db = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Db(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = rb[f];
                        if (!h || b.Yc(h)) return;
                        c[f] = !0;
                        try {
                            var k = Eb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Bb(k, b);
                            zb && (d = zb.mg(d, k))
                        } catch (y) { b.Ge && b.Ge(y, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Db(a[l], b, c)] = Db(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, p = 1; p < a.length; p++) {
                            var r = Db(a[p], b, c);
                            yb && (m = m || r === yb.Kb);
                            d.push(r)
                        }
                        return yb && m ? yb.pg(d) : d.join("");
                    case "escape":
                        d = Db(a[1], b, c);
                        if (yb && ra(a[1]) && "macro" === a[1][0] && yb.Pg(a)) return yb.hh(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ta[a[u]] && (d = Ta[a[u]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!ub[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            te: a[2],
                            index: q
                        };
                    case "zb":
                        var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        t["function"] = a[1];
                        var v = Gb(t, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Gb = function(a, b, c) { try { return xb(Eb(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Hb = function() { var a = function(b) { return { toString: function() { return b } } }; return { Cd: a("convert_case_to"), Dd: a("convert_false_to"), Ed: a("convert_null_to"), Fd: a("convert_true_to"), Gd: a("convert_undefined_to"), Oh: a("debug_mode_metadata"), ya: a("function"), kf: a("instance_name"), qf: a("live_only"), sf: a("malware_disabled"), tf: a("metadata"), Ph: a("original_vendor_template_id"), xf: a("once_per_event"), Nd: a("once_per_load"), Vd: a("setup_tags"), Xd: a("tag_id"), Yd: a("teardown_tags") } }();
    var Ib = null,
        Lb = function(a) {
            function b(r) { for (var u = 0; u < r.length; u++) d[r[u]] = !0 }
            var c = [],
                d = [];
            Ib = Jb(a);
            for (var e = 0; e < sb.length; e++) {
                var f = sb[e],
                    h = Kb(f);
                if (h) {
                    for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(f.block || [])
                } else null === h && b(f.block || [])
            }
            for (var m = [], p = 0; p < ub.length; p++) c[p] && !d[p] && (m[p] = !0);
            return m
        },
        Kb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) { var d = Ib(b[c]); if (0 === d) return !1; if (2 === d) return null }
            for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var h = Ib(e[f]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Jb = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Gb(tb[c], a)); return b[c] } };
    /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var C = { wa: "_ee", Kc: "_syn", Rh: "_uei", Ac: "event_callback", Jb: "event_timeout", F: "gtag.config", da: "allow_ad_personalization_signals", Bc: "restricted_data_processing", $a: "allow_google_signals", fa: "cookie_expires", Ib: "cookie_update", ab: "session_duration", ka: "user_properties", va: "transport_url", M: "ads_data_redaction" };
    C.wd = "page_view";
    C.Mh = "user_engagement";
    C.na = "purchase";
    C.Yb = "refund";
    C.eb = "begin_checkout";
    C.Sb = "add_to_cart";
    C.Wb = "remove_from_cart";
    C.Dh = "view_cart";
    C.Ld = "add_to_wishlist";
    C.Ja = "view_item";
    C.Lh = "view_promotion";
    C.Hh = "select_promotion";
    C.Fh = "select_item";
    C.ud = "view_item_list";
    C.Kd = "add_payment_info";
    C.Ah = "add_shipping_info";
    C.Nh = "allow_custom_scripts";
    C.Ze = "allow_display_features";
    C.af = "allow_enhanced_conversions";
    C.Ad = "enhanced_conversions";
    C.$b = "client_id";
    C.Y = "cookie_domain";
    C.ac = "cookie_name";
    C.Ma = "cookie_path";
    C.ia = "cookie_flags";
    C.ja = "currency";
    C.bc = "custom_params";
    C.ce = "custom_map";
    C.zc = "groups";
    C.Na = "language";
    C.df = "country";
    C.Th = "non_interaction";
    C.kb = "page_location";
    C.lb = "page_referrer";
    C.Cc = "page_title";
    C.mb = "send_page_view";
    C.za = "send_to";
    C.Ec = "session_engaged";
    C.fc = "session_id";
    C.Fc = "session_number";
    C.Hf = "tracking_id";
    C.xa = "linker";
    C.ob = "url_passthrough";
    C.hb = "accept_incoming";
    C.K = "domains";
    C.jb = "url_position";
    C.ib = "decorate_forms";
    C.ye = "phone_conversion_number";
    C.qe = "phone_conversion_callback";
    C.se = "phone_conversion_css_class";
    C.ze = "phone_conversion_options";
    C.Bf = "phone_conversion_ids";
    C.Af = "phone_conversion_country_code";
    C.Od = "aw_remarketing";
    C.Qd = "aw_remarketing_only";
    C.ca = "value";
    C.Cf = "quantity";
    C.hf = "affiliation";
    C.he = "tax";
    C.nf = "shipping";
    C.yd = "list_name";
    C.fe = "checkout_step";
    C.ee = "checkout_option";
    C.jf = "coupon";
    C.lf = "promotions";
    C.nb = "transaction_id";
    C.pb = "user_id";
    C.La = "conversion_linker";
    C.Ka = "conversion_cookie_prefix";
    C.Z = "cookie_prefix";
    C.T = "items";
    C.$d = "aw_merchant_id";
    C.Ud =
        "aw_feed_country";
    C.Wd = "aw_feed_language";
    C.Rd = "discount";
    C.de = "disable_merchant_reported_purchases";
    C.ie = "new_customer";
    C.ae = "customer_lifetime_value";
    C.ff = "dc_natural_search";
    C.ef = "dc_custom_params";
    C.If = "trip_type";
    C.me = "passengers";
    C.vf = "method";
    C.Ff = "search_term";
    C.bf = "content_type";
    C.zf = "optimize_id";
    C.pf = "experiments";
    C.gb = "google_signals";
    C.yc = "google_tld";
    C.hc = "update";
    C.xc = "firebase_id";
    C.cc = "ga_restrict_domain";
    C.wc = "event_settings";
    C.xd = "dynamic_event_settings";
    C.Ef = "screen_name";
    C.uf =
        "_x_19";
    C.rf = "_x_20";
    C.De = [C.da, C.$a, C.Bc, C.Y, C.fa, C.ia, C.ac, C.Ma, C.Z, C.Ib, C.ce, C.bc, C.xd, C.Ac, C.wc, C.Jb, C.cc, C.gb, C.yc, C.zc, C.xa, C.za, C.mb, C.ab, C.hc, C.ka, C.va];
    C.De.push(C.T);
    C.Be = [C.kb, C.lb, C.Cc, C.Na, C.Ef, C.pb, C.xc];
    C.Jf = [C.na, C.Yb, C.eb, C.Sb, C.Wb, C.Dh, C.Ld, C.Ja, C.Lh, C.Hh, C.ud, C.Fh, C.Kd, C.Ah];
    C.Jd = [C.za, C.Od, C.Qd, C.bc, C.mb, C.Na, C.ca, C.ja, C.nb, C.pb, C.La, C.Ka, C.Z, C.Y, C.fa, C.ia, C.kb, C.lb, C.ye, C.qe, C.se, C.ze,
        C.T, C.$d, C.Ud, C.Wd, C.Rd, C.de, C.ie, C.ae, C.da, C.Bc, C.hc, C.xc, C.Ad, C.va, C.ob
    ];
    C.Ce = [C.da, C.$a, C.Ib];
    C.Fe = [C.fa, C.Jb, C.ab];
    var D = window,
        F = document,
        gc = navigator,
        hc = F.currentScript && F.currentScript.src,
        ic = function(a, b) {
            var c = D[a];
            D[a] = void 0 === c ? b : c;
            return D[a]
        },
        jc = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        kc = function(a, b, c) {
            var d = F.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            jc(d, b);
            c && (d.onerror = c);
            var e;
            if (null === na) b: {
                var f = ja.document,
                    h = f.querySelector && f.querySelector("script[nonce]");
                if (h) { var k = h.nonce || h.getAttribute("nonce"); if (k && la.test(k)) { na = k; break b } }
                na = ""
            }
            e = na;
            e && d.setAttribute("nonce", e);
            var l = F.getElementsByTagName("script")[0] || F.body || F.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        lc = function() { if (hc) { var a = hc.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        mc = function(a, b) {
            var c = F.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = F.body && F.body.lastChild ||
                F.body || F.head;
            d.parentNode.insertBefore(c, d);
            jc(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        nc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        oc = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        pc = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        G = function(a) { D.setTimeout(a, 0) },
        qc = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        rc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        sc = function(a) {
            var b = F.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        tc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        uc = function(a) { gc.sendBeacon && gc.sendBeacon(a) || nc(a) },
        vc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var wc = {},
        I = function(a, b) {
            wc[a] = wc[a] || [];
            wc[a][b] = !0
        },
        xc = function(a) { for (var b = [], c = wc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var yc = [];

    function zc() {
        var a = ic("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: Ac, update: Bc, addListener: Cc, notifyListeners: Dc, active: !1 });
        return a.ics
    }

    function Ac(a, b, c, d, e, f) {
        var h = zc();
        h.active = !0;
        if (void 0 != b) {
            var k = h.entries,
                l = k[a] || {},
                m = l.region,
                p = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (p === e || (p === d ? m !== e : !p && !m)) {
                var r = !!(f && 0 < f && void 0 === l.update),
                    u = { region: p, initial: "granted" === b, update: l.update, quiet: r };
                k[a] = u;
                r && D.setTimeout(function() { k[a] === u && u.quiet && (u.quiet = !1, Fc(a), Dc(), I("TAGGING", 2)) }, f)
            }
        }
    }

    function Bc(a, b) {
        var c = zc();
        c.active = !0;
        if (void 0 != b) {
            var d = Gc(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Gc(a);
            f.quiet ? (f.quiet = !1, Fc(a)) : h !== d && Fc(a)
        }
    }

    function Cc(a, b) { yc.push({ ne: a, Ag: b }) }

    function Fc(a) {
        for (var b = 0; b < yc.length; ++b) {
            var c = yc[b];
            ra(c.ne) && -1 !== c.ne.indexOf(a) && (c.Pe = !0)
        }
    }

    function Dc() { for (var a = 0; a < yc.length; ++a) { var b = yc[a]; if (b.Pe) { b.Pe = !1; try { b.Ag.call() } catch (c) {} } } }
    var Gc = function(a) { var b = zc().entries[a] || {}; return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0 },
        Hc = function(a) { return !(zc().entries[a] || {}).quiet },
        Ic = function() { return zc().active },
        Jc = function(a, b) { zc().addListener(a, b) },
        Kc = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Hc(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Jc(b, function() { d || c() || (d = !0, a()) })
            } else a()
        },
        Lc = function(a, b) {
            if (!1 === Gc(b)) {
                var c = !1;
                Jc([b], function() {!c && Gc(b) && (a(), c = !0) })
            }
        };
    var Mc = [C.o, C.J],
        Nc = function(a) {
            var b = a[C.nh];
            b && I("GTM", 40);
            var c = a[C.uh];
            c && I("GTM", 41);
            for (var d = ra(b) ? b : [b], e = 0; e < d.length; ++e)
                for (var f = 0; f < Mc.length; f++) {
                    var h = Mc[f],
                        k = a[Mc[f]],
                        l = d[e];
                    zc().set(h, k, l, "VN", "VN-SG", c)
                }
        },
        Oc = function(a) {
            for (var b = 0; b < Mc.length; b++) {
                var c = Mc[b],
                    d = a[Mc[b]];
                zc().update(c, d)
            }
            zc().notifyListeners()
        },
        Pc = function(a) { var b = Gc(a); return void 0 != b ? b : !0 },
        Qc = function() {
            for (var a = [], b = 0; b < Mc.length; b++) {
                var c = Gc(Mc[b]);
                a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
            }
            return "G1" +
                a.join("")
        },
        Rc = function(a) { Lc(a, C.o) },
        Sc = function(a, b) { Kc(a, b) };
    var Uc = function(a) { return Tc ? F.querySelectorAll(a) : null },
        Vc = function(a, b) {
            if (!Tc) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Wc = !1;
    if (F.querySelectorAll) try {
        var Xc = F.querySelectorAll(":root");
        Xc && 1 == Xc.length && Xc[0] == F.documentElement && (Wc = !0)
    } catch (a) {}
    var Tc = Wc;
    var kd = {},
        ld = null,
        md = Math.random();
    kd.s = "UA-107587971-1";
    kd.Ob = "5e1";
    kd.Md = "";
    var nd = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0, __paused: !0, __tg: !0 },
        od = "www.googletagmanager.com/gtm.js";
    od = "www.googletagmanager.com/gtag/js";
    var qd = od,
        rd = null,
        sd = null,
        td = null,
        ud = "//www.googletagmanager.com/a?id=" + kd.s + "&cv=1",
        vd = {},
        wd = {},
        xd = function() {
            var a = ld.sequence || 0;
            ld.sequence = a + 1;
            return a
        };
    var yd = function() { return "&tc=" + ub.filter(function(a) { return a }).length },
        Bd = function() { zd || (zd = D.setTimeout(Ad, 500)) },
        Ad = function() {
            zd && (D.clearTimeout(zd), zd = void 0);
            void 0 === Cd || Dd[Cd] && !Ed && !Fd || (Gd[Cd] || Hd.Rg() || 0 >= Id-- ? (I("GTM", 1), Gd[Cd] = !0) : (Hd.ph(), nc(Jd()), Dd[Cd] = !0, Kd = Ld = Fd = Ed = ""))
        },
        Jd = function() {
            var a = Cd;
            if (void 0 === a) return "";
            var b = xc("GTM"),
                c = xc("TAGGING");
            return [Md, Dd[a] ? "" : "&es=1", Nd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", yd(), Ed, Fd, Ld, Kd, "&z=0"].join("")
        },
        Od = function() {
            return [ud, "&v=3&t=t", "&pid=" +
                wa(), "&rv=" + kd.Ob
            ].join("")
        },
        Pd = "0.005000" > Math.random(),
        Md = Od(),
        Qd = function() { Md = Od() },
        Dd = {},
        Ed = "",
        Fd = "",
        Kd = "",
        Ld = "",
        Cd = void 0,
        Nd = {},
        Gd = {},
        zd = void 0,
        Hd = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Rg: function() {
                    if (c < a) return !1;
                    Fa() - d >= b && (c = 0);
                    return c >= a
                },
                ph: function() {
                    Fa() - d >= b && (c = 0);
                    c++;
                    d = Fa()
                }
            }
        }(2, 1E3),
        Id = 1E3,
        Rd = function(a, b) {
            if (Pd && !Gd[a] && Cd !== a) {
                Ad();
                Cd = a;
                Kd = Ed = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                Nd[a] = "&e=" + c + "&eid=" + a;
                Bd()
            }
        },
        Sd = function(a, b, c) {
            if (Pd && !Gd[a] &&
                b) {
                a !== Cd && (Ad(), Cd = a);
                var d, e = String(b[Hb.ya] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                Ed = Ed ? Ed + "." + f : "&tr=" + f;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (wb[h] ? "1" : "2") + d;
                Kd = Kd ? Kd + "." + k : "&ti=" + k;
                Bd();
                2022 <= Jd().length && Ad()
            }
        },
        Td = function(a, b, c) {
            if (Pd && !Gd[a]) {
                a !== Cd && (Ad(), Cd = a);
                var d = c + b;
                Fd = Fd ? Fd +
                    "." + d : "&epr=" + d;
                Bd();
                2022 <= Jd().length && Ad()
            }
        };
    var Ud = {},
        Vd = new xa,
        Wd = {},
        Xd = {},
        $d = {
            name: "dataLayer",
            set: function(a, b) {
                n(Ma(a, b), Wd);
                Yd()
            },
            get: function(a) { return Zd(a, 2) },
            reset: function() {
                Vd = new xa;
                Wd = {};
                Yd()
            }
        },
        Zd = function(a, b) {
            if (2 != b) {
                var c = Vd.get(a);
                if (Pd) {
                    var d = ae(a);
                    c !== d && I("GTM", 5)
                }
                return c
            }
            return ae(a)
        },
        ae = function(a) {
            var b = a.split("."),
                c = !1,
                d = void 0;
            var e = function(f, h) {
                for (var k = 0; void 0 !== f && k < b.length; k++) {
                    if (null === f) return !1;
                    f = f[b[k]]
                }
                var l;
                if (void 0 !== f || 1 < k) l = f;
                else {
                    var m;
                    if (h.length) {
                        var p;
                        var r =
                            h.pop();
                        if (r) {
                            var u = be(["gtag", "targets", r]);
                            p = Sa(u) ? u : void 0
                        } else p = void 0;
                        m = e(p, h)
                    } else m = be(b);
                    l = m
                }
                return l
            };
            c = !0;
            d = e(Wd.eventModel, [void 0, void 0]);
            return c ? d : be(b)
        },
        be = function(a) {
            for (var b = Wd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var ce = function(a, b) { Xd.hasOwnProperty(a) || (Vd.set(a, b), n(Ma(a, b), Wd), Yd()) },
        Yd = function(a) {
            za(Xd, function(b, c) {
                Vd.set(b, c);
                n(Ma(b, void 0), Wd);
                n(Ma(b, c), Wd);
                a && delete Xd[b]
            })
        },
        de = function(a, b, c) { Ud[a] = Ud[a] || {}; var d = 1 !== c ? ae(b) : Vd.get(b); "array" === Pa(d) || "object" === Pa(d) ? Ud[a][b] = n(d) : Ud[a][b] = d },
        ee = function(a, b) { if (Ud[a]) return Ud[a][b] },
        fe = function(a, b) { Ud[a] && delete Ud[a][b] };
    var ie = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var je = /:[0-9]+$/,
        ke = function(a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var h = f.slice(1).join("="); return c ? h : decodeURIComponent(h).replace(/\+/g, " ") } } },
        ne = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = le(a.protocol) || le(D.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : D.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || D.location.hostname).replace(je, "").toLowerCase());
            return me(a, b, c, d, e)
        },
        me = function(a, b, c, d, e) {
            var f, h = le(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = oe(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(je, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || I("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= ta(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ke(f, e, void 0));
                    break;
                case "extension":
                    var m = a.pathname.split(".");
                    f = 1 < m.length ? m[m.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        le = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
        oe = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        pe = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || I("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(je, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        },
        qe = function(a) {
            function b(m) { var p = m.split("=")[0]; return 0 > d.indexOf(p) ? m : p + "=0" }

            function c(m) { return m.split("&").map(b).filter(function(p) { return void 0 != p }).join("&") }
            var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
                e = pe(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                k = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === k[0] && (k = k.substring(1));
            h = c(h);
            k = c(k);
            "" !== h && (h = "?" + h);
            "" !== k && (k = "#" + k);
            var l = "" + f + h + k;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };

    function re(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var se = {},
        te = function(a) { return void 0 == se[a] ? !1 : se[a] };
    var ve = function(a, b, c, d) { return ue(d) ? re(a, String(b || document.cookie), c) : [] },
        ye = function(a, b, c, d, e) {
            if (ue(e)) {
                var f = we(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = xe(f, function(h) { return h.Ub }, b);
                    if (1 === f.length) return f[0].id;
                    f = xe(f, function(h) { return h.yb }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function ze(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= ve(b, f, !1, d).indexOf(c)
    }
    var De = function(a, b, c) {
            function d(q, t, v) {
                if (null == v) return delete h[t], q;
                h[t] = v;
                return q + "; " + t + "=" + v
            }

            function e(q, t) {
                if (null == t) return delete h[t], q;
                h[t] = !0;
                return q + "; " + t
            }
            if (!ue(c.Da)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ae(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.ai);
            f = d(f, "samesite",
                c.gi);
            c.hi && (f = e(f, "secure"));
            f = e(f, c.flags);
            var l = c.domain;
            if ("auto" === l) {
                for (var m = Be(), p = 0; p < m.length; ++p) {
                    var r = "none" !== m[p] ? m[p] : void 0,
                        u = d(f, "domain", r);
                    if (!Ce(r, c.path) && ze(u, a, b, c.Da)) return 0
                }
                return 1
            }
            l && "none" !== l && (f = d(f, "domain", l));
            return Ce(l, c.path) ? 1 : ze(f, a, b, c.Da) ? 0 : 1
        },
        Ee = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return De(a, b, c)
        };

    function xe(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function we(a, b, c) {
        for (var d = [], e = ve(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"), d.push({ id: h.join("."), Ub: 1 * l[0] || 1, yb: 1 * l[1] || 1 }))
            }
        }
        return d
    }
    var Ae = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        Fe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ge = /(^|\.)doubleclick\.net$/i,
        Ce = function(a, b) { return Ge.test(document.location.hostname) || "/" === b && Fe.test(a) },
        Be = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            Ge.test(e) || Fe.test(e) || a.push("none");
            return a
        },
        ue = function(a) { if (!te("gtag_cs_api") || !a || !Ic()) return !0; if (!Hc(a)) return !1; var b = Gc(a); return null == b ? !0 : !!b };
    var He = function() {
            for (var a = gc.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = D.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, f, h;
            if (a)
                for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
        },
        Ke = function(a, b, c, d, e) { var f = Ie(b); return ye(a, f, Je(c), d, e) },
        Le = function(a, b, c, d) {
            var e = "" + Ie(c),
                f = Je(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Ie = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Je = function(a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 };

    function Me(a, b, c) {
        var d, e = a.wb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Fa()) + 1E3 * e));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d }
    };
    var Ne = ["1"],
        Oe = {},
        Se = function(a) {
            var b = Pe(a.prefix);
            Oe[b] || Qe(b, a.path, a.domain) || (Re(b, He(), a), Qe(b, a.path, a.domain))
        };

    function Re(a, b, c) {
        var d = Le(b, "1", c.domain, c.path),
            e = Me(c);
        e.Da = "ad_storage";
        Ee(a, d, e)
    }

    function Qe(a, b, c) {
        var d = Ke(a, b, c, Ne, "ad_storage");
        d && (Oe[a] = d);
        return d
    }

    function Pe(a) { return (a || "_gcl") + "_au" };

    function Te() { for (var a = Ue, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function Ve() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ue, We;

    function Xe(a) {
        Ue = Ue || Ve();
        We = We || Te();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                m = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | k >> 6,
                r = k & 63;
            e || (r = 64, d || (p = 64));
            b.push(Ue[l], Ue[m], Ue[p], Ue[r])
        }
        return b.join("")
    }

    function Ye(a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    p = We[m];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Ue = Ue || Ve();
        We = We || Te();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var Ze;
    var cf = function() {
            var a = $e,
                b = af,
                c = bf(),
                d = function(h) { a(h.target || h.srcElement || {}) },
                e = function(h) { b(h.target || h.srcElement || {}) };
            if (!c.init) {
                oc(F, "mousedown", d);
                oc(F, "keyup", d);
                oc(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        df = function(a, b, c, d, e) {
            var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            bf().decorators.push(f)
        },
        ef = function(a, b, c) {
            for (var d = bf().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    k;
                if (k = !c || h.forms) a: {
                    var l = h.domains,
                        m = a;
                    if (l && (h.sameHost || m !== F.location.hostname))
                        for (var p = 0; p < l.length; p++)
                            if (l[p] instanceof RegExp) { if (l[p].test(m)) { k = !0; break a } } else if (0 <= m.indexOf(l[p])) { k = !0; break a }
                    k = !1
                }
                if (k) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Ia(e, h.callback())
                }
            }
            return e
        },
        bf = function() {
            var a = ic("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = { decorators: [] }, a.gl = b);
            return b
        };
    var ff = /(.*?)\*(.*?)\*(.*)/,
        gf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        hf = /^(?:www\.|m\.|amp\.)+/,
        jf = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function kf(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var mf = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Xe(String(d))))
                }
            var e = b.join("*");
            return ["1", lf(e), e].join("*")
        },
        lf = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = Ze)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h =
                        h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            Ze = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Ze[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        of = function() {
            return function(a) {
                var b = pe(D.location.href),
                    c = b.search.replace("?", ""),
                    d = ke(c, "_gl", !0) || "";
                a.query = nf(d) || {};
                var e = ne(b, "fragment").match(kf("_gl"));
                a.fragment = nf(e && e[3] || "") || {}
            }
        },
        pf = function(a) {
            var b = of(),
                c = bf();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ia(d, e.query), a && Ia(d, e.fragment));
            return d
        },
        nf =
        function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = ff.exec(d);
                            if (f) { c = f; break a }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], p = 0; p < b; ++p)
                                if (m === lf(k, p)) { l = !0; break a }
                            l = !1
                        }
                        if (l) { for (var r = {}, u = k ? k.split("*") : [], q = 0; q < u.length; q += 2) r[u[q]] = Ye(u[q + 1]); return r }
                    }
                }
            } catch (t) {}
        };

    function qf(a, b, c, d) {
        function e(p) {
            var r = p,
                u = kf(a).exec(r),
                q = r;
            if (u) {
                var t = u[2],
                    v = u[4];
                q = u[1];
                v && (q = q + t + v)
            }
            p = q;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + m
        }
        d = void 0 === d ? !1 : d;
        var f = jf.exec(c);
        if (!f) return "";
        var h = f[1],
            k = f[2] || "",
            l = f[3] || "",
            m = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }

    function rf(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ef(b, 1, c),
            e = ef(b, 2, c),
            f = ef(b, 3, c);
        if (Ja(d)) {
            var h = mf(d);
            c ? sf("_gl", h, a) : tf("_gl", h, a, !1)
        }
        if (!c && Ja(e)) {
            var k = mf(e);
            tf("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var m = l,
                    p = f[l],
                    r = a;
                if (r.tagName) { if ("a" === r.tagName.toLowerCase()) { tf(m, p, r, void 0); break a } if ("form" === r.tagName.toLowerCase()) { sf(m, p, r); break a } }
                "string" == typeof r && qf(m, p, r, void 0)
            }
    }

    function tf(a, b, c, d) {
        if (c.href) {
            var e = qf(a, b, c.href, void 0 === d ? !1 : d);
            ie.test(e) && (c.href = e)
        }
    }

    function sf(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = F.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var m = qf(a, b, c.action);
                ie.test(m) && (c.action = m)
            }
        }
    }
    var $e = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || rf(e, e.hostname) }
            } catch (h) {}
        },
        af = function(a) {
            try {
                if (a.action) {
                    var b = ne(pe(a.action), "host");
                    rf(a, b)
                }
            } catch (c) {}
        },
        uf = function(a, b, c, d) {
            cf();
            df(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        vf = function(a, b) {
            cf();
            df(a, [me(D.location, "host", !0)], b, !0, !0)
        },
        wf = function() {
            var a = F.location.hostname,
                b = gf.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(hf, ""),
                l = e.replace(hf, ""),
                m;
            if (!(m = k === l)) {
                var p = "." + l;
                m = k.substring(k.length - p.length, k.length) === p
            }
            return m
        },
        xf = function(a, b) { return !1 === a ? !1 : a || b || wf() };
    var yf = /^\w+$/,
        zf = /^[\w-]+$/,
        Af = /^~?[\w-]+$/,
        Bf = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" },
        Cf = function() { if (!te("gtag_cs_api") || !Ic()) return !0; var a = Gc("ad_storage"); return null == a ? !0 : !!a },
        Df = function(a, b) { Hc("ad_storage") ? Cf() ? a() : Lc(a, "ad_storage") : b ? I("TAGGING", 3) : Kc(function() { Df(a, !0) }, ["ad_storage"]) },
        Gf = function(a) {
            var b = [];
            if (!F.cookie) return b;
            var c = ve(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = 0; d < c.length; d++) {
                var e = Ef(c[d]);
                e && -1 === ta(b, e) && b.push(e)
            }
            return Ff(b)
        };

    function Hf(a) { return a && "string" == typeof a && a.match(yf) ? a : "_gcl" }
    var Jf = function() {
            var a = pe(D.location.href),
                b = ne(a, "query", !1, void 0, "gclid"),
                c = ne(a, "query", !1, void 0, "gclsrc"),
                d = ne(a, "query", !1, void 0, "dclid");
            if (!b || !c) {
                var e = a.hash.replace("#", "");
                b = b || ke(e, "gclid", void 0);
                c = c || ke(e, "gclsrc", void 0)
            }
            return If(b, c, d)
        },
        If = function(a, b, c) {
            var d = {},
                e = function(f, h) {
                    d[h] || (d[h] = []);
                    d[h].push(f)
                };
            d.gclid = a;
            d.gclsrc = b;
            d.dclid = c;
            if (void 0 !== a && a.match(zf)) switch (b) {
                case void 0:
                    e(a, "aw");
                    break;
                case "aw.ds":
                    e(a, "aw");
                    e(a, "dc");
                    break;
                case "ds":
                    e(a, "dc");
                    break;
                case "3p.ds":
                    te("gtm_3pds") &&
                        e(a, "dc");
                    break;
                case "gf":
                    e(a, "gf");
                    break;
                case "ha":
                    e(a, "ha");
                    break;
                case "gp":
                    e(a, "gp")
            }
            c && e(c, "dc");
            return d
        },
        Lf = function(a) {
            var b = Jf();
            Df(function() { return Kf(b, a) })
        };

    function Kf(a, b, c) {
        function d(m, p) {
            var r = Mf(m, e);
            r && (Ee(r, p, f), h = !0)
        }
        b = b || {};
        var e = Hf(b.prefix);
        c = c || Fa();
        var f = Me(b, c, !0);
        f.Da = "ad_storage";
        var h = !1,
            k = Math.round(c / 1E3),
            l = function(m) { return ["GCL", k, m].join(".") };
        a.aw && (!0 === b.li ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0])));
        a.dc && d("dc", l(a.dc[0]));
        a.gf && d("gf", l(a.gf[0]));
        a.ha && d("ha", l(a.ha[0]));
        a.gp && d("gp", l(a.gp[0]));
        return h
    }
    var Of = function(a, b) {
            var c = pf(!0);
            Df(function() {
                for (var d = Hf(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Bf[f]) {
                        var h = Mf(f, d),
                            k = c[h];
                        if (k) {
                            var l = Math.min(Nf(k), Fa()),
                                m;
                            b: {
                                for (var p = l, r = ve(h, F.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
                                    if (Nf(r[u]) > p) { m = !0; break b }
                                m = !1
                            }
                            if (!m) {
                                var q = Me(b, l, !0);
                                q.Da = "ad_storage";
                                Ee(h, k, q)
                            }
                        }
                    }
                }
                Kf(If(c.gclid, c.gclsrc), b)
            })
        },
        Mf = function(a, b) { var c = Bf[a]; if (void 0 !== c) return b + c },
        Nf = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function Ef(a) { var b = a.split("."); if (3 == b.length && "GCL" == b[0] && b[1]) return b[2] }
    var Pf = function(a, b, c, d, e) {
            if (ra(b)) {
                var f = Hf(e),
                    h = function() {
                        for (var k = {}, l = 0; l < a.length; ++l) {
                            var m = Mf(a[l], f);
                            if (m) {
                                var p = ve(m, F.cookie, void 0, "ad_storage");
                                p.length && (k[m] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Df(function() { uf(h, b, c, d) })
            }
        },
        Ff = function(a) { return a.filter(function(b) { return Af.test(b) }) },
        Qf = function(a, b) {
            for (var c = Hf(b.prefix), d = {}, e = 0; e < a.length; e++) Bf[a[e]] && (d[a[e]] = Bf[a[e]]);
            Df(function() {
                za(d, function(f, h) {
                    var k = ve(c + h, F.cookie, void 0, "ad_storage");
                    if (k.length) {
                        var l = k[0],
                            m = Nf(l),
                            p = {};
                        p[f] = [Ef(l)];
                        Kf(p, b, m)
                    }
                })
            })
        };

    function Rf(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Sf = function() {
            function a(e, f, h) { h && (e[f] = h) }
            var b = ["aw", "dc"];
            if (Ic()) {
                var c = Jf();
                if (Rf(c, b)) {
                    var d = {};
                    a(d, "gclid", c.gclid);
                    a(d, "dclid", c.dclid);
                    a(d, "gclsrc", c.gclsrc);
                    vf(function() { return d }, 3);
                    vf(function() { var e = {}; return e._up = "1", e }, 1)
                }
            }
        },
        Tf = function() {
            var a;
            if (Cf()) {
                for (var b = [], c = F.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                    var f = c[e].match(d);
                    f && b.push({ rd: f[1], value: f[2] })
                }
                var h = {};
                if (b && b.length)
                    for (var k = 0; k < b.length; k++) {
                        var l = b[k].value.split(".");
                        "1" == l[0] && 3 == l.length && l[1] && (h[b[k].rd] || (h[b[k].rd] = []), h[b[k].rd].push({ timestamp: l[1], Cg: l[2] }))
                    }
                a = h
            } else a = {};
            return a
        };
    var Uf = /^\d+\.fls\.doubleclick\.net$/;

    function Vf(a, b) { Hc(C.o) ? Pc(C.o) ? a() : Rc(a) : b ? I("GTM", 42) : Sc(function() { Vf(a, !0) }, [C.o]) }

    function Wf(a) {
        var b = pe(D.location.href),
            c = ne(b, "host", !1);
        if (c && c.match(Uf)) { var d = ne(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] }
    }

    function Xf(a, b, c) {
        if ("aw" == a || "dc" == a) { var d = Wf("gcl" + a); if (d) return d.split(".") }
        var e = Hf(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Pc(C.o) && c,
                h;
            h = Jf()[a] || [];
            if (0 < h.length) return f ? ["0"] : h
        }
        var k = Mf(a, e);
        return k ? Gf(k) : []
    }
    var Yf = function(a) {
            var b = Wf("gac");
            if (b) return !Pc(C.o) && a ? "0" : decodeURIComponent(b);
            var c = Tf(),
                d = [];
            za(c, function(e, f) {
                for (var h = [], k = 0; k < f.length; k++) h.push(f[k].Cg);
                h = Ff(h);
                h.length && d.push(e + ":" + h.join(","))
            });
            return d.join(";")
        },
        Zf = function(a, b) {
            var c = Jf().dc || [];
            Vf(function() {
                Se(b);
                var d = Oe[Pe(b.prefix)],
                    e = !1;
                if (d && 0 < c.length) {
                    var f = ld.joined_au = ld.joined_au || {},
                        h = b.prefix || "_gcl";
                    if (!f[h])
                        for (var k = 0; k < c.length; k++) {
                            var l = "https://adservice.google.com/ddm/regclk";
                            l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                            uc(l);
                            e = f[h] = !0
                        }
                }
                null == a && (a = e);
                if (a && d) {
                    var m = Pe(b.prefix),
                        p = Oe[m];
                    p && Re(m, p, b)
                }
            })
        };
    var $f = /[A-Z]+/,
        ag = /\s/,
        bg = function(a) {
            if (g(a) && (a = Da(a), !ag.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if ($f.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], w: d }
                    }
                }
            }
        },
        dg = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = bg(a[c]);
                d && (b[d.id] = d)
            }
            cg(b);
            var e = [];
            za(b, function(f, h) { e.push(h) });
            return e
        };

    function cg(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.w[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var eg = function() { var a = !1; return a };
    var K = function(a, b, c, d) { return (2 === fg() || d || "http:" != D.location.protocol ? a : b) + c },
        fg = function() {
            var a = lc(),
                b;
            if (1 === a) a: {
                var c = qd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = F.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var hg = function(a, b, c) {
            if (D[a.functionName]) return b.dd && G(b.dd), D[a.functionName];
            var d = gg();
            D[a.functionName] = d;
            if (a.Qb)
                for (var e = 0; e < a.Qb.length; e++) D[a.Qb[e]] = D[a.Qb[e]] || gg();
            a.Zb && void 0 === D[a.Zb] && (D[a.Zb] = c);
            kc(K("https://", "http://", a.od), b.dd, b.bh);
            return d
        },
        gg = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        ig = { functionName: "_googWcmImpl", Zb: "_googWcmAk", od: "www.gstatic.com/wcm/loader.js" },
        jg = { functionName: "_gaPhoneImpl", Zb: "ga_wpid", od: "www.gstatic.com/gaphone/loader.js" },
        kg = { $e: "", Df: "1" },
        lg = { functionName: "_googCallTrackingImpl", Qb: [jg.functionName, ig.functionName], od: "www.gstatic.com/call-tracking/call-tracking_" + (kg.$e || kg.Df) + ".js" },
        mg = {},
        ng = function(a, b, c, d) {
            I("GTM", 22);
            if (c) {
                d = d || {};
                var e = hg(ig, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.la && (f.autoreplace = c);
                e(2, d.la, f, c, 0, new Date, d.options)
            }
        },
        og = function(a, b, c, d) {
            I("GTM", 21);
            if (b && c) {
                d = d || {};
                for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: new Date }, f = 0; f < a.length; f++) {
                    var h =
                        a[f];
                    mg[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.w.length ? (e.adData = { ak: h.w[0], cl: h.w[1] }, mg[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = { gaWpid: h.containerId }, mg[h.id] = !0))
                }(e.gaData || e.adData) && hg(lg, d)(d.la, e, d.options)
            }
        },
        pg = function() { var a = !1; return a },
        qg = function(a, b) {
            if (a)
                if (eg()) {} else {
                    if (g(a)) {
                        var c =
                            bg(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(C.Bf);
                    if (f && ra(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var k = bg(f[h]);
                            k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = b.getWithConfig(C.ye),
                            m;
                        if (l) {
                            ra(l) ? m = l : m = [l];
                            var p = b.getWithConfig(C.qe),
                                r = b.getWithConfig(C.se),
                                u = b.getWithConfig(C.ze),
                                q = b.getWithConfig(C.Af),
                                t = p || r,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < m.length; w++)
                                if (w < v)
                                    if (d) og(d, m[w], q, { la: t, options: u });
                                    else if ("AW" === a.prefix &&
                                a.w[1]) pg() ? og([a], m[w], q || "US", { la: t, options: u }) : ng(a.w[0], a.w[1], m[w], { la: t, options: u });
                            else if ("UA" === a.prefix)
                                if (pg()) og([a], m[w], q || "US", { la: t });
                                else {
                                    var y = a.containerId,
                                        x = m[w],
                                        A = { la: t };
                                    I("GTM", 23);
                                    if (x) {
                                        A = A || {};
                                        var B = hg(jg, A, y),
                                            z = {};
                                        void 0 !== A.la ? z.receiver = A.la : z.replace = x;
                                        z.ga_wpid = y;
                                        z.destination = x;
                                        B(2, new Date, z)
                                    }
                                }
                        }
                    }
                }
        };
    var tg = function(a) { return Pc(C.o) ? a : a.replace(/&url=([^&#]+)/, function(b, c) { var d = qe(decodeURIComponent(c)); return "&url=" + encodeURIComponent(d) }) };
    var ug = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        vg = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        wg = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        xg = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var zg = function(a) {
            var b = Zd("gtm.whitelist");
            b && I("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Ka(Ca(b), vg),
                d = Zd("gtm.blacklist");
            d || (d = Zd("tagTypeBlacklist")) && I("GTM", 3);
            d ?
                I("GTM", 8) : d = [];
            yg() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= ta(Ca(d), "google") && I("GTM", 2);
            var e = d && Ka(Ca(d), wg),
                f = {};
            return function(h) {
                var k = h && h[Hb.ya];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = wd[k] || [],
                    m = a(k, l);
                if (b) {
                    var p;
                    if (p = m) a: {
                        if (0 > ta(c, k))
                            if (l && 0 < l.length)
                                for (var r =
                                        0; r < l.length; r++) {
                                    if (0 > ta(c, l[r])) {
                                        I("GTM", 11);
                                        p = !1;
                                        break a
                                    }
                                } else { p = !1; break a }
                        p = !0
                    }
                    m = p
                }
                var u = !1;
                if (d) {
                    var q = 0 <= ta(e, k);
                    if (q) u = q;
                    else {
                        var t = ya(e, l || []);
                        t && I("GTM", 10);
                        u = t
                    }
                }
                var v = !m || u;
                v || !(0 <= ta(l, "sandboxedScripts")) || c && -1 !== ta(c, "sandboxedScripts") || (v = ya(e, xg));
                return f[k] = v
            }
        },
        yg = function() { return ug.test(D.location && D.location.hostname) };
    var Bg = {
        mg: function(a, b) {
            b[Hb.Cd] && "string" === typeof a && (a = 1 == b[Hb.Cd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Hb.Ed) && null === a && (a = b[Hb.Ed]);
            b.hasOwnProperty(Hb.Gd) && void 0 === a && (a = b[Hb.Gd]);
            b.hasOwnProperty(Hb.Fd) && !0 === a && (a = b[Hb.Fd]);
            b.hasOwnProperty(Hb.Dd) && !1 === a && (a = b[Hb.Dd]);
            return a
        }
    };
    var Cg = { active: !0, isWhitelisted: function() { return !0 } },
        Dg = function(a) { var b = ld.zones;!b && a && (b = ld.zones = a()); return b };
    var Eg = function() {};
    var Fg = !1,
        Gg = 0,
        Hg = [];

    function Ig(a) {
        if (!Fg) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { Fg = !0; for (var e = 0; e < Hg.length; e++) G(Hg[e]) }
            Hg.push = function() { for (var f = 0; f < arguments.length; f++) G(arguments[f]); return 0 }
        }
    }

    function Jg() { if (!Fg && 140 > Gg) { Gg++; try { F.documentElement.doScroll("left"), Ig() } catch (a) { D.setTimeout(Jg, 50) } } }
    var Kg = function(a) { Fg ? a() : Hg.push(a) };
    var Lg = {},
        Mg = {},
        Ng = function(a, b, c, d) {
            if (!Mg[a] || nd[b] || "__zone" === b) return -1;
            var e = {};
            Sa(d) && (e = n(d, e));
            e.id = c;
            e.status = "timeout";
            return Mg[a].tags.push(e) - 1
        },
        Og = function(a, b, c, d) {
            if (Mg[a]) {
                var e = Mg[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Pg(a) {
        for (var b = Lg[a] || [], c = 0; c < b.length; c++) b[c]();
        Lg[a] = { push: function(d) { d(kd.s, Mg[a]) } }
    }
    var Sg = function(a, b, c) {
            Mg[a] = { tags: [] };
            pa(b) && Qg(a, b);
            c && D.setTimeout(function() { return Pg(a) }, Number(c));
            return Rg(a)
        },
        Qg = function(a, b) {
            Lg[a] = Lg[a] || [];
            Lg[a].push(Ha(function() { return G(function() { b(kd.s, Mg[a]) }) }))
        };

    function Rg(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return Ha(function() {
                    b++;
                    d && b >= c && Pg(a)
                })
            },
            Yf: function() {
                d = !0;
                b >= c && Pg(a)
            }
        }
    };
    var Tg = function() {
        function a(d) { return !qa(d) || 0 > d ? 0 : d }
        if (!ld._li && D.performance && D.performance.timing) {
            var b = D.performance.timing.navigationStart,
                c = qa($d.get("gtm.start")) ? $d.get("gtm.start") : 0;
            ld._li = { cst: a(c - b), cbt: a(sd - b) }
        }
    };
    var Xg = {},
        Yg = function() { return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject] },
        Zg = !1;
    var $g = function(a) {
            D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
            var b = D.GoogleAnalyticsObject;
            if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                D[b] = c
            }
            Tg();
            return D[b]
        },
        ah = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Yg();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var ch = function(a) {},
        bh = function() { return D.GoogleAnalyticsObject || "ga" };

    function ih(a, b, c, d) {
        var e = ub[a],
            f = jh(a, b, c, d);
        if (!f) return null;
        var h = Db(e[Hb.Vd], c, []);
        if (h && h.length) {
            var k = h[0];
            f = ih(k.index, { C: f, B: 1 === k.te ? b.terminate : f, terminate: b.terminate }, c, d)
        }
        return f
    }

    function jh(a, b, c, d) {
        function e() {
            if (f[Hb.sf]) k();
            else {
                var w = Eb(f, c, []),
                    y = Ng(c.id, String(f[Hb.ya]), Number(f[Hb.Xd]), w[Hb.tf]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var z = Fa() - B;
                        Sd(c.id, ub[a], "5");
                        Og(c.id, y, "success", z);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var z = Fa() - B;
                        Sd(c.id, ub[a], "6");
                        Og(c.id, y, "failure", z);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Sd(c.id, f, "1");
                var A = function() {
                    var z = Fa() - B;
                    Sd(c.id, f, "7");
                    Og(c.id, y, "exception", z);
                    x || (x = !0, k())
                };
                var B = Fa();
                try { Bb(w, c) } catch (z) { A(z) }
            }
        }
        var f = ub[a],
            h = b.C,
            k = b.B,
            l = b.terminate;
        if (c.Yc(f)) return null;
        var m = Db(f[Hb.Yd], c, []);
        if (m && m.length) {
            var p = m[0],
                r = ih(p.index, { C: h, B: k, terminate: l }, c, d);
            if (!r) return null;
            h = r;
            k = 2 === p.te ? l : r
        }
        if (f[Hb.Nd] || f[Hb.xf]) {
            var u = f[Hb.Nd] ? vb : c.yh,
                q = h,
                t = k;
            if (!u[a]) {
                e = Ha(e);
                var v = kh(a, u, e);
                h = v.C;
                k = v.B
            }
            return function() { u[a](q, t) }
        }
        return e
    }

    function kh(a, b, c) {
        var d = [],
            e = [];
        b[a] = lh(d, e, c);
        return { C: function() { b[a] = mh; for (var f = 0; f < d.length; f++) d[f]() }, B: function() { b[a] = nh; for (var f = 0; f < e.length; f++) e[f]() } }
    }

    function lh(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function mh(a) { a() }

    function nh(a, b) { b() };
    var qh = function(a, b) {
        for (var c = [], d = 0; d < ub.length; d++)
            if (a.xb[d]) {
                var e = ub[d];
                var f = b.add();
                try {
                    var h = ih(d, { C: f, B: f, terminate: f }, a, d);
                    h ? c.push({ We: d, Qe: Fb(e), yg: h }) : (oh(d, a), f())
                } catch (l) { f() }
            }
        b.Yf();
        c.sort(ph);
        for (var k = 0; k < c.length; k++) c[k].yg();
        return 0 < c.length
    };

    function ph(a, b) {
        var c, d = b.Qe,
            e = a.Qe;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.We,
                k = b.We;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function oh(a, b) {
        if (!Pd) return;
        var c = function(d) {
            var e = b.Yc(ub[d]) ? "3" : "4",
                f = Db(ub[d][Hb.Vd], b, []);
            f && f.length && c(f[0].index);
            Sd(b.id, ub[d], e);
            var h = Db(ub[d][Hb.Yd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var rh = !1,
        sh = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (rh) return !1;
                rh = !0
            }
            Rd(a, b);
            var f = Sg(a, d, e);
            de(a, "event", 1);
            de(a, "ecommerce", 1);
            de(a, "gtm");
            var h = { id: a, name: b, Yc: zg(c), xb: [], yh: [], Ge: function() { I("GTM", 6) } };
            h.xb = Lb(h);
            var k = qh(h, f);
            "gtm.js" !== b && "gtm.sync" !== b || ch(kd.s);
            if (!k) return k;
            for (var l = 0; l < h.xb.length; l++)
                if (h.xb[l]) { var m = ub[l]; if (m && !nd[String(m[Hb.ya])]) return !0 }
            return !1
        };
    var th = function(a, b) {
        var c = Ab(a, b);
        ub.push(c);
        return ub.length - 1
    };

    function uh(a, b) {}

    function vh(a, b) { return wh() ? uh(a, b) : void 0 }

    function wh() { var a = !1; return a };
    var xh = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.h = {};
            this.globalConfig = {};
            this.C = function() {};
            this.B = function() {};
            this.eventId = void 0
        },
        yh = function(a) {
            var b = new xh;
            b.eventModel = a;
            return b
        },
        zh = function(a, b) { a.targetConfig = b; return a },
        Ah = function(a, b) { a.containerConfig = b; return a },
        Bh = function(a, b) { a.h = b; return a },
        Ch = function(a, b) { a.globalConfig = b; return a },
        Dh = function(a, b) { a.C = b; return a },
        Eh = function(a, b) { a.B = b; return a };
    xh.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.h[a]) return this.h[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a] };
    var Fh = function(a) {
        function b(e) { za(e, function(f) { c[f] = null }) }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        za(c, function(e) { d.push(e) });
        return d
    };
    var Gh;
    if (3 === kd.Ob.length) Gh = "g";
    else {
        var Hh = "G";
        Hh = "g";
        Gh = Hh
    }
    var Ih = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Gh, OPT: "o" },
        Jh = function(a) {
            var b = kd.s.split("-"),
                c = b[0].toUpperCase(),
                d = Ih[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === kd.Ob.length) {
                var h = "w";
                h = eg() ? "s" : "o";
                f = "2" + h
            } else f = "";
            return f + d + kd.Ob + e
        };

    function Kh() {
        var a = !1;
        a = Ic();
        return a
    }

    function Lh(a, b, c) {
        function d(r) {
            var u;
            ld.reported_gclid || (ld.reported_gclid = {});
            u = ld.reported_gclid;
            var q = f + (r ? "gcu" : "gcs");
            if (!u[q]) {
                u[q] = !0;
                var t = [],
                    v = function(B, z) { z && t.push(B + "=" + encodeURIComponent(z)) },
                    w = "https://www.google.com";
                if (Ic()) {
                    var y = Pc(C.o);
                    v("gcs", Qc());
                    r && v("gcu", "1");
                    v("rnd", p);
                    if ((!f || h && "aw.ds" !== h) && Pc(C.o)) {
                        var x = Gf("_gcl_aw");
                        v("gclaw", x.join("."))
                    }
                    v("url", String(D.location).split(/[?#]/)[0]);
                    v("dclid", Mh(b, k));
                    !y && b && (w = "https://pagead2.googlesyndication.com")
                }
                v("gclid", Mh(b, f));
                v("gclsrc", h);
                v("gtm", Jh(!c));
                var A = w + "/pagead/landing?" + t.join("&");
                uc(A)
            }
        }
        var e = Jf(),
            f = e.gclid || "",
            h = e.gclsrc,
            k = e.dclid || "",
            l = !a && (!f || h && "aw.ds" !== h ? !1 : !0),
            m = Kh();
        if (l || m) {
            var p = "" + He();
            m ? Sc(function() {
                d();
                Pc(C.o) || Rc(function() { return d(!0) })
            }, [C.o]) : d()
        }
    }

    function Mh(a, b) { var c = a && !Pc(C.o); if (b && c) return "0"; return b }
    var Nh = function(a) { var b = vh(a, "/pagead/conversion_async.js"); return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? K("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js" },
        Oh = !1,
        Ph = [],
        Qh = ["aw", "dc"],
        Rh = function(a) {
            var b = D.google_trackConversion,
                c = a.gtm_onFailure;
            "function" == typeof b ? b(a) || c() : c()
        },
        Sh = function() { for (; 0 < Ph.length;) Rh(Ph.shift()) },
        Th = function(a) {
            if (!Oh) {
                Oh = !0;
                Tg();
                var b = function() {
                    Sh();
                    Ph = { push: Rh }
                };
                eg() ? b() : kc(a, b, function() {
                    Sh();
                    Oh = !1
                })
            }
        },
        Uh = function(a) {
            if (a) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price, start_date: d.start_date, end_date: d.end_date })
                }
                return b
            }
        },
        Vh = function(a, b, c, d) {
            function e() {
                var T = !1;
                T = !0;
                T && Ic() ? Sc(function() {
                    var L = Pc(C.o);
                    if (m) N("gcs", Qc()), L || y || !r || (E.google_transport_url = "https://pagead2.googlesyndication.com/"), Ph.push(E);
                    else if (L) { Ph.push(E); return }
                    L || Rc(function() {
                        E = n(E);
                        !y && E.google_transport_url && delete E.google_transport_url;
                        m && (N("gcs", Qc()), N("gcu", "1"));
                        Ph.push(E)
                    })
                }, [C.o]) : Ph.push(E)
            }
            var f = bg(a),
                h = b == C.F,
                k = f.w[0],
                l = f.w[1],
                m = void 0 !== l,
                p = function(T) { return d.getWithConfig(T) },
                r = void 0 != p(C.M) && !1 !== p(C.M),
                u = !1 !== p(C.La),
                q = p(C.Ka) || p(C.Z),
                t = p(C.Y),
                v = p(C.fa),
                w = p(C.ia),
                y = p(C.va),
                x = Nh(y),
                A = { prefix: q, domain: t, wb: v, flags: w };
            if (h) {
                var B = p(C.xa) || {};
                u && (xf(B[C.hb], !!B[C.K]) && Of(Qh, A), Lf(A), Qf(["aw", "dc"], A));
                B[C.K] && Pf(Qh, B[C.K], B[C.jb], !!B[C.ib], q);
                qg(f, d);
                Lh(!1, r, a);
            }
            var z = !1 === p(C.Od) || !1 === p(C.mb);
            if (!h || !m && !z)
                if (!0 === p(C.Qd) && (m = !1), !1 !== p(C.da) || m) {
                    var E = {
                        google_conversion_id: k,
                        google_remarketing_only: !m,
                        onload_callback: d.C,
                        gtm_onFailure: d.B,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: l,
                        google_conversion_language: p(C.Na),
                        google_conversion_value: p(C.ca),
                        google_conversion_currency: p(C.ja),
                        google_conversion_order_id: p(C.nb),
                        google_user_id: p(C.pb),
                        google_conversion_page_url: p(C.kb),
                        google_conversion_referrer_url: p(C.lb),
                        google_gtm: Jh()
                    };
                    m && (E.google_transport_url = uh(y, "/"));
                    E.google_restricted_data_processing = p(C.Bc);
                    eg() && (E.opt_image_generator = function() { return new Image },
                        E.google_enable_display_cookie_match = !1);
                    !1 === p(C.da) && (E.google_allow_ad_personalization_signals = !1);
                    E.google_read_gcl_cookie_opt_out = !u;
                    u && q && (E.google_gcl_cookie_prefix = q);
                    var H = function() {
                        var T = p(C.bc),
                            L = { event: b };
                        if (ra(T)) {
                            I("GTM", 26);
                            for (var J = 0; J < T.length; ++J) {
                                var U = T[J],
                                    aa = p(U);
                                void 0 !== aa && (L[U] = aa)
                            }
                            return L
                        }
                        var V = d.eventModel;
                        if (!V) return null;
                        n(V, L);
                        for (var ma = 0; ma < C.Jd.length; ++ma) delete L[C.Jd[ma]];
                        return L
                    }();
                    H && (E.google_custom_params = H);
                    !m && p(C.T) && (E.google_gtag_event_data = {
                        items: p(C.T),
                        value: p(C.ca)
                    });
                    if (m && b == C.na) {
                        E.google_conversion_merchant_id = p(C.$d);
                        E.google_basket_feed_country = p(C.Ud);
                        E.google_basket_feed_language = p(C.Wd);
                        E.google_basket_discount = p(C.Rd);
                        E.google_basket_transaction_type = b;
                        E.google_disable_merchant_reported_conversions = !0 === p(C.de);
                        eg() && (E.google_disable_merchant_reported_conversions = !0);
                        var M = Uh(p(C.T));
                        M && (E.google_conversion_items = M)
                    }
                    var N = function(T, L) {
                        void 0 != L && "" !== L && (E.google_additional_conversion_params = E.google_additional_conversion_params || {},
                            E.google_additional_conversion_params[T] = L)
                    };
                    m && (N("vdnc", p(C.ie)), N("vdltv", p(C.ae)));
                    E.google_gtm_url_processor = function(T) { r && (T = tg(T)); return T };
                    var Y = !0;
                    Y && e()
                }
            Th(x)
        };

    var Wh = function(a) { return !(void 0 === a || null === a || 0 === (a + "").length) },
        Xh = function(a, b) {
            var c;
            if (2 === b.X) return a("ord", wa(1E11, 1E13)), !0;
            if (3 === b.X) return a("ord", "1"), a("num", wa(1E11, 1E13)), !0;
            if (4 === b.X) return Wh(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.X) c = "1";
            else if (6 === b.X) c = b.md;
            else return !1;
            Wh(c) && a("qty", c);
            Wh(b.Rb) && a("cost", b.Rb);
            Wh(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Zh = function(a, b, c) {
            function d(A, B, z) { r.hasOwnProperty(A) || (B = String(B), p.push(";" + A + "=" + (z ? B : Yh(B)))) }
            var e = a.Rc,
                f = a.pd,
                h = a.protocol;
            h += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            var k = ";",
                l = !0;
            l = Pc(C.o);
            var m = !l && a.zb;
            m && (h = "https://ade.googlesyndication.com/ddm/activity", k = "/", f = !1);
            var p = [k, "src=" + Yh(e), ";type=" + Yh(a.Uc), ";cat=" + Yh(a.rb)],
                r = a.rg || {};
            za(r, function(A, B) { p.push(";" + Yh(A) + "=" + Yh(B + "")) });
            if (Xh(d, a)) {
                Wh(a.vc) && d("u", a.vc);
                Wh(a.uc) && d("tran", a.uc);
                d("gtm",
                    Jh());
                Ic() && (d("gcs", Qc()), c && d("gcu", "1"));
                !1 === a.Uf && d("npa", "1");
                if (a.Qc) {
                    var u = void 0 === a.zb ? !0 : !!a.zb,
                        q = Xf("dc", a.Oa, u);
                    q && q.length && d("gcldc", q.join("."));
                    var t = Xf("aw", a.Oa, u);
                    t && t.length && d("gclaw", t.join("."));
                    var v = Yf(u);
                    v && d("gac", v);
                    Se({
                        prefix: a.Oa,
                        wb: a.og,
                        domain: a.ng,
                        flags: a.Vh
                    });
                    var w = Oe[Pe(a.Oa)];
                    w && d("auiddc", w)
                }
                Wh(a.hd) && d("prd", a.hd, !0);
                za(a.td, function(A, B) { d(A, B) });
                p.push(b || "");
                if (Wh(a.ic)) {
                    var y = a.ic || "";
                    m && (y = qe(y));
                    d("~oref", y)
                }
                var x = h + p.join("") + "?";
                f ? mc(x, a.C) : nc(x, a.C, a.B)
            } else G(a.B)
        },
        Yh = encodeURIComponent,
        $h = function(a, b) {
            var c = !1;
            c = !0;
            c && Ic() ? Sc(function() {
                Zh(a, b);
                Pc(C.o) ||
                    Rc(function() { Zh(a, b, !0) })
            }, [C.o]) : Zh(a, b)
        };
    var ai = function(a, b, c, d) {
            function e() {
                var f = { config: a, gtm: Jh() };
                c && (Se(d), f.auiddc = Oe[Pe(d.prefix)]);
                b && (f.loadInsecure = b);
                void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
                D.__dc_ns_processor.push(f);
                kc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
            }
            Pc(C.o) ? e() : Rc(e)
        },
        bi = function(a) {
            var b = /^u([1-9]\d?|100)$/,
                c = a.getWithConfig(C.ce) || {},
                d = Fh(a),
                e = {},
                f = {};
            if (Sa(c))
                for (var h in c)
                    if (c.hasOwnProperty(h) && b.test(h)) {
                        var k = c[h];
                        g(k) && (e[h] = k)
                    }
            for (var l = 0; l < d.length; l++) {
                var m = d[l];
                b.test(m) && (e[m] = m)
            }
            for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
            return f
        },
        ci = function(a) {
            function b(l, m, p) { void 0 !== p && 0 !== (p + "").length && d.push(l + m + ":" + c(p + "")) }
            var c = encodeURIComponent,
                d = [],
                e = a(C.T) || [];
            if (ra(e))
                for (var f = 0; f < e.length; f++) {
                    var h = e[f],
                        k = f + 1;
                    b("i", k, h.id);
                    b("p", k, h.price);
                    b("q", k, h.quantity);
                    b("c", k, a(C.df));
                    b("l", k, a(C.Na))
                }
            return d.join("|")
        },
        di = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return { containerId: "DC-" + b[1], ba: b[3] ? a : "", Of: b[1], Nf: b[3] || "", rb: b[4] || "", X: c }
            }
        },
        fi = function(a, b, c, d) {
            var e = di(a);
            if (e) {
                var f = function(Z) { return d.getWithConfig(Z) },
                    h = !1 !== f(C.La),
                    k = f(C.Ka) || f(C.Z),
                    l = f(C.Y),
                    m = f(C.fa),
                    p = f(C.ia),
                    r = f(C.ff),
                    u = 3 === fg();
                if (b === C.F) {
                    var q = { prefix: k, domain: l, wb: m, flags: p },
                        t = f(C.xa) || {},
                        v = f(C.Ib),
                        w = void 0 === v ? !0 : !!v;
                    if (h) {
                        if (xf(t[C.hb], !!t[C.K])) { Of(ei, q); }
                        Lf(q);
                        Qf(ei, q);
                        Zf(w, q)
                    }
                    if (t[C.K]) { Pf(ei, t[C.K], t[C.jb], !!t[C.ib], k); }
                    if (r && r.exclusion_parameters && r.engines)
                        if (eg()) {} else ai(r, u, h, q);
                    var y = void 0 != f(C.M) && !1 !== f(C.M);
                    Lh(!0, y, a);
                    G(d.C)
                } else {
                    var x = {},
                        A = f(C.ef);
                    if (Sa(A))
                        for (var B in A)
                            if (A.hasOwnProperty(B)) {
                                var z = A[B];
                                void 0 !== z && null !== z && (x[B] = z)
                            }
                    var E = "";
                    if (5 === e.X || 6 === e.X) E = ci(f);
                    var H = bi(d),
                        M = !0 === f(C.Nh);
                    if (eg() && M) { M = !1 }
                    var N = void 0 != f(C.M) && !1 !== f(C.M),
                        Y = {
                            rb: e.rb,
                            Qc: h,
                            ng: l,
                            og: m,
                            Oa: k,
                            Rb: f(C.ca),
                            X: e.X,
                            rg: x,
                            Rc: e.Of,
                            Uc: e.Nf,
                            B: d.B,
                            C: d.C,
                            ic: oe(pe(D.location.href)),
                            hd: E,
                            protocol: u ?
                                "http:" : "https:",
                            md: f(C.Cf),
                            pd: M,
                            sessionId: f(C.fc),
                            uc: void 0,
                            transactionId: f(C.nb),
                            vc: void 0,
                            td: H,
                            Uf: !1 !== f(C.da),
                            kg: d.kg,
                            zb: N
                        };
                    $h(Y)
                }
            } else G(d.B)
        },
        ei = ["aw", "dc"];
    var hi = function(a) {
            function b() {
                var e = c,
                    f = gi(JSON.stringify(a[e])),
                    h = "https://www.google.com/travel/flights/click/conversion/" + gi(a.conversion_id) + "/?" + e + "=" + f;
                if (a.conversionLinkerEnabled) {
                    var k = Xf("gf", a.cookiePrefix, void 0);
                    if (k && k.length)
                        for (var l = 0; l < k.length; l++) h += "&gclgf=" + gi(k[l])
                }
                nc(h, a.onSuccess, a.onFailure)
            }
            var c;
            if (a.hasOwnProperty("conversion_data")) c = "conversion_data";
            else if (a.hasOwnProperty("price")) c = "price";
            else return;
            var d = !0;
            d = Pc(C.o);
            d ? b() : Rc(b)
        },
        gi = function(a) { return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a)) };
    var ii = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        ki = function(a, b, c, d) {
            var e = function(y) { return d.getWithConfig(y) },
                f = bg(a).w[0],
                h = !1 !== e(C.La),
                k = e(C.Ka) || e(C.Z),
                l = e(C.Y),
                m = e(C.fa),
                p = e(C.ia);
            if (b === C.F) {
                if (h) {
                    var r = { prefix: k, domain: l, flags: p, wb: m };
                    Lf(r);
                    Qf(["aw", "dc"], r)
                }
                G(d.C)
            } else {
                var u = { conversion_id: f, onFailure: d.B, onSuccess: d.C, conversionLinkerEnabled: h, cookiePrefix: k },
                    q = ii.test(D.location.href);
                if (b !== C.na) G(d.B);
                else {
                    var v = { partner_id: f, trip_type: e(C.If), total_price: e(C.ca), currency: e(C.ja), is_direct_booking: q, flight_segment: ji(e(C.T)) },
                        w = e(C.me);
                    w && "object" === typeof w && (v.passengers_total = Aa(w.total), v.passengers_adult = Aa(w.adult), v.passengers_child = Aa(w.child), v.passengers_infant_in_seat = Aa(w.infant_in_seat), v.passengers_infant_in_lap = Aa(w.infant_in_lap));
                    u.conversion_data =
                        v;
                    hi(u)
                }
            }
        },
        ji = function(a) { if (a) { for (var b = [], c = 0, d = 0; d < a.length; ++d) { var e = a[d];!e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = { cabin: e.travel_class, fare_product: e.fare_product, booking_code: e.booking_code, flight_number: e.flight_number, origin: e.origin, destination: e.destination, departure_date: e.start_date }, c++) } return b } };
    var pi = function(a, b, c, d) {
            function e() {
                if (k) {
                    var A = b === C.Ja ? Xf("aw", l, void 0) : Xf("ha", l, void 0);
                    v += A.map(function(B) { return "&gclha=" + encodeURIComponent(B) }).join("")
                }
                nc(v, d.C, d.B)
            }
            var f = bg(a),
                h = function(A) { return d.getWithConfig(A) },
                k = !1 !== h(C.La),
                l = h(C.Ka) || h(C.Z),
                m = h(C.Y),
                p = h(C.fa),
                r = h(C.ia);
            if (b === C.F) {
                var u = h(C.xa) || {};
                if (k) {
                    var q = { prefix: l, domain: m, flags: r, wb: p };
                    xf(u[C.hb], !!u[C.K]) && Of(li, q);
                    Lf(q);
                    Qf(["aw", "dc"], q)
                }
                if (u[C.K]) {
                    Pf(li, u[C.K], u[C.jb], !!u[C.ib],
                        l);
                }
                G(d.C)
            } else {
                var t = f.w[0];
                if (/^\d+$/.test(t)) {
                    var v = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(t) + "/";
                    if (b === C.na) {
                        var w = mi(h(C.nb), h(C.ca), h(C.ja), h(C.T));
                        w = encodeURIComponent(ni(w));
                        v += "?data=" + w
                    } else if (b === C.Ja) {
                        var y = oi(t, h(C.ca), h(C.he), h(C.ja), h(C.T));
                        y = encodeURIComponent(ni(y));
                        v += "?label=FH&guid=ON&script=0&ord=" + wa(0, 4294967295) + ("&price=" + y)
                    } else { G(d.B); return }
                    var x = !0;
                    x = Pc(C.o);
                    x ? e() : Rc(e)
                } else G(d.B)
            }
        },
        mi = function(a, b, c, d) {
            var e = {};
            qi(a) && (e.hct_booking_xref = a);
            g(c) && (e.hct_currency_code = c);
            qi(b) && (e.hct_total_price = b, e.hct_base_price = b);
            if (!ra(d) || 0 === d.length) return e;
            var f = d[0];
            if (!Sa(f)) return e;
            qi(f[ri.Aa]) && (e.hct_partner_hotel_id = f[ri.Aa]);
            g(f[ri.oa]) && (e.hct_checkin_date = f[ri.oa]);
            g(f[ri.Za]) && (e.hct_checkout_date = f[ri.Za]);
            return e
        },
        oi = function(a, b, c, d, e) {
            function f(p) {
                void 0 === p && (p = 0);
                if (qi(p)) return l +
                    p
            }

            function h(p, r, u) { u(r) && (k[p] = r) }
            var k = {};
            k.partner_id = a;
            var l = "USD";
            g(d) && (l = k.currency = d);
            qi(b) && (k.base_price_value_string = f(b), k.display_price_value_string = f(b));
            qi(c) && (k.tax_price_value_string = f(c));
            g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
            if (!ra(e) || 0 == e.length) return k;
            var m = e[0];
            if (!Sa(m)) return k;
            qi(m[ri.Pd]) && (k.total_price_value_string = f(m[ri.Pd]));
            h("partner_hotel_id", m[ri.Aa], qi);
            h("check_in_date", m[ri.oa], g);
            h("check_out_date", m[ri.Za], g);
            h("adults", m[ri.wf], si);
            h(ri.Td, m[ri.Td],
                g);
            h(ri.Sd, m[ri.Sd], g);
            return k
        },
        ni = function(a) {
            var b = [];
            za(a, function(c, d) { b.push(c + "=" + d) });
            return b.join(";")
        },
        qi = function(a) { return g(a) || si(a) },
        si = function(a) { return "number" === typeof a },
        ri = { Aa: "id", Pd: "price", oa: "start_date", Za: "end_date", wf: "occupancy", Td: "room_id", Sd: "rate_rule_id" },
        li = ["ha"];
    var vi = function(a, b, c, d) {
            var e = bg(a),
                f = !1 !== d.getWithConfig(C.La),
                h = d.getWithConfig(C.Ka) || d.getWithConfig(C.Z),
                k = d.getWithConfig(C.ia);
            if (b === C.F) {
                if (f) {
                    var l = { prefix: h, flags: k };
                    Lf(l);
                    Qf(["aw", "dc"], l)
                }
                G(d.C)
            } else if (b === C.na) {
                var m = d.getWithConfig(C.ca),
                    p = d.getWithConfig(C.ja),
                    r = d.getWithConfig(C.me),
                    u = d.getWithConfig(C.T),
                    q = {};
                if (g(m) || "number" === typeof m) q.base_price_value_string = "" + p + m, q.tax_price_value_string = p + "0";
                Sa(r) && "number" === typeof r.adult && (q.adult_count = r.adult);
                if (ra(u) && 0 !== u.length) {
                    var t =
                        u[0];
                    if (Sa(t)) {
                        if (g(t[ti.Aa]) || "number" === typeof t[ti.Aa]) q.partner_hotel_id = t[ti.Aa];
                        g(t[ti.oa]) && (q.hotel_checkin_date = t[ti.oa]);
                        var v = t[ti.Za];
                        g(v) && (q.hotel_checkout_date = v, q.return_date = v);
                        if (1 !== u.length) {
                            var w = u[1];
                            if (Sa(w)) {
                                q.origin_airport = w[ti.yf];
                                q.departure_date = w[ti.oa];
                                for (var y = [w[ti.Zd]], x = [w[ti.Bd]], A = [w[ti.Hd]], B = null !== v && g(v), z = 1, E = 2; E < u.length; E++) {
                                    var H = u[E];
                                    Sa(H) && (y.push(H[ti.Zd]), x.push(H[ti.Bd]), A.push(H[ti.Hd]), B && H[ti.oa] < v && (z = E))
                                }
                                B && (q.destination_airport = u[z][ti.cf]);
                                q.cabins = y.join(",");
                                q.booking_codes = x.join(",");
                                q.flight_numbers = A.join(",")
                            }
                        }
                    }
                }
                ui(e.w[0], q, f, h, d.C, d.B)
            } else G(d.B)
        },
        ui = function(a, b, c, d, e, f) {
            function h() {
                c && (m += Xf("gp", d, void 0).map(function(r) { return "&gclgp=" + encodeURIComponent(r) }).join(""));
                nc(m, e, f)
            }
            if (/^\d+$/.test(a)) {
                var k = encodeURIComponent(a),
                    l = encodeURIComponent(wi(b)),
                    m = "https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/" + k + "/?data=" + l,
                    p = !0;
                p = Pc(C.o);
                p ? h() : Rc(h)
            } else G(f)
        },
        wi = function(a) {
            var b = [],
                c;
            for (c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
            return b.join(";")
        },
        ti = { Aa: "id", oa: "start_date", Za: "end_date", yf: "origin", Zd: "travel_class", Bd: "booking_code", Hd: "flight_number", cf: "destination" };
    var Gi = function(a, b, c) {
            var d = "https://www.google-analytics.com/analytics.js",
                e = $g();
            if (pa(e)) {
                var f = "gtag_" + a.split("-").join("_"),
                    h = function(w) {
                        var y = [].slice.call(arguments, 0);
                        y[0] = f + "." + y[0];
                        e.apply(window, y)
                    },
                    k = function() {
                        var w = function(B, z) { for (var E = 0; z && E < z.length; E++) h(B, z[E]) },
                            y = xi(b, c);
                        if (y) {
                            var x = y.action;
                            if ("impressions" === x) w("ec:addImpression", y.Kg);
                            else if ("promo_click" === x || "promo_view" === x) {
                                var A = y.jd;
                                w("ec:addPromo", y.jd);
                                A && 0 < A.length && "promo_click" === x && h("ec:setAction", x)
                            } else w("ec:addProduct",
                                y.Sa), h("ec:setAction", x, y.qb)
                        }
                    },
                    l = function() {
                        if (eg()) {} else {
                            var w = c.getWithConfig(C.zf);
                            w && (h("require", w, { dataLayer: "dataLayer" }), h("require", "render"))
                        }
                    },
                    m = yi(a, f, b, c);
                zi(f, m.Pa) && (e(function() { Yg() && Yg().remove(f) }), Ai[f] = !1);
                e("create", a, m.Pa);
                (function() {
                    var w = c.getWithConfig("custom_map");
                    e(function() {
                        if (Sa(w)) {
                            var y = m.ra,
                                x = Yg().getByName(f),
                                A;
                            for (A in w)
                                if (w.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != w[A]) {
                                    var B = x.get(Bi(w[A]));
                                    Ci(y, A, B)
                                }
                        }
                    })
                })();
                (function(w) {
                    if (w) {
                        var y = {};
                        if (Sa(w))
                            for (var x in Di) Di.hasOwnProperty(x) && Ei(Di[x], x, w[x], y);
                        h("require", "linkid", y)
                    }
                })(m.linkAttribution);
                var r = m[C.xa];
                if (r && r[C.K]) {
                    var u = r[C.jb];
                    ah(f + ".", r[C.K], void 0 === u ? !!r.use_anchor : "fragment" === u, !!r[C.ib])
                }
                var q = function(w, y, x) {
                    x &&
                        (y = "" + y);
                    m.ra[w] = y
                };
                if (b === C.wd) l(), h("send", "pageview", m.ra);
                else if (b === C.F) {
                    l();
                    qg(a, c);
                    0 != m.sendPageView && h("send", "pageview", m.ra)
                } else "screen_view" === b ? h("send", "screenview", m.ra) : "timing_complete" === b ? (q("timingCategory", m.eventCategory, !0), q("timingVar", m.name, !0), q("timingValue", Aa(m.value)), void 0 !== m.eventLabel && q("timingLabel", m.eventLabel, !0), h("send",
                    "timing", m.ra)) : "exception" === b ? h("send", "exception", m.ra) : "optimize.callback" !== b && (0 <= ta([C.ud, "select_content", C.Ja, C.Sb, C.Wb, C.eb, "set_checkout_option", C.na, C.Yb, "view_promotion", "checkout_progress"], b) && (h("require", "ec", "ec.js"), k()), q("eventCategory", m.eventCategory, !0), q("eventAction", m.eventAction || b, !0), void 0 !== m.eventLabel && q("eventLabel", m.eventLabel, !0), void 0 !== m.value && q("eventValue", Aa(m.value)), h("send", "event", m.ra));
                if (!Fi) {
                    Fi = !0;
                    Tg();
                    var t = c.B,
                        v = function() { Yg().loaded || t() };
                    eg() ?
                        G(v) : kc(d, v, t)
                }
            } else G(c.B)
        },
        Hi = function(a, b, c, d) { Sc(function() { Gi(a, b, d) }, [C.J, C.o]) },
        Fi, Ai = {},
        Ii = { client_id: 1, client_storage: "storage", cookie_name: 1, cookie_domain: 1, cookie_expires: 1, cookie_path: 1, cookie_update: 1, cookie_flags: 1, sample_rate: 1, site_speed_sample_rate: 1, use_amp_client_id: 1, store_gac: 1, conversion_linker: "storeGac" },
        Ji = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignTerm",
                content: "campaignContent",
                id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        },
        Ki = { content_id: 1, event_category: 1, event_action: 1, event_label: 1, link_attribution: 1, linker: 1, method: 1, name: 1, send_page_view: 1, value: 1 },
        Di = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
        Li = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1
        },
        Ei = function(a, b, c, d) {
            if (void 0 !== c)
                if (Li[b] && (c = Ba(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Bi(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Bi = function(a) { return a && g(a) ? a.replace(/(_[a-z])/g, function(b) { return b[1].toUpperCase() }) : a },
        Mi = function(a) {
            var b = "general";
            0 <= ta([C.Kd, C.Sb, C.Ld, C.eb, "checkout_progress", C.na, C.Yb, C.Wb, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= ta("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "),
                a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Ci = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
        Ni = function(a) {
            if (ra(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        yi = function(a, b, c, d) {
            var e = function(z) { return d.getWithConfig(z) },
                f = {},
                h = {},
                k = {},
                l = Ni(e(C.pf));
            l && Ci(h, "exp", l);
            var m = e("custom_map");
            if (Sa(m))
                for (var p in m)
                    if (m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != m[p]) {
                        var r = e(String(m[p]));
                        void 0 !== r && Ci(h, p, r)
                    }
            for (var u = Fh(d), q = 0; q < u.length; ++q) {
                var t = u[q],
                    v = e(t);
                if (Ki.hasOwnProperty(t)) Ei(Ki[t], t, v, f);
                else if (Ji.hasOwnProperty(t)) Ei(Ji[t], t, v, h);
                else if (Ii.hasOwnProperty(t)) Ei(Ii[t], t, v, k);
                else if (/^(dimension|metric|content_group)\d+$/.test(t)) Ei(1, t, v, h);
                else if ("developer_id" === t) {} else t === C.Z && 0 > ta(u, C.ac) &&
                    (k.cookieName = v + "_ga")
            }
            Ci(k, "cookieDomain", "auto");
            Ci(h, "forceSSL", !0);
            Ci(f, "eventCategory", Mi(c));
            0 <= ta(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && Ci(h, "nonInteraction", !0);
            "login" === c || "sign_up" === c || "share" === c ? Ci(f, "eventLabel", e(C.vf)) : "search" === c || "view_search_results" === c ? Ci(f, "eventLabel", e(C.Ff)) : "select_content" === c && Ci(f, "eventLabel", e(C.bf));
            var y = f[C.xa] || {},
                x = y[C.hb];
            x || 0 != x && y[C.K] ? k.allowLinker = !0 : !1 === x && Ci(k, "useAmpClientId", !1);
            if (!1 === e(C.Ze) || !1 ===
                e(C.da) || !1 === e(C.$a)) h.allowAdFeatures = !1;
            !1 === e(C.da) && I("GTM", 27);
            k.name = b;
            h["&gtm"] = Jh(!0);
            h.hitCallback = d.C;
            Ic() && (h["&gcs"] = Qc(), Pc(C.J) || (k.storage = "none"), Pc(C.o) || (h.allowAdFeatures = !1, k.storeGac = !1));
            var A = e(C.va) || e(C.uf) || Zd("gtag.remote_config." + a + ".url", 2),
                B = e(C.rf) || Zd("gtag.remote_config." + a + ".dualId", 2);
            A && null != hc && (k._x_19 = A);
            B && (k._x_20 = B);
            f.ra = h;
            f.Pa = k;
            return f
        },
        xi = function(a, b) {
            function c(v) {
                var w =
                    n(v);
                w.list = v.list_name;
                w.listPosition = v.list_position;
                w.position = v.list_position || v.creative_slot;
                w.creative = v.creative_name;
                return w
            }

            function d(v) { for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y])); return w.length ? w : void 0 }

            function e(v) { return { id: f(C.nb), affiliation: f(C.hf), revenue: f(C.ca), tax: f(C.he), shipping: f(C.nf), coupon: f(C.jf), list: f(C.yd) || v } }
            for (var f = function(v) { return b.getWithConfig(v) }, h = f(C.T), k, l = 0; h && l < h.length && !(k = h[l][C.yd]); l++);
            var m = f("custom_map");
            if (Sa(m))
                for (var p =
                        0; h && p < h.length; ++p) {
                    var r = h[p],
                        u;
                    for (u in m) m.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != m[u] && Ci(r, u, r[m[u]])
                }
            var q = null,
                t = f(C.lf);
            a === C.na || a === C.Yb ? q = { action: a, qb: e(), Sa: d(h) } : a === C.Sb ? q = { action: "add", Sa: d(h) } : a === C.Wb ? q = { action: "remove", Sa: d(h) } : a === C.Ja ? q = { action: "detail", qb: e(k), Sa: d(h) } : a === C.ud ? q = { action: "impressions", Kg: d(h) } : "view_promotion" === a ? q = { action: "promo_view", jd: d(t) } : "select_content" === a && t && 0 < t.length ? q = { action: "promo_click", jd: d(t) } : "select_content" === a ? q = { action: "click", qb: { list: f(C.yd) || k }, Sa: d(h) } : a === C.eb || "checkout_progress" === a ? q = { action: "checkout", Sa: d(h), qb: { step: a === C.eb ? 1 : f(C.fe), option: f(C.ee) } } : "set_checkout_option" === a && (q = { action: "checkout_option", qb: { step: f(C.fe), option: f(C.ee) } });
            q && (q.Wh = f(C.ja));
            return q
        },
        Oi = {},
        zi = function(a, b) {
            var c = Oi[a];
            Oi[a] = n(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Pi = {},
        Qi = ["G", "GP"];
    Pi.Ye = "";
    var Ri = Pi.Ye.split(",");

    function Si() { var a = ld; return a.gcq = a.gcq || new Ti }
    var Ui = function(a, b, c) { Si().register(a, b, c) },
        Vi = function(a, b, c, d) { Si().push("event", [b, a], c, d) },
        Wi = function(a, b) { Si().push("config", [a], b) },
        Xi = {},
        Yi = function(a) { return !0 },
        Zi = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.i = {};
            this.m = null;
            this.h = !1
        },
        $i = function(a, b, c, d, e) {
            this.type = a;
            this.m = b;
            this.ba = c ||
                "";
            this.h = d;
            this.i = e
        },
        Ti = function() {
            this.m = {};
            this.i = {};
            this.h = []
        },
        aj = function(a, b) { var c = bg(b); return a.m[c.containerId] = a.m[c.containerId] || new Zi },
        bj = function(a, b, c) {
            if (b) {
                var d = bg(b);
                if (d && 1 === aj(a, b).status && Yi(d.prefix)) {
                    aj(a, b).status = 2;
                    var e = {};
                    Pd && (e.timeoutId = D.setTimeout(function() {
                        I("GTM", 38);
                        Bd()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Xi[d.containerId] = Fa();
                    if (eg()) {} else {
                        var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            k = ("http:" != D.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h),
                            l = vh(c, h) || k;
                        kc(l)
                    }
                }
            }
        },
        cj = function(a, b, c, d) {
            if (d.ba) {
                var e = aj(a, d.ba),
                    f = e.m;
                if (f) {
                    var h = n(c),
                        k = n(e.targetConfig[d.ba]),
                        l = n(e.containerConfig),
                        m = n(e.i),
                        p = n(a.i),
                        r = Zd("gtm.uniqueEventId"),
                        u = bg(d.ba).prefix,
                        q = Eh(Dh(Ch(Bh(Ah(zh(yh(h), k), l), m), p), function() { Td(r, u, "2"); }), function() { Td(r, u, "3"); });
                    try {
                        Td(r, u, "1");
                        f(d.ba, b, d.m, q)
                    } catch (t) {
                        Td(r, u, "4");
                    }
                }
            }
        };
    Ti.prototype.register = function(a, b, c) {
        if (3 !== aj(this, a).status) {
            aj(this, a).m = b;
            aj(this, a).status = 3;
            c && (aj(this, a).i = c);
            var d = bg(a),
                e = Xi[d.containerId];
            if (void 0 !== e) {
                var f = ld[d.containerId].bootstrap,
                    h = d.prefix.toUpperCase();
                ld[d.containerId]._spx && (h = h.toLowerCase());
                var k = Zd("gtm.uniqueEventId"),
                    l = h,
                    m = Fa() - f;
                if (Pd && !Gd[k]) {
                    k !== Cd && (Ad(), Cd = k);
                    var p = l + "." + Math.floor(f - e) + "." + Math.floor(m);
                    Ld = Ld ? Ld + "," + p : "&cl=" + p
                }
                delete Xi[d.containerId]
            }
            this.flush()
        }
    };
    Ti.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Fa() / 1E3);
        bj(this, c, b[0][C.va] || this.i[C.va]);
        this.h.push(new $i(a, e, c, b, d));
        d || this.flush()
    };
    Ti.prototype.flush = function(a) {
        for (var b = this; this.h.length;) {
            var c = this.h[0];
            if (c.i) c.i = !1, this.h.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== aj(this, c.ba).status && !a) return;
                    Pd && D.clearTimeout(c.h[0].timeoutId);
                    break;
                case "set":
                    za(c.h[0], function(l, m) { n(Ma(l, m), b.i) });
                    break;
                case "config":
                    var d = c.h[0],
                        e = !!d[C.hc];
                    delete d[C.hc];
                    var f = aj(this, c.ba),
                        h = bg(c.ba),
                        k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.ba] = {});
                    f.h && e || cj(this, C.F, d, c);
                    f.h = !0;
                    delete d[C.wa];
                    k ? n(d, f.containerConfig) :
                        n(d, f.targetConfig[c.ba]);
                    break;
                case "event":
                    cj(this, c.h[1], c.h[0], c)
            }
            this.h.shift()
        }
    };
    var dj = ["GP", "G"],
        ej = "G".split(/,/);
    ej.push("GF");
    ej.push("HA");
    ej.push("UA");
    ej.push("AW");
    var fj = !1;
    fj = !0;
    var gj = null,
        hj = {},
        ij = {},
        jj;

    function kj(a, b) {
        var c = { event: a };
        b && (c.eventModel = n(b), b[C.Ac] && (c.eventCallback = b[C.Ac]), b[C.Jb] && (c.eventTimeout = b[C.Jb]));
        return c
    }
    var lj = function() {
            gj = gj || !ld.gtagRegistered;
            ld.gtagRegistered = !0;
            return gj
        },
        mj = function(a) {
            if (void 0 === ij[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = th("gtagua", { trackingId: a.id });
                        break;
                    case "AW":
                        b = th("gtagaw", { conversionId: a });
                        break;
                    case "DC":
                        b = th("gtagfl", { targetId: a.id });
                        break;
                    case "GF":
                        b = th("gtaggf", { conversionId: a });
                        break;
                    case "HA":
                        b = th("gtagha", { conversionId: a });
                        break;
                    case "GP":
                        b = th("gtaggp", { conversionId: a.id });
                        break;
                    default:
                        return
                }
                if (!jj) {
                    var c = Ab("v", { name: "send_to", dataLayerVersion: 2 });
                    rb.push(c);
                    jj = ["macro", rb.length - 1]
                }
                var d = { arg0: jj, arg1: a.id, ignore_case: !1 };
                d[Hb.ya] = "_lc";
                tb.push(d);
                var e = { "if": [tb.length - 1], add: [b] };
                e["if"] && (e.add || e.block) && sb.push(e);
                ij[a.id] = b
            }
        },
        nj = function(a) {
            za(hj, function(b, c) {
                var d = ta(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        oj = function(a) {
            if (a.containerId !== kd.s && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                I("GTM", b)
            }
        };
    var pj = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !g(a[1]) || !Sa(b)) return;
            var c = bg(a[1]);
            if (!c) return;
            nj(c.id);
            var d = c.id,
                e = b[C.zc] || "default";
            e = e.toString().split(",");
            for (var f = 0; f < e.length; f++) hj[e[f]] = hj[e[f]] || [], hj[e[f]].push(d);
            delete b[C.zc];
            xd();
            if (lj()) {
                n(b);
                if (fj && -1 !== ta(ej, c.prefix) || -1 !== ta(dj, c.prefix)) {
                    "G" === c.prefix && (b[C.wa] = !0);
                    Wi(b, c.id);
                    return
                }
                mj(c);
                oj(c)
            }
            ce("gtag.targets." + c.id, void 0);
            ce("gtag.targets." + c.id, n(b));
            var h = {};
            h[C.za] = c.id;
            return kj(C.F, h);
        },
        event: function(a) {
            var b = a[1];
            if (g(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Sa(a[2]) && void 0 != a[2]) return;
                    c = a[2]
                }
                var d = kj(b, c);
                var e;
                var f = c && c[C.za];
                void 0 === f && (f = Zd(C.za, 2), void 0 === f && (f = "default"));
                if (g(f) || ra(f)) {
                    for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++) 0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(hj[h[l]] || []);
                    e = dg(k)
                } else e = void 0;
                var m = e;
                if (!m) return;
                var p = lj();
                xd();
                for (var r = [], u = 0; p && u < m.length; u++) {
                    var q = m[u];
                    oj(q);
                    if (fj && -1 !== ta(ej, q.prefix) || -1 !== ta(dj, q.prefix)) {
                        var t = n(c);
                        "G" === q.prefix && (t[C.wa] = !0);
                        Vi(b, t, q.id)
                    } else mj(q);
                    r.push(q.id)
                }
                d.eventModel = d.eventModel || {};
                0 < m.length ? d.eventModel[C.za] = r.join() : delete d.eventModel[C.za];
                return d
            }
        },
        js: function(a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && Sa(a[1]) ? b = n(a[1]) : 3 == a.length && g(a[1]) && (b = {},
                Sa(a[2]) || ra(a[2]) ? b[a[1]] = n(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (lj()) {
                    xd();
                    var c = n(b);
                    Si().push("set", [c]);
                    n(b)
                }
                b._clear = !0;
                return b
            }
        }
    };
    var qj = { policy: !0 };
    var rj = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) { d = !1; break }
                d && (c.end(), c.end = null)
            }
        },
        tj = function(a) {
            var b = sj(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var uj = !1,
        vj = [];

    function wj() { if (!uj) { uj = !0; for (var a = 0; a < vj.length; a++) G(vj[a]) } }
    var xj = function(a) { uj ? G(a) : vj.push(a) };
    var Pj = function(a) {
        if (Oj(a)) return a;
        this.h = a
    };
    Pj.prototype.Gg = function() { return this.h };
    var Oj = function(a) { return !a || "object" !== Pa(a) || Sa(a) ? !1 : "getUntrustedUpdateValue" in a };
    Pj.prototype.getUntrustedUpdateValue = Pj.prototype.Gg;
    var Qj = [],
        Rj = !1,
        Sj = function(a) { return D["dataLayer"].push(a) },
        Tj = function(a) {
            var b = ld["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {++d === c && a() }
        };

    function Uj(a) {
        var b = a._clear;
        za(a, function(f, h) { "_clear" !== f && (b && ce(f, void 0), ce(f, h)) });
        rd || (rd = a["gtm.start"]);
        var c = a.event,
            d = a["gtm.uniqueEventId"];
        if (!c) return !1;
        d || (d = xd(), a["gtm.uniqueEventId"] = d, ce("gtm.uniqueEventId", d));
        td = c;
        var e = Vj(a);
        td = null;
        switch (c) {
            case "gtm.init":
                I("GTM", 19), e && I("GTM", 20)
        }
        return e
    }

    function Vj(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = ld.zones;
        d = e ? e.checkState(kd.s, c) : Cg;
        return d.active ? sh(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }

    function Wj() {
        for (var a = !1; !Rj && 0 < Qj.length;) {
            Rj = !0;
            delete Wd.eventModel;
            Yd();
            var b = Qj.shift();
            if (null != b) {
                var c = Oj(b);
                if (c) {
                    var d = b;
                    b = Oj(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f],
                            k = Zd(h, 1);
                        if (ra(k) || Sa(k)) k = n(k);
                        Xd[h] = k
                    }
                }
                try {
                    if (pa(b)) try { b.call($d) } catch (v) {} else if (ra(b)) {
                        var l = b;
                        if (g(l[0])) {
                            var m =
                                l[0].split("."),
                                p = m.pop(),
                                r = l.slice(1),
                                u = Zd(m.join("."), 2);
                            if (void 0 !== u && null !== u) try { u[p].apply(u, r) } catch (v) {}
                        }
                    } else {
                        var q = b;
                        if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                            a: {
                                if (b.length && g(b[0])) { var t = pj[b[0]]; if (t && (!c || !qj[b[0]])) { b = t(b); break a } }
                                b = void 0
                            }
                            if (!b) { Rj = !1; continue }
                        }
                        a = Uj(b) || a
                    }
                } finally { c && Yd(!0) }
            }
            Rj = !1
        }
        return !a
    }

    function Xj() { var a = Wj(); try { rj(D["dataLayer"], kd.s) } catch (b) {} return a }
    var Zj = function() {
            var a = ic("dataLayer", []),
                b = ic("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Kg(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            xj(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < ld.SANDBOXED_JS_SEMAPHORE) { d = []; for (var e = 0; e < arguments.length; e++) d[e] = new Pj(arguments[e]) } else d = [].slice.call(arguments, 0);
                var f = c.apply(a, d);
                Qj.push.apply(Qj, d);
                if (300 <
                    this.length)
                    for (I("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof f || f;
                return Wj() && h
            };
            Qj.push.apply(Qj, a.slice(0));
            Yj() && G(Xj)
        },
        Yj = function() { var a = !0; return a };
    var ak = {};
    ak.Kb = new String("undefined");
    var bk = function(a) { this.h = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ak.Kb ? b : a[d]); return c.join("") } };
    bk.prototype.toString = function() { return this.h("undefined") };
    bk.prototype.valueOf = bk.prototype.toString;
    ak.Gf = bk;
    ak.Jc = {};
    ak.pg = function(a) { return new bk(a) };
    var ck = {};
    ak.qh = function(a, b) {
        var c = xd();
        ck[c] = [a, b];
        return c
    };
    ak.oe = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = ck[c];
            if (d && "function" === typeof d[b]) d[b]();
            ck[c] = void 0
        }
    };
    ak.Pg = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    ak.hh = function(a) {
        if (a === ak.Kb) return a;
        var b = xd();
        ak.Jc[b] = a;
        return 'google_tag_manager["' + kd.s + '"].macro(' + b + ")"
    };
    ak.Zg = function(a, b, c) { a instanceof ak.Gf && (a = a.h(ak.qh(b, c)), b = oa); return { Wc: a, C: b } };
    var dk = function(a, b, c) {
            function d(f, h) { var k = f[h]; return k }
            var e = { event: b, "gtm.element": a, "gtm.elementClasses": d(a, "className"), "gtm.elementId": a["for"] || qc(a, "id") || "", "gtm.elementTarget": a.formTarget || d(a, "target") || "" };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        ek = function(a) {
            ld.hasOwnProperty("autoEventsSettings") || (ld.autoEventsSettings = {});
            var b = ld.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        fk = function(a, b, c) { ek(a)[b] = c },
        gk = function(a, b, c, d) {
            var e = ek(a),
                f = Ga(e, b, d);
            e[b] = c(f)
        },
        hk = function(a, b, c) { var d = ek(a); return Ga(d, b, c) };
    var ik = ["input", "select", "textarea"],
        jk = ["button", "hidden", "image", "reset", "submit"],
        kk = function(a) { var b = a.tagName.toLowerCase(); return !va(ik, function(c) { return c === b }) || "input" === b && va(jk, function(c) { return c === a.type.toLowerCase() }) ? !1 : !0 },
        lk = function(a) { return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : tc(a, ["form"], 100) },
        mk = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (kk(h)) {
                    if (h.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var nk = !!D.MutationObserver,
        ok = void 0,
        pk = function(a) {
            if (!ok) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (nk)(new MutationObserver(function() { for (var e = 0; e < ok.length; e++) G(ok[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else {
                            var d = !1;
                            oc(c, "DOMNodeInserted", function() { d || (d = !0, G(function() { d = !1; for (var e = 0; e < ok.length; e++) G(ok[e]) })) })
                        }
                };
                ok = [];
                F.body ? b() : G(b)
            }
            ok.push(a)
        };
    var Kk = D.clearTimeout,
        Lk = D.setTimeout,
        P = function(a, b, c) { if (eg()) { b && G(b) } else return kc(a, b, c) },
        Mk = function() { return D.location.href },
        Nk = function(a) { return ne(pe(a), "fragment") },
        Ok = function(a) { return oe(pe(a)) },
        R = function(a, b) { return Zd(a, b || 2) },
        Pk = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Sj(a)) : d = Sj(a);
            return d
        },
        Qk = function(a, b) { D[a] = b },
        S = function(a, b, c) {
            b && (void 0 === D[a] || c && !D[a]) && (D[a] =
                b);
            return D[a]
        },
        Rk = function(a, b, c) { return ve(a, b, void 0 === c ? !0 : !!c) },
        Sk = function(a, b, c) { return 0 === Ee(a, b, c) },
        Tk = function(a, b) { if (eg()) { b && G(b) } else mc(a, b) },
        Uk = function(a) { return !!hk(a, "init", !1) },
        Vk = function(a) { fk(a, "init", !0) },
        Wk = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : qd;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            P(K("https://", "http://", c))
        },
        Xk = function(a, b) { var c = a[b]; return c };
    var Yk = ak.Zg;

    function ul(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var vl = new xa;

    function wl(a, b) {
        function c(h) {
            var k = pe(h),
                l = ne(k, "protocol"),
                m = ne(k, "host", !0),
                p = ne(k, "port"),
                r = ne(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, m, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function xl(a) { return yl(a) ? 1 : 0 }

    function yl(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ra(c)) {
            for (var d = 0; d < c.length; d++)
                if (xl({ "function": a["function"], arg0: b, arg1: c[d] })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < f.length; h++)
                                if (b[f[h]]) { e = b[f[h]](c); break a }
                        } catch (u) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                return ul(b, c);
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var k;
                k = String(b).split(",");
                return 0 <= ta(k, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var l;
                var m = a.ignore_case ? "i" : void 0;
                try {
                    var p = String(c) + m,
                        r = vl.get(p);
                    r || (r = new RegExp(c, m), vl.set(p, r));
                    l = r.test(b)
                } catch (u) { l = !1 }
                return l;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return wl(b, c)
        }
        return !1
    };
    var zl = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Al = {},
        Bl = encodeURI,
        W = encodeURIComponent,
        Cl = nc;
    var Dl = function(a, b) {
        if (!a) return !1;
        var c = ne(pe(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var El = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };
    Al.Qg = function() { var a = !1; return a };
    var Wm = function() {
        var a = D.gaGlobal = D.gaGlobal || {};
        a.hid = a.hid || wa();
        return a.hid
    };
    var gn = window,
        hn = document,
        jn = function(a) {
            var b = gn._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === gn["ga-disable-" + a]) return !0;
            try { var c = gn.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {}
            for (var d = re("AMP_TOKEN", String(hn.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return hn.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function mn(a, b) {
        delete b.eventModel[C.wa];
        if (a !== C.F) {
            var c = b.getWithConfig(C.bc);
            if (ra(c)) {
                I("GTM", 26);
                for (var d = {}, e = 0; e < c.length; e++) {
                    var f = c[e],
                        h = b.getWithConfig(f);
                    void 0 !== h && (d[f] = h)
                }
                b.eventModel = d
            }
        }
        on(b.eventModel)
    }
    var on = function(a) {
        za(a, function(c) { "_" === c.charAt(0) && delete a[c] });
        var b = a[C.ka] || {};
        za(b, function(c) { "_" === c.charAt(0) && delete b[c] })
    };
    var rn = function(a, b, c) { Vi(b, c, a) },
        sn = function(a, b, c) { Vi(b, c, a, !0) },
        un = function(a, b) {};

    function tn(a, b) {}
    var X = { a: {} };


    X.a.gtagha = ["google"],
        function() {
            (function(a) {
                X.__gtagha = a;
                X.__gtagha.b = "gtagha";
                X.__gtagha.g = !0;
                X.__gtagha.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_conversionId,
                    c = td,
                    d = R("eventModel");
                Ui(b.id, pi);
                if (c === C.F) {
                    var e = R("gtag.targets." + b.id);
                    Wi(e, b.id)
                } else Vi(c, d, b.id);
                G(a.vtp_gtmOnSuccess)
            })
        }();
    X.a.e = ["google"],
        function() {
            (function(a) {
                X.__e = a;
                X.__e.b = "e";
                X.__e.g = !0;
                X.__e.priorityOverride = 0
            })(function(a) { return String(ee(a.vtp_gtmEventId, "event")) })
        }();

    X.a.v = ["google"],
        function() {
            (function(a) {
                X.__v = a;
                X.__v.b = "v";
                X.__v.g = !0;
                X.__v.priorityOverride = 0
            })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = R(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1); return void 0 !== c ? c : a.vtp_defaultValue })
        }();
    X.a.rep = ["google"],
        function() {
            (function(a) {
                X.__rep = a;
                X.__rep.b = "rep";
                X.__rep.g = !0;
                X.__rep.priorityOverride = 0
            })(function(a) {
                var b;
                switch (bg(a.vtp_containerId).prefix) {
                    case "AW":
                        b = Vh;
                        break;
                    case "DC":
                        b = fi;
                        break;
                    case "GF":
                        b = ki;
                        break;
                    case "GP":
                        b = vi;
                        break;
                    case "HA":
                        b = pi;
                        break;
                    case "UA":
                        b = Hi;
                        break;
                    default:
                        G(a.vtp_gtmOnFailure);
                        return
                }
                G(a.vtp_gtmOnSuccess);
                Ui(a.vtp_containerId, b, a.vtp_remoteConfig || {})
            })
        }();



    X.a.cid = ["google"],
        function() {
            (function(a) {
                X.__cid = a;
                X.__cid.b = "cid";
                X.__cid.g = !0;
                X.__cid.priorityOverride = 0
            })(function() { return kd.s })
        }();




    X.a.gtagaw = ["google"],
        function() {
            (function(a) {
                X.__gtagaw = a;
                X.__gtagaw.b = "gtagaw";
                X.__gtagaw.g = !0;
                X.__gtagaw.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_conversionId,
                    c = td;
                Ui(b.id, Vh);
                if (c === C.F) {
                    var d = R("gtag.targets." + b.id);
                    Wi(d, b.id)
                } else {
                    var e = R("eventModel");
                    Vi(c, e, b.id)
                }
                G(a.vtp_gtmOnSuccess)
            })
        }();

    X.a.get = ["google"],
        function() {
            (function(a) {
                X.__get = a;
                X.__get.b = "get";
                X.__get.g = !0;
                X.__get.priorityOverride = 0
            })(function(a) {
                if (a.vtp_isAutoTag) {
                    var b = String(a.vtp_trackingId),
                        c = td || "",
                        d = {};
                    if (c === C.F) {
                        var e = R("gtag.targets." + b);
                        n(e, d);
                        d[C.wa] = !0;
                        Wi(d, b)
                    } else {
                        var f = R("eventModel");
                        n(f, d);
                        d[C.wa] = !0;
                        Vi(c, d, b)
                    }
                } else {
                    var h = a.vtp_settings;
                    (a.vtp_deferrable ? sn : rn)(String(h.streamId), String(a.vtp_eventName), h.eventParameters || {})
                }
                a.vtp_gtmOnSuccess()
            })
        }();


    X.a.gtagfl = [],
        function() {
            (function(a) {
                X.__gtagfl = a;
                X.__gtagfl.b = "gtagfl";
                X.__gtagfl.g = !0;
                X.__gtagfl.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_targetId,
                    c = td,
                    d = R("eventModel");
                Ui(b, fi);
                if (c === C.F) {
                    var e = R("gtag.targets." + b);
                    Wi(e, b)
                } else Vi(c, d, b);
                G(a.vtp_gtmOnSuccess)
            })
        }();


    X.a.gtaggf = ["google"],
        function() {
            (function(a) {
                X.__gtaggf = a;
                X.__gtaggf.b = "gtaggf";
                X.__gtaggf.g = !0;
                X.__gtaggf.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_conversionId,
                    c = td,
                    d = R("eventModel");
                Ui(b.id, ki);
                if (c === C.F) {
                    var e = R("gtag.targets." + b.id);
                    Wi(e, b.id)
                } else Vi(c, d, b.id);
                G(a.vtp_gtmOnSuccess)
            })
        }();

    X.a.gtaggp = ["google"],
        function() {
            (function(a) {
                X.__gtaggp = a;
                X.__gtaggp.b = "gtaggp";
                X.__gtaggp.g = !0;
                X.__gtaggp.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_conversionId,
                    c = td,
                    d = R("eventModel");
                Ui(b, vi);
                if (c === C.F) {
                    var e = R("gtag.targets." + b);
                    Wi(e, b)
                } else Vi(c, d, b);
                G(a.vtp_gtmOnSuccess)
            })
        }();



    X.a.gtagua = ["google"],
        function() {
            (function(a) {
                X.__gtagua = a;
                X.__gtagua.b = "gtagua";
                X.__gtagua.g = !0;
                X.__gtagua.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_trackingId,
                    c = td,
                    d = R("eventModel");
                Ui(b, Hi);
                if (c === C.F) {
                    var e = R("gtag.targets." + b);
                    Wi(e, b)
                } else Vi(c, d, b);
                G(a.vtp_gtmOnSuccess)
            })
        }();


    var vn = {};
    vn.macro = function(a) { if (ak.Jc.hasOwnProperty(a)) return ak.Jc[a] }, vn.onHtmlSuccess = ak.oe(!0), vn.onHtmlFailure = ak.oe(!1);
    vn.dataLayer = $d;
    vn.callback = function(a) {
        vd.hasOwnProperty(a) && pa(vd[a]) && vd[a]();
        delete vd[a]
    };

    function wn() {
        ld[kd.s] = vn;
        Ia(wd, X.a);
        yb = yb || ak;
        zb = Bg
    }

    function xn() {
        se.gtm_3pds = !0;
        ld = D.google_tag_manager = D.google_tag_manager || {};
        if (ld[kd.s]) {
            var a = ld.zones;
            a && a.unregisterChild(kd.s);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) rb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) ub.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) tb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var p = l[m], r = {}, u = 0; u < p.length; u++) r[p[u][0]] = Array.prototype.slice.call(p[u], 1);
                sb.push(r)
            }
            wb = X;
            xb = xl;
            wn();
            Zj();
            Fg = !1;
            Gg = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Ig();
            else {
                oc(F, "DOMContentLoaded", Ig);
                oc(F, "readystatechange", Ig);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var q = !0;
                    try { q = !D.frameElement } catch (y) {}
                    q && Jg()
                }
                oc(D, "load", Ig)
            }
            uj = !1;
            "complete" === F.readyState ? wj() : oc(D, "load", wj);
            a: {
                if (!Pd) break a;D.setInterval(Qd,
                    864E5);
            }
            sd = (new Date).getTime();
            vn.bootstrap = sd;
        }
    }
    (function(a) {
        a()
    })(xn);

})()