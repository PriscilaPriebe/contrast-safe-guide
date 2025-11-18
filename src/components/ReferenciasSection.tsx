import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Shield } from "lucide-react";

export const ReferenciasSection = () => {
  const conformidade = [
    {
      requisito: "RDC 611/2022 (ANVISA)",
      url: "https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-611-de-9-de-marco-de-2022-386107075",
      descricao: "organização e funcionamento de serviços de radiologia diagnóstica e intervencionista; segurança do paciente; rastreabilidade de insumos.",
      abordagem: "Propõe checklist pré-exame, registro mínimo obrigatório, rastreabilidade de lote de contraste e plano de treinamento e revisão de eventos.",
      secoes: "Triagem de Risco; Documentação; Referências & Governança."
    },
    {
      requisito: "ACR Manual on Contrast Media",
      url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual",
      descricao: "reconhecimento e manejo de reações, risco renal, gravidez/lactação, extravasamento.",
      abordagem: "Algoritmos de resposta imediata, orientação para suporte inicial e escalonamento; notas sobre lactantes/gestantes e risco renal.",
      secoes: "Resposta Imediata; Extravasamento; Educação ao Paciente."
    },
    {
      requisito: "ESUR Guidelines on Contrast Agents",
      url: "https://www.esur.org/esur-guidelines-on-contrast-agents/",
      descricao: "PC-AKI, metformina, extravasamento, pediatria, gravidez/lactação.",
      abordagem: "Inclui pontos de atenção pré-exame (risco renal, medicamentos) e condutas para extravasamento e acompanhamento.",
      secoes: "Triagem de Risco; Extravasamento; Educação ao Paciente."
    }
  ];

  const links = [
    { title: "ACR Manual on Contrast Media", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual" },
    { title: "ESUR Guidelines on Contrast Agents", url: "https://www.esur.org/esur-guidelines-on-contrast-agents/" },
    { title: "ANVISA RDC 611/2022", url: "https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-611-de-9-de-marco-de-2022-386107075" }
  ];

  return (
    <section id="referencias" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Referências & Governança</h2>
      
      <div className="p-6 rounded-lg border-l-4 border-primary bg-card-secondary mb-6">
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            Estruture sua política alinhando-se às diretrizes internacionais (p.ex., manuais de contraste), 
            às normas de segurança do paciente e às regulamentações sanitárias nacionais. 
            <strong> Este site é educativo</strong> e deve ser adaptado à realidade local.
          </span>
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4">Tabela de Conformidade (alto nível)</h3>
      <Card className="shadow-card mb-6">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 bg-primary/10 font-semibold">Requisito normativo</th>
                  <th className="text-left p-3 bg-primary/10 font-semibold">Como este site aborda</th>
                  <th className="text-left p-3 bg-primary/10 font-semibold">Seções relacionadas</th>
                </tr>
              </thead>
              <tbody>
                {conformidade.map((item, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="p-3 align-top">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-foreground font-semibold hover:text-primary transition-colors group"
                      >
                        {item.requisito}
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{item.descricao}</p>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground align-top">{item.abordagem}</td>
                    <td className="p-3 text-sm text-muted-foreground align-top">{item.secoes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mb-4">Links normativos e técnicos</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 rounded-lg border border-border hover:border-primary transition-colors bg-card-secondary group"
          >
            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{link.title}</span>
          </a>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Componentes de governança</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Plano anual de treinamento da equipe (simulação de anafilaxia).",
                "Revisão trimestral de eventos adversos e lições aprendidas.",
                "Rastreabilidade de lotes de contraste.",
                "Checklist diário do carrinho de emergência."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Integrações sugeridas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span className="text-sm">RIS/PACS/HIS com alerta de alergia a contraste.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span className="text-sm">Formulário digital integrado (LGPD; perfis de acesso).</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-sm">Dashboards de qualidade (tempo-resposta, taxa de eventos).</span>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  className="ml-5 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Gerar relatório em PDF
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
