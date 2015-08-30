(function(){
    StartApp.directive('maincontent', function(){
        return{
            restrict : 'AECM',
            templateUrl:'components/center-content/main-content.html',
            scope: {},
            controller : function($scope){
                console.log('controller content');
            }
        }
    })

})();