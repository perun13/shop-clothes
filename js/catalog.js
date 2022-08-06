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

let clotheMore = document.querySelector('.clothes-more');
let openClothes = document.querySelector('#clothes');
let activePlus = document.querySelector('#active-plus');

openClothes.onclick = () => {
    clotheMore.classList.toggle('__active');
    activePlus.classList.toggle('__active');
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



//////////////////////////////////////////////////////////


let womanBtn = document.querySelector('.woman');
let womanMore = document.querySelector('.more-woman-info');

womanBtn.onclick = () => {
    womanMore.classList.toggle('__active');
    womanBtn.classList.toggle('__active');
}


let manBtn = document.querySelector('.man');
let manMore = document.querySelector('.more-man-info');

manBtn.onclick = () => {
    manMore.classList.toggle('__active');
    manBtn.classList.toggle('__active');
}

//////////////////////////////////////////////////////////



let btnClothes = document.querySelector('#clothes-woman-item');
let clothesMore = document.querySelector('.clothes-more-item');
let plusClothesWoman = document.querySelector('#plus-clothes-woman');

btnClothes.onclick = () => {
    clothesMore.classList.toggle('__active');
    plusClothesWoman.classList.toggle('__active');
}

let plusShoesWoman = document.querySelector('#plus-shoes-woman');
let btnShoes = document.querySelector('#shoes-woman-item');
let shoesMore = document.querySelector('.shoes-more-item');

btnShoes.onclick = () => {
    shoesMore.classList.toggle('__active');
    plusShoesWoman.classList.toggle('__active');
}


let btnBag = document.querySelector('#bag-woman-item');
let bagMore = document.querySelector('.bag-more-item');
let plusBagWoman = document.querySelector('#plus-bag-woman');

btnBag.onclick = () => {
    bagMore.classList.toggle('__active');
    plusBagWoman.classList.toggle('__active');

}

let btnAccesories = document.querySelector('#accesories-woman-item');
let accesoriesMore = document.querySelector('.accesories-more-item');
let plusAccesoriesWoman = document.querySelector('#plus-accesories-woman');

btnAccesories.onclick = () => {
    accesoriesMore.classList.toggle('__active');
    plusAccesoriesWoman.classList.toggle('__active');

}

let btnUnderWear = document.querySelector('#inder-wear-woman-item');
let UnderWearMore = document.querySelector('.inder-wear-more-item');
let plusUnderWearWoman = document.querySelector('#plus-under-wear-woman');

btnUnderWear.onclick = () => {
    UnderWearMore.classList.toggle('__active');
    plusUnderWearWoman.classList.toggle('__active');

}

//////////////////////////////////////////////////////////

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

// ///////////////////////////////////////////////////////////////////

let openMoreSize = document.querySelector('#size-more');
let moreSizeWindow = document.querySelector('.box-filter-size-more');
let claimBtnSize = document.querySelector('#btn-size');

openMoreSize.onclick = () => {
    moreSizeWindow.classList.toggle('__active');
    claimBtnSize.classList.toggle('__active');
};

claimBtnSize.onclick = () => {
    moreSizeWindow.classList.remove('__active');
    claimBtnSize.classList.remove('__active');
};

// let sizeItem = document.querySelectorAll('.size-item');
// console.log(sizeItem);


// for (let i = 0; i <= sizeItem.length; i++) {
//     sizeItem[i].onclick = () => {
//         sizeItem.classList.toggle('__active');
//     }

// }

////////////////////////////////////////////////////////////////

let sliderPrice = document.getElementById("myRange");
let output = document.getElementById("demo-price");
output.innerHTML = sliderPrice.value;

sliderPrice.oninput = function () {
    output.innerHTML = this.value;
};

let openMorePrice = document.querySelector('#price-more');
let morePriceWindow = document.querySelector('.box-filter-price-more');
let claimBtnPrice = document.querySelector('#btn-price');

openMorePrice.onclick = () => {
    morePriceWindow.classList.toggle('__active');
    claimBtnPrice.classList.toggle('__active');
};

claimBtnPrice.onclick = () => {
    morePriceWindow.classList.remove('__active');
    claimBtnPrice.classList.remove('__active');
};

////////////////////////////////////////////////////////////////


let openMoreColor = document.querySelector('#color-more');
let moreColorWindow = document.querySelector(".box-filter-color-more");
let claimBtnColor = document.querySelector('#btn-color');

openMoreColor.onclick = () => {
    moreColorWindow.classList.toggle('__active');
    claimBtnColor.classList.toggle('__active');
};

claimBtnColor.onclick = () => {
    moreColorWindow.classList.remove('__active');
    claimBtnColor.classList.remove('__active');
};


////////////////////////////////////////////////////////////////

let openMoreBrend = document.querySelector('#brend-more');
let moreBrendWindow = document.querySelector(".box-filter-brend-more");
let claimBtnBrend = document.querySelector('#btn-brend');

openMoreBrend.onclick = () => {
    moreBrendWindow.classList.toggle('__active');
    claimBtnBrend.classList.toggle('__active');
};

claimBtnBrend.onclick = () => {
    moreBrendWindow.classList.remove('__active');
    claimBtnBrend.classList.remove('__active');
};

////////////////////////////////////////////////////////////////

let chooseSorting = document.querySelector('.chooes-new');
let chooseMoreFilter = document.querySelector('.more-filter');
let chooesItem = document.querySelector('.chooes-item-up');
let chooesItemCheap = document.querySelector('.chooes-item-cheap');
chooesItemCheap.value = 'От дишевых';

chooesItem.value = 'По возростанию';


chooseSorting.onclick = () => {
    chooseMoreFilter.classList.toggle('__active');
};

chooesItem.onclick = () => {
    chooseMoreFilter.classList.remove('__active');
    chooseSorting.innerHTML = chooesItem.value;
};

chooesItemCheap.onclick = () => {
    chooseMoreFilter.classList.remove('__active');
    chooseSorting.innerHTML = chooesItemCheap.value;
}




/////////////////////////////////////////////////////////////////////





let openManListCatalog = document.querySelector ('#man-filter');
let manList = document.querySelector('#man-list-filter');


openManListCatalog.onclick = () =>{
    manList.classList.toggle('__active');
    openManListCatalog.classList.toggle('__active');
    document.querySelector('#woman-filter').classList.remove('__active');
    document.querySelector('#woman-list-filter').classList.toggle('__hiden');

};

document.querySelector('#woman-filter').onclick = () =>{
    document.querySelector('#woman-filter').classList.toggle('__active');
    manList.classList.remove('__active');
    document.querySelector('#woman-list-filter').classList.remove('__hiden');
    openManListCatalog.classList.remove('__active');

};


let btnClothesMan = document.querySelector('#clothes-man-item');
let clothesMoreMan = document.querySelector('#clothes-more-item-man');
let plusClothesMan = document.querySelector('#plus-clothes-man');

btnClothesMan.onclick = () => {
    clothesMoreMan.classList.toggle('__active');
    plusClothesMan.classList.toggle('__active');
}

let plusShoesManItem = document.querySelector('#plus-shoes-man');
let btnShoesMan = document.querySelector('#shoes-man-item');
let shoesMoreManItem = document.querySelector('#shoes-more-item-man');

btnShoesMan.onclick = () => {
    shoesMoreManItem.classList.toggle('__active');
    plusShoesManItem.classList.toggle('__active');
}


let btnBagMan = document.querySelector('#bag-man-item');
let bagMoreManItem = document.querySelector('#bag-more-item-man');
let plusBagManItem = document.querySelector('#plus-bag-man');

btnBagMan.onclick = () => {
    bagMoreManItem.classList.toggle('__active');
    plusBagManItem.classList.toggle('__active');

}

let btnAccesoriesMan = document.querySelector('#accesories-man-item');
let accesoriesMoreMan = document.querySelector('#accesories-more-item-man');
let plusAccesoriesMan = document.querySelector('#plus-accesories-man');

btnAccesoriesMan.onclick = () => {
    accesoriesMoreMan.classList.toggle('__active');
    plusAccesoriesMan.classList.toggle('__active');

}

let btnUnderWearMan = document.querySelector('#inder-wear-man-item');
let underWearMoreManItem = document.querySelector('#inder-wear-more-item-man');
let plusUnderWearManItem = document.querySelector('#plus-under-wear-man');

btnUnderWearMan.onclick = () => {
    underWearMoreManItem.classList.toggle('__active');
    plusUnderWearManItem.classList.toggle('__active');

};



/////////////////////////////////////////////////////////////////////////

let btnOpenWindowFilter = document.querySelector('.btn-filters');
let btnOpenWindowSort= document.querySelector('.btn-sort');
let filterWindowMobile = document.querySelector('.wrapper-box-menu-mobile');
let closeWindowFiltersMobile = document.querySelector('.back-arrow');
let closeWindowFiltersMobile2 = document.querySelector('.close-window-filter');



btnOpenWindowFilter.onclick = ()=>{
    filterWindowMobile.classList.toggle('__active');
};

closeWindowFiltersMobile.onclick = ()=>{
    filterWindowMobile.classList.remove('__active');
};
closeWindowFiltersMobile2.onclick = ()=>{
    filterWindowMobile.classList.remove('__active');
};


let filterMobileCategories = document.querySelector('#filter-mobile-categories');
let categoriesMobileMore = document.querySelector('#categories-mobile-more');
let plusMobileCategories = document.querySelector('#plus-mobile-categories');

filterMobileCategories.onclick = () =>{
    categoriesMobileMore.classList.toggle('__active');
    plusMobileCategories.classList.toggle('__active');
};


let filterMobileSize = document.querySelector('#filter-mobile-size');
let sizeMobileMore = document.querySelector('#size-mobile-more');
let plusMobileSize = document.querySelector('#plus-mobile-size');

filterMobileSize.onclick = () =>{
    sizeMobileMore.classList.toggle('__active');
    plusMobileSize.classList.toggle('__active');
};


let filterMobilePrice = document.querySelector('#filter-mobile-price');
let priceMobileMore = document.querySelector('#price-mobile-more');
let plusMobilePrice = document.querySelector('#plus-mobile-price');

filterMobilePrice.onclick = () =>{
    priceMobileMore.classList.toggle('__active');
    plusMobilePrice.classList.toggle('__active');
}









/////////////////////////////////////////////////////////////////////

// let itemCatalog = document.querySelectorAll('.item-catalog');
// let followBtn = document.querySelectorAll('.heart-follow');
// let heartChange = document.querySelector('.btn-follow');

// for (let i = 0; i <= itemCatalog.length; i ++) {
//     followBtn[i].onclick = function () {
    
//     heartChange.src = "img_logo/icon/heart_active.svg"
//     }; 

    
// };
// if (heartChange.src = "img_logo/icon/heart_active.svg") {
//     followBtn.onclick = () =>{
//         heartChange.  src="img_logo/icon/heart.svg";
//     };
// } 

////////////////////////////////////////////////////////////////////////

