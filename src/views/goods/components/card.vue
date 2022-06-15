<template>
  <div class="warp" @click="$emit('onHideCard')">
    <div class="card" @click.stop="">
      <div class="content">
        <div class="content-top">
          <div class="content-top_img">
            <img src="" alt="" />
          </div>
          <div class="content-top_text">
            <p class="content-top_text--price" style="padding-bottom: 0.28rem;">¥ 699</p>
            <p class="content-top_text--stock">库存: 1381件</p>
          </div>
        </div>
        <div class="content-item">
          <p>颜色</p>
          <ul class="content-item_color">
            <li>黑色</li>
            <li>白色</li>
            <li>墨绿色</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsCard",
};
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
    left: 0rem;
    bottom: 0rem;
    height: 75vh;
    width: 100%;
    background-color: #fff;
    padding: 0.3rem;
    box-sizing: border-box;
  }
  .content {
    // overflow: hidden;
    &-top {
      &_img {
        display: inline-block;
        vertical-align: text-bottom;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid rgb(216, 216, 216);
        margin-right: 0.4rem;
      }
      &_text {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        height: 1.6rem;
        &--price {
          font-size: 0.28rem;
          color: #157658;
          font-weight: bold;
        }
        &--stock {
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
    &-item {
      margin-top: 0.4rem;
      p {
        color: red;
        font-size: 0.24rem;
      }
      &_color {
        
      }
    }
  }
}
</style>