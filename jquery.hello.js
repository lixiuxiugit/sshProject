// 扩展的方法直接添加到$对象上，调用时用$.或jQuery.来调用 
$.extend({
    hello: function(name) {
        console.log("hello,", name?name:"everyone", "!");
    },
    welcome: function() {
        console.log("welcome!");
    }
});