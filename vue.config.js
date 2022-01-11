module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //   默认src已经配置@
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views:"@/views",
        common:"@/common"
        

      },
    },
  },
};
