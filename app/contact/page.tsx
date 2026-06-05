"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hello Daniel!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AService Needed: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/254796194757?text=${whatsappText}`, "_blank");
  };

  return (
    <div style={{background: '#F8F9FC', minHeight: '100vh', padding: '4rem 0'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0A2463', marginBottom: '1rem'}}>
            Get In Touch
          </h1>
          <p style={{fontSize: '1.125rem', color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>
            Ready to start your project? Call, message or fill the form — I reply fast!
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem'}}>
          <div>
            <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)', marginBottom: '2rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 700, color: '#0A2463', marginBottom: '2rem'}}>
                Contact Information
              </h2>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(10, 36, 99, 0.05)', borderRadius: '8px'}}>
                <span style={{fontSize: '1.5rem'}}>📞</span>
                <div>
                  <div style={{fontWeight: 600, color: '#1E1E2F'}}>Phone / WhatsApp</div>
                  <div style={{color: '#0A2463', fontWeight: 700}}>0796 194 757</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(10, 36, 99, 0.05)', borderRadius: '8px'}}>
                <span style={{fontSize: '1.5rem'}}>📍</span>
                <div>
                  <div style={{fontWeight: 600, color: '#1E1E2F'}}>Location</div>
                  <div style={{color: '#475569'}}>Nairobi, Kenya — Available Nationwide</div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(10, 36, 99, 0.05)', borderRadius: '8px'}}>
                <span style={{fontSize: '1.5rem'}}>⏰</span>
                <div>
                  <div style={{fontWeight: 600, color: '#1E1E2F'}}>Working Hours</div>
                  <div style={{color: '#475569'}}>Mon - Fri: 8:00 AM — 6:00 PM</div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/254796194757?text=Hello%20Daniel!%20I%20am%20interested%20in%20your%20services." 
              target="_blank"
              style={{display: 'block', background: '#25D366', color: 'white', textAlign: 'center', padding: '1.25rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)'}}
            >
              💬 Chat Directly on WhatsApp
            </a>

            <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)', marginTop: '2rem'}}>
              <h3 style={{fontWeight: 700, color: '#0A2463', marginBottom: '1rem'}}>Why Contact Me?</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Reply within 2 hours (usually faster)</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Free consultation & advice</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9'}}>✅ Clear pricing — no hidden fees</li>
                <li style={{padding: '0.5rem 0'}}>✅ Dedicated support even after delivery</li>
              </ul>
            </div>
          </div>

          <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(10, 36, 99, 0.1)'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 700, color: '#0A2463', marginBottom: '2rem'}}>
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem'}}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{width: '100%', padding: '0.875rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem'}}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem'}}>
                  Your Email
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{width: '100%', padding: '0.875rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem'}}
                  placeholder="e.g. john@example.com"
                />
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem'}}>
                  Service You Need
                </label>
                <select 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  style={{width: '100%', padding: '0.875rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white'}}
                >
                  <option value="">— Select Service —</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Full-Stack / Custom System">Full-Stack / Custom System</option>
                  <option value="Maintenance / Support">Maintenance / Support</option>
                  <option value="Other / Consultation">Other / Consultation</option>
                </select>
              </div>
              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem'}}>
                  Your Message
                </label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{width: '100%', padding: '0.875rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem', resize: 'vertical'}}
                  placeholder="Tell me about your project, ideas or questions..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="btn-primary"
                style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: 'pointer'}}
              >
                🚀 Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}