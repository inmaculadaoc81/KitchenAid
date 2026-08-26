KitchenaidTech ONE PAGE

Dominio:
https://serviciotecnicoamasadoras.com.es/

Teléfono caja de información y todos los botones:
+34 914 46 85 03

Diagnóstico:
20 € + IVA.
NO indicar diagnóstico gratuito.

Incluye:
- WhatsApp 24/365
- Solicitud de recogida
- Atención telefónica
- Google Business
- YouTube
- Cal.com
- Formulario SMTP
- Chatbot n8n
- Mapa
- SEO One Page
- Sección específica KitchenAid: motor, engranajes, transmisión, controles, accesorios y temperatura

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo de soporte no aparece visible en el HTML; solo se utiliza en /api/contacto.

Google Analytics:
G-2P4LKQ62G8

HISTORIAL: el repositorio era multipágina (17 páginas /modelos/ de
amasadoras KitchenAid y varias páginas /servicios/) y se convirtió a
one-page; esas páginas fueron eliminadas en commits anteriores. Como
ya no existen en el sitemap actual, se ha añadido middleware.mjs para
redirigir (301) cualquier URL antigua a la home, evitando 404 en
enlaces indexados o backlinks antiguos. Excluye /api/* y cualquier
ruta con extensión de archivo. Se añadió "@vercel/functions": "^2.0.3"
a package.json como dependencia de esta función.

REVISIÓN (fixes aplicados en esta pasada):
- Ya estaba bien: schema.org LocalBusiness, sección SEO "Sobre
  KitchenAid", menú móvil, api/contacto.js con SMTP + nodemailer,
  teléfono +34 914 46 85 03 consistente en toda la web (no se ha
  tocado). No se ha modificado ninguno de estos.
- Google Analytics: no existía. Añadido G-2P4LKQ62G8.
- Meta robots: no existía. Añadido.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar /
  Política de privacidad → https://kelatos.com/privacy-policy/), con
  diseño apilado a ancho completo en móvil.
- Borde blanco del botón del chat: faltaba tanto en la regla CSS como
  en el script de reposicionamiento JS. Añadido en ambos sitios.
- .navcall: el texto largo ("Atención Telefónica 24 horas 365 días")
  deformaba la píldora del menú. Acortado a solo el número (mismo
  número, +34 914 46 85 03) y añadido white-space:nowrap como
  salvaguarda. El botón grande .cta.phone del hero conserva su texto
  completo.
- H1 de portada reescrito, corto, directo y totalmente afirmativo
  (sin interrogación ni condicionales), incluye la marca: "Tu
  KitchenAid no funciona. Aquí la revisamos y la reparamos." Tamaño
  del H1 aumentado: clamp(38-57px) → clamp(46-74px) en escritorio,
  40px → 48px en móvil.
