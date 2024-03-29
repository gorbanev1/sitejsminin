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
    return  row(col(`<${tag}> ${block.value}</${tag}>`), css(block.options.styles))

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
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
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
    return row(html, css(block.options.styles))

}
/*  function image(block){
    return `
    <div class="row">
    <img src="${block.value}"/>
    </div>
    `
} */
function image(block){
    const {imageStyles:is, alt="", styles}= block.options
    return row(`<img src="${block.value}" alt='${alt}' style="${css(is)}"/>`, css(styles))

}
export const templates = {
    title,
    text, 
    image, 
    columns
}