export type Locale = 'en' | 'pt' | 'es' | 'de';

export interface TranslationStrings {
  title: string;
  metaDesc: string;
  pill: string;
  eyebrow: string;
  h1: string;
  sub: string;
  m1t: string; m1s: string;
  m2t: string; m2s: string;
  m3t: string; m3s: string;
  tab1: string; tab2: string;
  dzTitle: string; dzSub: string; dzSubMob: string;
  dzChoose: string; dzSample: string;
  dzOut: string;
  dzNote: string;
  proofTitle: string; proofNote: string; proofCap: string;
  statPixels: string; statMp: string; statAspect: string; statDpi: string;
  badgeHas: string; badgeNone: string; badgeHasSub: string; badgeNoneSub: string;
  ladderH: string; ladderCap: string;
  tier1: string; tier1d: string;
  tier2: string; tier2d: string;
  tier3: string; tier3d: string;
  planSize: string; planQuality: string; planNeed: string;
  q1cap: string; q2cap: string; q3cap: string;
  vOk: string; vMid: string; vLow: string;
  stampOk: string; stampMid: string; stampLow: string;
  refH: string; refLede: string;
  faqH: string; faqLede: string;
  faq1q: string; faq1a: string;
  faq2q: string; faq2a: string;
  faq3q: string; faq3a: string;
  faq4q: string; faq4a: string;
  foot1: string; foot2: string;
  navRef: string; navFaq: string;
  analyzedLocally: string;
  btnAnalyzeAnother: string; btnRemove: string; btnPlanSize: string;
  resCtaText: string;
  btnUse: string; colSize: string; colPhoto: string; colPoster: string;
  disclaimer: string; noImgYet: string;
  gaugeZero: string; gaugeWorkable: string; gaugeRecommended: string;
  btnChange: string; customPreset: string;
  errNotImage: string; errHeic: string; errGeneric: string;
  leadPrintsUpTo: string; leadAtPhoto: string;
  noteDpiTag: string; noteNoDpi: string; noteBigImage: string;
  vBodyOk: string; vBodyMid: string; vBodyLow: string;
  vComparing: string; vAspectDiff: string;
  noscript: string;
}

