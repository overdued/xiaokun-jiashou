import {
  Hand,
  Volume2,
  Radar,
  PlugZap,
  EyeOff,
  Newspaper,
  ListOrdered,
  MessageSquareQuote,
  Mic,
  Settings2,
  CalendarDays,
} from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn } from '@/components/site/Reveal'

const ELDER = [
  { icon: Hand, title: '实体大键', desc: '掌心级硅胶大键带背光；语音只用于播报，绝不要求老人开口下指令。' },
  { icon: Volume2, title: '真人语音播报', desc: '子女在小程序录音，主机用子女原声说「妈，该吃药了」——不用 AI 合成亲属声音。' },
  { icon: Radar, title: '无感传感', desc: '雷达零佩戴零操作；环境光感应夜灯随起夜自动亮起。' },
  { icon: PlugZap, title: '离线可用', desc: '提醒排程、播报、夜灯全部本地执行；断电备电维持核心提醒 4 小时。' },
  { icon: EyeOff, title: '只传事件', desc: '家属只看到四类事件，看不到原始数据、听不到环境音——没有「被监控感」。' },
]

const FAMILY = [
  { icon: Newspaper, title: '今日摘要', desc: '「药已吃 2/3 次 · 昨夜起夜 2 次 · 设备正常」' },
  { icon: ListOrdered, title: '事件流', desc: '四类事件按时间排列，未响应/异常置顶强提醒' },
  { icon: MessageSquareQuote, title: '话题卡', desc: '事件自动生成的聊天由头，一键复制去微信' },
  { icon: Mic, title: '语音留言', desc: '录音下发主机定时播报：服药提醒、生日问候' },
  { icon: Settings2, title: '设备管理', desc: '排程、绑定、流量电量全部子女代劳，老人零配置' },
  { icon: CalendarDays, title: '周报', desc: '服药依从趋势 + 夜间活动趋势 + 本周话题回顾' },
]

function PhoneMock() {
  return (
    <div className="mx-auto w-56 rounded-[2rem] border border-[#E7DCC9] bg-[#3A322A] p-2 shadow-paper-lg">
      <div className="rounded-[1.6rem] bg-[#FAF6EE] px-4 pb-5 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#D8CBB4]" />
        <p className="text-[10px] font-medium tracking-widest text-[#A05B38]">小鲲·家守 · 今日摘要</p>
        <div className="mt-2.5 space-y-1.5 text-[11px] leading-snug text-[#3A322A]">
          <p className="rounded-lg bg-[#E4EAE2] px-2.5 py-1.5">药已吃 2/3 次</p>
          <p className="rounded-lg bg-[#E4EAE2] px-2.5 py-1.5">昨夜起夜 2 次</p>
          <p className="rounded-lg bg-[#F0E0D2] px-2.5 py-1.5">设备正常</p>
        </div>
        <p className="mt-3 text-[10px] font-medium tracking-widest text-[#A05B38]">建议话题</p>
        <p className="mt-1.5 rounded-lg border border-dashed border-[#C9B99D] px-2.5 py-2 text-[11px] leading-snug text-[#7C7062]">
          「妈这周药吃得很好，就周三忘了一次，夸夸她。」
        </p>
        <div className="mt-3 flex justify-center">
          <span className="rounded-full bg-[#A05B38] px-4 py-1.5 text-[10px] font-medium text-[#FFFDF8]">
            一键复制去聊天
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Dual() {
  return (
    <section id="dual" className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="TWO SIDES · 双端体验"
          title="老人零学习，子女全掌握"
          desc="买单的是子女，使用的是老人。我们把两端的体验都设计到极致。"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 老人端 */}
          <FadeIn>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] shadow-paper">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="call-warm.jpg"
                  alt="老人与子女温馨通话插画"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#FAF6EE]/90 px-3 py-1 text-xs font-medium text-[#41584A] backdrop-blur">
                  老人端 · 零学习五原则
                </span>
              </div>
              <ul className="flex-1 space-y-4 p-7">
                {ELDER.map((e) => (
                  <li key={e.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E4EAE2] text-[#41584A]">
                      <e.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-medium text-[#3A322A]">{e.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#7C7062]">{e.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          {/* 家属端 */}
          <FadeIn delay={0.12}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] shadow-paper">
              <div className="grid gap-0 sm:grid-cols-[1fr_auto]">
                <div className="p-7 pb-4 sm:pb-7">
                  <span className="rounded-full bg-[#F0E0D2] px-3 py-1 text-xs font-medium text-[#A05B38]">
                    家属端 · 小程序六功能
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C7062]">
                    微信小程序，零安装、兄弟姐妹多人协同——主流竞品家属端全部要装
                    App，我们用微信原生关系链。
                  </p>
                </div>
                <div className="hidden items-center pr-6 sm:flex">
                  <PhoneMock />
                </div>
              </div>
              <div className="mb-6 mt-2 sm:hidden">
                <PhoneMock />
              </div>
              <ul className="grid flex-1 gap-x-6 gap-y-4 border-t border-[#E7DCC9] p-7 sm:grid-cols-2">
                {FAMILY.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0E0D2] text-[#A05B38]">
                      <f.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-medium text-[#3A322A]">{f.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#7C7062]">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
