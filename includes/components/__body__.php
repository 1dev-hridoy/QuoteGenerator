<body class="bg-gray-100 dark:bg-dark-300 min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300">
    <div class="max-w-2xl w-full relative">
        <!-- Theme Toggle -->
        <div class="absolute top-4 right-4 z-10">
            <button id="theme-toggle" class="theme-toggle p-2 rounded-full bg-white dark:bg-dark-100 shadow-md">
                <!-- Sun SVG (shown in dark mode) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-yellow-300 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <!-- Moon SVG (shown in light mode) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-gray-200 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
        </div>
        
        <!-- Main Card -->
        <div class="card relative bg-white dark:bg-dark-100 rounded-xl shadow-custom dark:shadow-custom-dark p-8 md:p-10 overflow-hidden z-0">
            <!-- Decorative blobs -->
            <div class="blob blob-1 float"></div>
            <div class="blob blob-2 float-delay"></div>
            
            <!-- Card shine effect -->
            <div class="card-shine"></div>
            
            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center relative z-10">
                <span class="relative">
                    Quote Generator
                    <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,5 Q50,9 100,5 T200,5" fill="none" stroke="currentColor" stroke-width="2" class="text-primary-500 dark:text-blue-500" />
                    </svg>
                </span>
            </h1>
            
            <!-- SVG Decorations -->
            <div class="absolute top-6 left-6 opacity-10 dark:opacity-5 z-0">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="text-primary-700 dark:text-blue-400" />
                </svg>
            </div>
            
            <div class="absolute bottom-6 right-6 opacity-10 dark:opacity-5 z-0">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="text-primary-700 dark:text-blue-400" />
                </svg>
            </div>
            
            <!-- Quote Container -->
            <div id="quote-container" class="quote-container relative mb-8 p-6 bg-gray-50 dark:bg-dark-200 rounded-lg z-10">
                <span class="quote-mark left-quote text-primary-500 dark:text-blue-500">"</span>
                <p id="quote-text" class="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 text-center">Click the button below to generate your first inspirational quote.</p>
                <p id="quote-author" class="text-right text-gray-500 dark:text-gray-400 font-medium italic">- Your journey begins</p>
                <span class="quote-mark right-quote text-primary-500 dark:text-blue-500">"</span>
                
                <!-- Decorative SVG elements -->
                <svg class="absolute top-2 left-2 w-4 h-4 text-primary-400 dark:text-blue-400 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="3" />
                </svg>
                <svg class="absolute bottom-2 right-2 w-4 h-4 text-primary-400 dark:text-blue-400 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
            
            <!-- Button Container with SVG decoration -->
            <div class="flex justify-center relative z-10">
                <button id="generate-btn" class="group btn-gradient-light dark:btn-gradient-dark text-white font-semibold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-500 focus:ring-offset-2 relative overflow-hidden">
                    <span class="relative z-10 flex items-center">
                        Generate Quote
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>