export const I18N: Record<Locale, TranslationStrings> = {
en: {
  title: "ProofPixel — Image DPI & Print Size Analyzer",
  metaDesc: "Free, private, browser-based tool: see an image's true pixel size, its DPI metadata, and how large you can realistically print it.",
  pill: "Runs locally — nothing is uploaded",
  eyebrow: "Free · Private · In-browser",
  h1: "Will this image print sharp?",
  sub: "Drop an image to see its true pixel size, whether it carries DPI info, and how large you can realistically print it. Nothing is ever uploaded.",
  m1t: "Pixels are the detail", m1s: "Fixed — no setting changes it.",
  m2t: "DPI is just a ruler", m2s: "It packs pixels onto paper.",
  m3t: "Size = pixels ÷ DPI", m3s: "Every image prints at many sizes.",
  tab1: "Analyze an image", tab2: "Plan a print",
  dzTitle: "Drop your image here", dzSub: "or paste from the clipboard",
  dzSubMob: "or tap anywhere to browse device",
  dzChoose: "Choose image", dzSample: "See a sample result",
  dzOut: "You'll see: pixel size · DPI metadata · max print sizes · a verdict for your target",
  dzNote: "Analyzed on this device · JPEG & PNG get full DPI detection",
  proofTitle: "Sample result",
  proofNote: "\"Can I print it at 8 × 10?\" → Yes, comfortably.",
  proofCap: "what you'll see — before you upload anything",
  statPixels: "Pixels", statMp: "Megapixels", statAspect: "Aspect ratio", statDpi: "DPI in file",
  badgeHas: "DPI in file", badgeNone: "none found", badgeHasSub: "metadata found", badgeNoneSub: "perfectly normal",
  ladderH: "How large can it print?", ladderCap: "Same pixels, three densities — bigger print, softer close-up. Touch or hover to compare.",
  tier1: "Photo quality", tier1d: "sharp, viewed up close",
  tier2: "Good / poster", tier2d: "arm's length and beyond",
  tier3: "Draft / large", tier3d: "viewed from a distance",
  planSize: "Paper size", planQuality: "Quality target", planNeed: "Pixels needed",
  q1cap: "Photos, flyers, anything held in the hand",
  q2cap: "Posters, magazine spreads, canvas",
  q3cap: "Large format seen from metres away",
  vOk: "Enough pixels — comfortably", vMid: "Borderline — still workable", vLow: "Below the recommended resolution",
  stampOk: "PRINT-READY", stampMid: "BORDERLINE", stampLow: "CHECK FIRST",
  refH: "Common print sizes, in pixels", refLede: "What each popular size actually needs. “Use” sends the size straight to the planner above.",
  faqH: "DPI, explained without the jargon", faqLede: "The four questions people actually ask. Hover one — it quietly shows the print it's talking about.",
  faq1q: "DPI or PPI — which is it?",
  faq1a: "PPI (pixels per inch) describes the digital file; DPI (dots per inch) describes ink on paper. In everyday talk they get mixed up constantly, and this tool treats “DPI” as pixels-per-inch-of-print. When someone says “a 300 DPI image,” what they really mean is <em>“300 pixels for every inch of paper.”</em>",
  faq2q: "My image says 72 DPI. Is it low quality?",
  faq2a: "No. That number is metadata — a suggestion about print size, not a measure of detail. A 6000 × 4000 photo tagged “72 DPI” has <em>exactly the same detail</em> as one tagged “300 DPI.” The 72 convention is a leftover from early computer screens. Judge images by pixel dimensions, not by that tag.",
  faq3q: "How many DPI do I actually need?",
  faq3a: "It depends on viewing distance. Hand-held items (photos, flyers): 300. Posters seen at arm's length: 100–150. Large format viewed from metres away: 72–100. Doubling the print size halves the effective DPI — which is why the analyzer shows all three tiers side by side.",
  faq4q: "Why do social-media photos print poorly?",
  faq4a: "Platforms recompress and shrink uploads to save bandwidth — usually to around 1080 pixels wide. That looks fine on a phone, but 1080 px at 300 DPI is only 3.6 inches. For prints, use the <em>original file</em> from your camera or gallery app, not the copy you downloaded from the web.",
  foot1: "Your image is analyzed directly in your browser. No uploads, no accounts, no tracking of your files.",
  foot2: "Figures here are practical guidance for planning — for important jobs, always order a proof print first.",
  navRef: "Reference", navFaq: "FAQ",
  analyzedLocally: "analyzed locally",
  btnAnalyzeAnother: "Analyze another", btnRemove: "Remove image", btnPlanSize: "Plan a print size",
  resCtaText: "Have a specific size in mind — a frame, a poster, an A4 page? Check this image against it.",
  btnUse: "Use", colSize: "Size", colPhoto: "At 300 DPI (photo)", colPoster: "At 150 DPI (poster)",
  disclaimer: "Guidance, not a guarantee — paper, viewing distance, subject matter and the printer itself all play a part.",
  noImgYet: "No image loaded yet — add one to see if it's enough for this size.",
  gaugeZero: "0", gaugeWorkable: "workable ≈", gaugeRecommended: "recommended",
  btnChange: "change", customPreset: "Custom",
  errNotImage: "That doesn't look like an image file. Try a JPEG, PNG, WebP or GIF.",
  errHeic: "This browser can't decode HEIC/HEIF yet. Export the photo as a JPEG and try again.",
  errGeneric: "Couldn't read that file — it may be corrupted or in a format this browser can't display.",
  leadPrintsUpTo: "Prints up to",
  leadAtPhoto: "at photo quality — bigger if it'll be viewed from a distance.",
  noteDpiTag: "What the {dpi} DPI tag means: just a printing suggestion saved by the app that made this file. Software can ignore it, and it doesn't change your pixels one bit — the sizes above are the real story.",
  noteNoDpi: "No DPI saved in this file — completely normal. Screenshots and most web images don't carry one. Nothing is wrong and no detail is missing; DPI only matters when you pick a physical print size below.",
  noteBigImage: "That's a very large image (~{mp} MP). The numbers are fine — just know some editing apps and print-shop software slow down with files this big.",
  vBodyOk: "At this size your image lands at roughly <b>{effDpi} DPI</b>{comparison} the {q} DPI target. You have headroom to crop a little if needed.",
  vBodyMid: "You'd be upscaling by about <b>{pct}%</b> (effective ~{effDpi} DPI). Typically fine for a poster viewed at arm's length or more; it may soften up close.",
  vBodyLow: "This size would give only ~<b>{effDpi} DPI</b> against a {q} DPI target — expect visible softness. Consider a smaller print, a lower quality target, or a higher-resolution file.",
  vComparing: "Comparing {size} at {q} DPI against your loaded image.",
  vAspectDiff: " Note: the image's aspect ratio ({aspect}) differs from this page — fitting will crop it, or leave borders.",
  noscript: "This tool runs entirely in your browser and needs JavaScript enabled."
},

pt: {
  title: "ProofPixel — Verificador de DPI e tamanho de impressão",
  metaDesc: "Ferramenta gratuita e privada no navegador: veja o tamanho real em pixels, os metadados de DPI e até que tamanho você pode imprimir.",
  pill: "Roda localmente — nada é enviado",
  eyebrow: "Gratuito · Privado · No navegador",
  h1: "Esta imagem ficará nítida na impressão?",
  sub: "Solte uma imagem para ver o tamanho real em pixels, se ela traz informação de DPI e até que tamanho você pode imprimir com nitidez. Nada é enviado para a internet.",
  m1t: "Pixels são o detalhe", m1s: "Fixos — nenhuma configuração muda isso.",
  m2t: "DPI é só uma régua", m2s: "Ele apenas distribui os pixels no papel.",
  m3t: "Tamanho = pixels ÷ DPI", m3s: "Toda imagem imprime em vários tamanhos.",
  tab1: "Analisar uma imagem", tab2: "Planejar uma impressão",
  dzTitle: "Solte sua imagem aqui", dzSub: "ou cole da área de transferência",
  dzSubMob: "ou toque em qualquer lugar para escolher",
  dzChoose: "Escolher imagem", dzSample: "Ver um resultado de exemplo",
  dzOut: "Você verá: tamanho em pixels · metadados de DPI · tamanhos máximos de impressão · um veredito para o seu tamanho",
  dzNote: "Analisado neste dispositivo · JPEG e PNG com detecção completa de DPI",
  proofTitle: "Resultado de exemplo",
  proofNote: "“Posso imprimir em 20 × 25 cm?” → Sim, com folga.",
  proofCap: "o que você verá — antes de escolher qualquer arquivo",
  statPixels: "Pixels", statMp: "Megapixels", statAspect: "Proporção", statDpi: "DPI no arquivo",
  badgeHas: "DPI no arquivo", badgeNone: "nenhum encontrado", badgeHasSub: "metadados encontrados", badgeNoneSub: "perfeitamente normal",
  ladderH: "Até que tamanho dá para imprimir?", ladderCap: "Mesmos pixels, três densidades — impressão maior, menos nitidez de perto. Toque ou passe o mouse para comparar.",
  tier1: "Qualidade fotográfica", tier1d: "nítida, vista de perto",
  tier2: "Boa / pôster", tier2d: "a um braço de distância ou mais",
  tier3: "Rascunho / grande", tier3d: "vista de longe",
  planSize: "Tamanho do papel", planQuality: "Qualidade desejada", planNeed: "Pixels necessários",
  q1cap: "Fotos, panfletos, qualquer coisa que se segura na mão",
  q2cap: "Pôsteres, revistas, canvas",
  q3cap: "Grandes formatos vistos a metros de distância",
  vOk: "Pixels suficientes — com folga", vMid: "No limite — ainda funciona", vLow: "Abaixo da resolução recomendada",
  stampOk: "PRONTA PARA IMPRIMIR", stampMid: "NO LIMITE", stampLow: "VERIFIQUE ANTES",
  refH: "Tamanhos de impressão comuns, em pixels", refLede: "O que cada tamanho popular realmente precisa. “Usar” envia o tamanho direto para o planejador acima.",
  faqH: "DPI, explicado sem tecniquês", faqLede: "As quatro perguntas que as pessoas realmente fazem. Passe o mouse — ela mostra, discretamente, a impressão de que está falando.",
  faq1q: "DPI ou PPI — qual dos dois?",
  faq1a: "PPI (pixels por polegada) descreve o arquivo digital; DPI (pontos por polegada) descreve a tinta no papel. No dia a dia os termos se misturam, e esta ferramenta trata “DPI” como pixels por polegada de impressão. Quando alguém diz “uma imagem de 300 DPI”, o que realmente se quer dizer é <em>“300 pixels para cada polegada de papel.”</em>",
  faq2q: "Minha imagem diz 72 DPI. É baixa qualidade?",
  faq2a: "Não. Esse número é metadado — uma sugestão de tamanho de impressão, não uma medida de detalhe. Uma foto de 6000 × 4000 marcada como “72 DPI” tem <em>exatamente o mesmo detalhe</em> que uma marcada como “300 DPI”. A convenção de 72 é herança das primeiras telas de computador. Julgue imagens pelos pixels, não pela etiqueta.",
  faq3q: "De quantos DPI eu realmente preciso?",
  faq3a: "Depende da distância de visualização. Itens que se segura na mão (fotos, panfletos): 300. Pôsteres vistos a um braço de distância: 100–150. Grandes formatos vistos a metros: 72–100. Dobrar o tamanho da impressão corta o DPI efetivo pela metade — por isso o analisador mostra as três faixas lado a lado.",
  faq4q: "Por que fotos de rede social imprimem mal?",
  faq4a: "As plataformas recomprimem e reduzem os envios para economizar banda — em geral para cerca de 1080 pixels de largura. No celular parece ótimo, mas 1080 px a 300 DPI são só 3,6 polegadas. Para imprimir, use o <em>arquivo original</em> da câmera ou da galeria, não a cópia baixada da internet.",
  foot1: "Sua imagem é analisada diretamente no seu navegador. Sem uploads, sem contas, sem rastreamento dos seus arquivos.",
  foot2: "Os números aqui são orientação prática para planejamento — para trabalhos importantes, sempre peça uma prova de impressão antes.",
  navRef: "Referência", navFaq: "Dúvidas",
  analyzedLocally: "analisado localmente",
  btnAnalyzeAnother: "Analisar outra", btnRemove: "Remover imagem", btnPlanSize: "Planejar tamanho de impressão",
  resCtaText: "Tem um tamanho específico em mente — uma moldura, um pôster, uma folha A4? Compare esta imagem.",
  btnUse: "Usar", colSize: "Tamanho", colPhoto: "A 300 DPI (foto)", colPoster: "A 150 DPI (pôster)",
  disclaimer: "Orientação, não uma garantia — papel, distância de visão, imagem e a própria impressora influenciam.",
  noImgYet: "Nenhuma imagem carregada ainda — adicione uma para ver se é suficiente para este tamanho.",
  gaugeZero: "0", gaugeWorkable: "funciona ≈", gaugeRecommended: "recomendado",
  btnChange: "trocar", customPreset: "Personalizado",
  errNotImage: "Não parece ser um arquivo de imagem. Tente JPEG, PNG, WebP ou GIF.",
  errHeic: "Este navegador ainda não decodifica HEIC/HEIF. Exporte a foto como JPEG e tente novamente.",
  errGeneric: "Não foi possível ler o arquivo — pode estar corrompido ou em formato não suportado.",
  leadPrintsUpTo: "Imprime até",
  leadAtPhoto: "em qualidade fotográfica — maior se vista de longe.",
  noteDpiTag: "O que a etiqueta de {dpi} DPI significa: apenas uma sugestão de impressão salva pelo aplicativo que gerou o arquivo. Programas podem ignorá-la e ela não muda seus pixels — os tamanhos acima são a realidade.",
  noteNoDpi: "Nenhum DPI salvo neste arquivo — perfeitamente normal. Capturas de tela e a maioria das imagens da web não trazem um. Nada está errado nem falta detalhe; DPI só importa ao escolher um tamanho físico abaixo.",
  noteBigImage: "Esta é uma imagem muito grande (~{mp} MP). Os números estão corretos — apenas saiba que alguns aplicativos e gráficas podem ficar lentos com arquivos desse tamanho.",
  vBodyOk: "Neste tamanho sua imagem fica com cerca de <b>{effDpi} DPI</b>{comparison} a meta de {q} DPI. Há margem até para recortar um pouco se desejar.",
  vBodyMid: "Você estaria ampliando em cerca de <b>{pct}%</b> (efetivo ~{effDpi} DPI). Geralmente ótimo para um pôster visto a um braço ou mais; pode suavizar de perto.",
  vBodyLow: "Este tamanho resultaria em apenas ~<b>{effDpi} DPI</b> contra uma meta de {q} DPI — espere perda visível de nitidez. Considere imprimir menor, escolher qualidade menor ou um arquivo com mais resolução.",
  vComparing: "Comparando {size} a {q} DPI com sua imagem carregada.",
  vAspectDiff: " Observação: a proporção da imagem ({aspect}) difere da folha — o ajuste irá recortar ou deixar bordas.",
  noscript: "Esta ferramenta roda inteiramente no seu navegador e precisa de JavaScript ativado."
},

es: {
  title: "ProofPixel — Verificador de DPI y tamaño de impresión",
  metaDesc: "Herramienta gratuita y privada en el navegador: mira el tamaño real en píxeles, los metadatos de DPI y hasta qué tamaño puedes imprimir.",
  pill: "Se ejecuta localmente — nada se sube",
  eyebrow: "Gratis · Privado · En el navegador",
  h1: "¿Esta imagen se imprimirá nítida?",
  sub: "Suelta una imagen para ver su tamaño real en píxeles, si incluye información de DPI y hasta qué tamaño puedes imprimirla con nitidez. Nada se sube a internet.",
  m1t: "Los píxeles son el detalle", m1s: "Fijos — ningún ajuste lo cambia.",
  m2t: "El DPI es solo una regla", m2s: "Solo reparte los píxeles en el papel.",
  m3t: "Tamaño = píxeles ÷ DPI", m3s: "Toda imagen se imprime en varios tamaños.",
  tab1: "Analizar una imagen", tab2: "Planear una impresión",
  dzTitle: "Suelta tu imagen aquí", dzSub: "o pega desde el portapapeles",
  dzSubMob: "o toca en cualquier lugar para elegir",
  dzChoose: "Elegir imagen", dzSample: "Ver un resultado de ejemplo",
  dzOut: "Verás: tamaño en píxeles · metadatos de DPI · tamaños máximos de impresión · un veredicto para tu medida",
  dzNote: "Analizado en este dispositivo · JPEG y PNG con detección completa de DPI",
  proofTitle: "Resultado de ejemplo",
  proofNote: "“¿Puedo imprimir en 20 × 25 cm?” → Sí, con holgura.",
  proofCap: "lo que verás — antes de elegir ningún archivo",
  statPixels: "Píxeles", statMp: "Megapíxeles", statAspect: "Proporción", statDpi: "DPI en el archivo",
  badgeHas: "DPI en el archivo", badgeNone: "ninguno encontrado", badgeHasSub: "metadatos encontrados", badgeNoneSub: "perfectamente normal",
  ladderH: "¿Hasta qué tamaño se puede imprimir?", ladderCap: "Los mismos píxeles, tres densidades — impresión más grande, menos nitidez de cerca. Toca o pasa el cursor para comparar.",
  tier1: "Calidad fotográfica", tier1d: "nítida, vista de cerca",
  tier2: "Buena / póster", tier2d: "a un brazo de distancia o más",
  tier3: "Borrador / grande", tier3d: "vista de lejos",
  planSize: "Tamaño del papel", planQuality: "Calidad objetivo", planNeed: "Píxeles necesarios",
  q1cap: "Fotos, folletos, cualquier cosa que se tenga en la mano",
  q2cap: "Pósteres, revistas, lienzo",
  q3cap: "Gran formato visto a metros de distancia",
  vOk: "Píxeles suficientes — con holgura", vMid: "Al límite — aún funciona", vLow: "Por debajo de la resolución recomendada",
  stampOk: "LISTA PARA IMPRIMIR", stampMid: "AL LÍMITE", stampLow: "VERIFICA ANTES",
  refH: "Tamaños de impresión comunes, en píxeles", refLede: "Lo que cada tamaño popular realmente necesita. “Usar” envía el tamaño directo al planificador de arriba.",
  faqH: "DPI, explicado sin jerga", faqLede: "Las cuatro preguntas que la gente realmente hace. Pasa el cursor — muestra, discretamente, la impresión de la que habla.",
  faq1q: "¿DPI o PPI — cuál es cuál?",
  faq1a: "PPI (píxeles por pulgada) describe el archivo digital; DPI (puntos por pulgada) describe la tinta en el papel. En el habla cotidiana se confunden, y esta herramienta trata “DPI” como píxeles por pulgada de impresión. Cuando alguien dice “una imagen de 300 DPI”, en realidad quiere decir <em>“300 píxeles por cada pulgada de papel.”</em>",
  faq2q: "Mi imagen dice 72 DPI. ¿Es de baja calidad?",
  faq2a: "No. Ese número es metadato — una sugerencia de tamaño de impresión, no una medida de detalle. Una foto de 6000 × 4000 etiquetada “72 DPI” tiene <em>exactamente el mismo detalle</em> que una etiquetada “300 DPI”. La convención de 72 es herencia de las primeras pantallas de computadora. Juzga las imágenes por sus píxeles, no por la etiqueta.",
  faq3q: "¿Cuántos DPI necesito realmente?",
  faq3a: "Depende de la distancia de visualización. Objetos que se tienen en la mano (fotos, folletos): 300. Pósteres vistos a un brazo: 100–150. Gran formato visto a metros: 72–100. Duplicar el tamaño de impresión reduce el DPI efectivo a la mitad — por eso el analizador muestra los tres niveles lado a lado.",
  faq4q: "¿Por qué las fotos de redes sociales imprimen mal?",
  faq4a: "Las plataformas recomprimen y reducen las subidas para ahorrar ancho de banda — normalmente a unos 1080 píxeles de ancho. En el teléfono se ve bien, pero 1080 px a 300 DPI son solo 3,6 pulgadas. Para imprimir, usa el <em>archivo original</em> de tu cámara o galería, no la copia descargada de internet.",
  foot1: "Tu imagen se analiza directamente en tu navegador. Sin subidas, sin cuentas, sin rastreo de tus archivos.",
  foot2: "Las cifras aquí son orientación práctica para planear — para trabajos importantes, pide siempre una prueba de impresión primero.",
  navRef: "Referencia", navFaq: "Preguntas",
  analyzedLocally: "analizado localmente",
  btnAnalyzeAnother: "Analizar otra", btnRemove: "Eliminar imagen", btnPlanSize: "Planear tamaño de impresión",
  resCtaText: "¿Tienes un tamaño específico en mente — un marco, un póster, una hoja A4? Compara esta imagen.",
  btnUse: "Usar", colSize: "Tamaño", colPhoto: "A 300 DPI (foto)", colPoster: "A 150 DPI (póster)",
  disclaimer: "Orientación, no una garantía — papel, distancia de visualización, imagen y la propia impresora influyen.",
  noImgYet: "Aún no has cargado ninguna imagen — añade una para ver si alcanza para este tamaño.",
  gaugeZero: "0", gaugeWorkable: "funciona ≈", gaugeRecommended: "recomendado",
  btnChange: "cambiar", customPreset: "Personalizado",
  errNotImage: "No parece un archivo de imagen. Prueba con JPEG, PNG, WebP o GIF.",
  errHeic: "Este navegador aún no puede descodificar HEIC/HEIF. Exporta la foto como JPEG y vuelve a intentarlo.",
  errGeneric: "No se pudo leer el archivo — puede estar dañado o en un formato no compatible.",
  leadPrintsUpTo: "Imprime hasta",
  leadAtPhoto: "en calidad fotográfica — más grande si se mira de lejos.",
  noteDpiTag: "Qué significa la etiqueta de {dpi} DPI: solo una sugerencia de impresión guardada por la aplicación que creó el archivo. El software puede ignorarla y no cambia tus píxeles — los tamaños de arriba son lo real.",
  noteNoDpi: "Sin DPI guardado en este archivo — completamente normal. Capturas de pantalla y la mayoría de imágenes web no lo llevan. No hay nada malo ni falta detalle; el DPI solo importa al elegir un tamaño físico abajo.",
  noteBigImage: "Esta es una imagen muy grande (~{mp} MP). Las cifras están bien — solo ten en cuenta que algunas aplicaciones y software de imprenta pueden ralentizarse con archivos así.",
  vBodyOk: "En este tamaño tu imagen queda en aproximadamente <b>{effDpi} DPI</b>{comparison} el objetivo de {q} DPI. Tienes margen para recortar un poco si lo necesitas.",
  vBodyMid: "Estarías ampliando un <b>{pct}%</b> aprox. (efectivo ~{effDpi} DPI). Suele ser adecuado para un póster visto a un brazo o más; puede verse más suave de cerca.",
  vBodyLow: "Este tamaño daría solo ~<b>{effDpi} DPI</b> frente al objetivo de {q} DPI — se notará falta de nitidez. Considera un formato más pequeño, menor exigencia o un archivo de mayor resolución.",
  vComparing: "Comparando {size} a {q} DPI con tu imagen cargada.",
  vAspectDiff: " Nota: la proporción de la imagen ({aspect}) difiere de esta hoja — el ajuste recortará o dejará bordes.",
  noscript: "Esta herramienta funciona íntegramente en tu navegador y requiere JavaScript activado."
},

de: {
  title: "ProofPixel — DPI- und Druckgrößen-Analyzer",
  metaDesc: "Kostenloses, privates Browser-Tool: echte Pixelgröße, DPI-Metadaten und realistische Druckgrößen sofort sehen.",
  pill: "Läuft lokal — nichts wird hochgeladen",
  eyebrow: "Kostenlos · Privat · Im Browser",
  h1: "Wird dieses Bild scharf gedruckt?",
  sub: "Zieh ein Bild hierher, um die echte Pixelgröße zu sehen, ob es DPI-Infos enthält und wie groß du es realistischerweise drucken kannst. Nichts wird hochgeladen.",
  m1t: "Pixel sind das Detail", m1s: "Fest — keine Einstellung ändert das.",
  m2t: "DPI ist nur ein Lineal", m2s: "Es verteilt die Pixel aufs Papier.",
  m3t: "Größe = Pixel ÷ DPI", m3s: "Jedes Bild kann in vielen Größen drucken.",
  tab1: "Bild analysieren", tab2: "Druck planen",
  dzTitle: "Bild hier ablegen", dzSub: "oder aus der Zwischenablage einfügen",
  dzSubMob: "oder tippen, um das Gerät zu durchsuchen",
  dzChoose: "Bild auswählen", dzSample: "Beispielergebnis ansehen",
  dzOut: "Du siehst: Pixelmaße · DPI-Metadaten · maximale Druckgrößen · ein Urteil für dein Wunschformat",
  dzNote: "Analyse auf diesem Gerät · JPEG & PNG mit voller DPI-Erkennung",
  proofTitle: "Beispielergebnis",
  proofNote: "„Kann ich es auf 20 × 25 cm drucken?“ → Ja, problemlos.",
  proofCap: "was du siehst — bevor du eine Datei auswählst",
  statPixels: "Pixel", statMp: "Megapixel", statAspect: "Seitenverhältnis", statDpi: "DPI in der Datei",
  badgeHas: "DPI in der Datei", badgeNone: "keine gefunden", badgeHasSub: "Metadaten gefunden", badgeNoneSub: "völlig normal",
  ladderH: "Wie groß kann es drucken?", ladderCap: "Dieselben Pixel, drei Dichten — größerer Druck, weicher aus der Nähe. Tippen oder überfahren zum Vergleichen.",
  tier1: "Fotoqualität", tier1d: "scharf, aus der Nähe betrachtet",
  tier2: "Gut / Poster", tier2d: "ab Armlänge",
  tier3: "Entwurf / groß", tier3d: "aus Metern betrachtet",
  planSize: "Papierformat", planQuality: "Qualitätsziel", planNeed: "Benötigte Pixel",
  q1cap: "Fotos, Flyer, alles, was man in der Hand hält",
  q2cap: "Poster, Magazinseiten, Leinwand",
  q3cap: "Großformate, aus Metern betrachtet",
  vOk: "Genug Pixel — komfortabel", vMid: "Grenzwertig — noch machbar", vLow: "Unter der empfohlenen Auflösung",
  stampOk: "DRUCKBEREIT", stampMid: "GRENZWERTIG", stampLow: "ERST PRÜFEN",
  refH: "Gängige Druckformate in Pixeln", refLede: "Was jedes beliebte Format wirklich braucht. „Nutzen“ schickt das Format direkt in den Planer oben.",
  faqH: "DPI, ohne Fachchinesisch erklärt", faqLede: "Die vier Fragen, die Menschen wirklich stellen. Beim Überfahren zeigt die Frage dezent den Druck, um den es geht.",
  faq1q: "DPI oder PPI — was denn nun?",
  faq1a: "PPI (Pixel pro Zoll) beschreibt die digitale Datei; DPI (Punkte pro Zoll) beschreibt die Tinte auf dem Papier. Im Alltag werden beide verwechselt, und dieses Tool versteht „DPI“ als Pixel pro Zoll Druck. Wenn jemand „ein 300-DPI-Bild“ sagt, meint er eigentlich <em>„300 Pixel für jeden Zoll Papier.“</em>",
  faq2q: "Mein Bild sagt 72 DPI. Ist es schlecht?",
  faq2a: "Nein. Diese Zahl ist ein Metadatum — ein Vorschlag für die Druckgröße, kein Maß für Details. Ein 6000 × 4000 Foto mit dem Tag „72 DPI“ hat <em>exakt dasselbe Detail</em> wie eines mit „300 DPI“. Die 72er-Konvention ist ein Überbleibsel früher Computerbildschirme. Beurteile Bilder nach Pixelmaßen, nicht nach diesem Tag.",
  faq3q: "Wie viele DPI brauche ich wirklich?",
  faq3a: "Kommt auf den Betrachtungsabstand an. Handnahes (Fotos, Flyer): 300. Poster auf Armlänge: 100–150. Großformate aus Metern: 72–100. Verdoppelt man das Druckformat, halbiert sich die effektive DPI — deshalb zeigt der Analyzer alle drei Stufen nebeneinander.",
  faq4q: "Warum drucken Social-Media-Fotos schlecht?",
  faq4a: "Plattformen komprimieren und verkleinern Uploads, um Bandbreite zu sparen — meist auf etwa 1080 Pixel Breite. Auf dem Handy sieht das gut aus, aber 1080 px bei 300 DPI sind nur 3,6 Zoll. Für Drucke das <em>Original</em> aus Kamera oder Galerie-App nutzen, nicht die Kopie aus dem Web.",
  foot1: "Dein Bild wird direkt in deinem Browser analysiert. Keine Uploads, keine Konten, keine Verfolgung deiner Dateien.",
  foot2: "Die Werte hier sind praktische Planungshilfe — für wichtige Aufträge immer erst einen Proofdruck bestellen.",
  navRef: "Referenz", navFaq: "FAQ",
  analyzedLocally: "lokal analysiert",
  btnAnalyzeAnother: "Anderes analysieren", btnRemove: "Bild entfernen", btnPlanSize: "Druckgröße planen",
  resCtaText: "Hast du ein bestimmtes Format im Sinn — Rahmen, Poster oder A4? Vergleiche dieses Bild.",
  btnUse: "Nutzen", colSize: "Format", colPhoto: "Bei 300 DPI (Foto)", colPoster: "Bei 150 DPI (Poster)",
  disclaimer: "Planungshilfe, keine Garantie — Papier, Betrachtungsabstand, Motiv und Drucker spielen alle eine Rolle.",
  noImgYet: "Noch kein Bild geladen — füge eines hinzu, um zu sehen, ob es für dieses Format reicht.",
  gaugeZero: "0", gaugeWorkable: "machbar ≈", gaugeRecommended: "empfohlen",
  btnChange: "ändern", customPreset: "Benutzerdefiniert",
  errNotImage: "Das sieht nicht nach einer Bilddatei aus. Versuche JPEG, PNG, WebP oder GIF.",
  errHeic: "Dieser Browser kann HEIC/HEIF noch nicht decodieren. Als JPEG exportieren und erneut versuchen.",
  errGeneric: "Datei konnte nicht gelesen werden — beschädigt oder nicht unterstütztes Format.",
  leadPrintsUpTo: "Druckt bis zu",
  leadAtPhoto: "in Fotoqualität — größer bei Betrachtung aus der Ferne.",
  noteDpiTag: "Was der {dpi}-DPI-Tag bedeutet: nur ein Druckvorschlag der App, die die Datei gespeichert hat. Programme können ihn ignorieren, an deinen Pixeln ändert sich nichts — die Maße oben sind entscheidend.",
  noteNoDpi: "Keine DPI in dieser Datei gespeichert — völlig normal. Screenshots und die meisten Webbilder enthalten keine. Es fehlt kein Detail; DPI zählt erst bei der physischen Druckgröße unten.",
  noteBigImage: "Das ist ein sehr großes Bild (~{mp} MP). Die Zahlen stimmen — manche Bearbeitungs- und Druckprogramme werden bei solchen Dateien jedoch langsamer.",
  vBodyOk: "In dieser Größe hat dein Bild etwa <b>{effDpi} DPI</b>{comparison} das Ziel von {q} DPI. Es bleibt sogar Spielraum zum Zuschneiden.",
  vBodyMid: "Das Bild würde um ca. <b>{pct}%</b> vergrößert (effektiv ~{effDpi} DPI). Für Poster ab Armlänge meist völlig ausreichend; aus der Nähe etwas weicher.",
  vBodyLow: "Dieses Format ergäbe nur ~<b>{effDpi} DPI</b> bei einem Ziel von {q} DPI — sichtbare Weichheit ist zu erwarten. Kleineres Format, geringere Qualitätsstufe oder höher auflösende Datei wählen.",
  vComparing: "Vergleich von {size} bei {q} DPI mit deinem geladenen Bild.",
  vAspectDiff: " Hinweis: Das Seitenverhältnis des Bildes ({aspect}) weicht vom Papier ab — Einpassen erfordert Beschnitt oder Ränder.",
  noscript: "Dieses Tool läuft vollständig in deinem Browser und benötigt aktiviertes JavaScript."
}
};
