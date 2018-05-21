<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Rate</div>
      <div class="page__desc">星级评分</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells__title">点击评分</div>
      <div class="weui-cells__title">{{rateScore}}</div>
      <div class="weui-rate-wrap">
        <ul class="weui-rate">
          <li class="weui-rate-item" v-for="n in max" :key="index" :class="{'weui-rate-item-active' : index <= tempValue}" :data-index='index' @click="selectRate">
            <div class="weui-rate-item-def"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 5,
      rateScore: '',
      rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般，还需改善', '比较满意，仍可改善', '非常满意,无可挑剔'],
      tempValue: 3
    }
  },
  methods: {
    selectRate(e) {
      this.tempValue = e.mp.currentTarget.dataset.index;
      this.rateScore = this.rateScoreDesc[this.tempValue];
    }
  }
}
</script>

<style>
.weui-rate-wrap {
  margin: 30px 15px;
}
.weui-rate {
  display: flex;
}
.weui-rate-item {
  position: relative;
  width: 32px;
  height: 32px;
  flex: 0 1 auto;
  margin-right: 6px;
}
.weui-rate-item .weui-rate-item-def {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAsVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHx8cAAADt7e2ysrJ6enoAAADu7u7MzMzBwcGHh4cAAAAAAADa2trS0tLExMS+vr42NjYAAADv7+/r6+vq6uro6Ojm5ubKysq8vLwAAADr6+vf39/c3NzPz8+1tbWrq6vo6Ojm5ubOzs6vr6+RkZHj4+Pi4uLV1dW4uLienp6ampplZWVWVlbv7+8EiCYnAAAAOnRSTlMAPCsDJgsGOg4hNyMapgj3jGQX/K2eah4Sx7eim0ow/fHv6uGqlzTz0820j4Xo5LGJcNzYvZR7eFpV7G3f4gAAAcpJREFUSMeVVulyskAQdBZwWQ4F5FREjUeiMdd3JvP+DxZCUVskzMrSf+mu3pqZnmGigG1PxoGxcXw7DK1xBsvLKAsLcANjLMwXxNjU589gg7iAmb7BAWv4rr7BAmvMYapr4GODlabF9MugseB6Fu4KW5SZnsEcW2y5oSEQCUocNSwMfo8ST86wRVZiB4/ewPtzj++6gr3j2bSJYUcuc9Zvj3v8hl9BunaYG3VkhhWJmpq+xucdkrg7H16/ZCKyapmA8OoXdziIp8K/hiDqQQjuURPbwGwKHzzr8feBmDTw4EGH/wCyxhEUw/wCoolEDn+G+EvIv60V/nKbH3P7x55wDrf4vmP1cnlK1PzkNCPmqCpV/GNFRs+oLor3MMWQWyEt+FBF2wtowb9ctV6WiicJheC0V8xEpUgzII050IL8DRVQHJeM7px6FbBCOXj0qeDbDmfXzffziVzy753YHx3n2Mn5mmpddJXRLXlmGBkvZdj/U61z47aICRdGU2bBk3l7KajWVb+xxmIFrvSfurBqbsWZUW2rP238li4lJhw2tSsnbn+KGIM569XChJhsnff3AozsqMVgGfRbx1JJ77uztN860775syIFn72pvWujU85XAAAAAElFTkSuQmCC);
}
.weui-rate-item-active .weui-rate-item-def {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAilBMVEUAAAD/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyoEd/G7AAAALXRSTlMA+fUzFQ/vioT9vJE9tqNmLRsL2KuYe005JiID6ebhoJtxbF/qzMSxWx9FQgn3q32nAAABYUlEQVRIx5XV2XKDMAwFUJt9h5BAyL5vbe///14zNMShWNg+T8wgwSAZiRGShJmJUrN4G7CNEm7AzCS+ABAuDBJmeMr04xchnvhSO2GHVqUbv+Ro8YlmQoUXXy9+wrsEy9FKiPEW6MQ7lkjwXKbm40Ot9wJh/aNMCNBzVDz+++ihZ5Mn8lK5TR5Ha0htojhvxOeX9slPt1Dapv7JLhnzQxgIfbbaw0C1EnVREp0/QNOBvZw4NPA7e5tbULLmvbnlQcFrWI+9xqhNMfgvR3s3fUh+tClIF0d6nK4gRC41UAkPJpeDMCfnF4EaN+RXX+XxLt3klTThCwRqudQgUKMgBYFaFR5IU+kWwafzGZ9kR+MOwavLsvYUrYtFFQO3LXNgjY7xSxcev9/vxLw7fsP48u8erya9M7/nVOuSdk5ly0EtsnbSFUwQs2ZWSLf8DUAu2eWpzQh2hB37L2vYiGTfXf0Cn7ynb0Flqc0AAAAASUVORK5CYII=);
}
</style>
