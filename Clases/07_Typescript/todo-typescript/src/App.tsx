import React from "react";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">TODO List con Typescript</h1>
      <TodoApp />
    </div>
  </div>
);

export default App;
