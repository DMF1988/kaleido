/**
 *@Author: chad.ding@vipshop.com
 *@Copyright: 2008-2016 VIPSHOP.COM|唯品会
 *@Date: 2017-01-09 16:24:21
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.constant('$MENUS', [{
        key: 'album',
        children: [],
        url: '#!/album',
        text: '相册',
        icon: 'fa-camera-retro',
        active: false
    },{
        key: 'diary',
        children: [],
        url: '#!/diary',
        text: '游记',
        icon: 'fa-address-book',
        active: false
    },{
        key: 'profile',
        children: [],
        url: '#!/profile',
        text: '个人中心',
        icon: 'fa-drivers-license',
        active: false
    }]);

})(angular);
