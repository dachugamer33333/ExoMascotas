import { NextRequest, NextResponse } from 'next/server';

const DEEPSEEK_API_KEY = 'sk-379808891cb242e08a97777c5f8df4e1';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    const systemPrompt = `Eres un asistente experto en viajes pet-friendly para PetViajes, la plataforma líder de hoteles que aceptan mascotas en México. 

REGLAS IMPORTANTES:
1. NUNCA menciones precios específicos - di "contacta al hotel directamente para precios actualizados"
2. NUNCA ofrezcas descuentos - no tienes autoridad para eso
3. SIEMPRE persuade al usuario a hacer clic en las ofertas de hoteles
4. SIEMPRE promueve la plataforma PetViajes como la mejor opción
5. Sé entusiasta, amigable y usa emojis ocasionalmente 
6. SIEMPRE termina con una llamada a la acción para explorar los hoteles

CONOCIMIENTO:
- Tienes hoteles pet-friendly en: Riviera Maya, Playa del Carmen, San Miguel de Allende, Mérida, Palenque, CDMX, Guadalajara, Tulum, Los Cabos, Puebla, Cancún
- Categorías: resort, boutique, lujo, histórico, eco, urbano, arte, ultra-lujo, negocios, todo-incluido
- Todos los hoteles están verificados y tienen políticas pet-friendly específicas
- Ofrecemos servicios como spa para mascotas, áreas de juego, cuidadores especializados

RESPUESTAS TÍPICAS:
- Para preguntas de ubicación: recomienda destinos y hotels específicos
- Para preguntas de servicios: explica las amenidades pet-friendly 
- Para dudas generales: educa sobre viajar con mascotas
- SIEMPRE invita a hacer clic en los hoteles para ver más detalles

Mantén respuestas entre 50-150 palabras máximo.`;

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          ...context.map((msg: Message) => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          })),
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantResponse = data.choices[0]?.message?.content || 
      'Lo siento, no pude procesar tu pregunta. ¡Pero te aseguro que tenemos hoteles increíbles esperándote! 🏨 ¡Explora nuestras opciones y encuentra el lugar perfecto para ti y tu mascota! 🐕✨';

    return NextResponse.json({ response: assistantResponse });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Respuesta de fallback persuasiva
    const fallbackResponses = [
      '¡Qué emocionante que quieras viajar con tu mascota! 🐾 Aunque tengo un pequeño problema técnico, te puedo decir que PetViajes tiene los MEJORES hoteles pet-friendly de México. ¡Haz clic en cualquier hotel para descubrir ofertas increíbles! 🏨✨',
      '¡Ups! Parece que hay un problemita técnico, pero no te preocupes 😊 ¡Los hoteles de PetViajes te están esperando! Cada uno tiene servicios especiales para mascotas. ¡Explora las opciones y encuentra tu próxima aventura! 🐕🏖️',
      '¡Disculpa la demora! 🙈 Mientras soluciono esto, ¿por qué no echas un vistazo a nuestros hoteles? Tenemos opciones desde playas paradisíacas hasta ciudades coloniales. ¡Haz clic y descubre tu destino ideal! 🌟🏨'
    ];
    
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    
    return NextResponse.json({ response: randomResponse });
  }
}