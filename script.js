// Efeito de partículas flutuantes
        function createParticles() {
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamanho aleatório
                const size = Math.random() * 6 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Posição aleatória
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Duração aleatória da animação
                particle.style.animationDuration = (Math.random() * 4 + 2) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(particle);
            }
        }

        // Efeito de clique na imagem de perfil
        document.getElementById('profileImg').addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 600);
        });

        // Efeito de hover suave nos links
        const links = document.querySelectorAll('.link-item');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.03)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Função para atualizar informações do perfil
        function updateProfile(name, bio, imageUrl) {
            document.querySelector('.profile-name').textContent = name;
            document.querySelector('.profile-bio').textContent = bio;
            if (imageUrl) {
                document.getElementById('profileImg').src = imageUrl;
            }
        }

        // Função para adicionar novo link
        function addLink(url, text, icon, color) {
            const linksContainer = document.querySelector('.links-container');
            const newLink = document.createElement('a');
            newLink.href = url;
            newLink.target = '_blank';
            newLink.className = 'link-item';
            newLink.innerHTML = `<i class="${icon}"></i>${text}`;
            newLink.style.background = color;
            newLink.style.boxShadow = `0 8px 20px ${color}40`;
            
            linksContainer.appendChild(newLink);
        }

        // Efeito de scroll suave para dispositivos móveis
        document.addEventListener('touchstart', function() {}, {passive: true});

        // Inicializar partículas
        createParticles();

        // Animação de entrada escalonada para os links
        const linkItems = document.querySelectorAll('.link-item');
        linkItems.forEach((link, index) => {
            link.style.animationDelay = `${0.3 + index * 0.1}s`;
        });

        //Mostrar o email ao clicar no link
        function showMail(e) {
            if (e) e.preventDefault();
            const novaJanela = window.open('', '_blank');
            if (!novaJanela) return;

            const doc = novaJanela.document;
            doc.title = 'Meu E-mail';

            const link = doc.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/index.css';
            doc.head.appendChild(link);

            const h1 = doc.createElement('h1');
            h1.textContent = 'ricarditti@proton.me';
            doc.body.appendChild(h1);
        }

        // Detectar cliques nos links para analytics (exemplo)
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const linkText = this.textContent.trim();
                console.log(`Link clicado: ${linkText}`);
                
                // Aqui você pode adicionar código para analytics
                // gtag('event', 'click', { 'event_category': 'link', 'event_label': linkText });
            });
        });

        // Função para modo escuro (opcional)
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        // Easter egg: Konami Code
        let konamiCode = '';
        const konamiSequence = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';

        document.addEventListener('keydown', function(e) {
            konamiCode += e.code;
            if (konamiCode.length > konamiSequence.length) {
                konamiCode = konamiCode.slice(-konamiSequence.length);
            }
            if (konamiCode === konamiSequence) {
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                konamiCode = '';
            }
        });
