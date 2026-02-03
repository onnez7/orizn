import { useEffect, useRef, useState } from 'react'
import {
  IconArrowNarrowRight,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconChevronLeft,
  IconChevronRight,
  IconLayoutGrid,
  IconMail,
  IconPlayerPlay,
  IconPhoto,
  IconSpeakerphone,
  IconSparkles,
  IconStarFilled,
  IconVideo,
} from '@tabler/icons-react'
import heroGrid from './assets/background-grid 1.png'
import beatrizBitti from './assets/BeatrizBitti.jpg'
import brenoThumb from './assets/breno.jpg'
import elProfessorThumb from './assets/elprofessor.jpg'
import shortBrenoThumb from './assets/shortbreno.jpg'
import shortFelipeThumb from './assets/shortfelipe.jpg'
import shortLucasThumb from './assets/shortlucas.jpg'
import shortTalesThumb from './assets/shorttales.jpg'
import shortThiagoThumb from './assets/shortthiago.jpg'
import shortVideoThumb from './assets/shortvideo.png'
import logo from './assets/logo.svg'
import thumbnailImage from './assets/Thumbnails.jpg'
import vimeoThumb from './assets/VimeoThumb.png'
import thumb1Jpg from './assets/thumbnail (1).jpg'
import thumb1Png from './assets/thumbnail (1).png'
import thumb2Jpg from './assets/thumbnail (2).jpg'
import thumb3Png from './assets/thumbnail (3).png'
import thumb4Jpg from './assets/thumbnail (4).jpg'
import thumb4Png from './assets/thumbnail (4).png'
import thumb5Jpg from './assets/thumbnail (5).jpg'
import thumb5Png from './assets/thumbnail (5).png'
import thumb6Jpg from './assets/thumbnail (6).jpg'
import thumb6Png from './assets/thumbnail (6).png'
import thumb7Jpg from './assets/thumbnail (7).jpg'
import thumb8Jpg from './assets/thumbnail (8).jpg'
import thumb9Jpg from './assets/thumbnail (9).jpg'
import thumb10Jpg from './assets/thumbnail (10).jpg'

type VideoKind = 'long' | 'short'

type Video = {
  id: string
  url: string
  kind: VideoKind
  thumbnail?: string
}

