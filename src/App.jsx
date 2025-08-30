import { Hero } from "./components/hero"

function App() {
  return (
    <>
      <Hero
        video={false}
        bgImage="/assets/2328_art.jpg"
        subtitle="2328"
        ctaHref="https://sl.cmdshft.com/2328"
        ctaLabel="Listen Now"
        showPlatforms={false}
        grain={true}
      />

      {/* Track highlight split: lyric + player card */}
      <section className="track" id="track">
        <div className="track__grid">
          <div className="track__lyric special-elite-regular">
            <p>
              We grew from the floor.
            </p>
          </div>
          <div className="track__player">
            <div className="track__video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/vbsMxqJWuKY"
                title=""
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Polaroid photo row */}
      <section className="polaroids" aria-label="Band photos">
        <div className="polaroid">
          <img src="/assets/jamroom.jpg" alt="Band polaroid 1" />
        </div>
        <div className="polaroid polaroid--b">
          <img src="/assets/livingroom.jpg" alt="Band polaroid 2" />
        </div>
      </section>

      {/* Horizontal photo carousel */}
      <section className="carousel" aria-label="2328 photos">
        <div className="carousel__rail">
          <img src="/assets/jamroom2.png" alt="Jam room shenanigans" />
          <img src="/assets/dystage.jpg" alt="On Stage" />
          <img src="/assets/dannychris.jpg" alt="Danny and Chris" />
          <img src="/assets/2328_art.jpg" alt="2328 artwork alt" />
        </div>
      </section>

      {/* About narrative */}
      <section className="track__lyric special-elite-regular" id="about">
        <p>
          It's been a while. We're a little older now, still finding our way through life since we last talked. Dear You has always been our outlet to pour our energy, our friendships, our stories, our laughter, and sometimes even our struggles. It was such a steady force for us, which made walking away harder than we could ever explain.
        </p>
        <p>
          We know we never really gave you that explanation, and that's something we've carried with us. We've been writing again, and pouring everything we have into something bigger. And now, we'd love to share it with you.
        </p>
        <p>
          We hope you'll have us back. Let's walk through this next chapter together.
        </p>
        <em className="special-elite-regular">It’s time to come home.</em>
      </section>

      {/* Shop link */}
      <section className="shop-section">
        <a href="https://shop.dearyoutx.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/shop.png" alt="Shop Dear You Merch" />
        </a>
      </section>

      {/* Footer with socials and simple email signup */}
      <footer className="site-footer">
        <section className="social-cta" aria-label="Follow Dear You on social media">
          <a
            className="social-btn social-btn--ig"
            href="https://instagram.com/dearyoutx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 3.8A5.2 5.2 0 1 1 6.8 13.2 5.21 5.21 0 0 1 12 7.8m0 2A3.2 3.2 0 1 0 15.2 13 3.2 3.2 0 0 0 12 9.8m5.55-4.05a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z"/></svg>
            <span>@dearyoutx</span>
          </a>
          <a
            className="social-btn social-btn--fb"
            href="https://facebook.com/dearyoutx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Facebook"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1.94 10.5h-1.26V18H10.5v-5.5H9v-2h1.5V8.65c0-1.27.6-3.25 3.25-3.25l1.38.01v2.03h-1.01c-.17 0-.41.09-.41.45V10.5h1.5Z"/></svg>
            <span>dearyoutx</span>
          </a>
        </section>
        <small className="special-elite-regular">© Dear You 2025</small>
      </footer>
    </>
  )
}

export default App
