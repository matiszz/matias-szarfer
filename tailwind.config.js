module.exports = {
    purge: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}