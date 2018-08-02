<template>
  <div>
    <p>{{message}}</p>
    <EditForm />
    {{$mq}}
    <transition appear>
      <div v-if="$mq === 'mobile'">
        aaaaa
      </div>
    </transition>

    <transition appear>
      <mq-layout mq="desktop"> only desktop </mq-layout>
    </transition>

  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue';

export default {
  components: {
    EditForm
  },
  computed: {
    message() {
      return this.$store.getters['EditForm/message'];
    }
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: 1s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
