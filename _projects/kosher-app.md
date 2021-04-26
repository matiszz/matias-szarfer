---
name: Kosher App Spain
short: List of Kosher products that you can find in normal supermarkets in Spain.
tags: react, react-native, ios, android
image: /assets/images/kosher-app.png
---
For a client, we had to present a list of [Kosher](https://en.wikipedia.org/wiki/Kosher_foods) food that can be found in normal supermarkets in Spain. This task seemed pretty easy, and we were a team of two. We had a few challenges here:

## The backend

The client had an Excel file with all the products. Some had the brand, others had only a name. Some of them had tags or *kosher* types and others didn't have anything. Somehow, we had to unify and parse this. Also, we couldn't afford to do changes manually in the app because it's a changing list. In the requirements for the app, the client had specified not to connect it to the internet or other services for security reasons. The solution we came across, was to set up a Django server. Then, we would manually download a JSON file and update it in the app. This is definitely a much better solution since they actually change the list only three or four times a year.

## The app

For the app, we went for the best solution. React Native is a great framework that allowed us to build the whole app in less than a week.



**Download links:** [Play Store](https://play.google.com/store/apps/details?id=com.jabad.kosherappspain) or [App Store](https://apps.apple.com/us/app/kosher-app-spain/id1524664198)