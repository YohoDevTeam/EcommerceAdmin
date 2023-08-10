import "./App.css";
import {
  Business,
  Contacts,
  Expenses,
  Onboarding,
  Overview,
  Projects,
  Reports,
  Sales,
  Transactions,
  Authentication,
  SignIn,
  SignUp,
  Document,
  Deals,
  Invoices,
  Companies,
  Message,
  Calender
} from "../src/pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/Companies" element={<Companies />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/Calender" element={<Calender />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Expenses" element={<Expenses />} />
      <Route path="/Onboarding" element={<Onboarding />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Sales" element={<Sales />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/Document" element={<Document />} />
      <Route path="/Transactions" element={<Transactions />} />
      <Route path="/Authentication" element={<Authentication />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default App;
