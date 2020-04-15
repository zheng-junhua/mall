import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop"

export const itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null
    }
  },
  mounted() {
    // 这个地方img标签确实被挂载，但是其中的图片还没有占据高度

    // this.$refs.scroll.refresh对这个函数进行防抖操作 
    const refresh = debounce(this.$refs.scroll.refresh, 100);

    // 对监听的事件进行保存
    this.itemImgListener =  () => {
      refresh()
    }

    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000;
    }
  }
}