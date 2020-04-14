const path = require("path");
const HTMLWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.ts',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.ts','.js']
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                // loader le dice a ts solamente vamos a utilizar la libreria awl 
                exclude: /node_modules/,
            }, 
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
                // use es para utilizar dos una libreria
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugins({
            template: 'index.html',
        }),
    ],
    devServer:{
        port:3000,
        stats: 'minimal'
    }
};
// modulos que vamos a exportar toda la configuracion para que el archivo webpack funcione

