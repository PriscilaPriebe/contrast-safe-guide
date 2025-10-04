import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const TriagemSection = () => {
  return (
    <section id="triagem" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Triagem de Risco & Preparação</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Checklist pré-exame</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">Histórico de <strong>reação prévia a contraste</strong> (tipo, tratamento, data).</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">Doenças: <strong>asma</strong>, DRC, IC, alergias múltiplas, mastocitose.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">Uso de <strong>beta-bloqueador</strong> (pode dificultar resposta a adrenalina).</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">Gestão de acesso venoso adequado (calibre, local, fixação) para reduzir <strong>extravasamento</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">Equipos, <strong>carrinho de emergência</strong> e <strong>oxigênio</strong> checados.</span>
              </li>
            </ul>
            <Collapsible className="mt-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg bg-card-secondary hover:bg-card-secondary/80 transition-colors">
                <span className="font-semibold text-sm">Premedicação – pontos de atenção</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 text-sm text-muted-foreground rounded-lg bg-card-secondary/50">
                Premedicação pode reduzir incidência de reações não graves em pacientes selecionados, mas 
                <strong> não elimina</strong> risco de reação grave. Decisão médica, seguindo diretrizes institucionais.
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Plano de prontidão</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {[
                "Definir papéis da equipe (líder, via aérea, medicações, documentação).",
                "Disponibilizar adrenalina IM, anti-histamínicos, corticosteroides, broncodilatadores conforme protocolo.",
                "Checar vias aéreas, sucção, ambu, cânulas, oxigênio.",
                "Briefing rápido: vias de fuga, acionamento do médico e do time de resposta rápida."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
