/**
 * Created by Administrator on 2015/7/25.
 */
(function(angular) {
    'use strict';
    var myApp = angular.module('controllerExample', []);
    myApp.controller('TestClick',['$scope',function($scope){
        $scope.yourname = 'very';
        $scope.clearinput = function(){
            $scope.yourname="";
        };
    }]);
    myApp.controller('PhoneList',['$scope',function($scope){
        $scope.phones = [
            {"type":"N","descript":"adfasdfalsdjfl","age":1},
            {"type":"S","descript":"adfasdfalsdjfl","age":0},
            {"type":"T","descript":"adfasdfalsdjfl","age":2},
        ];
        $scope.orderProp = 'age';
    }]);
    myApp.directive('ezDuang', function() {
        return {
            //E - 指令可以作为HTML元素使用
            //A - 指令可以作为HTML属性使用
            //C - 指令可以作为CSS类使用
            //M - 指令可以在HTML注释中使用

            restrict: 'E',
            template: '<div>asdfsadf</div>',
            replace: false
        };
    });
    var ezHoverableFactory = function(){
        return {
            restrict: "A",
            link:function(scope,element,attrs){
                element.on("mouseover",function(){
                    element.css({outline:"#ff0000 dotted thick"});
                }).on("mouseout",function(){
                    element.css({outline:"none"});
                });

            }
        }
    }
    myApp.directive('ezHoverable',ezHoverableFactory);
})(window.angular);

//var obj = {
//    a:1,
//    b:function(){
//        console.log(this.a);
//    }
//}
//
//var a = 2;
//var objb = obj.b;
//obj.b();
//objb();
//obj.b.call(window);

function empty(){}
empty.prototype={a:0};
var o=new empty();
o.a=1;
a=2;
with(o)
{
    console.log(a);
    var a=3;
    console.log(a);
    delete o.a;
    console.log(a);
    delete o.a;
    console.log(a);
    delete empty.prototype.a;
    console.log(a);
}

//var a=100;
//var b=true;
//function test(){
//    console.log(a);
//    var a = 200;
//}
//test();


//Object.prototype.test = 'wrong';
//var test = 'right';
//(function f() {
//    alert(test);
//})();
//
//function foo(){
//    foo.abc = function(){alert('def')}
//    this.abc = function(){alert('xyz')}
//    abc = function(){alert('@@@@@')};
//    var abc = function(){alert('$$$$$$')}
//}
//foo.prototype.abc = function(){alert('456');}
//foo.abc = function(){alert('123');}
//var f = new foo();
//f.abc();
//foo.abc();
//abc();
