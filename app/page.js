import Blog from "@/components/Blog";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import About from "@/components/homepage/About";
import Contact from "@/components/homepage/Contact";
import Counter from "@/components/homepage/Counter";
import CTA from "@/components/homepage/CTA";
import FeaturedContent from "@/components/homepage/FeaturedContent";
import Headline from "@/components/homepage/Headline";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import Team from "@/components/homepage/Team";
import Testimonial from "@/components/homepage/Testimonial";
import WhoWeAre from "@/components/homepage/WhoWeAre";
import Services from "@/components/Services";
import RiddaLayout from "@/layout/FourBtechLayout";
import Link from "next/link";

const page = () => {
  return (
    <RiddaLayout>
      <Hero />
      <Counter />
      <About />
      <Services />
      <HowItWorks />
      <FeaturedContent />
      <WhoWeAre />
      <Team />
      <CTA />
      <CaseStudies />
      <Testimonial />
      <Headline />
      <Blog />
      <Faq />
      <Contact />
    </RiddaLayout>
  );
};
export default page;
