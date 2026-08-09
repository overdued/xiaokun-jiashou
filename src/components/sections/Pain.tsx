import { HelpCircle, MonitorSmartphone, MessageCircleOff } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/Reveal'

const PAINS = [
  {
    icon: HelpCircle,
    title: '牵挂，无法证伪',
    quote: '「吃药了吗？」「吃了。」',
    desc: '电话里的问答只是仪式性确认——提醒了，但子女永远不知道爸妈到底吃没吃。关心的信息含量，趋近于零。',
  },
  {
    icon: MonitorSmartphone,
    title: '老人，学不会新设备',
    quote: '92.5% 的老人读说明书有困难',
    desc: '唤醒词、触屏、App 配网……每多一步操作就多一批放弃的人。适老设备「高闲置」是多源调研的一致结论，功能贪多是第一死因。',
  },
  {
    icon: MessageCircleOff,
    title: '想打电话，却不知说什么',
    quote: '「注意身体。」「嗯，挂了。」',
    desc: '聊不了几句就断，不是不爱，是没有具体的话头。通话需要素材，而素材藏在爸妈的日常里，无人转述。',
  },
]

export default function Pain() {
  return (
    <section id="pain" className="bg-[#F3ECDF]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="THE PAIN · 痛点"
          title="远在他乡，三件说不出口的事"
          desc="我们不是凭空想象需求——这三件事，每一份调研、每一次访谈都在重复出现。"
        />
        <FadeIn className="mb-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#A05B38]/25 bg-[#FFFDF8] px-7 py-6 text-center shadow-paper">
            <p className="text-xs font-medium tracking-[0.2em] text-[#A05B38]">北京通州 · 一键呼真实使用数据</p>
            <p className="mt-3 font-serif text-lg font-bold leading-relaxed text-[#3A322A] md:text-xl">
              亲情号码被拨出 <span className="text-[#A05B38]">2346 次</span>，急救键只按了{' '}
              <span className="text-[#A05B38]">40 余次</span>
            </p>
            <p className="mt-2 text-sm text-[#7C7062]">
              老人最常用的不是救命，是联系——安全名义进来，亲情联络留下。
            </p>
          </div>
        </FadeIn>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PAINS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-8 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E0D2] text-[#A05B38]">
                  <p.icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-bold text-[#3A322A]">{p.title}</h3>
                <p className="mt-3 rounded-xl bg-[#FAF6EE] px-4 py-2.5 text-sm italic text-[#7C4527]">
                  {p.quote}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#7C7062]">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
