app = angular.module('jugadorEquipoApp')
    .controller('prac2', function($scope, $http) {
        $http.get("api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });

        $scope.jugadoresTop = function(){
            $http.get("api/jugadors/canastas/"+$scope.canastasTop).then(function (response) {
                $scope.jugadores = response.data;
            });
        }
    });
