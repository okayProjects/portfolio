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
console.log(allDivs);

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


