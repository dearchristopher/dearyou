import { Hero } from "./components/hero"

function App() {
  return (
    <>
      <Hero
        video={true}
        youtubeId="vbsMxqJWuKY"
        bgImage="/assets/2328_art.jpg"
        ctaHref="https://sl.cmdshft.com/2328"
        ctaLabel="Stream Now"
      />
      <div>

        {/* <section className="tagline special-elite-regular">
          <h2>
            This room is home
            <br />
            looking through the front door
          </h2>
        </section> */}

       <section className="lyric special-elite-regular">
        {/* <p>
          It's been a while. We're a little older now, still finding our way through life since we last talked. Dear You has always been our outlet to pour our energy, our friendships, our stories, our laughter, and sometimes even our struggles. It was such a steady force for us, which made walking away harder than we could ever explain.
        </p>
        
        <p>
          We know we never really gave you that explanation, and that's something we've carried with us. We've been writing again, and pouring everything we have into something bigger. And now, we'd love to share it with you.
        </p>
        
        <p>
          We hope you'll have us back. Let's walk through this next chapter together.
        </p>
        
        <p>
          It's time to come home. 
          8/29/25 
        </p> */}
        <div className='merch-wrapper'>
          <img 
            src="/assets/shop.png" 
            alt="Click to visit the Dear You shop" 
            title="Click to visit the Dear You shop"
            onClick={() => window.open('https://shop.dearyoutx.com', '_blank')}
            style={{ cursor: 'pointer', width: '100%', maxWidth: '720px', height: 'auto' }}
          />
        </div>
      </section>
  
      <section className="copyright special-elite-regular">
        <p>You found the bottom. Are you looking for the shop? <a href="https://shop.dearyoutx.com" target="_blank" rel="noopener noreferrer">Click Here</a></p>
        <p>Copyright Dear You 2025.</p>
      </section>
     </div>
    </>
  )
}

export default App
