"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Download, Monitor, Apple, Terminal, CircleCheck, Clock } from "lucide-react"

export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsDownloading(false)
    console.log("[JobCracker] Download started")
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#e78a53]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e78a53]/5 rounded-full blur-3xl" />

      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 text-zinc-400 hover:text-[#e78a53] transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </Link>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Link href="/" className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-2">
              <svg
                fill="currentColor"
                viewBox="0 0 147 70"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-[#e78a53] rounded-full size-10 w-10"
              >
                <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
                <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91 H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
              </svg>
            </div>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Download JobCracker
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Get your secret weapon for DSA interviews. Download JobCracker and start cracking interviews with confidence.
          </p>
        </motion.div>

        {/* Platform Download Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Windows Section - Active */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#e78a53]/20 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#e78a53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Windows</h3>
                    <p className="text-zinc-400 text-sm">v1.0.0 • 45 MB</p>
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                  <CircleCheck className="w-3 h-3 mr-1" />
                  Available
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="space-y-2">
                  <h4 className="text-white font-medium">System Requirements</h4>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>• Windows 10 or later</li>
                    <li>• 4GB RAM minimum</li>
                    <li>• 100MB free disk space</li>
                    <li>• Internet connection</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-[#e78a53] hover:bg-[#e78a53]/90 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download for Windows
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* macOS Section - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 h-full flex flex-col opacity-75">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-xl flex items-center justify-center">
                    <Apple className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">macOS</h3>
                    <p className="text-zinc-400 text-sm">v1.0.0-beta • Coming Soon</p>
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/20 px-2.5 py-0.5 text-xs font-semibold text-yellow-400">
                  <Clock className="w-3 h-3 mr-1" />
                  Beta
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Planned Requirements</h4>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>• macOS 11.0 or later</li>
                    <li>• 4GB RAM minimum</li>
                    <li>• 100MB free disk space</li>
                    <li>• Internet connection</li>
                  </ul>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <p className="text-zinc-300 text-sm">
                    Join our beta program to get early access to the macOS version.
                  </p>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-zinc-700 text-zinc-400 font-medium py-3 rounded-xl cursor-not-allowed flex items-center justify-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Coming Soon
              </button>
            </div>
          </motion.div>

          {/* Linux Section - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative md:col-span-2 lg:col-span-1"
          >
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 h-full flex flex-col opacity-75">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-xl flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Linux</h3>
                    <p className="text-zinc-400 text-sm">v1.0.0-beta • Coming Soon</p>
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/20 px-2.5 py-0.5 text-xs font-semibold text-yellow-400">
                  <Clock className="w-3 h-3 mr-1" />
                  Beta
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Planned Requirements</h4>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>• Ubuntu 20.04+ / CentOS 8+</li>
                    <li>• 4GB RAM minimum</li>
                    <li>• 100MB free disk space</li>
                    <li>• Internet connection</li>
                  </ul>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <p className="text-zinc-300 text-sm">
                    Linux support is in active development. Join our waitlist for updates.
                  </p>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-zinc-700 text-zinc-400 font-medium py-3 rounded-xl cursor-not-allowed flex items-center justify-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>

        {/* Installation Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Installation Instructions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Windows Installation</h3>
                <ol className="text-zinc-300 space-y-2 list-decimal list-inside">
                  <li>Download the JobCracker installer from the button above</li>
                  <li>Run the installer as administrator</li>
                  <li>Follow the installation wizard</li>
                  <li>Launch JobCracker from your desktop or start menu</li>
                  <li>Sign in with your JobCracker account</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Download FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">When will macOS and Linux versions be available?</h3>
                <p className="text-zinc-300">We're actively working on macOS and Linux versions. Join our beta program to get early access and updates on release dates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Is JobCracker free to download?</h3>
                <p className="text-zinc-300">JobCracker offers a free tier with limited features. Premium features require a subscription. Check our pricing page for details.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Do I need an internet connection?</h3>
                <p className="text-zinc-300">Yes, JobCracker requires an internet connection to access our AI-powered DSA solutions and sync your progress.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">Ready to start cracking interviews?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-[#e78a53] hover:bg-[#e78a53]/90 text-white font-medium px-8 py-3 rounded-xl transition-colors">
                Create Account
              </button>
            </Link>
            <Link href="/#features">
              <button className="border border-zinc-700 text-zinc-300 hover:bg-zinc-800 font-medium px-8 py-3 rounded-xl transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}