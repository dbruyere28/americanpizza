import { Menu, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://american-pizza.net/wp-content/uploads/2023/06/logo.png"
                alt="American Pizza"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8 ml-10">
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium">
                Menu
              </a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium">
                Promotions
              </a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="hidden md:block">
                  <Menu className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <NavigationMenu>
                  <NavigationMenu.List>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="#">Menu</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="#">Promotions</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            <Input
              placeholder="Rechercher..."
              leftAdornment={<Search className="h-4 w-4" />}
              className="hidden md:block w-64"
            />
            <Button variant="outline">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Commander
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
