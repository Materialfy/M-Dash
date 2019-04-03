<template>
   <main>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
   </main>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
