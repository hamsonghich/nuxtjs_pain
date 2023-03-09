<template>
  <div class="container-fluid">
    <div class="row row1">
      <nuxt-link class="link-title py--3" to="/home">
        <div class="font--medium text-center text--16">[QUÀ TẶNG] cho mọi đơn hàng từ 1-10/3. Mua  Ngay </div>
      </nuxt-link>
    </div>
    <div class="row  row2 my--3 px--4 d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="~assets/img/background/logo.png" alt="">
      </div>
      <div class="search-bar w-auto">
        <InputSearchWebcomponent
          :is-class-header="false"
          :placeholder="'Tìm sản phẩm, danh mục mong muốn ...'"
          :list-options="this.listSearchOptions"
          :filter-by-query="true"
          :maxSuggestions="10"
          :displayAttribute="'title'"
          :valueAttribute="'id'"
          @emitChooseSearch="fnEmitChooseSearch"
        />
      </div>
      <div class="list-option">
        <ul class="d-flex align-items-center">
          <li class="store">
            <nuxt-link to="/store" alt="cua hang">
              <div class="d-flex align-items-center">
                <font-awesome-icon style="width: 35px; height: 35px; color: white" icon="fa-solid fa-store"/>
                <div>
                  <span>HỆ THỐNG</span> <br/>
                  <span>CỬA HÀNG</span>
                </div>
              </div>
            </nuxt-link>
          </li>
          <li class="login">
            <nuxt-link to="/login">
              <font-awesome-icon icon="fa-solid fa-user"/>
            </nuxt-link>
          </li>
          <li class="favorite">
            <nuxt-link to="/favorite">
              <font-awesome-icon icon="fa-solid fa-heart" />
            </nuxt-link>
          </li>
          <li class="cart">
            <v-badge
              avatar
              bordered
              overlap
            >
              <template #badge>
                <v-avatar style="background: #e67e22cc">
                 1
                </v-avatar>
              </template>
              <v-avatar size="30">
                <font-awesome-icon style="color: white" icon="fa-solid fa-cart-shopping" />
              </v-avatar>
            </v-badge>
          </li>
        </ul>
      </div>
    </div>
    <div class="row  row3">

    </div>
  </div>
</template>

<script>
import * as headerServices from "~/services/headerServices";
import InputSearchWebcomponent from "~/components/InputSearchWebcomponent.vue";
export default {
  components: {
    InputSearchWebcomponent
  },
  data() {
    return {
      dataListHeader: [],
      listSearchOptions: [],
      listSearchOptionsAutocomplete: [],
    }
  },
  async created() {
    this.dataListHeader = await this._getListHeader()

    let listSearchOptionsChild = []
    this.listSearchOptions = this.dataListHeader.map(item => {
      if(item?.list){
        listSearchOptionsChild =  [...listSearchOptionsChild , ... item.list.map(itemC => {
           return {title: itemC.name, id: itemC.link}
        })]
      }
      return {title: item.name, id: item.link}
    })
    this.listSearchOptions = [...this.listSearchOptions,...listSearchOptionsChild]
  },
  methods: {
    _getListHeader() {
      return headerServices.getListHeader()
    },
    fnEmitChooseSearch(emit){
      console.log('emit', emit)
      this.$router.push(`/product/${emit}`)
    }
  }
}

</script>

<style scoped lang="scss">
.row1 {
  background: var(--color-primary);
  color: #ffff00;
  .link-title{
    height: 40px;
    color: var(--color-11);
  }
}

.row2 {
  background-image: url("~assets/img/background/background-header-top-comem.jpg");
  background-size: cover;
  height: 80px;

  .logo {
    height: 80%;
    width: auto;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .list-option {
    li{
      margin-right: 20px;
    }
    width: auto;

    .store {
      color: var(--color-white);

      svg {
        margin-right: 5px;
      }

      a {
        text-decoration: none;

        span {
          color: var(--color-white);
          font-weight: 600;
        }
      }
    }
    .login, .favorite{
      svg{
        width: 30px;height: 30px;
        color: var(--color-white);
      }
    }
  }
}
</style>
