import prod1 from "../assets/prod1.webp";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.webp";
import prod4 from "../assets/prod4.webp";
import prod5 from "../assets/prod5.webp";
import mm1 from "../assets/mm1.webp";
import mm2 from "../assets/mm2.webp";
import mm3 from "../assets/mm3.webp";
import mm4 from "../assets/mm4.webp";
import mm5 from "../assets/mm5.webp";
import mm6 from "../assets/mm6.webp";
import mm7 from "../assets/mm7.webp";
import mm8 from "../assets/mm8.webp";
import pe1 from "../assets/pe1.webp";
import pe2 from "../assets/pe2.webp";
import pe3 from "../assets/pe3.webp";
import pe4 from "../assets/pe4.webp";
import pe5 from "../assets/pe5.webp";
import pe6 from "../assets/pe6.webp";
import pe7 from "../assets/pe7.webp";
import pe8 from "../assets/pe8.webp";

import mmh1 from "../assets/mmh1.webp";

export const mushroomProducts = [
  // Magic Mushrooms
  { id: 9,  name: "African Transkei",      category: "Magic Mushrooms", price: 45, maxPrice: 150, image: mm1, hoverImage: mmh1, description: "African Transkei in Ottawa: Discover this legendary South African Psilocybe cubensis — known for rainbow-like visuals, tactile euphoria, and a deep connection to nature in your journeys." },
  { id: 10, name: "Albino Choda",           category: "Magic Mushrooms", price: 50, maxPrice: 170, image: mm2, hoverImage: mmh1, description: "Albino Choda in Ottawa: A rare albino hybrid delivering powerful visuals, deep euphoria, and a strong body high — for experienced users." },
  { id: 11, name: "Albino Hillbilly",       category: "Magic Mushrooms", price: 50, maxPrice: 170, image: mm3, hoverImage: mmh1, description: "Albino Hillbilly in Ottawa: A unique albino variant of the Hillbilly strain — smooth, uplifting effects with gentle visuals and warm euphoria." },
  { id: 12, name: "Albino Penis Envy",      category: "Magic Mushrooms", price: 55, maxPrice: 190, image: mm4, hoverImage: mmh1, description: "Albino Penis Envy in Ottawa: One of the most potent strains available — intense visuals, deep introspection, and powerful euphoria for experienced users." },
  { id: 13, name: "Amazonian",              category: "Magic Mushrooms", price: 50, maxPrice: 170, image: mm5, hoverImage: mmh1, description: "Amazonian in Ottawa: A classic strain from the Amazon rainforest — strong visuals, euphoria, and a deeply spiritual experience." },
  { id: 14, name: "Aztec God",              category: "Magic Mushrooms", price: 45, maxPrice: 150, image: mm6, hoverImage: mmh1, description: "Aztec God in Ottawa: A legendary strain with deeply spiritual and introspective effects — vivid visuals and a profound sense of connection." },
  { id: 15, name: "Blue Meanies",           category: "Magic Mushrooms", price: 50, maxPrice: 170, image: mm7, hoverImage: mmh1, description: "Blue Meanies in Ottawa: A highly potent strain delivering powerful visuals, euphoria, and deep introspective experiences — not for beginners." },
  { id: 16, name: "Blue Smurf",             category: "Magic Mushrooms", price: 70, maxPrice: 240, image: mm8, hoverImage: mmh1, description: "Blue Smurf in Ottawa: A premium strain known for its intense blue bruising and exceptional potency — vivid visuals and a strong euphoric high." },

  // Microdosing
  { id: 1, name: "Albino Penis Envy Capsules",      category: "Microdosing", price: 40, maxPrice: 80, image: prod1, description: "Albino Penis Envy in Ottawa: Microdosing capsules promoting relaxation, stress relief, reduced anxiety, subtle mood uplift, and calm focus." },
  { id: 2, name: "Blue Meanie Capsules",             category: "Microdosing", price: 40, maxPrice: 80, image: prod2, description: "Blue Meanie in Ottawa: Microdosing capsules promoting relaxation, stress relief, reduced anxiety, subtle mood uplift, and calm focus." },
  { id: 3, name: "Blue Smurf Capsules",              category: "Microdosing", price: 40, maxPrice: 80, image: prod3, description: "Blue Smurf in Ottawa: Microdosing capsules promoting relaxation, stress relief, reduced anxiety, subtle mood uplift, and calm focus." },
  { id: 4, name: "Calm Capsules (Golden Teacher)",   category: "Microdosing", price: 40, maxPrice: 80, image: prod4, description: "Calm Capsules Golden Teacher in Ottawa: Microdosing capsules promoting relaxation, stress relief, reduced anxiety, subtle mood uplift, and calm focus." },
  { id: 5, name: "Energy Capsules",                  category: "Microdosing", price: 40, maxPrice: 80, image: prod5, description: "Energy Capsules in Ottawa: Microdosing capsules designed to boost energy, focus, and mental clarity throughout your day." },
  { id: 6, name: "Focus Capsules",                   category: "Microdosing", price: 40, maxPrice: 80, image: prod1, description: "Focus Capsules in Ottawa: Microdosing capsules formulated to enhance concentration, productivity, and cognitive performance." },
  { id: 7, name: "Golden Teacher Capsules",          category: "Microdosing", price: 40, maxPrice: 80, image: prod2, description: "Golden Teacher in Ottawa: Microdosing capsules promoting wisdom, clarity, and balanced mental state." },
  { id: 8, name: "Sleep Capsules",                   category: "Microdosing", price: 40, maxPrice: 80, image: prod3, description: "Sleep Capsules in Ottawa: Microdosing capsules designed to promote restful sleep, relaxation, and recovery." },

  // Psilocybin Edibles
  { id: 17, name: "Chocolate Bar Golden Teacher",   category: "Psilocybin Edibles", price: 60,   maxPrice: null, image: pe1, description: "Chocolate Bar Golden Teacher in Ottawa: A delicious psilocybin-infused chocolate bar with classic Golden Teacher — smooth, uplifting, and euphoric." },
  { id: 18, name: "Chocolate Bar Penis Envy",       category: "Psilocybin Edibles", price: 60,   maxPrice: null, image: pe2, description: "Chocolate Bar Penis Envy in Ottawa: A potent psilocybin chocolate bar with Penis Envy strain — intense visuals and deep euphoria in every bite." },
  { id: 19, name: "Chocolate Blue Meanie",          category: "Psilocybin Edibles", price: 60,   maxPrice: null, image: pe3, description: "Chocolate Blue Meanie in Ottawa: A powerful psilocybin chocolate bar with Blue Meanie strain — vivid visuals and a strong euphoric experience." },
  { id: 20, name: "Infused Tea (Chai)",             category: "Psilocybin Edibles", price: 20,   maxPrice: null, image: pe4, description: "Infused Tea Chai in Ottawa: A warm and soothing psilocybin-infused chai tea — perfect for a calm and measured experience." },
  { id: 21, name: "Infused Tea (Dreamland)",        category: "Psilocybin Edibles", price: 20,   maxPrice: null, image: pe5, description: "Infused Tea Dreamland in Ottawa: A relaxing psilocybin-infused herbal tea blend — designed to ease you into a dreamy, peaceful state." },
  { id: 22, name: "Infused Tea (Green)",            category: "Psilocybin Edibles", price: 20,   maxPrice: null, image: pe6, description: "Infused Tea Green in Ottawa: A refreshing psilocybin-infused green tea — light, clean, and perfect for a gentle microdose experience." },
  { id: 23, name: "Microzoomiez Gummies (Cherry)",  category: "Psilocybin Edibles", price: 25,   maxPrice: 40,   image: pe7, description: "Microzoomiez Gummies Cherry in Ottawa: Fun and fruity psilocybin cherry gummies — precise dosing in a delicious, easy-to-enjoy format." },
  { id: 24, name: "Microzoomiez Gummies (Grape)",   category: "Psilocybin Edibles", price: 25,   maxPrice: 40,   image: pe8, description: "Microzoomiez Gummies Grape in Ottawa: Tasty psilocybin grape gummies — consistent dosing and a great flavour for an enjoyable experience." },
];
