// eslint-disable-next-line no-undef
module.exports = function(api) {
    api.cache(true);
    return {
        plugins: ['@babel/plugin-proposal-optional-chaining'],
        presets: ['babel-preset-expo'],
        env: {
            production: {
                plugins: ['react-native-paper/babel']
            }
        }
    };
};
