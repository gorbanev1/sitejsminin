 import {row, col, css} from './utils'
/*  function title(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
</div>
    `
} */
function title(block) {
    const {tag='h1', styles} = block.options
    return  row(col(`<${tag}> ${block.value}</${tag}>`), css(styles))

}
/*  function text(block) {
    return `
<div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
} */

function text(block) {
    return row(col(`<p>${block.value}</p>`))
}

/*  function columns(block) {
    const html= block.value.map(item=>`
    <div class="col-sm">
                ${item}
            </div>
    `)
    return `
    <div class="row">
           ${html.join('')}
        </div>
    `
} */
function columns(block) {
    const html = block.value.map(col).join('')
    return row(html)

}
/*  function image(block){
    return `
    <div class="row">
    <img src="${block.value}"/>
    </div>
    `
} */
function image(block){
    return row(`<img src="${block.value}"/>`)

}
export const templates = {
    title,
    text, 
    image, 
    columns
}