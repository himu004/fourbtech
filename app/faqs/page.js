import { Faq3 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/FourBtechLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="FAQ" pageName="FAQs" />
      <Faq3 />
    </RiddaLayout>
  );
};
export default page;
