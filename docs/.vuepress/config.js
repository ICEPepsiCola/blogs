module.exports = {
    title: 'Slience',
    head: [
        ['meta', {'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate'}],
        ['meta', {'http-equiv': 'pragma', content: 'no-cache'}],
        ['meta', {'http-equiv': 'expires', content: '0'}],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    theme: 'antdocs',
    base: '/blogs/',
    themeConfig: {
        sidebar: [
            {
                key: 'study',
                title: '学习日记🙇‍♂️',
                collapsable: false,
                children: [
                    'study/js.md',
                    'study/css.md',
                    'study/react.md',
                    'study/dom.md',
                    'study/leetcode.md',
                ]
            }
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '学习日记', link: '/study/js' },
        ]
    }
}
