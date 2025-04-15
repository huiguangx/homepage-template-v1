<template>
  <div class="app">
    <!-- 桌面端导航 -->
    <header class="header desktop-only">
      <div class="container header-container">
        <div class="logo">
          <!-- <img src="/logo.svg" alt="星尘智能" /> -->
          <span>星尘智能</span>
        </div>
        <nav class="nav">
          <ul>
            <li><a href="#products">产品服务</a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#news">新闻动态</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 移动端导航 -->
    <header class="header mobile-only">
      <div class="container header-container">
        <div class="logo">
          <!-- <img src="/logo.svg" alt="星尘智能" /> -->
          <span>星尘智能</span>
        </div>
        <div class="mobile-controls">
          <div class="language-switcher">中/英</div>
          <button class="menu-toggle" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
        <nav>
          <ul>
            <li><a href="#products" @click="closeMobileMenu">产品服务</a></li>
            <li><a href="#about" @click="closeMobileMenu">关于我们</a></li>
            <li><a href="#news" @click="closeMobileMenu">新闻动态</a></li>
            <li><a href="#contact" @click="closeMobileMenu">联系</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>领先的AI机器人公司</h1>
          <p>让智能通用机器人走进千家万户</p>
          <p class="subtitle">享智慧服务 以达卓越</p>
          <button class="btn primary">了解更多</button>
        </div>
      </div>
      <div class="pagination mobile-only">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <!-- 产品展示 S1 -->
    <section id="products" class="product">
      <div class="container">
        <div class="product-content">
          <div class="product-info">
            <h2>星尘智能S1</h2>
            <p>AI机器人平台，赋能行业新场景</p>
            <div class="product-tags">
              <span class="tag">了解</span>
              <span class="tag">查看</span>
            </div>
            <div class="qr-code">
              <!-- <img src="/qrcode.png" alt="扫码了解更多" /> -->
              <p>扫码了解更多</p>
            </div>
          </div>
          <div class="product-image">
            <!-- <img src="/robot-s1.jpg" alt="星尘智能S1机器人" /> -->
          </div>
        </div>
      </div>
    </section>

    <!-- 产品视频 -->
    <section class="video-section">
      <div class="container">
        <h2>星尘智能 S1</h2>
        <p>为你而生，为你而智</p>
        <div class="video-container">
          <!-- <video controls poster="/video-poster.jpg">
            <source src="/s1-video.mp4" type="video/mp4" />
            您的浏览器不支持视频播放
          </video> -->
        </div>
      </div>
    </section>

    <!-- 新闻动态 -->
    <section id="news" class="news">
      <div class="container">
        <h2>新闻动态</h2>
        <div class="news-grid">
          <div class="news-card" v-for="(item, index) in newsItems" :key="index">
            <div class="news-image">
              <!-- <img :src="item.image" :alt="item.title" /> -->
            </div>
            <div class="news-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <div class="news-meta">
                <span class="date">{{ item.date }}</span>
                <a href="#" class="more">查看 →</a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>

    <!-- 加入我们 -->
    <section id="contact" class="join-us">
      <div class="container">
        <h2>加入我们</h2>
        <p>我们期待与AI机器人爱好者、高工共建共赢</p>
        <button class="btn primary">联系我们</button>
        <p class="email">联系邮箱：info@stardust.com</p>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="about">
      <div class="container">
        <h2>关于星尘</h2>
        <div class="about-content">
          <div class="about-image">
            <!-- <img src="/about-team.jpg" alt="星尘智能团队" /> -->
          </div>
          <div class="about-text">
            <p>
              星尘智能（Astribot）于2023年创立于深圳，我们的使命是让机器人走入千家万户，成为人类生活的好伙伴。
            </p>
            <p>
              公司专注智能设计（Design for
              AI，DfAI）和智能制造，致力于打造高性价比的通用型智能机器人。我们的团队由来自顶尖科技公司和研究机构的专家组成，拥有丰富的人工智能、机器人学、计算机视觉等领域的经验，致力于推动机器人技术的普及和应用。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-us">
      <div class="container">
        <h2>联系我们</h2>
        <p>线下体验，随时与我们沟通咨询</p>
        <button class="btn primary">立即咨询</button>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <!-- <img src="/logo.svg" alt="星尘智能" /> -->
          <span>星尘智能</span>
        </div>
        <div class="footer-links">
          <a href="#products">产品服务</a>
          <a href="#about">关于我们</a>
          <a href="#news">新闻动态</a>
          <a href="#contact">联系</a>
        </div>
        <div class="social-icons">
          <a href="#" aria-label="微信"><i class="icon-wechat"></i></a>
          <a href="#" aria-label="微博"><i class="icon-weibo"></i></a>
          <a href="#" aria-label="邮箱"><i class="icon-mail"></i></a>
          <a href="#" aria-label="电话"><i class="icon-phone"></i></a>
          <a href="#" aria-label="地址"><i class="icon-location"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const newsItems = ref([
  {
    title: '星尘智能与制造业巨头达成合作',
    summary: '近日，星尘智能与多家制造业巨头达成战略合作，共同推进AI机器人在工业领域的应用。',
    image: '/news-1.jpg',
    date: '2023年10月15日 10:00',
  },
  {
    title: '星尘智能获得亿元级A轮融资',
    summary: 'Physical Intelligence公司宣布完成A轮融资，资金将用于加速产品研发和市场拓展。',
    image: '/news-2.jpg',
    date: '2023年10月10日 14:00',
  },
  {
    title: '星尘大海，智云天阁',
    summary: '星尘智能2023年度新品发布会圆满举行，多款创新产品亮相，引发行业关注。',
    image: '/news-3.jpg',
    date: '2023年09月15日 09:00',
  },
  {
    title: '创新技术人才，企业未来',
    summary: '星尘智能举办2023校园招聘会，吸引众多高校人才，为企业注入新鲜血液。',
    image: '/news-4.jpg',
    date: '2023年09月01日 17:00',
  },
])
</script>

