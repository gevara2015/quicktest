var StartApp = angular.module('StartApp', ['ngResource']);


//Factory
StartApp.factory('Phone', [
    '$resource', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            phoneId: 'phones',
            format: 'json',
            apiKey: 'someKeyThis'
        });
    }]);

StartApp.controller('PhoneListCtrl', [
    '$scope', '$http', '$location', 'Phone',
    function($scope, $http, $location, Phone){
        $scope.phones = Phone.query();
    }
]);