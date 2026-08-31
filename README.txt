KitchenaidTech ONE PAGE

REVISIÓN ADICIONAL (a petición del cliente):
- BUG REAL — "en el logo no se ve el nombre": el archivo
  /assets/logo-kitchenaidtech.png es solo el isotipo (batidora +
  engranaje + llave inglesa), sin ningún texto de marca incluido en la
  imagen. En la cabecera, el logo se mostraba solo, sin ningún texto
  junto a él (a diferencia del footer, que sí tenía la línea
  "KitchenaidTech · Servicio técnico..." al lado). Añadido
  <span class="brand-name">KitchenAidTech</span> junto al icono en la
  cabecera, en blanco y en negrita, para que el nombre de la marca sea
  visible ahí también. No se ha tocado el footer, que ya mostraba el
  nombre correctamente.
- BUG REAL, PERO NO DE CÓDIGO — "el formulario no funciona":
  diagnosticado en directo contra
  https://serviciotecnicoamasadoras.com.es/api/contacto, que devuelve
  una página 404 de WordPress (tema Kadence). El dominio actualmente
  NO apunta a este despliegue de Vercel, sino a otra instalación
  distinta (mismo patrón ya visto hoy en Dysonweb2 y ReparaFix). El
  código del formulario en sí no se ha podido verificar en producción
  por este motivo, pero coincide correctamente con api/contacto.js.
  Revisar en Vercel (Project Settings → Domains) o en el proveedor del
  dominio que serviciotecnicoamasadoras.com.es esté correctamente
  apuntado a este proyecto.

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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona" usada en varios repos.
  Reescrito con síntoma específico: "Tu KitchenAid se detiene a media
  mezcla. La reparamos." (9 palabras).
- BUG REAL — dos textos decorativos gigantes sin reducción de tamaño
  en móvil/tablet: ".problems::after" ("KITCHENAID", 164px) y
  ".care-art::before" ("MEZCLA", 100px). Añadida reducción en tablet
  (100px/64px) y móvil (60px/44px).
- El aviso de servicio independiente solo estaba en letra pequeña del
  footer. Añadida la franja destacada bajo el menú.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Enlace de política de privacidad: la casilla existía pero sin
  enlace. Añadido a https://kelatos.com/privacy-policy/, en azul y
  subrayado.
- Botón "Atención Telefónica..." sin icono, a diferencia del de
  WhatsApp. Añadido (verificado con cuidado el cierre de </a>, tras
  el fallo detectado en TechMac).
- Verificado: schema.org ya usaba correctamente el único teléfono que
  tiene este repo; formulario correctamente conectado a
  /api/contacto.
