import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="animate-fadeIn">
        <h1 className="text-6xl font-bold mb-4">Demmi</h1>
        <p className="text-2xl mb-8">DevOps Agent</p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}