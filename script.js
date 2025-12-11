// 滾動淡入動畫
const items = document.querySelectorAll('.fade-in');

function checkFade(){
    let trigger = window.innerHeight * 0.85;
    items.forEach(item => {
        let top = item.getBoundingClientRect().top;
        if(top < trigger){
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
