<template>
  <div>
    <ul>
      <li  v-for="color of colors"
  :key="color" :is="`icon-${color}`" v-on:click="console.log('kkkkkk')" :class="getClasses(color)">
  
  </li>
  <li @click="$colorMode.preference = 'light' " >LIGHT</li>
  <li @click="$colorMode.preference = 'dark' " >DARk</li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      colors: ["light", "dark"],
    };
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>