module.exports = {
    important: false,
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            // display: ['Gilroy', 'sans-serif'],
            // body: ['Graphik', 'sans-serif'],
            Inconsolata: ['Inconsolata', 'monospace'],
            Merriweather: ['Merriweather', 'serif'],
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
                azul1: '#55B3D9',
                azul2: '#84C9D9',
                azul3: '#DCF2F2',
                beige: '#F2EFDC',
                naranja: '#F2CDA0',
                naranja12: 'FFA500',
                blanco0: '#F2F2F2',
            },
            margin: {
                96: '24rem',
                128: '32rem',
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover'],
    },
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
}
