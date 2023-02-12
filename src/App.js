import "./App.css";
import Meni from "./components/Meni";
import Prodavnica from "./components/Prodavnica";
import Korpa from "./components/Korpa";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //cartnum je promenljiva cija je vrednost prvo 0, setcartnum menja vrednost promenljive cartnum
  const [cartNum, setCartNum] = useState(0);
  //cartprod je prvo prazan obj zato sto nisi nista prvo dodao, ali kada se doda setcartnum menja vrednost na tu doadtu
  const [cartProducts, setCartProducts] = useState([]);
  //useState je hook koji se stalno renderuje
  const [krofne] = useState([
    {
      id: 1,
      title: "Choco Mrvica",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/choco-mrvica.png",
      description:
        "Krckavi ukus čokolade i oreo keksa. Za dobar ukus nugat fil, za još bolji prelivena nutela i čoko testo koje ovu krofnu čini pravom čokoladnom bombom.",
      price: 180,
      amount: 0,
    },
    {
      id: 2,
      title: "Spiced Cookie",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/spiced-1.png",
      description:
        "Da li i vas Nova godina asocira na miris cimeta i kolačića iz rerne. Unesite u vaš dom miris krofne sa kremom od keksa i cimeta, belom čokoladom i špekulas mlevenog Lotus keksa. Dostupna je od 24. novembra do 15. februara.",
      price: 200,
      amount: 0,
    },
    {
      id: 3,
      title: "Truffle",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/truffle.png",
      description:
        "Fin ukus čokolade i slatke pavlake izdvajaju ovu krofnu od svih ostalih. Nežna tekstura Truffle čokolade sa malinama i čoko testom za prave hedoniste.",
      price: 220,
      amount: 0,
    },
    {
      id: 4,
      title: "Krofnaelo",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/krofnaelo.png",
      description:
        "Krofna prelivena ukusnom belom čokoladom, sa sitno seckanim lešnicima i kokosom, će te podsetiti na more, sunce i plaže. Zatvori oči i uživaj!",
      price: 130,
      amount: 0,
    },
    {
      id: 5,
      title: "Twiksolina",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/tviksolina.png",
      description:
        "Nekada je teško odabrati samo jednu, a još teže je ne podeliti svoju krofnu sa nekim koga volite. Mi smo smislili sjajno rešenje. Nutelu smo pomešali sa karamel topingom i karamelizovanim kikirikijem, i podelivši levu i desnu stranu tviksom osmislili tviksolinu. Savršenu krofnu za uživanje u dvoje.",
      price: 180,
      amount: 0,
    },
    {
      id: 6,
      title: "Cherry on top",
      url: "https://slatkoteka.rs/wp-content/uploads/2020/11/cherry-on-top.png",
      description:
        "Neodoljiva kombinacija mlečne čokolade, posuta čoko listićima, punjena belim kinder filom i višnjama i kandiranom trešnjom na vrhu.",
      price: 180,
      amount: 0,
    },
  ]);
  function refreshKorpa() {
    let newProducts = krofne.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    //setuje vrednost cartnum na povecava za jedan 
    setCartNum(cartNum + 1);
    krofne.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
      console.log(prod.amount);
    });
    refreshKorpa();
  }
  //Obrisi proizvod
  function removeProduct(title, id) {
    krofne.forEach((prod) => {
      if (prod.id === id) {
        if (prod.amount > 0) {
          prod.amount--;
          setCartNum(cartNum - 1);
        }
      }
    });
    refreshKorpa();
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/prodavnica"
          element={
            <>
              <Meni cartNum={cartNum} isHome={0} isShop={1} />,
              <Prodavnica
                krofne={krofne}
                onAdd={addProduct}
                onRemove={removeProduct}
              />
            </>
          }
        />
        <Route path="/" element={<Meni cartNum={cartNum} isHome={1} />} />
        <Route
          path="/korpa"
          element={
            <>
              <Meni cartNum={cartNum} isHome={0} />,
              <Korpa krofne={cartProducts} onRemove={removeProduct} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
