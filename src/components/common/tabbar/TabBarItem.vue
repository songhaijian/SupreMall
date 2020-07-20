<template>
  <div class="tab-bar-item" @click="handleTabBarItemClick">
    <div v-if="!isActive">
      <slot name="tab-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-item-icon-active"></slot>
    </div>
    <div class="tab-bar-item-txt" :style="activeStyle">
      <slot name="tab-item-txt"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    methods: {
      handleTabBarItemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {'color': this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 1px;
  }

  .tab-bar-item-txt {
    margin-top: 2px;
    font-size: 13px;
  }
</style>
