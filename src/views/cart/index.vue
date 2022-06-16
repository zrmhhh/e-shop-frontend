<template>
  <div>
    <div class="content">
      <ul class="list">
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>百搭短袖T恤 百搭短袖T恤百搭短袖…</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">1</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>北欧简约立式台灯北欧简约立式台灯</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">1</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>百搭短袖T恤 百搭短袖T恤百搭短袖…</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">1</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>北欧简约立式台灯北欧简约立式台灯</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">1</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>百搭短袖T恤 百搭短袖T恤百搭短袖…</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">1</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>北欧简约立式台灯北欧简约立式台灯</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>¥298</p>
              </div>
              <div class="list-item_text--bottom__right">
                <!-- <div class="list-item_text--bottom__right---minus">
                    <img src="@/assets/minus.png" alt="">
                </div> -->
                <p class="list-item_text--bottom__right---num">3</p>
                <!-- <div class="list-item_text--bottom__right---add">
                    <img src="@/assets/add.png" alt="">
                </div> -->
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- bottom -->
    <div class="count">
      <span class="count-selected">已选（3）</span>
      <p class="count-btn" @click="$router.push('/submitorder')">结算 (5)</p>
      <p class="count-price">合计 <span>¥214</span></p>
    </div>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NewCard",
  components: {
    TabBar,
  },
});
</script>

<style lang="scss" scoped>
.content {
//   z-index: 99;
  background-color: #ffffff;
  min-height: 100vh;
  margin-top: 0.2rem;
  .list {
    &-item {
      padding: 0.3rem;
      position: relative;
      border-bottom: 1px solid rgb(227, 227, 227);
      display: flex;
      &_img {
        float: left;
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid rgb(226, 226, 226);
        margin-right: 0.3rem;
      }
      &_text {
        flex: 1;
        &--top {
          text-align: left;
          margin-bottom: 0.42rem;
          p {
            font-size: 0.28rem;
            color: #333333;
            margin-bottom: 0.2rem;
          }
          span {
            background-color: #f3f3f3;
            font-size: 0.2rem;
            color: #999;
          }
        }
        &--bottom {
          &__left {
            float: left;
            color: #157658;
            font-size: 0.28rem;
          }
          &__right {
            float: right;
            overflow: hidden;
            // &---minus {
            //   left: -0.24rem;
            //   bottom: -0.35rem;
            //   position: relative;
            // }
            &---num {
              background-color: #dcebe6;
              padding: 0.06rem 0.26rem;
            }
            // &---add {
            //   right: -0.84rem;
            //   bottom: 0.35rem;
            //   position: relative;
            // }
          }
        }
      }
    }
  }
}
.count {
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(210, 210, 210, 0.5);
  p {
    display: inline-block;
    float: right;
  }
  &-selected {
    margin-left: 0.9rem;
    font-size: 0.24rem;
  }
  &-price {
    font-weight: bold;
    span {
      margin-left: 0.2rem;
      font-size: 0.32rem;
      color: #157658;
    }
  }
  &-btn {
    margin-left: 0.14rem;
    width: 2rem;
    background-color: #157658;
    color: #fff;
    text-align: center;
  }
}
</style>