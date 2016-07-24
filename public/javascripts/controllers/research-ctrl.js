/**
 * Created by Jan on 1/28/2016.
 */

(function(angular) {
'use strict';

var module = angular.module('appModule', ['vAccordion']);


module.controller('ResearchController', ['$scope', function (scope) {

    /**
     * Research
     */
    scope.panes = [
        {
            id: '#Profile',
            header: 'Profile',
            contents: [
                {
                    name: 'My Profile',
                    link: '#Profile'
                }
            ]
        },
        {
            id: '#CurrentResearch',
            header: 'Current Research',
            contents: [
                {
                    name: 'Title',
                    link: '#Title'
                },
                {
                    name: 'Abstract',
                    link: '#Abstract'
                },
                {
                    name: 'Design Overview',
                    link: '#Design'
                }
            ]
        },
        {
            id: '#FieldOfStudy',
            header: 'Field of Study',
            contents: [
                {
                    name: 'My Field of Study',
                    link: '#FieldOfStudy'
                }
            ]
        },
        {
            id: '#ResearchProgramPlan',
            header: 'Research Program Plan',
            contents: [
                {
                    name: 'My Research: Plan',
                    link: '#ResearchPlan'
                },
                {
                    name: 'My Research: TimePlan',
                    link: '#ResearchTimePlan'
                }
            ]
        }
    ];

    scope.$on('r-accordion:onReady', function () {
        var researchPane = scope.panes[1];
        scope.accordion.expand(researchPane.id);
    });
}]);
})(window.angular);