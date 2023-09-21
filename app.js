const openBtn = document.getElementById('icon');
const menu = document.getElementById('mn');
const icon = document.getElementById('icon img');
openBtn.addEventListener('click' , ()=>{
    menu.classList.toggle("active_btn");
    menu.classList.toggle('active');
    if(menu.classList.contains("active_btn")){
        document.getElementById("my_img").src = './images/icon-close.svg';
    }else{
        document.getElementById("my_img").src = './images/icon-hamburger.svg';
    }
})