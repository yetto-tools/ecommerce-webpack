import { Suspense, lazy, useEffect, useState } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./hooks/use-FechDataProducts";
import { setProducts } from "./store/slices/product-slice";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const HomeFashionTwo = lazy(() => import("./pages/home/HomeFashionTwo"));
// const HomeSelectedCategory = lazy(()=>import("./pages/home/HomeSelectedCategory"));

const HomeOnepageScroll = lazy(() => import("./pages/home/HomeOnepageScroll"));
const HomeGridBanner = lazy(() => import("./pages/home/HomeGridBanner"));

const HomeChristmas = lazy(() => import("./pages/home/HomeChristmas"));
const HomeBlackFriday = lazy(() => import("./pages/home/HomeBlackFriday"));
const HomeBlackFridayTwo = lazy(() =>
  import("./pages/home/HomeBlackFridayTwo")
);
const HomeValentinesDay = lazy(() => import("./pages/home/HomeValentinesDay"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga de datos

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        if (products) {
          dispatch(setProducts(products));
        }
      })
      .catch((error) => {
        console.error("Error al cargar productos: ", error);
      })
      .finally(() => {
        setIsLoading(false); // Actualiza el estado para indicar que la carga ha terminado
      });
  }, [dispatch]);

  // Indicador de carga
  const LoadingIndicator = (
    <div className="flone-preloader-wrapper">
      <div className="flone-preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={LoadingIndicator}>
          {isLoading ? (
            LoadingIndicator
          ) : (
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeFashionTwo />}
              />

              {/* Homepages */}
              <Route
                path={process.env.PUBLIC_URL + "/home-fashion"}
                element={<HomeFashion />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-fashion-two"}
                element={<HomeFashionTwo />}
              />

              <Route
                path={process.env.PUBLIC_URL + "/home-onepage-scroll"}
                element={<HomeOnepageScroll />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-grid-banner"}
                element={<HomeGridBanner />}
              />

              <Route
                path={process.env.PUBLIC_URL + "/home-christmas"}
                element={<HomeChristmas />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-black-friday"}
                element={<HomeBlackFriday />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-black-friday-two"}
                element={<HomeBlackFridayTwo />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-valentines-day"}
                element={<HomeValentinesDay />}
              />

              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                element={<ShopGridStandard />}
              />

              <Route
                path={process.env.PUBLIC_URL + "/collection"}
                element={<ShopGridStandard />}
              />

              <Route
                path={process.env.PUBLIC_URL + "/shop-list-standard"}
                element={<ShopListStandard />}
              />

              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                element={<ProductTabLeft />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                element={<ProductTabRight />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                element={<ProductSticky />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-slider/:id"}
                element={<ProductSlider />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                element={<ProductFixedImage />}
              />

              {/* Blog pages */}
              <Route
                path={process.env.PUBLIC_URL + "/blog-standard"}
                element={<BlogStandard />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                element={<BlogRightSidebar />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-details-standard"}
                element={<BlogDetailsStandard />}
              />

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister />}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart />}
              />
              {/* <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              /> */}
              {/* <Route
                path={process.env.PUBLIC_URL + "/compare"}
                element={<Compare />}
              /> */}
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
