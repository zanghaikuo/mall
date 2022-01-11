<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" textColor="pink">
        <template v-slot:icon>
          <img src="~assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:active-icon>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>
            <p>首页</p>
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item link="/category" textColor="pink">
        <template v-slot:icon>
          <img src="../../../assets/img/tabbar/category.svg" />
        </template>
        <template v-slot:active-icon>
          <img src="../../../assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>
            <p>分类</p>
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item link="/cart" textColor="pink">
        <template v-slot:icon>
          <img src="../../../assets/img/tabbar/shopcart.svg" />
        </template>
        <template v-slot:active-icon>
          <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>
            <p>购物车</p>
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item link="/profile" textColor="pink">
        <template v-slot:icon>
          <img src="../../../assets/img/tabbar/profile.svg" />
        </template>
        <template v-slot:active-icon>
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <div>
            <p>我的</p>
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "../../common/tabBar/tabBar.vue";
import tabBarItem from "../../common/tabBar/tabBarItem.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>
<style>
</style>
