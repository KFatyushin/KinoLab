<template>
    <div class="container">
        <movie-list :movies="movies"/>

        <pagination :current-page="currentPage" :total-page="totalPage" @create="changePage"/>
    </div>

    <loader :is-loading="isLoading"/>
</template>

<script>
import MovieList from "@/components/Movie/MovieList"
import Loader from "@/components/Loader"
import Pagination from "@/components/Pagination"
import axios from 'axios'

export default {
    components: {
        Pagination,
        Loader,
        MovieList
    },
    data() {
        return {
            movies: [],
            isLoading: true,
            currentPage: 1,
            totalPage: 0,
        }
    },
    methods: {
        // Get page ID from pagination
        changePage(pageItem) {
            this.currentPage = pageItem
        },
        async fetchMovies() {
            try {
                const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
                    headers: {
                        'X-API-KEY': 'fe33ada0-dac7-4b35-9b0c-e912b3864608',
                        'Content-Type': 'application/json',
                    },
                    params: {
                        type: 'TOP_100_POPULAR_FILMS',
                        page: this.currentPage,
                    }
                })
                this.movies = response.data.films
                this.totalPage = response.data.pagesCount
            } catch (err) {
                console.log(err)
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.fetchMovies()
    },
    watch: {
        currentPage() {
            this.fetchMovies()
        }
    }
}
</script>

<style lang="scss">

</style>