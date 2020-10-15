//jQuery
window.$ = window.jQuery = require("jquery");

const navbar = $("#navbar");
const sidebar = $("#sidebar");
const articleList = $("#articleList");
const forumList = $("#forumList");
const join = $("#join");
const closeJoin = $("#btnJoinClose");

const articleButton = $("#btnArticle");
const sidebarButton = $("#btnSidebar");

const navbarMenu = $("#navbarMenu");
const menuButton = $("#btnMenu");

let sidebarShow = false;

closeJoin.click((e) => {
  e.preventDefault();
 join.removeClass('show')
})

articleButton.click(() => {
  sidebarShow = false;
  toggleSidebar();
})

sidebarButton.click(() => {
  sidebarShow = true;
  toggleSidebar();
})

menuButton.click((e) => {
  e.preventDefault();
  $(navbarMenu).toggleClass("active")
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
    hideFlex(articleList);
    hideFlex(forumList);
    sidebarButton.addClass('btn--primary');
    articleButton.removeClass('btn--primary');
  } else {
    showFlex(forumList);
    showFlex(articleList);
    hideFlex(sidebar);
    articleButton.addClass('btn--primary');
    sidebarButton.removeClass('btn--primary');
  }
}

 $('body').scroll(() => {
  //  console.log('scroll')
  //   console.log($(navbar).offset().top)
    if (navbar.offset().top == 0) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled')
    }
  })


$(() => {

  setTimeout(() => {
    join.addClass('show')
  }, 3000);
  
})
