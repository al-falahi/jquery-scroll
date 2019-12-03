console.log("main.js is connected");
$(document).ready(function() {
  const scrollToTop = document.getElementById("scroll-to-top");
  onscroll = function() {
    if (pageYOffset >= 800) {
      scrollToTop.style.display = "flex";
    } else {
      scrollToTop.style.display = "none";
    }
  };
  $("#scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $("#scroll-to-bottom").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
