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

window.addEventListener('scroll', () => {
    heroSloganH2.style.fontSize = `${(60 - window.scrollY * .25).toFixed()}px`;
    heroSloganP.style.fontSize = `${(30 - window.scrollY * .125).toFixed()}px`;
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
            src: '/assets/images/lp/lp1.jpg',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/softCompanyPage',
            desc: 'The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. He’d taken the drug to blunt SAS, nausea, but the muted purring of the Villa bespeak a turning in, a denial of the bright void beyond the hull. A graphic representation of data abstracted from the banks of every computer in the center of his closed left eyelid. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the Japanese night like live wire voodoo and he’d cry for it, cry in his sleep, and wake alone in the puppet place had been a subunit of Freeside’s security system. Then he’d taken a long and pointless walk along the port’s security perimeter, watching the gulls turn circles beyond the chain link. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a broken mirror bent and elongated as they fell.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-2',
            src: '/assets/images/lp/lp2.jpg',
            http: 'https://okayprojects.github.io/holidayAgency/',
            github: 'https://github.com/okayProjects/holidayAgency',
            desc: 'The alarm still oscillated, louder here, the rear wall dulling the roar of the bright void beyond the chain link. Then a mist closed over the black water and the dripping chassis of a junked console. The Tessier-Ashpool ice shattered, peeling away from the banks of every computer in the human system. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the human system. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a junked console. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the dripping chassis of a broken mirror bent and elongated as they fell. He woke and found her stretched beside him in the human system. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-3',
            src: '/assets/images/lp/lp3.jpg',
            http: 'https://okayprojects.github.io/schoolLandingPage/',
            github: 'https://github.com/okayProjects/schoolLandingPage',
            desc: 'All the speed he took, all the turns he’d taken and the drifting shoals of waste. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the spherical chamber. None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a half-open service hatch framed a heap of discarded fiber optics and the dripping chassis of a junked console. A graphic representation of data abstracted from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.'
        },
        {
            type: 'landing-page',
            name: 'landing-page-4',
            src: '/assets/images/lp/lp4.jpg',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/softCompanyPage',
            desc: '1111111111111111jestem landing page jeden'
        }
    ],
    jsGames = [
        {
            type: 'js-games',
            name: 'js-games1',
            src: '/assets/images/games/hangman.jpg',
            http: 'https://okayprojects.github.io/hangman-game/',
            github: 'https://github.com/okayProjects/hangman-game',
            desc: 'jestem landing page jeden'
        },
        {
            type: 'js-games',
            name: 'js-games2',
            src: '/assets/images/games/one-armed-bandit.jpg',
            http: 'https://okayprojects.github.io/oneArmedBandit/',
            github: 'https://github.com/okayProjects/oneArmedBandit',
            desc: '55555555555555jestem landing page jeden'
        },
        {
            type: 'js-games',
            name: 'js-games3',
            src: '/assets/images/games/memory.jpg',
            http: 'https://okayprojects.github.io/memory-game/',
            github: 'https://github.com/okayProjects/memory-game',
            desc: '44444444444444444jestem landing page jeden'
        },
        {
            type: 'js-games',
            name: 'js-games4',
            src: '/assets/images/games/paper-rock.jpg',
            http: 'https://okayprojects.github.io/papierKamienNozyce-game/',
            github: 'https://github.com/okayProjects/papierKamienNozyce-game',
            desc: '3333333 page jeden'
        }
    ],
    reactApps = [
        {
            type: 'react-app',
            name: 'reactApp1',
            src: '/assets/images/react/burger.jpg',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/react-burger-app',
            desc: 'jestem leeeeeeeeeexeerrr'
        },
        {
            type: 'react-app',
            name: 'reactApp2',
            src: '/assets/images/react/okay.jpg',
            http: 'https://okayprojects.github.io/okay/',
            github: 'https://github.com/okayProjects/okay',
            desc: 'jestem 3333333eeeeeeeeeeeee'
        },
        {
            type: 'react-app',
            name: 'reactApp3',
            src: '#app3',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/softCompanyPage',
            desc: 'jestem aaaaa3'
        },
        {
            type: 'react-app',
            name: 'reactApp4',
            src: '#app4',
            http: 'https://okayprojects.github.io/softCompanyPage/',
            github: 'https://github.com/okayProjects/softCompanyPage',
            desc: 'jestem appppp4'
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
                projectDesc.textContent = '';
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
        time += 500
    }
}

let mediaMoveDown = () => {
    let top = 120;
    let time = 0;
    for (key in medias) {
        setTimeout(() => {
            medias.splice(0, 1);
            for (let media of medias) {
                media.style.top = top + 'px';
            }
            top += 120;
        }, time);
        time += 500;
    }
    spanFromRight()
}


window.addEventListener('scroll', () => {
    const footerFromTop = document.querySelector('footer').offsetTop;
    if (window.scrollY >= footerFromTop) {
        mediaMoveDown();
    }
})
