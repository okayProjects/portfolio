// code related to menu

const menuItems = [...document.querySelectorAll('nav li a')];

const goToSection = function () {
    const whereToGo = '[data-section=' + this.classList[0] + ']';
    const goToThisSection = document.querySelector(whereToGo).offsetTop;
    $('body, html').animate({
        scrollTop: goToThisSection + 5
    });
}

menuItems.forEach(item => item.addEventListener('click', goToSection));

let scrollPosition = 0;
const navHideShow = () => {

    const position = document.body.getBoundingClientRect().top;
    const positionSectionMyStack = document.querySelector('.my-stack').offsetTop;
    const navHeight = document.querySelector('.hero-nav').offsetHeight;
    const nav = document.querySelector('.hero-nav');

    if (position > scrollPosition) {
        nav.classList.remove('invisible');
        scrollPosition = document.body.getBoundingClientRect().top;
    }
    else {
        scrollPosition = document.body.getBoundingClientRect().top;
        nav.classList.add('invisible');
    }

    if (window.scrollY >= positionSectionMyStack - navHeight) {
        nav.classList.add('color');
    } else {
        nav.classList.remove('color');
    }
}
window.addEventListener('scroll', navHideShow);

const heroButton = document.querySelector('.hero-icons-wrapper');

heroButton.addEventListener('click', () => {
    $('body, html').animate({
        scrollTop: document.querySelector('.my-stack').offsetTop
    });
});



const heroSloganH2 = document.querySelector('.hero-slogan-wrapper h1');
const heroSloganP = document.querySelector('.hero-slogan-wrapper p');

const heroSloganH2StringFontSize = window.getComputedStyle(heroSloganH2).fontSize;
const heroSloganH2NumberFontSize = Number(heroSloganH2StringFontSize.slice(0, 2));
const heroSloganPStringFontSize = window.getComputedStyle(heroSloganP).fontSize;
const heroSloganPNumberFontSize = +(heroSloganPStringFontSize.slice(0, 2));

window.addEventListener('scroll', () => {
    let heroSloganH2FontSize = (heroSloganH2NumberFontSize - window.scrollY * .25).toFixed();
    let heroSloganPFontSize = (heroSloganPNumberFontSize - window.scrollY * .125).toFixed();
    if (heroSloganH2FontSize <= 1) {
        heroSloganH2FontSize = 0;
    }
    if (heroSloganPFontSize <= 1) {
        heroSloganH2FontSize = 0;
    }

    heroSloganH2.style.fontSize = `${heroSloganH2FontSize}px`;
    heroSloganP.style.fontSize = `${heroSloganPFontSize}px`;
})


// code related to my-stack
const techIcons = document.querySelectorAll('.tech-icon-wrapper div:not(.h1-wrapper)');
const myStackAnimations = () => {
    const desktopImg = document.querySelector('.desktop-wrapper .desktop-img-wrapper');
    const desktopImgPosition = document.querySelector('.desktop-wrapper .desktop-img-wrapper').offsetTop;
    const iphone = document.querySelector('.mobile-img-wrapper img');
    const iphoneLeft = document.querySelector('.mobile-img-wrapper .iphone-left');
    const technologiesFromTop = document.querySelector('.technologies').offsetTop;

    if (window.scrollY >= desktopImgPosition / 1.5) {
        desktopImg.classList.add('animated')
    }
    if (window.scrollY >= desktopImgPosition * 1.2) {
        iphone.classList.add('animated');
        iphoneLeft.classList.add('animated');
    }
    if (window.scrollY >= technologiesFromTop * .9) {
        [...techIcons].forEach(tech => tech.classList.add('animated'));
    }
};

window.addEventListener('scroll', myStackAnimations);


let activeTech = 1;
const changeIconBackground = () => {
    if (activeTech >= [...techIcons].length) activeTech = 0;

    const index = [...techIcons].findIndex(tech =>
        tech.classList.contains('bgc-active'));
    [...techIcons][index].classList.remove('bgc-active');
    [...techIcons][activeTech].classList.add('bgc-active');
    activeTech++;
}

setInterval(changeIconBackground, 1500)

