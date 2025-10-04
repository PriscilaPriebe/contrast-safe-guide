import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ExtravasamentoForm = () => {
  return (
    <section id="extravasamento-form" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Registro de Extravasamento de Contraste</h2>
      <Card className="shadow-card bg-card-secondary">
        <CardHeader>
          <CardTitle>Formulário de Extravasamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSelgeAEJFm3BnekHzTrG63bJV2aMUhdYo7VMVDiODmC0rDzsA/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Formulário de Extravasamento de Contraste"
            >
              Carregando…
            </iframe>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            📡 Integração ativa via Google Forms. Os registros são salvos na planilha vinculada ao formulário, 
            com controle de acesso do Google Workspace.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
