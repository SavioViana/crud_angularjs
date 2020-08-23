var app = angular.module("app", ['ngRoute']);



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'app/view/clients/list.html',
        controller: 'clientListController',
    })
    .when("/clients", {
        templateUrl: 'app/view/clients/list.html',
        controller: 'clientListController',
    })
    .when("/clients/create", {
        templateUrl: 'app/view/clients/form.html',
        controller: 'clientFormController',
    })
    .when("/clients/edit/:id", {
        templateUrl: 'app/view/clients/form.html',
        controller: 'clientFormController',
        resolve: {
            id: function ($route) {
                return $route.current.params.id;
            }
        }
    })
    .when("/clients/:id", {
        templateUrl: 'app/view/clients/single.html',
        controller: 'clientDetailController',
        resolve: {
            id: function ($route) {
                return $route.current.params.id;
            }
        }
    })
    .otherwise({
        redirectTo: '/'
        });
    
});