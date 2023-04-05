import WebsiteLayout from "./layouts/WebsiteLayout";
import ProductDetailsPage from "./pages/ProductDetails";



const App = () => {
  return (
    <div className="App">
      <WebsiteLayout>
        <ProductDetailsPage />
      </WebsiteLayout>
    </div>
  );
}

export default App;
