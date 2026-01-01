import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="red-strip" />
              <span className="font-heading text-lg tracking-widest text-muted-foreground">2025</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6">
              GFIELD<br />
              <span className="text-foreground">CONSTRUCTION</span>
            </h1>
            
            <p className="font-heading text-xl md:text-2xl tracking-widest text-muted-foreground mb-8">
              COMPANY PROFILE
            </p>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Building Ghana's infrastructure with excellence, integrity, and sustainable solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-lg tracking-wide px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground font-heading text-lg tracking-wide px-8 py-4 hover:bg-secondary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right image with diagonal cut */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Diagonal image container */}
              <div 
                className="relative overflow-hidden"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                }}
              >
                <img
                  src={heroImage}
                  alt="Construction worker with heavy machinery"
                  className="w-full h-[500px] lg:h-[600px] object-cover grayscale"
                />
                {/* Red accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Red accent block */}
              <div className="absolute -bottom-4 right-0 w-32 h-32 bg-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Website URL */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <span className="font-body text-sm text-muted-foreground">www.gfieldconstruction.com</span>
      </div>
    </section>
  );
};

export default Hero;
