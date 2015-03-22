this.GlobalUI = (function() {
  function GlobalUI() {}
  GlobalUI.toast = function(text, className) {
    var toast;
    toast = $("[global-toast]")[0];
    toast.text = text;
    return toast.show();
  };
});