import { ArrowRight } from 'lucide-react';

const offers = [
  {
    category: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    category: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    category: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  }
];

export default function Offerings() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold">
          What we <span className="underline-green">can</span> <br />
          <span className="underline-yellow">offer</span> you!
        </h2>
      </div>

      <div className="space-y-0">
        {offers.map((offer, i) => (
          <div key={i} className="group border-t border-gray-200 py-12 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-50 transition-colors px-4">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 md:mb-0 md:w-1/3">
              {offer.category}
            </div>
            <div className="text-3xl md:text-4xl font-medium flex-1">
              {offer.title}
            </div>
            <div className="mt-4 md:mt-0">
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
            </div>
          </div>
        ))}
        <div className="border-t border-gray-200"></div>
      </div>
    </section>
  );
}
