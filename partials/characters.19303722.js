const t=document.querySelector(".dropdown-toggle"),e=document.querySelector(".search-form__date-input"),o=document.querySelector(".dropdown-list"),n=document.querySelector(".dropdown-text"),c=document.querySelectorAll(".dropdown-item");t.addEventListener("click",(function(t){t.preventDefault(),o.classList.toggle("show"),c.forEach((t=>{t.textContent==n.textContent&&t.classList.add("active")}))})),document.addEventListener("click",(function(e){const n=e.target;t.contains(n)||o.contains(n)||o.classList.remove("show")})),o.addEventListener("click",(function(t){n.textContent=t.target.textContent,o.classList.remove("show"),c.forEach((t=>{t.classList.remove("active")}))}));const r=new Date,s=r.getFullYear();let a=r.getMonth()+1,d=r.getDate();a=a<10?"0"+a:a,d=d<10?"0"+d:d,e.value=`${s}-${a}-${d}`;
//# sourceMappingURL=characters.19303722.js.map
