import truckImage from "@/assets/truck.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Truck image banner */}
        <div className="relative mb-16 overflow-hidden bg-secondary">
          <img
            src={truckImage}
            alt="GField Construction truck"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          {/* Red accent block */}
          <div className="absolute top-1/2 right-0 w-24 h-32 bg-primary transform -translate-y-1/2" />
        </div>

        {/* About content */}
        <div className="max-w-4xl">
          <h2 className="section-heading text-primary mb-4">About Us.</h2>
          
          <h3 className="font-heading text-2xl md:text-3xl mb-8">Introduction</h3>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              GField Construction is a Ghanaian-owned civil engineering and construction company specializing in road and infrastructure development. We primarily provide road construction services to the Government of Ghana, working under the supervision of the Department of Feeder Roads and the Ministry of Roads and Highways.
            </p>
            
            <p>
              Our expertise spans feeder roads, urban roads, drainage systems, and small-to-medium bridge structures, with a focus on delivering durable, cost-effective, and environmentally responsible infrastructure. We are located in Kwadaso, Kumasi in the Ashanti Region.
            </p>
            
            <p>
              We are currently certified as <strong className="text-foreground">Class A2B2</strong>, allowing us to bid for and execute feeder and urban road projects with contract values up to <strong className="text-foreground">GHS 20,000,000</strong> (Twenty Million Ghana Cedis) or approximately <strong className="text-foreground">USD 1,250,000</strong> (One Million Two Hundred and Fifty Thousand Dollars).
            </p>
          </div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          <span className="text-muted-foreground">GField Construction</span>
          <span className="font-heading text-xl">01</span>
        </div>
      </div>
    </section>
  );
};

export default About;
