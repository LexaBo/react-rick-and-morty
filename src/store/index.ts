import { configureStore } from '@reduxjs/toolkit';
import characters from '../components/characters-grid/charactersSlice';
import character from '../components/pages/character-information/characterSlice';
import filters from '../components/filters/filtersSlice';

const store = configureStore({
    reducer: {
        characters,
        character,
        filters
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
