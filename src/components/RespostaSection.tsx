import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RespostaSection = () => {
  const steps = [
    {
      number: "01",
      title: "Reconhecer & interromper",
      description: "Interrompa o contraste, avalie ABC (vias aéreas, respiração, circulação), posicione o paciente, acione o médico/time de emergência."
    },
    {
      number: "02",
      title: "Suporte inicial",
      description: "Oxigênio sob máscara ou cânula, monitorização (SpO₂, PA, FC), acesso venoso pérvio. Preparar adrenalina IM e demais fármacos conforme protocolo institucional."
    },
    {
      number: "03",
      title: "Algoritmo (resumo)",
      list: [
        "Urticária/prurido leve: observação, anti-histamínico conforme prescrição.",
        "Broncoespasmo: oxigênio, broncodilatador inalatório; considerar adrenalina se piora.",
        "Edema de glote/anafilaxia: adrenalina IM imediata; suporte avançado."
      ]
    },
    {
      number: "04",
      title: "Lactantes & gestantes",
      description: "Para RM com gadolínio e TC com iodado, seguir orientação médica. Em lactantes, em geral a amamentação não precisa ser interrompida; personalize conforme diretriz local."
    },
    {
      number: "05",
      title: "Risco renal",
      description: "Hidratação conforme protocolo em pacientes com DRC e alto risco. Para gadolínio em DRC estágio avançado, avaliar risco/benefício e alternativas."
    }
  ];

  const tableData = [
    {
      severity: "Leve",
      manifestations: "Náusea, vômito leve, urticária discreta",
      conduct: "Interromper contraste, reposicionar, O₂ se necessário, observar, preparar medicações conforme prescrição, registrar sinais e tempo."
    },
    {
      severity: "Moderada",
      manifestations: "Urticária difusa, broncoespasmo leve, angioedema limitado",
      conduct: "O₂, monitorização, broncodilatador sob prescrição, preparar adrenalina se evolução; manter acesso venoso, comunicação SBAR."
    },
    {
      severity: "Grave",
      manifestations: "Anafilaxia, hipotensão, edema de glote, choque",
      conduct: "Chamar emergência, adrenalina IM conforme protocolo, suporte de via aérea, RCP se indicado, preparar fluidos/medicações, documentação em tempo real."
    }
  ];

  return (
    <section id="resposta" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Resposta Imediata a Reações</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {steps.map((step) => (
          <Card key={step.number} className="shadow-card bg-card-secondary relative overflow-hidden">
            <div className="absolute top-3 left-3 text-4xl font-extrabold opacity-10">
              {step.number}
            </div>
            <CardContent className="p-5 relative">
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-sm text-muted-foreground">{step.description}</p>
              )}
              {step.list && (
                <ul className="space-y-2 mt-2">
                  {step.list.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tabela de orientação rápida (gravidade x conduta de enfermagem)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 bg-primary/10 font-semibold">Gravidade</th>
                  <th className="text-left p-3 bg-primary/10 font-semibold">Manifestações comuns</th>
                  <th className="text-left p-3 bg-primary/10 font-semibold">Condutas de enfermagem (suporte)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="p-3 font-semibold align-top">{row.severity}</td>
                    <td className="p-3 text-sm text-muted-foreground align-top">{row.manifestations}</td>
                    <td className="p-3 text-sm text-muted-foreground align-top">{row.conduct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Resumo educativo. Utilize SEMPRE o protocolo e as doses aprovadas pela sua instituição.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
