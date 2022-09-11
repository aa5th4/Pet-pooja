import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
const Navigation = () => {
  //const productsInCart = useSelector(cartProducts);

  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            <Footer /> */}
    </BrowserRouter>
  );
};

export default Navigation;
