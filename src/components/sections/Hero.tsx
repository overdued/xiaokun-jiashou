import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarCheck,
  FileDown,
  Wifi,
  MessageSquareText,
  ShieldCheck,
  MessagesSquare,
  Copy,
} from 'lucide-react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const TRUST = [
  { icon: Wifi, text: '4G 免配网 · 插电即用' },
  { icon: MessageSquareText, text: '微信小程序家属端 · 免装 App' },
  { icon: ShieldCheck, text: '只传事件 · 不传原始数据' },
]

// 签名动效：今日三行事件，最后落到「话题卡」——产品差异化的具象化
const SUMMARY_STEPS = [
  { kind: 'row' as const, text: '19:42 服药已确认' },
  { kind: 'row' as const, text: '昨夜起夜 2 次' },
  { kind: 'row' as const, text: '设备正常' },
  { kind: 'topic' as const, text: '「妈这周药吃得很好，就周三忘了一次，夸夸她。」' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const stagger = reduce ? 0 : 0.55
  const stepDuration = reduce ? 0 : 0.5

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF6EE]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 75% 20%, rgba(160,91,56,0.10) 0%, rgba(160,91,56,0) 70%), radial-gradient(40% 40% at 10% 90%, rgba(65,88,74,0.08) 0%, rgba(65,88,74,0) 70%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DCC9] bg-[#FFFDF8] px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-[#A05B38] shadow-paper">
            居家老人安全守护 × 家庭话题引擎
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,5.2vw,3.8rem)] font-bold leading-[1.25] tracking-tight text-[#3A322A]">
            知道爸妈今天
            <br />
            平不平安、<span className="text-[#A05B38]">吃没吃药</span>
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-medium text-[#7C7062]">
            <span className="rounded-lg bg-[#F0E0D2]/70 px-2 py-0.5 text-[#7C4527]">雷达跌倒风险预警</span>
            <span aria-hidden="true">·</span>
            <span className="rounded-lg bg-[#F0E0D2]/70 px-2 py-0.5 text-[#7C4527]">药盒确认服药</span>
            <span aria-hidden="true">·</span>
            <span className="rounded-lg bg-[#F0E0D2]/70 px-2 py-0.5 text-[#7C4527]">话题引擎生成问候</span>
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#3A322A]">
            让每一次关心，都有话可说。
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#7C7062]">
            一台座钟形态的守护主机、两类无感配件、一个微信小程序，
            把家里的日常，变成子女回得动手的安心。
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#A05B38] px-7 py-3.5 text-base font-medium text-[#FFFDF8] shadow-paper transition-all hover:-translate-y-0.5 hover:bg-[#7C4527]"
            >
              <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />
              预约体验
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#A05B38]/40 bg-[#FFFDF8] px-7 py-3.5 text-base font-medium text-[#7C4527] transition-all hover:-translate-y-0.5 hover:border-[#A05B38]"
            >
              <FileDown className="h-5 w-5" strokeWidth={1.8} />
              留资即得 · 路演资料 + 每周话题卡样例
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST.map((t) => (
              <li key={t.text} className="flex items-center gap-2 text-sm text-[#7C7062]">
                <t.icon className="h-4 w-4 text-[#41584A]" strokeWidth={1.8} />
                {t.text}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.15, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#F0E0D2]/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCC9] shadow-paper-lg">
            <img
              src="hero-clock.jpg"
              alt="暖光台灯与座钟形态的桌面守护主机"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* 签名动效卡：今日三行 → 话题卡 */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.6 } },
            }}
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-[#E7DCC9] bg-[#FFFDF8] p-4 shadow-paper-lg sm:left-6 sm:right-auto sm:w-[19.5rem]"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="flex items-center justify-between text-xs text-[#7C7062]"
            >
              <span>今日摘要</span>
              <span className="font-medium tracking-wide text-[#A05B38]">更新于 19:45</span>
            </motion.p>
            <div className="mt-2.5 space-y-1.5">
              {SUMMARY_STEPS.map((s) => (
                <motion.div
                  key={s.text}
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : 8 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: stepDuration, ease: EASE },
                    },
                  }}
                >
                  {s.kind === 'row' ? (
                    <p className="rounded-lg bg-[#E4EAE2] px-2.5 py-1.5 text-sm font-medium text-[#41584A]">
                      {s.text}
                    </p>
                  ) : (
                    <div className="rounded-lg border border-dashed border-[#C9B99D] px-2.5 py-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-[#A05B38]">
                        <MessagesSquare className="h-3 w-3" strokeWidth={1.8} />
                        建议话题
                      </div>
                      <p className="mt-1 text-sm leading-snug text-[#3A322A]">{s.text}</p>
                      <p className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-medium text-[#7C7062]">
                        <Copy className="h-3 w-3" strokeWidth={1.8} />
                        一键复制去聊天
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
