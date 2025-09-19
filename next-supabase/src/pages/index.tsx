import { useEffect, useState } from "react";
import type IMenu from "../types/menu";
import supabase from "../lib/db";

const Home = () => {
  const [menus, setMenus] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const { data, error } = await supabase.from('menus').select('*');

      if(error) console.log('error:', error);
      else setMenus(data);
    }

    fetchMenus();
  }, [supabase]);

  console.log(menus);
  
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;