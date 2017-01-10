/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:31
 */

'use strict';

(function($){

    $.noty.defaults = {
        layout: 'topRight',
        theme: 'relax', // or 'default'
        type: 'alert',
        text: '', // can be html or string
        dismissQueue: false, // If you want to use queue feature set this true
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: 'animated flipInX', // or Animate.css class names like: 'animated bounceInLeft'
            close: 'animated flipOutX', // or Animate.css class names like: 'animated bounceOutLeft'
            easing: 'swing',
            speed: 500 // opening & closing animation speed
        },
        timeout: 3000, // delay for closing event. Set false for sticky notifications
        force: false, // adds notification to the beginning of queue when set to true
        modal: false,
        maxVisible: 5, // you can set max visible notification for dismissQueue true option,
        killer: true, // for close all notifications before show
        closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: false // an array of buttons
    };

})(jQuery);