import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-background">
      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-4">www.gfieldconstruction.com</p>
          
          <h2 className="section-heading mb-4">GField<br />Construction</h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Exceptional <span className="text-primary">solution</span> that <span className="text-primary">shape</span> enduring spaces.
          </p>
        </div>
      </div>

      {/* Contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <a 
              href="tel:+233544603328" 
              className="flex items-center gap-4 py-8 px-4 hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span className="font-heading text-lg tracking-wide">+233-54-460-3328</span>
            </a>
            
            <a 
              href="mailto:info@gfieldconstruction.com" 
              className="flex items-center gap-4 py-8 px-4 hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="font-heading text-lg tracking-wide">info@gfieldconstruction.com</span>
            </a>
            
            <div className="flex items-center gap-4 py-8 px-4">
              <MapPin className="w-6 h-6" />
              <span className="font-heading text-lg tracking-wide">Kwadaso, Kumasi, Ghana</span>
            </div>
          </div>
        </div>
        
        {/* Black accent block */}
        <div className="flex justify-end">
          <div className="w-48 h-24 bg-secondary" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 GField Construction Company Limited. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Class A2B2 Certified | TIN: C006297761X
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
