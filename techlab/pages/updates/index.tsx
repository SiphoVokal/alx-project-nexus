import Head from "next/head"

export default function Latest() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Apple Unveils iPhone 17 Lineup, New Macs, and Apple Watch Updates",
    "description": "At its highly anticipated annual event, Apple introduced the iPhone 17 and iPhone 17 Pro Max with groundbreaking AI-powered features, alongside updates to the MacBook Air, MacBook Pro, and Apple Watch.",
    "image": "https://yourdomain.com/images/apple-event-2025.jpg",
    "author": {
      "@type": "Organization",
      "name": "TECHlab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TECHlab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/images/logo.png"
      }
    },
    "datePublished": "2025-09-23",
    "dateModified": "2025-09-23"
  }

  return (
    <>
      <Head>
        <title>Apple Unveils iPhone 17 Lineup, New Macs, and Apple Watch Updates | TECHlab</title>
        <meta
          name="description"
          content="At its annual event, Apple introduced the iPhone 17 and iPhone 17 Pro Max, plus updates to the MacBook Air, MacBook Pro, and Apple Watch. Discover the highlights."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Apple Unveils iPhone 17 Lineup, New Macs, and Apple Watch Updates
        </h1>
        <section>
          <p className="font-light mb-6">
            Every year, Apple’s big product event feels like a peek into the future. In 2025, the keynote didn’t disappoint — and
            at TECHlab, we’re excited to break down what it means for our customers, our product lineup, and the experience you’ll
            get when you walk into our stores.
          </p>


          <h2 className="text-2xl font-bold mb-4">What Apple Unveiled: Highlights & Context</h2>
            <h3 className="text-xl font-bold mb-2">iPhone 17 Lineup & the New “iPhone Air”</h3>
              <p className="mb-6">
                Apple introduced a striking new model this year: the ultra‑thin <strong>iPhone Air</strong> alongside the full iPhone 17
                family (standard, Pro and Pro Max). The lineup brings camera refinements, faster performance, and a new set of
                design-and-features tradeoffs that open fresh choices for customers.
              </p>

            <h3 className="text-xl font-bold mb-2">Apple Watch & Wearables</h3>
              <p className="mb-6">
                The Watch lineup continues Apple’s strong push into health monitoring — more advanced vitals, sleep refinement, and
                satellite-ready Ultra variants that focus on endurance and safety for active lifestyles.
              </p>

            <h3 className="text-xl font-bold mb-2">Software, Design & Ecosystem</h3>
              <p className="mb-6">
                Apple showcased a refreshed visual language across iOS, macOS, and iPadOS — a softer, more layered aesthetic that we’re
                already seeing reflected in app designs and system UI. Equally important: greater on-device intelligence and developer
                tools focused on privacy-first AI features.
              </p>

            <h2 className="text-xl font-bold mb-2">Why It Matters — From TECHlab’s Perspective</h2>
              <ol>
                <li className="mb-2">
                  <strong>More choices for customers.</strong> The Air gives a new balance between size, weight and performance — and a
                    new option for shoppers who want portability above all.
                </li>
                <li className="mb-2">
                  <strong>Health becomes mainstream.</strong> With more medical-adjacent features, watches are transitioning from
                    lifestyle gadgets to everyday wellness tools — raising how we demo and support the platform in-store.
                </li>
                <li className="mb-2">
                  <strong>Design consistency.</strong> The new system-wide aesthetic helps apps and experiences feel more cohesive
                    across devices — a win for multi-device households and creators.
                </li>
                <li className="mb-6">
                  <strong>AI for developers & pros.</strong> Apple’s foundation-model initiatives and privacy-focused AI will expand
                    what creators and developers can build on-device.
                </li>
              </ol>
            
            <h2 className="text-xl font-bold mb-2">What You Can Expect at TECHlab</h2>
              <ul>
                <li className="mb-1">1. Hands‑on demo stations for the iPhone Air so you can feel how thin it really is.</li>
                <li className="mb-1">2. Watch health workshops to explore the new metrics and set up your device.</li>
                <li className="mb-1">3. Live previews of the refreshed UI across devices so you can see the new design language in action.</li>
                <li>4. Support clinics and migration help for customers upgrading to new devices.</li>
              </ul>
        </section>
      </main>
    </>
  )
}
