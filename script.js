var app=anjular.module("myModule",[]).contoller("myController",function($scope)
{
$scope.employee[

{name: "Ben", dateOfBirth: new Date("November 23, 1980"),gender: "Male", salary: 55000},
{name: "Sara", dateOfBirth: new Date("May 05, 1970"),gender: "Female", salary: 68000},
{name: "Mark", dateOfBirth: new Date("August 15, 1974"),gender: "Male", salary: 57000},
{name: "Pam", dateOfBirth: new Date("October 27, 1979"),gender: "Female", salary: 53000},
{name: "Todd", dateOfBirth: new Date("December 30, 1983"),gender: "Male", salary: 60000 }
];

$scope.employee=employee;
$scope.sortColumn=name;
$scope.reverseSort=false;

$scope.sortData=function(column){
$scope.reverseSort=($scope.sortColumn==column)?!$scope.reverseSort:false
}

$scope.getSortClass== function (column) {if ($scope.sortColumn == column) {
  return $scope.reverseSort ? 'arrow-down': 'arrow-up';
 }
return '';
}
});
