import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client, Account, Databases } from "appwrite";

import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signupp";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

// 🔹 Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud endpoint
  .setProject("YOUR_PROJECT_ID"); // replace with your Appwrite project ID

// 🔹 Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
