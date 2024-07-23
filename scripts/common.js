//header category
const category_btn = document.querySelectorAll('.gnb > li > a')
const sub_bg = document.querySelector('li > .bg')
console.log(category_btn[0])
console.log(sub_bg)
category_btn[0].addEventListener('click', (e)=>{
    e.preventDefault()
    if(sub_bg.style.display == 'none'){
        sub_bg.style.display = 'block'
    }else{
        sub_bg.style.display = 'none'
    }
})