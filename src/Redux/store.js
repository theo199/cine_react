import { createStore, combineReducers } from 'redux'
import Movies from '../Services/Movies'

const globalState = {
    movies: Movies,
    // movies_count: Movies.length
}

function global (state = globalState, action) {

    switch(action.type) {

        case 'ADD_MOVIE':
            let movie = state.movies
            let addmovie = action.titre
            console.log(addmovie)
            movie.push(addmovie)
            break
        case 'DELETE_MOVIE':
            let movies = state.movies
            movies.splice(action.id, 1)

            return { ...state, movies: movies }
            break

        default:
            return state
            break

    }

}

const store = createStore(combineReducers({
    global: global
}))

export default store
