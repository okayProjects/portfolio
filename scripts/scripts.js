// code related to menu

const menuItems = [...document.querySelectorAll('nav li a')];

const goToSection = function () {
    const whereToGo = '[data-section=' + this.classList[0] + ']';
    const goToThisSection = document.querySelector(whereToGo).offsetTop;
    console.log(goToThisSection);
    $('body, html').animate({
        scrollTop: goToThisSection
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
        nav.classList.add('visible');
        scrollPosition = document.body.getBoundingClientRect().top;
    }
    else {
        scrollPosition = document.body.getBoundingClientRect().top;
        nav.classList.remove('visible');
    }

    if (window.scrollY >= positionSectionMyStack - navHeight) {
        nav.classList.add('color');
    } else {
        nav.classList.remove('color');
    }
}
window.addEventListener('scroll', navHideShow);

// code related to my-stack

const myStackAnimations = () => {
    const desktopImg = document.querySelector('.desktop-wrapper .desktop-img-wrapper');
    const desktopImgPosition = document.querySelector('.desktop-wrapper .desktop-img-wrapper').offsetTop;
    const iphone = document.querySelector('.mobile-img-wrapper img');
    const iphoneLeft = document.querySelector('.mobile-img-wrapper .iphone-left');
    if (window.scrollY >= desktopImgPosition / 1.5) {
        desktopImg.classList.add('animated')
    }
    if (window.scrollY >= desktopImgPosition * 1.2) {
        iphone.classList.add('animated');
        iphoneLeft.classList.add('animated');
    }
}

window.addEventListener('scroll', myStackAnimations);

// code related to projects
const projects = [
    projectPages = [
        {
            type: 'landing-page',
            name: 'project-page-1',
            src: '#lp1'

        },
        {
            type: 'landing-page',
            name: 'project-page-2',
            src: '#lp2'
        },
        {
            type: 'landing-page',
            name: 'project-page-3',
            src: '#lp3'
        },
    ],
    jsGames = [
        {
            type: 'js-games',
            name: 'game-1',
            src: '#game1'
        },
        {
            type: 'js-games',
            name: 'game-2',
            src: '#game2'
        },
        {
            type: 'js-games',
            name: 'game-3',
            src: '#game3'
        },
        {
            type: 'js-games',
            name: 'game-4',
            src: '#game4'
        }
    ],
    reactApps = [
        {
            type: 'react-app',
            name: 'app1',
            src: '#app1'
        },
        {
            type: 'react-app',
            name: 'app2',
            src: '#app2'
        },
        {
            type: 'react-app',
            name: 'app3',
            src: '#app3'
        },
        {
            type: 'react-app',
            name: 'app4',
            src: '#app4'
        }
    ]
]

const divsClassProjects = [...document.querySelectorAll('.projects')];

projects.forEach((project, index) => {
    for (let key in project) {
        const singleDiv = document.createElement('div');
        singleDiv.classList.add('project-page');
        singleDiv.classList.add(`${project[key].type}`);
        divsClassProjects[index].appendChild(singleDiv);
    }
})

const divsprojectPages = [...document.querySelectorAll('.project-page')];

const allDivs = [];
allDivs.push([...document.querySelectorAll('.landing-page')])
allDivs.push([...document.querySelectorAll('.js-games')])
allDivs.push([...document.querySelectorAll('.react-app')])

const createElements = () => {
    for (key in allDivs) {
        allDivs[key].forEach((div, index) => {

            const img = document.createElement('img');
            img.setAttribute('src', `${projects[key][index].src}`);
            img.setAttribute('alt', `${projects[key][index].name}`)
            div.appendChild(img);


            const a = document.createElement('a');
            a.setAttribute('src', '#');
            const aText = document.createTextNode('View this page');
            a.appendChild(aText)

            const a2 = document.createElement('a');
            a2.setAttribute('src', '#');
            const a2Text = document.createTextNode('View the code');
            a2.appendChild(a2Text)

            const panel = document.createElement('div')
            panel.classList.add('panel');
            const button = document.createElement('button');
            const buttonText = document.createTextNode('see description');
            button.appendChild(buttonText)
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
    i.classList.add('fas');
    i.classList.add('fa-code');
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

const navClicked = function (e) {
    changeSelectedProjectNav();
    this.classList.add('selected');
    changeSelectedProjects();
}


figures.forEach(figure => {
    figure.addEventListener('click', navClicked)
})
