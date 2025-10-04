import { Activity } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-glow">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Assistência de Enfermagem</h1>
              <p className="text-xs text-muted-foreground">Eventos adversos após uso de contraste</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#triagem", label: "Triagem & Risco" },
              { href: "#resposta", label: "Resposta Imediata" },
              { href: "#extravasacao", label: "Extravasamento" },
              { href: "#documentacao", label: "Documentação" },
              { href: "#educacao", label: "Educação" },
              { href: "#referencias", label: "Referências" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm rounded-lg hover:bg-accent/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
