module.exports = {
    entry: './app/javascript/src/app.js',
    output: {
        path: 'app/static/js/',
        filename: 'app.js'
    },
    module: {

    loaders: [

        { 
            test: /\.js$/, 
            loader: 'babel',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }
    ]
    }         
};