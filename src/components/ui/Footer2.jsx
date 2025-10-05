import { Github, Twitter, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const Footer2 = () => {
  const [email, setEmail] = useState("")

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Docs", href: "/docs" },
    { name: "Features", href: "/features" },
    { name: "NPM Package", href: "https://www.npmjs.com/package/package-particlefx", external: true },
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/AnmolTheDev" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anmol-thedev" },
    { icon: Github, href: "https://github.com/Anmol-TheDev/package-particleFx" },
    { icon: Mail, href: "mailto:contact@anmolthedev.com" },
  ]

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white px-8 py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Social */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">ParticleFX</h2>
          <p className="text-sm mb-4">
            Transform images into stunning particle effects in real-time. 
            Framework-agnostic JavaScript library with zero dependencies.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <motion.li key={i} whileHover={{ x: 5 }}>
                <a href={link.href} className="text-sm hover:text-purple-300 transition-colors">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>123 Particle Street, Animation City, PX 12345</li>
            <li>+1 (555) 123-4567 | Mon-Fri 9AM-6PM</li>
            <li>support@particlefx.com</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest updates, tips, and particle effect guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-md text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>© 2025 ParticleFX. All rights reserved.</p>
        <p className="flex items-center space-x-1">
          Made with <Heart className="w-4 h-4 text-red-500" /> by ParticleFX Team
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </motion.div>
    </footer>
  )
}

export default Footer2