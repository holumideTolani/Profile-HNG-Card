            document.addEventListener("DOMContentLoaded", () => {
                

                const timeSpan = document.querySelector('[data-testid="test-user-time"]');
          
                  function updateTime(){

                 const currentTime = Date.now();
                 timeSpan.textContent = currentTime;
                
            }
            updateTime();
            setInterval(updateTime, 100)

            })
            
            
      