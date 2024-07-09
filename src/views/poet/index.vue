<template>
  <div class="poem-container">
    <div class="information-left">
      <p v-if="datas.ipAddress">IP: {{ datas.ipAddress }}</p>
      <p v-if="poem.cacheAt">时间: {{ formattedCacheTime }}</p>
      <div>
        <van-tag v-for="(tag, index) in poem.matchTags" :key="index" type="success" :style="{ marginRight: '8px' }">
          {{ tag }}
        </van-tag>
      </div>
    </div>
    <p class="title">{{ poem.origin.title }}</p>
    <div class="author-info">
      <p>{{ poem.origin.dynasty }}</p>
      <p>{{ poem.origin.author }}</p>
    </div>
    <div class="content">
      <p v-for="(line, index) in poem.origin.content" :key="index" :class="getClassForLine(line)">
        {{ line }}
      </p>
    </div>
    <div class="refreshFlow">
      <van-button type="primary" size="small" class="refresh" @click="loadSentence">下一首</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { load } from 'jinrishici';

const datas = ref({ ipAddress:""});
const poem = ref({
  id: "",
  content: [
    "",
    ""
  ],
  popularity: "",
  cacheAt: "",
  matchTags: [],
  origin: {
    title: "",
    dynasty: "",
    author: "",
    content: [
      "",
      ""
    ]
  },
  author: "",
  dynasty: "",
  title: "",
  translate: "",
  recommendedReason: "",
  ipAddress: "",
  status: "",
  token: "",
  warning: ""
});

// const poem = ref({
//   id: "5b8b9572e116fb3714e6feb0",
//   content: [
//     "日长睡起无情思，闲看儿童捉柳花。",
//     "梅子留酸软齿牙，芭蕉分绿与窗纱。"
//   ],
//   popularity: 265000,
//   cacheAt: "2024-07-07T16:53:41.204048073",
//   matchTags: ["白天", "夏"],
//   origin: {
//     title: "闲居初夏午睡起·其一",
//     dynasty: "宋代",
//     author: "杨万里",
//     content: [
//      "汉皇重色思倾国，御宇多年求不得。",
// "杨家有女初长成，养在深闺人未识。",
// "天生丽质难自弃，一朝选在君王侧。",
// "回眸一笑百媚生，六宫粉黛无颜色。",
// "春寒赐浴华清池，温泉水滑洗凝脂。",
// "侍儿扶起娇无力，始是新承恩泽时。",
// "云鬓花颜金步摇，芙蓉帐暖度春宵。",
// "春宵苦短日高起，从此君王不早朝。",
// "承欢侍宴无闲暇，春从春游夜专夜。",
// "后宫佳丽三千人，三千宠爱在一身。",
// "金屋妆成娇侍夜，玉楼宴罢醉和春。",
// "姊妹弟兄皆列土，可怜光彩生门户。",
// "遂令天下父母心，不重生男重生女。",
// "骊宫高处入青云，仙乐风飘处处闻。",
// "缓歌慢舞凝丝竹，尽日君王看不足。",
// "渔阳鼙鼓动地来，惊破霓裳羽衣曲。",
// "九重城阙烟尘生，千乘万骑西南行。",
// "翠华摇摇行复止，西出都门百余里。",
// "六军不发无奈何，宛转蛾眉马前死。",
// "花钿委地无人收，翠翘金雀玉搔头。",
// "君王掩面救不得，回看血泪相和流。",
// "黄埃散漫风萧索，云栈萦纡登剑阁。",
// "峨嵋山下少人行，旌旗无光日色薄。",
// "蜀江水碧蜀山青，圣主朝朝暮暮情。",
// "行宫见月伤心色，夜雨闻铃肠断声。",
// "天旋地转回龙驭，到此踌躇不能去。",
// "马嵬坡下泥土中，不见玉颜空死处。",
// "君臣相顾尽沾衣，东望都门信马归。",
// "归来池苑皆依旧，太液芙蓉未央柳。",
// "芙蓉如面柳如眉，对此如何不泪垂。",
// "春风桃李花开日，秋雨梧桐叶落时。",
// "西宫南内多秋草，落叶满阶红不扫。",
// "梨园弟子白发新，椒房阿监青娥老。",
// "夕殿萤飞思悄然，孤灯挑尽未成眠。",
// "迟迟钟鼓初长夜，耿耿星河欲曙天。",
// "鸳鸯瓦冷霜华重，翡翠衾寒谁与共。",
// "悠悠生死别经年，魂魄不曾来入梦。",
// "临邛道士鸿都客，能以精诚致魂魄。",
// "为感君王辗转思，遂教方士殷勤觅。",
// "排空驭气奔如电，升天入地求之遍。",
// "上穷碧落下黄泉，两处茫茫皆不见。",
// "忽闻海上有仙山，山在虚无缥渺间。",
// "楼阁玲珑五云起，其中绰约多仙子。",
// "中有一人字太真，雪肤花貌参差是。",
// "金阙西厢叩玉扃，转教小玉报双成。",
// "闻道汉家天子使，九华帐里梦魂惊。",
// "揽衣推枕起徘徊，珠箔银屏迤逦开。",
// "云鬓半偏新睡觉，花冠不整下堂来。",
// "风吹仙袂飘飘举，犹似霓裳羽衣舞。",
// "玉容寂寞泪阑干，梨花一枝春带雨。",
// "含情凝睇谢君王，一别音容两渺茫。",
// "昭阳殿里恩爱绝，蓬莱宫中日月长。",
// "回头下望人寰处，不见长安见尘雾。",
// "惟将旧物表深情，钿合金钗寄将去。",
// "钗留一股合一扇，钗擘黄金合分钿。",
// "但教心似金钿坚，天上人间会相见。",
// "临别殷勤重寄词，词中有誓两心知。",
// "七月七日长生殿，夜半无人私语时。",
// "在天愿作比翼鸟，在地愿为连理枝。",
// "天长地久有时尽，此恨绵绵无绝期。"

//     ]
//   },
//   author: "杨万里",
//   dynasty: "宋代",
//   title: "闲居初夏午睡起·其一",
//   translate: null,
//   recommendedReason: "",
//   ipAddress: "161.142.111.135",
//   status: "success",
//   token: "J95hErtumKvY0X647ebfEncgbqx6NCae",
//   warning: null
// });

// Method to load a new sentence using jinrishici
const loadSentence = () => {
  load(
    result => {
    console.log(result)
    poem.value=result.data;
    datas.value=result;
    },
    err => {
      console.error('Failed to load sentence:', err);
    }
  );
};

// Load sentence on component mount
onMounted(() => {
  loadSentence();
});

// Computed property to format cache time
const formattedCacheTime = computed(() => {
  const date = new Date(poem.value.cacheAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
});

// 根据行索引返回样式类名
// 根据行内容长度返回样式类名
const getClassForLine = (line) => {
  if (line.length > 20) { // 根据长度判断是否应用特定样式类名
    return 'poem-line-long';
  } else {
    return 'poem-line-short';
  }
};
</script>

<style scoped>
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
    margin: 0 0px 0 10px;
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
