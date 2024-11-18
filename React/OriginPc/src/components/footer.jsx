import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import { FaGithub } from 'react-icons/fa'; // Importa el ícono de GitHub

export function Footer() {
  return (
    <div className="mt-auto bg-slate-700">
      <footer className="px-4 py-3 lg:px-8 lg:py-4 bg-black text-white">
        <div className="flex justify-center gap-8">
          {['ThiagoAppe', 'juampixltzz', 'Franconext'].map((name, index) => (
            <div key={index} className="flex flex-col items-center">
              <Typography as="p" variant="small" color="blue-gray" className="font-normal">
                {name}
              </Typography>
              <Link
                to={`https://github.com/${name.toLowerCase()}`}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <Typography as="p" variant="small" color="blue-gray" className="font-normal">
            &copy; {new Date().getFullYear()} - Instituto Superior Nuestra Señora Del Buen Viaje
          </Typography>
        </div>
      </footer>
    </div>
  );
}
