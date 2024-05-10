"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => setMenuItems(menuItems));
    });
  }, []);
  
  return (
    <section className="mt-8">
      {categories?.length > 0 &&
        categories.map((c) => {
          console.log("Category:", c);
          const filteredMenuItems = menuItems.filter((item) => item.category === c._id);
          console.log("Filtered Menu Items:", filteredMenuItems);
          return (
            <div key={c._id}>
              <div className="text-center">
                <SectionHeaders mainHeader={c.name} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
                {filteredMenuItems.map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
              </div>
            </div>
          );
        })}
    </section>
  );
}
