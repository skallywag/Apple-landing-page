import FeaturedPhones from "./components/FeaturedPhones/FeaturedPhones";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import StoreMessege from "./components/StoreMessege/StoreMessege";
function App() {
  return (
    <div className="App">
      <GlobalNav />
      <StoreMessege />
      <FeaturedPhones />
    </div>
  );
}

export default App;
