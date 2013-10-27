(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define('qtip', [], factory);
    }
    else {
        root.qtip = factory();
    }
}(this, function() {
var qtip;

qtip = (function() {
  var div, hide, initialize, options, show;
  div = null;
  options = {
    dataAttribute: 'data-qtip',
    id: 'qtip',
    visibleClass: 'visible'
  };
  initialize = function() {
    var element, elements, _i, _len;
    elements = document.querySelectorAll("[title][" + options.dataAttribute + "]");
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      element = elements[_i];
      element.addEventListener('touchstart', show);
      element.addEventListener('touchend', hide);
      element.addEventListener('mousedown', show);
      element.addEventListener('mouseup', hide);
    }
    div = document.createElement('div');
    div.id = options.id;
    return document.body.appendChild(div);
  };
  hide = function(event) {
    return div.classList.remove(options.visibleClass);
  };
  show = function(event) {
    var element, left, offset, top;
    event.preventDefault();
    element = event.target;
    offset = element.getBoundingClientRect();
    div.innerHTML = element.getAttribute('title');
    left = offset.left + (element.offsetWidth - div.offsetWidth) / 2;
    top = offset.top - div.offsetHeight - 10;
    div.style.cssText = "left: " + left + "px;\ntop: " + top + "px;";
    return div.classList.add(options.visibleClass);
  };
  return initialize();
})();

    return qtip;
}));
