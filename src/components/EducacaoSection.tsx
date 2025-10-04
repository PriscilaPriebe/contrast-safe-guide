import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, Printer } from "lucide-react";

export const EducacaoSection = () => {
  return (
    <section id="educacao" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Educação ao Paciente & Acompanhamento</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Orientações pós-exame
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Hidratação adequada salvo contraindicação.",
                "Alertar sobre sinais de alarme: dificuldade para respirar, edema de face/língua, urticária progressiva, febre, dor intensa no local da punção.",
                "Contato 24h/telefone do serviço para intercorrências.",
                "Registro de alergia a contraste no prontuário e fornecimento de carta/alerta ao paciente."
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
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Follow-up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Revisão telefônica em 24–72h quando indicado (especialmente reações moderadas/graves ou extravasamento relevante).",
                "Encaminhar para avaliação alergológica quando reação sugestiva de hipersensibilidade."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card bg-card-secondary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Printer className="w-5 h-5" />
            Guia impresso (modo impressão)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Use <em>Ctrl/Cmd + P</em> para imprimir esta página sem o cabeçalho. 
            Você pode destacar apenas esta seção durante a impressão.
          </p>
          <ul className="space-y-3">
            <li className="text-sm">
              <strong>O que observar em casa:</strong> falta de ar, inchaço, urticária, febre, dor intensa no local da punção.
            </li>
            <li className="text-sm">
              <strong>Se ocorrer:</strong> procure atendimento imediato e informe que realizou exame com contraste hoje.
            </li>
            <li className="text-sm flex items-center gap-2">
              <strong>Contato do serviço:</strong> 
              <span className="flex-1 border-b border-dashed border-border pb-1">__________________________</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
