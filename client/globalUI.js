this.GlobalUI = function() {};
this.GlobalUI.toast = function(text) {
    var toast;
    toast = $("[global-toast]")[0];
    toast.text = text;
    return toast.show();
};