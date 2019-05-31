window.onload = function () {
    //个人博客日记标题
    let title = document.getElementsByClassName('leftTitle');
    let titles = title[0].getElementsByTagName('li');
    console.log(titles);
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
    let rightBtn = document.querySelector('.rightBtn');
    let boImg = document.querySelectorAll('.boImg > li');
    rightBtn.onclick = function () {
        index++;
        if(index == boImg.length){
            index = 0;
        }
        boImg.forEach(function (elem) {
            // console.log(elem);
            elem.style.zIndex = 1;
        })
        Array.prototype.forEach.call(circles,function (elem) {
            elem.classList.remove('hot');
        })
        circles[index].classList.add('hot');
        boImg[index].style.zIndex = 999;
    }

    let leftBtn = document.querySelector('.leftBtn');
    leftBtn.onclick = function () {
        index--;
        if(index < 0){
            index = boImg.length-1;
        }
        boImg.forEach(function (elem) {
            elem.style.zIndex = 1;
        })
        Array.prototype.forEach.call(circles,function (elem) {
            elem.classList.remove('hot');
        })
        circles[index].classList.add('hot');
        boImg[index].style.zIndex = 1000;
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
    
//    点击轮播点更换图片
    for(let i = 0;i<circles.length;i++){
        circles[i].index = i;
        circles[i].onclick = function () {
            index = this.index;
            Array.prototype.forEach.call(circles,function (elem) {
                elem.classList.remove('hot');
            })
            boImg.forEach(function (elem) {
                // console.log(elem);
                elem.style.zIndex = 1;
            })
            this.classList.add('hot');
            boImg[this.index].style.zIndex = 999;
        }
    }


    
}