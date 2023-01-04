/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:
    {
      bg:'#16181c',
      accept:'#ea377a',
      text:'#8f9ca7',
      text1:'#badefc',
      text2:'#cbd4dc',
      field:'#30394c',
      placeHolder:'#6c757d',
      placeHolder2:'#8f9c9e',
      bg2:'#4a5e8d',
      bg3:'#242832',
      myPurple:'#856fef'

    },
    screens:
    {
      mob:{'max':'767px'}
    },
    extend: {
      width:
      {
        container:'1110px'
      },
      fontSize:
      {
        title:'3.1rem'
      }

    },
  },
  plugins: [],
}

