<template>
  <div>
    <h2>Quản lý chế độ darkmode zalo</h2>
  </div>
  <div style="margin-top: 50px">
    <h4>Bật/Tắt DarkMode</h4>
    <a-switch v-model:checked="isZaloDarkMode" />
  </div>
  <!-- <router-view /> -->
</template>
<script>
export default {
  data() {
    return {
      isZaloDarkMode: false,
    };
  },
  watch: {
    isZaloDarkMode() {
      chrome.storage.sync.set({
        isZaloDarkMode: this.isZaloDarkMode,
      });
    },
  },
  created() {
    // this.$router.push({
    //   name: "zaloListTemplate",
    // });
    chrome.storage.sync.get("isZaloDarkMode", (item) => {
      console.log(item);
      this.isZaloDarkMode = item.isZaloDarkMode || false;
    });
  },
};
</script>
