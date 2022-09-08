function theme() {

    const el = document.documentElement;
    const toggleTheme = document.querySelector('.themeBtn');

    toggleTheme.addEventListener("click", () => {
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme', 'dark')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    }
    )

    if (localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'dark')
    }
}

function navigation() {

    const navBtn = document.querySelector(".navBtn")
    const menu = document.querySelector(".burger-menu")
    const header = document.querySelector(".header")
    const main = document.getElementById('mainID')

    navBtn.addEventListener("click", () => {
        
        navBtn.hasAttribute("style") ? navBtn.removeAttribute("style") : navBtn.setAttribute("style", "transform: rotate(180deg)") 
        navBtn.innerText != "≡" ? navBtn.innerText = "≡" : navBtn.innerText = "X"
        menu.hasAttribute("style") ? menu.removeAttribute("style") : menu.setAttribute("style", "right: 0")
        console.log(navBtn.innerText)

    })

    main.addEventListener("click", () => {
        if (menu.hasAttribute("style")) menu.removeAttribute("style");
        if (navBtn.hasAttribute("style")) navBtn.removeAttribute("style");
    })
}

function scroll() {
    let element = document.getElementById("awardsID")

    window.addEventListener("scroll", function() {

        let value = this.window.scrollY;
        let coor = element.getBoundingClientRect();

        if (coor.top < coor.height/1.3) {
            element.style.opacity = 100 + '%';
        }
    })
}

let comments = []

class Comment {

    constructor(name, text, rating) {
        this.name = name, 
        this.text = text, 
        this.rating = rating
    }

    static getAllComments() {
        console.log(comments);
    }

}

function addComment() {

    const commentator = document.getElementById("aimixID");
    comments.push(new Comment(commentator.innerText, 'lorem fjjsd sldgmgs ', 5));
    console.log(comments);
}

let emailAdresses = [];
let email = document.getElementById('emailID');
const subBtn = document.getElementById('subBtnID');


function getEmail() {
    subBtn.addEventListener("click", () => {
        emailAdresses.push(email.value);
        console.log(emailAdresses);
        email.value = '';
    })
}



theme()
navigation()
scroll()
addComment()
getEmail()
