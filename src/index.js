import {model} from './model.js'
// import {text , columns, title, image}   from  './templates.js'
import './styles/main.css'
const $site=document.querySelector('#site')
// console.log(templates)
model.forEach(block =>{
    let html=""
    // const toHTML = templates[block.type]
    console.log(block.toHTML())

   $site.insertAdjacentHTML("beforeend", block.toHTML())

})
