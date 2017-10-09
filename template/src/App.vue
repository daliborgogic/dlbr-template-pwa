<template lang="pug">
#app
  app-nav
  transition(name="fade" mode="out-in")
    router-view.view
</template>

<script>
const appNav = () => import(/* webpackChunkName: "nav" */ '@/components/Nav.vue')

export default {
  components: { appNav }
}
</script>

<style lang="stylus">
@import "styl/reset"

.view
  max-width 512px
  margin 0 auto
  position relative

.fade-enter-active
.fade-leave-active
  transition all .2s ease

.fade-enter
.fade-leave-active
  opacity 0
</style>
