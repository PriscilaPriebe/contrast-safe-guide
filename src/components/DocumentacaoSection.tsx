import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { PrivacyConsent } from "./PrivacyConsent";

export const DocumentacaoSection = () => {
  const [hasConsented, setHasConsented] = useState(false);

  return (
    <section id="documentacao" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Comunicação, Registro & Qualidade</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Modelo SBAR (rápido)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="text-sm">
                <strong className="text-primary">Situação:</strong> 
                <span className="text-muted-foreground"> Paciente apresentou urticária difusa após contraste iodado em TC.</span>
              </li>
              <li className="text-sm">
                <strong className="text-primary">Background:</strong> 
                <span className="text-muted-foreground"> Asma leve; sem reações prévias conhecidas.</span>
              </li>
              <li className="text-sm">
                <strong className="text-primary">Assessment:</strong> 
                <span className="text-muted-foreground"> SpO₂ 94%, PA 100/60, FC 110, broncoespasmo leve.</span>
              </li>
              <li className="text-sm">
                <strong className="text-primary">Recommendation:</strong> 
                <span className="text-muted-foreground"> Solicito avaliação médica imediata; preparo broncodilatador; prontidão para adrenalina IM.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Registro mínimo obrigatório</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Hora de início/fim do contraste, tipo e lote.",
                "Sinais e sintomas, evolução minuto a minuto.",
                "Intervenções realizadas e resposta do paciente.",
                "Comunicações efetuadas (quem, quando, conteúdo).",
                "Orientações ao paciente e plano de seguimento."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card bg-card-secondary">
        <CardHeader>
          <CardTitle>Formulário de Notificação de Evento Adverso</CardTitle>
        </CardHeader>
        <CardContent>
          {!hasConsented ? (
            <PrivacyConsent 
              onConsent={() => setHasConsented(true)} 
              formType="evento-adverso"
            />
          ) : (
            <>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdKCTr9fyBkDTbT4sB5OdqWDdpoJ28_kVJlmkZtw6dmPw8r5A/viewform?embedded=true" 
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Formulário de Notificação de Evento Adverso"
                >
                  Carregando…
                </iframe>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                📡 Integração ativa via Google Forms. Os registros são salvos na planilha vinculada ao formulário, 
                com controle de acesso do Google Workspace.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                ⚙️ Integre este formulário ao seu HIS/RIS/Prontuário eletrônico conforme LGPD e política institucional. 
                Campos mapeados a conformidade: RDC 611/2022; ACR/ESUR (registro de reação, manejo e acompanhamento).
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
