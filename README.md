<p align="center">
<a href="https://nuxt-tgame-web.vercel.app" target="_blank">vercel preview(SSR)</a> | <a href="https://xp.palxp.cn/">github page preview(SSG)</a> | <a href="https://kid-1912.github.io/nuxt-tgame-web">常见问题</a> | <a href="https://juejin.cn/spost/7453452135209156662">掘金文章(juejin)</a>
</p>

[![](https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202412290101347.png)](https://nuxt-tgame-web.vercel.app/)

## development

```
npm run dev
```

## SSR build

```
npm run build
```

more detail see https://nuxt.com/docs/getting-started/deployment#nodejs-server

## SSG generate

```
npm run generate
```

more detail see https://nuxt.com/docs/getting-started/prerendering

## Relation

[Nuxt.js](https://nuxt.com/)

```
nuxt-tgame-web
├─ .prettierrc.cjs
├─ app
│  └─ router.options.ts
├─ app.vue
├─ assets
│  ├─ images
│  │  ├─ index
│  │  │  ├─ firstPage
│  │  │  │  ├─ index-s1-bg-h5.jpg
│  │  │  │  ├─ index-s1-bg-h5.webp
│  │  │  │  ├─ index-s1-bg.jpg
│  │  │  │  ├─ index-s1-bg.webp
│  │  │  │  ├─ placeholder.jpg
│  │  │  │  ├─ placeholder.webp
│  │  │  │  └─ slogan.webp
│  │  │  ├─ fourPage
│  │  │  │  ├─ bg
│  │  │  │  │  └─ gp-bg.jpg
│  │  │  │  └─ img
│  │  │  │     └─ role.png
│  │  │  ├─ secondPage
│  │  │  │  ├─ bg
│  │  │  │  │  ├─ pvp-bg.webp
│  │  │  │  │  ├─ pvp-gold-bg.png
│  │  │  │  │  └─ pvp-logo-bg.png
│  │  │  │  └─ img
│  │  │  │     ├─ role1.png
│  │  │  │     ├─ role2.png
│  │  │  │     ├─ role3.png
│  │  │  │     ├─ role4.png
│  │  │  │     └─ role5.png
│  │  │  └─ thirdPage
│  │  │     ├─ bg
│  │  │     │  └─ lol-bg-top.webp
│  │  │     └─ img
│  │  │        ├─ role1.png
│  │  │        ├─ role2.png
│  │  │        ├─ role3.png
│  │  │        └─ role4.png
│  │  └─ logo
│  │     ├─ foot-logo.webp
│  │     ├─ logo-active.png
│  │     └─ logo.png
│  ├─ json
│  │  └─ game.json
│  ├─ media
│  │  └─ video
│  │     ├─ banner-h5.mp4
│  │     ├─ banner.mp4
│  │     ├─ first_frame.jpg
│  │     └─ home_video.mp4
│  └─ styles
│     └─ global.scss
├─ components
├─ composables
├─ config
│  ├─ i18n.config.ts
│  └─ i18n.ts
├─ docker-compose.yml
├─ Dockerfile
├─ ecosystem.config.cjs
├─ i18n
│  └─ locales
│     ├─ en.json
│     └─ zh-cn.json
├─ layouts
│  ├─ default.vue
│  ├─ Footer
│  │  └─ Footer.vue
│  └─ Header
│     └─ Header.vue
├─ lib
│  └─ vue-swiper.ts
├─ middleware
├─ nginx.conf
├─ nuxt.config.ts
├─ package.json
├─ pages
│  ├─ home
│  │  ├─ components
│  │  │  └─ SwiperPages
│  │  │     ├─ firstPage.vue
│  │  │     ├─ fourPage.vue
│  │  │     ├─ index.ts
│  │  │     ├─ secondPage.vue
│  │  │     └─ thirdPage.vue
│  │  └─ index.vue
│  ├─ index.vue
│  ├─ news
│  │  └─ index.vue
│  └─ product
│     └─ index.vue
├─ pnpm-lock.yaml
├─ public
│  ├─ favicon.ico
│  └─ robots.txt
├─ README.md
├─ scripts
│  └─ fontSlice.ts
├─ server
│  └─ tsconfig.json
├─ start.sh
├─ tsconfig.json
├─ types
│  └─ index.d.ts
└─ windicss.config.ts

```
