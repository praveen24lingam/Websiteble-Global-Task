import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-semibold tracking-tight">Elementum</div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" className="hover:opacity-70 transition-opacity">Home</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Studio</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        <a href="#" className="hover:opacity-70 transition-opacity">FAQs</a>
      </div>

      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>
    </nav>
  );
}
