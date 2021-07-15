# Baseball Salary Prediction

The goal of this application is to predict starting pitcher's salary. Every year, general managers must decide whether to resign their team’s free agents or pursue other team’s free agents.  I decided to create an application that could help aid in that decision making.


## Data Cleaning

Data: http://www.seanlahman.com/baseball-archive/statistics/

2 datasets were pulled from this website.  A pitching dataset and a salary dataset.  Both datasets were filtered to 2010-2016.  Then, both datasets were merged on playerID and yearID.  Finally, the dataset was filtered by setting Games Started to over 10.  This dropped all closing and relief pitchers from the dataset.  Since starting pitchers pitch more innings, starters will have way more strikeouts than relievers.  If relievers were left in the data, the model wouldn’t be accurate at all.

## Creating salary Bins

Bins were created to categorize salary ranges.

The bottom 25% of players make between 400,000 - 519,537 for their yearly salary

The Medium category is between 519,538 - 3,547,500

The High category is between 3,547,501 - 9,159,375

The Highest category is between 9,159,376 - 33,000,000

## Random Forest Model
The data was put through a random forest model to determine which statistics contribute to a higher salary.

![image](https://github.com/moormeierz/final-project/blob/main/images/random_forest.PNG?raw=true)

Walks, ERA, Opponent batting average, and Strikeouts were the top statistics.
The data generated by the random forest model was then stored in a SQLite database.

## Logistic Regression Model
Strikeouts, BAOpp, and ERA are the statistics chosen for the logistic regression machine learning model.  The model takes in these statistics and predicts the player's salary range.

![image](https://github.com/moormeierz/final-project/blob/main/images/application.PNG?raw=true)

## Model Accuracy

![image](https://github.com/moormeierz/final-project/blob/main/images/predictions.PNG?raw=true)

There are two major reasons why the model isn't as accurate as it could be.

1) In baseball, teams have control of their players for 6 years once they enter the league.  It takes 6 years for a player to earn a big contract.  A player could be playing at an all-star level but only getting paid 500,000.  

2) Some players earn big contracts and then underperform.  Especially older players that sign multi-year deals.  Older players that sign huge deals usually underperform the last couple years of their contract. 

The data used to train the model is full of these instances.  That’s why the first 10 predictions seem off.

In order for the model to be more accurate, a data set of free agents who just signed a new deal would be needed.  The dataset would also need to contain stats from the previous year.  Since those are the stats that determined the value of the contract.
This would be the ideal dataset to train the model because it eliminates players on their rookie deal and players on expiring contracts.



