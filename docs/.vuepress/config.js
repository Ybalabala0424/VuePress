module.exports = {
    title: '瑶九九BBlog介绍',
    base: '/VuePress/',
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        sidebar: {
            '/Intro/':
                [{
                    title: '介绍',
                    children: [
                        ['/Intro/BlogIntro.md', '博客介绍']
                    ]
                }
                ],
            '/guide/':
                [{
                    title: '介绍',
                    children: [
                        ['/guide/use.md', '使用说明']
                    ]
                }
                ]
        },
            nav: [
                {text: '首页', link: '/'},
                {text: '博客介绍', link: '/Intro/BlogIntro.md'},
                {text: '使用说明', link: '/guide/use.md'},
                {text: '博客', link: 'https://google.com'},
            ]
    }
}
