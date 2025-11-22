import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';


// WhatsApp Button Component
const WhatsAppButton = ({ phoneNumber = "919876543210", message = "Hi! I'm interested in your worksheets for kids." }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .whatsapp-button { animation: slideIn 0.5s ease-out; }
        .whatsapp-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      <div className="whatsapp-button" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
        {showTooltip && (
          <div style={{
            position: 'absolute', bottom: '100%', right: '0', marginBottom: '0.75rem',
            backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.75rem',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)', whiteSpace: 'nowrap',
            fontSize: '0.875rem', fontWeight: 600, color: '#1f2937', border: '2px solid #25D366'
          }}>
            Chat with us on WhatsApp! 💬
            <div style={{
              position: 'absolute', bottom: '-8px', right: '20px', width: '0', height: '0',
              borderLeft: '8px solid transparent', borderRight: '8px solid transparent',
              borderTop: '8px solid #25D366'
            }}/>
          </div>
        )}

        <button
          onClick={handleClick}
          onMouseEnter={() => { setIsHovered(true); setShowTooltip(true); }}
          onMouseLeave={() => { setIsHovered(false); setShowTooltip(false); }}
          className={!isHovered ? 'whatsapp-pulse' : ''}
          style={{
            width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#25D366',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.5)',
            transition: 'all 0.3s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            position: 'relative'
          }}
        >
          <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <div style={{
            position: 'absolute', top: '2px', right: '2px', width: '20px', height: '20px',
            borderRadius: '50%', backgroundColor: '#ff4444', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem',
            fontWeight: 700, color: '#ffffff', border: '2px solid white'
          }}>1</div>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .whatsapp-button { bottom: 1.5rem !important; right: 1.5rem !important; }
          .whatsapp-button button { width: 60px !important; height: 60px !important; }
          .whatsapp-button svg { width: 35px !important; height: 35px !important; }
        }
      `}</style>
    </>
  );
};

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 40%, #e0e7ff 70%, #dbeafe 100%)', 
        padding: isMobile ? '2.5rem 1rem' : '4rem 1.5rem',
        overflow: 'hidden'
      }}>
        {!isMobile && (
          <>
            <div style={{ position: 'absolute', top: '2rem', left: '5rem', fontSize: '3rem' }}>🔒</div>
            <div style={{ position: 'absolute', top: '3rem', right: '8rem', fontSize: '2.5rem' }}>📜</div>
            <div style={{ position: 'absolute', bottom: '2rem', left: '3rem', fontSize: '2.5rem' }}>🛡️</div>
            <div style={{ position: 'absolute', bottom: '3rem', right: '5rem', fontSize: '3rem' }}>✅</div>
          </>
        )}

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 900, color: '#1f2937', marginBottom: '1rem', lineHeight: 1.1 }}>
            <span style={{ 
              background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #3b82f6 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Privacy Policy
            </span>
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto', padding: isMobile ? '0 1rem' : '0' }}>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #4c1d95 50%, #1e3a8a 100%)', padding: isMobile ? '2.5rem 1rem' : '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Policy Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)', 
            borderRadius: isMobile ? '1.5rem' : '2rem', 
            padding: isMobile ? '1.5rem' : '3rem',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
            border: '4px dashed #e9d5ff'
          }}>
            
            {/* Last Updated */}
            <div style={{ 
              background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)', 
              color: '#ffffff',
              padding: isMobile ? '0.6rem 1.25rem' : '0.75rem 1.5rem',
              borderRadius: '9999px',
              display: 'inline-block',
              fontWeight: 700,
              marginBottom: '2rem',
              fontSize: isMobile ? '0.85rem' : '0.95rem'
            }}>
              Last Updated: January 2025
            </div>

            {/* Section 1 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                1. Information We Collect
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                WowKids Worksheet collects minimal information to provide you with the best educational experience. We may collect basic usage data such as pages visited, worksheets downloaded, and time spent on our platform. We do not collect personal information from children without parental consent.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #3b82f6 0%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                2. How We Use Your Information
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem', marginBottom: '1rem' }}>
                The information we collect is used to:
              </p>
              <ul style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Improve our worksheets and educational content</li>
                <li style={{ marginBottom: '0.5rem' }}>Provide customer support and respond to inquiries</li>
                <li style={{ marginBottom: '0.5rem' }}>Analyze usage patterns to enhance user experience</li>
                <li style={{ marginBottom: '0.5rem' }}>Send educational tips and updates (with consent)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                3. Cookies and Tracking
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                We use cookies to remember your preferences and improve your browsing experience. These cookies do not store personal information and can be disabled in your browser settings. We use analytics tools to understand how visitors interact with our site, helping us create better content for children.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                4. Children's Privacy
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                We are committed to protecting children's privacy. Our website is designed for educational purposes and does not knowingly collect personal information from children under 13 without parental consent. If you believe we have inadvertently collected such information, please contact us immediately at support@wowkidsworksheet.com.
              </p>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #ec4899 0%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                5. Third-Party Services
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                We may use third-party services for analytics, hosting, and content delivery. These services have their own privacy policies and we encourage you to review them. We do not share personal information with third parties for marketing purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                6. Data Security
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure. We continuously update our security practices to ensure the safety of your data.
              </p>
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                7. Your Rights
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem', marginBottom: '1rem' }}>
                You have the right to:
              </p>
              <ul style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Access the information we have about you</li>
                <li style={{ marginBottom: '0.5rem' }}>Request correction of inaccurate data</li>
                <li style={{ marginBottom: '0.5rem' }}>Request deletion of your information</li>
                <li style={{ marginBottom: '0.5rem' }}>Opt-out of marketing communications</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                8. Changes to Privacy Policy
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem' }}>
                We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%)', 
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '1.5rem',
              border: '3px dashed #a78bfa',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.375rem' : '1.75rem', 
                fontWeight: 800, 
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Contact Us
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.05rem', marginBottom: '1rem' }}>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div style={{ 
                background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)', 
                color: '#ffffff',
                padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                borderRadius: '9999px',
                display: 'inline-block',
                fontWeight: 700,
                fontSize: isMobile ? '1rem' : '1.125rem',
                wordBreak: 'break-all'
              }}>
                📧 support@wowkidsworksheet.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="919876543210" 
        message="Hi! I have a question about your privacy policy."
      />

      <Footer/>

      {/* Footer */}
      {/* <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #312e81 100%)', padding: isMobile ? '2.5rem 1rem' : '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#ffffff', borderRadius: '1rem', padding: isMobile ? '1rem 1.25rem' : '1.25rem 1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <img 
                src="wowkidsworksheet.png" 
                alt="WowKids Worksheets" 
                style={{ height: isMobile ? '100px' : '140px', width: 'auto' }}
              />
            </div>
          </div>

          <p style={{ color: '#ffffff', fontSize: isMobile ? '1rem' : '1.125rem', lineHeight: 1.7, marginBottom: '2rem', padding: isMobile ? '0 0.5rem' : '0' }}>
            Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, 
            worksheets for boys, worksheets for parents, worksheets for teachers and much more.
          </p>

          <p style={{ color: '#67e8f9', fontSize: isMobile ? '1rem' : '1.125rem', marginBottom: '2rem', wordBreak: 'break-all', padding: isMobile ? '0 0.5rem' : '0' }}>
            Contact Us: <span style={{ fontWeight: 600 }}>support@wowkidsworksheet.com</span>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '0.75rem' : '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
              { icon: '🐦', gradient: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)', url: 'https://twitter.com' },
              { icon: '📘', gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', url: 'https://facebook.com' },
              { icon: '📷', gradient: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)', url: 'https://instagram.com' }
            ].map((social, idx) => (
              <button
                key={idx}
                onClick={() => window.open(social.url, '_blank')}
                style={{ 
                  width: isMobile ? '50px' : '56px', 
                  height: isMobile ? '50px' : '56px', 
                  borderRadius: '50%',
                  background: social.gradient,
                  color: '#ffffff',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {social.icon}
              </button>
            ))}
          </div>

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
            © Copyright 2025 <span style={{ fontWeight: 600, color: '#ffffff' }}>WowKids Worksheet</span> - All Rights Reserved
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default PrivacyPolicy;