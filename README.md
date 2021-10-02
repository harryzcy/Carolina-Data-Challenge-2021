# 2021 CDC Project Submission

## Inspiration

Universal health insurance coverage is important. Health Insurance provides people financial protection against high health expenses and enhances access to health services. However, in today's America, there is still a significantly high percentage of the uninsured population. In our project, we analyze the dataset of the uninsured population by state in order to better understand this issue and its related factors, hoping to give policymakers insights into improving health insurance conditions.

## What it does

For the 2021 Carolina Data Challenge, we conduct an analysis on the dataset of the uninsured population in the United States in 2019. Our main goal is to explore the relationship between different factors, such as income level, education and age, and the percentage of the uninsured population across the United States. We build a multiple linear regression model reflecting the relationship between all groups of factors and the percentage of the uninsured population.

## How we built it

Using python, we determined the linear regression model between the percentage uninsured in the United States and seven different groups of factors: _ Income _, _ Age _, _ Gender _, _ Ethnicity _, _ Employment _, _ Employment by Industry _, _ Education Level _, _ Spoken Language _. We then used Echart to visualize our data. Finally, we determined the multiple linear regression equation which illustrated the relationship between groups of factors and the percentage of the uninsured population. 

## Challenges we ran into

We faced significant challenges for data visualization because there were too many independent variables influencing the percentage of uninsured. If we used a single diagram to present the linear regression model, the diagram would be awkward to interpret. 
**How we solved this problem**
We plotted different diagrams for each individual group by Echart. 

## Accomplishments that we're proud of

We are very proud of the multiple linear regression equation because it shows the linear relationship between 38 independent variables and the percentage uninsured. The 38 independent variables contain all factors in the CDC dataset except colinear variables. 

Link to our presentation slides: [https://docs.google.com/presentation/d/1UGoccMLhMR6QR6BlZeMGcsZVHC3ldw3yvLXmkFvreVs/edit?usp=sharing](https://docs.google.com/presentation/d/1UGoccMLhMR6QR6BlZeMGcsZVHC3ldw3yvLXmkFvreVs/edit?usp=sharing)

Link to our website: [https://harryzcy.github.io/Carolina-Data-Challenge-2021/](https://harryzcy.github.io/Carolina-Data-Challenge-2021/)
