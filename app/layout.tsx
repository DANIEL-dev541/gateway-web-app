import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gateway Web & App Development",
  description: "Premium Web & App Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '1rem 0', position: 'fixed', width: '100%', top: 0, zIndex: 50}}>
          <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontWeight: 'bold', color: '#0A2463', fontSize: '1.25rem'}}>GATEWAY</div>
            <nav style={{display: 'flex', gap: '1.5rem'}} className="hidden md:flex">
              <a href="/" style={{fontWeight: 500}}>Home</a>
              <a href="/about" style={{fontWeight: 500}}>About</a>
              <a href="/services" style={{fontWeight: 500}}>Services</a>
              <a href="/contact" style={{fontWeight: 500}}>Contact</a>
            </nav>
            <a href="/contact" className="btn-secondary" style={{fontSize: '0.875rem'}}>Get Quote</a>
          </div>
        </header>

        <main style={{paddingTop: '80px', minHeight: '100vh'}}>
          {children}
        </main>

        <footer style={{background: '#0A2463', color: 'white', padding: '2.5rem 0', marginTop: '5rem'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <p>© {new Date().getFullYear()} Gateway Web & App Development — All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}