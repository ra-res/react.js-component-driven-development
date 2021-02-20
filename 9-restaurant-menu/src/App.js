/** @format */

import { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
