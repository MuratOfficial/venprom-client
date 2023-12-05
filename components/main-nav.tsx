"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/admin/${params.storeId}`,
      label: "Главная",
      active: pathname === `/admin/${params.storeId}`,
    },
    {
      href: `/admin/${params.storeId}/categories`,
      label: "Подкатегории",
      active: pathname === `/admin/${params.storeId}/categories`,
    },
    {
      href: `/admin/${params.storeId}/colors`,
      label: "Сообщения",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/admin/${params.storeId}/products`,
      label: "Продукция",
      active: pathname === `/admin/${params.storeId}/products`,
    },
    {
      href: `/admin/${params.storeId}/settings`,
      label: "Настройки",
      active: pathname === `/admin/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
