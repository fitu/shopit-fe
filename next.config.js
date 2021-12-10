const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, 'styles')],
        prependData: `
            @use "colors.scss";
            @use "variables.scss";
        `,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};
