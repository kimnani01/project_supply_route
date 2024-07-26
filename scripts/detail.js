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
const tab_btn = document.querySelectorAll('.tab li')
const tab_pst = document.querySelectorAll('.tab_pst')
const review = document.querySelector('.review')
// window.addEventListener('scroll',()=>{
//     console.log(review.getBoundingClientRect().top)
//     console.log(window.pageYOffset)
// })
tab_btn.forEach((target, index)=>{
    target.addEventListener('click',()=>{
        console.log(target, index)
        tab_title_fun_reset();
        tab_title_fun_active(target);
        // e.preventDefault()
        /* console.log(tab_pst[index])
        console.log(tab_pst[index].getBoundingClientRect().top + 237)*/
        // console.log(tab_pst[index].getBoundingClientRect().top)
        // scrollTo(0, tab_pst[index].getBoundingClientRect().top + 500) 
    })
})
// 공통 함수 탭 타이블 초기화 
function tab_title_fun_reset(){
    for(let i of tab_btn){
        i.classList.remove('active')
        i.style.border = '1px solid #bbb'
        i.style.borderBottom = '2px solid #000'
    }
}
// 공통 함수 탭 활성화
function tab_title_fun_active(a){
    a.style.border = '2px solid #000'
    a.style.borderBottom = '#fff'
}

// 스크롤 시 해당 위치 탭버튼 활성화
window.addEventListener('scroll',()=>{
    // 1. window scroll 인식
    // console.log(window.pageYOffset)
    // 2. 요소 하나 기준
    // console.log(tab_pst[0].getBoundingClientRect().top)
    // for each
    tab_pst.forEach((target, index)=>{
        // 3. 1,2 비교 if
        if(target.getBoundingClientRect().top < 250){
            tab_title_fun_reset();
            tab_title_fun_active(tab_btn[index]);
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