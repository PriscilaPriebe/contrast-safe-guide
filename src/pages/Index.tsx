import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TriagemSection } from "@/components/TriagemSection";
import { RespostaSection } from "@/components/RespostaSection";
import { ExtravasamentoSection } from "@/components/ExtravasamentoSection";
import { DocumentacaoSection } from "@/components/DocumentacaoSection";
import { EducacaoSection } from "@/components/EducacaoSection";
import { ReferenciasSection } from "@/components/ReferenciasSection";
import { ExtravasamentoForm } from "@/components/ExtravasamentoForm";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <HeroSection />
        <TriagemSection />
        <RespostaSection />
        <ExtravasamentoSection />
        <DocumentacaoSection />
        <EducacaoSection />
        <ReferenciasSection />
        <ExtravasamentoForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
