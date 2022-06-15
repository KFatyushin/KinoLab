<template>
    <div class="loader" v-if="isLoading">
        <div class="loader__wrap">
            <div class="loader__filmstrip"></div>
            <div class="loader__text">Loading</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean
        }
    }
}
</script>

<style scoped lang="scss">
.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $main-bg-color;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &__wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__filmstrip {
        width: 56px;
        height: 70px;
        background: $white;

        position: relative;
        z-index: -1;

        &:before, &:after {
            content: '';

            height: 120%;
            border-left: 5px dashed $main-bg-color;

            position: absolute;

            animation: roll 20ms infinite;
        }
        &:before {
            left: 5px;
        }
        &:after {
            right: 5px;
        }
    }
    &__text {
        font-size: 15px;

        margin-top: 7px;
    }
}

@keyframes roll {
    0% {top: 0;}
    100% {top: -15px;}
}
</style>