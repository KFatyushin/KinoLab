<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
*,
*:before,
*:after {
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
    color: $white;

    margin: 0;
    padding: 0;
}
body {
    background: $main-bg-color;
}
a {
    text-decoration: none;
}
.container {
    max-width: 1230px;

    margin: 0 auto;
    padding: 40px 15px;
}
</style>