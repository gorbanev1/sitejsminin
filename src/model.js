import image from './assets/image.png'
export const model =[
    {
          type: 'title', 
          value: 'Блядство!!!!!!!!!!!!!',
          options: {
            tag: "h1",
            // styles: "background:linear-gradient(to right, #341251, #ffaabb); color: #fff; text-align:center; padding: 1.5rem"
            styles: {
              background: 'linear-gradient(to right, #341251, #ffaabb)',
              color: '#fff',
              'text-align': 'center',
              padding: "1.5rem",
             }
          }
    },
    {
      type: "text", value: "here we go with some text//"
    },
    {
      type: 'columns', value: [
          "11111111",
          "22222222",
          "33333333",
          "32421342"
      ]
    },
    {
      type: 'image',
      value: image
    }
  ]