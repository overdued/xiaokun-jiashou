import { ShieldCheck } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { Stagger, StaggerItem } from '@/components/site/Reveal'

const PROMISES = [
  {
    title: '数据最小化',
    desc: '云端只存四类事件，不存原始雷达点云、不采图像、不常开麦克风（仅 SOS 触发时双向通话，主机灯亮明示）。「无画面采集」是我们的核心卖点。',
  },
  {
    title: '单独同意与可撤回',
    desc: '首次绑定由老人与家属双端确认，毫米波监测属敏感个人信息单独告知（大字体 + 语音播报）；家属端一键暂停/撤回，数据删除请求 7 日内执行。',
  },
  {
    title: '不做医疗宣称',
    desc: '沿用行业通行表述「辅助检测 / 安全提醒」，不宣称「防跌倒」「救命」，并在说明书中明示检测边界。',
  },
  {
    title: 'AI 身份标注',
    desc: '话题卡由事件引擎生成处标注「本内容由 AI 根据设备事件生成」，主动对照 AI 拟人化互动新规。',
  },
  {
    title: '真人录音、不模拟亲属',
    desc: '播报与留言全部为子女本人原声录音，不提供 AI 克隆亲属声音功能——主动避开监管红线，并转化为情感卖点。',
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="bg-[#F3ECDF]">
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="COMPLIANCE · 合规与隐私"
          title="把合规写成承诺"
          desc="对老人和家庭来说，信任比功能更重要。这五条写进产品，也写在这里。"
        />
        <Stagger className="space-y-4">
          {PROMISES.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="flex items-start gap-5 rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] p-6 shadow-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-paper-lg md:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4EAE2] font-serif text-lg font-bold text-[#41584A]">
                  {i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#41584A]" strokeWidth={1.8} />
                    <h3 className="font-serif text-lg font-bold text-[#3A322A]">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#7C7062]">{p.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
