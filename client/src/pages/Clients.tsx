import { ClientSection } from "../components/ClientSection";

export default function Clients() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* 🔥 Logo Slider */}
      <ClientSection />

      <div className="container mx-auto px-4">

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-muted-foreground">Successful Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-white border border-gray-200 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
            Why Clients Trust Us
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business value. 
            Our clients trust us because we build long-term partnerships focused on measurable growth and success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Tailored Solutions</h4>
              <p className="text-sm text-muted-foreground">
                Custom strategies designed for your unique business needs
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Fast Execution</h4>
              <p className="text-sm text-muted-foreground">
                Rapid development without compromising on quality
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Full Support</h4>
              <p className="text-sm text-muted-foreground">
                Ongoing maintenance and optimization for long-term success
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}