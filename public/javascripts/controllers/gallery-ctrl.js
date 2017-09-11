/**
 * Created by Nicole J. Nobles on 9/8/2017.
 */

(function(angular) {
    'use strict';
    var module = angular.module('appModule', []);

//angular.module('myApp')
    module.controller('GalleryController', function($scope) {

        /**
         * Gallery
         */
        $scope.images = [
            {
                id:     '',
                title:  '',
                desc:   '',
                for:    '',
                source: 'images/gallery/XXX.png'
            },
            {
                id:     '',
                title:  '',
                desc:   '',
                for:    '',
                source: 'images/gallery/XXX.png'
            }
        ];
    });
})(window.angular);