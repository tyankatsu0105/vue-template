<template>
  <header class="global-header">
    <div class="container">
      <nav class="global-nav">
        <ul class="global-nav-list">
          <li class="global-nav-list__item">
            <router-link to='/'>Home</router-link>
          </li>
          <li class="global-nav-list__item">
            <router-link to='/about'>About</router-link>
          </li>
          <li class="global-nav-list__item">
            <router-link to='/form'>Form</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped lang='scss'>
.global-header {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 1.6rem;
}

.global-nav-list {
  display: flex;
  justify-content: center;
}
.global-nav-list__item {
  padding: 0 10px;
  a {
    position: relative;
    padding: 0 10px;

    &::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      content: '';
      background-color: transparent;
      opacity: 0;
      transition: background-color $tst-heavy;
    }
  }
  .router-link-exact-active {
    &::after {
      background-color: #f00;
      opacity: 1;
    }
  }
}
.global-nav-list__item + .global-nav-list__item {
  border-left: 1px solid #000;
}
</style>
