import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La meilleure pizza américaine
          </h1>
          <p className="text-xl mb-8 text-red-100">
            Découvrez nos pizzas authentiques, préparées avec passion et les meilleurs ingrédients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Commander maintenant
            </Button>
            <Badge variant="secondary" className="self-center">
              Livraison gratuite dès 25€
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
