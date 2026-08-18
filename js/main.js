AOS.init({
  duration: 800,
  easing: "slide",
}),
  $(document).ready(function (a) {
    "use strict";
    a(window).stellar({
      responsive: !0,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      horizontalScrolling: !1,
      hideDistantElements: !1,
      scrollProperty: "scroll",
      horizontalOffset: 0,
      verticalOffset: 0,
    }),
      a.Scrollax();
    (function () {
      setTimeout(function () {
        0 < a("#ftco-loader").length && a("#ftco-loader").removeClass("show");
      }, 1);
    })();
    (function () {
      a(".carousel-testimony").owlCarousel({
        center: !0,
        loop: !0,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: !1,
        navText: [
          '<span class="ion-ios-arrow-back">',
          '<span class="ion-ios-arrow-forward">',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1e3: {
            items: 3,
          },
        },
      });
    })();
    (function () {
      a(".js-fullheight").css("height", a(window).height()),
        a(window).resize(function () {
          a(".js-fullheight").css("height", a(window).height());
        });
    })();
    (function () {
      a("#section-counter, .ftco-about").waypoint(
        function (b) {
          if ("down" === b && !a(this.element).hasClass("ftco-animated")) {
            var c = a.animateNumber.numberStepFactories.separator(",");
            a(".number").each(function () {
              var b = a(this),
                d = b.data("number");
              console.log(d),
                b.animateNumber(
                  {
                    number: d,
                    numberStep: c,
                  },
                  7e3
                );
            });
          }
        },
        {
          offset: "95%",
        }
      );
    })();
    (function () {
      var b = 0;
      a(".ftco-animate").waypoint(
        function (c) {
          "down" !== c ||
            a(this.element).hasClass("ftco-animated") ||
            (b++,
            a(this.element).addClass("item-animate"),
            setTimeout(function () {
              a("body .ftco-animate.item-animate").each(function (b) {
                var c = a(this);
                setTimeout(
                  function () {
                    var a = c.data("animate-effect");
                    "fadeIn" === a
                      ? c.addClass("fadeIn ftco-animated")
                      : "fadeInLeft" === a
                      ? c.addClass("fadeInLeft ftco-animated")
                      : "fadeInRight" === a
                      ? c.addClass("fadeInRight ftco-animated")
                      : c.addClass("fadeInUp ftco-animated"),
                      c.removeClass("item-animate");
                  },
                  50 * b,
                  "easeInOutExpo"
                );
              });
            }, 100));
        },
        {
          offset: "95%",
        }
      );
    })(),
      a(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        closeBtnInside: !1,
        fixedContentPos: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        gallery: {
          enabled: !0,
          navigateByImgClick: !0,
          preload: [0, 1],
        },
        image: {
          verticalFit: !0,
        },
        zoom: {
          enabled: !0,
          duration: 300,
        },
      }),
      a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      });
  }),
  $(function () {
    function a() {
      var a = $(window).scrollTop();
      $("section").each(function () {
        var c = $(this).attr("id"),
          d = $(this).offset().top - 1,
          e = $(this).height();
        a >= d &&
          a < d + e &&
          (b.removeClass("active"),
          $("#navbar")
            .find('[data-scroll="' + c + '"]')
            .addClass("active"));
      });
    }
    var b = $("#navbar a.dot");
    b.on("click", function (a) {
      var b = $($(this).attr("href"));
      $("html, body").animate(
        {
          scrollTop: b.offset().top,
        },
        600
      ),
        $(this).addClass("active"),
        a.preventDefault();
    }),
      $(window).on("scroll", function () {
        a();
      }),
      a();
  }),
  $(function () {
    function a(a) {
      return 360 * (a / 100);
    }
    $(".progress").each(function () {
      var b = $(this).attr("data-value"),
        c = $(this).find(".progress-left .progress-bar"),
        d = $(this).find(".progress-right .progress-bar");
      0 < b &&
        (50 >= b
          ? d.css("transform", "rotate(" + a(b) + "deg)")
          : (d.css("transform", "rotate(180deg)"),
            c.css("transform", "rotate(" + a(b - 50) + "deg)")));
    });
  });
