<template>
  <div class="row">
    <div class="image_touse">  
      <img src="@/assets/siluete.png" alt="Person important">
   </div>
   <div id="home_text" class="text_container">
      <h2>Welcome to Task Tracker</h2><br>
      <p>
        The ultimate tool designed to keep you up-to-date with your daily tasks efficiently and effectively.
        Our app simplifies your day-to-day activities by providing a clear and organized overview of your to-do list.
        Whether you're juggling multiple projects at work, managing household chores, or planning personal goals,
        Task Tracker is here to help.
      </p>
      <p>
        With Task Tracker, you can easily add, modify, and delete tasks.
      </p>
      <p>
        By using Task Tracker, you'll find that managing your daily tasks becomes less stressful and more productive.
        Our goal is to help you free up time by keeping your tasks organized so you can focus more on what truly matters.
        Join the many who have streamlined their daily routine with Task Tracker—start optimizing your time today!
      </p>
    </div>
    </div>
  </template>
  
 
  
  <style scoped>
  .text_container {
  max-width: 1000px; 
  margin: 0 auto; 
  padding: 200px 40px; 
  font-size: 1.2em; 
}

h2 {
  color: #590A4C; 
  font-size: 1.6em;
}

p {
  line-height: 1.6;
  color: #590A4C; 
}

.row {
  display: -webkit-flex;
  display: flex;
}


.image_touse, .text_container {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top: 150px;
  padding: 10px;
  height: 150px; 
 
}



</style>
  