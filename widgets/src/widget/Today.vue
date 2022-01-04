<!--
 * @Author: your name
 * @Date: 2021-12-31 09:17:51
 * @LastEditTime: 2022-01-04 13:41:19
 * @LastEditors: Please set LastEditors
 * @Description: 今日卡片
 * @FilePath: /notion/widgets/src/widget/Today.vue
-->
<template>
  <div class="container wrapper">
    <div class="inner" :class="{black: mode === 'b'}">
      <div class="header"><em></em><em></em></div>
      <div class="content">
        <div class="shici">
            <div class="note note-2">{{content[1] || ''}}</div>
            <div class="note note-1">{{content[0]}}</div>
        </div>
        <div class="date">{{year}} / {{month}} / {{day}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const jinrishici = require("jinrishici");
export default {
  props: ['styleMode'],
  data() {
    return {
      content: "",
      year: "",
      month: "",
      day: "",
      result: null,
      mode: this.$route.params.mode || this.styleMode
    };
  },
  mounted() {
    const _this = this;
    jinrishici.load((result) => {
      let ctt = result.data.content;
      _this.result = result.data;
      console.log(ctt);
      ctt = ctt.replaceAll('。', '');
      _this.content = ctt.split("，");
    });
    let _today = new Date(),
      month,
      day;
    this.year = _today.getFullYear();
    (month = _today.getMonth() + 1), (day = _today.getDate());
    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;
    (_this.month = month), (_this.day = day);
  },
  watch: {
      styleMode(newVal) {
          newVal && (this.mode = newVal)
      }
  }
};
</script>
<style lang="less" scoped>
.container {width: 100%;}
.inner {
  width: 8rem;
  border-radius: .4rem;
  box-shadow: 0 0 0.4rem 0.066667rem rgba(0, 0, 0, 0.1);
  margin: 0.4rem auto;
  .header {
    padding: 0.666667rem 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    em {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #333333;
      border-radius: 50%;
    }
  }
  .content { padding-bottom: .666667rem;
      .shici {padding: .666667rem; text-align: center; font-size: .96rem; font-family: STSong; font-weight: bold;
        display: flex; justify-content: center;
        .note {width: .9rem; position: relative; line-height:1;
            &::before, &::after {content: ''; width: 1.066667rem; height: 1px; background-color: #333333; transform: rotate(90deg);position: absolute;}
            &-2 {padding-top: 2.666667rem; margin-right: .2rem;
                &::before {left: -0.533333rem;bottom: 4.8rem;transform: rotate(90deg); width: .733333rem;}
                &::after {width: .533333rem; right: -1.2rem; bottom: 1.866667rem;transform: rotate(90deg);}
            }
            &-1 {
                &::before {left: -1.066667rem; top: 1.6rem;}
                &::after {width: .2rem; height: .2rem; border: 1px solid #333333; background-color: #ffffff; border-radius: 50%;
                    top: 1.5rem; left: -0.666667rem;
                }
            }
        }
      }
      .date {text-align: center;}
  }
  &.black { background-color: #000000; color: #ffffff;
    .header {border-color: #ffffff;
        em {background-color: #ffffff;}
    }
    .content {
        .note::before, .note::after {background-color: #ffffff; }
        .note-1::after {border-color: #ffffff; background-color: #000000;}
    }
  }
}
</style>
