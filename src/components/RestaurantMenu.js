import { useEffect } from "react";

const ResMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("");

    const json = await data.json();

    console.log(json);
  };

  return (
    <div className="menu">
      <h1>Name of restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default ResMenu;
