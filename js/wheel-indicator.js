var WheelIndicator = (function (a, b) {
  function c(a) {
    (this._options = j(l, a)),
      (this._deltaArray = [0, 0, 0]),
      (this._isAcceleration = !1),
      (this._isStopped = !0),
      (this._direction = ""),
      (this._timer = ""),
      (this._isWorking = !0);
    var b = this;
    (this._wheelHandler = function (a) {
      b._isWorking && (f.call(b, a), b._options.preventMouse && e(a));
    }),
      h(this._options.elem, k, this._wheelHandler);
  }

  function d(a) {
    (a.direction = this._direction), this._options.callback.call(this, a);
  }

  function e(b) {
    (b = b || a.event),
      b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
  }

  function f(a) {
    var b = this,
      c = m(a);
    if (0 !== c) {
      var e,
        f,
        h = 0 < c ? "down" : "up",
        j = b._deltaArray.length,
        k = !1,
        l = 0;
      for (
        clearTimeout(b._timer),
          b._timer = setTimeout(function () {
            (b._deltaArray = [0, 0, 0]),
              (b._isStopped = !0),
              (b._direction = h);
          }, 150),
          f = 0;
        f < j;
        f++
      )
        0 !== b._deltaArray[f] && (0 < b._deltaArray[f] ? ++l : --l);
      Math.abs(l) === j &&
        ((e = 0 < l ? "down" : "up"),
        e !== b._direction && ((k = !0), (b._direction = h))),
        b._isStopped ||
          (k
            ? ((b._isAcceleration = !0), d.call(this, a))
            : Math.abs(l) === j && g.call(this, a)),
        b._isStopped &&
          ((b._isStopped = !1),
          (b._isAcceleration = !0),
          (b._direction = h),
          d.call(this, a)),
        b._deltaArray.shift(),
        b._deltaArray.push(c);
    }
  }

  function g(a) {
    var b = Math.abs(this._deltaArray[0]),
      c = Math.abs(this._deltaArray[1]),
      e = Math.abs(this._deltaArray[2]),
      f = Math.abs(m(a));
    f > e &&
      e > c &&
      c > b &&
      !this._isAcceleration &&
      (d.call(this, a), (this._isAcceleration = !0)),
      f < e && e <= c && (this._isAcceleration = !1);
  }

  function h(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }

  function i(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }

  function j(a, b) {
    var c,
      d = {};
    for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c]);
    for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c]);
    return d;
  }
  var k = "onwheel" in b ? "wheel" : "mousewheel",
    l = {
      callback: function () {},
      elem: b,
      preventMouse: !0,
    };
  c.prototype = {
    constructor: c,
    turnOn: function () {
      return (this._isWorking = !0), this;
    },
    turnOff: function () {
      return (this._isWorking = !1), this;
    },
    setOptions: function (a) {
      return (this._options = j(this._options, a)), this;
    },
    getOption: function (a) {
      var b = this._options[a];
      if (b !== void 0) return b;
      throw new Error("Unknown option");
    },
    destroy: function () {
      return i(this._options.elem, k, this._wheelHandler), this;
    },
  };
  var m = function (a) {
    return (
      (m =
        a.wheelDelta && !a.deltaY
          ? function (a) {
              return -1 * a.wheelDelta;
            }
          : function (a) {
              return a.deltaY;
            }),
      m(a)
    );
  };
  return c;
})(window, document);
"object" == typeof exports && (module.exports = WheelIndicator);
