import { Search, Home, Info, LogIn, BarChart3, Upload, Brain, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AutoDash AI
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </Link>
            </nav>

            {/* Search and Login */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search datasets..."
                  className="w-64 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pl-10"
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Link href="/auth" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-300">Your Personal</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Data Analyst
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            AutoDash AI empowers you to effortlessly derive deep, actionable insights from your datasets. Upload,
            analyze, and visualize your data with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/upload">
                <Upload className="h-4 w-4 mr-2" />
                Start Analyzing
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-300">Intelligent Data Analysis Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Upload className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-slate-300">Smart Data Upload</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Upload CSV or Excel files with automated data cleaning and intelligent type conversion.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-slate-300">Auto Visualization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Generate beautiful charts and dashboards automatically with correlation matrices and time series
                  analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-purple-500" />
                  <CardTitle className="text-slate-300">Data Explorer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Comprehensive data exploration with preview, structure analysis, and missing data visualization.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-300">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of data enthusiasts using AutoDash AI to make intelligent, data-driven decisions.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/auth">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AutoDash AI
            </span>
          </div>
          <p className="text-slate-400">
            © 2024 AutoDash AI. All rights reserved. Intelligent Data Analytics Platform.
          </p>
        </div>
      </footer>
    </div>
  )
}
