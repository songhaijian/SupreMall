module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': "@/assets"
            }
        },
        devServer: {
            proxy: {
                //名字可以自定义，这里我用的是api
                '/api': {
                    target: 'http://157.122.54.189:9088',//设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true,//这里设置是否跨域
                    //设置完代理之后axios请求不需要b把域名带上，只需要把路径前面加上自定义的api即可
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }
    }
}