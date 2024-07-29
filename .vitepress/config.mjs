import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "/docs-demo/logo.png" }]],
  title: "我的项目",
  description: "A VitePress Site",
  themeConfig: {
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    outlineTitle:"目录",
    outline:[2,6],
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '主页', link: '/' },
    //   { text: '示例', link: '/markdown-examples' }     
    // ],
    nav: [
      { text: '主页', items:[
        {text:'首页', link: '/'},
        { text: 'Markdown Examples', link: '/markdown-examples' },

      ] },
      { text: '示例', link: '/markdown-examples' } ,
      { text: '示例', link: '/markdown-examples' }     
      
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright:"Copyright@ 2024 zhang",
    },
  }
})
