import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ContactSection } from "@/components/ContactSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ClubSection } from "@/components/ClubSection";
import { ProductSlideshow } from "@/components/ProductSlideshow";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, PackageCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Marquee />
      <Hero />
      <ProductSlideshow />

      {/* Por qu&eacute; elegirnos */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Por qu&eacute; cientos de clientes conf&iacute;an en <span className="text-primary">Atipe</span></h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto italic">
              "No somos solo una tienda de inform&aacute;tica, somos tu socio tecnol&oacute;gico en Santander."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Diagn&oacute;stico Preciso</h3>
              <p className="text-slate-500">Te explicamos el problema siempre antes de tocar nada. Cero sorpresas en tu presupuesto.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <PackageCheck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Garant&iacute;a Total</h3>
              <p className="text-slate-500">Piezas de alta calidad y garant&iacute;a en cada reparaci&oacute;n para tu total tranquilidad.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <Truck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Aver&iacute;as Complejas</h3>
              <p className="text-slate-500">Resolvemos lo que otros no pueden: microsoldadura, recuperaci&oacute;n de datos y fallos en placa base.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <ShoppingBag size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Tiempos R&eacute;cord</h3>
              <p className="text-slate-500">Gran stock de repuestos para que no te quedes sin tu herramienta de trabajo o juego.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid />
      <ProductsSection />
      <ClubSection />
      <ReviewsSection />
      <ContactSection />
      <FloatingWhatsApp />

      {/* Short CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No puedes acercarte a la tienda? Te lo ponemos f&aacute;cil</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Ven a vernos a nuestras instalaciones, escr&iacute;benos por WhatsApp o solicita recogida directa si est&aacute;s fuera de Santander.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg font-bold py-6 px-10 rounded-xl" asChild>
              <a href="https://wa.me/34630606016" target="_blank" rel="noopener noreferrer">
                Habla ahora por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-bold py-6 px-10 rounded-xl bg-transparent border-white text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="#contacto">
                Ver Direcci&oacute;n y Horarios
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
