let openSearch = document.querySelector('.search-btn')
let searchForm = document.querySelector('.search_form')

openSearch.onclick = () => {
    searchForm.classList.toggle('__active');
};

document.querySelector('.search-btn-close').onclick = () => {
    document.querySelector('.search-inp').value = '';
};


////////////////////////////////////////////////////////////

let headerBurger = document.querySelector('.header-burger');
let burgerMenu = document.querySelector('.nav_burger');

headerBurger.onclick = () => {
    burgerMenu.classList.toggle('__active');
    headerBurger.classList.toggle('__active');
    document.querySelector('.header').classList.toggle('__active');
};

////////////////////////////////////////////////////////////

let manBtnOpen = document.querySelector('#open-man-list');
let womanBtnOpen = document.querySelector('#open-woman-list');

manBtnOpen.onclick = () => {
    document.querySelector('#man-list').classList.toggle('__active');
    document.querySelector('#woman-list').classList.toggle('__hidden');
    manBtnOpen.classList.toggle('__active');
    womanBtnOpen.classList.remove('__active');
}



let clotheMoreMan = document.querySelector('.clothes-more-man');
let openClothesMan = document.querySelector('#clothes-man');
let activePlusMan = document.querySelector('#active-plus-man');

openClothesMan.onclick = () => {
    clotheMoreMan.classList.toggle('__active');
    activePlusMan.classList.toggle('__active');
};

let shoesMoreMan = document.querySelector('.shoes-more-man');
let openShoesMan = document.querySelector('#shoes-man');
let plusShoesMan = document.querySelector('#plus-shoes-man');


openShoesMan.onclick = () => {
    shoesMoreMan.classList.toggle('__active');
    plusShoesMan.classList.toggle('__active');
};

let bagMoreMan = document.querySelector('.bag-more-man');
let openBagMan = document.querySelector('#bag-man');
let plusBagMan = document.querySelector('#plus-bag-man');

openBagMan.onclick = () => {
    bagMoreMan.classList.toggle('__active');
    plusBagMan.classList.toggle('__active');
};

let AccessoriesMoreMan = document.querySelector('.accessories-more-man');
let openAccessoriesMan = document.querySelector('#accessories-man');
let plusAccessoriesMan = document.querySelector('#plus-accessories-man');

openAccessoriesMan.onclick = () => {
    AccessoriesMoreMan.classList.toggle('__active');
    plusAccessoriesMan.classList.toggle('__active');
};

let underWearMoreMan = document.querySelector('.under-wear-more-man');
let openUnderWearMan = document.querySelector('#under-wear-man');
let plusUnderWearMan = document.querySelector('#plus-under-wear-man');

openUnderWearMan.onclick = () => {
    underWearMoreMan.classList.toggle('__active');
    plusUnderWearMan.classList.toggle('__active');
};

////////////////////////////////////////////////////////////////

let clotheMore = document.querySelector('.clothes-more');
let openClothes = document.querySelector('#clothes');
let activePlus = document.querySelector('#active-plus');

openClothes.onclick = () => {
    clotheMore.classList.toggle('__active');
    activePlus.classList.toggle('__active');
};

let shoesMore = document.querySelector('.shoes-more');
let openShoes = document.querySelector('#shoes');
let plusShoes = document.querySelector('#plus-shoes');


openShoes.onclick = () => {
    shoesMore.classList.toggle('__active');
    plusShoes.classList.toggle('__active');
};

let bagMore = document.querySelector('.bag-more');
let openBag = document.querySelector('#bag');
let plusBag = document.querySelector('#plus-bag');

openBag.onclick = () => {
    bagMore.classList.toggle('__active');
    plusBag.classList.toggle('__active');
};

let AccessoriesMore = document.querySelector('.accessories-more');
let openAccessories = document.querySelector('#accessories');
let plusAccessories = document.querySelector('#plus-accessories');

openAccessories.onclick = () => {
    AccessoriesMore.classList.toggle('__active');
    plusAccessories.classList.toggle('__active');
};

