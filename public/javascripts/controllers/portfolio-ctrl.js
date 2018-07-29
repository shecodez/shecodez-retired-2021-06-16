/**
 * Created by Jan on 9/19/2015.
 */

(function(angular) {
	"use strict";

	var module = angular.module("appModule", ["ui.odometer"]);

	var colors = {};
	colors.WEB_APP = "#ff0099";
	colors.GAME_DEV = "#ffa400";
	colors.MOBILE = "00ffb1";
	colors.DESKTOP = "#ff6600";
	colors.WEBSITE = "#32cd32";

	//angular.module('myApp')
	module.controller("PortfolioController", function($scope, $filter) {
		/**
		 * Portfolio
		 */
		$scope.projects = [
			// Websites
			{
				avocational: true,
				name: "kuruma.io",
				language: "ReactJS/Bootstrap/JS",
				concept: "https://codepen.io/shecodez/full/pZgebb/",
				type: "Web App",
				for: "shecodez",
				description: "A reactjs spa for a car parts export company",
				year: 2018,
				color: colors.WEB_APP
			},
			{
				avocational: false,
				name: "Xylophone",
				language: "ReactJS/SCSS/JS",
				concept: "https://codepen.io/shecodez/full/EpaRXP/",
				type: "Website",
				for: "Free Code Camp Front-end Cert.",
				description: "Build a Drum Machine Challenge",
				year: 2018,
				color: colors.WEBSITE
			},
			{
				avocational: false,
				name: "MDPVer",
				language: "ReactJS/SCSS/JS",
				concept: "https://codepen.io/shecodez/full/NBWOBZ/",
				type: "Website",
				for: "Free Code Camp Front-end Cert.",
				description: "Build a Markdown Previewer Challenge",
				year: 2018,
				color: colors.WEBSITE
			},
			{
				avocational: false,
				name: "StudentManagerApp",
				language: "ReactJS/Firebase",
				concept: "https://student-manager.netlify.com/",
				type: "Web App",
				for: "microNovations LLC",
				description: "A CMS to manage all your student details",
				year: 2018,
				color: "#ff0099"
			},
			{
				avocational: false,
				name: "HoloSpace",
				language: "MERN",
				concept: "https://holospace.herokuapp.com/",
				type: "Web App",
				for: "shecodez.com",
				description: "A VR 3D voice/text/visual chat Web App",
				year: 2018,
				color: "#ff0099"
			},
			{
				avocational: false,
				name: "SheBlogz",
				language: "ReactJS/Python",
				concept: "https://sheblogz.herokuapp.com/",
				type: "Web App",
				for: "shecodez.com",
				description: "A portfolio for my creative content & blog",
				year: 2018,
				color: "#ff0099"
			},
			{
				avocational: true,
				name: "Polycolorbital",
				language: "C#/Unity",
				concept: "https://github.com/shecodez/Polycolorbital",
				type: "Mobile Game",
				for: "shecodez.com",
				description: `A mobile tap game made with Unity`,
				year: 2017,
				color: colors.MOBILE
			},
			{
				avocational: true,
				name: "DNAgons (on hiatus)",
				language: "C#/Unity",
				concept: "https://github.com/shecodez/DNAgonsProto",
				type: "Mobile Game",
				for: "shecodez.com",
				description: `A genetics catch/breed/battle game 3D/AR mobile game`,
				year: 2017,
				color: colors.MOBILE
			},
			{
				avocational: true,
				name: "Portals Pong",
				language: "HTML5/Canvas/JS",
				concept: "https://github.com/shecodez/PortalsPong",
				type: "Game",
				for: "shecodez.com",
				description: "Classic pong with a portals twist",
				year: 2017,
				color: colors.GAME_DEV
			},
			{
				avocational: true,
				name: "AtrackZ",
				language: "Ruby on Rails",
				concept: "https://atrackz.herokuapp.com/",
				type: "Web App",
				for: "shecodez.com",
				description: "An Amazon price tracker RoR App",
				year: 2017,
				color: "#ff0099"
			},
			{
				avocational: true,
				name: "S·HeTravelZ",
				language: "Ruby on Rails",
				concept: "https://shetravelz.herokuapp.com/",
				type: "Web App",
				for: "shecodez.com",
				description: "A Rails applicants CMS demo",
				year: 2017,
				color: "#ff0099"
			},
			{
				avocational: false,
				name: "micronovations.com",
				language: "Jade/CSS/JS",
				concept: "https://www.micronovations.com/",
				type: "Website",
				for: "microNovations LLC",
				description: "Cloud-based IT solutions company website",
				year: 2016,
				color: "#32cd32"
			},
			{
				avocational: false,
				name: "meduscan.com",
				language: "MEAN Stack (JS)",
				concept: "https://github.com/shecodez/MeduSCAN",
				type: "Web App",
				for: "shecodez.com",
				description: "A BCMA training Web Application",
				year: 2016,
				color: "#ff0099"
			},
			// personal website (2015)
			{
				avocational: false,
				name: "shecodez.com (2015)",
				language: "Jade/CSS/JS",
				concept:
					"https://drive.google.com/file/d/0By5CpgoUYXl_LUUxODRNZjJVMU0/view?usp=sharing",
				type: "Website",
				for: "Nicole J. Nobles",
				description: "Personal website, portfolio, and résumé",
				year: 2015,
				color: "#32cd32"
			},
			// personal website (2014)
			{
				avocational: false,
				name: "lyfelink.com (2014)",
				language: "HTML/CSS",
				concept:
					"https://drive.google.com/file/d/0By5CpgoUYXl_akFDMUdZemFnWHc/view?usp=sharing",
				type: "Website",
				for: "Nicole J. Nobles",
				description: "Personal website, portfolio, and résumé",
				year: 2014,
				color: "#32cd32"
			},
			// Desktop Applications
			{
				avocational: false,
				name: "MedSCAN",
				language: "C#",
				concept:
					"https://docs.google.com/document/d/1v365vxj0Dt5xT_1-NKHIoVnMVjOiDyvzlzX1iXo4zrY/edit?usp=sharing",
				repository: "https://github.com/shecodez/MedSCAN2014",
				type: "Desktop Application",
				for: "GC&SU Nursing Dept.",
				description: "BCMA simulation training software",
				year: 2014,
				color: "#ff6600"
			}
		];

		$scope.$watch("search", function() {
			$scope.filtered = $filter("filter")($scope.projects, $scope.search);
		});

		// create a list of unique years.
		$scope.years = unique($scope.projects, "year");

		// create a list of unique categories.
		$scope.categories = unique($scope.projects, "type");

		// get unique key function
		function unique(data, key) {
			var result = [];
			for (var i = 0; i < data.length; i++) {
				var value = data[i][key];
				if (result.indexOf(value) == -1) {
					result.push(value);
				}
			}
			return result;
		}

		// get number of projects in category.
		function count(data, category) {
			var cnt = 0;
			for (var i = 0; i < data.length; i++) {
				if (data[i]["type"] == category) {
					cnt++;
				}
			}
			return cnt;
		} // This function is untested & wont be used until I gain more project types.
	});
})(window.angular);