// code related to projects
const projects = [
    projectPages = [
        {
            type: 'landing-page',
            name: 'landing-page-1',
            src: './assets/images/lp/lp1.jpg',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/softCompanyPage',
            desc: 'Modern landing page a with burger menu and a flexible header, featuring quite a few animations such as sliders, banners or animated buttons as well as page elements appearing while scrolling. All based on HTML5, CSS3, vanilla JS, ES6 syntax.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-2',
            src: './assets/images/lp/lp2.jpg',
            http: 'https://okayprojects.github.io/holidayAgency/',
            github: 'https://github.com/okayProjects/holidayAgency',
            desc: 'An example of a modern looking landing page powered by jQuerry and focusing on animations and styles imported from the latest version of Bootstrap which I couldn’t help customizing and adjusting to my needs. All based on HTML5, CSS3, Bootstrap and jQuerry.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-3',
            src: './assets/images/lp/lp3.jpg',
            http: 'https://okayprojects.github.io/schoolLandingPage/',
            github: 'https://github.com/okayProjects/schoolLandingPage',
            desc: 'As one of the first example of my developed products it has a great sentimental value. Hopefully it won’t hurt you, although it is not supported by any javaScript code and it only features a piece of 3D animation and a bit of Bootstrap. It feels good to look back and remember all the joy it brings to learn and create. All based on HTML5, CSS3.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-4',
            src: './assets/images/lp/lp4.jpg',
            http: 'https://okayprojects.github.io/portfolio/',
            github: 'https://github.com/okayProjects/portfolio',
            desc: 'As a bit of animations junky, this page has been packed with loads of keyframes, vanilla javaScript code, elements being created on the fly or/and fired on scroll. All based on HTML5, CSS3, vanilla JS, ES6 syntax.'
        }
    ],
    jsGames = [
        {
            type: 'js-games',
            name: 'js-games1',
            src: './assets/images/games/hangman.jpg',
            http: 'https://okayprojects.github.io/hangman-game/',
            github: 'https://github.com/okayProjects/hangman-game',
            desc: 'Choose a category and give it a go. When you’ve enjoyed it, take a few moments to look into its logic. You’ll find functions, methods and loops in gear.'
        },
        {
            type: 'js-games',
            name: 'js-games2',
            src: './assets/images/games/one-armed-bandit.jpg',
            http: 'https://okayprojects.github.io/oneArmedBandit/',
            github: 'https://github.com/okayProjects/oneArmedBandit',
            desc: 'This app makes a good example of the magic of object oriented programming approach (OOP). Feel free to take a quick look at all those classes and constructors.'
        },
        {
            type: 'js-games',
            name: 'js-games3',
            src: './assets/images/games/memory.jpg',
            http: 'https://okayprojects.github.io/memory-game/',
            github: 'https://github.com/okayProjects/memory-game',
            desc: 'Another example of functional programming squeezing  all the best from functions, methods and loops. Don’t setTimeout to have a look, view the code now!'
        },
        {
            type: 'js-games',
            name: 'js-games4',
            src: './assets/images/games/paper-rock.jpg',
            http: 'https://okayprojects.github.io/papierKamienNozyce-game/',
            github: 'https://github.com/okayProjects/papierKamienNozyce-game',
            desc: 'As one of the first examples of my early stage development challenge, this app comes with a great sentimental value. Though not perfect, it reminds that learning is this kind of fun of submerging into the darkness from which finally some light emerges.'
        }
    ],
    reactApps = [
        {
            type: 'react-app',
            name: 'reactApp1',
            src: './assets/images/react/burger.jpg',
            http: 'https://myreactburger-91980.firebaseapp.com/',
            github: 'https://github.com/okayProjects/react-burger-app',
            desc: 'Quite advanced piece of app. Not only was it packed with lots of regular React functions, but also routing, React Thunk and middleware, action creators for asynchronous coding, axios and authorizations. All working well with Firebase. And now comes Redux with its single source of truth.'
        },
        {
            type: 'react-app',
            name: 'reactApp2',
            src: './assets/images/react/okay.jpg',
            http: 'https://okay-school.web.app/',
            github: 'https://github.com/okayProjects/okay',
            desc: 'This React SPA app takes the advantage of routing as well as of Redux, nicely working with Google Firebase. It acts as a language school webpage. However, it wouldn’t take much to transfer it into any business you dream of.'
        },
        {
            type: 'react-app',
            name: 'reactApp3',
            src: './assets/images/react/weather.jpg',
            http: 'https://weatherapp-5af3e.web.app/',
            github: 'https://github.com/okayProjects/react-weatherApp',
            desc: 'Type in the name of your place to check the current weather conditions. This weather forecast app uses remote API to process data returned in JSON format as well as taking advantage of fetch interface.'
        },
        {
            type: 'react-app',
            name: 'reactApp4',
            src: './assets/images/react/todo.jpg',
            http: 'https://okayprojects.github.io/react-to-do-app/',
            github: 'https://github.com/okayProjects/react-to-do-app',
            desc: 'No, no, no! A portfolio which doesn’t comprise ToDoApp? Impossible! So here we go. This app contains a few lines of code dealing with data object, spread operators, arrays. All based on React and ES6 syntax.'
        }
    ]
];

