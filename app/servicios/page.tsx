import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Wrench, Gamepad2, Cpu, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <section className="bg-slate-900 text-white py-20 text-center">
                <div className="container px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Servicios de Reparaci&oacute;n</h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300">
                        Entendemos la importancia de tu tecnología. Nuestro equipo de expertos está listo para diagnosticar y reparar tu dispositivo con precisión y rapidez.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Móviles */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Smartphone size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">M&oacute;viles y Tablets</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                Reparamos tu smartphone o tablet en tiempo r&eacute;cord usando repuestos de m&aacute;xima calidad. Solucionamos pantallas, bater&iacute;as y fallos de placa en todas las marcas, incluyendo iPhone e iPad.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Cambio de pantalla rota o sin respuesta</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Sustituci&oacute;n de bater&iacute;a degradada</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reparaci&oacute;n de conector tipo C / Lightning</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Limpieza por da&ntilde;os de l&iacute;quidos</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=movil">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Portátiles */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Laptop size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Port&aacute;tiles</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                Devolvemos el rendimiento a tu herramienta de trabajo o estudio. Solucionamos ordenadores lentos, problemas de placa, bisagras rotas o pantallas rotas tanto en Windows como en MacBooks.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Instalaci&oacute;n SSD y ampliaci&oacute;n RAM</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Pantallas rotas o sin retroiluminaci&oacute;n</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Teclados que no responden</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reparaci&oacute;n de bisagras y carcasas</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=portatil">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Sobremesa y Gaming */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Wrench size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Sobremesa y PCs Gaming</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                Tu PC volar&aacute; como el primer d&iacute;a. Especialistas en limpieza a fondo, resoluci&oacute;n de cuelgues o problemas de temperatura en torres est&aacute;ndar y equipos gaming de alto rendimiento.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> El PC enciende pero no da imagen</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Apagados repentinos / sobrecalentamiento</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Mantenimiento y pasta t&eacute;rmica</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Montaje a medida y mejora de piezas</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=sobremesa">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Consolas */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Gamepad2 size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Consolas</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                Vuelve a jugar sin interrupciones. Servicio t&eacute;cnico avanzado para PlayStation, Xbox y Nintendo Switch. Eliminamos ruidos excesivos, errores de lectura y reparamos conectores.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Limpieza de ventiladores y ruido excesivo</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reparaci&oacute;n de conectores HDMI</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lectores de disco atascados o rotos</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Drift y reparaci&oacute;n de mandos</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=consola">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Microsoldadura */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Cpu size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Microsoldadura</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                No tires tu placa base. Reparamos a nivel de componente electr&oacute;nico. Rescatamos circuitos integrados, cortos en placa y salvamos tu equipo.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reparaci&oacute;n de IC de carga o imagen</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Recuperaci&oacute;n de pistas o pad arrancado</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Cortos en placa base</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=placa">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Recuperación de Datos */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Database size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Recuperaci&oacute;n de Datos</h2>
                            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                Sabemos lo importante que es tu informaci&oacute;n. Rescatamos fotos y archivos de discos dañados, memorias USB defectuosas o móviles "muertos".
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2 mb-6 w-full">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Discos HDD/SSD dañados o invisibles</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Borrado accidental de archivos cruciales</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Extracci&oacute;n de datos de smartphones rotos</li>
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/quote?device=datos">Pedir presupuesto en 1 minuto</Link>
                            </Button>
                        </div>

                        {/* Empresas y Remoto */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start md:col-span-2 lg:col-span-3 hover:shadow-md transition">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                                <Globe size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Soporte a Empresas y Asistencia Remota</h2>
                            <p className="text-slate-600 mb-4 flex-1 max-w-4xl">
                                Tu departamento de IT externalizado. Resolvemos incidencias de software al instante mediante asistencia a distancia, configuramos tu red y realizamos mantenimiento preventivo para Pymes y autónomos en Santander y toda España.
                            </p>
                            <div className="flex gap-4 min-w-full lg:min-w-0">
                                <Button className="text-lg px-8 h-12" asChild>
                                    <a href="https://wa.me/34630606016" target="_blank" rel="noopener noreferrer">Habla ahora por WhatsApp</a>
                                </Button>
                                <Button variant="outline" className="text-lg px-8 h-12" asChild>
                                    <Link href="/quote?device=empresa">Pedir plan para empresas</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
