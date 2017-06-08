# le-musicas
Find lyric of your favorite music is a open source project with angular js

Site: www.lemusicas.com.br

<h2>Contributing</h2>
Please feels free to send a pull request with some improvement or fix, i'll review and aprove, togheter we are strong!

## Authors

* **Raphael Souza** - *Initial work* - [raphaelcrv repo](https://github.com/raphaelcrv)

See also the list of [contributors](https://github.com/raphaelcrv/le-musicas/blob/master/contribuited) who participated in this project.

## License

You must give appropriate credit, provide a link to this repo


# how i can  the Run project? 

for generate the distribuition version use the commnad gulp build
Use NPM scripts
<li>
<code>npm run build</code> to build an optimized version of your application in /dist</p>
</li>
<li>
<code>npm run serve</code> to launch a browser sync server on your source files</p>
</li>
<li>
<code>npm run serve:dist</code> to launch a server on your optimized application</p>
</li>
<li>
<code>npm run test</code> to launch your unit tests with Karma</p>
</li>
<li>
<code>npm run test:auto</code> to launch your unit tests with Karma in watch mode</p>

# knowledge
 <b>gulp 4:</b> <code>gulp serve</code> dosen't works fine in this version gulp is depreciated</p>
 <b>gulp temp folder:</b> some cases when delete a file, the folder temp don't update and generating cached files i recomend use <code>gulp clean</code> and next <code>gulp build</code></p>

<b>gulp build:</b> when i rename the folder /app to home some issues happens because the gulp files dont update the new path folder, i fixed in gulp files on commits bellow</br>
<b>fix commits path gulp:</b> <a href="https://bitbucket.org/raphaelcrv/le-musicas/commits/d7c1f6542290e5035acc7901ee36770252b663af"/>commit1</a></br>
<b>fix commits path gulp:</b> <a href="https://bitbucket.org/raphaelcrv/le-musicas/commits/bff8b316b26dc717b3b088b00892cebcc814a57e"/>commit1</a></br></p>
 <b>rendering html elements:</b> i have a problem to rendering html, i need install ng-sanitaze. My var $scope send a html tags and without this module the tags was rendered was text and not element i fixed adding ng-sanitaze <a href="https://bitbucket.org/raphaelcrv/le-musicas/commits/23b95cd936c2ca7609df34bedef790e0740303e6">commit</a>

<b>read the comments in this commit</b> <a href="https://bitbucket.org/raphaelcrv/le-musicas/commits/d9dbec88d59a3c7e28283f7cc9405fc914ad301a">commit</a>

# Todos
- Adicionar instruções para colaboradores
- melhorias no código
- adicionar padrão ES6
- adicionar code covarege
