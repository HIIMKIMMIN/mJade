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

        if(scrollTop >= 50){
            $('header nav').addClass('fixed')
        }else{
            $('header nav').removeClass('fixed')
        }
    });
})
