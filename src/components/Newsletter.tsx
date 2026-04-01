export default function Newsletter() {
  return (
    <section className="bg-brand-green/20 py-32 px-8 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-purple rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute top-10 left-10 -z-10 opacity-20">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path d="M0 50 Q 50 0 100 50 T 200 50" fill="none" stroke="#FF6B6B" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-semibold leading-tight">
          Subscribe to <br />
          our newsletter
        </h2>
        <p className="text-gray-600 text-lg">
          To make your stay special and even more memorable
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
