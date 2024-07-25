// list md pick
const md_pick = new Swiper ('.md_pick', {
    slidesPerView:3,
    spaceBetween: 20,
    autoplay:{delay:3000},
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true,
    }
})
const item_info = document.querySelectorAll('.swiper-slide a')
const hover = document.querySelectorAll('.swiper-slide')
for(let i of hover){
    i.addEventListener('mouseover', ()=>{
        i.children[0].style.display = 'inline-block'
    })
    i.addEventListener('mouseout', ()=>{
        i.children[0].style.display = 'none'
    })
}