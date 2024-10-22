# 🚨 IMPORTANTE: Leer antes de comenzar

Este documento explica la metodología de trabajo para evitar conflictos en el desarrollo del proyecto. **Por favor, sigan estas pautas para mantener un flujo de trabajo organizado**.

## Metodología de trabajo colaborativo

1. **Comunicación constante**  
   Antes de hacer cualquier cambio en el código, recuerden avisar a los demás. Esto es importante para evitar que varias personas trabajen sobre los mismos archivos al mismo tiempo y causen conflictos de versiones.

2. **Subir y documentar cambios correctamente**
   - **Subir cambios**: Una vez que hagan alguna modificaciones en su PC, **subi los cambios al repositorio lo antes posible**.
   - **Commits claros**: Usen descripciones detalladas en los commits. Por ejemplo:  
     ```bash
     git commit -m "Modifiqué el CSS para centrar los elementos del formulario en la página de contacto."
     ```
     Ser específico en lo que cambiaron nos va a dar una mano a los demás a entender rápidamente lo que hicieron y a evitar errores.

3. **Evitar conflictos al trabajar simultáneamente**  
   Si estás trabajando en el proyecto, avisa por el grupo de WhatsApp. De esta manera, los demás pueden coordinar para evitar que dos personas suban cambios al mismo tiempo, lo que podría generar conflictos. Si eso pasa, los conflictos no suelen ser difíciles de resolver, pero lo ideal es **evitarlos**.

4. **Colaboración en tiempo real**  
   Si dos personas necesitan trabajar al mismo tiempo, pueden usar la extensión **Live Share de Visual Studio Code** para colaborar en tiempo real. Esta extensión permite que ambos modifiquen archivos simultáneamente, pero lo mejor es que trabajen en partes diferentes del proyecto para no interferir entre sí.

## Estructura de archivos

Cada página del proyecto debe estar compuesta por un archivo **HTML** y su correspondiente archivo **CSS**. 

- Si se usa algun **framework**, es fundamental comentar lo que se añade al código. Esto facilita que todos puedan seguir lo que se está implementando con el framework. 
- porfa fijense de ser claros con los cambios que meten y su propósito.

## Consejos para documentar el progreso

- **Registra cambios de manera general**: En lugar de anotar cambios minuciosos como "añadí una coma" o "agregué padding", intenta resumir los cambios más importantes. Por ejemplo:
  - "Añadí las clases necesarias para centrar el reproductor de video".
  
- **Documenta problemas**: Si no pueden solucionar un problema, suban los cambios que hicieron y dejen un comentario indicando qué no pudieron resolver o qué no está funcionando correctamente.

## Directorios del proyecto

En la raíz del proyecto, hay dos directorios importantes:

- **Área de pruebas**  
  Aquí es donde deberíamos comenzar a trabajar. En este espacio se pueden crear archivos HTML y CSS fuera del entorno de React, para avanzar en las secciones iniciales del proyecto como la página de inicio (Home), contacto, y productos (paginas de ejemplo para que nos hagamos una idea).

- **Ambiente React**  
  Cuando estemos listos, migraremos a React para implementar las funcionalidades que pide la profesora. Por ahora, enfoquémonos en la estructura básica en el área de pruebas.

## Próximos pasos

El fin de semana podemos revisar y discutir el uso de la extensión **Live Share** en detalle. Mientras tanto, cualquier duda que tengan, no duden en consultarla por el grupo de WhatsApp.
