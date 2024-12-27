// src/components/UtilityNav.jsx
import { Link } from 'react-router-dom';

export default function UtilityNav() {
  const links = [
    { name: 'CAMPUS LOGIN', href: '/campus-login' },
    { name: 'INTERNATIONAL', href: '/international' },
    { name: 'CRUX', href: '/crux' },
    { name: 'AWARDING BODY', href: '/awarding-body' },
    { name: 'WISE', href: '/wise' },
    { name: 'PAY FEE', href: '/pay-fee' },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  return (
   
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-end gap-2 py-1"> {/* Reduced padding from py-2 to py-1 */}
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href} 
              className="text-xs md:text-sm px-3 py-1 hover:bg-blue-900 rounded transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    
  );
}