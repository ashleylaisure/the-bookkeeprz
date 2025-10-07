import { BookOpen, ChartLine, BookMarked, Underline, Search, Target, Check, User, Settings, Star, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";


export default async function LandingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

        {/* Landing Page Navigation Bar */}

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-header text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Your
                  <span className="text-primary"> Reading Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Track your reading progress, discover new books, and build lasting reading habits with our comprehensive book tracking platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">

                  {/* Sign Up Button */}
                  <Button size="lg" className="px-8 py-4" data-testid="button-start-journey">
                    <Link href={ROUTES.SIGN_UP}>
                      Start Reading Journey
                    </Link>
                  </Button>

                <Button variant="outline" size="lg" className="px-8 py-4" data-testid="button-watch-demo">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Book cover mockup with reading interface */}
              <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <div className="space-y-6">
                  {/* Currently Reading Book */}
                  <div className="flex items-center space-x-4" data-testid="card-currently-reading">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600" 
                      alt="The Midnight Library book cover" 
                      className="w-20 h-28 object-cover rounded-lg shadow-md" 
                    />
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-lg" data-testid="text-book-title">The Midnight Library</h3>
                      <p className="text-muted-foreground" data-testid="text-book-author">by Matt Haig</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <span data-testid="text-page-progress">Page 180 of 288</span>
                          <span data-testid="text-percentage">62%</span>
                        </div>
                        <div className="reading-progress h-2 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reading Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center" data-testid="stat-books-read">
                      <div className="font-bold text-2xl text-primary">47</div>
                      <div className="text-sm text-muted-foreground">Books Read</div>
                    </div>
                    <div className="text-center" data-testid="stat-day-streak">
                      <div className="font-bold text-2xl text-accent">12</div>
                      <div className="text-sm text-muted-foreground">Day Streak</div>
                    </div>
                    <div className="text-center" data-testid="stat-reading-time">
                      <div className="font-bold text-2xl text-primary">3.2h</div>
                      <div className="text-sm text-muted-foreground">This Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Everything You Need to Track Your Reading</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From progress tracking to reading analytics, discover all the tools that will transform how you read and discover books.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Progress Tracking */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-progress-tracking">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <ChartLine className="text-primary text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your reading progress with detailed statistics, reading time, and completion rates. See your improvement over time.
              </p>
            </div>
            
            {/* Feature 2: Book Library */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-book-library">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <BookMarked className="text-accent text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Personal Library</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize your books with custom shelves, tags, and ratings. Keep track of what you want to read next.
              </p>
            </div>
            
            {/* Feature 3: Reading Journal */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-reading-journal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Underline className="text-primary text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Reading Journal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Capture your thoughts, quotes, and reflections. Build a personal collection of your reading insights.
              </p>
            </div>
            
            {/* Feature 4: Book Discovery */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-book-discovery">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Search className="text-accent text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Book Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover new books with our integrated search powered by Google Books. Find your next favorite read.
              </p>
            </div>
            
            {/* Feature 5: Reading Analytics */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-reading-analytics">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <ChartLine className="text-primary text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Reading Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get detailed insights into your reading habits, favorite genres, and reading patterns with beautiful charts.
              </p>
            </div>
            
            {/* Feature 6: Goal Setting */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="feature-goal-setting">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-accent text-xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Goal Setting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set and track reading goals, build reading streaks, and stay motivated with achievement badges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">How BookTracker Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with your reading journey in just three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-create-account">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Create Your Account</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sign up for free and set up your personal reading profile in minutes.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center" data-testid="step-add-books">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Add Your Books</h3>
              <p className="text-muted-foreground leading-relaxed">
                Import your current library or search for new books to add to your collection.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center" data-testid="step-start-tracking">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Start Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Begin your reading journey and watch your progress grow with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">What Readers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="testimonial-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-semibold">SA</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Anderson</h4>
                  <p className="text-muted-foreground text-sm">Avid Reader</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {/* "BookTracker has completely transformed my reading habits. I've read more books this year than in the past three years combined!" */}
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="testimonial-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-semibold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-muted-foreground text-sm">Book Blogger</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {/* "The analytics feature is amazing. I love seeing my reading patterns and discovering new trends in my reading habits." */}
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="testimonial-3">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-semibold">EC</span>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Chen</h4>
                  <p className="text-muted-foreground text-sm">Teacher</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {/* "Perfect for organizing my book club selections and tracking what my students are reading. Highly recommended!" */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Reading Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of readers who are already tracking their progress and discovering amazing books.
          </p>

            <Button size="lg" className="px-12 py-4 text-lg" data-testid="button-start-free-account">
              Start Your Free Account
            </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Free forever • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="text-accent text-2xl" />
                <span className="font-serif font-bold text-xl">BookTracker</span>
              </div>
              <p className="text-background/70">
                Transform your reading journey with comprehensive book tracking and analytics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 BookTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}