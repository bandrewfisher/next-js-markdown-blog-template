# Next JS Markdown Blog Template

Use this template to create a blog using Next JS and Markdown.

## Features
- Markdown support (using [Contentlayer](https://contentlayer.dev/))
- Automatic styling for markdown elements (with [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography))
- Syntax highlighting (using [Prism](https://prismjs.com/))
- Tailwind CSS

## FAQ
### How do I add a new blog post?
Create a new markdown (.md) file in the `/posts` directory. The file should have the following frontmatter:

```yaml
---
title: Title of your blog post
date: YYYY-MM-DD
description: Description of your blog post
---
```

### Code syntax highlighting is not working
Your language may not be included in the default Prism CSS file. You can add it by selecting all the languages you need to support on the [Prism download page](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript) and downloading the CSS file.

Then, replace the contents of `app/prism.css` with the downloaded CSS file.


### How do I customize the styling of the rendered blog posts?
See the documentation for [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) for more information on how to customize the styling of the rendered markdown elements.


### Can I use this template for commercial projects?
Yes, you can use this template for commercial projects. Please see the [license](LICENSE) for more information.

## Acknowledgements
- [Next.js + Contentlayer Blog Starter](https://github.com/shadcn/next-contentlayer): Thanks to the maintainers of this project for the inspiration. I referenced this project to figure out how to set up Contentlayer with Next.js.