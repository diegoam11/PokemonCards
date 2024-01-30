import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface FavPokemon {
  id: number
  name: string,
  img: string
}

const initialState: FavPokemon[] = []

export const favPokemonsSlice = createSlice({
  name: 'favPokemons',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavPokemon>) => {
      if(state.length !== 0){
        const exist: boolean = state.some((item) => item.id === action.payload.id)
        if(!exist){
          state.push(action.payload)
        }
      } else{
        state.push(action.payload)
      }
    }
  },
})

export const {addToFavorites} = favPokemonsSlice.actions

