import { Check, Clock3, Radar, Pill } from 'lucide-react'
import SectionHeader from '@/components/site/SectionHeader'
import { Stagger, StaggerItem } from '@/components/site/Reveal'

const ITEMS = [
  {
    icon: Clock3,
    badge: '主产品',
    name: '桌面守护主机',
    img: 'hero-clock.jpg',
    alt: '座钟形态的桌面守护主机',
    points: ['座钟形态，像日用品不像设备', '4G 内置流量免配网，插电即用', '掌心级大按键 · 真人语音播报', '一键 SOS · 光感夜灯联动'],
    foot: '家庭守护的锚点设备，每日高频交互入口',
  },
  {
    icon: Radar,
    badge: '扩展配件 A',
    name: '毫米波雷达守护包',
    img: 'radar-bedroom.jpg',
    alt: '夜间卧室床边暖光守护场景',
    points: ['卧室床边 + 卫生间双点位', '起夜 / 离床过久 / 滞留趋势告警', '零佩戴、零操作、无画面采集', '经 BLE 汇聚主机，配件免配网'],
    foot: '夜间风险的无感哨兵（首发不承诺跌倒秒报）',
  },
  {
    icon: Pill,
    badge: '扩展配件 B · 第二 SKU',
    name: '提醒药盒配件',
    img: 'pillbox.jpg',
    alt: '晨光中的药盒与温水',
    points: ['开合检测 + 服药提醒', '与主机联动：亮灯 + 语音播报', '只做提醒与检测，不碰自动分药', '服药行为的物理证据源'],
    foot: '把「吃了」变成可被确认的事实',
  },
]

export default function Products() {
  return (
    <section id="product" className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="THE KIT · 产品三件套"
          title="一台主机、两类配件、一个小程序"
          desc="配件不直接上云，全部经主机汇聚上报——降低成本与安装门槛，子女远程全代理。"
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((it) => (
            <StaggerItem key={it.name}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FAF6EE]/90 px-3 py-1 text-xs font-medium text-[#A05B38] backdrop-blur">
                    {it.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2.5">
                    <it.icon className="h-5 w-5 text-[#A05B38]" strokeWidth={1.8} />
                    <h3 className="font-serif text-lg font-bold text-[#3A322A]">{it.name}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {it.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-[#7C7062]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#41584A]" strokeWidth={2} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-5 text-xs leading-relaxed text-[#A09580]">{it.foot}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
