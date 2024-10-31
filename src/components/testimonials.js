import Enrique from "./../images/enrique.jpeg";
import Christine from "./../images/download.jpeg";
import John from "./../images/img2.jpeg";

export const assets = {
  Enrique, Christine, John,
};

const comments = {
    "firstComment":{
      name: "Christine Beckam",
      title: "Student",
      message:
        "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat.",
      image: Christine, 
    },
    "secondComment":{
      name: "John Doe",
      title: "Developer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: John, // Replace with actual image path
    },
    "thirdComment":{
        name: "Enrique Iglasias",
        title: "Partner",
        message:
          "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Enrique, // Replace with actual image path
      },
    // Add more testimonials as needed
};

export default comments;