const divsClassProjects = [...document.querySelectorAll('.projects')];

projects.forEach((project, index) => {
    for (let key in project) {
        const singleDiv = document.createElement('div');
        singleDiv.classList.add('project-page');
        singleDiv.classList.add(`${project[key].type}`);
        singleDiv.classList.add(`${project[key].name}`);
        divsClassProjects[index].appendChild(singleDiv);
    };
});

const divsprojectPages = [...document.querySelectorAll('.project-page')];

const allDivs = [];
allDivs.push([...document.querySelectorAll('.landing-page')]);
allDivs.push([...document.querySelectorAll('.js-games')]);
allDivs.push([...document.querySelectorAll('.react-app')]);

const createElements = () => {
    for (key in allDivs) {
        allDivs[key].forEach((div, index) => {

            const img = document.createElement('img');
            img.setAttribute('src', `${projects[key][index].src}`);
            img.setAttribute('alt', `${projects[key][index].name}`)
            div.appendChild(img);


            const a = document.createElement('a');
            a.setAttribute('href', `${projects[key][index].http}`);
            a.setAttribute('target', '_blank');
            a.textContent = 'View this page';

            const a2 = document.createElement('a');
            a2.setAttribute('href', `${projects[key][index].github}`);
            a2.setAttribute('target', '_blank');
            a2.textContent = 'View the code';

            const panel = document.createElement('div');
            panel.classList.add('panel');
            const button = document.createElement('button');
            button.setAttribute('name', `${projects[key][index].name}`);
            button.setAttribute('id', `${index}`);
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-long-arrow-alt-right');
            button.textContent = 'see description';
            button.appendChild(i);
            panel.appendChild(a);
            panel.appendChild(a2);
            panel.appendChild(button);
            div.appendChild(panel)
        });
    }
}
createElements()


const profileA = [...document.querySelectorAll('aside .projects a:first-of-type')];
const profileA2 = [...document.querySelectorAll('aside .projects a:last-of-type')];
const figures = [...document.querySelectorAll('.portfolio figure')];
const myProjects = [...document.querySelectorAll('.portfolio .projects')];

for (let img of profileA) {
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-search');
    img.before(i);
}
for (let img of profileA2) {
    const i = document.createElement('i');
    i.classList.add('fab');
    i.classList.add('fa-github');
    img.before(i);
}

const changeSelectedProjectNav = () => {
    const selectedFigure = figures.findIndex(figure =>
        figure.classList.contains('selected')
    );
    figures[selectedFigure].classList.remove('selected');
}

const changeSelectedProjects = () => {
    const selectedProject = myProjects.findIndex(project =>
        project.classList.contains('selected')
    );
    myProjects[selectedProject].classList.remove('selected');
    const test = figures.findIndex(figure =>
        figure.classList.contains('selected')
    );
    myProjects[test].classList.add('selected');
}

const navClicked = function () {
    changeSelectedProjectNav();
    this.classList.add('selected');
    changeSelectedProjects();
}


