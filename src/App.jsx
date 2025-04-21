import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';


import './global.css';
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          <Post
            author="Carol Barbosa"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem beatae similique quisquam ipsa,"
          />
          <Post
            author="Joao"
            content="O que vc acha desse conteudo? Curta se vc concorda!"
          />
        </main>
      </div>
    </div>
  )
}

