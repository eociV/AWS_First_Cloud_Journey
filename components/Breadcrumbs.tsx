
import React from 'react';
import { LayoutList, ChevronRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <div className="bg-[#f0f2f5] p-3 mb-8 flex items-center gap-2 text-sm text-[#475b75]">
      <LayoutList size={16} />
      <Link to="/" className="hover:text-[#ff9900] hover:underline">Internship Report</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

        return (
          <React.Fragment key={name}>
            <ChevronRight size={14} className="text-gray-400" />
            {isLast ? (
              <span className="font-semibold text-gray-800">{formattedName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-[#ff9900] hover:underline">
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
