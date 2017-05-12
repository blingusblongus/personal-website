// Controllers

myApp.controller('homeController', ['$scope', '$resource', function($scope, $resource){
    
    $scope.bling = "bob";
    console.log($scope.bling);
    
    $scope.getCall = $resource("https://script.google.com/macros/s/AKfycbwHgYtQkeRsqOYKcmWXjojmxortf4p7Rmc9a4549IHh/dev", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });
        
    $scope.result = $scope.getCall.get({
            name: "mskfe"
        });
    
    console.log($scope.result);
}]);
