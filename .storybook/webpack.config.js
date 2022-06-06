const path = require('path');

module.exports = function ({ config }) {

    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
    });

    config.module.rules.push({
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
            loader: "url-loader",
            options: {
                limit: 1000000,
                fallback: "file-loader",
                name: "public/images/[name].[ext]"
            }
        }
    });

    return config;
};
