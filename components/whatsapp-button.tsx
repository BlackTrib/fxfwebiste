'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  const phoneNumber = '40785277566'
  const message = 'Bună! Aș dori să aflu mai multe despre serviciile voastre.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Link>
  )
}
