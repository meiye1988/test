/**
 * Created by Administrator on 2015/8/6.
 */

(function(angular){
    "use strict";
    var myApp = angular.module("controllerApp",[]);
    myApp.controller('classList',['$scope',function($scope){
        $scope.classes = [
                {'index':'1',"name":"家用电器","subclass":""},
                {'index':'2',"name":"手机、数码、京东通信","subclass":""},
                {'index':'3',"name":"电脑、办公","subclass":""},
                {'index':'4',"name":"家居、家具、家装","subclass":""},
                {'index':'5',"name":"男装、女装、内衣、珠宝","subclass":""},
                {'index':'6',"name":"个护化妆","subclass":""},
                {'index':'7',"name":"鞋靴、箱包、钟表、奢侈品","subclass":""},
                {'index':'8',"name":"运动户外","subclass":""},
                {'index':'9',"name":"汽车、汽车用品","subclass":""},
                {'index':'10',"name":"母婴、玩具乐器","subclass":""},
                {'index':'11',"name":"食品、酒类、生鲜、特产","subclass":""},
                {'index':'12',"name":"营养保健","subclass":""},
                {'index':'13',"name":"图书、音像、电子书","subclass":""},
                {'index':'14',"name":"彩票、旅行、充值、票务","subclass":""},
                {'index':'15',"name":"理财、众筹、白条、保险","subclass":""}
        ];
        $scope.subclasses = [
            {'index':'1', "subclass":""},
            {'index':'2',"subclass":""},
            {'index':'3',"subclass":""},
            {'index':'4',"subclass":""},
            {'index':'5',"subclass":""},
            {'index':'6',"subclass":""},
            {'index':'7',"subclass":""},
            {'index':'8',"subclass":""},
            {'index':'9',"subclass":""},
            {'index':'10',"subclass":""},
            {'index':'11',"subclass":""},
            {'index':'12',"subclass":""},
            {'index':'13',"subclass":""},
            {'index':'14',"subclass":""},
            {'index':'15',"subclass":""}
        ];

    }]);
    myApp.directive('expander',function(){
        return {
            restrict :'E',
            replace : true,
            transclude : true,
            scope :{
                title : "@expandertitle"
            },
            template : "<div><span class='class_text'>{{title}}</span><span class='icon icon-class-right'></span></div>",

            link : function(scope, element, attrs) {
                element.on('mousemove',function(){
                    var cid = element.attr("cid");
                    var subclassmain = angular.element(".subclassmain");
                    subclassmain.removeClass("showhoversol");
                    subclassmain.removeClass("showhoverfix");
                    subclassmain.addClass("subclasshide");
                    angular.element(".class").removeClass("classhover");
                    angular.element(".class").removeClass("classlasthover");
                    element.addClass("classhover");
                    if(element.index()==14){
                        element.addClass("classlasthover");
                    }
                    var $ = angular.element;
                    var offsetary = $(".allclass2").offset();
                    var classwidth = element.width();
                    $(".cat"+cid).removeClass("subclasshide");
                    $(".cat"+cid).addClass("showhoversol");
                    var scroH = $(window).scrollTop();
                    if(scroH > offsetary.top){
                        //$(".cat"+cid).addClass("showhoverfix");
                        $(".cat"+cid).css({"top":parseInt(scroH)+"px","left":parseInt(offsetary.left+classwidth)+"px"});
                    }else{
                        $(".cat"+cid).css({"top":offsetary.top+"px","left":parseInt(offsetary.left+classwidth)+"px"});
                    }
                    return false;
                });
            }
        }
    });

})(window.angular);