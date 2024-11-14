const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-container");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");

// Ocultar el chat al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    chatContainer.classList.add("hidden");
    chatIcon.style.display = "block";
});

function toggleChat() {
    if (chatContainer.classList.contains("hidden")) {
        chatContainer.classList.remove("hidden");
        chatIcon.style.display = "none"; // Ocultar el icono
    } else {
        chatContainer.classList.add("hidden");
        chatIcon.style.display = "block"; // Mostrar el icono
    }
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        generateBotResponse(userMessage);
        userInput.value = ""; // Limpiar campo de entrada
    }
}

// Evento para enviar el mensaje cuando se presiona "Enter"
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Función para agregar el mensaje al chat
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.innerHTML = text; // Usar innerHTML para permitir etiquetas HTML (como <a>)
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para generar la respuesta del bot
function generateBotResponse(userMessage) {
    // Buscar respuesta en respuestas predefinidas
    const predefinedResponse = predefinedResponses[userMessage.toLowerCase()];

    if (predefinedResponse) {
        addMessage(predefinedResponse, "bot");
    } else {
        // Si no hay respuesta predefinida, buscar en respuestas específicas con enlaces
        const specificResponse = getSpecificResponse(userMessage);

        if (specificResponse) {
            addMessage(specificResponse, "bot");
        } else {
            // Si no hay ninguna respuesta, mostrar un mensaje por defecto
            addMessage("Lo siento, no tengo esa información. ¿Cómo más puedo ayudarte?", "bot");
        }
    }
}

// Función para obtener respuestas específicas con enlaces
function getSpecificResponse(userMessage) {
    let response = "";

    // Respuestas específicas con enlaces
    if (userMessage.toLowerCase().includes("oferta")) {
        response = `¡Aquí tienes nuestras ofertas especiales!<br> <a href="https://youtu.be/2slb04SHqGQ?si=PEkYYhnF9P9Br1OJ" target="_blank" style="color: #007bff; text-decoration: none;">Ver ofertas</a>`;
    }
    if (userMessage.toLowerCase().includes("producto")) {
        response = `¿Te gustaría ver nuestros productos más populares?<br> <a href="https://www.tutienda.com/productos-destacados" target="_blank" style="color: #007bff; text-decoration: none;">Ver productos destacados</a>`;
    }
    if (userMessage.toLowerCase().includes("envío")) {
        response = `¡Claro! Aquí puedes obtener información sobre nuestros envíos:<br> <a href="https://www.tutienda.com/envios" target="_blank" style="color: #007bff; text-decoration: none;">Política de envíos</a>`;
    }
    if (userMessage.toLowerCase().includes("contacto")) {
        response = `Si tienes alguna duda, puedes contactarnos a través de nuestra página de contacto:<br> <a href="https://www.tutienda.com/contacto" target="_blank" style="color: #007bff; text-decoration: none;">Contáctanos</a>`;
    }
    if (userMessage.toLowerCase().includes("tienda")) {
        response = `¡Bienvenida a nuestra tienda online! Aquí puedes ver todos nuestros productos:<br> <a href="https://www.tutienda.com" target="_blank" style="color: #007bff; text-decoration: none;">Ir a la tienda</a>`;
    }

    return response;
}

