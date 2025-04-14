'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';
import MemoTagLogo from '../components/MemoTagLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerItems = {
    company: {
      title: "MemoTag",
      description: "Revolutionizing dementia care through AI-powered technology for caregivers, doctors, and families.",
      links: [
        { name: "About Us", href: "/#" },
        { name: "Our Technology", href: "/#" },
        { name: "Our Team", href: "/#" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/#" },
        { name: "Support", href: "/#" },
        { name: "Research Papers", href: "/#" },
        { name: "Blog", href: "/#" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/#" },
        { name: "Terms of Service", href: "/#" },
        { name: "Cookie Policy", href: "/#" }
      ]
    },
    contact: {
      title: "Contact Us",
      info: [
        { icon: <MdEmail className="text-blue-400" />, text: "health@memotag.com" },
        { icon: <MdPhone className="text-blue-400" />, text: "987654 63210" },
        { icon: <MdLocationOn className="text-blue-400" />, text: "321 HealthTech , Delhi, India" }
      ]
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <MemoTagLogo className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerItems.company.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`${social.icon.type} social link`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">{footerItems.company.title}</h4>
            <ul className="space-y-3">
              {footerItems.company.links.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">{footerItems.resources.title}</h4>
            <ul className="space-y-3">
              {footerItems.resources.links.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">{footerItems.contact.title}</h4>
            <ul className="space-y-4">
              {footerItems.contact.info.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="mt-0.5 mr-3 flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© {currentYear} MemoTag Technologies. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {footerItems.legal.links.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}