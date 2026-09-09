import { useEffect, useState } from "react";
import {
  ArrowRight, ChevronDown, Clock3, Coffee, Heart, Instagram,
  MapPin, Menu, MessageCircle, Sparkles, Star, X
} from "lucide-react";

const menu = [
  { category: "Café de especialidad", items: [
    ["Espresso", "Café de especialidad, intenso y aromático", "C$ 80"],
    ["Americano", "Espresso doble con agua caliente", "C$ 85"],
    ["Cortadito", "Espresso con un toque de leche vaporizada", "C$ 90"],
    ["Latte", "Espresso suave, leche vaporizada y espuma sedosa", "C$ 95"],
    ["Cappuccino", "Espresso, leche y abundante espuma", "C$ 95"],
    ["Mocha", "Espresso, chocolate y leche vaporizada", "C$ 120"],
  ]},
  { category: "Desayunos con sabor a Nicaragua", items: [
    ["Desayuno Nica", "Gallo pinto, huevos, queso frito y crema", "C$ 280"],
    ["Nica Toast", "Pan artesanal, aguacate, huevo y tomate", "C$ 300"],
    ["Pancakes de la Huerta", "Frutas de temporada, yogur y miel", "C$ 340"],
    ["Omelette Campesino", "Huevos, vegetales frescos, queso y pan", "C$ 380"],
  ]},
  { category: "Repostería del corazón", items: [
    ["Tres Leches", "Clásico nicaragüense, suave y cremoso", "C$ 220"],
    ["Cheesecake de Café", "Cheesecake cremoso con nuestro café", "C$ 240"],
    ["Pastel de Chocolate", "Bizcocho intenso con cobertura cremosa", "C$ 220"],
    ["Brownie de Chocolate", "Húmedo, intenso y recién horneado", "C$ 160"],
  ]},
  { category: "Bebidas frías", items: [
    ["Iced Latte", "Espresso, leche fría y hielo", "C$ 160"],
    ["Cold Brew", "Infusionado en frío, suave y refrescante", "C$ 165"],
    ["Cremoso de Café", "Café frío, cremoso y ligeramente dulce", "C$ 200"],
    ["Limonada de Fresa", "Fresa natural, limón y hielo", "C$ 170"],
  ]}
];

