<template>
  <!--积分卡列表-->
  <div class="page product-list-page">
    <div v-if="!loading">
      <div v-if="list.length">
        <div style="text-align: center;margin-bottom: 0.32rem;">
          <span style="display: inline-block;vertical-align: middle;height: 1px;width: 0.4rem;background-color:#c3c3c3;"></span>
          <span style="display: inline-block;vertical-align: middle;margin: 0 5px;">积分卡</span>
          <span style="display: inline-block;vertical-align: middle;height: 1px;width: 0.4rem;background-color:#c3c3c3;"></span>
        </div>
        <x-card-list
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="infiniteScrollDisabled"
          infinite-scroll-distance="10">
          <x-card
            v-for="item in list"
            :key="item.id"
            :pic="thumbnail(item.cover, 300)"
            @click.native="toProdDetail(item)"
            pic-height="4.2667rem">
            <span>{{ item.name }}</span>
            <x-money :value="item.sale_price" slot="meta" color="red"></x-money>
          </x-card>
        </x-card-list>
      </div>
      <div v-else style="text-align: center;">
        <p style="padding: 1rem 0 0.4rem"><img src="/static/icon/img_list_empty.png" alt=""></p>
        <p class="black-3">暂无数据</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { scrollListMixin } from 'core/mixins'

  export default {
    mixins: [scrollListMixin],
    data: function () {
      return {
        loading: true,
        queries: {},
        myScore: '--'
      }
    },
    mounted: function () {
      this.queryList()
    },
    computed: {},
    methods: {
      /**
       * 查询列表
       */
      queryList (nextPage) {
        const options = {
          url: nextPage || '/api/goodses/card',
          params: nextPage ? undefined : this.queries
        }
        this.$http.withLoading(options)
          .then(result => {
            this.loading = false
            this.setListData(result.list)
          })
      },
      catSelectChange (cat, val) {
        cat.next_selected = val
      },
      toProdDetail (item) {
        this.$router.push(`/product/${item.id}`)
      }
    }
  }
</script>
<style>

</style>
