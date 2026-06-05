"use client";

export default function AboutPage() {
  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '4rem 0'}}>
      <div className="container">

        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0A2463', marginBottom: '1rem'}}>
            About Gateway Web & App Development
          </h1>
          <p style={{fontSize: '1.125rem', color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>
            Professional Full-Stack Developer | Certified IT Expert | Based in Nairobi, Kenya
          </p>
        </div>


        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)'}}>
          
          {/* ✅ YOUR PHOTO HERE */}
          <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', inset: '-8px', background: 'linear-gradient(135deg, #0A2463, #3E92CC, #E9B824)', borderRadius: '12px', filter: 'blur(12px)', opacity: 0.4}}></div>
            <img 
              src="/profile.png" 
              alt="Daniel - Full Stack Developer"
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                border: '6px solid white',
                display: 'block'
              }}
            />
          </div>


          <div style={{color: '#1E1E2F'}}>
            <h2 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: '#0A2463'}}>
              Hi, I'm Daniel — Your Trusted Tech Partner
            </h2>

            <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', color: '#475569'}}>
              I am a fully qualified IT professional holding a <strong style={{color: '#0A2463'}}>Higher Diploma in Information Technology</strong> from Tindiret Technical & Vocational College. With years of hands-on experience, I specialize in building high-performance, secure, and scalable digital solutions.
            </p>

            <p style={{fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem', color: '#475569'}}>
              I don't just write code — I build solutions that grow your business. From simple websites to complex enterprise systems and mobile apps, I handle every layer: <strong>Frontend, Backend, Databases, Security & Hosting</strong>.
            </p>


            <div style={{background: 'rgba(10, 36, 99, 0.08)', padding: '1rem 1.5rem', borderRadius: '8px', borderLeft: '4px solid #E9B824', marginBottom: '2rem'}}>
              <p style={{fontWeight: 600, color: '#0A2463', margin: 0}}>🎓 Certified Higher Diploma IT Professional</p>
              <p style={{fontSize: '0.875rem', color: '#475569', margin: '0.25rem 0 0 0'}}>Proven academic & practical expertise — international standards</p>
            </div>


            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href="/contact" style={{background: '#0A2463', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>
                Start Your Project
              </a>
              <a href="/services" style={{background: '#E9B824', color: '#1E1E2F', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>
                View Services
              </a>
            </div>
          </div>
        </div>


        {/* SKILLS SECTION */}
        <div style={{marginTop: '5rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '1.8rem', fontWeight: 700, color: '#0A2463'}}>My Full Stack Skills & Technologies</h2>
            <p style={{color: '#64748b'}}>Mastered every tool needed to build powerful solutions</p>
          </div>


          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem'}}>
            
            {[
              {name: 'React.js', icon: '⚛️'},
              {name: 'Next.js', icon: '▲'},
              {name: 'Flutter', icon: '📱'},
              {name: 'Node.js', icon: '🟢'},
              {name: 'PHP', icon: '🐘'},
              {name: 'Python', icon: '🐍'},
              {name: 'SQL / MySQL', icon: '🗄️'},
              {name: 'MongoDB', icon: '🍃'},
              {name: 'HTML5 / CSS3', icon: '🎨'},
              {name: 'JavaScript / TS', icon: '📜'},
              {name: 'REST APIs', icon: '🔌'},
              {name: 'Git / GitHub', icon: '🐙'},
              {name: 'UI/UX Design', icon: '✨'},
              {name: 'Cloud / Hosting', icon: '☁️'},
              {name: 'Cybersecurity', icon: '🔒'}
            ].map((skill, i) => (
              <div key={i} style={{background: 'white', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>{skill.icon}</div>
                <div style={{fontWeight: 600, color: '#1E1E2F'}}>{skill.name}</div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}