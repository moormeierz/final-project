# Baseball Analytics

Data: http://www.seanlahman.com/baseball-archive/statistics/

The goal of this application is to predict starting pitcher's salary.
The first step was to get the data down to 2010-2016 starting pitchers that pitched at least 10 starts in a given year.
This data was put through a random forest machine learning model to determine which statistics impact salary the most.  Strikeouts, Opponent Batting Average, and ERA were the most important statistics.

![image](https://github.com/moormeierz/final-project/blob/main/images/random_forest.PNG?raw=true)

Bins were created to categorize salary ranges.
The bottom 25% of players make between 400,000 - 593,750 for their yearly salary
The Medium category is between 593,751 - 4,250,000
The High category is between 4,250,001 - 10,000,000
The Highest category is between 10,000,001 - 33,000,000

![image](https://github.com/moormeierz/final-project/blob/main/images/bins.PNG?raw=true)

Strikeouts, BAOpp, and ERA are the statistics chosen for the logistic regression machine learning model.  The model takes in these statistics and predicts the player's salary range.

![image](https://github.com/moormeierz/final-project/blob/main/images/application.PNG?raw=true)

