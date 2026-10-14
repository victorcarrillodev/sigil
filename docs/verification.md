# Diseño y verificación

## Criterios de la interfaz

- Mantener el archivo original del logo en cabecera y pie de página. El archivo de la web coincide con el adjunto original.
- La escena Three.js interpreta el ojo y los circuitos del logo como trazos y partículas, con tres capas de líneas transparentes que aportan profundidad. El emblema protagoniza la composición y puede descomponerse y recomponerse mediante un control explícito.
- La navegación y el formulario se inicializan antes de cargar la escena. Si la importación o WebGL falla, se conserva una ilustración vectorial estática del símbolo y las capas.
- Usar una escala tipográfica, colores y espaciado compartidos en `tokens.css`. La sección clara permite distinguir el enfoque del catálogo de servicios.
- Comunicar capacidades y proceso sin cifras de clientes, testimonios, certificaciones ni tiempos de respuesta que no se hayan confirmado.
- Mostrar el estado real del contacto: solicitud preparada localmente, sin entrega a un receptor.

## Verificación realizada

La validación automatizada reúne lint, formato, TypeScript estricto y pruebas de servidor, formulario y distribución local de Three.js. También se revisó la interfaz en el navegador integrado.

| Comprobación                                  | Resultado                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Escritorio de 1440 px                         | Portada, navegación, tarjetas y sección de enfoque revisadas visualmente.                  |
| Móvil de 390 px y pantalla estrecha de 320 px | Sin desbordamiento horizontal; campos a 16 px y distribución adaptable.                    |
| Filtros de servicios                          | Software e infraestructura muestran tres servicios cada uno.                               |
| Elegir un servicio                            | El enlace preselecciona la opción correspondiente en el formulario.                        |
| Campos vacíos                                 | Errores asociados a sus campos y foco en el primer campo inválido.                         |
| Preparar solicitud                            | Resumen coherente con los campos, datos conservados y aviso de que no se ha enviado.       |
| Copiar y descargar                            | Copia confirmada y archivo de texto descargado en el navegador.                            |
| Editar después de preparar                    | El resumen anterior se oculta y su enlace de descarga se revoca.                           |
| Menú móvil                                    | Apertura, cierre al navegar, Escape y retorno del foco comprobados.                        |
| Recursos                                      | Fuentes e ilustración locales cargadas; sin errores de consola observados.                 |
| HTML estático                                 | Identificadores únicos, enlaces internos, etiquetas, referencias ARIA e imports revisados. |

La composición del símbolo se comprobó también como geometría: armado, estado intermedio y despiece completo, con los extremos de inclinación por puntero. El encuadre reserva margen para la dispersión y la recomposición recupera las posiciones de origen, sin acumular desplazamientos. En el navegador se verificaron los estados y textos de Descomponer, Recomponer, Pausar y Reanudar.

La revisión comercial enfoca la portada en pequeñas empresas y utiliza nombres directos para web, software y soporte. El bloque lateral explica el alcance, los costos y la entrega de la propuesta. Las preguntas frecuentes aclaran qué información aportar y cómo se distinguen equipos, alojamiento y soporte. La investigación, las hipótesis y lo pendiente para medir solicitudes reales se documentan en `marketing-conversion.md`.

El pie de página organiza los seis servicios y la navegación del proyecto. Sus enlaces apuntan a las tarjetas correspondientes y restauran el filtro general cuando hace falta mostrar el destino. El contacto mantiene explícito que, durante la validación, las solicitudes solo se preparan, copian o descargan.

El envío sin JavaScript se evita mediante un botón deshabilitado en el HTML, que solo se habilita después de registrar los controladores del formulario. El menú y el contenido siguen siendo legibles sin JavaScript. El CSS respeta la preferencia de movimiento reducido.

## Antes de habilitar el contacto

Definir un receptor real y conectar el envío, comprobar su resultado y actualizar el texto del formulario. Revisar con el negocio los servicios, condiciones de soporte y contenido comercial. Esta versión no tiene un canal de entrega ni un despliegue público configurados.

La revisión de escritorio y móvil se realizó en un navegador Chromium. Queda pendiente comprobar el sitio en dispositivos físicos y en Safari/Firefox; las pruebas actuales no constituyen una auditoría completa de accesibilidad.
