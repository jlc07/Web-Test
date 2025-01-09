//OPEN VIDEO
const showCommercialBtn = document.querySelector("#show-commercial-btn");
const commercial = document.querySelector("#commercial");
showCommercialBtn.addEventListener("click", () => {
    commercial.style.display = "grid";
});

//CLOSE VIDEO
document.body.addEventListener("click", (e) => {
    if (e.target.id === "commercial") {
        commercial.style.display = "none";
    }
});

//OPEN AND CLOSE NAV MENU FOR TABLETS
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

//OPEN SIDEBAR
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

//CLOSE SIDEBAR
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});

//CHANGE ACTIVE CLASS TO CLICKED NAV ITEM
const navItems = document.querySelectorAll('nav ul li');

//REMOVE ACTIVE CLASS FROM OTHER ITEMS
const removeActiveClass = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

//ADD ACTIVE CLASS TO CLICKED NAV ITEM
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
    })
})

//SHOW/HIDE FAQS
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //CHANGE ICON
        const icon = faq.querySelector('.icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})

//CHANGE NAVBAR STYLE ON CLOSE
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.
        scrollY > 0)
})
