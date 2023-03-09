<template>
  <div>
    <HeaderCpn />
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <SidebarCpn />
        </div>
        <div class="col-9">
          <nuxt/>
        </div>
      </div>
    </div>

    <FooterHomeCpn />
  </div>
</template>

<script>
import FooterHomeCpn from '../components/FooterHomeCpn'
import HeaderCpn from '../components/HeaderCpn'
import SidebarCpn from '../components/SidebarCpn'

export default {
  components: {
    FooterHomeCpn,
    HeaderCpn,
    SidebarCpn
  },
  layout: 'home'
}
</script>

<style scoped lang="scss">

</style>
