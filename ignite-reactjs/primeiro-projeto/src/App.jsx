import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Diego Fernandes" content="Lorem Ipsum" />
      <Post author="Gabriel Buzzi" content="Lorem Ipsum dolor sit amet" />
    </div>
  );
}
