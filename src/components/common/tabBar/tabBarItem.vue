<template>
  <div class="tab-bar-item" @click="btn">
    <slot name="icon" v-if="!isActive"></slot>
    <slot name="active-icon" v-else></slot>
    <div :style="isActive ? { color: textColor } : {}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    link: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1;
    },
  },
  methods: {
    btn() {
      this.$router.push(this.link);
    },
  },
};
</script>
<style>
.tab-bar-item {
  text-align: center;
  height: 49px;
  flex: 1;
  
}
.tab-bar-item img {
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
