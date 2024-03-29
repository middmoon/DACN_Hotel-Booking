import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {
    persistStore,
    pesistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key : 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({    auth: authReducer  });
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    }),
})

export let persistor = persistStore(store)