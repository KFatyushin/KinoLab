const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/styles/vars.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/kino-lab/'
        : '/'
}