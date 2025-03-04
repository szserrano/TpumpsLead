# TpumpsLead

Code for Tpumps Lead Mobile App developed by Sydney Serrano

# Context

Check out the design document link here: https://sjzserrano.atlassian.net/wiki/x/soAB

TLDR: Recently, I became a shift lead at my part-time job. However, my lead shifts are so far apart that there a sometimes memory gaps in my knowledge on how to properly run the shift. I am creating this app in order to have a shift lead "in my pocket" to help me organize tasks, send workers on their breaks, count the register, and handle any inquiries from customers that want to speak with me. This app can also be used to train workers who are becoming new shift leads in the future.

# Why React Native? Why Expo CLI Framework?

This app will utilize React Native primarily so that it will be available to iOS and Android users without having to code in Swift/Kotlin. This saves time and overhead while having the capability of creating iOS/Android-specific functionalities if needed. The Expo CLI Framework allows me to develop and test my iOS app on my personal iPhone without having to purchase a Mac in order to simulate the app on an iPhone emulator while using the React Native Framework.

# Why Firebase?

This app utilizes user authentication, chats between users, and displays metrics of performance in the form of graphed times to count and send cash reports for users. To maintain simplicity, scalability, and the lack of structured data monitored within this app, Firebase seems like the more sensible choice for the database. NoSQL is also utilized by larger tech companies, such as FAANG companies, and more. Utilizing Firebase in this project will provide relevant experience to the technology stacks and work tasks within some of the larger companies mentioned earlier.   
