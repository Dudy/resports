<template>
    <div class="hello">
        <h1>Welcome to ReSports</h1>
        <p>
            Check out spoiler-free sports results here.<br>
            Get the feeling of live sports - in the repetition.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