<style>
/* 基础样式 */
:root {
  --primary-color: #6c5ce7;
  --primary-dark: #5a49d6;
  --text-color: #333;
  --text-light: #666;
  --text-lighter: #999;
  --bg-color: #fff;
  --bg-light: #f8f9fa;
  --border-color: #eaeaea;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.btn {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn.primary {
  background-color: var(--primary-color);
  color: white;
}

.btn.primary:hover {
  background-color: var(--primary-dark);
}

/* 响应式工具类 */
.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

/* 头部样式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.logo img {
  height: 30px;
  margin-right: 10px;
}

.nav ul {
  display: flex;
}

.nav ul li {
  margin-left: 30px;
}

.nav ul li a {
  color: white;
  font-size: 16px;
  transition: opacity 0.3s;
}

.nav ul li a:hover {
  opacity: 0.8;
}

/* 移动菜单 */
.mobile-controls {
  display: flex;
  align-items: center;
}

.language-switcher {
  color: white;
  margin-right: 15px;
  font-size: 14px;
}

.menu-toggle {
  background: none;
  border: none;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s;
  z-index: 999;
}

.mobile-menu.active {
  transform: translateY(0);
  opacity: 1;
}

.mobile-menu nav ul {
  display: flex;
  flex-direction: column;
}

.mobile-menu nav ul li {
  margin: 10px 0;
}

.mobile-menu nav ul li a {
  color: white;
  font-size: 18px;
  display: block;
  padding: 10px 0;
}

/* 英雄区域 */
.hero {
  height: 100vh;
  background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2039.png-1CpabNBiEa25qhszOMrcB3pyDqLSlM.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-content {
  color: white;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 42px;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 24px;
  margin-bottom: 10px;
}

.hero-content .subtitle {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.8;
}

.hero .pagination {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.pagination span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
}

.pagination span.active {
  background-color: white;
  width: 20px;
  border-radius: 4px;
}

/* 产品展示 */
.product {
  padding: 80px 0;
  background-color: var(--bg-light);
}

.product-content {
  display: flex;
  align-items: center;
}

.product-info {
  flex: 1;
}

.product-info h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.product-info p {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.product-tags {
  display: flex;
  margin-bottom: 30px;
}

.tag {
  padding: 5px 15px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
}

.qr-code {
  display: flex;
  align-items: center;
}

.qr-code img {
  width: 80px;
  margin-right: 10px;
}

.qr-code p {
  font-size: 14px;
  margin-bottom: 0;
}

.product-image {
  flex: 1;
  text-align: center;
}

.product-image img {
  max-width: 80%;
}

/* 视频部分 */
.video-section {
  padding: 80px 0;
  text-align: center;
}

.video-section h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.video-section p {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 30px;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.video-container video {
  width: 100%;
  display: block;
}

/* 新闻动态 */
.news {
  padding: 80px 0;
  background-color: var(--bg-light);
}

.news h2 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.news-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.news-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
}

.news-content p {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 15px;
  line-height: 1.6;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-lighter);
}

.news .pagination {
  justify-content: center;
}

/* 加入我们 */
.join-us {
  padding: 80px 0;
  text-align: center;
}

.join-us h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.join-us p {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 30px;
}

.join-us .email {
  font-size: 14px;
  margin-top: 20px;
  color: var(--text-lighter);
}

/* 关于我们 */
.about {
  padding: 80px 0;
  background-color: var(--bg-light);
}

.about h2 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
}

/* 联系我们 */
.contact-us {
  padding: 80px 0;
  text-align: center;
}

.contact-us h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.contact-us p {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 30px;
}

/* 页脚 */
.footer {
  background-color: #222;
  color: white;
  padding: 40px 0;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo img {
  height: 24px;
  margin-right: 10px;
}

.footer-links {
  display: flex;
}

.footer-links a {
  margin-left: 20px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

.social-icons {
  display: flex;
}

.social-icons a {
  margin-left: 15px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-icons a:hover {
  opacity: 1;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .hero {
    background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H5-niToJUDtZH8fqYqUebPpQdJWepUpnw.png');
    background-position: center;
    align-items: flex-start;
    padding-top: 100px;
  }

  .hero-content {
    text-align: center;
    margin: 0 auto;
  }

  .hero-content h1 {
    font-size: 28px;
  }

  .hero-content p {
    font-size: 18px;
  }

  .product-content {
    flex-direction: column;
  }

  .product-info {
    text-align: center;
    margin-bottom: 30px;
  }

  .product-tags {
    justify-content: center;
  }

  .qr-code {
    justify-content: center;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .about-content {
    flex-direction: column;
  }

  .footer .container {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 20px;
    justify-content: center;
  }

  .footer-links {
    margin-bottom: 20px;
    justify-content: center;
  }

  .footer-links a {
    margin: 0 10px;
  }

  .social-icons {
    justify-content: center;
  }

  .social-icons a {
    margin: 0 10px;
  }
}
</style>
