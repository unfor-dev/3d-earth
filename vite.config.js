import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    plugins:
    [
        restart({ restart: [ '../static/**', ] }),
        glsl() 
    ]
}