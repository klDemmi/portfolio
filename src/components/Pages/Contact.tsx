import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-black/30 backdrop-blur-lg p-8 rounded-xl text-white animate-slideIn">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+33 06 77 77 77</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Paris, IDF, FR</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none transition-colors"
            ></textarea>
            <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}