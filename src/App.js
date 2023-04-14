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
        {/* <button className='log-in-btn'>Log In</button> */}
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
            NEW Apple Airpods Max 👀🔥
          </h3>
          <img className='post-img' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776025000'></img>
          <p className='post-author-time'>
            <strong>Posted by:</strong> <a href='#'>u/Bjsb1215</a> <small>12 hrs ago</small>
          </p>
        </div>

        <div className='post-main'>
          <h3 className='post-title'>
            Elon says we're going to mars 🌎👋🏼
          </h3>
          <img className='post-img' src='https://nypost.com/wp-content/uploads/sites/2/2022/05/ElonMusk-Robot.jpg?quality=75&strip=all'></img>
          <p className='post-author-time'>
            <strong>Posted by:</strong> <a href='#'>u/Bjsb1215</a> <small>36 hrs ago</small>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
