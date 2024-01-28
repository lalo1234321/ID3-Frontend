//import Image from 'next/image'
//import styles from './page.module.css'
"use client"
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';







export default function HomePage() {

  return (
    <>
      
        <Container maxWidth="md" sx={{
        
          mt: 6
        }}>
          <Typography variant="h3" sx={{textAlign:'center'}}>¿Qué es un árbol de decisión?</Typography>
          <Typography variant="body1" sx={{textAlign:'justify'}}>
            Un árbol de decisión es un algoritmo de aprendizaje supervisado no paramétrico, que se utiliza tanto para tareas de clasificación como de regresión. Tiene una estructura de árbol jerárquica, que consta de un nodo raíz, ramas, nodos internos y nodos hoja.
          </Typography>
          <Typography variant="h3" sx={{textAlign:'center'}}>Tipos de árboles de decisión</Typography>
          <Typography variant="body1" sx={{textAlign:'justify'}}>El algoritmo de Hunt, que se desarrolló en la década de 1960 para modelar el aprendizaje humano en Psicología, forma la base de muchos algoritmos de árboles de decisión populares, como los siguientes:</Typography>
          <Container maxWidth="xl" sx={{
          border:4,
          borderColor:'#1976d2',
          mt:4
        }}>
        
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" sx={{textAlign:'justify'}}>
              ID3: A Ross Quinlan se le atribuye el desarrollo de ID3, que es la abreviatura de "Iterative Dichotomiser 3". Este algoritmo aprovecha la entropía y la ganancia de información como métricas para evaluar las divisiones de candidatos. Algunas de las investigaciones de Quinlan sobre este algoritmo de 1986 se pueden encontrar aquí (PDF, 1.3 MB) (enlace externo a ibm.com).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{textAlign:'justify'}}>
              <Typography variant="body2" >
              C4.5: Este algoritmo se considera una iteración posterior de ID3, que también fue desarrollado por Quinlan. Puede utilizar la ganancia de información o las proporciones de ganancia para evaluar los puntos de división dentro de los árboles de decisión. 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{textAlign:'justify'}}>
              <Typography variant="body2">
              CART: El término CART es una abreviatura de "árboles de clasificación y regresión" (“classification and regression trees”) y fue introducido por Leo Breiman. Este algoritmo generalmente utiliza la impureza de Gini para identificar el atributo ideal para la división. La impureza de Gini mide la frecuencia con la que se clasifica incorrectamente un atributo elegido al azar. Cuando se evalúa usando la impureza de Gini, un valor más bajo es más ideal. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
        </Container>
        
        {/*<div className="treeContainer">
          <div className="tree">
            {treeRendering(treeData)}
          </div>
      </div>*/}
          
        
    </>
    
  )
}
