import Header from "./Header";
import Footer from "./Footer";
import LivePreview from "./LivePreview";
import InputContainer from "./InputContainer";
import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <InputContainer />
        <LivePreview />
      </main>
      <Footer />
    </>
  );
}

export default App;
