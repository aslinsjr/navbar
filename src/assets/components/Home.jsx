import './Home.css'

const Home = () => {

  const body = document.querySelector("body")

  body.style.backgroundImage = "url(/background-home-desktop.jpg)"

  return (
    <div className='home-container'>
      <h2>So, you want to travel to</h2>
      <h1>Space</h1>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
  )
}

export default Home