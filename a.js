$(document).ready(function() {
        setTimeout(function() {
            $('#section2').css({ 'display': 'block' })
            $('#section3').css({ 'display': 'block' })
            $('#section4').css({ 'display': 'block' })
            $('#section5').css({ 'display': 'block' })
            $('#section6').css({ 'display': 'block' })

        }, 500)
        var arr_a_flag = true;
        $('.section_container').fullpage({
            sectionsColor: ['white', '#4BBFC3', 'white', '#1a1e23', 'white', 'white'],
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
            menu: '#menu',
            afterLoad: function(anchorLink, index) {
                var mo_length = $('#menu li').eq(6 - index).width();
                var mo_left = $('#menu li').eq(6 - index).offset().left;

                $('.move_line').css({
                    'width': mo_length,
                    'left': mo_left,
                });
                // $('.move_line').animate({

                // 	'left': $('#menu li').eq(5-index).offset().left,
                // 	'width': $('#menu li').eq(5-index).width()
                // });

                if (index == 2) {
                    if (s2_container_flag) {
                        $('.icon_lists').show()
                        $('#s2_content p').eq(0).fadeIn(5000)
                        $('#s2_content p').eq(1).show(10)
                        $('#s2_content p').eq(2).show()
                        $('#s2_content p').eq(3).show()
                        $('#s2_content p').eq(4).show()
                        $('#s2_content p').eq(5).show()
                        $('#s2_content p').eq(6).show()
                        $('.icon_lists').addClass('animated bounceInUp')
                        $('#s2_content p').eq(1).addClass('animated flipInY')
                        $('#s2_content p').eq(2).addClass('animated lightSpeedIn')
                        $('#s2_content p').eq(3).addClass('animated lightSpeedIn')
                        $('#s2_content p').eq(4).addClass('animated slideInDown')
                        $('#s2_content p').eq(5).addClass('animated bounceInUp')
                        $('#s2_content p').eq(6).addClass('animated flipInY')

                    }

                }
                if (index == 1) {

                    $('.btn-default').click()
                    $('.tagline').css('visibility', 'visible');
                }
                if (index == 4) {
                    $('.section4_container').append('<div class="chart" data-percent="90" ><span>90</span><p>页面重构</p></div><div class="chart" data-percent="70" ><span>70</span><p>JavaScript</p></div><div class="chart" data-percent="90" ><span>90</span><p>jQuery</p></div><div class="chart" data-percent="70" ><span>70</span><p>HTML5</p></div><div class="chart" data-percent="70" ><span>70</span><p>CSS3</p></div><div class="chart" data-percent="60" ><span>60</span><p>node.js</p></div>')
                        // $('#myStat').circliful();
                    $('.chart').easyPieChart({
                        easing: 'easeOut',
                        delay: 1000,
                        barColor: '#1d9d74',
                        trackColor: 'rgba(0,0,0,0.2)',
                        scaleColor: false,
                        lineWidth: 5,
                        size: 120,
                        animate: 2000,
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + "%";
                        }
                    });
                    $('.p_container').append('<p class="animated bounceInUp">1.精通HTML+CSS网页布局与样式，快速决浏览器兼容性问题并fix；</p><p class="animated bounceIn">2.熟练掌握HTML5，CSS3，对HTML语义化及CSS3新特性有较好的理解和应用；</p><p class="animated bounceInLeft">3.熟练掌握JavaScript语言核心技术DOM, BOM, Ajax, JSON等；</p><p class="animated bounceInUp">4.熟练掌握jQuery，熟悉常见的jQuery插件</p><p class="animated rotateIn">5.熟悉HTML5本地存储API、Video、Audio和Canvas应用等前端开发新技术。</p><p class="animated zoomIn">6.熟悉媒体式查询，百分比，flex等布局，解决移动端常见的问题，适配手机终端和系统；</p><p class="animated rollIn">7.熟练使用AJAX，JSONP实现数据交互 ；</p><p class="animated zoomInUp">8.熟悉本地开发工具，jsp语法，jade语法，git,svn，grunt与sass</p><p class="animated bounceInRight">9.熟练使用node.js，并用inspector工具进行bug调试并fix</p><p class="animated bounceInLeft">10.热爱前端开发，学习能力好，喜欢沟通，具备良好的团队协作精神</p>')

                }
                if (index == 5) {
                    setTimeout(function() {
                        $('.my_product').hide()
                    }, 5000)
                }
            },
            onLeave: function(anchorLink, index) {

                if (index != 2) {
                    $('.icon_lists').hide();
                    $('#s2_content p').eq(0).css('display', 'none');
                    $('#s2_content p').eq(1).removeClass('animated flipInY').css('display', 'none');
                    $('#s2_content p').eq(2).removeClass('animated lightSpeedIn').css('display', 'none');
                    $('#s2_content p').eq(3).removeClass('animated lightSpeedIn').css('display', 'none');
                    $('#s2_content p').eq(4).removeClass('animated slideInDown').css('display', 'none');
                    $('#s2_content p').eq(5).removeClass('animated bounceInUp').css('display', 'none');
                    $('#s2_content p').eq(6).removeClass('animated flipInY').css('display', 'none');
                    arr_a_flag = true;
                }
                if (index != 1) {
                    $('.tagline').css('visibility', 'hidden');
                    $(".draw-mid").addClass("draw-mid-move").css({
                        display: "block"
                    });
                    $(".draw-up").css({
                        'opacity': 0
                    });
                    $("#draw-up-up").css({
                        'opacity': 0
                    });
                    $(".draw-down").css({
                        'opacity': 1
                    });
                    // $(".draw-down2").css({'opacity':0});
                    $(".draw-list").css({
                        'opacity': 0
                    });
                    $('.draw-list').css({
                        'top': '1.6rem'
                    })
                }
                if (index != 4) {
                    $('.section4_container').html('');
                    $('.p_container').html('')
                }
                if (index != 5) {
                    $('.my_product').show()
                }

            }

        });

        var move_line_length = $('#menu li').eq(5).width();
        var move_line_left = $('#menu li').eq(5).offset().left

        $('.move_line').css({
            'width': move_line_length,
            'left': move_line_left
        })
        $('#menu li').stop().click(function() {
            $('.move_line').animate({
                'left': $(this).offset().left,
                'width': $(this).width()
            });

        })
        $('.section').eq(0).find('p').slice(3, 7).css({
            'text-align': 'center',
            'margin-top': '5px'
        })
        $('#aaa').css('display', 'none');
        var music_flag = true //控制音乐开关的页面显示
        $('#music_icon').click(function() {
                if (music_flag) {
                    $('.music_shadow').show();
                    $('.music_x').show();
                    $(this).css({
                        'animation': '0s'
                    })
                    music_flag = false;
                    $('audio')[0].pause()
                } else {
                    $('.music_shadow').hide();
                    $('.music_x').hide();
                    $(this).css({
                        'animation': 'name3 5s infinite linear'
                    })
                    music_flag = true;
                    $('audio')[0].play()
                }
            })
            //搜索
        setTimeout(function() {
            $('.btn-default').click() //文字显示首页开关
        }, 1000)


        //swiper
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true
        });

        $("#draw-btn,.draw-img").on("click", function() {
            if (arr_a_flag) {

                var arr_a = [5, 50, 100];
                var arr_a_a = arr_a[Math.floor(Math.random() * arr_a.length)]
                $('.draw-list img').attr('src', 'images_1/' + arr_a_a + '.jpg')
                $(".draw-mid").removeClass("draw-mid-move").css({
                    display: "none"
                });
                $(".draw-up").animate({
                    opacity: "1"
                }, 100);
                $("#draw-up-up").animate({
                    opacity: "1",
                    top: "-4.12rem"
                }, 200);

                $(".draw-down").animate({
                    opacity: "0"
                }, 300);
                $(".draw-down2").animate({
                    opacity: "1"
                }, 300);
                $(".draw-list").animate({
                    opacity: "1"
                }, 600).animate({
                    top: "-0.5rem"
                }, 1000);
                arr_a_flag = false
            }
        });
        $(".PathItem").hover(function() {
            $(this).find(".metaicondetail").show();
        }, function() {
            $(this).find(".metaicondetail").hide();
        });
        $('#img').hide()
        $('#qq').click(function() {
            $('#img').show(500)
            $('#img').css({
                'background': 'url(images_1/qq.png) no-repeat',
                'background-size': 'contain'
            })

        })
        $('#wx').click(function() {
            $('#img').show(500)
            $('#img').css({
                'background': 'url(images_1/wx.png) no-repeat',
                'background-size': 'contain'
            })

        })

    }) //last