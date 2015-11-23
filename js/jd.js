/**
 * Created by Administrator on 2015/7/30.
 */


$(document).ready(function(){
    //图片轮播
    $('.ck-slide').ckSlide({
        autoPlay: true
    });
    //显示左边导航的小分类
    var subclassintval;//用于定时器判断是否隐藏小分类
    $(".class").on("mouseover",function(){
        //return false;
        clearTimeout(subclassintval);
        var cid = $(this).attr("cid");
        var subclassmain = $(".subclassmain");
        subclassmain.removeClass("showhoversol");
        subclassmain.removeClass("showhoverfix");
        subclassmain.addClass("subclasshide");
        //console.log(offsetary.top);
        //console.log($(window).scrollTop());
        var scroH = $(window).scrollTop();
        $(".class").removeClass("classhover");
        $(".class").removeClass("classlasthover");
        $(this).addClass("classhover");
        if($(this).index()==14){
            $(this).addClass("classlasthover");
        }
        var offsetary = $(".allclass2").offset();
        var classwidth = $(this).width();
        $(".cat"+cid).removeClass("subclasshide");
        $(".cat"+cid).addClass("showhoversol");
        if(scroH > offsetary.top){
            //$(".cat"+cid).addClass("showhoverfix");
            $(".cat"+cid).css({"top":parseInt(scroH)+"px","left":parseInt(offsetary.left+classwidth)+"px"});
        }else{
            $(".cat"+cid).css({"top":offsetary.top+"px","left":parseInt(offsetary.left+classwidth)+"px"});
        }
        return false;
    }).on("mouseleave",function(){

        //$(".cat1").on("mouseover",function(){
        //    console.log("123");
        //});
        subclassintval = setTimeout("clearsubclass()","200");
        return false;
      //  console.log("12345");
       // clearTimeout(subclassintval);
        //clearTimeout(interval);
        //var subclassmain = $(".subclassmain");
        //subclassmain.removeClass("showhoversol");
        //subclassmain.removeClass("showhoverfix");
        //$(".class").removeClass("classhover");
        //subclassmain.addClass("subclasshide");
    });
    $(".subclassmain").on("mouseover",function(){
       console.log("123");
       clearTimeout(subclassintval);
        return false;

    });
    $(".subclassmain").on("mouseleave",function(){
        clearTimeout(subclassintval);
        clearsubclass();
        return false;
    });
    //选项卡
    $(".oneF_tabs ul li").on("mouseover",function(){
        var dateindex = $(this).attr("data-index");
        $(this).addClass("thistab").siblings().removeClass("thistab");
        $(".oneF_content").find("#oneF_ul_"+dateindex).show().siblings("ul").hide();


    });
    //左边小导航
    $(document).scroll(function(){
        var scroH = $(window).scrollTop();


        var offsetary_1F = $(".F1").offset();
        if(parseInt(scroH+200)>=offsetary_1F.top){
            $(".leftnavrecort").html("1");
            left_nav_show(0);
        }else{
            $(".left_nav").css({"display":"none"});
        }
        var offsetary_2F = $(".F2").offset();
        if(parseInt(scroH+200)>=offsetary_2F.top){
            $(".leftnavrecort").html("2");
            left_nav_show(1);

        }
        var offsetary_3F = $(".F3").offset();
        if(parseInt(scroH+200)>=offsetary_3F.top){
            $(".leftnavrecort").html("3");
            left_nav_show(2);

        }
        var offsetary_4F = $(".F4").offset();
        if(parseInt(scroH+200)>=offsetary_4F.top){
            $(".leftnavrecort").html("4");
            left_nav_show(3);

        }
    });
    $(".left_nav ul li").on("mouseover",function(){
        var dataindex = $(this).index();
        var leftrecort = $(".leftnavrecort").html();
        var curentIndex = parseInt(leftrecort-1);
       // console.log("1");
        $(".left_nav ul li").each(function(k,e){

            if(dataindex==k){
                $(this).css({"background":"#B61D1D"});
                $(this).find("span:eq(1)").css({"color":"#fff"});
               // console.log("1");
                //return false;
            }else{
                if(curentIndex==k){
                    $(this).css({"background":"#fff"});
                    $(this).find("span:eq(1)").css({"color":"#B61D1D"});
                   // console.log("2");
                }else{
                    $(this).find("span:eq(1)").hide();
                    $(this).find("span:eq(0)").show();
                    $(this).css({"background":"#fff"});
                    $(this).find("span:eq(0)").css({"color":"#000"});
                    $(this).find("span:eq(1)").css({"color":"#B61D1D"});
                   // console.log("4");
                }

            }

        });
        $(this).find("span:eq(0)").hide();
        $(this).find("span:eq(1)").show();

    }).on("mouseleave",function(){
       // console.log("4");
        var leftrecort = $(".leftnavrecort").html();
        var leftIndex = parseInt(leftrecort-1);
        $(".left_nav ul li").each(function(k,e){
            if(leftIndex==k){
                $(this).css({"background":"#fff"});
                $(this).find("span:eq(1)").css({"color":"#B61D1D"});
            }else{
                $(this).find("span:eq(1)").hide();
                $(this).find("span:eq(0)").show();
                $(this).css({"background":"#fff"});
                $(this).find("span:eq(0)").css({"color":"#000"});
            }
        });
    });
    $(".left_nav ul li").on("click",function(){
        var dataindex = $(this).index();
        var offsetary = $(".F"+parseInt(dataindex+1)).offset();
        $("html,body").animate({scrollTop:offsetary.top+"px"},1000);
    });
    //显示城市
    var  cityclassintval;//用于定时器判断是否隐藏小城市
    $(".header_city").on("mouseover",function(){
        //$(this).css({"border":"1px solid red"});
        $(this).addClass("citynavhover");
        var offsetary = $(this).offset();
        var classwidth = offsetary.left;
        var classheight = $(this).height();
        console.log(classwidth);
        $(".city_class").addClass("cityclasshover");
        $(".city_class").css({"top":parseInt(classheight+13)+"px","left":parseInt(classwidth)+"px"});
    }).on("mouseleave",function(){

        cityclassintval = setTimeout("clearcityclass()","200");
        return false;
    });
    $(".city_class").on("mouseover",function(){
        clearTimeout(cityclassintval);
        return false;

    });
    $(".city_class").on("mouseleave",function(){
        clearTimeout(cityclassintval);
        clearcityclass();
        return false;
    });
});
function clearsubclass(){
    var subclassmain = $(".subclassmain");
    subclassmain.removeClass("showhoversol");
    subclassmain.removeClass("showhoverfix");
    $(".class").removeClass("classhover");
    subclassmain.addClass("subclasshide");
}
function clearcityclass(){
    $(".city_class").removeClass("cityclasshover");
    $(".header_city").removeClass("citynavhover");
}
function left_nav_show(index){
    $(".left_nav").css({"display":"block"});
    $(".left_nav ul li").find("span:eq(1)").hide();
    $(".left_nav ul li").find("span:eq(0)").show();
    $(".left_nav ul li:eq("+index+")").find("span:eq(0)").hide();
    $(".left_nav ul li:eq("+index+")").find("span:eq(1)").show();
    $(".left_nav ul li:eq("+index+")").find("span:eq(1)").css({"color":"#B61D1D"});
    //$(".left_nav ul li").each(function(k,e){
    //    console.log(getBackgroundColor($(this).css("backgroundColor")));
    //    if($(this).css("background")=="#B61D1D"){
    //        console.log("123");
    //        return false;
    //    }
    //});
}
function getBackgroundColor(rgb){
    if(rgb >= 0) return rgb;//如果是一个hex值则直接返回
    else{
        rgb = rgb.match(/^rgb(\d+),\s∗(\d+),\s∗(\d+)$/);

        rgb = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    return rgb;
}
function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
}