export interface Service {
  id: number
  icon: string
  title: string
  shortDesc: string
  fullDesc: string
  tags: string[]
}

export interface Project {
  id: number
  title: string
  client: string
  category: string
  year: string
  gradient: string
  description: string
}

export interface Podcast {
  id: number
  videoId: string
  title: string
  description: string
  episode: number
  date: string
  duration: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  initials: string
  accentColor: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  date: string
  category: string
  readTime: string
  tags: string[]
  gradient: string
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'video',
    title: 'Cinematic Videography',
    shortDesc: 'Hollywood-grade video production for brands that want to be remembered.',
    fullDesc: 'From concept to final cut, we deliver cinematic videos with professional-grade equipment and compelling storytelling. Our team handles brand films, commercials, event coverage, and everything in between — ensuring every frame earns its place.',
    tags: ['Brand Films', 'Commercials', 'Event Coverage', 'Music Videos'],
  },
  {
    id: 2,
    icon: 'camera',
    title: 'Professional Photography',
    shortDesc: 'Images that speak louder than words — shot with intention and artistry.',
    fullDesc: 'Our photography team captures the essence of your brand, products, and moments with precision and creativity. Whether it\'s product shoots, corporate portraits, event photography, or editorial campaigns, we deliver images that stop the scroll.',
    tags: ['Product Photography', 'Corporate Portraits', 'Event Photography', 'Editorial'],
  },
  {
    id: 3,
    icon: 'megaphone',
    title: 'Advertisement Production',
    shortDesc: 'Ads that convert — combining strategy, creativity, and cinematic craft.',
    fullDesc: 'We produce high-impact advertisements for TV, digital platforms, and social media. Every ad we create is backed by a deep understanding of your audience and a relentless focus on delivering measurable results without sacrificing creative quality.',
    tags: ['TV Commercials', 'Digital Ads', 'Social Media Ads', 'OTT Campaigns'],
  },
  {
    id: 4,
    icon: 'film',
    title: 'Documentary Filmmaking',
    shortDesc: 'Real stories, told truthfully — documentaries that move people to action.',
    fullDesc: 'We specialize in crafting powerful documentaries that explore human stories, social causes, and corporate narratives. Our documentaries have screened at festivals and aired on broadcast platforms, bringing compelling stories to audiences worldwide.',
    tags: ['Corporate Docs', 'Social Impact', 'Cultural Stories', 'Brand Documentaries'],
  },
  {
    id: 5,
    icon: 'scissors',
    title: 'Post-Production & Editing',
    shortDesc: 'Where raw footage becomes cinematic magic — through expert editing and effects.',
    fullDesc: 'Our post-production suite handles everything from professional video editing and color grading to motion graphics, VFX, and sound design. We also offer scriptwriting (English & Bengali), voice-over recording, subtitle creation, and music production.',
    tags: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Subtitles & VO'],
  },
  {
    id: 6,
    icon: 'smartphone',
    title: 'Content Creation & Social Media',
    shortDesc: 'Scroll-stopping content that builds communities and drives engagement.',
    fullDesc: 'We create a consistent stream of high-quality content tailored for Instagram, TikTok, YouTube, LinkedIn, and beyond. From short-form reels to long-form strategy content, we help your brand show up authentically and powerfully across all platforms.',
    tags: ['Reels & TikToks', 'YouTube Content', 'LinkedIn Videos', 'Content Strategy'],
  },
]

