<script lang="ts" setup>
import { Swiper, SwiperSlide, modules as swiperModules } from '@/lib/vue-swiper'
import type { Swiper as SwiperClass, SwiperOptions } from 'swiper/types'
import Autoplay from 'swiper'

// swiper
const swiperOptions: SwiperOptions = {
  autoplay: {
    delay: 3000, // 每3秒自动切换
    disableOnInteraction: false, // 用户交互后仍然继续自动播放
  },
  modules: swiperModules,
  direction: 'horizontal',
  mousewheel: false,
  slidesOffsetAfter: 200,
  resistanceRatio: 0,
  loop: true,
}
const activePageIndex = ref(0)

const onSlideChange = (swiper: SwiperClass) => {
  activePageIndex.value = swiper.activeIndex
}
</script>

<template>
  <div class="full-page">
    <swiper class="swiper" v-bind="swiperOptions" @slideChange="onSlideChange">
      <swiper-slide>
        <video class="video-player video-mobile" muted autoplay loop>
          <source src="@/assets/media/video/banner-h5.mp4" type="video/mp4" />
        </video>

        <video class="video-player video-desktop" muted autoplay loop>
          <source src="@/assets/media/video/banner.mp4" type="video/mp4" />
        </video>
      </swiper-slide>
      <swiper-slide>
        <picture class="full-image">
          <source
            class="full-image"
            type="image/webp"
            srcset="~/assets/images/index/firstPage/index-s1-bg-h5.webp"
            media="(max-width: 767px)"
          />
          <source
            class="full-image"
            type="image/jpeg"
            srcset="~/assets/images/index/firstPage/index-s1-bg-h5.jpg"
            media="(max-width: 767px)"
          />
          <source
            class="full-image"
            type="image/webp"
            srcset="~/assets/images/index/firstPage/index-s1-bg.webp"
          />
          <img class="full-image" src="~/assets/images/index/firstPage/index-s1-bg.jpg" />
        </picture>
      </swiper-slide>
    </swiper>
    <div class="layer">
      <div class="slogan">智能</div>
    </div>
    <div class="placeholder">
      <!-- <picture>
        <source type="image/webp" srcset="~/assets/images/index/firstPage/placeholder.webp" />
        <img src="~/assets/images/index/firstPage/placeholder.jpg" />
      </picture> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.video-player {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; /* 修改为从顶部开始 */
  object-fit: cover;
  z-index: 1; /* 确保视频在玩家层之上 */
}

/* 小屏设备（宽度 <= 767px） */
@media (max-width: 767px) {
  .video-desktop {
    display: none;
  }
  .video-mobile {
    display: block;
  }
}

/* 大屏设备（宽度 >= 768px） */
@media (min-width: 768px) {
  .video-desktop {
    display: block;
  }
  .video-mobile {
    display: none;
  }
}

// .placeholder {
//   position: absolute; /* 修改为绝对定位 */
//   height: 100vh;
//   width: 100%; /* 添加宽度以确保覆盖整个区域 */
//   z-index: 0; /* 设置较低的z-index值，使其位于视频之下 */
//   background-color: rgb(24, 23, 23);
// }

.full-image {
  width: 100%; /* 确保图片宽度为100% */
  height: 100%; /* 确保图片高度为100% */
  object-fit: cover; /* 确保图片覆盖整个区域 */
}

.layer {
  width: 100%; /* 添加宽度以确保覆盖整个区域 */
  z-index: 2; /* 设置较低的z-index值，使其位于视频之下 */

  .slogan {
    position: absolute;
    // width: 592px;
    height: 100vh;
    top: 40%;
    left: 30%;
    font-size: large;
    color: white;
    // background-size: contain;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-image: url('~/assets/images/index/firstPage/slogan.webp');
    transform: translate(-50%, -50%);
    z-index: 2; /* 如果希望标语始终在最前面，可以增加这个属性 */
  }
}
</style>
