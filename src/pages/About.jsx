import { motion as Motion } from "framer-motion";
import { Target, Users, Award, Zap } from 'lucide-react';
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in code quality, security, and performance in every project.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with continuous feedback ensures timely and successful project delivery.',
  },
];

export function About() {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [teamRef] = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <Motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Apexcify Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We are a team of passionate developers, designers, and innovators dedicated to transforming 
            businesses through technology.
          </p>
        </Motion.div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          <Motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: -30 }}
            animate={missionVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To empower businesses with innovative technology solutions that drive growth and digital transformation.
              </p>
            </div>

            <div>
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To be the leading technology partner worldwide, recognized for our exceptional service and innovation.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={missionVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Expert team with diverse technical skills',
                  'Proven track record of successful projects',
                  'Transparent communication and collaboration',
                  'Scalable solutions built for growth',
                  'Ongoing support and maintenance',
                  'Competitive pricing and flexible engagement models',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>
        </div>

        {/* Core Values */}
        <Motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-center mb-12">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-white" size={32} />
                  </div>

                  <h4 className="text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Team Section */}
        <Motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 30 }}
          animate={teamRef ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
            <h3 className="text-white mb-4">Join Our Growing Team</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology 
              and innovation.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
              View Open Positions
            </button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
