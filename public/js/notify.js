// Generated by CoffeeScript 1.3.3
(function() {

  define(function() {
    var notify;
    notify = function(text, type, pos) {
      if (pos == null) {
        pos = "bottom";
      }
      noty({
        text: text,
        theme: 'noty_theme_twitter',
        layout: pos,
        type: type,
        animateOpen: {
          height: "toggle"
        },
        animateClose: {
          height: "toggle"
        },
        speed: 500,
        timeout: 3000,
        closeButton: false,
        closeOnSelfClick: true,
        closeOnSelfOver: false
      });
    };
    notify.error = function(text, pos) {
      return notify(text, 'error', pos);
    };
    notify.success = function(text, pos) {
      return notify(text, 'success', pos);
    };
    notify.info = function(text, pos) {
      return notify(text, 'information', pos);
    };
    notify.alert = function(text, pos) {
      return notify(text, 'alert', pos);
    };
    return notify;
  });

}).call(this);
