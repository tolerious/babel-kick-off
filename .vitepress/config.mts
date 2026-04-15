import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Kick Off Babel",
    description: "",
    outDir: 'babel-kick-off',
    head: [
        ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'}]
    ],
    markdown: {lineNumbers: true},
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '快速开始', link: '/docs/quick-start'},
            {text: '资源汇总', link: '/docs/learning-resource'}
        ],

        sidebar: [

            {text: '快速开始', link: '/docs/quick-start'},
            {text: 'Babel 简介', link: '/docs/babel-introduction'},
            {text: '使用 Babel', link: '/docs/use-babel'}
            // {
            //     text: 'Examples',
            //     items: [
            //         {text: 'Markdown Examples', link: '/markdown-examples'},
            //         {text: 'Runtime API Examples', link: '/api-examples'}
            //     ]
            // }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/tolerious/babel-kick-off'}
        ]
    }
})