export const portfolio: Project[] = [
  {
    id: 1,
    title: 'Threads of Time',
    client: 'Levi\'s NYC',
    category: 'Brand Film',
    year: '2024',
    gradient: 'from-amber-900/80 to-stone-900',
    description: 'A cinematic brand film exploring 150 years of denim culture through the streets of New York City.',
  },
  {
    id: 2,
    title: 'Savor the Moment',
    client: 'Gramercy Tavern',
    category: 'Commercial',
    year: '2024',
    gradient: 'from-emerald-900/70 to-zinc-900',
    description: 'A sensory-driven commercial for one of NYC\'s most celebrated restaurants, shot in one magic hour.',
  },
  {
    id: 3,
    title: 'Voices of Queens',
    client: 'NYC Cultural Affairs',
    category: 'Documentary',
    year: '2023',
    gradient: 'from-blue-900/70 to-slate-900',
    description: 'A feature documentary celebrating the 138 languages spoken across the Queens borough.',
  },
  {
    id: 4,
    title: 'Elevate Everything',
    client: 'Nike New York',
    category: 'Advertisement',
    year: '2024',
    gradient: 'from-red-900/70 to-neutral-900',
    description: 'A high-energy campaign for Nike\'s New York flagship, featuring local athletes telling their origin stories.',
  },
  {
    id: 5,
    title: 'Eid Across Boroughs',
    client: 'Bangladesh Society NY',
    category: 'Cultural Event',
    year: '2023',
    gradient: 'from-violet-900/70 to-zinc-900',
    description: 'A beautiful documentation of Eid celebrations across New York\'s diverse Bangladeshi community.',
  },
  {
    id: 6,
    title: 'Skyline Series',
    client: 'Hudson Yards Development',
    category: 'Corporate Film',
    year: '2024',
    gradient: 'from-sky-900/70 to-slate-900',
    description: 'An architectural showcase series for one of New York\'s most ambitious real estate developments.',
  },
]

