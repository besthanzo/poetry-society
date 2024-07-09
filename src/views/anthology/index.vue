<template>
    <div class="mb-6 mt-4  w-full">
        <van-cell :border="false" title="精选诗集" is-link to="/list">
            <template #icon>
                <i class="i-simple-icons:bookstack mr-2 text-xl" />
            </template>
        </van-cell>
    </div>
</template>

<script setup lang="ts">
import poemsData from '@/assets/poem/全唐诗/唐诗三百首.json'; // 导入 JSON 数据

const poems = poemsData; // 将导入的数据赋值给变量

// 可以在这里添加其他逻辑或计算属性
</script>

<style scoped>
/* 可以根据需要添加组件的样式 */
</style>
