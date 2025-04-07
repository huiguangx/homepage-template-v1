<template>
    <div class="cmk-pc-warp">   
      <NuxtLayout>     
         <el-config-provider :locale="zhCn">    
            <NuxtPage />    
          </el-config-provider>   
      </NuxtLayout> 
     </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  <!-- 不使用 scoped -->
  <style lang="scss">
  
  /* PC端的公共样式必须包裹在 .cmk-pc-warp */
  
  @use './style/base.scss';
  
  </style>
  
  