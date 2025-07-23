import { CheckCircle, BarChart3, Eye, Database, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatasetSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AutoDash AI
            </div>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-green-600/20 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-slate-300">Dataset Loaded Successfully!</h1>
            <p className="text-xl text-slate-400 mb-8">
              Your data has been processed and is ready for intelligent analysis. Explore insights with our
              comprehensive data explorer.
            </p>
          </div>

          {/* Dataset Info */}
          <Card className="bg-slate-800 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-slate-300 flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Dataset Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">1,247</div>
                  <div className="text-sm text-slate-400">Total Rows</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">12</div>
                  <div className="text-sm text-slate-400">Columns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">2.3 MB</div>
                  <div className="text-sm text-slate-400">File Size</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Explorer Options */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-300">Explore Your Data</h2>
            <p className="text-slate-400 mb-8">Choose how you'd like to analyze and visualize your dataset</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <Eye className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-lg text-slate-300">Preview</CardTitle>
                <CardDescription className="text-slate-400">View your raw data in a table format</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <Database className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-lg text-slate-300">Structure</CardTitle>
                <CardDescription className="text-slate-400">Analyze data types and column information</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-yellow-500 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-lg text-slate-300">Missing Data</CardTitle>
                <CardDescription className="text-slate-400">Identify and visualize missing values</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-lg text-slate-300">Dashboard</CardTitle>
                <CardDescription className="text-slate-400">Auto-generated insights and visualizations</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/data-explorer" className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Open Data Explorer</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
