/**
 * Created by Jan on 9/19/2015.
 */

(function(angular) {
'use strict';

var module = angular.module('appModule', ['ui.odometer']);

//angular.module('myApp')
module.controller('PortfolioController', function($scope, $filter) {

    /**
     * Portfolio
     */
    $scope.projects = [
        // Websites
        {
            avocational: true,
            name:        'S·HeTravelZ',
            language:    'Ruby on Rails',
            concept:     'https://shetravelz.herokuapp.com/',
            type:        'Website',
            for:         'shecodez.com',
            description: 'A Rails applicants management demo',
            year:        2017
        },
        {
            avocational: true,
            name:        'S·HeTravelZ',
            language:    'HTML5/CSS3/JS',
            concept:     'http://codepen.io/shecodez/full/MbOdRz/',
            type:        'Website',
            for:         'shecodez.com',
            description: 'A MEAN travel homepage demo',
            year:        2016
        },
        {
            avocational: false,
            name:        'micronovations.com',
            language:    'Jade/CSS/JS',
            concept:     'https://www.micronovations.com/',
            type:        'Website',
            for:         'microNovations LLC',
            description: 'Cloud-based IT solutions company website',
            year:        2016
        },
        {
            avocational: false,
            name:        'meduscan.com',
            language:    'MEAN Stack (JS)',
            concept:     'https://github.com/shecodez/MeduSCAN',
            type:        'Web App',
            for:         'shecodez.com',
            description: 'A BCMA training Web Application',
            year:        2016
        },
        // personal website (2015)
        {
            avocational: false,
            name:        'shecodez.com (2015)',
            language:    'Jade/CSS/JS',
            concept:     'https://drive.google.com/file/d/0By5CpgoUYXl_LUUxODRNZjJVMU0/view?usp=sharing',
            type:        'Website',
            for:         'Nicole J. Nobles',
            description: 'Personal website, portfolio, and résumé',
            year:        2015
        },
        // personal website (2014)
        {
            avocational: false,
            name:        'lyfelink.com (2014)',
            language:    'HTML/CSS',
            concept:     'https://drive.google.com/file/d/0By5CpgoUYXl_akFDMUdZemFnWHc/view?usp=sharing',
            type:        'Website',
            for:         'Nicole J. Nobles',
            description: 'Personal website, portfolio, and résumé',
            year:        2014
        },
        // Desktop Applications
        {
            avocational: false,
            name:        'MedSCAN',
            language:    'C#',
            concept:     'https://docs.google.com/document/d/1v365vxj0Dt5xT_1-NKHIoVnMVjOiDyvzlzX1iXo4zrY/edit?usp=sharing',
            repository:  'https://github.com/shecodez/MedSCAN2014',
            type:        'Desktop Application',
            for:         'GC&SU Nursing Dept.',
            description: 'BCMA simulation training software',
            year:        2014
        }
    ];

    $scope.$watch('search', function(){
        $scope.filtered = $filter('filter')($scope.projects, $scope.search);
    });

    // create a list of unique years.
    $scope.years = unique($scope.projects, 'year');

    // create a list of unique categories.
    $scope.categories = unique($scope.projects, 'type');

    // get unique key function
    function unique(data, key) {
        var result = [];
        for(var i = 0; i < data.length; i++) {
            var value = data[i][key];
            if(result.indexOf(value) == -1) {
                result.push(value);
            }
        }
        return result;
    }

    // get number of projects in category.
    function count(data, category) {
        var cnt = 0;
        for(var i =0; i < data.length; i++ ){
            if(data[i]['type'] == category){
                cnt++;
            }
        }
        return cnt;
    }// This function is untested & wont be used until I gain more project types.

});
})(window.angular);