(function (a) {
  function b(a) {
    k ||
      j == a ||
      ((k = !0),
      (j = a),
      (e = h > a ? "rotateCubeBottomOut" : "rotateCubeTopOut"),
      (f = h > a ? "rotateCubeBottomIn" : "rotateCubeTopIn"),
      d());
  }

  function c(a) {
    k ||
      ((k = !0),
      "up" == a
        ? ((j = 1 < h ? h - 1 : g),
          (e = "rotateCubeBottomOut"),
          (f = "rotateCubeBottomIn"))
        : ((j = h < g ? h + 1 : 1),
          (e = "rotateCubeTopOut"),
          (f = "rotateCubeTopIn")),
      d());
  }

  function d() {
    a("#cubeTransition>div:eq(" + (j - 1) + ")").addClass("visible"),
      a("#cubeTransition>div:eq(" + (h - 1) + ")").addClass(e),
      a("#cubeTransition>div:eq(" + (j - 1) + ")").addClass(f),
      a("#bullets>li:eq(" + (h - 1) + ")").removeClass("active"),
      a("#bullets>li:eq(" + (j - 1) + ")").addClass("active"),
      animationOut(h - 1),
      setTimeout(function () {
        a("#cubeTransition>div:eq(" + (h - 1) + ")").removeClass("visible");
      }, 500),
      setTimeout(function () {
        a("#cubeTransition>div:eq(" + (h - 1) + ")").removeClass(e),
          a("#cubeTransition>div:eq(" + (j - 1) + ")").removeClass(f),
          animationIn(j - 1),
          (h = j),
          (k = !1);
      }, 600);
  }
  var e,
    f,
    g = a("#cubeTransition>div").length,
    h = 1,
    j = 1,
    k = !1;
  for (a("#cubeTransition>div:eq(0)").addClass("visible"), i = 0; i < g; i++) {
    var l = a("<li></li>");
    0 == i && l.addClass("active"), a("#bullets").append(l);
  }
  a(document).ready(function () {
    var d = new WheelIndicator({
      callback: function (a) {
        "down" == a.direction ? c("down") : c("up");
      },
    });
    d.getOption("preventMouse"),
      a(document).keydown(function (a) {
        (38 == a.keyCode || (a && 37 == a.keyCode)) && c("up"),
          (39 == a.keyCode || (a && 40 == a.keyCode)) && c("down");
      }),
      a(document).swipe({
        swipe: function (a, b) {
          "up" == b ? c("down") : "down" == b && c("up");
        },
      }),
      a("#bullets>li").on("click", function () {
        b(a(this).index() + 1);
      });
  });
})(jQuery);
