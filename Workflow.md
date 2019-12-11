¡Cómo crear una feature branch! cuando no existe otra rama:

1. Actualizar todos los repositorios remotos.
`git remote update`
2. Ir a la rama master.
`git checkout master`
3. Actualizar master con la rama remota de master.
`git reset --hard upstream/master`
NOTE: Antes de hacer git reset, asegurense de estar en la rama master (`git branch`).
4. Crear nueva rama feature branch  ref [1]
`git checkout -b fs/<nombre de mi rama>`
i.e. 
`git checkout -b fs/login-form`
5. Crear una versión remota del feature branch en el repostorio (del colaborador)
`git push origin <nombre de la rama>`

Referencia:

[1]: https://nvie.com/posts/a-successful-git-branching-model/

Pull request strategy:

1. Actualizar todos los repositorios remotos.
`git remote update`
2. En la feature branch, actualizar el código con upstream/master
`git merge upstream/master`
3. Resolver conflictos en el peor de los casos.
4. Actualizar la feature branch
`git push origin <nombre de la rama>`
i.e.
`git push origin lyasred`
5. En github crear el pull request contra el repositorio principal "upstream/master"
6. Aceptar el pull request, con esta acción el código del feature branch se mesclará con master

Otra forma a nivel gitflow strategy: 

1. Actualizar todos los repositorios remotos.
`git remote update`
2. En la feature branch, actualizar el código con upstream/master
`git merge upstream/master`
3. Resolver conflictos en el peor de los casos.
4. Actualizar la feature branch
`git push origin <nombre de la rama>`
i.e.
`git push origin lyasred`
5. Ir a master 
`git checkout master`
6. Actualizar master con upstream/master
`git reset --hard upstream/master`
NOTE: Antes de hacer git reset, asegurense de estar en la rama master y haber hecho el paso 4.
7. Combinar la feature branch con master
`git merge <nombre de la rama>` 
i.e.
`git merge lyasred`
8. Finalmente actualizar el repositorio principal
`git push upstream master`

