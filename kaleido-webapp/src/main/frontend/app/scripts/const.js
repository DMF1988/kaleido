/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-01-10 17:52:25
 */

'use strict';

(function(angular) {

    var kaleidoApp = angular.module('kaleidoApp');

    kaleidoApp.constant('$MENUS', [{
        key: 'monitor',
        children: [],
        url: '#!/kaleido/monitor',
        text: '动态',
        icon: 'fa-send',
        active: false
    },{
        key: 'footstep',
        children: [],
        url: '#!/kaleido/footstep',
        text: '足迹',
        icon: 'fa-map-marker',
        active: false
    },{
        key: 'album',
        children: [],
        url: '#!/kaleido/album',
        text: '相册',
        icon: 'fa-camera-retro',
        active: false
    },{
        key: 'diary',
        children: [],
        url: '#!/kaleido/diary',
        text: '游记',
        icon: 'fa-address-book',
        active: false
    },{
        key: 'friend',
        children: [],
        url: '#!/kaleido/friend',
        text: '好友',
        icon: 'fa-group',
        active: false
    },{
        key: 'profile',
        children: [],
        url: '#!/kaleido/profile',
        text: '个人中心',
        icon: 'fa-drivers-license',
        active: false
    }]);

})(angular);
