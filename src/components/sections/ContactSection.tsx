import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Send, Phone, Mail, ArrowUpRight } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Contact</div>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 leading-[0.85]">
              PARLONS DE VOTRE <span className="text-gray-500">PROJET</span>
            </h2>
            
            <div className="space-y-12 mt-20">
              <a href="mailto:mitondrasoasamuel@gmail.com" className="group block">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4 flex items-center gap-2 group-hover:text-emerald-500 transition-colors">
                  <Mail size={12} /> Email
                </div>
                <div className="text-2xl md:text-3xl font-display font-medium border-b border-white/10 pb-4 flex justify-between items-center group-hover:border-emerald-500/50 transition-all">
                  mitondrasoasamuel@gmail.com
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>

              <a href="https://wa.me/261347913887" className="group block">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4 flex items-center gap-2 group-hover:text-emerald-500 transition-colors">
                  <Phone size={12} /> WhatsApp
                </div>
                <div className="text-2xl md:text-3xl font-display font-medium border-b border-white/10 pb-4 flex justify-between items-center group-hover:border-emerald-500/50 transition-all">
                  +261 34 79 138 87
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <TiltCard>
               <div className="p-1 glass-card border-white/[0.03]">
                 <div className="p-10 bg-[#070707] rounded-[calc(1.5rem-4px)]">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Identity</label>
                        <input 
                          type="text" 
                          placeholder={t('contact.name')}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-800 text-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Electronic Mail</label>
                        <input 
                          type="email" 
                          placeholder={t('contact.email')}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-800 text-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Message</label>
                        <textarea 
                          rows={3}
                          placeholder={t('contact.message')}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-800 text-lg resize-none"
                        />
                      </div>
                      <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest bg-white text-black px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all group">
                        {t('contact.send')}
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                 </div>
               </div>
             </TiltCard>

             {/* Visual accents */}
             <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
             <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
