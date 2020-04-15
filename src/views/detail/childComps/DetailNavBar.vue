<template>
  <nav-bar>
    <div class="back" slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="title" slot="center">
      <div class="title-item" 
           v-for="(item,index) in titles" 
           :class="{active: index === currentIndex}" 
           @click="titleClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
    backClick() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
  padding: 0 10px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
}

.back img {
  margin-top: 10px;
}
</style>