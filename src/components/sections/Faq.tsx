import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn } from '@/components/site/Reveal'

const USER_FAQS = [
  {
    q: '多少钱？补贴后实付多少？',
    a: '守护主机 499 元档，主机 + 雷达守护包 699 元档。全国多省适老化补贴 30%，目录已含跌倒监测雷达——补贴后实付约 349 / 489 元。家庭服务 9.9–29.9 元/月，首年随硬件赠送，不满意可不续。',
  },
  {
    q: '安装麻烦吗？要打孔、要配网吗？',
    a: '主机是座钟形态，放桌上插电就用——4G 内置流量，免配网、免打孔。雷达配件用免钉胶 + 定位贴纸安装，子女回家一次就能装好；提醒排程、配件绑定全部在子女的小程序上远程完成，老人零配置。',
  },
  {
    q: '我妈连智能手机都不会用，能用吗？',
    a: '正是为这样的爸妈设计的。语音只用于播报，绝不要求老人开口下指令；提醒是设备主动发起，确认只要按一下掌心大的实体键。正常使用一周，老人需要主动发起的动作次数是零——她不需要会用，只需要在场。',
  },
  {
    q: '买回去不合适，可以退吗？',
    a: '可以。硬件支持 7 天无理由退货（与主流电商平台规则一致）；首年家庭服务随硬件赠送，不涉及退订费用。正式售卖页面会写明完整退换政策。',
  },
  {
    q: '会不会泄露隐私？卧室里被看着怎么办？',
    a: '主机没有摄像头，不采图像、不常开麦克风；雷达只输出「离床 / 滞留」这类事件，云端只存「19:30 服药已确认」这样的一句话事件，不存原始数据。家属端可一键暂停或撤回监测，数据删除请求 7 日内执行。',
  },
]

const INVESTOR_FAQS = [
  {
    q: '小度、华为、小米入场怎么办？',
    a: '巨头做的是「等人唤醒」的通用入口，我们做的是「主动叫人」的垂直终端。服药确认闭环是「硬件 + 服务 + 语义运营」的脏活累活，偏离巨头主航道；巨头的账号体系决定其家属端必须是自家 App，迁微信小程序等于自我稀释。窗口期的本质是商业模式窗口，不是技术窗口——巨头下场反而教育市场、抬高品类。',
  },
  {
    q: '适老设备「闲置魔咒」怎么破？',
    a: '高闲置是多源调研的一致结论，其三大死因我们逐一免疫：①功能冗余——我们只做用药提醒、起夜守护、一键 SOS 三个场景；②交互反人类——零学习、物理大键、设备 100% 主动发起，老人「不需要会用，只需要在场」；③服务缺位——订阅含家属端闭环与异常推送。结构上，用药提醒每日 2–4 次被动触达、起夜守护每晚自动工作，高频触点是天然的防闲置结构。',
  },
  {
    q: '学生团队凭什么做成？',
    a: '早期投资本质是投人。先例已经足够多：云鲸张峻彬 26 岁学生气创业做成扫拖机器人头部；上海交大团队的馨守镯以「零学习哲学」获投；亲鹿创始团队出自小天才——「懂特定人群的产品团队」比资历重要。学生团队的真实短板是供应链与渠道，我们用成熟方案（BOM 透明、无精密结构件）、珠三角成熟代工与创业营供应链资源对冲，家属端线上渠道无需线下铺货。',
  },
]

function FaqGroup({
  title,
  items,
  idPrefix,
  tone,
}: {
  title: string
  items: { q: string; a: string }[]
  idPrefix: string
  tone: 'user' | 'investor'
}) {
  return (
    <div>
      <p
        className={`mb-4 flex items-center gap-2 text-sm font-medium tracking-[0.15em] ${
          tone === 'user' ? 'text-[#41584A]' : 'text-[#A05B38]'
        }`}
      >
        <span
          className={`h-px w-6 ${tone === 'user' ? 'bg-[#41584A]/40' : 'bg-[#A05B38]/40'}`}
        />
        {title}
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`${idPrefix}-${i}`}
            className="rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] px-6 shadow-paper data-[state=open]:shadow-paper-lg"
          >
            <AccordionTrigger className="py-6 text-left font-serif text-base font-bold text-[#3A322A] hover:no-underline md:text-lg [&>svg]:text-[#A05B38]">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-[#7C7062] md:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="FAQ · 常见问题"
          title="您想问的，正面回应"
          desc="前一组是给准备为爸妈下单的您，后一组是投资人常问的问题——都不回避。"
        />
        <FadeIn className="space-y-12">
          <FaqGroup title="给爸妈买之前，你可能想问" items={USER_FAQS} idPrefix="user" tone="user" />
          <FaqGroup title="投资人关心的问题" items={INVESTOR_FAQS} idPrefix="inv" tone="investor" />
        </FadeIn>
      </div>
    </section>
  )
}
