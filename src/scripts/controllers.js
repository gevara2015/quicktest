
//Controllers
StartApp.controller('ServicesCtrl', function ServicesCtrl($scope) {
    $scope.services = [
        {name: 'Accontancy', icon: 'icon-1'},
        {name: 'Associations', icon: 'icon-2'},
        {name: 'Buy/Sell Dental Practice', icon: 'icon-3'},
        {name: 'Clinical Waste Collection', icon: 'icon-4'}]
});

StartApp.controller('FirstCtrl', function FirstCtrl($scope, Data) {
    $scope.data = Data;
});


StartApp.controller('SecondCtrl', function SecondCtrl($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function (message) {
        return message.split("").reverse().join("");
    };
});