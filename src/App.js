import FeaturedMac from "./components/MacBookPro/FeaturedMac";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import StoreMessege from "./components/StoreMessege/StoreMessege";
function App() {
  return (
    <div className="App">
      <GlobalNav />
      <StoreMessege />
      <FeaturedMac />
    </div>
  );
}

export default App;
