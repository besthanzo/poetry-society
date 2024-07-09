<template>
    <div class="containerPoem">
     
        <div v-for="poem in poems" :key="poem.id" class="poem">
            <h2>{{ poem.title }}</h2>
            <!-- <p class="text-wrap mx-6 text-sm"><strong>Tags:</strong> {{ poem.tags.join(', ') }}</p> -->
            <ul>
                <li v-for="paragraph in poem.paragraphs" :key="paragraph">{{ paragraph }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import poemsData from '@/assets/poem/曹操诗集/caocao.json'; // 导入 JSON 数据

const poems = poemsData; // 将导入的数据赋值给变量


</script>

<style scoped>
</style>
