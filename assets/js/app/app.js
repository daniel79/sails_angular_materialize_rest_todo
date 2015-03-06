$('document').ready(function() {
	$(".dropdown-button").dropdown({
		hover: false
	});
});

angular.module('restToDoApp', [])
	.controller('RestController', ['$scope', '$http', '$log', function($scope, $http, $log) {
		// Helper
		function responseHandler(httpOrSocket, url, response, status) {

		}


		// Echo
		$scope.echoMessage = 'Test 1 2 3';

		$scope.callEcho = function(type, message) {
			if (type === 'http') {
				$http.post('/echo', { message: message})
						 .success(function(data, status, headers, config) {
						 	$scope.alert = {
						 		type: 'HTTP',
						 		status: status,
						 		data: data
						 	};
						 });
			}
		};

		// Errors
		$scope.errorScenarios = [
	    {
	      key:   'positive',
	      title: 'REST is working',
	      url:   '/resterror/isworking',
	      method: 'post'
	    },
	    {
	      key:   'unauthorized',
	      title: '401 : Unauthorized',
	      url:   '/resterror/unauthorized',
	      method: 'post'
	    },
	    {
	      key:   'forbidden',
	      title: '403 : Forbidden',
	      url:   '/resterror/forbidden',
	      method: 'post'
	    },
	    {
	      key:   'not-found',
	      title: '404 : Not Found',
	      url:   '/resterror/not-found',
	      method: 'post'
	    },
	    {
	      key:   'throws',
	      title: '500 : Internal Server Error',
	      url:   '/resterror/throws',
	      method: 'post'
	    }
	  ];

	  $scope.errorAlert = {};

	  $scope.callError = function(type, error) {
	  	if (type === 'http') {
	  		$http[error.method](error.url, {})
	  				.success(function(data, status, headers, config) {
	  					$scope.errorAlert[error.key] = {
	  						type: 'HTTP',
	  						status: status,
	  						data: data
	  					};
	  				})
	  				.error(function(data, status, headers, config) {
	  					$scope.errorAlert[error.key] = {
	  						type: 'HTTP',
	  						status: status,
	  						data: data
	  					};
	  				});
	  	}
	  };
	}]);