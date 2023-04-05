const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@api': 'src/api',
        '@assets': 'src/assets',
        '@images': 'src/assets/images',
        '@components': 'src/components',
        '@config': 'src/config',
        '@data': 'src/data',
        // '@lang': 'src/lang',
        '@layouts': 'src/layouts',
        '@pages': 'src/pages',
        '@redux': 'src/redux',
        '@helpers': 'src/helpers',
        '@hooks': 'src/hooks',
    })(config);
    return config;
};