import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, CheckCircle2, Leaf, Shield, Clock, Star } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Phone Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm flex justify-center md:justify-end">
          <a href="tel:+17869034849" className="hover:text-green-400">Call us: 786-903-4849</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="text-sm md:text-base text-gray-900 font-bold leading-tight">
            <span className="block">LANDSCAPING AND MAINTENANCE</span>
            <span className="block">BY JULIO, LLC</span>
          </a>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/images/hero-landscaping.png"
          alt="Professional landscaping in Miami"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">LANDSCAPING AND MAINTENANCE BY JULIO, LLC</h1>
          <p className="text-xl md:text-2xl mb-8">Professional Lawn Care & Landscaping Services in Miami</p>
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </header>

      {/* Services/Benefits Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4">Why Choose Us?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Serving the Miami area with professional, reliable, and affordable landscaping services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Expert Service</h3>
              <p className="text-gray-600">Years of experience delivering top-quality landscaping services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Reliable & On-Time</h3>
              <p className="text-gray-600">We show up when we say we will and complete work on schedule</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Using sustainable practices to protect your landscape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Lawn Mowing & Maintenance',
              'Hedge & Shrub Trimming',
              'Garden Design & Installation',
              'Mulching & Edging',
              'Seasonal Cleanup',
              'Tree & Palm Care',
              'Irrigation System Maintenance',
              'Commercial & Residential Services'
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl text-center mb-4">Get Your Free Quote</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Thank you! We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name *</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email *</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">Phone *</label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Phone is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block mb-2">Service Needed *</label>
              <select
                id="service"
                {...register('service', { required: 'Please select a service' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Select a service</option>
                <option value="lawn-maintenance">Lawn Maintenance</option>
                <option value="landscaping">Landscaping Design</option>
                <option value="tree-care">Tree & Palm Care</option>
                <option value="seasonal-cleanup">Seasonal Cleanup</option>
                <option value="commercial">Commercial Services</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg transition-colors"
            >
              Submit Request
            </button>
          </form>

          <div className="mt-8 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Phone className="w-5 h-5" />
              <a href="tel:+17869034849" className="hover:text-green-600">786-903-4849</a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:JULIOLANDSCAPINGSERVICES@YAHOO.COM" className="hover:text-green-600">JULIOLANDSCAPINGSERVICES@YAHOO.COM</a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span>Serving Greater Miami Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg mb-4">About Us</h3>
              <p className="text-sm">
                LANDSCAPING AND MAINTENANCE BY JULIO, LLC is a professional landscaping company serving the Miami area with quality lawn care and maintenance services.
              </p>
            </div>

            <div>
              <h3 className="text-white text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>Miami, FL</li>
                <li>Phone: 786-903-4849</li>
                <li>Email: JULIOLANDSCAPINGSERVICES@YAHOO.COM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 space-y-6 text-sm">
            <div>
              <h4 className="text-white mb-2">Payment Terms & Conditions</h4>
              <p className="mb-2">
                Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, check, and major credit cards (Visa, MasterCard, American Express, Discover).
              </p>
              <p>
                For recurring maintenance contracts, payment is due on the first day of each service period. A $35 fee will be applied to returned checks or declined payments.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Cancellation & Refund Policy</h4>
              <p className="mb-2">
                Scheduled services may be cancelled up to 24 hours in advance without penalty. Cancellations made less than 24 hours before scheduled service may be subject to a cancellation fee of up to 50% of the service cost.
              </p>
              <p>
                Refunds for prepaid services will be issued within 14 business days of approved cancellation, minus any applicable cancellation fees and services already rendered.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Service Guarantee</h4>
              <p>
                We stand behind our work. If you are not satisfied with our service, please contact us within 48 hours and we will address your concerns at no additional charge.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Privacy Policy</h4>
              <p className="mb-2">
                We respect your privacy and are committed to protecting your personal information. Any information collected through our contact form or during service delivery is used solely for providing our landscaping services and will not be shared with third parties except as required by law.
              </p>
              <p>
                We collect: name, email, phone number, service address, and payment information. This data is stored securely and retained only as long as necessary to provide services and maintain business records.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Terms of Service</h4>
              <p className="mb-2">
                By using our services, you agree to provide access to the service area and ensure it is safe for our crew to work. You are responsible for marking any underground utilities, irrigation systems, or other hazards on your property.
              </p>
              <p className="mb-2">
                We are not responsible for damage to unmarked irrigation systems, underground utilities, or obstacles not disclosed prior to service. All estimates are valid for 30 days.
              </p>
              <p>
                Weather-related delays are beyond our control. We will reschedule services as soon as conditions permit.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Liability & Insurance</h4>
              <p>
                LANDSCAPING AND MAINTENANCE BY JULIO, LLC is fully licensed and insured. We maintain general liability insurance and workers' compensation coverage for all employees. Proof of insurance available upon request.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-2">Dispute Resolution</h4>
              <p>
                Any disputes arising from our services shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in Miami-Dade County, Florida, in accordance with Florida law.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} LANDSCAPING AND MAINTENANCE BY JULIO, LLC. All rights reserved.</p>
            <p className="mt-2">Licensed & Insured in the State of Florida</p>
          </div>
        </div>
      </footer>
    </div>
  );
}