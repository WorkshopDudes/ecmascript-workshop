var path = require("path");
module.exports = {
    entry: {
        app: ["./src/calculator/calculator.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
