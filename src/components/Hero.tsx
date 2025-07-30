import heroImage from '@/assets/hero-entertainment.jpg';

export function Hero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Hybrid
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your all-in-one entertainment hub. Stream, listen, play, and explore without limits.
        </p>
        <div className="text-sm text-muted-foreground">
          ✨ No ads • No subscriptions • No restrictions
        </div>
      </div>
    </div>
  );
}