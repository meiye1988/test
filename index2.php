<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <title>HTML5+CSS3</title>
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <script src="js/jquery.min.js"> </script>
</head>
<body>

<header id="header">
    <div class="container">
        <div class="row">
        <div class="col-md-3">
            <div class="homeForm"> ZUI v1.3.2<span class="icon icon-home"></span></div>
           </div>
        <div class="col-md-6">
            <div id="searchForm" style="display: none">
                <span class="icon icon-search"></span>
                <input type="text" name="search"  class="form-control" id="searchInput" placeholder="按钮...." />
            </div>

        </div>
        <div class="col-md-3">
            <div class="nav-right" >
                <ul>
                    <li><a title="立即下载" href="#" target="_blank"><span class="icon icon-download-alt"></span></a></li>
                    <li><a title="论坛" href="http://forum.zui.sexy/forum/" target="_blank"><span class="icon icon-comments-alt"></span></a></li>
                    <li><a title="在Github上Star项目" href="https://github.com/easysoft/zui" target="_blank"><span class="icon icon-github"></span></a></li>
                </ul>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12 nav-heading2" style="text-align: center">
            <p style="font-size:4em;">ZUI</p>
            <p style="opacity:0.5;">一个开源前端实践方案，帮助你快速构现代跨屏应用。</p>
            <p class="download">立即下载</p>
            <p style="font-size:0.8em;">最新版本 v1.3.1   下载源码</p>
            <p>QQ群：384135104   论坛</p>
            <p style="display: inline-block;width:80%;">

            <span class="icon icon-search" style="position:absolute;margin-left:-450px;margin-top:5px;"></span>
        <input type="text" name="search"  class="form-control" id="searchInput" placeholder="按钮...." />
                            </p>
        </div>
    </div>
    </div>
        </div>
</header>
<div class="container-fluid" id="clear"></div>
<article id="article">
    <div class="container">
        <div class="row">
            <?php
            $mainAry = array(
                "基础-basic"=>array(
                    "说明"=>array("与你的关系","使用说明"),
                    "约定"=>array("Ul元素","通用状态","界面元素"),
                    "文件目录"=>array("预编译","源码内容"),
                ),
                "控件-control"=>array(
                    "图标"=>array("搜索图标","使用字体","如何使用","使用图标"),
                    "按钮"=>array("类型","大小","颜色"),
                    "进度条"=>array("变化","类型"),
                ),
                "组件-group"=>array(
                    "消息框"=>array("不同件消息","开启"),
                    "代码"=>array("内联","外联","高亮"),
                    "输入组"=>array("类型"),
                ),
                "JS插件-js"=>array(
                    "存储"=>array("本地","外地"),
                    "函数"=>array("内联","外联","高亮"),
                    "类型"=>array("类型"),
                ),
                "视图-view"=>array(
                    "数据"=>array("本地","外地"),
                    "视觉"=>array("内联","外联","高亮"),
                    "设计"=>array("类型"),
                ),

            );
            ?>
            <?php
            foreach($mainAry as $keyname => $basicAry){
                $explodeary = explode("-",$keyname);
            ?>
            <div class="col col-md-d5 col-sm-6">
                <div id="chapter-<?php echo $explodeary[1]?>" class="common <?php echo $explodeary[1]?>">
                    <div class="chapter-heading">
                        <span class="icon chapter-basic"></span>
                        <span class="name"><?php echo $explodeary[0]?></span>
                    </div>

                    <div class="chapter-basic-list">
                        <?php
                        foreach($basicAry as $mainname => $subary){
                        ?>
                        <div class="<?php echo $explodeary[1]?>-intro" isshow="0" ischeck="0">
                            <div class="explain-heading">
                                <span class="icon icon-explain"></span>
                                <span class="name chapter-name" ><a href="javascript:void(0);"><?php echo $mainname;?></a></span>
                            </div>
                            <div class="explain-content" style="display: none">
                                <ul>
                        <?php
                            foreach($subary as $subname){
                                echo "<li>".$subname."</li>";
                            }
                         ?>
                                </ul>
                            </div>
                        </div>
                        <?php
                        }

                        ?>

                    </div>
                </div>
            </div>
            <?php
            }

            ?>




            </div>

        </div>
    </div>
</article>
<script type="text/javascript">
    $(document).ready(function(){
        $(".homeForm").click(function(){
            $("#header").animate({height:"327px"},"fast");
            $(".nav-heading2").css({"display":"block"});
            $("#searchForm").animate({opacity:"toggle"},"fast");
        });
        $(".chapter-name a").hover(function(){
            var getClassName = $(this).parent().parent().parent().attr("class");
            var ary = getClassName.split(" ");
            var classnames = ary[0];
            console.log(classnames);
            $(this).parent().parent().addClass(classnames+"-a-hover");
        },function(){
            var getClassName = $(this).parent().parent().parent().attr("class");
            var ary = getClassName.split(" ");
            var classnames = ary[0];
            $(this).parent().parent().removeClass(classnames+"-a-hover");
        });
        $(".basic-intro,.control-intro,.group-intro,.js-intro,.view-intro").hover(function(){
            var getClassName = $(this).attr("class");
            var ary = getClassName.split(" ");
            var classnames = ary[0];
            var isshow =  $(this).attr("isshow");
//            console.log(isshow);
            if(isshow==0){
                $(this).removeClass(classnames+"-alway");
                $(this).addClass(classnames+"-hover");
                $(this).find(".chapter-name a").addClass(classnames+"-chaptername");
            }
        },function(){
            var getClassName = $(this).attr("class");
            var ary = getClassName.split(" ");
            var classnames = ary[0];
            var isshow =  $(this).attr("isshow");
            if(isshow==0){
                $(this).removeClass(classnames+"-hover");
                $(this).addClass(classnames+"-alway");
                $(this).find(".chapter-name a").removeClass(classnames+"-chaptername");
            }

        });
        $(".basic-intro,.control-intro,.group-intro,.js-intro,.view-intro").click(function(){
//            顶部变化
            if($("#header").height() > 100){
                $("#header").animate({height:"60px"},"fast");
            }

            $(".nav-heading2").css({"display":"none"});
            $("#searchForm").css({"display":"block"});
//            $("#searchForm").animate({opacity:1},"fast");
//           return false;
            var getClassName = $(this).attr("class");
            var ary = getClassName.split(" ");
            var classnames = ary[0];

            $(".common").each(function(i,x){
                var commonclassname = $(this).attr("class");
                console.log(commonclassname);
                var cary = commonclassname.split(" ");
                var cclassnames = cary[1];
                $("."+cclassnames+"-intro").removeClass(cclassnames+"-intro-click");
            });
            $(this).addClass(classnames+"-click");
            var isshow =  $(this).attr("isshow");
            var ischeck =  $(this).attr("ischeck");
            if(isshow==1 && ischeck==1){
                $(this).find(".explain-content").animate({height: 'toggle', opacity: 'toggle'}, "fast");
                $(this).attr("isshow",0);
            }else if(isshow==1 && ischeck==0){
                $("."+classnames).attr("ischeck",0);
                $(this).attr("ischeck",1);
            }else{
                $(this).find(".explain-content").animate({height: 'toggle', opacity: 'toggle'}, "fast");
                $("."+classnames).attr("ischeck",0);
                $(this).attr("ischeck",1);
                $(this).attr("isshow",1);

            }
        });
    });

</script>
</body>
</html>