import { HeartHandshake } from 'lucide-react'

const LINKS = [
  { href: '#pain', label: '痛点' },
  { href: '#product', label: '产品' },
  { href: '#how', label: '原理' },
  { href: '#dual', label: '双端' },
  { href: '#evidence', label: '证据' },
  { href: '#model', label: '价格' },
  { href: '#privacy', label: '隐私' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#E7DCC9] bg-[#EFE7D8]">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#A05B38] text-[#FFFDF8]">
                <HeartHandshake className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="font-serif text-lg font-bold text-[#3A322A]">小鲲·家守</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#7C7062]">
              居家老人安全守护与家庭话题引擎。知道爸妈今天起没起床、吃没吃药；让每一次关心，都有话可说。
            </p>
          </div>
          <nav className="grid grid-cols-4 gap-x-8 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#7C7062] transition-colors hover:text-[#7C4527]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-[#E7DCC9] pt-6">
          <p className="text-xs leading-relaxed text-[#A09580]">
            本页引用数字均来自公开调研、政府文件与官方披露，详见路演资料。产品为「辅助检测 /
            安全提醒」定位，不构成医疗建议。话题卡内容由 AI 根据设备事件生成，语音播报为家属真人原声录音。
          </p>
          <p className="mt-3 text-xs text-[#A09580]">© 2026 小鲲·家守团队 · 创业营路演项目</p>
        </div>
      </div>
    </footer>
  )
}
