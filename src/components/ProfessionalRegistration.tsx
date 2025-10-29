import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserCheck, IdCard, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const professionalSchema = z.object({
  nome: z.string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .trim(),
  registroProfissional: z.string()
    .min(3, "Número de registro profissional é obrigatório")
    .max(50, "Registro deve ter no máximo 50 caracteres")
    .trim()
    .regex(/^[A-Z0-9\-\/]+$/i, "Formato inválido. Use apenas letras, números, traços e barras"),
  registroEmpresa: z.string()
    .min(3, "Número de registro/cartão ponto é obrigatório")
    .max(50, "Registro deve ter no máximo 50 caracteres")
    .trim(),
});

type ProfessionalData = z.infer<typeof professionalSchema>;

interface ProfessionalRegistrationProps {
  onRegistered: (data: ProfessionalData) => void;
  formType: string;
}

export const ProfessionalRegistration = ({ onRegistered, formType }: ProfessionalRegistrationProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessionalData>({
    resolver: zodResolver(professionalSchema),
  });

  const onSubmit = async (data: ProfessionalData) => {
    setIsSubmitting(true);
    
    // Armazenar dados do profissional em sessionStorage (válido apenas durante a sessão)
    const professionalInfo = {
      ...data,
      timestamp: new Date().toISOString(),
      formType,
    };
    
    sessionStorage.setItem(`professional_${formType}`, JSON.stringify(professionalInfo));
    
    // Pequeno delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    onRegistered(data);
  };

  return (
    <Card className="shadow-card border-2 border-primary/30">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start gap-3">
          <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Identificação Profissional
            </h3>
            <p className="text-sm text-muted-foreground">
              Por favor, identifique-se antes de acessar o formulário de {formType === "evento-adverso" ? "notificação de evento adverso" : "extravasamento de contraste"}.
              Seus dados serão registrados para fins de rastreabilidade e conformidade.
            </p>
          </div>
        </div>

        <Alert>
          <IdCard className="h-4 w-4" />
          <AlertDescription className="text-xs">
            <strong>Rastreabilidade:</strong> Conforme RDC 611/2022 e boas práticas de segurança do paciente,
            é obrigatória a identificação do profissional que registra eventos adversos.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="nome">
              Nome Completo <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nome"
              placeholder="Ex: Maria da Silva Santos"
              {...register("nome")}
              className={errors.nome ? "border-destructive" : ""}
            />
            {errors.nome && (
              <p className="text-xs text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="registroProfissional">
              Número de Registro Profissional <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              <IdCard className="w-4 h-4 mt-3 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <Input
                  id="registroProfissional"
                  placeholder="Ex: COREN-SP 123456, CRM-RJ 78910"
                  {...register("registroProfissional")}
                  className={errors.registroProfissional ? "border-destructive" : ""}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  COREN, CRM, CRF, CRBM ou outro registro de conselho profissional
                </p>
                {errors.registroProfissional && (
                  <p className="text-xs text-destructive">{errors.registroProfissional.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="registroEmpresa">
              Número de Registro/Cartão Ponto da Empresa <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              <Building className="w-4 h-4 mt-3 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <Input
                  id="registroEmpresa"
                  placeholder="Ex: 2024-ENF-001, CP-5678"
                  {...register("registroEmpresa")}
                  className={errors.registroEmpresa ? "border-destructive" : ""}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Número de matrícula, cartão ponto ou código de identificação na instituição
                </p>
                {errors.registroEmpresa && (
                  <p className="text-xs text-destructive">{errors.registroEmpresa.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg text-xs text-muted-foreground space-y-1">
            <p><strong>Privacidade:</strong> Seus dados de identificação serão armazenados temporariamente durante esta sessão.</p>
            <p><strong>Uso:</strong> As informações serão utilizadas exclusivamente para rastreabilidade do registro conforme legislação sanitária vigente.</p>
            <p><strong>Segurança:</strong> Não compartilhamos seus dados com terceiros além do necessário para operação do sistema.</p>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            <UserCheck className="w-4 h-4 mr-2" />
            {isSubmitting ? "Validando..." : "Continuar para Consentimento"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center pt-2 border-t">
          <strong>Campos obrigatórios:</strong> Todos os campos marcados com * devem ser preenchidos corretamente.
        </p>
      </CardContent>
    </Card>
  );
};
