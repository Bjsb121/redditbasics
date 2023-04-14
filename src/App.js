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
        <div className='post-main'>
          <h3 className='post-title'>
            I just met Jesus!
          </h3>
          <img className='post-img' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Future_of_Robotics.jpg'></img>
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
