//jQuery
window.$ = window.jQuery = require("jquery");

// Script Here
let wWidth = $(window).width();
let wHeight = $(window).height();

let sidebar = $("#sidebar");
let article = $("#article");
let join = $("#join");
let sidebarToggler = $("#sidebarToggler")
let homeHeader = $("#homeHeader");
let closeJoin = $("#btnJoinClose");

let articleButton = $("#btnArticle");
let sidebarButton = $("#btnSidebar");

let sidebarShow = false;

closeJoin.click((e) => {
  e.preventDefault();
 join.hide()
})

articleButton.click(() => {
  sidebarShow = false;
  toggleSidebar();
})

sidebarButton.click(() => {
  sidebarShow = true;
  toggleSidebar();
})

const showFlex = (element) => {
  $(element).addClass("d-flex");
  $(element).removeClass("d-none")
}

const hideFlex = (element) => {
  $(element).removeClass("d-flex")
  $(element).addClass("d-none");
}

const toggleSidebar = () => {
  if (sidebarShow) {
    showFlex(sidebar);
    hideFlex(article);
    sidebarButton.addClass('btn--primary');
    articleButton.removeClass('btn--primary');
     hideFlex(homeHeader);
  } else {
    showFlex(article);
    hideFlex(sidebar);
    articleButton.addClass('btn--primary');
    sidebarButton.removeClass('btn--primary');
    if (wWidth >= 768) {
    showFlex(homeHeader);
  } else {
    hideFlex(homeHeader)
  }
  }

  
}

if (wWidth < 1024) {
  toggleSidebar();
  showFlex(sidebarToggler);
} else {
  hideFlex(sidebarToggler);
  showFlex(article);
  showFlex(sidebar);
  showFlex(homeHeader);
}

$(() => {

  setTimeout(() => {
    join.show()
  }, 3000);

$(window).on('resize', function() {
  wWidth = $(window).width();
  wHeight = $(window).height();

if (wWidth < 1024) {
  toggleSidebar();
  showFlex(sidebarToggler);
} else {
  hideFlex(sidebarToggler);
  showFlex(article);
  showFlex(sidebar);
}
});
})
