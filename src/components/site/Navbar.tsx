import { useState } from 'react'
import { HeartHandshake, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#product', label: '产品' },
  { href: '#how', label: '原理' },
  { href: '#dual', label: '双端' },
  { href: '#evidence', label: '证据' },
  { href: '#model', label: '价格' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7DCC9]/70 bg-[#FAF6EE]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#A05B38] text-[#FFFDF8]">
            <HeartHandshake className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-[#3A322A]">
            小鲲·家守
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#7C7062] transition-colors hover:text-[#7C4527]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#A05B38] px-5 py-2 text-sm font-medium text-[#FFFDF8] shadow-paper transition-colors hover:bg-[#7C4527]"
          >
            预约体验
          </a>
        </nav>
        <button
          className="md:hidden text-[#3A322A]"
          onClick={() => setOpen((v) => !v)}
          aria-label="菜单"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-[#E7DCC9]/70 bg-[#FAF6EE] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#7C7062]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 w-fit rounded-full bg-[#A05B38] px-5 py-2 text-sm font-medium text-[#FFFDF8]"
            >
              预约体验
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
