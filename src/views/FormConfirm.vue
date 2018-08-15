<template>
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
										:value='name1' 
										class="input-width-small" 
										type="text" 
										disabled>
								</div>
								<div class="input-width-small">
									<input 
										:value='name2' 
										class="input-width-small" 
										type="text" 
										disabled>
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
										:value='age' 
										type="number" 
										disabled>
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
										:value='email' 
										type="email" 
										disabled>
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
										disabled>
									</textarea>
								</div>
							</dd>
						</div>
					</dl>
					<div class="button-box">
						<button 
							id="return"
							type="button" 
							@click="back">戻る</button>
						<button 
							id="submit"
							type="button" 
							@click="submit">送信</button>
					</div>
				</form>
			</div>
		</section>
	</transition-group>
  
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      name1() {
        return this.$store.state.Form.formItem.name1;
      },
      name2() {
        return this.$store.state.Form.formItem.name2;
      },
      age() {
        return this.$store.state.Form.formItem.age;
      },
      email() {
        return this.$store.state.Form.formItem.email;
      },
      textarea() {
        return this.$store.state.Form.formItem.textarea;
      }
    })
  },
  methods: {
    back() {
      this.$router.push('/form');
    },
    submit() {
      this.$router.push('/form/complete');
    }
  },
  data() {
    return {
      title: '送信確認'
    };
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
  display: flex;
  justify-content: center;
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

  & + button {
    margin-left: 10px;
  }
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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input[disabled],
textarea[disabled] {
  background-color: #ccc;
}
</style>
