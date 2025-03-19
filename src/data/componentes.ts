import IconCpu from "@/icons/cpu.svg"
import IconStorage from "@/icons/storage.svg"
import IconRam from "@/icons/ram.svg"

export const componentes = [
    {
      slug: "procesador",
      name: "Procesador",
      subtitle: "El cerebro de la computadora. Ejecuta instrucciones, realiza cálculos y coordina todas las operaciones del sistema.",
      src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
      textCard: "La Unidad Central de Procesamiento (CPU) es el componente principal de una computadora que interpreta y ejecuta instrucciones. Actúa como el cerebro del ordenador, realizando operaciones aritméticas, lógicas y de entrada/salida especificadas por las instrucciones del programa. Los procesadores modernos incluyen múltiples núcleos, memoria caché y diversos niveles de optimización para mejorar el rendimiento.",
      icon: IconCpu.src,
      details: {
        description: "El procesador es el encargado de ejecutar todas las instrucciones y cálculos necesarios para el funcionamiento del sistema.",
        specs: ["Núcleos", "Frecuencia", "Arquitectura"]
      }
    },
    {
      slug: "almacenamiento",
      name: "Almacenamiento",
      subtitle: "Dispositivos que guardan datos permanentemente, incluyendo HDD y SSD.",
      src: "https://images.unsplash.com/photo-1563212034-a3c52118cce2?auto=format&fit=crop&w=800&q=80",
      textCard: "Los dispositivos de almacenamiento guardan datos de forma permanente, incluso cuando el equipo está apagado. Los discos duros tradicionales (HDD) utilizan platos magnéticos giratorios para almacenar información, mientras que las unidades de estado sólido (SSD) emplean memoria flash, siendo más rápidas y resistentes. El almacenamiento es esencial para guardar el sistema operativo, programas, archivos y todo tipo de datos que necesitamos conservar.",
      icon: IconStorage.src,
      details: {
        description: "Los dispositivos de almacenamiento permiten conservar información de manera permanente en la computadora.",
        specs: ["Tipo (HDD/SSD)", "Capacidad", "Velocidad de lectura/escritura"]
      }
    },
    {
      slug: "memoria-ram",
      name: "Memoria (RAM)",
      subtitle: "Almacenamiento temporal de alta velocidad para datos en uso activo.",
      src: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
      textCard: "La Memoria de Acceso Aleatorio (RAM) proporciona almacenamiento temporal de alta velocidad para los datos que están siendo utilizados activamente. A diferencia del almacenamiento, la RAM es volátil, lo que significa que los datos se pierden cuando se apaga la computadora. Cuanta más RAM tenga un sistema, más programas y datos podrá manejar simultáneamente sin ralentizarse. La RAM es esencial para el multitasking eficiente.",
      icon: IconRam.src,
      details: {
        description: "La memoria RAM permite el acceso rápido a los datos que están en uso en el sistema, mejorando el rendimiento general.",
        specs: ["Capacidad", "Frecuencia", "Tipo (DDR3, DDR4, DDR5)"]
      }
    }
  ];
  