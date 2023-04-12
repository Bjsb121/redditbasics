import './App.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

function App() {
  return (
    <div className='App'>
      <header className='App-topheader'>
        <h1>Reddit Basics</h1>
        <input type='text' placeholder='    Search Reddit' className='search-bar'></input>
      </header>
      <header className='App-sideheader'>
        <h2>Feeds</h2>
          <a href='#'><p>Popular</p></a>
        <h2>Topics</h2>
          <a href='#'><p>Gaming</p></a>
          <a href='#'><p>Sports</p></a>
          <a href='#'><p>Business, Economics, and Finance</p></a>
          <a href='#'><p>Crypto</p></a>
          <a href='#'><p>Television</p></a>
          <a href='#'><p>Celebrity</p></a>
          <a href='#'><p>More Topics</p></a>
      </header>
      <section className='App-main'>
        <div>
          <p className='post-title'>
            Post Titlesjhshjfosho
          </p>
          <img className='post-img' src='https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg'></img>
          <div className='post-votes'></div>
          <p className='post-author'></p>
          <p className='post-time'></p>
          <div className='post-comments'></div>
        </div>
      </section>
    </div>
  );
}

export default App;