const favorites = [
  { name: "Latte", price: "C$ 95", tag: "Favorito", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85" },
  { name: "Tres Leches", price: "C$ 220", tag: "Dulce", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85" },
  { name: "Cappuccino", price: "C$ 95", tag: "Clásico", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85" },
];

function App() {
  const [open, setOpen] = useState(false);
const [showMenu, setShowMenu] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="announcement"><Heart size={13} fill="currentColor"/> Café hecho con corazón · Managua, Nicaragua <Heart size={13} fill="currentColor"/></div>

      <header className="nav">
        <button className="brand" onClick={() => go("inicio")} aria-label="Latte Latte inicio">
          <span className="brand-heart">♡</span>
          <span>Latte Latte</span>
        </button>
        <nav className="desktop-nav">
          <button onClick={() => go("inicio")}>Inicio</button>
          <button onClick={() => go("historia")}>Nosotros</button>
          <button onClick={() => go("favoritos")}>Favoritos</button>
          <button onClick={() => go("menu")}>Menú</button>
          <button onClick={() => go("visitanos")}>Contacto</button>
        </nav>
        <button className="nav-cta" onClick={() => go("menu")}>Ver menú <ArrowRight size={16}/></button>
        <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Abrir menú"><Menu/></button>
      </header>

      {open && <div className="mobile-drawer">
        <button className="drawer-close" onClick={() => setOpen(false)}><X/></button>
        <div className="drawer-logo">♡ Latte Latte</div>
        {["inicio","historia","favoritos","menu","visitanos"].map((id) =>
          <button key={id} onClick={() => go(id)}>{id === "inicio" ? "Inicio" : id === "historia" ? "Nosotros" : id === "favoritos" ? "Favoritos" : id === "menu" ? "Menú" : "Contacto"}</button>
        )}
        <div className="drawer-note">hecho con amor ♡</div>
      </div>}

      <main>
        <section id="inicio" className="hero">
          <div className="hero-decor decor-one">♡</div>
          <div className="hero-decor decor-two">✦</div>
          <div className="hero-copy">
            <p className="eyebrow"><span/> CAFÉ · NICARAGUA · CORAZÓN <span/></p>
            <h1>Café hecho<br/><em>con corazón.</em></h1>
            <p className="hero-text">Un pequeño rincón para disfrutar despacio, taza a taza. Café de especialidad, repostería y momentos que saben bonito.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => go("menu")}>Explorar el menú <ArrowRight size={17}/></button>
              <button className="button ghost" onClick={() => go("historia")}>Nuestra historia</button>
            </div>
            <div className="hero-signature">hecho con amor <span>♡</span></div>
          </div>
          <div className="hero-visual">
            <div className="blob"></div>
            <div className="hero-card">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=88" alt="Café Latte Latte" />
              <div className="photo-label"><span>freshly brewed</span><strong>♡</strong></div>
            </div>
            <div className="float-card"><Coffee size={17}/><div><b>Tu café, tu momento.</b><small>Preparado al instante</small></div></div>
          </div>
        </section>

        <div className="ticker"><span>☕ Café de especialidad</span><i>♡</i><span>🥐 Repostería casera</span><i>♡</i><span>🌸 Momentos bonitos</span><i>♡</i><span>🇳🇮 Hecho en Nicaragua</span></div>

        <section id="historia" className="story section">
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88" alt="Interior acogedor de una cafetería" />
            <span className="image-stamp">desde<br/><b>2026</b></span>
          </div>
          <div className="story-copy">
            <p className="eyebrow left">NUESTRA HISTORIA</p>
            <h2>Un pequeño rincón<br/><em>hecho con amor.</em></h2>
            <p>Latte Latte nació para crear un espacio donde el café, la repostería y los buenos momentos pudieran encontrarse. Un lugar para entrar sin prisa, pedir tu favorito y quedarte un ratito más.</p>
            <p>Nos inspira Nicaragua: sus mañanas, su café, sus sabores y esa forma tan nuestra de hacer sentir a alguien como en casa.</p>
            <div className="signature">Latte Latte <span>♡</span></div>
          </div>
        </section>

        <section id="favoritos" className="favorites section">
          <div className="center-heading">
            <p className="eyebrow">PARA EMPEZAR</p>
            <h2>Favoritos de <em>Latte Latte</em></h2>
            <p>Pequeñas cosas que hacen una mañana mucho más bonita.</p>
          </div>
          <div className="favorite-grid">
            {favorites.map((item, i) => <article className="product-card" key={item.name}>
              <div className="product-image"><img src={item.image} alt={item.name}/><span>{item.tag}</span><button aria-label={`Añadir ${item.name}`}><Heart size={17}/></button></div>
              <div className="product-info"><div><h3>{item.name}</h3><p>{i === 0 ? "Espresso suave con leche vaporizada y espuma sedosa" : i === 1 ? "Clásico nicaragüense, suave y cremoso" : "Espresso, leche y abundante espuma"}</p></div><strong>{item.price}</strong></div>
            </article>)}
          </div>
          <button className="text-link" onClick={() => go("menu")}>Ver carta completa <ArrowRight size={16}/></button>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>Hay días que solo necesitan<br/><em>un buen café.</em></blockquote>
          <div className="quote-line"><span></span> Latte Latte <span></span></div>
        </section>

        <section id="menu" className="menu-section section">
          <div className="center-heading">
            <p className="eyebrow">NUESTRA CARTA</p>
            <h2>Algo rico para <em>cada momento.</em></h2>
            <p>Sabores sencillos, ingredientes bonitos y mucho cariño en cada preparación.</p>
          </div>
          <div className="menu-tabs">
            {menu.map((cat, i) => <button className={showMenu === i ? "active" : ""} key={cat.category} onClick={() => setShowMenu(i)}>{cat.category}</button>)}
          </div>
          <div className="menu-list">
            {menu[showMenu].items.map(([name, desc, price]) => <div className="menu-item" key={name}>
              <div><h3>{name}</h3><p>{desc}</p></div><span></span><strong>{price}</strong>
            </div>)}
          </div>
          <p className="menu-note"><Heart size={14} fill="currentColor"/> Pregunta por nuestras sugerencias especiales del día.</p>
        </section>

        <section className="experience">
          <div className="center-heading light">
            <p className="eyebrow">LA EXPERIENCIA</p>
            <h2>Aquí el tiempo<br/><em>va despacio.</em></h2>
          </div>
          <div className="experience-grid">
            <div><div className="circle-icon"><Coffee/></div><h3>Café</h3><p>Seleccionado y preparado con cuidado.</p></div>
            <div><div className="circle-icon"><Sparkles/></div><h3>Repostería</h3><p>Horneada para acompañar tus momentos.</p></div>
            <div><div className="circle-icon"><Heart/></div><h3>Momentos</h3><p>Para conversar, reír y quedarse un poco más.</p></div>
          </div>
        </section>

        <section id="visitanos" className="visit section">
          <div className="visit-copy">
            <p className="eyebrow left">VEN A VISITARNOS</p>
            <h2>Tu mesa<br/><em>te espera.</em></h2>
            <p>Un espacio tranquilo para empezar el día, compartir una tarde o simplemente darte un momento para ti.</p>
            <div className="details">
              <div><MapPin/><span><b>Managua, Nicaragua</b><small>Un rincón para tomar café y quedarse</small></span></div>
              <div><Clock3/><span><b>Lunes — Domingo</b><small>7:00 AM — 8:00 PM</small></span></div>
            </div>
            <button className="button primary"><MapPin size={17}/> Cómo llegar</button>
          </div>
          <div className="map-card">
            <div className="map-grid"></div>
            <div className="map-pin"><MapPin size={23}/><span>Latte Latte</span></div>
            <div className="map-caption">Managua · Nicaragua ♡</div>
          </div>
        </section>

        <section className="instagram section">
          <div className="center-heading">
            <p className="eyebrow">@LATTE.LATTE</p>
            <h2>Momentos <em>Latte Latte</em></h2>
            <p>Café, flores, postres y pequeños momentos que queremos compartir contigo.</p>
          </div>
          <div className="insta-grid">
            {[
              "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85"
            ].map((src, i) => <img key={src} src={src} alt={`Momento Latte Latte ${i+1}`}/>)}
          </div>
          <button className="instagram-button"><Instagram size={17}/> Síguenos en Instagram</button>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div><div className="footer-brand">♡ Latte Latte</div><p>Café hecho con corazón.<br/>Managua, Nicaragua.</p></div>
          <div className="footer-links"><b>Explora</b><button onClick={() => go("inicio")}>Inicio</button><button onClick={() => go("menu")}>Menú</button><button onClick={() => go("historia")}>Nosotros</button></div>
          <div className="footer-links"><b>Encuéntranos</b><span>Managua, Nicaragua</span><span>Lun — Dom · 7AM — 8PM</span><span>Instagram · WhatsApp</span></div>
          <div className="footer-love"><Star size={18}/><span>hecho con<br/><em>mucho amor</em></span><Heart size={18} fill="currentColor"/></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Latte Latte</span><span>Hecho para disfrutar despacio ♡</span></div>
      </footer>

      <a className="whatsapp" href="https://wa.me/" aria-label="WhatsApp"><MessageCircle size={21}/></a>
    </div>
  );
}

export { App };
