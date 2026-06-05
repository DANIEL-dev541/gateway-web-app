"use client";

export default function HomePage() {
  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '0'}}>
      {/* HEADER WITH BIGGER LOGO */}
      <header style={{background: 'white', padding: '1.2rem 2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          
          {/* ✅ LOGO NOW BIGGER: 70px height, clear, sharp */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img 
              src="/logo.png" 
              alt="Gateway Dan - Logo"
              style={{height: '70px', width: 'auto'}}
            />
            <span style={{fontSize: '1.4rem', fontWeight: 800, color: '#0A2463', letterSpacing: '-0.5px'}}>
              Gateway Dan
            </span>
          </div>

          {/* NAVIGATION */}
          <nav style={{display: 'flex', gap: '2rem'}}>
            <a href="/" style={{fontWeight: 600, color: '#0A2463', textDecoration: 'none', fontSize: '1.05rem'}}>Home</a>
            <a href="/about" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem'}}>About</a>
            <a href="/services" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem'}}>Services</a>
            <a href="/contact" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem'}}>Contact</a>
          </nav>

        </div>
      </header>


      <div className="container" style={{padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>

        {/* HERO SECTION */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '5rem'}}>
          
          <div>
            <h1 style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0A2463', lineHeight: '1.2', marginBottom: '1.5rem'}}>
              Gateway Web & App Development
            </h1>
            <p style={{fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem'}}>
              Full-Stack Experts | Premium Websites & Mobile Apps | Nairobi, Kenya
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href="/services" style={{background: '#0A2463', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>
                View Our Work
              </a>
              <a href="/contact" style={{background: '#E9B824', color: '#1E1E2F', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>
                Start Your Project
              </a>
            </div>
          </div>

          <div style={{background: 'linear-gradient(135deg, #0A2463, #3E92CC, #E9B824)', borderRadius: '12px', padding: '4rem 2rem', textAlign: 'center', color: 'white', boxShadow: '0 12px 40px rgba(10, 36, 99, 0.15)'}}>
            <h2 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem'}}>Building Digital Solutions That Grow Your Business</h2>
            <p style={{opacity: 0.9}}>Trusted across Kenya — modern, fast, secure, scalable.</p>
          </div>

        </div>


        {/* SERVICES PREVIEW */}
        <div style={{marginBottom: '5rem'}}>
          <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 700, color: '#0A2463', marginBottom: '3rem'}}>
            What We Offer
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌐</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Web Development</h3>
              <p style={{color: '#64748b'}}>Fast, modern & mobile-friendly websites & systems</p>
            </div>

            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Mobile Apps</h3>
              <p style={{color: '#64748b'}}>Cross-platform Android & iOS applications</p>
            </div>

            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚙️</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Custom Systems</h3>
              <p style={{color: '#64748b'}}>Databases, APIs & full business automation</p>
            </div>

          </div>
        </div>


        {/* CTA */}
        <div style={{background: 'linear-gradient(135deg, #0A2463, #3E92CC)', color: 'white', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '1rem'}}>Ready to Build Your Dream Project?</h2>
          <p style={{maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9}}>We deliver high-quality, secure and scalable solutions — trusted by businesses across Kenya.</p>
          <a href="/contact" style={{background: '#E9B824', color: '#1E1E2F', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', display: 'inline-block'}}>
            Contact Me Today
          </a>
        </div>

      </div>
    </div>
  );
}