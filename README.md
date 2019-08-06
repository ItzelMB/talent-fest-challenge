# Grain Chain Inventory

## Índice

- [Grain Chain](#Empresa-y-Reto)
- [Challenge](#Challenge)
- [Prototipado final](#Propuesta-y-solución)
- [Tecnologías](#Tecnologías-usadas)

## Empresa

Grain Chain ha dedicado sus esfuerzos a crear aplicaciones para las personas que se dedican a la agricultura, específicamente a los agricultores de siembra de granos, cuentan con una plataforma que facilita la disponibilidad inmediata de productos comercializables para los compradores.

## Challenge

El objetivo principal de nuestro reto es desarrollar una aplicación de manejo de inventarios, enviar estos inventarios de diferentes localidades a una base de datos local y de ajhí enviarlos a una base de datos local, y de ahí enviarlos a una base de datos global.

La problemática principal es lograr el acceso a la aplicación en modo offline, el envío de datos dentro de estas localidades cuentan con conexiones intermitentes, el reto es crear una sincronización entre las bases de datos locales y la global sin que haya duplicidad en el envío de sus bases de datos.

![Sistema_redes](https://raw.githubusercontent.com/ItzelMB/talent-fest-challenge/develop/sist-redes.jpg)

## Propuesta y solución 

Durante el proceso surgieron dos planteamientos para escalar la solución. El primero es convertir la aplicación en una Progressive Web App utilizando la tecnología de Workbox, lo que permite en automático la sincronización de data cuando hay conexión. La otra solución es desarrollar cron jobs usando Express para enviar secuencias de comandos que ejecuten automáticamente las tareas de verificar la conexión a internet y enviar la data almacenada localmente a la base de datos global, esto puede complementarse con la réplica de MongoDB.
Debido al uso de base de datos no relacionales pensamos que diseñar la estructura y producirla con mongo DB sería una buena solución al posible problema de duplicidad de datos por intermitencia en la conexión, ya que Mongo genera id’s aleatorios únicos.

[Figma](https://www.figma.com/proto/YShydOgizp4UcQvUDqY9RH/grain-chain-challenge?node-id=47%3A1342&scaling=contain)

## Tecnologías usadas

El reto fue planteado de forma abierta, algunas tecnologías nos fueron sugeridas y también se nos dió la oportunidad de elegir otras para resolverlo.

Nuestra propuesta es crear una aplicación web con Mongo DB, Mongoose, Express de Node para la construcción del backend y desarrollamos con React JS el front end usando distintas librerías y Bootstrap para el CSS. El prototipo de alta fidelidad lo diseñamos con Figma y usamos 2 repositorios de Github con distintas ramas como controlador de versiones.

Elegimos estas tecnologías porque consideramos que son relevantes en la actualidad y porque nos permitiría llegar a un Producto Mínimo Viable en el plazo del Hackathon.
