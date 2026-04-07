'use client';

import { useMemo, useState } from 'react';

export default function Page() {
  const [activePage, setActivePage] = useState('home');

  const company = {
    name: 'Massey Training Services',
    email: 'colin@masseytraining.co.uk',
    phone: '07535855829',
    website: 'www.masseytraining.co.uk',
    tagline: 'Excellence in Training',
    logo: '/Massey%20Training%20Services.jpg',
    brand: {
      navy: '#0f1f5c',
      blue: '#1976ff',
      red: '#ff1d1d',
      grey: '#8b8b8b',
      light: '#f6f8fb',
    },
  };

  const services = [
    {
      title: 'Forklift Training',
      description:
        'RTITB-accredited forklift training for novice, experienced, refresher, and conversion candidates.',
      points: ['Novice to refresher', 'Delivered at your premises', 'Operator confidence'],
    },
    {
      title: 'Plant & Machinery',
      description:
        'Coming soon: plant and machinery operator training will be available in the near future.',
      points: ['Coming soon', 'Future service offering', 'Planned expansion'],
      comingSoon: true,
    },
    {
      title: 'Health & Safety',
      description:
        'Workplace safety courses designed to improve compliance, reduce risk, and build confidence.',
      points: ['Risk reduction', 'Clear guidance', 'Team awareness'],
    },
    {
      title: 'Compliance Support',
      description:
        'Training solutions tailored to your team, schedule, and operational requirements across the UK.',
      points: ['Business-focused', 'Flexible planning', 'Accredited standards'],
    },
  ];

  const courses = [
    { name: 'Counterbalance', code: 'LTG1', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Reach Truck', code: 'LTG2', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Pedestrian Stacker', code: 'LTG4', noviceDays: 1, experiencedDays: 1, refresherDays: 1, conversionDays: 1, novicePrice: 315 },
    { name: 'Rough Terrain Masted', code: 'LTG5', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Rough Terrain Telescopic', code: 'LTG6', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Industrial Telescopic', code: 'LTG7', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Order Picker - High Level', code: 'LTG13', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Sideloader', code: 'LTG14', noviceDays: 3, experiencedDays: 2, refresherDays: 1, conversionDays: 1, novicePrice: 905 },
    { name: 'Vehicle-mounted Hydraulic Lorry Loader', code: 'LTG1701', noviceDays: 1, experiencedDays: 1, refresherDays: 1, conversionDays: 1, novicePrice: 315 },
    { name: 'Hydraulic Towing Hitch and Trailer', code: 'HTH(NA)', noviceDays: 1, experiencedDays: 1, refresherDays: 1, conversionDays: 1, novicePrice: 295 },
  ];

  const testimonials = [
    {
      quote:
        'Professional, well-organised training delivered on-site with minimal disruption to our operation. Clear instruction and a very positive experience throughout.',
      author: 'Operations Manager',
      company: 'Logistics Business',
    },
    {
      quote:
        'A dependable training provider who understands employer needs and delivers courses in a clear, practical, and professional way.',
      author: 'Site Manager',
      company: 'Construction Company',
    },
    {
      quote:
        'Excellent communication from start to finish. The training was delivered professionally at our premises and worked well for our team.',
      author: 'Warehouse Supervisor',
      company: 'Distribution Business',
    },
  ];

  const pages = [
    { key: 'home', label: 'Home' },
    { key: 'courses', label: 'Courses' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'about', label: 'About' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'contact', label: 'Contact' },
  ];

  const featuredCourses = useMemo(() => courses.slice(0, 8), [courses]);

  return (
    <div>
      <a href={`tel:${company.phone}`} className="call-float">Call Now</a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-wrap">
            <img src={company.logo} alt="MTS Training Services logo" className="brand-logo" />
            <div>
              <div className="brand-name">{company.name}</div>
              <div className="brand-tag">{company.tagline}</div>
            </div>
          </div>

          <nav className="nav-wrap">
            {pages.map((page) => (
              <button
                key={page.key}
                onClick={() => setActivePage(page.key)}
                className={activePage === page.key ? 'nav-btn active' : 'nav-btn'}
              >
                {page.label}
              </button>
            ))}
          </nav>

          <a href={`mailto:${company.email}`} className="book-btn">Book Training</a>
        </div>
      </header>

      {activePage === 'home' && (
        <>
          <section className="hero" style={{ background: `linear-gradient(135deg, ${company.brand.navy} 0%, ${company.brand.blue} 50%, ${company.brand.red} 100%)` }}>
            <div className="container hero-grid">
              <div>
                <div className="eyebrow hero-eyebrow">Massey Training Services • RTITB Accredited</div>
                <h1>{company.tagline}</h1>
                <p className="hero-copy">
                  Massey Training Services provides professional on-site RTITB forklift training across the UK. We specialise in novice, refresher, experienced, and conversion operator training delivered at customer premises.
                </p>
                <div className="hero-actions">
                  <button onClick={() => setActivePage('contact')} className="primary-white">Request a Quote</button>
                  <button onClick={() => setActivePage('courses')} className="secondary-white">View Courses</button>
                </div>
                <div className="quick-contact">
                  <div>Call: {company.phone}</div>
                  <div>Email: {company.email}</div>
                </div>
              </div>

              <div className="hero-cards">
                <div className="glass-card">
                  <div className="mini-brand">
                    <img src={company.logo} alt="MTS logo" className="mini-logo" />
                    <div>
                      <div className="mini-name">{company.name}</div>
                      <div className="mini-tag">{company.tagline}</div>
                    </div>
                  </div>
                  <div className="feature-list">
                    {[
                      'RTITB-accredited training',
                      'On-site training delivered at customer premises',
                      'Experienced instructors',
                      'Practical, business-focused approach',
                    ].map((item) => (
                      <div key={item} className="feature-pill">{item}</div>
                    ))}
                  </div>
                </div>

                <div className="glass-card">
                  <div className="eyebrow light">Featured campaign</div>
                  <div className="promo-card">
                    <div>
                      <div className="promo-title">RTITB ACCREDITED</div>
                      <div className="promo-title">TRAINING</div>
                      <div className="promo-line" style={{ backgroundColor: company.brand.red }} />
                      <div className="promo-sub">Forklift • Plant • Safety • Compliance</div>
                    </div>
                    <div className="promo-side">
                      <div className="promo-side-title">Book Your RTITB Training Today</div>
                      <div className="promo-side-copy">Branded to match your logo, colours, contact number, and company tagline.</div>
                      <button onClick={() => setActivePage('contact')} className="promo-btn" style={{ backgroundColor: company.brand.red }}>BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="eyebrow">Services</div>
                <h2>Training solutions built around your operation</h2>
                <p>From accredited operator courses to wider workplace compliance support, Massey Training Services delivers practical on-site training at customer premises only.</p>
              </div>
              <div className="card-grid four">
                {services.map((service) => (
                  <div key={service.title} className="card service-card">
                    {service.comingSoon && <div className="badge" style={{ backgroundColor: company.brand.red }}>Coming Soon</div>}
                    <div className="card-title">{service.title}</div>
                    <p>{service.description}</p>
                    <div className="point-wrap">
                      {service.points.map((point) => (
                        <span key={point} className="point-pill">{point}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activePage === 'about' && (
        <section className="section">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">About Massey Training Services</div>
              <h2>Excellence in Training</h2>
              <p>
                Massey Training Services is a professional training provider specialising in high-quality on-site instruction delivered at customer premises across the UK. We support businesses that need practical, well-structured training which promotes safer workplaces, stronger compliance, and more confident operators.
              </p>
              <p>
                Our core service is RTITB-accredited forklift training for novice, experienced, refresher, and conversion candidates. We also provide health and safety and wider compliance support tailored to each customer’s working environment, operational needs, and scheduling requirements.
              </p>
              <p>
                By delivering training on-site, Massey Training Services helps employers train staff in a familiar workplace setting, reduce disruption to operations, and maintain a professional standard of instruction throughout every course. Our approach is straightforward, reliable, and focused on giving customers confidence in both the quality of training and the competence of their operators.
              </p>
            </div>

            <div className="stack-cards">
              <div className="card">
                <div className="card-title">On-site training only</div>
                <p>All training is delivered at customer premises, providing a practical and convenient solution for employers and their teams.</p>
              </div>
              <div className="card">
                <div className="card-title">RTITB-accredited focus</div>
                <p>Training designed to support compliance, safety, and operator competence with recognised accredited standards.</p>
              </div>
              <div className="card">
                <div className="card-title">Professional delivery</div>
                <p>Clear instruction, dependable service, and training tailored around your business, staff, and schedule.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === 'courses' && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Courses</div>
              <h2>RTITB forklift training courses</h2>
              <p>Course durations and novice prices are shown below to help customers understand the scope of your training offer.</p>
            </div>
            <div className="card-grid three">
              {courses.map((course) => (
                <div key={course.code} className="card">
                  <div className="course-head">
                    <div className="card-title">{course.name}</div>
                    <span className="code-pill">{course.code}</span>
                  </div>
                  <p>Novice {course.noviceDays} day(s) • Experienced {course.experiencedDays} day(s) • Refresher {course.refresherDays} day(s) • Conversion {course.conversionDays} day(s)</p>
                  <div className="price-box">From £{course.novicePrice} for novice training</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === 'pricing' && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Pricing</div>
              <h2>Simple price guidance for core courses</h2>
              <p>This section gives customers a clear snapshot of course durations and indicative novice pricing.</p>
            </div>
            <div className="table-wrap">
              <div className="table-row table-head">
                <div>Course</div><div>Novice</div><div>Experienced</div><div>Refresher</div><div>Conversion</div>
              </div>
              {featuredCourses.map((course) => (
                <div key={course.code} className="table-row">
                  <div>{course.name}</div>
                  <div>{course.noviceDays} day(s) • £{course.novicePrice}</div>
                  <div>{course.experiencedDays} day(s)</div>
                  <div>{course.refresherDays} day(s)</div>
                  <div>{course.conversionDays} day(s)</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === 'testimonials' && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Testimonials</div>
              <h2>What customers say about Massy Training Services</h2>
              <p>We aim to provide practical, professional, and dependable training that works for employers and their teams.</p>
            </div>
            <div className="card-grid three">
              {testimonials.map((item) => (
                <div key={item.author + item.company} className="card">
                  <p className="quote">“{item.quote}”</p>
                  <div className="quote-author">{item.author}</div>
                  <div className="quote-company">{item.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === 'contact' && (
        <section className="section contact-bg">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Talk to Massey Training Services</h2>
              <p className="contact-copy">Your real contact details are built in below so the site can act as a stronger lead-generation tool.</p>
              <div className="contact-list">
                <div><strong>Phone:</strong> {company.phone}</div>
                <div><strong>Email:</strong> {company.email}</div>
                <div><strong>Website:</strong> {company.website}</div>
                <div><strong>Tagline:</strong> {company.tagline}</div>
                <div><strong>Pricing:</strong> Call or email for a tailored quote</div>
                <div><strong>Delivery model:</strong> On-site training at customer premises only</div>
                <div><strong>Service area:</strong> UK-wide / regional coverage</div>
              </div>
            </div>

            <div className="card form-card">
              <div className="card-title">Send an enquiry</div>
              <form action={`https://formsubmit.co/${company.email}`} method="POST" className="form-grid">
                <input type="hidden" name="_subject" value="New website enquiry - Massey Training Services" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="name" placeholder="Your name" required />
                <input type="text" name="company" placeholder="Company" />
                <input type="email" name="email" placeholder="Email address" required />
                <input type="text" name="phone" placeholder="Phone number" />
                <textarea name="message" placeholder="Tell us what training you need" required />
                <button type="submit" className="submit-btn" style={{ backgroundColor: company.brand.navy }}>Submit Enquiry</button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src={company.logo} alt="MTS Training Services logo" className="footer-logo" />
            <div className="footer-tag">{company.tagline}</div>
          </div>
          <div>
            <div className="footer-head">Pages</div>
            <div className="footer-links">
              {pages.map((page) => (
                <button key={page.key} onClick={() => setActivePage(page.key)} className="footer-link">{page.label}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-head">Get in touch</div>
            <div className="footer-contact">
              <div>{company.phone}</div>
              <div>{company.email}</div>
              <div>{company.website}</div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <div>© 2026 {company.name}. All rights reserved.</div>
          <div>{company.tagline}</div>
        </div>
      </footer>
    </div>
  );
}
