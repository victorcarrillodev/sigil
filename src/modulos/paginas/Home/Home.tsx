import { useCallback, useState } from "react";
import type { ServiceFilter, ServiceId } from "../../moleculas/ServiceCard/services";
import { Approach } from "../../organismos/Approach/Approach";
import { ContactSection } from "../../organismos/ContactSection/ContactSection";
import { Faq } from "../../organismos/Faq/Faq";
import { Hero } from "../../organismos/Hero/Hero";
import { Process } from "../../organismos/Process/Process";
import { Services } from "../../organismos/Services/Services";
import { SiteLayout } from "../../plantillas/SiteLayout/SiteLayout";

export function Home() {
  const [selectedService, setSelectedService] = useState<ServiceId | "">("");
  const [filter, setFilter] = useState<ServiceFilter>("all");
  const revealServices = useCallback(() => setFilter("all"), []);
  return (
    <SiteLayout onServiceNavigate={revealServices}>
      <Hero />
      <Services filter={filter} onFilterChange={setFilter} onServiceSelect={setSelectedService} />
      <Approach />
      <Process />
      <Faq />
      <ContactSection selectedService={selectedService} />
    </SiteLayout>
  );
}
