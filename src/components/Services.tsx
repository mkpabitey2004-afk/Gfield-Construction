import { Construction, Building2, Wrench, Droplets, Handshake } from "lucide-react";
import equipmentImage from "@/assets/equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Feeder Road Construction and Maintenance",
      description: "Construction of rural access roads connecting farms, villages, and towns; typically involves earthworks, drainage systems, and laterite surfacing or bituminous surfacing."
    },
    {
      icon: Building2,
      title: "Urban and Community Road Development",
      description: "Development of roads within towns and cities, including grading, paving, curb installation, and drainage works."
    },
    {
      icon: Wrench,
      title: "Rehabilitation and Upgrading of Existing Roads",
      description: "Improvement of deteriorated roads to enhance usability and lifespan, and may involve reshaping, re-gravelling, re-sealing, or asphalt overlay."
    },
    {
      icon: Droplets,
      title: "Road Drainage Works",
      description: "Construction of culverts, side drains, and gutters to ensure effective water flow and protect road integrity."
    },
    {
      icon: Handshake,
      title: "Subcontracting on Larger Road Projects",
      description: "Through Class A2B2 certification, GField can participate in larger contracts broken into smaller units by the Ministry. Offers support services on larger-scale urban or inter-urban road projects."
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      {/* Equipment image banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-16">
        <img
          src={equipmentImage}
          alt="Road construction equipment"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Area of Expertise</h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="flex gap-6 items-start p-6 border-l-4 border-primary bg-muted/50 hover:bg-muted transition-colors"
            >
              <service.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-xl md:text-2xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Page indicator */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          <span className="text-muted-foreground">GField Construction</span>
          <span className="font-heading text-xl">03</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
