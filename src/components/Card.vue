<template>
  <div class="x-card" :style="{ width: picWidth }">
    <div class="x-card-inner">
      <figure class="x-card-figure">
        <div class="image" :style="{ width: picWidth, height: picHeight }">
          <img :src="pic" alt="图片">
        </div>
      </figure>
      <div class="x-card-content">
        <div class="x-card-title two-line"><slot></slot></div>
        <div class="x-card-meta"><slot name="meta"></slot></div>
        <div class="x-card-extra"><slot name="extra"></slot></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'x-card',
    props: ['pic', 'picWidth', 'picHeight']
  }
</script>
<style>
  .x-card {
    position: relative;
    font-size: 12px;
  }
  .x-card-inner {
    background-color: #fff;
  }
  .x-card-content {
    border-top: 1px solid #f0f0f0;
    padding: 0.27rem;
    position: relative;
  }
  .x-card-title {
    color: #999999;
    margin-bottom: 3px;
  }
  .x-card-extra {
    position: absolute;
    right: 0.27rem;
    bottom: 0.27rem;
  }
</style>