let underWearMore = document.querySelector('.under-wear-more');
let openUnderWear = document.querySelector('#under-wear');
let plusUnderWear = document.querySelector('#plus-under-wear');

openUnderWear.onclick = () => {
    underWearMore.classList.toggle('__active');
    plusUnderWear.classList.toggle('__active');
};



////////////////////////////////////////////////////////////



let ruLenguage = document.querySelector('#ru');
let uaLenguage = document.querySelector('#ua');
let enLenguage = document.querySelector('#en');

ruLenguage.onclick = () => {
    ruLenguage.classList.toggle('__active');
    uaLenguage.classList.remove('__active');
    enLenguage.classList.remove('__active');
};

uaLenguage.onclick = () => {
    uaLenguage.classList.toggle('__active');
    ruLenguage.classList.remove('__active');
    enLenguage.classList.remove('__active');
};

enLenguage.onclick = () => {
    enLenguage.classList.toggle('__active');
    ruLenguage.classList.remove('__active');
    uaLenguage.classList.remove('__active');
};

////////////////////////////////////////////////
// let ruLang = document.querySelectorAll('.lang-ru');
// let uaLang = document.querySelectorAll('.lang-ua');
// let enLang = document.querySelectorAll('.lang-en');

// // if (ruLenguage.classList.contains('__active')) {
// //     uaLang.classList.toggle('__hidden');
// //     enLang.classList.toggle('__hidden');
// // }

// window.onload = () => {
//     for (let i = 0; i <= uaLang.length; i++) {
//         if (ruLenguage.classList.contains('__active')) {
//             uaLang.classList.toggle('__hidden');
//         }
//     }
// };

//////////////////////////////////////////////////////////


let womanBtn = document.querySelector('.woman');
let womanMore = document.querySelector('.more-woman-info');

womanBtn.onclick = () => {
    womanMore.classList.toggle('__active');
    womanBtn.classList.toggle('__active');
}


//////////////////////////////////////////////////////////

let manBtn = document.querySelector('.man');
let manMore = document.querySelector('.more-man-info');

manBtn.onclick = () => {
    manMore.classList.toggle('__active');
    manBtn.classList.toggle('__active');
}


//////////////////////////////////////////////////////////


new Swiper('.swiper-main', {
    pagination: {
        el: '.swiper-pagination',
        paginationClicable: true,

    },
    autoplay: {
        delay: 5000,
        // disableOnInteraction: false,
    },


});

///////////////////////////////////////////////////////////////////

new Swiper('.box-3-swiper', {
    // Optional parameters


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

    slidesPerView: 4,
    // spaceBetween: 20,
    slidesPerGroup: 4,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }

    }
});


/////////////////////////////////////////////////////////////////////


let ruLenguageMob = document.querySelector('#ru-mob');
let uaLenguageMob = document.querySelector('#ua-mob');

ruLenguageMob.onclick = () => {
    ruLenguageMob.classList.toggle('__active');
    uaLenguageMob.classList.remove('__active');
};

uaLenguageMob.onclick = () => {
    uaLenguageMob.classList.toggle('__active');
    ruLenguageMob.classList.remove('__active');
};

///////////////////////////////////////////////////////////////////

let inpIvent = document.querySelector('#inp-ivent');
let btnInp = document.querySelector('#btn-inp');

btnInp.onclick = () => {
    inpIvent.value = '';
}
//////////////////////////////////////////////////////////////////

const MissClose = document.querySelector('.body-window');
let windowSale = document.querySelector('.window-sale');
let btnCloseSale = document.querySelector('#btn-send-sale');
let closeSaleCross = document.querySelector('#close-window-sale');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(MissClose);

    if (!withinBoundaries) {
        windowSale.style.display = 'none'; // скрываем элемент т к клик был за его пределами
    };
});

btnCloseSale.onclick = () => {
    windowSale.classList.toggle('__active');
};

closeSaleCross.onclick = () => {
    windowSale.classList.toggle('__active');
}
//////////////////////////////////////////////////////////////////
