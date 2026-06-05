"use client";

export default function HomePage() {
  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '4rem 0'}}>
      <div className="container">

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

          {/* ✅ YOUR PHOTO HERE */}
          <div>
            <img 
              src="/profile.png" 
              alt="Daniel - Gateway Web & App Development"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(10, 36, 99, 0.15)',
                display: 'block'
              }}
            />
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