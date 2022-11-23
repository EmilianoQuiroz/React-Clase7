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
