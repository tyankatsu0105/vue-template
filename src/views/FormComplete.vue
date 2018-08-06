<template>
  <div>
    <transition-group appear>
      <h1 class="main-heading" key="heading">{{title}}</h1>

      <section class="section-gutter" key="section">
        <div class="container">
          <p>
            お問い合わせありがとうございます。<br>
            引き続き株式会社ほうれん草をよろしくお願いいたします。
          </p>

          <div class="button-box">
            <router-link to="/" class="button">
              トップに戻る
            </router-link>
          </div>
        </div>
    </section>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: '送信完了'
    };
  }
};
</script>

<style lang='scss' scoped>
.section-gutter {
  margin-top: 30px;
  font-size: 1.4rem;
}
p {
  text-align: center;
}
.button-box {
  text-align: center;
}
.button {
  display: inline-block;
  width: 180px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
    border-color: #000;
    outline: 0;
    box-shadow: $box-shadow-default;
  }
}
</style>
