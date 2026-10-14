import { SITE } from "@/lib/site";

const product = [
  { href: "/#product", label: "Product" },
  { href: "/#how", label: "How it works" },
  { href: "/#rules", label: "Messaging rules" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#access", label: "Request access" },
];

const policies = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="/viralos-logo.png" alt="Viralos" className="h-11 w-auto" />
          <p className="mt-4 max-w-sm text-[#3a3a3a]">
            Viralos replies to Instagram conversations for professional accounts, through the
            official API, after a person reaches out.
          </p>
          <a className="mt-5 inline-block font-medium text-[#1585AC]" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#000000]">Product</p>
          <ul className="mt-4 space-y-2.5">
            {product.map((link) => (
              <li key={link.href}>
                <a className="text-[#1a1a1a] hover:text-[#1585AC]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#000000]">Policies</p>
          <ul className="mt-4 space-y-2.5">
            {policies.map((link) => (
              <li key={link.href}>
                <a className="text-[#1a1a1a] hover:text-[#1585AC]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-sm text-[#3a3a3a]">
          © {SITE.updated.slice(-4)} Viralos. Official Instagram API only.
        </p>
      </div>
    </footer>
  );
}
