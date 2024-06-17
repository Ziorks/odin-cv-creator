import Header from "./Header";
import Footer from "./Footer";
import LivePreview from "./LivePreview";
import FormContainer from "./FormContainer";
import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <FormContainer />
        <LivePreview />
      </main>
      <Footer />
    </>
  );
}

export default App;
