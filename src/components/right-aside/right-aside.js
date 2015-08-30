(function(){
    StartApp.directive('rightaside', function(){
        return{
            restrict : 'AECM',
            templateUrl:'components/right-aside/right-aside.html',
            scope: {},
            controller : function($scope){
                console.log('controller leftAside');
            }
        }
    })

})();