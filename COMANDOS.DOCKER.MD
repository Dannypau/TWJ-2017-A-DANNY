##comandos DOCKER
##mysql
Para utilizar docker con mysql se utiliza el siguiente comando

```
>> docker run --name adrian -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=adrian -e MYSQL_USER=adrian -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```

##docker ps 
Este comando listaba **TODOS** los contenedores que estan instalados
```
>>docker ps -a
```

##docker stop 'id'o nombre
Este comenado **detiene** los o el contenedor que esta **corriendo**

```
>> docker stop 12mMC232udD micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```

##docker rm 'id'o nombre
Este comando **elimina** los o el contenedor que esta **detenido**

```
>> docker rm 12mMC232udD micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi
```