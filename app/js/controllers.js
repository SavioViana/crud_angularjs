

app.controller('clientListController', function($scope, $location, clientService) {
    
    $scope.clients = clientService.getAll();

    $scope.deleteClient = function(id) {
        clientService.delete(id)
        $scope.clients = clientService.getAll();
    }

});

app.controller('clientDetailController', function($scope, $location, $route, clientService) {
    
    $scope.client = $scope.client = clientService.getSingle($route.current.params.id)

});

app.controller('clientFormController',  function($scope, $location, $route, clientService) {
    
    if ($route.current.params.id ) {
        $scope.client = clientService.getSingle($route.current.params.id)
        $scope.title = 'Editar Cliente'
        $scope.form = $scope.client
    } else {
        $scope.form = {
            name: '',
            age: null,
            gender: null
        }
        $scope.title = 'Cadastrar Cliente'
    }

    $scope.errors = [];
  
    $scope.onSave = function(id = null) {

        $scope.errors = []
        let isValid = false;
        if ($scope.form.name.length <= 0) {
            isValid = false
            $scope.errors.push('O campo nome é obrigatorio')
        }
        if ($scope.form.age <= 0) {
            isValid = false
            $scope.errors.push('O campo idade é obrigatorio')
        }
        if ($scope.form.gender <= 0) {
            isValid = false
            $scope.errors.push('O campo genero é obrigatorio')
        }
        
        if ($scope.errors.length > 0) return;

        if ($scope.form.id) {
            clientService.update($scope.form.id, $scope.form.name, $scope.form.age, $scope.form.gender ); 
        } else {
            clientService.create($scope.form.name, $scope.form.age, $scope.form.gender ); 
        }

        $location.path('#/');
    };

});





