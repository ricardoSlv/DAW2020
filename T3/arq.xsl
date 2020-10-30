<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Arquivo Aqueológico</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
                <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
                    <a class="navbar-brand" href="#">Arquivo Arqueológico</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center mb-0" href="index.html"><ion-icon name="home-outline" class="px-1"></ion-icon>  Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center mb-0" href="index.html"> <ion-icon name="logo-github" class="px-1"></ion-icon> Github <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <span class="navbar-text h5 mb-0">
                            DAW 2020
                        </span>
                    </div>
                </nav>
                
                <h1 class="display-3 my-5 text-center"> 
                    <ion-icon name="bonfire-outline" class="text-warning"></ion-icon> 
                    Registos Aqueológicos em Portugal 
                    <ion-icon name="bonfire-outline" class="text-warning"></ion-icon>
                </h1>
                
                <ol class="list-group container my-5">
                    <xsl:apply-templates select="//ARQELEM" mode="indice"/>
                </ol>
            </body>
        </html>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="ARQELEM" mode="indice">
        <li class="list-group-item list-group-item-action">
            <a name="i{generate-id()}"></a>
            <a href="./registos/{generate-id()}.html">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>

    <xsl:template match="ARQELEM">
        <xsl:result-document href="./registos/{generate-id()}.html">

            <html>
                <head>
                    <title>Registo Arquelógico</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
                    <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
                        <a class="navbar-brand" href="#">Arquivo Arqueológico</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center mb-0" href="./../index.html">
                                        <ion-icon name="home-outline" class="px-1"></ion-icon>  
                                        Home 
                                        <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center mb-0" href="index.html"> <ion-icon name="logo-github" class="px-1"></ion-icon> Github <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                            <span class="navbar-text h5 mb-0">
                                DAW 2020
                            </span>
                        </div>
                    </nav>
                    
                    <section style="display:grid;grid-template-columns: 1fr 2.3fr 1fr; ">
                        <nav style="display:grid;place-items:center;height:100vh;">
                        <xsl:for-each select="preceding-sibling::ARQELEM[1]">
                                <a href="/registos/{generate-id()}.html" style="font-size:7rem;">
                                    <ion-icon name="chevron-back"></ion-icon>
                                </a>
                        </xsl:for-each>
                        </nav>

                        <main>
                            <div class="card m-5">
                                <div class="card-header text-capitalize h5">
                                    <ion-icon name="bulb-outline"></ion-icon>
                                    <xsl:value-of select="TIPO/@ASSUNTO"/>
                                </div>
                                <div class="card-body ">
                                    <h2 class="card-title"><xsl:value-of select="IDENTI"/></h2> 
                                    <p><b>Descrição:</b><xsl:value-of select="DESCRI"/></p>
                                    <p><b>Crono:</b><xsl:value-of select="CRONO"/></p>
                                    <p><b>Lugar:</b><xsl:value-of select="LUGAR"/></p>
                                    <p><b>Freguesia:</b><xsl:value-of select="FREGUE"/></p>
                                    <p><b>Conselho:</b><xsl:value-of select="CONCEL"/></p>
                                    <p><b>Desarq:</b> <xsl:value-of select="DESARQ"/></p>
                                    <p><b>Biblio:</b></p>
                                    <ul>
                                        <xsl:apply-templates select="./BIBLIO">
                                            <xsl:sort select="."></xsl:sort>
                                        </xsl:apply-templates>
                                    </ul>
                                </div>
                                <div class="card-footer bg-transparent text-primary">
                                    <p><b>Autor: </b><xsl:value-of select="AUTOR"/></p>
                                    <p><b>Data: </b><xsl:value-of select="DATA"/></p>
                                </div>
                                <a href="./../index.html#i{generate-id()}" class="text-center h5 d-flex align-items-center justify-content-center">
                                    <ion-icon name="arrow-back-circle-outline" class="h4 mb-0"></ion-icon>
                                    Voltar à Home
                                </a>
                            </div>
                        </main>
                          <nav style="display:grid;place-items:center;height:100vh;">
                        <xsl:for-each select="following-sibling::ARQELEM[1]">
                                <a href="{generate-id()}.html" style="font-size:7rem;">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                </a>
                        </xsl:for-each></nav>
                    </section>
                </body>
            </html>

        </xsl:result-document>
    </xsl:template>

    <xsl:template match="BIBLIO">
        <li>
            <xsl:value-of select="."/>
        </li>
    </xsl:template>

</xsl:stylesheet>