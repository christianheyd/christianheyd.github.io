	// create the module and name it scotchApp
	var portfolio = angular.module('portfolio', ['ngRoute']);

	// configure our routes
	portfolio.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController',
                activeLink : 'about'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController',
                activeLink : 'about'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController',
                activeLink : 'contact'
			})

            .when('/process', {
                templateUrl: 'pages/process.html',
                controller: 'processController',
                activeLink : 'process'
            })
            
            .when('/resume', {
                templateUrl: 'pages/resume.html',
                controller: 'resumeController',
                activeLink : 'resume'
            });
	});

	// create the controller and inject Angular's $scope
	portfolio.controller('mainController', function($scope, $route, $location, $anchorScroll) {
        $scope.$route = $route;

        $scope.skipLink = function(goTo) {
            $location.hash(goTo);

            $anchorScroll();
        };
	});

	portfolio.controller('aboutController', function($scope) {
		
	});

	portfolio.controller('contactController', function($scope) {
		
	});

    portfolio.controller('processController', function($scope) {
        $scope.images = [
            'assets/img/sketch1.jpg',
            'assets/img/sketch2.jpg',
            'assets/img/myltss.png'
        ];
    });
    
    portfolio.controller('resumeController', function($scope) {

    });