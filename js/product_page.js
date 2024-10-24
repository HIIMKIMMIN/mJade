$(function(){
    $(document).ready(function() {
        // href 속성이 '#'인 모든 'a' 태그에 대해 클릭 이벤트 추가
        $('a[href="#"]').click(function (event) {
          // 기본 동작인 페이지 이동을 방지
          event.preventDefault();
      })
    });
    let menuOpen = false; // 메뉴 상태 변수
    $('.menu').on('click',function(){  
        menuOpen = !menuOpen; // 메뉴 상태 전환
        $('.sub').toggleClass('active')
        $('nav').toggleClass('active')
        $('.menu i').toggleClass('rotate')
        if($('.sub').hasClass('active')){
            $('nav').removeClass('fixed')
        }
    })
    $('.about .btn_more').on('click',function(){  
        $('.about p').toggleClass('on')
        if($('.about p').hasClass('on')){
            $('.about i').removeClass('fa-minus');
            $('.about i').addClass('fa-plus');
        }else{
            $('.about i').addClass('fa-minus');
            $('.about i').removeClass('fa-plus');
        }
    })
    $('#btn_option_open').click('click', function(){
        $('.detail_area').toggleClass('fixed')
        $(this).css({
            visibility : 'hidden'
        })
        $('#btn_option_close').css({
            visibility : 'visible'
        })
        // if($('.detail_area').hasClass('fixed')){
        //     $(this).css({
        //         visibility : 'hidden'
        //     })
        //     $('#btn_option_close').css({
        //         visibility : 'visible'
        //     })
        // }else{
        //     $(this).css({
        //         visibility : 'visible'
        //     })
        //     $('#btn_option_close').css({
        //         visibility : 'hidden'
        //     })
        // }
    })
    $('#btn_option_close').click('click', function(){
        $('.detail_area').removeClass('fixed')
        $(this).css({
            visibility : 'hidden'
        })
        $('#btn_option_open').css({
            visibility : 'visible'
        })
    })
    //scroll시 header style 변경 
    $(window).scroll(function() {
        if (menuOpen) {
            menuOpen = false; // 스크롤 시 메뉴 상태 초기화
            $('.sub').removeClass('active'); // 클래스 제거
            $('nav').removeClass('active');
            $('.menu i').removeClass('rotate');
        }
        const scrollTop = $(window).scrollTop();
        // const snbTop = $('.snb_list ')
        if(scrollTop >= 1100){
            $('nav').addClass('fixed')
        }else{
            $('nav').removeClass('fixed')
        }
    });
})
