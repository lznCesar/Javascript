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
                exclude: /node_modules/,
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

