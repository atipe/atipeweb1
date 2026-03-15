import { Smartphone, Laptop, Gamepad2, Database, Shield, Wrench, Cpu, Globe } from "lucide-react";

const services = [
    {
        title: "Móviles y Tablets",
        description: "Cambio de pantalla, batería y conector. Especialistas en iPhone e iPad.",
        icon: Smartphone,
    },
    {
        title: "Portátiles y MacBooks",
        description: "Mejoras SSD, daños por líquidos, bisagras y pantallas rotas.",
        icon: Laptop,
    },
    {
        title: "PCs Sobremesa y Gaming",
        description: "Montaje a medida, limpiezas completas y solución de cuelgues.",
        icon: Wrench,
    },
    {
        title: "Consolas",
        description: "PlayStation, Xbox, Switch. Mantenimiento, HDMI y limpieza térmica.",
        icon: Gamepad2,
    },
    {
        title: "Microsoldadura",
        description: "Rescatamos chips y placas base. Si tiene arreglo, lo soldamos.",
        icon: Cpu,
    },
    {
        title: "Recuperación de Datos",
        description: "Recuperación de discos duros dañados, USBs o móviles muertos.",
        icon: Database,
    },
    {
        title: "Soporte Remoto",
        description: "Solución de incidencias al instante sin necesidad de desplazamientos.",
        icon: Globe,
    },
    {
        title: "Mantenimiento a Empresas",
        description: "Soporte preventivo, redes y seguridad para que tu negocio no pare.",
        icon: Shield,
    },
];

export function ServiceGrid() {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">¿Qué podemos arreglar hoy?</h2>
                    <p className="text-muted-foreground text-lg">
                        Nuestros técnicos especialistas están preparados para cualquier desafío. Selecciona tu dispositivo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all hover:border-primary/50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