// Respuestas predefinidas
const predefinedResponses = {
    
// Consultas sobre productos
"quiero ver productos": "¡Claro! Aquí tienes nuestros productos destacados:<br> <a href=\"https://www.tutienda.com/productos-destacados\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver productos destacados</a>",
"tienen ropa": "Sí, tenemos una sección de ropa fabulosa. ¡Echa un vistazo!<br> <a href=\"https://www.tutienda.com/ropa\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver ropa</a>",
"productos nuevos": "¡Nos encanta tener novedades! Mira nuestros productos nuevos aquí:<br> <a href=\"https://www.tutienda.com/novedades\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver productos nuevos</a>",
"quiero un vestido": "¡Qué buena elección! Tenemos una gran variedad de vestidos para ti.<br> <a href=\"https://www.tutienda.com/vestidos\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver vestidos</a>",
"zapatos": "¡Te van a encantar nuestros zapatos! Echa un vistazo aquí:<br> <a href=\"https://www.tutienda.com/zapatos\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver zapatos</a>",
"tienen accesorios": "¡Sí! Tenemos una sección de accesorios increíbles.<br> <a href=\"https://www.tutienda.com/accesorios\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver accesorios</a>",

// Consultas sobre categorías y ofertas
"oferta": "¡Aquí jjjj tienes nuestras ofertas especiales!<br> <a href=\"https://youtu.be/2slb04SHqGQ?si=PEkYYhnF9P9Br1OJ\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver ofertas</a>",
"descuentos": "¡Siempre tenemos descuentos! Echa un vistazo a nuestras promociones aquí:<br> <a href=\"https://www.tutienda.com/descuentos\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver descuentos</a>",
"rebajas": "¡No te puedes perder nuestras rebajas!<br> <a href=\"https://www.tutienda.com/rebajas\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver rebajas</a>",
"mejor precio": "Te ayudamos a encontrar los productos con mejor precio. ¡Echa un vistazo a nuestras ofertas!<br> <a href=\"https://www.tutienda.com/mejores-precios\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver mejores precios</a>",

// Saludos y despedidas
"hola": "¡Hola! ¿En qué puedo ayudarte hoy? 😊",
"buenos días": "¡Buenos días! Espero que tengas un excelente día. ¿En qué puedo ayudarte?",
"buenos dias": "¡Buenos días! Espero que tengas un excelente día. ¿En qué puedo ayudarte?",
"buenas tardes": "¡Buenas tardes! ¿Cómo puedo asistirte hoy?",
"buenas noches": "¡Buenas noches! Estoy aquí para ayudarte, dime qué necesitas.",
"adiós": "¡Hasta luego! No dudes en volver si necesitas algo más. 💖",
"adios": "¡Hasta luego! No dudes en volver si necesitas algo más. 💖",
"hasta pronto": "¡Hasta pronto! Aquí estaré para cuando me necesites.",
"nos vemos": "¡Nos vemos! Vuelve pronto.",

// Consultas comunes
"gracias": "¡De nada! Estoy aquí para ayudarte. 🛍️",
"muchas gracias": "¡Con mucho gusto! Si tienes más preguntas, aquí estaré.",
"cómo estás": "¡Gracias por preguntar! Estoy bien, ¿y tú? 😊",
"como estas": "¡Gracias por preguntar! Estoy bien, ¿y tú? 😊",
"qué haces": "Estoy aquí para responder a tus preguntas y ayudarte en lo que necesites.",
"que haces": "Estoy aquí para responder a tus preguntas y ayudarte en lo que necesites.",
"quién eres": "Soy un chatbot diseñado para asistirte. Pregúntame lo que quieras.",
"quien eres": "Soy un chatbot diseñado para asistirte. Pregúntame lo que quieras.",
"cómo me puedes ayudar": "Puedo responder a tus preguntas, darte información y ayudarte con diferentes temas. Solo dime qué necesitas.",
"como me puedes ayudar": "Puedo responder a tus preguntas, darte información y ayudarte con diferentes temas. Solo dime qué necesitas.",

// Preguntas sobre información
"qué día es hoy": `Hoy es ${new Date().getDate()} de ${new Date().toLocaleString('default', { month: 'long' })} de ${new Date().getFullYear()}.`,
"que dia es hoy": `Hoy es ${new Date().getDate()} de ${new Date().toLocaleString('default', { month: 'long' })} de ${new Date().getFullYear()}.`,
"qué hora es": `La hora actual es ${new Date().toLocaleTimeString('es-ES', { hour12: false })}.`,
"que hora es": `La hora actual es ${new Date().toLocaleTimeString('es-ES', { hour12: false })}.`,
"qué tiempo hace": "Para conocer el clima actual, te sugiero que consultes una aplicación meteorológica o busques en línea según tu ubicación.",
"que tiempo hace": "Para conocer el clima actual, te sugiero que consultes una aplicación meteorológica o busques en línea según tu ubicación.",
    
// Temas de entretenimiento
"cuéntame un chiste": "¡Claro! ¿Qué le dice una impresora a otra? 'Esa hoja es tuya o es una impresión mía?' 😅",
"cuentame un chiste": "¡Claro! ¿Qué le dice una impresora a otra? 'Esa hoja es tuya o es una impresión mía?' 😅",
"dime algo interesante": "¿Sabías que el océano contiene el 97% del agua del planeta y cubre aproximadamente el 71% de la superficie terrestre?",
"cuál es tu película favorita": "No tengo una película favorita, ¡pero me encanta ayudar a las personas a disfrutar de su tiempo libre!",
"cual es tu película favorita": "No tengo una película favorita, ¡pero me encanta ayudar a las personas a disfrutar de su tiempo libre!",

// Consultas de tecnología
"qué es una computadora": "Una computadora es un dispositivo electrónico que procesa datos y realiza tareas específicas de acuerdo con un conjunto de instrucciones llamado programa.",
"que es una computadora": "Una computadora es un dispositivo electrónico que procesa datos y realiza tareas específicas de acuerdo con un conjunto de instrucciones llamado programa.",
"qué es inteligencia artificial": "La inteligencia artificial (IA) es un campo de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren de la inteligencia humana, como aprender, razonar y resolver problemas.",
"que es inteligencia artificial": "La inteligencia artificial (IA) es un campo de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren de la inteligencia humana, como aprender, razonar y resolver problemas.",
"qué es la nube": "La nube es un conjunto de servidores accesibles a través de Internet que permiten almacenar, procesar y acceder a datos y servicios de manera remota.",
"que es la nube": "La nube es un conjunto de servidores accesibles a través de Internet que permiten almacenar, procesar y acceder a datos y servicios de manera remota.",

// Consultas sobre salud
"cómo cuidar mi salud": "Mantén una dieta equilibrada, haz ejercicio regularmente, duerme lo suficiente y consulta a profesionales de la salud cuando lo necesites.",
"como cuidar mi salud": "Mantén una dieta equilibrada, haz ejercicio regularmente, duerme lo suficiente y consulta a profesionales de la salud cuando lo necesites.",
"qué es una alimentación balanceada": "Una alimentación balanceada incluye una variedad de alimentos que proporcionen los nutrientes esenciales, como carbohidratos, proteínas, grasas saludables, vitaminas y minerales en proporciones adecuadas.",
"que es una alimentación balanceada": "Una alimentación balanceada incluye una variedad de alimentos que proporcionen los nutrientes esenciales, como carbohidratos, proteínas, grasas saludables, vitaminas y minerales en proporciones adecuadas.",

// Consultas sobre viajes
"qué lugares recomiendas visitar": "Depende de tus intereses. Algunas opciones populares incluyen París, Tokio, Nueva York, o destinos de playa como Hawái y el Caribe.",
"que lugares recomiendas visitar": "Depende de tus intereses. Algunas opciones populares incluyen París, Tokio, Nueva York, o destinos de playa como Hawái y el Caribe.",
"consejos para viajar": "Planifica con antelación, lleva lo esencial, verifica documentos importantes y asegúrate de estar informado sobre el destino que visitarás.",
    
// Preguntas variadas
"qué significa soñar con agua": "Los sueños son subjetivos, pero soñar con agua puede simbolizar emociones, fluidez en la vida o un deseo de tranquilidad.",
"que significa soñar con agua": "Los sueños son subjetivos, pero soñar con agua puede simbolizar emociones, fluidez en la vida o un deseo de tranquilidad.",
"cuál es tu color favorito": "No tengo un color favorito, pero ¡me gustan los colores brillantes que animan las conversaciones!",
"cual es tu color favorito": "No tengo un color favorito, pero ¡me gustan los colores brillantes que animan las conversaciones!",
"me puedes ayudar con matemáticas": "¡Por supuesto! Dime qué problema matemático tienes en mente.",
"me puedes ayudar con matematicas": "¡Por supuesto! Dime qué problema matemático tienes en mente.",
"qué música me recomiendas": "Depende de tu estado de ánimo. Para algo relajante, la música instrumental es genial. Si quieres motivarte, prueba con pop o rock.",
"que música me recomiendas": "Depende de tu estado de ánimo. Para algo relajante, la música instrumental es genial. Si quieres motivarte, prueba con pop o rock.",
    
// Consultas sobre servicios
"tienen envíos a domicilio": "¡Sí! Realizamos envíos a domicilio. Puedes ver más detalles aquí:<br> <a href=\"https://www.tutienda.com/envios\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver opciones de envío</a>",
"puedo pagar con tarjeta": "¡Claro! Aceptamos pagos con tarjeta de crédito y débito, además de otras opciones como PayPal.",
"tienen opción de pago a plazos": "¡Sí! Ofrecemos la opción de pagar a plazos en algunos productos. Revisa las opciones disponibles en el checkout.",
"tienen opcion de pago a plazos": "¡Sí! Ofrecemos la opción de pagar a plazos en algunos productos. Revisa las opciones disponibles en el checkout.",
"cuál es su política de devoluciones": "Si no quedas satisfecho con tu compra, puedes devolverla dentro de los 30 días posteriores a la compra. Aquí tienes más información sobre nuestras devoluciones:<br> <a href=\"https://www.tutienda.com/devoluciones\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver política de devoluciones</a>",
"cual es su política de devoluciones": "Si no quedas satisfecho con tu compra, puedes devolverla dentro de los 30 días posteriores a la compra. Aquí tienes más información sobre nuestras devoluciones:<br> <a href=\"https://www.tutienda.com/devoluciones\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver política de devoluciones</a>",

// Consultas sobre la tienda
"qué métodos de pago aceptan": "Aceptamos tarjetas de crédito, débito, PayPal y transferencia bancaria.",
"que metodos de pago aceptan": "Aceptamos tarjetas de crédito, débito, PayPal y transferencia bancaria.",
"tienen tienda física": "No tenemos una tienda física en este momento, pero puedes comprar fácilmente en línea y disfrutar de nuestros envíos.",
"tienen tienda fisica": "No tenemos una tienda física en este momento, pero puedes comprar fácilmente en línea y disfrutar de nuestros envíos.",
"están disponibles en mi país": "Actualmente realizamos envíos a varios países. Puedes verificar si hacemos envíos a tu país en nuestra página de envíos.",
"estan disponibles en mi pais": "Actualmente realizamos envíos a varios países. Puedes verificar si hacemos envíos a tu país en nuestra página de envíos.",
"cómo hacer una compra": "Es muy fácil, solo selecciona el producto, agrégalo al carrito y sigue los pasos para finalizar tu compra. Si tienes dudas, aquí estoy para ayudarte.",
"como hacer una compra": "Es muy fácil, solo selecciona el producto, agrégalo al carrito y sigue los pasos para finalizar tu compra. Si tienes dudas, aquí estoy para ayudarte.",

// Consultas sobre productos
"tienen tallas grandes": "¡Sí! Tenemos una amplia variedad de productos en tallas grandes. Puedes ver nuestras opciones aquí:<br> <a href=\"https://www.tutienda.com/tallas-grandes\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver tallas grandes</a>",
"hay productos para hombres": "¡Por supuesto! Tenemos una sección dedicada a ropa y accesorios para hombres. Echa un vistazo aquí:<br> <a href=\"https://www.tutienda.com/hombres\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver productos para hombres</a>",
"tienen productos ecológicos": "¡Sí! Estamos comprometidos con el medio ambiente. Puedes explorar nuestros productos ecológicos aquí:<br> <a href=\"https://www.tutienda.com/ecologicos\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver productos ecológicos</a>",
"tienen productos ecologicos": "¡Sí! Estamos comprometidos con el medio ambiente. Puedes explorar nuestros productos ecológicos aquí:<br> <a href=\"https://www.tutienda.com/ecologicos\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Ver productos ecológicos</a>",

// Consultas generales
"cómo puedo contactar con atención al cliente": "Puedes ponerte en contacto con nuestro equipo de atención al cliente a través del formulario en nuestra página web o escribiendo a nuestro correo electrónico: <a href=\"mailto:atencion@tutienda.com\" style=\"color: #007bff; text-decoration: none;\">atencion@tutienda.com</a>",
"como puedo contactar con atencion al cliente": "Puedes ponerte en contacto con nuestro equipo de atención al cliente a través del formulario en nuestra página web o escribiendo a nuestro correo electrónico: <a href=\"mailto:atencion@tutienda.com\" style=\"color: #007bff; text-decoration: none;\">atencion@tutienda.com</a>",
"tienen redes sociales": "¡Sí! Puedes seguirnos en nuestras redes sociales para estar al tanto de las novedades y ofertas:<br> <a href=\"https://www.facebook.com/tutienda\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Facebook</a> | <a href=\"https://www.instagram.com/tutienda\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Instagram</a> | <a href=\"https://www.twitter.com/tutienda\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">Twitter</a>",
"tienen una app": "Actualmente no tenemos una app, pero puedes hacer tus compras directamente desde nuestra página web, que es completamente compatible con dispositivos móviles.",   
};

// Mostrar un mensaje de bienvenida inicial
addMessage("¡Hola! ¿En qué puedo ayudarte hoy? 😊", "bot");