figures.forEach(figure => {
    figure.addEventListener('click', navClicked)
})


// code related to display project description

const buttons = [...document.querySelectorAll('.panel button')];
const projectDesc = document.querySelector('.project-desc p');
const divProjectDesc = document.querySelector('.project-desc');
const sectionPortfolio = document.querySelector('section.portfolio').offsetTop;
const sectionPortfolioHeight = document.querySelector('section.portfolio').offsetHeight;

const showProjectDescription = function (e) {
    const projectType = e.target.name;
    const projectIndex = +e.target.id;
    for (project of projects) {
        for (key of project) {
            if (key.name === projectType) {
                projectDesc.classList.remove('show');
                projectDesc.textContent = '';
                setTimeout(() => {
                    projectDesc.classList.add('show');
                }, 500);
                projectDesc.textContent = project[projectIndex].desc;
                divProjectDesc.style.display = 'block';
                $('body, html').animate({
                    scrollTop: sectionPortfolio + sectionPortfolioHeight * .7
                });
            }
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', showProjectDescription);
});


figures.forEach(figure => {
    figure.addEventListener('click', () => {
        divProjectDesc.style.display = 'none';
    })
})


// code related to footer

const footerSlogan = document.querySelector('footer .footer-slogan');
const slogans = ["let's think together", 'available for projects', 'B2B contract preferable'];
let activeSlogan = 0;
let activeLetter = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        footerSlogan.textContent += slogans[activeSlogan][activeLetter];
    }

    activeLetter++;

    if (activeLetter === slogans[activeSlogan].length) {
        activeSlogan++;
        if (activeSlogan === slogans.length) {
            activeLetter = 0;
            activeSlogan = 0;
        };
        return setTimeout(() => {
            activeLetter = 0;
            footerSlogan.textContent = '';
            addLetter();
        }, 3000);

    };
    setTimeout(addLetter, 150);
}

addLetter();

// code related to buuton GLOBE
const globeSectionFromTop = document.querySelector('.globe').offsetTop;
const globeH2 = document.querySelector('.globe .globe-wrapper h2');

window.addEventListener('scroll', () => {
    if (window.scrollY >= globeSectionFromTop / 1.06) {
        globeH2.classList.add('show');
    }
})



const gotoFooterBtns = [...document.querySelectorAll('button.contact')];

const gotoFooter = (e) => {
    const name = e.target.name;
    if (name === 'globe') {
        const globeSlogan = document.querySelector('.globe-wrapper h2');
        globeSlogan.classList.add('animated');
        setTimeout(() => {
            $('body, html').animate({
                scrollTop: document.querySelector('footer').offsetTop + 10
            });
        }, 800);
    } else {
        $('body, html').animate({
            scrollTop: document.querySelector('footer').offsetTop + 10
        });
    }
}

gotoFooterBtns.forEach(button => button.addEventListener('click', gotoFooter));



// console.log(medias);
const medias = [...document.querySelectorAll('.footer-media-wrapper')];
const spans = [...document.querySelectorAll('.footer-media-wrapper span')];

const spanFromRight = () => {
    let time = 500
    for (let span of spans) {
        setTimeout(() => {
            span.classList.add('move')
        }, time);
        time += 300
    }
}

let mediaMoveDown = () => {
    const singleContact = document.querySelector('footer div.footer-media-wrapper');
    const singleContactString = window.getComputedStyle(singleContact).marginBottom;
    let index = singleContactString.length
    if (index >= 5) index = 3;
    if (index >= 4) index = 2;
    const singleContactNumber = +(singleContactString.slice(0, index));
    let top = singleContactNumber;
    let time = 0;
    for (key in medias) {
        setTimeout(() => {
            medias.splice(0, 1);
            for (let media of medias) {
                media.style.top = top + 'px';
            }
            top += singleContactNumber;
        }, time);
        time += 450;
    }
    spanFromRight()
}

let executed = false;
window.addEventListener('scroll', () => {


    if (!executed) {
        const footerFromTop = document.querySelector('.globe').offsetTop;
        if (window.scrollY >= footerFromTop * 1.1) {
            mediaMoveDown();
            executed = true;
        }

    }

})
