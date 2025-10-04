export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 py-6 border-t border-dashed border-border no-print">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} — Conteúdo educativo para Centros de Diagnóstico por Imagem. 
          Adapte aos seus protocolos, médico responsável e comissão de segurança do paciente.
        </p>
      </div>
    </footer>
  );
};
