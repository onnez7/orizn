import { useRef, useState } from 'react'
import {
  IconArrowNarrowRight,
  IconBrandInstagram,
  IconBrandYoutube,
  IconChevronLeft,
  IconChevronRight,
  IconLayoutGrid,
  IconMail,
  IconPhone,
  IconPlayerPlay,
  IconPhoto,
  IconSpeakerphone,
  IconSparkles,
  IconStarFilled,
  IconVideo,
} from '@tabler/icons-react'
import heroGrid from './assets/background-grid 1.png'
import beatrizBitti from './assets/BeatrizBitti.jpg'
import logo from './assets/logo.svg'
import thumbnailImage from './assets/Thumbnails.jpg'

const navLinks = [
  { label: 'Serviço', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

const services = [
  {
    icon: IconVideo,
    title: 'Edição Dinâmica (Reels/TikTok)',
    description:
      'Vídeos curtos otimizados para retenção. Legendas pop-up, sound design imersivo e cortes rápidos para prender a atenção.',
  },
  {
    icon: IconBrandYoutube,
    title: 'Long Form (YouTube/VSL)',
    description:
      'Narrativas envolventes para vídeos longos. Storytelling visual, B-rolls estratégicos e ritmo perfeito para aumentar o watch time.',
  },
  {
    icon: IconPhoto,
    title: 'Thumbnails High-CTR',
    description:
      'O primeiro clique é o mais importante. Criamos capas que despertam curiosidade e aumentam drasticamente sua taxa de cliques.',
  },
  {
    icon: IconSparkles,
    title: 'Motion Graphics 2D/3D',
    description:
      'Animações profissionais para explicar conceitos complexos, vinhetas de marca e elementos visuais de alto padrão.',
  },
  {
    icon: IconLayoutGrid,
    title: 'Landing Pages',
    description:
      'Design e copy alinhados para converter visitantes em clientes. Layouts responsivos e focados na experiência do usuário.',
  },
  {
    icon: IconSpeakerphone,
    title: 'Copywriting Persuasivo',
    description:
      'Roteiros para vídeos e textos para vendas que conectam emocionalmente e guiam seu público para a ação.',
  },
]

const thumbnails = Array.from({ length: 8 }, (_, index) => ({
  id: `thumb-${index + 1}`,
}))

const longVideos = [
  {
    id: 'long-1',
    url: 'https://www.youtube.com/watch?v=ynsOIyb-qG0',
    kind: 'long',
    thumbnail: beatrizBitti,
  },
  {
    id: 'long-2',
    url: 'https://www.youtube.com/watch?v=j7PEE_jOrz4',
    kind: 'long',
  },
  {
    id: 'long-3',
    url: 'https://www.youtube.com/watch?v=j7PEE_jOrz4',
    kind: 'long',
  },
]

const shortVideos = Array.from({ length: 6 }, (_, index) => ({
  id: `short-${index + 1}`,
  url: 'https://www.youtube.com/shorts/Cq-7lFMNESk',
  kind: 'short',
}))

const steps = [
  {
    title: 'Briefing & Planejamento',
    description:
      'Entendemos seus objetivos, público e referências para definir o roteiro ideal.',
  },
  {
    title: 'Produção Criativa',
    description:
      'Criamos a edição, motion e copy alinhados com o posicionamento da marca.',
  },
  {
    title: 'Refino & Entrega',
    description:
      'Ajustes rápidos com foco em performance. Tudo pronto para publicar.',
  },
]

const faqs = [
  {
    question: 'Vocês fornecem o material bruto ou eu preciso enviar?',
    answer:
      'Você envia o material bruto e nós cuidamos de toda a edição, finalização e entrega no formato ideal.',
  },
  {
    question: 'Qual o prazo médio para entrega?',
    answer:
      'O prazo varia conforme o volume e a complexidade, mas normalmente entregamos em poucos dias úteis.',
  },
  {
    question: 'Posso solicitar alterações após a entrega?',
    answer:
      'Sim. Incluímos uma rodada de ajustes para garantir que o resultado fique exatamente como você espera.',
  },
  {
    question: 'Quais formatos de vídeo vocês trabalham?',
    answer:
      'Trabalhamos com Shorts, Reels, TikTok, vídeos longos para YouTube e VSL, além de formatos quadrados.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Trabalhamos com sinal para iniciar e o restante na entrega, podendo combinar pacotes mensais.',
  },
]

const reviews = [
  {
    name: 'Marina Duarte',
    role: 'CEO, NovaLabs',
    text: 'A Orizn elevou nosso conteúdo em poucas semanas. O watch time subiu e os leads vieram com muito mais qualidade.',
  },
  {
    name: 'Lucas Paredes',
    role: 'Produtor de Conteúdo',
    text: 'Edição rápida, comunicação clara e resultados reais. Foi a melhor decisão para escalar o canal.',
  },
  {
    name: 'Rafaela Costa',
    role: 'CMO, Growthify',
    text: 'Os thumbnails mudaram o jogo. CTR subiu e o posicionamento da marca ficou muito mais forte.',
  },
  {
    name: 'Gustavo Lima',
    role: 'Founder, Atlas Media',
    text: 'A qualidade da edição e a consistência das entregas fizeram nosso conteúdo ganhar outro nível de profissionalismo.',
  },
  {
    name: 'Juliana Ribeiro',
    role: 'Marketing Lead, EvoTech',
    text: 'Processo organizado e feedback rápido. Em duas semanas, nosso engajamento subiu visivelmente.',
  },
  {
    name: 'Paulo Mendes',
    role: 'YouTuber',
    text: 'As capas e cortes ficaram muito mais estratégicos. O canal passou a reter mais audiência.',
  },
]

const toEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '')
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0` : null
    }
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        const id = parsed.searchParams.get('v')
        return id
          ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`
          : null
      }
      if (parsed.pathname.startsWith('/shorts/')) {
        const id = parsed.pathname.split('/')[2]
        return id
          ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`
          : null
      }
      if (parsed.pathname.startsWith('/embed/')) {
        const id = parsed.pathname.split('/')[2]
        return id
          ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`
          : null
      }
    }
  } catch {
    return null
  }
  return null
}

