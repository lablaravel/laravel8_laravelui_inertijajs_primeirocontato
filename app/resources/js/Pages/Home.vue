<template>
    <div>
        <div>
            <b-jumbotron header="Exibindo com sucesso" lead="Usando vue-boostrap com Inertia.js">
                <p>O seu e-mail cadastrado</p>
                <b-button variant="primary" href="#">{{ user.email }}</b-button>
            </b-jumbotron>
        </div>
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
