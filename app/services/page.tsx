"use client";

export default function ServicesPage() {
  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '4rem 0'}}>
      <div className="container">

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0A2463', marginBottom: '1rem'}}>
            My Services
          </h1>
          <p style={{fontSize: '1.125rem', color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>
            Premium, reliable & affordable digital solutions tailored to your business needs.
          </p>
        </div>


        {/* MAIN SERVICES */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem'}}>
          
          {/* SERVICE 1: WEB DEVELOPMENT */}
          <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)', borderTop: '4px solid #0A2463', transition: 'all 0.3s ease'}} className="hover:-translate-y-2 hover:shadow-xl">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌐</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#0A2463', marginBottom: '1rem'}}>
              Web Development
            </h3>
            <p style={{color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem'}}>
              Modern, fast, mobile-friendly websites & web apps — from simple business sites to complex enterprise systems.
            </p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Business / Corporate Websites</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ E-Commerce & Online Stores</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Web Apps & Dashboards</li>
              <li style={{padding: '0.4rem 0'}}>✅ CMS & Custom Systems</li>
            </ul>
            <div style={{fontWeight: 700, color: '#0A2463', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
              From KES 25,000
            </div>
            <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block'}}>
              Get Quote
            </a>
          </div>


          {/* SERVICE 2: MOBILE APPS */}
          <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)', borderTop: '4px solid #3E92CC', transition: 'all 0.3s ease'}} className="hover:-translate-y-2 hover:shadow-xl">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#3E92CC', marginBottom: '1rem'}}>
              Mobile App Development
            </h3>
            <p style={{color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem'}}>
              Cross-platform mobile apps (Android & iOS) that work smoothly on all devices — built with Flutter & modern tech.
            </p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Business & Utility Apps</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ E-Commerce Apps</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Custom Solutions</li>
              <li style={{padding: '0.4rem 0'}}>✅ Play Store / App Store Deployment</li>
            </ul>
            <div style={{fontWeight: 700, color: '#3E92CC', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
              From KES 45,000
            </div>
            <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', background: '#3E92CC'}}>
              Get Quote
            </a>
          </div>


          {/* SERVICE 3: FULL-STACK / CUSTOM */}
          <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)', borderTop: '4px solid #E9B824', transition: 'all 0.3s ease'}} className="hover:-translate-y-2 hover:shadow-xl">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚙️</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#E9B824', marginBottom: '1rem'}}>
              Full-Stack & Custom Systems
            </h3>
            <p style={{color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem'}}>
              Complete end-to-end solutions: databases, backend, APIs, automation, security & hosting — everything built together.
            </p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Database Design & Management</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ API Development & Integration</li>
              <li style={{padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Business Automation Systems</li>
              <li style={{padding: '0.4rem 0'}}>✅ Hosting, Security & Maintenance</li>
            </ul>
            <div style={{fontWeight: 700, color: '#E9B824', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
              From KES 60,000
            </div>
            <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', background: '#E9B824', color: '#1E1E2F'}}>
              Get Quote
            </a>
          </div>

        </div>


        {/* PRICING PACKAGES */}
        <div style={{marginBottom: '5rem'}}>
          <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 700, color: '#0A2463', marginBottom: '3rem'}}>
            Ready-Made Packages
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
            
            {/* BASIC */}
            <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0'}}>
              <div style={{background: '#f8fafc', padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0'}}>
                <h3 style={{fontWeight: 700, fontSize: '1.3rem', color: '#1E1E2F'}}>Basic Website</h3>
                <div style={{fontSize: '1.8rem', fontWeight: 800, color: '#0A2463', marginTop: '0.5rem'}}>KES 25,000</div>
              </div>
              <div style={{padding: '1.5rem'}}>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '0.5rem 0'}}>✅ Up to 5 Pages</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Mobile Responsive</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Contact Form</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Basic SEO Setup</li>
                  <li style={{padding: '0.5rem 0'}}>✅ 1 Month Support</li>
                </ul>
                <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', marginTop: '1.5rem'}}>
                  Choose Plan
                </a>
              </div>
            </div>


            {/* STANDARD */}
            <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(10, 36, 99, 0.15)', transform: 'scale(1.05)', border: '2px solid #0A2463', position: 'relative'}}>
              <div style={{position: 'absolute', top: 0, right: 0, background: '#0A2463', color: 'white', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 600, borderBottomLeftRadius: '8px'}}>
                POPULAR
              </div>
              <div style={{background: '#0A2463', color: 'white', padding: '1.5rem', textAlign: 'center'}}>
                <h3 style={{fontWeight: 700, fontSize: '1.3rem'}}>Business Website</h3>
                <div style={{fontSize: '1.8rem', fontWeight: 800, marginTop: '0.5rem'}}>KES 45,000</div>
              </div>
              <div style={{padding: '1.5rem'}}>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '0.5rem 0'}}>✅ Up to 10 Pages</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Mobile + Speed Optimized</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Advanced Forms & Maps</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Full SEO & Analytics</li>
                  <li style={{padding: '0.5rem 0'}}>✅ 3 Months Support & Updates</li>
                </ul>
                <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', marginTop: '1.5rem'}}>
                  Choose Plan
                </a>
              </div>
            </div>


            {/* PREMIUM */}
            <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0'}}>
              <div style={{background: '#fef3c7', padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid #fcd34d'}}>
                <h3 style={{fontWeight: 700, fontSize: '1.3rem', color: '#92400e'}}>Premium / Custom</h3>
                <div style={{fontSize: '1.8rem', fontWeight: 800, color: '#E9B824', marginTop: '0.5rem'}}>Starting KES 70K</div>
              </div>
              <div style={{padding: '1.5rem'}}>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '0.5rem 0'}}>✅ Unlimited Pages & Features</li>
                  <li style={{padding: '0.5rem 0'}}>✅ E-Commerce / Memberships</li>
                  <li style={{padding: '0.5rem 0'}}>✅ Custom Systems / Databases</li>
                  <li style={{padding: '0.5rem 0'}}>✅ High-Level Security</li>
                  <li style={{padding: '0.5rem 0'}}>✅ 6 Months Priority Support</li>
                </ul>
                <a href="/contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', marginTop: '1.5rem', background: '#E9B824', color: '#1E1E2F'}}>
                  Discuss Project
                </a>
              </div>
            </div>

          </div>
        </div>


        {/* ADDITIONAL SERVICES */}
        <div style={{background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)'}}>
          <h2 style={{textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#0A2463', marginBottom: '2rem'}}>
            Additional Services
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
            
            {[
              {name: 'Website Maintenance', price: 'KES 5,000 / month'},
              {name: 'Domain & Hosting Setup', price: 'KES 8,000 one-time'},
              {name: 'SEO Optimization', price: 'KES 15,000'},
              {name: 'UI/UX Design', price: 'KES 12,000'},
              {name: 'Bug Fix / Repair', price: 'KES 3,000+'},
              {name: 'Data Migration', price: 'KES 10,000+'}
            ].map((item, i) => (
              <div key={i} style={{padding: '1rem', background: '#f8fafc', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontWeight: 500}}>{item.name}</span>
                <span style={{fontWeight: 700, color: '#0A2463', fontSize: '0.9rem'}}>{item.price}</span>
              </div>
            ))}

          </div>
        </div>


        {/* CTA */}
        <div style={{textAlign: 'center', marginTop: '5rem'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 700, color: '#0A2463', marginBottom: '1rem'}}>
            Ready to Start Your Project?
          </h2>
          <p style={{color: '#64748b', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            Get in touch today — free consultation & clear quotation, no hidden costs.
          </p>
          <a href="/contact" className="btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>
            Contact Me Now
          </a>
        </div>

      </div>
    </div>
  );
}