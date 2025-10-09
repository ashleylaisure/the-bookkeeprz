import Link from "next/link";

import {
    BookMarked,
    BookOpen,
    ChartLine,
    Check,
    MessageCircle,
    Search,
    Settings,
    Star,
    Target,
    Underline,
    User,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function LandingPage() {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans">
            {/* Landing Page Navigation Bar */}

            {/* Hero Section */}
            <section className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="font-header text-foreground text-5xl leading-tight font-bold lg:text-6xl">
                                    Transform Your
                                    <span className="text-primary">
                                        {" "}
                                        Reading Journey
                                    </span>
                                </h1>
                                <p className="text-muted-foreground text-xl leading-relaxed">
                                    Track your reading progress, discover new
                                    books, and build lasting reading habits with
                                    our comprehensive book tracking platform.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                {/* Sign Up Button */}
                                <Button
                                    size="lg"
                                    className="px-8 py-4"
                                    data-testid="button-start-journey"
                                >
                                    <Link href={ROUTES.SIGN_UP}>
                                        Start Reading Journey
                                    </Link>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-4"
                                    data-testid="button-watch-demo"
                                >
                                    Watch Demo
                                </Button>
                            </div>
                            <div className="text-muted-foreground flex items-center space-x-8 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Check className="text-primary h-4 w-4" />
                                    <span>Free to start</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check className="text-primary h-4 w-4" />
                                    <span>No credit card required</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Book cover mockup with reading interface */}
                            <div className="bg-card border-border rounded-2xl border p-8 shadow-2xl">
                                <div className="space-y-6">
                                    {/* Currently Reading Book */}
                                    <div
                                        className="flex items-center space-x-4"
                                        data-testid="card-currently-reading"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600"
                                            alt="The Midnight Library book cover"
                                            className="h-28 w-20 rounded-lg object-cover shadow-md"
                                        />
                                        <div className="flex-1">
                                            <h3
                                                className="font-serif text-lg font-semibold"
                                                data-testid="text-book-title"
                                            >
                                                The Midnight Library
                                            </h3>
                                            <p
                                                className="text-muted-foreground"
                                                data-testid="text-book-author"
                                            >
                                                by Matt Haig
                                            </p>
                                            <div className="mt-2">
                                                <div className="text-muted-foreground mb-1 flex justify-between text-sm">
                                                    <span data-testid="text-page-progress">
                                                        Page 180 of 288
                                                    </span>
                                                    <span data-testid="text-percentage">
                                                        62%
                                                    </span>
                                                </div>
                                                <div className="reading-progress h-2 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reading Stats */}
                                    <div className="border-border grid grid-cols-3 gap-4 border-t pt-4">
                                        <div
                                            className="text-center"
                                            data-testid="stat-books-read"
                                        >
                                            <div className="text-primary text-2xl font-bold">
                                                47
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                Books Read
                                            </div>
                                        </div>
                                        <div
                                            className="text-center"
                                            data-testid="stat-day-streak"
                                        >
                                            <div className="text-accent text-2xl font-bold">
                                                12
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                Day Streak
                                            </div>
                                        </div>
                                        <div
                                            className="text-center"
                                            data-testid="stat-reading-time"
                                        >
                                            <div className="text-primary text-2xl font-bold">
                                                3.2h
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                This Week
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-secondary/30 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 font-serif text-4xl font-bold">
                            Everything You Need to Track Your Reading
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                            From progress tracking to reading analytics,
                            discover all the tools that will transform how you
                            read and discover books.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1: Progress Tracking */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-progress-tracking"
                        >
                            <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <ChartLine className="text-primary text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Progress Tracking
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Track your reading progress with detailed
                                statistics, reading time, and completion rates.
                                See your improvement over time.
                            </p>
                        </div>

                        {/* Feature 2: Book Library */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-book-library"
                        >
                            <div className="bg-accent/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <BookMarked className="text-accent text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Personal Library
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Organize your books with custom shelves, tags,
                                and ratings. Keep track of what you want to read
                                next.
                            </p>
                        </div>

                        {/* Feature 3: Reading Journal */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-reading-journal"
                        >
                            <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <Underline className="text-primary text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Reading Journal
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Capture your thoughts, quotes, and reflections.
                                Build a personal collection of your reading
                                insights.
                            </p>
                        </div>

                        {/* Feature 4: Book Discovery */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-book-discovery"
                        >
                            <div className="bg-accent/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <Search className="text-accent text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Book Discovery
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Discover new books with our integrated search
                                powered by Google Books. Find your next favorite
                                read.
                            </p>
                        </div>

                        {/* Feature 5: Reading Analytics */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-reading-analytics"
                        >
                            <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <ChartLine className="text-primary text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Reading Analytics
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Get detailed insights into your reading habits,
                                favorite genres, and reading patterns with
                                beautiful charts.
                            </p>
                        </div>

                        {/* Feature 6: Goal Setting */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg transition-shadow hover:shadow-xl"
                            data-testid="feature-goal-setting"
                        >
                            <div className="bg-accent/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                <Target className="text-accent text-xl" />
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Goal Setting
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Set and track reading goals, build reading
                                streaks, and stay motivated with achievement
                                badges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 font-serif text-4xl font-bold">
                            How BookTracker Works
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                            Get started with your reading journey in just three
                            simple steps.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">
                        {/* Step 1 */}
                        <div
                            className="text-center"
                            data-testid="step-create-account"
                        >
                            <div className="bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <span className="text-primary-foreground text-2xl font-bold">
                                    1
                                </span>
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Create Your Account
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Sign up for free and set up your personal
                                reading profile in minutes.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div
                            className="text-center"
                            data-testid="step-add-books"
                        >
                            <div className="bg-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <span className="text-accent-foreground text-2xl font-bold">
                                    2
                                </span>
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Add Your Books
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Import your current library or search for new
                                books to add to your collection.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div
                            className="text-center"
                            data-testid="step-start-tracking"
                        >
                            <div className="bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                <span className="text-primary-foreground text-2xl font-bold">
                                    3
                                </span>
                            </div>
                            <h3 className="mb-4 font-serif text-xl font-semibold">
                                Start Tracking
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Begin your reading journey and watch your
                                progress grow with detailed analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-secondary/30 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 font-serif text-4xl font-bold">
                            What Readers Say
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Testimonial 1 */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg"
                            data-testid="testimonial-1"
                        >
                            <div className="mb-4 flex items-center">
                                <div className="bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                    <span className="text-primary-foreground font-semibold">
                                        SA
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Sarah Anderson
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Avid Reader
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {/* "BookTracker has completely transformed my reading habits. I've read more books this year than in the past three years combined!" */}
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg"
                            data-testid="testimonial-2"
                        >
                            <div className="mb-4 flex items-center">
                                <div className="bg-accent mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                    <span className="text-accent-foreground font-semibold">
                                        MJ
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Michael Johnson
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Book Blogger
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {/* "The analytics feature is amazing. I love seeing my reading patterns and discovering new trends in my reading habits." */}
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div
                            className="bg-card border-border rounded-xl border p-8 shadow-lg"
                            data-testid="testimonial-3"
                        >
                            <div className="mb-4 flex items-center">
                                <div className="bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                                    <span className="text-primary-foreground font-semibold">
                                        EC
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Emily Chen
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Teacher
                                    </p>
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
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-foreground mb-6 font-serif text-4xl font-bold">
                        Ready to Transform Your Reading Journey?
                    </h2>
                    <p className="text-muted-foreground mb-8 text-xl">
                        Join thousands of readers who are already tracking their
                        progress and discovering amazing books.
                    </p>

                    <Button
                        size="lg"
                        className="px-12 py-4 text-lg"
                        data-testid="button-start-free-account"
                    >
                        Start Your Free Account
                    </Button>

                    <p className="text-muted-foreground mt-4 text-sm">
                        Free forever • No credit card required • Cancel anytime
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-foreground text-background py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-4 flex items-center space-x-2">
                                <BookOpen className="text-accent text-2xl" />
                                <span className="font-serif text-xl font-bold">
                                    BookTracker
                                </span>
                            </div>
                            <p className="text-background/70">
                                Transform your reading journey with
                                comprehensive book tracking and analytics.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold">Product</h4>
                            <ul className="text-background/70 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold">Company</h4>
                            <ul className="text-background/70 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold">Connect</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <Users className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <Star className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-background/20 text-background/70 mt-8 border-t pt-8 text-center">
                        <p>&copy; 2024 BookTracker. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
