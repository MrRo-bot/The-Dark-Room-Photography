(function (b) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], b)
    : b(jQuery);
})(function (b) {
  function c(a) {
    return (
      a &&
        void 0 === a.allowPageScroll &&
        (void 0 !== a.swipe || void 0 !== a.swipeStatus) &&
        (a.allowPageScroll = "none"),
      void 0 !== a.click && void 0 === a.tap && (a.tap = a.click),
      a || (a = {}),
      (a = b.extend({}, b.fn.swipe.defaults, a)),
      this.each(function () {
        var c = b(this),
          d = c.data("TouchSwipe");
        d || ((d = new e(this, a)), c.data("TouchSwipe", d));
      })
    );
  }

  function e(c, d) {
    function e(a) {
      if (!Y() && !(0 < b(a.target).closest(d.excludedElements, Ca).length)) {
        var c,
          e = a.originalEvent ? a.originalEvent : a,
          g = f ? e.touches[0] : e;
        return ((Da = "start"),
        f ? (Ea = e.touches.length) : a.preventDefault(),
        (ta = 0),
        (ua = null),
        (Aa = null),
        (va = 0),
        (wa = 0),
        (xa = 0),
        (ya = 1),
        (za = 0),
        (Fa = da()),
        (Ba = ga()),
        F(),
        !f || Ea === d.fingers || "all" === d.fingers || v()
          ? (_(0, g),
            (Ga = oa()),
            2 == Ea &&
              (_(1, e.touches[1]), (wa = xa = ia(Fa[0].start, Fa[1].start))),
            (d.swipeStatus || d.pinchStatus) && (c = n(e, Da)))
          : (c = !1),
        !1 === c)
          ? ((Da = "cancel"), n(e, Da), c)
          : (d.hold &&
              (Ma = setTimeout(
                b.proxy(function () {
                  Ca.trigger("hold", [e.target]),
                    d.hold && (c = d.hold.call(Ca, e, e.target));
                }, this),
                d.longTapThreshold
              )),
            $(!0),
            null);
      }
    }

    function h(a) {
      var b = a.originalEvent ? a.originalEvent : a;
      if (!("end" === Da || "cancel" === Da || R())) {
        var c,
          e = f ? b.touches[0] : b,
          g = ba(e);
        if (
          ((Ha = oa()),
          f && (Ea = b.touches.length),
          d.hold && clearTimeout(Ma),
          (Da = "move"),
          2 == Ea &&
            (0 == wa
              ? (_(1, b.touches[1]), (wa = xa = ia(Fa[0].start, Fa[1].start)))
              : (ba(b.touches[1]),
                (xa = ia(Fa[0].end, Fa[1].end)),
                (Aa = ka(Fa[0].end, Fa[1].end))),
            (ya = ja(wa, xa)),
            (za = Math.abs(wa - xa))),
          Ea !== d.fingers && "all" !== d.fingers && f && !v())
        )
          (Da = "cancel"), n(b, Da);
        else if (
          ((ua = na(g.start, g.end)),
          t(a, ua),
          (ta = la(g.start, g.end)),
          (va = ha()),
          ea(ua, ta),
          (d.swipeStatus || d.pinchStatus) && (c = n(b, Da)),
          !d.triggerOnTouchEnd || d.triggerOnTouchLeave)
        ) {
          var h = !0;
          if (d.triggerOnTouchLeave) {
            var i = pa(this);
            h = qa(g.end, i);
          }
          !d.triggerOnTouchEnd && h
            ? (Da = m("move"))
            : d.triggerOnTouchLeave && !h && (Da = m("end")),
            ("cancel" == Da || "end" == Da) && n(b, Da);
        }
        !1 === c && ((Da = "cancel"), n(b, Da));
      }
    }

    function i(a) {
      var b = a.originalEvent;
      return f && 0 < b.touches.length
        ? (X(), !0)
        : (R() && (Ea = Ja),
          (Ha = oa()),
          (va = ha()),
          q() || !p()
            ? ((Da = "cancel"), n(b, Da))
            : d.triggerOnTouchEnd ||
              (!1 == d.triggerOnTouchEnd && "move" === Da)
            ? (a.preventDefault(), (Da = "end"), n(b, Da))
            : !d.triggerOnTouchEnd && C()
            ? ((Da = "end"), o(b, Da, "tap"))
            : "move" === Da && ((Da = "cancel"), n(b, Da)),
          $(!1),
          null);
    }

    function j() {
      (Ea = 0), (Ha = 0), (Ga = 0), (wa = 0), (xa = 0), (ya = 1), F(), $(!1);
    }

    function k(a) {
      var b = a.originalEvent;
      d.triggerOnTouchLeave && ((Da = m("end")), n(b, Da));
    }

    function l() {
      Ca.unbind(ra, e),
        Ca.unbind(S, j),
        Ca.unbind(J, h),
        Ca.unbind(sa, i),
        U && Ca.unbind(U, k),
        $(!1);
    }

    function m(a) {
      var b = a,
        c = s(),
        e = p(),
        f = q();
      return (
        !c || f
          ? (b = "cancel")
          : e && "move" == a && (!d.triggerOnTouchEnd || d.triggerOnTouchLeave)
          ? (b = "end")
          : !e && "end" == a && d.triggerOnTouchLeave && (b = "cancel"),
        b
      );
    }

    function n(a, b) {
      var c;
      return (
        z() || y()
          ? (c = o(a, b, "swipe"))
          : (w() || v()) && !1 !== c && (c = o(a, b, "pinch")),
        Q() && !1 !== c
          ? (c = o(a, b, "doubletap"))
          : V() && !1 !== c
          ? (c = o(a, b, "longtap"))
          : P() && !1 !== c && (c = o(a, b, "tap")),
        "cancel" === b && j(a),
        "end" === b && (f ? 0 == a.touches.length && j(a) : j(a)),
        c
      );
    }

    function o(a, c, e) {
      var f;
      if ("swipe" == e) {
        if (
          (Ca.trigger("swipeStatus", [c, ua || null, ta || 0, va || 0, Ea, Fa]),
          d.swipeStatus &&
            ((f = d.swipeStatus.call(
              Ca,
              a,
              c,
              ua || null,
              ta || 0,
              va || 0,
              Ea,
              Fa
            )),
            !1 === f))
        )
          return !1;
        if ("end" == c && x()) {
          if (
            (Ca.trigger("swipe", [ua, ta, va, Ea, Fa]),
            d.swipe &&
              ((f = d.swipe.call(Ca, a, ua, ta, va, Ea, Fa)), !1 === f))
          )
            return !1;
          "left" === ua
            ? (Ca.trigger("swipeLeft", [ua, ta, va, Ea, Fa]),
              d.swipeLeft && (f = d.swipeLeft.call(Ca, a, ua, ta, va, Ea, Fa)))
            : "right" === ua
            ? (Ca.trigger("swipeRight", [ua, ta, va, Ea, Fa]),
              d.swipeRight &&
                (f = d.swipeRight.call(Ca, a, ua, ta, va, Ea, Fa)))
            : "up" === ua
            ? (Ca.trigger("swipeUp", [ua, ta, va, Ea, Fa]),
              d.swipeUp && (f = d.swipeUp.call(Ca, a, ua, ta, va, Ea, Fa)))
            : "down" === ua
            ? (Ca.trigger("swipeDown", [ua, ta, va, Ea, Fa]),
              d.swipeDown && (f = d.swipeDown.call(Ca, a, ua, ta, va, Ea, Fa)))
            : void 0;
        }
      }
      if ("pinch" == e) {
        if (
          (Ca.trigger("pinchStatus", [
            c,
            Aa || null,
            za || 0,
            va || 0,
            Ea,
            ya,
            Fa,
          ]),
          d.pinchStatus &&
            ((f = d.pinchStatus.call(
              Ca,
              a,
              c,
              Aa || null,
              za || 0,
              va || 0,
              Ea,
              ya,
              Fa
            )),
            !1 === f))
        )
          return !1;
        "end" == c &&
          u() &&
          ("in" === Aa
            ? (Ca.trigger("pinchIn", [
                Aa || null,
                za || 0,
                va || 0,
                Ea,
                ya,
                Fa,
              ]),
              d.pinchIn &&
                (f = d.pinchIn.call(
                  Ca,
                  a,
                  Aa || null,
                  za || 0,
                  va || 0,
                  Ea,
                  ya,
                  Fa
                )))
            : "out" === Aa
            ? (Ca.trigger("pinchOut", [
                Aa || null,
                za || 0,
                va || 0,
                Ea,
                ya,
                Fa,
              ]),
              d.pinchOut &&
                (f = d.pinchOut.call(
                  Ca,
                  a,
                  Aa || null,
                  za || 0,
                  va || 0,
                  Ea,
                  ya,
                  Fa
                )))
            : void 0);
      }
      return (
        "tap" == e
          ? ("cancel" === c || "end" === c) &&
            (clearTimeout(La),
            clearTimeout(Ma),
            D() && !L()
              ? ((Ka = oa()),
                (La = setTimeout(
                  b.proxy(function () {
                    (Ka = null),
                      Ca.trigger("tap", [a.target]),
                      d.tap && (f = d.tap.call(Ca, a, a.target));
                  }, this),
                  d.doubleTapThreshold
                )))
              : ((Ka = null),
                Ca.trigger("tap", [a.target]),
                d.tap && (f = d.tap.call(Ca, a, a.target))))
          : "doubletap" == e
          ? ("cancel" === c || "end" === c) &&
            (clearTimeout(La),
            (Ka = null),
            Ca.trigger("doubletap", [a.target]),
            d.doubleTap && (f = d.doubleTap.call(Ca, a, a.target)))
          : "longtap" == e &&
            ("cancel" === c || "end" === c) &&
            (clearTimeout(La),
            (Ka = null),
            Ca.trigger("longtap", [a.target]),
            d.longTap && (f = d.longTap.call(Ca, a, a.target))),
        f
      );
    }

    function p() {
      var a = !0;
      return null !== d.threshold && (a = ta >= d.threshold), a;
    }

    function q() {
      var a = !1;
      return (
        null !== d.cancelThreshold &&
          null !== ua &&
          (a = fa(ua) - ta >= d.cancelThreshold),
        a
      );
    }

    function r() {
      return !(null !== d.pinchThreshold) || za >= d.pinchThreshold;
    }

    function s() {
      var a;
      return (a = !d.maxTimeThreshold || !(va >= d.maxTimeThreshold)), a;
    }

    function t(a, b) {
      if (d.allowPageScroll === "none" || v()) a.preventDefault();
      else {
        var c = d.allowPageScroll === "auto";
        "left" === b
          ? ((d.swipeLeft && c) || (!c && "horizontal" != d.allowPageScroll)) &&
            a.preventDefault()
          : "right" === b
          ? ((d.swipeRight && c) ||
              (!c && "horizontal" != d.allowPageScroll)) &&
            a.preventDefault()
          : "up" === b
          ? ((d.swipeUp && c) || (!c && "vertical" != d.allowPageScroll)) &&
            a.preventDefault()
          : "down" === b
          ? ((d.swipeDown && c) || (!c && "vertical" != d.allowPageScroll)) &&
            a.preventDefault()
          : void 0;
      }
    }

    function u() {
      var a = A(),
        b = B(),
        c = r();
      return a && b && c;
    }

    function v() {
      return !!(d.pinchStatus || d.pinchIn || d.pinchOut);
    }

    function w() {
      return !!(u() && v());
    }

    function x() {
      var a = s(),
        b = p(),
        c = A(),
        d = B(),
        e = q();
      return !e && d && c && b && a;
    }

    function y() {
      return !!(
        d.swipe ||
        d.swipeStatus ||
        d.swipeLeft ||
        d.swipeRight ||
        d.swipeUp ||
        d.swipeDown
      );
    }

    function z() {
      return !!(x() && y());
    }

    function A() {
      return Ea === d.fingers || d.fingers === "all" || !f;
    }

    function B() {
      return 0 !== Fa[0].end.x;
    }

    function C() {
      return !!d.tap;
    }

    function D() {
      return !!d.doubleTap;
    }

    function I() {
      return !!d.longTap;
    }

    function K() {
      if (null == Ka) return !1;
      var a = oa();
      return D() && a - Ka <= d.doubleTapThreshold;
    }

    function L() {
      return K();
    }

    function H() {
      return (1 === Ea || !f) && (isNaN(ta) || ta < d.threshold);
    }

    function O() {
      return va > d.longTapThreshold && ta < 10;
    }

    function P() {
      return !!(H() && C());
    }

    function Q() {
      return !!(K() && D());
    }

    function V() {
      return !!(O() && I());
    }

    function X() {
      (Ia = oa()), (Ja = event.touches.length + 1);
    }

    function F() {
      (Ia = 0), (Ja = 0);
    }

    function R() {
      var a = !1;
      if (Ia) {
        var b = oa() - Ia;
        b <= d.fingerReleaseThreshold && (a = !0);
      }
      return a;
    }

    function Y() {
      return !(!0 !== Ca.data("TouchSwipe_intouch"));
    }

    function $(a) {
      !0 === a
        ? (Ca.bind(J, h), Ca.bind(sa, i), U && Ca.bind(U, k))
        : (Ca.unbind(J, h, !1), Ca.unbind(sa, i, !1), U && Ca.unbind(U, k, !1)),
        Ca.data("TouchSwipe_intouch", !0 === a);
    }

    function _(a, b) {
      var c = void 0 === b.identifier ? 0 : b.identifier;
      return (
        (Fa[a].identifier = c),
        (Fa[a].start.x = Fa[a].end.x = b.pageX || b.clientX),
        (Fa[a].start.y = Fa[a].end.y = b.pageY || b.clientY),
        Fa[a]
      );
    }

    function ba(a) {
      var b = void 0 === a.identifier ? 0 : a.identifier,
        c = ca(b);
      return (
        (c.end.x = a.pageX || a.clientX), (c.end.y = a.pageY || a.clientY), c
      );
    }

    function ca(a) {
      for (var b = 0; b < Fa.length; b++)
        if (Fa[b].identifier == a) return Fa[b];
    }

    function da() {
      for (var a = [], b = 0; 5 >= b; b++)
        a.push({
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0,
            y: 0,
          },
          identifier: 0,
        });
      return a;
    }

    function ea(a, b) {
      (b = Math.max(b, fa(a))), (Ba[a].distance = b);
    }

    function fa(a) {
      return Ba[a] ? Ba[a].distance : void 0;
    }

    function ga() {
      var a = {};
      return (
        (a.left = aa("left")),
        (a.right = aa("right")),
        (a.up = aa("up")),
        (a.down = aa("down")),
        a
      );
    }

    function aa(a) {
      return {
        direction: a,
        distance: 0,
      };
    }

    function ha() {
      return Ha - Ga;
    }

    function ia(a, b) {
      var c = Math.abs(a.x - b.x),
        d = Math.abs(a.y - b.y);
      return Math.round(Math.sqrt(c * c + d * d));
    }

    function ja(a, b) {
      return (1 * (b / a)).toFixed(2);
    }

    function ka() {
      return 1 > ya ? "out" : "in";
    }

    function la(a, b) {
      return Math.round(
        Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
      );
    }

    function ma(a, b) {
      var c = a.x - b.x,
        d = b.y - a.y,
        e = Math.atan2(d, c),
        f = Math.round((180 * e) / Math.PI);
      return 0 > f && (f = 360 - Math.abs(f)), f;
    }

    function na(a, b) {
      var c = ma(a, b);
      return 45 >= c && 0 <= c
        ? "left"
        : 360 >= c && 315 <= c
        ? "left"
        : 135 <= c && 225 >= c
        ? "right"
        : 45 < c && 135 > c
        ? "down"
        : "up";
    }

    function oa() {
      var a = new Date();
      return a.getTime();
    }

    function pa(a) {
      a = b(a);
      var c = a.offset(),
        d = {
          left: c.left,
          right: c.left + a.outerWidth(),
          top: c.top,
          bottom: c.top + a.outerHeight(),
        };
      return d;
    }

    function qa(a, b) {
      return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom;
    }
    var E = f || g || !d.fallbackToMouseEvents,
      ra = E
        ? g
          ? a
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      J = E
        ? g
          ? a
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      sa = E ? (g ? (a ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
      U = E ? null : "mouseleave",
      S = g ? (a ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      ta = 0,
      ua = null,
      va = 0,
      wa = 0,
      xa = 0,
      ya = 1,
      za = 0,
      Aa = 0,
      Ba = null,
      Ca = b(c),
      Da = "start",
      Ea = 0,
      Fa = null,
      Ga = 0,
      Ha = 0,
      Ia = 0,
      Ja = 0,
      Ka = 0,
      La = null,
      Ma = null;
    try {
      Ca.bind(ra, e), Ca.bind(S, j);
    } catch (a) {
      b.error("events not supported " + ra + "," + S + " on jQuery.swipe");
    }
    (this.enable = function () {
      return Ca.bind(ra, e), Ca.bind(S, j), Ca;
    }),
      (this.disable = function () {
        return l(), Ca;
      }),
      (this.destroy = function () {
        return l(), Ca.data("TouchSwipe", null), Ca;
      }),
      (this.option = function (a, c) {
        if (d[a] !== void 0) {
          if (c === void 0) return d[a];
          d[a] = c;
        } else
          b.error("Option " + a + " does not exist on jQuery.swipe.options");
        return null;
      });
  }
  var f = "ontouchstart" in window,
    a = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    g = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
  (b.fn.swipe = function (a) {
    var d = b(this),
      e = d.data("TouchSwipe");
    if (e && "string" == typeof a) {
      if (e[a])
        return e[a].apply(this, Array.prototype.slice.call(arguments, 1));
      b.error("Method " + a + " does not exist on jQuery.swipe");
    } else if (!e && ("object" == typeof a || !a))
      return c.apply(this, arguments);
    return d;
  }),
    (b.fn.swipe.defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
    }),
    (b.fn.swipe.phases = {
      PHASE_START: "start",
      PHASE_MOVE: "move",
      PHASE_END: "end",
      PHASE_CANCEL: "cancel",
    }),
    (b.fn.swipe.directions = {
      LEFT: "left",
      RIGHT: "right",
      UP: "up",
      DOWN: "down",
      IN: "in",
      OUT: "out",
    }),
    (b.fn.swipe.pageScroll = {
      NONE: "none",
      HORIZONTAL: "horizontal",
      VERTICAL: "vertical",
      AUTO: "auto",
    }),
    (b.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      ALL: "all",
    });
});
