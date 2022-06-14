<template>
  <div class="warp" @click="$emit('onHideCard')">
    <div class="card" @click.stop="">
        test
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsCard'
}
</script>

<style lang="scss" scoped>
.warp {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    .card {
        position: absolute;
        left: 0px;
        bottom: 0px;
        height: 75vh;
        width: 100%;
        background-color: #fff;
    }
}
</style>