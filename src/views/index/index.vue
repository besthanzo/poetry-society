<template>
  <div>
    <div :class="classStyle">
      <!-- <div class="rounded-full border-2 border-rose-600"> -->
      <div class="w-full  pt-10 px-5  rounded-lg" style="opacity: 1;">
        <van-swipe class="rounded-lg border border-slate-200 shadow-sm" type="single" :autoplay="3000"
          :show-indicators=false>
          <van-swipe-item>
            <img src="@/assets/images/1.png" alt="Image 1" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/images/2.png" alt="Image 2" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/images/3.png" alt="Image 3" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- </div> -->
      <div class="text-center text-xl font-bold my-5 antialiased">轮回诗社</div>
      <div class="mb-6 mt-4 w-full">
        <div>
          <div>
            <div v-for="(item, index) in peomList" :key="index"
              class="text-center mx-11 my-5 py-5 rounded-lg  border border-slate-200 shadow-sm">
              <div class="text-xl pb-1"> {{ item.title }}</div>
              <div class="text-wrap  mx-6 text-sm"> {{ item.content }}</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { load } from 'jinrishici';
import { useDark, useToggle } from '@vueuse/core'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { is } from '@/utils/is';


const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
console.log(isDark)

const checked = ref(isDark.value)
console.log(checked)

const peomList = ref([
  {
    title: "赠汪伦", content: "李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。" },
  { title: "属实是", content: '梅子留酸软齿牙，芭蕉分绿与窗纱。' },
])


const classStyle = computed(() => (isDark.value ? '' : 'light'));
</script>

<style scoped>

.light{
  height: 100vh; 
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
}
.poem-container {
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 15px;
  overflow: hidden;
}

.poem-container .title {
  font-size: 20px;
}

.poem-container .author-info {
  display: flex;
  justify-content: center;
}

.poem-container .author-info p {
  margin: 0 5px; /* Adjust spacing */
}

.content {
  margin-top: 5px; /* 调整内容与作者信息之间的间距 */
}

.poem-line-short {
  margin: 0; /* 清除默认间距 */
  text-align: center; /* 居中显示 */
  white-space: pre-wrap; /* 自动换行 */
}

.poem-line-long {
  margin: 0 10px 0 10px; /* 清除默认间距 */
  text-align: left; /* 左对齐 */
  white-space: pre-wrap; /* 自动换行 */
  text-indent: 2em; /* 首行缩进 */
}
    .information-left {
   /* position: absolute; */
    left: 20px;
    text-align: left; 
}

.refreshFlow{
      position: absolute;
      bottom: 0px;
      right: 20px;
}
.refresh {
  position: sticky;
}
</style>
