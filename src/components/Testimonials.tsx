import { Quote } from 'lucide-react';

const testimonials = [
  { src: 'https://picsum.photos/seed/t1/100/100', top: '10%', left: '5%' },
  { src: 'https://picsum.photos/seed/t2/100/100', top: '40%', left: '8%' },
  { src: 'https://picsum.photos/seed/t3/100/100', top: '70%', left: '3%' },
  { src: 'https://picsum.photos/seed/t4/100/100', top: '15%', right: '10%' },
  { src: 'https://picsum.photos/seed/t5/100/100', top: '45%', right: '5%' },
  { src: 'https://picsum.photos/seed/t6/100/100', top: '75%', right: '12%' },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          What our <span className="underline-green">customer</span> <br />
          says <span className="underline-yellow">About Us</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="bg-brand-green/30 p-12 md:p-20 rounded-[40px] relative">
          <Quote className="absolute top-10 left-10 text-gray-300" size={48} />
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 text-center italic">
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
          </p>
          <Quote className="absolute bottom-10 right-10 text-gray-300 rotate-180" size={48} />
        </div>
      </div>

      {/* Floating Customer Portraits */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md"
            style={{
              top: t.top,
              left: t.left,
              right: t.right,
            }}
          >
            <img src={t.src} alt="Customer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </section>
  );
}
