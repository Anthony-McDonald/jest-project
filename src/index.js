import _ from 'lodash'
import './style.css'
// import Icon from './icon.png';
// import Data from './data.xml';
// import Notes from './data.csv';
// import yaml from './data.yaml'

// console.log(yaml.title);    for example

function component() {
    const element = document.createElement('div')

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('test')

    // Add the image to our existing div.

    const myIcon = new Image()

    // myIcon.src = Icon;

    element.appendChild(myIcon)

    return element
}

document.body.appendChild(component())