export const podcasts: Podcast[] = [
  {
    id: 1,
    videoId: 'REPLACE_WITH_YOUTUBE_ID_1',
    title: 'The Art of Visual Storytelling',
    description: 'We dive deep into what makes a story truly cinematic — from pre-production planning to final color grade. Special guest: award-winning cinematographer Marcus Webb.',
    episode: 12,
    date: 'March 2024',
    duration: '52 min',
  },
  {
    id: 2,
    videoId: 'REPLACE_WITH_YOUTUBE_ID_2',
    title: 'Building a Brand Through Video',
    description: 'How small businesses and startups can leverage video content to build trust, grow audiences, and compete with larger brands. No massive budget required.',
    episode: 11,
    date: 'February 2024',
    duration: '44 min',
  },
  {
    id: 3,
    videoId: 'REPLACE_WITH_YOUTUBE_ID_3',
    title: 'Documentary Ethics & Responsibility',
    description: 'When does storytelling become exploitation? We discuss the ethical responsibilities of documentary filmmakers with cultural advocate and filmmaker Shira Goldstein.',
    episode: 10,
    date: 'January 2024',
    duration: '61 min',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CMO',
    company: 'Meridian Apparel',
    content: 'The Lens didn\'t just make a video — they made us feel something. Our product launch film generated 2M organic views in the first week. The attention to light, movement, and emotion was unlike anything we\'d experienced with previous agencies.',
    initials: 'SC',
    accentColor: '#c9a84c',
  },
  {
    id: 2,
    name: 'James Okafor',
    role: 'Executive Director',
    company: 'Brooklyn Arts Foundation',
    content: 'Working with The Lens on our annual gala documentary was extraordinary. They captured the spirit of our mission in a way that moved our biggest donors to tears — and then to action. Three new major sponsors came directly from watching that film.',
    initials: 'JO',
    accentColor: '#7eb8a4',
  },
  {
    id: 3,
    name: 'Priya Anand',
    role: 'Founder',
    company: 'Spice Route Restaurant Group',
    content: 'From the first consultation to the final delivery, The Lens was professional, creative, and deeply collaborative. Our restaurant campaign drove a 40% increase in reservations. The images they captured made our food look like fine art.',
    initials: 'PA',
    accentColor: '#e07b5a',
  },
  {
    id: 4,
    name: 'Rahul Islam',
    role: 'Brand Director',
    company: 'Dhaka Threads NYC',
    content: 'As a Bangladeshi-owned brand navigating the NYC market, we needed a team that understood both our culture and the global stage. The Lens brought both — their scriptwriting in Bengali and English was flawless, and the final commercial exceeded every expectation.',
    initials: 'RI',
    accentColor: '#9b8fcd',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'power-of-visual-storytelling',
    title: 'The Power of Visual Storytelling in Modern Brand Marketing',
    excerpt: 'In a world drowning in content, cinematic storytelling is the lifeboat your brand needs. Here\'s why — and how to harness it.',
    content: `
<h2>Why Stories Outlast Ads</h2>
<p>Human beings are wired for stories. Long before the printing press, before literacy was widespread, communities passed down wisdom, culture, and identity through the spoken and visual narrative. The brain processes visual information 60,000 times faster than text — and emotional stories activate the brain's mirror neurons, making audiences feel as if they're experiencing events themselves.</p>
<p>Yet most brand communications still default to the transactional: here's the product, here's the price, here's why you should buy. This approach ignores a fundamental truth about human decision-making: people buy with emotion and justify with logic. Visual storytelling inverts the typical marketing equation — it leads with feeling and earns trust before it asks for anything in return.</p>

<h2>What Makes a Story "Cinematic"?</h2>
<p>Cinematic storytelling isn't just about high production quality — though that matters. It's about the deliberate use of visual grammar: the way light shapes a subject's face, the careful selection of music that mirrors emotional tempo, the edit that breathes life into a sequence. When a brand film makes you feel something before a single word of copy appears on screen, that's cinematic storytelling at work.</p>
<p>At The Lens, we talk about "earning the cut" — meaning every shot, every transition, every frame should earn its place in the narrative. Gratuitous footage dilutes impact. Restraint, paradoxically, amplifies it. A five-second close-up on weathered hands crafting a product tells more story than a ten-minute explainer video ever could.</p>

<h2>The ROI of Emotional Resonance</h2>
<p>The data supports what creatives have always intuited: emotionally resonant campaigns significantly outperform purely rational ones. According to the Institute of Practitioners in Advertising, campaigns with purely emotional content perform about twice as well as those with only rational content — and campaigns that combine emotion with a clear message perform best of all.</p>
<p>For brands willing to invest in authentic visual storytelling, the returns compound: not just in immediate conversion rates, but in brand equity, word-of-mouth, and the kind of loyal customer relationships that no ad spend can manufacture.</p>

<h2>Practical Steps for Your Brand</h2>
<p>Start by identifying the core emotional truth of your brand — not what you sell, but what you stand for, and more importantly, what your customer becomes when they choose you. Build your visual narrative around that transformation. Invest in pre-production: strong scripts, proper location scouting, casting that feels genuine rather than performative.</p>
<p>The brands that will dominate the next decade aren't those with the biggest ad budgets — they're the ones with the most compelling stories. Visual storytelling isn't a luxury for enterprise brands. In the age of smartphones and social media, every business has the tools to tell a remarkable story. The question is whether you have the vision and craft to make it worth watching.</p>
    `,
    author: 'The Lens Team',
    authorRole: 'Creative Direction',
    date: 'March 8, 2024',
    category: 'Brand Strategy',
    readTime: '6 min read',
    tags: ['Storytelling', 'Brand Marketing', 'Video Strategy', 'Visual Content'],
    gradient: 'from-amber-900/60 to-stone-950',
  },
  {
    slug: 'cinematography-techniques-brand-video',
    title: '5 Cinematography Techniques That Transform Brand Videos',
    excerpt: 'The difference between a forgettable brand video and one that goes viral often comes down to these five cinematographic choices.',
    content: `
<h2>1. The Rule of Thirds — and When to Break It</h2>
<p>Every serious cinematographer knows the rule of thirds: dividing the frame into a 3x3 grid and placing subjects at intersection points rather than dead center. This creates visual tension and guides the viewer's eye naturally. But the most powerful images often come from deliberate, purposeful violations of this rule — placing a subject dead-center to signal authority, symmetry, or isolation, depending on the narrative need.</p>
<p>For brand videos, this means understanding which rule to apply when. A product launch video might break the rule to assert dominance; a human interest story about a craftsperson might follow it to create warmth and approachability.</p>

<h2>2. Motivated Lighting</h2>
<p>Unmotivated lighting — light that appears to have no natural source — immediately registers as artificial, even to viewers who couldn't explain why. Motivated lighting anchors every source: window light from the left, a candle on the table, streetlight through glass. This creates depth, atmosphere, and believability that even the most generous production budget can't buy through technical means alone.</p>
<p>When we shoot restaurant campaigns, we often arrive at golden hour to use the interplay of natural and artificial light. That tension — warm tungsten inside, cool blue evening outside — creates a sense of invitation that no studio setup replicates.</p>

<h2>3. Movement with Purpose</h2>
<p>Camera movement is a form of punctuation. A slow push into a subject signals growing importance or intimacy. A handheld follow shot creates urgency and documentary authenticity. A drone pull-back reveals scale and context. Each movement should be chosen because it serves the story — not because the camera operator felt like moving.</p>
<p>The best brand cinematographers we know say the same thing: if you can cut the move without losing meaning, cut it. The camera that stays still and lets the subject breathe is often the bravest, most effective choice.</p>

<h2>4. Color as Character</h2>
<p>Color grading is not post-production cosmetics — it's another layer of storytelling. The warm, slightly desaturated tones of a heritage brand's film communicate continuity and quality. The punchy, high-contrast look of an athletic campaign communicates energy and edge. Before a single frame is shot, the colorist should be in the room, contributing to the creative vision.</p>
<p>We always create LUT (Look-Up Table) references during pre-production, showing clients exactly how the final grade will feel. This alignment prevents scope creep and ensures the visual tone serves the brand's established identity.</p>

<h2>5. The Power of Sound Design</h2>
<p>This isn't strictly a cinematography technique, but no discussion of visual storytelling is complete without it: the sound design is half the picture. Audiences feel sound before they hear it consciously. The ambient texture beneath a scene, the deliberate use of silence, the sound bridge that connects scenes emotionally — these create the nervous system of a great film.</p>
<p>Test this yourself: watch any scene from a film you love with the sound off. Then watch it again with your eyes closed, only listening. The sound often carries more emotional information than the image alone. When both work in harmony, the effect is irreducible and unforgettable.</p>
    `,
    author: 'David Osei',
    authorRole: 'Lead Cinematographer',
    date: 'February 21, 2024',
    category: 'Cinematography',
    readTime: '7 min read',
    tags: ['Cinematography', 'Camera Techniques', 'Color Grading', 'Sound Design'],
    gradient: 'from-blue-900/60 to-slate-950',
  },
  {
    slug: 'documentary-style-social-media',
    title: 'Why Documentary-Style Content is Winning on Social Media',
    excerpt: 'Audiences are rejecting polished perfection in favor of raw, real storytelling. Here\'s how brands can lead this cultural shift.',
    content: `
<h2>The Authenticity Imperative</h2>
<p>Something interesting happened between 2020 and 2024: audiences stopped trusting the perfectly lit, perfectly scripted brand commercial. Not because production quality no longer matters — it does — but because the gap between curated brand personas and lived reality became too glaring to ignore. The COVID-19 pandemic accelerated this shift dramatically, forcing brands to communicate in new, more human ways simply to survive.</p>
<p>What emerged from that period is what content strategists now call the "authenticity premium" — the measurable boost in engagement, trust, and conversion that comes from content that feels genuinely real, even when (especially when) that includes imperfection.</p>

<h2>What Documentary Style Actually Means</h2>
<p>Documentary-style content is often misunderstood as "low-fi" or "cheap." That misses the point entirely. True documentary filmmaking is a rigorous art form that requires patience, skill, and often more sophisticated technical judgment than scripted production. The difference is in the approach: you're chasing truth rather than constructing it.</p>
<p>For brands, this means following the real people who make your business: the sourcing partners, the overnight shift workers, the customer whose life genuinely changed because of your product. It means capturing the behind-the-scenes moments that polished marketing normally hides. It means trusting your audience enough to show them the full story — including the parts that aren't perfectly resolved.</p>

<h2>Platform-Specific Applications</h2>
<p>Different platforms reward different flavors of documentary content. Instagram Reels favor short, punchy vérité clips — 15 to 30 seconds that drop you into a real moment without preamble. TikTok rewards the slightly rougher edge, the unfiltered reaction, the real mistake followed by the laugh. YouTube is where long-form documentary content truly thrives — 10 to 30 minute brand documentaries routinely outperform shorter content in watch time, comment engagement, and subscriber conversion.</p>
<p>LinkedIn, perhaps counterintuitively, has become fertile ground for documentary storytelling about work, process, and professional transformation. Decision-makers and B2B buyers are hungry for real stories about how companies operate and what they stand for.</p>

<h2>Building Your Documentary Content Strategy</h2>
<p>Start with the people, not the product. The most compelling documentary brand content centers on human beings: their expertise, their craft, their challenges, their small victories. The product or service should feel like the natural context for a human story, not the main subject being sold.</p>
<p>Invest in pre-interviews. Before rolling cameras in a formal sense, spend time with your subjects — understand their stories, their cadences, the phrases they return to when they talk about things that matter to them. The best documentary moments are rarely scripted; they're earned through research and relationship.</p>
<p>Finally, commit to consistency. A single documentary-style video is interesting. A consistent series of them becomes a body of work — a media identity for your brand that attracts and retains a genuine audience.</p>
    `,
    author: 'Nadia Rahman',
    authorRole: 'Documentary Director',
    date: 'January 15, 2024',
    category: 'Content Strategy',
    readTime: '5 min read',
    tags: ['Documentary', 'Social Media', 'Content Marketing', 'Brand Authenticity'],
    gradient: 'from-emerald-900/60 to-zinc-950',
  },
  {
    slug: 'behind-the-lens-advertisement-production',
    title: 'Behind the Lens: How We Create Award-Winning Advertisements',
    excerpt: 'A rare look inside The Lens\'s creative process — from brief to final delivery — for a New York City fashion brand.',
    content: `
<h2>It Starts With "Why"</h2>
<p>Every project we take begins with the same question, asked in the client's first meeting and asked again at every creative checkpoint: "Why does this need to exist?" It's a disruptive question, especially for clients used to briefing agencies with a defined deliverable and a deadline. But it's the question that separates memorable work from forgettable output.</p>
<p>For our recent project with Dhaka Threads NYC — a Bangladeshi-American fashion brand launching their spring collection — the answer evolved over three conversations. The first brief was conventional: "30-second commercial, our clothes, spring vibes." By the third conversation, we'd arrived at something much richer: a story about the hyphenated identity of second-generation immigrants who carry two worlds inside them. The clothes weren't the subject — they were the symbol.</p>

<h2>Pre-Production: Where the Work Really Happens</h2>
<p>Professional filmmakers will tell you that the quality of the final film is largely determined before a single camera is turned on. Our pre-production for Dhaka Threads took three weeks and included extensive location scouting across three New York boroughs, costume consultations with the brand's designer, original music composition by our in-house composer (who has roots in both Brooklyn jazz and Bangladeshi classical music), and multiple rounds of script development in both English and Bengali.</p>
<p>The script — both languages — went through eight drafts. Each revision sharpened the emotional arc and eliminated anything that felt like decoration rather than necessity. By the time we arrived on set, every member of the crew had internalized not just their job, but the feeling we were trying to create.</p>

<h2>Production Day: Controlled Chaos</h2>
<p>We shot across two days: one in a Bangladeshi restaurant in Jackson Heights at 6 AM before service, one on a rooftop in DUMBO during magic hour. The cast was a mix of professional actors and real community members, which is an approach we favor when a brief calls for authentic cultural representation — no actor, however skilled, fully replicates the unconscious ease of someone living the story they're telling.</p>
<p>The most memorable shot — a slow pull-back from a woman embroidering traditional kantha patterns to reveal the Manhattan skyline behind her — was unscripted. Our cinematographer saw the light change on a location scout and texted the director at midnight: "I know what the last image is." Sometimes the best work in a production day comes from honoring those instincts.</p>

<h2>Post-Production: The Invisible Craft</h2>
<p>The edit took two weeks. Our editor cut seven different versions before arriving at one that honored the pacing of the original Bengali music while still hitting the 60-second requirement for the brand's primary TV placement. Color was graded to carry both warmth (the restaurant, the family, the heritage) and cool precision (the skyline, the modern silhouettes, the forward momentum).</p>
<p>Sound design layered three tracks: the original composition, ambient street sound from both Jackson Heights and Manhattan, and subtle foley of fabric moving. Each layer was mixed independently so the film could breathe differently depending on whether it aired in a cinema, on social media, or in a television commercial break.</p>
<p>The campaign launched in February 2024. Within three weeks, the long-form version had 800,000 organic views on YouTube. The brand sold out their spring collection in eleven days.</p>
    `,
    author: 'The Lens Team',
    authorRole: 'The Lens New York',
    date: 'December 5, 2023',
    category: 'Behind the Scenes',
    readTime: '8 min read',
    tags: ['Production Process', 'Advertisement', 'Case Study', 'Creative Process'],
    gradient: 'from-violet-900/60 to-neutral-950',
  },
]
