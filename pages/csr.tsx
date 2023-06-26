import { useEffect, useState } from "react";
import ListOld from "components/ListOld";
import Nav from "components/Nav/Nav";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";

export default function Csr() {

  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nunc, eleifend a nisl efficitur, viverra auctor eros. Sed diam diam, tincidunt ut ex a, accumsan vehicula ex. Nam bibendum dui id dignissim consequat. In iaculis magna eu feugiat auctor. Nulla venenatis, mi et finibus dictum, risus tortor dapibus odio, et viverra tellus mauris ac neque. Vestibulum a tellus gravida.';

      const data = [];

      for (let i = 0; i < 30; i++) {
        data.push({
          image: "https://placehold.co/300x200",
          title: `List item ${i + 1}`,
          description
        });

      }

      await new Promise((resolve) => {
        setTimeout(() => resolve('done'), 3000);
      });

      setData(data);

    };

    getData();
  }, []);



  return (
    <section style={{ display: "flex", height: "100vh" }}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div style={{ flexBasis: "200px", height: "100%" }}>
        <NavigationMenu />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flexBasis: "50px" }}><Nav /></div>
        <div style={{ flex: 1, backgroundColor: "lightBlue" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexDirection: "column" }}>
            {data.length ? <ListOld data={data} /> : <h1>Loading client side...</h1>}
          </div>
        </div>
      </div>
    </section>
  )
}
