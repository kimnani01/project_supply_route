//작은이미지 클릭 시 큰 이미지 바꾸기
const small_img = document.querySelectorAll('.small_img a')
const big_img = document.querySelector('.big_img img')
for(let i of small_img){
    i.addEventListener('mouseover', (e)=>{
        e.preventDefault()
        console.log(i)
        big_img.src = i.children[0].src
    })
}

// 상품정보 더보기
const more_btn = document.querySelector('.more')
const detail_photo = document.querySelector('.detail .photo')
const gradient = document.querySelector('.gradient')
let overflow = false;
more_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(overflow == false){
        gradient.style.display = 'none'
        detail_photo.style.height = 'max-content'
        detail_photo.style.overflow = 'visible'
        more_btn.firstElementChild.style.transform = 'rotate(-180deg)'
        more_btn.lastElementChild.innerHTML = '상품정보 접기'
    }else{
        gradient.style.display = 'block'
        detail_photo.style.height = '3000px'
        detail_photo.style.overflow = 'hidden'
        more_btn.firstElementChild.style.transform = 'rotate(0deg)'
        more_btn.lastElementChild.innerHTML = '상품정보 더보기'
    }
    overflow = !overflow
})

// 탭버튼 클릭 활성화
const tab_btn = document.querySelectorAll('.tab li a')
const tab_pst = document.querySelectorAll('.tab_pst')
// for(let i of tab_btn){
//     i.addEventListener('click',()=>{
//         window.scrollTo(0, i.getBoundingClientRect().top + 207)
//         for(let j of tab_btn){
//             j.parentElement.classList.remove('active')
//             j.parentElement.style.border = '1px solid #bbb'
//             j.parentElement.style.borderBottom = '2px solid #000'
//         }
//         i.parentElement.style.border = '2px solid #000'
//         i.parentElement.style.borderBottom = '#fff'
//         // console.log(i.parentElement.previousElementSibling)
//         // i.parentElement.previousElementSibling.style.borderRight = '0'
//     })
// }
const review = document.querySelector('.review')
window.addEventListener('scroll',()=>{
    console.log(review.getBoundingClientRect().top)
    console.log(window.pageYOffset)
})
tab_btn.forEach((target, index)=>{
    console.log(target, index)
    target.addEventListener('click',(e)=>{
        console.log(target)
        // e.preventDefault()
        console.log(tab_pst[index])
        console.log(tab_pst[index].getBoundingClientRect())
        console.log(tab_pst[index].getBoundingClientRect().top + 237)
        scrollTo(0, tab_pst[index].getBoundingClientRect().top + 237)
        // for(let i of tab_btn){
        //     i.parentElement.classList.remove('active')
        //     i.parentElement.style.border = '1px solid #bbb'
        //     i.parentElement.style.borderBottom = '2px solid #000'
        // }
        // target.parentElement.style.border = '2px solid #000'
        // target.parentElement.style.borderBottom = '#fff'
        // console.log(i.parentElement.previousElementSibling)
        // target.parentElement.previousElementSibling.style.borderRight = '0'
    })
})
// 탭버튼 위치 활성화
// i.getBoundingClientRect().top + 148+59+30=237
window.addEventListener('scroll',()=>{
    // 1. window scroll 인식
    // console.log(window.pageYOffset)
    // 2. 요소 하나 기준
    // console.log(tab_pst[0].getBoundingClientRect().top)
    // for each
    tab_pst.forEach((target, index)=>{
        // 3. 1,2 비교 if
        if(target.getBoundingClientRect().top < 270){
            // console.log('같다')
            //tab_btn[0].parentElement.style.border = '2px solid #000'
            //tab_btn[0].parentElement.style.borderBottom = '#fff'
            for(let i of tab_btn){
                i.parentElement.classList.remove('active')
                i.parentElement.style.border = '1px solid #bbb'
                i.parentElement.style.borderBottom = '2px solid #000'
            }
            tab_btn[index].parentElement.style.border = '2px solid #000'
            tab_btn[index].parentElement.style.borderBottom = '#fff'
        }
    })
})


// 옵션버튼
const option_btn = document.querySelector('.option a')
const option_size = document.querySelector('.option .size')
// 옵션 클릭시
let drop_option = false
option_btn.addEventListener('click', ()=>{
    if(drop_option == false){
        option_size.style.display = 'block'
    }else{
        option_size.style.display = 'none'
    }
    drop_option = !drop_option
})
// 옵션의 사이즈에 마우스 올렸을 때
for(let i of option_size.children){
    console.log(i)
    i.addEventListener('mouseover',()=>{
        console.log(i)
        for(let j of option_size.children){
            j.classList.remove('active')
        }
        i.classList.add('active')
    })
}

//like 버튼
const like_btn = document.querySelector('.like')
let like = false
like_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(like == false){
        like_btn.firstElementChild.src = "./images/detail/heart_active_btn.png"
        like_btn.lastElementChild.innerHTML = 4
    }else{
        like_btn.firstElementChild.src = "./images/detail/heart_btn.png"
        like_btn.lastElementChild.innerHTML = 3
    }
    like = !like
})

//사이즈 가이드
const size_guide_btn = document.querySelector('.size_guide_btn')
let drop_size = false
size_guide_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(drop_size == false){
        size_guide_btn.nextElementSibling.style.display = 'block'
        size_guide_btn.lastElementChild.src = "./images/detail/minus_btn.png"
    }else{
        size_guide_btn.nextElementSibling.style.display = 'none'
        size_guide_btn.lastElementChild.src = "./images/detail/plus_btn.png"
    }
    drop_size = !drop_size
})

//간략정보
const brief_btn = document.querySelector('.brief_btn')
let drop_brief = false
brief_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(drop_brief == false){
        brief_btn.nextElementSibling.style.display = 'block'
        brief_btn.lastElementChild.src = "./images/detail/minus_btn.png"
    }else{
        brief_btn.nextElementSibling.style.display = 'none'
        brief_btn.lastElementChild.src = "./images/detail/plus_btn.png"
    }
    drop_brief = !drop_brief
})