<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">关于</el-menu-item>
      <el-menu-item index="3">登录</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const activeIndex = ref('1')
    const router = useRouter()
    const handleSelect = (key, keyPath) => {
      switch (key) {
        case '1':
          router.push('/home')
          break
        case '2':
          router.push('/about')
          break
        case '3':
          router.push('/login')
          break
        default:
          router.push('/')
          break
      }
    }
    return {
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style>
</style>
