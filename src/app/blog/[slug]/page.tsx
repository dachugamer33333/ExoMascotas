import { notFound } from "next/navigation";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

// Mock data para artículos - En producción esto vendría de una base de datos o CMS
const articlesData: { [key: string]: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  content: string;
} } = {
  "cuidados-basicos-huron": {
    title: "Cuidados Básicos del Hurón Doméstico",
    excerpt: "Todo lo que necesitas saber para mantener a tu hurón saludable y feliz. Desde la alimentación hasta el acondicionamiento del espacio.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    author: "Dr. Sofia Méndez",
    date: "2024-01-15",
    category: "Hurones",
    tags: ["hurones", "cuidados", "alimentación", "principiantes"],
    readTime: "8 min",
    content: `
      <h2>Introducción al Hurón Doméstico</h2>
      <p>Los hurones (Mustela putorius furo) son mascotas fascinantes que han ganado popularidad en los últimos años. Estos pequeños carnívoros pertenecen a la familia de las comadrejas y requieren cuidados específicos para mantener su salud y bienestar.</p>
      
      <h2>Alimentación del Hurón</h2>
      <p>La alimentación es uno de los aspectos más importantes en el cuidado de los hurones:</p>
      <ul>
        <li><strong>Alimento comercial de alta calidad:</strong> Busca marcas específicas para hurones con al menos 32% de proteína</li>
        <li><strong>Frecuencia:</strong> Los hurones deben comer 3-4 veces al día debido a su metabolismo acelerado</li>
        <li><strong>Agua fresca:</strong> Siempre disponible en bebederos o recipientes pesados</li>
      </ul>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p><strong>⚠️ Importante:</strong> Los hurones NO deben consumir chocolate, cebolla, ajo, lácteos o frutas dulces ya que pueden ser tóxicos.</p>
      </div>
      
      <h2>Hábitat y Espacio</h2>
      <p>Los hurones necesitan un entorno espacioso y seguro:</p>
      <ul>
        <li><strong>Jaula:</strong> Mínimo 60x60x60 cm, preferiblemente con múltiples niveles</li>
        <li><strong>Temperatura:</strong> Entre 18-22°C, evitar corrientes de aire</li>
        <li><strong>Tiempo libre:</strong> Mínimo 4 horas diarias fuera de la jaula bajo supervisión</li>
        <li><strong>Sustrato:</strong> Usar papel, toallas o mantas lavables, evitar virutas de cedro</li>
      </ul>
      
      <h2>Ejercicio y Juego</h2>
      <p>Los hurones son animales muy activos que necesitan estimulación física y mental:</p>
      <ul>
        <li>Túneles y tubos para explorar</li>
        <li>Juguetes resistentes sin piezas pequeñas</li>
        <li>Hamacas para dormir</li>
        <li>Tiempo de juego interactivo con sus propietarios</li>
      </ul>
      
      <h2>Cuidados Veterinarios</h2>
      <p>Los hurones requieren atención veterinaria especializada:</p>
      <ul>
        <li><strong>Vacunación anual:</strong> Contra la rabia y el moquillo</li>
        <li><strong>Desparasitación:</strong> Cada 6 meses o según recomendación veterinaria</li>
        <li><strong>Corte de uñas:</strong> Cada 2-3 semanas</li>
        <li><strong>Esterilización:</strong> Recomendada para prevenir problemas de salud</li>
      </ul>
      
      <h2>Señales de Alerta</h2>
      <p>Contacta inmediatamente a un veterinario si observas:</p>
      <ul>
        <li>Pérdida de apetito por más de 12 horas</li>
        <li>Letargo o debilidad extrema</li>
        <li>Vómitos frecuentes</li>
        <li>Diarrea persistente</li>
        <li>Dificultad para respirar</li>
      </ul>
      
      <h2>Conclusión</h2>
      <p>Los hurones pueden ser compañeros maravillosos cuando se les proporciona el cuidado adecuado. Su naturaleza juguetona y social los convierte en mascotas únicas, pero requieren un compromiso serio por parte de sus propietarios. Con la alimentación correcta, un hábitat apropiado y atención veterinaria regular, tu hurón puede vivir una vida larga y saludable.</p>
    `
  },
  "alimentacion-reptiles-principiantes": {
    title: "Guía de Alimentación para Reptiles: Principiantes",
    excerpt: "Aprende los fundamentos de la alimentación reptil. Qué comer, cuándo y cómo crear un plan nutricional equilibrado.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800",
    author: "Carlos Ramírez",
    date: "2024-01-12",
    category: "Reptiles",
    tags: ["reptiles", "alimentación", "nutrición", "geckos", "iguanas"],
    readTime: "12 min",
    content: `
      <h2>Fundamentos de la Alimentación Reptil</h2>
      <p>La alimentación correcta es fundamental para la salud de los reptiles domésticos. A diferencia de los mamíferos, los reptiles tienen necesidades nutricionales muy específicas que varían según la especie.</p>
      
      <h2>Tipos de Dietas Reptiles</h2>
      
      <h3>Carnívoros</h3>
      <p>Reptiles que se alimentan principalmente de presas vivas o muertas:</p>
      <ul>
        <li><strong>Geckos leopardo:</strong> Grillos, gusanos de la harina, cucarachas</li>
        <li><strong>Serpientes:</strong> Ratones, ratas (congelados/descongelados)</li>
        <li><strong>Dragones barbudos jóvenes:</strong> 80% insectos, 20% vegetales</li>
      </ul>
      
      <h3>Herbívoros</h3>
      <p>Reptiles que se alimentan exclusivamente de materia vegetal:</p>
      <ul>
        <li><strong>Iguanas verdes adultas:</strong> Hojas verdes, flores, frutas ocasionales</li>
        <li><strong>Tortugas terrestres:</strong> Hierbas, diente de león, calabaza</li>
      </ul>
      
      <h3>Omnívoros</h3>
      <p>Combinan proteína animal y vegetal:</p>
      <ul>
        <li><strong>Dragones barbudos adultos:</strong> 20% insectos, 80% vegetales</li>
        <li><strong>Tortugas acuáticas:</strong> Peces, insectos, plantas acuáticas</li>
      </ul>
      
      <h2>Suplementación</h2>
      <p>Los reptiles domésticos necesitan suplementos para compensar las deficiencias nutricionales:</p>
      
      <h3>Calcio</h3>
      <ul>
        <li>Esencial para el desarrollo óseo y la función muscular</li>
        <li>Espolvorear sobre los alimentos 2-3 veces por semana</li>
        <li>Usar calcio con D3 para reptiles sin acceso a UVB</li>
      </ul>
      
      <h3>Vitaminas</h3>
      <ul>
        <li>Multivitamínicos específicos para reptiles</li>
        <li>Usar 1-2 veces por semana</li>
        <li>No exceder las dosis recomendadas</li>
      </ul>
      
      <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <p><strong>🚫 Alimentos Prohibidos:</strong></p>
        <ul>
          <li>Lechuga iceberg (sin valor nutricional)</li>
          <li>Espinacas (interfieren con la absorción de calcio)</li>
          <li>Aguacate (tóxico para reptiles)</li>
          <li>Insectos salvajes (pueden contener pesticidas)</li>
        </ul>
      </div>
      
      <h2>Programas de Alimentación</h2>
      
      <h3>Reptiles Jóvenes</h3>
      <ul>
        <li>Alimentación diaria</li>
        <li>Porciones más pequeñas y frecuentes</li>
        <li>Mayor proporción de proteína</li>
      </ul>
      
      <h3>Reptiles Adultos</h3>
      <ul>
        <li>Cada 2-3 días para la mayoría de especies</li>
        <li>Porciones más grandes</li>
        <li>Ajustar según la especie y temporada</li>
      </ul>
      
      <h2>Hidratación</h2>
      <p>Métodos para mantener a los reptiles hidratados:</p>
      <ul>
        <li><strong>Recipientes de agua:</strong> Cambiar regularmente</li>
        <li><strong>Rociar:</strong> Para especies tropicales</li>
        <li><strong>Baños:</strong> Para tortugas y algunos lagartos</li>
        <li><strong>Goteo:</strong> Para reptiles arbóreos</li>
      </ul>
      
      <h2>Conclusión</h2>
      <p>Una alimentación adecuada es la base de la salud reptil. Investiga las necesidades específicas de tu especie, consulta con veterinarios especializados y ajusta la dieta según la edad, tamaño y condición de tu reptil.</p>
    `
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesData[resolvedParams.slug];
  if (!article) {
    return {
      title: "Artículo no encontrado - ExoMascotas"
    };
  }

  return {
    title: `${article.title} | Blog ExoMascotas`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = articlesData[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />
      
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-emerald-600">Inicio</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blog" className="text-gray-500 hover:text-emerald-600">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-emerald-600 font-medium">{article.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-4">
                <span>Por {article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span>•</span>
                <span>{article.readTime} lectura</span>
              </div>
            </div>
            
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none article-content">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* AdSense Placeholder */}
          <div className="my-12 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Google AdSense - Banner publicitario</p>
            <p className="text-sm text-gray-400 mt-1">728x90 Leaderboard</p>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              ← Volver al blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }));
}