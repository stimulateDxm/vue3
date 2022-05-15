module.exports={
    //关闭eslint
    lintOnSave:false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue3/docs/'
        : '/'
}
