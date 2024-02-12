import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import puma from "./assets/puma.png";
import Footer from "./components/Footer";
// import Child from "./components/Child";

function App() {
  const data = [
    {
      title: "MELO  LAB MB.03 Men Basketball Shoes",
      price: "RS. 1799",
      trending: "Jumpers",
      img: puma,
    },
    {
      title: "MELO  LAB MB.03 Men Basketball Shoes",
      price: "RS. 4199",
      trending: "Sneakers",
      img: puma,
    },
    {
      title: "MELO  LAB MB.03 Men Basketball Shoes",
      price: "RS. 3299",
      trending: "Slippers",
      img: puma,
    },
    {
      title: "MELO  LAB MB.03 Men Basketball Shoes",
      price: "RS. 2899",
      trending: "Casual",
      img: puma,
    },
    {
      title: "MELO  LAB MB.03 Men Basketball Shoes",
      price: "RS. 5899",
      trending: "Sports",
      img: puma,
    },
  ];
  {
    data.map(({ img, title, price, trending }, index) => (
      <Hero
        key={index}
        images={img}
        title={title}
        price={price}
        trending={trending}
      />
    ));
  }
  return (
    <>
    
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        {data.map((product, index) => (
          <Hero
            key={index}
            images={product.img}
            title={product.title}
            price={product.price}
            trending={product.trending}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
