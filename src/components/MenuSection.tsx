import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MenuSection = () => {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Sauce tomate, mozzarella, basilic frais",
      price: "9.50€",
      badge: "Classique"
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Sauce tomate, mozzarella, pepperoni",
      price: "12.50€",
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "4 Fromages",
      description: "Sauce tomate, mozzarella, chèvre, gorgonzola, parmesan",
      price: "13.50€",
      badge: "Gourmand"
    },
    {
      id: 4,
      name: "Végétarienne",
      description: "Sauce tomate, mozzarella, légumes grillés",
      price: "11.50€",
      badge: "Santé"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-gray-600">
            Choisissez parmi nos délicieuses pizzas et personnalisez-les selon vos envies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{pizza.name}</CardTitle>
                {pizza.badge && (
                  <Badge variant="secondary" className="mt-2">
                    {pizza.badge}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {pizza.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    {pizza.price}
                  </span>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
