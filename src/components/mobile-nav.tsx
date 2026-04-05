"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/lib/types";
import Image from "next/image";
import { useUser } from "@/hooks/use-user";

function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu className="h-10 w-10" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="p-4">
          <Link href="/dashboard" className="flex items-center gap-2 mb-8">
            <Image
              src="/images/logo.png"
              alt="Logo Lundra"
              width={62}
              height={68}
            />
          </Link>
          <div className="flex flex-col gap-2">
            {items.map((item) =>
              item.subItems ? (
                <Accordion
                  type="single"
                  collapsible
                  key={item.id}
                  className="w-full"
                >
                  <AccordionItem value={item.id} className="border-b-0">
                    <AccordionTrigger className="py-3 text-base hover:no-underline">
                      <div className="flex items-center">
                        {item.icon && <item.icon className="mr-2 h-5 w-5" />}
                        {item.label}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-1 mt-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.id || sub.href}
                            href={sub.href || "#"}
                            className={cn(
                              "block p-2 rounded-md hover:bg-gray-100",
                              pathname.startsWith(sub.href || "") &&
                                "bg-gray-200"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={item.id}
                  href={item.href || "#"}
                  className={cn(
                    "flex items-center gap-2 py-3 px-3 rounded-md text-base hover:bg-gray-100",
                    pathname.startsWith(item.href || "") && "bg-gray-200"
                  )}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function MobileNavigation({ items }: { items: NavItem[] }) {
  const currentUser = useUser();

  if (!currentUser || !currentUser.permissions) return null;

  const userPermissions = currentUser.permissions || [];

  const filteredItems = items
    .filter((item) => {
      return !item.permission || userPermissions.includes(item.permission);
    })
    .map((item) => {
      if (item.subItems) {
        const filteredSubItems = item.subItems.filter(
          (sub) => !sub.permission || userPermissions.includes(sub.permission)
        );
        return { ...item, subItems: filteredSubItems };
      }
      return item;
    })
    .filter((item) => {
      if (item.subItems && item.subItems.length === 0) {
        return false;
      }
      return true;
    });

  return <MobileNav items={filteredItems} />;
}
