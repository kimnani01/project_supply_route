//header category
const category_btn = document.querySelectorAll('.gnb > li > a')
const sub_bg = document.querySelector('li > .bg')
// console.log(category_btn[0])
// console.log(sub_bg)
let openclose = false; //접힘상태 초기
// 점힘(false)*기본 열림(true)
category_btn[0].addEventListener('click', (e)=>{
    e.preventDefault()
    if(openclose == false){
        sub_bg.style.display = 'block'
        // openclose = true;
    }else{
        sub_bg.style.display = 'none'
        // openclose = false;
    }
    openclose = !openclose
})