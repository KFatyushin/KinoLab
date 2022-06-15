<template>
    <div class="movie-item" @click="$router.push(`/${movie.filmId}`)"> <!-- go to movie page -->
        <div class="movie-item__img">
            <img :src="movie.posterUrlPreview">
        </div>

        <div class="movie-item__title">
            {{ movie.nameRu }}
        </div>

        <rating class="movie-item__rating" v-if="Number(movie.rating)" :rating-num="movie.rating"/>
    </div>
</template>

<script>
import Rating from "@/components/Rating";

export default {
    components: {Rating},
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped lang="scss">
.movie-item {
    min-height: 400px;
    background: #D9D9D9;

    position: relative;

    cursor: pointer;

    &__img {
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    &__title {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $ui-color;

        font-size: 15px;
        letter-spacing: 1.1px;
        text-align: center;

        padding: 0 20px;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        transition: background-color .3s;
    }
    &:hover &__title {
        background: $ui-color-active;
    }

    &__rating {
        position: absolute;
        top: 15px;
        right: -10px;
    }

    @media (max-width: $large) {
        min-height: 350px;

        &__title {
            font-size: 14px;
        }
    }

    @media (max-width: $large) {

        &__title {
            font-size: 15px;
        }
    }
}
</style>