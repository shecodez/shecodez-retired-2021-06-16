/**
 * Created by Jan on 9/19/2015.
 */

'use strict';

var app = angular.module('myApp', ['ui.odometer']);

//angular.module('myApp')
app.controller('PortfolioController', function($scope, $filter) {

    /**
     * Portfolio
     */
    $scope.projects = [
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