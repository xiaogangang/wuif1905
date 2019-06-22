window.addEventListener('load',function () {
//    选择头像
    let thumb = document.querySelectorAll('img[id]');
    let prevThumb = 0;
    for(let i = 0;i<thumb.length;i++){
        thumb[i].onclick = function () {
            thumb[prevThumb].style.opacity = 0.7;
            this.style.opacity = 1;
            prevThumb = i;
        }
    }
//已输入

    let spans = document.querySelector('#count');
    let maxCount = document.querySelector('#maxCount');
    let textarea = document.querySelector('textarea');
    textarea.onkeyup = function () {
        let value = this.value;
        spans.innerText = value.length;
        maxCount.innerText = this.maxLength-value.length;
    }

//    提交
    let message = document.querySelector('.message');
    let submit = document.querySelector('input[type=submit]');
    let userName = document.querySelector('input[name=userName]');
    let form = document.forms.myForm;
    submit.onclick = function (e) {
        e.preventDefault();
        let imgs = thumb[prevThumb].src;
        let name = userName.value;
        let text = textarea.value;
        let time = new Date().toISOString();
        let html = `
        <li>
            <div class="message">
                <img src="${imgs}" alt="">
                <div class="content">
                    <p>${name}</p>
                    <span>${time}</span>
                    <p>${text}</p>
                </div>
            </div>
            <div class="huifu">
                <p><span>站长回复：</span>谢谢</p>
            </div>
        </li>
        `;
        message.innerHTML = html + message.innerHTML;
        form.reset();
        init();
    }
    function init() {
        thumb[prevThumb].style.opacity = 0.7;
        spans.innerText = 0;
        maxCount.innerText = textarea.maxLength;
    }
})