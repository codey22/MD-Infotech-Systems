"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full px-4 md:px-8 py-24 surface-gloss section-dark-gloss section-shimmer">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Share your idea and we will turn it into a premium product.
          </p>
          <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white p-6 backdrop-blur-xl dark:bg-white/5 tilt-3d">
            <p className="text-sm text-gray-700 dark:text-white/70">
              Email:{" "}
              <a className="underline text-brand-700 dark:text-white" href="mailto:mdinfotechsystems@gmail.com">
                mdinfotechsystems@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-700 dark:text-white/70">Phone: +91-7890006416</p>
          </div>
        </div>
        <form
          className="space-y-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white p-6 backdrop-blur-xl dark:bg-white/5 tilt-3d"
          action="mailto:mdinfotechsystems@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="text-sm text-gray-700 dark:text-white/80">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 dark:text-white/80">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 dark:text-white/80">Message</label>
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Tell us about your project"
            />
          </div>
          <button
            type="submit"
            className="animated-border w-full rounded-lg bg-brand-600 px-4 py-2 text-white hover:bg-brand-500 dark:bg-brand-500/80"
          >
            Send
          </button>
        </form>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-semibold tracking-tight text-white">Our Location</h3>
        <p className="mt-2 text-white/80 text-sm">
          View our exact address on Google Maps. Click the map to open directions.
        </p>
        <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl overflow-hidden tilt-3d">
          <div className="p-4">
            <h4 className="text-white text-lg font-semibold">MD Infotech Systems</h4>
            <p className="mt-1 text-white/80 text-sm">
              Bidisha Apartment, 17/B/A Priyonath Ghosh Street, Belgharia, Kolkata - 700056<br />
              Kamarhati Municipality, District North 24 Parganas, West Bengal
            </p>
          </div>
          <div className="relative">
            <iframe
              title="MD Infotech Systems Map"
              className="w-full h-[380px]"
              src={
                "https://www.google.com/maps?hl=en&q=" +
                encodeURIComponent(
                  "17/B/A Priyonath Ghosh Street, Belgharia, Kolkata - 700056 Kamarhati Municipality, District North 24 Parganas, West Bengal"
                ) +
                "&z=18&iwloc=near&output=embed"
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 flex gap-3">
              <a
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  encodeURIComponent(
                    "17/B/A Priyonath Ghosh Street, Belgharia, Kolkata - 700056 Kamarhati Municipality, District North 24 Parganas, West Bengal"
                  )
                }
                target="_blank"
                rel="noreferrer"
                className="animated-border rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
