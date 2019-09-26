"use strict";

new WOW().init();
$('.scrolldown_posts').click(function () {
  $('html, body').animate({
    scrollTop: $('#main_content').position().top
  }, 700);
});

window.onscroll = function () {
  var header_menu = document.querySelector("#header_menu");
  var scrollPosY = window.pageYOffset | document.body.scrollTop;

  if (scrollPosY > 0) {
    header_menu.className = "header_menu flex stick";
  } else if (scrollPosY <= 0) {
    header_menu.className = "header_menu flex";
  }
};

var menu_btn = document.querySelector("#menu_btn");
var menu_mobil = document.querySelector(".menu_mobil");
var submenu_btn = document.querySelector("#submenu_btn");
var menu_items = document.querySelectorAll(".menu_mobil .menu_item");
var drop_menu = document.querySelector(".drop_menu");
var menu_itemsMobil = document.querySelectorAll(".drop_menu .menu_item-mobil");
menu_btn.addEventListener('click', function () {
  if (drop_menu.classList.contains("show")) {
    drop_Xmenu(drop_menu, menu_itemsMobil);
  }

  drop_Xmenu(menu_mobil, menu_items);
});
submenu_btn.addEventListener('click', function () {
  drop_Xmenu(drop_menu, menu_itemsMobil);
});
var transit;

function drop_Xmenu(dropMenu, items) {
  var transitRm = 0;
  var time = 0;

  for (var i = 0; i < items.length; i++) {
    transitRm = transitRm + 0.2;
    time = time + 100;
  }

  var arrey_items = Object.assign([], items).reverse();

  if (dropMenu.classList.contains("show")) {
    setTimeout(function () {
      dropMenu.classList.remove("show");
    }, time);
    transit = transitRm;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var menu_item = _step.value;
        transit = transit - 0.2;
        menu_item.style.transition = "all ".concat(transit, "s");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arrey_items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _menu_item = _step2.value;

        _menu_item.classList.toggle("show_item");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  } else {
    dropMenu.classList.toggle("show");
    transit = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _menu_item2 = _step3.value;
        transit = transit + 0.3;
        _menu_item2.style.transition = "all ".concat(transit, "s");

        _menu_item2.classList.toggle("show_item");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
}

$(document).click(function (e) {
  if ($(e.target).closest('#menu_btn, .menu_mobil').length != 0) return false;

  if (menu_mobil.classList.contains("show")) {
    if (drop_menu.classList.contains("show")) {
      drop_Xmenu(drop_menu, menu_itemsMobil);
    }

    drop_Xmenu(menu_mobil, menu_items);
  }
});
$(document).ready(function () {
  $(".my-slider").slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 988,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
var search_site = document.querySelector(".search_site");
var search_button = document.querySelector("#search_button");
var icons_search = document.querySelectorAll(".visible_search");
var search = document.querySelector(".search");
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = icons_search[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var icon_search = _step4.value;
    icon_search.addEventListener("click", function () {
      search_site.classList.toggle("search_visible");
    });
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

search_button.addEventListener("click", function () {
  console.log(search.value);
  search.value = '';
  search_site.classList.toggle("search_visible");
});
$(document).click(function (e) {
  if ($(e.target).closest('.visible_search, .search_site').length != 0) return false;

  if (search_site.classList.contains("search_visible")) {
    search_site.classList.toggle("search_visible");
  }
});
var sign_ins = document.querySelectorAll(".sign_in");
var modalIn = document.querySelector("#modalIn");
var sign_up = document.querySelector("#sign_up");
var modalUp = document.querySelector("#modalUp");
var sign_sendUp = document.querySelector("#sign_sendUp");
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = sign_ins[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var sign_in = _step5.value;
    sign_in.addEventListener("click", function () {
      modalIn.classList.remove("zoomOut");
      modalIn.classList.add("animated");
      modalIn.classList.add("zoomIn");
      modalIn.classList.add("modal_visible");
    });
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

sign_up.onclick = function () {
  modalUp.classList.remove("zoomOut");
  modalUp.classList.add("animated");
  modalUp.classList.add("zoomIn");
  modalUp.classList.add("modal_visible");
};

$(document).click(function (e) {
  if ($(e.target).closest("#sign_in, #sign_up, .sign_in, .sign_block").length != 0) return false;
  modalIn.classList.add("zoomOut");
  modalIn.classList.remove("zoomIn");
  modalUp.classList.add("zoomOut");
  modalUp.classList.remove("zoomIn");
  setTimeout(function () {
    modalIn.classList.remove("modal_visible");
    modalUp.classList.remove("modal_visible");
  }, 500);
});

sign_sendUp.onclick = function () {
  modalIn.classList.add("zoomOut");
  modalIn.classList.remove("zoomIn");
  setTimeout(function () {
    modalIn.classList.remove("modal_visible");
  }, 500);
  modalUp.classList.remove("zoomOut");
  modalUp.classList.add("animated");
  modalUp.classList.add("zoomIn");
  modalUp.classList.add("modal_visible");
};