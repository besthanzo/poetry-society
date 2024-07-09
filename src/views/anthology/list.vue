<template>
    <div>
        <div class="flex flex-col content-center justify-center mt-5">
            <van-button class="custom-button" v-for="(folder, index) in folders" :key="index" type="primary" plain
                is-link to="/CaoCaoPoems">
                {{ folder.chinese }}
            </van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button as VanButton } from 'vant';

const folders = [
    { chinese: "曹操诗集", english: "CaoCaoPoems" },
    { chinese: "楚辞", english: "SongsOfChu" },
    { chinese: "论语", english: "ConfucianAnalects" },
    { chinese: "蒙学", english: "MongolianEducation" },
    { chinese: "纳兰性德", english: "NalanXingdePoems" },
    { chinese: "全唐诗", english: "CompleteTangPoems" },
    { chinese: "诗经", english: "BookOfSongs" },
    { chinese: "水墨唐诗四书五经", english: "InkWashTangPoemsFourBooksFiveClassics" },
    { chinese: "宋词", english: "SongLyrics" },
    { chinese: "五代诗词幽梦影", english: "DreamShadowsOfPoetryInFiveDynasties" },
    { chinese: "御定全唐詩", english: "ImperialEditionOfCompleteTangPoems" },
    { chinese: "元曲", english: "YuanOpera" }
];
</script>

<style scoped>
.custom-button {
    width: 300px;
    align-self: center;
    margin: 5px;
    /* justify-self: center; */
    /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */
}
</style>
