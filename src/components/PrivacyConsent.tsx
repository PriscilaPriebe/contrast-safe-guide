import { useState } from "react";
import { AlertCircle, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PrivacyConsentProps {
  onConsent: () => void;
  formType: "evento-adverso" | "extravasamento";
}

export const PrivacyConsent = ({ onConsent, formType }: PrivacyConsentProps) => {
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [dataProcessingConsent, setDataProcessingConsent] = useState(false);

  const formTitle = formType === "evento-adverso" 
    ? "Notificação de Evento Adverso" 
    : "Registro de Extravasamento";

  const canProceed = lgpdConsent && dataProcessingConsent;

  return (
    <Card className="shadow-card border-2 border-warning/50">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Consentimento e Proteção de Dados
            </h3>
            <p className="text-sm text-muted-foreground">
              Este formulário coleta dados sensíveis de saúde que serão processados via Google Forms 
              e armazenados no Google Workspace da instituição.
            </p>
          </div>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs">
            <strong>LGPD - Lei Geral de Proteção de Dados:</strong> Os dados coletados 
            serão utilizados exclusivamente para gestão de qualidade, segurança do paciente 
            e conformidade regulatória (RDC 611/2022, ACR/ESUR).
          </AlertDescription>
        </Alert>

        <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Seus direitos sob a LGPD (Art. 18)
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground ml-6">
            <li>• Confirmação da existência de tratamento de dados</li>
            <li>• Acesso aos seus dados pessoais</li>
            <li>• Correção de dados incompletos ou desatualizados</li>
            <li>• Anonimização, bloqueio ou eliminação de dados</li>
            <li>• Revogação do consentimento a qualquer momento</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-2">
            <strong>Para exercer seus direitos:</strong> Entre em contato com o Encarregado de Dados (DPO) 
            da sua instituição ou através dos canais oficiais de atendimento.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="lgpd-consent"
              checked={lgpdConsent}
              onCheckedChange={(checked) => setLgpdConsent(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="lgpd-consent"
              className="text-sm leading-tight cursor-pointer"
            >
              <strong>Eu confirmo que estou ciente</strong> de que os dados inseridos no formulário "{formTitle}" 
              serão processados via Google Forms (serviço de terceiro) e armazenados conforme a política 
              de privacidade do Google Workspace, sob responsabilidade da instituição.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="data-processing-consent"
              checked={dataProcessingConsent}
              onCheckedChange={(checked) => setDataProcessingConsent(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="data-processing-consent"
              className="text-sm leading-tight cursor-pointer"
            >
              <strong>Eu concordo</strong> com o processamento dos dados de saúde para fins de 
              notificação de eventos adversos, gestão de qualidade e conformidade regulatória, 
              e estou ciente dos meus direitos sob a LGPD.
            </label>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onConsent}
            disabled={!canProceed}
            className="flex-1"
          >
            <Shield className="w-4 h-4 mr-2" />
            Aceitar e Acessar Formulário
          </Button>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
          <p><strong>Retenção de dados:</strong> Os dados serão mantidos pelo período necessário para cumprimento de obrigações legais e regulatórias (mínimo: conforme RDC 611/2022).</p>
          <p><strong>Segurança:</strong> Conexão criptografada (HTTPS). Controle de acesso via Google Workspace da instituição.</p>
          <p><strong>Compartilhamento:</strong> Dados não serão compartilhados com terceiros além do necessário para operação do serviço (Google Workspace).</p>
        </div>
      </CardContent>
    </Card>
  );
};
