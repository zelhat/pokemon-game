import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bgImage from './assets/bg.jpg'

const App = () => {
    return (
      <>
        <Header title='This is new Title' descr='описание' />
        <Layout urlBg={bgImage} />
        <Layout colorBg='#06f8f4' />
        <Layout urlBg={bgImage} />
        <Footer />
      </>
    );
  }

  export default App;