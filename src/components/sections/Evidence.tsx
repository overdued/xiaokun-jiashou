import { Phone, HeartHandshake, MessageSquareHeart } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/Reveal'

const STATS = [
  { num: '66%', label: '老年适用品由子女买走', note: '买单的是子女——家属端体验就是产品力' },
  { num: '70.8%', label: '多重用药率最高达', note: '「吃药」是每天 2–4 次的日级刚需触点' },
  { num: '×1.84', label: '起夜 ≥2 次的跌倒风险倍数', note: '起夜即风险敞口，每晚都在发生' },
  { num: '43.8%', label: '居家跌倒第一点位：床边', note: '雷达守护包的双点位由此而来' },
  { num: '78%', label: '老人跌倒后无法自行起身', note: '「没人知道」比跌倒本身更危险' },
  { num: '2346 次', label: '亲情号码呼叫 vs 急救键 40 余次', note: '通州一键呼实录：安全名义进来，亲情联络留下' },
]

const STEPS = [
  {
    days: '0–30 天',
    title: '深访 + 落地页冒烟',
    desc: '子女端深度访谈验证需求真实性；孝心内容投放落地页，目标留资率 ≥8%。',
  },
  {
    days: '31–60 天',
    title: '奥兹魔法师试点 + 意向金',
    desc: '人工模拟服务流程跑通「事件→家属→行动」闭环；收取 99 元意向金，目标支付率 ≥15%——真金白银 > 口头喜欢。',
  },
  {
    days: '61–90 天',
    title: '30–50 台工程样机留存实测',
    desc: '入户实测 7 日留存 ≥70%、30 日留存 ≥50%、误报通知关闭率 <10%；任一指标不达标，对应明确的回退路径。',
  },
]

export default function Evidence() {
  return (
    <section id="evidence" className="bg-[#F3ECDF]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="EVIDENCE · 证据与验证"
          title="用证据说话，用 90 天验证"
          desc="关键数字均来自公开调研与官方数据；我们不讲无法溯源的故事。"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <StaggerItem key={s.num}>
              <div className="h-full rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-7 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lg">
                <p className="font-serif text-4xl font-bold tracking-tight text-[#A05B38]">
                  {s.num}
                </p>
                <p className="mt-2 font-medium text-[#3A322A]">{s.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#7C7062]">{s.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 子女视角证言（示例 / 访谈节选，不虚构真实引用） */}
        <FadeIn className="mt-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: '「打电话不再干巴巴了——话题卡给了我一个开口的理由。」',
                who: '子女',
                tag: '示例',
              },
              {
                quote: '「92.5% 的老人读说明书有困难——我妈就是那一个。」',
                who: '子女',
                tag: '援引调研',
              },
              {
                quote: '「通州一键呼 2346 次——老人最常用的不是救命，是联系。」',
                who: '团队观察',
                tag: '真实数据',
              },
            ].map((v) => (
              <div
                key={v.quote}
                className="flex h-full flex-col rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-6 shadow-paper"
              >
                <p className="flex-1 text-sm leading-relaxed text-[#3A322A]">{v.quote}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs font-medium text-[#A05B38]">{v.who}</p>
                  <span className="rounded-full bg-[#F3ECDF] px-2.5 py-0.5 text-[11px] text-[#7C7062]">
                    {v.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-16 md:mt-20">
          <div className="relative rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-7 shadow-paper md:p-10">
            <span className="absolute right-6 top-6 rounded-full border border-[#A05B38]/30 bg-[#F0E0D2]/60 px-3 py-1 text-xs font-medium text-[#7C4527]">
              给投资人看
            </span>
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-5 w-5 text-[#A05B38]" strokeWidth={1.8} />
              <h3 className="font-serif text-xl font-bold text-[#3A322A] md:text-2xl">
                90 天三步验证路线
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#7C7062]">
              以「真金白银 &gt; 口头喜欢」为原则设定里程碑。
            </p>
            <div className="relative mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
              <div className="absolute left-4 top-0 hidden h-px w-[calc(100%-2rem)] bg-[#E7DCC9] md:block" />
              {STEPS.map((st, i) => (
                <div key={st.days} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#A05B38] font-serif text-sm font-bold text-[#FFFDF8]">
                      {i + 1}
                    </span>
                    <span className="rounded-full bg-[#F0E0D2] px-3 py-1 text-xs font-medium text-[#7C4527]">
                      {st.days}
                    </span>
                  </div>
                  <p className="mt-4 font-medium text-[#3A322A]">{st.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#7C7062]">{st.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-2 rounded-2xl bg-[#FAF6EE] px-5 py-4 text-sm leading-relaxed text-[#7C7062]">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#41584A]" strokeWidth={1.8} />
              差异化事实核查：唯一在售的服药「主动确认」闭环 · 唯一「事件→聊天话题」的话题引擎 ·
              主流硬件中唯一的微信小程序家属端。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <div className="flex items-start gap-4 rounded-3xl border border-[#E4EAE2] bg-[#FFFDF8] p-6 shadow-paper md:items-center md:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4EAE2] text-[#41584A]">
              <MessageSquareHeart className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <p className="text-sm leading-relaxed text-[#3A322A] md:text-base">
              <span className="font-medium text-[#41584A]">给子女的一句话：</span>
              每周日晚 8 点，一张话题卡准时到您微信——「妈这周药吃得很好，就周三忘了一次，夸夸她。」给爸妈打电话，从此有话可说。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
