const company = {
  name: 'MTS Training Services',
  email: 'colin@masseytraining.co.uk',
  phone: '07535855829',
  website: 'www.masseytraining.co.uk',
  tagline: 'Excellence in Training',
  brand: {
    navy: '#0f1f5c',
    blue: '#1976ff',
    red: '#ff1d1d',
    grey: '#8b8b8b',
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
      'Professional, practical, and easy to work with from start to finish. The training was clear and well delivered.',
    author: 'Operations Manager',
    company: 'Logistics Client',
  },
  {
    quote:
      'A reliable training partner who understands what employers need. Great communication and excellent course delivery.',
    author: 'Site Manager',
    company: 'Construction Client',
  },
  {
    quote:
      'The team helped us organise refresher training quickly and professionally, with minimal disruption to operations.',
    author: 'Warehouse Supervisor',
    company: 'Distribution Client',
  },
];

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We support employers across warehousing, logistics, manufacturing, construction, and other operational environments that need practical, compliant workplace training.',
  },
  {
    question: 'Can training be delivered on-site?',
    answer:
      'Yes. All training is delivered on-site at customer premises only, allowing your team to train in a familiar working environment.',
  },
  {
    question: 'Do you offer refresher training?',
    answer:
      'Yes. Refresher, conversion, familiarisation, and novice routes are available across core training courses.',
  },
  {
    question: 'How do we book?',
    answer:
      'You can enquire by phone, email, or by using the enquiry form on the site.',
  },
];

function SectionTitle({ eyebrow, title, text, color }) {
  return (
    <div className="section-title">
      <div className="eyebrow" style={{ color: color || company.brand.navy }}>{eyebrow}</div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand-wrap" aria-label="MTS Training Services home">
            <div className="logo-box">
              <img src="/logo.jpg" alt="MTS Training Services logo" className="logo-image" />
            </div>
            <div>
              <div className="brand-name">{company.name}</div>
              <div className="brand-tagline">{company.tagline}</div>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#courses">Courses</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href={`mailto:${company.email}`} className="primary-button">
            Book Training
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-pill">MTS Training Services • RTITB Accredited</div>
            <h1>{company.tagline}</h1>
            <p className="hero-copy">
              MTS Training Services helps employers build confident operators and safer workplaces through practical on-site forklift, health and safety, and compliance training delivered at customer premises across novice, experienced, refresher, and conversion routes.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="secondary-button light">Request a Quote</a>
              <a href="#courses" className="secondary-button ghost">View Courses</a>
            </div>
            <div className="hero-contact-grid">
              <div className="hero-contact-card">Call: {company.phone}</div>
              <div className="hero-contact-card">Email: {company.email}</div>
            </div>
          </div>

          <div className="hero-side">
            <div className="glass-card">
              <div className="hero-brand-mini">
                <div className="mini-logo-box">
                  <img src="/logo.jpg" alt="MTS logo" className="logo-image small" />
                </div>
                <div>
                  <div className="mini-brand-name">{company.name}</div>
                  <div className="mini-brand-tagline">{company.tagline}</div>
                </div>
              </div>
              <div className="feature-list">
                {[
                  'RTITB-accredited training',
                  'On-site training delivered at customer premises',
                  'Experienced instructors',
                  'Practical, business-focused approach',
                ].map((item) => (
                  <div key={item} className="feature-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <div className="campaign-eyebrow">Featured campaign</div>
              <div className="campaign-card">
                <div>
                  <div className="campaign-title">RTITB ACCREDITED</div>
                  <div className="campaign-title">TRAINING</div>
                  <div className="campaign-divider"></div>
                  <div className="campaign-subtitle">Forklift • Safety • Compliance</div>
                </div>
                <div className="campaign-cta-box">
                  <div className="campaign-copy-title">Book Your RTITB Training Today</div>
                  <div className="campaign-copy-text">
                    Branded to match your logo, colours, contact number, and company tagline.
                  </div>
                  <a href="#contact" className="red-button">BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="Training solutions built around your operation"
            text="From accredited operator courses to wider workplace compliance support, MTS Training Services delivers practical on-site training at customer premises only."
          />
          <div className="card-grid four-up">
            {services.map((service) => (
              <article key={service.title} className="card service-card">
                {service.comingSoon ? <div className="coming-soon-badge">Coming Soon</div> : null}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-row">
                  {service.points.map((point) => (
                    <span key={point} className="tag">{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section alt-section">
        <div className="container">
          <SectionTitle
            eyebrow="Courses"
            title="Verified course list built into your site"
            text="This page uses your actual training lineup, durations, and starting novice prices so the site feels more real and more useful for enquiries."
          />
          <div className="card-grid three-up">
            {courses.map((course) => (
              <article key={course.code} className="card">
                <div className="course-head">
                  <h3>{course.name}</h3>
                  <span className="course-code">{course.code}</span>
                </div>
                <p>
                  Novice {course.noviceDays} day(s) • Experienced {course.experiencedDays} day(s) • Refresher {course.refresherDays} day(s) • Conversion {course.conversionDays} day(s)
                </p>
                <div className="price-box">From £{course.novicePrice} for novice training</div>
                <a href="#contact" className="text-link">Ask about this course →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Pricing snapshot"
            title="Simple price guidance for core courses"
            text="This pricing page gives the site a more commercial feel and helps customers understand the scale of your on-site training offer."
          />
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Novice</th>
                  <th>Experienced</th>
                  <th>Refresher</th>
                  <th>Conversion</th>
                </tr>
              </thead>
              <tbody>
                {courses.slice(0, 8).map((course) => (
                  <tr key={course.code}>
                    <td>{course.name}</td>
                    <td>{course.noviceDays} day(s) • £{course.novicePrice}</td>
                    <td>{course.experiencedDays} day(s) • £610</td>
                    <td>{course.refresherDays} day • £315</td>
                    <td>{course.conversionDays} day • £315</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="about" className="section alt-section">
        <div className="container two-column">
          <div>
            <SectionTitle
              eyebrow="About MTS Training Services"
              title="A proper company website with your real branding and details"
              text="This version uses your logo, company name, contact number, email address, and tagline, while clearly positioning your business as on-site only."
              color={company.brand.grey}
            />
            <p className="about-copy">
              From here, you can add trainer profiles, client logos, downloadable brochures, detailed course content, and live enquiry handling, all centred around your on-site delivery model.
            </p>
          </div>
          <div className="info-stack">
            {[
              ['Logo integrated', 'Your uploaded MTS Training Services logo is used throughout the site.'],
              ['Real contact details', `Phone ${company.phone} and email ${company.email} are built into the site.`],
              ['On-site only model', 'The website clearly positions your services as training delivered at customer premises only.'],
              ['Real branding', 'The colour styling follows your logo more closely using navy, blue, red, grey, and white.'],
            ].map(([title, text]) => (
              <div key={title} className="info-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="A more complete website with trust built in"
            text="Client feedback helps reassure potential customers and makes the business feel established and reliable."
            color={company.brand.red}
          />
          <div className="card-grid three-up">
            {testimonials.map((item) => (
              <article key={item.author + item.company} className="card">
                <p className="quote">“{item.quote}”</p>
                <div className="quote-author">{item.author}</div>
                <div className="quote-company">{item.company}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionTitle
            eyebrow="FAQs"
            title="Common questions"
            text="A helpful FAQ section makes the website feel more complete and reduces friction for potential customers."
          />
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Talk to MTS Training Services"
              text="Your real contact details are added below so the site can act as a stronger lead-generation tool."
            />
            <div className="contact-details">
              <div><strong>Phone:</strong> {company.phone}</div>
              <div><strong>Email:</strong> {company.email}</div>
              <div><strong>Website:</strong> {company.website}</div>
              <div><strong>Tagline:</strong> {company.tagline}</div>
              <div><strong>Pricing:</strong> Call or email for a tailored quote</div>
              <div><strong>Delivery model:</strong> On-site training at customer premises only</div>
              <div><strong>Service area:</strong> UK-wide / regional coverage</div>
            </div>
          </div>

          <form
            className="contact-card"
            action="https://formsubmit.co/colin@masseytraining.co.uk"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New website enquiry from MTS Training Services" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <h3>Send an enquiry</h3>
            <input name="name" placeholder="Your name" required />
            <input name="company" placeholder="Company" />
            <input type="email" name="email" placeholder="Email address" required />
            <input name="phone" placeholder="Phone number" />
            <textarea name="message" placeholder="Tell us what training you need" required />
            <button type="submit" className="primary-button">Submit Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo-box">
              <img src="/logo.jpg" alt="MTS Training Services logo" className="logo-image footer" />
            </div>
            <div className="footer-tagline">{company.tagline}</div>
          </div>
          <div>
            <div className="footer-heading">Pages</div>
            <div className="footer-links">
              <a href="#top">Home</a>
              <a href="#services">Services</a>
              <a href="#courses">Courses</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <div className="footer-heading">Get in touch</div>
            <div className="footer-contact">
              <div>{company.phone}</div>
              <div>{company.email}</div>
              <div>{company.website}</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <div>© 2026 {company.name}. All rights reserved.</div>
            <div>{company.tagline}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
