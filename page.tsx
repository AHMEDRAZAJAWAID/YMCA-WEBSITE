import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Welcome to YMCA Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Connect, collaborate, and grow with fellow YMCA members. Join discussions, attend events, and access
                exclusive resources in our vibrant community platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/login">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign In to Your Account
                    <span className="ml-2 h-4 w-4 flex items-center justify-center">→</span>
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                    Join the Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need to Stay Connected
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover powerful tools designed to enhance your YMCA experience and build lasting connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="h-6 w-6 text-primary text-xl">👥</span>
                  </div>
                  <CardTitle>Member Directory</CardTitle>
                  <CardDescription>
                    Find and connect with YMCA members by location, skills, and interests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">2,500+ Members</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="h-6 w-6 text-accent text-xl">💬</span>
                  </div>
                  <CardTitle>Discussion Forums</CardTitle>
                  <CardDescription>
                    Engage in meaningful conversations and share knowledge with the community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">50+ Active Topics</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="h-6 w-6 text-primary text-xl">📅</span>
                  </div>
                  <CardTitle>Events & Webinars</CardTitle>
                  <CardDescription>Join virtual and in-person events to learn and network with peers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Weekly Events</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="h-6 w-6 text-accent text-xl">📚</span>
                  </div>
                  <CardTitle>Content Library</CardTitle>
                  <CardDescription>Access exclusive resources, documents, and educational materials.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">1,000+ Resources</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <span className="h-8 w-8 text-primary mr-2 text-2xl">👥</span>
                  <span className="text-4xl font-bold text-foreground">2,500+</span>
                </div>
                <p className="text-lg text-muted-foreground">Active Members</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <span className="h-8 w-8 text-accent mr-2 text-2xl">📈</span>
                  <span className="text-4xl font-bold text-foreground">95%</span>
                </div>
                <p className="text-lg text-muted-foreground">Member Satisfaction</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <span className="h-8 w-8 text-primary mr-2 text-2xl">⭐</span>
                  <span className="text-4xl font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-lg text-muted-foreground">Community Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with like-minded YMCA members and unlock exclusive opportunities for growth and collaboration.
            </p>
            <Link href="/auth/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started Today
                <span className="ml-2 h-5 w-5 flex items-center justify-center">→</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
