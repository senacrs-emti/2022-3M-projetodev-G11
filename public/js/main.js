 
  ///////////////////////////////////////////////////////
  
  
  function handleActiveButton() {
  
      let url = window.location.href;
      let mainURL = window.location.origin;
      console.log(url)
      console.log(mainURL)
  
      let str = url.split("localhost:8080/")[1]
  
      if (!str) {
  
        const li = document.getElementById("li1");
        li.classList.add("active");
  
      } else if(str == "cad") {
  
        const li = document.getElementById("li2");
        li.classList.add("active");
  
      }
  
  }
  
  handleActiveButton();