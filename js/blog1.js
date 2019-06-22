$(function () {
    let boImg = $('.boImg > li');
    let rightBtn = $('.rightBtn');
    let leftBtn = $('.leftBtn');
    let circles = $('.circle > li');
    console.log(circles);

    let current = 0, next = 0;
    let w = boImg[0].clientWidth;
    console.log(boImg.width());
    console.log(w);
    let flag = true;
    rightBtn.on('click',function () {
        if(!flag){
            return;
        }
        flag = false;
        next++;
        if(next == boImg.length){
            next = 0;
        }
        boImg.eq(next).css({left:2*w});
        // boImg.eq(next).attr('left',w+'px');
        boImg.eq(current).animate({left:-w});
        boImg.eq(next).animate({left:0},function () {
            flag = true;
        })
        circles.eq(current).removeClass('hot').end().eq(next).addClass('hot');
        current = next;
    })

    leftBtn.on('click',function () {
        if(!flag){
            return;
        }
        flag = false;
        next--;
        if(next < 0){
            next = boImg.length-1;
         }
        $(boImg[next]).css({left:- 2*w});
        $('boImg[next]').attr('left',-w + 'px');
        animate(boImg[current],{left:w});
        animate(boImg[next],{left:0},function () {
            flag = true;
        })
        $(circles).eq(current).removeClass('hot').end().eq(next).addClass('hot');
        current = next;
    })

    let left = $('.message > .left');
    console.log(left);
    let t = setInterval(function () {
        rightBtn.trigger('click');
    },2000)
    left.onmouseenter = function () {
        clearInterval(t);
    }
    left.onmouseleave = function () {
        t = setInterval(function () {
            rightBtn.trigger('click');
        },2000);
    }

    $("img.lazy").lazyload({effect: "fadeIn"});
})