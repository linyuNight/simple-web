<template>
  <div>
    <div class="tab">
      <div 
        v-for="(item, index) in tabList" 
        :key="index"
        class="tab-item"
        :class="active == index ? 'active' : ''"
        @click="handlerClick(item, index)"
      >
        <div>{{ item.label }}</div>
      </div>
    </div>
    <router-view />  
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      tabList: [
        {
          label: 'aaa',
          pathName: 'first'
        },
        {
          label: 'bbb',
          pathName: 'second'
        }
      ]
    }
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let index = this.tabList.findIndex(val => {
        return (
          this.$route.name == val.pathName
        );
      });

      this.active = index;
    },
    handlerClick(item, index) {
      this.$router.push({
        name: item.pathName
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  border-bottom: 1px solid #ccc;
  .tab-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-right: 30px;
    padding: 0 30px;
    cursor: pointer;
  }
  .active {
    color: red;
  }
}
</style>