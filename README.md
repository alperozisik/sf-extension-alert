# Smartface Alert replacement
This extension **replaces** existing **global.alert** with new implementaion of *sf-core/ui/alertview*

## Install
```shell
npm i -S https://github.com/alperozisik/sf-extension-alert.git
```
## Require
Using this performs replacement. If you want to access the old alert, you can retrieve it by oldAlert as the given example
```javascript
const oldAlert = require('sf-extension-alert');
```

## Usage 1
Similar to old alert
```javascript
alert("message");
```

## Usage 2
Similar to old alert
```javascript
alert("message", "title");
```

## Usage 3
Similar to old alert
```javascript
alert({
    message: "your message",
    title: "your title"
});
```

## Usage 4
Buttons are changed. Similar to AlertView.addButton
```javascript
const AlertView = require('sf-core/ui/alertview');

alert({
    message: "your message",
    title: "your title", //optionel
    buttons: [ {
        text: "button1",
        onClick: function() {}  //optionel
    }, {
        index: AlertView.ButtonType.POSITIVE, //optionel
        text: "Okay",
        onClick: function() {
            console.log("Okay clicked.");
        }
    }]
});
```

## Usage 5
Alert with no buttons
```javascript
alert({
    message: "your message",
    buttons: []
});
```


## Usage 6
Dismiss the alert later
```javascript
var alertToDismiss = alert({ //returns the instanceo of AlertView
    message: "your message",
    buttons: []
});
alertToDismiss.dismiss();
```