// Get elements
let form = document.getElementById("banners-form");
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

// Attach event listeners
form.addEventListener("submit", onSubmit, false);
saveBtn.addEventListener("click", saveBanner, false);
clearBtn.addEventListener("click", clearLocalStorage, false);


function createBanner(element_id, redirect_link, banner_img) {
    /*
    * Creating a new banner
    * */
    let newBanner = document.createElement('img');
    newBanner.src = banner_img;
    newBanner.style.height = '320px';
    newBanner.style.width = '320px';

    newBanner.onclick = function () {
        window.open(redirect_link, '_blank')
    }

    document.getElementById(element_id).appendChild(newBanner);
}

function addNewBanner(event) {
    /*
    * Adding a new banner to banner list
    * */
    const element_id = "banners-list"
    let redirect_link = document.getElementById('redirect-lnk').value
    let banner_img = document.getElementById('banner-img').value

    createBanner(element_id, redirect_link, banner_img)
}

function saveBanner() {
    /*
    * Saving banner to local storage
    * */
    let banners_list = document.getElementById('banners-list');
    let banners_data = [];

    if(banners_list) {
        for (let i = 0; i < banners_list.children.length; i++) {
            let banner = {};
            banner.banner_img = banners_list.children[i].src;
            banner.redirect_link = banners_list.children[i].onclick.toString().split('(')[1].split(')')[0];
            banners_data.push(banner);
        }

        localStorage.setItem('banners-data', JSON.stringify(banners_data));
    }
}

function loadBanners() {
    /*
    * Loading banners from local storage(on page load)
    * */
    let banners_data = JSON.parse(localStorage.getItem('banners-data'));

    if (banners_data) {
        banners_data.forEach((banner, index) => {
            createBanner('banners-list', banners_data[index].redirect_link, banners_data[index].banner_img)
        })
    }
}

function clearLocalStorage() {
    /*
    * Clearing local storage
    * */
    localStorage.removeItem('banners-data');
}

function onSubmit(event) {
    /*
    * Preventing default behavior(event) and set a new one
    * */
    event.preventDefault();
    addNewBanner();
}

loadBanners();
