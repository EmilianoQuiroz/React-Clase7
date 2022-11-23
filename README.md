# prueba-node-aws
Ejemplo de simple de servidor en node ejecutándose desde una instancia ec2 en aws

  # Como levantar una instancia EC2 en AWS
 
 1. Entramos a nuestra cuenta de AWS y nos dirigimos al panel de EC2.
 
![image](https://user-images.githubusercontent.com/78452543/203649012-934b9eba-6f20-4996-aab7-4e31b5b1ab41.png)

- Nos aparece un panel como este el cual nos indica cuantas instancias tenemos creadas, cuantas instancias tenermos creadas, grupos de seguridad, direcciones IP elasticas, etc

 2. Clickeamos el boton lanzar instancia.
 
 ![image](https://user-images.githubusercontent.com/78452543/203649314-03198f9f-4165-4cdd-b85f-db17881ebb8e.png)
 
- Nos llevara a otra seccion con las opciones que tenemos para configurar nuestra instancia.

 3. Primero elegimos que maquina virtual usaremos (En este caso Amazon Linux)

![image](https://user-images.githubusercontent.com/78452543/203649621-f38c3a8a-7b2b-4f7c-9e47-fea4c9a03ecd.png)

 4. En par de claves creamos una en caso de que no tengamos una
 
 ![image](https://user-images.githubusercontent.com/78452543/203649753-8d44fb6f-245d-4e06-91bf-13f02d8700ea.png)

- Le asignamos un nombre y procedemos a crear la clave

![image](https://user-images.githubusercontent.com/78452543/203650080-f160b517-6bd2-42a1-9013-a9a9c804b6a0.png)

- Se nos descargara el siguiente archivo, no debemos borrarlo ni perderlo ya que es la clave de acceso a nuestra instancia

 5. Editamos la configuracion de red
 
 ![image](https://user-images.githubusercontent.com/78452543/203650322-c3c6f869-2c46-4f26-a33e-4677ff82cb72.png)

- En la parte inferior le nos aparece la opcion de agregar regla de grupo de subred

![image](https://user-images.githubusercontent.com/78452543/203650570-38c937a4-a2e8-42fa-b197-5eb6480ca7aa.png)

- Agregamos una nueva regla, una TCP personalizada en un puerto 3000, que es el puerto en el que se ejecuta nuestra aplicacion

 6. Lanzamos la instancia
 
 ![image](https://user-images.githubusercontent.com/78452543/203650892-2263d6a6-5267-4c65-9edf-893dfc207152.png)

- Nuestra instancia ya ha sido creada 

![image](https://user-images.githubusercontent.com/78452543/203651018-008de4c1-f3ad-43e0-888d-8bc204035ad9.png)

- Hacemos click en el enlace y ya podremos entrar a nuestra instancia

![image](https://user-images.githubusercontent.com/78452543/203651529-b9c20931-8920-4d53-9417-a75fa07ad3d3.png)

- Listo! ya tenemos nuestra instancia EC2 en la nube

---

 # Como subir nuestra alpicacion en node a la nube
 
  1. Hacemos click en la instancia creada
  
  ![image](https://user-images.githubusercontent.com/78452543/203652863-db98d93c-fd3e-4911-a020-82466533748e.png)

 2. Hacemos click en conectar
 
 3. Nos aparecera la siguiente opcion, nuevamente damos click a continuar
 
 ![image](https://user-images.githubusercontent.com/78452543/203653087-268c9e56-7041-4766-9302-33f4c5688372.png)

- Entraremos a una maquina virtual Linux de Amazon 

![image](https://user-images.githubusercontent.com/78452543/203653230-1bd7dafb-397f-4bb9-81b1-2838dfe04bee.png)

2. Ejecutamos los siguientes comandos: 

      $ sudo yum update
      
      - Para actualizar los paquetes
      
      $ git --version
      
      - Para verificar si tenemos una version de git instalada, en caso de no tenerla la instalaremos
      
      $ sudo yum install git
      
      - creamos una carpeta para guardar el repositorio de nuestro proyecto
      
      $ mkdir "nombre de la carpeta"
      
      - Nos posicionamos en la carpeta
      
      $cd "nombre de la carpeta"

      - Una vez adentro clonamos el repositorio con nuestro proyecto en github
      
      $ git clone "url del repositorio"

      - Para este ejemplo utilizaremos un proyecto simple en node que envia un mensaje a traves de un servidor a un puerto 3000
      
      ![image](https://user-images.githubusercontent.com/78452543/203654223-ece5d036-c2c7-4c44-b883-179823d9e6c8.png)
    
      - Luego de estos pasos tendremos nuestro proyecto dentro de nuestra maquina virtual, el paso siguiente es descargar los programas que nuestra aplicacion necesita para funcionar, para esto necesitamos descargar node, lo hacermos mediante nvm que nos permite instalar versiones de node. Para  instalar NVM debemos ejecutar los siguientes comandos:
      
      $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
      
      - Luego para volver a iniciar los ficheros debemos ejecutar
      
      $ source ~/.bashrc
      
      - Ahora debemos instalar la version de node que necesitemos, en este caso es la version 16 que es la mas estable, lo haremos con el siguiente comando
      
      $ nvm install 16
      
      - Ahora tenemos todos los programas necesarios debemos instalar las dependencias que necesita nuestro programa, lo haremos con el siguiente comando:
      
      $ npm install
      
      - Por ultimo iniciamos el servidor con npm start
      
      $ npm start &
      
      - El "&" sirve para que el programa quede guardado en la instancia 
      
      - Volvemos a nuestra instancia, haciendo click sobre ella nos apareceran sus caracteristicas por debajo, buscamos su direccion IP publica y la pegamos en el navegador, tambien podemos hacerlo con el DNS que nos da
      
      ![image](https://user-images.githubusercontent.com/78452543/203655664-c8d37ca4-36ad-4ca4-ae75-8af9ccaa8434.png)

      ![image](https://user-images.githubusercontent.com/78452543/203656785-ca8fb0f7-d1cc-4460-969e-e3dde1776c28.png)
      
      - Pegamos la direccion en el navegador y le agragamos el puerto al que va dirigido 
      
      ![image](https://user-images.githubusercontent.com/78452543/203656924-66d7b969-e0cf-45c6-a752-b659b1656646.png)

      - Como resultado podremos ver el mensaje que muestra en pantalla nuestra aplicacion
      
      
      

      
      
