(function(){
    StartApp.directive('mainheader', function(){
        return{
            restrict : 'AECM',
            templateUrl:'components/header/header.html',
            scope: {},
            controller : function($scope){
                console.log('controller header');
                $scope.stepObj = {
                    "stepNumber" : "1",
                    "stepTitle"  : "Choose the type of bike you are looking for"
                }
            }
        }
    })

})();