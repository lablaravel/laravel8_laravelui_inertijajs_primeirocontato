<template>
    <div id="app">
       O seu e-mail cadastrado {{ user.email}}

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
