import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et prendre votre commande.
            </p>
            <div className="space-y-4">
              <Input placeholder="Votre nom" />
              <Input placeholder="Votre email" />
              <Input placeholder="Votre téléphone" />
              <Textarea placeholder="Votre message" rows={4} />
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Envoyer le message
              </Button>
            </div>
          </div>
          <div className="bg-red-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Informations
            </h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-semibold">Téléphone</p>
                <p>09 80 98 76 54</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@american-pizza.net</p>
              </div>
              <div>
                <p className="font-semibold">Horaires</p>
                <p>11h - 23h (tous les jours)</p>
              </div>
              <div>
                <p className="font-semibold">Adresse</p>
                <p>123 Rue des Pizzas, 75001 Paris</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
