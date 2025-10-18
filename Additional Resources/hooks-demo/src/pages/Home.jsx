import React from "react";
import Counter from "../components/Counter";
import ThemeToggle from "../components/ThemeToggle";
import FormInput from "../components/FormInput";
import Timer from "../components/Timer";
import TitleUpdater from "../components/TitleUpdater";
import UserList from "../components/UserList";

function Home() {
  return (
    <div className="container mt-4">
      <h2>React Hooks Examples</h2>
      <Counter />
      <ThemeToggle />
      <FormInput />
      <Timer />
      <TitleUpdater />
      <UserList />
    </div>
  );
}

export default Home;