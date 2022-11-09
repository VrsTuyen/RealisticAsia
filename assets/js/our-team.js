const members = [
  {
    name: `Hien Do`,
    position: `Co-Founder & CEO`,
    description: `Hien is the expert in all of the company’s
  tour destinations. She is passionately committed to providing authentic experiences;
  sophisticated recommendations and a high level of personalized services. Now she is calmly in
  charge of strategic planning to maintain the company’s position as the leading tour operator.` ,
    img: `https://realisticasia.com/wp-content/uploads/2022/06/Hien-1.jpg`,
  }, {
    name: `Ha Trinh`,
    position: `Co-Founder and Managing Director`,
    description: `Ha has a huge passion for historical culture, especially for his home country, and is enthusiastic to show travelers its best parts so he co-founds Realistic Asia. He is the mastermind behind our exclusive Ba Vi Eco Tour which supports the local community by providing clients with unique and authentic experiences.`,
    img: `https://realisticasia.com/wp-content/uploads/2021/09/Mr.Ha-Trinh.jpg`,
  }, {
    name: `Irina`,
    position: `Partnership Manager`,
    description: `As a responsible and attention-to-detail person, Irina is managing the good relationship with our business partners and making sure that all agents working with us are in good hands. She was born and raised in Russia yet spends most of her time living in Cambodia, Vietnam, China and even Africa. Cambodia, Vietnam, China and even Africa.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/06/Irina.jpg`,
  }, {
    name: `Alex Nguyen`,
    position: `Sales Manager`,
    description: `Alex is responsible for leading the aggressive development and implementation of short-term sales and tactics with the objective of attracting visitors to Realistic Asia that have an interest in leisure travel.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/06/alex.jpg`,
  }, {
    name: `Tong Cam`,
    position: `Accounting Manager`,
    description: `Cam comes with extensive background in accounting. She is an environment advocate and also a travel enthusiast. Her favorite moment is time spending with her family at the beautiful beach of Nha Trang.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/tcc.jpg`,
  }, {
    name: `Tessa`,
    position: `Travel Consultant`,
    description: `Begin her career in the tourism industry by serving as a tour guide, Tessa is quite passionate about it. After giving birth to her son, she became a travel consultant in the back office with the aim of bringing pleasant experiences to travelers.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/team-3-1.png`,
  }, {
    name: `Lucy Do`,
    position: `Travel Consultant`,
    description: `Fall in love with travel and work in the tourism industry as a fate, Lucy with her enthusiasm is charged with advertising and making travel plans for clients in an effort to increase satisfaction and attract a growing and devoted clientele. She is now acting as a well-qualified travel consultant.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/08/Thiet-ke-chua-co-ten.png`,
  }, {
    name: `Trinh Thuy Van`,
    position: `Tour Operation Manager`,
    description: `Van has the important job of working closely with trusted suppliers of Realistic Asia to ensure that our customer’s experiences are second to none. Her favorite destination is Laos and one of her favorite activities is browsing local markets in search of authentic local cuisine.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/06/Van-1.jpg`,
  }, {
    name: `Emilia`,
    position: `Germany Travel Consultant`,
    description: `Proudly to be your travel expert in Vietnam. With a strong love for travel as well as experiences as a local, I am personally honored to have the opportunity to be your travel companion in Vietnam. Let's plan the most authentic and unforgettable trip of your life together.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/team-6.png`,
  }, {
    name: `Long Pham`,
    position: `French Travel Consultant`,
    description: `As a French Speaking Travel Consultant, he provides the customer with expert advice on routings and destinations, inspiring customers to travel based on his personal travel and experience gained. He always works towards and achieves revenue targets.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/team-1.png`,
  }, {
    name: `Thang Pham`,
    position: `Travel Consultant`,
    description: `With a passion for traveling and working in the tourism industry, he’s always willing to support tourists in creating the best trip that satisfies their expectation and bring the most memorable traveling experiences.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/team-3.png`,
  }, {
    name: `Ashley`,
    position: `Travel Consultant`,
    description: `Ashley has a Bachelor's degree in Tourism and Hospitality Management and worked as a travel consultant after graduation. She believes that travel opens your heart, broadens your mind, and fills your life with stories to tell.`,
    img: `https://realisticasia.com/wp-content/uploads/2022/09/team-5.png`,
  },]


members.forEach(member => {
  let item = `
  <div class="col l-4 m-6 s-12">
  <div class="our-team-body-container-item">
    <img class="our-team-body-container-item-img" src="${member.img}" alt="">
    <h6 class="our-team-body-container-item-name">${member.name}</h6>
    <p class="our-team-body-container-item-position">${member.position}</p>
    <p class="our-team-body-container-item-description">${member.description}
    </p>
  </div>
</div>`
  $('.our-team-body-container .row').insertAdjacentHTML('Beforeend', item)
});