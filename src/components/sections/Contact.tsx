import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Send, Gift, FileDown, MessageSquareHeart, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn } from '@/components/site/Reveal'

const ROLES = ['子女', '投资人', '合作方'] as const

const BENEFITS = [
  { icon: Gift, title: '定向体验资格', desc: '正式版上线即通知' },
  { icon: FileDown, title: '全套路演资料', desc: '留资后邮件发送' },
  { icon: MessageSquareHeart, title: '每周话题卡样例', desc: '连续 3 期试用' },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<(typeof ROLES)[number]>('子女')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('请填写您的姓名')
      return
    }
    if (!/^1\d{10}$/.test(phone.trim())) {
      setError('请填写 11 位手机号码')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#F3ECDF]">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="GET IN TOUCH · 联系我们"
          title="预约体验，或索取路演资料"
          desc="留下您的联系方式，我们会尽快与您联系——无论您是想为爸妈了解的子女，还是想聊聊的投资人与合作方。"
        />
        <FadeIn className="mb-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-3 rounded-2xl border border-[#E7DCC9] bg-[#FFFDF8] px-4 py-3.5 shadow-paper"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0E0D2] text-[#A05B38]">
                  <b.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#3A322A]">{b.title}</p>
                  <p className="mt-0.5 text-xs text-[#7C7062]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-7 shadow-paper md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4EAE2]">
                    <CheckCircle2 className="h-8 w-8 text-[#41584A]" strokeWidth={1.8} />
                  </span>
                  <p className="mt-5 font-serif text-xl font-bold text-[#3A322A]">已收到，谢谢您</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#7C7062]">
                    我们会在 1–2 个工作日内与您联系。{role === '投资人' ? '路演资料将随邮件一并发送。' : ''}
                    正式版上线后，将为您发送小程序体验入口。
                  </p>
                  <p className="mt-3 rounded-full bg-[#FAF6EE] px-4 py-1.5 text-xs text-[#A09580]">
                    当前为 demo 演示，提交不会真实发送
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setName('')
                      setPhone('')
                    }}
                    className="mt-6 text-sm text-[#A05B38] underline-offset-4 hover:underline"
                  >
                    再填一份
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#3A322A]">
                        姓名
                      </label>
                      <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="怎么称呼您"
                        className="w-full rounded-xl border border-[#E7DCC9] bg-[#FAF6EE] px-4 py-3 text-sm text-[#3A322A] outline-none transition-colors placeholder:text-[#B7AB97] focus:border-[#A05B38]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#3A322A]">
                        电话
                      </label>
                      <input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="11 位手机号码"
                        inputMode="numeric"
                        className="w-full rounded-xl border border-[#E7DCC9] bg-[#FAF6EE] px-4 py-3 text-sm text-[#3A322A] outline-none transition-colors placeholder:text-[#B7AB97] focus:border-[#A05B38]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-sm font-medium text-[#3A322A]">您的身份</span>
                    <div className="flex gap-3">
                      {ROLES.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                            role === r
                              ? 'border-[#A05B38] bg-[#F0E0D2] text-[#7C4527]'
                              : 'border-[#E7DCC9] bg-[#FAF6EE] text-[#7C7062] hover:border-[#C9B99D]'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                  {error && <p className="text-sm text-[#A05B38]">{error}</p>}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A05B38] px-7 py-3.5 text-base font-medium text-[#FFFDF8] shadow-paper transition-all hover:-translate-y-0.5 hover:bg-[#7C4527]"
                  >
                    <Send className="h-5 w-5" strokeWidth={1.8} />
                    预约体验并领取资料
                  </button>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-[#FAF6EE] px-5 py-4">
                    <p className="flex items-center gap-2 text-sm text-[#3A322A]">
                      <MessageCircle className="h-4 w-4 shrink-0 text-[#41584A]" strokeWidth={1.8} />
                      想先聊聊？添加微信
                      <span className="font-semibold text-[#7C4527]">xiaokun-jiashou</span>
                      <span className="text-xs text-[#A09580]">（备注：子女 / 投资人）</span>
                    </p>
                    <p className="text-xs text-[#A09580]">当前为演示，暂未开通</p>
                  </div>
                  <p className="text-center text-xs text-[#A09580]">
                    本表单为 demo 演示，提交不会真实发送；我们仅将您的信息用于本次联系，不会用于任何其他用途。
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
