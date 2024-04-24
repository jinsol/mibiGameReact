import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import HomeView from "@/views/HomeView";
import TimesTableView from "@/views/TimesTableView";
import WordChainView from "@/views/WordChainView";
import BullsAndCowsView from "@/views/BullsAndCowsView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/timesTable" element={<TimesTableView />} />
        <Route path="/wordChain" element={<WordChainView />} />
        <Route path="/bullsAndCows" element={<BullsAndCowsView />} />
      </Route>
    </Routes>
  );
};

export default App;
