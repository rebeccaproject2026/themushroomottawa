import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// Convert area name to URL slug: "ByWard Market" → "byward-market"
function toSlug(area) {
  return area
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const ottawaAreas = [
  "Ottawa", "Airport Uplands", "Barrhaven", "Beacon Hill", "Billings Bridge", "Blackburn Hamlet", "Blossom Park", "Bridlewood",
  "ByWard Market", "Carlington", "Centretown", "Chapel Hill", "Chinatown", "Convent Glen", "Cyrville", "Downtown",
  "Elmvale Acres", "Findlay Creek", "Glen Cairn", "Golden Triangle", "Greely", "Greenboro", "Hintonburg", "Hunt Club",
  "Kanata", "Kanata Lakes", "Katimavik", "Lebreton Flats", "Leitrim", "Lindenlea", "Little Italy", "Lower Town",
  "Manotick", "Mechanicsville", "Morgan's Grant", "Nepean", "New Edinburgh", "Old Ottawa East", "Old Ottawa South", "Orleans",
  "Alta Vista", "Overbrook", "Pineview", "Riverside Park", "Riverside South", "Rockcliffe Park", "Rothwell Heights", "Sandy Hill",
  "South Keys", "St Laurent", "Stittsville", "Stonebridge", "The Glebe", "Tunney's Pasture", "Vanier", "Wellington Village",
  "Wellington West", "Westboro",
];

const quebecAreas = [
  "Gatineau", "Hull Sector", "Aylmer Sector", "Centre-Ville Gatineau", "Champlain Park", "Deschênes", "Glenwood", "Lakeview Terrace",
  "Le Plateau", "Les Cèdres", "Lucerne Nord", "Manoir Champlain / Rivermead", "Parc de la Montagne", "Mont-Bleu", "Val-Tétreau", "Wrightville / Saint-Jean-Bosco",
  "Vieux-Hull / Downtown Hull", "Limbour", "Templeton", "Maloney", "Le Versant", "Touraine", "Riviera", "Pointe-Gatineau",
  "Notre-Dame / St-Jean-Marie-Vianney", "Carrefour / La Baie", "De l'Hôpital", "Du Ruisseau", "Des Érables", "Lorrain", "Mont-Luc", "Côte d'Azur",
  "Les Hauteurs", "Les Pins", "Terrasses Paiement", "Saint-René", "Saint-Richard", "Sainte-Rose", "Tecumseh", "Manoir des Trembles",
  "Des Hautes-Plaines", "Saint-Raymond", "Lac des Fées", "Jardins Taché", "Richelieu Industrial Park", "Wychwood", "Des Pionniers", "Queen's Park",
  "Parc Aylmer", "Pilon", "Seigneurie Lavigne", "Vieux-Moulin", "McLeod / Eardley", "Chelsea", "Cantley", "Val-des-Monts",
  "L'Ange-Gardien", "La Pêche", "Buckingham", "Masson", "Angers", "Other Areas",
];

function AreaGrid({ areas }) {
  const cols = 8;
  const rows = Math.ceil(areas.length / cols);
  const grid = Array.from({ length: rows }, (_, r) =>
    areas.slice(r * cols, r * cols + cols)
  );

  return (
    <div className="space-y-3 lg:space-y-4">
      {grid.map((row, ri) => (
        <div key={ri} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-2 lg:gap-x-4 gap-y-2 lg:gap-y-1">
          {row.map((area) => {
            const href = area === "Ottawa" ? "/ottawa" : `/area/${toSlug(area)}`;
            return (
              <Link
                key={area}
                to={href}
                className="text-sm lg:text-base nav-lato transition-colors duration-200 text-white hover:text-yellow-300 leading-tight lg:leading-4"
              >
                {area}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#003465] text-white">
      {/* Ottawa Section */}
      <div className="bg-[#00417e]">
      <div className="mx-auto max-w-375 px-4 lg:px-3.75 pt-6 lg:pt-7.5 pb-8">
        <h3 className="text-[#92E5FF] font-semibold text-xl lg:text-[22px] mb-3 lg:mb-2 nav-poppins">
          Delivery in Your Area (Ottawa)
        </h3>
        <AreaGrid areas={ottawaAreas} />
      </div>
      </div>

      {/* Quebec Section */}
      <div className="mx-auto max-w-375 px-4 lg:px-3.75 pt-8 lg:pt-9.5 bg-[#003465]">
        <h3 className="text-[#92E5FF] font-semibold text-xl lg:text-[22px] mb-3 lg:mb-2 nav-poppins">
          Delivery in Your Area (Quebec)
        </h3>
        <AreaGrid areas={quebecAreas} />
        <div className="h-px w-full bg-blue-300/50 mt-8"></div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-375 px-4 lg:px-3.75 py-8 lg:pt-3.75 lg:pb-12 flex flex-col gap-4 lg:gap-2.5">
        <h3 className="text-[#92E5FF] font-semibold text-xl lg:text-[22px] nav-poppins">Contact Information</h3>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center gap-4 lg:gap-6 w-full">
          <a href="tel:3439998830" className="flex items-center gap-3 lg:gap-2 text-white hover:text-yellow-300 transition font-semibold text-base sm:text-lg lg:text-xl nav-lato">
            <Icon icon="mdi:phone" className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
            <span>(343) 999-4830</span>
          </a>
          <a href="mailto:info@themushroomottawa.ca" className="flex items-center gap-3 lg:gap-2 text-white hover:text-yellow-300 transition font-semibold text-base sm:text-lg lg:text-xl nav-lato">
            <Icon icon="mdi:email-outline" className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" />
            <span className="break-all">info@themushroomottawa.ca</span>
          </a>
          <a href="#" className="flex items-center gap-3 lg:gap-2 text-white hover:text-yellow-300 transition font-semibold text-base sm:text-lg lg:text-xl nav-lato">
            <Icon icon="mdi:map-marker-outline" className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" />
            <span>779 Somerset St W, Ottawa, ON K1R 6R3</span>
          </a>
          <div className="mt-4 lg:mt-0 lg:ml-auto flex items-center gap-3 lg:gap-2 w-full lg:w-auto justify-center lg:justify-end">
            <a href="https://www.instagram.com/themushroomottawa" target="_blank" rel="noopener noreferrer" className="p-2 lg:p-2 rounded-md transition border hover:text-yellow-300 group hover:scale-110 duration-300">
              <Icon icon="mdi:instagram" className="w-5 h-5 lg:w-5 lg:h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
            </a>
            <a href="https://www.reddit.com/user/ShroomExpress/?share_id=HXp6VzjmqQPzCzMI_ybWz&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/" target="_blank" rel="noopener noreferrer" className="p-2 lg:p-2 rounded-md transition border hover:text-yellow-300 group hover:scale-110 duration-300">
              <Icon icon="mdi:reddit" className="w-5 h-5 lg:w-5 lg:h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto px-4 pt-4 pb-20 lg:py-3 text-center text-xs sm:text-sm lg:text-[15px] leading-relaxed lg:leading-normal nav-poppins text-[#E2E2E2] bg-[#00274b]">
        <div className="mb-1 lg:mb-0 lg:inline">
          © The Mushroom Ottawa. All rights reserved. Powered By{" "}
          <span className="font-semibold ">Shroom Express.</span>
        </div>
        <div className="inline-block mt-1 lg:mt-0 lg:inline">
          <span className="hidden lg:inline">{" "}</span>
          <Link to="/privacy-policy" className="underline hover:text-white text-white font-semibold transition">Privacy Policy</Link>
          <span className="mx-2 lg:mx-1">|</span>
          <Link to="/return-policy" className="underline hover:text-white text-white font-semibold transition">Return Policy</Link>
        </div>
      </div>
    </footer>
  );
}
