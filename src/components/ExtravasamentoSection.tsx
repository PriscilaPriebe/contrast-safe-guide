import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const ExtravasamentoSection = () => {
  return (
    <section id="extravasacao" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Extravasamento de Contraste (Iodado/Gadolínio)</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Conduta imediata</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {[
                "Interromper infusão e não retirar o cateter imediatamente.",
                "Elevar membro e tentar aspirar suavemente o contraste pelo próprio cateter.",
                "Aplicar compressas frias (se indicado), avaliar dor, edema, pele.",
                "Medição do volume estimado extravasado; marcar área na pele.",
                "Notificar equipe médica; documentar fotos (se política institucional permitir)."
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

        <Card className="shadow-card bg-card-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Sinais de alerta para escalonamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-4">
              {[
                "Dor intensa crescente, parestesia, diminuição de perfusão distal.",
                "Edema extenso (> 1/3 do segmento), pele tensa, bolhas, necrose.",
                "Extravasamento de grande volume ou em áreas de risco (dorso da mão, punho, tornozelo)."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground p-3 rounded-lg bg-background/50">
              Avaliar necessidade de cirurgia plástica/vascular conforme protocolo local.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
