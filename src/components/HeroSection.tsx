import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="py-12">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2 shadow-card">
          <CardContent className="p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eventos Adversos a Meios de Contraste
            </h2>
            <p className="text-muted-foreground mb-6">
              Guia prático para equipes de enfermagem em Centros de Diagnóstico por Imagem (CDI). 
              Conteúdo orientativo para apoiar a segurança do paciente, o trabalho em equipe e a resposta rápida, 
              sem substituir protocolos institucionais.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-card-secondary">
                <div className="w-2 h-2 rounded-full bg-success mt-2" />
                <div>
                  <Badge variant="outline" className="mb-1">Segurança</Badge>
                  <p className="font-bold text-lg">Primeiros 5 min</p>
                  <p className="text-sm text-muted-foreground">críticos</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-card-secondary">
                <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                <div>
                  <Badge variant="outline" className="mb-1">Risco</Badge>
                  <p className="font-bold text-lg">Pré-triagem</p>
                  <p className="text-sm text-muted-foreground">reduz ocorrências</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-card-secondary">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <Badge variant="outline" className="mb-1">Equipe</Badge>
                  <p className="font-bold text-lg">SBAR</p>
                  <p className="text-sm text-muted-foreground">comunicação clara</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg border-2 border-dashed border-muted/30 bg-card-secondary/50">
              <p className="text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Aviso:</strong> Este material é educacional. Em emergências, 
                  <em className="text-warning"> siga sempre</em> o Protocolo de Emergência da instituição e ordens médicas locais.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card-secondary">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Tipos de contraste</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm">
                <strong className="text-foreground">Iodado</strong> 
                <span className="text-muted-foreground"> (TC, angiotomografia): risco de reações de hipersensibilidade imediata, extravasamento, nefrotoxicidade.</span>
              </li>
              <li className="text-sm">
                <strong className="text-foreground">Gadolínio</strong> 
                <span className="text-muted-foreground"> (RM): reações de hipersensibilidade; considerar risco de fibrose sistêmica nefrogênica em DRC grave.</span>
              </li>
            </ul>
            <h3 className="text-xl font-bold mb-4">Classificação (gravidade)</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <strong className="text-foreground">Leve:</strong> 
                <span className="text-muted-foreground"> náusea, urticária discreta, prurido.</span>
              </li>
              <li className="text-sm">
                <strong className="text-foreground">Moderada:</strong> 
                <span className="text-muted-foreground"> broncoespasmo leve, vômitos persistentes, urticária difusa, angioedema limitado.</span>
              </li>
              <li className="text-sm">
                <strong className="text-foreground">Grave:</strong> 
                <span className="text-muted-foreground"> anafilaxia, edema de glote, hipotensão, dispneia severa, choque.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
