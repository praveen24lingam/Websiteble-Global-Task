import { ArrowRight } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  underlineType?: 'yellow' | 'pink' | 'green';
}

export default function FeatureSection({ title, description, image, reverse, underlineType = 'yellow' }: FeatureProps) {
  const underlineClass = `underline-${underlineType}`;
  
  return (
    <section className={`py-24 px-8 max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === 1 || i === 4 ? underlineClass : ''}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {description}
        </p>
        <a href="#" className="inline-flex items-center space-x-2 text-sm font-semibold group">
          <span>Read more</span>
          <div className="w-12 h-[1px] bg-black group-hover:w-16 transition-all"></div>
          <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="flex-1 relative">
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
            <img src={image} alt="Feature" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-red opacity-20 rounded-lg rotate-12 -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-purple opacity-20 rounded-full -z-0"></div>
          
          <svg className="absolute -bottom-20 -right-20 -z-10 opacity-30" width="300" height="200" viewBox="0 0 300 200">
            <path d="M0 100 Q 75 0 150 100 T 300 100" fill="none" stroke="#FF6B6B" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
}
