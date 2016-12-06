rm(list = ls(all = TRUE))
library(readr)
install.packages("devtools")
require(devtools)
instal_github('rcharts','ramnathv')
library(rcharts)

dataSET <- iris
names(dataSET) <- gsub("\\.","", names(dataSET))
rPlot(SepalLength ~ Sepalwidth | Species,
      data = dataSET, color = 'Species', type = 'point')
iriPlot$save

