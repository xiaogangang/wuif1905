window.onload = function () {
    //个人博客日记标题
    let title = document.getElementsByClassName('leftTitle');
    let titles = title[0].getElementsByTagName('li');
    // console.log(titles);
    for(let i = 0;i<titles.length;i++){
        titles[i].onclick = function(){
            for(let j = 0;j<titles.length;j++){
                titles[j].style.borderBottom = 'none';
            }
            this.style.borderBottom = '2px solid #000000';
        }
    }

    //个人博客日记列表
    let hots = document.querySelectorAll('.hotContent li');
    // console.log(hots);
    hots.forEach(function (elem) {
        // console.log(elem);
        elem.onmouseover = function () {
            for (let i = 0; i < hots.length; i++) {
                hots[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    })

    //轮播点
    let circles = document.querySelectorAll('.circle > li');
    let circleColor = 'orange';
    let disCircleColor = 'white';
    // for(let i = 0;i<circles.length;i++){
    //     circles[i].onmouseenter = function () {
    //         circles[i].style.background = circleColor;
    //     }
    //     circles[i].onmouseleave = function () {
    //         circles[i].style.background = disCircleColor;
    //     }
    // }
//    轮播图
    let index = 0;
    let leftBtn = document.querySelector('.leftBtn');
    let rightBtn = document.querySelector('.rightBtn');
    let boImg = document.querySelectorAll('.boImg > li');
    // rightBtn.onclick = function () {
    //     index++;
    //     if(index == boImg.length){
    //         index = 0;
    //     }
    //     boImg.forEach(function (elem) {
    //         // console.log(elem);
    //          animate(elem,{opacity:0});
    //     })
    //     Array.prototype.forEach.call(circles,function (elem) {
    //         elem.classList.remove('hot');
    //     })
    //     circles[index].classList.add('hot');
    //      animate(boImg[index],{opacity:1});
    // }
    // leftBtn.onclick = function () {
    //     index--;
    //     if(index < 0){
    //         index = boImg.length-1;
    //     }
    //     boImg.forEach(function (elem) {
    //      animate(elem,{opacity:0});
    //     })
    //     Array.prototype.forEach.call(circles,function (elem) {
    //         elem.classList.remove('hot');
    //     })
    //     circles[index].classList.add('hot');
    //      animate(boImg[index],{opacity:1});
    // }

    let current = 0,next = 0;
    let w = boImg[0].offsetWidth;
    let flag = true;
    rightBtn.onclick = function (){
        if(!flag){
            return;
        }
        flag = false;
        next++;
        if(next == boImg.length){
            next = 0;
        }
        boImg[next].style.left = w +'px';
        animate(boImg[current],{left:-w});
        animate(boImg[next],{left:0},function () {
            flag = true;
        });
        circles[current].classList.remove('hot');
        circles[next].classList.add('hot');
        current=next;
    }
    leftBtn.onclick = function (){
        if(!flag){
            return;
        }
        flag = false;
        next--;
        if(next < 0 ){
            next = boImg.length-1;
        }
        boImg[next].style.left = -w +'px';
        animate(boImg[current],{left:w});
        animate(boImg[next],{left:0},function () {
            flag = true;
        });
        circles[current].classList.remove('hot');
        circles[next].classList.add('hot');
        current=next;
    }


//    轮播移入移除
    let left = document.querySelector('.message > .left');
    let t = setInterval(rightBtn.onclick,3000);
    left.onmouseenter = function () {
        clearInterval(t);
    }
    left.onmouseleave = function () {
        t = setInterval(rightBtn.onclick,3000);
    }
    
// //    点击轮播点更换图片
//     for(let i = 0;i<circles.length;i++){
//         circles[i].index = i;
//         circles[i].onclick = function () {
//             index = this.index;
//             Array.prototype.forEach.call(circles,function (elem) {
//                 elem.classList.remove('hot');
//             })
//             boImg.forEach(function (elem) {
//                 // console.log(elem);
//                 elem.style.zIndex = 1;
//             })
//             this.classList.add('hot');
//             boImg[this.index].style.zIndex = 999;
//         }
//     }
    for(let i = 0;i<circles.length;i++){
        circles[i].onclick = function () {
            if(current === i ){
                return;
            }
            next = i;
            if(next > current){
                boImg[next].style.left = w +'px';
                animate(boImg[current],{left:-w});
                animate(boImg[next],{left:0});
            }else {
                boImg[next].style.left = -w +'px';
                animate(boImg[current],{left:w});
                animate(boImg[next],{left:0});
            }

            circles[current].classList.remove('hot');
            circles[next].classList.add('hot');
            current = next;
        }
    }
    //按需加载图片
    // 页面滚动距离+窗口高度 >=元素文档的高度

    let windowH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop);
    })

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for(let i = 0;i<positionArr.length;i++){
            if(scrolltop + windowH >= positionArr[i] + 50){
                if(!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa');
                }
            }
        }
    }
//搜索框
    let sea = document.querySelector('.search');
    let search = document.querySelector('.search-box');
    // sea.onclick = function () {
    //     search.style.display = 'block';
    // }
    sea.addEventListener('click',function () {
        search.classList.add('open');
        sea.addEventListener('click',function () {
            search.classList.remove('open');
        })
    })
}