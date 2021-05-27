$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-synopsis").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-heals").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".heals").addClass("underline");
      }
      if (direction == "up") {
        $(".heals").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-soothes").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".heals").removeClass("underline");
        $(".soothess").addClass("underline");
      }
      if (direction == "up") {
        $(".heals").addClass("underline");
        $(".soothess").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );
  

  $(".js--section-connect").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".soothess").removeClass("underline");
        $(".connect").addClass("underline");
      }
      if (direction == "up") {
        $(".soothess").addClass("underline");
        $(".connect").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-impact").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".connect").removeClass("underline");
        $(".impact").addClass("underline");
      }
      if (direction == "up") {
        $(".connect").addClass("underline");
        $(".impact").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--impact-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-support-1").addClass("impact-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--impact-support-1").removeClass("impact-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--impact-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-support-2").addClass("impact-support-ls-hover");
        $(".js--impact-support-1").removeClass("impact-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--impact-support-2").removeClass("impact-support-ls-hover");
        $(".js--impact-support-1").addClass("impact-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--impact-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-support-3").addClass("impact-support-rs-hover");
        $(".js--impact-support-2").removeClass("impact-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--impact-support-3").removeClass("impact-support-rs-hover");
        $(".js--impact-support-2").addClass("impact-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--impact-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-support-4").addClass("impact-support-ls-hover");
        $(".js--impact-support-3").removeClass("impact-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--impact-support-4").removeClass("impact-support-ls-hover");
        $(".js--impact-support-3").addClass("impact-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--impact-support-5").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-support-5").addClass("impact-support-rs-hover");
        $(".js--impact-support-4").removeClass("impact-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--impact-support-5").removeClass("impact-support-rs-hover");
        $(".js--impact-support-4").addClass("impact-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );


  $(".js--impact-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--impact-conclusion").addClass("impact-conclusion-hover");
        $(".js--impact-support-5").removeClass("impact-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--impact-conclusion").removeClass("impact-conclusion-hover");
        $(".js--impact-support-5").addClass("impact-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
