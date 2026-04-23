import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-10"
    >
      {/* Background decoration to match AboutSection */}
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-12"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              Get In Touch
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Let’s start a conversation.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Have a specific project in mind or just want to say hi? I’m always
              open to discussing new opportunities and creative ideas.
            </p>

            <div className="mt-10 space-y-6">
              <div className="group">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Email Me
                </p>
                <a
                  href="mailto:your@email.com"
                  className="mt-2 block text-xl font-bold text-slate-950 decoration-indigo-500/30 underline-offset-4 transition-all hover:text-indigo-600 hover:underline"
                >
                  your@email.com
                </a>
              </div>

              <div className="flex gap-8">
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    LinkedIn
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-bold text-slate-900 transition-colors hover:text-indigo-600"
                  >
                    /hamza-nasir
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    GitHub
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-bold text-slate-900 transition-colors hover:text-indigo-600"
                  >
                    @yourgithub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 transition outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 transition outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 transition outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
