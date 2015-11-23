<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Response Design</title>
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/response.css" type="text/css" />
    <script src="js/jquery.min.js"> </script>
    <script src="js/bootstrap.min.js"> </script>
</head>
<body style="background-color: #ebebeb">
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="word">为 WEB 艺术家创造的 PHP 框架。</h1>
            </div>
            <div class="col-sm-12">
                <a href="" class="headerbtn">5.1中文文档</a>
                <a href="" class="headerbtn">5.0中文文档</a>
                <a href="" class="headerbtn">4.2中文文档</a>
                <a href="" class="headerbtn">4.1中文文档</a>
                <a href="" class="headerbtn">Larm中文文档</a>
                <a href="" class="headerbtn">问答社区</a>
            </div>
        </div>
    </div>
</header>
<div id="header-nav">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="navbar-header">
                        <span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">展开</span>
                </div>
                <div class="collapse  navbar-collapse" id="main-menu">
                    <ul class="menu">
                        <li class="nav-current" role="presentation"><a href="/">首页</a></li>
                        <li  role="presentation"><a href="http://lumen.golaravel.com" >Lumen</a></li>
                        <li  role="presentation"><a href="http://wenda.golaravel.com" >问答社区</a></li>
                        <li  role="presentation"><a href="/laravel/docs/">中文文档</a></li>
                        <li  role="presentation"><a href="/post/laravel-documents-offline-package/">下载离线文档</a></li>
                        <li  role="presentation"><a href="http://www.laravel.com/api/" >API</a></li>
                        <li  role="presentation"><a href="http://www.golaravel.com/php/" >PHP中文手册</a></li>
                        <li  role="presentation"><a href="http://www.phpcomposer.com" >Composer</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

<section id="main-content">
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <?php
                for($i=1;$i<=5;$i++){
                ?>
                <article class="post">
                    <div class="post-head">
                        <div class="post-title">在 Windows 上快速安装并运行 Laravel 5.x</div>
                        <div class="post-date">作者：王赛 2015-05-16</div>
                    </div>
                    <div class="post-content">
                        安装 PHP 注意一：Laravel 5.0 开始对 PHP 版本的要求是 >=5.4，Laravel 5.1 要求 PHP 版本 >=5.5.9，所以，建议大家尽量安装当前最新版本的 PHP 。当前最新版本是 5.6.x。 注意二：PHP 5.4 是最后一个支持 Windows XP 和
                    </div>
                    <div class="post-permalink">
                        <a href="#" class="btn btn-default">阅读全文</a>
                    </div>
                    <div class="post-foot">
                        Laravel 5.1, Artisan
                    </div>
                </article>
                <?php
                }
                ?>
            </div>
            <aside class="sidebar">
                <div class="col-sm-4">
                    <?php
                    for($i=1;$i<=3;$i++){
                    ?>
                    <div class="liji">
                        <div class="liji-title">
                            <h4>社区</h4>
                        </div>
                        <div class="liji-content">
                            <span>QQ群：462694081</span>
                        </div>
                    </div>
                    <?php
                    }
                    ?>
                </div>

            </aside>

        </div>

    </div>
</section>
<footer class="footer-main">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                123123
            </div>
            <div class="col-sm-4">
                123123
            </div>
            <div class="col-sm-4">
                123123
            </div>
        </div>

    </div>
</footer>
<a href="#" id="back-to-top"><i class="fa fa-angle-up">^</i></a>
<script type="text/javascript">
    $(document).ready(function(){
        $(window).scroll(function(){
            var scollheights = $(window).scrollTop();
            //console.log(scollheights);

//                $("#back-to-top").css({"display":"block"});
            scollheights > 60? $("#back-to-top").fadeIn():$("#back-to-top").fadeOut();

        });


        $('#back-to-top').on('click', function(e){
            $("html,body").animate({scrollTop:0},1000);
            return false;
        });


    });

</script>
</body>
</html>