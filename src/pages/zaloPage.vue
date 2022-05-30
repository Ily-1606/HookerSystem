<template>
  <div>
    <a-row type="flex">
      <a-col flex="auto">
        <h2>Quản lý zalo darkmode</h2>
      </a-col>
      <a-col>
        <a-button type="primary" @click="handleAdd">Thêm template</a-button>
      </a-col>
    </a-row>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ],
    };
  },
  methods: {
    handleAdd() {
      this.$router.push({ name: "zaloAddTemplate" });
    },
  },
};
</script>
