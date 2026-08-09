import { Check, Landmark, Users, Building2 } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { Stagger, StaggerItem, FadeIn } from '@/components/site/Reveal'

const PLANS = [
  {
    name: '守护主机',
    price: '499',
    subsidized: '349',
    features: ['座钟形态桌面主机', '4G 免配网 · 大按键 · 一键 SOS', '真人语音播报 · 夜灯联动', '首年家庭服务随硬件赠送'],
    highlight: false,
  },
  {
    name: '主机 + 雷达守护包',
    price: '699',
    subsidized: '489',
    features: ['含守护主机全部能力', '卧室床边 + 卫生间双点雷达', '起夜 / 离床过久 / 滞留趋势告警', '首年家庭服务随硬件赠送'],
    highlight: true,
  },
  {
    name: '家庭服务订阅',
    price: '9.9–29.9',
    unit: '元/月',
    features: ['每日摘要与事件流', '话题卡 · 语音留言 · 周报', '未响应升级提醒', '首年随硬件赠送，次年起订阅'],
    highlight: false,
  },
]

const PAYERS = [
  { icon: Users, title: '子女（C 端）', desc: '「随手尽孝」价格甜点：为爸妈的安心与参与感付费，硬件 + 订阅双收入。' },
  { icon: Landmark, title: '政府补贴（G 端）', desc: '多省适老化补贴 30%，目录已含跌倒监测雷达——实付降至约 349 / 489 元。' },
  { icon: Building2, title: '机构合作（B 端）', desc: '社区养老 / 长护险服务商作为 V3 扩展出口，已被同行验证的退路。' },
]

export default function Business() {
  return (
    <section id="model" className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="PRICING & MODEL · 价格与模式"
          title="给家庭的价格，给投资人的模式"
          desc="先看价格：补贴后实付约 349 元起，首年服务随硬件赠送；投资人关心的商业结构在下方。"
        />
        <FadeIn className="mb-6">
          <p className="flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-[#41584A]">
            <span className="h-px w-6 bg-[#41584A]/40" />
            给家庭的价格
          </p>
        </FadeIn>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <StaggerItem key={p.name}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lg ${
                  p.highlight
                    ? 'border-[#A05B38]/50 bg-[#FFFDF8] ring-1 ring-[#A05B38]/30'
                    : 'border-[#E7DCC9] bg-[#FFFDF8]'
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 w-fit rounded-full bg-[#A05B38] px-3 py-1 text-xs font-medium text-[#FFFDF8]">
                    推荐组合
                  </span>
                )}
                <h3 className="font-serif text-lg font-bold text-[#3A322A]">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-serif text-4xl font-bold tracking-tight text-[#A05B38]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[#7C7062]">{p.unit ?? '元档'}</span>
                </div>
                {p.subsidized && (
                  <p className="mt-1.5 text-sm text-[#41584A]">
                    适老化补贴 30% 后实付约 <span className="font-semibold">{p.subsidized} 元</span>
                  </p>
                )}
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#7C7062]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#41584A]" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    p.highlight
                      ? 'bg-[#A05B38] text-[#FFFDF8] hover:bg-[#7C4527]'
                      : 'border border-[#A05B38]/40 text-[#7C4527] hover:border-[#A05B38]'
                  } mt-6`}
                >
                  {p.subsidized ? `补贴价约 ${p.subsidized} 元${p.name === '守护主机' ? '起' : ''} · 预约体验` : '首年免费 · 预约体验'}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.15} className="mt-12">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-[#A05B38]">
            <span className="h-px w-6 bg-[#A05B38]/40" />
            给投资人看的模式 · 硬件获客，服务留存，补贴杠杆
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {PAYERS.map((payer) => (
              <div
                key={payer.title}
                className="flex items-start gap-4 rounded-3xl border border-[#E7DCC9] bg-[#F3ECDF] p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFFDF8] text-[#A05B38] shadow-paper">
                  <payer.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-medium text-[#3A322A]">{payer.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#7C7062]">{payer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
