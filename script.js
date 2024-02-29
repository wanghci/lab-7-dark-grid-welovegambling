document.getElementById("Default").addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove("light-mode", "dark-mode");
  })

  document.getElementById("Dark").addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  })

  document.getElementById("Light").addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  })
  