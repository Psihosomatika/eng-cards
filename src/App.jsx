import "./App.css";
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import AllWordsButton from "./components/allwordsbutton/AllWordsButton";
import LoginForm from "./components/navigation/loginform/LoginForm.jsx";
import RegisterForm from "./components/navigation/registerform/RegisterForm.jsx";
import Main from "./components/main/Main.jsx";
import NewWord from "./components/newword/NewWord.jsx";
import Missing from "./components/missingpage/Missing.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllWordsButton />} />
          <Route path="/main" element={<Main />} />
          <Route path="/newword" element={<NewWord />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
