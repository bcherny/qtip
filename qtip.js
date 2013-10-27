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
  var attached, div, face, hide, initialize, options, show;
  options = {
    dataAttribute: 'data-qtip',
    id: 'qtip-bubble',
    visibleClass: 'visible'
  };
  div = document.createElement('div');
  div.id = options.id;
  document.body.appendChild(div);
  attached = {};
  initialize = function() {
    var element, elements, _i, _len, _results;
    elements = document.querySelectorAll("[title][" + options.dataAttribute + "]");
    _results = [];
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      element = elements[_i];
      if (!(element in attached)) {
        attached[element] = true;
        element.addEventListener('touchstart', show);
        element.addEventListener('touchend', hide);
        element.addEventListener('mousedown', show);
        _results.push(element.addEventListener('mouseup', hide));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
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
  initialize();
  return face = {
    initialize: initialize
  };
})();

    return qtip;
}));
