// Text of the legal pages (/privacy, /terms, /cookies, /refunds) in both
// languages. Each page is a list of sections; a section's `body` mixes plain
// paragraphs (strings) and bullet lists ({ list: [...] }).
//
// These pages describe how the business actually operates today (booking by
// message, 50% deposit, payment by transfer, no cookies or analytics). If any
// of that changes — e.g. adding an online payment form, a contact form, or
// analytics — these pages must be updated at the same time.

import { business, legalIdentity, LEGAL_LAST_UPDATED } from './business'

const b = business

const en = {
  lastUpdated: 'Last updated',
  related: 'Related policies',
  pages: {
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This policy explains what personal information Villas Punta Uva collects, why, who it is shared with, and the rights you have over it. We collect as little as we need to answer your questions and manage your stay.',
      seoDescription: 'How Villas Punta Uva collects, uses, and protects your personal information.',
      sections: [
        {
          heading: 'Who is responsible for your information',
          body: [
            `${b.tradeName} is operated by ${legalIdentity('identification')}, ${b.address}. We are responsible for your personal information under Costa Rica’s Law 8968 on the Protection of Individuals with Regard to the Processing of their Personal Data.`,
            `Contact for privacy questions: ${b.email} or ${b.phone} (phone/WhatsApp).`,
          ],
        },
        {
          heading: 'What we collect',
          body: [
            'This website has no contact form, account, or online payment form. We only receive personal information when you choose to contact us or book:',
            {
              list: [
                'Contact details you send us, such as your name, phone number, email address, and WhatsApp profile name.',
                'Booking details, such as your dates, number of guests and children, pets, special requests, and the content of your messages.',
                'Payment confirmation details from the transfer you send (for example, the sender name and reference shown by Zelle, Interac e-Transfer, Wise, SINPE, or your bank). We never ask for or store credit card numbers.',
                'Information that Costa Rican law requires us to keep for tax, accounting, or guest-registration purposes, if any applies to your stay.',
              ],
            },
            'When you simply browse the website, we do not collect your name or contact details. Our hosting provider automatically records standard technical data (IP address, browser type, pages requested, and time) in server logs, used only to deliver the site, keep it secure, and fix errors.',
          ],
        },
        {
          heading: 'What we do not do',
          body: [
            {
              list: [
                'We do not use cookies, analytics, advertising pixels, or tracking tools on this website.',
                'We do not sell or rent your personal information.',
                'We do not send marketing messages unless you ask us to.',
              ],
            },
          ],
        },
        {
          heading: 'Why we use your information',
          body: [
            {
              list: [
                'To answer your questions and send you a quote (to take steps at your request before a contract).',
                'To confirm and manage your reservation, receive payment, and provide your stay (to perform our contract with you).',
                'To meet our tax, accounting, and other legal obligations in Costa Rica (legal obligation).',
                'To keep the website and our guests secure and prevent fraud (our legitimate interest).',
              ],
            },
          ],
        },
        {
          heading: 'Who we share it with',
          body: [
            'We share personal information only when needed for the purposes above:',
            {
              list: [
                'Service providers we use to run the business: Vercel (website hosting), Google (Gmail email), and Meta (WhatsApp messaging).',
                'The bank or payment service you choose to pay with.',
                'Our staff and contractors who prepare and service the villas, only with the details they need (for example, arrival time or number of guests).',
                'Independent tour operators or service providers (chefs, massage therapists, tours) only if you ask us to put you in touch with them.',
                'Government authorities, when Costa Rican law requires it.',
              ],
            },
            'If you book through Airbnb, Airbnb is responsible for the information you give it under its own privacy policy.',
          ],
        },
        {
          heading: 'Third-party services on this website',
          body: [
            'The map on our Location page is provided by Google Maps. It only loads after you click “Load map”. Once loaded, Google may collect data such as your IP address and set its own cookies, under Google’s Privacy Policy (policies.google.com/privacy).',
            'Links to Airbnb, Google, Instagram, TikTok, WhatsApp, Waze, and news sites take you to services with their own privacy policies. We do not control what they collect.',
          ],
        },
        {
          heading: 'International transfers',
          body: [
            'Our service providers (such as Vercel, Google, and Meta) may store and process information outside Costa Rica, including in the United States. We use well-established providers that apply their own security and data-protection safeguards.',
          ],
        },
        {
          heading: 'How long we keep it',
          body: [
            'We keep messages and booking records for as long as needed to manage your stay and handle any follow-up, and afterwards only as long as Costa Rican tax and accounting law requires. Information that is no longer needed is deleted.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'Under Costa Rican Law 8968 you may ask to access, correct, or delete your personal information, and withdraw any consent you have given. If you are in the European Union, the United Kingdom, or another place with similar laws, you may also have the right to object to or restrict processing and to receive a copy of your data.',
            `To make a request, contact us at ${b.email}. We will reply within the time limits set by law. You can also file a complaint with Costa Rica’s data protection agency, PRODHAB (Agencia de Protección de Datos de los Habitantes), or your local data protection authority.`,
          ],
        },
        {
          heading: 'Children',
          body: [
            'This website is not directed at children, and we do not knowingly collect personal information from children. Bookings must be made by an adult.',
          ],
        },
        {
          heading: 'Security',
          body: [
            'We use reputable providers and limit access to your information to people who need it. No method of transmission or storage is completely secure, so please do not send us sensitive information (such as full card numbers or passwords) by message or email.',
          ],
        },
        {
          heading: 'Changes to this policy',
          body: [
            'If we change how we handle personal information, we will update this page and the “Last updated” date above.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms and Conditions',
      intro:
        'These terms apply to your use of this website and to stays booked directly with Villas Punta Uva. Please read them before you book. By confirming a reservation with us, you agree to these terms, our Cancellation and Refund Policy, and our house rules.',
      seoDescription: 'Booking terms, payment, house rules, and website terms for Villas Punta Uva.',
      sections: [
        {
          heading: 'Who we are',
          body: [
            `${b.tradeName} is operated by ${legalIdentity('identification')}, ${b.address}. Phone/WhatsApp: ${b.phone}. Email: ${b.email}.`,
          ],
        },
        {
          heading: 'Information and prices on this website',
          body: [
            'We work to keep villa descriptions, photos, availability, and rates accurate, but they are for information and may change. The availability calendar is synced from our other booking channels and may be briefly out of date.',
            'Price calculations on this website are estimates. Rates are set in US dollars. You can view them in US dollars or Costa Rican colones; colón amounts use a fixed reference rate of ₡500 per US$1, which may differ from your bank’s exchange rate. Holiday rates may apply. Your final price, including any applicable taxes and fees, is the one stated in the written quote we send you before you pay.',
          ],
        },
        {
          heading: 'How booking works',
          body: [
            {
              list: [
                'Using the website does not create a reservation. The “Request to book” button opens a message to us by WhatsApp or text.',
                'We reply with a written quote. Your reservation is confirmed only when we confirm it in writing and receive your 50% deposit.',
                'The remaining 50% balance is due 14 days before arrival (1 month before arrival for long-term stays). If the balance is not received on time, we may cancel the reservation under our Cancellation and Refund Policy.',
                'We accept Zelle, Interac e-Transfer (Canada), Wise, SINPE, national bank transfer, and on some occasions international wire transfer. Any fees charged by your bank or payment service are your responsibility.',
                'Stays booked through Airbnb are governed by Airbnb’s terms and the cancellation policy shown on Airbnb, not these booking terms.',
              ],
            },
          ],
        },
        {
          heading: 'Fees',
          body: [
            'Depending on the villa and your booking, the following may apply and will be listed in your quote: a cleaning fee; an extra-guest fee for guests beyond the villa’s base capacity; a pet fee; on-site electric vehicle charging; and fees for early check-in or late checkout beyond what we offer free of charge. Current amounts are shown on each villa page and in our FAQ.',
          ],
        },
        {
          heading: 'Your stay and house rules',
          body: [
            {
              list: [
                'Check-in is after 3:00 PM and checkout is before 11:00 AM, unless we agree otherwise in writing.',
                'The number of guests may not exceed the maximum confirmed for your reservation. Children under 5 do not count as guests.',
                'No parties or events. Quiet hours are 11:00 PM to 7:00 AM.',
                'Pets are allowed for the pet fee; you are responsible for your pet’s behaviour and any damage it causes.',
                'The person who books is responsible for all guests and visitors, and for damage beyond normal wear and tear.',
                'We may end a stay without refund if the house rules are seriously broken, or if guests put people or property at risk.',
              ],
            },
          ],
        },
        {
          heading: 'Safety',
          body: [
            'Swimming pools, natural pools, and nearby beaches have no lifeguard. Use them at your own risk and always supervise children. Ocean conditions on the Caribbean coast change and can include strong currents; check local conditions before swimming.',
            'The villas are surrounded by jungle. Wildlife, insects, wet surfaces, and uneven paths are part of the setting, so please take normal care. Power, water, or internet outages can happen in the area and are outside our control.',
          ],
        },
        {
          heading: 'Third-party tours and services',
          body: [
            'Tours, activities, restaurants, transport, chefs, massage therapists, and other services mentioned on this website or recommended by us are provided by independent businesses, not by Villas Punta Uva. Their prices, schedules, and descriptions come from those businesses and may change. Your agreement for those services is with the provider, and you take part at your own risk.',
          ],
        },
        {
          heading: 'Liability',
          body: [
            'We are responsible for providing the accommodation as described and for our own negligence. We are not responsible for loss or damage caused by guests, by third-party providers, or by events outside our reasonable control (such as severe weather, natural events, road closures, or utility outages). Please keep valuables in the in-villa safe. Nothing in these terms limits any right you have under Costa Rica’s Law 7472 on the Promotion of Competition and Effective Consumer Protection or other laws that cannot be excluded.',
          ],
        },
        {
          heading: 'Website content',
          body: [
            'The Villas Punta Uva name, logo, and website text belong to Villas Punta Uva. Photos and videos on this website belong to Villas Punta Uva or to their respective owners. You may not copy or reuse any of this content without the owner’s permission. Links to other websites are provided for convenience; we are not responsible for their content.',
          ],
        },
        {
          heading: 'Governing law',
          body: [
            'These terms are governed by the laws of the Republic of Costa Rica. Any dispute will be handled by the competent courts of Costa Rica, without affecting any mandatory consumer protection rights you have where you live.',
          ],
        },
        {
          heading: 'Changes',
          body: [
            'We may update these terms. The version that applies to your stay is the one in effect on the date your reservation was confirmed.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'Cookies are small files that websites store in your browser. This page explains how this website uses them.',
      seoDescription: 'Villas Punta Uva does not use cookies, analytics, or tracking on its website.',
      sections: [
        {
          heading: 'We do not use cookies',
          body: [
            'This website does not set any cookies and does not use analytics, advertising, or tracking technologies such as pixels or fingerprinting. Our fonts and images are hosted on our own website, so viewing a page does not send your information to Google or other third parties.',
            'If you choose a currency (US dollars or colones), we remember that choice in your browser’s local storage so prices stay in your currency on your next visit. It stays on your device, is never sent to us or anyone else, and is not used for tracking. You can clear it at any time by clearing this site’s data in your browser.',
            'Because we do not use non-essential cookies, we do not show a cookie consent banner.',
          ],
        },
        {
          heading: 'Google Maps (only if you choose)',
          body: [
            'The map on our Location page is from Google Maps. It is blocked until you click “Load map”. Once you load it, Google may set cookies and collect data such as your IP address under its own Privacy Policy (policies.google.com/privacy). You can use the “Get Directions” link instead to open Google Maps directly.',
          ],
        },
        {
          heading: 'Other websites',
          body: [
            'When you follow a link to Airbnb, Google, Instagram, TikTok, WhatsApp, Waze, or other sites, those sites may set their own cookies under their own policies.',
          ],
        },
        {
          heading: 'Managing cookies',
          body: [
            'You can block or delete cookies at any time in your browser settings. If we ever add cookies that are not strictly necessary, we will ask for your consent first and update this policy.',
          ],
        },
      ],
    },
    refunds: {
      title: 'Cancellation and Refund Policy',
      intro:
        'This policy applies to reservations made directly with Villas Punta Uva. Reservations made through Airbnb follow the cancellation policy shown on Airbnb at the time of booking.',
      seoDescription: 'Deposit, balance, cancellation, and refund policy for direct bookings at Villas Punta Uva.',
      sections: [
        {
          heading: 'Deposit and balance',
          body: [
            {
              list: [
                'A 50% deposit is required to confirm your reservation and block your dates.',
                'The remaining 50% balance is due 14 days before arrival.',
                'For long-term stays, the balance is due 1 month before arrival. We will tell you in writing when you book if the long-term policy applies to your stay.',
              ],
            },
          ],
        },
        {
          heading: 'If you cancel',
          body: [
            {
              list: [
                'Standard stays: cancel 14 days or more before arrival and we refund your deposit in full. Cancellations made less than 14 days before arrival are not eligible for a refund.',
                'Long-term stays: cancel 1 month or more before arrival and we refund your deposit in full. Cancellations made less than 1 month before arrival are not eligible for a refund.',
                'Leaving early, arriving late, or not arriving does not entitle you to a refund for unused nights.',
              ],
            },
            `To cancel, message us on WhatsApp at ${b.phone} or email ${b.email}. The time we receive your message is the time of cancellation, and we will confirm it in writing.`,
          ],
        },
        {
          heading: 'If we cancel',
          body: [
            'If we have to cancel your reservation for any reason other than a breach of our terms by you, we will refund everything you have paid us for that reservation in full.',
          ],
        },
        {
          heading: 'How refunds are paid',
          body: [
            'Refunds are sent to the same payment method used for the payment where possible, or to another account you confirm in writing. We refund the amount we received; we cannot refund fees charged by your bank or payment service, or differences caused by exchange rates.',
          ],
        },
        {
          heading: 'Changing your dates',
          body: [
            'If you would like to change your dates, contact us as early as possible. Changes depend on availability and are not guaranteed. A change we agree to in writing is not treated as a cancellation.',
          ],
        },
        {
          heading: 'Travel insurance',
          body: [
            'Because of the non-refundable period above, we recommend travel insurance that covers trip cancellation and interruption.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'Nothing in this policy limits any right you have under Costa Rican consumer protection law (Law 7472) or other laws that cannot be excluded.',
          ],
        },
      ],
    },
  },
}

const es = {
  lastUpdated: 'Última actualización',
  related: 'Políticas relacionadas',
  pages: {
    privacy: {
      title: 'Política de Privacidad',
      intro:
        'Esta política explica qué información personal recopila Villas Punta Uva, para qué, con quién se comparte y qué derechos tiene usted sobre ella. Recopilamos solo lo necesario para responder sus consultas y gestionar su estadía.',
      seoDescription: 'Cómo Villas Punta Uva recopila, usa y protege su información personal.',
      sections: [
        {
          heading: 'Responsable de su información',
          body: [
            `${b.tradeName} es operado por ${legalIdentity('identificación')}, ${b.address}. Somos responsables de su información personal conforme a la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales de Costa Rica.`,
            `Contacto para consultas de privacidad: ${b.email} o ${b.phone} (teléfono/WhatsApp).`,
          ],
        },
        {
          heading: 'Qué recopilamos',
          body: [
            'Este sitio web no tiene formulario de contacto, cuentas de usuario ni formulario de pago en línea. Solo recibimos información personal cuando usted decide contactarnos o reservar:',
            {
              list: [
                'Datos de contacto que nos envía, como su nombre, número de teléfono, correo electrónico y nombre de perfil de WhatsApp.',
                'Datos de la reserva, como fechas, número de huéspedes y niños, mascotas, solicitudes especiales y el contenido de sus mensajes.',
                'Datos de confirmación del pago que nos envía (por ejemplo, el nombre del remitente y la referencia que muestra Zelle, Interac e-Transfer, Wise, SINPE o su banco). Nunca solicitamos ni guardamos números de tarjeta de crédito.',
                'Información que la ley costarricense nos exija conservar con fines tributarios, contables o de registro de huéspedes, si aplica a su estadía.',
              ],
            },
            'Cuando solo navega por el sitio, no recopilamos su nombre ni sus datos de contacto. Nuestro proveedor de alojamiento web registra automáticamente datos técnicos estándar (dirección IP, tipo de navegador, páginas solicitadas y hora) en registros del servidor, usados solo para mostrar el sitio, mantenerlo seguro y corregir errores.',
          ],
        },
        {
          heading: 'Lo que no hacemos',
          body: [
            {
              list: [
                'No usamos cookies, analítica, píxeles publicitarios ni herramientas de seguimiento en este sitio web.',
                'No vendemos ni alquilamos su información personal.',
                'No enviamos mensajes publicitarios a menos que usted lo solicite.',
              ],
            },
          ],
        },
        {
          heading: 'Para qué usamos su información',
          body: [
            {
              list: [
                'Para responder sus consultas y enviarle una cotización (a solicitud suya, antes de un contrato).',
                'Para confirmar y gestionar su reserva, recibir el pago y brindarle la estadía (para cumplir nuestro contrato con usted).',
                'Para cumplir nuestras obligaciones tributarias, contables y legales en Costa Rica (obligación legal).',
                'Para mantener seguros el sitio web y a nuestros huéspedes, y prevenir fraudes (nuestro interés legítimo).',
              ],
            },
          ],
        },
        {
          heading: 'Con quién la compartimos',
          body: [
            'Compartimos información personal solo cuando es necesario para los fines anteriores:',
            {
              list: [
                'Proveedores de servicios que usamos para operar el negocio: Vercel (alojamiento web), Google (correo Gmail) y Meta (mensajería de WhatsApp).',
                'El banco o servicio de pago que usted elija para pagar.',
                'Nuestro personal y contratistas que preparan y atienden las villas, solo con los datos que necesitan (por ejemplo, hora de llegada o número de huéspedes).',
                'Operadores turísticos o proveedores independientes (chefs, masajistas, tours) solo si usted nos pide ponerle en contacto con ellos.',
                'Autoridades públicas, cuando la ley costarricense lo exija.',
              ],
            },
            'Si reserva por Airbnb, Airbnb es responsable de la información que usted le proporcione, según su propia política de privacidad.',
          ],
        },
        {
          heading: 'Servicios de terceros en este sitio',
          body: [
            'El mapa de nuestra página de Ubicación es de Google Maps. Solo se carga después de que usted hace clic en “Cargar mapa”. Una vez cargado, Google puede recopilar datos como su dirección IP y establecer sus propias cookies, según la Política de Privacidad de Google (policies.google.com/privacy).',
            'Los enlaces a Airbnb, Google, Instagram, TikTok, WhatsApp, Waze y sitios de noticias le llevan a servicios con sus propias políticas de privacidad. No controlamos lo que ellos recopilan.',
          ],
        },
        {
          heading: 'Transferencias internacionales',
          body: [
            'Nuestros proveedores (como Vercel, Google y Meta) pueden almacenar y procesar información fuera de Costa Rica, incluso en los Estados Unidos. Usamos proveedores reconocidos que aplican sus propias medidas de seguridad y protección de datos.',
          ],
        },
        {
          heading: 'Cuánto tiempo la conservamos',
          body: [
            'Conservamos los mensajes y registros de reservas el tiempo necesario para gestionar su estadía y cualquier seguimiento, y después solo el tiempo que exija la legislación tributaria y contable de Costa Rica. La información que ya no se necesita se elimina.',
          ],
        },
        {
          heading: 'Sus derechos',
          body: [
            'Según la Ley 8968, usted puede solicitar el acceso, la rectificación o la eliminación de su información personal, y retirar cualquier consentimiento otorgado. Si se encuentra en la Unión Europea, el Reino Unido u otro lugar con leyes similares, también puede tener derecho a oponerse o limitar el tratamiento y a recibir una copia de sus datos.',
            `Para hacer una solicitud, escríbanos a ${b.email}. Responderemos dentro de los plazos que establece la ley. También puede presentar una denuncia ante la Agencia de Protección de Datos de los Habitantes (PRODHAB) o ante la autoridad de protección de datos de su país.`,
          ],
        },
        {
          heading: 'Menores de edad',
          body: [
            'Este sitio no está dirigido a menores de edad y no recopilamos a sabiendas información personal de menores. Las reservas deben hacerlas personas adultas.',
          ],
        },
        {
          heading: 'Seguridad',
          body: [
            'Usamos proveedores confiables y limitamos el acceso a su información a quienes lo necesitan. Ningún método de transmisión o almacenamiento es completamente seguro, por lo que le pedimos no enviarnos información sensible (como números completos de tarjeta o contraseñas) por mensaje o correo.',
          ],
        },
        {
          heading: 'Cambios a esta política',
          body: [
            'Si cambiamos la forma en que tratamos la información personal, actualizaremos esta página y la fecha de “Última actualización”.',
          ],
        },
      ],
    },
    terms: {
      title: 'Términos y Condiciones',
      intro:
        'Estos términos aplican al uso de este sitio web y a las estadías reservadas directamente con Villas Punta Uva. Léalos antes de reservar. Al confirmar una reserva con nosotros, usted acepta estos términos, nuestra Política de Cancelación y Reembolso y nuestras reglas de la casa.',
      seoDescription: 'Términos de reserva, pago, reglas de la casa y condiciones de uso del sitio de Villas Punta Uva.',
      sections: [
        {
          heading: 'Quiénes somos',
          body: [
            `${b.tradeName} es operado por ${legalIdentity('identificación')}, ${b.address}. Teléfono/WhatsApp: ${b.phone}. Correo: ${b.email}.`,
          ],
        },
        {
          heading: 'Información y precios en este sitio',
          body: [
            'Procuramos que las descripciones, fotos, disponibilidad y tarifas de las villas sean exactas, pero son informativas y pueden cambiar. El calendario de disponibilidad se sincroniza con nuestros otros canales de reserva y puede estar desactualizado por un corto tiempo.',
            'Los cálculos de precio en este sitio son estimaciones. Las tarifas se fijan en dólares estadounidenses. Puede verlas en dólares o en colones; los montos en colones usan un tipo de cambio de referencia fijo de ₡500 por US$1, que puede diferir del tipo de cambio de su banco. Pueden aplicar tarifas de temporada festiva. Su precio final, incluidos los impuestos y cargos que correspondan, es el indicado en la cotización escrita que le enviamos antes de que usted pague.',
          ],
        },
        {
          heading: 'Cómo funciona la reserva',
          body: [
            {
              list: [
                'Usar el sitio web no crea una reserva. El botón “Solicitar reserva” abre un mensaje hacia nosotros por WhatsApp o mensaje de texto.',
                'Le respondemos con una cotización escrita. Su reserva queda confirmada solo cuando la confirmamos por escrito y recibimos su depósito del 50%.',
                'El 50% restante debe pagarse 14 días antes de la llegada (1 mes antes de la llegada para estadías largas). Si el saldo no se recibe a tiempo, podemos cancelar la reserva según nuestra Política de Cancelación y Reembolso.',
                'Aceptamos Zelle, Interac e-Transfer (Canadá), Wise, SINPE, transferencia bancaria nacional y, en algunas ocasiones, transferencia internacional. Las comisiones de su banco o servicio de pago corren por su cuenta.',
                'Las estadías reservadas por Airbnb se rigen por los términos de Airbnb y la política de cancelación indicada en Airbnb, no por estos términos de reserva.',
              ],
            },
          ],
        },
        {
          heading: 'Cargos',
          body: [
            'Según la villa y su reserva, pueden aplicar los siguientes cargos, que se detallarán en su cotización: tarifa de limpieza; cargo por huéspedes adicionales a la capacidad base de la villa; cargo por mascota; carga de vehículo eléctrico en la propiedad; y cargos por llegada temprana o salida tardía más allá de lo que ofrecemos sin costo. Los montos vigentes se muestran en la página de cada villa y en nuestras preguntas frecuentes.',
          ],
        },
        {
          heading: 'Su estadía y reglas de la casa',
          body: [
            {
              list: [
                'La llegada es después de las 3:00 PM y la salida antes de las 11:00 AM, salvo acuerdo distinto por escrito.',
                'El número de huéspedes no puede superar el máximo confirmado en su reserva. Los niños menores de 5 años no cuentan como huéspedes.',
                'No se permiten fiestas ni eventos. Horario de silencio de 11:00 PM a 7:00 AM.',
                'Se permiten mascotas pagando el cargo correspondiente; usted es responsable del comportamiento de su mascota y de cualquier daño que cause.',
                'La persona que reserva es responsable de todos los huéspedes y visitantes, y de los daños que excedan el desgaste normal.',
                'Podemos terminar una estadía sin reembolso si se incumplen gravemente las reglas de la casa o si los huéspedes ponen en riesgo a personas o bienes.',
              ],
            },
          ],
        },
        {
          heading: 'Seguridad',
          body: [
            'Las piscinas, la piscina natural y las playas cercanas no tienen salvavidas. Úselas bajo su propio riesgo y supervise siempre a los niños. Las condiciones del mar en la costa caribeña cambian y pueden incluir corrientes fuertes; consulte las condiciones locales antes de nadar.',
            'Las villas están rodeadas de selva. La vida silvestre, los insectos, las superficies mojadas y los caminos irregulares son parte del entorno, por lo que le pedimos tener el cuidado normal. En la zona pueden ocurrir cortes de electricidad, agua o internet que están fuera de nuestro control.',
          ],
        },
        {
          heading: 'Tours y servicios de terceros',
          body: [
            'Los tours, actividades, restaurantes, transporte, chefs, masajistas y otros servicios mencionados en este sitio o recomendados por nosotros son prestados por negocios independientes, no por Villas Punta Uva. Sus precios, horarios y descripciones provienen de esos negocios y pueden cambiar. Su acuerdo por esos servicios es con el proveedor, y usted participa bajo su propio riesgo.',
          ],
        },
        {
          heading: 'Responsabilidad',
          body: [
            'Somos responsables de brindar el alojamiento tal como se describe y de nuestra propia negligencia. No somos responsables por pérdidas o daños causados por huéspedes, por proveedores externos o por hechos fuera de nuestro control razonable (como mal tiempo, eventos naturales, cierres de carreteras o cortes de servicios públicos). Guarde sus objetos de valor en la caja fuerte de la villa. Nada en estos términos limita los derechos que usted tenga según la Ley 7472 de Promoción de la Competencia y Defensa Efectiva del Consumidor u otras leyes irrenunciables.',
          ],
        },
        {
          heading: 'Contenido del sitio',
          body: [
            'El nombre, el logotipo y los textos de este sitio pertenecen a Villas Punta Uva. Las fotos y videos de este sitio pertenecen a Villas Punta Uva o a sus respectivos dueños. No puede copiar ni reutilizar este contenido sin permiso de su dueño. Los enlaces a otros sitios se ofrecen por conveniencia; no somos responsables de su contenido.',
          ],
        },
        {
          heading: 'Ley aplicable',
          body: [
            'Estos términos se rigen por las leyes de la República de Costa Rica. Cualquier controversia será conocida por los tribunales competentes de Costa Rica, sin afectar los derechos irrenunciables de protección al consumidor que usted tenga en su lugar de residencia.',
          ],
        },
        {
          heading: 'Cambios',
          body: [
            'Podemos actualizar estos términos. La versión que aplica a su estadía es la vigente en la fecha en que se confirmó su reserva.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      intro:
        'Las cookies son pequeños archivos que los sitios web guardan en su navegador. Esta página explica cómo las usa este sitio.',
      seoDescription: 'Villas Punta Uva no usa cookies, analítica ni seguimiento en su sitio web.',
      sections: [
        {
          heading: 'No usamos cookies',
          body: [
            'Este sitio web no establece cookies y no usa analítica, publicidad ni tecnologías de seguimiento como píxeles o huellas digitales. Nuestras fuentes e imágenes se alojan en nuestro propio sitio, por lo que ver una página no envía su información a Google ni a otros terceros.',
            'Si elige una moneda (dólares o colones), recordamos esa elección en el almacenamiento local de su navegador para que los precios se mantengan en su moneda en su próxima visita. Se queda en su dispositivo, nunca se envía a nosotros ni a nadie más y no se usa para seguimiento. Puede borrarla en cualquier momento eliminando los datos de este sitio en su navegador.',
            'Como no usamos cookies no esenciales, no mostramos un aviso de consentimiento de cookies.',
          ],
        },
        {
          heading: 'Google Maps (solo si usted lo elige)',
          body: [
            'El mapa de nuestra página de Ubicación es de Google Maps. Está bloqueado hasta que usted hace clic en “Cargar mapa”. Una vez cargado, Google puede establecer cookies y recopilar datos como su dirección IP según su propia Política de Privacidad (policies.google.com/privacy). También puede usar el enlace “Cómo llegar” para abrir Google Maps directamente.',
          ],
        },
        {
          heading: 'Otros sitios web',
          body: [
            'Cuando sigue un enlace a Airbnb, Google, Instagram, TikTok, WhatsApp, Waze u otros sitios, esos sitios pueden establecer sus propias cookies según sus propias políticas.',
          ],
        },
        {
          heading: 'Gestión de cookies',
          body: [
            'Puede bloquear o eliminar cookies en cualquier momento desde la configuración de su navegador. Si en el futuro agregamos cookies que no sean estrictamente necesarias, le pediremos su consentimiento primero y actualizaremos esta política.',
          ],
        },
      ],
    },
    refunds: {
      title: 'Política de Cancelación y Reembolso',
      intro:
        'Esta política aplica a las reservas hechas directamente con Villas Punta Uva. Las reservas hechas por Airbnb siguen la política de cancelación indicada en Airbnb al momento de reservar.',
      seoDescription: 'Política de depósito, saldo, cancelación y reembolso para reservas directas en Villas Punta Uva.',
      sections: [
        {
          heading: 'Depósito y saldo',
          body: [
            {
              list: [
                'Se requiere un depósito del 50% para confirmar su reserva y bloquear sus fechas.',
                'El 50% restante debe pagarse 14 días antes de la llegada.',
                'Para estadías largas, el saldo debe pagarse 1 mes antes de la llegada. Al reservar le indicaremos por escrito si la política de estadías largas aplica a su estadía.',
              ],
            },
          ],
        },
        {
          heading: 'Si usted cancela',
          body: [
            {
              list: [
                'Estadías estándar: si cancela 14 días o más antes de la llegada, le reembolsamos el depósito completo. Las cancelaciones hechas con menos de 14 días de anticipación no son elegibles para reembolso.',
                'Estadías largas: si cancela 1 mes o más antes de la llegada, le reembolsamos el depósito completo. Las cancelaciones hechas con menos de 1 mes de anticipación no son elegibles para reembolso.',
                'Salir antes, llegar tarde o no presentarse no da derecho a reembolso por las noches no utilizadas.',
              ],
            },
            `Para cancelar, escríbanos por WhatsApp al ${b.phone} o al correo ${b.email}. La hora en que recibimos su mensaje es la hora de la cancelación, y se la confirmaremos por escrito.`,
          ],
        },
        {
          heading: 'Si nosotros cancelamos',
          body: [
            'Si tenemos que cancelar su reserva por cualquier motivo distinto a un incumplimiento de nuestros términos por parte suya, le reembolsaremos la totalidad de lo que nos haya pagado por esa reserva.',
          ],
        },
        {
          heading: 'Cómo se pagan los reembolsos',
          body: [
            'Los reembolsos se envían al mismo método de pago utilizado cuando sea posible, o a otra cuenta que usted confirme por escrito. Reembolsamos el monto que recibimos; no podemos reembolsar comisiones cobradas por su banco o servicio de pago, ni diferencias por tipo de cambio.',
          ],
        },
        {
          heading: 'Cambio de fechas',
          body: [
            'Si desea cambiar sus fechas, contáctenos lo antes posible. Los cambios dependen de la disponibilidad y no están garantizados. Un cambio que aceptemos por escrito no se considera una cancelación.',
          ],
        },
        {
          heading: 'Seguro de viaje',
          body: [
            'Debido al período no reembolsable indicado arriba, le recomendamos un seguro de viaje que cubra la cancelación e interrupción del viaje.',
          ],
        },
        {
          heading: 'Sus derechos',
          body: [
            'Nada en esta política limita los derechos que usted tenga según la legislación costarricense de protección al consumidor (Ley 7472) u otras leyes irrenunciables.',
          ],
        },
      ],
    },
  },
}

export const legalContent = { en, es }
export const legalLastUpdated = LEGAL_LAST_UPDATED

// Route path for each legal page, in display order.
export const legalPages = [
  { key: 'privacy', path: '/privacy' },
  { key: 'terms', path: '/terms' },
  { key: 'refunds', path: '/refunds' },
  { key: 'cookies', path: '/cookies' },
]
