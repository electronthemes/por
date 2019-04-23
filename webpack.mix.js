const mix = require('laravel-mix')

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync('localhost:8000')
