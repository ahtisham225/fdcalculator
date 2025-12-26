import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Percent } from "lucide-react";
import fdHeroImage from "@/assets/fd-hero-savings.jpg";
import fdVsSavingsHero from "@/assets/fd-vs-savings-hero.jpg";
import fdInterestRates from "@/assets/fd-interest-rates.jpg";

interface Article {
  title: string;
  description: string;
  slug: string;
  image: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    title: "What is Fixed Deposit? Complete Beginner's Guide",
    description: "Learn what a Fixed Deposit (FD) is, how it works, types of FDs, benefits, and how to calculate returns. Everything you need to know about FD investments.",
    slug: "/what-is-fixed-deposit/",
    image: fdHeroImage,
    readTime: "8 min read",
    category: "Basics"
  },
  {
    title: "FD vs Savings Account: Which is Better?",
    description: "Compare Fixed Deposits and Savings Accounts to understand which investment option offers better returns, liquidity, and security for your financial goals.",
    slug: "/fd-vs-savings-account/",
    image: fdVsSavingsHero,
    readTime: "10 min read",
    category: "Comparison"
  },
  {
    title: "FD Interest Rates: How Banks Determine Your Returns",
    description: "Understand how banks set Fixed Deposit interest rates, factors that influence rates, and strategies to get the best FD rates for maximum returns.",
    slug: "/fd-interest-rates/",
    image: fdInterestRates,
    readTime: "9 min read",
    category: "Interest Rates"
  }
];

const Articles = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "FD Calculator Articles & Guides",
    "description": "Educational articles and guides about Fixed Deposits, FD calculations, investment strategies, and financial planning.",
    "url": "https://fdcalculator.net/articles/",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://fdcalculator.net${article.slug}`,
        "name": article.title
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>FD Calculator Articles & Guides | Learn About Fixed Deposits</title>
        <meta 
          name="description" 
          content="Educational articles and guides about Fixed Deposits. Learn FD basics, calculation methods, investment strategies, and tips to maximize your returns." 
        />
        <meta 
          name="keywords" 
          content="fixed deposit articles, FD guides, learn about FD, fixed deposit education, FD investment tips, FD basics" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fdcalculator.net/articles/" />
        {/* Open Graph */}
        <meta property="og:title" content="FD Calculator Articles & Guides" />
        <meta property="og:description" content="Educational articles and guides about Fixed Deposits. Learn FD basics, calculation methods, and investment strategies." />
        <meta property="og:url" content="https://fdcalculator.net/articles/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FD Calculator" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://fdcalculator.net/og-image.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FD Calculator Articles & Guides" />
        <meta name="twitter:description" content="Educational articles and guides about Fixed Deposits. Learn FD basics and investment strategies." />
        <meta name="twitter:site" content="@fdcalculator" />
        <meta name="twitter:image" content="https://fdcalculator.net/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <nav className="text-sm mb-6 text-muted-foreground">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Articles</span>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Articles & Guides
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Educational resources to help you understand Fixed Deposits, calculate returns, 
                and make informed investment decisions.
              </p>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Link 
                  key={index}
                  to={article.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">No articles yet</h2>
                <p className="text-muted-foreground">Check back soon for educational content about Fixed Deposits.</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 pb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Ready to Calculate Your FD Returns?
              </h2>
              <p className="text-muted-foreground mb-6">
                Use our free FD Calculator to instantly compute your maturity amount and interest earnings.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Calculate Now →
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Articles;
