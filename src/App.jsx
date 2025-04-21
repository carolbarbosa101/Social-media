import {Header} from './components/Header';

import {Post} from './components/Post';
import './global.css';

export function App() {
  return (
    <div>

     <Header/>
      <Post
        author="Carol Barbosa"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem beatae similique quisquam ipsa,"
      />
       <Post
        author="Joao"
        content="O que vc acha desse conteudo? Curta se vc concorda!"
      />
    </div>
  )
}

