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
          <p>Popular</p>
        <h2>Topics</h2>
          <p>Gaming</p>
          <p>Sports</p>
          <p>Business, Economics, and Finance</p>
          <p>Crypto</p>
          <p>Television</p>
          <p>Celebrity</p>
          <p>More Topics</p>
      </header>
      <header className='App-header'>
        <h1>RB Main</h1>
      </header>
    </div>
  );
}

export default App;
