import {
  Radar,
  Pill,
  Clock3,
  ArrowRight,
  ArrowDown,
  Cpu,
  Newspaper,
  MessageSquareQuote,
  Mic,
  Lock,
  CheckCircle2,
  CircleAlert,
  TriangleAlert,
  MessagesSquare,
} from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/Reveal'

const EVENTS = [
  { icon: CheckCircle2, label: '已完成', desc: '19:42 服药已确认', cls: 'bg-[#E4EAE2] text-[#41584A]' },
  { icon: CircleAlert, label: '未响应', desc: '60 分钟未确认，推送子女', cls: 'bg-[#F5E8D2] text-[#9A6B1F]' },
  { icon: TriangleAlert, label: '异常', desc: '离床超阈值未归', cls: 'bg-[#F0E0D2] text-[#A05B38]' },
  { icon: MessagesSquare, label: '建议话题', desc: '「爸昨晚起夜偏多…」', cls: 'bg-[#E4EAE2] text-[#41584A]' },
]

const OUTPUTS = [
  { icon: Newspaper, title: '今日摘要', desc: '三行以内说清今天' },
  { icon: MessageSquareQuote, title: '话题卡', desc: '事件变成聊得出口的话头' },
  { icon: Mic, title: '语音留言', desc: '子女原声，定时播报' },
]

function FlowArrow() {
  return (
    <>
      <ArrowRight className="hidden h-6 w-6 shrink-0 text-[#C9B99D] md:block" strokeWidth={1.8} />
      <ArrowDown className="h-6 w-6 shrink-0 text-[#C9B99D] md:hidden" strokeWidth={1.8} />
    </>
  )
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#F3ECDF]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="HOW IT WORKS · 工作原理"
          title="事件引擎：只传事件，不传原始数据"
          desc="同一条事件总线，两种渲染——未确认时是告警，确认之后沉淀为话题与趋势。"
        />
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-5">
          {/* 老人家中 */}
          <FadeIn className="w-full md:w-[30%]">
            <div className="h-full rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-6 shadow-paper">
              <p className="text-xs font-medium tracking-[0.2em] text-[#7C7062]">老人家中</p>
              <div className="mt-4 space-y-3">
                {[
                  { icon: Radar, text: '雷达守护包（床边 / 卫生间）' },
                  { icon: Pill, text: '提醒药盒配件（开合检测）' },
                ].map((s) => (
                  <div
                    key={s.text}
                    className="flex items-center gap-3 rounded-2xl bg-[#FAF6EE] px-4 py-3 text-sm text-[#3A322A]"
                  >
                    <s.icon className="h-5 w-5 shrink-0 text-[#41584A]" strokeWidth={1.8} />
                    {s.text}
                  </div>
                ))}
                <p className="text-center text-xs text-[#A09580]">↓ BLE 汇聚</p>
                <div className="flex items-center gap-3 rounded-2xl border border-[#A05B38]/25 bg-[#F0E0D2]/60 px-4 py-3 text-sm font-medium text-[#7C4527]">
                  <Clock3 className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                  桌面主机 · 4G 上报 · 本地提醒
                </div>
              </div>
            </div>
          </FadeIn>
          <FlowArrow />
          {/* 事件引擎 */}
          <FadeIn delay={0.12} className="w-full md:w-[34%]">
            <div className="h-full rounded-3xl border border-[#A05B38]/25 bg-[#FFFDF8] p-6 shadow-paper-lg">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-[#A05B38]" strokeWidth={1.8} />
                <p className="text-xs font-medium tracking-[0.2em] text-[#A05B38]">事件引擎</p>
              </div>
              <p className="mt-2 text-xs text-[#A09580]">只产出四类事件</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {EVENTS.map((e) => (
                  <div key={e.label} className={`rounded-2xl px-3.5 py-3 ${e.cls}`}>
                    <div className="flex items-center gap-1.5">
                      <e.icon className="h-4 w-4" strokeWidth={1.8} />
                      <span className="text-sm font-semibold">{e.label}</span>
                    </div>
                    <p className="mt-1 text-xs opacity-80">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FlowArrow />
          {/* 家属端 */}
          <FadeIn delay={0.24} className="w-full md:w-[30%]">
            <div className="h-full rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-6 shadow-paper">
              <p className="text-xs font-medium tracking-[0.2em] text-[#7C7062]">
                家属端 · 微信小程序
              </p>
              <Stagger className="mt-4 space-y-3">
                {OUTPUTS.map((o) => (
                  <StaggerItem key={o.title}>
                    <div className="flex items-center gap-3 rounded-2xl bg-[#FAF6EE] px-4 py-3">
                      <o.icon className="h-5 w-5 shrink-0 text-[#A05B38]" strokeWidth={1.8} />
                      <div>
                        <p className="text-sm font-medium text-[#3A322A]">{o.title}</p>
                        <p className="text-xs text-[#7C7062]">{o.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E7DCC9] bg-[#FFFDF8] px-5 py-2.5 text-sm text-[#7C7062] shadow-paper">
            <Lock className="h-4 w-4 text-[#41584A]" strokeWidth={1.8} />
            云端只存事件（如「19:30 服药已确认」），不存雷达点云、不采图像、不常开麦克风。
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
