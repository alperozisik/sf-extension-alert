const AlertView = require("sf-core/ui/alertview");

function alert(options, title) {
    if (typeof options === "string")
        options = {
            message: options
        };
    if (title)
        options.title = title;

    var av = new AlertView(options);
    var buttons = options.buttons || [];
    
    for(var i in buttons) {
        var b = buttons[i];
        av.addButton(b);
    }
    
    av.show();
}

var oldAlert = global.alert;
global.alert = alert;

module.exports = exports = oldAlert;