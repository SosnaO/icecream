window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('menu-wrapper').style.backgroundColor= scrolled==0?"transparent":"#E17992";
  }