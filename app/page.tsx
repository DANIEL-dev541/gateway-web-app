"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Animation ready
  }, []);

  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '0'}}>
      <header style={{background: 'white', padding: '1.2rem 2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          
          <div 
            style={{
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              animation: 'floatLogo 3s ease-in-out infinite'
            }}
          >
            <img 
              src="/logo.png" 
              alt="Gateway Dan - Logo"
              style={{height: '70px', width: 'auto'}}
            />
            <span style={{fontSize: '1.4rem', fontWeight: 800, color: '#0A2463', letterSpacing: '-0.5px'}}>
              Gateway Dan
            </span>
          </div>

          <nav style={{display: 'flex', gap: '2rem'}}>
            <a href="/" style={{fontWeight: 600, color: '#0A2463', textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.3s'}} onMouseOver={e => e.target.style.transform = 'translateY(-2px)'} onMouseOut={e => e.target.style.transform = 'translateY(0)'}>Home</a>
            <a href="/about" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.3s'}} onMouseOver={e => e.target.style.transform = 'translateY(-2px)'} onMouseOut={e => e.target.style.transform = 'translateY(0)'}>About</a>
            <a href="/services" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.3s'}} onMouseOver={e => e.target.style.transform = 'translateY(-2px)'} onMouseOut={e => e.target.style.transform = 'translateY(0)'}>Services</a>
            <a href="/contact" style={{fontWeight: 600, color: '#475569', textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.3s'}} onMouseOver={e => e.target.style.transform = 'translateY(-2px)'} onMouseOut={e => e.target.style.transform = 'translateY(0)'}>Contact</a>
          </nav>

        </div>
      </header>


      <div className="container" style={{padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>

        <div 
          style={{
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem', 
            alignItems: 'center', 
            marginBottom: '5rem',
            animation: 'softShake 8s ease-in-out infinite'
          }}
        >
          
          <div>
            <h1 style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0A2463', lineHeight: '1.2', marginBottom: '1.5rem'}}>
              Gateway Web & App Development
            </h1>
            <p style={{fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem'}}>
              Full-Stack Experts | Premium Websites & Mobile Apps | Nairobi, Kenya
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href="/services" style={{background: '#0A2463', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease'}} onMouseOver={e => {e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 8px 20px rgba(10, 36, 99, 0.2)'}} onMouseOut={e => {e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'}}>
                View Our Work
              </a>
              <a href="/contact" style={{background: '#E9B824', color: '#1E1E2F', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease'}} onMouseOver={e => {e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 8px 20px rgba(233, 184, 36, 0.3)'}} onMouseOut={e => {e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'}}>
                Start Your Project
              </a>
            </div>
          </div>

          <div 
            style={{
              background: 'linear-gradient(135deg, #0A2463, #3E92CC, #E9B824)', 
              borderRadius: '12px', 
              padding: '4rem 2rem', 
              textAlign: 'center', 
              color: 'white', 
              boxShadow: '0 12px 40px rgba(10, 36, 99, 0.15)',
              animation: 'pulseColor 4s ease-in-out infinite alternate'
            }}
          >
            <h2 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem'}}>Building Digital Solutions That Grow Your Business</h2>
            <p style={{opacity: 0.9}}>Trusted across Kenya — modern, fast, secure, scalable.</p>
          </div>

        </div>


        <div style={{marginBottom: '5rem'}}>
          <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 700, color: '#0A2463', marginBottom: '3rem'}}>
            What We Offer
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            
            <div 
              style={{
                background: 'white', 
                padding: '2rem', 
                borderRadius: '12px', 
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)', 
                textAlign: 'center',
                animation: 'bounceBox 6s ease-in-out infinite',
                transition: 'transform 0.3s'
              }}
              onMouseOver={e => e.target.style.transform = 'translateY(-8px) scale(1.03)'}
              onMouseOut={e => e.target.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌐</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Web Development</h3>
              <p style={{color: '#64748b'}}>Fast, modern & mobile-friendly websites & systems</p>
            </div>

            <div 
              style={{
                background: 'white', 
                padding: '2rem', 
                borderRadius: '12px', 
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)', 
                textAlign: 'center',
                animation: 'bounceBox 6s ease-in-out 0.5s infinite',
                transition: 'transform 0.3s'
              }}
              onMouseOver={e => e.target.style.transform = 'translateY(-8px) scale(1.03)'}
              onMouseOut={e => e.target.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Mobile Apps</h3>
              <p style={{color: '#64748b'}}>Cross-platform Android & iOS applications</p>
            </div>

            <div 
              style={{
                background: 'white', 
                padding: '2rem', 
                borderRadius: '12px', 
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)', 
                textAlign: 'center',
                animation: 'bounceBox 6s ease-in-out 1s infinite',
                transition: 'transform 0.3s'
              }}
              onMouseOver={e => e.target.style.transform = 'translateY(-8px) scale(1.03)'}
              onMouseOut={e => e.target.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚙️</div>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '0.5rem'}}>Custom Systems</h3>
              <p style={{color: '#64748b'}}>Databases, APIs & full business automation</p>
            </div>

          </div>
        </div>


        <div 
          style={{
            background: 'linear-gradient(135deg, #0A2463, #3E92CC)', 
            color: 'white', 
            padding: '4rem 2rem', 
            borderRadius: '16px', 
            textAlign: 'center',
            animation: 'glowPulse 3s ease-in-out infinite alternate'
          }}
        >
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '1rem'}}>Ready to Build Your Dream Project?</h2>
          <p style={{maxWidth: '600px', margin: '0 auto 1rem auto', opacity: 0.9}}>We deliver high-quality, secure and scalable solutions — trusted by businesses across Kenya.</p>
          
          <div 
            style={{
              fontSize: '1.2rem', 
              fontWeight: 600, 
              marginBottom: '1.5rem', 
              color: '#E9B824',
              display: 'inline-block',
              animation: 'shakeEmail 2.5s ease-in-out infinite'
            }}
          >
            📧 info@gatewayweb.co.ke
          </div>
          <br />

          <a href="/contact" style={{background: '#E9B824', color: '#1E1E2F', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', display: 'inline-block', transition: 'all 0.3s'}} onMouseOver={e => {e.target.style.transform = 'scale(1.08)'; e.target.style.boxShadow = '0 10px 25px rgba(233, 184, 36, 0.4)'}} onMouseOut={e => {e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'}}>
            Contact Me Today
          </a>
        </div>

      </div>


      <style jsx global>{`
        @keyframes floatLogo {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        @keyframes softShake {
          0% { transform: translateX(0); }
          25% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
        @keyframes pulseColor {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.15); }
        }
        @keyframes bounceBox {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px rgba(10, 36, 99, 0.3); }
          100% { box-shadow: 0 0 35px rgba(62, 146, 204, 0.5); }
        }
        @keyframes shakeEmail {
          0% { transform: translateX(0) rotate(0); }
          10% { transform: translateX(-2px) rotate(-1deg); }
          20% { transform: translateX(2px) rotate(1deg); }
          30% { transform: translateX(-2px) rotate(-1deg); }
          40% { transform: translateX(2px) rotate(1deg); }
          50% { transform: translateX(0) rotate(0); }
          100% { transform: translateX(0) rotate(0); }
        }
      `}</style>

    </div>
  );
}