const translations = {
  pt: {
    navLinks: [
      { label: 'Serviço', href: '#servicos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'Investimento', href: '#investimento' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      line1: 'Transformamos vídeos',
      line2: 'em máquinas de',
      line3: 'visualização.',
      description:
        'Especialistas em Thumbnails de alta conversão, Edição de Vídeo (Reels & YouTube), Animação 2D/3D e Copywriting estratégico. Destaque-se no algoritmo.',
      primaryCta: 'Solicitar Orçamento',
      secondaryCta: 'Ver Portfólio',
      previewAlt: 'Prévia de vídeo',
      previewAria: 'Reproduzir prévia de vídeo',
    },
    services: {
      title: 'Tudo que você precisa para',
      highlight: 'escalar',
      description:
        'Combinamos criatividade e dados. Não fazemos apenas "bonito", fazemos funcional e lucrativo.',
      items: [
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
      ],
    },
    portfolio: {
      title: 'Veja na prática alguns',
      highlight: 'projetos recentes',
      subtitle: 'feitos aqui na Orizn:',
      description:
        'Combinamos criatividade e dados. Não fazemos apenas "bonito", fazemos funcional e lucrativo.',
      thumbnailsLabel: 'Thumbnails',
      longLabel: 'Vídeos Longos',
      shortLabel: 'Shorts & Reels',
      longAria: 'Reproduzir vídeo longo',
      shortAria: 'Reproduzir short',
      longAlt: 'Vídeo longo',
      shortAlt: 'Shorts',
    },
    process: {
      pill: 'Etapa por etapa',
      title: 'Entenda o processo de',
      highlight: 'desenvolvimento',
      suffix: 'do seu projeto',
      description:
        'Na Orizn, não dependemos de sorte. Temos um método validado para garantir consistência, qualidade e prazo em cada entrega.',
      chips: ['Briefing guiado', 'Ajustes rápidos', 'Entrega no prazo'],
      steps: [
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
      ],
    },
    reviews: {
      pill: 'Reviews',
      title: 'O que nossos clientes dizem',
      description: 'Resultados reais, comunicação transparente e entregas rápidas.',
      prevLabel: 'Reviews anteriores',
      nextLabel: 'Próximos reviews',
      items: [
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
      ],
    },
    faq: {
      pill: 'Dúvidas',
      title: 'Perguntas',
      highlight: 'Frequentes',
      description1:
        'Combinamos design estratégico, criatividade e tecnologia para criar soluções digitais que se conectam com o seu público com identidade, clareza e valor percebido.',
      description2:
        'Aqui, entregamos tudo: copywriting, design, edição e implementação - tudo em um só lugar, com excelência. Nossa missão é elevar o nível do seu conteúdo.',
      items: [
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
      ],
    },
    contact: {
      title: 'Domine o mercado agora',
      description: 'Vamos conversar sobre o seu projeto e escalar seus resultados.',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      projectLabel: 'Projeto',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seuemail@email.com',
      projectPlaceholder: 'Descreva seu projeto',
      button: 'Solicitar Orçamento',
    },
    footer: {
      description:
        'Combinamos design estratégico, criatividade e tecnologia para criar soluções digitais que se conectam com o seu público com identidade, clareza e valor percebido.',
      servicesTitle: 'Serviço',
      servicesItems: ['Edição de Vídeo', 'Web Design', 'Copywriting', 'Social Media'],
      companyTitle: 'Empresa',
      companyItems: ['Edição de Vídeo', 'Web Design', 'Copywriting', 'Social Media'],
      copyright: '© 2024 Orizn Studio. Todos os direitos reservados.',
    },
    common: {
      close: 'Fechar',
      closeVideo: 'Fechar vídeo',
      closeImage: 'Fechar imagem',
      videoTitle: 'Vídeo',
    },
  },
  en: {
    navLinks: [
      { label: 'Services', href: '#servicos' },
      { label: 'Process', href: '#processo' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Investment', href: '#investimento' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      line1: 'We turn videos',
      line2: 'into viewing',
      line3: 'machines.',
      description:
        'Specialists in high-converting Thumbnails, Video Editing (Reels & YouTube), 2D/3D Animation, and strategic Copywriting. Stand out in the algorithm.',
      primaryCta: 'Request a Quote',
      secondaryCta: 'View Portfolio',
      previewAlt: 'Video preview',
      previewAria: 'Play video preview',
    },
    services: {
      title: 'Everything you need to',
      highlight: 'scale',
      description:
        'We combine creativity and data. We do not just make it look good, we make it work and convert.',
      items: [
        {
          icon: IconVideo,
          title: 'Dynamic Editing (Reels/TikTok)',
          description:
            'Short videos optimized for retention. Pop-up captions, immersive sound design, and fast cuts to hold attention.',
        },
        {
          icon: IconBrandYoutube,
          title: 'Long Form (YouTube/VSL)',
          description:
            'Engaging narratives for long videos. Visual storytelling, strategic B-rolls, and the perfect pace to boost watch time.',
        },
        {
          icon: IconPhoto,
          title: 'High-CTR Thumbnails',
          description:
            'The first click is the most important. We design covers that spark curiosity and lift your CTR.',
        },
        {
          icon: IconSparkles,
          title: '2D/3D Motion Graphics',
          description:
            'Professional animations for complex ideas, brand intros, and high-end visual elements.',
        },
        {
          icon: IconLayoutGrid,
          title: 'Landing Pages',
          description:
            'Design and copy aligned to convert visitors into clients. Responsive layouts focused on user experience.',
        },
        {
          icon: IconSpeakerphone,
          title: 'Persuasive Copywriting',
          description:
            'Scripts and sales copy that connect emotionally and drive your audience to action.',
        },
      ],
    },
    portfolio: {
      title: 'See in practice some',
      highlight: 'recent projects',
      subtitle: 'made here at Orizn:',
      description:
        'We combine creativity and data. We do not just make it look good, we make it work and convert.',
      thumbnailsLabel: 'Thumbnails',
      longLabel: 'Long Videos',
      shortLabel: 'Shorts & Reels',
      longAria: 'Play long video',
      shortAria: 'Play short',
      longAlt: 'Long video',
      shortAlt: 'Short',
    },
    process: {
      pill: 'Step by step',
      title: 'Understand the process of',
      highlight: 'development',
      suffix: 'for your project',
      description:
        'At Orizn, we do not rely on luck. We use a proven method to ensure consistency, quality, and deadlines.',
      chips: ['Guided briefing', 'Fast revisions', 'On-time delivery'],
      steps: [
        {
          title: 'Briefing & Planning',
          description:
            'We understand your goals, audience, and references to define the ideal script.',
        },
        {
          title: 'Creative Production',
          description:
            'We create the edit, motion, and copy aligned with your brand positioning.',
        },
        {
          title: 'Refine & Deliver',
          description:
            'Fast adjustments with performance in mind. Everything ready to publish.',
        },
      ],
    },
    reviews: {
      pill: 'Reviews',
      title: 'What our clients say',
      description: 'Real results, clear communication, and fast delivery.',
      prevLabel: 'Previous reviews',
      nextLabel: 'Next reviews',
      items: [
        {
          name: 'Marina Duarte',
          role: 'CEO, NovaLabs',
          text: 'Orizn elevated our content in a few weeks. Watch time went up and leads came with much higher quality.',
        },
        {
          name: 'Lucas Paredes',
          role: 'Content Creator',
          text: 'Fast editing, clear communication, and real results. It was the best decision to scale the channel.',
        },
        {
          name: 'Rafaela Costa',
          role: 'CMO, Growthify',
          text: 'The thumbnails changed the game. CTR increased and our brand positioning became much stronger.',
        },
        {
          name: 'Gustavo Lima',
          role: 'Founder, Atlas Media',
          text: 'The editing quality and delivery consistency took our content to a new professional level.',
        },
        {
          name: 'Juliana Ribeiro',
          role: 'Marketing Lead, EvoTech',
          text: 'Organized process and fast feedback. In two weeks, our engagement noticeably increased.',
        },
        {
          name: 'Paulo Mendes',
          role: 'YouTuber',
          text: 'The covers and cuts became far more strategic. The channel retained more audience.',
        },
      ],
    },
    faq: {
      pill: 'FAQ',
      title: 'Frequently',
      highlight: 'Asked Questions',
      description1:
        'We combine strategic design, creativity, and technology to build digital solutions that connect with your audience.',
      description2:
        'Here, we deliver everything: copywriting, design, editing, and implementation - all in one place, with excellence.',
      items: [
        {
          question: 'Do you provide raw material or should I send it?',
          answer:
            'You send the raw material and we handle all editing, finishing, and delivery in the best format.',
        },
        {
          question: 'What is the average delivery time?',
          answer:
            'It varies by volume and complexity, but we typically deliver within a few business days.',
        },
        {
          question: 'Can I request changes after delivery?',
          answer:
            'Yes. We include one revision round to make sure it is exactly what you expect.',
        },
        {
          question: 'Which video formats do you work with?',
          answer:
            'Shorts, Reels, TikTok, long-form YouTube videos, and square formats.',
        },
        {
          question: 'How does payment work?',
          answer:
            'We start with a deposit and the remainder on delivery, with monthly packages available.',
        },
      ],
    },
    contact: {
      title: 'Dominate the market now',
      description: 'Let’s talk about your project and scale your results.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      projectLabel: 'Project',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      projectPlaceholder: 'Describe your project',
      button: 'Request a Quote',
    },
    footer: {
      description:
        'We combine strategic design, creativity, and technology to build digital solutions that connect with your audience.',
      servicesTitle: 'Services',
      servicesItems: ['Video Editing', 'Web Design', 'Copywriting', 'Social Media'],
      companyTitle: 'Company',
      companyItems: ['Video Editing', 'Web Design', 'Copywriting', 'Social Media'],
      copyright: '© 2024 Orizn Studio. All rights reserved.',
    },
    common: {
      close: 'Close',
      closeVideo: 'Close video',
      closeImage: 'Close image',
      videoTitle: 'Video',
    },
  },
}

const thumbnails = [
  { id: 'thumb-1', src: thumb1Jpg },
  { id: 'thumb-2', src: thumb1Png },
  { id: 'thumb-3', src: thumb2Jpg },
  { id: 'thumb-4', src: thumb3Png },
  { id: 'thumb-5', src: thumb4Jpg },
  { id: 'thumb-6', src: thumb4Png },
  { id: 'thumb-7', src: thumb5Jpg },
  { id: 'thumb-8', src: thumb5Png },
  { id: 'thumb-9', src: thumb6Jpg },
  { id: 'thumb-10', src: thumb6Png },
  { id: 'thumb-11', src: thumb7Jpg },
  { id: 'thumb-12', src: thumb8Jpg },
  { id: 'thumb-13', src: thumb9Jpg },
  { id: 'thumb-14', src: thumb10Jpg },
]

const longVideos: Video[] = [
  {
    id: 'long-1',
    url: 'https://www.youtube.com/watch?v=ynsOIyb-qG0',
    kind: 'long',
    thumbnail: beatrizBitti,
  },
  {
    id: 'long-2',
    url: 'https://www.youtube.com/watch?v=8UmFYdn8vE4',
    kind: 'long',
    thumbnail: brenoThumb,
  },
  {
    id: 'long-3',
    url: 'https://www.youtube.com/watch?v=l8cFiZbW4iw',
    kind: 'long',
    thumbnail: elProfessorThumb,
  },
]

const shortVideos: Video[] = [
  {
    id: 'short-1',
    url: 'https://vimeo.com/1161450240?share=copy&fl=sv&fe=ci',
    kind: 'short',
    thumbnail: shortVideoThumb,
  },
  {
    id: 'short-2',
    url: 'https://www.youtube.com/shorts/iD4yJkyEqWU',
    kind: 'short',
    thumbnail: shortBrenoThumb,
  },
  {
    id: 'short-3',
    url: 'https://vimeo.com/1161487684?share=copy&fl=sv&fe=ci',
    kind: 'short',
    thumbnail: shortLucasThumb,
  },
  {
    id: 'short-4',
    url: 'https://vimeo.com/1161487651?fl=ip&fe=ec',
    kind: 'short',
    thumbnail: shortTalesThumb,
  },
  {
    id: 'short-5',
    url: 'https://vimeo.com/1161487620?fl=ip&fe=ec',
    kind: 'short',
    thumbnail: shortThiagoThumb,
  },
  {
    id: 'short-6',
    url: 'https://vimeo.com/1161487597?fl=ip&fe=ec',
    kind: 'short',
    thumbnail: shortFelipeThumb,
  },
]

const heroPreviewVideo: Video = {
  id: 'hero-preview',
  url: 'https://vimeo.com/1161435058?share=copy&fl=sv&fe=ci',
  kind: 'long',
}

const toEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('vimeo.com')) {
      const pathParts = parsed.pathname.split('/').filter(Boolean)
      const id = pathParts[0]
      return id
        ? `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&title=0&byline=0&portrait=0`
        : null
    }
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
  const [language, setLanguage] = useState<'pt' | 'en'>(() => {
    if (typeof navigator === 'undefined') return 'pt'
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const [activeThumbnail, setActiveThumbnail] = useState<string | null>(null)
  const embedUrl = activeVideo ? toEmbedUrl(activeVideo.url) : null
  const isShortVideo = activeVideo?.kind === 'short'
  const copy = translations[language]
  const navLinks = copy.navLinks
  const services = copy.services.items
  const steps = copy.process.steps
  const faqs = copy.faq.items
  const reviews = copy.reviews.items

  const scrollReviews = (direction: 'prev' | 'next') => {
    const container = reviewsRef.current
    if (!container) return
    const firstCard = container.querySelector<HTMLElement>('[data-review-card]')
    const cardWidth = firstCard?.offsetWidth ?? 320
    const gap = 24
    const delta = (cardWidth + gap) * (direction === 'next' ? 1 : -1)
    container.scrollBy({ left: delta, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof navigator === 'undefined') return
    const detected = navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
    setLanguage(detected)
  }, [])

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
          <a
            href="#investimento"
            className="rounded-full bg-[#005aff] px-5 py-2 text-xs font-semibold text-white shadow-[1px_4px_4px_rgba(0,90,255,0.1)] transition hover:brightness-110"
          >
            {copy.hero.primaryCta}
          </a>
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
              <span className="block">{copy.hero.line1}</span>
              <span className="block">
                <span className="text-[#005aff]">{copy.hero.line2}</span>
              </span>
              <span className="block">
                <span className="text-[#005aff]">{copy.hero.line3}</span>
              </span>
            </h1>
            <p className="max-w-2xl text-sm text-[#021024]/70 sm:text-base">
              {copy.hero.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#investimento"
                className="flex items-center gap-2 rounded-full bg-[#021024] px-6 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#021024]/90"
              >
                {copy.hero.primaryCta}
                <IconArrowNarrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="flex items-center gap-2 rounded-full border border-[#005aff] bg-white/80 px-6 py-3 text-xs font-semibold text-[#005aff] shadow-sm transition hover:bg-[#005aff]/10"
              >
                {copy.hero.secondaryCta}
                <IconPlayerPlay size={16} />
              </a>
            </div>

            <div className="relative mt-6 flex w-full max-w-4xl items-center justify-center">
              <div className="relative w-full max-w-3xl rounded-[15px] border border-white bg-white/40 p-4 shadow-2xl backdrop-blur">
                <button
                  type="button"
                  className="relative w-full overflow-hidden rounded-[15px] transition hover:shadow-xl"
                  onClick={() => {
                    setActiveThumbnail(null)
                    setActiveVideo(heroPreviewVideo)
                  }}
                  aria-label={copy.hero.previewAria}
                >
                  <div className="relative aspect-video w-full">
                    <img
                      src={vimeoThumb}
                      alt={copy.hero.previewAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#021024]/70" />
                    <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#005aff] text-white shadow-lg">
                      <IconPlayerPlay size={24} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#021024] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-sora text-3xl font-semibold sm:text-4xl">
                {copy.services.title}{' '}
                <span className="text-[#005aff]">{copy.services.highlight}</span>.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                {copy.services.description}
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
                {copy.portfolio.title}{' '}
                <span className="text-[#005aff]">{copy.portfolio.highlight}</span>{' '}
                {copy.portfolio.subtitle}
              </h2>
              <p className="mt-4 text-sm text-[#021024]/70">
                {copy.portfolio.description}
              </p>
            </div>

            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#021024]">
              <span className="h-4 w-1 rounded-full bg-[#005aff]" />
              {copy.portfolio.thumbnailsLabel}
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
                          setActiveThumbnail(item.src)
                        }}
                        aria-label="Abrir thumbnail em tamanho maior"
                      >
                        <img
                          src={item.src}
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
                  {copy.portfolio.longLabel}
                </div>
                <div className="grid gap-6">
                  {longVideos.map((video) => (
                    <button
                      key={video.id}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl border border-[#021024]/10 transition hover:-translate-y-1 hover:shadow-lg"
                      aria-label={copy.portfolio.longAria}
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative aspect-video w-full">
                        <img
                          src={video.thumbnail ?? thumbnailImage}
                          alt={copy.portfolio.longAlt}
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
                  {copy.portfolio.shortLabel}
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {shortVideos.map((video) => (
                    <button
                      key={video.id}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl border border-[#021024]/10 transition hover:-translate-y-1 hover:shadow-lg"
                      aria-label={copy.portfolio.shortAria}
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative aspect-[9/16] w-full">
                        <img
                          src={video.thumbnail ?? thumbnailImage}
                          alt={copy.portfolio.shortAlt}
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
              {copy.process.pill}
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1.2fr]">
              <div>
                <h2 className="font-sora text-3xl font-semibold sm:text-4xl">
                  {copy.process.title}{' '}
                  <span className="text-[#005aff]">{copy.process.highlight}</span>{' '}
                  {copy.process.suffix}
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  {copy.process.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
                  {copy.process.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    >
                      {chip}
                    </span>
                  ))}
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
                  {copy.reviews.pill}
                </span>
                <h2 className="mt-4 font-sora text-3xl font-semibold text-[#021024] sm:text-4xl">
                  {copy.reviews.title}
                </h2>
                <p className="mt-4 text-sm text-[#021024]/70">
                  {copy.reviews.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollReviews('prev')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#021024]/10 text-[#021024] transition hover:bg-[#021024]/5"
                  aria-label={copy.reviews.prevLabel}
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollReviews('next')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#021024]/10 text-[#021024] transition hover:bg-[#021024]/5"
                  aria-label={copy.reviews.nextLabel}
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
                  {copy.faq.pill}
                </div>
                <h2 className="mt-4 font-sora text-3xl font-semibold sm:text-4xl">
                  {copy.faq.title}{' '}
                  <span className="text-[#005aff]">{copy.faq.highlight}</span>
                </h2>
                <p className="mt-4 text-sm text-[#021024]/70">
                  {copy.faq.description1}
                </p>
                <p className="mt-4 text-sm text-[#021024]/70">
                  {copy.faq.description2}
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
                    {copy.contact.title}
                  </h2>
                  <p className="mt-4 text-sm text-white/90">
                    {copy.contact.description}
                  </p>
                  <div className="mt-6 grid gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <IconMail size={18} />
                      </span>
                      orizn.studio@gmail.com
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <IconBrandX size={18} />
                      </span>
                      @oriznstudio
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <IconBrandInstagram size={18} />
                      </span>
                      @oriznstudio
                    </div>
                  </div>
                </div>
                <form
                  className="rounded-2xl bg-white p-6 text-[#021024] shadow-xl"
                  action="https://formspree.io/f/xjgoqbva"
                  method="post"
                >
                  <div className="grid gap-4">
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      {copy.contact.nameLabel}
                      <input
                        type="text"
                        name="name"
                        className="mt-2 w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder={copy.contact.namePlaceholder}
                      />
                    </label>
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      {copy.contact.emailLabel}
                      <input
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder={copy.contact.emailPlaceholder}
                      />
                    </label>
                    <label className="text-[10px] font-semibold uppercase text-[#021024]/70">
                      {copy.contact.projectLabel}
                      <textarea
                        name="project"
                        className="mt-2 min-h-[120px] w-full rounded-xl border border-[#021024]/10 bg-[#f9fafb] px-4 py-2 text-xs outline-none focus:border-[#005aff]"
                        placeholder={copy.contact.projectPlaceholder}
                      />
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#005aff] px-4 py-3 text-xs font-semibold text-white transition hover:brightness-110"
                    >
                      {copy.contact.button}
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
              aria-label={copy.common.closeVideo}
            >
              {copy.common.close}
            </button>
            <div className={isShortVideo ? 'aspect-[9/16]' : 'aspect-video'}>
              <iframe
                src={embedUrl}
                title={copy.common.videoTitle}
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
              aria-label={copy.common.closeImage}
            >
              {copy.common.close}
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
                {copy.footer.description}
              </p>
            </div>
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white">{copy.footer.servicesTitle}</p>
              {copy.footer.servicesItems.map((item) => (
                <p key={item} className={item === copy.footer.servicesItems[0] ? 'mt-3' : undefined}>
                  {item}
                </p>
              ))}
            </div>
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white">{copy.footer.companyTitle}</p>
              {copy.footer.companyItems.map((item) => (
                <p key={item} className={item === copy.footer.companyItems[0] ? 'mt-3' : undefined}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <span>{copy.footer.copyright}</span>
            <div className="flex items-center gap-3">
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="https://www.instagram.com/oriznstudio/"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="https://www.youtube.com/@oriznstudio"
                aria-label="YouTube"
              >
                <IconBrandYoutube size={18} />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="https://x.com/oriznstudio/"
                aria-label="X"
              >
                <IconBrandX size={18} />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="mailto:orizn.studio@gmail.com"
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
