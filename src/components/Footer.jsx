import { Icon } from "@iconify/react";

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
    <div className="space-y-4">
      {grid.map((row, ri) => (
        <div key={ri} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-1">
          {row.map((area) => (
            <a
              key={area}
              href="#"
              className={`text-base nav-lato transition-colors duration-200 text-white hover:text-yellow-300 leading-4`}
            >
              {area}
            </a>
          ))}
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
      <div className="mx-auto max-w-375 px-3.75 pt-7.5 pb-8">
        <h3 className="text-[#92E5FF] font-semibold text-[22px] mb-2 nav-poppins">
          Delivery in Your Area (Ottawa)
        </h3>
        <AreaGrid areas={ottawaAreas} />
      </div>
      </div>

      {/* Quebec Section */}
      <div className="mx-auto max-w-375 px-3.75 pt-9.5 bg-[#003465]">
        <h3 className="text-[#92E5FF] font-semibold text-[22px] mb-2 nav-poppins">
          Delivery in Your Area (Quebec)
        </h3>
        <AreaGrid areas={quebecAreas} />
        <div className="h-px w-full bg-blue-300/50 mt-8"></div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-375 p-3.75 pb-12 flex flex-col gap-2.5">
        <h3 className="text-[#92E5FF] font-semibold text-[22px]  nav-poppins">Contact Information</h3>
        <div className="flex flex-wrap items-center gap-6">
          <a href="tel:3439998830" className="flex items-center gap-2 text-white hover:text-yellow-300 transition font-semibold text-xl nav-lato">
            <Icon icon="mdi:phone" className="w-6 h-6" />
            (343) 999-4830
          </a>
          <a href="mailto:info@themushroomottawa.ca" className="flex items-center gap-2 text-white hover:text-yellow-300 transition font-semibold text-xl nav-lato">
            <Icon icon="mdi:email-outline" className="w-5 h-5" />
            info@themushroomottawa.ca
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-300 transition font-semibold text-xl nav-lato">
            <Icon icon="mdi:map-marker-outline" className="w-5 h-5" />
            779 Somerset St W, Ottawa, ON K1R 6R3
          </a>
          <div className="ml-auto flex items-center gap-2">
            <a href="#" className="p-2 rounded-md transition border hover:text-yellow-300 group hover:scale-110 duration-300">
              <Icon icon="mdi:instagram" className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
            </a>
            <a href="#" className=" p-2 rounded-md transition border hover:text-yellow-300 group hover:scale-110 duration-300">
              <Icon icon="mdi:reddit" className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto py-3 text-center text-[15px] nav-poppins text-[#E2E2E2x] bg-[#00274b]">
        © The Mushroom Ottawa. All rights reserved. Powered By{" "}
        <span className="font-semibold ">Shroom Express.</span>{" "}
        <a href="#" className="underline hover:text-white text-white font-semibold transition">Privacy Policy</a>{" "}
        |{" "}
        <a href="#" className="underline hover:text-white text-white font-semibold transition">Return Policy</a>
      </div>
    </footer>
  );
}
