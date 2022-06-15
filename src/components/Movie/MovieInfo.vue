<template>
    <div class="movie-info">
        <div class="movie-info__img">
            <img :src="movieInfo.posterUrl">
        </div>

        <div class="movie-info__content">
            <h1 class="movie-info__title">
                {{ movieInfo.nameRu }}
            </h1>

            <div class="movie-info__desc">
                <p>
                    {{ movieInfo.description }}
                </p>
            </div>

            <movie-about :movie-about="movieAbout"/>
        </div>
    </div>
</template>

<script>
import MovieAbout from "@/components/Movie/MovieAbout";
export default {
    components: {MovieAbout},
    props: {
        movieInfo: {
            type: Object,
            required: true,
        },
        movieAbout: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped lang="scss">
.movie-info {
    display: flex;

    &__img {
        width: 100%;
        max-width: 400px;
        min-height: 400px;
        align-self: flex-start;
        background: $black;

        & img {
            width: 100%;
            vertical-align: middle;
        }
    }

    &__content {
        align-self: flex-start;
        background: $black;
        width: 100%;

        margin-left: 40px;
        padding: 30px 40px;
        position: relative;
    }

    &__title {
        font-size: 25px;
        line-height: 130%;
        letter-spacing: 1.5px;

        margin-bottom: 25px;
    }

    &__desc {
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 1.1px;

        margin-bottom: 40px;
    }

    @media (max-width: $large) {
        &__content {
            margin-left: 30px;
        }
    }

    @media (max-width: $medium) {
        &__img {
            max-width: 340px;
            min-height: 300px;
        }

        &__content {
            padding: 30px;
        }
    }

    @media (max-width: $small) {

        &__content {
            padding: 20px 25px;
        }

        &__img {
            max-width: 280px;
        }

        &__title {
            font-size: 20px;

            margin-bottom: 15px;
        }

        &__desc {
            margin-bottom: 30px;
        }
    }

    @media (max-width: $ex-small) {
        display: block;

        &__wrap {
            display: flex;
        }

        &__img {
            max-width: 400px;
            min-height: 400px;

            margin: 0 auto;
        }

        &__content {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
</style>