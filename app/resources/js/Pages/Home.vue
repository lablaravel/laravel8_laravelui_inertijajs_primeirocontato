<template>
    <div id="app">
       O seu e-mail é {{ user }}

    </div>
</template>

<script>

export default {
   props: {
       user: String
   }
};

</script>

<style>

</style>
