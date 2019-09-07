<template>
    <div id="app">
        <div id="nav">
            <a href="/">
                <img alt="Vue logo" src="./assets/logo-resports.png">
            </a>

            <router-link to="/" class="navlink">Home</router-link>
            |
            <router-link to="/football" class="navlink">Football</router-link>
        </div>

        <Home />

    </div>
</template>

<script>
    import Home from './views/Home'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style>
    body, html {
        height: 80%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background-color: #f2f2f2;
        padding-top: 50px;
        height: 100%;
    }

    #nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #e5e5e5;
    }

    #nav a {
        float: left;
    }

    #nav a img {
        border-bottom: solid 1px green;
        margin-right: 20px;
    }

    #nav .navlink {
        line-height: 70px;
        text-decoration: none;
        font-size: 28px;
        padding: 3px 10px;
        color: #000000;
    }

    #nav .navlink:hover {
        background-color: #f2f2f2;
    }
</style>
