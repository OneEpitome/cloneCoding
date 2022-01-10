'use strict';

const navigation = document.querySelector('#navBox');
const homeHeight = document.querySelector("#home").getBoundingClientRect();
const homeContainer = document.querySelector("#home .container");
const arrowUp = document.querySelector('#arrowUp');

arrowUp.addEventListener('click', (event) => {
    const home = document.querySelector('#home');
    home.scrollIntoView({behavior : 'smooth'})
})

document.addEventListener('scroll', (event) => {
    let scroll = window.scrollY;
    if (scroll > 10) {
        navigation.style.backgroundColor = `rgba(142,61,235, ${(scroll + 200) / homeHeight.height})`
        arrowUp.style.opacity = 1
        arrowUp.style.pointerEvents = "auto"
    } else {
        navigation.style.backgroundColor = "transparent"
        arrowUp.style.opacity = 0
    }

    if (scroll > (homeHeight.height / 3)) {
        homeContainer.style.opacity = (homeHeight.height / (scroll + homeHeight.height * 2));
    } else {
        homeContainer.style.opacity = 1;
    }
})

const menuBox = document.querySelector('.menuBox');
let selectedNavMenu = document.querySelector('.menuBox__menuItem.active');

menuBox.addEventListener('click', (event) => {
    selectedNavMenu.classList.toggle('active');
    selectedNavMenu = event.target;
    selectedNavMenu.classList.add('active');
    const whereToGo = event.target.dataset.key;
    document.querySelector(whereToGo).scrollIntoView({behavior : 'smooth'});
})

const homeContactBtn = document.querySelector('.homeContactBtn');

homeContactBtn.addEventListener('click', (event) => {
    const whereToGo = event.target.dataset.key;
    document.querySelector(whereToGo).scrollIntoView({behavior : 'smooth'});
})

const categoryButtonBox = document.querySelector('.buttonBox');
const workItemsContainer = document.querySelector('.workItems');
const workItems = document.querySelectorAll('.workItem');
let selectedCategory = document.querySelector('.category.active');

categoryButtonBox.addEventListener('click', (event) => {

    selectedCategory.classList.toggle('active');
    selectedCategory = event.target;
    if (selectedCategory.nodeName === 'SPAN') {
        selectedCategory = selectedCategory.parentNode;
    }
    selectedCategory.classList.add('active');

    const categoryFilter = event.target.dataset.key || event.target.parentNode.dataset.key;

    workItemsContainer.classList.add('clickAnimation');

    setTimeout( () => {
        workItems.forEach( (item) => {
            if (categoryFilter == 'All' || categoryFilter == item.dataset.value) {
                item.classList.remove('invisible');
            } else {
                item.classList.add('invisible');
            }
        })
        workItemsContainer.classList.remove('clickAnimation');
    }, 300)

})

const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', (event) =>  {
    menuBox.classList.toggle('visible');
})
