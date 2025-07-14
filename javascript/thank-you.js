let seconds = 10;
        const countdownElement = document.getElementById('countdown');
        
        const timer = setInterval(() => {
            seconds--;
            countdownElement.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(timer);
                window.location.href = "https://rajivparida1.github.io/portfolio/";
            }
        }, 1000);


        function createConfetti() {
            const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = -10 + 'px';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.width = Math.random() * 8 + 5 + 'px';
                confetti.style.height = Math.random() * 8 + 5 + 'px';
                
                document.body.appendChild(confetti);
                
                let animation = confetti.animate([
                    { top: '-10px', opacity: 1 },
                    { top: '100vh', opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    delay: Math.random() * 1000
                });
                
                animation.onfinish = () => confetti.remove();
            }
        }
        
        setTimeout(createConfetti, 300);