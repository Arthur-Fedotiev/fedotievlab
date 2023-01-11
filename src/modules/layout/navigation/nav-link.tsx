import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const isIndex = (href: string, pathname: string): boolean =>
  !!(href === "/#" && pathname === "/");

export const NavLink = component$(({ href }: { href: string }) => {
  const location = useLocation();
  const isActive =
    location.pathname.includes(href) || isIndex(href, location.pathname);

  return (
    <a
      class={`
      ${
        isActive ? "text-yellow-500" : "text-gray-400 hover:text-gray-100"
      } block py-2 pl-3 pr-4 rounded md:font-bold hover:bg-gray-400 md:hover:bg-transparent`}
      href={isActive ? "#" : href}
    >
      <Slot />
    </a>
  );
});
