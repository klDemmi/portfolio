import React from 'react';

export function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl p-8 bg-black/30 backdrop-blur-lg rounded-xl text-white animate-slideIn">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
        BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>AWS & Docker</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Experiences</h3>
            <ul className="list-disc list-inside">
              <li>Senior Developer</li>
              <li>Lead Developer</li>
              <li>Freelance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}