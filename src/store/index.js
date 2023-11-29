import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/TrainerName.slice";

const store = configureStore ({
    reducer: {
        trainerName
    }
})

export default store 