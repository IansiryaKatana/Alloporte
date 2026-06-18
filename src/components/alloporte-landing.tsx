import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CircleDot,
  Grid2X2,
  MoveUpRight,
  PhoneCall,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlueDot } from '@/components/layout/primitives'
import { Card, CardContent } from '@/components/ui/card'
import {
  contactHref,
  featuredProject,
  heroChips,
  images,
  metrics,
  navItems,
  phoneHref,
  phoneLabel,
  services,
  testimonials,
  whatsappHref,
  type Service,
} from '@/data/alloporte'
import { cn, trackEvent } from '@/lib/utils'

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={cn(
        'text-[7px] font-medium uppercase tracking-[0.18em] text-desktop-min',
        light ? 'text-white/60' : 'text-neutral-500',
      )}
    >
      {children}
    </p>
  )
}

function serviceIcon(service: Service) {
  const iconClass = 'size-3'

  if (service.icon === 'grid') return <Grid2X2 className={iconClass} />
  if (service.icon === 'spark') return <Sparkles className={iconClass} />
  if (service.icon === 'circle') return <CircleDot className={iconClass} />

  return <MoveUpRight className={iconClass} />
}

function handleTrack(eventName: string, payload?: Record<string, string>) {
  trackEvent(eventName, payload)
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-[var(--page-padding)] pt-2 text-white">
      <div className="flex items-center justify-between border-b border-white/20 pb-1 text-[6px] uppercase tracking-[0.18em] text-white/75">
        <span>AlloPorte</span>
        <span>Luxury advisory / since 2014</span>
      </div>
      <nav className="flex items-center justify-between py-3 text-[8px] uppercase tracking-[0.14em] text-white/85">
        <a href="#home" aria-label="AlloPorte home">
          AP / 14
        </a>
        <div className="flex gap-3">
          {navItems.slice(0, 3).map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[300px] overflow-hidden bg-black text-white sm:min-h-[420px] md:min-h-[720px]">
      <img
        src={images.hero}
        alt="Modern concrete residence over calm water"
        className="hero-image-motion architectural-image absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/55" />
      <Header />
      <div className="relative z-10 flex min-h-[300px] flex-col justify-end px-[var(--page-padding)] pb-3 pt-20 sm:min-h-[420px] md:min-h-[720px] md:pb-8">
        <div className="reveal mb-4 flex items-start justify-between gap-4 md:mb-8">
          <p className="max-w-[12rem] text-[6px] uppercase leading-tight tracking-[0.16em] text-white/75 text-desktop-min md:max-w-[18rem]">
            A new way to making owned experience through architecture and real-estate intelligence.
          </p>
        </div>
        <h1 className="reveal text-[clamp(4.7rem,20vw,12rem)] font-light lowercase leading-[0.72] tracking-[-0.08em] text-white/90 [animation-delay:120ms]">
          alloporte
        </h1>
        <div className="mt-3 flex items-end justify-between gap-3 md:mt-6">
          <div className="grid flex-1 grid-cols-2 gap-1.5 md:max-w-3xl md:grid-cols-4">
            {heroChips.map((chip, index) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleTrack('hero_chip_click', { chip })}
                className="reveal whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-2 py-1 text-center text-[6px] uppercase tracking-[0.12em] text-white/80 backdrop-blur transition hover:bg-white/20 md:px-2.5 md:py-1 md:text-[16px] md:leading-tight"
                style={{ animationDelay: `${260 + index * 70}ms` }}
              >
                {chip}
              </button>
            ))}
          </div>
          <Button asChild size="sm" onClick={() => handleTrack('hero_book_call_click')}>
            <a href={contactHref} className="shrink-0">
              Book a call
              <BlueDot />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function IntroServices() {
  return (
    <section id="architecture" className="px-[var(--page-padding)] py-8 md:py-16">
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div className="flex items-center gap-3">
          <SectionLabel># we create</SectionLabel>
          <span className="grid size-5 place-items-center rounded-full bg-accent text-[9px] text-accent-foreground">
            01
          </span>
        </div>
        <h2 className="max-w-2xl text-[1.45rem] font-normal leading-[0.95] tracking-[-0.05em] text-balance md:text-[clamp(2.8rem,5.5vw,4.5rem)]">
          We believe that buying or selling a home is not just a transaction.
          It is a life-changing experience.
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-1.5 md:grid-cols-4">
        {services.map((service, index) => (
          <button
            key={service.id}
            type="button"
            onClick={() => {
              handleTrack('service_card_click', { service: service.id })
              window.location.href = contactHref
            }}
            className="reveal group min-h-[108px] border border-border bg-white p-3 text-left transition duration-200 hover:border-neutral-900 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] md:min-h-[180px]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="text-[8px] text-neutral-500">{service.number}</span>
              <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground transition group-hover:scale-105">
                {serviceIcon(service)}
              </span>
            </div>
            <div className="mt-8 md:mt-20">
              <h3 className="text-[13px] font-medium tracking-[-0.04em] md:text-[28px] md:leading-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-[8px] leading-snug text-muted-foreground text-desktop-min">
                {service.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function ExperienceStatement() {
  return (
    <section className="relative overflow-hidden px-[var(--page-padding)] py-[var(--section-gap)] text-center">
      <SectionLabel># since 2014</SectionLabel>
      <h2 className="relative z-10 mx-auto mt-5 max-w-4xl text-[1.45rem] font-normal leading-[0.92] tracking-[-0.06em] text-balance md:text-[clamp(3rem,6vw,5.5rem)]">
        We have developed more than 250 million square meters in several highly
        relevant and successful projects in UK and abroad.
      </h2>
      <div className="relative z-0 mx-auto mt-8 flex max-w-sm justify-between gap-4 md:contents">
        <img
          src={images.fragmentLeft}
          alt=""
          loading="lazy"
          className="architectural-image h-16 w-24 object-cover md:absolute md:bottom-8 md:left-4 md:h-28 md:w-44"
        />
        <img
          src={images.fragmentRight}
          alt=""
          loading="lazy"
          className="architectural-image h-16 w-24 object-cover md:absolute md:bottom-6 md:right-4 md:h-28 md:w-44"
        />
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section id="residences" className="px-[var(--page-padding)] py-3">
      <div className="grid overflow-hidden rounded-md bg-[#030303] p-3 text-white md:grid-cols-[0.85fr_1.15fr] md:p-5">
        <div className="flex min-h-[420px] flex-col justify-between pr-2 md:min-h-[620px] md:pr-8">
          <div>
            <SectionLabel light># investment</SectionLabel>
            <h2 className="mt-6 max-w-lg text-[1.35rem] font-normal leading-[0.9] tracking-[-0.055em] text-balance md:text-[clamp(3rem,5.4vw,4.9rem)]">
              We believe that buying or selling a home is not just a transaction.
            </h2>
          </div>
          <div className="grid grid-cols-[1fr_1.1fr] gap-3 md:items-end">
            <div>
              <span className="text-[9px] text-white/50">03</span>
              <h3 className="mt-5 text-base font-medium tracking-[-0.04em]">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-[9px] leading-snug text-white/55 md:text-xs">
                {featuredProject.description}
              </p>
              <Button
                asChild
                size="sm"
                className="mt-5"
                onClick={() => handleTrack('project_book_call_click')}
              >
                <a href={contactHref}>
                  {featuredProject.ctaLabel}
                  <BlueDot />
                </a>
              </Button>
            </div>
            <img
              src={featuredProject.secondaryImage}
              alt="Interior detail of Riverside residence"
              loading="lazy"
              className="cinematic-image h-32 w-full object-cover md:h-56"
            />
          </div>
        </div>
        <div className="relative mt-3 min-h-[420px] overflow-hidden rounded-sm md:mt-0 md:min-h-[620px]">
          <img
            src={featuredProject.mainImage}
            alt="Featured modern residence in Barcelona"
            loading="lazy"
            className="cinematic-image mask-reveal h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-white/12 px-3 py-1 text-[7px] uppercase tracking-[0.16em] text-white backdrop-blur">
            {featuredProject.location}
          </div>
          <div className="absolute right-3 top-3 text-[24px] font-light tracking-[-0.08em] text-white/80">
            {featuredProject.priceLabel}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]
  const stars = useMemo(() => '*'.repeat(testimonial.rating), [testimonial.rating])

  function move(direction: 1 | -1) {
    handleTrack('testimonial_navigation_click', { direction: String(direction) })
    setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="grid gap-6 px-[var(--page-padding)] py-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-20">
      <div>
        <SectionLabel># what clients say</SectionLabel>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="grid size-8 place-items-center border border-border bg-white text-neutral-900 transition hover:bg-neutral-100"
          >
            <ArrowLeft className="size-3" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="grid size-8 place-items-center bg-accent text-accent-foreground transition hover:brightness-95"
          >
            <ArrowRight className="size-3" />
          </button>
        </div>
        <Card className="mt-4 overflow-hidden bg-[#d7e0df]">
          <CardContent className="relative min-h-[210px] p-5 md:min-h-[340px]">
            <img
              src={testimonial.image}
              alt={`${testimonial.clientName} portrait`}
              loading="lazy"
              className="architectural-image mx-auto h-36 w-28 object-cover md:h-56 md:w-40"
            />
            <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.14em]">
              {testimonial.clientName}
            </p>
            <span className="absolute bottom-5 right-5 text-[9px] text-red-600">
              +{testimonial.rating}
            </span>
          </CardContent>
        </Card>
      </div>
      <div>
        <blockquote className="text-[1.4rem] font-normal leading-[0.92] tracking-[-0.055em] text-balance md:text-[clamp(2.8rem,5.5vw,4.4rem)]">
          {testimonial.quote}
        </blockquote>
        <div className="mt-8">
          <p className="text-sm font-medium">{testimonial.clientName}</p>
          <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            {testimonial.clientRole}
          </p>
          <p aria-label={`${testimonial.rating} star rating`} className="mt-4 text-sm text-accent">
            {stars}
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            Market expertise review
          </p>
        </div>
      </div>
    </section>
  )
}

function MetricsStrip() {
  return (
    <section id="investments" className="grid grid-cols-3 border-y border-border bg-white">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={cn(
            'min-h-[125px] px-3 py-5 md:min-h-[190px] md:px-8 md:py-8',
            index < metrics.length - 1 && 'border-r border-border',
          )}
        >
          <p className="text-[clamp(2rem,8vw,5rem)] font-light leading-none tracking-[-0.08em]">
            {metric.value}
          </p>
          <h3 className="mt-5 text-[9px] font-medium uppercase tracking-[0.1em] md:text-xs">
            {metric.label}
          </h3>
          <p className="mt-2 text-[7px] leading-snug text-muted-foreground md:text-[11px]">
            {metric.description}
          </p>
        </div>
      ))}
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-[var(--page-padding)] py-3">
      <div className="relative min-h-[420px] overflow-hidden rounded-sm bg-black md:min-h-[650px]">
        <img
          src={images.cta}
          alt="Cinematic glass residence at dusk"
          loading="lazy"
          className="cinematic-image h-full min-h-[420px] w-full object-cover md:min-h-[650px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/35" />
        <div className="absolute left-4 top-4 text-white">
          <SectionLabel light># end-to-end real-estate operation</SectionLabel>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
          <Button asChild size="sm" onClick={() => handleTrack('final_cta_click')}>
            <a href={contactHref}>
              Let's talk
              <BlueDot />
            </a>
          </Button>
          <h2 className="max-w-4xl text-right text-[1.35rem] font-normal leading-[0.88] tracking-[-0.06em] text-balance md:text-[clamp(3rem,6vw,5rem)]">
            Gain end-to-end visibility of your entire operation for smarter
            decision-making, today and tomorrow.
          </h2>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-[#030303] px-[var(--page-padding)] pt-7 text-white">
      <div className="grid gap-8 border-t border-white/15 pt-6 md:grid-cols-[1.15fr_0.65fr_0.8fr_0.8fr]">
        <div>
          <SectionLabel light># alloporte</SectionLabel>
          <p className="mt-5 max-w-xs text-[11px] leading-snug text-white/60 text-desktop-min">
            A luxury real-estate and architecture advisory for exceptional homes,
            refined developments, and private acquisition briefs.
          </p>
          <p className="mt-8 text-[9px] uppercase tracking-[0.12em] text-white/35">
            (c) Copyright 2026. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 text-[10px] uppercase tracking-[0.12em] text-white/70 md:block">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-1 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <address className="not-italic text-[11px] leading-snug text-white/60">
          Spreeban 15, 2450 Meerhacht ANT,
          <br />
          Belgium.
        </address>
        <a
          href={phoneHref}
          onClick={() => handleTrack('footer_phone_click')}
          className="text-[11px] text-white/75 hover:text-white"
        >
          {phoneLabel}
        </a>
      </div>
      <a
        href={contactHref}
        onClick={() => handleTrack('footer_email_click')}
        className="mask-reveal mt-12 block pb-2 text-[clamp(4rem,16vw,13rem)] font-light leading-[0.78] tracking-[-0.08em] text-white"
      >
        hello@alloporte.com
      </a>
    </footer>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AlloPorte on WhatsApp"
      onClick={() => handleTrack('whatsapp_click')}
      className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 md:size-14"
    >
      <WhatsAppIcon className="size-6 md:size-7" />
    </a>
  )
}

function FloatingCall() {
  return (
    <a
      href={phoneHref}
      aria-label="Call AlloPorte now"
      onClick={() => handleTrack('phone_click')}
      className="grid size-12 place-items-center rounded-full bg-call-fab text-white shadow-[0_8px_24px_rgba(29,95,143,0.45)] transition duration-200 hover:scale-105 hover:bg-call-fab-hover active:scale-95 md:size-14 [&_svg]:text-white"
    >
      <PhoneCall className="size-6 md:size-7" strokeWidth={2} />
    </a>
  )
}

function FloatingContactActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <FloatingCall />
      <FloatingWhatsApp />
    </div>
  )
}

export function AlloPorteLanding() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <IntroServices />
      <ExperienceStatement />
      <FeaturedProject />
      <TestimonialSection />
      <MetricsStrip />
      <FinalCta />
      <Footer />
      <FloatingContactActions />
    </main>
  )
}
