import {Header} from './components/Header';
import {Post} from './components/Post';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className="styles.wrapper">
        <aside></aside>
      </div>
    </div>
  )
}

