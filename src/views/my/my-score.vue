<template>
  <div class="page my-score-page">
    <x-media-object class="score-banner" icon="integral" size="1.6rem" pull="0.1rem" padding>
      <div style="color: #ffffff;">
        <span style="font-size: 16px;">积分余额</span>
      </div>
      <span slot="bottom-left" style="font-size: 30px;line-height: 1;">{{ score }}</span>
    </x-media-object>
    <div class="score-month">
      <!--<x-cell class="black-3" style="background: #f0f0f0;">-->
        <!--<span>本月</span>-->
        <!--<div slot="right">-->
          <!--<span style="margin-right: 1em;">收入：2184</span>-->
          <!--<span>支出：32</span>-->
        <!--</div>-->
      <!--</x-cell>-->
      <x-cell class="bdb" v-for="item in list" :key="item.id">
        <span style="display: inline-block;width: 4em;">{{ item.created_at * 1000 | justMonthDay }}</span>
        <span>{{ item.type | fufenLogItem }}</span>
        <span slot="right" :style="{ color: item.is_plus ? '#333' : 'red' }">{{ item.is_plus ? '+' : '-' }}{{ item.amount }}</span>
      </x-cell>
    </div>
  </div>
</template>
<script>
  import { scrollListMixin } from 'core/mixins'
  export default {
    mixins: [scrollListMixin],
    data () {
      return {
        score: '--'
      }
    },
    mounted () {
      this.fetchUserCapitals()
      this.queryList()
    },
    methods: {
      fetchUserCapitals () {
        this.$http.withLoading('/api/user/capitals')
          .then(res => {
            this.score = res.data.user_capital.fufen
          })
      },
      queryList (nextPage) {
        this.$http.withLoading(nextPage || '/api/fufen/log').then(res => {
          this.setListData(res.list)
        })
      }
    }
  }
</script>
<style>
  .page {
    font-size: 14px;
  }
  .score-banner {
    padding: 0.64rem 0.8rem;
    background-color: #FFC935!important;
    color: #ffffff;
  }
</style>
