module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        rotate: {
          '135': '-45deg',
        },
        gap: {
          '11': '0.75rem',
        },
        backgroundColor: {
          'main-bg': '#4E5D97',
          'main-dark-bg': '#2d325c',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          "background-light":'',
          "background-dark" :'pink'
  
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          450: '520px',
          550: '778px',
          300: '385px',
          570: '600px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1300px',
          20:'25%',
          43: "47%",
          22:"22.9%",
          70:"74.3%",
          90:"30%",
          25:"4%",
          10:"14%",
          11:"11%",
          19:"19%",
          13:"11px"
        },
        height: {
          80: '80px',
          70:'70px',
          100:'100%',
          50:'50%',
          15:'15%',
          40:'40%'
        },
       
        minHeight: {
          590: '590px',
          50:'50%',
          10:'10%',
          40:'40%'
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };
  