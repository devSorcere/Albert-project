<template>
  <TopBar />
  <SideBar />
  <div class="bg-[#020F11] p-5 gap-5 min-h-screen w-full font-degular">
    <div class="text-white ml-[347px] panel pt-[126px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "./topbar.vue";
import SideBar from "./sidebar.vue";
export default {
  name:'LayoutPage',
  components: {
    TopBar,
    SideBar,
  },
};
</script>

<style scoped></style>
