import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyRouter from './router/MyRouter';
import logo from './Image/logo.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <MyRouter/>
      <Footer />
      <FloatingWhatsApp accountName="KibritBook" avatar={logo} phoneNumber = "+994 50 873 79 46" 
      chatMessage="KibritBook'a xoş gəlmisiniz🌻 Sizə necə yardımçı ola bilərəm?😊" statusMessage />
    </div>
  );
}

export default App;
