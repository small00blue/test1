#
# This is the server logic of a Shiny web application. You can run the 
# application by clicking 'Run App' above.
#
# Find out more about building applications with Shiny here:
# 
#    http://shiny.rstudio.com/
#

library(shiny)
library(leaflet)
source("source.R")

# Define server logic required to draw a histogram
shinyServer(function(input, output) {
   
  output$distPlot <- renderPlot({
    
    # generate bins based on input$bins from ui.R
    x    <- faithful[, 2] 
    bins <- seq(min(x), max(x), length.out = input$bins + 1)
    
    # draw the histogram with the specified number of bins
    hist(x, breaks = bins, col = 'darkgray', border = 'white')
    
  })
  
  output$meanAndvar <- renderPlot({
    getmean = input$mean
    getvar  = input$var
    getnum  = input$bins
    samples = rnorm(getnum, getmean, getvar^0.5)
    plot(samples)
  
  })
  output$showtable <- renderTable({
    showtableid = which(getData$tag == input$mapcheck)
    print(getData[showtableid,])
  })
  
  output$Showmap <- renderLeaflet({
    showtableid = which(getData$tag == input$mapcheck)
    
    lng = getData$Response_X[showtableid]
    lat = getData$Response_Y[showtableid]
    
    markers <- leaflet() %>% 
               addTiles() %>%
               setView(getData$Response_X[1], getData$Response_Y[1], zoom = 13) %>%
               addMarkers(lng, lat)  
    markers
 
  })
})
