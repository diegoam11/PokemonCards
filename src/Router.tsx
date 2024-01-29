import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Home } from "./pages/home";
import { PokemonDetail } from "./pages/pokemon";

import { Login } from "./pages/login";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/pokemon/:pokemonId" element={<PokemonDetail />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
} 