import { Shield, Award, HardHat, Leaf, Users } from "lucide-react";
import roadImage from "@/assets/road-construction.jpg";

const MissionVision = () => {
  const coreValues = [
    { icon: Shield, title: "Integrity", description: "We deliver what we promise, honestly and transparently." },
    { icon: Award, title: "Excellence", description: "We pursue quality in every project we undertake." },
    { icon: HardHat, title: "Safety", description: "We protect our workforce and the communities we serve." },
    { icon: Leaf, title: "Sustainability", description: "We build infrastructure that lasts." },
    { icon: Users, title: "Teamwork", description: "We work collaboratively for shared success." },
  ];

  return (
    <section className="bg-secondary text-secondary-foreground">
      {/* Image banner */}
      <div className="relative h-[250px] md:h-[300px] overflow-hidden">
        <img
          src={roadImage}
          alt="Road construction site"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-heading mb-12">Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div>
            <h3 className="section-subheading mb-4">MISSION</h3>
            <p className="text-lg text-secondary-foreground/80">
              To design and deliver durable, high-quality road and civil works that enhance accessibility and improve livelihoods across Ghana.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="section-subheading mb-4">VISION</h3>
            <p className="text-lg text-secondary-foreground/80">
              To be Ghana's trusted leader in sustainable road and infrastructure development, connecting communities and driving national progress through innovation, quality, and integrity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="section-subheading mb-8">CORE VALUES</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={value.title} 
                className="flex items-start gap-4 p-4 bg-secondary-foreground/5 rounded-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-xl mb-1">{value.title}</h4>
                  <p className="text-secondary-foreground/70 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-secondary-foreground/20">
          <span className="text-secondary-foreground/60">GField Construction</span>
          <span className="font-heading text-xl">02</span>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
