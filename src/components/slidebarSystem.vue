<template>
  <div class="slidebar">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :inline-collapsed="collapsed"
      class="slidebar-content"
    >
      <a-space :size="15" class="header-slidebar">
        <a-avatar style="background-color: #1890ff">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        User abc
      </a-space>
      <a-menu-item key="zalo" @click="$router.push({ name: 'zalo' })">
        <template #icon>
          <message-outlined />
        </template>
        <span>Zalo darkmode</span>
      </a-menu-item>
      <a-sub-menu
        @titleClick="titleClick"
        :key="option.key"
        v-for="option in listOptions"
      >
        <template #icon>
          <component :is="option.icon" />
        </template>
        <template #title>{{ option.name }}</template>
        <a-menu-item v-for="(item, index) in option.items" :key="index">
          <template #icon>
            <component :is="item.icon" />
          </template>
          <span>
            {{ item.title }}
          </span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {
  UserOutlined,
  MessageOutlined,
  SettingOutlined,
  FieldTimeOutlined,
  PlusOutlined,
  DashboardOutlined,
  SettingFilled,
  CloudOutlined,
  ScissorOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    MessageOutlined,
    SettingOutlined,
    FieldTimeOutlined,
    PlusOutlined,
    DashboardOutlined,
    SettingFilled,
    CloudOutlined,
    ScissorOutlined,
  },
  data() {
    return {
      collapsed: false,
      listOptions: [
        {
          key: "countdown",
          icon: FieldTimeOutlined,
          name: "Đếm ngược",
          items: [
            {
              title: "Thêm",
              icon: PlusOutlined,
            },
            {
              title: "Quản lý",
              icon: DashboardOutlined,
            },
            {
              title: "Cài đặt",
              icon: SettingFilled,
            },
          ],
        },
        {
          key: "weather",
          icon: CloudOutlined,
          name: "Thời tiết",
          items: [
            {
              title: "Quản lý",
              icon: DashboardOutlined,
            },
            {
              title: "Cài đặt",
              icon: SettingFilled,
            },
          ],
        },
        {
          key: "shortcut",
          icon: ScissorOutlined,
          name: "Lối tắt",
          items: [
            {
              title: "Thêm",
              icon: PlusOutlined,
            },
            {
              title: "Quản lý",
              icon: DashboardOutlined,
            },
            {
              title: "Cài đặt",
              icon: SettingFilled,
            },
          ],
        },
      ],
    };
  },
  computed: {
    selectedKeys() {
      return [this.$route.name];
    },
  },
};
</script>
