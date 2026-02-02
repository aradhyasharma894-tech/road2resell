import review1 from "@/assets/reviews/review1.jpeg";
import review2 from "@/assets/reviews/review2.jpeg";
import review3 from "@/assets/reviews/review3.jpeg";
import review4 from "@/assets/reviews/review4.jpeg";

const reviews = [review1, review2, review3, review4];

const GoogleReviewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 space-y-12">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            ⭐ 5.0 Google Reviews from Real Customers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by customers across Toronto & GTA for instant cash,
            fair pricing, and a hassle-free selling experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((img, index) => (
            <div
              key={index}
              className="review-card rounded-2xl overflow-hidden shadow-xl"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <img
                src={img}
                alt="Google review screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoogleReviewsSection;
