<template>
    <router-link class="return" to="/">
        <span>Вернуться</span>
    </router-link>

    <div class="container">
        <movie-info :movie-info="movieInfo" :movie-about="movieAbout"/>

        <reviews :movie-id="movieId"/>

        <loader :is-loading="isLoading"/>
    </div>
</template>

<script>
import axios from "axios";
import Reviews from "@/components/Reviews/Reviews";
import Loader from "@/components/Loader";
import MovieInfo from "@/components/Movie/MovieInfo";

export default {
    components: {
        MovieInfo,
        Loader,
        Reviews,
    },
    data() {
        return {
            movieId: this.$route.params.id,
            movieInfo: [],
            isLoading: true,
            movieAbout: []
        }
    },
    methods: {
        async fetchMovieById() {
            try {
                const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + this.movieId, {
                    headers: {
                        'X-API-KEY': 'fe33ada0-dac7-4b35-9b0c-e912b3864608',
                        'Content-Type': 'application/json',
                    },
                })
                this.movieInfo = response.data

                this.movieAbout = {
                    'Год': response.data.year,
                    'Страна': response.data.countries.map((item) => item.country),
                    'Жанр': response.data.genres.map((item) => item.genre),
                    'Рейтинг': response.data.ratingKinopoisk.toString(),
                }
            } catch (err) {
                console.log(err)
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.fetchMovieById()
    }
}
</script>

<style scoped lang="scss">
.return {
    width: 100%;
    display: block;
    background: $black;

    font-size: 16px;
    letter-spacing: 1.2px;

    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 100;

    & span {
        display: block;
        max-width: 1200px;

        margin: 0 auto;
    }
}
</style>