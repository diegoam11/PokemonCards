import { configureStore } from '@reduxjs/toolkit'
import { favPokemonsSlice } from './slices/index'

export const store = configureStore({
  reducer: {
    favorites: favPokemonsSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch