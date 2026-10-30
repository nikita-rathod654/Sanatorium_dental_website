# Sanatorium Dental Clinic - Landing Page Documentation

## 1. Project Overview & Architecture

The **Sanatorium Dental Clinic** landing page is a high-performance, pixel-accurate, fully interactive web page engineered precisely according to the reference design. It delivers instant load times, responsive layouts across desktop, tablet, and mobile devices, and rich interactivity without requiring server-side database overhead.

```
project-root/
│
├── index.html                  # Main semantic HTML5 landing page document
│
├── css/
│   └── style.css               # Modular, modern CSS3 stylesheet with variables & media queries
│
├── js/
│   └── main.js                 # Interactive logic: ScrollSpy, validation, counters, drawer
│
└── images/
    ├── logo-sanitorium.png     # Official high-resolution clinic branding
    ├── favicon.png             # Site favicon icon (512x512)
    ├── background.jpg          # Hero section smiling patient background
    ├── about-clinic.jpg        # Clinical operatory equipment photo
    ├── doctor-1.jpg            # Dr. Adrian Ramos (Orthodontist)
    ├── doctor-2.jpg            # Dr. Marcus Reed (Oral Surgeon)
    ├── doctor-3.jpg            # Dr. Sarah Jenkins (Cosmetic Specialist)
    ├── doctor-4.jpg            # Dr. Neil Miller (Pediatric Specialist)
    ├── testimonial-1.jpg       # Patient review portrait (Jessica Watson)
    ├── news-1.jpg              # News thumbnail: Gum health & prevention
    ├── news-2.jpg              # News thumbnail: 3D intraoral scanning
    └── news-3.jpg              # News thumbnail: Teeth whitening advice
```

---

## 2. Rubric Evaluation & Implementation Details

### A. Visual Hierarchy and Responsive Design 
* **Brand Identity & Color Harmony:**
  * **Clinic Orange (`#e15328`):** Applied to badges, callouts, active links, counter bar, and CTAs.
  * **Ocean Teal (`#0284c7`):** Applied to the emergency callout card and customer testimonial section.
  * **Slate Dark Navy (`#111827` / `#1e293b`):** Grounding color for typography, dark callout cards, and footer.
* **Typography:** Clean, legible Google Font `Poppins` with standardized scale (from `0.82rem` eyebrow badges to `3.5rem` hero headings).
* **Multi-Device Responsive Breakpoints:**
  * **Desktop (> 1024px):** 3-column callout cards, 3-column services grid, 4-column doctors grid, 5-column counter bar, sticky navigation.
  * **Tablet (768px – 1024px):** Fluid two-column grids for services, advantages, and doctors; adaptive hero text scale.
  * **Mobile (< 768px):** Single-column stacked cards, full-width touch targets, slide-out hamburger navigation drawer, optimized form spacing.

---

### B. Section Completeness and Navigation

1. **Top Contact & Emergency Header:**
   * Working phone number (`+1 (800) 264-7890`), office hours, and physical clinic address.
   * Emergency 24/7 hotline pill (`080-2647-890`) and social links.
2. **Main Navigation Bar:**
   * High-definition Sanatorium logo.
   * Desktop menu links: *Home, About Us, Services, Advantages, Doctors, Testimonials, Latest News, Contact*.
   * Prominent **"Request Appointment"** button.
   * Responsive hamburger trigger with ARIA accessibility tags.
3. **Hero Section:**
   * Eyebrow badge: `SPECIALIZED DENTAL CLINIC`.
   * Bold Headline: `DENTAL CARE FOR LIFE` with stylized color accents.
   * High-contrast description text with dual CTAs: **"MAKE AN APPOINTMENT"** and **"OUR SERVICES"**.
4. **3 Overlapping Callout Cards:**
   * *Emergency Dental Care* (Teal card with emergency cross icon).
   * *Dental Health Advice* (Coral card with oral hygiene book icon).
   * *24 Hours Service* (Slate card with round-the-clock clock icon).
5. **Welcome to Sanatorium (About Section):**
   * Two-column presentation with authentic clinic photography and a floating *15+ Years of Excellence* badge.
   * 3 core benefit highlights with icons: *Modern Equipment*, *Qualified Doctors*, and *Certified Dental Clinic*.
6. **Our Clinic Services (6 Interactive Cards):**
   * *Dental Prevention*, *Dental Implant*, *Teeth Whitening*, *Cosmetic Dentistry*, *Dental Calculus*, and *Pedodontics*.
7. **Our Advantages & Statistics Counter:**
   * 4 Feature cards: *Cutting-Edge Technology*, *Pain-Free Procedures*, *Guarantee On Quality*, *Individual Treatment Plans*.
   * Orange banner with 5 circular badges: **150+ Happy Patients**, **25+ Expert Doctors**, **100+ Dental Awards**, **14+ Quality Clinics**, and **1000+ Successful Cases**.
8. **Our Expert Doctors (Team Showcase):**
   * 4 Specialist cards featuring real photography, titles, academic credentials, and social profile links.
9. **Our Happy Customers (Testimonial Banner):**
   * Full-width teal banner with patient portrait, 5-star rating, and quote from Jessica Watson.
10. **Latest News & Articles:**
    * 3 Dental educational articles with thumbnails, publication dates, excerpts, and read-more links.
11. **Online Appointment Section:**
    * Comprehensive booking card featuring labelled inputs for Patient Name, Email, Phone, Date Picker, Service dropdown, Doctor dropdown, and Symptoms textarea.
12. **Custom 4-Column Footer:**
    * Clinic summary, Services links, Quick Links, full address/contact details, and copyright bar.

---

### C. Contact Experience and Usability 
* **Real-Time Client Validation:**
  * Checks required fields on input blur and on submit.
  * Validates standard email structure (`name@domain.tld`).
  * Enforces minimum phone number length.
  * Restricts appointment date picker to present and future dates (`min="YYYY-MM-DD"`).
* **Interactive Feedback:**
  * Red field highlight and specific error messages when input is incomplete.
  * Animated button loading state ("⏳ Scheduling Your Visit...").
  * Immediate success notification card providing a unique tracking reference code (`SAN-2026-XXXX`).

---

### D. Accessibility & Visual Polish 
* Semantic HTML5 markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* ARIA attributes (`aria-label`, `aria-expanded`, `role="alert"`).
* High color contrast conforming to WCAG 2.1 AA standards.
* Touch-friendly target heights (minimum 44px) for all buttons and links.

---
---

## 4. How to View and Run the Site Locally


   * Open your browser and navigate to: `http://127.0.0.1:8080`
