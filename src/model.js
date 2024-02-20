import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
export const model = [
  new TitleBlock('Блядство!!!!!!!!!!!!!',  
  
 {
      tag: "h1",
      // styles: "background:linear-gradient(to right, #341251, #ffaabb); color: #fff; text-align:center; padding: 1.5rem"
      styles: {
        background: 'linear-gradient(to right, #341251, #ffaabb)',
        color: '#fff',
        'text-align': 'center',
        padding: "1.5rem",
      }
 }),
 new ImageBlock(image,
    {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'

      },
      alt: 'хуйня'

    })
, new TextBlock("here we go with some text//",
     {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
      }
    })
  ,
  new ColumnsBlock([
      "asdd ad adsa Das dsA DSA SA Ds AS as dAS DAs AS das",
      "  asdf asd aasd fasdf ",
      " asdf fd fsadf ",
      " asdf sdf asd"
    ], {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }),

]