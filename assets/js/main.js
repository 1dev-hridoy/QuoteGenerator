        // DOM Elements
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const generateBtn = document.getElementById('generate-btn');
        const quoteContainer = document.getElementById('quote-container');
        const themeToggle = document.getElementById('theme-toggle');
        const loadingSpinner = document.getElementById('loading-spinner');
        const apiStatus = document.getElementById('api-status');
        const apiMode = document.getElementById('api-mode');
        
        // Fallback quotes for when API is unavailable
        const fallbackQuotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
            { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
            { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
            { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
            { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
            { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
            { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
            { text: "The mind is everything. What you think you become.", author: "Buddha" },
            { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
            { text: "The best revenge is massive success.", author: "Frank Sinatra" }
        ];
        
        // API state
        let isApiOnline = false;
        
        // Check for saved theme preference or use system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Theme toggle functionality
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            // Save preference
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // Get a random quote from fallback quotes
        function getRandomFallbackQuote() {
            return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        }

        // Fetch quote from PHP proxy
        async function fetchQuote() {
            try {
                // Show loading spinner
                loadingSpinner.classList.remove('hidden');
                
                // Fetch from our PHP proxy
                const response = await fetch('proxy.php');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Check if we got valid data
                if (data && data.length > 0 && data[0].q && data[0].a) {
                    // Update API status indicator
                    isApiOnline = true;
                    apiStatus.classList.remove('offline');
                    apiStatus.classList.add('online');
                    apiMode.textContent = 'Using ZenQuotes API';
                    apiMode.classList.remove('bg-gray-100', 'dark:bg-dark-200');
                    apiMode.classList.add('bg-green-100', 'dark:bg-green-900/20', 'text-green-800', 'dark:text-green-400');
                    
                    return {
                        text: data[0].q,
                        author: data[0].a
                    };
                } else if (data && data.success === false) {
                    // The PHP proxy returned an error
                    throw new Error(data.error || 'Error from PHP proxy');
                } else {
                    throw new Error('Invalid data format from API');
                }
            } catch (error) {
                console.error('Error fetching quote:', error);
                
                // Update API status indicator
                isApiOnline = false;
                apiStatus.classList.remove('online');
                apiStatus.classList.add('offline');
                apiMode.textContent = 'Using local quotes';
                apiMode.classList.remove('bg-green-100', 'dark:bg-green-900/20', 'text-green-800', 'dark:text-green-400');
                apiMode.classList.add('bg-gray-100', 'dark:bg-dark-200');
                
                // Return a fallback quote
                return getRandomFallbackQuote();
            } finally {
                // Hide loading spinner
                loadingSpinner.classList.add('hidden');
            }
        }

        async function displayQuote() {
            // Add fade out effect
            quoteContainer.classList.add('fade');
            
            // Fetch a new quote
            const quote = await fetchQuote();
            
            setTimeout(() => {
                if (quote) {
                    quoteText.textContent = quote.text;
                    quoteAuthor.textContent = `- ${quote.author}`;
                }
                
                // Remove fade out effect
                quoteContainer.classList.remove('fade');
            }, 500);
        }

        generateBtn.addEventListener('click', displayQuote);
        
        // Mouse move effect for card
        const card = document.querySelector('.card');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
        
        // Check API status on load
        (async function checkApiStatus() {
            try {
                await fetchQuote();
            } catch (error) {
                console.error('Initial API check failed:', error);
            }
        })();