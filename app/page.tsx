'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#222222', lineHeight: '1.6'}}>
      
      {/* HERO SECTION */}
      <header style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e0edff 100%)', padding: '60px 20px', textAlign: 'center'}}>
        <h1 style={{fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#0a3d62', margin: '0 0 15px 0', fontWeight: 'bold'}}>
          Gateway Web & App Development
        </h1>
        <p style={{fontSize: '1.1rem', color: '#3c6382', maxWidth: '700px', margin: '0 auto 30px auto'}}>
          Full‑Stack Experts | Premium Websites & Mobile Apps | Nairobi, Kenya
        </p>
        <Link 
          href="/contact" 
          style={{backgroundColor: '#0a3d62', color: 'white', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem'}}
        >
          Start Your Project
        </Link>
      </header>


      {/* SERVICES SECTION */}
      <section style={{padding: '60px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '2rem', color: '#0a3d62', marginBottom: '50px', fontWeight: 'bold'}}>What We Offer</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          
          <div style={{background: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e8f0f8'}}>
            <div style={{fontSize: '35px', marginBottom: '15px'}}>🌐</div>
            <h3 style={{fontSize: '1.3rem', color: '#0a3d62', margin: '0 0 10px 0', fontWeight: 'bold'}}>Web Development</h3>
            <p style={{color: '#57606f', margin: 0}}>Fast, modern & mobile‑friendly websites & systems tailored for your business growth, optimized for speed and SEO.</p>
          </div>

          <div style={{background: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e8f0f8'}}>
            <div style={{fontSize: '35px', marginBottom: '15px'}}>📱</div>
            <h3 style={{fontSize: '1.3rem', color: '#0a3d62', margin: '0 0 10px 0', fontWeight: 'bold'}}>Mobile Apps</h3>
            <p style={{color: '#57606f', margin: 0}}>Cross‑platform Android & iOS applications — scalable, secure, and user‑friendly, built with Flutter & React Native.</p>
          </div>

          <div style={{background: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e8f0f8'}}>
            <div style={{fontSize: '35px', marginBottom: '15px'}}>⚙️</div>
            <h3 style={{fontSize: '1.3rem', color: '#0a3d62', margin: '0 0 10px 0', fontWeight: 'bold'}}>Custom Systems</h3>
            <p style={{color: '#57606f', margin: 0}}>Databases, APIs & full business automation to streamline your operations, manage data and improve efficiency.</p>
          </div>

        </div>
      </section>


      {/* PORTFOLIO SECTION — FULLY CORRECT */}
      <section style={{backgroundColor: '#f8fbfd', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '2rem', color: '#0a3d62', marginBottom: '50px', fontWeight: 'bold'}}>
            📂 My Live Projects & Portfolio
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '25px'}}>
            
            <div style={{background: 'white', padding: '25px 30px', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.07)', borderLeft: '4px solid #26ae60'}}>
              <h3 style={{fontSize: '1.15rem', color: '#2f3542', margin: '0 0 8px 0', fontWeight: 'bold'}}>🔹 Gateway Web App — Main Platform</h3>
              <p style={{color: '#57606f', margin: '0 0 10px 0', fontSize: '0.95rem'}}>Custom full‑stack business solution, responsive & secure, built for performance and scalability.</p>
              <a href="https://gateway-web-app-chi.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: '#26ae60', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem'}}>
                https://gateway-web-app-chi.vercel.app
              </a>
            </div>

            <div style={{background: 'white', padding: '25px 30px', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.07)', borderLeft: '4px solid #26ae60'}}>
              <h3 style={{fontSize: '1.15rem', color: '#2f3542', margin: '0 0 8px 0', fontWeight: 'bold'}}>🔹 Gateway Digital Surveys System</h3>
              <p style={{color: '#57606f', margin: '0 0 10px 0', fontSize: '0.95rem'}}>Automated data collection & reporting platform — secure, scalable, used by thousands of users.</p>
              <a href="https://gateway-digital-surveys.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: '#26ae60', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem'}}>
                https://gateway-digital-surveys.vercel.app
              </a>
            </div>

            <div style={{background: 'white', padding: '25px 30px', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.07)', borderLeft: '4px solid #26ae60'}}>
              <h3 style={{fontSize: '1.15rem', color: '#2f3542', margin: '0 0 8px 0', fontWeight: 'bold'}}>🔹 Professor Learning Platform</h3>
              <p style={{color: '#57606f', margin: '0 0 10px 0', fontSize: '0.95rem'}}>Education & content management system — built for performance, easy to manage and scale.</p>
              <a href="https://professor-lake.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: '#26ae60', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem'}}>
                https://professor-lake.vercel.app
              </a>
            </div>

            <div style={{background: 'white', padding: '25px 30px', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.07)', borderLeft: '4px solid #26ae60'}}>
              <h3 style={{fontSize: '1.15rem', color: '#2f3542', margin: '0 0 8px 0', fontWeight: 'bold'}}>🔹 Next.js Modern Web App</h3>
              <p style={{color: '#57606f', margin: '0 0 10px 0', fontSize: '0.95rem'}}>High‑speed, SEO‑friendly React/Next.js application — modern, fast, and optimized.</p>
              <a href="https://nextjs-ashy-iota-85.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: '#26ae60', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem'}}>
                https://nextjs-ashy-iota-85.vercel.app
              </a>
            </div>

          </div>

          <div style={{maxWidth: '700px', margin: '40px auto 0 auto', background: '#eaf4ff', border: '1px solid #bdd7f5', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
            <p style={{fontSize: '1rem', color: '#0a3d62', margin: '0 0 8px 0', fontWeight: '600'}}>
              🎓 Certification: Higher Diploma IT — <strong style={{color: '#26ae60', fontSize: '1.1rem'}}>DISTINCTION</strong>
            </p>
            <p style={{fontSize: '0.9rem', color: '#3c6382', margin: 0}}>
              ✅ Certified by CDACC • CBET Framework • TVET Authority Approved — Tindiret Technical College (2026)
            </p>
          </div>
        </div>
      </section>


      <section style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e0edff 100%)', padding: '60px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <h2 style={{fontSize: '1.8rem', color: '#0a3d62', margin: '0 0 15px 0', fontWeight: 'bold'}}>Ready to Build Your Dream Project?</h2>
          <p style={{color: '#3c6382', margin: '0 0 30px 0', fontSize: '1.05rem'}}>
            We deliver high‑quality, secure and scalable solutions — trusted by businesses across Kenya, Uganda, UK & USA.
          </p>
          <Link 
            href="/contact" 
            style={{backgroundColor: '#26ae60', color: 'white', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem'}}
          >
            Contact Me Today
          </Link>
          <p style={{marginTop: '20px', color: '#3c6382', fontSize: '0.95rem'}}>📧 info@gatewayweb.co.ke</p>
        </div>
      </section>

    </div>
  );
}