function App() {
  const reviewsRef = useRef<HTMLDivElement | null>(null)
  const [activeVideo, setActiveVideo] = useState<{
    url: string
    kind: 'long' | 'short'
  } | null>(null)
  const [activeThumbnail, setActiveThumbnail] = useState<string | null>(null)
  const embedUrl = activeVideo ? toEmbedUrl(activeVideo.url) : null
  const isShortVideo = activeVideo?.kind === 'short'

  const scrollReviews = (direction: 'prev' | 'next') => {
    const container = reviewsRef.current
    if (!container) return
    const firstCard = container.querySelector<HTMLElement>('[data-review-card]')
    const cardWidth = firstCard?.offsetWidth ?? 320
    const gap = 24
    const delta = (cardWidth + gap) * (direction === 'next' ? 1 : -1)
    container.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className="bg-white font-poppins text-[#021024]">
      <header className="bg-white">
        <div className="mx-auto flex h-[70px] w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3 font-sora text-xl font-semibold text-[#005aff]">
            <img src={logo} alt="Orizn" className="h-8 w-auto" />
            <span className="sr-only">orizn</span>
          </div>
          <nav className="hidden items-center gap-8 font-sora text-xs font-medium text-[#021024] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="transition hover:text-[#005aff]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-[#005aff] px-5 py-2 text-xs font-semibold text-white shadow-[1px_4px_4px_rgba(0,90,255,0.1)] transition hover:brightness-110">
            Falar no WhatsApp
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `url(${heroGrid})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '260px 260px',
              backgroundPosition: 'center',
            }}
          />
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[58%] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-90 sm:w-[1100px] lg:w-[1400px]"
          />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 pb-20 pt-16 text-center lg:pb-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#005aff]/30 bg-[#005aff]/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#005aff]">
              <span className="h-2 w-2 rounded-full bg-[#005aff]" />
              Orizn Studio
            </span>
            <h1 className="max-w-3xl font-sora text-3xl font-bold leading-tight text-[#021024] sm:text-4xl lg:text-[40px] lg:leading-[40px]">
              <span className="block">Transformamos vídeos</span>
              <span className="block">
                em <span className="text-[#005aff]">máquinas de</span>
              </span>
              <span className="block">
                <span className="text-[#005aff]">visualização</span>.
              </span>
            </h1>
            <p className="max-w-2xl text-sm text-[#021024]/70 sm:text-base">
              Especialistas em Thumbnails de alta conversão, Edição de Vídeo
              (Reels &amp; YouTube), Animação 2D/3D e Copywriting estratégico.
              Destaque-se no algoritmo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#021024] px-6 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#021024]/90">
                Solicitar Orçamento
                <IconArrowNarrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 rounded-full border border-[#005aff] bg-white/80 px-6 py-3 text-xs font-semibold text-[#005aff] shadow-sm transition hover:bg-[#005aff]/10">
                Ver Portfólio
                <IconPlayerPlay size={16} />
              </button>
            </div>

            <div className="relative mt-6 flex w-full max-w-4xl items-center justify-center">
              <div className="relative w-full max-w-3xl rounded-[15px] border border-white bg-white/40 p-4 shadow-2xl backdrop-blur">
                <div className="relative aspect-video w-full overflow-hidden rounded-[15px]">
                  <img
                    src={thumbnailImage}
                    alt="Prévia de vídeo"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#021024]/70" />
                  <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#005aff] text-white shadow-lg">
                    <IconPlayerPlay size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#021024] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-sora text-3xl font-semibold sm:text-4xl">
                Tudo que você precisa para <span className="text-[#005aff]">escalar</span>.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Combinamos criatividade e dados. Não fazemos apenas "bonito",
                fazemos funcional e lucrativo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur transition hover:border-white/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#021024] text-white">
                    <service.icon size={22} stroke={2} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-sora text-3xl font-semibold text-[#021024] sm:text-4xl">
                Veja na prática alguns <span className="text-[#005aff]">projetos recentes</span> feitos aqui na Orizn:
              </h2>
              <p className="mt-4 text-sm text-[#021024]/70">
                Combinamos criatividade e dados. Não fazemos apenas "bonito",
                fazemos funcional e lucrativo.
              </p>
            </div>

            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#021024]">
              <span className="h-4 w-1 rounded-full bg-[#005aff]" />
              Thumbnails
            </div>

            <div className="marquee">
              {[0, 1].map((row) => (
                <div key={row} className="marquee-row">
                  <div className="marquee-track">
                    {[...thumbnails, ...thumbnails].map((item, index) => (
                      <button
                        key={`${item.id}-${index}`}
                        type="button"
                        className="marquee-card group overflow-hidden rounded-xl border border-[#021024]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        onClick={() => {
                          setActiveVideo(null)
                          setActiveThumbnail(thumbnailImage)
                        }}
                        aria-label="Abrir thumbnail em tamanho maior"
                      >
                        <img
                          src={thumbnailImage}
                          alt="Thumbnail"
                          className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#021024]">
                  <span className="h-4 w-1 rounded-full bg-[#005aff]" />
                  Vídeos Longos
                </div>
                <div className="grid gap-6">
                  {longVideos.map((video) => (
                    <button
                      key={video.id}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl border border-[#021024]/10 transition hover:-translate-y-1 hover:shadow-lg"
                      aria-label="Reproduzir vídeo longo"
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative aspect-video w-full">
                        <img
                          src={video.thumbnail ?? thumbnailImage}
                          alt="Vídeo longo"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#021024]/70 transition group-hover:bg-[#021024]/60" />
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#005aff] text-white">
                          <IconPlayerPlay size={22} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#021024]">
                  <span className="h-4 w-1 rounded-full bg-[#005aff]" />
                  Shorts &amp; Reels
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {shortVideos.map((video) => (
                    <button
                      key={video.id}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl border border-[#021024]/10 transition hover:-translate-y-1 hover:shadow-lg"
                      aria-label="Reproduzir short"
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative aspect-[9/16] w-full">
                        <img
                          src={thumbnailImage}
                          alt="Shorts"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#021024]/70 transition group-hover:bg-[#021024]/60" />
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#005aff] text-white">
                          <IconPlayerPlay size={22} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#021024] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
              <IconLayoutGrid size={14} />
              Etapa por etapa
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1.2fr]">
              <div>
                <h2 className="font-sora text-3xl font-semibold sm:text-4xl">
                  Entenda o processo de <span className="text-[#005aff]">desenvolvimento</span> do seu projeto
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Na Orizn, não dependemos de sorte. Temos um método validado para garantir consistência, qualidade e prazo em cada entrega.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Briefing guiado
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Ajustes rápidos
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Entrega no prazo
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-6 h-[calc(100%-48px)] w-px bg-white/10" />
                <div className="grid gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="relative rounded-2xl border border-white/10 bg-white/5 p-5 pl-14 backdrop-blur transition hover:border-white/30"
                    >
                      <span className="absolute left-3 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#005aff] text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
                      <h3 className="text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs text-white/70">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#005aff]/10 px-3 py-1 text-xs font-semibold text-[#005aff]">
                  Reviews
                </span>
                <h2 className="mt-4 font-sora text-3xl font-semibold text-[#021024] sm:text-4xl">
                  O que nossos clientes dizem
                </h2>
                <p className="mt-4 text-sm text-[#021024]/70">
                  Resultados reais, comunicação transparente e entregas rápidas.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollReviews('prev')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#021024]/10 text-[#021024] transition hover:bg-[#021024]/5"
                  aria-label="Reviews anteriores"
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollReviews('next')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#021024]/10 text-[#021024] transition hover:bg-[#021024]/5"
                  aria-label="Próximos reviews"
                >
                  <IconChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                ref={reviewsRef}
                className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-2"
              >
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    data-review-card
                    className="min-w-[260px] rounded-2xl border border-[#021024]/10 bg-white p-6 shadow-lg sm:min-w-[320px] lg:min-w-[360px]"
                  >
                    <div className="flex items-center gap-1 text-[#005aff]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <IconStarFilled key={index} size={18} />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-[#021024]/70">
                      {review.text}
                    </p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-[#021024]">
                        {review.name}
                      </p>
                      <p className="text-xs text-[#021024]/50">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#021024]/10 px-3 py-1 text-xs font-semibold text-[#021024]">
                  Dúvidas
                </div>
                <h2 className="mt-4 font-sora text-3xl font-semibold sm:text-4xl">
                  Perguntas <span className="text-[#005aff]">Frequentes</span>
                </h2>
                <p className="mt-4 text-sm text-[#021024]/70">
                  Combinamos design estratégico, criatividade e tecnologia para criar soluções digitais que se conectam com o seu público com identidade, clareza e valor percebido.
                </p>
                <p className="mt-4 text-sm text-[#021024]/70">
                  Aqui, entregamos tudo: copywriting, design, edição e implementação - tudo em um só lugar, com excelência. Nossa missão é elevar o nível do seu conteúdo.
                </p>
              </div>
              <div className="grid gap-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[33px] border border-[#021024]/10 bg-[#f8f8f8] px-6 py-3"
                  >
                    <summary className="flex cursor-pointer items-center gap-3 text-sm font-medium text-[#021024] list-none">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#021024] transition group-open:rotate-90">
                        <IconChevronRight size={16} />
                      </span>
                      {faq.question}
                    </summary>
                    <p className="mt-2 pl-11 text-xs text-[#021024]/70">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="investimento" className="bg-[#021024] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="rounded-[40px] bg-[#005aff] p-8 shadow-2xl lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="font-sora text-3xl font-semibold sm:text-4xl">
                    Domine o mercado agora
                  </h2>
                  <p className="mt-4 text-sm text-white/90">
                    Vamos conversar sobre o seu projeto e escalar seus resultados.
                  </p>
                  <div className="mt-6 grid gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <IconMail size={18} />
                      </span>
                      contato@orizn.studio
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <IconPhone size={18} />
                      </span>
                      +55 (65) 99802-7655
                    </div>
                  </div>
                </div>
                <form className="rounded-2xl bg-white p-6 text-[#021024] shadow-xl">
                  <div className="grid gap-4">
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      Nome
                      <input
                        type="text"
                        className="mt-2 w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder="Seu nome"
                      />
                    </label>
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      E-mail
                      <input
                        type="email"
                        className="mt-2 w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder="seuemail@email.com"
                      />
                    </label>
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      Projeto
                      <textarea
                        className="mt-2 min-h-[120px] w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder="Descreva seu projeto"
                      />
                    </label>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-[#005aff] px-4 py-3 text-xs font-semibold text-white transition hover:brightness-110"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {embedUrl ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
              isShortVideo ? 'max-w-sm' : 'max-w-4xl'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-xs text-white transition hover:bg-white/20"
              aria-label="Fechar vídeo"
            >
              Fechar
            </button>
            <div className={isShortVideo ? 'aspect-[9/16]' : 'aspect-video'}>
              <iframe
                src={embedUrl}
                title="Vídeo"
                className="h-full w-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}

      {activeThumbnail ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={() => setActiveThumbnail(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveThumbnail(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs text-white transition hover:bg-black/80"
              aria-label="Fechar imagem"
            >
              Fechar
            </button>
            <img
              src={activeThumbnail}
              alt="Thumbnail ampliada"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <footer className="bg-[#021024] py-12 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3 font-sora text-xl font-semibold text-white">
                <img src={logo} alt="Orizn" className="h-8 w-auto" />
                <span className="sr-only">orizn</span>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Combinamos design estratégico, criatividade e tecnologia para criar soluções digitais que se conectam com o seu público com identidade, clareza e valor percebido.
              </p>
            </div>
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white">Serviço</p>
              <p className="mt-3">Edição de Vídeo</p>
              <p>Web Design</p>
              <p>Copywriting</p>
              <p>Social Media</p>
            </div>
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white">Empresa</p>
              <p className="mt-3">Edição de Vídeo</p>
              <p>Web Design</p>
              <p>Copywriting</p>
              <p>Social Media</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <span>© 2024 Orizn Studio. Todos os direitos reservados.</span>
            <div className="flex items-center gap-3">
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="https://www.instagram.com"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="https://www.youtube.com"
                aria-label="YouTube"
              >
                <IconBrandYoutube size={18} />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="mailto:contato@orizn.studio"
                aria-label="Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
