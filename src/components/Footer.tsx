export default function Footer() {
  return (
    <footer className="bg-brand-green/20 pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Studio</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Service</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">Terms & Policies</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Explore</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Accesibility</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">Follow Us</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Youtube</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">Terms & Policies</h4>
          <div className="space-y-4 text-gray-600">
            <p>1498w Fluton ste, STE<br />2D Chicgo, IL 63867.</p>
            <p>(123) 456789000</p>
            <p>info@elementum.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}
