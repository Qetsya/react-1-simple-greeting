import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Page from './components/Page'

function App() {
  return (
    <Container className="container">
      <Header />
      <Page />
      <Footer />
    </Container>
  );
}

export default App;
