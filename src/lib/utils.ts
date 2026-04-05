import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NavItem } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPathActive(item: any, pathname: string): boolean {
  if (item.href && pathname.startsWith(item.href)) {
    return true;
  }
  if (item.subItems) {
    return item.subItems.some((sub: any) => isPathActive(sub, pathname));
  }
  if (item.children) {
    return item.children.some((child: any) => isPathActive(child, pathname));
  }
  return false;
}

export function filterAccessibleMenuItems(
  items: NavItem[],
  permissions: Set<string>
): NavItem[] {
  return items.reduce((acc, item) => {
    const hasPermission = !item.permission || permissions.has(item.permission);

    if (item.subItems && item.subItems.length > 0) {
      const accessibleSubItems = filterAccessibleMenuItems(
        item.subItems,
        permissions
      );

      if (accessibleSubItems.length > 0 && hasPermission) {
        acc.push({ ...item, subItems: accessibleSubItems });
      }
    } else if (hasPermission) {
      acc.push(item);
    }

    return acc;
  }, [] as NavItem[]);
}

export const generateYearOptions = (range: number = 5): string[] => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];

  for (let i = currentYear; i >= currentYear - range; i--) {
    years.push(i.toString());
  }

  return years;
};
