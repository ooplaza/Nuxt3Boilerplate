module.exports = {
    theme:{
        extends: {
            fontFamily: {
                bitter: ['Bitter', 'serif',],
                ubuntu: ['Ubuntu', 'sans-serif',],
                sacramento: ['Sacramento', 'sans-serif',],
                oswald: ['Oswald', 'sans-serif'],
                roobert: ['Roobert', 'sans-serif'],
                portico: ['Portico', 'sans-serif'],
                baybayin: ['Baybayin', 'sans-serif'],
                gameboy: ['Gameboy', 'sans-serif'],
            },
        },
    },

    darkMode: 'class',

    plugins: [
        require('flowbite/plugin'),
        require('preline/plugin'),
        require("daisyui"),
    ],

    content: [
        "./node_modules/flowbite/**/*.js",
        "node_modules/preline/dist/*.js",
    ],

    // Customizing using existing theme from daisy UI
    // <html data-theme="cupcake"></html>
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
}