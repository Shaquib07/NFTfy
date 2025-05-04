import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Layout, Shield, Settings, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-800 to-blue-900 opacity-70"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-20"></div>

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-500 blur-[100px] opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-500 blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span>Algorand-Powered NFT Platform Builder</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              NFTfy
            </h1>
            <p className="text-5xl font-bold tracking-tight mb-6">Your No-Code Gateway to Web3</p>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Launch your custom NFT marketplace on Algorand in minutes. No coding required. Perfect for creators,
              brands, and startups ready to enter the metaverse.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full px-8"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3D NFT Showcase */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 z-0 opacity-80">
          <div className="relative w-full h-full">
            <div className="absolute left-0 bottom-0 w-1/3 h-40">
              <img
                src="/nft-card-1.png"
                alt="NFT Example"
                className="w-full h-full object-contain transform rotate-[-15deg] hover:rotate-[-5deg] transition-transform duration-500"
              />
            </div>
            <div className="absolute left-1/3 bottom-0 w-1/3 h-56 z-10">
              <img
                src="/nft-card-2.png"
                alt="NFT Example"
                className="w-full h-full object-contain transform hover:translate-y-[-10px] transition-transform duration-500"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-1/3 h-40">
              <img
                src="/nft-card-3.png"
                alt="NFT Example"
                className="w-full h-full object-contain transform rotate-[15deg] hover:rotate-[5deg] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-400">Deploy Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to launch your NFT marketplace
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our platform handles the complexity of blockchain technology, allowing you to focus on your business and
              creative vision.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials/Stats Section */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by creators worldwide</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-70 hover:opacity-100 transition-opacity"
              src="/abstract-geometric-logo.png"
              alt="Brand"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-70 hover:opacity-100 transition-opacity"
              src="/abstract-geometric-logo.png"
              alt="Brand"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-70 hover:opacity-100 transition-opacity"
              src="/abstract-geometric-logo.png"
              alt="Brand"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-70 hover:opacity-100 transition-opacity"
              src="/abstract-geometric-logo.png"
              alt="Brand"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">10k+</p>
              <p className="text-sm text-gray-400">NFTs Created</p>
            </div>
            <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-400">Marketplaces Launched</p>
            </div>
            <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">$2M+</p>
              <p className="text-sm text-gray-400">Trading Volume</p>
            </div>
            <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="text-sm text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: "One-Click Smart Contract Deployment",
    description:
      "Configure your token and smart contract parameters with a simple form. We handle the complex deployment to the Algorand blockchain with industry-leading security.",
    icon: Zap,
  },
  {
    name: "Custom Marketplace Design",
    description:
      "Get a fully-featured NFT marketplace frontend with your branding, automatically generated based on your specifications. Multiple themes and customization options available.",
    icon: Layout,
  },
  {
    name: "Secure and Compliant",
    description:
      "All marketplaces are built on Algorand's carbon-negative blockchain with support for latest ARC standards for optimal compatibility and security.",
    icon: Shield,
  },
  {
    name: "Complete Admin Controls",
    description:
      "Manage your marketplace with powerful admin tools. Track sales, monitor users, and adjust settings with ease through an intuitive dashboard.",
    icon: Settings,
  },
]
