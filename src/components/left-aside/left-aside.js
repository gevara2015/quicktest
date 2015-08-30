(function(){
    StartApp.directive('leftaside', function(){
        return{
            restrict : 'AECM',
            templateUrl:'components/left-aside/left-aside.html',
            scope: {},
            controller : function($scope){
                console.log('controller leftAside');
            }
        }
    })

})();