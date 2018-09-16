<template>
	<div>
		<transition-group appear>
			<h1 
				key="heading" 
				class="main-heading">{{title}}</h1>
    
			<section 
				key="section" 
				class="section-gutter">
				<div class="container">
					<form name="form">
						<dl class="form-contents-list">
							<div class="form-contents-list__item">
								<dt class="form-contents-list__heading">
									氏名
									<span class="form-contents-list__heading-label -require">必須</span>
								</dt>
								<dd class="form-contents-list__data">
									<div class="form-contents-list__data-contents-box input-width-small">
										<input 
											v-model="name1" 
											class="input-width-small" 
											type="text" 
											required 
											placeholder="山田">
										<span>入力されていません</span>
									</div>
									<div class="input-width-small">
										<input 
											v-model="name2" 
											class="input-width-small" 
											type="text" 
											required 
											placeholder="太郎">
										<span>入力されていません</span>
									</div>
								</dd>
							</div>
							<div class="form-contents-list__item">
								<dt class="form-contents-list__heading">
									年齢
									<span class="form-contents-list__heading-label -require">必須</span>
								</dt>
								<dd class="form-contents-list__data">
									<div class="form-contents-list__data-contents-box">
										<input 
											v-model.number="age" 
											type="number" 
											required>
										<span>入力されていません。</span>
									</div>
								</dd>
							</div>
							<div class="form-contents-list__item">
								<dt class="form-contents-list__heading">
									メールアドレス
									<span class="form-contents-list__heading-label -require">必須</span>
								</dt>
								<dd class="form-contents-list__data">
									<div class="form-contents-list__data-contents-box">
										<input 
											v-model="email" 
											type="email" 
											required>
										<span>入力されていないか、「@」が入っていません。</span>
									</div>
								</dd>
							</div>
							<div class="form-contents-list__item">
								<dt class="form-contents-list__heading">
									お問い合わせ内容
									<span class="form-contents-list__heading-label -require">必須</span>
								</dt>
								<dd class="form-contents-list__data">
									<div class="form-contents-list__data-contents-box">
										<textarea 
											v-model="textarea" 
											cols="30" 
											rows="10" 
											required 
											placeholder="今夜の夕食は何がいいでしょうか？">
										</textarea>
										<span>入力されていません。</span>
									</div>
								</dd>
							</div>
						</dl>
						<div class="button-box">
							<button 
								type="button" 
								@click="judgeRequiredElementsIsEmpty(); sendConfirm();">確認</button>
						</div>
					</form>
				</div>
			</section>
		</transition-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'お問い合わせ',
      submittabel: false
    };
  },
  computed: {
    name1: {
      get() {
        return this.$store.getters['Form/name1'];
      },
      set(value) {
        this.$store.commit('Form/setFormItemName1', value);
      }
    },
    name2: {
      get() {
        return this.$store.getters['Form/name2'];
      },
      set(value) {
        this.$store.commit('Form/setFormItemName2', value);
      }
    },
    age: {
      get() {
        return this.$store.getters['Form/age'];
      },
      set(value) {
        this.$store.commit('Form/setFormItemAge', value);
      }
    },
    email: {
      get() {
        return this.$store.getters['Form/email'];
      },
      set(value) {
        this.$store.commit('Form/setFormItemEmail', value);
      }
    },
    textarea: {
      get() {
        return this.$store.getters['Form/textarea'];
      },
      set(value) {
        this.$store.commit('Form/setFormItemTextarea', value);
      }
    }
  },
  methods: {
    judgeRequiredElementsIsEmpty() {
      const form = document.forms.form;
      if (form.checkValidity() === true) this.submittabel = true;

      const requiredElements = form.querySelectorAll('[required]');
      const addClass = 'empty-value';

      // 一度すべてのクラスを外す
      Array.prototype.slice.call(requiredElements).forEach(item => {
        item.classList.remove(addClass);
      });

      Array.prototype.slice
        .call(requiredElements)
        .filter(item => {
          if (item.getAttribute('type') === 'email') {
            return item.value.indexOf('@') === -1;
          }

          return item.value === '';
        })
        .forEach(item => {
          item.classList.add(addClass);
        });
    },
    sendConfirm() {
      if (this.submittabel === true) {
        this.$router.push('/form/confirm');
      }
    }
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.section-gutter {
  margin-top: 30px;
}

.form-contents-list__item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.form-contents-list__heading {
  width: 25%;
  font-size: 1.6rem;
}
.form-contents-list__heading-label {
  display: inline-block;
  padding: 3px 7px;
  &.-require {
    color: #fff;
    background-color: #b40808;
  }
}
.form-contents-list__data {
  display: flex;
  width: calc(100% - 20%);
}

.button-box {
  text-align: center;
}
.empty-value {
  background-color: #ff8585;
}
.input-width-small {
  width: 145px;
}
.form-contents-list__data-contents-box {
  margin-right: 10px;
}
form {
  padding: 30px;
  font-size: 1.4rem;
  box-shadow: $box-shadow-light;
}
button {
  width: 180px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    box-shadow: $box-shadow-default;
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
}
input,
textarea {
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

  & + span {
    display: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #d62222;
  }
}
.empty-value {
  & + span {
    display: block;
  }
}
</style>
