/**
 * Created by Jan on 9/16/2015.
 */

(function(angular) {
'use strict';
var module = angular.module('appModule', []);

//angular.module('myApp')
module.controller('WiwoController', function($scope) {

    /**
     * What I'm Working On.
     */
    $scope.projects = [
        {
            id:    'cloudlink-it',
            type:  'Organization',
            name:  'CloudLink-IT',
            logo:  'images/wiwo/logos/cloudlink-it.png',
            since: 2015,
            what:  'IT solutions company',
            href:  'http://cloudlinkit-micronovations.rhcloud.com/'
        },
        // http://www.triworld.online/axion
        {
            id:    'axion',
            type:  'Engine',
            name:  'Axion',
            logo:  'images/wiwo/logos/axion.png',
            since: 2015,
            what:  '3D Game Engine',
            href:  'https://github.com/shecodez/Axion'
        },
        {
            id:    'sheblogz',
            type:  'Ruby on Rails',
            name:  'SheBlogz',
            logo:  'images/wiwo/logos/shetravelz.png',
            since: 2017,
            what:  'Web App',
            href:  'https://sheblogz.herokuapp.com/'
        },
        {
            id:    'research',
            type:  'Research',
            name:  'Research',
            logo:  'images/logo.png',
            since: 2016,
            what:  'Robotics',
            href:  '/research'
        }
    ];
});
})(window.angular);