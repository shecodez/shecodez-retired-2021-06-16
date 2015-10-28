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
            href:  'http://www.cloudlink-it.com/'
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
            id:    'medscan',
            type:  'Web App',
            name:  'MedSCAN',
            logo:  'images/wiwo/logos/medscan.png',
            since: 2014,
            what:  'Simulation Software'
            //href:  'http://www.nobilitek.com/medscan'
        },
        {
            id:    'smapp',
            type:  'Android App',
            name:  'SMApp',
            logo:  'images/wiwo/logos/smapp.png',
            since: 2014,
            what:  'Social Meeting App'
            //href:  'http://www.socialmeetingapp.com/'
        }
    ];
});
})(window.angular);