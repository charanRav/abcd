import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Clock } from "lucide-react";
import instituteImage from "@/assets/institute-training.jpg";

const Institute = () => {
  const handleEnroll = (course: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20enroll%20in%20the%20${course}%20course%20at%20ABCD%20Institute`,
      "_blank"
    );
  };

  const courses = [
    {
      title: "Basic Beauty Training",
      duration: "3 Months",
      description: "Comprehensive introduction to beauty services including hair, makeup, and skin care fundamentals",
      features: [
        "Hair cutting & styling basics",
        "Makeup application techniques",
        "Skin care & facials",
        "Professional etiquette",
        "Certification included"
      ]
    },
    {
      title: "Professional Styling Certification",
      duration: "6 Months",
      description: "Advanced training for aspiring beauty professionals with hands-on experience and industry certification",
      features: [
        "Advanced hair techniques",
        "Bridal & special occasion makeup",
        "Spa & massage therapy",
        "Business management",
        "Job placement assistance"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Learn With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Start your journey to becoming a certified beauty professional
          </p>
        </div>

        {/* Institute Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
          <img
            src={instituteImage}
            alt="ABCD Beauty Institute Training"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-gradient-dark border-[hsl(var(--gold))]/20 p-8 rounded-3xl hover-lift"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-[hsl(var(--gold))]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[hsl(var(--gold))] text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-foreground/60 font-semibold text-sm mb-3">
                  <Award className="w-4 h-4 text-[hsl(var(--gold))]" />
                  Course Highlights:
                </div>
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] mt-2 flex-shrink-0" />
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => handleEnroll(course.title)}
              >
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institute;
