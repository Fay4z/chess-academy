/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'foreign': 'var(--foreign)',
        'gradFrom': 'var(--gradFrom)',
        'gradTo': 'var(--gradTo)',

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/chessbg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

