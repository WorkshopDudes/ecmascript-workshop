var path = require("path");
module.exports = {
    entry: {
        app: ["./src/wish-list-app/wish-list-app.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          { loader: 'babel' }
        ]
    }
}
