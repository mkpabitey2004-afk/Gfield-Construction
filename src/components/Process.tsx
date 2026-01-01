import excavatorImage from "@/assets/excavator.jpg";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "CONSULTATIONS",
      description: "We begin every project with detailed consultations to understand our client's vision, site conditions, challenges, and project goals. This helps us align our technical solutions with the desired outcomes.",
      isRed: false,
    },
    {
      number: "02",
      title: "PLANNING & DESIGN",
      description: "Our engineering and planning team develops a comprehensive project plan — including design reviews, resource allocation, work schedules, and safety considerations — ensuring that every detail is captured before mobilization.",
      isRed: false,
    },
    {
      number: "03",
      title: "MOBILIZATION",
      description: "We deploy the necessary equipment, materials, and skilled personnel to the project site. Our team ensures all preliminary works, including site clearing, surveying, and material testing, are conducted to standard before execution begins.",
      isRed: false,
    },
    {
      number: "04",
      title: "CONSTRUCTION",
      description: "We deliver works in line with approved designs and Ministry of Roads and Highways standards. Our site engineers and supervisors maintain strict quality control and safety compliance at every stage of construction.",
      isRed: false,
    },
    {
      number: "05",
      title: "MONITORING & QA",
      description: "We continuously monitor progress, track performance against timelines, and perform quality assurance checks to ensure that every layer, structure, and finish meets engineering and regulatory standards.",
      isRed: true,
    },
    {
      number: "06",
      title: "HANDOVER & SUPPORT",
      description: "Upon completion, we conduct final inspections with clients and supervising engineers to ensure full satisfaction. We provide maintenance support and technical guidance to guarantee long-term performance of the infrastructure.",
      isRed: true,
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Our Process</h2>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* First row - white bg */}
          <div className="bg-primary h-1 md:col-span-2" />
          
          {steps.slice(0, 4).map((step) => (
            <div key={step.number} className="p-8 border-b border-border">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-heading text-2xl text-muted-foreground">{step.number}</span>
                <h3 className="font-heading text-xl md:text-2xl">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-12">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Red section */}
        <div className="grid md:grid-cols-2 bg-primary text-primary-foreground">
          {steps.slice(4).map((step) => (
            <div key={step.number} className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-heading text-2xl text-primary-foreground/70">{step.number}</span>
                <h3 className="font-heading text-xl md:text-2xl">{step.title}</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed pl-12">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Excavator illustration */}
        <div className="flex justify-end mt-8">
          <img 
            src={excavatorImage} 
            alt="Excavator" 
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Page indicator */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
          <span className="text-muted-foreground">GField Construction</span>
          <span className="font-heading text-xl">04</span>
        </div>
      </div>
    </section>
  );
};

export default Process;
