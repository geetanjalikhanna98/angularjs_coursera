(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunch =" ";
        $scope.message =" ";
        $scope.check = function check_lunch()
        {
            var user_lunch = $scope.lunch;
            var lunch_items = user_lunch.split(',');
            if(user_lunch == ""){
                $scope.message = "Please enter data first."
            }
            else if(lunch_items.length <= 3){
                $scope.message = "Enjoy!";
            }
            else{
                $scope.message = "Too much!";
            }
        }
    }   
})();