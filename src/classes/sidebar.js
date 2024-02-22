import { block } from "../utils"
import { TextBlock, TitleBlock } from "./blocks"
export class Sidebar{
    constructor(selector, updateCallback){
        this.$el=document.querySelector(selector)
        this.update=updateCallback
        this.init()
    }
    init(model){
           this.$el.insertAdjacentHTML("afterbegin", this.template)
           this.$el.addEventListener('submit', this.add.bind(this))
        }
    get template(){
        return [
            block("text"),
            block("title"),
        ].join('')

    } 
    add(event){
        event.preventDefault()
        console.log(event.target.name)
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        let newBlock=type==='text'
        ? newBlock=new TextBlock(value,{styles})
        : newBlock=new TitleBlock(value,{styles})
debugger
        this.update(newBlock )

    }   

}
