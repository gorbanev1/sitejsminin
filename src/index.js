import {model} from './model.js'
// import {text , columns, title, image}   from  './templates.js'
import './styles/main.css'
import {templates} from './templates'
const $site=document.querySelector('#site')
console.log(templates)
model.forEach(block =>{
    let html=""
    // if (block.type==='title'){
    //   html = title(block)
    // } else if (block.type==="text"){
    //     html=text(block)
    // } else if (block.type==="columns"){
    //     html=columns(block)
    //  } else if (block.type==="image"){
    //     html=image(block)
    // }
    const toHTML = templates[block.type]
    $site.insertAdjacentHTML("beforeend", toHTML(block))
})
