import { motion } from 'motion/react';

const portraits = [
  { src: 'https://picsum.photos/seed/p1/200/200', top: '20%', left: '10%', size: '100px' },
  { src: 'https://picsum.photos/seed/p2/200/200', top: '10%', left: '30%', size: '120px' },
  { src: 'https://picsum.photos/seed/p3/200/200', top: '15%', left: '55%', size: '110px' },
  { src: 'https://picsum.photos/seed/p4/200/200', top: '12%', left: '75%', size: '130px' },
  { src: 'https://picsum.photos/seed/p5/200/200', top: '45%', left: '5%', size: '110px' },
  { src: 'https://picsum.photos/seed/p6/200/200', top: '50%', left: '40%', size: '140px' },
  { src: 'https://picsum.photos/seed/p7/200/200', top: '48%', left: '65%', size: '120px' },
  { src: 'https://picsum.photos/seed/p8/200/200', top: '42%', left: '88%', size: '115px' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-40 overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-[-50px] w-40 h-40 bg-brand-purple rounded-full opacity-80 blur-2xl -z-10"></div>
      <div className="absolute top-40 left-[-20px] -z-10">
        <svg width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 50 10 90 50 130C90 170 70 210 110 250" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
          The <span className="underline-yellow">thinkers</span> and <br />
          doers <span className="underline-pink">were changing</span> <br />
          the <span className="underline-green">status</span> Quo with
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
          We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      {/* Floating Portraits */}
      <div className="absolute inset-0 pointer-events-none">
        {portraits.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="absolute rounded-full overflow-hidden border-4 border-white shadow-lg"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
          >
            <img src={p.src} alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
