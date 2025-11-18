import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AlertCircle, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const maddoxScale = [
  {
    grau: "0",
    titulo: "Sem sinais de flebite",
    criterios: "Sem queixas de desconforto, sem hiperemia e ausência de dor ao toque ou infusão"
  },
  {
    grau: "1",
    titulo: "Flebite leve",
    criterios: "Hiperemia no sítio de punção com ou sem dor local"
  },
  {
    grau: "2",
    titulo: "Flebite moderada",
    criterios: "Dor no sítio de punção com eritema e/ou edema"
  },
  {
    grau: "3",
    titulo: "Flebite severa",
    criterios: "Dor no local, eritema ou edema, formação de endurecimento, cordão fibroso palpável no trajeto da veia"
  }
];

interface FlebiteAssessmentProps {
  patientName?: string;
  onSave?: (data: any) => void;
}

export const FlebiteAssessment = ({ patientName, onSave }: FlebiteAssessmentProps) => {
  const [grauFlebite, setGrauFlebite] = useState<string>("");
  const [observacoes, setObservacoes] = useState("");
  const [localPuncao, setLocalPuncao] = useState("");
  const [dataAvaliacao, setDataAvaliacao] = useState(new Date().toISOString().split('T')[0]);
  const { toast } = useToast();

  const handleSave = () => {
    if (!grauFlebite) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, selecione o grau de flebite.",
        variant: "destructive"
      });
      return;
    }

    const assessmentData = {
      patientName,
      grauFlebite,
      localPuncao,
      dataAvaliacao,
      observacoes,
      timestamp: new Date().toISOString()
    };

    if (onSave) {
      onSave(assessmentData);
    }

    toast({
      title: "Avaliação registrada",
      description: "A avaliação de flebite foi salva com sucesso."
    });

    // Reset form
    setGrauFlebite("");
    setObservacoes("");
    setLocalPuncao("");
    setDataAvaliacao(new Date().toISOString().split('T')[0]);
  };

  return (
    <Card className="shadow-card bg-card-secondary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-primary" />
          Avaliação de Flebite - Escala de Maddox
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Avaliação exclusiva para Enfermeiros conforme Parecer COREN-SP 017/2019
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="paciente">Nome do Paciente</Label>
            <Input
              id="paciente"
              value={patientName || ""}
              placeholder="Nome do paciente"
              disabled={!!patientName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="data">Data da Avaliação</Label>
            <Input
              id="data"
              type="date"
              value={dataAvaliacao}
              onChange={(e) => setDataAvaliacao(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="local">Local da Punção</Label>
          <Input
            id="local"
            value={localPuncao}
            onChange={(e) => setLocalPuncao(e.target.value)}
            placeholder="Ex: Dorso da mão direita, antebraço esquerdo"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-base font-semibold">Grau de Flebite (Escala de Maddox)</Label>
          <RadioGroup value={grauFlebite} onValueChange={setGrauFlebite}>
            {maddoxScale.map((item) => (
              <div 
                key={item.grau}
                className={`border rounded-lg p-4 transition-colors ${
                  grauFlebite === item.grau 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={item.grau} id={`grau-${item.grau}`} className="mt-1" />
                  <div className="flex-1 space-y-1">
                    <Label 
                      htmlFor={`grau-${item.grau}`} 
                      className="font-semibold cursor-pointer flex items-center gap-2"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm">
                        {item.grau}
                      </span>
                      {item.titulo}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.criterios}</p>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="observacoes">Observações Clínicas</Label>
          <Textarea
            id="observacoes"
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Descreva observações adicionais sobre sinais clínicos, conduta tomada, etc."
            rows={4}
          />
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <p className="text-xs text-muted-foreground">
            <strong>Referência:</strong> Parecer COREN-SP 017/2019 - Compete ao Enfermeiro a utilização 
            das escalas de avaliação de flebites como parte da Sistematização da Assistência de Enfermagem.
          </p>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Salvar Avaliação
        </Button>
      </CardContent>
    </Card>
  );
};
